[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception-Base.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA Monad Transformer for explicitly typed checked exceptions.\n\u003c/p\u003e\u003cp\u003eThe exceptions thrown by a computation are inferred by the typechecker\nand appear in the type signature of the computation as \u003ccode\u003e\u003ca\u003eThrows\u003c/a\u003e\u003c/code\u003e constraints.\n\u003c/p\u003e\u003cp\u003eExceptions are defined using the extensible exceptions framework of Marlow (documented in \u003ca\u003eControl.Exception\u003c/a\u003e):\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003cem\u003eAn Extensible Dynamically-Typed Hierarchy of Exceptions\u003c/em\u003e, by Simon Marlow, in \u003cem\u003eHaskell '06\u003c/em\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003cem\u003eExample\u003c/em\u003e\n\u003c/p\u003e\u003cpre\u003e data DivideByZero = DivideByZero deriving (Show, Typeable)\n data SumOverflow  = SumOverflow  deriving (Show, Typeable)\n\u003c/pre\u003e\u003cpre\u003e instance Exception DivideByZero\n instance Exception SumOverflow\n\u003c/pre\u003e\u003cpre\u003e data Expr = Add Expr Expr | Div Expr Expr | Val Double\n\u003c/pre\u003e\u003cpre\u003e eval (Val x)     = return x\n eval (Add a1 a2) = do\n    v1 \u003c- eval a1\n    v2 \u003c- eval a2\n    let sum = v1 + v2\n    if sum \u003c v1 || sum \u003c v2 then throw SumOverflow else return sum\n eval (Div a1 a2) = do\n    v1 \u003c- eval a1\n    v2 \u003c- eval a2\n    if v2 == 0 then throw DivideByZero else return (v1 / v2)\n\u003c/pre\u003e\u003cp\u003eGHCi infers the following types\n\u003c/p\u003e\u003cpre\u003e eval                                             :: (Throws DivideByZero l, Throws SumOverflow l) =\u003e Expr -\u003e EM l Double\n eval `catch` \\ (e::DivideByZero) -\u003e return (-1)  :: Throws SumOverflow l =\u003e Expr -\u003e EM l Double\n runEM(eval `catch` \\ (e::SomeException) -\u003e return (-1))\n                                                  :: Expr -\u003e Double\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Exception.Base",
        "fct-package": "control-monad-exception",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Exception-Base.html",
        "fct-type": "module",
        "title": "Base"
      },
      "index": {
        "description": "Monad Transformer for explicitly typed checked exceptions The exceptions thrown by computation are inferred by the typechecker and appear in the type signature of the computation as Throws constraints Exceptions are defined using the extensible exceptions framework of Marlow documented in Control.Exception An Extensible Dynamically-Typed Hierarchy of Exceptions by Simon Marlow in Haskell Example data DivideByZero DivideByZero deriving Show Typeable data SumOverflow SumOverflow deriving Show Typeable instance Exception DivideByZero instance Exception SumOverflow data Expr Add Expr Expr Div Expr Expr Val Double eval Val return eval Add a1 a2 do v1 eval a1 v2 eval a2 let sum v1 v2 if sum v1 sum v2 then throw SumOverflow else return sum eval Div a1 a2 do v1 eval a1 v2 eval a2 if v2 then throw DivideByZero else return v1 v2 GHCi infers the following types eval Throws DivideByZero Throws SumOverflow Expr EM Double eval catch DivideByZero return Throws SumOverflow Expr EM Double runEM eval catch SomeException return Expr Double",
        "hierarchy": "Control Monad Exception Base",
        "module": "Control.Monad.Exception.Base",
        "name": "Base",
        "normalized": "",
        "package": "control-monad-exception",
        "partial": "Base",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception-Base.html#t:AnyException",
      "description": {
        "fct-module": "Control.Monad.Exception.Base",
        "fct-package": "control-monad-exception",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Exception-Base.html#AnyException",
        "fct-type": "data",
        "title": "AnyException"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Base",
        "module": "Control.Monad.Exception.Base",
        "name": "AnyException",
        "normalized": "",
        "package": "control-monad-exception",
        "partial": "Any Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception-Base.html#t:CallTrace",
      "description": {
        "fct-module": "Control.Monad.Exception.Base",
        "fct-package": "control-monad-exception",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Exception-Base.html#CallTrace",
        "fct-type": "type",
        "title": "CallTrace"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Base",
        "module": "Control.Monad.Exception.Base",
        "name": "CallTrace",
        "normalized": "",
        "package": "control-monad-exception",
        "partial": "Call Trace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception-Base.html#t:EM",
      "description": {
        "fct-descr": "\u003cp\u003eA monad of explicitly typed, checked exceptions\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Base",
        "fct-package": "control-monad-exception",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Exception-Base.html#EM",
        "fct-type": "type",
        "title": "EM"
      },
      "index": {
        "description": "monad of explicitly typed checked exceptions",
        "hierarchy": "Control Monad Exception Base",
        "module": "Control.Monad.Exception.Base",
        "name": "EM",
        "normalized": "",
        "package": "control-monad-exception",
        "partial": "EM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception-Base.html#t:EMT",
      "description": {
        "fct-descr": "\u003cp\u003eA Monad Transformer for explicitly typed checked exceptions.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Base",
        "fct-package": "control-monad-exception",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Exception-Base.html#EMT",
        "fct-type": "newtype",
        "title": "EMT"
      },
      "index": {
        "description": "Monad Transformer for explicitly typed checked exceptions",
        "hierarchy": "Control Monad Exception Base",
        "module": "Control.Monad.Exception.Base",
        "name": "EMT",
        "normalized": "",
        "package": "control-monad-exception",
        "partial": "EMT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception-Base.html#t:FailException",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eFailException\u003c/code\u003e is thrown by Monad \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Base",
        "fct-package": "control-monad-exception",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Exception-Base.html#FailException",
        "fct-type": "data",
        "title": "FailException"
      },
      "index": {
        "description": "FailException is thrown by Monad fail",
        "hierarchy": "Control Monad Exception Base",
        "module": "Control.Monad.Exception.Base",
        "name": "FailException",
        "normalized": "",
        "package": "control-monad-exception",
        "partial": "Fail Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception-Base.html#t:MonadZeroException",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eMonadZeroException\u003c/code\u003e is thrown by MonadPlus \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Base",
        "fct-package": "control-monad-exception",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Exception-Base.html#MonadZeroException",
        "fct-type": "data",
        "title": "MonadZeroException"
      },
      "index": {
        "description": "MonadZeroException is thrown by MonadPlus mzero",
        "hierarchy": "Control Monad Exception Base",
        "module": "Control.Monad.Exception.Base",
        "name": "MonadZeroException",
        "normalized": "",
        "package": "control-monad-exception",
        "partial": "Monad Zero Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception-Base.html#t:NoExceptions",
      "description": {
        "fct-module": "Control.Monad.Exception.Base",
        "fct-package": "control-monad-exception",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Exception-Base.html#NoExceptions",
        "fct-type": "data",
        "title": "NoExceptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Base",
        "module": "Control.Monad.Exception.Base",
        "name": "NoExceptions",
        "normalized": "",
        "package": "control-monad-exception",
        "partial": "No Exceptions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception-Base.html#t:ParanoidMode",
      "description": {
        "fct-module": "Control.Monad.Exception.Base",
        "fct-package": "control-monad-exception",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Exception-Base.html#ParanoidMode",
        "fct-type": "data",
        "title": "ParanoidMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Base",
        "module": "Control.Monad.Exception.Base",
        "name": "ParanoidMode",
        "normalized": "",
        "package": "control-monad-exception",
        "partial": "Paranoid Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception-Base.html#t:UncaughtException",
      "description": {
        "fct-descr": "\u003cp\u003eUncaughtException models unchecked exceptions\n\u003c/p\u003e\u003cp\u003eIn order to declare an unchecked exception \u003ccode\u003eE\u003c/code\u003e,\n   all that is needed is to make \u003ccode\u003ee\u003c/code\u003e an instance of \u003ccode\u003e\u003ca\u003eUncaughtException\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e instance UncaughtException E\n\u003c/pre\u003e\u003cp\u003eNote that declaring an exception E as unchecked does not automatically\n   turn its children unchecked too. This is a shortcoming of the current encoding.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Base",
        "fct-package": "control-monad-exception",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Exception-Base.html#UncaughtException",
        "fct-type": "class",
        "title": "UncaughtException"
      },
      "index": {
        "description": "UncaughtException models unchecked exceptions In order to declare an unchecked exception all that is needed is to make an instance of UncaughtException instance UncaughtException Note that declaring an exception as unchecked does not automatically turn its children unchecked too This is shortcoming of the current encoding",
        "hierarchy": "Control Monad Exception Base",
        "module": "Control.Monad.Exception.Base",
        "name": "UncaughtException",
        "normalized": "",
        "package": "control-monad-exception",
        "partial": "Uncaught Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception-Base.html#v:EMT",
      "description": {
        "fct-module": "Control.Monad.Exception.Base",
        "fct-package": "control-monad-exception",
        "fct-signature": "EMT",
        "fct-source": "src/Control-Monad-Exception-Base.html#EMT",
        "fct-type": "function",
        "title": "EMT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Base",
        "module": "Control.Monad.Exception.Base",
        "name": "EMT",
        "normalized": "",
        "package": "control-monad-exception",
        "partial": "EMT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception-Base.html#v:FailException",
      "description": {
        "fct-module": "Control.Monad.Exception.Base",
        "fct-package": "control-monad-exception",
        "fct-signature": "FailException String",
        "fct-source": "src/Control-Monad-Exception-Base.html#FailException",
        "fct-type": "function",
        "title": "FailException"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Base",
        "module": "Control.Monad.Exception.Base",
        "name": "FailException",
        "normalized": "",
        "package": "control-monad-exception",
        "partial": "Fail Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception-Base.html#v:MonadZeroException",
      "description": {
        "fct-module": "Control.Monad.Exception.Base",
        "fct-package": "control-monad-exception",
        "fct-signature": "MonadZeroException",
        "fct-source": "src/Control-Monad-Exception-Base.html#MonadZeroException",
        "fct-type": "function",
        "title": "MonadZeroException"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Base",
        "module": "Control.Monad.Exception.Base",
        "name": "MonadZeroException",
        "normalized": "",
        "package": "control-monad-exception",
        "partial": "Monad Zero Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception-Base.html#v:bracket",
      "description": {
        "fct-module": "Control.Monad.Exception.Base",
        "fct-package": "control-monad-exception",
        "fct-signature": "EMT l m a-\u003e (a -\u003e EMT l m b)-\u003e (a -\u003e EMT l m c)-\u003e EMT l m c",
        "fct-type": "function",
        "title": "bracket"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Base",
        "module": "Control.Monad.Exception.Base",
        "name": "bracket",
        "normalized": "EMT a b c-\u003e(c-\u003eEMT a b d)-\u003e(c-\u003eEMT a b e)-\u003eEMT a b e",
        "package": "control-monad-exception",
        "partial": "",
        "signature": "EMT l m a-\u003e(a-\u003eEMT l m b)-\u003e(a-\u003eEMT l m c)-\u003eEMT l m c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception-Base.html#v:catch",
      "description": {
        "fct-descr": "\u003cp\u003eThe catch primitive\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Base",
        "fct-package": "control-monad-exception",
        "fct-signature": "EMT (Caught e l) m a -\u003e (e -\u003e EMT l m a) -\u003e EMT l m a",
        "fct-source": "src/Control-Monad-Exception-Base.html#catch",
        "fct-type": "function",
        "title": "catch"
      },
      "index": {
        "description": "The catch primitive",
        "hierarchy": "Control Monad Exception Base",
        "module": "Control.Monad.Exception.Base",
        "name": "catch",
        "normalized": "EMT(Caught a b)c d-\u003e(a-\u003eEMT b c d)-\u003eEMT b c d",
        "package": "control-monad-exception",
        "partial": "",
        "signature": "EMT(Caught e l)m a-\u003e(e-\u003eEMT l m a)-\u003eEMT l m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception-Base.html#v:catchWithSrcLoc",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e but makes the call trace available\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Base",
        "fct-package": "control-monad-exception",
        "fct-signature": "EMT (Caught e l) m a -\u003e (CallTrace -\u003e e -\u003e EMT l m a) -\u003e EMT l m a",
        "fct-source": "src/Control-Monad-Exception-Base.html#catchWithSrcLoc",
        "fct-type": "function",
        "title": "catchWithSrcLoc"
      },
      "index": {
        "description": "Like catch but makes the call trace available",
        "hierarchy": "Control Monad Exception Base",
        "module": "Control.Monad.Exception.Base",
        "name": "catchWithSrcLoc",
        "normalized": "EMT(Caught a b)c d-\u003e(CallTrace-\u003ea-\u003eEMT b c d)-\u003eEMT b c d",
        "package": "control-monad-exception",
        "partial": "With Src Loc",
        "signature": "EMT(Caught e l)m a-\u003e(CallTrace-\u003ee-\u003eEMT l m a)-\u003eEMT l m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception-Base.html#v:finally",
      "description": {
        "fct-descr": "\u003cp\u003eSequence two computations discarding the result of the second one.\n   If the first computation rises an exception, the second computation is run\n   and then the exception is rethrown.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Base",
        "fct-package": "control-monad-exception",
        "fct-signature": "EMT l m a -\u003e EMT l m b -\u003e EMT l m a",
        "fct-source": "src/Control-Monad-Exception-Base.html#finally",
        "fct-type": "function",
        "title": "finally"
      },
      "index": {
        "description": "Sequence two computations discarding the result of the second one If the first computation rises an exception the second computation is run and then the exception is rethrown",
        "hierarchy": "Control Monad Exception Base",
        "module": "Control.Monad.Exception.Base",
        "name": "finally",
        "normalized": "EMT a b c-\u003eEMT a b d-\u003eEMT a b c",
        "package": "control-monad-exception",
        "partial": "",
        "signature": "EMT l m a-\u003eEMT l m b-\u003eEMT l m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception-Base.html#v:mapLeft",
      "description": {
        "fct-module": "Control.Monad.Exception.Base",
        "fct-package": "control-monad-exception",
        "fct-signature": "(a -\u003e b) -\u003e Either a r -\u003e Either b r",
        "fct-source": "src/Control-Monad-Exception-Base.html#mapLeft",
        "fct-type": "function",
        "title": "mapLeft"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Base",
        "module": "Control.Monad.Exception.Base",
        "name": "mapLeft",
        "normalized": "(a-\u003eb)-\u003eEither a c-\u003eEither b c",
        "package": "control-monad-exception",
        "partial": "Left",
        "signature": "(a-\u003eb)-\u003eEither a r-\u003eEither b r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception-Base.html#v:mplusDefault",
      "description": {
        "fct-descr": "\u003cp\u003eThis function may be used as a value for \u003ccode\u003e\u003ca\u003emplus\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Base",
        "fct-package": "control-monad-exception",
        "fct-signature": "EMT l m a -\u003e EMT l m a -\u003e EMT l m a",
        "fct-source": "src/Control-Monad-Exception-Base.html#mplusDefault",
        "fct-type": "function",
        "title": "mplusDefault"
      },
      "index": {
        "description": "This function may be used as value for mplus in MonadPlus",
        "hierarchy": "Control Monad Exception Base",
        "module": "Control.Monad.Exception.Base",
        "name": "mplusDefault",
        "normalized": "EMT a b c-\u003eEMT a b c-\u003eEMT a b c",
        "package": "control-monad-exception",
        "partial": "Default",
        "signature": "EMT l m a-\u003eEMT l m a-\u003eEMT l m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception-Base.html#v:onException",
      "description": {
        "fct-descr": "\u003cp\u003eLike finally, but performs the second computation only when the first one\n   rises an exception\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Base",
        "fct-package": "control-monad-exception",
        "fct-signature": "EMT l m a -\u003e EMT l m b -\u003e EMT l m a",
        "fct-source": "src/Control-Monad-Exception-Base.html#onException",
        "fct-type": "function",
        "title": "onException"
      },
      "index": {
        "description": "Like finally but performs the second computation only when the first one rises an exception",
        "hierarchy": "Control Monad Exception Base",
        "module": "Control.Monad.Exception.Base",
        "name": "onException",
        "normalized": "EMT a b c-\u003eEMT a b d-\u003eEMT a b c",
        "package": "control-monad-exception",
        "partial": "Exception",
        "signature": "EMT l m a-\u003eEMT l m b-\u003eEMT l m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception-Base.html#v:rethrow",
      "description": {
        "fct-descr": "\u003cp\u003eRethrow an exception keeping the call trace\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Base",
        "fct-package": "control-monad-exception",
        "fct-signature": "CallTrace -\u003e e -\u003e EMT l m a",
        "fct-source": "src/Control-Monad-Exception-Base.html#rethrow",
        "fct-type": "function",
        "title": "rethrow"
      },
      "index": {
        "description": "Rethrow an exception keeping the call trace",
        "hierarchy": "Control Monad Exception Base",
        "module": "Control.Monad.Exception.Base",
        "name": "rethrow",
        "normalized": "CallTrace-\u003ea-\u003eEMT b c d",
        "package": "control-monad-exception",
        "partial": "",
        "signature": "CallTrace-\u003ee-\u003eEMT l m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception-Base.html#v:runEM",
      "description": {
        "fct-descr": "\u003cp\u003eRun a safe computation\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Base",
        "fct-package": "control-monad-exception",
        "fct-signature": "EM NoExceptions a -\u003e a",
        "fct-source": "src/Control-Monad-Exception-Base.html#runEM",
        "fct-type": "function",
        "title": "runEM"
      },
      "index": {
        "description": "Run safe computation",
        "hierarchy": "Control Monad Exception Base",
        "module": "Control.Monad.Exception.Base",
        "name": "runEM",
        "normalized": "EM NoExceptions a-\u003ea",
        "package": "control-monad-exception",
        "partial": "EM",
        "signature": "EM NoExceptions a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception-Base.html#v:runEMParanoid",
      "description": {
        "fct-descr": "\u003cp\u003eRun a computation checking even unchecked (\u003ccode\u003eUncaughtExceptions\u003c/code\u003e) exceptions\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Base",
        "fct-package": "control-monad-exception",
        "fct-signature": "EM ParanoidMode a -\u003e a",
        "fct-source": "src/Control-Monad-Exception-Base.html#runEMParanoid",
        "fct-type": "function",
        "title": "runEMParanoid"
      },
      "index": {
        "description": "Run computation checking even unchecked UncaughtExceptions exceptions",
        "hierarchy": "Control Monad Exception Base",
        "module": "Control.Monad.Exception.Base",
        "name": "runEMParanoid",
        "normalized": "EM ParanoidMode a-\u003ea",
        "package": "control-monad-exception",
        "partial": "EMParanoid",
        "signature": "EM ParanoidMode a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception-Base.html#v:runEMT",
      "description": {
        "fct-descr": "\u003cp\u003eRun a safe computation\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Base",
        "fct-package": "control-monad-exception",
        "fct-signature": "EMT NoExceptions m a -\u003e m a",
        "fct-source": "src/Control-Monad-Exception-Base.html#runEMT",
        "fct-type": "function",
        "title": "runEMT"
      },
      "index": {
        "description": "Run safe computation",
        "hierarchy": "Control Monad Exception Base",
        "module": "Control.Monad.Exception.Base",
        "name": "runEMT",
        "normalized": "EMT NoExceptions a b-\u003ea b",
        "package": "control-monad-exception",
        "partial": "EMT",
        "signature": "EMT NoExceptions m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception-Base.html#v:runEMTParanoid",
      "description": {
        "fct-descr": "\u003cp\u003eRun a safe computation checking even unchecked (\u003ccode\u003e\u003ca\u003eUncaughtException\u003c/a\u003e\u003c/code\u003e) exceptions\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Base",
        "fct-package": "control-monad-exception",
        "fct-signature": "EMT ParanoidMode m a -\u003e m a",
        "fct-source": "src/Control-Monad-Exception-Base.html#runEMTParanoid",
        "fct-type": "function",
        "title": "runEMTParanoid"
      },
      "index": {
        "description": "Run safe computation checking even unchecked UncaughtException exceptions",
        "hierarchy": "Control Monad Exception Base",
        "module": "Control.Monad.Exception.Base",
        "name": "runEMTParanoid",
        "normalized": "EMT ParanoidMode a b-\u003ea b",
        "package": "control-monad-exception",
        "partial": "EMTParanoid",
        "signature": "EMT ParanoidMode m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception-Base.html#v:runEMT_gen",
      "description": {
        "fct-module": "Control.Monad.Exception.Base",
        "fct-package": "control-monad-exception",
        "fct-signature": "EMT l m a -\u003e m a",
        "fct-source": "src/Control-Monad-Exception-Base.html#runEMT_gen",
        "fct-type": "function",
        "title": "runEMT_gen"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Base",
        "module": "Control.Monad.Exception.Base",
        "name": "runEMT_gen",
        "normalized": "EMT a b c-\u003eb c",
        "package": "control-monad-exception",
        "partial": "EMT",
        "signature": "EMT l m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception-Base.html#v:showExceptionWithTrace",
      "description": {
        "fct-module": "Control.Monad.Exception.Base",
        "fct-package": "control-monad-exception",
        "fct-signature": "[String] -\u003e e -\u003e String",
        "fct-source": "src/Control-Monad-Exception-Base.html#showExceptionWithTrace",
        "fct-type": "function",
        "title": "showExceptionWithTrace"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Base",
        "module": "Control.Monad.Exception.Base",
        "name": "showExceptionWithTrace",
        "normalized": "[String]-\u003ea-\u003eString",
        "package": "control-monad-exception",
        "partial": "Exception With Trace",
        "signature": "[String]-\u003ee-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception-Base.html#v:throw",
      "description": {
        "fct-descr": "\u003cp\u003eThe throw primitive\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Base",
        "fct-package": "control-monad-exception",
        "fct-signature": "e -\u003e EMT l m a",
        "fct-source": "src/Control-Monad-Exception-Base.html#throw",
        "fct-type": "function",
        "title": "throw"
      },
      "index": {
        "description": "The throw primitive",
        "hierarchy": "Control Monad Exception Base",
        "module": "Control.Monad.Exception.Base",
        "name": "throw",
        "normalized": "a-\u003eEMT b c d",
        "package": "control-monad-exception",
        "partial": "",
        "signature": "e-\u003eEMT l m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception-Base.html#v:tryEM",
      "description": {
        "fct-descr": "\u003cp\u003eRun a computation explicitly handling exceptions\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Base",
        "fct-package": "control-monad-exception",
        "fct-signature": "EM AnyException a -\u003e Either SomeException a",
        "fct-source": "src/Control-Monad-Exception-Base.html#tryEM",
        "fct-type": "function",
        "title": "tryEM"
      },
      "index": {
        "description": "Run computation explicitly handling exceptions",
        "hierarchy": "Control Monad Exception Base",
        "module": "Control.Monad.Exception.Base",
        "name": "tryEM",
        "normalized": "EM AnyException a-\u003eEither SomeException a",
        "package": "control-monad-exception",
        "partial": "EM",
        "signature": "EM AnyException a-\u003eEither SomeException a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception-Base.html#v:tryEMT",
      "description": {
        "fct-descr": "\u003cp\u003eRun a computation explicitly handling exceptions\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Base",
        "fct-package": "control-monad-exception",
        "fct-signature": "EMT AnyException m a -\u003e m (Either SomeException a)",
        "fct-source": "src/Control-Monad-Exception-Base.html#tryEMT",
        "fct-type": "function",
        "title": "tryEMT"
      },
      "index": {
        "description": "Run computation explicitly handling exceptions",
        "hierarchy": "Control Monad Exception Base",
        "module": "Control.Monad.Exception.Base",
        "name": "tryEMT",
        "normalized": "EMT AnyException a b-\u003ea(Either SomeException b)",
        "package": "control-monad-exception",
        "partial": "EMT",
        "signature": "EMT AnyException m a-\u003em(Either SomeException a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception-Base.html#v:tryEMTWithLoc",
      "description": {
        "fct-module": "Control.Monad.Exception.Base",
        "fct-package": "control-monad-exception",
        "fct-signature": "EMT AnyException m a -\u003e m (Either (CallTrace, SomeException) a)",
        "fct-source": "src/Control-Monad-Exception-Base.html#tryEMTWithLoc",
        "fct-type": "function",
        "title": "tryEMTWithLoc"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Base",
        "module": "Control.Monad.Exception.Base",
        "name": "tryEMTWithLoc",
        "normalized": "EMT AnyException a b-\u003ea(Either(CallTrace,SomeException)b)",
        "package": "control-monad-exception",
        "partial": "EMTWith Loc",
        "signature": "EMT AnyException m a-\u003em(Either(CallTrace,SomeException)a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception-Base.html#v:tryEMWithLoc",
      "description": {
        "fct-module": "Control.Monad.Exception.Base",
        "fct-package": "control-monad-exception",
        "fct-signature": "EM AnyException a -\u003e Either (CallTrace, SomeException) a",
        "fct-source": "src/Control-Monad-Exception-Base.html#tryEMWithLoc",
        "fct-type": "function",
        "title": "tryEMWithLoc"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Base",
        "module": "Control.Monad.Exception.Base",
        "name": "tryEMWithLoc",
        "normalized": "EM AnyException a-\u003eEither(CallTrace,SomeException)a",
        "package": "control-monad-exception",
        "partial": "EMWith Loc",
        "signature": "EM AnyException a-\u003eEither(CallTrace,SomeException)a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception-Base.html#v:unEMT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Exception.Base",
        "fct-package": "control-monad-exception",
        "fct-signature": "m (Either (CallTrace, CheckedException l) a)",
        "fct-source": "src/Control-Monad-Exception-Base.html#EMT",
        "fct-type": "function",
        "title": "unEMT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Base",
        "module": "Control.Monad.Exception.Base",
        "name": "unEMT",
        "normalized": "a(Either(CallTrace,CheckedException b)c)",
        "package": "control-monad-exception",
        "partial": "EMT",
        "signature": "m(Either(CallTrace,CheckedException l)a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception-Base.html#v:wrapException",
      "description": {
        "fct-descr": "\u003cp\u003eCapture an exception e, wrap it, and rethrow.\n   Keeps the original monadic call trace.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Base",
        "fct-package": "control-monad-exception",
        "fct-signature": "(e -\u003e e') -\u003e EMT (Caught e l) m a -\u003e EMT l m a",
        "fct-source": "src/Control-Monad-Exception-Base.html#wrapException",
        "fct-type": "function",
        "title": "wrapException"
      },
      "index": {
        "description": "Capture an exception wrap it and rethrow Keeps the original monadic call trace",
        "hierarchy": "Control Monad Exception Base",
        "module": "Control.Monad.Exception.Base",
        "name": "wrapException",
        "normalized": "(a-\u003eb)-\u003eEMT(Caught a c)d e-\u003eEMT c d e",
        "package": "control-monad-exception",
        "partial": "Exception",
        "signature": "(e-\u003ee')-\u003eEMT(Caught e l)m a-\u003eEMT l m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception-Catch.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines the (not so useful anymore) \u003ccode\u003e\u003ca\u003eMonadCatch\u003c/a\u003e\u003c/code\u003e type class.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Exception.Catch",
        "fct-package": "control-monad-exception",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Exception-Catch.html",
        "fct-type": "module",
        "title": "Catch"
      },
      "index": {
        "description": "Defines the not so useful anymore MonadCatch type class",
        "hierarchy": "Control Monad Exception Catch",
        "module": "Control.Monad.Exception.Catch",
        "name": "Catch",
        "normalized": "",
        "package": "control-monad-exception",
        "partial": "Catch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception-Catch.html#t:Exception",
      "description": {
        "fct-descr": "\u003cp\u003eAny type that you wish to throw or catch as an exception must be an\ninstance of the \u003ccode\u003eException\u003c/code\u003e class. The simplest case is a new exception\ntype directly below the root:\n\u003c/p\u003e\u003cpre\u003e data MyException = ThisException | ThatException\n     deriving (Show, Typeable)\n\n instance Exception MyException\n\u003c/pre\u003e\u003cp\u003eThe default method definitions in the \u003ccode\u003eException\u003c/code\u003e class do what we need\nin this case. You can now throw and catch \u003ccode\u003eThisException\u003c/code\u003e and\n\u003ccode\u003eThatException\u003c/code\u003e as exceptions:\n\u003c/p\u003e\u003cpre\u003e\n*Main\u003e throw ThisException `catch` \\e -\u003e putStrLn (\"Caught \" ++ show (e :: MyException))\nCaught ThisException\n\u003c/pre\u003e\u003cp\u003eIn more complicated examples, you may wish to define a whole hierarchy\nof exceptions:\n\u003c/p\u003e\u003cpre\u003e ---------------------------------------------------------------------\n -- Make the root exception type for all the exceptions in a compiler\n\n data SomeCompilerException = forall e . Exception e =\u003e SomeCompilerException e\n     deriving Typeable\n\n instance Show SomeCompilerException where\n     show (SomeCompilerException e) = show e\n\n instance Exception SomeCompilerException\n\n compilerExceptionToException :: Exception e =\u003e e -\u003e SomeException\n compilerExceptionToException = toException . SomeCompilerException\n\n compilerExceptionFromException :: Exception e =\u003e SomeException -\u003e Maybe e\n compilerExceptionFromException x = do\n     SomeCompilerException a \u003c- fromException x\n     cast a\n\n ---------------------------------------------------------------------\n -- Make a subhierarchy for exceptions in the frontend of the compiler\n\n data SomeFrontendException = forall e . Exception e =\u003e SomeFrontendException e\n     deriving Typeable\n\n instance Show SomeFrontendException where\n     show (SomeFrontendException e) = show e\n\n instance Exception SomeFrontendException where\n     toException = compilerExceptionToException\n     fromException = compilerExceptionFromException\n\n frontendExceptionToException :: Exception e =\u003e e -\u003e SomeException\n frontendExceptionToException = toException . SomeFrontendException\n\n frontendExceptionFromException :: Exception e =\u003e SomeException -\u003e Maybe e\n frontendExceptionFromException x = do\n     SomeFrontendException a \u003c- fromException x\n     cast a\n\n ---------------------------------------------------------------------\n -- Make an exception type for a particular frontend compiler exception\n\n data MismatchedParentheses = MismatchedParentheses\n     deriving (Typeable, Show)\n\n instance Exception MismatchedParentheses where\n     toException   = frontendExceptionToException\n     fromException = frontendExceptionFromException\n\u003c/pre\u003e\u003cp\u003eWe can now catch a \u003ccode\u003eMismatchedParentheses\u003c/code\u003e exception as\n\u003ccode\u003eMismatchedParentheses\u003c/code\u003e, \u003ccode\u003eSomeFrontendException\u003c/code\u003e or\n\u003ccode\u003eSomeCompilerException\u003c/code\u003e, but not other types, e.g. \u003ccode\u003eIOException\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n*Main\u003e throw MismatchedParentheses \u003ccode\u003ecatch\u003c/code\u003e e -\u003e putStrLn (\"Caught \" ++ show (e :: MismatchedParentheses))\nCaught MismatchedParentheses\n*Main\u003e throw MismatchedParentheses \u003ccode\u003ecatch\u003c/code\u003e e -\u003e putStrLn (\"Caught \" ++ show (e :: SomeFrontendException))\nCaught MismatchedParentheses\n*Main\u003e throw MismatchedParentheses \u003ccode\u003ecatch\u003c/code\u003e e -\u003e putStrLn (\"Caught \" ++ show (e :: SomeCompilerException))\nCaught MismatchedParentheses\n*Main\u003e throw MismatchedParentheses \u003ccode\u003ecatch\u003c/code\u003e e -\u003e putStrLn (\"Caught \" ++ show (e :: IOException))\n*** Exception: MismatchedParentheses\n\u003c/pre\u003e",
        "fct-module": "Control.Monad.Exception.Catch",
        "fct-package": "control-monad-exception",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Exception"
      },
      "index": {
        "description": "Any type that you wish to throw or catch as an exception must be an instance of the Exception class The simplest case is new exception type directly below the root data MyException ThisException ThatException deriving Show Typeable instance Exception MyException The default method definitions in the Exception class do what we need in this case You can now throw and catch ThisException and ThatException as exceptions Main throw ThisException catch putStrLn Caught show MyException Caught ThisException In more complicated examples you may wish to define whole hierarchy of exceptions Make the root exception type for all the exceptions in compiler data SomeCompilerException forall Exception SomeCompilerException deriving Typeable instance Show SomeCompilerException where show SomeCompilerException show instance Exception SomeCompilerException compilerExceptionToException Exception SomeException compilerExceptionToException toException SomeCompilerException compilerExceptionFromException Exception SomeException Maybe compilerExceptionFromException do SomeCompilerException fromException cast Make subhierarchy for exceptions in the frontend of the compiler data SomeFrontendException forall Exception SomeFrontendException deriving Typeable instance Show SomeFrontendException where show SomeFrontendException show instance Exception SomeFrontendException where toException compilerExceptionToException fromException compilerExceptionFromException frontendExceptionToException Exception SomeException frontendExceptionToException toException SomeFrontendException frontendExceptionFromException Exception SomeException Maybe frontendExceptionFromException do SomeFrontendException fromException cast Make an exception type for particular frontend compiler exception data MismatchedParentheses MismatchedParentheses deriving Typeable Show instance Exception MismatchedParentheses where toException frontendExceptionToException fromException frontendExceptionFromException We can now catch MismatchedParentheses exception as MismatchedParentheses SomeFrontendException or SomeCompilerException but not other types e.g IOException Main throw MismatchedParentheses catch putStrLn Caught show MismatchedParentheses Caught MismatchedParentheses Main throw MismatchedParentheses catch putStrLn Caught show SomeFrontendException Caught MismatchedParentheses Main throw MismatchedParentheses catch putStrLn Caught show SomeCompilerException Caught MismatchedParentheses Main throw MismatchedParentheses catch putStrLn Caught show IOException Exception MismatchedParentheses",
        "hierarchy": "Control Monad Exception Catch",
        "module": "Control.Monad.Exception.Catch",
        "name": "Exception",
        "normalized": "",
        "package": "control-monad-exception",
        "partial": "Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception-Catch.html#t:MonadCatch",
      "description": {
        "fct-module": "Control.Monad.Exception.Catch",
        "fct-package": "control-monad-exception",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Exception-Catch.html#MonadCatch",
        "fct-type": "class",
        "title": "MonadCatch"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Catch",
        "module": "Control.Monad.Exception.Catch",
        "name": "MonadCatch",
        "normalized": "",
        "package": "control-monad-exception",
        "partial": "Monad Catch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception-Catch.html#t:SomeException",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003eSomeException\u003c/code\u003e type is the root of the exception type hierarchy.\nWhen an exception of type \u003ccode\u003ee\u003c/code\u003e is thrown, behind the scenes it is\nencapsulated in a \u003ccode\u003eSomeException\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Catch",
        "fct-package": "control-monad-exception",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "SomeException"
      },
      "index": {
        "description": "The SomeException type is the root of the exception type hierarchy When an exception of type is thrown behind the scenes it is encapsulated in SomeException",
        "hierarchy": "Control Monad Exception Catch",
        "module": "Control.Monad.Exception.Catch",
        "name": "SomeException",
        "normalized": "",
        "package": "control-monad-exception",
        "partial": "Some Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception-Catch.html#v:SomeException",
      "description": {
        "fct-module": "Control.Monad.Exception.Catch",
        "fct-package": "control-monad-exception",
        "fct-signature": "e -\u003e SomeException",
        "fct-type": "function",
        "title": "SomeException"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Catch",
        "module": "Control.Monad.Exception.Catch",
        "name": "SomeException",
        "normalized": "a-\u003eSomeException",
        "package": "control-monad-exception",
        "partial": "Some Exception",
        "signature": "e-\u003eSomeException"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception-Catch.html#v:catch",
      "description": {
        "fct-module": "Control.Monad.Exception.Catch",
        "fct-package": "control-monad-exception",
        "fct-signature": "m a -\u003e (e -\u003e m' a) -\u003e m' a",
        "fct-source": "src/Control-Monad-Exception-Catch.html#catch",
        "fct-type": "method",
        "title": "catch"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Catch",
        "module": "Control.Monad.Exception.Catch",
        "name": "catch",
        "normalized": "a b-\u003e(c-\u003ed b)-\u003ed b",
        "package": "control-monad-exception",
        "partial": "",
        "signature": "m a-\u003e(e-\u003em' a)-\u003em' a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception-Catch.html#v:catchWithSrcLoc",
      "description": {
        "fct-module": "Control.Monad.Exception.Catch",
        "fct-package": "control-monad-exception",
        "fct-signature": "m a -\u003e ([String] -\u003e e -\u003e m' a) -\u003e m' a",
        "fct-source": "src/Control-Monad-Exception-Catch.html#catchWithSrcLoc",
        "fct-type": "method",
        "title": "catchWithSrcLoc"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Catch",
        "module": "Control.Monad.Exception.Catch",
        "name": "catchWithSrcLoc",
        "normalized": "a b-\u003e([String]-\u003ec-\u003ed b)-\u003ed b",
        "package": "control-monad-exception",
        "partial": "With Src Loc",
        "signature": "m a-\u003e([String]-\u003ee-\u003em' a)-\u003em' a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception-Catch.html#v:fromException",
      "description": {
        "fct-module": "Control.Monad.Exception.Catch",
        "fct-package": "control-monad-exception",
        "fct-signature": "SomeException -\u003e Maybe e",
        "fct-type": "method",
        "title": "fromException"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Catch",
        "module": "Control.Monad.Exception.Catch",
        "name": "fromException",
        "normalized": "SomeException-\u003eMaybe a",
        "package": "control-monad-exception",
        "partial": "Exception",
        "signature": "SomeException-\u003eMaybe e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception-Catch.html#v:toException",
      "description": {
        "fct-module": "Control.Monad.Exception.Catch",
        "fct-package": "control-monad-exception",
        "fct-signature": "e -\u003e SomeException",
        "fct-type": "method",
        "title": "toException"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Catch",
        "module": "Control.Monad.Exception.Catch",
        "name": "toException",
        "normalized": "a-\u003eSomeException",
        "package": "control-monad-exception",
        "partial": "Exception",
        "signature": "e-\u003eSomeException"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception-Throws.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines the \u003ccode\u003eThrows\u003c/code\u003e binary relationship between types.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Exception.Throws",
        "fct-package": "control-monad-exception",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Exception-Throws.html",
        "fct-type": "module",
        "title": "Throws"
      },
      "index": {
        "description": "Defines the Throws binary relationship between types",
        "hierarchy": "Control Monad Exception Throws",
        "module": "Control.Monad.Exception.Throws",
        "name": "Throws",
        "normalized": "",
        "package": "control-monad-exception",
        "partial": "Throws",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception-Throws.html#t:Caught",
      "description": {
        "fct-descr": "\u003cp\u003eA type level witness of a exception handler.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Throws",
        "fct-package": "control-monad-exception",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Exception-Throws.html#Caught",
        "fct-type": "data",
        "title": "Caught"
      },
      "index": {
        "description": "type level witness of exception handler",
        "hierarchy": "Control Monad Exception Throws",
        "module": "Control.Monad.Exception.Throws",
        "name": "Caught",
        "normalized": "",
        "package": "control-monad-exception",
        "partial": "Caught",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception-Throws.html#t:CheckedException",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eCheckedException\u003c/code\u003e adds a phantom type parameter \u003ccode\u003el\u003c/code\u003e to \u003ccode\u003eSomeException\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Throws",
        "fct-package": "control-monad-exception",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Exception-Throws.html#CheckedException",
        "fct-type": "newtype",
        "title": "CheckedException"
      },
      "index": {
        "description": "CheckedException adds phantom type parameter to SomeException",
        "hierarchy": "Control Monad Exception Throws",
        "module": "Control.Monad.Exception.Throws",
        "name": "CheckedException",
        "normalized": "",
        "package": "control-monad-exception",
        "partial": "Checked Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception-Throws.html#t:Throws",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eThrows\u003c/code\u003e is a type level binary relationship\n    used to model a list of exceptions.\n\u003c/p\u003e\u003cp\u003eThere is only one case in which the user must\n    add further instances to \u003ccode\u003eThrows\u003c/code\u003e.\n    If your sets of exceptions are hierarchical then you need to\n   teach \u003ccode\u003e\u003ca\u003eThrows\u003c/a\u003e\u003c/code\u003e about the hierarchy.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003eSubtyping\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n     As there is no way to automatically infer\n     the subcases of an exception,  they have to be encoded\n     manually mirroring the hierarchy defined in the defined\n     \u003ccode\u003e\u003ca\u003eException\u003c/a\u003e\u003c/code\u003e instances.\n     For example,\n     the following instance encodes that \u003ccode\u003eMyFileNotFoundException\u003c/code\u003e is\n     a subexception of \u003ccode\u003eMyIOException\u003c/code\u003e :\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e instance Throws MyFileNotFoundException (Caught MyIOException l)\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eThrows\u003c/a\u003e\u003c/code\u003e is not a transitive relation and every ancestor relation\n      must be explicitly encoded.\n\u003c/p\u003e\u003cpre\u003e                                                            --   TopException\n                                                            --         |\n   instance Throws MidException   (Caught TopException l)   --         |\n                                                            --   MidException\n   instance Throws ChildException (Caught MidException l)   --         |\n   instance Throws ChildException (Caught TopException l)   --         |\n                                                            --  ChildException\n\u003c/pre\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003eSomeException\u003c/a\u003e\u003c/code\u003e is automatically an ancestor of every other exception type.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception.Throws",
        "fct-package": "control-monad-exception",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Exception-Throws.html#Throws",
        "fct-type": "class",
        "title": "Throws"
      },
      "index": {
        "description": "Throws is type level binary relationship used to model list of exceptions There is only one case in which the user must add further instances to Throws If your sets of exceptions are hierarchical then you need to teach Throws about the hierarchy Subtyping As there is no way to automatically infer the subcases of an exception they have to be encoded manually mirroring the hierarchy defined in the defined Exception instances For example the following instance encodes that MyFileNotFoundException is subexception of MyIOException instance Throws MyFileNotFoundException Caught MyIOException Throws is not transitive relation and every ancestor relation must be explicitly encoded TopException instance Throws MidException Caught TopException MidException instance Throws ChildException Caught MidException instance Throws ChildException Caught TopException ChildException Note that SomeException is automatically an ancestor of every other exception type",
        "hierarchy": "Control Monad Exception Throws",
        "module": "Control.Monad.Exception.Throws",
        "name": "Throws",
        "normalized": "",
        "package": "control-monad-exception",
        "partial": "Throws",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception-Throws.html#v:CheckedException",
      "description": {
        "fct-module": "Control.Monad.Exception.Throws",
        "fct-package": "control-monad-exception",
        "fct-signature": "CheckedException",
        "fct-source": "src/Control-Monad-Exception-Throws.html#CheckedException",
        "fct-type": "function",
        "title": "CheckedException"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Throws",
        "module": "Control.Monad.Exception.Throws",
        "name": "CheckedException",
        "normalized": "",
        "package": "control-monad-exception",
        "partial": "Checked Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception-Throws.html#v:checkedException",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Exception.Throws",
        "fct-package": "control-monad-exception",
        "fct-signature": "SomeException",
        "fct-source": "src/Control-Monad-Exception-Throws.html#CheckedException",
        "fct-type": "function",
        "title": "checkedException"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception Throws",
        "module": "Control.Monad.Exception.Throws",
        "name": "checkedException",
        "normalized": "",
        "package": "control-monad-exception",
        "partial": "Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception.html#",
      "description": {
        "fct-module": "Control.Monad.Exception",
        "fct-package": "control-monad-exception",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Exception.html",
        "fct-type": "module",
        "title": "Exception"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "Exception",
        "normalized": "",
        "package": "control-monad-exception",
        "partial": "Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception.html#t:AnyException",
      "description": {
        "fct-module": "Control.Monad.Exception",
        "fct-package": "control-monad-exception",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Exception-Base.html#AnyException",
        "fct-type": "data",
        "title": "AnyException"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "AnyException",
        "normalized": "",
        "package": "control-monad-exception",
        "partial": "Any Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception.html#t:CallTrace",
      "description": {
        "fct-module": "Control.Monad.Exception",
        "fct-package": "control-monad-exception",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Exception-Base.html#CallTrace",
        "fct-type": "type",
        "title": "CallTrace"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "CallTrace",
        "normalized": "",
        "package": "control-monad-exception",
        "partial": "Call Trace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception.html#t:Caught",
      "description": {
        "fct-descr": "\u003cp\u003eA type level witness of a exception handler.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception",
        "fct-package": "control-monad-exception",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Exception-Throws.html#Caught",
        "fct-type": "data",
        "title": "Caught"
      },
      "index": {
        "description": "type level witness of exception handler",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "Caught",
        "normalized": "",
        "package": "control-monad-exception",
        "partial": "Caught",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception.html#t:EM",
      "description": {
        "fct-descr": "\u003cp\u003eA monad of explicitly typed, checked exceptions\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception",
        "fct-package": "control-monad-exception",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Exception-Base.html#EM",
        "fct-type": "type",
        "title": "EM"
      },
      "index": {
        "description": "monad of explicitly typed checked exceptions",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "EM",
        "normalized": "",
        "package": "control-monad-exception",
        "partial": "EM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception.html#t:EMT",
      "description": {
        "fct-descr": "\u003cp\u003eA Monad Transformer for explicitly typed checked exceptions.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception",
        "fct-package": "control-monad-exception",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Exception-Base.html#EMT",
        "fct-type": "newtype",
        "title": "EMT"
      },
      "index": {
        "description": "Monad Transformer for explicitly typed checked exceptions",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "EMT",
        "normalized": "",
        "package": "control-monad-exception",
        "partial": "EMT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception.html#t:Exception",
      "description": {
        "fct-descr": "\u003cp\u003eAny type that you wish to throw or catch as an exception must be an\ninstance of the \u003ccode\u003eException\u003c/code\u003e class. The simplest case is a new exception\ntype directly below the root:\n\u003c/p\u003e\u003cpre\u003e data MyException = ThisException | ThatException\n     deriving (Show, Typeable)\n\n instance Exception MyException\n\u003c/pre\u003e\u003cp\u003eThe default method definitions in the \u003ccode\u003eException\u003c/code\u003e class do what we need\nin this case. You can now throw and catch \u003ccode\u003eThisException\u003c/code\u003e and\n\u003ccode\u003eThatException\u003c/code\u003e as exceptions:\n\u003c/p\u003e\u003cpre\u003e\n*Main\u003e throw ThisException `catch` \\e -\u003e putStrLn (\"Caught \" ++ show (e :: MyException))\nCaught ThisException\n\u003c/pre\u003e\u003cp\u003eIn more complicated examples, you may wish to define a whole hierarchy\nof exceptions:\n\u003c/p\u003e\u003cpre\u003e ---------------------------------------------------------------------\n -- Make the root exception type for all the exceptions in a compiler\n\n data SomeCompilerException = forall e . Exception e =\u003e SomeCompilerException e\n     deriving Typeable\n\n instance Show SomeCompilerException where\n     show (SomeCompilerException e) = show e\n\n instance Exception SomeCompilerException\n\n compilerExceptionToException :: Exception e =\u003e e -\u003e SomeException\n compilerExceptionToException = toException . SomeCompilerException\n\n compilerExceptionFromException :: Exception e =\u003e SomeException -\u003e Maybe e\n compilerExceptionFromException x = do\n     SomeCompilerException a \u003c- fromException x\n     cast a\n\n ---------------------------------------------------------------------\n -- Make a subhierarchy for exceptions in the frontend of the compiler\n\n data SomeFrontendException = forall e . Exception e =\u003e SomeFrontendException e\n     deriving Typeable\n\n instance Show SomeFrontendException where\n     show (SomeFrontendException e) = show e\n\n instance Exception SomeFrontendException where\n     toException = compilerExceptionToException\n     fromException = compilerExceptionFromException\n\n frontendExceptionToException :: Exception e =\u003e e -\u003e SomeException\n frontendExceptionToException = toException . SomeFrontendException\n\n frontendExceptionFromException :: Exception e =\u003e SomeException -\u003e Maybe e\n frontendExceptionFromException x = do\n     SomeFrontendException a \u003c- fromException x\n     cast a\n\n ---------------------------------------------------------------------\n -- Make an exception type for a particular frontend compiler exception\n\n data MismatchedParentheses = MismatchedParentheses\n     deriving (Typeable, Show)\n\n instance Exception MismatchedParentheses where\n     toException   = frontendExceptionToException\n     fromException = frontendExceptionFromException\n\u003c/pre\u003e\u003cp\u003eWe can now catch a \u003ccode\u003eMismatchedParentheses\u003c/code\u003e exception as\n\u003ccode\u003eMismatchedParentheses\u003c/code\u003e, \u003ccode\u003eSomeFrontendException\u003c/code\u003e or\n\u003ccode\u003eSomeCompilerException\u003c/code\u003e, but not other types, e.g. \u003ccode\u003eIOException\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n*Main\u003e throw MismatchedParentheses \u003ccode\u003ecatch\u003c/code\u003e e -\u003e putStrLn (\"Caught \" ++ show (e :: MismatchedParentheses))\nCaught MismatchedParentheses\n*Main\u003e throw MismatchedParentheses \u003ccode\u003ecatch\u003c/code\u003e e -\u003e putStrLn (\"Caught \" ++ show (e :: SomeFrontendException))\nCaught MismatchedParentheses\n*Main\u003e throw MismatchedParentheses \u003ccode\u003ecatch\u003c/code\u003e e -\u003e putStrLn (\"Caught \" ++ show (e :: SomeCompilerException))\nCaught MismatchedParentheses\n*Main\u003e throw MismatchedParentheses \u003ccode\u003ecatch\u003c/code\u003e e -\u003e putStrLn (\"Caught \" ++ show (e :: IOException))\n*** Exception: MismatchedParentheses\n\u003c/pre\u003e",
        "fct-module": "Control.Monad.Exception",
        "fct-package": "control-monad-exception",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Exception"
      },
      "index": {
        "description": "Any type that you wish to throw or catch as an exception must be an instance of the Exception class The simplest case is new exception type directly below the root data MyException ThisException ThatException deriving Show Typeable instance Exception MyException The default method definitions in the Exception class do what we need in this case You can now throw and catch ThisException and ThatException as exceptions Main throw ThisException catch putStrLn Caught show MyException Caught ThisException In more complicated examples you may wish to define whole hierarchy of exceptions Make the root exception type for all the exceptions in compiler data SomeCompilerException forall Exception SomeCompilerException deriving Typeable instance Show SomeCompilerException where show SomeCompilerException show instance Exception SomeCompilerException compilerExceptionToException Exception SomeException compilerExceptionToException toException SomeCompilerException compilerExceptionFromException Exception SomeException Maybe compilerExceptionFromException do SomeCompilerException fromException cast Make subhierarchy for exceptions in the frontend of the compiler data SomeFrontendException forall Exception SomeFrontendException deriving Typeable instance Show SomeFrontendException where show SomeFrontendException show instance Exception SomeFrontendException where toException compilerExceptionToException fromException compilerExceptionFromException frontendExceptionToException Exception SomeException frontendExceptionToException toException SomeFrontendException frontendExceptionFromException Exception SomeException Maybe frontendExceptionFromException do SomeFrontendException fromException cast Make an exception type for particular frontend compiler exception data MismatchedParentheses MismatchedParentheses deriving Typeable Show instance Exception MismatchedParentheses where toException frontendExceptionToException fromException frontendExceptionFromException We can now catch MismatchedParentheses exception as MismatchedParentheses SomeFrontendException or SomeCompilerException but not other types e.g IOException Main throw MismatchedParentheses catch putStrLn Caught show MismatchedParentheses Caught MismatchedParentheses Main throw MismatchedParentheses catch putStrLn Caught show SomeFrontendException Caught MismatchedParentheses Main throw MismatchedParentheses catch putStrLn Caught show SomeCompilerException Caught MismatchedParentheses Main throw MismatchedParentheses catch putStrLn Caught show IOException Exception MismatchedParentheses",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "Exception",
        "normalized": "",
        "package": "control-monad-exception",
        "partial": "Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception.html#t:FailException",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eFailException\u003c/code\u003e is thrown by Monad \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception",
        "fct-package": "control-monad-exception",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Exception-Base.html#FailException",
        "fct-type": "data",
        "title": "FailException"
      },
      "index": {
        "description": "FailException is thrown by Monad fail",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "FailException",
        "normalized": "",
        "package": "control-monad-exception",
        "partial": "Fail Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception.html#t:Failure",
      "description": {
        "fct-module": "Control.Monad.Exception",
        "fct-package": "control-monad-exception",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Failure"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "Failure",
        "normalized": "",
        "package": "control-monad-exception",
        "partial": "Failure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception.html#t:MonadLoc",
      "description": {
        "fct-descr": "\u003cp\u003eGenerating stack traces for failures\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception",
        "fct-package": "control-monad-exception",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "MonadLoc"
      },
      "index": {
        "description": "Generating stack traces for failures",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "MonadLoc",
        "normalized": "",
        "package": "control-monad-exception",
        "partial": "Monad Loc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception.html#t:MonadZeroException",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eMonadZeroException\u003c/code\u003e is thrown by MonadPlus \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception",
        "fct-package": "control-monad-exception",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Exception-Base.html#MonadZeroException",
        "fct-type": "data",
        "title": "MonadZeroException"
      },
      "index": {
        "description": "MonadZeroException is thrown by MonadPlus mzero",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "MonadZeroException",
        "normalized": "",
        "package": "control-monad-exception",
        "partial": "Monad Zero Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception.html#t:SomeException",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003eSomeException\u003c/code\u003e type is the root of the exception type hierarchy.\nWhen an exception of type \u003ccode\u003ee\u003c/code\u003e is thrown, behind the scenes it is\nencapsulated in a \u003ccode\u003eSomeException\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception",
        "fct-package": "control-monad-exception",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "SomeException"
      },
      "index": {
        "description": "The SomeException type is the root of the exception type hierarchy When an exception of type is thrown behind the scenes it is encapsulated in SomeException",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "SomeException",
        "normalized": "",
        "package": "control-monad-exception",
        "partial": "Some Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception.html#t:Throws",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eThrows\u003c/code\u003e is a type level binary relationship\n    used to model a list of exceptions.\n\u003c/p\u003e\u003cp\u003eThere is only one case in which the user must\n    add further instances to \u003ccode\u003eThrows\u003c/code\u003e.\n    If your sets of exceptions are hierarchical then you need to\n   teach \u003ccode\u003e\u003ca\u003eThrows\u003c/a\u003e\u003c/code\u003e about the hierarchy.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003eSubtyping\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n     As there is no way to automatically infer\n     the subcases of an exception,  they have to be encoded\n     manually mirroring the hierarchy defined in the defined\n     \u003ccode\u003e\u003ca\u003eException\u003c/a\u003e\u003c/code\u003e instances.\n     For example,\n     the following instance encodes that \u003ccode\u003eMyFileNotFoundException\u003c/code\u003e is\n     a subexception of \u003ccode\u003eMyIOException\u003c/code\u003e :\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e instance Throws MyFileNotFoundException (Caught MyIOException l)\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eThrows\u003c/a\u003e\u003c/code\u003e is not a transitive relation and every ancestor relation\n      must be explicitly encoded.\n\u003c/p\u003e\u003cpre\u003e                                                            --   TopException\n                                                            --         |\n   instance Throws MidException   (Caught TopException l)   --         |\n                                                            --   MidException\n   instance Throws ChildException (Caught MidException l)   --         |\n   instance Throws ChildException (Caught TopException l)   --         |\n                                                            --  ChildException\n\u003c/pre\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003eSomeException\u003c/a\u003e\u003c/code\u003e is automatically an ancestor of every other exception type.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception",
        "fct-package": "control-monad-exception",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Exception-Throws.html#Throws",
        "fct-type": "class",
        "title": "Throws"
      },
      "index": {
        "description": "Throws is type level binary relationship used to model list of exceptions There is only one case in which the user must add further instances to Throws If your sets of exceptions are hierarchical then you need to teach Throws about the hierarchy Subtyping As there is no way to automatically infer the subcases of an exception they have to be encoded manually mirroring the hierarchy defined in the defined Exception instances For example the following instance encodes that MyFileNotFoundException is subexception of MyIOException instance Throws MyFileNotFoundException Caught MyIOException Throws is not transitive relation and every ancestor relation must be explicitly encoded TopException instance Throws MidException Caught TopException MidException instance Throws ChildException Caught MidException instance Throws ChildException Caught TopException ChildException Note that SomeException is automatically an ancestor of every other exception type",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "Throws",
        "normalized": "",
        "package": "control-monad-exception",
        "partial": "Throws",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception.html#t:Typeable",
      "description": {
        "fct-descr": "\u003cp\u003eThe class \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e allows a concrete representation of a type to\n be calculated.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception",
        "fct-package": "control-monad-exception",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Typeable"
      },
      "index": {
        "description": "The class Typeable allows concrete representation of type to be calculated",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "Typeable",
        "normalized": "",
        "package": "control-monad-exception",
        "partial": "Typeable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception.html#t:UncaughtException",
      "description": {
        "fct-descr": "\u003cp\u003eUncaughtException models unchecked exceptions\n\u003c/p\u003e\u003cp\u003eIn order to declare an unchecked exception \u003ccode\u003eE\u003c/code\u003e,\n   all that is needed is to make \u003ccode\u003ee\u003c/code\u003e an instance of \u003ccode\u003e\u003ca\u003eUncaughtException\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e instance UncaughtException E\n\u003c/pre\u003e\u003cp\u003eNote that declaring an exception E as unchecked does not automatically\n   turn its children unchecked too. This is a shortcoming of the current encoding.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception",
        "fct-package": "control-monad-exception",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Exception-Base.html#UncaughtException",
        "fct-type": "class",
        "title": "UncaughtException"
      },
      "index": {
        "description": "UncaughtException models unchecked exceptions In order to declare an unchecked exception all that is needed is to make an instance of UncaughtException instance UncaughtException Note that declaring an exception as unchecked does not automatically turn its children unchecked too This is shortcoming of the current encoding",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "UncaughtException",
        "normalized": "",
        "package": "control-monad-exception",
        "partial": "Uncaught Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception.html#v:EMT",
      "description": {
        "fct-module": "Control.Monad.Exception",
        "fct-package": "control-monad-exception",
        "fct-signature": "EMT",
        "fct-source": "src/Control-Monad-Exception-Base.html#EMT",
        "fct-type": "function",
        "title": "EMT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "EMT",
        "normalized": "",
        "package": "control-monad-exception",
        "partial": "EMT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception.html#v:FailException",
      "description": {
        "fct-module": "Control.Monad.Exception",
        "fct-package": "control-monad-exception",
        "fct-signature": "FailException String",
        "fct-source": "src/Control-Monad-Exception-Base.html#FailException",
        "fct-type": "function",
        "title": "FailException"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "FailException",
        "normalized": "",
        "package": "control-monad-exception",
        "partial": "Fail Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception.html#v:MonadZeroException",
      "description": {
        "fct-module": "Control.Monad.Exception",
        "fct-package": "control-monad-exception",
        "fct-signature": "MonadZeroException",
        "fct-source": "src/Control-Monad-Exception-Base.html#MonadZeroException",
        "fct-type": "function",
        "title": "MonadZeroException"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "MonadZeroException",
        "normalized": "",
        "package": "control-monad-exception",
        "partial": "Monad Zero Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception.html#v:SomeException",
      "description": {
        "fct-module": "Control.Monad.Exception",
        "fct-package": "control-monad-exception",
        "fct-signature": "e -\u003e SomeException",
        "fct-type": "function",
        "title": "SomeException"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "SomeException",
        "normalized": "a-\u003eSomeException",
        "package": "control-monad-exception",
        "partial": "Some Exception",
        "signature": "e-\u003eSomeException"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception.html#v:bracket",
      "description": {
        "fct-module": "Control.Monad.Exception",
        "fct-package": "control-monad-exception",
        "fct-signature": "EMT l m a-\u003e (a -\u003e EMT l m b)-\u003e (a -\u003e EMT l m c)-\u003e EMT l m c",
        "fct-type": "function",
        "title": "bracket"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "bracket",
        "normalized": "EMT a b c-\u003e(c-\u003eEMT a b d)-\u003e(c-\u003eEMT a b e)-\u003eEMT a b e",
        "package": "control-monad-exception",
        "partial": "",
        "signature": "EMT l m a-\u003e(a-\u003eEMT l m b)-\u003e(a-\u003eEMT l m c)-\u003eEMT l m c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception.html#v:catch",
      "description": {
        "fct-descr": "\u003cp\u003eThe catch primitive\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception",
        "fct-package": "control-monad-exception",
        "fct-signature": "EMT (Caught e l) m a -\u003e (e -\u003e EMT l m a) -\u003e EMT l m a",
        "fct-source": "src/Control-Monad-Exception-Base.html#catch",
        "fct-type": "function",
        "title": "catch"
      },
      "index": {
        "description": "The catch primitive",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "catch",
        "normalized": "EMT(Caught a b)c d-\u003e(a-\u003eEMT b c d)-\u003eEMT b c d",
        "package": "control-monad-exception",
        "partial": "",
        "signature": "EMT(Caught e l)m a-\u003e(e-\u003eEMT l m a)-\u003eEMT l m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception.html#v:catchWithSrcLoc",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e but makes the call trace available\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception",
        "fct-package": "control-monad-exception",
        "fct-signature": "EMT (Caught e l) m a -\u003e (CallTrace -\u003e e -\u003e EMT l m a) -\u003e EMT l m a",
        "fct-source": "src/Control-Monad-Exception-Base.html#catchWithSrcLoc",
        "fct-type": "function",
        "title": "catchWithSrcLoc"
      },
      "index": {
        "description": "Like catch but makes the call trace available",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "catchWithSrcLoc",
        "normalized": "EMT(Caught a b)c d-\u003e(CallTrace-\u003ea-\u003eEMT b c d)-\u003eEMT b c d",
        "package": "control-monad-exception",
        "partial": "With Src Loc",
        "signature": "EMT(Caught e l)m a-\u003e(CallTrace-\u003ee-\u003eEMT l m a)-\u003eEMT l m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception.html#v:failure",
      "description": {
        "fct-module": "Control.Monad.Exception",
        "fct-package": "control-monad-exception",
        "fct-signature": "e -\u003e f v",
        "fct-type": "method",
        "title": "failure"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "failure",
        "normalized": "a-\u003eb c",
        "package": "control-monad-exception",
        "partial": "",
        "signature": "e-\u003ef v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception.html#v:finally",
      "description": {
        "fct-descr": "\u003cp\u003eSequence two computations discarding the result of the second one.\n   If the first computation rises an exception, the second computation is run\n   and then the exception is rethrown.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception",
        "fct-package": "control-monad-exception",
        "fct-signature": "EMT l m a -\u003e EMT l m b -\u003e EMT l m a",
        "fct-source": "src/Control-Monad-Exception-Base.html#finally",
        "fct-type": "function",
        "title": "finally"
      },
      "index": {
        "description": "Sequence two computations discarding the result of the second one If the first computation rises an exception the second computation is run and then the exception is rethrown",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "finally",
        "normalized": "EMT a b c-\u003eEMT a b d-\u003eEMT a b c",
        "package": "control-monad-exception",
        "partial": "",
        "signature": "EMT l m a-\u003eEMT l m b-\u003eEMT l m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception.html#v:fromException",
      "description": {
        "fct-module": "Control.Monad.Exception",
        "fct-package": "control-monad-exception",
        "fct-signature": "SomeException -\u003e Maybe e",
        "fct-type": "method",
        "title": "fromException"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "fromException",
        "normalized": "SomeException-\u003eMaybe a",
        "package": "control-monad-exception",
        "partial": "Exception",
        "signature": "SomeException-\u003eMaybe e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception.html#v:mplusDefault",
      "description": {
        "fct-descr": "\u003cp\u003eThis function may be used as a value for \u003ccode\u003e\u003ca\u003emplus\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception",
        "fct-package": "control-monad-exception",
        "fct-signature": "EMT l m a -\u003e EMT l m a -\u003e EMT l m a",
        "fct-source": "src/Control-Monad-Exception-Base.html#mplusDefault",
        "fct-type": "function",
        "title": "mplusDefault"
      },
      "index": {
        "description": "This function may be used as value for mplus in MonadPlus",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "mplusDefault",
        "normalized": "EMT a b c-\u003eEMT a b c-\u003eEMT a b c",
        "package": "control-monad-exception",
        "partial": "Default",
        "signature": "EMT l m a-\u003eEMT l m a-\u003eEMT l m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception.html#v:onException",
      "description": {
        "fct-descr": "\u003cp\u003eLike finally, but performs the second computation only when the first one\n   rises an exception\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception",
        "fct-package": "control-monad-exception",
        "fct-signature": "EMT l m a -\u003e EMT l m b -\u003e EMT l m a",
        "fct-source": "src/Control-Monad-Exception-Base.html#onException",
        "fct-type": "function",
        "title": "onException"
      },
      "index": {
        "description": "Like finally but performs the second computation only when the first one rises an exception",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "onException",
        "normalized": "EMT a b c-\u003eEMT a b d-\u003eEMT a b c",
        "package": "control-monad-exception",
        "partial": "Exception",
        "signature": "EMT l m a-\u003eEMT l m b-\u003eEMT l m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception.html#v:rethrow",
      "description": {
        "fct-descr": "\u003cp\u003eRethrow an exception keeping the call trace\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception",
        "fct-package": "control-monad-exception",
        "fct-signature": "CallTrace -\u003e e -\u003e EMT l m a",
        "fct-source": "src/Control-Monad-Exception-Base.html#rethrow",
        "fct-type": "function",
        "title": "rethrow"
      },
      "index": {
        "description": "Rethrow an exception keeping the call trace",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "rethrow",
        "normalized": "CallTrace-\u003ea-\u003eEMT b c d",
        "package": "control-monad-exception",
        "partial": "",
        "signature": "CallTrace-\u003ee-\u003eEMT l m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception.html#v:runEM",
      "description": {
        "fct-descr": "\u003cp\u003eRun a safe computation\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception",
        "fct-package": "control-monad-exception",
        "fct-signature": "EM NoExceptions a -\u003e a",
        "fct-source": "src/Control-Monad-Exception-Base.html#runEM",
        "fct-type": "function",
        "title": "runEM"
      },
      "index": {
        "description": "Run safe computation",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "runEM",
        "normalized": "EM NoExceptions a-\u003ea",
        "package": "control-monad-exception",
        "partial": "EM",
        "signature": "EM NoExceptions a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception.html#v:runEMParanoid",
      "description": {
        "fct-descr": "\u003cp\u003eRun a computation checking even unchecked (\u003ccode\u003eUncaughtExceptions\u003c/code\u003e) exceptions\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception",
        "fct-package": "control-monad-exception",
        "fct-signature": "EM ParanoidMode a -\u003e a",
        "fct-source": "src/Control-Monad-Exception-Base.html#runEMParanoid",
        "fct-type": "function",
        "title": "runEMParanoid"
      },
      "index": {
        "description": "Run computation checking even unchecked UncaughtExceptions exceptions",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "runEMParanoid",
        "normalized": "EM ParanoidMode a-\u003ea",
        "package": "control-monad-exception",
        "partial": "EMParanoid",
        "signature": "EM ParanoidMode a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception.html#v:runEMT",
      "description": {
        "fct-descr": "\u003cp\u003eRun a safe computation\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception",
        "fct-package": "control-monad-exception",
        "fct-signature": "EMT NoExceptions m a -\u003e m a",
        "fct-source": "src/Control-Monad-Exception-Base.html#runEMT",
        "fct-type": "function",
        "title": "runEMT"
      },
      "index": {
        "description": "Run safe computation",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "runEMT",
        "normalized": "EMT NoExceptions a b-\u003ea b",
        "package": "control-monad-exception",
        "partial": "EMT",
        "signature": "EMT NoExceptions m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception.html#v:runEMTParanoid",
      "description": {
        "fct-descr": "\u003cp\u003eRun a safe computation checking even unchecked (\u003ccode\u003e\u003ca\u003eUncaughtException\u003c/a\u003e\u003c/code\u003e) exceptions\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception",
        "fct-package": "control-monad-exception",
        "fct-signature": "EMT ParanoidMode m a -\u003e m a",
        "fct-source": "src/Control-Monad-Exception-Base.html#runEMTParanoid",
        "fct-type": "function",
        "title": "runEMTParanoid"
      },
      "index": {
        "description": "Run safe computation checking even unchecked UncaughtException exceptions",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "runEMTParanoid",
        "normalized": "EMT ParanoidMode a b-\u003ea b",
        "package": "control-monad-exception",
        "partial": "EMTParanoid",
        "signature": "EMT ParanoidMode m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception.html#v:showExceptionWithTrace",
      "description": {
        "fct-module": "Control.Monad.Exception",
        "fct-package": "control-monad-exception",
        "fct-signature": "[String] -\u003e e -\u003e String",
        "fct-source": "src/Control-Monad-Exception-Base.html#showExceptionWithTrace",
        "fct-type": "function",
        "title": "showExceptionWithTrace"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "showExceptionWithTrace",
        "normalized": "[String]-\u003ea-\u003eString",
        "package": "control-monad-exception",
        "partial": "Exception With Trace",
        "signature": "[String]-\u003ee-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception.html#v:throw",
      "description": {
        "fct-descr": "\u003cp\u003eThe throw primitive\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception",
        "fct-package": "control-monad-exception",
        "fct-signature": "e -\u003e EMT l m a",
        "fct-source": "src/Control-Monad-Exception-Base.html#throw",
        "fct-type": "function",
        "title": "throw"
      },
      "index": {
        "description": "The throw primitive",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "throw",
        "normalized": "a-\u003eEMT b c d",
        "package": "control-monad-exception",
        "partial": "",
        "signature": "e-\u003eEMT l m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception.html#v:toException",
      "description": {
        "fct-module": "Control.Monad.Exception",
        "fct-package": "control-monad-exception",
        "fct-signature": "e -\u003e SomeException",
        "fct-type": "method",
        "title": "toException"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "toException",
        "normalized": "a-\u003eSomeException",
        "package": "control-monad-exception",
        "partial": "Exception",
        "signature": "e-\u003eSomeException"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception.html#v:tryEM",
      "description": {
        "fct-descr": "\u003cp\u003eRun a computation explicitly handling exceptions\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception",
        "fct-package": "control-monad-exception",
        "fct-signature": "EM AnyException a -\u003e Either SomeException a",
        "fct-source": "src/Control-Monad-Exception-Base.html#tryEM",
        "fct-type": "function",
        "title": "tryEM"
      },
      "index": {
        "description": "Run computation explicitly handling exceptions",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "tryEM",
        "normalized": "EM AnyException a-\u003eEither SomeException a",
        "package": "control-monad-exception",
        "partial": "EM",
        "signature": "EM AnyException a-\u003eEither SomeException a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception.html#v:tryEMT",
      "description": {
        "fct-descr": "\u003cp\u003eRun a computation explicitly handling exceptions\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception",
        "fct-package": "control-monad-exception",
        "fct-signature": "EMT AnyException m a -\u003e m (Either SomeException a)",
        "fct-source": "src/Control-Monad-Exception-Base.html#tryEMT",
        "fct-type": "function",
        "title": "tryEMT"
      },
      "index": {
        "description": "Run computation explicitly handling exceptions",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "tryEMT",
        "normalized": "EMT AnyException a b-\u003ea(Either SomeException b)",
        "package": "control-monad-exception",
        "partial": "EMT",
        "signature": "EMT AnyException m a-\u003em(Either SomeException a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception.html#v:typeOf",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a value of type \u003ccode\u003ea\u003c/code\u003e and returns a concrete representation\n of that type.  The \u003cem\u003evalue\u003c/em\u003e of the argument should be ignored by\n any instance of \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e, so that it is safe to pass \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e as\n the argument.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception",
        "fct-package": "control-monad-exception",
        "fct-signature": "a -\u003e TypeRep",
        "fct-type": "method",
        "title": "typeOf"
      },
      "index": {
        "description": "Takes value of type and returns concrete representation of that type The value of the argument should be ignored by any instance of Typeable so that it is safe to pass undefined as the argument",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "typeOf",
        "normalized": "a-\u003eTypeRep",
        "package": "control-monad-exception",
        "partial": "Of",
        "signature": "a-\u003eTypeRep"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception.html#v:unEMT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Exception",
        "fct-package": "control-monad-exception",
        "fct-signature": "m (Either (CallTrace, CheckedException l) a)",
        "fct-source": "src/Control-Monad-Exception-Base.html#EMT",
        "fct-type": "function",
        "title": "unEMT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "unEMT",
        "normalized": "a(Either(CallTrace,CheckedException b)c)",
        "package": "control-monad-exception",
        "partial": "EMT",
        "signature": "m(Either(CallTrace,CheckedException l)a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception.html#v:withLoc",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewithLoc\u003c/a\u003e\u003c/code\u003e records the given source location in the failure trace\n   if the underlying monad supports recording location traces\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception",
        "fct-package": "control-monad-exception",
        "fct-signature": "String -\u003e m a -\u003e m a",
        "fct-type": "method",
        "title": "withLoc"
      },
      "index": {
        "description": "withLoc records the given source location in the failure trace if the underlying monad supports recording location traces",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "withLoc",
        "normalized": "String-\u003ea b-\u003ea b",
        "package": "control-monad-exception",
        "partial": "Loc",
        "signature": "String-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception.html#v:withLocTH",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewithLocTH\u003c/a\u003e\u003c/code\u003e is a convenient TH macro which expands to \u003ccode\u003e\u003ca\u003ewithLoc\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003csource location\u003e\u003c/code\u003e\n    It should only be used when the MonadLoc preprocessor is not available.\n    Usage:\n\u003c/p\u003e\u003cpre\u003e f x = $withLocTH $ do\n          $withLocTH $ something\n          x \u003c -$withLocTH $ something-else\n          ...\n\u003c/pre\u003e\u003cp\u003eNOTE: unfortunately type signatures are necessary when using withLocTH\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception",
        "fct-package": "control-monad-exception",
        "fct-signature": "Q Exp",
        "fct-type": "function",
        "title": "withLocTH"
      },
      "index": {
        "description": "withLocTH is convenient TH macro which expands to withLoc source location It should only be used when the MonadLoc preprocessor is not available Usage withLocTH do withLocTH something withLocTH something-else NOTE unfortunately type signatures are necessary when using withLocTH",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "withLocTH",
        "normalized": "",
        "package": "control-monad-exception",
        "partial": "Loc TH",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-exception/docs/Control-Monad-Exception.html#v:wrapException",
      "description": {
        "fct-descr": "\u003cp\u003eCapture an exception e, wrap it, and rethrow.\n   Keeps the original monadic call trace.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Exception",
        "fct-package": "control-monad-exception",
        "fct-signature": "(e -\u003e e') -\u003e EMT (Caught e l) m a -\u003e EMT l m a",
        "fct-source": "src/Control-Monad-Exception-Base.html#wrapException",
        "fct-type": "function",
        "title": "wrapException"
      },
      "index": {
        "description": "Capture an exception wrap it and rethrow Keeps the original monadic call trace",
        "hierarchy": "Control Monad Exception",
        "module": "Control.Monad.Exception",
        "name": "wrapException",
        "normalized": "(a-\u003eb)-\u003eEMT(Caught a c)d e-\u003eEMT c d e",
        "package": "control-monad-exception",
        "partial": "Exception",
        "signature": "(e-\u003ee')-\u003eEMT(Caught e l)m a-\u003eEMT l m a"
      }
    }
  }
]