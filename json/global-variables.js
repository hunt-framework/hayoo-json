[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/global-variables/docs/Data-Global.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eGlobal\u003c/a\u003e\u003c/code\u003e provides a global namespace of \u003ccode\u003eIORef\u003c/code\u003es, \u003ccode\u003eMVar\u003c/code\u003es and \u003ccode\u003eTVar\u003c/code\u003es. This namespace\n may be accessed in pure code. Yet reading and writing to those \u003ccode\u003eIORef\u003c/code\u003es, \u003ccode\u003eMVar\u003c/code\u003es and \u003ccode\u003eTVar\u003c/code\u003es\n happens still in their respective monads.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eGlobal\u003c/a\u003e\u003c/code\u003e is designed to meet the following use cases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Simplify the declaration of top-level mutable variables, by avoiding any pragmas as well\n     as \u003ccode\u003eunsafePerformIO\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Avoid having to pass references explicitly throughout the program in order to let\n     distant parts communicate.\n\u003c/li\u003e\u003cli\u003e Enable a communication by convention scheme, where e.g. different libraries may\n     communicate without code dependencies.\n\u003c/li\u003e\u003cli\u003e Simplify the \u003ca\u003econfiguration problem\u003c/a\u003e - at least for code in the IO monad.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNote, that this library does not encourage sloppy software design by re-introducing all bad\n  effects of global variables. Nevertheless, sometimes global variables are a suitable\n  solution to a problem. In that case \u003ccode\u003e\u003ca\u003eGlobal\u003c/a\u003e\u003c/code\u003e simplifies and extends their handling\n  significantly.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Global",
        "fct-package": "global-variables",
        "fct-signature": "module",
        "fct-source": "src/Data-Global.html",
        "fct-type": "module",
        "title": "Global"
      },
      "index": {
        "description": "Global provides global namespace of IORef MVar and TVar This namespace may be accessed in pure code Yet reading and writing to those IORef MVar and TVar happens still in their respective monads Global is designed to meet the following use cases Simplify the declaration of top-level mutable variables by avoiding any pragmas as well as unsafePerformIO Avoid having to pass references explicitly throughout the program in order to let distant parts communicate Enable communication by convention scheme where e.g different libraries may communicate without code dependencies Simplify the configuration problem at least for code in the IO monad Note that this library does not encourage sloppy software design by re-introducing all bad effects of global variables Nevertheless sometimes global variables are suitable solution to problem In that case Global simplifies and extends their handling significantly",
        "hierarchy": "Data Global",
        "module": "Data.Global",
        "name": "Global",
        "normalized": "",
        "package": "global-variables",
        "partial": "Global",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/global-variables/docs/Data-Global.html#v:declareEmptyMVar",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003edeclareEmptyMVar name\u003c/code\u003e maps a variable name to an \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e. Calling it multiple times with\n the same \u003ccode\u003ename\u003c/code\u003e and type of the expected \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e will always return the same \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n someVar :: MVar Int\n someVar = declareEmptyMVar \"my-global-some-var\"\n\u003c/pre\u003e\u003cp\u003eNote, there is \u003cem\u003eno\u003c/em\u003e need to use \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e or to add a \u003ccode\u003e{-# NOINLINE someVar #-}\u003c/code\u003e\n pragma in order to define top-level \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Data.Global",
        "fct-package": "global-variables",
        "fct-signature": "String-\u003e MVar a",
        "fct-type": "function",
        "title": "declareEmptyMVar"
      },
      "index": {
        "description": "declareEmptyMVar name maps variable name to an MVar Calling it multiple times with the same name and type of the expected MVar will always return the same MVar someVar MVar Int someVar declareEmptyMVar my-global-some-var Note there is no need to use unsafePerformIO or to add NOINLINE someVar pragma in order to define top-level MVar",
        "hierarchy": "Data Global",
        "module": "Data.Global",
        "name": "declareEmptyMVar",
        "normalized": "String-\u003eMVar a",
        "package": "global-variables",
        "partial": "Empty MVar",
        "signature": "String-\u003eMVar a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/global-variables/docs/Data-Global.html#v:declareIORef",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003edeclareIORef name val\u003c/code\u003e maps a variable name to an \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e. Calling it multiple times with the same\n \u003ccode\u003ename\u003c/code\u003e and type of \u003ccode\u003eval\u003c/code\u003e will always return the same \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n someVar :: IORef Int\n someVar = declareMVar \"my-global-some-var\" 0\n\u003c/pre\u003e\u003cp\u003eNote, there is \u003cem\u003eno\u003c/em\u003e need to use \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e or to add a \u003ccode\u003e{-# NOINLINE someVar #-}\u003c/code\u003e\n pragma in order to define top-level \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Data.Global",
        "fct-package": "global-variables",
        "fct-signature": "String-\u003e a-\u003e IORef a",
        "fct-type": "function",
        "title": "declareIORef"
      },
      "index": {
        "description": "declareIORef name val maps variable name to an IORef Calling it multiple times with the same name and type of val will always return the same IORef someVar IORef Int someVar declareMVar my-global-some-var Note there is no need to use unsafePerformIO or to add NOINLINE someVar pragma in order to define top-level IORef",
        "hierarchy": "Data Global",
        "module": "Data.Global",
        "name": "declareIORef",
        "normalized": "String-\u003ea-\u003eIORef a",
        "package": "global-variables",
        "partial": "IORef",
        "signature": "String-\u003ea-\u003eIORef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/global-variables/docs/Data-Global.html#v:declareMVar",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003edeclareMVar name val\u003c/code\u003e maps a variable name to an \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e. Calling it multiple times with the same\n \u003ccode\u003ename\u003c/code\u003e and type of \u003ccode\u003eval\u003c/code\u003e will always return the same \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n someVar :: MVar Int\n someVar = declareMVar \"my-global-some-var\" 0\n\u003c/pre\u003e\u003cp\u003eNote, there is \u003cem\u003eno\u003c/em\u003e need to use \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e or to add a \u003ccode\u003e{-# NOINLINE someVar #-}\u003c/code\u003e\n pragma in order to define top-level \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Data.Global",
        "fct-package": "global-variables",
        "fct-signature": "String-\u003e a-\u003e MVar a",
        "fct-type": "function",
        "title": "declareMVar"
      },
      "index": {
        "description": "declareMVar name val maps variable name to an MVar Calling it multiple times with the same name and type of val will always return the same MVar someVar MVar Int someVar declareMVar my-global-some-var Note there is no need to use unsafePerformIO or to add NOINLINE someVar pragma in order to define top-level MVar",
        "hierarchy": "Data Global",
        "module": "Data.Global",
        "name": "declareMVar",
        "normalized": "String-\u003ea-\u003eMVar a",
        "package": "global-variables",
        "partial": "MVar",
        "signature": "String-\u003ea-\u003eMVar a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/global-variables/docs/Data-Global.html#v:declareTVar",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003edeclareTVar name val\u003c/code\u003e maps a variable name to an \u003ccode\u003e\u003ca\u003eTVar\u003c/a\u003e\u003c/code\u003e. Calling it multiple times with the same\n \u003ccode\u003ename\u003c/code\u003e and type of \u003ccode\u003eval\u003c/code\u003e will always return the same \u003ccode\u003e\u003ca\u003eTVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n someVar :: TVar Int\n someVar = declareMVar \"my-global-some-var\" 0\n\u003c/pre\u003e\u003cp\u003eNote, there is \u003cem\u003eno\u003c/em\u003e need to use \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e or to add a \u003ccode\u003e{-# NOINLINE someVar #-}\u003c/code\u003e\n pragma in order to define top-level \u003ccode\u003e\u003ca\u003eTVar\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Data.Global",
        "fct-package": "global-variables",
        "fct-signature": "String-\u003e a-\u003e TVar a",
        "fct-type": "function",
        "title": "declareTVar"
      },
      "index": {
        "description": "declareTVar name val maps variable name to an TVar Calling it multiple times with the same name and type of val will always return the same TVar someVar TVar Int someVar declareMVar my-global-some-var Note there is no need to use unsafePerformIO or to add NOINLINE someVar pragma in order to define top-level TVar",
        "hierarchy": "Data Global",
        "module": "Data.Global",
        "name": "declareTVar",
        "normalized": "String-\u003ea-\u003eTVar a",
        "package": "global-variables",
        "partial": "TVar",
        "signature": "String-\u003ea-\u003eTVar a"
      }
    }
  }
]