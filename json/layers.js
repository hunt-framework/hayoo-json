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
        "word": "layers"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e The \u003ccode\u003e\u003ca\u003eMonadCont\u003c/a\u003e\u003c/code\u003e type class and its operation \u003ccode\u003e\u003ca\u003ecallCC\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e An instance of \u003ccode\u003e\u003ca\u003eMonadCont\u003c/a\u003e\u003c/code\u003e for the \u003ccode\u003e\u003ca\u003eContT\u003c/a\u003e\u003c/code\u003e monad transformer from the\n    \u003ccode\u003etransformers\u003c/code\u003e package.\n\u003c/li\u003e\u003cli\u003e A universal pass-through instance of \u003ccode\u003e\u003ca\u003eMonadCont\u003c/a\u003e\u003c/code\u003e for any existing\n    \u003ccode\u003eMonadCont\u003c/code\u003e wrapped by a \u003ccode\u003e\u003ca\u003eMonadLayerControl\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ol\u003e\u003c/div\u003e",
          "module": "Control.Monad.Interface.Cont",
          "name": "Cont",
          "package": "layers",
          "source": "src/Control-Monad-Interface-Cont.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports The MonadCont type class and its operation callCC An instance of MonadCont for the ContT monad transformer from the transformers package universal pass-through instance of MonadCont for any existing MonadCont wrapped by MonadLayerControl",
          "hierarchy": "Control Monad Interface Cont",
          "module": "Control.Monad.Interface.Cont",
          "name": "Cont",
          "package": "layers",
          "partial": "Cont",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-Cont.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMonadCont\u003c/a\u003e\u003c/code\u003e interface represents computations in continuation-passing\n style (CPS). In continuation-passing style function result is not returned,\n but instead is passed to another function, received as a parameter\n (continuation). Computations are built up from sequences of nested\n continuations, terminated by a final continuation (often id) which produces\n the final result. Since continuations are functions which represent the\n future of a computation, manipulation of the continuation functions can\n achieve complex manipulations of the future of the computation, such as\n interrupting a computation in the middle, aborting a portion of a\n computation, restarting a computation, and interleaving execution of\n computations. The \u003ccode\u003eMonadCont\u003c/code\u003e interface adapts CPS to the structure of a\n monad.\n\u003c/p\u003e\u003cp\u003eBefore using the \u003ccode\u003eMonadCont\u003c/code\u003e interface, be sure that you have a firm\n understanding of continuation-passing style and that continuations\n represent the best solution to your particular design problem. Many\n algorithms which require continuations in other languages do not require\n them in Haskell, due to Haskell's lazy semantics. Abuse of the \u003ccode\u003eMonadCont\u003c/code\u003e\n interface can produce code that is impossible to understand and maintain.\n\u003c/p\u003e",
          "module": "Control.Monad.Interface.Cont",
          "name": "MonadCont",
          "package": "layers",
          "source": "src/Control-Monad-Interface-Cont.html#MonadCont",
          "type": "class"
        },
        "index": {
          "description": "The MonadCont interface represents computations in continuation-passing style CPS In continuation-passing style function result is not returned but instead is passed to another function received as parameter continuation Computations are built up from sequences of nested continuations terminated by final continuation often id which produces the final result Since continuations are functions which represent the future of computation manipulation of the continuation functions can achieve complex manipulations of the future of the computation such as interrupting computation in the middle aborting portion of computation restarting computation and interleaving execution of computations The MonadCont interface adapts CPS to the structure of monad Before using the MonadCont interface be sure that you have firm understanding of continuation-passing style and that continuations represent the best solution to your particular design problem Many algorithms which require continuations in other languages do not require them in Haskell due to Haskell lazy semantics Abuse of the MonadCont interface can produce code that is impossible to understand and maintain",
          "hierarchy": "Control Monad Interface Cont",
          "module": "Control.Monad.Interface.Cont",
          "name": "MonadCont",
          "package": "layers",
          "partial": "Monad Cont",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-Cont.html#t:MonadCont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ecallCC\u003c/a\u003e\u003c/code\u003e (call-with-current-continuation) calls a function with the\n current continuation as its argument. Provides an escape continuation\n mechanism for use with instances of \u003ccode\u003eMonadCont\u003c/code\u003e. Escape continuations\n allow to abort the current computation and return a value immediately.\n They achieve a similar effect to\n \u003ccode\u003e\u003ca\u003ethrow\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e from the\n \u003ccode\u003e\u003ca\u003eMonadException\u003c/a\u003e\u003c/code\u003e interface.\n Advantage of this function over calling \u003ccode\u003ereturn\u003c/code\u003e is that it makes the\n continuation explicit, allowing more flexibility and better control.\n\u003c/p\u003e\u003cp\u003eThe standard idiom used with \u003ccode\u003ecallCC\u003c/code\u003e is to provide a lambda-expression\n to name the continuation. Then calling the named continuation anywhere\n within its scope will escape from the computation, even if it is many\n layers deep within nested computations. \n\u003c/p\u003e",
          "module": "Control.Monad.Interface.Cont",
          "name": "callCC",
          "package": "layers",
          "signature": "((a -\u003e m b) -\u003e m a) -\u003e m a",
          "source": "src/Control-Monad-Interface-Cont.html#callCC",
          "type": "method"
        },
        "index": {
          "description": "callCC call-with-current-continuation calls function with the current continuation as its argument Provides an escape continuation mechanism for use with instances of MonadCont Escape continuations allow to abort the current computation and return value immediately They achieve similar effect to throw and catch from the MonadException interface Advantage of this function over calling return is that it makes the continuation explicit allowing more flexibility and better control The standard idiom used with callCC is to provide lambda-expression to name the continuation Then calling the named continuation anywhere within its scope will escape from the computation even if it is many layers deep within nested computations",
          "hierarchy": "Control Monad Interface Cont",
          "module": "Control.Monad.Interface.Cont",
          "name": "callCC",
          "normalized": "((a-\u003eb c)-\u003eb a)-\u003eb a",
          "package": "layers",
          "partial": "CC",
          "signature": "((a-\u003em b)-\u003em a)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-Cont.html#v:callCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e The \u003ccode\u003e\u003ca\u003eMonadException\u003c/a\u003e\u003c/code\u003e type class and its operations \u003ccode\u003e\u003ca\u003ethrow\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Instances of \u003ccode\u003e\u003ca\u003eMonadException\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eSTM\u003c/a\u003e\u003c/code\u003e and the\n    \u003ccode\u003e\u003ca\u003eErrorT\u003c/a\u003e\u003c/code\u003e monad transformer from the \u003ccode\u003etransformers\u003c/code\u003e package.\n\u003c/li\u003e\u003cli\u003e An orphan instance of \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e for the \u003ccode\u003e\u003ca\u003eSomeException\u003c/a\u003e\u003c/code\u003e type: this is a\n    necessary hack in order to make \u003ccode\u003e\u003ca\u003eErrorT\u003c/a\u003e\u003c/code\u003e an instance of \u003ccode\u003e\u003ca\u003eMonadException\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e A universal pass-through instance of \u003ccode\u003e\u003ca\u003eMonadException\u003c/a\u003e\u003c/code\u003e for any existing\n    \u003ccode\u003eMonadException\u003c/code\u003e wrapped by a \u003ccode\u003e\u003ca\u003eMonadLayerControl\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e The utility operations \u003ccode\u003e\u003ca\u003ecatches\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ecatchJust\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ehandle\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ehandleJust\u003c/a\u003e\u003c/code\u003e,\n    \u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etryJust\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ol\u003e\u003c/div\u003e",
          "module": "Control.Monad.Interface.Exception",
          "name": "Exception",
          "package": "layers",
          "source": "src/Control-Monad-Interface-Exception.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports The MonadException type class and its operations throw and catch Instances of MonadException for IO Either STM and the ErrorT monad transformer from the transformers package An orphan instance of Error for the SomeException type this is necessary hack in order to make ErrorT an instance of MonadException universal pass-through instance of MonadException for any existing MonadException wrapped by MonadLayerControl The utility operations catches catchJust handle handleJust try and tryJust",
          "hierarchy": "Control Monad Interface Exception",
          "module": "Control.Monad.Interface.Exception",
          "name": "Exception",
          "package": "layers",
          "partial": "Exception",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-Exception.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYou need this when using \u003ccode\u003e\u003ca\u003ecatches\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Interface.Exception",
          "name": "Handler",
          "package": "layers",
          "source": "src/Control-Monad-Interface-Exception.html#Handler",
          "type": "data"
        },
        "index": {
          "description": "You need this when using catches",
          "hierarchy": "Control Monad Interface Exception",
          "module": "Control.Monad.Interface.Exception",
          "name": "Handler",
          "package": "layers",
          "partial": "Handler",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-Exception.html#t:Handler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMonadException\u003c/a\u003e\u003c/code\u003e type class represents the class of monads which can\n \u003ccode\u003e\u003ca\u003ethrow\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e exceptions. This includes \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e-based monads as well as\n \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e-like monads.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003ethrow\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Interface.Exception",
          "name": "MonadException",
          "package": "layers",
          "source": "src/Control-Monad-Interface-Exception.html#MonadException",
          "type": "class"
        },
        "index": {
          "description": "The MonadException type class represents the class of monads which can throw and catch exceptions This includes IO based monads as well as Either like monads Minimal complete definition throw catch",
          "hierarchy": "Control Monad Interface Exception",
          "module": "Control.Monad.Interface.Exception",
          "name": "MonadException",
          "package": "layers",
          "partial": "Monad Exception",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-Exception.html#t:MonadException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eSomeException\u003c/code\u003e type is the root of the exception type hierarchy.\nWhen an exception of type \u003ccode\u003ee\u003c/code\u003e is thrown, behind the scenes it is\nencapsulated in a \u003ccode\u003eSomeException\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Interface.Exception",
          "name": "SomeException",
          "package": "layers",
          "type": "data"
        },
        "index": {
          "description": "The SomeException type is the root of the exception type hierarchy When an exception of type is thrown behind the scenes it is encapsulated in SomeException",
          "hierarchy": "Control Monad Interface Exception",
          "module": "Control.Monad.Interface.Exception",
          "name": "SomeException",
          "package": "layers",
          "partial": "Some Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-Exception.html#t:SomeException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Interface.Exception",
          "name": "Handler",
          "package": "layers",
          "signature": "Handler (e -\u003e m a)",
          "source": "src/Control-Monad-Interface-Exception.html#Handler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Interface Exception",
          "module": "Control.Monad.Interface.Exception",
          "name": "Handler",
          "normalized": "Handler(a-\u003eb c)",
          "package": "layers",
          "partial": "Handler",
          "signature": "Handler(e-\u003em a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-Exception.html#v:Handler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the simplest of the exception-catching functions. It takes a\n single argument, runs it, and if an exception is raised the \"handler\"\n is executed, with the value of the exception passed as an argument.\n Otherwise, the result is returned as normal. For example:\n\u003c/p\u003e\u003cpre\u003e catch (readFile f) (\\(e :: IOException) -\u003e do\n     hPutStr stderr (\"Warning: Couldn't open \" ++ f ++ \": \" ++ show e)\n     return \"\")\n\u003c/pre\u003e\u003cp\u003eNote that we have to give a type signature to e, or the program will\n not typecheck as the type is ambiguous. While it is possible to catch\n exceptions of any type, see the section \"Catching all exceptions\" in\n \u003ca\u003eControl.Exception\u003c/a\u003e for an explanation of the problems with doing so.\n\u003c/p\u003e\u003cp\u003eFor catching exceptions in pure (non-IO) expressions, see the function\n evaluate.\n\u003c/p\u003e\u003cp\u003eNote that due to Haskell's unspecified evaluation order, an expression\n may throw one of several possible exceptions: consider the expression\n \u003ccode\u003e(error \"urk\") + (1 \u003ccode\u003e\u003ca\u003ediv\u003c/a\u003e\u003c/code\u003e 0)\u003c/code\u003e. Does the expression throw\n \u003ccode\u003eErrorCall \"urk\"\u003c/code\u003e, or \u003ccode\u003eDivideByZero\u003c/code\u003e?\n\u003c/p\u003e\u003cp\u003eThe answer is \"it might throw either\"; the choice is\n non-deterministic. If you are catching any type of exception then you\n might catch either. If you are calling catch with type\n \u003ccode\u003em Int -\u003e (ArithException -\u003e m Int) -\u003e m Int\u003c/code\u003e then the handler may get\n run with \u003ccode\u003eDivideByZero\u003c/code\u003e as an argument, or an \u003ccode\u003eErrorCall \"urk\"\u003c/code\u003e\n exception may be propogated further up. If you call it again, you might\n get a the opposite behaviour. This is ok, because \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e is a monadic\n computation.\n\u003c/p\u003e",
          "module": "Control.Monad.Interface.Exception",
          "name": "catch",
          "package": "layers",
          "signature": "m a -\u003e (e -\u003e m a) -\u003e m a",
          "source": "src/Control-Monad-Interface-Exception.html#catch",
          "type": "method"
        },
        "index": {
          "description": "This is the simplest of the exception-catching functions It takes single argument runs it and if an exception is raised the handler is executed with the value of the exception passed as an argument Otherwise the result is returned as normal For example catch readFile IOException do hPutStr stderr Warning Couldn open show return Note that we have to give type signature to or the program will not typecheck as the type is ambiguous While it is possible to catch exceptions of any type see the section Catching all exceptions in Control.Exception for an explanation of the problems with doing so For catching exceptions in pure non-IO expressions see the function evaluate Note that due to Haskell unspecified evaluation order an expression may throw one of several possible exceptions consider the expression error urk div Does the expression throw ErrorCall urk or DivideByZero The answer is it might throw either the choice is non-deterministic If you are catching any type of exception then you might catch either If you are calling catch with type Int ArithException Int Int then the handler may get run with DivideByZero as an argument or an ErrorCall urk exception may be propogated further up If you call it again you might get the opposite behaviour This is ok because catch is monadic computation",
          "hierarchy": "Control Monad Interface Exception",
          "module": "Control.Monad.Interface.Exception",
          "name": "catch",
          "normalized": "a b-\u003e(c-\u003ea b)-\u003ea b",
          "package": "layers",
          "signature": "m a-\u003e(e-\u003em a)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-Exception.html#v:catch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003ecatchJust\u003c/a\u003e\u003c/code\u003e is like \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e, but it takes an extra argument\n which is an \u003cem\u003eexception predicate\u003c/em\u003e, a function which selects which type of\n exceptions we're interested in.\n\u003c/p\u003e\u003cpre\u003e catchJust (\\e -\u003e if isDoesNotExistErrorType (ioeGetErrorType e)\n               then Just ()\n               else Nothing)\n           (readFile f)\n           (\\_ -\u003e do\n               hPutStrLn stderr (\"No such file: \" ++ show f)\n               return \"\")\n\u003c/pre\u003e\u003cp\u003eAny other exceptions which are not matched by the predicate are re-raised,\n and may be caught by an enclosing \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ecatchJust\u003c/a\u003e\u003c/code\u003e, etc.\n\u003c/p\u003e",
          "module": "Control.Monad.Interface.Exception",
          "name": "catchJust",
          "package": "layers",
          "signature": "(e -\u003e Maybe b) -\u003e m a -\u003e (b -\u003e m a) -\u003e m a",
          "source": "src/Control-Monad-Interface-Exception.html#catchJust",
          "type": "function"
        },
        "index": {
          "description": "The function catchJust is like catch but it takes an extra argument which is an exception predicate function which selects which type of exceptions we re interested in catchJust if isDoesNotExistErrorType ioeGetErrorType then Just else Nothing readFile do hPutStrLn stderr No such file show return Any other exceptions which are not matched by the predicate are re-raised and may be caught by an enclosing catch catchJust etc",
          "hierarchy": "Control Monad Interface Exception",
          "module": "Control.Monad.Interface.Exception",
          "name": "catchJust",
          "normalized": "(a-\u003eMaybe b)-\u003ec d-\u003e(b-\u003ec d)-\u003ec d",
          "package": "layers",
          "partial": "Just",
          "signature": "(e-\u003eMaybe b)-\u003em a-\u003e(b-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-Exception.html#v:catchJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSometimes you want to catch two different sorts of exception. You could\n do something like\n\u003c/p\u003e\u003cpre\u003e f = expr `catch` \\(ex :: ArithException) -\u003e handleArith ex\n          `catch` \\(ex :: IOException)    -\u003e handleIO    ex\n\u003c/pre\u003e\u003cp\u003eHowever, there are a couple of problems with this approach. The first is\n that having two exception handlers is inefficient. However, the more\n serious issue is that the second exception handler will catch exceptions\n in the first, e.g. in the example above, if \u003ccode\u003ehandleArith\u003c/code\u003e throws an\n \u003ccode\u003eIOException\u003c/code\u003e then the second exception handler will catch it.\n\u003c/p\u003e\u003cp\u003eInstead, we provide a function \u003ccode\u003e\u003ca\u003ecatches\u003c/a\u003e\u003c/code\u003e, which would be used thus:\n\u003c/p\u003e\u003cpre\u003e f = expr `catches` [Handler (\\ (ex :: ArithException) -\u003e handleArith ex),\n                     Handler (\\ (ex :: IOException)    -\u003e handleIO    ex)]\n\u003c/pre\u003e",
          "module": "Control.Monad.Interface.Exception",
          "name": "catches",
          "package": "layers",
          "signature": "m a -\u003e [Handler m a] -\u003e m a",
          "source": "src/Control-Monad-Interface-Exception.html#catches",
          "type": "function"
        },
        "index": {
          "description": "Sometimes you want to catch two different sorts of exception You could do something like expr catch ex ArithException handleArith ex catch ex IOException handleIO ex However there are couple of problems with this approach The first is that having two exception handlers is inefficient However the more serious issue is that the second exception handler will catch exceptions in the first e.g in the example above if handleArith throws an IOException then the second exception handler will catch it Instead we provide function catches which would be used thus expr catches Handler ex ArithException handleArith ex Handler ex IOException handleIO ex",
          "hierarchy": "Control Monad Interface Exception",
          "module": "Control.Monad.Interface.Exception",
          "name": "catches",
          "normalized": "a b-\u003e[Handler a b]-\u003ea b",
          "package": "layers",
          "signature": "m a-\u003e[Handler m a]-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-Exception.html#v:catches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e with the arguments swapped around; useful in\n situations where the code for the handler is shorter.  For example:\n\u003c/p\u003e\u003cpre\u003e   do handle (\\NonTermination -\u003e exitWith (ExitFailure 1)) $\n      ...\n\u003c/pre\u003e",
          "module": "Control.Monad.Interface.Exception",
          "name": "handle",
          "package": "layers",
          "signature": "(e -\u003e m a) -\u003e m a -\u003e m a",
          "source": "src/Control-Monad-Interface-Exception.html#handle",
          "type": "function"
        },
        "index": {
          "description": "version of catch with the arguments swapped around useful in situations where the code for the handler is shorter For example do handle NonTermination exitWith ExitFailure",
          "hierarchy": "Control Monad Interface Exception",
          "module": "Control.Monad.Interface.Exception",
          "name": "handle",
          "normalized": "(a-\u003eb c)-\u003eb c-\u003eb c",
          "package": "layers",
          "signature": "(e-\u003em a)-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-Exception.html#v:handle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003ecatchJust\u003c/a\u003e\u003c/code\u003e with the arguments swapped around (see\n \u003ccode\u003e\u003ca\u003ehandle\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Control.Monad.Interface.Exception",
          "name": "handleJust",
          "package": "layers",
          "signature": "(e -\u003e Maybe b) -\u003e (b -\u003e m a) -\u003e m a -\u003e m a",
          "source": "src/Control-Monad-Interface-Exception.html#handleJust",
          "type": "function"
        },
        "index": {
          "description": "version of catchJust with the arguments swapped around see handle",
          "hierarchy": "Control Monad Interface Exception",
          "module": "Control.Monad.Interface.Exception",
          "name": "handleJust",
          "normalized": "(a-\u003eMaybe b)-\u003e(b-\u003ec d)-\u003ec d-\u003ec d",
          "package": "layers",
          "partial": "Just",
          "signature": "(e-\u003eMaybe b)-\u003e(b-\u003em a)-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-Exception.html#v:handleJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrow an exception that can be caught by the monad \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Interface.Exception",
          "name": "throw",
          "package": "layers",
          "signature": "e -\u003e m a",
          "source": "src/Control-Monad-Interface-Exception.html#throw",
          "type": "method"
        },
        "index": {
          "description": "Throw an exception that can be caught by the monad",
          "hierarchy": "Control Monad Interface Exception",
          "module": "Control.Monad.Interface.Exception",
          "name": "throw",
          "normalized": "a-\u003eb c",
          "package": "layers",
          "signature": "e-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-Exception.html#v:throw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e, but returns an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e result which is \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e a)\u003c/code\u003e\n if no exception of type \u003ccode\u003ee\u003c/code\u003e was raised, or \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e ex)\u003c/code\u003e if an exception of\n type \u003ccode\u003ee\u003c/code\u003e was raised and its value is \u003ccode\u003eex\u003c/code\u003e. If any other type of exception\n is raised than it will be propogated up to the next enclosing exception\n handler.\n\u003c/p\u003e\u003cpre\u003e try a = catch (Right `liftM` a) (return . Left)\n\u003c/pre\u003e",
          "module": "Control.Monad.Interface.Exception",
          "name": "try",
          "package": "layers",
          "signature": "m a -\u003e m (Either e a)",
          "source": "src/Control-Monad-Interface-Exception.html#try",
          "type": "function"
        },
        "index": {
          "description": "Similar to catch but returns an Either result which is Right if no exception of type was raised or Left ex if an exception of type was raised and its value is ex If any other type of exception is raised than it will be propogated up to the next enclosing exception handler try catch Right liftM return Left",
          "hierarchy": "Control Monad Interface Exception",
          "module": "Control.Monad.Interface.Exception",
          "name": "try",
          "normalized": "a b-\u003ea(Either c b)",
          "package": "layers",
          "signature": "m a-\u003em(Either e a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-Exception.html#v:try"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e that takes an exception predicate to select which\n exceptions are caught (c.f. \u003ccode\u003e\u003ca\u003ecatchJust\u003c/a\u003e\u003c/code\u003e).  If the exception does not match\n the predicate, it is re-thrown.\n\u003c/p\u003e",
          "module": "Control.Monad.Interface.Exception",
          "name": "tryJust",
          "package": "layers",
          "signature": "(e -\u003e Maybe b) -\u003e m a -\u003e m (Either b a)",
          "source": "src/Control-Monad-Interface-Exception.html#tryJust",
          "type": "function"
        },
        "index": {
          "description": "variant of try that takes an exception predicate to select which exceptions are caught c.f catchJust If the exception does not match the predicate it is re-thrown",
          "hierarchy": "Control Monad Interface Exception",
          "module": "Control.Monad.Interface.Exception",
          "name": "tryJust",
          "normalized": "(a-\u003eMaybe b)-\u003ec d-\u003ec(Either b d)",
          "package": "layers",
          "partial": "Just",
          "signature": "(e-\u003eMaybe b)-\u003em a-\u003em(Either b a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-Exception.html#v:tryJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e The \u003ccode\u003e\u003ca\u003eMonadFork\u003c/a\u003e\u003c/code\u003e type class and its operations \u003ccode\u003e\u003ca\u003efork\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eforkOn\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e An instance of \u003ccode\u003e\u003ca\u003eMonadFork\u003c/a\u003e\u003c/code\u003e for the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/li\u003e\u003cli\u003e A universal pass-through instance of \u003ccode\u003e\u003ca\u003eMonadFork\u003c/a\u003e\u003c/code\u003e for any existing\n    \u003ccode\u003eMonadFork\u003c/code\u003e wrapped by a \u003ccode\u003e\u003ca\u003eMonadLayerControl\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e The utility operations \u003ccode\u003e\u003ca\u003eforkWithUnmask\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eforkOnWithUnmask\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ol\u003e\u003c/div\u003e",
          "module": "Control.Monad.Interface.Fork",
          "name": "Fork",
          "package": "layers",
          "source": "src/Control-Monad-Interface-Fork.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports The MonadFork type class and its operations fork and forkOn An instance of MonadFork for the IO monad universal pass-through instance of MonadFork for any existing MonadFork wrapped by MonadLayerControl The utility operations forkWithUnmask and forkOnWithUnmask",
          "hierarchy": "Control Monad Interface Fork",
          "module": "Control.Monad.Interface.Fork",
          "name": "Fork",
          "package": "layers",
          "partial": "Fork",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-Fork.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMonadFork\u003c/a\u003e\u003c/code\u003e type class, for monads which support a fork operation.\n\u003c/p\u003e\u003cp\u003eAn example of a monad which has a MonadFork instance that is not simply a\n lifted form of \u003ccode\u003eforkIO\u003c/code\u003e is the \u003ccode\u003eResourceT\u003c/code\u003e monad from the \u003ccode\u003eresourcet\u003c/code\u003e\n package, which defines an operation \u003ccode\u003eresourceForkIO\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Interface.Fork",
          "name": "MonadFork",
          "package": "layers",
          "source": "src/Control-Monad-Interface-Fork.html#MonadFork",
          "type": "class"
        },
        "index": {
          "description": "The MonadFork type class for monads which support fork operation An example of monad which has MonadFork instance that is not simply lifted form of forkIO is the ResourceT monad from the resourcet package which defines an operation resourceForkIO",
          "hierarchy": "Control Monad Interface Fork",
          "module": "Control.Monad.Interface.Fork",
          "name": "MonadFork",
          "package": "layers",
          "partial": "Monad Fork",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-Fork.html#t:MonadFork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSparks off a new thread to run the computation passed as the first\n argument, and returns the \u003ccode\u003e\u003ca\u003eThreadId\u003c/a\u003e\u003c/code\u003e of the newly\n created thread.\n\u003c/p\u003e\u003cp\u003eThe new thread will be a lightweight thread; if you want to use a\n foreign library that uses thread-local storage, use\n \u003ccode\u003e\u003ca\u003eforkOS\u003c/a\u003e\u003c/code\u003e instead. (Note that \u003ccode\u003eforkOS\u003c/code\u003e is not\n included in the \u003ccode\u003e\u003ca\u003eMonadFork\u003c/a\u003e\u003c/code\u003e interface, so your monad \u003ccode\u003em\u003c/code\u003e must be an\n instance of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLiftControl\u003c/a\u003e\u003c/code\u003e 'IO m\u003c/code\u003e to be able to use\n \u003ccode\u003eforkOS\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eGHC note: the new thread inherits the masked state of the parent (see\n \u003ccode\u003e\u003ca\u003emask\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eThe newly created thread has an exception handler that discards the\n exceptions \u003ccode\u003e\u003ca\u003eBlockedIndefinitelyOnMVar\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eBlockedIndefinitelyOnSTM\u003c/a\u003e\u003c/code\u003e, and\n \u003ccode\u003e\u003ca\u003eThreadKilled\u003c/a\u003e\u003c/code\u003e, and passes all other exceptions to\n the uncaught exception handler.\n\u003c/p\u003e",
          "module": "Control.Monad.Interface.Fork",
          "name": "fork",
          "package": "layers",
          "signature": "m () -\u003e m ThreadId",
          "source": "src/Control-Monad-Interface-Fork.html#fork",
          "type": "method"
        },
        "index": {
          "description": "Sparks off new thread to run the computation passed as the first argument and returns the ThreadId of the newly created thread The new thread will be lightweight thread if you want to use foreign library that uses thread-local storage use forkOS instead Note that forkOS is not included in the MonadFork interface so your monad must be an instance of LiftControl IO to be able to use forkOS GHC note the new thread inherits the masked state of the parent see mask The newly created thread has an exception handler that discards the exceptions BlockedIndefinitelyOnMVar BlockedIndefinitelyOnSTM and ThreadKilled and passes all other exceptions to the uncaught exception handler",
          "hierarchy": "Control Monad Interface Fork",
          "module": "Control.Monad.Interface.Fork",
          "name": "fork",
          "normalized": "a()-\u003ea ThreadId",
          "package": "layers",
          "signature": "m()-\u003em ThreadId",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-Fork.html#v:fork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efork\u003c/a\u003e\u003c/code\u003e, but lets you specify on which processor the thread\n should run. Unlike a \u003ccode\u003e\u003ca\u003efork\u003c/a\u003e\u003c/code\u003e thread, a thread created by \u003ccode\u003e\u003ca\u003eforkOn\u003c/a\u003e\u003c/code\u003e will\n stay on the same processor for its entire lifetime (\u003ccode\u003e\u003ca\u003efork\u003c/a\u003e\u003c/code\u003e threads can\n migrate between processors according to the scheduling policy).\n \u003ccode\u003e\u003ca\u003eforkOn\u003c/a\u003e\u003c/code\u003e is useful for overriding the scheduling policy when you know\n in advance how best to distribute the threads.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e argument specifies a capability number (see\n \u003ccode\u003e\u003ca\u003egetNumCapabilities\u003c/a\u003e\u003c/code\u003e). Typically capabilities\n correspond to physical processors, but the exact behaviour is\n implementation-dependent. The value passed to \u003ccode\u003e\u003ca\u003eforkOn\u003c/a\u003e\u003c/code\u003e is interpreted\n modulo the total number of capabilities as returned by\n \u003ccode\u003e\u003ca\u003egetNumCapabilities\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eGHC note: the number of capabilities is specified by the \u003ccode\u003e+RTS -N\u003c/code\u003e\n option when the program is started. Capabilities can be fixed to actual\n processor cores with \u003ccode\u003e+RTS -qa\u003c/code\u003e if the underlying operating system\n supports that, although in practice this is usually unnecessary (and\n may actually degrade perforamnce in some cases - experimentation is\n recommended).\n\u003c/p\u003e",
          "module": "Control.Monad.Interface.Fork",
          "name": "forkOn",
          "package": "layers",
          "signature": "Int -\u003e m () -\u003e m ThreadId",
          "source": "src/Control-Monad-Interface-Fork.html#forkOn",
          "type": "method"
        },
        "index": {
          "description": "Like fork but lets you specify on which processor the thread should run Unlike fork thread thread created by forkOn will stay on the same processor for its entire lifetime fork threads can migrate between processors according to the scheduling policy forkOn is useful for overriding the scheduling policy when you know in advance how best to distribute the threads The Int argument specifies capability number see getNumCapabilities Typically capabilities correspond to physical processors but the exact behaviour is implementation-dependent The value passed to forkOn is interpreted modulo the total number of capabilities as returned by getNumCapabilities GHC note the number of capabilities is specified by the RTS option when the program is started Capabilities can be fixed to actual processor cores with RTS qa if the underlying operating system supports that although in practice this is usually unnecessary and may actually degrade perforamnce in some cases experimentation is recommended",
          "hierarchy": "Control Monad Interface Fork",
          "module": "Control.Monad.Interface.Fork",
          "name": "forkOn",
          "normalized": "Int-\u003ea()-\u003ea ThreadId",
          "package": "layers",
          "partial": "On",
          "signature": "Int-\u003em()-\u003em ThreadId",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-Fork.html#v:forkOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eforkWithUnmask\u003c/a\u003e\u003c/code\u003e, but the child thread is pinned to the given CPU,\n as with \u003ccode\u003e\u003ca\u003eforkOn\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Interface.Fork",
          "name": "forkOnWithUnmask",
          "package": "layers",
          "signature": "n a -\u003e n a) -\u003e m ()) -\u003e m ThreadId",
          "source": "src/Control-Monad-Interface-Fork.html#forkOnWithUnmask",
          "type": "function"
        },
        "index": {
          "description": "Like forkWithUnmask but the child thread is pinned to the given CPU as with forkOn",
          "hierarchy": "Control Monad Interface Fork",
          "module": "Control.Monad.Interface.Fork",
          "name": "forkOnWithUnmask",
          "normalized": "a b-\u003ea b)-\u003ec())-\u003ec ThreadId",
          "package": "layers",
          "partial": "On With Unmask",
          "signature": "n a-\u003en a)-\u003em())-\u003em ThreadId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-Fork.html#v:forkOnWithUnmask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efork\u003c/a\u003e\u003c/code\u003e, but the child thread is passed a function that can be used\n to unmask asynchronous exceptions.  This function is typically used in the\n following way\n\u003c/p\u003e\u003cpre\u003e  ... mask_ $ forkIOWithUnmask $ \\unmask -\u003e\n                 catch (unmask ...) handler\n\u003c/pre\u003e\u003cp\u003eso that the exception handler in the child thread is established with\n asynchronous exceptions masked, meanwhile the main body of the child thread\n is executed in the unmasked state.\n\u003c/p\u003e\u003cp\u003eNote that the \u003ccode\u003eunmask\u003c/code\u003e function passed to the child thread should only be\n used in that thread; the behaviour is undefined if it is invoked in a\n different thread.\n\u003c/p\u003e",
          "module": "Control.Monad.Interface.Fork",
          "name": "forkWithUnmask",
          "package": "layers",
          "signature": "n a -\u003e n a) -\u003e m ()) -\u003e m ThreadId",
          "source": "src/Control-Monad-Interface-Fork.html#forkWithUnmask",
          "type": "function"
        },
        "index": {
          "description": "Like fork but the child thread is passed function that can be used to unmask asynchronous exceptions This function is typically used in the following way mask forkIOWithUnmask unmask catch unmask handler so that the exception handler in the child thread is established with asynchronous exceptions masked meanwhile the main body of the child thread is executed in the unmasked state Note that the unmask function passed to the child thread should only be used in that thread the behaviour is undefined if it is invoked in different thread",
          "hierarchy": "Control Monad Interface Fork",
          "module": "Control.Monad.Interface.Fork",
          "name": "forkWithUnmask",
          "normalized": "a b-\u003ea b)-\u003ec())-\u003ec ThreadId",
          "package": "layers",
          "partial": "With Unmask",
          "signature": "n a-\u003en a)-\u003em())-\u003em ThreadId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-Fork.html#v:forkWithUnmask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e The \u003ccode\u003e\u003ca\u003eMonadMask\u003c/a\u003e\u003c/code\u003e type class and its operations \u003ccode\u003e\u003ca\u003egetMaskingState\u003c/a\u003e\u003c/code\u003e and\n    \u003ccode\u003e\u003ca\u003esetMaskingState\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Instances of \u003ccode\u003e\u003ca\u003eMonadMask\u003c/a\u003e\u003c/code\u003e for all the base monads in the \u003ccode\u003ebase\u003c/code\u003e and\n    \u003ccode\u003etransformers\u003c/code\u003e packages.\n\u003c/li\u003e\u003cli\u003e A universal pass-through instance of \u003ccode\u003e\u003ca\u003eMonadMask\u003c/a\u003e\u003c/code\u003e for any existing\n    \u003ccode\u003eMonadMask\u003c/code\u003e wrapped by a \u003ccode\u003e\u003ca\u003eMonadLayer\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e The utility operations \u003ccode\u003e\u003ca\u003emask\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emask_\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003euninterruptibleMask\u003c/a\u003e\u003c/code\u003e,\n    \u003ccode\u003e\u003ca\u003euninterruptibleMask_\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ol\u003e\u003c/div\u003e",
          "module": "Control.Monad.Interface.Mask",
          "name": "Mask",
          "package": "layers",
          "source": "src/Control-Monad-Interface-Mask.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports The MonadMask type class and its operations getMaskingState and setMaskingState Instances of MonadMask for all the base monads in the base and transformers packages universal pass-through instance of MonadMask for any existing MonadMask wrapped by MonadLayer The utility operations mask mask uninterruptibleMask uninterruptibleMask",
          "hierarchy": "Control Monad Interface Mask",
          "module": "Control.Monad.Interface.Mask",
          "name": "Mask",
          "package": "layers",
          "partial": "Mask",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-Mask.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMonadMask\u003c/a\u003e\u003c/code\u003e type class is for dealing with asynchronous exceptions.\n It contains the \u003ccode\u003e\u003ca\u003egetMaskingState\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esetMaskingState\u003c/a\u003e\u003c/code\u003e operations for\n getting and setting the \u003ccode\u003e\u003ca\u003eMaskingState\u003c/a\u003e\u003c/code\u003e of the current thread. However, you\n should never need to use these operations: in particular, using\n \u003ccode\u003esetMaskingState\u003c/code\u003e can violate some invariants which are assumed internally\n by this library. The only reason these functions are exposed at all is that\n they are necessary to implement \u003ccode\u003e\u003ca\u003emask\u003c/a\u003e\u003c/code\u003e (which is what you should use\n instead), and unlike \u003ccode\u003e\u003ca\u003emask\u003c/a\u003e\u003c/code\u003e, their simpler type signature allows us to\n define a universal pass-through instance of \u003ccode\u003eMonadMask\u003c/code\u003e through any\n \u003ccode\u003e\u003ca\u003eMonadLayer\u003c/a\u003e\u003c/code\u003e, while \u003ccode\u003emask\u003c/code\u003e would require\n \u003ccode\u003e\u003ca\u003eMonadLayerControl\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eEvery\u003c/em\u003e monad should be an instance of \u003ccode\u003eMonadMask\u003c/code\u003e, and we have provided\n instances for every base monad in the \u003ccode\u003ebase\u003c/code\u003e and \u003ccode\u003etransformers\u003c/code\u003e packages.\n \u003ccode\u003egetMaskingState\u003c/code\u003e and \u003ccode\u003esetMaskingState\u003c/code\u003e have default definitions that only\n need to be overridden in the case of \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e and monads layered on top of \u003ccode\u003eIO\u003c/code\u003e\n (which we have already done), so it costs nothing to add an instance of\n \u003ccode\u003eMonadMask\u003c/code\u003e to a monad. (\u003ccode\u003eMonadMask\u003c/code\u003e is a prerequisite for implementing\n \u003ccode\u003e\u003ca\u003eMonadTry\u003c/a\u003e\u003c/code\u003e, which provides the\n \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e family of functions, which is perhaps\n more interesting than \u003ccode\u003eMonadMask\u003c/code\u003e on its own.)\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: instance head only.\n\u003c/p\u003e",
          "module": "Control.Monad.Interface.Mask",
          "name": "MonadMask",
          "package": "layers",
          "source": "src/Control-Monad-Interface-Mask.html#MonadMask",
          "type": "class"
        },
        "index": {
          "description": "The MonadMask type class is for dealing with asynchronous exceptions It contains the getMaskingState and setMaskingState operations for getting and setting the MaskingState of the current thread However you should never need to use these operations in particular using setMaskingState can violate some invariants which are assumed internally by this library The only reason these functions are exposed at all is that they are necessary to implement mask which is what you should use instead and unlike mask their simpler type signature allows us to define universal pass-through instance of MonadMask through any MonadLayer while mask would require MonadLayerControl Every monad should be an instance of MonadMask and we have provided instances for every base monad in the base and transformers packages getMaskingState and setMaskingState have default definitions that only need to be overridden in the case of IO and monads layered on top of IO which we have already done so it costs nothing to add an instance of MonadMask to monad MonadMask is prerequisite for implementing MonadTry which provides the bracket family of functions which is perhaps more interesting than MonadMask on its own Minimal complete definition instance head only",
          "hierarchy": "Control Monad Interface Mask",
          "module": "Control.Monad.Interface.Mask",
          "name": "MonadMask",
          "package": "layers",
          "partial": "Monad Mask",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-Mask.html#t:MonadMask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the \u003ccode\u003e\u003ca\u003eMaskingState\u003c/a\u003e\u003c/code\u003e for the current thread.\n\u003c/p\u003e",
          "module": "Control.Monad.Interface.Mask",
          "name": "getMaskingState",
          "package": "layers",
          "signature": "m MaskingState",
          "source": "src/Control-Monad-Interface-Mask.html#getMaskingState",
          "type": "method"
        },
        "index": {
          "description": "Returns the MaskingState for the current thread",
          "hierarchy": "Control Monad Interface Mask",
          "module": "Control.Monad.Interface.Mask",
          "name": "getMaskingState",
          "package": "layers",
          "partial": "Masking State",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-Mask.html#v:getMaskingState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecutes a computation with asynchronous exceptions \u003cem\u003emasked\u003c/em\u003e.  That is,\n any thread which attempts to raise an exception in the current thread with\n \u003ccode\u003e\u003ca\u003ethrowTo\u003c/a\u003e\u003c/code\u003e will be blocked until asynchronous exceptions\n are unmasked again.\n\u003c/p\u003e\u003cp\u003eThe argument passed to \u003ccode\u003e\u003ca\u003emask\u003c/a\u003e\u003c/code\u003e is a function that takes as its argument\n another function, which can be used to restore the prevailing masking state\n within the context of the masked computation. For example, a common way to\n use \u003ccode\u003e\u003ca\u003emask\u003c/a\u003e\u003c/code\u003e is to protect the acquisition of a resource:\n\u003c/p\u003e\u003cpre\u003e mask $ \\restore -\u003e do\n     x \u003c- acquire\n     restore (do_something_with x) `finally` release\n\u003c/pre\u003e\u003cp\u003eThis code guarantees that \u003ccode\u003eacquire\u003c/code\u003e is paired with \u003ccode\u003erelease\u003c/code\u003e, by masking\n asynchronous exceptions for the critical parts. (Rather than write this\n code yourself, it would be better to use \u003ccode\u003ebracket\u003c/code\u003e which abstracts the\n general pattern).\n\u003c/p\u003e\u003cp\u003eNote that the \u003ccode\u003erestore\u003c/code\u003e action passed to the argument to \u003ccode\u003emask\u003c/code\u003e does not\n necessarily unmask asynchronous exceptions, it just restores the masking\n state to that of the enclosing context. Thus if asynchronous exceptions are\n already masked, \u003ccode\u003emask\u003c/code\u003e cannot be used to unmask exceptions again. This is\n so that if you call a library function with exceptions masked, you can be\n sure that the library call will not be able to unmask exceptions again. If\n you are writing library code and need to use asynchronous exceptions, the\n only way is to create a new thread; see\n \u003ccode\u003e\u003ca\u003eforkWithUnmask\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAsynchronous exceptions may still be received while in the masked state if\n the masked thread \u003cem\u003eblocks\u003c/em\u003e in certain ways; see\n \u003ca\u003eControl.Exception\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThreads created by \u003ccode\u003e\u003ca\u003efork\u003c/a\u003e\u003c/code\u003e inherit the masked\n state from the parent; that is, to start a thread in blocked mode, use\n \u003ccode\u003emask_ $ fork ...\u003c/code\u003e.  This is particularly useful if you need to establish\n an exception handler in the forked thread before any asynchronous\n exceptions are received.\n\u003c/p\u003e",
          "module": "Control.Monad.Interface.Mask",
          "name": "mask",
          "package": "layers",
          "signature": "n a -\u003e n a) -\u003e m b) -\u003e m b",
          "source": "src/Control-Monad-Interface-Mask.html#mask",
          "type": "function"
        },
        "index": {
          "description": "Executes computation with asynchronous exceptions masked That is any thread which attempts to raise an exception in the current thread with throwTo will be blocked until asynchronous exceptions are unmasked again The argument passed to mask is function that takes as its argument another function which can be used to restore the prevailing masking state within the context of the masked computation For example common way to use mask is to protect the acquisition of resource mask restore do acquire restore do something with finally release This code guarantees that acquire is paired with release by masking asynchronous exceptions for the critical parts Rather than write this code yourself it would be better to use bracket which abstracts the general pattern Note that the restore action passed to the argument to mask does not necessarily unmask asynchronous exceptions it just restores the masking state to that of the enclosing context Thus if asynchronous exceptions are already masked mask cannot be used to unmask exceptions again This is so that if you call library function with exceptions masked you can be sure that the library call will not be able to unmask exceptions again If you are writing library code and need to use asynchronous exceptions the only way is to create new thread see forkWithUnmask Asynchronous exceptions may still be received while in the masked state if the masked thread blocks in certain ways see Control.Exception Threads created by fork inherit the masked state from the parent that is to start thread in blocked mode use mask fork This is particularly useful if you need to establish an exception handler in the forked thread before any asynchronous exceptions are received",
          "hierarchy": "Control Monad Interface Mask",
          "module": "Control.Monad.Interface.Mask",
          "name": "mask",
          "normalized": "a b-\u003ea b)-\u003ec d)-\u003ec d",
          "package": "layers",
          "signature": "n a-\u003en a)-\u003em b)-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-Mask.html#v:mask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emask\u003c/a\u003e\u003c/code\u003e, but does not pass a \u003ccode\u003erestore\u003c/code\u003e action to the argument.\n\u003c/p\u003e",
          "module": "Control.Monad.Interface.Mask",
          "name": "mask_",
          "package": "layers",
          "signature": "m a -\u003e m a",
          "source": "src/Control-Monad-Interface-Mask.html#mask_",
          "type": "function"
        },
        "index": {
          "description": "Like mask but does not pass restore action to the argument",
          "hierarchy": "Control Monad Interface Mask",
          "module": "Control.Monad.Interface.Mask",
          "name": "mask_",
          "normalized": "a b-\u003ea b",
          "package": "layers",
          "signature": "m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-Mask.html#v:mask_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the \u003ccode\u003e\u003ca\u003eMaskingState\u003c/a\u003e\u003c/code\u003e for the current thread to the given value.\n\u003c/p\u003e",
          "module": "Control.Monad.Interface.Mask",
          "name": "setMaskingState",
          "package": "layers",
          "signature": "MaskingState -\u003e m a -\u003e m a",
          "source": "src/Control-Monad-Interface-Mask.html#setMaskingState",
          "type": "method"
        },
        "index": {
          "description": "Sets the MaskingState for the current thread to the given value",
          "hierarchy": "Control Monad Interface Mask",
          "module": "Control.Monad.Interface.Mask",
          "name": "setMaskingState",
          "normalized": "MaskingState-\u003ea b-\u003ea b",
          "package": "layers",
          "partial": "Masking State",
          "signature": "MaskingState-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-Mask.html#v:setMaskingState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emask\u003c/a\u003e\u003c/code\u003e, but the masked computation is not interruptible (see\n \u003ca\u003eControl.Exception\u003c/a\u003e). THIS SHOULD BE USED WITH GREAT CARE,\n because if a thread executing in \u003ccode\u003e\u003ca\u003euninterruptibleMask\u003c/a\u003e\u003c/code\u003e blocks for any\n reason, then the thread (and possibly the program, if this is the main\n thread) will be unresponsive and unkillable. This function should only be\n necessary if you need to mask exceptions around an interruptible operation,\n and you can guarantee that the interruptible operation will only block for\n a short period of time.\n\u003c/p\u003e",
          "module": "Control.Monad.Interface.Mask",
          "name": "uninterruptibleMask",
          "package": "layers",
          "signature": "n a -\u003e n a) -\u003e m b) -\u003e m b",
          "source": "src/Control-Monad-Interface-Mask.html#uninterruptibleMask",
          "type": "function"
        },
        "index": {
          "description": "Like mask but the masked computation is not interruptible see Control.Exception THIS SHOULD BE USED WITH GREAT CARE because if thread executing in uninterruptibleMask blocks for any reason then the thread and possibly the program if this is the main thread will be unresponsive and unkillable This function should only be necessary if you need to mask exceptions around an interruptible operation and you can guarantee that the interruptible operation will only block for short period of time",
          "hierarchy": "Control Monad Interface Mask",
          "module": "Control.Monad.Interface.Mask",
          "name": "uninterruptibleMask",
          "normalized": "a b-\u003ea b)-\u003ec d)-\u003ec d",
          "package": "layers",
          "partial": "Mask",
          "signature": "n a-\u003en a)-\u003em b)-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-Mask.html#v:uninterruptibleMask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003euninterruptibleMask\u003c/a\u003e\u003c/code\u003e, but does not pass a \u003ccode\u003erestore\u003c/code\u003e action to the\n argument.\n\u003c/p\u003e",
          "module": "Control.Monad.Interface.Mask",
          "name": "uninterruptibleMask_",
          "package": "layers",
          "signature": "m a -\u003e m a",
          "source": "src/Control-Monad-Interface-Mask.html#uninterruptibleMask_",
          "type": "function"
        },
        "index": {
          "description": "Like uninterruptibleMask but does not pass restore action to the argument",
          "hierarchy": "Control Monad Interface Mask",
          "module": "Control.Monad.Interface.Mask",
          "name": "uninterruptibleMask_",
          "normalized": "a b-\u003ea b",
          "package": "layers",
          "partial": "Mask",
          "signature": "m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-Mask.html#v:uninterruptibleMask_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e The \u003ccode\u003e\u003ca\u003eMonadMutVar\u003c/a\u003e\u003c/code\u003e type class and its operations \u003ccode\u003e\u003ca\u003enewRef\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ereadRef\u003c/a\u003e\u003c/code\u003e,\n    \u003ccode\u003e\u003ca\u003ewriteRef\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eatomicModifyRef\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Instances of \u003ccode\u003e\u003ca\u003eMonadMutVar\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eSTM\u003c/a\u003e\u003c/code\u003e, strict \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e and lazy\n    \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e A universal pass-through instance of \u003ccode\u003e\u003ca\u003eMonadMutVar\u003c/a\u003e\u003c/code\u003e for any existing\n    \u003ccode\u003eMonadMutVar\u003c/code\u003e wrapped by a \u003ccode\u003e\u003ca\u003eMonadLayer\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e The utility operations \u003ccode\u003e\u003ca\u003eatomicModifyRef'\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eatomicWriteRef\u003c/a\u003e\u003c/code\u003e,\n    \u003ccode\u003e\u003ca\u003emodifyRef\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emodifyRef'\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ol\u003e\u003c/div\u003e",
          "module": "Control.Monad.Interface.MutVar",
          "name": "MutVar",
          "package": "layers",
          "source": "src/Control-Monad-Interface-MutVar.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports The MonadMutVar type class and its operations newRef readRef writeRef and atomicModifyRef Instances of MonadMutVar for IO STM strict ST and lazy ST universal pass-through instance of MonadMutVar for any existing MonadMutVar wrapped by MonadLayer The utility operations atomicModifyRef atomicWriteRef modifyRef and modifyRef",
          "hierarchy": "Control Monad Interface MutVar",
          "module": "Control.Monad.Interface.MutVar",
          "name": "MutVar",
          "package": "layers",
          "partial": "Mut Var",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-MutVar.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type class \u003ccode\u003e\u003ca\u003eMonadMutVar\u003c/a\u003e\u003c/code\u003e represents the class of monads which support\n mutable variables. The \u003ccode\u003eref\u003c/code\u003e parameter is the type of the mutable variable;\n e.g., for \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003eref\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003enewRef\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ereadRef\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ewriteRef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Interface.MutVar",
          "name": "MonadMutVar",
          "package": "layers",
          "source": "src/Control-Monad-Interface-MutVar.html#MonadMutVar",
          "type": "class"
        },
        "index": {
          "description": "The type class MonadMutVar represents the class of monads which support mutable variables The ref parameter is the type of the mutable variable e.g for IO ref is IORef Minimal complete definition newRef readRef writeRef",
          "hierarchy": "Control Monad Interface MutVar",
          "module": "Control.Monad.Interface.MutVar",
          "name": "MonadMutVar",
          "package": "layers",
          "partial": "Monad Mut Var",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-MutVar.html#t:MonadMutVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAtomically modifies the contents of a mutable variable.\n\u003c/p\u003e\u003cp\u003eThis function is useful for using mutable varibales in a safe way in a\n multithreaded program. If you only have one mutable variable, then\n using \u003ccode\u003e\u003ca\u003eatomicModifyRef\u003c/a\u003e\u003c/code\u003e to access and modify it will prevent race\n conditions.\n\u003c/p\u003e\u003cp\u003eExtending the atomicity to multiple mutable variables is problematic,\n so it is recommended that if you need to do anything more complicated\n then using \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e instead is a good idea.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eatomicModifyRef\u003c/a\u003e\u003c/code\u003e does not apply the function strictly. This is\n important to know even if all you are doing is replacing the value.\n For example, this will leak memory:\n\u003c/p\u003e\u003cpre\u003e ref \u003c- newIORef 1\n forever $ atomicModifyRef ref (\\_ -\u003e (2, ()))\n\u003c/pre\u003e\u003cp\u003eUse \u003ccode\u003e\u003ca\u003eatomicModifyRef'\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eatomicWriteRef\u003c/a\u003e\u003c/code\u003e to avoid this problem.\n\u003c/p\u003e",
          "module": "Control.Monad.Interface.MutVar",
          "name": "atomicModifyRef",
          "package": "layers",
          "signature": "ref a -\u003e (a -\u003e (a, b)) -\u003e m b",
          "source": "src/Control-Monad-Interface-MutVar.html#atomicModifyRef",
          "type": "method"
        },
        "index": {
          "description": "Atomically modifies the contents of mutable variable This function is useful for using mutable varibales in safe way in multithreaded program If you only have one mutable variable then using atomicModifyRef to access and modify it will prevent race conditions Extending the atomicity to multiple mutable variables is problematic so it is recommended that if you need to do anything more complicated then using MVar instead is good idea atomicModifyRef does not apply the function strictly This is important to know even if all you are doing is replacing the value For example this will leak memory ref newIORef forever atomicModifyRef ref Use atomicModifyRef or atomicWriteRef to avoid this problem",
          "hierarchy": "Control Monad Interface MutVar",
          "module": "Control.Monad.Interface.MutVar",
          "name": "atomicModifyRef",
          "normalized": "a b-\u003e(b-\u003e(b,c))-\u003ed c",
          "package": "layers",
          "partial": "Modify Ref",
          "signature": "ref a-\u003e(a-\u003e(a,b))-\u003em b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-MutVar.html#v:atomicModifyRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict version of \u003ccode\u003e\u003ca\u003eatomicModifyRef\u003c/a\u003e\u003c/code\u003e. This forces both the value stored in\n the mutable variable as well as the value returned.\n\u003c/p\u003e",
          "module": "Control.Monad.Interface.MutVar",
          "name": "atomicModifyRef'",
          "package": "layers",
          "signature": "ref a -\u003e (a -\u003e (a, b)) -\u003e m b",
          "source": "src/Control-Monad-Interface-MutVar.html#atomicModifyRef%27",
          "type": "function"
        },
        "index": {
          "description": "Strict version of atomicModifyRef This forces both the value stored in the mutable variable as well as the value returned",
          "hierarchy": "Control Monad Interface MutVar",
          "module": "Control.Monad.Interface.MutVar",
          "name": "atomicModifyRef'",
          "normalized": "a b-\u003e(b-\u003e(b,c))-\u003ed c",
          "package": "layers",
          "partial": "Modify Ref'",
          "signature": "ref a-\u003e(a-\u003e(a,b))-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-MutVar.html#v:atomicModifyRef-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003ewriteRef\u003c/a\u003e\u003c/code\u003e with the \"barrier to reordering\" property that\n \u003ccode\u003e\u003ca\u003eatomicModifyRef\u003c/a\u003e\u003c/code\u003e has. \n\u003c/p\u003e",
          "module": "Control.Monad.Interface.MutVar",
          "name": "atomicWriteRef",
          "package": "layers",
          "signature": "ref a -\u003e a -\u003e m ()",
          "source": "src/Control-Monad-Interface-MutVar.html#atomicWriteRef",
          "type": "function"
        },
        "index": {
          "description": "Variant of writeRef with the barrier to reordering property that atomicModifyRef has",
          "hierarchy": "Control Monad Interface MutVar",
          "module": "Control.Monad.Interface.MutVar",
          "name": "atomicWriteRef",
          "normalized": "a b-\u003eb-\u003ec()",
          "package": "layers",
          "partial": "Write Ref",
          "signature": "ref a-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-MutVar.html#v:atomicWriteRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMutate the contents of a mutable variable.\n\u003c/p\u003e\u003cp\u003eBe warned that \u003ccode\u003e\u003ca\u003emodifyRef\u003c/a\u003e\u003c/code\u003e does not apply the function strictly. This means\n if the program calls \u003ccode\u003emodifyRef\u003c/code\u003e many times, but seldomly uses the value,\n thunks will pile up in memory resulting in a space leak. This is a common\n mistake made when using a mutable varible as a counter. For example, the\n following will likely produce a stack overflow:\n\u003c/p\u003e\u003cpre\u003e ref \u003c- newRef 0\n replicateM_ 1000000 $ modifyRef ref (+1)\n readRef ref \u003e\u003e= print\n\u003c/pre\u003e\u003cp\u003eTo avoid this problem, use \u003ccode\u003e\u003ca\u003emodifyRef'\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
          "module": "Control.Monad.Interface.MutVar",
          "name": "modifyRef",
          "package": "layers",
          "signature": "ref a -\u003e (a -\u003e a) -\u003e m ()",
          "source": "src/Control-Monad-Interface-MutVar.html#modifyRef",
          "type": "function"
        },
        "index": {
          "description": "Mutate the contents of mutable variable Be warned that modifyRef does not apply the function strictly This means if the program calls modifyRef many times but seldomly uses the value thunks will pile up in memory resulting in space leak This is common mistake made when using mutable varible as counter For example the following will likely produce stack overflow ref newRef replicateM modifyRef ref readRef ref print To avoid this problem use modifyRef instead",
          "hierarchy": "Control Monad Interface MutVar",
          "module": "Control.Monad.Interface.MutVar",
          "name": "modifyRef",
          "normalized": "a b-\u003e(b-\u003eb)-\u003ec()",
          "package": "layers",
          "partial": "Ref",
          "signature": "ref a-\u003e(a-\u003ea)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-MutVar.html#v:modifyRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict version of \u003ccode\u003e\u003ca\u003emodifyRef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Interface.MutVar",
          "name": "modifyRef'",
          "package": "layers",
          "signature": "ref a -\u003e (a -\u003e a) -\u003e m ()",
          "source": "src/Control-Monad-Interface-MutVar.html#modifyRef%27",
          "type": "function"
        },
        "index": {
          "description": "Strict version of modifyRef",
          "hierarchy": "Control Monad Interface MutVar",
          "module": "Control.Monad.Interface.MutVar",
          "name": "modifyRef'",
          "normalized": "a b-\u003e(b-\u003eb)-\u003ec()",
          "package": "layers",
          "partial": "Ref'",
          "signature": "ref a-\u003e(a-\u003ea)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-MutVar.html#v:modifyRef-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new mutable variable holding the value supplied.\n\u003c/p\u003e",
          "module": "Control.Monad.Interface.MutVar",
          "name": "newRef",
          "package": "layers",
          "signature": "a -\u003e m (ref a)",
          "source": "src/Control-Monad-Interface-MutVar.html#newRef",
          "type": "method"
        },
        "index": {
          "description": "Create new mutable variable holding the value supplied",
          "hierarchy": "Control Monad Interface MutVar",
          "module": "Control.Monad.Interface.MutVar",
          "name": "newRef",
          "normalized": "a-\u003eb(c a)",
          "package": "layers",
          "partial": "Ref",
          "signature": "a-\u003em(ref a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-MutVar.html#v:newRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the current value stored in the mutable variable.\n\u003c/p\u003e",
          "module": "Control.Monad.Interface.MutVar",
          "name": "readRef",
          "package": "layers",
          "signature": "ref a -\u003e m a",
          "source": "src/Control-Monad-Interface-MutVar.html#readRef",
          "type": "method"
        },
        "index": {
          "description": "Return the current value stored in the mutable variable",
          "hierarchy": "Control Monad Interface MutVar",
          "module": "Control.Monad.Interface.MutVar",
          "name": "readRef",
          "normalized": "a b-\u003ec b",
          "package": "layers",
          "partial": "Ref",
          "signature": "ref a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-MutVar.html#v:readRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite the supplied value into the mutable variable \n\u003c/p\u003e",
          "module": "Control.Monad.Interface.MutVar",
          "name": "writeRef",
          "package": "layers",
          "signature": "ref a -\u003e a -\u003e m ()",
          "source": "src/Control-Monad-Interface-MutVar.html#writeRef",
          "type": "method"
        },
        "index": {
          "description": "Write the supplied value into the mutable variable",
          "hierarchy": "Control Monad Interface MutVar",
          "module": "Control.Monad.Interface.MutVar",
          "name": "writeRef",
          "normalized": "a b-\u003eb-\u003ec()",
          "package": "layers",
          "partial": "Ref",
          "signature": "ref a-\u003ea-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-MutVar.html#v:writeRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e The \u003ccode\u003e\u003ca\u003eMonadRWS\u003c/a\u003e\u003c/code\u003e interface.\n\u003c/li\u003e\u003cli\u003e The \u003ca\u003eControl.Monad.Interface.Reader\u003c/a\u003e module.\n\u003c/li\u003e\u003cli\u003e The \u003ca\u003eControl.Monad.Interface.State\u003c/a\u003e module.\n\u003c/li\u003e\u003cli\u003e The \u003ca\u003eControl.Monad.Interface.Writer\u003c/a\u003e module.\n\u003c/li\u003e\u003c/ol\u003e\u003c/div\u003e",
          "module": "Control.Monad.Interface.RWS",
          "name": "RWS",
          "package": "layers",
          "source": "src/Control-Monad-Interface-RWS.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports The MonadRWS interface The Control.Monad.Interface.Reader module The Control.Monad.Interface.State module The Control.Monad.Interface.Writer module",
          "hierarchy": "Control Monad Interface RWS",
          "module": "Control.Monad.Interface.RWS",
          "name": "RWS",
          "package": "layers",
          "partial": "RWS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-RWS.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMonadRWS\u003c/a\u003e\u003c/code\u003e interface is defined as a type synonym (using\n the \u003ccode\u003eConstraintKinds\u003c/code\u003e extension) for the combination of \u003ccode\u003e\u003ca\u003eMonadReader\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eMonadState\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eMonadWriter\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Interface.RWS",
          "name": "MonadRWS",
          "package": "layers",
          "source": "src/Control-Monad-Interface-RWS.html#MonadRWS",
          "type": "type"
        },
        "index": {
          "description": "The MonadRWS interface is defined as type synonym using the ConstraintKinds extension for the combination of MonadReader MonadState and MonadWriter",
          "hierarchy": "Control Monad Interface RWS",
          "module": "Control.Monad.Interface.RWS",
          "name": "MonadRWS",
          "package": "layers",
          "partial": "Monad RWS",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-RWS.html#t:MonadRWS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e The \u003ccode\u003e\u003ca\u003eMonadReader\u003c/a\u003e\u003c/code\u003e type class and its operations \u003ccode\u003e\u003ca\u003ereader\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eask\u003c/a\u003e\u003c/code\u003e and\n    \u003ccode\u003e\u003ca\u003elocal\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e An instance of \u003ccode\u003e\u003ca\u003eMonadReader\u003c/a\u003e\u003c/code\u003e for the \u003ccode\u003e-\u003e\u003c/code\u003e type.\n\u003c/li\u003e\u003cli\u003e Instances of \u003ccode\u003e\u003ca\u003eMonadReader\u003c/a\u003e\u003c/code\u003e for the relevant monad transformers from the\n    \u003ccode\u003etransformers\u003c/code\u003e package (ReaderT', lazy \u003ccode\u003e\u003ca\u003eRWST\u003c/a\u003e\u003c/code\u003e and strict \u003ccode\u003e\u003ca\u003eRWST\u003c/a\u003e\u003c/code\u003e).\n\u003c/li\u003e\u003cli\u003e A universal pass-through instance of \u003ccode\u003e\u003ca\u003eMonadReader\u003c/a\u003e\u003c/code\u003e for any existing\n    \u003ccode\u003eMonadReader\u003c/code\u003e wrapped by a \u003ccode\u003e\u003ca\u003eMonadLayer\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e The utility operations \u003ccode\u003e\u003ca\u003easks\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ol\u003e\u003c/div\u003e",
          "module": "Control.Monad.Interface.Reader",
          "name": "Reader",
          "package": "layers",
          "source": "src/Control-Monad-Interface-Reader.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports The MonadReader type class and its operations reader ask and local An instance of MonadReader for the type Instances of MonadReader for the relevant monad transformers from the transformers package ReaderT lazy RWST and strict RWST universal pass-through instance of MonadReader for any existing MonadReader wrapped by MonadLayer The utility operations asks",
          "hierarchy": "Control Monad Interface Reader",
          "module": "Control.Monad.Interface.Reader",
          "name": "Reader",
          "package": "layers",
          "partial": "Reader",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-Reader.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe 'MonadReader interface monad represents computations which can read\n values from a shared environment, pass values from function to function\n and execute sub-computations in a modified environment. Using the \n \u003ccode\u003eMonadReader\u003c/code\u003e interface for such computations is often clearer and easier\n than using the \u003ccode\u003e\u003ca\u003eMonadState\u003c/a\u003e\u003c/code\u003e interface.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003elocal\u003c/a\u003e\u003c/code\u003e and one of either \u003ccode\u003e\u003ca\u003ereader\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eask\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Interface.Reader",
          "name": "MonadReader",
          "package": "layers",
          "source": "src/Control-Monad-Interface-Reader.html#MonadReader",
          "type": "class"
        },
        "index": {
          "description": "The MonadReader interface monad represents computations which can read values from shared environment pass values from function to function and execute sub-computations in modified environment Using the MonadReader interface for such computations is often clearer and easier than using the MonadState interface Minimal complete definition local and one of either reader or ask",
          "hierarchy": "Control Monad Interface Reader",
          "module": "Control.Monad.Interface.Reader",
          "name": "MonadReader",
          "package": "layers",
          "partial": "Monad Reader",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-Reader.html#t:MonadReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves the monad environment.\n\u003c/p\u003e",
          "module": "Control.Monad.Interface.Reader",
          "name": "ask",
          "package": "layers",
          "signature": "m r",
          "source": "src/Control-Monad-Interface-Reader.html#ask",
          "type": "method"
        },
        "index": {
          "description": "Retrieves the monad environment",
          "hierarchy": "Control Monad Interface Reader",
          "module": "Control.Monad.Interface.Reader",
          "name": "ask",
          "package": "layers",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-Reader.html#v:ask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves a function of the current environment.\n\u003c/p\u003e",
          "module": "Control.Monad.Interface.Reader",
          "name": "asks",
          "package": "layers",
          "signature": "(r -\u003e a) -\u003e m a",
          "source": "src/Control-Monad-Interface-Reader.html#asks",
          "type": "function"
        },
        "index": {
          "description": "Retrieves function of the current environment",
          "hierarchy": "Control Monad Interface Reader",
          "module": "Control.Monad.Interface.Reader",
          "name": "asks",
          "normalized": "(a-\u003eb)-\u003ec b",
          "package": "layers",
          "signature": "(r-\u003ea)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-Reader.html#v:asks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecutes a computation in a modified environment.\n\u003c/p\u003e",
          "module": "Control.Monad.Interface.Reader",
          "name": "local",
          "package": "layers",
          "signature": "(r -\u003e r) -\u003e m a -\u003e m a",
          "source": "src/Control-Monad-Interface-Reader.html#local",
          "type": "method"
        },
        "index": {
          "description": "Executes computation in modified environment",
          "hierarchy": "Control Monad Interface Reader",
          "module": "Control.Monad.Interface.Reader",
          "name": "local",
          "normalized": "(a-\u003ea)-\u003eb c-\u003eb c",
          "package": "layers",
          "signature": "(r-\u003er)-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-Reader.html#v:local"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmbed a simple reader action into the monad.\n\u003c/p\u003e",
          "module": "Control.Monad.Interface.Reader",
          "name": "reader",
          "package": "layers",
          "signature": "(r -\u003e a) -\u003e m a",
          "source": "src/Control-Monad-Interface-Reader.html#reader",
          "type": "method"
        },
        "index": {
          "description": "Embed simple reader action into the monad",
          "hierarchy": "Control Monad Interface Reader",
          "module": "Control.Monad.Interface.Reader",
          "name": "reader",
          "normalized": "(a-\u003eb)-\u003ec b",
          "package": "layers",
          "signature": "(r-\u003ea)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-Reader.html#v:reader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e The \u003ccode\u003e\u003ca\u003eMonadState\u003c/a\u003e\u003c/code\u003e type class and its operations \u003ccode\u003e\u003ca\u003estate\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e and\n    \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Instances of \u003ccode\u003e\u003ca\u003eMonadState\u003c/a\u003e\u003c/code\u003e for the relevant monad transformers from the\n    \u003ccode\u003etransformers\u003c/code\u003e package (lazy \u003ccode\u003e\u003ca\u003eStateT\u003c/a\u003e\u003c/code\u003e, strict \u003ccode\u003e\u003ca\u003eStateT\u003c/a\u003e\u003c/code\u003e, lazy \u003ccode\u003e\u003ca\u003eRWST\u003c/a\u003e\u003c/code\u003e\n    and strict \u003ccode\u003e\u003ca\u003eRWST\u003c/a\u003e\u003c/code\u003e).\n\u003c/li\u003e\u003cli\u003e A universal pass-through instance of \u003ccode\u003e\u003ca\u003eMonadState\u003c/a\u003e\u003c/code\u003e for any existing\n    \u003ccode\u003eMonadState\u003c/code\u003e wrapped by a \u003ccode\u003e\u003ca\u003eMonadLayer\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e The utility operations \u003ccode\u003e\u003ca\u003emodify\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003egets\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ol\u003e\u003c/div\u003e",
          "module": "Control.Monad.Interface.State",
          "name": "State",
          "package": "layers",
          "source": "src/Control-Monad-Interface-State.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports The MonadState type class and its operations state get and put Instances of MonadState for the relevant monad transformers from the transformers package lazy StateT strict StateT lazy RWST and strict RWST universal pass-through instance of MonadState for any existing MonadState wrapped by MonadLayer The utility operations modify and gets",
          "hierarchy": "Control Monad Interface State",
          "module": "Control.Monad.Interface.State",
          "name": "State",
          "package": "layers",
          "partial": "State",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-State.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pure functional language cannot update values in place because it\n violates referential transparency. A common idiom to simulate such stateful\n computations is to \"thread\" a state parameter through a sequence of\n functions:\n\u003c/p\u003e\u003cp\u003eThis approach works, but such code can be error-prone, messy and difficult\n to maintain. The \u003ccode\u003e\u003ca\u003eMonadState\u003c/a\u003e\u003c/code\u003e interface hides the threading of the state\n parameter inside the binding operation, simultaneously making the code\n easier to write, easier to read and easier to modify. \n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003estate\u003c/a\u003e\u003c/code\u003e or both \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Interface.State",
          "name": "MonadState",
          "package": "layers",
          "source": "src/Control-Monad-Interface-State.html#MonadState",
          "type": "class"
        },
        "index": {
          "description": "pure functional language cannot update values in place because it violates referential transparency common idiom to simulate such stateful computations is to thread state parameter through sequence of functions This approach works but such code can be error-prone messy and difficult to maintain The MonadState interface hides the threading of the state parameter inside the binding operation simultaneously making the code easier to write easier to read and easier to modify Minimal complete definition state or both get and put",
          "hierarchy": "Control Monad Interface State",
          "module": "Control.Monad.Interface.State",
          "name": "MonadState",
          "package": "layers",
          "partial": "Monad State",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-State.html#t:MonadState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the state from the internals of the monad.\n\u003c/p\u003e",
          "module": "Control.Monad.Interface.State",
          "name": "get",
          "package": "layers",
          "signature": "m s",
          "source": "src/Control-Monad-Interface-State.html#get",
          "type": "method"
        },
        "index": {
          "description": "Return the state from the internals of the monad",
          "hierarchy": "Control Monad Interface State",
          "module": "Control.Monad.Interface.State",
          "name": "get",
          "package": "layers",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-State.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets specific component of the state, using a projection function\n supplied.\n\u003c/p\u003e",
          "module": "Control.Monad.Interface.State",
          "name": "gets",
          "package": "layers",
          "signature": "(s -\u003e a) -\u003e m a",
          "source": "src/Control-Monad-Interface-State.html#gets",
          "type": "function"
        },
        "index": {
          "description": "Gets specific component of the state using projection function supplied",
          "hierarchy": "Control Monad Interface State",
          "module": "Control.Monad.Interface.State",
          "name": "gets",
          "normalized": "(a-\u003eb)-\u003ec b",
          "package": "layers",
          "signature": "(s-\u003ea)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-State.html#v:gets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic state transformer.\n\u003c/p\u003e\u003cp\u003eMaps an old state to a new state inside a state monad. The old state is\n thrown away.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:t modify ((+1) :: Int -\u003e Int)\n\u003c/code\u003e\u003c/strong\u003emodify (...) :: (MonadState Int a) =\u003e a ()\n\u003c/pre\u003e\u003cp\u003eThis says that \u003ccode\u003emodify (+1)\u003c/code\u003e acts over any \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e that is a member of the\n \u003ccode\u003e\u003ca\u003eMonadState\u003c/a\u003e\u003c/code\u003e class with an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e state.\n\u003c/p\u003e",
          "module": "Control.Monad.Interface.State",
          "name": "modify",
          "package": "layers",
          "signature": "(s -\u003e s) -\u003e m ()",
          "source": "src/Control-Monad-Interface-State.html#modify",
          "type": "function"
        },
        "index": {
          "description": "Monadic state transformer Maps an old state to new state inside state monad The old state is thrown away modify Int Int modify MonadState Int This says that modify acts over any Monad that is member of the MonadState class with an Int state",
          "hierarchy": "Control Monad Interface State",
          "module": "Control.Monad.Interface.State",
          "name": "modify",
          "normalized": "(a-\u003ea)-\u003eb()",
          "package": "layers",
          "signature": "(s-\u003es)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-State.html#v:modify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace the state inside the monad.\n\u003c/p\u003e",
          "module": "Control.Monad.Interface.State",
          "name": "put",
          "package": "layers",
          "signature": "s -\u003e m ()",
          "source": "src/Control-Monad-Interface-State.html#put",
          "type": "method"
        },
        "index": {
          "description": "Replace the state inside the monad",
          "hierarchy": "Control Monad Interface State",
          "module": "Control.Monad.Interface.State",
          "name": "put",
          "normalized": "a-\u003eb()",
          "package": "layers",
          "signature": "s-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-State.html#v:put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmbed a simple state action into the monad.\n\u003c/p\u003e",
          "module": "Control.Monad.Interface.State",
          "name": "state",
          "package": "layers",
          "signature": "(s -\u003e (a, s)) -\u003e m a",
          "source": "src/Control-Monad-Interface-State.html#state",
          "type": "method"
        },
        "index": {
          "description": "Embed simple state action into the monad",
          "hierarchy": "Control Monad Interface State",
          "module": "Control.Monad.Interface.State",
          "name": "state",
          "normalized": "(a-\u003e(b,a))-\u003ec b",
          "package": "layers",
          "signature": "(s-\u003e(a,s))-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-State.html#v:state"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e The \u003ccode\u003e\u003ca\u003eMonadTry\u003c/a\u003e\u003c/code\u003e type class and its operation \u003ccode\u003e\u003ca\u003emtry\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Instances of \u003ccode\u003e\u003ca\u003eMonadTry\u003c/a\u003e\u003c/code\u003e for all the base monads in the \u003ccode\u003ebase\u003c/code\u003e and\n    \u003ccode\u003etransformers\u003c/code\u003e packages.\n\u003c/li\u003e\u003cli\u003e A universal pass-through instance of \u003ccode\u003e\u003ca\u003eMonadMask\u003c/a\u003e\u003c/code\u003e for any existing\n    \u003ccode\u003eMonadMask\u003c/code\u003e wrapped by a \u003ccode\u003e\u003ca\u003eMonadLayerControl\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e The utility operations \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ebracket_\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ebracketOnError\u003c/a\u003e\u003c/code\u003e,\n    \u003ccode\u003e\u003ca\u003efinally\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eonException\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ol\u003e\u003c/div\u003e",
          "module": "Control.Monad.Interface.Try",
          "name": "Try",
          "package": "layers",
          "source": "src/Control-Monad-Interface-Try.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports The MonadTry type class and its operation mtry Instances of MonadTry for all the base monads in the base and transformers packages universal pass-through instance of MonadMask for any existing MonadMask wrapped by MonadLayerControl The utility operations bracket bracket bracketOnError finally and onException",
          "hierarchy": "Control Monad Interface Try",
          "module": "Control.Monad.Interface.Try",
          "name": "Try",
          "package": "layers",
          "partial": "Try",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-Try.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMonadTry\u003c/a\u003e\u003c/code\u003e type class provides a single operation \u003ccode\u003e\u003ca\u003emtry\u003c/a\u003e\u003c/code\u003e, which is a\n way to observe short-circuiting in monads. The name refers to the fact that\n \u003ccode\u003emtry\u003c/code\u003e is a generalised version of \u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e:\n whereas \u003ccode\u003etry\u003c/code\u003e guards against the specific case of a\n \u003ccode\u003e\u003ca\u003eMonadException\u003c/a\u003e\u003c/code\u003e short-circuiting due to\n an exception being thrown, it can still short-circuit in other ways: e.g.,\n if a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMaybeT\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e returns\n \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e). The action returned by \u003ccode\u003e\u003ca\u003emtry\u003c/a\u003e\u003c/code\u003e is\n guaranteed to never short-circuit.\n\u003c/p\u003e\u003cp\u003eNearly every monad should have an instance of \u003ccode\u003eMonadTry\u003c/code\u003e, with the\n exception of CPS-style monads whose (possible) short-circuiting is\n impossible to observe. Instances for every base monad in the \u003ccode\u003ebase\u003c/code\u003e and\n \u003ccode\u003etransformers\u003c/code\u003e packages. \u003ccode\u003emtry\u003c/code\u003e has a default definition that only needs\n to be overridden for monads which actually short-circuit, so it costs\n very little to add an instance of \u003ccode\u003eMonadTry\u003c/code\u003e to a monad.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: instance head only.\n\u003c/p\u003e",
          "module": "Control.Monad.Interface.Try",
          "name": "MonadTry",
          "package": "layers",
          "source": "src/Control-Monad-Interface-Try.html#MonadTry",
          "type": "class"
        },
        "index": {
          "description": "The MonadTry type class provides single operation mtry which is way to observe short-circuiting in monads The name refers to the fact that mtry is generalised version of try whereas try guards against the specific case of MonadException short-circuiting due to an exception being thrown it can still short-circuit in other ways e.g if MaybeT IO returns mzero Nothing The action returned by mtry is guaranteed to never short-circuit Nearly every monad should have an instance of MonadTry with the exception of CPS-style monads whose possible short-circuiting is impossible to observe Instances for every base monad in the base and transformers packages mtry has default definition that only needs to be overridden for monads which actually short-circuit so it costs very little to add an instance of MonadTry to monad Minimal complete definition instance head only",
          "hierarchy": "Control Monad Interface Try",
          "module": "Control.Monad.Interface.Try",
          "name": "MonadTry",
          "package": "layers",
          "partial": "Monad Try",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-Try.html#t:MonadTry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen you want to acquire a resource, do some work with it, and then\n release the resource, it is a good idea to use \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e, because \u003ccode\u003ebracket\u003c/code\u003e\n will install the necessary handler to release the resource in the event\n that the monad short circuits during the computation. If the monad\n short-circuits, then \u003ccode\u003ebracket\u003c/code\u003e will re-return the monad in its\n short-circuited state (after performing the release).\n\u003c/p\u003e\u003cp\u003eA common example is opening a file:\n\u003c/p\u003e\u003cpre\u003e bracket\n   (openFile \"filename\" ReadMode)\n   (hClose)\n   (\\fileHandle -\u003e do { ... })\n\u003c/pre\u003e\u003cp\u003eThe arguments to \u003ccode\u003ebracket\u003c/code\u003e are in this order so that we can partially apply\n it, e.g.:\n\u003c/p\u003e\u003cpre\u003e withFile name mode = bracket (openFile name mode) hClose\n\u003c/pre\u003e",
          "module": "Control.Monad.Interface.Try",
          "name": "bracket",
          "package": "layers",
          "signature": "m a-\u003e (a -\u003e m b)-\u003e (a -\u003e m c)-\u003e m c",
          "type": "function"
        },
        "index": {
          "description": "When you want to acquire resource do some work with it and then release the resource it is good idea to use bracket because bracket will install the necessary handler to release the resource in the event that the monad short circuits during the computation If the monad short-circuits then bracket will re-return the monad in its short-circuited state after performing the release common example is opening file bracket openFile filename ReadMode hClose fileHandle do The arguments to bracket are in this order so that we can partially apply it e.g withFile name mode bracket openFile name mode hClose",
          "hierarchy": "Control Monad Interface Try",
          "module": "Control.Monad.Interface.Try",
          "name": "bracket",
          "normalized": "a b-\u003e(b-\u003ea c)-\u003e(b-\u003ea d)-\u003ea d",
          "package": "layers",
          "signature": "m a-\u003e(a-\u003em b)-\u003e(a-\u003em c)-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-Try.html#v:bracket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e, but only performs the final action if the monad\n short-circuited during the in-between computation.\n\u003c/p\u003e",
          "module": "Control.Monad.Interface.Try",
          "name": "bracketOnError",
          "package": "layers",
          "signature": "m a -\u003e (a -\u003e m b) -\u003e (a -\u003e m c) -\u003e m c",
          "source": "src/Control-Monad-Interface-Try.html#bracketOnError",
          "type": "function"
        },
        "index": {
          "description": "Like bracket but only performs the final action if the monad short-circuited during the in-between computation",
          "hierarchy": "Control Monad Interface Try",
          "module": "Control.Monad.Interface.Try",
          "name": "bracketOnError",
          "normalized": "a b-\u003e(b-\u003ea c)-\u003e(b-\u003ea d)-\u003ea d",
          "package": "layers",
          "partial": "On Error",
          "signature": "m a-\u003e(a-\u003em b)-\u003e(a-\u003em c)-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-Try.html#v:bracketOnError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e where the return value from the first computation\n is not required.\n\u003c/p\u003e",
          "module": "Control.Monad.Interface.Try",
          "name": "bracket_",
          "package": "layers",
          "signature": "m a -\u003e m b -\u003e m c -\u003e m c",
          "source": "src/Control-Monad-Interface-Try.html#bracket_",
          "type": "function"
        },
        "index": {
          "description": "variant of bracket where the return value from the first computation is not required",
          "hierarchy": "Control Monad Interface Try",
          "module": "Control.Monad.Interface.Try",
          "name": "bracket_",
          "normalized": "a b-\u003ea c-\u003ea d-\u003ea d",
          "package": "layers",
          "signature": "m a-\u003em b-\u003em c-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-Try.html#v:bracket_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specialised variant of \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e with just a computation to run\n afterward.\n\u003c/p\u003e",
          "module": "Control.Monad.Interface.Try",
          "name": "finally",
          "package": "layers",
          "signature": "m a -\u003e m b -\u003e m a",
          "source": "src/Control-Monad-Interface-Try.html#finally",
          "type": "function"
        },
        "index": {
          "description": "specialised variant of bracket with just computation to run afterward",
          "hierarchy": "Control Monad Interface Try",
          "module": "Control.Monad.Interface.Try",
          "name": "finally",
          "normalized": "a b-\u003ea c-\u003ea b",
          "package": "layers",
          "signature": "m a-\u003em b-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-Try.html#v:finally"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emtry\u003c/a\u003e\u003c/code\u003e takes a monadic action in \u003ccode\u003em\u003c/code\u003e and returns a new monadic value\n in \u003ccode\u003em\u003c/code\u003e which is guaranteed not to short-circuit. If the action \u003ccode\u003em\u003c/code\u003e that\n was given to \u003ccode\u003emtry\u003c/code\u003e would have short-circuited, it returns \u003ccode\u003eLeft m\u003c/code\u003e,\n otherwise it returns \u003ccode\u003eRight a\u003c/code\u003e, where \u003ccode\u003ea\u003c/code\u003e is the value returned by the\n computation \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Interface.Try",
          "name": "mtry",
          "package": "layers",
          "signature": "m a -\u003e m (Either (m a) a)",
          "source": "src/Control-Monad-Interface-Try.html#mtry",
          "type": "method"
        },
        "index": {
          "description": "mtry takes monadic action in and returns new monadic value in which is guaranteed not to short-circuit If the action that was given to mtry would have short-circuited it returns Left otherwise it returns Right where is the value returned by the computation",
          "hierarchy": "Control Monad Interface Try",
          "module": "Control.Monad.Interface.Try",
          "name": "mtry",
          "normalized": "a b-\u003ea(Either(a b)b)",
          "package": "layers",
          "signature": "m a-\u003em(Either(m a)a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-Try.html#v:mtry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efinally\u003c/a\u003e\u003c/code\u003e, but only performs the final action if the monad\n short-circuited during the computation.\n\u003c/p\u003e",
          "module": "Control.Monad.Interface.Try",
          "name": "onException",
          "package": "layers",
          "signature": "m a -\u003e m b -\u003e m a",
          "source": "src/Control-Monad-Interface-Try.html#onException",
          "type": "function"
        },
        "index": {
          "description": "Like finally but only performs the final action if the monad short-circuited during the computation",
          "hierarchy": "Control Monad Interface Try",
          "module": "Control.Monad.Interface.Try",
          "name": "onException",
          "normalized": "a b-\u003ea c-\u003ea b",
          "package": "layers",
          "partial": "Exception",
          "signature": "m a-\u003em b-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-Try.html#v:onException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e The \u003ccode\u003e\u003ca\u003eMonadWriter\u003c/a\u003e\u003c/code\u003e type class and its operations \u003ccode\u003e\u003ca\u003ewriter\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003etell\u003c/a\u003e\u003c/code\u003e,\n    \u003ccode\u003e\u003ca\u003elisten\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003epass\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Instances of \u003ccode\u003e\u003ca\u003eMonadWriter\u003c/a\u003e\u003c/code\u003e for the relevant monad transformers from the\n    \u003ccode\u003etransformers\u003c/code\u003e package (lazy \u003ccode\u003e\u003ca\u003eWriterT\u003c/a\u003e\u003c/code\u003e, strict \u003ccode\u003e\u003ca\u003eWriterT\u003c/a\u003e\u003c/code\u003e, lazy \u003ccode\u003e\u003ca\u003eRWST\u003c/a\u003e\u003c/code\u003e\n    and strict \u003ccode\u003e\u003ca\u003eRWST\u003c/a\u003e\u003c/code\u003e).\n\u003c/li\u003e\u003cli\u003e A universal pass-through instance of \u003ccode\u003e\u003ca\u003eMonadWriter\u003c/a\u003e\u003c/code\u003e for any existing\n    \u003ccode\u003eMonadWriter\u003c/code\u003e wrapped by a \u003ccode\u003e\u003ca\u003eMonadLayer\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e The utility operations \u003ccode\u003e\u003ca\u003elistens\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ecensor\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ol\u003e\u003c/div\u003e",
          "module": "Control.Monad.Interface.Writer",
          "name": "Writer",
          "package": "layers",
          "source": "src/Control-Monad-Interface-Writer.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports The MonadWriter type class and its operations writer tell listen and pass Instances of MonadWriter for the relevant monad transformers from the transformers package lazy WriterT strict WriterT lazy RWST and strict RWST universal pass-through instance of MonadWriter for any existing MonadWriter wrapped by MonadLayer The utility operations listens and censor",
          "hierarchy": "Control Monad Interface Writer",
          "module": "Control.Monad.Interface.Writer",
          "name": "Writer",
          "package": "layers",
          "partial": "Writer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-Writer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIt is often desirable for a computation to generate output \"on the\n side\". Logging and tracing are the most common examples in which data is\n generated during a computation that we want to retain but is not the\n primary result of the computation.\n\u003c/p\u003e\u003cp\u003eExplicitly managing the logging or tracing data can clutter up the code and\n invite subtle bugs such as missed log entries. The \u003ccode\u003e\u003ca\u003eMonadWriter\u003c/a\u003e\u003c/code\u003e interface\n provides a cleaner way to manage the output without cluttering the main\n computation.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003elisten\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epass\u003c/a\u003e\u003c/code\u003e and one of either \u003ccode\u003e\u003ca\u003ewriter\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003etell\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Interface.Writer",
          "name": "MonadWriter",
          "package": "layers",
          "source": "src/Control-Monad-Interface-Writer.html#MonadWriter",
          "type": "class"
        },
        "index": {
          "description": "It is often desirable for computation to generate output on the side Logging and tracing are the most common examples in which data is generated during computation that we want to retain but is not the primary result of the computation Explicitly managing the logging or tracing data can clutter up the code and invite subtle bugs such as missed log entries The MonadWriter interface provides cleaner way to manage the output without cluttering the main computation Minimal complete definition listen pass and one of either writer or tell",
          "hierarchy": "Control Monad Interface Writer",
          "module": "Control.Monad.Interface.Writer",
          "name": "MonadWriter",
          "package": "layers",
          "partial": "Monad Writer",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-Writer.html#t:MonadWriter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ecensor\u003c/a\u003e\u003c/code\u003e f m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e and\n applies the function \u003ccode\u003ef\u003c/code\u003e to its output, leaving the return value\n unchanged.\n\u003c/p\u003e\u003cpre\u003e censor f m = pass (liftM (\\a -\u003e (a,f)) m)\n\u003c/pre\u003e",
          "module": "Control.Monad.Interface.Writer",
          "name": "censor",
          "package": "layers",
          "signature": "(w -\u003e w) -\u003e m a -\u003e m a",
          "source": "src/Control-Monad-Interface-Writer.html#censor",
          "type": "function"
        },
        "index": {
          "description": "censor is an action that executes the action and applies the function to its output leaving the return value unchanged censor pass liftM",
          "hierarchy": "Control Monad Interface Writer",
          "module": "Control.Monad.Interface.Writer",
          "name": "censor",
          "normalized": "(a-\u003ea)-\u003eb c-\u003eb c",
          "package": "layers",
          "signature": "(w-\u003ew)-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-Writer.html#v:censor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003elisten\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e and adds its\n output to the value of the computation.\n\u003c/p\u003e",
          "module": "Control.Monad.Interface.Writer",
          "name": "listen",
          "package": "layers",
          "signature": "m a -\u003e m (a, w)",
          "source": "src/Control-Monad-Interface-Writer.html#listen",
          "type": "method"
        },
        "index": {
          "description": "listen is an action that executes the action and adds its output to the value of the computation",
          "hierarchy": "Control Monad Interface Writer",
          "module": "Control.Monad.Interface.Writer",
          "name": "listen",
          "normalized": "a b-\u003ea(b,c)",
          "package": "layers",
          "signature": "m a-\u003em(a,w)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-Writer.html#v:listen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003elistens\u003c/a\u003e\u003c/code\u003e f m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e and adds the\n result of applying \u003ccode\u003ef\u003c/code\u003e to the output to the value of the computation.\n\u003c/p\u003e\u003cpre\u003e listens f m = liftM (\\(~(a, w)) -\u003e (a, f w)) (listen m)\n\u003c/pre\u003e",
          "module": "Control.Monad.Interface.Writer",
          "name": "listens",
          "package": "layers",
          "signature": "(w -\u003e b) -\u003e m a -\u003e m (a, b)",
          "source": "src/Control-Monad-Interface-Writer.html#listens",
          "type": "function"
        },
        "index": {
          "description": "listens is an action that executes the action and adds the result of applying to the output to the value of the computation listens liftM listen",
          "hierarchy": "Control Monad Interface Writer",
          "module": "Control.Monad.Interface.Writer",
          "name": "listens",
          "normalized": "(a-\u003eb)-\u003ec d-\u003ec(d,b)",
          "package": "layers",
          "signature": "(w-\u003eb)-\u003em a-\u003em(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-Writer.html#v:listens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003epass\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e, which returns a\n value and a function, and returns the value, applying the function to\n the output.\n\u003c/p\u003e",
          "module": "Control.Monad.Interface.Writer",
          "name": "pass",
          "package": "layers",
          "signature": "m (a, w -\u003e w) -\u003e m a",
          "source": "src/Control-Monad-Interface-Writer.html#pass",
          "type": "method"
        },
        "index": {
          "description": "pass is an action that executes the action which returns value and function and returns the value applying the function to the output",
          "hierarchy": "Control Monad Interface Writer",
          "module": "Control.Monad.Interface.Writer",
          "name": "pass",
          "normalized": "a(b,c-\u003ec)-\u003ea b",
          "package": "layers",
          "signature": "m(a,w-\u003ew)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-Writer.html#v:pass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003etell\u003c/a\u003e\u003c/code\u003e w\u003c/code\u003e is an action that produces the output \u003ccode\u003ew\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Interface.Writer",
          "name": "tell",
          "package": "layers",
          "signature": "w -\u003e m ()",
          "source": "src/Control-Monad-Interface-Writer.html#tell",
          "type": "method"
        },
        "index": {
          "description": "tell is an action that produces the output",
          "hierarchy": "Control Monad Interface Writer",
          "module": "Control.Monad.Interface.Writer",
          "name": "tell",
          "normalized": "a-\u003eb()",
          "package": "layers",
          "signature": "w-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-Writer.html#v:tell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ewriter\u003c/a\u003e\u003c/code\u003e (a,w)\u003c/code\u003e embeds a simple writer action.\n\u003c/p\u003e",
          "module": "Control.Monad.Interface.Writer",
          "name": "writer",
          "package": "layers",
          "signature": "(a, w) -\u003e m a",
          "source": "src/Control-Monad-Interface-Writer.html#writer",
          "type": "method"
        },
        "index": {
          "description": "writer embeds simple writer action",
          "hierarchy": "Control Monad Interface Writer",
          "module": "Control.Monad.Interface.Writer",
          "name": "writer",
          "normalized": "(a,b)-\u003ec a",
          "package": "layers",
          "signature": "(a,w)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Interface-Writer.html#v:writer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is the core of the \u003ccode\u003elayers\u003c/code\u003e package. It exports:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e The type classes \u003ccode\u003e\u003ca\u003eMonadLayer\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eMonadLayerFunctor\u003c/a\u003e\u003c/code\u003e and\n    \u003ccode\u003e\u003ca\u003eMonadLayerControl\u003c/a\u003e\u003c/code\u003e and instances of these classes for the transformers in\n    the \u003ccode\u003etransformers\u003c/code\u003e package.\n\u003c/li\u003e\u003cli\u003e The type classes \u003ccode\u003e\u003ca\u003eMonadTrans\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eMonadTransFunctor\u003c/a\u003e\u003c/code\u003e and\n    \u003ccode\u003e\u003ca\u003eMonadTransControl\u003c/a\u003e\u003c/code\u003e and instances of these classes for the transformers in\n    the \u003ccode\u003etransformers\u003c/code\u003e package.\n\u003c/li\u003e\u003cli\u003e The type classes \u003ccode\u003e\u003ca\u003eMonadLift\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eMonadLiftFunctor\u003c/a\u003e\u003c/code\u003e and\n    \u003ccode\u003e\u003ca\u003eMonadLiftControl\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Two sets of helper functions inspired by similarly named functions in\n    the \u003ccode\u003emonad-control\u003c/code\u003e package: one for instances of \u003ccode\u003eMonadLayerControl\u003c/code\u003e and\n    the other for instances of \u003ccode\u003eMonadLiftControl\u003c/code\u003e. These operations are:\n    \u003ccode\u003e\u003ca\u003econtrolLayer\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elayerOp\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003elayerOp_\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elayerDiscard\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003econtrol\u003c/a\u003e\u003c/code\u003e,\n    \u003ccode\u003e\u003ca\u003eliftOp\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eliftOp_\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eliftDiscard\u003c/a\u003e\u003c/code\u003e respectively.\n\u003c/li\u003e\u003c/ol\u003e\u003c/div\u003e",
          "module": "Control.Monad.Layer",
          "name": "Layer",
          "package": "layers",
          "source": "src/Control-Monad-Layer.html",
          "type": "module"
        },
        "index": {
          "description": "This module is the core of the layers package It exports The type classes MonadLayer MonadLayerFunctor and MonadLayerControl and instances of these classes for the transformers in the transformers package The type classes MonadTrans MonadTransFunctor and MonadTransControl and instances of these classes for the transformers in the transformers package The type classes MonadLift MonadLiftFunctor and MonadLiftControl Two sets of helper functions inspired by similarly named functions in the monad-control package one for instances of MonadLayerControl and the other for instances of MonadLiftControl These operations are controlLayer layerOp layerOp and layerDiscard and control liftOp liftOp and liftDiscard respectively",
          "hierarchy": "Control Monad Layer",
          "module": "Control.Monad.Layer",
          "name": "Layer",
          "package": "layers",
          "partial": "Layer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Layer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad \u003ccode\u003em\u003c/code\u003e can be an instance of \u003ccode\u003e\u003ca\u003eMonadLayer\u003c/a\u003e\u003c/code\u003e if it is built\n (\"layered\") on top of some inner monad (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eInner\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e) and can provide the\n operations \u003ccode\u003e\u003ca\u003elayer\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elayerInvmap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eMonad layers are a generalisation of monad transformers, with the\n difference being that monad layers are not necessarily parametric in their\n inner monad. For more details, read the the in-depth documentation\n provided in \u003ca\u003eDocumentation.Layers.Overview\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Layer",
          "name": "MonadLayer",
          "package": "layers",
          "source": "src/Control-Monad-Layer.html#MonadLayer",
          "type": "class"
        },
        "index": {
          "description": "monad can be an instance of MonadLayer if it is built layered on top of some inner monad Inner and can provide the operations layer and layerInvmap Monad layers are generalisation of monad transformers with the difference being that monad layers are not necessarily parametric in their inner monad For more details read the the in-depth documentation provided in Documentation.Layers.Overview",
          "hierarchy": "Control Monad Layer",
          "module": "Control.Monad.Layer",
          "name": "MonadLayer",
          "package": "layers",
          "partial": "Monad Layer",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Layer.html#t:MonadLayer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMonadLayerControl\u003c/a\u003e\u003c/code\u003e represents the class of monad layers through which it\n is possible to lift control operations. See \u003ca\u003eDocumentation.Layers.Overview\u003c/a\u003e\n for a more complete discussion.\n\u003c/p\u003e",
          "module": "Control.Monad.Layer",
          "name": "MonadLayerControl",
          "package": "layers",
          "source": "src/Control-Monad-Layer.html#MonadLayerControl",
          "type": "class"
        },
        "index": {
          "description": "MonadLayerControl represents the class of monad layers through which it is possible to lift control operations See Documentation.Layers.Overview for more complete discussion",
          "hierarchy": "Control Monad Layer",
          "module": "Control.Monad.Layer",
          "name": "MonadLayerControl",
          "package": "layers",
          "partial": "Monad Layer Control",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Layer.html#t:MonadLayerControl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type class \u003ccode\u003e\u003ca\u003eMonadLayerFunctor\u003c/a\u003e\u003c/code\u003e represents is the subclass of\n monad layers that support the \u003ccode\u003e\u003ca\u003elayerMap\u003c/a\u003e\u003c/code\u003e operation, which is more powerful\n than the \u003ccode\u003e\u003ca\u003elayerInvmap\u003c/a\u003e\u003c/code\u003e operation of the \u003ccode\u003e\u003ca\u003eMonadLayer\u003c/a\u003e\u003c/code\u003e type class.\n\u003c/p\u003e",
          "module": "Control.Monad.Layer",
          "name": "MonadLayerFunctor",
          "package": "layers",
          "source": "src/Control-Monad-Layer.html#MonadLayerFunctor",
          "type": "class"
        },
        "index": {
          "description": "The type class MonadLayerFunctor represents is the subclass of monad layers that support the layerMap operation which is more powerful than the layerInvmap operation of the MonadLayer type class",
          "hierarchy": "Control Monad Layer",
          "module": "Control.Monad.Layer",
          "name": "MonadLayerFunctor",
          "package": "layers",
          "partial": "Monad Layer Functor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Layer.html#t:MonadLayerFunctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMonadLift\u003c/a\u003e\u003c/code\u003e is a multi-parameter type class parameterised by two monads\n \u003ccode\u003ei\u003c/code\u003e and \u003ccode\u003em\u003c/code\u003e. If the constraint \u003ccode\u003eMonadLift i m\u003c/code\u003e is satisfied, this means\n that \u003ccode\u003em\u003c/code\u003e supports lifting operations from \u003ccode\u003ei\u003c/code\u003e. If \u003ccode\u003em\u003c/code\u003e is a monad built from\n a monad transformer stack, then it supports lifting operations from any\n monad \u003ccode\u003ei\u003c/code\u003e anywhere in the stack. We call such a relationship between \u003ccode\u003ei\u003c/code\u003e\n and \u003ccode\u003em\u003c/code\u003e a \"monad lift\". For a more details, read the in-depth\n documentation provided in \u003ca\u003eDocumentation.Layers.Overview\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Layer",
          "name": "MonadLift",
          "package": "layers",
          "source": "src/Control-Monad-Layer.html#MonadLift",
          "type": "class"
        },
        "index": {
          "description": "MonadLift is multi-parameter type class parameterised by two monads and If the constraint MonadLift is satisfied this means that supports lifting operations from If is monad built from monad transformer stack then it supports lifting operations from any monad anywhere in the stack We call such relationship between and monad lift For more details read the in-depth documentation provided in Documentation.Layers.Overview",
          "hierarchy": "Control Monad Layer",
          "module": "Control.Monad.Layer",
          "name": "MonadLift",
          "package": "layers",
          "partial": "Monad Lift",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Layer.html#t:MonadLift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMonadLiftControl\u003c/a\u003e\u003c/code\u003e represents the class of monad lifts that support\n lifting control operations. See \u003ca\u003eDocumentation.Layers.Overview\u003c/a\u003e for a more\n complete discussion.\n\u003c/p\u003e",
          "module": "Control.Monad.Layer",
          "name": "MonadLiftControl",
          "package": "layers",
          "source": "src/Control-Monad-Layer.html#MonadLiftControl",
          "type": "class"
        },
        "index": {
          "description": "MonadLiftControl represents the class of monad lifts that support lifting control operations See Documentation.Layers.Overview for more complete discussion",
          "hierarchy": "Control Monad Layer",
          "module": "Control.Monad.Layer",
          "name": "MonadLiftControl",
          "package": "layers",
          "partial": "Monad Lift Control",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Layer.html#t:MonadLiftControl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type class \u003ccode\u003e\u003ca\u003eMonadLiftFunctor\u003c/a\u003e\u003c/code\u003e represents is the subclass of monad\n lifts that support the \u003ccode\u003e\u003ca\u003eliftMap\u003c/a\u003e\u003c/code\u003e operation, which is more powerful than the\n \u003ccode\u003e\u003ca\u003eliftInvmap\u003c/a\u003e\u003c/code\u003e operation of the \u003ccode\u003e\u003ca\u003eMonadLift\u003c/a\u003e\u003c/code\u003e type class.\n\u003c/p\u003e",
          "module": "Control.Monad.Layer",
          "name": "MonadLiftFunctor",
          "package": "layers",
          "source": "src/Control-Monad-Layer.html#MonadLiftFunctor",
          "type": "class"
        },
        "index": {
          "description": "The type class MonadLiftFunctor represents is the subclass of monad lifts that support the liftMap operation which is more powerful than the liftInvmap operation of the MonadLift type class",
          "hierarchy": "Control Monad Layer",
          "module": "Control.Monad.Layer",
          "name": "MonadLiftFunctor",
          "package": "layers",
          "partial": "Monad Lift Functor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Layer.html#t:MonadLiftFunctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonad transformers are a subclass of monad layers which are parametric in\n their inner monad.\n\u003c/p\u003e",
          "module": "Control.Monad.Layer",
          "name": "MonadTrans",
          "package": "layers",
          "source": "src/Control-Monad-Layer.html#MonadTrans",
          "type": "class"
        },
        "index": {
          "description": "Monad transformers are subclass of monad layers which are parametric in their inner monad",
          "hierarchy": "Control Monad Layer",
          "module": "Control.Monad.Layer",
          "name": "MonadTrans",
          "package": "layers",
          "partial": "Monad Trans",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Layer.html#t:MonadTrans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMonadTransControl\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003eMonadLayerControl\u003c/a\u003e\u003c/code\u003e for monad\n transformers, i.e., monad layers polymorphic in their inner monad. This\n extra polymorphism allows us to specify more type safety in the \u003ccode\u003erun\u003c/code\u003e\n operation of \u003ccode\u003e\u003ca\u003etransControl\u003c/a\u003e\u003c/code\u003e, but in practice there is no reason to ever use\n this over \u003ccode\u003eMonadLayerControl\u003c/code\u003e. See \u003ca\u003eDocumentation.Layers.Overview\u003c/a\u003e for a\n discussion of why this class is included despite not being strictly\n necessary.\n\u003c/p\u003e",
          "module": "Control.Monad.Layer",
          "name": "MonadTransControl",
          "package": "layers",
          "source": "src/Control-Monad-Layer.html#MonadTransControl",
          "type": "class"
        },
        "index": {
          "description": "MonadTransControl is variant of MonadLayerControl for monad transformers i.e monad layers polymorphic in their inner monad This extra polymorphism allows us to specify more type safety in the run operation of transControl but in practice there is no reason to ever use this over MonadLayerControl See Documentation.Layers.Overview for discussion of why this class is included despite not being strictly necessary",
          "hierarchy": "Control Monad Layer",
          "module": "Control.Monad.Layer",
          "name": "MonadTransControl",
          "package": "layers",
          "partial": "Monad Trans Control",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Layer.html#t:MonadTransControl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type class \u003ccode\u003e\u003ca\u003eMonadTransFunctor\u003c/a\u003e\u003c/code\u003e represents is the subclass of\n monad layers that support the \u003ccode\u003e\u003ca\u003etransMap\u003c/a\u003e\u003c/code\u003e operation, which is more powerful\n than the \u003ccode\u003e\u003ca\u003etransInvmap\u003c/a\u003e\u003c/code\u003e operation of the \u003ccode\u003e\u003ca\u003eMonadTrans\u003c/a\u003e\u003c/code\u003e type class.\n\u003c/p\u003e",
          "module": "Control.Monad.Layer",
          "name": "MonadTransFunctor",
          "package": "layers",
          "source": "src/Control-Monad-Layer.html#MonadTransFunctor",
          "type": "class"
        },
        "index": {
          "description": "The type class MonadTransFunctor represents is the subclass of monad layers that support the transMap operation which is more powerful than the transInvmap operation of the MonadTrans type class",
          "hierarchy": "Control Monad Layer",
          "module": "Control.Monad.Layer",
          "name": "MonadTransFunctor",
          "package": "layers",
          "partial": "Monad Trans Functor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Layer.html#t:MonadTransFunctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn often used composition: \u003ccode\u003e\u003ccode\u003e\u003ca\u003econtrol\u003c/a\u003e\u003c/code\u003e f = join . \u003ccode\u003e\u003ca\u003eliftControl\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Layer",
          "name": "control",
          "package": "layers",
          "signature": "((forall b.  m b -\u003e i (m b)) -\u003e i (m a)) -\u003e m a",
          "source": "src/Control-Monad-Layer.html#control",
          "type": "function"
        },
        "index": {
          "description": "An often used composition control join liftControl",
          "hierarchy": "Control Monad Layer",
          "module": "Control.Monad.Layer",
          "name": "control",
          "normalized": "((a b c d-\u003ee(c d))-\u003ee(c f))-\u003ec f",
          "package": "layers",
          "signature": "((forall b. m b-\u003ei(m b))-\u003ei(m a))-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Layer.html#v:control"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn often used composition: \u003ccode\u003e\u003ccode\u003e\u003ca\u003econtrolLayer\u003c/a\u003e\u003c/code\u003e f = \u003ccode\u003e\u003ca\u003elayerControl\u003c/a\u003e\u003c/code\u003e f \u003e\u003e= \u003ccode\u003e\u003ca\u003erestore\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Layer",
          "name": "controlLayer",
          "package": "layers",
          "signature": "((forall b.  m b -\u003e Inner m (LayerState m b)) -\u003e Inner m (LayerState m a)) -\u003e m a",
          "source": "src/Control-Monad-Layer.html#controlLayer",
          "type": "function"
        },
        "index": {
          "description": "An often used composition controlLayer layerControl restore",
          "hierarchy": "Control Monad Layer",
          "module": "Control.Monad.Layer",
          "name": "controlLayer",
          "normalized": "((a b c d-\u003eInner c(LayerState c d))-\u003eInner c(LayerState c e))-\u003ec e",
          "package": "layers",
          "partial": "Layer",
          "signature": "((forall b. m b-\u003eInner m(LayerState m b))-\u003eInner m(LayerState m a))-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Layer.html#v:controlLayer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elayer\u003c/a\u003e\u003c/code\u003e takes a computation from the inner monad \u003ccode\u003e\u003ccode\u003e\u003ca\u003eInner\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e and\n lifts it into the \"outer\" monad \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe following laws hold for valid instances of \u003ccode\u003e\u003ca\u003eMonadLayer\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eIdentity\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003elayer . return = return\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003eComposition\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003elayer m \u003e\u003e= layer . f = layer (m \u003e\u003e= f)\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThese laws are equivalent to the monad transformer laws of the\n \u003ccode\u003e\u003ca\u003eMonadTrans\u003c/a\u003e\u003c/code\u003e class from the \u003ccode\u003etransformers\u003c/code\u003e,\n where \u003ccode\u003elayer\u003c/code\u003e is analgous to the \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e\n operation from \u003ccode\u003eMonadTrans\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Layer",
          "name": "layer",
          "package": "layers",
          "signature": "Inner m a -\u003e m a",
          "source": "src/Control-Monad-Layer.html#layer",
          "type": "method"
        },
        "index": {
          "description": "layer takes computation from the inner monad Inner and lifts it into the outer monad The following laws hold for valid instances of MonadLayer Identity layer return return Composition layer layer layer These laws are equivalent to the monad transformer laws of the MonadTrans class from the transformers where layer is analgous to the lift operation from MonadTrans",
          "hierarchy": "Control Monad Layer",
          "module": "Control.Monad.Layer",
          "name": "layer",
          "normalized": "Inner a b-\u003ea b",
          "package": "layers",
          "signature": "Inner m a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Layer.html#v:layer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elayerControl\u003c/a\u003e\u003c/code\u003e is a version of \u003ccode\u003e\u003ca\u003elayer\u003c/a\u003e\u003c/code\u003e that makes it possible to lift\n control operations from the inner monad \u003ccode\u003e\u003ccode\u003e\u003ca\u003eInner\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e to the \"outer\"\n monad \u003ccode\u003em\u003c/code\u003e. It takes a continuation, to which it passes an operation we\n call \u003ccode\u003erun\u003c/code\u003e, which is a kind of \"inverse\" of \u003ccode\u003elayer\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eInstances should satisfy similar laws as the monad transformer laws:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eIdentity\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003elayerControl . const . return = return\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003eComposition\u003c/dt\u003e\u003cdd\u003e\n     \u003ccode\u003elayerControl (const m) \u003e\u003e= layerControl . const . f\u003c/code\u003e = \u003ccode\u003elayerControl (const (m \u003e\u003e= f))\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "Control.Monad.Layer",
          "name": "layerControl",
          "package": "layers",
          "signature": "((forall b.  m b -\u003e Inner m (LayerState m b)) -\u003e Inner m a) -\u003e m a",
          "source": "src/Control-Monad-Layer.html#layerControl",
          "type": "method"
        },
        "index": {
          "description": "layerControl is version of layer that makes it possible to lift control operations from the inner monad Inner to the outer monad It takes continuation to which it passes an operation we call run which is kind of inverse of layer Instances should satisfy similar laws as the monad transformer laws Identity layerControl const return return Composition layerControl const layerControl const layerControl const",
          "hierarchy": "Control Monad Layer",
          "module": "Control.Monad.Layer",
          "name": "layerControl",
          "normalized": "((a b c d-\u003eInner c(LayerState c d))-\u003eInner c e)-\u003ec e",
          "package": "layers",
          "partial": "Control",
          "signature": "((forall b. m b-\u003eInner m(LayerState m b))-\u003eInner m a)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Layer.html#v:layerControl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003elayerDiscard\u003c/code\u003e is a particular application of \u003ccode\u003e\u003ca\u003elayerControl\u003c/a\u003e\u003c/code\u003e that allows\n layering control operations of type: \u003ccode\u003e\u003ccode\u003e\u003ca\u003eInner\u003c/a\u003e\u003c/code\u003e m () -\u003e \u003ccode\u003e\u003ca\u003eInner\u003c/a\u003e\u003c/code\u003e m a\u003c/code\u003e to\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMonadLayerControl\u003c/a\u003e\u003c/code\u003e m =\u003e m () -\u003e m a\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that, while the argument computation \u003ccode\u003em ()\u003c/code\u003e has access to the captured\n state, all its side-effects in \u003ccode\u003em\u003c/code\u003e are discarded. It is run only for its\n side-effects in the inner monad \u003ccode\u003e\u003ccode\u003e\u003ca\u003eInner\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003elayerDiscard forkIO :: (\u003ccode\u003e\u003ca\u003eMonadLayerControl\u003c/a\u003e\u003c/code\u003e m, \u003ccode\u003e\u003ca\u003eInner\u003c/a\u003e\u003c/code\u003e m ~ \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e)\n     =\u003e m () -\u003e m ThreadId\u003c/pre\u003e",
          "module": "Control.Monad.Layer",
          "name": "layerDiscard",
          "package": "layers",
          "signature": "(Inner m () -\u003e Inner m a) -\u003e m () -\u003e m a",
          "source": "src/Control-Monad-Layer.html#layerDiscard",
          "type": "function"
        },
        "index": {
          "description": "layerDiscard is particular application of layerControl that allows layering control operations of type Inner Inner to MonadLayerControl Note that while the argument computation has access to the captured state all its side-effects in are discarded It is run only for its side-effects in the inner monad Inner For example layerDiscard forkIO MonadLayerControl Inner IO ThreadId",
          "hierarchy": "Control Monad Layer",
          "module": "Control.Monad.Layer",
          "name": "layerDiscard",
          "normalized": "(Inner a()-\u003eInner a b)-\u003ea()-\u003ea b",
          "package": "layers",
          "partial": "Discard",
          "signature": "(Inner m()-\u003eInner m a)-\u003em()-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Layer.html#v:layerDiscard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elayerInvmap\u003c/a\u003e\u003c/code\u003e represents an invariant (endo)functor in the category\n of monads. It takes a transformation \u003ccode\u003ef\u003c/code\u003e of the inner monad and its\n inverse \u003ccode\u003eg\u003c/code\u003e (such that \u003ccode\u003eg . f = id\u003c/code\u003e) and returns transformation of \u003ccode\u003em\u003c/code\u003e\n analogous to \u003ccode\u003ef\u003c/code\u003e. (i.e., \u003ccode\u003elayerInvmap\u003c/code\u003e lifts an automorphism of\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eInner\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e to an endomorphism of \u003ccode\u003em\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eThe following laws hold for valid instances of \u003ccode\u003e\u003ca\u003eMonadLayer\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eIdentity\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003elayerInvmap id id = id\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003eComposition\u003c/dt\u003e\u003cdd\u003e\n         \u003ccode\u003elayerInvmap f g . layerInvmap f' g' = layerInvmap (f . f') (g' . g)\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "Control.Monad.Layer",
          "name": "layerInvmap",
          "package": "layers",
          "signature": "layerInvmap",
          "source": "src/Control-Monad-Layer.html#layerInvmap",
          "type": "method"
        },
        "index": {
          "description": "layerInvmap represents an invariant endo functor in the category of monads It takes transformation of the inner monad and its inverse such that id and returns transformation of analogous to i.e layerInvmap lifts an automorphism of Inner to an endomorphism of The following laws hold for valid instances of MonadLayer Identity layerInvmap id id id Composition layerInvmap layerInvmap layerInvmap",
          "hierarchy": "Control Monad Layer",
          "module": "Control.Monad.Layer",
          "name": "layerInvmap",
          "package": "layers",
          "partial": "Invmap",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Layer.html#v:layerInvmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elayerMap\u003c/a\u003e\u003c/code\u003e represents an (endo)functor in the category of monads. It\n takes a transformation \u003ccode\u003ef\u003c/code\u003e of the inner monad returns a transformation\n of \u003ccode\u003em\u003c/code\u003e analogous to \u003ccode\u003ef\u003c/code\u003e. (i.e., \u003ccode\u003elayerMap\u003c/code\u003e lifts an endomorphism of\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eInner\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e to a endomorphism of \u003ccode\u003em\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eThe following laws hold for valid instances of \u003ccode\u003e\u003ca\u003eMonadLayerFunctor\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eIdentity\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003elayerMap id = id\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003eComposition\u003c/dt\u003e\u003cdd\u003e\n         \u003ccode\u003elayerMap f . layerMap g = layerMap (f . g)\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "Control.Monad.Layer",
          "name": "layerMap",
          "package": "layers",
          "signature": "(forall b.  Inner m b -\u003e Inner m b) -\u003e m a -\u003e m a",
          "source": "src/Control-Monad-Layer.html#layerMap",
          "type": "method"
        },
        "index": {
          "description": "layerMap represents an endo functor in the category of monads It takes transformation of the inner monad returns transformation of analogous to i.e layerMap lifts an endomorphism of Inner to endomorphism of The following laws hold for valid instances of MonadLayerFunctor Identity layerMap id id Composition layerMap layerMap layerMap",
          "hierarchy": "Control Monad Layer",
          "module": "Control.Monad.Layer",
          "name": "layerMap",
          "normalized": "(a b Inner c d-\u003eInner c d)-\u003ec e-\u003ec e",
          "package": "layers",
          "partial": "Map",
          "signature": "(forall b. Inner m b-\u003eInner m b)-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Layer.html#v:layerMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003elayerOp\u003c/code\u003e is a particular application of \u003ccode\u003e\u003ca\u003elayerControl\u003c/a\u003e\u003c/code\u003e that allows layering\n control operations of type: \u003ccode\u003e(a -\u003e \u003ccode\u003e\u003ca\u003eInner\u003c/a\u003e\u003c/code\u003e m b) -\u003e \u003ccode\u003e\u003ca\u003eInner\u003c/a\u003e\u003c/code\u003e m b\u003c/code\u003e to\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMonadLayerControl\u003c/a\u003e\u003c/code\u003e m =\u003e (a -\u003e m b) -\u003e m b\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003elayerOp . withMVar :: (\u003ccode\u003e\u003ca\u003eMonadLayerControl\u003c/a\u003e\u003c/code\u003e m, \u003ccode\u003e\u003ca\u003eInner\u003c/a\u003e\u003c/code\u003e m ~ \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e)\n     =\u003e MVar a -\u003e (a -\u003e m b) -\u003e m b\u003c/pre\u003e",
          "module": "Control.Monad.Layer",
          "name": "layerOp",
          "package": "layers",
          "signature": "((a -\u003e Inner m (LayerState m b)) -\u003e Inner m (LayerState m c)) -\u003e (a -\u003e m b) -\u003e m c",
          "source": "src/Control-Monad-Layer.html#layerOp",
          "type": "function"
        },
        "index": {
          "description": "layerOp is particular application of layerControl that allows layering control operations of type Inner Inner to MonadLayerControl For example layerOp withMVar MonadLayerControl Inner IO MVar",
          "hierarchy": "Control Monad Layer",
          "module": "Control.Monad.Layer",
          "name": "layerOp",
          "normalized": "((a-\u003eInner b(LayerState b c))-\u003eInner b(LayerState b d))-\u003e(a-\u003eb c)-\u003eb d",
          "package": "layers",
          "partial": "Op",
          "signature": "((a-\u003eInner m(LayerState m b))-\u003eInner m(LayerState m c))-\u003e(a-\u003em b)-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Layer.html#v:layerOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003elayerOp_\u003c/code\u003e is a particular application of \u003ccode\u003e\u003ca\u003elayerControl\u003c/a\u003e\u003c/code\u003e that allows\n layering control operations of type: \u003ccode\u003e\u003ccode\u003e\u003ca\u003eInner\u003c/a\u003e\u003c/code\u003e m a -\u003e \u003ccode\u003e\u003ca\u003eInner\u003c/a\u003e\u003c/code\u003e m b\u003c/code\u003e to\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMonadLayerControl\u003c/a\u003e\u003c/code\u003e m =\u003e m a -\u003e m b\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003elayerOp_ mask_ :: (\u003ccode\u003e\u003ca\u003eMonadLayerControl\u003c/a\u003e\u003c/code\u003e m, \u003ccode\u003e\u003ca\u003eInner\u003c/a\u003e\u003c/code\u003e m ~ \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e) =\u003e m a -\u003e m a\u003c/pre\u003e",
          "module": "Control.Monad.Layer",
          "name": "layerOp_",
          "package": "layers",
          "signature": "(Inner m (LayerState m a) -\u003e Inner m (LayerState m b)) -\u003e m a -\u003e m b",
          "source": "src/Control-Monad-Layer.html#layerOp_",
          "type": "function"
        },
        "index": {
          "description": "layerOp is particular application of layerControl that allows layering control operations of type Inner Inner to MonadLayerControl For example layerOp mask MonadLayerControl Inner IO",
          "hierarchy": "Control Monad Layer",
          "module": "Control.Monad.Layer",
          "name": "layerOp_",
          "normalized": "(Inner a(LayerState a b)-\u003eInner a(LayerState a c))-\u003ea b-\u003ea c",
          "package": "layers",
          "partial": "Op",
          "signature": "(Inner m(LayerState m a)-\u003eInner m(LayerState m b))-\u003em a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Layer.html#v:layerOp_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e takes a computation from an inner monad \u003ccode\u003ei\u003c/code\u003e and lifts it into\n the \"outer\" monad \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe following laws hold for valid instances of \u003ccode\u003e\u003ca\u003eMonadLift\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eIdentity\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003elift . return = return\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003eComposition\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003elift m \u003e\u003e= lift . f = lift (m \u003e\u003e= f)\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThese laws are equivalent to the monad transformer laws of the\n \u003ccode\u003e\u003ca\u003eMonadTrans\u003c/a\u003e\u003c/code\u003e class from the \u003ccode\u003etransformers\u003c/code\u003e\n package.\n\u003c/p\u003e",
          "module": "Control.Monad.Layer",
          "name": "lift",
          "package": "layers",
          "signature": "i a -\u003e m a",
          "source": "src/Control-Monad-Layer.html#lift",
          "type": "method"
        },
        "index": {
          "description": "lift takes computation from an inner monad and lifts it into the outer monad The following laws hold for valid instances of MonadLift Identity lift return return Composition lift lift lift These laws are equivalent to the monad transformer laws of the MonadTrans class from the transformers package",
          "hierarchy": "Control Monad Layer",
          "module": "Control.Monad.Layer",
          "name": "lift",
          "normalized": "a b-\u003ec b",
          "package": "layers",
          "signature": "i a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Layer.html#v:lift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eliftControl\u003c/a\u003e\u003c/code\u003e is a version of \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e that makes it possible to lift\n control operations from an inner monad \u003ccode\u003ei\u003c/code\u003e to the \"outer\" monad \u003ccode\u003em\u003c/code\u003e.\n It takes a continuation, to which it passes an operation we call \u003ccode\u003erun\u003c/code\u003e,\n which is a kind of \"inverse\" of \u003ccode\u003elift\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eInstances should satisfy the following laws:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eIdentity\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003eliftControl . const . return = return\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003eComposition\u003c/dt\u003e\u003cdd\u003e\n     \u003ccode\u003eliftControl (const m) \u003e\u003e= liftControl . const . f\u003c/code\u003e = \u003ccode\u003eliftControl (const (m \u003e\u003e= f))\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003ePreservation\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003ejoin (liftControl (\\run -\u003e run t)) = t\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "Control.Monad.Layer",
          "name": "liftControl",
          "package": "layers",
          "signature": "((forall b.  m b -\u003e i (m b)) -\u003e i a) -\u003e m a",
          "source": "src/Control-Monad-Layer.html#liftControl",
          "type": "method"
        },
        "index": {
          "description": "liftControl is version of lift that makes it possible to lift control operations from an inner monad to the outer monad It takes continuation to which it passes an operation we call run which is kind of inverse of lift Instances should satisfy the following laws Identity liftControl const return return Composition liftControl const liftControl const liftControl const Preservation join liftControl run run",
          "hierarchy": "Control Monad Layer",
          "module": "Control.Monad.Layer",
          "name": "liftControl",
          "normalized": "((a b c d-\u003ee(c d))-\u003ee f)-\u003ec f",
          "package": "layers",
          "partial": "Control",
          "signature": "((forall b. m b-\u003ei(m b))-\u003ei a)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Layer.html#v:liftControl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eliftDiscard\u003c/code\u003e is a particular application of \u003ccode\u003e\u003ca\u003eliftControl\u003c/a\u003e\u003c/code\u003e that allows\n lifting control operations of type: \u003ccode\u003ei () -\u003e i a\u003c/code\u003e to\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMonadLiftControl\u003c/a\u003e\u003c/code\u003e i m =\u003e m () -\u003e m a\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that, while the argument computation \u003ccode\u003em ()\u003c/code\u003e has access to the captured\n state, all its side-effects in \u003ccode\u003em\u003c/code\u003e are discarded. It is run only for its\n side-effects in the inner monad \u003ccode\u003ei\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003eliftDiscard forkIO :: \u003ccode\u003e\u003ca\u003eMonadLiftControl\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e m =\u003e m () -\u003e m ThreadId\u003c/pre\u003e",
          "module": "Control.Monad.Layer",
          "name": "liftDiscard",
          "package": "layers",
          "signature": "(i () -\u003e i a) -\u003e m () -\u003e m a",
          "source": "src/Control-Monad-Layer.html#liftDiscard",
          "type": "function"
        },
        "index": {
          "description": "liftDiscard is particular application of liftControl that allows lifting control operations of type to MonadLiftControl Note that while the argument computation has access to the captured state all its side-effects in are discarded It is run only for its side-effects in the inner monad For example liftDiscard forkIO MonadLiftControl IO ThreadId",
          "hierarchy": "Control Monad Layer",
          "module": "Control.Monad.Layer",
          "name": "liftDiscard",
          "normalized": "(a()-\u003ea b)-\u003ec()-\u003ec b",
          "package": "layers",
          "partial": "Discard",
          "signature": "(i()-\u003ei a)-\u003em()-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Layer.html#v:liftDiscard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eliftInvmap\u003c/a\u003e\u003c/code\u003e represents an invariant (endo)functor in the category\n of monads. It takes a transformation \u003ccode\u003ef\u003c/code\u003e of an inner monad \u003ccode\u003ei\u003c/code\u003e and its\n inverse \u003ccode\u003eg\u003c/code\u003e (such that \u003ccode\u003eg . f = id\u003c/code\u003e) and returns transformation of \u003ccode\u003em\u003c/code\u003e\n analogous to \u003ccode\u003ef\u003c/code\u003e. (i.e., \u003ccode\u003eliftInvmap\u003c/code\u003e lifts an automorphism of \u003ccode\u003ei\u003c/code\u003e\n to an endomorphism of \u003ccode\u003em\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eThe following laws hold for valid instances of \u003ccode\u003e\u003ca\u003eMonadLift\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eIdentity\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003eliftInvmap id id = id\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003eComposition\u003c/dt\u003e\u003cdd\u003e\n         \u003ccode\u003eliftInvmap f g . liftInvmap f' g' = liftInvmap (f . f') (g' . g)\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe difference between \u003ccode\u003e\u003ca\u003eliftInvmap\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elayerInvmap\u003c/a\u003e\u003c/code\u003e is that\n \u003ccode\u003elayerInvmap\u003c/code\u003e only lifts from the monad directly beneath the top of the\n stack, while \u003ccode\u003eliftInvmap\u003c/code\u003e can lift from \u003cem\u003eany\u003c/em\u003e monad anywhere in the\n stack (including \u003ccode\u003em\u003c/code\u003e itself). (\u003ccode\u003elayerInvmap\u003c/code\u003e is used to implement\n \u003ccode\u003eliftInvmap\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Control.Monad.Layer",
          "name": "liftInvmap",
          "package": "layers",
          "signature": "(forall b.  i b -\u003e i b) -\u003e (forall b.  i b -\u003e i b) -\u003e m a -\u003e m a",
          "source": "src/Control-Monad-Layer.html#liftInvmap",
          "type": "method"
        },
        "index": {
          "description": "liftInvmap represents an invariant endo functor in the category of monads It takes transformation of an inner monad and its inverse such that id and returns transformation of analogous to i.e liftInvmap lifts an automorphism of to an endomorphism of The following laws hold for valid instances of MonadLift Identity liftInvmap id id id Composition liftInvmap liftInvmap liftInvmap The difference between liftInvmap and layerInvmap is that layerInvmap only lifts from the monad directly beneath the top of the stack while liftInvmap can lift from any monad anywhere in the stack including itself layerInvmap is used to implement liftInvmap",
          "hierarchy": "Control Monad Layer",
          "module": "Control.Monad.Layer",
          "name": "liftInvmap",
          "normalized": "(a b c d-\u003ec d)-\u003e(a b c d-\u003ec d)-\u003ee f-\u003ee f",
          "package": "layers",
          "partial": "Invmap",
          "signature": "(forall b. i b-\u003ei b)-\u003e(forall b. i b-\u003ei b)-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Layer.html#v:liftInvmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eliftMap\u003c/a\u003e\u003c/code\u003e represents an (endo)functor in the category of monads. It\n takes a transformation \u003ccode\u003ef\u003c/code\u003e of an inner monad \u003ccode\u003ei\u003c/code\u003e returns a\n transformation of \u003ccode\u003em\u003c/code\u003e analogous to \u003ccode\u003ef\u003c/code\u003e. (i.e., \u003ccode\u003eliftInvmap\u003c/code\u003e lifts an\n endomorphism of \u003ccode\u003ei\u003c/code\u003e to an endomorphism of \u003ccode\u003em\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eThe following laws hold for valid instances of \u003ccode\u003e\u003ca\u003eMonadLiftFunctor\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eIdentity\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003eliftMap id = id\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003eComposition\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003eliftMap f . liftMap g = liftMap (f . g)\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe difference between \u003ccode\u003e\u003ca\u003eliftMap\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elayerMap\u003c/a\u003e\u003c/code\u003e is that \u003ccode\u003elayerMap\u003c/code\u003e only\n lifts from the monad directly beneath the top of the stack, while\n \u003ccode\u003eliftMap\u003c/code\u003e can lift from \u003cem\u003eany\u003c/em\u003e monad anywhere in the stack (including\n \u003ccode\u003em\u003c/code\u003e itself). (\u003ccode\u003elayerMap\u003c/code\u003e is used to implement \u003ccode\u003eliftMap\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Control.Monad.Layer",
          "name": "liftMap",
          "package": "layers",
          "signature": "(forall b.  i b -\u003e i b) -\u003e m a -\u003e m a",
          "source": "src/Control-Monad-Layer.html#liftMap",
          "type": "method"
        },
        "index": {
          "description": "liftMap represents an endo functor in the category of monads It takes transformation of an inner monad returns transformation of analogous to i.e liftInvmap lifts an endomorphism of to an endomorphism of The following laws hold for valid instances of MonadLiftFunctor Identity liftMap id id Composition liftMap liftMap liftMap The difference between liftMap and layerMap is that layerMap only lifts from the monad directly beneath the top of the stack while liftMap can lift from any monad anywhere in the stack including itself layerMap is used to implement liftMap",
          "hierarchy": "Control Monad Layer",
          "module": "Control.Monad.Layer",
          "name": "liftMap",
          "normalized": "(a b c d-\u003ec d)-\u003ee f-\u003ee f",
          "package": "layers",
          "partial": "Map",
          "signature": "(forall b. i b-\u003ei b)-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Layer.html#v:liftMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eliftOp\u003c/code\u003e is a particular application of \u003ccode\u003e\u003ca\u003eliftControl\u003c/a\u003e\u003c/code\u003e that allows lifting\n control operations of type: \u003ccode\u003e(a -\u003e i b) -\u003e i b\u003c/code\u003e to\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMonadLiftControl\u003c/a\u003e\u003c/code\u003e i m =\u003e (a -\u003e m b) -\u003e m b\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003eliftOp . withMVar :: \u003ccode\u003e\u003ca\u003eMonadLiftControl\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e m =\u003e MVar a -\u003e (a -\u003e m b) -\u003e m b\u003c/pre\u003e",
          "module": "Control.Monad.Layer",
          "name": "liftOp",
          "package": "layers",
          "signature": "((a -\u003e i (m b)) -\u003e i (m c)) -\u003e (a -\u003e m b) -\u003e m c",
          "source": "src/Control-Monad-Layer.html#liftOp",
          "type": "function"
        },
        "index": {
          "description": "liftOp is particular application of liftControl that allows lifting control operations of type to MonadLiftControl For example liftOp withMVar MonadLiftControl IO MVar",
          "hierarchy": "Control Monad Layer",
          "module": "Control.Monad.Layer",
          "name": "liftOp",
          "normalized": "((a-\u003eb(c d))-\u003eb(c e))-\u003e(a-\u003ec d)-\u003ec e",
          "package": "layers",
          "partial": "Op",
          "signature": "((a-\u003ei(m b))-\u003ei(m c))-\u003e(a-\u003em b)-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Layer.html#v:liftOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eliftOp_\u003c/code\u003e is a particular application of \u003ccode\u003e\u003ca\u003eliftControl\u003c/a\u003e\u003c/code\u003e that allows\n lifting control operations of type: \u003ccode\u003ei a -\u003e i b\u003c/code\u003e to\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMonadLiftControl\u003c/a\u003e\u003c/code\u003e i m =\u003e m a -\u003e m b\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003eliftOp_ mask_ :: \u003ccode\u003e\u003ca\u003eMonadLiftControl\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e m =\u003e m a -\u003e m a\u003c/pre\u003e",
          "module": "Control.Monad.Layer",
          "name": "liftOp_",
          "package": "layers",
          "signature": "(i (m a) -\u003e i (m b)) -\u003e m a -\u003e m b",
          "source": "src/Control-Monad-Layer.html#liftOp_",
          "type": "function"
        },
        "index": {
          "description": "liftOp is particular application of liftControl that allows lifting control operations of type to MonadLiftControl For example liftOp mask MonadLiftControl IO",
          "hierarchy": "Control Monad Layer",
          "module": "Control.Monad.Layer",
          "name": "liftOp_",
          "normalized": "(a(b c)-\u003ea(b d))-\u003eb c-\u003eb d",
          "package": "layers",
          "partial": "Op",
          "signature": "(i(m a)-\u003ei(m b))-\u003em a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Layer.html#v:liftOp_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003em\u003c/code\u003e computation from the monadic state of \u003ccode\u003em\u003c/code\u003e that is\n returned from a \u003ccode\u003erun\u003c/code\u003e function given by \u003ccode\u003elayerControl\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eInstances should satisfy the following law:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003ePreservation\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003elayerControl (\\run -\u003e run t) \u003e\u003e= restore = t\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "Control.Monad.Layer",
          "name": "restore",
          "package": "layers",
          "signature": "LayerState m a -\u003e m a",
          "source": "src/Control-Monad-Layer.html#restore",
          "type": "method"
        },
        "index": {
          "description": "Construct computation from the monadic state of that is returned from run function given by layerControl Instances should satisfy the following law Preservation layerControl run run restore",
          "hierarchy": "Control Monad Layer",
          "module": "Control.Monad.Layer",
          "name": "restore",
          "normalized": "LayerState a b-\u003ea b",
          "package": "layers",
          "signature": "LayerState m a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Layer.html#v:restore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etransControl\u003c/a\u003e\u003c/code\u003e is a version of \u003ccode\u003e\u003ca\u003elayerControl\u003c/a\u003e\u003c/code\u003e whose \u003ccode\u003erun\u003c/code\u003e operation\n is more polymorphic in the returned monad. This provides a static\n guarantee that there are no remaining side effects in \u003ccode\u003em\u003c/code\u003e in the action\n returned by \u003ccode\u003erun\u003c/code\u003e which is not possible to express with the types of\n \u003ccode\u003e\u003ca\u003eMonadLayerControl\u003c/a\u003e\u003c/code\u003e. In practice though there should be no reason to\n use this over \u003ccode\u003e\u003ca\u003elayerControl\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Layer",
          "name": "transControl",
          "package": "layers",
          "signature": "(forall b.  n b -\u003e Inner n (LayerState n b)) -\u003e Inner n a) -\u003e m a",
          "source": "src/Control-Monad-Layer.html#transControl",
          "type": "method"
        },
        "index": {
          "description": "transControl is version of layerControl whose run operation is more polymorphic in the returned monad This provides static guarantee that there are no remaining side effects in in the action returned by run which is not possible to express with the types of MonadLayerControl In practice though there should be no reason to use this over layerControl",
          "hierarchy": "Control Monad Layer",
          "module": "Control.Monad.Layer",
          "name": "transControl",
          "normalized": "(a b c d-\u003eInner c(LayerState c d))-\u003eInner c e)-\u003ef e",
          "package": "layers",
          "partial": "Control",
          "signature": "(forall b. n b-\u003eInner n(LayerState n b))-\u003eInner n a)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Layer.html#v:transControl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etransInvmap\u003c/a\u003e\u003c/code\u003e represents an invariant functor in the category of\n monads. It takes a transformation \u003ccode\u003ef\u003c/code\u003e from the inner monad and its\n inverse \u003ccode\u003eg\u003c/code\u003e (such that \u003ccode\u003eg . f = id\u003c/code\u003e) and returns transformation of \u003ccode\u003em\u003c/code\u003e\n analogous to \u003ccode\u003ef\u003c/code\u003e. (i.e., \u003ccode\u003elayerInvmap\u003c/code\u003e lifts an isomorphism from\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eInner\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e to a homomorphism of \u003ccode\u003em\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eThe following laws hold for valid instances of \u003ccode\u003e\u003ca\u003eMonadTrans\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eIdentity\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003etransInvmap id id = id\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003eComposition\u003c/dt\u003e\u003cdd\u003e\n         \u003ccode\u003etransInvmap f g . transInvmap f' g' = transInvmap (f . f') (g' . g)\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eNote: this is more powerful than \u003ccode\u003e\u003ca\u003elayerInvmap\u003c/a\u003e\u003c/code\u003e from the \u003ccode\u003e\u003ca\u003eMonadLayer\u003c/a\u003e\u003c/code\u003e\n type class because the transformation it produces is a homomorphism\n rather than just an endomorphism.\n\u003c/p\u003e",
          "module": "Control.Monad.Layer",
          "name": "transInvmap",
          "package": "layers",
          "signature": "(forall b.  Inner m b -\u003e Inner n b) -\u003e (forall b.  Inner n b -\u003e Inner m b) -\u003e m a -\u003e n a",
          "source": "src/Control-Monad-Layer.html#transInvmap",
          "type": "method"
        },
        "index": {
          "description": "transInvmap represents an invariant functor in the category of monads It takes transformation from the inner monad and its inverse such that id and returns transformation of analogous to i.e layerInvmap lifts an isomorphism from Inner to homomorphism of The following laws hold for valid instances of MonadTrans Identity transInvmap id id id Composition transInvmap transInvmap transInvmap Note this is more powerful than layerInvmap from the MonadLayer type class because the transformation it produces is homomorphism rather than just an endomorphism",
          "hierarchy": "Control Monad Layer",
          "module": "Control.Monad.Layer",
          "name": "transInvmap",
          "normalized": "(a b Inner c d-\u003eInner e d)-\u003e(a b Inner e d-\u003eInner c d)-\u003ec f-\u003ee f",
          "package": "layers",
          "partial": "Invmap",
          "signature": "(forall b. Inner m b-\u003eInner n b)-\u003e(forall b. Inner n b-\u003eInner m b)-\u003em a-\u003en a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Layer.html#v:transInvmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etransMap\u003c/a\u003e\u003c/code\u003e represents a functor in the category of monads. It takes\n a transformation \u003ccode\u003ef\u003c/code\u003e from the inner monad returns a transformation from\n \u003ccode\u003em\u003c/code\u003e analogous to \u003ccode\u003ef\u003c/code\u003e. (i.e., \u003ccode\u003etransMap\u003c/code\u003e lifts a homomorphism from\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eInner\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e to a homomorphism from \u003ccode\u003em\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eThe following laws hold for valid instances of \u003ccode\u003e\u003ca\u003eMonadTransFunctor\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eIdentity\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003etransMap id = id\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003eComposition\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003etransMap f . transMap g = transMap (f . g)\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eNote: this is more powerful than \u003ccode\u003e\u003ca\u003elayerMap\u003c/a\u003e\u003c/code\u003e from the \n \u003ccode\u003e\u003ca\u003eMonadLayerFunctor\u003c/a\u003e\u003c/code\u003e type class because the transformation it produces\n is a homomorphism rather than just an endomorphism.\n\u003c/p\u003e",
          "module": "Control.Monad.Layer",
          "name": "transMap",
          "package": "layers",
          "signature": "(forall b.  Inner m b -\u003e Inner n b) -\u003e m a -\u003e n a",
          "source": "src/Control-Monad-Layer.html#transMap",
          "type": "method"
        },
        "index": {
          "description": "transMap represents functor in the category of monads It takes transformation from the inner monad returns transformation from analogous to i.e transMap lifts homomorphism from Inner to homomorphism from The following laws hold for valid instances of MonadTransFunctor Identity transMap id id Composition transMap transMap transMap Note this is more powerful than layerMap from the MonadLayerFunctor type class because the transformation it produces is homomorphism rather than just an endomorphism",
          "hierarchy": "Control Monad Layer",
          "module": "Control.Monad.Layer",
          "name": "transMap",
          "normalized": "(a b Inner c d-\u003eInner e d)-\u003ec f-\u003ee f",
          "package": "layers",
          "partial": "Map",
          "signature": "(forall b. Inner m b-\u003eInner n b)-\u003em a-\u003en a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Layer.html#v:transMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ezero\u003c/a\u003e\u003c/code\u003e inspects a \u003ccode\u003e\u003ca\u003eLayerState\u003c/a\u003e\u003c/code\u003e value and determines whether or not it\n is a \"zero\" value in the monad \u003ccode\u003em\u003c/code\u003e (i.e., if \u003ccode\u003em\u003c/code\u003e had short-circuited\n when the \u003ccode\u003eLayerState\u003c/code\u003e was captured). (This is used to implement the\n universal pass-through instance of\n \u003ccode\u003e\u003ca\u003eMonadTry\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
          "module": "Control.Monad.Layer",
          "name": "zero",
          "package": "layers",
          "signature": "LayerState m a -\u003e Bool",
          "source": "src/Control-Monad-Layer.html#zero",
          "type": "method"
        },
        "index": {
          "description": "zero inspects LayerState value and determines whether or not it is zero value in the monad i.e if had short-circuited when the LayerState was captured This is used to implement the universal pass-through instance of MonadTry",
          "hierarchy": "Control Monad Layer",
          "module": "Control.Monad.Layer",
          "name": "zero",
          "normalized": "LayerState a b-\u003eBool",
          "package": "layers",
          "signature": "LayerState m a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Control-Monad-Layer.html#v:zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdiv class=\"warning\"\u003e\u003cp\u003eWarning: This module exports no types, functions, classes or instances. It exists solely for the Haddock documentation it produces. You should not ever need to import it.\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eThis document discusses extensively the motivation behind the \u003ccode\u003elayers\u003c/code\u003e package\nand explains the design decisions taken in its construction.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Documentation.Layers.Overview",
          "name": "Overview",
          "package": "layers",
          "source": "src/Documentation-Layers-Overview.html",
          "type": "module"
        },
        "index": {
          "description": "Warning This module exports no types functions classes or instances It exists solely for the Haddock documentation it produces You should not ever need to import it This document discusses extensively the motivation behind the layers package and explains the design decisions taken in its construction",
          "hierarchy": "Documentation Layers Overview",
          "module": "Documentation.Layers.Overview",
          "name": "Overview",
          "package": "layers",
          "partial": "Overview",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/layers/docs/Documentation-Layers-Overview.html#"
      }
    }
  ]
]