[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Applicative-Backwards.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMaking functors with an \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e instance that performs actions\n in the reverse order.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Applicative.Backwards",
        "fct-package": "transformers",
        "fct-signature": "module",
        "fct-source": "src/Control-Applicative-Backwards.html",
        "fct-type": "module",
        "title": "Backwards"
      },
      "index": {
        "description": "Making functors with an Applicative instance that performs actions in the reverse order",
        "hierarchy": "Control Applicative Backwards",
        "module": "Control.Applicative.Backwards",
        "name": "Backwards",
        "normalized": "",
        "package": "transformers",
        "partial": "Backwards",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Applicative-Backwards.html#t:Backwards",
      "description": {
        "fct-descr": "\u003cp\u003eThe same functor, but with an \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e instance that performs\n actions in the reverse order.\n\u003c/p\u003e",
        "fct-module": "Control.Applicative.Backwards",
        "fct-package": "transformers",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Applicative-Backwards.html#Backwards",
        "fct-type": "newtype",
        "title": "Backwards"
      },
      "index": {
        "description": "The same functor but with an Applicative instance that performs actions in the reverse order",
        "hierarchy": "Control Applicative Backwards",
        "module": "Control.Applicative.Backwards",
        "name": "Backwards",
        "normalized": "",
        "package": "transformers",
        "partial": "Backwards",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Applicative-Backwards.html#v:Backwards",
      "description": {
        "fct-module": "Control.Applicative.Backwards",
        "fct-package": "transformers",
        "fct-signature": "Backwards",
        "fct-source": "src/Control-Applicative-Backwards.html#Backwards",
        "fct-type": "function",
        "title": "Backwards"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Applicative Backwards",
        "module": "Control.Applicative.Backwards",
        "name": "Backwards",
        "normalized": "",
        "package": "transformers",
        "partial": "Backwards",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Applicative-Backwards.html#v:forwards",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Applicative.Backwards",
        "fct-package": "transformers",
        "fct-signature": "f a",
        "fct-source": "src/Control-Applicative-Backwards.html#Backwards",
        "fct-type": "function",
        "title": "forwards"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Applicative Backwards",
        "module": "Control.Applicative.Backwards",
        "name": "forwards",
        "normalized": "",
        "package": "transformers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Applicative-Lift.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAdding a new kind of pure computation to an applicative functor.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Applicative.Lift",
        "fct-package": "transformers",
        "fct-signature": "module",
        "fct-source": "src/Control-Applicative-Lift.html",
        "fct-type": "module",
        "title": "Lift"
      },
      "index": {
        "description": "Adding new kind of pure computation to an applicative functor",
        "hierarchy": "Control Applicative Lift",
        "module": "Control.Applicative.Lift",
        "name": "Lift",
        "normalized": "",
        "package": "transformers",
        "partial": "Lift",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Applicative-Lift.html#t:Errors",
      "description": {
        "fct-descr": "\u003cp\u003eAn applicative functor that collects a monoid (e.g. lists) of errors.\n A sequence of computations fails if any of its components do, but\n unlike monads made with \u003ccode\u003eErrorT\u003c/code\u003e from \u003ca\u003eControl.Monad.Trans.Error\u003c/a\u003e,\n these computations continue after an error, collecting all the errors.\n\u003c/p\u003e",
        "fct-module": "Control.Applicative.Lift",
        "fct-package": "transformers",
        "fct-signature": "type",
        "fct-source": "src/Control-Applicative-Lift.html#Errors",
        "fct-type": "type",
        "title": "Errors"
      },
      "index": {
        "description": "An applicative functor that collects monoid e.g lists of errors sequence of computations fails if any of its components do but unlike monads made with ErrorT from Control.Monad.Trans.Error these computations continue after an error collecting all the errors",
        "hierarchy": "Control Applicative Lift",
        "module": "Control.Applicative.Lift",
        "name": "Errors",
        "normalized": "",
        "package": "transformers",
        "partial": "Errors",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Applicative-Lift.html#t:Lift",
      "description": {
        "fct-descr": "\u003cp\u003eApplicative functor formed by adding pure computations to a given\n applicative functor.\n\u003c/p\u003e",
        "fct-module": "Control.Applicative.Lift",
        "fct-package": "transformers",
        "fct-signature": "data",
        "fct-source": "src/Control-Applicative-Lift.html#Lift",
        "fct-type": "data",
        "title": "Lift"
      },
      "index": {
        "description": "Applicative functor formed by adding pure computations to given applicative functor",
        "hierarchy": "Control Applicative Lift",
        "module": "Control.Applicative.Lift",
        "name": "Lift",
        "normalized": "",
        "package": "transformers",
        "partial": "Lift",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Applicative-Lift.html#v:Other",
      "description": {
        "fct-module": "Control.Applicative.Lift",
        "fct-package": "transformers",
        "fct-signature": "Other (f a)",
        "fct-source": "src/Control-Applicative-Lift.html#Lift",
        "fct-type": "function",
        "title": "Other"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Applicative Lift",
        "module": "Control.Applicative.Lift",
        "name": "Other",
        "normalized": "",
        "package": "transformers",
        "partial": "Other",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Applicative-Lift.html#v:Pure",
      "description": {
        "fct-module": "Control.Applicative.Lift",
        "fct-package": "transformers",
        "fct-signature": "Pure a",
        "fct-source": "src/Control-Applicative-Lift.html#Lift",
        "fct-type": "function",
        "title": "Pure"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Applicative Lift",
        "module": "Control.Applicative.Lift",
        "name": "Pure",
        "normalized": "",
        "package": "transformers",
        "partial": "Pure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Applicative-Lift.html#v:failure",
      "description": {
        "fct-descr": "\u003cp\u003eReport an error.\n\u003c/p\u003e",
        "fct-module": "Control.Applicative.Lift",
        "fct-package": "transformers",
        "fct-signature": "e -\u003e Errors e a",
        "fct-source": "src/Control-Applicative-Lift.html#failure",
        "fct-type": "function",
        "title": "failure"
      },
      "index": {
        "description": "Report an error",
        "hierarchy": "Control Applicative Lift",
        "module": "Control.Applicative.Lift",
        "name": "failure",
        "normalized": "a-\u003eErrors a b",
        "package": "transformers",
        "partial": "",
        "signature": "e-\u003eErrors e a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Applicative-Lift.html#v:unLift",
      "description": {
        "fct-descr": "\u003cp\u003eProjection to the other functor.\n\u003c/p\u003e",
        "fct-module": "Control.Applicative.Lift",
        "fct-package": "transformers",
        "fct-signature": "Lift f a -\u003e f a",
        "fct-source": "src/Control-Applicative-Lift.html#unLift",
        "fct-type": "function",
        "title": "unLift"
      },
      "index": {
        "description": "Projection to the other functor",
        "hierarchy": "Control Applicative Lift",
        "module": "Control.Applicative.Lift",
        "name": "unLift",
        "normalized": "Lift a b-\u003ea b",
        "package": "transformers",
        "partial": "Lift",
        "signature": "Lift f a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-IO-Class.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eClass of monads based on \u003ccode\u003eIO\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.IO.Class",
        "fct-package": "transformers",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-IO-Class.html",
        "fct-type": "module",
        "title": "Class"
      },
      "index": {
        "description": "Class of monads based on IO",
        "hierarchy": "Control Monad IO Class",
        "module": "Control.Monad.IO.Class",
        "name": "Class",
        "normalized": "",
        "package": "transformers",
        "partial": "Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-IO-Class.html#t:MonadIO",
      "description": {
        "fct-descr": "\u003cp\u003eMonads in which \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e computations may be embedded.\n Any monad built by applying a sequence of monad transformers to the\n \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad will be an instance of this class.\n\u003c/p\u003e\u003cp\u003eInstances should satisfy the following laws, which state that \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e\n is a transformer of monads:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e (m \u003e\u003e= f) = \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e m \u003e\u003e= (\u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e . f)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.IO.Class",
        "fct-package": "transformers",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-IO-Class.html#MonadIO",
        "fct-type": "class",
        "title": "MonadIO"
      },
      "index": {
        "description": "Monads in which IO computations may be embedded Any monad built by applying sequence of monad transformers to the IO monad will be an instance of this class Instances should satisfy the following laws which state that liftIO is transformer of monads liftIO return return liftIO liftIO liftIO",
        "hierarchy": "Control Monad IO Class",
        "module": "Control.Monad.IO.Class",
        "name": "MonadIO",
        "normalized": "",
        "package": "transformers",
        "partial": "Monad IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-IO-Class.html#v:liftIO",
      "description": {
        "fct-descr": "\u003cp\u003eLift a computation from the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.IO.Class",
        "fct-package": "transformers",
        "fct-signature": "IO a -\u003e m a",
        "fct-source": "src/Control-Monad-IO-Class.html#liftIO",
        "fct-type": "method",
        "title": "liftIO"
      },
      "index": {
        "description": "Lift computation from the IO monad",
        "hierarchy": "Control Monad IO Class",
        "module": "Control.Monad.IO.Class",
        "name": "liftIO",
        "normalized": "IO a-\u003eb a",
        "package": "transformers",
        "partial": "IO",
        "signature": "IO a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Class.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eClasses for monad transformers.\n\u003c/p\u003e\u003cp\u003eA monad transformer makes a new monad out of an existing monad, such\n that computations of the old monad may be embedded in the new one.\n To construct a monad with a desired set of features, one typically\n starts with a base monad, such as \u003ccode\u003eIdentity\u003c/code\u003e, \u003ccode\u003e[]\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e, and\n applies a sequence of monad transformers.\n\u003c/p\u003e\u003cp\u003eMost monad transformer modules include the special case of applying the\n transformer to \u003ccode\u003eIdentity\u003c/code\u003e.  For example, \u003ccode\u003eState s\u003c/code\u003e is an abbreviation\n for \u003ccode\u003eStateT s Identity\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eEach monad transformer also comes with an operation \u003ccode\u003erun\u003c/code\u003e\u003cem\u003eXXX\u003c/em\u003e to\n unwrap the transformer, exposing a computation of the inner monad.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Trans.Class",
        "fct-package": "transformers",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Trans-Class.html",
        "fct-type": "module",
        "title": "Class"
      },
      "index": {
        "description": "Classes for monad transformers monad transformer makes new monad out of an existing monad such that computations of the old monad may be embedded in the new one To construct monad with desired set of features one typically starts with base monad such as Identity or IO and applies sequence of monad transformers Most monad transformer modules include the special case of applying the transformer to Identity For example State is an abbreviation for StateT Identity Each monad transformer also comes with an operation run XXX to unwrap the transformer exposing computation of the inner monad",
        "hierarchy": "Control Monad Trans Class",
        "module": "Control.Monad.Trans.Class",
        "name": "Class",
        "normalized": "",
        "package": "transformers",
        "partial": "Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Class.html#t:MonadTrans",
      "description": {
        "fct-descr": "\u003cp\u003eThe class of monad transformers.  Instances should satisfy the\n following laws, which state that \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e is a transformer of monads:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e (m \u003e\u003e= f) = \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e m \u003e\u003e= (\u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e . f)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.Class",
        "fct-package": "transformers",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Trans-Class.html#MonadTrans",
        "fct-type": "class",
        "title": "MonadTrans"
      },
      "index": {
        "description": "The class of monad transformers Instances should satisfy the following laws which state that lift is transformer of monads lift return return lift lift lift",
        "hierarchy": "Control Monad Trans Class",
        "module": "Control.Monad.Trans.Class",
        "name": "MonadTrans",
        "normalized": "",
        "package": "transformers",
        "partial": "Monad Trans",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Class.html#v:lift",
      "description": {
        "fct-descr": "\u003cp\u003eLift a computation from the argument monad to the constructed monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Class",
        "fct-package": "transformers",
        "fct-signature": "m a -\u003e t m a",
        "fct-source": "src/Control-Monad-Trans-Class.html#lift",
        "fct-type": "method",
        "title": "lift"
      },
      "index": {
        "description": "Lift computation from the argument monad to the constructed monad",
        "hierarchy": "Control Monad Trans Class",
        "module": "Control.Monad.Trans.Class",
        "name": "lift",
        "normalized": "a b-\u003ec a b",
        "package": "transformers",
        "partial": "",
        "signature": "m a-\u003et m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Cont.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eContinuation monads.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Trans.Cont",
        "fct-package": "transformers",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Trans-Cont.html",
        "fct-type": "module",
        "title": "Cont"
      },
      "index": {
        "description": "Continuation monads",
        "hierarchy": "Control Monad Trans Cont",
        "module": "Control.Monad.Trans.Cont",
        "name": "Cont",
        "normalized": "",
        "package": "transformers",
        "partial": "Cont",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Cont.html#t:Cont",
      "description": {
        "fct-descr": "\u003cp\u003eContinuation monad.\n\u003ccode\u003eCont r a\u003c/code\u003e is a CPS computation that produces an intermediate result\nof type \u003ccode\u003ea\u003c/code\u003e within a CPS computation whose final result type is \u003ccode\u003er\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003ereturn\u003c/code\u003e function simply creates a continuation which passes the value on.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003e\u003e=\u003c/code\u003e operator adds the bound function into the continuation chain.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Cont",
        "fct-package": "transformers",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Trans-Cont.html#Cont",
        "fct-type": "type",
        "title": "Cont"
      },
      "index": {
        "description": "Continuation monad Cont is CPS computation that produces an intermediate result of type within CPS computation whose final result type is The return function simply creates continuation which passes the value on The operator adds the bound function into the continuation chain",
        "hierarchy": "Control Monad Trans Cont",
        "module": "Control.Monad.Trans.Cont",
        "name": "Cont",
        "normalized": "",
        "package": "transformers",
        "partial": "Cont",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Cont.html#t:ContT",
      "description": {
        "fct-descr": "\u003cp\u003eThe continuation monad transformer.\nCan be used to add continuation handling to other monads.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Cont",
        "fct-package": "transformers",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Trans-Cont.html#ContT",
        "fct-type": "newtype",
        "title": "ContT"
      },
      "index": {
        "description": "The continuation monad transformer Can be used to add continuation handling to other monads",
        "hierarchy": "Control Monad Trans Cont",
        "module": "Control.Monad.Trans.Cont",
        "name": "ContT",
        "normalized": "",
        "package": "transformers",
        "partial": "Cont",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Cont.html#v:ContT",
      "description": {
        "fct-module": "Control.Monad.Trans.Cont",
        "fct-package": "transformers",
        "fct-signature": "ContT",
        "fct-source": "src/Control-Monad-Trans-Cont.html#ContT",
        "fct-type": "function",
        "title": "ContT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Cont",
        "module": "Control.Monad.Trans.Cont",
        "name": "ContT",
        "normalized": "",
        "package": "transformers",
        "partial": "Cont",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Cont.html#v:callCC",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ecallCC\u003c/code\u003e (call-with-current-continuation) calls its argument\n function, passing it the current continuation.  It provides\n an escape continuation mechanism for use with continuation\n monads.  Escape continuations one allow to abort the current\n computation and return a value immediately.  They achieve a\n similar effect to \u003ccode\u003e\u003ca\u003ethrowError\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003ecatchError\u003c/a\u003e\u003c/code\u003e within an\n \u003ccode\u003e\u003ca\u003eErrorT\u003c/a\u003e\u003c/code\u003e monad.  The advantage of this\n function over calling \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e is that it makes the continuation\n explicit, allowing more flexibility and better control.\n\u003c/p\u003e\u003cp\u003eThe standard idiom used with \u003ccode\u003ecallCC\u003c/code\u003e is to provide a lambda-expression\n to name the continuation. Then calling the named continuation anywhere\n within its scope will escape from the computation, even if it is many\n layers deep within nested computations.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Cont",
        "fct-package": "transformers",
        "fct-signature": "((a -\u003e ContT r m b) -\u003e ContT r m a) -\u003e ContT r m a",
        "fct-source": "src/Control-Monad-Trans-Cont.html#callCC",
        "fct-type": "function",
        "title": "callCC"
      },
      "index": {
        "description": "callCC call-with-current-continuation calls its argument function passing it the current continuation It provides an escape continuation mechanism for use with continuation monads Escape continuations one allow to abort the current computation and return value immediately They achieve similar effect to throwError and catchError within an ErrorT monad The advantage of this function over calling return is that it makes the continuation explicit allowing more flexibility and better control The standard idiom used with callCC is to provide lambda-expression to name the continuation Then calling the named continuation anywhere within its scope will escape from the computation even if it is many layers deep within nested computations",
        "hierarchy": "Control Monad Trans Cont",
        "module": "Control.Monad.Trans.Cont",
        "name": "callCC",
        "normalized": "((a-\u003eContT b c d)-\u003eContT b c a)-\u003eContT b c a",
        "package": "transformers",
        "partial": "CC",
        "signature": "((a-\u003eContT r m b)-\u003eContT r m a)-\u003eContT r m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Cont.html#v:cont",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a continuation-passing computation from a function.\n (The inverse of \u003ccode\u003e\u003ca\u003erunCont\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Cont",
        "fct-package": "transformers",
        "fct-signature": "((a -\u003e r) -\u003e r) -\u003e Cont r a",
        "fct-source": "src/Control-Monad-Trans-Cont.html#cont",
        "fct-type": "function",
        "title": "cont"
      },
      "index": {
        "description": "Construct continuation-passing computation from function The inverse of runCont",
        "hierarchy": "Control Monad Trans Cont",
        "module": "Control.Monad.Trans.Cont",
        "name": "cont",
        "normalized": "((a-\u003eb)-\u003eb)-\u003eCont b a",
        "package": "transformers",
        "partial": "",
        "signature": "((a-\u003er)-\u003er)-\u003eCont r a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Cont.html#v:liftLocal",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eliftLocal\u003c/a\u003e\u003c/code\u003e ask local\u003c/code\u003e yields a \u003ccode\u003elocal\u003c/code\u003e function for \u003ccode\u003e\u003ccode\u003e\u003ca\u003eContT\u003c/a\u003e\u003c/code\u003e r m\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Cont",
        "fct-package": "transformers",
        "fct-signature": "m r' -\u003e ((r' -\u003e r') -\u003e m r -\u003e m r) -\u003e (r' -\u003e r') -\u003e ContT r m a -\u003e ContT r m a",
        "fct-source": "src/Control-Monad-Trans-Cont.html#liftLocal",
        "fct-type": "function",
        "title": "liftLocal"
      },
      "index": {
        "description": "liftLocal ask local yields local function for ContT",
        "hierarchy": "Control Monad Trans Cont",
        "module": "Control.Monad.Trans.Cont",
        "name": "liftLocal",
        "normalized": "a b-\u003e((b-\u003eb)-\u003ea c-\u003ea c)-\u003e(b-\u003eb)-\u003eContT c a d-\u003eContT c a d",
        "package": "transformers",
        "partial": "Local",
        "signature": "m r'-\u003e((r'-\u003er')-\u003em r-\u003em r)-\u003e(r'-\u003er')-\u003eContT r m a-\u003eContT r m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Cont.html#v:mapCont",
      "description": {
        "fct-descr": "\u003cp\u003eApply a function to transform the result of a continuation-passing\n computation.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunCont\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emapCont\u003c/a\u003e\u003c/code\u003e f m) = f . \u003ccode\u003e\u003ca\u003erunCont\u003c/a\u003e\u003c/code\u003e m\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.Cont",
        "fct-package": "transformers",
        "fct-signature": "(r -\u003e r) -\u003e Cont r a -\u003e Cont r a",
        "fct-source": "src/Control-Monad-Trans-Cont.html#mapCont",
        "fct-type": "function",
        "title": "mapCont"
      },
      "index": {
        "description": "Apply function to transform the result of continuation-passing computation runCont mapCont runCont",
        "hierarchy": "Control Monad Trans Cont",
        "module": "Control.Monad.Trans.Cont",
        "name": "mapCont",
        "normalized": "(a-\u003ea)-\u003eCont a b-\u003eCont a b",
        "package": "transformers",
        "partial": "Cont",
        "signature": "(r-\u003er)-\u003eCont r a-\u003eCont r a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Cont.html#v:mapContT",
      "description": {
        "fct-descr": "\u003cp\u003eApply a function to transform the result of a continuation-passing\n computation.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunContT\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emapContT\u003c/a\u003e\u003c/code\u003e f m) = f . \u003ccode\u003e\u003ca\u003erunContT\u003c/a\u003e\u003c/code\u003e m\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.Cont",
        "fct-package": "transformers",
        "fct-signature": "(m r -\u003e m r) -\u003e ContT r m a -\u003e ContT r m a",
        "fct-source": "src/Control-Monad-Trans-Cont.html#mapContT",
        "fct-type": "function",
        "title": "mapContT"
      },
      "index": {
        "description": "Apply function to transform the result of continuation-passing computation runContT mapContT runContT",
        "hierarchy": "Control Monad Trans Cont",
        "module": "Control.Monad.Trans.Cont",
        "name": "mapContT",
        "normalized": "(a b-\u003ea b)-\u003eContT b a c-\u003eContT b a c",
        "package": "transformers",
        "partial": "Cont",
        "signature": "(m r-\u003em r)-\u003eContT r m a-\u003eContT r m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Cont.html#v:runCont",
      "description": {
        "fct-descr": "\u003cp\u003eRuns a CPS computation, returns its result after applying the final\n continuation to it.\n (The inverse of \u003ccode\u003e\u003ca\u003econt\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Cont",
        "fct-package": "transformers",
        "fct-signature": "Cont r a-\u003e (a -\u003e r)-\u003e r",
        "fct-type": "function",
        "title": "runCont"
      },
      "index": {
        "description": "Runs CPS computation returns its result after applying the final continuation to it The inverse of cont",
        "hierarchy": "Control Monad Trans Cont",
        "module": "Control.Monad.Trans.Cont",
        "name": "runCont",
        "normalized": "Cont a b-\u003e(b-\u003ea)-\u003ea",
        "package": "transformers",
        "partial": "Cont",
        "signature": "Cont r a-\u003e(a-\u003er)-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Cont.html#v:runContT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Trans.Cont",
        "fct-package": "transformers",
        "fct-signature": "(a -\u003e m r) -\u003e m r",
        "fct-source": "src/Control-Monad-Trans-Cont.html#ContT",
        "fct-type": "function",
        "title": "runContT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Cont",
        "module": "Control.Monad.Trans.Cont",
        "name": "runContT",
        "normalized": "(a-\u003eb c)-\u003eb c",
        "package": "transformers",
        "partial": "Cont",
        "signature": "(a-\u003em r)-\u003em r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Cont.html#v:withCont",
      "description": {
        "fct-descr": "\u003cp\u003eApply a function to transform the continuation passed to a CPS\n computation.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunCont\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ewithCont\u003c/a\u003e\u003c/code\u003e f m) = \u003ccode\u003e\u003ca\u003erunCont\u003c/a\u003e\u003c/code\u003e m . f\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.Cont",
        "fct-package": "transformers",
        "fct-signature": "((b -\u003e r) -\u003e a -\u003e r) -\u003e Cont r a -\u003e Cont r b",
        "fct-source": "src/Control-Monad-Trans-Cont.html#withCont",
        "fct-type": "function",
        "title": "withCont"
      },
      "index": {
        "description": "Apply function to transform the continuation passed to CPS computation runCont withCont runCont",
        "hierarchy": "Control Monad Trans Cont",
        "module": "Control.Monad.Trans.Cont",
        "name": "withCont",
        "normalized": "((a-\u003eb)-\u003ec-\u003eb)-\u003eCont b c-\u003eCont b a",
        "package": "transformers",
        "partial": "Cont",
        "signature": "((b-\u003er)-\u003ea-\u003er)-\u003eCont r a-\u003eCont r b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Cont.html#v:withContT",
      "description": {
        "fct-descr": "\u003cp\u003eApply a function to transform the continuation passed to a CPS\n computation.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunContT\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ewithContT\u003c/a\u003e\u003c/code\u003e f m) = \u003ccode\u003e\u003ca\u003erunContT\u003c/a\u003e\u003c/code\u003e m . f\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.Cont",
        "fct-package": "transformers",
        "fct-signature": "((b -\u003e m r) -\u003e a -\u003e m r) -\u003e ContT r m a -\u003e ContT r m b",
        "fct-source": "src/Control-Monad-Trans-Cont.html#withContT",
        "fct-type": "function",
        "title": "withContT"
      },
      "index": {
        "description": "Apply function to transform the continuation passed to CPS computation runContT withContT runContT",
        "hierarchy": "Control Monad Trans Cont",
        "module": "Control.Monad.Trans.Cont",
        "name": "withContT",
        "normalized": "((a-\u003eb c)-\u003ed-\u003eb c)-\u003eContT c b d-\u003eContT c b a",
        "package": "transformers",
        "partial": "Cont",
        "signature": "((b-\u003em r)-\u003ea-\u003em r)-\u003eContT r m a-\u003eContT r m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Error.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis monad transformer adds the ability to fail or throw exceptions\n to a monad.\n\u003c/p\u003e\u003cp\u003eA sequence of actions succeeds, producing a value, only if all the\n actions in the sequence are successful.  If one fails with an error,\n the rest of the sequence is skipped and the composite action fails\n with that error.\n\u003c/p\u003e\u003cp\u003eIf the value of the error is not required, the variant in\n \u003ca\u003eControl.Monad.Trans.Maybe\u003c/a\u003e may be used instead.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Trans.Error",
        "fct-package": "transformers",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Trans-Error.html",
        "fct-type": "module",
        "title": "Error"
      },
      "index": {
        "description": "This monad transformer adds the ability to fail or throw exceptions to monad sequence of actions succeeds producing value only if all the actions in the sequence are successful If one fails with an error the rest of the sequence is skipped and the composite action fails with that error If the value of the error is not required the variant in Control.Monad.Trans.Maybe may be used instead",
        "hierarchy": "Control Monad Trans Error",
        "module": "Control.Monad.Trans.Error",
        "name": "Error",
        "normalized": "",
        "package": "transformers",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Error.html#t:Error",
      "description": {
        "fct-descr": "\u003cp\u003eAn exception to be thrown.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003enoMsg\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003estrMsg\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Error",
        "fct-package": "transformers",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Trans-Error.html#Error",
        "fct-type": "class",
        "title": "Error"
      },
      "index": {
        "description": "An exception to be thrown Minimal complete definition noMsg or strMsg",
        "hierarchy": "Control Monad Trans Error",
        "module": "Control.Monad.Trans.Error",
        "name": "Error",
        "normalized": "",
        "package": "transformers",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Error.html#t:ErrorList",
      "description": {
        "fct-descr": "\u003cp\u003eWorkaround so that we can have a Haskell 98 instance \u003ccode\u003e\u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Error",
        "fct-package": "transformers",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Trans-Error.html#ErrorList",
        "fct-type": "class",
        "title": "ErrorList"
      },
      "index": {
        "description": "Workaround so that we can have Haskell instance Error String",
        "hierarchy": "Control Monad Trans Error",
        "module": "Control.Monad.Trans.Error",
        "name": "ErrorList",
        "normalized": "",
        "package": "transformers",
        "partial": "Error List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Error.html#t:ErrorT",
      "description": {
        "fct-descr": "\u003cp\u003eThe error monad transformer. It can be used to add error handling\n to other monads.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eErrorT\u003c/code\u003e Monad structure is parameterized over two things:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e e - The error type.\n\u003c/li\u003e\u003cli\u003e m - The inner monad.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function yields a successful computation, while \u003ccode\u003e\u003e\u003e=\u003c/code\u003e\n sequences two subcomputations, failing on the first error.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Error",
        "fct-package": "transformers",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Trans-Error.html#ErrorT",
        "fct-type": "newtype",
        "title": "ErrorT"
      },
      "index": {
        "description": "The error monad transformer It can be used to add error handling to other monads The ErrorT Monad structure is parameterized over two things The error type The inner monad The return function yields successful computation while sequences two subcomputations failing on the first error",
        "hierarchy": "Control Monad Trans Error",
        "module": "Control.Monad.Trans.Error",
        "name": "ErrorT",
        "normalized": "",
        "package": "transformers",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Error.html#v:ErrorT",
      "description": {
        "fct-module": "Control.Monad.Trans.Error",
        "fct-package": "transformers",
        "fct-signature": "ErrorT",
        "fct-source": "src/Control-Monad-Trans-Error.html#ErrorT",
        "fct-type": "function",
        "title": "ErrorT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Error",
        "module": "Control.Monad.Trans.Error",
        "name": "ErrorT",
        "normalized": "",
        "package": "transformers",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Error.html#v:catchError",
      "description": {
        "fct-descr": "\u003cp\u003eHandle an error.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003ecatchError\u003c/a\u003e\u003c/code\u003e h (\u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e m) = \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e m\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003ecatchError\u003c/a\u003e\u003c/code\u003e h (\u003ccode\u003e\u003ca\u003ethrowError\u003c/a\u003e\u003c/code\u003e e) = h e\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.Error",
        "fct-package": "transformers",
        "fct-signature": "ErrorT e m a-\u003e (e -\u003e ErrorT e m a)-\u003e ErrorT e m a",
        "fct-type": "function",
        "title": "catchError"
      },
      "index": {
        "description": "Handle an error catchError lift lift catchError throwError",
        "hierarchy": "Control Monad Trans Error",
        "module": "Control.Monad.Trans.Error",
        "name": "catchError",
        "normalized": "ErrorT a b c-\u003e(a-\u003eErrorT a b c)-\u003eErrorT a b c",
        "package": "transformers",
        "partial": "Error",
        "signature": "ErrorT e m a-\u003e(e-\u003eErrorT e m a)-\u003eErrorT e m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Error.html#v:liftCallCC",
      "description": {
        "fct-descr": "\u003cp\u003eLift a \u003ccode\u003ecallCC\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Error",
        "fct-package": "transformers",
        "fct-signature": "(((Either e a -\u003e m (Either e b)) -\u003e m (Either e a)) -\u003e m (Either e a)) -\u003e ((a -\u003e ErrorT e m b) -\u003e ErrorT e m a) -\u003e ErrorT e m a",
        "fct-source": "src/Control-Monad-Trans-Error.html#liftCallCC",
        "fct-type": "function",
        "title": "liftCallCC"
      },
      "index": {
        "description": "Lift callCC operation to the new monad",
        "hierarchy": "Control Monad Trans Error",
        "module": "Control.Monad.Trans.Error",
        "name": "liftCallCC",
        "normalized": "(((Either a b-\u003ec(Either a d))-\u003ec(Either a b))-\u003ec(Either a b))-\u003e((b-\u003eErrorT a c d)-\u003eErrorT a c b)-\u003eErrorT a c b",
        "package": "transformers",
        "partial": "Call CC",
        "signature": "(((Either e a-\u003em(Either e b))-\u003em(Either e a))-\u003em(Either e a))-\u003e((a-\u003eErrorT e m b)-\u003eErrorT e m a)-\u003eErrorT e m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Error.html#v:liftListen",
      "description": {
        "fct-descr": "\u003cp\u003eLift a \u003ccode\u003elisten\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Error",
        "fct-package": "transformers",
        "fct-signature": "(m (Either e a) -\u003e m (Either e a, w)) -\u003e ErrorT e m a -\u003e ErrorT e m (a, w)",
        "fct-source": "src/Control-Monad-Trans-Error.html#liftListen",
        "fct-type": "function",
        "title": "liftListen"
      },
      "index": {
        "description": "Lift listen operation to the new monad",
        "hierarchy": "Control Monad Trans Error",
        "module": "Control.Monad.Trans.Error",
        "name": "liftListen",
        "normalized": "(a(Either b c)-\u003ea(Either b c,d))-\u003eErrorT b a c-\u003eErrorT b a(c,d)",
        "package": "transformers",
        "partial": "Listen",
        "signature": "(m(Either e a)-\u003em(Either e a,w))-\u003eErrorT e m a-\u003eErrorT e m(a,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Error.html#v:liftPass",
      "description": {
        "fct-descr": "\u003cp\u003eLift a \u003ccode\u003epass\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Error",
        "fct-package": "transformers",
        "fct-signature": "(m (Either e a, w -\u003e w) -\u003e m (Either e a)) -\u003e ErrorT e m (a, w -\u003e w) -\u003e ErrorT e m a",
        "fct-source": "src/Control-Monad-Trans-Error.html#liftPass",
        "fct-type": "function",
        "title": "liftPass"
      },
      "index": {
        "description": "Lift pass operation to the new monad",
        "hierarchy": "Control Monad Trans Error",
        "module": "Control.Monad.Trans.Error",
        "name": "liftPass",
        "normalized": "(a(Either b c,d-\u003ed)-\u003ea(Either b c))-\u003eErrorT b a(c,d-\u003ed)-\u003eErrorT b a c",
        "package": "transformers",
        "partial": "Pass",
        "signature": "(m(Either e a,w-\u003ew)-\u003em(Either e a))-\u003eErrorT e m(a,w-\u003ew)-\u003eErrorT e m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Error.html#v:listMsg",
      "description": {
        "fct-module": "Control.Monad.Trans.Error",
        "fct-package": "transformers",
        "fct-signature": "String -\u003e [a]",
        "fct-source": "src/Control-Monad-Trans-Error.html#listMsg",
        "fct-type": "method",
        "title": "listMsg"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Error",
        "module": "Control.Monad.Trans.Error",
        "name": "listMsg",
        "normalized": "String-\u003e[a]",
        "package": "transformers",
        "partial": "Msg",
        "signature": "String-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Error.html#v:mapErrorT",
      "description": {
        "fct-descr": "\u003cp\u003eMap the unwrapped computation using the given function.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunErrorT\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emapErrorT\u003c/a\u003e\u003c/code\u003e f m) = f (\u003ccode\u003e\u003ca\u003erunErrorT\u003c/a\u003e\u003c/code\u003e m)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.Error",
        "fct-package": "transformers",
        "fct-signature": "(m (Either e a) -\u003e n (Either e' b)) -\u003e ErrorT e m a -\u003e ErrorT e' n b",
        "fct-source": "src/Control-Monad-Trans-Error.html#mapErrorT",
        "fct-type": "function",
        "title": "mapErrorT"
      },
      "index": {
        "description": "Map the unwrapped computation using the given function runErrorT mapErrorT runErrorT",
        "hierarchy": "Control Monad Trans Error",
        "module": "Control.Monad.Trans.Error",
        "name": "mapErrorT",
        "normalized": "(a(Either b c)-\u003ed(Either e f))-\u003eErrorT b a c-\u003eErrorT e d f",
        "package": "transformers",
        "partial": "Error",
        "signature": "(m(Either e a)-\u003en(Either e' b))-\u003eErrorT e m a-\u003eErrorT e' n b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Error.html#v:noMsg",
      "description": {
        "fct-descr": "\u003cp\u003eCreates an exception without a message.\n The default implementation is \u003ccode\u003e\u003ccode\u003e\u003ca\u003estrMsg\u003c/a\u003e\u003c/code\u003e \"\"\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Error",
        "fct-package": "transformers",
        "fct-signature": "a",
        "fct-source": "src/Control-Monad-Trans-Error.html#noMsg",
        "fct-type": "method",
        "title": "noMsg"
      },
      "index": {
        "description": "Creates an exception without message The default implementation is strMsg",
        "hierarchy": "Control Monad Trans Error",
        "module": "Control.Monad.Trans.Error",
        "name": "noMsg",
        "normalized": "",
        "package": "transformers",
        "partial": "Msg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Error.html#v:runErrorT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Trans.Error",
        "fct-package": "transformers",
        "fct-signature": "m (Either e a)",
        "fct-source": "src/Control-Monad-Trans-Error.html#ErrorT",
        "fct-type": "function",
        "title": "runErrorT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Error",
        "module": "Control.Monad.Trans.Error",
        "name": "runErrorT",
        "normalized": "",
        "package": "transformers",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Error.html#v:strMsg",
      "description": {
        "fct-descr": "\u003cp\u003eCreates an exception with a message.\n The default implementation of \u003ccode\u003e\u003ccode\u003e\u003ca\u003estrMsg\u003c/a\u003e\u003c/code\u003e s\u003c/code\u003e is \u003ccode\u003e\u003ca\u003enoMsg\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Error",
        "fct-package": "transformers",
        "fct-signature": "String -\u003e a",
        "fct-source": "src/Control-Monad-Trans-Error.html#strMsg",
        "fct-type": "method",
        "title": "strMsg"
      },
      "index": {
        "description": "Creates an exception with message The default implementation of strMsg is noMsg",
        "hierarchy": "Control Monad Trans Error",
        "module": "Control.Monad.Trans.Error",
        "name": "strMsg",
        "normalized": "String-\u003ea",
        "package": "transformers",
        "partial": "Msg",
        "signature": "String-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Error.html#v:throwError",
      "description": {
        "fct-descr": "\u003cp\u003eSignal an error value \u003ccode\u003ee\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunErrorT\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ethrowError\u003c/a\u003e\u003c/code\u003e e) = \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e e)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003ethrowError\u003c/a\u003e\u003c/code\u003e e \u003e\u003e= m = \u003ccode\u003e\u003ca\u003ethrowError\u003c/a\u003e\u003c/code\u003e e\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.Error",
        "fct-package": "transformers",
        "fct-signature": "e -\u003e ErrorT e m a",
        "fct-source": "src/Control-Monad-Trans-Error.html#throwError",
        "fct-type": "function",
        "title": "throwError"
      },
      "index": {
        "description": "Signal an error value runErrorT throwError return Left throwError throwError",
        "hierarchy": "Control Monad Trans Error",
        "module": "Control.Monad.Trans.Error",
        "name": "throwError",
        "normalized": "a-\u003eErrorT a b c",
        "package": "transformers",
        "partial": "Error",
        "signature": "e-\u003eErrorT e m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Identity.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe identity monad transformer.\n\u003c/p\u003e\u003cp\u003eThis is useful for functions parameterized by a monad transformer.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Trans.Identity",
        "fct-package": "transformers",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Trans-Identity.html",
        "fct-type": "module",
        "title": "Identity"
      },
      "index": {
        "description": "The identity monad transformer This is useful for functions parameterized by monad transformer",
        "hierarchy": "Control Monad Trans Identity",
        "module": "Control.Monad.Trans.Identity",
        "name": "Identity",
        "normalized": "",
        "package": "transformers",
        "partial": "Identity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Identity.html#t:IdentityT",
      "description": {
        "fct-descr": "\u003cp\u003eThe trivial monad transformer, which maps a monad to an equivalent monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Identity",
        "fct-package": "transformers",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Trans-Identity.html#IdentityT",
        "fct-type": "newtype",
        "title": "IdentityT"
      },
      "index": {
        "description": "The trivial monad transformer which maps monad to an equivalent monad",
        "hierarchy": "Control Monad Trans Identity",
        "module": "Control.Monad.Trans.Identity",
        "name": "IdentityT",
        "normalized": "",
        "package": "transformers",
        "partial": "Identity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Identity.html#v:IdentityT",
      "description": {
        "fct-module": "Control.Monad.Trans.Identity",
        "fct-package": "transformers",
        "fct-signature": "IdentityT",
        "fct-source": "src/Control-Monad-Trans-Identity.html#IdentityT",
        "fct-type": "function",
        "title": "IdentityT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Identity",
        "module": "Control.Monad.Trans.Identity",
        "name": "IdentityT",
        "normalized": "",
        "package": "transformers",
        "partial": "Identity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Identity.html#v:liftCallCC",
      "description": {
        "fct-descr": "\u003cp\u003eLift a \u003ccode\u003ecallCC\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Identity",
        "fct-package": "transformers",
        "fct-signature": "(((a -\u003e m b) -\u003e m a) -\u003e m a) -\u003e ((a -\u003e IdentityT m b) -\u003e IdentityT m a) -\u003e IdentityT m a",
        "fct-source": "src/Control-Monad-Trans-Identity.html#liftCallCC",
        "fct-type": "function",
        "title": "liftCallCC"
      },
      "index": {
        "description": "Lift callCC operation to the new monad",
        "hierarchy": "Control Monad Trans Identity",
        "module": "Control.Monad.Trans.Identity",
        "name": "liftCallCC",
        "normalized": "(((a-\u003eb c)-\u003eb a)-\u003eb a)-\u003e((a-\u003eIdentityT b c)-\u003eIdentityT b a)-\u003eIdentityT b a",
        "package": "transformers",
        "partial": "Call CC",
        "signature": "(((a-\u003em b)-\u003em a)-\u003em a)-\u003e((a-\u003eIdentityT m b)-\u003eIdentityT m a)-\u003eIdentityT m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Identity.html#v:liftCatch",
      "description": {
        "fct-descr": "\u003cp\u003eLift a \u003ccode\u003ecatchError\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Identity",
        "fct-package": "transformers",
        "fct-signature": "(m a -\u003e (e -\u003e m a) -\u003e m a) -\u003e IdentityT m a -\u003e (e -\u003e IdentityT m a) -\u003e IdentityT m a",
        "fct-source": "src/Control-Monad-Trans-Identity.html#liftCatch",
        "fct-type": "function",
        "title": "liftCatch"
      },
      "index": {
        "description": "Lift catchError operation to the new monad",
        "hierarchy": "Control Monad Trans Identity",
        "module": "Control.Monad.Trans.Identity",
        "name": "liftCatch",
        "normalized": "(a b-\u003e(c-\u003ea b)-\u003ea b)-\u003eIdentityT a b-\u003e(c-\u003eIdentityT a b)-\u003eIdentityT a b",
        "package": "transformers",
        "partial": "Catch",
        "signature": "(m a-\u003e(e-\u003em a)-\u003em a)-\u003eIdentityT m a-\u003e(e-\u003eIdentityT m a)-\u003eIdentityT m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Identity.html#v:mapIdentityT",
      "description": {
        "fct-descr": "\u003cp\u003eLift a unary operation to the new monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Identity",
        "fct-package": "transformers",
        "fct-signature": "(m a -\u003e n b) -\u003e IdentityT m a -\u003e IdentityT n b",
        "fct-source": "src/Control-Monad-Trans-Identity.html#mapIdentityT",
        "fct-type": "function",
        "title": "mapIdentityT"
      },
      "index": {
        "description": "Lift unary operation to the new monad",
        "hierarchy": "Control Monad Trans Identity",
        "module": "Control.Monad.Trans.Identity",
        "name": "mapIdentityT",
        "normalized": "(a b-\u003ec d)-\u003eIdentityT a b-\u003eIdentityT c d",
        "package": "transformers",
        "partial": "Identity",
        "signature": "(m a-\u003en b)-\u003eIdentityT m a-\u003eIdentityT n b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Identity.html#v:runIdentityT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Trans.Identity",
        "fct-package": "transformers",
        "fct-signature": "m a",
        "fct-source": "src/Control-Monad-Trans-Identity.html#IdentityT",
        "fct-type": "function",
        "title": "runIdentityT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Identity",
        "module": "Control.Monad.Trans.Identity",
        "name": "runIdentityT",
        "normalized": "",
        "package": "transformers",
        "partial": "Identity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-List.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe ListT monad transformer, adding backtracking to a given monad,\n which must be commutative.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Trans.List",
        "fct-package": "transformers",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Trans-List.html",
        "fct-type": "module",
        "title": "List"
      },
      "index": {
        "description": "The ListT monad transformer adding backtracking to given monad which must be commutative",
        "hierarchy": "Control Monad Trans List",
        "module": "Control.Monad.Trans.List",
        "name": "List",
        "normalized": "",
        "package": "transformers",
        "partial": "List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-List.html#t:ListT",
      "description": {
        "fct-descr": "\u003cp\u003eParameterizable list monad, with an inner monad.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote:\u003c/em\u003e this does not yield a monad unless the argument monad is commutative.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.List",
        "fct-package": "transformers",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Trans-List.html#ListT",
        "fct-type": "newtype",
        "title": "ListT"
      },
      "index": {
        "description": "Parameterizable list monad with an inner monad Note this does not yield monad unless the argument monad is commutative",
        "hierarchy": "Control Monad Trans List",
        "module": "Control.Monad.Trans.List",
        "name": "ListT",
        "normalized": "",
        "package": "transformers",
        "partial": "List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-List.html#v:ListT",
      "description": {
        "fct-module": "Control.Monad.Trans.List",
        "fct-package": "transformers",
        "fct-signature": "ListT",
        "fct-source": "src/Control-Monad-Trans-List.html#ListT",
        "fct-type": "function",
        "title": "ListT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans List",
        "module": "Control.Monad.Trans.List",
        "name": "ListT",
        "normalized": "",
        "package": "transformers",
        "partial": "List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-List.html#v:liftCallCC",
      "description": {
        "fct-descr": "\u003cp\u003eLift a \u003ccode\u003ecallCC\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.List",
        "fct-package": "transformers",
        "fct-signature": "((([a] -\u003e m [b]) -\u003e m [a]) -\u003e m [a]) -\u003e ((a -\u003e ListT m b) -\u003e ListT m a) -\u003e ListT m a",
        "fct-source": "src/Control-Monad-Trans-List.html#liftCallCC",
        "fct-type": "function",
        "title": "liftCallCC"
      },
      "index": {
        "description": "Lift callCC operation to the new monad",
        "hierarchy": "Control Monad Trans List",
        "module": "Control.Monad.Trans.List",
        "name": "liftCallCC",
        "normalized": "((([a]-\u003eb[c])-\u003eb[a])-\u003eb[a])-\u003e((a-\u003eListT b c)-\u003eListT b a)-\u003eListT b a",
        "package": "transformers",
        "partial": "Call CC",
        "signature": "((([a]-\u003em[b])-\u003em[a])-\u003em[a])-\u003e((a-\u003eListT m b)-\u003eListT m a)-\u003eListT m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-List.html#v:liftCatch",
      "description": {
        "fct-descr": "\u003cp\u003eLift a \u003ccode\u003ecatchError\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.List",
        "fct-package": "transformers",
        "fct-signature": "(m [a] -\u003e (e -\u003e m [a]) -\u003e m [a]) -\u003e ListT m a -\u003e (e -\u003e ListT m a) -\u003e ListT m a",
        "fct-source": "src/Control-Monad-Trans-List.html#liftCatch",
        "fct-type": "function",
        "title": "liftCatch"
      },
      "index": {
        "description": "Lift catchError operation to the new monad",
        "hierarchy": "Control Monad Trans List",
        "module": "Control.Monad.Trans.List",
        "name": "liftCatch",
        "normalized": "(a[b]-\u003e(c-\u003ea[b])-\u003ea[b])-\u003eListT a b-\u003e(c-\u003eListT a b)-\u003eListT a b",
        "package": "transformers",
        "partial": "Catch",
        "signature": "(m[a]-\u003e(e-\u003em[a])-\u003em[a])-\u003eListT m a-\u003e(e-\u003eListT m a)-\u003eListT m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-List.html#v:mapListT",
      "description": {
        "fct-descr": "\u003cp\u003eMap between \u003ccode\u003e\u003ca\u003eListT\u003c/a\u003e\u003c/code\u003e computations.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunListT\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emapListT\u003c/a\u003e\u003c/code\u003e f m) = f (\u003ccode\u003e\u003ca\u003erunListT\u003c/a\u003e\u003c/code\u003e m)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.List",
        "fct-package": "transformers",
        "fct-signature": "(m [a] -\u003e n [b]) -\u003e ListT m a -\u003e ListT n b",
        "fct-source": "src/Control-Monad-Trans-List.html#mapListT",
        "fct-type": "function",
        "title": "mapListT"
      },
      "index": {
        "description": "Map between ListT computations runListT mapListT runListT",
        "hierarchy": "Control Monad Trans List",
        "module": "Control.Monad.Trans.List",
        "name": "mapListT",
        "normalized": "(a[b]-\u003ec[d])-\u003eListT a b-\u003eListT c d",
        "package": "transformers",
        "partial": "List",
        "signature": "(m[a]-\u003en[b])-\u003eListT m a-\u003eListT n b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-List.html#v:runListT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Trans.List",
        "fct-package": "transformers",
        "fct-signature": "m [a]",
        "fct-source": "src/Control-Monad-Trans-List.html#ListT",
        "fct-type": "function",
        "title": "runListT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans List",
        "module": "Control.Monad.Trans.List",
        "name": "runListT",
        "normalized": "a[b]",
        "package": "transformers",
        "partial": "List",
        "signature": "m[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Maybe.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMaybeT\u003c/a\u003e\u003c/code\u003e monad transformer adds the ability to fail to a monad.\n\u003c/p\u003e\u003cp\u003eA sequence of actions succeeds, producing a value, only if all the\n actions in the sequence are successful.  If one fails, the rest of\n the sequence is skipped and the composite action fails.\n\u003c/p\u003e\u003cp\u003eFor a variant allowing a range of error values, see\n \u003ca\u003eControl.Monad.Trans.Error\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Trans.Maybe",
        "fct-package": "transformers",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Trans-Maybe.html",
        "fct-type": "module",
        "title": "Maybe"
      },
      "index": {
        "description": "The MaybeT monad transformer adds the ability to fail to monad sequence of actions succeeds producing value only if all the actions in the sequence are successful If one fails the rest of the sequence is skipped and the composite action fails For variant allowing range of error values see Control.Monad.Trans.Error",
        "hierarchy": "Control Monad Trans Maybe",
        "module": "Control.Monad.Trans.Maybe",
        "name": "Maybe",
        "normalized": "",
        "package": "transformers",
        "partial": "Maybe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Maybe.html#t:MaybeT",
      "description": {
        "fct-descr": "\u003cp\u003eThe parameterizable maybe monad, obtained by composing an arbitrary\n monad with the \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003eComputations are actions that may produce a value or fail.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function yields a successful computation, while \u003ccode\u003e\u003e\u003e=\u003c/code\u003e\n sequences two subcomputations, failing on the first error.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Maybe",
        "fct-package": "transformers",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Trans-Maybe.html#MaybeT",
        "fct-type": "newtype",
        "title": "MaybeT"
      },
      "index": {
        "description": "The parameterizable maybe monad obtained by composing an arbitrary monad with the Maybe monad Computations are actions that may produce value or fail The return function yields successful computation while sequences two subcomputations failing on the first error",
        "hierarchy": "Control Monad Trans Maybe",
        "module": "Control.Monad.Trans.Maybe",
        "name": "MaybeT",
        "normalized": "",
        "package": "transformers",
        "partial": "Maybe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Maybe.html#v:MaybeT",
      "description": {
        "fct-module": "Control.Monad.Trans.Maybe",
        "fct-package": "transformers",
        "fct-signature": "MaybeT",
        "fct-source": "src/Control-Monad-Trans-Maybe.html#MaybeT",
        "fct-type": "function",
        "title": "MaybeT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Maybe",
        "module": "Control.Monad.Trans.Maybe",
        "name": "MaybeT",
        "normalized": "",
        "package": "transformers",
        "partial": "Maybe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Maybe.html#v:liftCallCC",
      "description": {
        "fct-descr": "\u003cp\u003eLift a \u003ccode\u003ecallCC\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Maybe",
        "fct-package": "transformers",
        "fct-signature": "(((Maybe a -\u003e m (Maybe b)) -\u003e m (Maybe a)) -\u003e m (Maybe a)) -\u003e ((a -\u003e MaybeT m b) -\u003e MaybeT m a) -\u003e MaybeT m a",
        "fct-source": "src/Control-Monad-Trans-Maybe.html#liftCallCC",
        "fct-type": "function",
        "title": "liftCallCC"
      },
      "index": {
        "description": "Lift callCC operation to the new monad",
        "hierarchy": "Control Monad Trans Maybe",
        "module": "Control.Monad.Trans.Maybe",
        "name": "liftCallCC",
        "normalized": "(((Maybe a-\u003eb(Maybe c))-\u003eb(Maybe a))-\u003eb(Maybe a))-\u003e((a-\u003eMaybeT b c)-\u003eMaybeT b a)-\u003eMaybeT b a",
        "package": "transformers",
        "partial": "Call CC",
        "signature": "(((Maybe a-\u003em(Maybe b))-\u003em(Maybe a))-\u003em(Maybe a))-\u003e((a-\u003eMaybeT m b)-\u003eMaybeT m a)-\u003eMaybeT m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Maybe.html#v:liftCatch",
      "description": {
        "fct-descr": "\u003cp\u003eLift a \u003ccode\u003ecatchError\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Maybe",
        "fct-package": "transformers",
        "fct-signature": "(m (Maybe a) -\u003e (e -\u003e m (Maybe a)) -\u003e m (Maybe a)) -\u003e MaybeT m a -\u003e (e -\u003e MaybeT m a) -\u003e MaybeT m a",
        "fct-source": "src/Control-Monad-Trans-Maybe.html#liftCatch",
        "fct-type": "function",
        "title": "liftCatch"
      },
      "index": {
        "description": "Lift catchError operation to the new monad",
        "hierarchy": "Control Monad Trans Maybe",
        "module": "Control.Monad.Trans.Maybe",
        "name": "liftCatch",
        "normalized": "(a(Maybe b)-\u003e(c-\u003ea(Maybe b))-\u003ea(Maybe b))-\u003eMaybeT a b-\u003e(c-\u003eMaybeT a b)-\u003eMaybeT a b",
        "package": "transformers",
        "partial": "Catch",
        "signature": "(m(Maybe a)-\u003e(e-\u003em(Maybe a))-\u003em(Maybe a))-\u003eMaybeT m a-\u003e(e-\u003eMaybeT m a)-\u003eMaybeT m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Maybe.html#v:liftListen",
      "description": {
        "fct-descr": "\u003cp\u003eLift a \u003ccode\u003elisten\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Maybe",
        "fct-package": "transformers",
        "fct-signature": "(m (Maybe a) -\u003e m (Maybe a, w)) -\u003e MaybeT m a -\u003e MaybeT m (a, w)",
        "fct-source": "src/Control-Monad-Trans-Maybe.html#liftListen",
        "fct-type": "function",
        "title": "liftListen"
      },
      "index": {
        "description": "Lift listen operation to the new monad",
        "hierarchy": "Control Monad Trans Maybe",
        "module": "Control.Monad.Trans.Maybe",
        "name": "liftListen",
        "normalized": "(a(Maybe b)-\u003ea(Maybe b,c))-\u003eMaybeT a b-\u003eMaybeT a(b,c)",
        "package": "transformers",
        "partial": "Listen",
        "signature": "(m(Maybe a)-\u003em(Maybe a,w))-\u003eMaybeT m a-\u003eMaybeT m(a,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Maybe.html#v:liftPass",
      "description": {
        "fct-descr": "\u003cp\u003eLift a \u003ccode\u003epass\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Maybe",
        "fct-package": "transformers",
        "fct-signature": "(m (Maybe a, w -\u003e w) -\u003e m (Maybe a)) -\u003e MaybeT m (a, w -\u003e w) -\u003e MaybeT m a",
        "fct-source": "src/Control-Monad-Trans-Maybe.html#liftPass",
        "fct-type": "function",
        "title": "liftPass"
      },
      "index": {
        "description": "Lift pass operation to the new monad",
        "hierarchy": "Control Monad Trans Maybe",
        "module": "Control.Monad.Trans.Maybe",
        "name": "liftPass",
        "normalized": "(a(Maybe b,c-\u003ec)-\u003ea(Maybe b))-\u003eMaybeT a(b,c-\u003ec)-\u003eMaybeT a b",
        "package": "transformers",
        "partial": "Pass",
        "signature": "(m(Maybe a,w-\u003ew)-\u003em(Maybe a))-\u003eMaybeT m(a,w-\u003ew)-\u003eMaybeT m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Maybe.html#v:mapMaybeT",
      "description": {
        "fct-descr": "\u003cp\u003eTransform the computation inside a \u003ccode\u003eMaybeT\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunMaybeT\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emapMaybeT\u003c/a\u003e\u003c/code\u003e f m) = f (\u003ccode\u003e\u003ca\u003erunMaybeT\u003c/a\u003e\u003c/code\u003e m)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.Maybe",
        "fct-package": "transformers",
        "fct-signature": "(m (Maybe a) -\u003e n (Maybe b)) -\u003e MaybeT m a -\u003e MaybeT n b",
        "fct-source": "src/Control-Monad-Trans-Maybe.html#mapMaybeT",
        "fct-type": "function",
        "title": "mapMaybeT"
      },
      "index": {
        "description": "Transform the computation inside MaybeT runMaybeT mapMaybeT runMaybeT",
        "hierarchy": "Control Monad Trans Maybe",
        "module": "Control.Monad.Trans.Maybe",
        "name": "mapMaybeT",
        "normalized": "(a(Maybe b)-\u003ec(Maybe d))-\u003eMaybeT a b-\u003eMaybeT c d",
        "package": "transformers",
        "partial": "Maybe",
        "signature": "(m(Maybe a)-\u003en(Maybe b))-\u003eMaybeT m a-\u003eMaybeT n b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Maybe.html#v:runMaybeT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Trans.Maybe",
        "fct-package": "transformers",
        "fct-signature": "m (Maybe a)",
        "fct-source": "src/Control-Monad-Trans-Maybe.html#MaybeT",
        "fct-type": "function",
        "title": "runMaybeT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Maybe",
        "module": "Control.Monad.Trans.Maybe",
        "name": "runMaybeT",
        "normalized": "",
        "package": "transformers",
        "partial": "Maybe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Lazy.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA monad transformer that combines \u003ccode\u003eReaderT\u003c/code\u003e, \u003ccode\u003eWriterT\u003c/code\u003e and \u003ccode\u003eStateT\u003c/code\u003e.\n This version is lazy; for a strict version, see\n \u003ca\u003eControl.Monad.Trans.RWS.Strict\u003c/a\u003e, which has the same interface.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Lazy",
        "fct-package": "transformers",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Trans-RWS-Lazy.html",
        "fct-type": "module",
        "title": "Lazy"
      },
      "index": {
        "description": "monad transformer that combines ReaderT WriterT and StateT This version is lazy for strict version see Control.Monad.Trans.RWS.Strict which has the same interface",
        "hierarchy": "Control Monad Trans RWS Lazy",
        "module": "Control.Monad.Trans.RWS.Lazy",
        "name": "Lazy",
        "normalized": "",
        "package": "transformers",
        "partial": "Lazy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Lazy.html#t:RWS",
      "description": {
        "fct-descr": "\u003cp\u003eA monad containing an environment of type \u003ccode\u003er\u003c/code\u003e, output of type \u003ccode\u003ew\u003c/code\u003e\n and an updatable state of type \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Lazy",
        "fct-package": "transformers",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Trans-RWS-Lazy.html#RWS",
        "fct-type": "type",
        "title": "RWS"
      },
      "index": {
        "description": "monad containing an environment of type output of type and an updatable state of type",
        "hierarchy": "Control Monad Trans RWS Lazy",
        "module": "Control.Monad.Trans.RWS.Lazy",
        "name": "RWS",
        "normalized": "",
        "package": "transformers",
        "partial": "RWS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Lazy.html#t:RWST",
      "description": {
        "fct-descr": "\u003cp\u003eA monad transformer adding reading an environment of type \u003ccode\u003er\u003c/code\u003e,\n collecting an output of type \u003ccode\u003ew\u003c/code\u003e and updating a state of type \u003ccode\u003es\u003c/code\u003e\n to an inner monad \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Lazy",
        "fct-package": "transformers",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Trans-RWS-Lazy.html#RWST",
        "fct-type": "newtype",
        "title": "RWST"
      },
      "index": {
        "description": "monad transformer adding reading an environment of type collecting an output of type and updating state of type to an inner monad",
        "hierarchy": "Control Monad Trans RWS Lazy",
        "module": "Control.Monad.Trans.RWS.Lazy",
        "name": "RWST",
        "normalized": "",
        "package": "transformers",
        "partial": "RWST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Lazy.html#v:RWST",
      "description": {
        "fct-module": "Control.Monad.Trans.RWS.Lazy",
        "fct-package": "transformers",
        "fct-signature": "RWST",
        "fct-source": "src/Control-Monad-Trans-RWS-Lazy.html#RWST",
        "fct-type": "function",
        "title": "RWST"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans RWS Lazy",
        "module": "Control.Monad.Trans.RWS.Lazy",
        "name": "RWST",
        "normalized": "",
        "package": "transformers",
        "partial": "RWST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Lazy.html#v:ask",
      "description": {
        "fct-descr": "\u003cp\u003eFetch the value of the environment.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Lazy",
        "fct-package": "transformers",
        "fct-signature": "RWST r w s m r",
        "fct-source": "src/Control-Monad-Trans-RWS-Lazy.html#ask",
        "fct-type": "function",
        "title": "ask"
      },
      "index": {
        "description": "Fetch the value of the environment",
        "hierarchy": "Control Monad Trans RWS Lazy",
        "module": "Control.Monad.Trans.RWS.Lazy",
        "name": "ask",
        "normalized": "",
        "package": "transformers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Lazy.html#v:asks",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve a function of the current environment.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003easks\u003c/a\u003e\u003c/code\u003e f = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e f \u003ccode\u003e\u003ca\u003eask\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Lazy",
        "fct-package": "transformers",
        "fct-signature": "(r -\u003e a) -\u003e RWST r w s m a",
        "fct-source": "src/Control-Monad-Trans-RWS-Lazy.html#asks",
        "fct-type": "function",
        "title": "asks"
      },
      "index": {
        "description": "Retrieve function of the current environment asks liftM ask",
        "hierarchy": "Control Monad Trans RWS Lazy",
        "module": "Control.Monad.Trans.RWS.Lazy",
        "name": "asks",
        "normalized": "(a-\u003eb)-\u003eRWST a c d e b",
        "package": "transformers",
        "partial": "",
        "signature": "(r-\u003ea)-\u003eRWST r w s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Lazy.html#v:censor",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ecensor\u003c/a\u003e\u003c/code\u003e f m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e and\n applies the function \u003ccode\u003ef\u003c/code\u003e to its output, leaving the return value\n unchanged.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003ecensor\u003c/a\u003e\u003c/code\u003e f m = \u003ccode\u003e\u003ca\u003epass\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e (\\x -\u003e (x,f)) m)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunRWST\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ecensor\u003c/a\u003e\u003c/code\u003e f m) r s = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e (\\(a, w) -\u003e (a, f w)) (\u003ccode\u003e\u003ca\u003erunRWST\u003c/a\u003e\u003c/code\u003e m r s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Lazy",
        "fct-package": "transformers",
        "fct-signature": "(w -\u003e w) -\u003e RWST r w s m a -\u003e RWST r w s m a",
        "fct-source": "src/Control-Monad-Trans-RWS-Lazy.html#censor",
        "fct-type": "function",
        "title": "censor"
      },
      "index": {
        "description": "censor is an action that executes the action and applies the function to its output leaving the return value unchanged censor pass liftM runRWST censor liftM runRWST",
        "hierarchy": "Control Monad Trans RWS Lazy",
        "module": "Control.Monad.Trans.RWS.Lazy",
        "name": "censor",
        "normalized": "(a-\u003ea)-\u003eRWST b a c d e-\u003eRWST b a c d e",
        "package": "transformers",
        "partial": "",
        "signature": "(w-\u003ew)-\u003eRWST r w s m a-\u003eRWST r w s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Lazy.html#v:evalRWS",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a computation with the given initial state and environment,\n returning the final value and output, discarding the final state.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Lazy",
        "fct-package": "transformers",
        "fct-signature": "RWS r w s a-\u003e r-\u003e s-\u003e (a, w)",
        "fct-type": "function",
        "title": "evalRWS"
      },
      "index": {
        "description": "Evaluate computation with the given initial state and environment returning the final value and output discarding the final state",
        "hierarchy": "Control Monad Trans RWS Lazy",
        "module": "Control.Monad.Trans.RWS.Lazy",
        "name": "evalRWS",
        "normalized": "RWS a b c d-\u003ea-\u003ec-\u003e(d,b)",
        "package": "transformers",
        "partial": "RWS",
        "signature": "RWS r w s a-\u003er-\u003es-\u003e(a,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Lazy.html#v:evalRWST",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a computation with the given initial state and environment,\n returning the final value and output, discarding the final state.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Lazy",
        "fct-package": "transformers",
        "fct-signature": "RWST r w s m a-\u003e r-\u003e s-\u003e m (a, w)",
        "fct-type": "function",
        "title": "evalRWST"
      },
      "index": {
        "description": "Evaluate computation with the given initial state and environment returning the final value and output discarding the final state",
        "hierarchy": "Control Monad Trans RWS Lazy",
        "module": "Control.Monad.Trans.RWS.Lazy",
        "name": "evalRWST",
        "normalized": "RWST a b c d e-\u003ea-\u003ec-\u003ed(e,b)",
        "package": "transformers",
        "partial": "RWST",
        "signature": "RWST r w s m a-\u003er-\u003es-\u003em(a,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Lazy.html#v:execRWS",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a computation with the given initial state and environment,\n returning the final state and output, discarding the final value.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Lazy",
        "fct-package": "transformers",
        "fct-signature": "RWS r w s a-\u003e r-\u003e s-\u003e (s, w)",
        "fct-type": "function",
        "title": "execRWS"
      },
      "index": {
        "description": "Evaluate computation with the given initial state and environment returning the final state and output discarding the final value",
        "hierarchy": "Control Monad Trans RWS Lazy",
        "module": "Control.Monad.Trans.RWS.Lazy",
        "name": "execRWS",
        "normalized": "RWS a b c d-\u003ea-\u003ec-\u003e(c,b)",
        "package": "transformers",
        "partial": "RWS",
        "signature": "RWS r w s a-\u003er-\u003es-\u003e(s,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Lazy.html#v:execRWST",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a computation with the given initial state and environment,\n returning the final state and output, discarding the final value.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Lazy",
        "fct-package": "transformers",
        "fct-signature": "RWST r w s m a-\u003e r-\u003e s-\u003e m (s, w)",
        "fct-type": "function",
        "title": "execRWST"
      },
      "index": {
        "description": "Evaluate computation with the given initial state and environment returning the final state and output discarding the final value",
        "hierarchy": "Control Monad Trans RWS Lazy",
        "module": "Control.Monad.Trans.RWS.Lazy",
        "name": "execRWST",
        "normalized": "RWST a b c d e-\u003ea-\u003ec-\u003ed(c,b)",
        "package": "transformers",
        "partial": "RWST",
        "signature": "RWST r w s m a-\u003er-\u003es-\u003em(s,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Lazy.html#v:get",
      "description": {
        "fct-descr": "\u003cp\u003eFetch the current value of the state within the monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Lazy",
        "fct-package": "transformers",
        "fct-signature": "RWST r w s m s",
        "fct-source": "src/Control-Monad-Trans-RWS-Lazy.html#get",
        "fct-type": "function",
        "title": "get"
      },
      "index": {
        "description": "Fetch the current value of the state within the monad",
        "hierarchy": "Control Monad Trans RWS Lazy",
        "module": "Control.Monad.Trans.RWS.Lazy",
        "name": "get",
        "normalized": "",
        "package": "transformers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Lazy.html#v:gets",
      "description": {
        "fct-descr": "\u003cp\u003eGet a specific component of the state, using a projection function\n supplied.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003egets\u003c/a\u003e\u003c/code\u003e f = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e f \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Lazy",
        "fct-package": "transformers",
        "fct-signature": "(s -\u003e a) -\u003e RWST r w s m a",
        "fct-source": "src/Control-Monad-Trans-RWS-Lazy.html#gets",
        "fct-type": "function",
        "title": "gets"
      },
      "index": {
        "description": "Get specific component of the state using projection function supplied gets liftM get",
        "hierarchy": "Control Monad Trans RWS Lazy",
        "module": "Control.Monad.Trans.RWS.Lazy",
        "name": "gets",
        "normalized": "(a-\u003eb)-\u003eRWST c d a e b",
        "package": "transformers",
        "partial": "",
        "signature": "(s-\u003ea)-\u003eRWST r w s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Lazy.html#v:liftCallCC",
      "description": {
        "fct-descr": "\u003cp\u003eUniform lifting of a \u003ccode\u003ecallCC\u003c/code\u003e operation to the new monad.\n This version rolls back to the original state on entering the\n continuation.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Lazy",
        "fct-package": "transformers",
        "fct-signature": "((((a, s, w) -\u003e m (b, s, w)) -\u003e m (a, s, w)) -\u003e m (a, s, w)) -\u003e ((a -\u003e RWST r w s m b) -\u003e RWST r w s m a) -\u003e RWST r w s m a",
        "fct-source": "src/Control-Monad-Trans-RWS-Lazy.html#liftCallCC",
        "fct-type": "function",
        "title": "liftCallCC"
      },
      "index": {
        "description": "Uniform lifting of callCC operation to the new monad This version rolls back to the original state on entering the continuation",
        "hierarchy": "Control Monad Trans RWS Lazy",
        "module": "Control.Monad.Trans.RWS.Lazy",
        "name": "liftCallCC",
        "normalized": "((((a,b,c)-\u003ed(e,b,c))-\u003ed(a,b,c))-\u003ed(a,b,c))-\u003e((a-\u003eRWST f c b d e)-\u003eRWST f c b d a)-\u003eRWST f c b d a",
        "package": "transformers",
        "partial": "Call CC",
        "signature": "((((a,s,w)-\u003em(b,s,w))-\u003em(a,s,w))-\u003em(a,s,w))-\u003e((a-\u003eRWST r w s m b)-\u003eRWST r w s m a)-\u003eRWST r w s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Lazy.html#v:liftCallCC-39-",
      "description": {
        "fct-descr": "\u003cp\u003eIn-situ lifting of a \u003ccode\u003ecallCC\u003c/code\u003e operation to the new monad.\n This version uses the current state on entering the continuation.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Lazy",
        "fct-package": "transformers",
        "fct-signature": "((((a, s, w) -\u003e m (b, s, w)) -\u003e m (a, s, w)) -\u003e m (a, s, w)) -\u003e ((a -\u003e RWST r w s m b) -\u003e RWST r w s m a) -\u003e RWST r w s m a",
        "fct-source": "src/Control-Monad-Trans-RWS-Lazy.html#liftCallCC%27",
        "fct-type": "function",
        "title": "liftCallCC'"
      },
      "index": {
        "description": "In-situ lifting of callCC operation to the new monad This version uses the current state on entering the continuation",
        "hierarchy": "Control Monad Trans RWS Lazy",
        "module": "Control.Monad.Trans.RWS.Lazy",
        "name": "liftCallCC'",
        "normalized": "((((a,b,c)-\u003ed(e,b,c))-\u003ed(a,b,c))-\u003ed(a,b,c))-\u003e((a-\u003eRWST f c b d e)-\u003eRWST f c b d a)-\u003eRWST f c b d a",
        "package": "transformers",
        "partial": "Call CC'",
        "signature": "((((a,s,w)-\u003em(b,s,w))-\u003em(a,s,w))-\u003em(a,s,w))-\u003e((a-\u003eRWST r w s m b)-\u003eRWST r w s m a)-\u003eRWST r w s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Lazy.html#v:liftCatch",
      "description": {
        "fct-descr": "\u003cp\u003eLift a \u003ccode\u003ecatchError\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Lazy",
        "fct-package": "transformers",
        "fct-signature": "(m (a, s, w) -\u003e (e -\u003e m (a, s, w)) -\u003e m (a, s, w)) -\u003e RWST l w s m a -\u003e (e -\u003e RWST l w s m a) -\u003e RWST l w s m a",
        "fct-source": "src/Control-Monad-Trans-RWS-Lazy.html#liftCatch",
        "fct-type": "function",
        "title": "liftCatch"
      },
      "index": {
        "description": "Lift catchError operation to the new monad",
        "hierarchy": "Control Monad Trans RWS Lazy",
        "module": "Control.Monad.Trans.RWS.Lazy",
        "name": "liftCatch",
        "normalized": "(a(b,c,d)-\u003e(e-\u003ea(b,c,d))-\u003ea(b,c,d))-\u003eRWST f d c a b-\u003e(e-\u003eRWST f d c a b)-\u003eRWST f d c a b",
        "package": "transformers",
        "partial": "Catch",
        "signature": "(m(a,s,w)-\u003e(e-\u003em(a,s,w))-\u003em(a,s,w))-\u003eRWST l w s m a-\u003e(e-\u003eRWST l w s m a)-\u003eRWST l w s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Lazy.html#v:listen",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003elisten\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e and adds its\n output to the value of the computation.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunRWST\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003elisten\u003c/a\u003e\u003c/code\u003e m) r s = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e (\\(a, w) -\u003e ((a, w), w)) (\u003ccode\u003e\u003ca\u003erunRWST\u003c/a\u003e\u003c/code\u003e m r s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Lazy",
        "fct-package": "transformers",
        "fct-signature": "RWST r w s m a -\u003e RWST r w s m (a, w)",
        "fct-source": "src/Control-Monad-Trans-RWS-Lazy.html#listen",
        "fct-type": "function",
        "title": "listen"
      },
      "index": {
        "description": "listen is an action that executes the action and adds its output to the value of the computation runRWST listen liftM runRWST",
        "hierarchy": "Control Monad Trans RWS Lazy",
        "module": "Control.Monad.Trans.RWS.Lazy",
        "name": "listen",
        "normalized": "RWST a b c d e-\u003eRWST a b c d(e,b)",
        "package": "transformers",
        "partial": "",
        "signature": "RWST r w s m a-\u003eRWST r w s m(a,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Lazy.html#v:listens",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003elistens\u003c/a\u003e\u003c/code\u003e f m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e and adds\n the result of applying \u003ccode\u003ef\u003c/code\u003e to the output to the value of the computation.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003elistens\u003c/a\u003e\u003c/code\u003e f m = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e (id *** f) (\u003ccode\u003e\u003ca\u003elisten\u003c/a\u003e\u003c/code\u003e m)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunRWST\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003elistens\u003c/a\u003e\u003c/code\u003e f m) r s = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e (\\(a, w) -\u003e ((a, f w), w)) (\u003ccode\u003e\u003ca\u003erunRWST\u003c/a\u003e\u003c/code\u003e m r s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Lazy",
        "fct-package": "transformers",
        "fct-signature": "(w -\u003e b) -\u003e RWST r w s m a -\u003e RWST r w s m (a, b)",
        "fct-source": "src/Control-Monad-Trans-RWS-Lazy.html#listens",
        "fct-type": "function",
        "title": "listens"
      },
      "index": {
        "description": "listens is an action that executes the action and adds the result of applying to the output to the value of the computation listens liftM id listen runRWST listens liftM runRWST",
        "hierarchy": "Control Monad Trans RWS Lazy",
        "module": "Control.Monad.Trans.RWS.Lazy",
        "name": "listens",
        "normalized": "(a-\u003eb)-\u003eRWST c a d e f-\u003eRWST c a d e(f,b)",
        "package": "transformers",
        "partial": "",
        "signature": "(w-\u003eb)-\u003eRWST r w s m a-\u003eRWST r w s m(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Lazy.html#v:local",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a computation in a modified environment\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunRWST\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003elocal\u003c/a\u003e\u003c/code\u003e f m) r s = \u003ccode\u003e\u003ca\u003erunRWST\u003c/a\u003e\u003c/code\u003e m (f r) s\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Lazy",
        "fct-package": "transformers",
        "fct-signature": "(r -\u003e r) -\u003e RWST r w s m a -\u003e RWST r w s m a",
        "fct-source": "src/Control-Monad-Trans-RWS-Lazy.html#local",
        "fct-type": "function",
        "title": "local"
      },
      "index": {
        "description": "Execute computation in modified environment runRWST local runRWST",
        "hierarchy": "Control Monad Trans RWS Lazy",
        "module": "Control.Monad.Trans.RWS.Lazy",
        "name": "local",
        "normalized": "(a-\u003ea)-\u003eRWST a b c d e-\u003eRWST a b c d e",
        "package": "transformers",
        "partial": "",
        "signature": "(r-\u003er)-\u003eRWST r w s m a-\u003eRWST r w s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Lazy.html#v:mapRWS",
      "description": {
        "fct-descr": "\u003cp\u003eMap the return value, final state and output of a computation using\n the given function.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunRWS\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emapRWS\u003c/a\u003e\u003c/code\u003e f m) r s = f (\u003ccode\u003e\u003ca\u003erunRWS\u003c/a\u003e\u003c/code\u003e m r s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Lazy",
        "fct-package": "transformers",
        "fct-signature": "((a, s, w) -\u003e (b, s, w')) -\u003e RWS r w s a -\u003e RWS r w' s b",
        "fct-source": "src/Control-Monad-Trans-RWS-Lazy.html#mapRWS",
        "fct-type": "function",
        "title": "mapRWS"
      },
      "index": {
        "description": "Map the return value final state and output of computation using the given function runRWS mapRWS runRWS",
        "hierarchy": "Control Monad Trans RWS Lazy",
        "module": "Control.Monad.Trans.RWS.Lazy",
        "name": "mapRWS",
        "normalized": "((a,b,c)-\u003e(d,b,e))-\u003eRWS f c b a-\u003eRWS f e b d",
        "package": "transformers",
        "partial": "RWS",
        "signature": "((a,s,w)-\u003e(b,s,w'))-\u003eRWS r w s a-\u003eRWS r w' s b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Lazy.html#v:mapRWST",
      "description": {
        "fct-descr": "\u003cp\u003eMap the inner computation using the given function.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunRWST\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emapRWST\u003c/a\u003e\u003c/code\u003e f m) r s = f (\u003ccode\u003e\u003ca\u003erunRWST\u003c/a\u003e\u003c/code\u003e m r s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Lazy",
        "fct-package": "transformers",
        "fct-signature": "(m (a, s, w) -\u003e n (b, s, w')) -\u003e RWST r w s m a -\u003e RWST r w' s n b",
        "fct-source": "src/Control-Monad-Trans-RWS-Lazy.html#mapRWST",
        "fct-type": "function",
        "title": "mapRWST"
      },
      "index": {
        "description": "Map the inner computation using the given function runRWST mapRWST runRWST",
        "hierarchy": "Control Monad Trans RWS Lazy",
        "module": "Control.Monad.Trans.RWS.Lazy",
        "name": "mapRWST",
        "normalized": "(a(b,c,d)-\u003ee(f,c,g))-\u003eRWST h d c a b-\u003eRWST h g c e f",
        "package": "transformers",
        "partial": "RWST",
        "signature": "(m(a,s,w)-\u003en(b,s,w'))-\u003eRWST r w s m a-\u003eRWST r w' s n b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Lazy.html#v:modify",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003emodify\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e is an action that updates the state to the result of\n applying \u003ccode\u003ef\u003c/code\u003e to the current state.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003emodify\u003c/a\u003e\u003c/code\u003e f = \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e \u003e\u003e= (\u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e . f)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Lazy",
        "fct-package": "transformers",
        "fct-signature": "(s -\u003e s) -\u003e RWST r w s m ()",
        "fct-source": "src/Control-Monad-Trans-RWS-Lazy.html#modify",
        "fct-type": "function",
        "title": "modify"
      },
      "index": {
        "description": "modify is an action that updates the state to the result of applying to the current state modify get put",
        "hierarchy": "Control Monad Trans RWS Lazy",
        "module": "Control.Monad.Trans.RWS.Lazy",
        "name": "modify",
        "normalized": "(a-\u003ea)-\u003eRWST b c a d()",
        "package": "transformers",
        "partial": "",
        "signature": "(s-\u003es)-\u003eRWST r w s m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Lazy.html#v:pass",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003epass\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e, which returns\n a value and a function, and returns the value, applying the function\n to the output.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunRWST\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003epass\u003c/a\u003e\u003c/code\u003e m) r s = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e (\\((a, f), w) -\u003e (a, f w)) (\u003ccode\u003e\u003ca\u003erunRWST\u003c/a\u003e\u003c/code\u003e m r s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Lazy",
        "fct-package": "transformers",
        "fct-signature": "RWST r w s m (a, w -\u003e w) -\u003e RWST r w s m a",
        "fct-source": "src/Control-Monad-Trans-RWS-Lazy.html#pass",
        "fct-type": "function",
        "title": "pass"
      },
      "index": {
        "description": "pass is an action that executes the action which returns value and function and returns the value applying the function to the output runRWST pass liftM runRWST",
        "hierarchy": "Control Monad Trans RWS Lazy",
        "module": "Control.Monad.Trans.RWS.Lazy",
        "name": "pass",
        "normalized": "RWST a b c d(e,b-\u003eb)-\u003eRWST a b c d e",
        "package": "transformers",
        "partial": "",
        "signature": "RWST r w s m(a,w-\u003ew)-\u003eRWST r w s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Lazy.html#v:put",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e s\u003c/code\u003e sets the state within the monad to \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Lazy",
        "fct-package": "transformers",
        "fct-signature": "s -\u003e RWST r w s m ()",
        "fct-source": "src/Control-Monad-Trans-RWS-Lazy.html#put",
        "fct-type": "function",
        "title": "put"
      },
      "index": {
        "description": "put sets the state within the monad to",
        "hierarchy": "Control Monad Trans RWS Lazy",
        "module": "Control.Monad.Trans.RWS.Lazy",
        "name": "put",
        "normalized": "a-\u003eRWST b c a d()",
        "package": "transformers",
        "partial": "",
        "signature": "s-\u003eRWST r w s m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Lazy.html#v:reader",
      "description": {
        "fct-descr": "\u003cp\u003eConstructor for computations in the reader monad (equivalent to \u003ccode\u003e\u003ca\u003easks\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Lazy",
        "fct-package": "transformers",
        "fct-signature": "(r -\u003e a) -\u003e RWST r w s m a",
        "fct-source": "src/Control-Monad-Trans-RWS-Lazy.html#reader",
        "fct-type": "function",
        "title": "reader"
      },
      "index": {
        "description": "Constructor for computations in the reader monad equivalent to asks",
        "hierarchy": "Control Monad Trans RWS Lazy",
        "module": "Control.Monad.Trans.RWS.Lazy",
        "name": "reader",
        "normalized": "(a-\u003eb)-\u003eRWST a c d e b",
        "package": "transformers",
        "partial": "",
        "signature": "(r-\u003ea)-\u003eRWST r w s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Lazy.html#v:runRWS",
      "description": {
        "fct-descr": "\u003cp\u003eUnwrap an RWS computation as a function.\n (The inverse of \u003ccode\u003e\u003ca\u003erws\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Lazy",
        "fct-package": "transformers",
        "fct-signature": "RWS r w s a -\u003e r -\u003e s -\u003e (a, s, w)",
        "fct-source": "src/Control-Monad-Trans-RWS-Lazy.html#runRWS",
        "fct-type": "function",
        "title": "runRWS"
      },
      "index": {
        "description": "Unwrap an RWS computation as function The inverse of rws",
        "hierarchy": "Control Monad Trans RWS Lazy",
        "module": "Control.Monad.Trans.RWS.Lazy",
        "name": "runRWS",
        "normalized": "RWS a b c d-\u003ea-\u003ec-\u003e(d,c,b)",
        "package": "transformers",
        "partial": "RWS",
        "signature": "RWS r w s a-\u003er-\u003es-\u003e(a,s,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Lazy.html#v:runRWST",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Trans.RWS.Lazy",
        "fct-package": "transformers",
        "fct-signature": "r -\u003e s -\u003e m (a, s, w)",
        "fct-source": "src/Control-Monad-Trans-RWS-Lazy.html#RWST",
        "fct-type": "function",
        "title": "runRWST"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans RWS Lazy",
        "module": "Control.Monad.Trans.RWS.Lazy",
        "name": "runRWST",
        "normalized": "a-\u003eb-\u003ec(d,b,e)",
        "package": "transformers",
        "partial": "RWST",
        "signature": "r-\u003es-\u003em(a,s,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Lazy.html#v:rws",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct an RWS computation from a function.\n (The inverse of \u003ccode\u003e\u003ca\u003erunRWS\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Lazy",
        "fct-package": "transformers",
        "fct-signature": "(r -\u003e s -\u003e (a, s, w)) -\u003e RWS r w s a",
        "fct-source": "src/Control-Monad-Trans-RWS-Lazy.html#rws",
        "fct-type": "function",
        "title": "rws"
      },
      "index": {
        "description": "Construct an RWS computation from function The inverse of runRWS",
        "hierarchy": "Control Monad Trans RWS Lazy",
        "module": "Control.Monad.Trans.RWS.Lazy",
        "name": "rws",
        "normalized": "(a-\u003eb-\u003e(c,b,d))-\u003eRWS a d b c",
        "package": "transformers",
        "partial": "",
        "signature": "(r-\u003es-\u003e(a,s,w))-\u003eRWS r w s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Lazy.html#v:state",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a state monad computation from a state transformer function.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Lazy",
        "fct-package": "transformers",
        "fct-signature": "(s -\u003e (a, s)) -\u003e RWST r w s m a",
        "fct-source": "src/Control-Monad-Trans-RWS-Lazy.html#state",
        "fct-type": "function",
        "title": "state"
      },
      "index": {
        "description": "Construct state monad computation from state transformer function",
        "hierarchy": "Control Monad Trans RWS Lazy",
        "module": "Control.Monad.Trans.RWS.Lazy",
        "name": "state",
        "normalized": "(a-\u003e(b,a))-\u003eRWST c d a e b",
        "package": "transformers",
        "partial": "",
        "signature": "(s-\u003e(a,s))-\u003eRWST r w s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Lazy.html#v:tell",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003etell\u003c/a\u003e\u003c/code\u003e w\u003c/code\u003e is an action that produces the output \u003ccode\u003ew\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Lazy",
        "fct-package": "transformers",
        "fct-signature": "w -\u003e RWST r w s m ()",
        "fct-source": "src/Control-Monad-Trans-RWS-Lazy.html#tell",
        "fct-type": "function",
        "title": "tell"
      },
      "index": {
        "description": "tell is an action that produces the output",
        "hierarchy": "Control Monad Trans RWS Lazy",
        "module": "Control.Monad.Trans.RWS.Lazy",
        "name": "tell",
        "normalized": "a-\u003eRWST b a c d()",
        "package": "transformers",
        "partial": "",
        "signature": "w-\u003eRWST r w s m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Lazy.html#v:withRWS",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ewithRWS\u003c/a\u003e\u003c/code\u003e f m\u003c/code\u003e executes action \u003ccode\u003em\u003c/code\u003e with an initial environment\n and state modified by applying \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunRWS\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ewithRWS\u003c/a\u003e\u003c/code\u003e f m) r s = \u003ccode\u003e\u003ca\u003euncurry\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunRWS\u003c/a\u003e\u003c/code\u003e m) (f r s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Lazy",
        "fct-package": "transformers",
        "fct-signature": "(r' -\u003e s -\u003e (r, s)) -\u003e RWS r w s a -\u003e RWS r' w s a",
        "fct-source": "src/Control-Monad-Trans-RWS-Lazy.html#withRWS",
        "fct-type": "function",
        "title": "withRWS"
      },
      "index": {
        "description": "withRWS executes action with an initial environment and state modified by applying runRWS withRWS uncurry runRWS",
        "hierarchy": "Control Monad Trans RWS Lazy",
        "module": "Control.Monad.Trans.RWS.Lazy",
        "name": "withRWS",
        "normalized": "(a-\u003eb-\u003e(c,b))-\u003eRWS c d b e-\u003eRWS a d b e",
        "package": "transformers",
        "partial": "RWS",
        "signature": "(r'-\u003es-\u003e(r,s))-\u003eRWS r w s a-\u003eRWS r' w s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Lazy.html#v:withRWST",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ewithRWST\u003c/a\u003e\u003c/code\u003e f m\u003c/code\u003e executes action \u003ccode\u003em\u003c/code\u003e with an initial environment\n and state modified by applying \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunRWST\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ewithRWST\u003c/a\u003e\u003c/code\u003e f m) r s = \u003ccode\u003e\u003ca\u003euncurry\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunRWST\u003c/a\u003e\u003c/code\u003e m) (f r s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Lazy",
        "fct-package": "transformers",
        "fct-signature": "(r' -\u003e s -\u003e (r, s)) -\u003e RWST r w s m a -\u003e RWST r' w s m a",
        "fct-source": "src/Control-Monad-Trans-RWS-Lazy.html#withRWST",
        "fct-type": "function",
        "title": "withRWST"
      },
      "index": {
        "description": "withRWST executes action with an initial environment and state modified by applying runRWST withRWST uncurry runRWST",
        "hierarchy": "Control Monad Trans RWS Lazy",
        "module": "Control.Monad.Trans.RWS.Lazy",
        "name": "withRWST",
        "normalized": "(a-\u003eb-\u003e(c,b))-\u003eRWST c d b e f-\u003eRWST a d b e f",
        "package": "transformers",
        "partial": "RWST",
        "signature": "(r'-\u003es-\u003e(r,s))-\u003eRWST r w s m a-\u003eRWST r' w s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Lazy.html#v:writer",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a writer computation from a (result, output) pair.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Lazy",
        "fct-package": "transformers",
        "fct-signature": "(a, w) -\u003e RWST r w s m a",
        "fct-source": "src/Control-Monad-Trans-RWS-Lazy.html#writer",
        "fct-type": "function",
        "title": "writer"
      },
      "index": {
        "description": "Construct writer computation from result output pair",
        "hierarchy": "Control Monad Trans RWS Lazy",
        "module": "Control.Monad.Trans.RWS.Lazy",
        "name": "writer",
        "normalized": "(a,b)-\u003eRWST c b d e a",
        "package": "transformers",
        "partial": "",
        "signature": "(a,w)-\u003eRWST r w s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Strict.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA monad transformer that combines \u003ccode\u003eReaderT\u003c/code\u003e, \u003ccode\u003eWriterT\u003c/code\u003e and \u003ccode\u003eStateT\u003c/code\u003e.\n This version is strict; for a lazy version, see\n \u003ca\u003eControl.Monad.Trans.RWS.Lazy\u003c/a\u003e, which has the same interface.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Strict",
        "fct-package": "transformers",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Trans-RWS-Strict.html",
        "fct-type": "module",
        "title": "Strict"
      },
      "index": {
        "description": "monad transformer that combines ReaderT WriterT and StateT This version is strict for lazy version see Control.Monad.Trans.RWS.Lazy which has the same interface",
        "hierarchy": "Control Monad Trans RWS Strict",
        "module": "Control.Monad.Trans.RWS.Strict",
        "name": "Strict",
        "normalized": "",
        "package": "transformers",
        "partial": "Strict",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Strict.html#t:RWS",
      "description": {
        "fct-descr": "\u003cp\u003eA monad containing an environment of type \u003ccode\u003er\u003c/code\u003e, output of type \u003ccode\u003ew\u003c/code\u003e\n and an updatable state of type \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Strict",
        "fct-package": "transformers",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Trans-RWS-Strict.html#RWS",
        "fct-type": "type",
        "title": "RWS"
      },
      "index": {
        "description": "monad containing an environment of type output of type and an updatable state of type",
        "hierarchy": "Control Monad Trans RWS Strict",
        "module": "Control.Monad.Trans.RWS.Strict",
        "name": "RWS",
        "normalized": "",
        "package": "transformers",
        "partial": "RWS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Strict.html#t:RWST",
      "description": {
        "fct-descr": "\u003cp\u003eA monad transformer adding reading an environment of type \u003ccode\u003er\u003c/code\u003e,\n collecting an output of type \u003ccode\u003ew\u003c/code\u003e and updating a state of type \u003ccode\u003es\u003c/code\u003e\n to an inner monad \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Strict",
        "fct-package": "transformers",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Trans-RWS-Strict.html#RWST",
        "fct-type": "newtype",
        "title": "RWST"
      },
      "index": {
        "description": "monad transformer adding reading an environment of type collecting an output of type and updating state of type to an inner monad",
        "hierarchy": "Control Monad Trans RWS Strict",
        "module": "Control.Monad.Trans.RWS.Strict",
        "name": "RWST",
        "normalized": "",
        "package": "transformers",
        "partial": "RWST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Strict.html#v:RWST",
      "description": {
        "fct-module": "Control.Monad.Trans.RWS.Strict",
        "fct-package": "transformers",
        "fct-signature": "RWST",
        "fct-source": "src/Control-Monad-Trans-RWS-Strict.html#RWST",
        "fct-type": "function",
        "title": "RWST"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans RWS Strict",
        "module": "Control.Monad.Trans.RWS.Strict",
        "name": "RWST",
        "normalized": "",
        "package": "transformers",
        "partial": "RWST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Strict.html#v:ask",
      "description": {
        "fct-descr": "\u003cp\u003eFetch the value of the environment.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Strict",
        "fct-package": "transformers",
        "fct-signature": "RWST r w s m r",
        "fct-source": "src/Control-Monad-Trans-RWS-Strict.html#ask",
        "fct-type": "function",
        "title": "ask"
      },
      "index": {
        "description": "Fetch the value of the environment",
        "hierarchy": "Control Monad Trans RWS Strict",
        "module": "Control.Monad.Trans.RWS.Strict",
        "name": "ask",
        "normalized": "",
        "package": "transformers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Strict.html#v:asks",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve a function of the current environment.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003easks\u003c/a\u003e\u003c/code\u003e f = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e f \u003ccode\u003e\u003ca\u003eask\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Strict",
        "fct-package": "transformers",
        "fct-signature": "(r -\u003e a) -\u003e RWST r w s m a",
        "fct-source": "src/Control-Monad-Trans-RWS-Strict.html#asks",
        "fct-type": "function",
        "title": "asks"
      },
      "index": {
        "description": "Retrieve function of the current environment asks liftM ask",
        "hierarchy": "Control Monad Trans RWS Strict",
        "module": "Control.Monad.Trans.RWS.Strict",
        "name": "asks",
        "normalized": "(a-\u003eb)-\u003eRWST a c d e b",
        "package": "transformers",
        "partial": "",
        "signature": "(r-\u003ea)-\u003eRWST r w s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Strict.html#v:censor",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ecensor\u003c/a\u003e\u003c/code\u003e f m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e and\n applies the function \u003ccode\u003ef\u003c/code\u003e to its output, leaving the return value\n unchanged.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003ecensor\u003c/a\u003e\u003c/code\u003e f m = \u003ccode\u003e\u003ca\u003epass\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e (\\x -\u003e (x,f)) m)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunRWST\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ecensor\u003c/a\u003e\u003c/code\u003e f m) r s = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e (\\(a, w) -\u003e (a, f w)) (\u003ccode\u003e\u003ca\u003erunRWST\u003c/a\u003e\u003c/code\u003e m r s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Strict",
        "fct-package": "transformers",
        "fct-signature": "(w -\u003e w) -\u003e RWST r w s m a -\u003e RWST r w s m a",
        "fct-source": "src/Control-Monad-Trans-RWS-Strict.html#censor",
        "fct-type": "function",
        "title": "censor"
      },
      "index": {
        "description": "censor is an action that executes the action and applies the function to its output leaving the return value unchanged censor pass liftM runRWST censor liftM runRWST",
        "hierarchy": "Control Monad Trans RWS Strict",
        "module": "Control.Monad.Trans.RWS.Strict",
        "name": "censor",
        "normalized": "(a-\u003ea)-\u003eRWST b a c d e-\u003eRWST b a c d e",
        "package": "transformers",
        "partial": "",
        "signature": "(w-\u003ew)-\u003eRWST r w s m a-\u003eRWST r w s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Strict.html#v:evalRWS",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a computation with the given initial state and environment,\n returning the final value and output, discarding the final state.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Strict",
        "fct-package": "transformers",
        "fct-signature": "RWS r w s a-\u003e r-\u003e s-\u003e (a, w)",
        "fct-type": "function",
        "title": "evalRWS"
      },
      "index": {
        "description": "Evaluate computation with the given initial state and environment returning the final value and output discarding the final state",
        "hierarchy": "Control Monad Trans RWS Strict",
        "module": "Control.Monad.Trans.RWS.Strict",
        "name": "evalRWS",
        "normalized": "RWS a b c d-\u003ea-\u003ec-\u003e(d,b)",
        "package": "transformers",
        "partial": "RWS",
        "signature": "RWS r w s a-\u003er-\u003es-\u003e(a,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Strict.html#v:evalRWST",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a computation with the given initial state and environment,\n returning the final value and output, discarding the final state.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Strict",
        "fct-package": "transformers",
        "fct-signature": "RWST r w s m a-\u003e r-\u003e s-\u003e m (a, w)",
        "fct-type": "function",
        "title": "evalRWST"
      },
      "index": {
        "description": "Evaluate computation with the given initial state and environment returning the final value and output discarding the final state",
        "hierarchy": "Control Monad Trans RWS Strict",
        "module": "Control.Monad.Trans.RWS.Strict",
        "name": "evalRWST",
        "normalized": "RWST a b c d e-\u003ea-\u003ec-\u003ed(e,b)",
        "package": "transformers",
        "partial": "RWST",
        "signature": "RWST r w s m a-\u003er-\u003es-\u003em(a,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Strict.html#v:execRWS",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a computation with the given initial state and environment,\n returning the final state and output, discarding the final value.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Strict",
        "fct-package": "transformers",
        "fct-signature": "RWS r w s a-\u003e r-\u003e s-\u003e (s, w)",
        "fct-type": "function",
        "title": "execRWS"
      },
      "index": {
        "description": "Evaluate computation with the given initial state and environment returning the final state and output discarding the final value",
        "hierarchy": "Control Monad Trans RWS Strict",
        "module": "Control.Monad.Trans.RWS.Strict",
        "name": "execRWS",
        "normalized": "RWS a b c d-\u003ea-\u003ec-\u003e(c,b)",
        "package": "transformers",
        "partial": "RWS",
        "signature": "RWS r w s a-\u003er-\u003es-\u003e(s,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Strict.html#v:execRWST",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a computation with the given initial state and environment,\n returning the final state and output, discarding the final value.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Strict",
        "fct-package": "transformers",
        "fct-signature": "RWST r w s m a-\u003e r-\u003e s-\u003e m (s, w)",
        "fct-type": "function",
        "title": "execRWST"
      },
      "index": {
        "description": "Evaluate computation with the given initial state and environment returning the final state and output discarding the final value",
        "hierarchy": "Control Monad Trans RWS Strict",
        "module": "Control.Monad.Trans.RWS.Strict",
        "name": "execRWST",
        "normalized": "RWST a b c d e-\u003ea-\u003ec-\u003ed(c,b)",
        "package": "transformers",
        "partial": "RWST",
        "signature": "RWST r w s m a-\u003er-\u003es-\u003em(s,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Strict.html#v:get",
      "description": {
        "fct-descr": "\u003cp\u003eFetch the current value of the state within the monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Strict",
        "fct-package": "transformers",
        "fct-signature": "RWST r w s m s",
        "fct-source": "src/Control-Monad-Trans-RWS-Strict.html#get",
        "fct-type": "function",
        "title": "get"
      },
      "index": {
        "description": "Fetch the current value of the state within the monad",
        "hierarchy": "Control Monad Trans RWS Strict",
        "module": "Control.Monad.Trans.RWS.Strict",
        "name": "get",
        "normalized": "",
        "package": "transformers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Strict.html#v:gets",
      "description": {
        "fct-descr": "\u003cp\u003eGet a specific component of the state, using a projection function\n supplied.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003egets\u003c/a\u003e\u003c/code\u003e f = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e f \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Strict",
        "fct-package": "transformers",
        "fct-signature": "(s -\u003e a) -\u003e RWST r w s m a",
        "fct-source": "src/Control-Monad-Trans-RWS-Strict.html#gets",
        "fct-type": "function",
        "title": "gets"
      },
      "index": {
        "description": "Get specific component of the state using projection function supplied gets liftM get",
        "hierarchy": "Control Monad Trans RWS Strict",
        "module": "Control.Monad.Trans.RWS.Strict",
        "name": "gets",
        "normalized": "(a-\u003eb)-\u003eRWST c d a e b",
        "package": "transformers",
        "partial": "",
        "signature": "(s-\u003ea)-\u003eRWST r w s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Strict.html#v:liftCallCC",
      "description": {
        "fct-descr": "\u003cp\u003eUniform lifting of a \u003ccode\u003ecallCC\u003c/code\u003e operation to the new monad.\n This version rolls back to the original state on entering the\n continuation.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Strict",
        "fct-package": "transformers",
        "fct-signature": "((((a, s, w) -\u003e m (b, s, w)) -\u003e m (a, s, w)) -\u003e m (a, s, w)) -\u003e ((a -\u003e RWST r w s m b) -\u003e RWST r w s m a) -\u003e RWST r w s m a",
        "fct-source": "src/Control-Monad-Trans-RWS-Strict.html#liftCallCC",
        "fct-type": "function",
        "title": "liftCallCC"
      },
      "index": {
        "description": "Uniform lifting of callCC operation to the new monad This version rolls back to the original state on entering the continuation",
        "hierarchy": "Control Monad Trans RWS Strict",
        "module": "Control.Monad.Trans.RWS.Strict",
        "name": "liftCallCC",
        "normalized": "((((a,b,c)-\u003ed(e,b,c))-\u003ed(a,b,c))-\u003ed(a,b,c))-\u003e((a-\u003eRWST f c b d e)-\u003eRWST f c b d a)-\u003eRWST f c b d a",
        "package": "transformers",
        "partial": "Call CC",
        "signature": "((((a,s,w)-\u003em(b,s,w))-\u003em(a,s,w))-\u003em(a,s,w))-\u003e((a-\u003eRWST r w s m b)-\u003eRWST r w s m a)-\u003eRWST r w s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Strict.html#v:liftCallCC-39-",
      "description": {
        "fct-descr": "\u003cp\u003eIn-situ lifting of a \u003ccode\u003ecallCC\u003c/code\u003e operation to the new monad.\n This version uses the current state on entering the continuation.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Strict",
        "fct-package": "transformers",
        "fct-signature": "((((a, s, w) -\u003e m (b, s, w)) -\u003e m (a, s, w)) -\u003e m (a, s, w)) -\u003e ((a -\u003e RWST r w s m b) -\u003e RWST r w s m a) -\u003e RWST r w s m a",
        "fct-source": "src/Control-Monad-Trans-RWS-Strict.html#liftCallCC%27",
        "fct-type": "function",
        "title": "liftCallCC'"
      },
      "index": {
        "description": "In-situ lifting of callCC operation to the new monad This version uses the current state on entering the continuation",
        "hierarchy": "Control Monad Trans RWS Strict",
        "module": "Control.Monad.Trans.RWS.Strict",
        "name": "liftCallCC'",
        "normalized": "((((a,b,c)-\u003ed(e,b,c))-\u003ed(a,b,c))-\u003ed(a,b,c))-\u003e((a-\u003eRWST f c b d e)-\u003eRWST f c b d a)-\u003eRWST f c b d a",
        "package": "transformers",
        "partial": "Call CC'",
        "signature": "((((a,s,w)-\u003em(b,s,w))-\u003em(a,s,w))-\u003em(a,s,w))-\u003e((a-\u003eRWST r w s m b)-\u003eRWST r w s m a)-\u003eRWST r w s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Strict.html#v:liftCatch",
      "description": {
        "fct-descr": "\u003cp\u003eLift a \u003ccode\u003ecatchError\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Strict",
        "fct-package": "transformers",
        "fct-signature": "(m (a, s, w) -\u003e (e -\u003e m (a, s, w)) -\u003e m (a, s, w)) -\u003e RWST l w s m a -\u003e (e -\u003e RWST l w s m a) -\u003e RWST l w s m a",
        "fct-source": "src/Control-Monad-Trans-RWS-Strict.html#liftCatch",
        "fct-type": "function",
        "title": "liftCatch"
      },
      "index": {
        "description": "Lift catchError operation to the new monad",
        "hierarchy": "Control Monad Trans RWS Strict",
        "module": "Control.Monad.Trans.RWS.Strict",
        "name": "liftCatch",
        "normalized": "(a(b,c,d)-\u003e(e-\u003ea(b,c,d))-\u003ea(b,c,d))-\u003eRWST f d c a b-\u003e(e-\u003eRWST f d c a b)-\u003eRWST f d c a b",
        "package": "transformers",
        "partial": "Catch",
        "signature": "(m(a,s,w)-\u003e(e-\u003em(a,s,w))-\u003em(a,s,w))-\u003eRWST l w s m a-\u003e(e-\u003eRWST l w s m a)-\u003eRWST l w s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Strict.html#v:listen",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003elisten\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e and adds its\n output to the value of the computation.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunRWST\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003elisten\u003c/a\u003e\u003c/code\u003e m) r s = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e (\\(a, w) -\u003e ((a, w), w)) (\u003ccode\u003e\u003ca\u003erunRWST\u003c/a\u003e\u003c/code\u003e m r s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Strict",
        "fct-package": "transformers",
        "fct-signature": "RWST r w s m a -\u003e RWST r w s m (a, w)",
        "fct-source": "src/Control-Monad-Trans-RWS-Strict.html#listen",
        "fct-type": "function",
        "title": "listen"
      },
      "index": {
        "description": "listen is an action that executes the action and adds its output to the value of the computation runRWST listen liftM runRWST",
        "hierarchy": "Control Monad Trans RWS Strict",
        "module": "Control.Monad.Trans.RWS.Strict",
        "name": "listen",
        "normalized": "RWST a b c d e-\u003eRWST a b c d(e,b)",
        "package": "transformers",
        "partial": "",
        "signature": "RWST r w s m a-\u003eRWST r w s m(a,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Strict.html#v:listens",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003elistens\u003c/a\u003e\u003c/code\u003e f m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e and adds\n the result of applying \u003ccode\u003ef\u003c/code\u003e to the output to the value of the computation.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003elistens\u003c/a\u003e\u003c/code\u003e f m = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e (id *** f) (\u003ccode\u003e\u003ca\u003elisten\u003c/a\u003e\u003c/code\u003e m)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunRWST\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003elistens\u003c/a\u003e\u003c/code\u003e f m) r s = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e (\\(a, w) -\u003e ((a, f w), w)) (\u003ccode\u003e\u003ca\u003erunRWST\u003c/a\u003e\u003c/code\u003e m r s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Strict",
        "fct-package": "transformers",
        "fct-signature": "(w -\u003e b) -\u003e RWST r w s m a -\u003e RWST r w s m (a, b)",
        "fct-source": "src/Control-Monad-Trans-RWS-Strict.html#listens",
        "fct-type": "function",
        "title": "listens"
      },
      "index": {
        "description": "listens is an action that executes the action and adds the result of applying to the output to the value of the computation listens liftM id listen runRWST listens liftM runRWST",
        "hierarchy": "Control Monad Trans RWS Strict",
        "module": "Control.Monad.Trans.RWS.Strict",
        "name": "listens",
        "normalized": "(a-\u003eb)-\u003eRWST c a d e f-\u003eRWST c a d e(f,b)",
        "package": "transformers",
        "partial": "",
        "signature": "(w-\u003eb)-\u003eRWST r w s m a-\u003eRWST r w s m(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Strict.html#v:local",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a computation in a modified environment\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunRWST\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003elocal\u003c/a\u003e\u003c/code\u003e f m) r s = \u003ccode\u003e\u003ca\u003erunRWST\u003c/a\u003e\u003c/code\u003e m (f r) s\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Strict",
        "fct-package": "transformers",
        "fct-signature": "(r -\u003e r) -\u003e RWST r w s m a -\u003e RWST r w s m a",
        "fct-source": "src/Control-Monad-Trans-RWS-Strict.html#local",
        "fct-type": "function",
        "title": "local"
      },
      "index": {
        "description": "Execute computation in modified environment runRWST local runRWST",
        "hierarchy": "Control Monad Trans RWS Strict",
        "module": "Control.Monad.Trans.RWS.Strict",
        "name": "local",
        "normalized": "(a-\u003ea)-\u003eRWST a b c d e-\u003eRWST a b c d e",
        "package": "transformers",
        "partial": "",
        "signature": "(r-\u003er)-\u003eRWST r w s m a-\u003eRWST r w s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Strict.html#v:mapRWS",
      "description": {
        "fct-descr": "\u003cp\u003eMap the return value, final state and output of a computation using\n the given function.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunRWS\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emapRWS\u003c/a\u003e\u003c/code\u003e f m) r s = f (\u003ccode\u003e\u003ca\u003erunRWS\u003c/a\u003e\u003c/code\u003e m r s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Strict",
        "fct-package": "transformers",
        "fct-signature": "((a, s, w) -\u003e (b, s, w')) -\u003e RWS r w s a -\u003e RWS r w' s b",
        "fct-source": "src/Control-Monad-Trans-RWS-Strict.html#mapRWS",
        "fct-type": "function",
        "title": "mapRWS"
      },
      "index": {
        "description": "Map the return value final state and output of computation using the given function runRWS mapRWS runRWS",
        "hierarchy": "Control Monad Trans RWS Strict",
        "module": "Control.Monad.Trans.RWS.Strict",
        "name": "mapRWS",
        "normalized": "((a,b,c)-\u003e(d,b,e))-\u003eRWS f c b a-\u003eRWS f e b d",
        "package": "transformers",
        "partial": "RWS",
        "signature": "((a,s,w)-\u003e(b,s,w'))-\u003eRWS r w s a-\u003eRWS r w' s b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Strict.html#v:mapRWST",
      "description": {
        "fct-descr": "\u003cp\u003eMap the inner computation using the given function.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunRWST\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emapRWST\u003c/a\u003e\u003c/code\u003e f m) r s = f (\u003ccode\u003e\u003ca\u003erunRWST\u003c/a\u003e\u003c/code\u003e m r s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Strict",
        "fct-package": "transformers",
        "fct-signature": "(m (a, s, w) -\u003e n (b, s, w')) -\u003e RWST r w s m a -\u003e RWST r w' s n b",
        "fct-source": "src/Control-Monad-Trans-RWS-Strict.html#mapRWST",
        "fct-type": "function",
        "title": "mapRWST"
      },
      "index": {
        "description": "Map the inner computation using the given function runRWST mapRWST runRWST",
        "hierarchy": "Control Monad Trans RWS Strict",
        "module": "Control.Monad.Trans.RWS.Strict",
        "name": "mapRWST",
        "normalized": "(a(b,c,d)-\u003ee(f,c,g))-\u003eRWST h d c a b-\u003eRWST h g c e f",
        "package": "transformers",
        "partial": "RWST",
        "signature": "(m(a,s,w)-\u003en(b,s,w'))-\u003eRWST r w s m a-\u003eRWST r w' s n b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Strict.html#v:modify",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003emodify\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e is an action that updates the state to the result of\n applying \u003ccode\u003ef\u003c/code\u003e to the current state.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003emodify\u003c/a\u003e\u003c/code\u003e f = \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e \u003e\u003e= (\u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e . f)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Strict",
        "fct-package": "transformers",
        "fct-signature": "(s -\u003e s) -\u003e RWST r w s m ()",
        "fct-source": "src/Control-Monad-Trans-RWS-Strict.html#modify",
        "fct-type": "function",
        "title": "modify"
      },
      "index": {
        "description": "modify is an action that updates the state to the result of applying to the current state modify get put",
        "hierarchy": "Control Monad Trans RWS Strict",
        "module": "Control.Monad.Trans.RWS.Strict",
        "name": "modify",
        "normalized": "(a-\u003ea)-\u003eRWST b c a d()",
        "package": "transformers",
        "partial": "",
        "signature": "(s-\u003es)-\u003eRWST r w s m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Strict.html#v:pass",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003epass\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e, which returns\n a value and a function, and returns the value, applying the function\n to the output.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunRWST\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003epass\u003c/a\u003e\u003c/code\u003e m) r s = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e (\\((a, f), w) -\u003e (a, f w)) (\u003ccode\u003e\u003ca\u003erunRWST\u003c/a\u003e\u003c/code\u003e m r s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Strict",
        "fct-package": "transformers",
        "fct-signature": "RWST r w s m (a, w -\u003e w) -\u003e RWST r w s m a",
        "fct-source": "src/Control-Monad-Trans-RWS-Strict.html#pass",
        "fct-type": "function",
        "title": "pass"
      },
      "index": {
        "description": "pass is an action that executes the action which returns value and function and returns the value applying the function to the output runRWST pass liftM runRWST",
        "hierarchy": "Control Monad Trans RWS Strict",
        "module": "Control.Monad.Trans.RWS.Strict",
        "name": "pass",
        "normalized": "RWST a b c d(e,b-\u003eb)-\u003eRWST a b c d e",
        "package": "transformers",
        "partial": "",
        "signature": "RWST r w s m(a,w-\u003ew)-\u003eRWST r w s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Strict.html#v:put",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e s\u003c/code\u003e sets the state within the monad to \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Strict",
        "fct-package": "transformers",
        "fct-signature": "s -\u003e RWST r w s m ()",
        "fct-source": "src/Control-Monad-Trans-RWS-Strict.html#put",
        "fct-type": "function",
        "title": "put"
      },
      "index": {
        "description": "put sets the state within the monad to",
        "hierarchy": "Control Monad Trans RWS Strict",
        "module": "Control.Monad.Trans.RWS.Strict",
        "name": "put",
        "normalized": "a-\u003eRWST b c a d()",
        "package": "transformers",
        "partial": "",
        "signature": "s-\u003eRWST r w s m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Strict.html#v:reader",
      "description": {
        "fct-descr": "\u003cp\u003eConstructor for computations in the reader monad (equivalent to \u003ccode\u003e\u003ca\u003easks\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Strict",
        "fct-package": "transformers",
        "fct-signature": "(r -\u003e a) -\u003e RWST r w s m a",
        "fct-source": "src/Control-Monad-Trans-RWS-Strict.html#reader",
        "fct-type": "function",
        "title": "reader"
      },
      "index": {
        "description": "Constructor for computations in the reader monad equivalent to asks",
        "hierarchy": "Control Monad Trans RWS Strict",
        "module": "Control.Monad.Trans.RWS.Strict",
        "name": "reader",
        "normalized": "(a-\u003eb)-\u003eRWST a c d e b",
        "package": "transformers",
        "partial": "",
        "signature": "(r-\u003ea)-\u003eRWST r w s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Strict.html#v:runRWS",
      "description": {
        "fct-descr": "\u003cp\u003eUnwrap an RWS computation as a function.\n (The inverse of \u003ccode\u003e\u003ca\u003erws\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Strict",
        "fct-package": "transformers",
        "fct-signature": "RWS r w s a -\u003e r -\u003e s -\u003e (a, s, w)",
        "fct-source": "src/Control-Monad-Trans-RWS-Strict.html#runRWS",
        "fct-type": "function",
        "title": "runRWS"
      },
      "index": {
        "description": "Unwrap an RWS computation as function The inverse of rws",
        "hierarchy": "Control Monad Trans RWS Strict",
        "module": "Control.Monad.Trans.RWS.Strict",
        "name": "runRWS",
        "normalized": "RWS a b c d-\u003ea-\u003ec-\u003e(d,c,b)",
        "package": "transformers",
        "partial": "RWS",
        "signature": "RWS r w s a-\u003er-\u003es-\u003e(a,s,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Strict.html#v:runRWST",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Trans.RWS.Strict",
        "fct-package": "transformers",
        "fct-signature": "r -\u003e s -\u003e m (a, s, w)",
        "fct-source": "src/Control-Monad-Trans-RWS-Strict.html#RWST",
        "fct-type": "function",
        "title": "runRWST"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans RWS Strict",
        "module": "Control.Monad.Trans.RWS.Strict",
        "name": "runRWST",
        "normalized": "a-\u003eb-\u003ec(d,b,e)",
        "package": "transformers",
        "partial": "RWST",
        "signature": "r-\u003es-\u003em(a,s,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Strict.html#v:rws",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct an RWS computation from a function.\n (The inverse of \u003ccode\u003e\u003ca\u003erunRWS\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Strict",
        "fct-package": "transformers",
        "fct-signature": "(r -\u003e s -\u003e (a, s, w)) -\u003e RWS r w s a",
        "fct-source": "src/Control-Monad-Trans-RWS-Strict.html#rws",
        "fct-type": "function",
        "title": "rws"
      },
      "index": {
        "description": "Construct an RWS computation from function The inverse of runRWS",
        "hierarchy": "Control Monad Trans RWS Strict",
        "module": "Control.Monad.Trans.RWS.Strict",
        "name": "rws",
        "normalized": "(a-\u003eb-\u003e(c,b,d))-\u003eRWS a d b c",
        "package": "transformers",
        "partial": "",
        "signature": "(r-\u003es-\u003e(a,s,w))-\u003eRWS r w s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Strict.html#v:state",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a state monad computation from a state transformer function.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Strict",
        "fct-package": "transformers",
        "fct-signature": "(s -\u003e (a, s)) -\u003e RWST r w s m a",
        "fct-source": "src/Control-Monad-Trans-RWS-Strict.html#state",
        "fct-type": "function",
        "title": "state"
      },
      "index": {
        "description": "Construct state monad computation from state transformer function",
        "hierarchy": "Control Monad Trans RWS Strict",
        "module": "Control.Monad.Trans.RWS.Strict",
        "name": "state",
        "normalized": "(a-\u003e(b,a))-\u003eRWST c d a e b",
        "package": "transformers",
        "partial": "",
        "signature": "(s-\u003e(a,s))-\u003eRWST r w s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Strict.html#v:tell",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003etell\u003c/a\u003e\u003c/code\u003e w\u003c/code\u003e is an action that produces the output \u003ccode\u003ew\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Strict",
        "fct-package": "transformers",
        "fct-signature": "w -\u003e RWST r w s m ()",
        "fct-source": "src/Control-Monad-Trans-RWS-Strict.html#tell",
        "fct-type": "function",
        "title": "tell"
      },
      "index": {
        "description": "tell is an action that produces the output",
        "hierarchy": "Control Monad Trans RWS Strict",
        "module": "Control.Monad.Trans.RWS.Strict",
        "name": "tell",
        "normalized": "a-\u003eRWST b a c d()",
        "package": "transformers",
        "partial": "",
        "signature": "w-\u003eRWST r w s m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Strict.html#v:withRWS",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ewithRWS\u003c/a\u003e\u003c/code\u003e f m\u003c/code\u003e executes action \u003ccode\u003em\u003c/code\u003e with an initial environment\n and state modified by applying \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunRWS\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ewithRWS\u003c/a\u003e\u003c/code\u003e f m) r s = \u003ccode\u003e\u003ca\u003euncurry\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunRWS\u003c/a\u003e\u003c/code\u003e m) (f r s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Strict",
        "fct-package": "transformers",
        "fct-signature": "(r' -\u003e s -\u003e (r, s)) -\u003e RWS r w s a -\u003e RWS r' w s a",
        "fct-source": "src/Control-Monad-Trans-RWS-Strict.html#withRWS",
        "fct-type": "function",
        "title": "withRWS"
      },
      "index": {
        "description": "withRWS executes action with an initial environment and state modified by applying runRWS withRWS uncurry runRWS",
        "hierarchy": "Control Monad Trans RWS Strict",
        "module": "Control.Monad.Trans.RWS.Strict",
        "name": "withRWS",
        "normalized": "(a-\u003eb-\u003e(c,b))-\u003eRWS c d b e-\u003eRWS a d b e",
        "package": "transformers",
        "partial": "RWS",
        "signature": "(r'-\u003es-\u003e(r,s))-\u003eRWS r w s a-\u003eRWS r' w s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Strict.html#v:withRWST",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ewithRWST\u003c/a\u003e\u003c/code\u003e f m\u003c/code\u003e executes action \u003ccode\u003em\u003c/code\u003e with an initial environment\n and state modified by applying \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunRWST\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ewithRWST\u003c/a\u003e\u003c/code\u003e f m) r s = \u003ccode\u003e\u003ca\u003euncurry\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunRWST\u003c/a\u003e\u003c/code\u003e m) (f r s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Strict",
        "fct-package": "transformers",
        "fct-signature": "(r' -\u003e s -\u003e (r, s)) -\u003e RWST r w s m a -\u003e RWST r' w s m a",
        "fct-source": "src/Control-Monad-Trans-RWS-Strict.html#withRWST",
        "fct-type": "function",
        "title": "withRWST"
      },
      "index": {
        "description": "withRWST executes action with an initial environment and state modified by applying runRWST withRWST uncurry runRWST",
        "hierarchy": "Control Monad Trans RWS Strict",
        "module": "Control.Monad.Trans.RWS.Strict",
        "name": "withRWST",
        "normalized": "(a-\u003eb-\u003e(c,b))-\u003eRWST c d b e f-\u003eRWST a d b e f",
        "package": "transformers",
        "partial": "RWST",
        "signature": "(r'-\u003es-\u003e(r,s))-\u003eRWST r w s m a-\u003eRWST r' w s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS-Strict.html#v:writer",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a writer computation from a (result, output) pair.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.RWS.Strict",
        "fct-package": "transformers",
        "fct-signature": "(a, w) -\u003e RWST r w s m a",
        "fct-source": "src/Control-Monad-Trans-RWS-Strict.html#writer",
        "fct-type": "function",
        "title": "writer"
      },
      "index": {
        "description": "Construct writer computation from result output pair",
        "hierarchy": "Control Monad Trans RWS Strict",
        "module": "Control.Monad.Trans.RWS.Strict",
        "name": "writer",
        "normalized": "(a,b)-\u003eRWST c b d e a",
        "package": "transformers",
        "partial": "",
        "signature": "(a,w)-\u003eRWST r w s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-RWS.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA monad transformer that combines \u003ccode\u003eReaderT\u003c/code\u003e, \u003ccode\u003eWriterT\u003c/code\u003e and \u003ccode\u003eStateT\u003c/code\u003e.\n This version is lazy; for a strict version, see\n \u003ca\u003eControl.Monad.Trans.RWS.Strict\u003c/a\u003e, which has the same interface.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Trans.RWS",
        "fct-package": "transformers",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Trans-RWS.html",
        "fct-type": "module",
        "title": "RWS"
      },
      "index": {
        "description": "monad transformer that combines ReaderT WriterT and StateT This version is lazy for strict version see Control.Monad.Trans.RWS.Strict which has the same interface",
        "hierarchy": "Control Monad Trans RWS",
        "module": "Control.Monad.Trans.RWS",
        "name": "RWS",
        "normalized": "",
        "package": "transformers",
        "partial": "RWS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Reader.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDeclaration of the \u003ccode\u003e\u003ca\u003eReaderT\u003c/a\u003e\u003c/code\u003e monad transformer, which adds a static\n environment to a given monad.\n\u003c/p\u003e\u003cp\u003eIf the computation is to modify the stored information, use\n \u003ca\u003eControl.Monad.Trans.State\u003c/a\u003e instead.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Trans.Reader",
        "fct-package": "transformers",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Trans-Reader.html",
        "fct-type": "module",
        "title": "Reader"
      },
      "index": {
        "description": "Declaration of the ReaderT monad transformer which adds static environment to given monad If the computation is to modify the stored information use Control.Monad.Trans.State instead",
        "hierarchy": "Control Monad Trans Reader",
        "module": "Control.Monad.Trans.Reader",
        "name": "Reader",
        "normalized": "",
        "package": "transformers",
        "partial": "Reader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Reader.html#t:Reader",
      "description": {
        "fct-descr": "\u003cp\u003eThe parameterizable reader monad.\n\u003c/p\u003e\u003cp\u003eComputations are functions of a shared environment.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function ignores the environment, while \u003ccode\u003e\u003e\u003e=\u003c/code\u003e passes\n the inherited environment to both subcomputations.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Reader",
        "fct-package": "transformers",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Trans-Reader.html#Reader",
        "fct-type": "type",
        "title": "Reader"
      },
      "index": {
        "description": "The parameterizable reader monad Computations are functions of shared environment The return function ignores the environment while passes the inherited environment to both subcomputations",
        "hierarchy": "Control Monad Trans Reader",
        "module": "Control.Monad.Trans.Reader",
        "name": "Reader",
        "normalized": "",
        "package": "transformers",
        "partial": "Reader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Reader.html#t:ReaderT",
      "description": {
        "fct-descr": "\u003cp\u003eThe reader monad transformer,\n which adds a read-only environment to the given monad.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function ignores the environment, while \u003ccode\u003e\u003e\u003e=\u003c/code\u003e passes\n the inherited environment to both subcomputations.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Reader",
        "fct-package": "transformers",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Trans-Reader.html#ReaderT",
        "fct-type": "newtype",
        "title": "ReaderT"
      },
      "index": {
        "description": "The reader monad transformer which adds read-only environment to the given monad The return function ignores the environment while passes the inherited environment to both subcomputations",
        "hierarchy": "Control Monad Trans Reader",
        "module": "Control.Monad.Trans.Reader",
        "name": "ReaderT",
        "normalized": "",
        "package": "transformers",
        "partial": "Reader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Reader.html#v:ReaderT",
      "description": {
        "fct-module": "Control.Monad.Trans.Reader",
        "fct-package": "transformers",
        "fct-signature": "ReaderT",
        "fct-source": "src/Control-Monad-Trans-Reader.html#ReaderT",
        "fct-type": "function",
        "title": "ReaderT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Reader",
        "module": "Control.Monad.Trans.Reader",
        "name": "ReaderT",
        "normalized": "",
        "package": "transformers",
        "partial": "Reader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Reader.html#v:ask",
      "description": {
        "fct-descr": "\u003cp\u003eFetch the value of the environment.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Reader",
        "fct-package": "transformers",
        "fct-signature": "ReaderT r m r",
        "fct-source": "src/Control-Monad-Trans-Reader.html#ask",
        "fct-type": "function",
        "title": "ask"
      },
      "index": {
        "description": "Fetch the value of the environment",
        "hierarchy": "Control Monad Trans Reader",
        "module": "Control.Monad.Trans.Reader",
        "name": "ask",
        "normalized": "",
        "package": "transformers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Reader.html#v:asks",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve a function of the current environment.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003easks\u003c/a\u003e\u003c/code\u003e f = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e f \u003ccode\u003e\u003ca\u003eask\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.Reader",
        "fct-package": "transformers",
        "fct-signature": "(r -\u003e a)-\u003e ReaderT r m a",
        "fct-type": "function",
        "title": "asks"
      },
      "index": {
        "description": "Retrieve function of the current environment asks liftM ask",
        "hierarchy": "Control Monad Trans Reader",
        "module": "Control.Monad.Trans.Reader",
        "name": "asks",
        "normalized": "(a-\u003eb)-\u003eReaderT a c b",
        "package": "transformers",
        "partial": "",
        "signature": "(r-\u003ea)-\u003eReaderT r m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Reader.html#v:liftCallCC",
      "description": {
        "fct-descr": "\u003cp\u003eLift a \u003ccode\u003ecallCC\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Reader",
        "fct-package": "transformers",
        "fct-signature": "(((a -\u003e m b) -\u003e m a) -\u003e m a)-\u003e ((a -\u003e ReaderT r m b) -\u003e ReaderT r m a)-\u003e ReaderT r m a",
        "fct-type": "function",
        "title": "liftCallCC"
      },
      "index": {
        "description": "Lift callCC operation to the new monad",
        "hierarchy": "Control Monad Trans Reader",
        "module": "Control.Monad.Trans.Reader",
        "name": "liftCallCC",
        "normalized": "(((a-\u003eb c)-\u003eb a)-\u003eb a)-\u003e((a-\u003eReaderT d b c)-\u003eReaderT d b a)-\u003eReaderT d b a",
        "package": "transformers",
        "partial": "Call CC",
        "signature": "(((a-\u003em b)-\u003em a)-\u003em a)-\u003e((a-\u003eReaderT r m b)-\u003eReaderT r m a)-\u003eReaderT r m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Reader.html#v:liftCatch",
      "description": {
        "fct-descr": "\u003cp\u003eLift a \u003ccode\u003ecatchError\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Reader",
        "fct-package": "transformers",
        "fct-signature": "(m a -\u003e (e -\u003e m a) -\u003e m a)-\u003e ReaderT r m a-\u003e (e -\u003e ReaderT r m a)-\u003e ReaderT r m a",
        "fct-type": "function",
        "title": "liftCatch"
      },
      "index": {
        "description": "Lift catchError operation to the new monad",
        "hierarchy": "Control Monad Trans Reader",
        "module": "Control.Monad.Trans.Reader",
        "name": "liftCatch",
        "normalized": "(a b-\u003e(c-\u003ea b)-\u003ea b)-\u003eReaderT d a b-\u003e(c-\u003eReaderT d a b)-\u003eReaderT d a b",
        "package": "transformers",
        "partial": "Catch",
        "signature": "(m a-\u003e(e-\u003em a)-\u003em a)-\u003eReaderT r m a-\u003e(e-\u003eReaderT r m a)-\u003eReaderT r m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Reader.html#v:local",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a computation in a modified environment\n (a specialization of \u003ccode\u003e\u003ca\u003ewithReaderT\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunReaderT\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003elocal\u003c/a\u003e\u003c/code\u003e f m) = \u003ccode\u003e\u003ca\u003erunReaderT\u003c/a\u003e\u003c/code\u003e m . f\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.Reader",
        "fct-package": "transformers",
        "fct-signature": "(r -\u003e r)-\u003e ReaderT r m a-\u003e ReaderT r m a",
        "fct-type": "function",
        "title": "local"
      },
      "index": {
        "description": "Execute computation in modified environment specialization of withReaderT runReaderT local runReaderT",
        "hierarchy": "Control Monad Trans Reader",
        "module": "Control.Monad.Trans.Reader",
        "name": "local",
        "normalized": "(a-\u003ea)-\u003eReaderT a b c-\u003eReaderT a b c",
        "package": "transformers",
        "partial": "",
        "signature": "(r-\u003er)-\u003eReaderT r m a-\u003eReaderT r m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Reader.html#v:mapReader",
      "description": {
        "fct-descr": "\u003cp\u003eTransform the value returned by a \u003ccode\u003eReader\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunReader\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emapReader\u003c/a\u003e\u003c/code\u003e f m) = f . \u003ccode\u003e\u003ca\u003erunReader\u003c/a\u003e\u003c/code\u003e m\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.Reader",
        "fct-package": "transformers",
        "fct-signature": "(a -\u003e b) -\u003e Reader r a -\u003e Reader r b",
        "fct-source": "src/Control-Monad-Trans-Reader.html#mapReader",
        "fct-type": "function",
        "title": "mapReader"
      },
      "index": {
        "description": "Transform the value returned by Reader runReader mapReader runReader",
        "hierarchy": "Control Monad Trans Reader",
        "module": "Control.Monad.Trans.Reader",
        "name": "mapReader",
        "normalized": "(a-\u003eb)-\u003eReader c a-\u003eReader c b",
        "package": "transformers",
        "partial": "Reader",
        "signature": "(a-\u003eb)-\u003eReader r a-\u003eReader r b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Reader.html#v:mapReaderT",
      "description": {
        "fct-descr": "\u003cp\u003eTransform the computation inside a \u003ccode\u003eReaderT\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunReaderT\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emapReaderT\u003c/a\u003e\u003c/code\u003e f m) = f . \u003ccode\u003e\u003ca\u003erunReaderT\u003c/a\u003e\u003c/code\u003e m\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.Reader",
        "fct-package": "transformers",
        "fct-signature": "(m a -\u003e n b) -\u003e ReaderT r m a -\u003e ReaderT r n b",
        "fct-source": "src/Control-Monad-Trans-Reader.html#mapReaderT",
        "fct-type": "function",
        "title": "mapReaderT"
      },
      "index": {
        "description": "Transform the computation inside ReaderT runReaderT mapReaderT runReaderT",
        "hierarchy": "Control Monad Trans Reader",
        "module": "Control.Monad.Trans.Reader",
        "name": "mapReaderT",
        "normalized": "(a b-\u003ec d)-\u003eReaderT e a b-\u003eReaderT e c d",
        "package": "transformers",
        "partial": "Reader",
        "signature": "(m a-\u003en b)-\u003eReaderT r m a-\u003eReaderT r n b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Reader.html#v:reader",
      "description": {
        "fct-descr": "\u003cp\u003eConstructor for computations in the reader monad (equivalent to \u003ccode\u003e\u003ca\u003easks\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Reader",
        "fct-package": "transformers",
        "fct-signature": "(r -\u003e a) -\u003e ReaderT r m a",
        "fct-source": "src/Control-Monad-Trans-Reader.html#reader",
        "fct-type": "function",
        "title": "reader"
      },
      "index": {
        "description": "Constructor for computations in the reader monad equivalent to asks",
        "hierarchy": "Control Monad Trans Reader",
        "module": "Control.Monad.Trans.Reader",
        "name": "reader",
        "normalized": "(a-\u003eb)-\u003eReaderT a c b",
        "package": "transformers",
        "partial": "",
        "signature": "(r-\u003ea)-\u003eReaderT r m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Reader.html#v:runReader",
      "description": {
        "fct-descr": "\u003cp\u003eRuns a \u003ccode\u003eReader\u003c/code\u003e and extracts the final value from it.\n (The inverse of \u003ccode\u003e\u003ca\u003ereader\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Reader",
        "fct-package": "transformers",
        "fct-signature": "Reader r a-\u003e r-\u003e a",
        "fct-type": "function",
        "title": "runReader"
      },
      "index": {
        "description": "Runs Reader and extracts the final value from it The inverse of reader",
        "hierarchy": "Control Monad Trans Reader",
        "module": "Control.Monad.Trans.Reader",
        "name": "runReader",
        "normalized": "Reader a b-\u003ea-\u003eb",
        "package": "transformers",
        "partial": "Reader",
        "signature": "Reader r a-\u003er-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Reader.html#v:runReaderT",
      "description": {
        "fct-descr": "\u003cp\u003eThe underlying computation, as a function of the environment.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Reader",
        "fct-package": "transformers",
        "fct-signature": "r -\u003e m a",
        "fct-source": "src/Control-Monad-Trans-Reader.html#ReaderT",
        "fct-type": "function",
        "title": "runReaderT"
      },
      "index": {
        "description": "The underlying computation as function of the environment",
        "hierarchy": "Control Monad Trans Reader",
        "module": "Control.Monad.Trans.Reader",
        "name": "runReaderT",
        "normalized": "a-\u003eb c",
        "package": "transformers",
        "partial": "Reader",
        "signature": "r-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Reader.html#v:withReader",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a computation in a modified environment\n (a specialization of \u003ccode\u003e\u003ca\u003ewithReaderT\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunReader\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ewithReader\u003c/a\u003e\u003c/code\u003e f m) = \u003ccode\u003e\u003ca\u003erunReader\u003c/a\u003e\u003c/code\u003e m . f\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.Reader",
        "fct-package": "transformers",
        "fct-signature": "(r' -\u003e r)-\u003e Reader r a-\u003e Reader r' a",
        "fct-type": "function",
        "title": "withReader"
      },
      "index": {
        "description": "Execute computation in modified environment specialization of withReaderT runReader withReader runReader",
        "hierarchy": "Control Monad Trans Reader",
        "module": "Control.Monad.Trans.Reader",
        "name": "withReader",
        "normalized": "(a-\u003eb)-\u003eReader b c-\u003eReader a c",
        "package": "transformers",
        "partial": "Reader",
        "signature": "(r'-\u003er)-\u003eReader r a-\u003eReader r' a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Reader.html#v:withReaderT",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a computation in a modified environment\n (a more general version of \u003ccode\u003e\u003ca\u003elocal\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunReaderT\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ewithReaderT\u003c/a\u003e\u003c/code\u003e f m) = \u003ccode\u003e\u003ca\u003erunReaderT\u003c/a\u003e\u003c/code\u003e m . f\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.Reader",
        "fct-package": "transformers",
        "fct-signature": "(r' -\u003e r)-\u003e ReaderT r m a-\u003e ReaderT r' m a",
        "fct-type": "function",
        "title": "withReaderT"
      },
      "index": {
        "description": "Execute computation in modified environment more general version of local runReaderT withReaderT runReaderT",
        "hierarchy": "Control Monad Trans Reader",
        "module": "Control.Monad.Trans.Reader",
        "name": "withReaderT",
        "normalized": "(a-\u003eb)-\u003eReaderT b c d-\u003eReaderT a c d",
        "package": "transformers",
        "partial": "Reader",
        "signature": "(r'-\u003er)-\u003eReaderT r m a-\u003eReaderT r' m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-State-Lazy.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLazy state monads, passing an updatable state through a computation.\n See below for examples.\n\u003c/p\u003e\u003cp\u003eIn this version, sequencing of computations is lazy.\n For a strict version, see \u003ca\u003eControl.Monad.Trans.State.Strict\u003c/a\u003e, which\n has the same interface.\n\u003c/p\u003e\u003cp\u003eSome computations may not require the full power of state transformers:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e For a read-only state, see \u003ca\u003eControl.Monad.Trans.Reader\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e To accumulate a value without using it on the way, see\n   \u003ca\u003eControl.Monad.Trans.Writer\u003c/a\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Trans.State.Lazy",
        "fct-package": "transformers",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Trans-State-Lazy.html",
        "fct-type": "module",
        "title": "Lazy"
      },
      "index": {
        "description": "Lazy state monads passing an updatable state through computation See below for examples In this version sequencing of computations is lazy For strict version see Control.Monad.Trans.State.Strict which has the same interface Some computations may not require the full power of state transformers For read-only state see Control.Monad.Trans.Reader To accumulate value without using it on the way see Control.Monad.Trans.Writer",
        "hierarchy": "Control Monad Trans State Lazy",
        "module": "Control.Monad.Trans.State.Lazy",
        "name": "Lazy",
        "normalized": "",
        "package": "transformers",
        "partial": "Lazy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-State-Lazy.html#t:State",
      "description": {
        "fct-descr": "\u003cp\u003eA state monad parameterized by the type \u003ccode\u003es\u003c/code\u003e of the state to carry.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function leaves the state unchanged, while \u003ccode\u003e\u003e\u003e=\u003c/code\u003e uses\n the final state of the first computation as the initial state of\n the second.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.State.Lazy",
        "fct-package": "transformers",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Trans-State-Lazy.html#State",
        "fct-type": "type",
        "title": "State"
      },
      "index": {
        "description": "state monad parameterized by the type of the state to carry The return function leaves the state unchanged while uses the final state of the first computation as the initial state of the second",
        "hierarchy": "Control Monad Trans State Lazy",
        "module": "Control.Monad.Trans.State.Lazy",
        "name": "State",
        "normalized": "",
        "package": "transformers",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-State-Lazy.html#t:StateT",
      "description": {
        "fct-descr": "\u003cp\u003eA state transformer monad parameterized by:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003es\u003c/code\u003e - The state.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003em\u003c/code\u003e - The inner monad.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function leaves the state unchanged, while \u003ccode\u003e\u003e\u003e=\u003c/code\u003e uses\n the final state of the first computation as the initial state of\n the second.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.State.Lazy",
        "fct-package": "transformers",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Trans-State-Lazy.html#StateT",
        "fct-type": "newtype",
        "title": "StateT"
      },
      "index": {
        "description": "state transformer monad parameterized by The state The inner monad The return function leaves the state unchanged while uses the final state of the first computation as the initial state of the second",
        "hierarchy": "Control Monad Trans State Lazy",
        "module": "Control.Monad.Trans.State.Lazy",
        "name": "StateT",
        "normalized": "",
        "package": "transformers",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-State-Lazy.html#v:StateT",
      "description": {
        "fct-module": "Control.Monad.Trans.State.Lazy",
        "fct-package": "transformers",
        "fct-signature": "StateT",
        "fct-source": "src/Control-Monad-Trans-State-Lazy.html#StateT",
        "fct-type": "function",
        "title": "StateT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans State Lazy",
        "module": "Control.Monad.Trans.State.Lazy",
        "name": "StateT",
        "normalized": "",
        "package": "transformers",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-State-Lazy.html#v:evalState",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a state computation with the given initial state\n and return the final value, discarding the final state.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eevalState\u003c/a\u003e\u003c/code\u003e m s = \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunState\u003c/a\u003e\u003c/code\u003e m s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.State.Lazy",
        "fct-package": "transformers",
        "fct-signature": "State s a-\u003e s-\u003e a",
        "fct-type": "function",
        "title": "evalState"
      },
      "index": {
        "description": "Evaluate state computation with the given initial state and return the final value discarding the final state evalState fst runState",
        "hierarchy": "Control Monad Trans State Lazy",
        "module": "Control.Monad.Trans.State.Lazy",
        "name": "evalState",
        "normalized": "State a b-\u003ea-\u003eb",
        "package": "transformers",
        "partial": "State",
        "signature": "State s a-\u003es-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-State-Lazy.html#v:evalStateT",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a state computation with the given initial state\n and return the final value, discarding the final state.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eevalStateT\u003c/a\u003e\u003c/code\u003e m s = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunStateT\u003c/a\u003e\u003c/code\u003e m s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.State.Lazy",
        "fct-package": "transformers",
        "fct-signature": "StateT s m a -\u003e s -\u003e m a",
        "fct-source": "src/Control-Monad-Trans-State-Lazy.html#evalStateT",
        "fct-type": "function",
        "title": "evalStateT"
      },
      "index": {
        "description": "Evaluate state computation with the given initial state and return the final value discarding the final state evalStateT liftM fst runStateT",
        "hierarchy": "Control Monad Trans State Lazy",
        "module": "Control.Monad.Trans.State.Lazy",
        "name": "evalStateT",
        "normalized": "StateT a b c-\u003ea-\u003eb c",
        "package": "transformers",
        "partial": "State",
        "signature": "StateT s m a-\u003es-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-State-Lazy.html#v:execState",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a state computation with the given initial state\n and return the final state, discarding the final value.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eexecState\u003c/a\u003e\u003c/code\u003e m s = \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunState\u003c/a\u003e\u003c/code\u003e m s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.State.Lazy",
        "fct-package": "transformers",
        "fct-signature": "State s a-\u003e s-\u003e s",
        "fct-type": "function",
        "title": "execState"
      },
      "index": {
        "description": "Evaluate state computation with the given initial state and return the final state discarding the final value execState snd runState",
        "hierarchy": "Control Monad Trans State Lazy",
        "module": "Control.Monad.Trans.State.Lazy",
        "name": "execState",
        "normalized": "State a b-\u003ea-\u003ea",
        "package": "transformers",
        "partial": "State",
        "signature": "State s a-\u003es-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-State-Lazy.html#v:execStateT",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a state computation with the given initial state\n and return the final state, discarding the final value.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eexecStateT\u003c/a\u003e\u003c/code\u003e m s = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunStateT\u003c/a\u003e\u003c/code\u003e m s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.State.Lazy",
        "fct-package": "transformers",
        "fct-signature": "StateT s m a -\u003e s -\u003e m s",
        "fct-source": "src/Control-Monad-Trans-State-Lazy.html#execStateT",
        "fct-type": "function",
        "title": "execStateT"
      },
      "index": {
        "description": "Evaluate state computation with the given initial state and return the final state discarding the final value execStateT liftM snd runStateT",
        "hierarchy": "Control Monad Trans State Lazy",
        "module": "Control.Monad.Trans.State.Lazy",
        "name": "execStateT",
        "normalized": "StateT a b c-\u003ea-\u003eb a",
        "package": "transformers",
        "partial": "State",
        "signature": "StateT s m a-\u003es-\u003em s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-State-Lazy.html#v:get",
      "description": {
        "fct-descr": "\u003cp\u003eFetch the current value of the state within the monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.State.Lazy",
        "fct-package": "transformers",
        "fct-signature": "StateT s m s",
        "fct-source": "src/Control-Monad-Trans-State-Lazy.html#get",
        "fct-type": "function",
        "title": "get"
      },
      "index": {
        "description": "Fetch the current value of the state within the monad",
        "hierarchy": "Control Monad Trans State Lazy",
        "module": "Control.Monad.Trans.State.Lazy",
        "name": "get",
        "normalized": "",
        "package": "transformers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-State-Lazy.html#v:gets",
      "description": {
        "fct-descr": "\u003cp\u003eGet a specific component of the state, using a projection function\n supplied.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003egets\u003c/a\u003e\u003c/code\u003e f = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e f \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.State.Lazy",
        "fct-package": "transformers",
        "fct-signature": "(s -\u003e a) -\u003e StateT s m a",
        "fct-source": "src/Control-Monad-Trans-State-Lazy.html#gets",
        "fct-type": "function",
        "title": "gets"
      },
      "index": {
        "description": "Get specific component of the state using projection function supplied gets liftM get",
        "hierarchy": "Control Monad Trans State Lazy",
        "module": "Control.Monad.Trans.State.Lazy",
        "name": "gets",
        "normalized": "(a-\u003eb)-\u003eStateT a c b",
        "package": "transformers",
        "partial": "",
        "signature": "(s-\u003ea)-\u003eStateT s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-State-Lazy.html#v:liftCallCC",
      "description": {
        "fct-descr": "\u003cp\u003eUniform lifting of a \u003ccode\u003ecallCC\u003c/code\u003e operation to the new monad.\n This version rolls back to the original state on entering the\n continuation.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.State.Lazy",
        "fct-package": "transformers",
        "fct-signature": "((((a, s) -\u003e m (b, s)) -\u003e m (a, s)) -\u003e m (a, s)) -\u003e ((a -\u003e StateT s m b) -\u003e StateT s m a) -\u003e StateT s m a",
        "fct-source": "src/Control-Monad-Trans-State-Lazy.html#liftCallCC",
        "fct-type": "function",
        "title": "liftCallCC"
      },
      "index": {
        "description": "Uniform lifting of callCC operation to the new monad This version rolls back to the original state on entering the continuation",
        "hierarchy": "Control Monad Trans State Lazy",
        "module": "Control.Monad.Trans.State.Lazy",
        "name": "liftCallCC",
        "normalized": "((((a,b)-\u003ec(d,b))-\u003ec(a,b))-\u003ec(a,b))-\u003e((a-\u003eStateT b c d)-\u003eStateT b c a)-\u003eStateT b c a",
        "package": "transformers",
        "partial": "Call CC",
        "signature": "((((a,s)-\u003em(b,s))-\u003em(a,s))-\u003em(a,s))-\u003e((a-\u003eStateT s m b)-\u003eStateT s m a)-\u003eStateT s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-State-Lazy.html#v:liftCallCC-39-",
      "description": {
        "fct-descr": "\u003cp\u003eIn-situ lifting of a \u003ccode\u003ecallCC\u003c/code\u003e operation to the new monad.\n This version uses the current state on entering the continuation.\n It does not satisfy the laws of a monad transformer.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.State.Lazy",
        "fct-package": "transformers",
        "fct-signature": "((((a, s) -\u003e m (b, s)) -\u003e m (a, s)) -\u003e m (a, s)) -\u003e ((a -\u003e StateT s m b) -\u003e StateT s m a) -\u003e StateT s m a",
        "fct-source": "src/Control-Monad-Trans-State-Lazy.html#liftCallCC%27",
        "fct-type": "function",
        "title": "liftCallCC'"
      },
      "index": {
        "description": "In-situ lifting of callCC operation to the new monad This version uses the current state on entering the continuation It does not satisfy the laws of monad transformer",
        "hierarchy": "Control Monad Trans State Lazy",
        "module": "Control.Monad.Trans.State.Lazy",
        "name": "liftCallCC'",
        "normalized": "((((a,b)-\u003ec(d,b))-\u003ec(a,b))-\u003ec(a,b))-\u003e((a-\u003eStateT b c d)-\u003eStateT b c a)-\u003eStateT b c a",
        "package": "transformers",
        "partial": "Call CC'",
        "signature": "((((a,s)-\u003em(b,s))-\u003em(a,s))-\u003em(a,s))-\u003e((a-\u003eStateT s m b)-\u003eStateT s m a)-\u003eStateT s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-State-Lazy.html#v:liftCatch",
      "description": {
        "fct-descr": "\u003cp\u003eLift a \u003ccode\u003ecatchError\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.State.Lazy",
        "fct-package": "transformers",
        "fct-signature": "(m (a, s) -\u003e (e -\u003e m (a, s)) -\u003e m (a, s)) -\u003e StateT s m a -\u003e (e -\u003e StateT s m a) -\u003e StateT s m a",
        "fct-source": "src/Control-Monad-Trans-State-Lazy.html#liftCatch",
        "fct-type": "function",
        "title": "liftCatch"
      },
      "index": {
        "description": "Lift catchError operation to the new monad",
        "hierarchy": "Control Monad Trans State Lazy",
        "module": "Control.Monad.Trans.State.Lazy",
        "name": "liftCatch",
        "normalized": "(a(b,c)-\u003e(d-\u003ea(b,c))-\u003ea(b,c))-\u003eStateT c a b-\u003e(d-\u003eStateT c a b)-\u003eStateT c a b",
        "package": "transformers",
        "partial": "Catch",
        "signature": "(m(a,s)-\u003e(e-\u003em(a,s))-\u003em(a,s))-\u003eStateT s m a-\u003e(e-\u003eStateT s m a)-\u003eStateT s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-State-Lazy.html#v:liftListen",
      "description": {
        "fct-descr": "\u003cp\u003eLift a \u003ccode\u003elisten\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.State.Lazy",
        "fct-package": "transformers",
        "fct-signature": "(m (a, s) -\u003e m ((a, s), w)) -\u003e StateT s m a -\u003e StateT s m (a, w)",
        "fct-source": "src/Control-Monad-Trans-State-Lazy.html#liftListen",
        "fct-type": "function",
        "title": "liftListen"
      },
      "index": {
        "description": "Lift listen operation to the new monad",
        "hierarchy": "Control Monad Trans State Lazy",
        "module": "Control.Monad.Trans.State.Lazy",
        "name": "liftListen",
        "normalized": "(a(b,c)-\u003ea((b,c),d))-\u003eStateT c a b-\u003eStateT c a(b,d)",
        "package": "transformers",
        "partial": "Listen",
        "signature": "(m(a,s)-\u003em((a,s),w))-\u003eStateT s m a-\u003eStateT s m(a,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-State-Lazy.html#v:liftPass",
      "description": {
        "fct-descr": "\u003cp\u003eLift a \u003ccode\u003epass\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.State.Lazy",
        "fct-package": "transformers",
        "fct-signature": "(m ((a, s), b) -\u003e m (a, s)) -\u003e StateT s m (a, b) -\u003e StateT s m a",
        "fct-source": "src/Control-Monad-Trans-State-Lazy.html#liftPass",
        "fct-type": "function",
        "title": "liftPass"
      },
      "index": {
        "description": "Lift pass operation to the new monad",
        "hierarchy": "Control Monad Trans State Lazy",
        "module": "Control.Monad.Trans.State.Lazy",
        "name": "liftPass",
        "normalized": "(a((b,c),d)-\u003ea(b,c))-\u003eStateT c a(b,d)-\u003eStateT c a b",
        "package": "transformers",
        "partial": "Pass",
        "signature": "(m((a,s),b)-\u003em(a,s))-\u003eStateT s m(a,b)-\u003eStateT s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-State-Lazy.html#v:mapState",
      "description": {
        "fct-descr": "\u003cp\u003eMap both the return value and final state of a computation using\n the given function.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunState\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emapState\u003c/a\u003e\u003c/code\u003e f m) = f . \u003ccode\u003e\u003ca\u003erunState\u003c/a\u003e\u003c/code\u003e m\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.State.Lazy",
        "fct-package": "transformers",
        "fct-signature": "((a, s) -\u003e (b, s)) -\u003e State s a -\u003e State s b",
        "fct-source": "src/Control-Monad-Trans-State-Lazy.html#mapState",
        "fct-type": "function",
        "title": "mapState"
      },
      "index": {
        "description": "Map both the return value and final state of computation using the given function runState mapState runState",
        "hierarchy": "Control Monad Trans State Lazy",
        "module": "Control.Monad.Trans.State.Lazy",
        "name": "mapState",
        "normalized": "((a,b)-\u003e(c,b))-\u003eState b a-\u003eState b c",
        "package": "transformers",
        "partial": "State",
        "signature": "((a,s)-\u003e(b,s))-\u003eState s a-\u003eState s b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-State-Lazy.html#v:mapStateT",
      "description": {
        "fct-descr": "\u003cp\u003eMap both the return value and final state of a computation using\n the given function.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunStateT\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emapStateT\u003c/a\u003e\u003c/code\u003e f m) = f . \u003ccode\u003e\u003ca\u003erunStateT\u003c/a\u003e\u003c/code\u003e m\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.State.Lazy",
        "fct-package": "transformers",
        "fct-signature": "(m (a, s) -\u003e n (b, s)) -\u003e StateT s m a -\u003e StateT s n b",
        "fct-source": "src/Control-Monad-Trans-State-Lazy.html#mapStateT",
        "fct-type": "function",
        "title": "mapStateT"
      },
      "index": {
        "description": "Map both the return value and final state of computation using the given function runStateT mapStateT runStateT",
        "hierarchy": "Control Monad Trans State Lazy",
        "module": "Control.Monad.Trans.State.Lazy",
        "name": "mapStateT",
        "normalized": "(a(b,c)-\u003ed(e,c))-\u003eStateT c a b-\u003eStateT c d e",
        "package": "transformers",
        "partial": "State",
        "signature": "(m(a,s)-\u003en(b,s))-\u003eStateT s m a-\u003eStateT s n b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-State-Lazy.html#v:modify",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003emodify\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e is an action that updates the state to the result of\n applying \u003ccode\u003ef\u003c/code\u003e to the current state.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003emodify\u003c/a\u003e\u003c/code\u003e f = \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e \u003e\u003e= (\u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e . f)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.State.Lazy",
        "fct-package": "transformers",
        "fct-signature": "(s -\u003e s) -\u003e StateT s m ()",
        "fct-source": "src/Control-Monad-Trans-State-Lazy.html#modify",
        "fct-type": "function",
        "title": "modify"
      },
      "index": {
        "description": "modify is an action that updates the state to the result of applying to the current state modify get put",
        "hierarchy": "Control Monad Trans State Lazy",
        "module": "Control.Monad.Trans.State.Lazy",
        "name": "modify",
        "normalized": "(a-\u003ea)-\u003eStateT a b()",
        "package": "transformers",
        "partial": "",
        "signature": "(s-\u003es)-\u003eStateT s m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-State-Lazy.html#v:put",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e s\u003c/code\u003e sets the state within the monad to \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.State.Lazy",
        "fct-package": "transformers",
        "fct-signature": "s -\u003e StateT s m ()",
        "fct-source": "src/Control-Monad-Trans-State-Lazy.html#put",
        "fct-type": "function",
        "title": "put"
      },
      "index": {
        "description": "put sets the state within the monad to",
        "hierarchy": "Control Monad Trans State Lazy",
        "module": "Control.Monad.Trans.State.Lazy",
        "name": "put",
        "normalized": "a-\u003eStateT a b()",
        "package": "transformers",
        "partial": "",
        "signature": "s-\u003eStateT s m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-State-Lazy.html#v:runState",
      "description": {
        "fct-descr": "\u003cp\u003eUnwrap a state monad computation as a function.\n (The inverse of \u003ccode\u003e\u003ca\u003estate\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.State.Lazy",
        "fct-package": "transformers",
        "fct-signature": "State s a-\u003e s-\u003e (a, s)",
        "fct-type": "function",
        "title": "runState"
      },
      "index": {
        "description": "Unwrap state monad computation as function The inverse of state",
        "hierarchy": "Control Monad Trans State Lazy",
        "module": "Control.Monad.Trans.State.Lazy",
        "name": "runState",
        "normalized": "State a b-\u003ea-\u003e(b,a)",
        "package": "transformers",
        "partial": "State",
        "signature": "State s a-\u003es-\u003e(a,s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-State-Lazy.html#v:runStateT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Trans.State.Lazy",
        "fct-package": "transformers",
        "fct-signature": "s -\u003e m (a, s)",
        "fct-source": "src/Control-Monad-Trans-State-Lazy.html#StateT",
        "fct-type": "function",
        "title": "runStateT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans State Lazy",
        "module": "Control.Monad.Trans.State.Lazy",
        "name": "runStateT",
        "normalized": "a-\u003eb(c,a)",
        "package": "transformers",
        "partial": "State",
        "signature": "s-\u003em(a,s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-State-Lazy.html#v:state",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a state monad computation from a function.\n (The inverse of \u003ccode\u003e\u003ca\u003erunState\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.State.Lazy",
        "fct-package": "transformers",
        "fct-signature": "(s -\u003e (a, s))-\u003e StateT s m a",
        "fct-type": "function",
        "title": "state"
      },
      "index": {
        "description": "Construct state monad computation from function The inverse of runState",
        "hierarchy": "Control Monad Trans State Lazy",
        "module": "Control.Monad.Trans.State.Lazy",
        "name": "state",
        "normalized": "(a-\u003e(b,a))-\u003eStateT a c b",
        "package": "transformers",
        "partial": "",
        "signature": "(s-\u003e(a,s))-\u003eStateT s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-State-Lazy.html#v:withState",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ewithState\u003c/a\u003e\u003c/code\u003e f m\u003c/code\u003e executes action \u003ccode\u003em\u003c/code\u003e on a state modified by\n applying \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003ewithState\u003c/a\u003e\u003c/code\u003e f m = \u003ccode\u003e\u003ca\u003emodify\u003c/a\u003e\u003c/code\u003e f \u003e\u003e m\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.State.Lazy",
        "fct-package": "transformers",
        "fct-signature": "(s -\u003e s) -\u003e State s a -\u003e State s a",
        "fct-source": "src/Control-Monad-Trans-State-Lazy.html#withState",
        "fct-type": "function",
        "title": "withState"
      },
      "index": {
        "description": "withState executes action on state modified by applying withState modify",
        "hierarchy": "Control Monad Trans State Lazy",
        "module": "Control.Monad.Trans.State.Lazy",
        "name": "withState",
        "normalized": "(a-\u003ea)-\u003eState a b-\u003eState a b",
        "package": "transformers",
        "partial": "State",
        "signature": "(s-\u003es)-\u003eState s a-\u003eState s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-State-Lazy.html#v:withStateT",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ewithStateT\u003c/a\u003e\u003c/code\u003e f m\u003c/code\u003e executes action \u003ccode\u003em\u003c/code\u003e on a state modified by\n applying \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003ewithStateT\u003c/a\u003e\u003c/code\u003e f m = \u003ccode\u003e\u003ca\u003emodify\u003c/a\u003e\u003c/code\u003e f \u003e\u003e m\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.State.Lazy",
        "fct-package": "transformers",
        "fct-signature": "(s -\u003e s) -\u003e StateT s m a -\u003e StateT s m a",
        "fct-source": "src/Control-Monad-Trans-State-Lazy.html#withStateT",
        "fct-type": "function",
        "title": "withStateT"
      },
      "index": {
        "description": "withStateT executes action on state modified by applying withStateT modify",
        "hierarchy": "Control Monad Trans State Lazy",
        "module": "Control.Monad.Trans.State.Lazy",
        "name": "withStateT",
        "normalized": "(a-\u003ea)-\u003eStateT a b c-\u003eStateT a b c",
        "package": "transformers",
        "partial": "State",
        "signature": "(s-\u003es)-\u003eStateT s m a-\u003eStateT s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-State-Strict.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStrict state monads, passing an updatable state through a computation.\n See below for examples.\n\u003c/p\u003e\u003cp\u003eIn this version, sequencing of computations is strict.\n For a lazy version, see \u003ca\u003eControl.Monad.Trans.State.Lazy\u003c/a\u003e, which\n has the same interface.\n\u003c/p\u003e\u003cp\u003eSome computations may not require the full power of state transformers:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e For a read-only state, see \u003ca\u003eControl.Monad.Trans.Reader\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e To accumulate a value without using it on the way, see\n   \u003ca\u003eControl.Monad.Trans.Writer\u003c/a\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Trans.State.Strict",
        "fct-package": "transformers",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Trans-State-Strict.html",
        "fct-type": "module",
        "title": "Strict"
      },
      "index": {
        "description": "Strict state monads passing an updatable state through computation See below for examples In this version sequencing of computations is strict For lazy version see Control.Monad.Trans.State.Lazy which has the same interface Some computations may not require the full power of state transformers For read-only state see Control.Monad.Trans.Reader To accumulate value without using it on the way see Control.Monad.Trans.Writer",
        "hierarchy": "Control Monad Trans State Strict",
        "module": "Control.Monad.Trans.State.Strict",
        "name": "Strict",
        "normalized": "",
        "package": "transformers",
        "partial": "Strict",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-State-Strict.html#t:State",
      "description": {
        "fct-descr": "\u003cp\u003eA state monad parameterized by the type \u003ccode\u003es\u003c/code\u003e of the state to carry.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function leaves the state unchanged, while \u003ccode\u003e\u003e\u003e=\u003c/code\u003e uses\n the final state of the first computation as the initial state of\n the second.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.State.Strict",
        "fct-package": "transformers",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Trans-State-Strict.html#State",
        "fct-type": "type",
        "title": "State"
      },
      "index": {
        "description": "state monad parameterized by the type of the state to carry The return function leaves the state unchanged while uses the final state of the first computation as the initial state of the second",
        "hierarchy": "Control Monad Trans State Strict",
        "module": "Control.Monad.Trans.State.Strict",
        "name": "State",
        "normalized": "",
        "package": "transformers",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-State-Strict.html#t:StateT",
      "description": {
        "fct-descr": "\u003cp\u003eA state transformer monad parameterized by:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003es\u003c/code\u003e - The state.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003em\u003c/code\u003e - The inner monad.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function leaves the state unchanged, while \u003ccode\u003e\u003e\u003e=\u003c/code\u003e uses\n the final state of the first computation as the initial state of\n the second.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.State.Strict",
        "fct-package": "transformers",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Trans-State-Strict.html#StateT",
        "fct-type": "newtype",
        "title": "StateT"
      },
      "index": {
        "description": "state transformer monad parameterized by The state The inner monad The return function leaves the state unchanged while uses the final state of the first computation as the initial state of the second",
        "hierarchy": "Control Monad Trans State Strict",
        "module": "Control.Monad.Trans.State.Strict",
        "name": "StateT",
        "normalized": "",
        "package": "transformers",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-State-Strict.html#v:StateT",
      "description": {
        "fct-module": "Control.Monad.Trans.State.Strict",
        "fct-package": "transformers",
        "fct-signature": "StateT",
        "fct-source": "src/Control-Monad-Trans-State-Strict.html#StateT",
        "fct-type": "function",
        "title": "StateT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans State Strict",
        "module": "Control.Monad.Trans.State.Strict",
        "name": "StateT",
        "normalized": "",
        "package": "transformers",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-State-Strict.html#v:evalState",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a state computation with the given initial state\n and return the final value, discarding the final state.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eevalState\u003c/a\u003e\u003c/code\u003e m s = \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunState\u003c/a\u003e\u003c/code\u003e m s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.State.Strict",
        "fct-package": "transformers",
        "fct-signature": "State s a-\u003e s-\u003e a",
        "fct-type": "function",
        "title": "evalState"
      },
      "index": {
        "description": "Evaluate state computation with the given initial state and return the final value discarding the final state evalState fst runState",
        "hierarchy": "Control Monad Trans State Strict",
        "module": "Control.Monad.Trans.State.Strict",
        "name": "evalState",
        "normalized": "State a b-\u003ea-\u003eb",
        "package": "transformers",
        "partial": "State",
        "signature": "State s a-\u003es-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-State-Strict.html#v:evalStateT",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a state computation with the given initial state\n and return the final value, discarding the final state.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eevalStateT\u003c/a\u003e\u003c/code\u003e m s = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunStateT\u003c/a\u003e\u003c/code\u003e m s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.State.Strict",
        "fct-package": "transformers",
        "fct-signature": "StateT s m a -\u003e s -\u003e m a",
        "fct-source": "src/Control-Monad-Trans-State-Strict.html#evalStateT",
        "fct-type": "function",
        "title": "evalStateT"
      },
      "index": {
        "description": "Evaluate state computation with the given initial state and return the final value discarding the final state evalStateT liftM fst runStateT",
        "hierarchy": "Control Monad Trans State Strict",
        "module": "Control.Monad.Trans.State.Strict",
        "name": "evalStateT",
        "normalized": "StateT a b c-\u003ea-\u003eb c",
        "package": "transformers",
        "partial": "State",
        "signature": "StateT s m a-\u003es-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-State-Strict.html#v:execState",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a state computation with the given initial state\n and return the final state, discarding the final value.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eexecState\u003c/a\u003e\u003c/code\u003e m s = \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunState\u003c/a\u003e\u003c/code\u003e m s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.State.Strict",
        "fct-package": "transformers",
        "fct-signature": "State s a-\u003e s-\u003e s",
        "fct-type": "function",
        "title": "execState"
      },
      "index": {
        "description": "Evaluate state computation with the given initial state and return the final state discarding the final value execState snd runState",
        "hierarchy": "Control Monad Trans State Strict",
        "module": "Control.Monad.Trans.State.Strict",
        "name": "execState",
        "normalized": "State a b-\u003ea-\u003ea",
        "package": "transformers",
        "partial": "State",
        "signature": "State s a-\u003es-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-State-Strict.html#v:execStateT",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a state computation with the given initial state\n and return the final state, discarding the final value.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eexecStateT\u003c/a\u003e\u003c/code\u003e m s = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunStateT\u003c/a\u003e\u003c/code\u003e m s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.State.Strict",
        "fct-package": "transformers",
        "fct-signature": "StateT s m a -\u003e s -\u003e m s",
        "fct-source": "src/Control-Monad-Trans-State-Strict.html#execStateT",
        "fct-type": "function",
        "title": "execStateT"
      },
      "index": {
        "description": "Evaluate state computation with the given initial state and return the final state discarding the final value execStateT liftM snd runStateT",
        "hierarchy": "Control Monad Trans State Strict",
        "module": "Control.Monad.Trans.State.Strict",
        "name": "execStateT",
        "normalized": "StateT a b c-\u003ea-\u003eb a",
        "package": "transformers",
        "partial": "State",
        "signature": "StateT s m a-\u003es-\u003em s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-State-Strict.html#v:get",
      "description": {
        "fct-descr": "\u003cp\u003eFetch the current value of the state within the monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.State.Strict",
        "fct-package": "transformers",
        "fct-signature": "StateT s m s",
        "fct-source": "src/Control-Monad-Trans-State-Strict.html#get",
        "fct-type": "function",
        "title": "get"
      },
      "index": {
        "description": "Fetch the current value of the state within the monad",
        "hierarchy": "Control Monad Trans State Strict",
        "module": "Control.Monad.Trans.State.Strict",
        "name": "get",
        "normalized": "",
        "package": "transformers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-State-Strict.html#v:gets",
      "description": {
        "fct-descr": "\u003cp\u003eGet a specific component of the state, using a projection function\n supplied.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003egets\u003c/a\u003e\u003c/code\u003e f = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e f \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.State.Strict",
        "fct-package": "transformers",
        "fct-signature": "(s -\u003e a) -\u003e StateT s m a",
        "fct-source": "src/Control-Monad-Trans-State-Strict.html#gets",
        "fct-type": "function",
        "title": "gets"
      },
      "index": {
        "description": "Get specific component of the state using projection function supplied gets liftM get",
        "hierarchy": "Control Monad Trans State Strict",
        "module": "Control.Monad.Trans.State.Strict",
        "name": "gets",
        "normalized": "(a-\u003eb)-\u003eStateT a c b",
        "package": "transformers",
        "partial": "",
        "signature": "(s-\u003ea)-\u003eStateT s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-State-Strict.html#v:liftCallCC",
      "description": {
        "fct-descr": "\u003cp\u003eUniform lifting of a \u003ccode\u003ecallCC\u003c/code\u003e operation to the new monad.\n This version rolls back to the original state on entering the\n continuation.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.State.Strict",
        "fct-package": "transformers",
        "fct-signature": "((((a, s) -\u003e m (b, s)) -\u003e m (a, s)) -\u003e m (a, s)) -\u003e ((a -\u003e StateT s m b) -\u003e StateT s m a) -\u003e StateT s m a",
        "fct-source": "src/Control-Monad-Trans-State-Strict.html#liftCallCC",
        "fct-type": "function",
        "title": "liftCallCC"
      },
      "index": {
        "description": "Uniform lifting of callCC operation to the new monad This version rolls back to the original state on entering the continuation",
        "hierarchy": "Control Monad Trans State Strict",
        "module": "Control.Monad.Trans.State.Strict",
        "name": "liftCallCC",
        "normalized": "((((a,b)-\u003ec(d,b))-\u003ec(a,b))-\u003ec(a,b))-\u003e((a-\u003eStateT b c d)-\u003eStateT b c a)-\u003eStateT b c a",
        "package": "transformers",
        "partial": "Call CC",
        "signature": "((((a,s)-\u003em(b,s))-\u003em(a,s))-\u003em(a,s))-\u003e((a-\u003eStateT s m b)-\u003eStateT s m a)-\u003eStateT s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-State-Strict.html#v:liftCallCC-39-",
      "description": {
        "fct-descr": "\u003cp\u003eIn-situ lifting of a \u003ccode\u003ecallCC\u003c/code\u003e operation to the new monad.\n This version uses the current state on entering the continuation.\n It does not satisfy the laws of a monad transformer.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.State.Strict",
        "fct-package": "transformers",
        "fct-signature": "((((a, s) -\u003e m (b, s)) -\u003e m (a, s)) -\u003e m (a, s)) -\u003e ((a -\u003e StateT s m b) -\u003e StateT s m a) -\u003e StateT s m a",
        "fct-source": "src/Control-Monad-Trans-State-Strict.html#liftCallCC%27",
        "fct-type": "function",
        "title": "liftCallCC'"
      },
      "index": {
        "description": "In-situ lifting of callCC operation to the new monad This version uses the current state on entering the continuation It does not satisfy the laws of monad transformer",
        "hierarchy": "Control Monad Trans State Strict",
        "module": "Control.Monad.Trans.State.Strict",
        "name": "liftCallCC'",
        "normalized": "((((a,b)-\u003ec(d,b))-\u003ec(a,b))-\u003ec(a,b))-\u003e((a-\u003eStateT b c d)-\u003eStateT b c a)-\u003eStateT b c a",
        "package": "transformers",
        "partial": "Call CC'",
        "signature": "((((a,s)-\u003em(b,s))-\u003em(a,s))-\u003em(a,s))-\u003e((a-\u003eStateT s m b)-\u003eStateT s m a)-\u003eStateT s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-State-Strict.html#v:liftCatch",
      "description": {
        "fct-descr": "\u003cp\u003eLift a \u003ccode\u003ecatchError\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.State.Strict",
        "fct-package": "transformers",
        "fct-signature": "(m (a, s) -\u003e (e -\u003e m (a, s)) -\u003e m (a, s)) -\u003e StateT s m a -\u003e (e -\u003e StateT s m a) -\u003e StateT s m a",
        "fct-source": "src/Control-Monad-Trans-State-Strict.html#liftCatch",
        "fct-type": "function",
        "title": "liftCatch"
      },
      "index": {
        "description": "Lift catchError operation to the new monad",
        "hierarchy": "Control Monad Trans State Strict",
        "module": "Control.Monad.Trans.State.Strict",
        "name": "liftCatch",
        "normalized": "(a(b,c)-\u003e(d-\u003ea(b,c))-\u003ea(b,c))-\u003eStateT c a b-\u003e(d-\u003eStateT c a b)-\u003eStateT c a b",
        "package": "transformers",
        "partial": "Catch",
        "signature": "(m(a,s)-\u003e(e-\u003em(a,s))-\u003em(a,s))-\u003eStateT s m a-\u003e(e-\u003eStateT s m a)-\u003eStateT s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-State-Strict.html#v:liftListen",
      "description": {
        "fct-descr": "\u003cp\u003eLift a \u003ccode\u003elisten\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.State.Strict",
        "fct-package": "transformers",
        "fct-signature": "(m (a, s) -\u003e m ((a, s), w)) -\u003e StateT s m a -\u003e StateT s m (a, w)",
        "fct-source": "src/Control-Monad-Trans-State-Strict.html#liftListen",
        "fct-type": "function",
        "title": "liftListen"
      },
      "index": {
        "description": "Lift listen operation to the new monad",
        "hierarchy": "Control Monad Trans State Strict",
        "module": "Control.Monad.Trans.State.Strict",
        "name": "liftListen",
        "normalized": "(a(b,c)-\u003ea((b,c),d))-\u003eStateT c a b-\u003eStateT c a(b,d)",
        "package": "transformers",
        "partial": "Listen",
        "signature": "(m(a,s)-\u003em((a,s),w))-\u003eStateT s m a-\u003eStateT s m(a,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-State-Strict.html#v:liftPass",
      "description": {
        "fct-descr": "\u003cp\u003eLift a \u003ccode\u003epass\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.State.Strict",
        "fct-package": "transformers",
        "fct-signature": "(m ((a, s), b) -\u003e m (a, s)) -\u003e StateT s m (a, b) -\u003e StateT s m a",
        "fct-source": "src/Control-Monad-Trans-State-Strict.html#liftPass",
        "fct-type": "function",
        "title": "liftPass"
      },
      "index": {
        "description": "Lift pass operation to the new monad",
        "hierarchy": "Control Monad Trans State Strict",
        "module": "Control.Monad.Trans.State.Strict",
        "name": "liftPass",
        "normalized": "(a((b,c),d)-\u003ea(b,c))-\u003eStateT c a(b,d)-\u003eStateT c a b",
        "package": "transformers",
        "partial": "Pass",
        "signature": "(m((a,s),b)-\u003em(a,s))-\u003eStateT s m(a,b)-\u003eStateT s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-State-Strict.html#v:mapState",
      "description": {
        "fct-descr": "\u003cp\u003eMap both the return value and final state of a computation using\n the given function.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunState\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emapState\u003c/a\u003e\u003c/code\u003e f m) = f . \u003ccode\u003e\u003ca\u003erunState\u003c/a\u003e\u003c/code\u003e m\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.State.Strict",
        "fct-package": "transformers",
        "fct-signature": "((a, s) -\u003e (b, s)) -\u003e State s a -\u003e State s b",
        "fct-source": "src/Control-Monad-Trans-State-Strict.html#mapState",
        "fct-type": "function",
        "title": "mapState"
      },
      "index": {
        "description": "Map both the return value and final state of computation using the given function runState mapState runState",
        "hierarchy": "Control Monad Trans State Strict",
        "module": "Control.Monad.Trans.State.Strict",
        "name": "mapState",
        "normalized": "((a,b)-\u003e(c,b))-\u003eState b a-\u003eState b c",
        "package": "transformers",
        "partial": "State",
        "signature": "((a,s)-\u003e(b,s))-\u003eState s a-\u003eState s b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-State-Strict.html#v:mapStateT",
      "description": {
        "fct-descr": "\u003cp\u003eMap both the return value and final state of a computation using\n the given function.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunStateT\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emapStateT\u003c/a\u003e\u003c/code\u003e f m) = f . \u003ccode\u003e\u003ca\u003erunStateT\u003c/a\u003e\u003c/code\u003e m\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.State.Strict",
        "fct-package": "transformers",
        "fct-signature": "(m (a, s) -\u003e n (b, s)) -\u003e StateT s m a -\u003e StateT s n b",
        "fct-source": "src/Control-Monad-Trans-State-Strict.html#mapStateT",
        "fct-type": "function",
        "title": "mapStateT"
      },
      "index": {
        "description": "Map both the return value and final state of computation using the given function runStateT mapStateT runStateT",
        "hierarchy": "Control Monad Trans State Strict",
        "module": "Control.Monad.Trans.State.Strict",
        "name": "mapStateT",
        "normalized": "(a(b,c)-\u003ed(e,c))-\u003eStateT c a b-\u003eStateT c d e",
        "package": "transformers",
        "partial": "State",
        "signature": "(m(a,s)-\u003en(b,s))-\u003eStateT s m a-\u003eStateT s n b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-State-Strict.html#v:modify",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003emodify\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e is an action that updates the state to the result of\n applying \u003ccode\u003ef\u003c/code\u003e to the current state.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003emodify\u003c/a\u003e\u003c/code\u003e f = \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e \u003e\u003e= (\u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e . f)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.State.Strict",
        "fct-package": "transformers",
        "fct-signature": "(s -\u003e s) -\u003e StateT s m ()",
        "fct-source": "src/Control-Monad-Trans-State-Strict.html#modify",
        "fct-type": "function",
        "title": "modify"
      },
      "index": {
        "description": "modify is an action that updates the state to the result of applying to the current state modify get put",
        "hierarchy": "Control Monad Trans State Strict",
        "module": "Control.Monad.Trans.State.Strict",
        "name": "modify",
        "normalized": "(a-\u003ea)-\u003eStateT a b()",
        "package": "transformers",
        "partial": "",
        "signature": "(s-\u003es)-\u003eStateT s m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-State-Strict.html#v:put",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e s\u003c/code\u003e sets the state within the monad to \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.State.Strict",
        "fct-package": "transformers",
        "fct-signature": "s -\u003e StateT s m ()",
        "fct-source": "src/Control-Monad-Trans-State-Strict.html#put",
        "fct-type": "function",
        "title": "put"
      },
      "index": {
        "description": "put sets the state within the monad to",
        "hierarchy": "Control Monad Trans State Strict",
        "module": "Control.Monad.Trans.State.Strict",
        "name": "put",
        "normalized": "a-\u003eStateT a b()",
        "package": "transformers",
        "partial": "",
        "signature": "s-\u003eStateT s m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-State-Strict.html#v:runState",
      "description": {
        "fct-descr": "\u003cp\u003eUnwrap a state monad computation as a function.\n (The inverse of \u003ccode\u003e\u003ca\u003estate\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.State.Strict",
        "fct-package": "transformers",
        "fct-signature": "State s a-\u003e s-\u003e (a, s)",
        "fct-type": "function",
        "title": "runState"
      },
      "index": {
        "description": "Unwrap state monad computation as function The inverse of state",
        "hierarchy": "Control Monad Trans State Strict",
        "module": "Control.Monad.Trans.State.Strict",
        "name": "runState",
        "normalized": "State a b-\u003ea-\u003e(b,a)",
        "package": "transformers",
        "partial": "State",
        "signature": "State s a-\u003es-\u003e(a,s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-State-Strict.html#v:runStateT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Trans.State.Strict",
        "fct-package": "transformers",
        "fct-signature": "s -\u003e m (a, s)",
        "fct-source": "src/Control-Monad-Trans-State-Strict.html#StateT",
        "fct-type": "function",
        "title": "runStateT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans State Strict",
        "module": "Control.Monad.Trans.State.Strict",
        "name": "runStateT",
        "normalized": "a-\u003eb(c,a)",
        "package": "transformers",
        "partial": "State",
        "signature": "s-\u003em(a,s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-State-Strict.html#v:state",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a state monad computation from a function.\n (The inverse of \u003ccode\u003e\u003ca\u003erunState\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.State.Strict",
        "fct-package": "transformers",
        "fct-signature": "(s -\u003e (a, s))-\u003e StateT s m a",
        "fct-type": "function",
        "title": "state"
      },
      "index": {
        "description": "Construct state monad computation from function The inverse of runState",
        "hierarchy": "Control Monad Trans State Strict",
        "module": "Control.Monad.Trans.State.Strict",
        "name": "state",
        "normalized": "(a-\u003e(b,a))-\u003eStateT a c b",
        "package": "transformers",
        "partial": "",
        "signature": "(s-\u003e(a,s))-\u003eStateT s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-State-Strict.html#v:withState",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ewithState\u003c/a\u003e\u003c/code\u003e f m\u003c/code\u003e executes action \u003ccode\u003em\u003c/code\u003e on a state modified by\n applying \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003ewithState\u003c/a\u003e\u003c/code\u003e f m = \u003ccode\u003e\u003ca\u003emodify\u003c/a\u003e\u003c/code\u003e f \u003e\u003e m\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.State.Strict",
        "fct-package": "transformers",
        "fct-signature": "(s -\u003e s) -\u003e State s a -\u003e State s a",
        "fct-source": "src/Control-Monad-Trans-State-Strict.html#withState",
        "fct-type": "function",
        "title": "withState"
      },
      "index": {
        "description": "withState executes action on state modified by applying withState modify",
        "hierarchy": "Control Monad Trans State Strict",
        "module": "Control.Monad.Trans.State.Strict",
        "name": "withState",
        "normalized": "(a-\u003ea)-\u003eState a b-\u003eState a b",
        "package": "transformers",
        "partial": "State",
        "signature": "(s-\u003es)-\u003eState s a-\u003eState s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-State-Strict.html#v:withStateT",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ewithStateT\u003c/a\u003e\u003c/code\u003e f m\u003c/code\u003e executes action \u003ccode\u003em\u003c/code\u003e on a state modified by\n applying \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003ewithStateT\u003c/a\u003e\u003c/code\u003e f m = \u003ccode\u003e\u003ca\u003emodify\u003c/a\u003e\u003c/code\u003e f \u003e\u003e m\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.State.Strict",
        "fct-package": "transformers",
        "fct-signature": "(s -\u003e s) -\u003e StateT s m a -\u003e StateT s m a",
        "fct-source": "src/Control-Monad-Trans-State-Strict.html#withStateT",
        "fct-type": "function",
        "title": "withStateT"
      },
      "index": {
        "description": "withStateT executes action on state modified by applying withStateT modify",
        "hierarchy": "Control Monad Trans State Strict",
        "module": "Control.Monad.Trans.State.Strict",
        "name": "withStateT",
        "normalized": "(a-\u003ea)-\u003eStateT a b c-\u003eStateT a b c",
        "package": "transformers",
        "partial": "State",
        "signature": "(s-\u003es)-\u003eStateT s m a-\u003eStateT s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-State.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eState monads, passing an updatable state through a computation.\n\u003c/p\u003e\u003cp\u003eSome computations may not require the full power of state transformers:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e For a read-only state, see \u003ca\u003eControl.Monad.Trans.Reader\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e To accumulate a value without using it on the way, see\n   \u003ca\u003eControl.Monad.Trans.Writer\u003c/a\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis version is lazy; for a strict version, see\n \u003ca\u003eControl.Monad.Trans.State.Strict\u003c/a\u003e, which has the same interface.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Trans.State",
        "fct-package": "transformers",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Trans-State.html",
        "fct-type": "module",
        "title": "State"
      },
      "index": {
        "description": "State monads passing an updatable state through computation Some computations may not require the full power of state transformers For read-only state see Control.Monad.Trans.Reader To accumulate value without using it on the way see Control.Monad.Trans.Writer This version is lazy for strict version see Control.Monad.Trans.State.Strict which has the same interface",
        "hierarchy": "Control Monad Trans State",
        "module": "Control.Monad.Trans.State",
        "name": "State",
        "normalized": "",
        "package": "transformers",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Writer-Lazy.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe lazy \u003ccode\u003e\u003ca\u003eWriterT\u003c/a\u003e\u003c/code\u003e monad transformer, which adds collection of\n outputs (such as a count or string output) to a given monad.\n\u003c/p\u003e\u003cp\u003eThis version builds its output lazily; for a strict version, see\n \u003ca\u003eControl.Monad.Trans.Writer.Strict\u003c/a\u003e, which has the same interface.\n\u003c/p\u003e\u003cp\u003eThis monad transformer provides only limited access to the output\n during the computation.  For more general access, use\n \u003ca\u003eControl.Monad.Trans.State\u003c/a\u003e instead.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Trans.Writer.Lazy",
        "fct-package": "transformers",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Trans-Writer-Lazy.html",
        "fct-type": "module",
        "title": "Lazy"
      },
      "index": {
        "description": "The lazy WriterT monad transformer which adds collection of outputs such as count or string output to given monad This version builds its output lazily for strict version see Control.Monad.Trans.Writer.Strict which has the same interface This monad transformer provides only limited access to the output during the computation For more general access use Control.Monad.Trans.State instead",
        "hierarchy": "Control Monad Trans Writer Lazy",
        "module": "Control.Monad.Trans.Writer.Lazy",
        "name": "Lazy",
        "normalized": "",
        "package": "transformers",
        "partial": "Lazy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Writer-Lazy.html#t:Writer",
      "description": {
        "fct-descr": "\u003cp\u003eA writer monad parameterized by the type \u003ccode\u003ew\u003c/code\u003e of output to accumulate.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function produces the output \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e, while \u003ccode\u003e\u003e\u003e=\u003c/code\u003e\n combines the outputs of the subcomputations using \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Writer.Lazy",
        "fct-package": "transformers",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Trans-Writer-Lazy.html#Writer",
        "fct-type": "type",
        "title": "Writer"
      },
      "index": {
        "description": "writer monad parameterized by the type of output to accumulate The return function produces the output mempty while combines the outputs of the subcomputations using mappend",
        "hierarchy": "Control Monad Trans Writer Lazy",
        "module": "Control.Monad.Trans.Writer.Lazy",
        "name": "Writer",
        "normalized": "",
        "package": "transformers",
        "partial": "Writer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Writer-Lazy.html#t:WriterT",
      "description": {
        "fct-descr": "\u003cp\u003eA writer monad parameterized by:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003ew\u003c/code\u003e - the output to accumulate.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003em\u003c/code\u003e - The inner monad.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function produces the output \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e, while \u003ccode\u003e\u003e\u003e=\u003c/code\u003e\n combines the outputs of the subcomputations using \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Writer.Lazy",
        "fct-package": "transformers",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Trans-Writer-Lazy.html#WriterT",
        "fct-type": "newtype",
        "title": "WriterT"
      },
      "index": {
        "description": "writer monad parameterized by the output to accumulate The inner monad The return function produces the output mempty while combines the outputs of the subcomputations using mappend",
        "hierarchy": "Control Monad Trans Writer Lazy",
        "module": "Control.Monad.Trans.Writer.Lazy",
        "name": "WriterT",
        "normalized": "",
        "package": "transformers",
        "partial": "Writer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Writer-Lazy.html#v:WriterT",
      "description": {
        "fct-module": "Control.Monad.Trans.Writer.Lazy",
        "fct-package": "transformers",
        "fct-signature": "WriterT",
        "fct-source": "src/Control-Monad-Trans-Writer-Lazy.html#WriterT",
        "fct-type": "function",
        "title": "WriterT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Writer Lazy",
        "module": "Control.Monad.Trans.Writer.Lazy",
        "name": "WriterT",
        "normalized": "",
        "package": "transformers",
        "partial": "Writer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Writer-Lazy.html#v:censor",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ecensor\u003c/a\u003e\u003c/code\u003e f m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e and\n applies the function \u003ccode\u003ef\u003c/code\u003e to its output, leaving the return value\n unchanged.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003ecensor\u003c/a\u003e\u003c/code\u003e f m = \u003ccode\u003e\u003ca\u003epass\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e (\\x -\u003e (x,f)) m)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunWriterT\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ecensor\u003c/a\u003e\u003c/code\u003e f m) = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e (\\(a, w) -\u003e (a, f w)) (\u003ccode\u003e\u003ca\u003erunWriterT\u003c/a\u003e\u003c/code\u003e m)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.Writer.Lazy",
        "fct-package": "transformers",
        "fct-signature": "(w -\u003e w) -\u003e WriterT w m a -\u003e WriterT w m a",
        "fct-source": "src/Control-Monad-Trans-Writer-Lazy.html#censor",
        "fct-type": "function",
        "title": "censor"
      },
      "index": {
        "description": "censor is an action that executes the action and applies the function to its output leaving the return value unchanged censor pass liftM runWriterT censor liftM runWriterT",
        "hierarchy": "Control Monad Trans Writer Lazy",
        "module": "Control.Monad.Trans.Writer.Lazy",
        "name": "censor",
        "normalized": "(a-\u003ea)-\u003eWriterT a b c-\u003eWriterT a b c",
        "package": "transformers",
        "partial": "",
        "signature": "(w-\u003ew)-\u003eWriterT w m a-\u003eWriterT w m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Writer-Lazy.html#v:execWriter",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the output from a writer computation.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eexecWriter\u003c/a\u003e\u003c/code\u003e m = \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunWriter\u003c/a\u003e\u003c/code\u003e m)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.Writer.Lazy",
        "fct-package": "transformers",
        "fct-signature": "Writer w a -\u003e w",
        "fct-source": "src/Control-Monad-Trans-Writer-Lazy.html#execWriter",
        "fct-type": "function",
        "title": "execWriter"
      },
      "index": {
        "description": "Extract the output from writer computation execWriter snd runWriter",
        "hierarchy": "Control Monad Trans Writer Lazy",
        "module": "Control.Monad.Trans.Writer.Lazy",
        "name": "execWriter",
        "normalized": "Writer a b-\u003ea",
        "package": "transformers",
        "partial": "Writer",
        "signature": "Writer w a-\u003ew"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Writer-Lazy.html#v:execWriterT",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the output from a writer computation.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eexecWriterT\u003c/a\u003e\u003c/code\u003e m = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunWriterT\u003c/a\u003e\u003c/code\u003e m)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.Writer.Lazy",
        "fct-package": "transformers",
        "fct-signature": "WriterT w m a -\u003e m w",
        "fct-source": "src/Control-Monad-Trans-Writer-Lazy.html#execWriterT",
        "fct-type": "function",
        "title": "execWriterT"
      },
      "index": {
        "description": "Extract the output from writer computation execWriterT liftM snd runWriterT",
        "hierarchy": "Control Monad Trans Writer Lazy",
        "module": "Control.Monad.Trans.Writer.Lazy",
        "name": "execWriterT",
        "normalized": "WriterT a b c-\u003eb a",
        "package": "transformers",
        "partial": "Writer",
        "signature": "WriterT w m a-\u003em w"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Writer-Lazy.html#v:liftCallCC",
      "description": {
        "fct-descr": "\u003cp\u003eLift a \u003ccode\u003ecallCC\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Writer.Lazy",
        "fct-package": "transformers",
        "fct-signature": "((((a, w) -\u003e m (b, w)) -\u003e m (a, w)) -\u003e m (a, w)) -\u003e ((a -\u003e WriterT w m b) -\u003e WriterT w m a) -\u003e WriterT w m a",
        "fct-source": "src/Control-Monad-Trans-Writer-Lazy.html#liftCallCC",
        "fct-type": "function",
        "title": "liftCallCC"
      },
      "index": {
        "description": "Lift callCC operation to the new monad",
        "hierarchy": "Control Monad Trans Writer Lazy",
        "module": "Control.Monad.Trans.Writer.Lazy",
        "name": "liftCallCC",
        "normalized": "((((a,b)-\u003ec(d,b))-\u003ec(a,b))-\u003ec(a,b))-\u003e((a-\u003eWriterT b c d)-\u003eWriterT b c a)-\u003eWriterT b c a",
        "package": "transformers",
        "partial": "Call CC",
        "signature": "((((a,w)-\u003em(b,w))-\u003em(a,w))-\u003em(a,w))-\u003e((a-\u003eWriterT w m b)-\u003eWriterT w m a)-\u003eWriterT w m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Writer-Lazy.html#v:liftCatch",
      "description": {
        "fct-descr": "\u003cp\u003eLift a \u003ccode\u003ecatchError\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Writer.Lazy",
        "fct-package": "transformers",
        "fct-signature": "(m (a, w) -\u003e (e -\u003e m (a, w)) -\u003e m (a, w)) -\u003e WriterT w m a -\u003e (e -\u003e WriterT w m a) -\u003e WriterT w m a",
        "fct-source": "src/Control-Monad-Trans-Writer-Lazy.html#liftCatch",
        "fct-type": "function",
        "title": "liftCatch"
      },
      "index": {
        "description": "Lift catchError operation to the new monad",
        "hierarchy": "Control Monad Trans Writer Lazy",
        "module": "Control.Monad.Trans.Writer.Lazy",
        "name": "liftCatch",
        "normalized": "(a(b,c)-\u003e(d-\u003ea(b,c))-\u003ea(b,c))-\u003eWriterT c a b-\u003e(d-\u003eWriterT c a b)-\u003eWriterT c a b",
        "package": "transformers",
        "partial": "Catch",
        "signature": "(m(a,w)-\u003e(e-\u003em(a,w))-\u003em(a,w))-\u003eWriterT w m a-\u003e(e-\u003eWriterT w m a)-\u003eWriterT w m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Writer-Lazy.html#v:listen",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003elisten\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e and adds its\n output to the value of the computation.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunWriterT\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003elisten\u003c/a\u003e\u003c/code\u003e m) = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e (\\(a, w) -\u003e ((a, w), w)) (\u003ccode\u003e\u003ca\u003erunWriterT\u003c/a\u003e\u003c/code\u003e m)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.Writer.Lazy",
        "fct-package": "transformers",
        "fct-signature": "WriterT w m a -\u003e WriterT w m (a, w)",
        "fct-source": "src/Control-Monad-Trans-Writer-Lazy.html#listen",
        "fct-type": "function",
        "title": "listen"
      },
      "index": {
        "description": "listen is an action that executes the action and adds its output to the value of the computation runWriterT listen liftM runWriterT",
        "hierarchy": "Control Monad Trans Writer Lazy",
        "module": "Control.Monad.Trans.Writer.Lazy",
        "name": "listen",
        "normalized": "WriterT a b c-\u003eWriterT a b(c,a)",
        "package": "transformers",
        "partial": "",
        "signature": "WriterT w m a-\u003eWriterT w m(a,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Writer-Lazy.html#v:listens",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003elistens\u003c/a\u003e\u003c/code\u003e f m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e and adds\n the result of applying \u003ccode\u003ef\u003c/code\u003e to the output to the value of the computation.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003elistens\u003c/a\u003e\u003c/code\u003e f m = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e (id *** f) (\u003ccode\u003e\u003ca\u003elisten\u003c/a\u003e\u003c/code\u003e m)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunWriterT\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003elistens\u003c/a\u003e\u003c/code\u003e f m) = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e (\\(a, w) -\u003e ((a, f w), w)) (\u003ccode\u003e\u003ca\u003erunWriterT\u003c/a\u003e\u003c/code\u003e m)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.Writer.Lazy",
        "fct-package": "transformers",
        "fct-signature": "(w -\u003e b) -\u003e WriterT w m a -\u003e WriterT w m (a, b)",
        "fct-source": "src/Control-Monad-Trans-Writer-Lazy.html#listens",
        "fct-type": "function",
        "title": "listens"
      },
      "index": {
        "description": "listens is an action that executes the action and adds the result of applying to the output to the value of the computation listens liftM id listen runWriterT listens liftM runWriterT",
        "hierarchy": "Control Monad Trans Writer Lazy",
        "module": "Control.Monad.Trans.Writer.Lazy",
        "name": "listens",
        "normalized": "(a-\u003eb)-\u003eWriterT a c d-\u003eWriterT a c(d,b)",
        "package": "transformers",
        "partial": "",
        "signature": "(w-\u003eb)-\u003eWriterT w m a-\u003eWriterT w m(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Writer-Lazy.html#v:mapWriter",
      "description": {
        "fct-descr": "\u003cp\u003eMap both the return value and output of a computation using\n the given function.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunWriter\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emapWriter\u003c/a\u003e\u003c/code\u003e f m) = f (\u003ccode\u003e\u003ca\u003erunWriter\u003c/a\u003e\u003c/code\u003e m)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.Writer.Lazy",
        "fct-package": "transformers",
        "fct-signature": "((a, w) -\u003e (b, w')) -\u003e Writer w a -\u003e Writer w' b",
        "fct-source": "src/Control-Monad-Trans-Writer-Lazy.html#mapWriter",
        "fct-type": "function",
        "title": "mapWriter"
      },
      "index": {
        "description": "Map both the return value and output of computation using the given function runWriter mapWriter runWriter",
        "hierarchy": "Control Monad Trans Writer Lazy",
        "module": "Control.Monad.Trans.Writer.Lazy",
        "name": "mapWriter",
        "normalized": "((a,b)-\u003e(c,d))-\u003eWriter b a-\u003eWriter d c",
        "package": "transformers",
        "partial": "Writer",
        "signature": "((a,w)-\u003e(b,w'))-\u003eWriter w a-\u003eWriter w' b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Writer-Lazy.html#v:mapWriterT",
      "description": {
        "fct-descr": "\u003cp\u003eMap both the return value and output of a computation using\n the given function.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunWriterT\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emapWriterT\u003c/a\u003e\u003c/code\u003e f m) = f (\u003ccode\u003e\u003ca\u003erunWriterT\u003c/a\u003e\u003c/code\u003e m)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.Writer.Lazy",
        "fct-package": "transformers",
        "fct-signature": "(m (a, w) -\u003e n (b, w')) -\u003e WriterT w m a -\u003e WriterT w' n b",
        "fct-source": "src/Control-Monad-Trans-Writer-Lazy.html#mapWriterT",
        "fct-type": "function",
        "title": "mapWriterT"
      },
      "index": {
        "description": "Map both the return value and output of computation using the given function runWriterT mapWriterT runWriterT",
        "hierarchy": "Control Monad Trans Writer Lazy",
        "module": "Control.Monad.Trans.Writer.Lazy",
        "name": "mapWriterT",
        "normalized": "(a(b,c)-\u003ed(e,f))-\u003eWriterT c a b-\u003eWriterT f d e",
        "package": "transformers",
        "partial": "Writer",
        "signature": "(m(a,w)-\u003en(b,w'))-\u003eWriterT w m a-\u003eWriterT w' n b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Writer-Lazy.html#v:pass",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003epass\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e, which returns\n a value and a function, and returns the value, applying the function\n to the output.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunWriterT\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003epass\u003c/a\u003e\u003c/code\u003e m) = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e (\\((a, f), w) -\u003e (a, f w)) (\u003ccode\u003e\u003ca\u003erunWriterT\u003c/a\u003e\u003c/code\u003e m)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.Writer.Lazy",
        "fct-package": "transformers",
        "fct-signature": "WriterT w m (a, w -\u003e w) -\u003e WriterT w m a",
        "fct-source": "src/Control-Monad-Trans-Writer-Lazy.html#pass",
        "fct-type": "function",
        "title": "pass"
      },
      "index": {
        "description": "pass is an action that executes the action which returns value and function and returns the value applying the function to the output runWriterT pass liftM runWriterT",
        "hierarchy": "Control Monad Trans Writer Lazy",
        "module": "Control.Monad.Trans.Writer.Lazy",
        "name": "pass",
        "normalized": "WriterT a b(c,a-\u003ea)-\u003eWriterT a b c",
        "package": "transformers",
        "partial": "",
        "signature": "WriterT w m(a,w-\u003ew)-\u003eWriterT w m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Writer-Lazy.html#v:runWriter",
      "description": {
        "fct-descr": "\u003cp\u003eUnwrap a writer computation as a (result, output) pair.\n (The inverse of \u003ccode\u003e\u003ca\u003ewriter\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Writer.Lazy",
        "fct-package": "transformers",
        "fct-signature": "Writer w a -\u003e (a, w)",
        "fct-source": "src/Control-Monad-Trans-Writer-Lazy.html#runWriter",
        "fct-type": "function",
        "title": "runWriter"
      },
      "index": {
        "description": "Unwrap writer computation as result output pair The inverse of writer",
        "hierarchy": "Control Monad Trans Writer Lazy",
        "module": "Control.Monad.Trans.Writer.Lazy",
        "name": "runWriter",
        "normalized": "Writer a b-\u003e(b,a)",
        "package": "transformers",
        "partial": "Writer",
        "signature": "Writer w a-\u003e(a,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Writer-Lazy.html#v:runWriterT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Trans.Writer.Lazy",
        "fct-package": "transformers",
        "fct-signature": "m (a, w)",
        "fct-source": "src/Control-Monad-Trans-Writer-Lazy.html#WriterT",
        "fct-type": "function",
        "title": "runWriterT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Writer Lazy",
        "module": "Control.Monad.Trans.Writer.Lazy",
        "name": "runWriterT",
        "normalized": "a(b,c)",
        "package": "transformers",
        "partial": "Writer",
        "signature": "m(a,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Writer-Lazy.html#v:tell",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003etell\u003c/a\u003e\u003c/code\u003e w\u003c/code\u003e is an action that produces the output \u003ccode\u003ew\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Writer.Lazy",
        "fct-package": "transformers",
        "fct-signature": "w -\u003e WriterT w m ()",
        "fct-source": "src/Control-Monad-Trans-Writer-Lazy.html#tell",
        "fct-type": "function",
        "title": "tell"
      },
      "index": {
        "description": "tell is an action that produces the output",
        "hierarchy": "Control Monad Trans Writer Lazy",
        "module": "Control.Monad.Trans.Writer.Lazy",
        "name": "tell",
        "normalized": "a-\u003eWriterT a b()",
        "package": "transformers",
        "partial": "",
        "signature": "w-\u003eWriterT w m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Writer-Lazy.html#v:writer",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a writer computation from a (result, output) pair.\n (The inverse of \u003ccode\u003e\u003ca\u003erunWriter\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Writer.Lazy",
        "fct-package": "transformers",
        "fct-signature": "(a, w) -\u003e WriterT w m a",
        "fct-source": "src/Control-Monad-Trans-Writer-Lazy.html#writer",
        "fct-type": "function",
        "title": "writer"
      },
      "index": {
        "description": "Construct writer computation from result output pair The inverse of runWriter",
        "hierarchy": "Control Monad Trans Writer Lazy",
        "module": "Control.Monad.Trans.Writer.Lazy",
        "name": "writer",
        "normalized": "(a,b)-\u003eWriterT b c a",
        "package": "transformers",
        "partial": "",
        "signature": "(a,w)-\u003eWriterT w m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Writer-Strict.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe strict \u003ccode\u003e\u003ca\u003eWriterT\u003c/a\u003e\u003c/code\u003e monad transformer, which adds collection of\n outputs (such as a count or string output) to a given monad.\n\u003c/p\u003e\u003cp\u003eThis version builds its output strictly; for a lazy version, see\n \u003ca\u003eControl.Monad.Trans.Writer.Lazy\u003c/a\u003e, which has the same interface.\n\u003c/p\u003e\u003cp\u003eThis monad transformer provides only limited access to the output\n during the computation.  For more general access, use\n \u003ca\u003eControl.Monad.Trans.State\u003c/a\u003e instead.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Trans.Writer.Strict",
        "fct-package": "transformers",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Trans-Writer-Strict.html",
        "fct-type": "module",
        "title": "Strict"
      },
      "index": {
        "description": "The strict WriterT monad transformer which adds collection of outputs such as count or string output to given monad This version builds its output strictly for lazy version see Control.Monad.Trans.Writer.Lazy which has the same interface This monad transformer provides only limited access to the output during the computation For more general access use Control.Monad.Trans.State instead",
        "hierarchy": "Control Monad Trans Writer Strict",
        "module": "Control.Monad.Trans.Writer.Strict",
        "name": "Strict",
        "normalized": "",
        "package": "transformers",
        "partial": "Strict",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Writer-Strict.html#t:Writer",
      "description": {
        "fct-descr": "\u003cp\u003eA writer monad parameterized by the type \u003ccode\u003ew\u003c/code\u003e of output to accumulate.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function produces the output \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e, while \u003ccode\u003e\u003e\u003e=\u003c/code\u003e\n combines the outputs of the subcomputations using \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Writer.Strict",
        "fct-package": "transformers",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Trans-Writer-Strict.html#Writer",
        "fct-type": "type",
        "title": "Writer"
      },
      "index": {
        "description": "writer monad parameterized by the type of output to accumulate The return function produces the output mempty while combines the outputs of the subcomputations using mappend",
        "hierarchy": "Control Monad Trans Writer Strict",
        "module": "Control.Monad.Trans.Writer.Strict",
        "name": "Writer",
        "normalized": "",
        "package": "transformers",
        "partial": "Writer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Writer-Strict.html#t:WriterT",
      "description": {
        "fct-descr": "\u003cp\u003eA writer monad parameterized by:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003ew\u003c/code\u003e - the output to accumulate.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003em\u003c/code\u003e - The inner monad.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function produces the output \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e, while \u003ccode\u003e\u003e\u003e=\u003c/code\u003e\n combines the outputs of the subcomputations using \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Writer.Strict",
        "fct-package": "transformers",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Trans-Writer-Strict.html#WriterT",
        "fct-type": "newtype",
        "title": "WriterT"
      },
      "index": {
        "description": "writer monad parameterized by the output to accumulate The inner monad The return function produces the output mempty while combines the outputs of the subcomputations using mappend",
        "hierarchy": "Control Monad Trans Writer Strict",
        "module": "Control.Monad.Trans.Writer.Strict",
        "name": "WriterT",
        "normalized": "",
        "package": "transformers",
        "partial": "Writer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Writer-Strict.html#v:WriterT",
      "description": {
        "fct-module": "Control.Monad.Trans.Writer.Strict",
        "fct-package": "transformers",
        "fct-signature": "WriterT",
        "fct-source": "src/Control-Monad-Trans-Writer-Strict.html#WriterT",
        "fct-type": "function",
        "title": "WriterT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Writer Strict",
        "module": "Control.Monad.Trans.Writer.Strict",
        "name": "WriterT",
        "normalized": "",
        "package": "transformers",
        "partial": "Writer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Writer-Strict.html#v:censor",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ecensor\u003c/a\u003e\u003c/code\u003e f m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e and\n applies the function \u003ccode\u003ef\u003c/code\u003e to its output, leaving the return value\n unchanged.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003ecensor\u003c/a\u003e\u003c/code\u003e f m = \u003ccode\u003e\u003ca\u003epass\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e (\\x -\u003e (x,f)) m)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunWriterT\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ecensor\u003c/a\u003e\u003c/code\u003e f m) = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e (\\(a, w) -\u003e (a, f w)) (\u003ccode\u003e\u003ca\u003erunWriterT\u003c/a\u003e\u003c/code\u003e m)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.Writer.Strict",
        "fct-package": "transformers",
        "fct-signature": "(w -\u003e w) -\u003e WriterT w m a -\u003e WriterT w m a",
        "fct-source": "src/Control-Monad-Trans-Writer-Strict.html#censor",
        "fct-type": "function",
        "title": "censor"
      },
      "index": {
        "description": "censor is an action that executes the action and applies the function to its output leaving the return value unchanged censor pass liftM runWriterT censor liftM runWriterT",
        "hierarchy": "Control Monad Trans Writer Strict",
        "module": "Control.Monad.Trans.Writer.Strict",
        "name": "censor",
        "normalized": "(a-\u003ea)-\u003eWriterT a b c-\u003eWriterT a b c",
        "package": "transformers",
        "partial": "",
        "signature": "(w-\u003ew)-\u003eWriterT w m a-\u003eWriterT w m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Writer-Strict.html#v:execWriter",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the output from a writer computation.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eexecWriter\u003c/a\u003e\u003c/code\u003e m = \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunWriter\u003c/a\u003e\u003c/code\u003e m)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.Writer.Strict",
        "fct-package": "transformers",
        "fct-signature": "Writer w a -\u003e w",
        "fct-source": "src/Control-Monad-Trans-Writer-Strict.html#execWriter",
        "fct-type": "function",
        "title": "execWriter"
      },
      "index": {
        "description": "Extract the output from writer computation execWriter snd runWriter",
        "hierarchy": "Control Monad Trans Writer Strict",
        "module": "Control.Monad.Trans.Writer.Strict",
        "name": "execWriter",
        "normalized": "Writer a b-\u003ea",
        "package": "transformers",
        "partial": "Writer",
        "signature": "Writer w a-\u003ew"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Writer-Strict.html#v:execWriterT",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the output from a writer computation.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eexecWriterT\u003c/a\u003e\u003c/code\u003e m = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunWriterT\u003c/a\u003e\u003c/code\u003e m)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.Writer.Strict",
        "fct-package": "transformers",
        "fct-signature": "WriterT w m a -\u003e m w",
        "fct-source": "src/Control-Monad-Trans-Writer-Strict.html#execWriterT",
        "fct-type": "function",
        "title": "execWriterT"
      },
      "index": {
        "description": "Extract the output from writer computation execWriterT liftM snd runWriterT",
        "hierarchy": "Control Monad Trans Writer Strict",
        "module": "Control.Monad.Trans.Writer.Strict",
        "name": "execWriterT",
        "normalized": "WriterT a b c-\u003eb a",
        "package": "transformers",
        "partial": "Writer",
        "signature": "WriterT w m a-\u003em w"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Writer-Strict.html#v:liftCallCC",
      "description": {
        "fct-descr": "\u003cp\u003eLift a \u003ccode\u003ecallCC\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Writer.Strict",
        "fct-package": "transformers",
        "fct-signature": "((((a, w) -\u003e m (b, w)) -\u003e m (a, w)) -\u003e m (a, w)) -\u003e ((a -\u003e WriterT w m b) -\u003e WriterT w m a) -\u003e WriterT w m a",
        "fct-source": "src/Control-Monad-Trans-Writer-Strict.html#liftCallCC",
        "fct-type": "function",
        "title": "liftCallCC"
      },
      "index": {
        "description": "Lift callCC operation to the new monad",
        "hierarchy": "Control Monad Trans Writer Strict",
        "module": "Control.Monad.Trans.Writer.Strict",
        "name": "liftCallCC",
        "normalized": "((((a,b)-\u003ec(d,b))-\u003ec(a,b))-\u003ec(a,b))-\u003e((a-\u003eWriterT b c d)-\u003eWriterT b c a)-\u003eWriterT b c a",
        "package": "transformers",
        "partial": "Call CC",
        "signature": "((((a,w)-\u003em(b,w))-\u003em(a,w))-\u003em(a,w))-\u003e((a-\u003eWriterT w m b)-\u003eWriterT w m a)-\u003eWriterT w m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Writer-Strict.html#v:liftCatch",
      "description": {
        "fct-descr": "\u003cp\u003eLift a \u003ccode\u003ecatchError\u003c/code\u003e operation to the new monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Writer.Strict",
        "fct-package": "transformers",
        "fct-signature": "(m (a, w) -\u003e (e -\u003e m (a, w)) -\u003e m (a, w)) -\u003e WriterT w m a -\u003e (e -\u003e WriterT w m a) -\u003e WriterT w m a",
        "fct-source": "src/Control-Monad-Trans-Writer-Strict.html#liftCatch",
        "fct-type": "function",
        "title": "liftCatch"
      },
      "index": {
        "description": "Lift catchError operation to the new monad",
        "hierarchy": "Control Monad Trans Writer Strict",
        "module": "Control.Monad.Trans.Writer.Strict",
        "name": "liftCatch",
        "normalized": "(a(b,c)-\u003e(d-\u003ea(b,c))-\u003ea(b,c))-\u003eWriterT c a b-\u003e(d-\u003eWriterT c a b)-\u003eWriterT c a b",
        "package": "transformers",
        "partial": "Catch",
        "signature": "(m(a,w)-\u003e(e-\u003em(a,w))-\u003em(a,w))-\u003eWriterT w m a-\u003e(e-\u003eWriterT w m a)-\u003eWriterT w m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Writer-Strict.html#v:listen",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003elisten\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e and adds its\n output to the value of the computation.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunWriterT\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003elisten\u003c/a\u003e\u003c/code\u003e m) = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e (\\(a, w) -\u003e ((a, w), w)) (\u003ccode\u003e\u003ca\u003erunWriterT\u003c/a\u003e\u003c/code\u003e m)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.Writer.Strict",
        "fct-package": "transformers",
        "fct-signature": "WriterT w m a -\u003e WriterT w m (a, w)",
        "fct-source": "src/Control-Monad-Trans-Writer-Strict.html#listen",
        "fct-type": "function",
        "title": "listen"
      },
      "index": {
        "description": "listen is an action that executes the action and adds its output to the value of the computation runWriterT listen liftM runWriterT",
        "hierarchy": "Control Monad Trans Writer Strict",
        "module": "Control.Monad.Trans.Writer.Strict",
        "name": "listen",
        "normalized": "WriterT a b c-\u003eWriterT a b(c,a)",
        "package": "transformers",
        "partial": "",
        "signature": "WriterT w m a-\u003eWriterT w m(a,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Writer-Strict.html#v:listens",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003elistens\u003c/a\u003e\u003c/code\u003e f m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e and adds\n the result of applying \u003ccode\u003ef\u003c/code\u003e to the output to the value of the computation.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003elistens\u003c/a\u003e\u003c/code\u003e f m = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e (id *** f) (\u003ccode\u003e\u003ca\u003elisten\u003c/a\u003e\u003c/code\u003e m)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunWriterT\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003elistens\u003c/a\u003e\u003c/code\u003e f m) = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e (\\(a, w) -\u003e ((a, f w), w)) (\u003ccode\u003e\u003ca\u003erunWriterT\u003c/a\u003e\u003c/code\u003e m)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.Writer.Strict",
        "fct-package": "transformers",
        "fct-signature": "(w -\u003e b) -\u003e WriterT w m a -\u003e WriterT w m (a, b)",
        "fct-source": "src/Control-Monad-Trans-Writer-Strict.html#listens",
        "fct-type": "function",
        "title": "listens"
      },
      "index": {
        "description": "listens is an action that executes the action and adds the result of applying to the output to the value of the computation listens liftM id listen runWriterT listens liftM runWriterT",
        "hierarchy": "Control Monad Trans Writer Strict",
        "module": "Control.Monad.Trans.Writer.Strict",
        "name": "listens",
        "normalized": "(a-\u003eb)-\u003eWriterT a c d-\u003eWriterT a c(d,b)",
        "package": "transformers",
        "partial": "",
        "signature": "(w-\u003eb)-\u003eWriterT w m a-\u003eWriterT w m(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Writer-Strict.html#v:mapWriter",
      "description": {
        "fct-descr": "\u003cp\u003eMap both the return value and output of a computation using\n the given function.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunWriter\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emapWriter\u003c/a\u003e\u003c/code\u003e f m) = f (\u003ccode\u003e\u003ca\u003erunWriter\u003c/a\u003e\u003c/code\u003e m)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.Writer.Strict",
        "fct-package": "transformers",
        "fct-signature": "((a, w) -\u003e (b, w')) -\u003e Writer w a -\u003e Writer w' b",
        "fct-source": "src/Control-Monad-Trans-Writer-Strict.html#mapWriter",
        "fct-type": "function",
        "title": "mapWriter"
      },
      "index": {
        "description": "Map both the return value and output of computation using the given function runWriter mapWriter runWriter",
        "hierarchy": "Control Monad Trans Writer Strict",
        "module": "Control.Monad.Trans.Writer.Strict",
        "name": "mapWriter",
        "normalized": "((a,b)-\u003e(c,d))-\u003eWriter b a-\u003eWriter d c",
        "package": "transformers",
        "partial": "Writer",
        "signature": "((a,w)-\u003e(b,w'))-\u003eWriter w a-\u003eWriter w' b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Writer-Strict.html#v:mapWriterT",
      "description": {
        "fct-descr": "\u003cp\u003eMap both the return value and output of a computation using\n the given function.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunWriterT\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003emapWriterT\u003c/a\u003e\u003c/code\u003e f m) = f (\u003ccode\u003e\u003ca\u003erunWriterT\u003c/a\u003e\u003c/code\u003e m)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.Writer.Strict",
        "fct-package": "transformers",
        "fct-signature": "(m (a, w) -\u003e n (b, w')) -\u003e WriterT w m a -\u003e WriterT w' n b",
        "fct-source": "src/Control-Monad-Trans-Writer-Strict.html#mapWriterT",
        "fct-type": "function",
        "title": "mapWriterT"
      },
      "index": {
        "description": "Map both the return value and output of computation using the given function runWriterT mapWriterT runWriterT",
        "hierarchy": "Control Monad Trans Writer Strict",
        "module": "Control.Monad.Trans.Writer.Strict",
        "name": "mapWriterT",
        "normalized": "(a(b,c)-\u003ed(e,f))-\u003eWriterT c a b-\u003eWriterT f d e",
        "package": "transformers",
        "partial": "Writer",
        "signature": "(m(a,w)-\u003en(b,w'))-\u003eWriterT w m a-\u003eWriterT w' n b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Writer-Strict.html#v:pass",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003epass\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e, which returns\n a value and a function, and returns the value, applying the function\n to the output.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunWriterT\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003epass\u003c/a\u003e\u003c/code\u003e m) = \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e (\\((a, f), w) -\u003e (a, f w)) (\u003ccode\u003e\u003ca\u003erunWriterT\u003c/a\u003e\u003c/code\u003e m)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Monad.Trans.Writer.Strict",
        "fct-package": "transformers",
        "fct-signature": "WriterT w m (a, w -\u003e w) -\u003e WriterT w m a",
        "fct-source": "src/Control-Monad-Trans-Writer-Strict.html#pass",
        "fct-type": "function",
        "title": "pass"
      },
      "index": {
        "description": "pass is an action that executes the action which returns value and function and returns the value applying the function to the output runWriterT pass liftM runWriterT",
        "hierarchy": "Control Monad Trans Writer Strict",
        "module": "Control.Monad.Trans.Writer.Strict",
        "name": "pass",
        "normalized": "WriterT a b(c,a-\u003ea)-\u003eWriterT a b c",
        "package": "transformers",
        "partial": "",
        "signature": "WriterT w m(a,w-\u003ew)-\u003eWriterT w m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Writer-Strict.html#v:runWriter",
      "description": {
        "fct-descr": "\u003cp\u003eUnwrap a writer computation as a (result, output) pair.\n (The inverse of \u003ccode\u003e\u003ca\u003ewriter\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Writer.Strict",
        "fct-package": "transformers",
        "fct-signature": "Writer w a -\u003e (a, w)",
        "fct-source": "src/Control-Monad-Trans-Writer-Strict.html#runWriter",
        "fct-type": "function",
        "title": "runWriter"
      },
      "index": {
        "description": "Unwrap writer computation as result output pair The inverse of writer",
        "hierarchy": "Control Monad Trans Writer Strict",
        "module": "Control.Monad.Trans.Writer.Strict",
        "name": "runWriter",
        "normalized": "Writer a b-\u003e(b,a)",
        "package": "transformers",
        "partial": "Writer",
        "signature": "Writer w a-\u003e(a,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Writer-Strict.html#v:runWriterT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Trans.Writer.Strict",
        "fct-package": "transformers",
        "fct-signature": "m (a, w)",
        "fct-source": "src/Control-Monad-Trans-Writer-Strict.html#WriterT",
        "fct-type": "function",
        "title": "runWriterT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Writer Strict",
        "module": "Control.Monad.Trans.Writer.Strict",
        "name": "runWriterT",
        "normalized": "a(b,c)",
        "package": "transformers",
        "partial": "Writer",
        "signature": "m(a,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Writer-Strict.html#v:tell",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003etell\u003c/a\u003e\u003c/code\u003e w\u003c/code\u003e is an action that produces the output \u003ccode\u003ew\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Writer.Strict",
        "fct-package": "transformers",
        "fct-signature": "w -\u003e WriterT w m ()",
        "fct-source": "src/Control-Monad-Trans-Writer-Strict.html#tell",
        "fct-type": "function",
        "title": "tell"
      },
      "index": {
        "description": "tell is an action that produces the output",
        "hierarchy": "Control Monad Trans Writer Strict",
        "module": "Control.Monad.Trans.Writer.Strict",
        "name": "tell",
        "normalized": "a-\u003eWriterT a b()",
        "package": "transformers",
        "partial": "",
        "signature": "w-\u003eWriterT w m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Writer-Strict.html#v:writer",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a writer computation from a (result, output) pair.\n (The inverse of \u003ccode\u003e\u003ca\u003erunWriter\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Writer.Strict",
        "fct-package": "transformers",
        "fct-signature": "(a, w) -\u003e WriterT w m a",
        "fct-source": "src/Control-Monad-Trans-Writer-Strict.html#writer",
        "fct-type": "function",
        "title": "writer"
      },
      "index": {
        "description": "Construct writer computation from result output pair The inverse of runWriter",
        "hierarchy": "Control Monad Trans Writer Strict",
        "module": "Control.Monad.Trans.Writer.Strict",
        "name": "writer",
        "normalized": "(a,b)-\u003eWriterT b c a",
        "package": "transformers",
        "partial": "",
        "signature": "(a,w)-\u003eWriterT w m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Control-Monad-Trans-Writer.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe WriterT monad transformer.\n This version is lazy; for a strict version, see\n \u003ca\u003eControl.Monad.Trans.Writer.Strict\u003c/a\u003e, which has the same interface.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Trans.Writer",
        "fct-package": "transformers",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Trans-Writer.html",
        "fct-type": "module",
        "title": "Writer"
      },
      "index": {
        "description": "The WriterT monad transformer This version is lazy for strict version see Control.Monad.Trans.Writer.Strict which has the same interface",
        "hierarchy": "Control Monad Trans Writer",
        "module": "Control.Monad.Trans.Writer",
        "name": "Writer",
        "normalized": "",
        "package": "transformers",
        "partial": "Writer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Data-Functor-Compose.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eComposition of functors.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Functor.Compose",
        "fct-package": "transformers",
        "fct-signature": "module",
        "fct-source": "src/Data-Functor-Compose.html",
        "fct-type": "module",
        "title": "Compose"
      },
      "index": {
        "description": "Composition of functors",
        "hierarchy": "Data Functor Compose",
        "module": "Data.Functor.Compose",
        "name": "Compose",
        "normalized": "",
        "package": "transformers",
        "partial": "Compose",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Data-Functor-Compose.html#t:Compose",
      "description": {
        "fct-descr": "\u003cp\u003eRight-to-left composition of functors.\n The composition of applicative functors is always applicative,\n but the composition of monads is not always a monad.\n\u003c/p\u003e",
        "fct-module": "Data.Functor.Compose",
        "fct-package": "transformers",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Functor-Compose.html#Compose",
        "fct-type": "newtype",
        "title": "Compose"
      },
      "index": {
        "description": "Right-to-left composition of functors The composition of applicative functors is always applicative but the composition of monads is not always monad",
        "hierarchy": "Data Functor Compose",
        "module": "Data.Functor.Compose",
        "name": "Compose",
        "normalized": "",
        "package": "transformers",
        "partial": "Compose",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Data-Functor-Compose.html#v:Compose",
      "description": {
        "fct-module": "Data.Functor.Compose",
        "fct-package": "transformers",
        "fct-signature": "Compose",
        "fct-source": "src/Data-Functor-Compose.html#Compose",
        "fct-type": "function",
        "title": "Compose"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Compose",
        "module": "Data.Functor.Compose",
        "name": "Compose",
        "normalized": "",
        "package": "transformers",
        "partial": "Compose",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Data-Functor-Compose.html#v:getCompose",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Functor.Compose",
        "fct-package": "transformers",
        "fct-signature": "f (g a)",
        "fct-source": "src/Data-Functor-Compose.html#Compose",
        "fct-type": "function",
        "title": "getCompose"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Compose",
        "module": "Data.Functor.Compose",
        "name": "getCompose",
        "normalized": "",
        "package": "transformers",
        "partial": "Compose",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Data-Functor-Constant.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe constant functor.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Functor.Constant",
        "fct-package": "transformers",
        "fct-signature": "module",
        "fct-source": "src/Data-Functor-Constant.html",
        "fct-type": "module",
        "title": "Constant"
      },
      "index": {
        "description": "The constant functor",
        "hierarchy": "Data Functor Constant",
        "module": "Data.Functor.Constant",
        "name": "Constant",
        "normalized": "",
        "package": "transformers",
        "partial": "Constant",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Data-Functor-Constant.html#t:Constant",
      "description": {
        "fct-descr": "\u003cp\u003eConstant functor.\n\u003c/p\u003e",
        "fct-module": "Data.Functor.Constant",
        "fct-package": "transformers",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Functor-Constant.html#Constant",
        "fct-type": "newtype",
        "title": "Constant"
      },
      "index": {
        "description": "Constant functor",
        "hierarchy": "Data Functor Constant",
        "module": "Data.Functor.Constant",
        "name": "Constant",
        "normalized": "",
        "package": "transformers",
        "partial": "Constant",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Data-Functor-Constant.html#v:Constant",
      "description": {
        "fct-module": "Data.Functor.Constant",
        "fct-package": "transformers",
        "fct-signature": "Constant",
        "fct-source": "src/Data-Functor-Constant.html#Constant",
        "fct-type": "function",
        "title": "Constant"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Constant",
        "module": "Data.Functor.Constant",
        "name": "Constant",
        "normalized": "",
        "package": "transformers",
        "partial": "Constant",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Data-Functor-Constant.html#v:getConstant",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Functor.Constant",
        "fct-package": "transformers",
        "fct-signature": "a",
        "fct-source": "src/Data-Functor-Constant.html#Constant",
        "fct-type": "function",
        "title": "getConstant"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Constant",
        "module": "Data.Functor.Constant",
        "name": "getConstant",
        "normalized": "",
        "package": "transformers",
        "partial": "Constant",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Data-Functor-Identity.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe identity functor and monad.\n\u003c/p\u003e\u003cp\u003eThis trivial type constructor serves two purposes:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e It can be used with functions parameterized by functor or monad classes.\n\u003c/li\u003e\u003cli\u003e It can be used as a base monad to which a series of monad\n   transformers may be applied to construct a composite monad.\n   Most monad transformer modules include the special case of\n   applying the transformer to \u003ccode\u003e\u003ca\u003eIdentity\u003c/a\u003e\u003c/code\u003e.  For example, \u003ccode\u003eState s\u003c/code\u003e\n   is an abbreviation for \u003ccode\u003eStateT s \u003ccode\u003e\u003ca\u003eIdentity\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Data.Functor.Identity",
        "fct-package": "transformers",
        "fct-signature": "module",
        "fct-source": "src/Data-Functor-Identity.html",
        "fct-type": "module",
        "title": "Identity"
      },
      "index": {
        "description": "The identity functor and monad This trivial type constructor serves two purposes It can be used with functions parameterized by functor or monad classes It can be used as base monad to which series of monad transformers may be applied to construct composite monad Most monad transformer modules include the special case of applying the transformer to Identity For example State is an abbreviation for StateT Identity",
        "hierarchy": "Data Functor Identity",
        "module": "Data.Functor.Identity",
        "name": "Identity",
        "normalized": "",
        "package": "transformers",
        "partial": "Identity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Data-Functor-Identity.html#t:Identity",
      "description": {
        "fct-descr": "\u003cp\u003eIdentity functor and monad.\n\u003c/p\u003e",
        "fct-module": "Data.Functor.Identity",
        "fct-package": "transformers",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Functor-Identity.html#Identity",
        "fct-type": "newtype",
        "title": "Identity"
      },
      "index": {
        "description": "Identity functor and monad",
        "hierarchy": "Data Functor Identity",
        "module": "Data.Functor.Identity",
        "name": "Identity",
        "normalized": "",
        "package": "transformers",
        "partial": "Identity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Data-Functor-Identity.html#v:Identity",
      "description": {
        "fct-module": "Data.Functor.Identity",
        "fct-package": "transformers",
        "fct-signature": "Identity",
        "fct-source": "src/Data-Functor-Identity.html#Identity",
        "fct-type": "function",
        "title": "Identity"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Identity",
        "module": "Data.Functor.Identity",
        "name": "Identity",
        "normalized": "",
        "package": "transformers",
        "partial": "Identity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Data-Functor-Identity.html#v:runIdentity",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Functor.Identity",
        "fct-package": "transformers",
        "fct-signature": "a",
        "fct-source": "src/Data-Functor-Identity.html#Identity",
        "fct-type": "function",
        "title": "runIdentity"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Identity",
        "module": "Data.Functor.Identity",
        "name": "runIdentity",
        "normalized": "",
        "package": "transformers",
        "partial": "Identity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Data-Functor-Product.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProducts, lifted to functors.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Functor.Product",
        "fct-package": "transformers",
        "fct-signature": "module",
        "fct-source": "src/Data-Functor-Product.html",
        "fct-type": "module",
        "title": "Product"
      },
      "index": {
        "description": "Products lifted to functors",
        "hierarchy": "Data Functor Product",
        "module": "Data.Functor.Product",
        "name": "Product",
        "normalized": "",
        "package": "transformers",
        "partial": "Product",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Data-Functor-Product.html#t:Product",
      "description": {
        "fct-descr": "\u003cp\u003eLifted product of functors.\n\u003c/p\u003e",
        "fct-module": "Data.Functor.Product",
        "fct-package": "transformers",
        "fct-signature": "data",
        "fct-source": "src/Data-Functor-Product.html#Product",
        "fct-type": "data",
        "title": "Product"
      },
      "index": {
        "description": "Lifted product of functors",
        "hierarchy": "Data Functor Product",
        "module": "Data.Functor.Product",
        "name": "Product",
        "normalized": "",
        "package": "transformers",
        "partial": "Product",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Data-Functor-Product.html#v:Pair",
      "description": {
        "fct-module": "Data.Functor.Product",
        "fct-package": "transformers",
        "fct-signature": "Pair (f a) (g a)",
        "fct-source": "src/Data-Functor-Product.html#Product",
        "fct-type": "function",
        "title": "Pair"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Product",
        "module": "Data.Functor.Product",
        "name": "Pair",
        "normalized": "",
        "package": "transformers",
        "partial": "Pair",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Data-Functor-Reverse.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMaking functors whose elements are notionally in the reverse order\n from the original functor.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Functor.Reverse",
        "fct-package": "transformers",
        "fct-signature": "module",
        "fct-source": "src/Data-Functor-Reverse.html",
        "fct-type": "module",
        "title": "Reverse"
      },
      "index": {
        "description": "Making functors whose elements are notionally in the reverse order from the original functor",
        "hierarchy": "Data Functor Reverse",
        "module": "Data.Functor.Reverse",
        "name": "Reverse",
        "normalized": "",
        "package": "transformers",
        "partial": "Reverse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Data-Functor-Reverse.html#t:Reverse",
      "description": {
        "fct-descr": "\u003cp\u003eThe same functor, but with \u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eTraversable\u003c/a\u003e\u003c/code\u003e instances\n that process the elements in the reverse order.\n\u003c/p\u003e",
        "fct-module": "Data.Functor.Reverse",
        "fct-package": "transformers",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Functor-Reverse.html#Reverse",
        "fct-type": "newtype",
        "title": "Reverse"
      },
      "index": {
        "description": "The same functor but with Foldable and Traversable instances that process the elements in the reverse order",
        "hierarchy": "Data Functor Reverse",
        "module": "Data.Functor.Reverse",
        "name": "Reverse",
        "normalized": "",
        "package": "transformers",
        "partial": "Reverse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Data-Functor-Reverse.html#v:Reverse",
      "description": {
        "fct-module": "Data.Functor.Reverse",
        "fct-package": "transformers",
        "fct-signature": "Reverse",
        "fct-source": "src/Data-Functor-Reverse.html#Reverse",
        "fct-type": "function",
        "title": "Reverse"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Reverse",
        "module": "Data.Functor.Reverse",
        "name": "Reverse",
        "normalized": "",
        "package": "transformers",
        "partial": "Reverse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/transformers/docs/Data-Functor-Reverse.html#v:getReverse",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Functor.Reverse",
        "fct-package": "transformers",
        "fct-signature": "f a",
        "fct-source": "src/Data-Functor-Reverse.html#Reverse",
        "fct-type": "function",
        "title": "getReverse"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Functor Reverse",
        "module": "Data.Functor.Reverse",
        "name": "getReverse",
        "normalized": "",
        "package": "transformers",
        "partial": "Reverse",
        "signature": ""
      }
    }
  }
]