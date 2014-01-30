[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-safe/docs/Pipes-Safe-Prelude.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple resource management functions\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Pipes.Safe.Prelude",
        "fct-package": "pipes-safe",
        "fct-signature": "module",
        "fct-source": "src/Pipes-Safe-Prelude.html",
        "fct-type": "module",
        "title": "Prelude"
      },
      "index": {
        "description": "Simple resource management functions",
        "hierarchy": "Pipes Safe Prelude",
        "module": "Pipes.Safe.Prelude",
        "name": "Prelude",
        "normalized": "",
        "package": "pipes-safe",
        "partial": "Prelude",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-safe/docs/Pipes-Safe-Prelude.html#v:readFile",
      "description": {
        "fct-descr": "\u003cp\u003eRead lines from a file, automatically opening and closing the file as\n    necessary\n\u003c/p\u003e",
        "fct-module": "Pipes.Safe.Prelude",
        "fct-package": "pipes-safe",
        "fct-signature": "FilePath -\u003e Producer' String m ()",
        "fct-source": "src/Pipes-Safe-Prelude.html#readFile",
        "fct-type": "function",
        "title": "readFile"
      },
      "index": {
        "description": "Read lines from file automatically opening and closing the file as necessary",
        "hierarchy": "Pipes Safe Prelude",
        "module": "Pipes.Safe.Prelude",
        "name": "readFile",
        "normalized": "FilePath-\u003eProducer' String a()",
        "package": "pipes-safe",
        "partial": "File",
        "signature": "FilePath-\u003eProducer' String m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-safe/docs/Pipes-Safe-Prelude.html#v:withFile",
      "description": {
        "fct-descr": "\u003cp\u003eAcquire a \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e within \u003ccode\u003e\u003ca\u003eMonadSafe\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Pipes.Safe.Prelude",
        "fct-package": "pipes-safe",
        "fct-signature": "FilePath -\u003e IOMode -\u003e (Handle -\u003e m r) -\u003e m r",
        "fct-source": "src/Pipes-Safe-Prelude.html#withFile",
        "fct-type": "function",
        "title": "withFile"
      },
      "index": {
        "description": "Acquire Handle within MonadSafe",
        "hierarchy": "Pipes Safe Prelude",
        "module": "Pipes.Safe.Prelude",
        "name": "withFile",
        "normalized": "FilePath-\u003eIOMode-\u003e(Handle-\u003ea b)-\u003ea b",
        "package": "pipes-safe",
        "partial": "File",
        "signature": "FilePath-\u003eIOMode-\u003e(Handle-\u003em r)-\u003em r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-safe/docs/Pipes-Safe-Prelude.html#v:writeFile",
      "description": {
        "fct-descr": "\u003cp\u003eWrite lines to a file, automatically opening and closing the file as\n    necessary\n\u003c/p\u003e",
        "fct-module": "Pipes.Safe.Prelude",
        "fct-package": "pipes-safe",
        "fct-signature": "FilePath -\u003e Consumer' String m r",
        "fct-source": "src/Pipes-Safe-Prelude.html#writeFile",
        "fct-type": "function",
        "title": "writeFile"
      },
      "index": {
        "description": "Write lines to file automatically opening and closing the file as necessary",
        "hierarchy": "Pipes Safe Prelude",
        "module": "Pipes.Safe.Prelude",
        "name": "writeFile",
        "normalized": "FilePath-\u003eConsumer' String a b",
        "package": "pipes-safe",
        "partial": "File",
        "signature": "FilePath-\u003eConsumer' String m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-safe/docs/Pipes-Safe.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides an orphan \u003ccode\u003e\u003ca\u003eMonadCatch\u003c/a\u003e\u003c/code\u003e instance for \u003ccode\u003e\u003ca\u003eProxy\u003c/a\u003e\u003c/code\u003e of the\n    form:\n\u003c/p\u003e\u003cpre\u003e instance (MonadCatch m, MonadIO m) =\u003e MonadCatch (Proxy a' a b' b m) where\n\u003c/pre\u003e\u003cp\u003e... so you can throw and catch exceptions within pipes using all\n    \u003ccode\u003e\u003ca\u003eMonadCatch\u003c/a\u003e\u003c/code\u003e operations.\n\u003c/p\u003e\u003cp\u003eThis module also provides generalized versions of some \u003ccode\u003e\u003ca\u003eMonadCatch\u003c/a\u003e\u003c/code\u003e\n    operations so that you can also protect against premature termination of\n    connected components.  For example, if you protect a \u003ccode\u003e\u003ca\u003ereadFile\u003c/a\u003e\u003c/code\u003e computation\n    using \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e from this module:\n\u003c/p\u003e\u003cpre\u003e -- readFile.hs\n import Pipes\n import qualified Pipes.Prelude as P\n import Pipes.Safe\n import qualified System.IO as IO\n import Prelude hiding (readFile)\n\n readFile :: FilePath -\u003e Producer' String (SafeT IO) ()\n readFile file = bracket\n     (do h \u003c- IO.openFile file IO.ReadMode\n         putStrLn $ \"{\" ++ file ++ \" open}\"\n         return h )\n     (\\h -\u003e do\n         IO.hClose h\n         putStrLn $ \"{\" ++ file ++ \" closed}\" )\n     P.fromHandle\n\u003c/pre\u003e\u003cp\u003e... then this generalized \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e will guard against both exceptions and\n    premature termination of other pipes:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erunSafeT $ runEffect $ readFile \"readFile.hs\" \u003e-\u003e P.take 4 \u003e-\u003e P.stdoutLn\n\u003c/code\u003e\u003c/strong\u003e{readFile.hs open}\n-- readFile.hs\nimport Pipes\nimport qualified Pipes.Prelude as P\nimport Pipes.Safe\n{readFile.hs closed}\n\u003c/pre\u003e\u003cp\u003eNote that the \u003ccode\u003e\u003ca\u003eMonadCatch\u003c/a\u003e\u003c/code\u003e instance for \u003ccode\u003e\u003ca\u003eProxy\u003c/a\u003e\u003c/code\u003e provides weaker versions of\n    \u003ccode\u003e\u003ca\u003emask\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003euninterruptibleMask\u003c/a\u003e\u003c/code\u003e that do not completely prevent asynchronous\n    exceptions.  Instead, they provide a weaker guarantee that asynchronous\n    exceptions will only occur during \u003ccode\u003e\u003ca\u003eawait\u003c/a\u003e\u003c/code\u003es or \u003ccode\u003e\u003ca\u003eyield\u003c/a\u003e\u003c/code\u003es and\n    nowhere else.  For example, if you write:\n\u003c/p\u003e\u003cpre\u003e mask_ $ do\n     x \u003c- await\n     lift $ print x\n     lift $ print x\n\u003c/pre\u003e\u003cp\u003e... then you may receive an asynchronous exception during the \u003ccode\u003e\u003ca\u003eawait\u003c/a\u003e\u003c/code\u003e,\n    but you will not receive an asynchronous exception during or in between the\n    two \u003ccode\u003e\u003ca\u003eprint\u003c/a\u003e\u003c/code\u003e statements.  This weaker guarantee suffices to provide\n    asynchronous exception safety.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Pipes.Safe",
        "fct-package": "pipes-safe",
        "fct-signature": "module",
        "fct-source": "src/Pipes-Safe.html",
        "fct-type": "module",
        "title": "Safe"
      },
      "index": {
        "description": "This module provides an orphan MonadCatch instance for Proxy of the form instance MonadCatch MonadIO MonadCatch Proxy where so you can throw and catch exceptions within pipes using all MonadCatch operations This module also provides generalized versions of some MonadCatch operations so that you can also protect against premature termination of connected components For example if you protect readFile computation using bracket from this module readFile.hs import Pipes import qualified Pipes.Prelude as import Pipes.Safe import qualified System.IO as IO import Prelude hiding readFile readFile FilePath Producer String SafeT IO readFile file bracket do IO.openFile file IO.ReadMode putStrLn file open return do IO.hClose putStrLn file closed P.fromHandle then this generalized bracket will guard against both exceptions and premature termination of other pipes runSafeT runEffect readFile readFile.hs P.take P.stdoutLn readFile.hs open readFile.hs import Pipes import qualified Pipes.Prelude as import Pipes.Safe readFile.hs closed Note that the MonadCatch instance for Proxy provides weaker versions of mask and uninterruptibleMask that do not completely prevent asynchronous exceptions Instead they provide weaker guarantee that asynchronous exceptions will only occur during await or yield and nowhere else For example if you write mask do await lift print lift print then you may receive an asynchronous exception during the await but you will not receive an asynchronous exception during or in between the two print statements This weaker guarantee suffices to provide asynchronous exception safety",
        "hierarchy": "Pipes Safe",
        "module": "Pipes.Safe",
        "name": "Safe",
        "normalized": "",
        "package": "pipes-safe",
        "partial": "Safe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-safe/docs/Pipes-Safe.html#t:MonadSafe",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMonadSafe\u003c/a\u003e\u003c/code\u003e lets you \u003ccode\u003e\u003ca\u003eregister\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erelease\u003c/a\u003e\u003c/code\u003e finalizers that execute in a\n    \u003ccode\u003e\u003ca\u003eBase\u003c/a\u003e\u003c/code\u003e monad\n\u003c/p\u003e",
        "fct-module": "Pipes.Safe",
        "fct-package": "pipes-safe",
        "fct-signature": "class",
        "fct-source": "src/Pipes-Safe.html#MonadSafe",
        "fct-type": "class",
        "title": "MonadSafe"
      },
      "index": {
        "description": "MonadSafe lets you register and release finalizers that execute in Base monad",
        "hierarchy": "Pipes Safe",
        "module": "Pipes.Safe",
        "name": "MonadSafe",
        "normalized": "",
        "package": "pipes-safe",
        "partial": "Monad Safe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-safe/docs/Pipes-Safe.html#t:ReleaseKey",
      "description": {
        "fct-descr": "\u003cp\u003eToken used to \u003ccode\u003e\u003ca\u003erelease\u003c/a\u003e\u003c/code\u003e a previously \u003ccode\u003e\u003ca\u003eregister\u003c/a\u003e\u003c/code\u003eed finalizer\n\u003c/p\u003e",
        "fct-module": "Pipes.Safe",
        "fct-package": "pipes-safe",
        "fct-signature": "data",
        "fct-source": "src/Pipes-Safe.html#ReleaseKey",
        "fct-type": "data",
        "title": "ReleaseKey"
      },
      "index": {
        "description": "Token used to release previously register ed finalizer",
        "hierarchy": "Pipes Safe",
        "module": "Pipes.Safe",
        "name": "ReleaseKey",
        "normalized": "",
        "package": "pipes-safe",
        "partial": "Release Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-safe/docs/Pipes-Safe.html#t:SafeT",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSafeT\u003c/a\u003e\u003c/code\u003e is a monad transformer that extends the base monad with the ability\n    to \u003ccode\u003e\u003ca\u003eregister\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erelease\u003c/a\u003e\u003c/code\u003e finalizers.\n\u003c/p\u003e\u003cp\u003eAll unreleased finalizers are called at the end of the \u003ccode\u003e\u003ca\u003eSafeT\u003c/a\u003e\u003c/code\u003e block, even\n    in the event of exceptions.\n\u003c/p\u003e",
        "fct-module": "Pipes.Safe",
        "fct-package": "pipes-safe",
        "fct-signature": "data",
        "fct-source": "src/Pipes-Safe.html#SafeT",
        "fct-type": "data",
        "title": "SafeT"
      },
      "index": {
        "description": "SafeT is monad transformer that extends the base monad with the ability to register and release finalizers All unreleased finalizers are called at the end of the SafeT block even in the event of exceptions",
        "hierarchy": "Pipes Safe",
        "module": "Pipes.Safe",
        "name": "SafeT",
        "normalized": "",
        "package": "pipes-safe",
        "partial": "Safe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-safe/docs/Pipes-Safe.html#v:bracket",
      "description": {
        "fct-descr": "\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003eControl.Monad.Catch\u003c/code\u003e, except this also\n    protects against premature termination\n\u003c/p\u003e",
        "fct-module": "Pipes.Safe",
        "fct-package": "pipes-safe",
        "fct-signature": "Base m a -\u003e (a -\u003e Base m b) -\u003e (a -\u003e m c) -\u003e m c",
        "fct-source": "src/Pipes-Safe.html#bracket",
        "fct-type": "function",
        "title": "bracket"
      },
      "index": {
        "description": "Analogous to bracket from Control.Monad.Catch except this also protects against premature termination",
        "hierarchy": "Pipes Safe",
        "module": "Pipes.Safe",
        "name": "bracket",
        "normalized": "Base a b-\u003e(b-\u003eBase a c)-\u003e(b-\u003ea d)-\u003ea d",
        "package": "pipes-safe",
        "partial": "",
        "signature": "Base m a-\u003e(a-\u003eBase m b)-\u003e(a-\u003em c)-\u003em c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-safe/docs/Pipes-Safe.html#v:bracketOnError",
      "description": {
        "fct-descr": "\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ebracketOnError\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003eControl.Monad.Catch\u003c/code\u003e, except this also\n    protects against premature termination\n\u003c/p\u003e",
        "fct-module": "Pipes.Safe",
        "fct-package": "pipes-safe",
        "fct-signature": "Base m a -\u003e (a -\u003e Base m b) -\u003e (a -\u003e m c) -\u003e m c",
        "fct-source": "src/Pipes-Safe.html#bracketOnError",
        "fct-type": "function",
        "title": "bracketOnError"
      },
      "index": {
        "description": "Analogous to bracketOnError from Control.Monad.Catch except this also protects against premature termination",
        "hierarchy": "Pipes Safe",
        "module": "Pipes.Safe",
        "name": "bracketOnError",
        "normalized": "Base a b-\u003e(b-\u003eBase a c)-\u003e(b-\u003ea d)-\u003ea d",
        "package": "pipes-safe",
        "partial": "On Error",
        "signature": "Base m a-\u003e(a-\u003eBase m b)-\u003e(a-\u003em c)-\u003em c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-safe/docs/Pipes-Safe.html#v:bracket_",
      "description": {
        "fct-descr": "\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ebracket_\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003eControl.Monad.Catch\u003c/code\u003e, except this also\n    protects against premature termination\n\u003c/p\u003e",
        "fct-module": "Pipes.Safe",
        "fct-package": "pipes-safe",
        "fct-signature": "Base m a -\u003e Base m b -\u003e m c -\u003e m c",
        "fct-source": "src/Pipes-Safe.html#bracket_",
        "fct-type": "function",
        "title": "bracket_"
      },
      "index": {
        "description": "Analogous to bracket from Control.Monad.Catch except this also protects against premature termination",
        "hierarchy": "Pipes Safe",
        "module": "Pipes.Safe",
        "name": "bracket_",
        "normalized": "Base a b-\u003eBase a c-\u003ea d-\u003ea d",
        "package": "pipes-safe",
        "partial": "",
        "signature": "Base m a-\u003eBase m b-\u003em c-\u003em c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-safe/docs/Pipes-Safe.html#v:finally",
      "description": {
        "fct-descr": "\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003efinally\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003eControl.Monad.Catch\u003c/code\u003e, except this also\n    protects against premature termination\n\u003c/p\u003e",
        "fct-module": "Pipes.Safe",
        "fct-package": "pipes-safe",
        "fct-signature": "m a -\u003e Base m b -\u003e m a",
        "fct-source": "src/Pipes-Safe.html#finally",
        "fct-type": "function",
        "title": "finally"
      },
      "index": {
        "description": "Analogous to finally from Control.Monad.Catch except this also protects against premature termination",
        "hierarchy": "Pipes Safe",
        "module": "Pipes.Safe",
        "name": "finally",
        "normalized": "a b-\u003eBase a c-\u003ea b",
        "package": "pipes-safe",
        "partial": "",
        "signature": "m a-\u003eBase m b-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-safe/docs/Pipes-Safe.html#v:liftBase",
      "description": {
        "fct-descr": "\u003cp\u003eLift an action from the \u003ccode\u003e\u003ca\u003eBase\u003c/a\u003e\u003c/code\u003e monad\n\u003c/p\u003e",
        "fct-module": "Pipes.Safe",
        "fct-package": "pipes-safe",
        "fct-signature": "Base m r -\u003e m r",
        "fct-source": "src/Pipes-Safe.html#liftBase",
        "fct-type": "method",
        "title": "liftBase"
      },
      "index": {
        "description": "Lift an action from the Base monad",
        "hierarchy": "Pipes Safe",
        "module": "Pipes.Safe",
        "name": "liftBase",
        "normalized": "Base a b-\u003ea b",
        "package": "pipes-safe",
        "partial": "Base",
        "signature": "Base m r-\u003em r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-safe/docs/Pipes-Safe.html#v:onException",
      "description": {
        "fct-descr": "\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003eonException\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003eControl.Monad.Catch\u003c/code\u003e, except this also\n    protects against premature termination\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e(`onException` io)\u003c/code\u003e is a monad morphism.\n\u003c/p\u003e",
        "fct-module": "Pipes.Safe",
        "fct-package": "pipes-safe",
        "fct-signature": "m a -\u003e Base m b -\u003e m a",
        "fct-source": "src/Pipes-Safe.html#onException",
        "fct-type": "function",
        "title": "onException"
      },
      "index": {
        "description": "Analogous to onException from Control.Monad.Catch except this also protects against premature termination onException io is monad morphism",
        "hierarchy": "Pipes Safe",
        "module": "Pipes.Safe",
        "name": "onException",
        "normalized": "a b-\u003eBase a c-\u003ea b",
        "package": "pipes-safe",
        "partial": "Exception",
        "signature": "m a-\u003eBase m b-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-safe/docs/Pipes-Safe.html#v:register",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eregister\u003c/a\u003e\u003c/code\u003e a finalizer, ensuring that the finalizer gets called if the\n        finalizer is not \u003ccode\u003e\u003ca\u003erelease\u003c/a\u003e\u003c/code\u003ed before the end of the surrounding \u003ccode\u003e\u003ca\u003eSafeT\u003c/a\u003e\u003c/code\u003e\n        block.\n\u003c/p\u003e",
        "fct-module": "Pipes.Safe",
        "fct-package": "pipes-safe",
        "fct-signature": "Base m () -\u003e m ReleaseKey",
        "fct-source": "src/Pipes-Safe.html#register",
        "fct-type": "method",
        "title": "register"
      },
      "index": {
        "description": "register finalizer ensuring that the finalizer gets called if the finalizer is not release before the end of the surrounding SafeT block",
        "hierarchy": "Pipes Safe",
        "module": "Pipes.Safe",
        "name": "register",
        "normalized": "Base a()-\u003ea ReleaseKey",
        "package": "pipes-safe",
        "partial": "",
        "signature": "Base m()-\u003em ReleaseKey"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-safe/docs/Pipes-Safe.html#v:release",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erelease\u003c/a\u003e\u003c/code\u003e a registered finalizer\n\u003c/p\u003e\u003cp\u003eYou can safely call \u003ccode\u003e\u003ca\u003erelease\u003c/a\u003e\u003c/code\u003e more than once on the same \u003ccode\u003e\u003ca\u003eReleaseKey\u003c/a\u003e\u003c/code\u003e.\n        Every \u003ccode\u003e\u003ca\u003erelease\u003c/a\u003e\u003c/code\u003e after the first one does nothing.\n\u003c/p\u003e",
        "fct-module": "Pipes.Safe",
        "fct-package": "pipes-safe",
        "fct-signature": "ReleaseKey -\u003e m ()",
        "fct-source": "src/Pipes-Safe.html#release",
        "fct-type": "method",
        "title": "release"
      },
      "index": {
        "description": "release registered finalizer You can safely call release more than once on the same ReleaseKey Every release after the first one does nothing",
        "hierarchy": "Pipes Safe",
        "module": "Pipes.Safe",
        "name": "release",
        "normalized": "ReleaseKey-\u003ea()",
        "package": "pipes-safe",
        "partial": "",
        "signature": "ReleaseKey-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-safe/docs/Pipes-Safe.html#v:runSafeP",
      "description": {
        "fct-descr": "\u003cp\u003eRun \u003ccode\u003e\u003ca\u003eSafeT\u003c/a\u003e\u003c/code\u003e in the base monad, executing all unreleased finalizers at the\n    end of the computation\n\u003c/p\u003e\u003cp\u003eUse \u003ccode\u003e\u003ca\u003erunSafeP\u003c/a\u003e\u003c/code\u003e to safely flush all unreleased finalizers and ensure prompt\n    finalization without exiting the \u003ccode\u003e\u003ca\u003eProxy\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Pipes.Safe",
        "fct-package": "pipes-safe",
        "fct-signature": "Effect (SafeT m) r -\u003e Effect' m r",
        "fct-source": "src/Pipes-Safe.html#runSafeP",
        "fct-type": "function",
        "title": "runSafeP"
      },
      "index": {
        "description": "Run SafeT in the base monad executing all unreleased finalizers at the end of the computation Use runSafeP to safely flush all unreleased finalizers and ensure prompt finalization without exiting the Proxy monad",
        "hierarchy": "Pipes Safe",
        "module": "Pipes.Safe",
        "name": "runSafeP",
        "normalized": "Effect(SafeT a)b-\u003eEffect' a b",
        "package": "pipes-safe",
        "partial": "Safe",
        "signature": "Effect(SafeT m)r-\u003eEffect' m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-safe/docs/Pipes-Safe.html#v:runSafeT",
      "description": {
        "fct-descr": "\u003cp\u003eRun the \u003ccode\u003e\u003ca\u003eSafeT\u003c/a\u003e\u003c/code\u003e monad transformer, executing all unreleased finalizers at\n    the end of the computation\n\u003c/p\u003e",
        "fct-module": "Pipes.Safe",
        "fct-package": "pipes-safe",
        "fct-signature": "SafeT m r -\u003e m r",
        "fct-source": "src/Pipes-Safe.html#runSafeT",
        "fct-type": "function",
        "title": "runSafeT"
      },
      "index": {
        "description": "Run the SafeT monad transformer executing all unreleased finalizers at the end of the computation",
        "hierarchy": "Pipes Safe",
        "module": "Pipes.Safe",
        "name": "runSafeT",
        "normalized": "SafeT a b-\u003ea b",
        "package": "pipes-safe",
        "partial": "Safe",
        "signature": "SafeT m r-\u003em r"
      }
    }
  }
]