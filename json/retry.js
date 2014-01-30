[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/retry/docs/Control-Retry.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exposes combinators that can wrap arbitrary monadic\n actions. They run the action and potentially retry running it with\n some configurable delay for a configurable number of times.\n\u003c/p\u003e\u003cp\u003eThe express purpose of this library is to make it easier to work\n with IO and especially network IO actions that often experience\n temporary failure that warrant retrying of the original action. For\n example, a database query may time out for a while, in which case\n we should delay a bit and retry the query.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Retry",
        "fct-package": "retry",
        "fct-signature": "module",
        "fct-source": "src/Control-Retry.html",
        "fct-type": "module",
        "title": "Retry"
      },
      "index": {
        "description": "This module exposes combinators that can wrap arbitrary monadic actions They run the action and potentially retry running it with some configurable delay for configurable number of times The express purpose of this library is to make it easier to work with IO and especially network IO actions that often experience temporary failure that warrant retrying of the original action For example database query may time out for while in which case we should delay bit and retry the query",
        "hierarchy": "Control Retry",
        "module": "Control.Retry",
        "name": "Retry",
        "normalized": "",
        "package": "retry",
        "partial": "Retry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/retry/docs/Control-Retry.html#t:RetryLimit",
      "description": {
        "fct-module": "Control.Retry",
        "fct-package": "retry",
        "fct-signature": "data",
        "fct-source": "src/Control-Retry.html#RetryLimit",
        "fct-type": "data",
        "title": "RetryLimit"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Retry",
        "module": "Control.Retry",
        "name": "RetryLimit",
        "normalized": "",
        "package": "retry",
        "partial": "Retry Limit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/retry/docs/Control-Retry.html#t:RetrySettings",
      "description": {
        "fct-descr": "\u003cp\u003eSettings for retry behavior. Simply using \u003ccode\u003e\u003ca\u003edef\u003c/a\u003e\u003c/code\u003e for default\n values should work in most cases.\n\u003c/p\u003e",
        "fct-module": "Control.Retry",
        "fct-package": "retry",
        "fct-signature": "data",
        "fct-source": "src/Control-Retry.html#RetrySettings",
        "fct-type": "data",
        "title": "RetrySettings"
      },
      "index": {
        "description": "Settings for retry behavior Simply using def for default values should work in most cases",
        "hierarchy": "Control Retry",
        "module": "Control.Retry",
        "name": "RetrySettings",
        "normalized": "",
        "package": "retry",
        "partial": "Retry Settings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/retry/docs/Control-Retry.html#v:RetrySettings",
      "description": {
        "fct-module": "Control.Retry",
        "fct-package": "retry",
        "fct-signature": "RetrySettings",
        "fct-source": "src/Control-Retry.html#RetrySettings",
        "fct-type": "function",
        "title": "RetrySettings"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Retry",
        "module": "Control.Retry",
        "name": "RetrySettings",
        "normalized": "",
        "package": "retry",
        "partial": "Retry Settings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/retry/docs/Control-Retry.html#v:backoff",
      "description": {
        "fct-descr": "\u003cp\u003eWhether to implement exponential backoff in retries. Defaults\n to True.\n\u003c/p\u003e",
        "fct-module": "Control.Retry",
        "fct-package": "retry",
        "fct-signature": "Bool",
        "fct-source": "src/Control-Retry.html#RetrySettings",
        "fct-type": "function",
        "title": "backoff"
      },
      "index": {
        "description": "Whether to implement exponential backoff in retries Defaults to True",
        "hierarchy": "Control Retry",
        "module": "Control.Retry",
        "name": "backoff",
        "normalized": "",
        "package": "retry",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/retry/docs/Control-Retry.html#v:backoffDelay",
      "description": {
        "fct-descr": "\u003cp\u003eDelay thread using backoff delay for the nth retry.\n\u003c/p\u003e",
        "fct-module": "Control.Retry",
        "fct-package": "retry",
        "fct-signature": "RetrySettings -\u003e b -\u003e m ()",
        "fct-source": "src/Control-Retry.html#backoffDelay",
        "fct-type": "function",
        "title": "backoffDelay"
      },
      "index": {
        "description": "Delay thread using backoff delay for the nth retry",
        "hierarchy": "Control Retry",
        "module": "Control.Retry",
        "name": "backoffDelay",
        "normalized": "RetrySettings-\u003ea-\u003eb()",
        "package": "retry",
        "partial": "Delay",
        "signature": "RetrySettings-\u003eb-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/retry/docs/Control-Retry.html#v:baseDelay",
      "description": {
        "fct-descr": "\u003cp\u003eThe base delay in miliseconds. Defaults to 50. Without\n \u003ccode\u003e\u003ca\u003ebackoff\u003c/a\u003e\u003c/code\u003e, this is the delay. With \u003ccode\u003e\u003ca\u003ebackoff\u003c/a\u003e\u003c/code\u003e, this base delay\n will grow by a factor of 2 on each subsequent retry.\n\u003c/p\u003e",
        "fct-module": "Control.Retry",
        "fct-package": "retry",
        "fct-signature": "Int",
        "fct-source": "src/Control-Retry.html#RetrySettings",
        "fct-type": "function",
        "title": "baseDelay"
      },
      "index": {
        "description": "The base delay in miliseconds Defaults to Without backoff this is the delay With backoff this base delay will grow by factor of on each subsequent retry",
        "hierarchy": "Control Retry",
        "module": "Control.Retry",
        "name": "baseDelay",
        "normalized": "",
        "package": "retry",
        "partial": "Delay",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/retry/docs/Control-Retry.html#v:delay",
      "description": {
        "fct-descr": "\u003cp\u003eDelay in micro seconds\n\u003c/p\u003e",
        "fct-module": "Control.Retry",
        "fct-package": "retry",
        "fct-signature": "RetrySettings -\u003e Int",
        "fct-source": "src/Control-Retry.html#delay",
        "fct-type": "function",
        "title": "delay"
      },
      "index": {
        "description": "Delay in micro seconds",
        "hierarchy": "Control Retry",
        "module": "Control.Retry",
        "name": "delay",
        "normalized": "RetrySettings-\u003eInt",
        "package": "retry",
        "partial": "",
        "signature": "RetrySettings-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/retry/docs/Control-Retry.html#v:flatDelay",
      "description": {
        "fct-descr": "\u003cp\u003eDelay thread using flat delay\n\u003c/p\u003e",
        "fct-module": "Control.Retry",
        "fct-package": "retry",
        "fct-signature": "RetrySettings -\u003e t -\u003e m ()",
        "fct-source": "src/Control-Retry.html#flatDelay",
        "fct-type": "function",
        "title": "flatDelay"
      },
      "index": {
        "description": "Delay thread using flat delay",
        "hierarchy": "Control Retry",
        "module": "Control.Retry",
        "name": "flatDelay",
        "normalized": "RetrySettings-\u003ea-\u003eb()",
        "package": "retry",
        "partial": "Delay",
        "signature": "RetrySettings-\u003et-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/retry/docs/Control-Retry.html#v:limitedRetries",
      "description": {
        "fct-descr": "\u003cp\u003eSet a limited number of retries. Default in \u003ccode\u003e\u003ca\u003edef\u003c/a\u003e\u003c/code\u003e is 5.\n\u003c/p\u003e",
        "fct-module": "Control.Retry",
        "fct-package": "retry",
        "fct-signature": "Int -\u003e RetryLimit",
        "fct-source": "src/Control-Retry.html#limitedRetries",
        "fct-type": "function",
        "title": "limitedRetries"
      },
      "index": {
        "description": "Set limited number of retries Default in def is",
        "hierarchy": "Control Retry",
        "module": "Control.Retry",
        "name": "limitedRetries",
        "normalized": "Int-\u003eRetryLimit",
        "package": "retry",
        "partial": "Retries",
        "signature": "Int-\u003eRetryLimit"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/retry/docs/Control-Retry.html#v:numRetries",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of retries. Defaults to 5.\n\u003c/p\u003e",
        "fct-module": "Control.Retry",
        "fct-package": "retry",
        "fct-signature": "RetryLimit",
        "fct-source": "src/Control-Retry.html#RetrySettings",
        "fct-type": "function",
        "title": "numRetries"
      },
      "index": {
        "description": "Number of retries Defaults to",
        "hierarchy": "Control Retry",
        "module": "Control.Retry",
        "name": "numRetries",
        "normalized": "",
        "package": "retry",
        "partial": "Retries",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/retry/docs/Control-Retry.html#v:performDelay",
      "description": {
        "fct-descr": "\u003cp\u003ePerform \u003ccode\u003e\u003ca\u003ethreadDelay\u003c/a\u003e\u003c/code\u003e for the nth retry for the given settings.\n\u003c/p\u003e",
        "fct-module": "Control.Retry",
        "fct-package": "retry",
        "fct-signature": "RetrySettings -\u003e Int -\u003e m ()",
        "fct-source": "src/Control-Retry.html#performDelay",
        "fct-type": "function",
        "title": "performDelay"
      },
      "index": {
        "description": "Perform threadDelay for the nth retry for the given settings",
        "hierarchy": "Control Retry",
        "module": "Control.Retry",
        "name": "performDelay",
        "normalized": "RetrySettings-\u003eInt-\u003ea()",
        "package": "retry",
        "partial": "Delay",
        "signature": "RetrySettings-\u003eInt-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/retry/docs/Control-Retry.html#v:recoverAll",
      "description": {
        "fct-descr": "\u003cp\u003eRetry ALL exceptions that may be raised. To be used with caution;\n this matches the exception on \u003ccode\u003e\u003ca\u003eSomeException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSee how the action below is run once and retried 5 more times\n before finally failing for good:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet f = putStrLn \"Running action\" \u003e\u003e error \"this is an error\"\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erecoverAll def f\n\u003c/code\u003e\u003c/strong\u003eRunning action\nRunning action\nRunning action\nRunning action\nRunning action\nRunning action\n*** Exception: this is an error\n\u003c/pre\u003e",
        "fct-module": "Control.Retry",
        "fct-package": "retry",
        "fct-signature": "RetrySettings -\u003e m a -\u003e m a",
        "fct-source": "src/Control-Retry.html#recoverAll",
        "fct-type": "function",
        "title": "recoverAll"
      },
      "index": {
        "description": "Retry ALL exceptions that may be raised To be used with caution this matches the exception on SomeException See how the action below is run once and retried more times before finally failing for good let putStrLn Running action error this is an error recoverAll def Running action Running action Running action Running action Running action Running action Exception this is an error",
        "hierarchy": "Control Retry",
        "module": "Control.Retry",
        "name": "recoverAll",
        "normalized": "RetrySettings-\u003ea b-\u003ea b",
        "package": "retry",
        "partial": "All",
        "signature": "RetrySettings-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/retry/docs/Control-Retry.html#v:recovering",
      "description": {
        "fct-descr": "\u003cp\u003eRun an action and recover from a raised exception by potentially\n retrying the action a number of times.\n\u003c/p\u003e",
        "fct-module": "Control.Retry",
        "fct-package": "retry",
        "fct-signature": "RetrySettings-\u003e [Handler m Bool]-\u003e m a-\u003e m a",
        "fct-type": "function",
        "title": "recovering"
      },
      "index": {
        "description": "Run an action and recover from raised exception by potentially retrying the action number of times",
        "hierarchy": "Control Retry",
        "module": "Control.Retry",
        "name": "recovering",
        "normalized": "RetrySettings-\u003e[Handler a Bool]-\u003ea b-\u003ea b",
        "package": "retry",
        "partial": "",
        "signature": "RetrySettings-\u003e[Handler m Bool]-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/retry/docs/Control-Retry.html#v:retrying",
      "description": {
        "fct-descr": "\u003cp\u003eRetry combinator for actions that don't raise exceptions, but\n signal in their type the outcome has failed. Examples are the\n \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003eEitherT\u003c/code\u003e monads.\n\u003c/p\u003e\u003cp\u003eLet's write a function that always fails and watch this combinator\n retry it 5 additional times following the initial run:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport Data.Maybe\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet f = putStrLn \"Running action\" \u003e\u003e return Nothing\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eretrying def isNothing f\n\u003c/code\u003e\u003c/strong\u003eRunning action\nRunning action\nRunning action\nRunning action\nRunning action\nRunning action\nNothing\n\u003c/pre\u003e\u003cp\u003eNote how the latest failing result is returned after all retries\n have been exhausted.\n\u003c/p\u003e",
        "fct-module": "Control.Retry",
        "fct-package": "retry",
        "fct-signature": "RetrySettings-\u003e (b -\u003e Bool)-\u003e m b-\u003e m b",
        "fct-type": "function",
        "title": "retrying"
      },
      "index": {
        "description": "Retry combinator for actions that don raise exceptions but signal in their type the outcome has failed Examples are the Maybe Either and EitherT monads Let write function that always fails and watch this combinator retry it additional times following the initial run import Data.Maybe let putStrLn Running action return Nothing retrying def isNothing Running action Running action Running action Running action Running action Running action Nothing Note how the latest failing result is returned after all retries have been exhausted",
        "hierarchy": "Control Retry",
        "module": "Control.Retry",
        "name": "retrying",
        "normalized": "RetrySettings-\u003e(a-\u003eBool)-\u003eb a-\u003eb a",
        "package": "retry",
        "partial": "",
        "signature": "RetrySettings-\u003e(b-\u003eBool)-\u003em b-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/retry/docs/Control-Retry.html#v:unlimitedRetries",
      "description": {
        "fct-descr": "\u003cp\u003eSet an unlimited number of retries. Note that with this option\n turned on, the combinator will keep retrying the action\n indefinitely and might essentially hang in some cases.\n\u003c/p\u003e",
        "fct-module": "Control.Retry",
        "fct-package": "retry",
        "fct-signature": "RetryLimit",
        "fct-source": "src/Control-Retry.html#unlimitedRetries",
        "fct-type": "function",
        "title": "unlimitedRetries"
      },
      "index": {
        "description": "Set an unlimited number of retries Note that with this option turned on the combinator will keep retrying the action indefinitely and might essentially hang in some cases",
        "hierarchy": "Control Retry",
        "module": "Control.Retry",
        "name": "unlimitedRetries",
        "normalized": "",
        "package": "retry",
        "partial": "Retries",
        "signature": ""
      }
    }
  }
]