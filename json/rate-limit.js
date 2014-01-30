[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rate-limit/docs/Control-RateLimit.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements rate-limiting functionality for Haskell programs.\n Rate-limiting is useful when trying to control / limit access to a\n particular resource over time. For example, you might want to limit the\n rate at which you make requests to a server, as an administrator may block\n your access if you make too many requests too quickly. Similarly, one may\n wish to rate-limit certain communication actions, in order to avoid\n accidentally performing a denial-of-service attack on a critical resource.\n\u003c/p\u003e\u003cp\u003eThe fundamental idea of this library is that given some basic information\n about the requests you wante rate limited, it will return you a function\n that hides all the rate-limiting detail. In short, you make a call to one\n of the function generators in this file, and you will be returned a function\n to use. For example:\n\u003c/p\u003e\u003cpre\u003e\n   do f \u003c- generateRateLimitedFunction ...\n      ...\n      res1 \u003c- f a\n      ...\n      res2 \u003c- f b\n      ...\n\u003c/pre\u003e\u003cp\u003eThe calls to the generated function (f) will be rate limited based on the\n parameters given to \u003ccode\u003e\u003ca\u003egenerateRateLimitedFunction\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003egenerateRateLimitedFunction\u003c/a\u003e\u003c/code\u003e is the most general version of the rate\n limiting functionality, but specialized versions of it are also exported\n for convenience.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.RateLimit",
        "fct-package": "rate-limit",
        "fct-signature": "module",
        "fct-source": "src/Control-RateLimit.html",
        "fct-type": "module",
        "title": "RateLimit"
      },
      "index": {
        "description": "This module implements rate-limiting functionality for Haskell programs Rate-limiting is useful when trying to control limit access to particular resource over time For example you might want to limit the rate at which you make requests to server as an administrator may block your access if you make too many requests too quickly Similarly one may wish to rate-limit certain communication actions in order to avoid accidentally performing denial-of-service attack on critical resource The fundamental idea of this library is that given some basic information about the requests you wante rate limited it will return you function that hides all the rate-limiting detail In short you make call to one of the function generators in this file and you will be returned function to use For example do generateRateLimitedFunction res1 res2 The calls to the generated function will be rate limited based on the parameters given to generateRateLimitedFunction generateRateLimitedFunction is the most general version of the rate limiting functionality but specialized versions of it are also exported for convenience",
        "hierarchy": "Control RateLimit",
        "module": "Control.RateLimit",
        "name": "RateLimit",
        "normalized": "",
        "package": "rate-limit",
        "partial": "Rate Limit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rate-limit/docs/Control-RateLimit.html#t:RateLimit",
      "description": {
        "fct-descr": "\u003cp\u003eThe rate at which to limit an action.\n\u003c/p\u003e",
        "fct-module": "Control.RateLimit",
        "fct-package": "rate-limit",
        "fct-signature": "data",
        "fct-source": "src/Control-RateLimit.html#RateLimit",
        "fct-type": "data",
        "title": "RateLimit"
      },
      "index": {
        "description": "The rate at which to limit an action",
        "hierarchy": "Control RateLimit",
        "module": "Control.RateLimit",
        "name": "RateLimit",
        "normalized": "",
        "package": "rate-limit",
        "partial": "Rate Limit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rate-limit/docs/Control-RateLimit.html#t:ResultsCombiner",
      "description": {
        "fct-descr": "\u003cp\u003eIn some cases, if two requests are waiting to be run, it may be possible\n to combine them into a single request and thus increase the overall\n bandwidth. The rate limit system supports this, but requires a little\n additional information to make everything work out right. You may also\n need to do something a bit wonky with your types to make this work ... \n sorry.\n\u003c/p\u003e\u003cp\u003eThe basic idea is this: Given two requests, you can either return Nothing\n (signalling that the two requests can be combined), or a Just with a new\n request representing the combination of the two requests. In addition, you\n will need to provide a function that can turn the response to this single\n request into two responses, one for each of the original requests.\n\u003c/p\u003e\u003cp\u003eI hope this description helps you work through the type, which I'll admit\n is a bit opaque.\n\u003c/p\u003e",
        "fct-module": "Control.RateLimit",
        "fct-package": "rate-limit",
        "fct-signature": "type",
        "fct-source": "src/Control-RateLimit.html#ResultsCombiner",
        "fct-type": "type",
        "title": "ResultsCombiner"
      },
      "index": {
        "description": "In some cases if two requests are waiting to be run it may be possible to combine them into single request and thus increase the overall bandwidth The rate limit system supports this but requires little additional information to make everything work out right You may also need to do something bit wonky with your types to make this work sorry The basic idea is this Given two requests you can either return Nothing signalling that the two requests can be combined or Just with new request representing the combination of the two requests In addition you will need to provide function that can turn the response to this single request into two responses one for each of the original requests hope this description helps you work through the type which ll admit is bit opaque",
        "hierarchy": "Control RateLimit",
        "module": "Control.RateLimit",
        "name": "ResultsCombiner",
        "normalized": "",
        "package": "rate-limit",
        "partial": "Results Combiner",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rate-limit/docs/Control-RateLimit.html#v:PerExecution",
      "description": {
        "fct-descr": "\u003cp\u003eRate limit the action to execution once per time\n  unit. With this option, the time it takes for the\n  action to take plase is taken into account, and all\n  actions will necessarily occur sequentially. However,\n  if your action takes longer than the time unit given,\n  then the rate of execution will be slower than the\n  given unit of time.\n\u003c/p\u003e",
        "fct-module": "Control.RateLimit",
        "fct-package": "rate-limit",
        "fct-signature": "PerExecution a",
        "fct-source": "src/Control-RateLimit.html#RateLimit",
        "fct-type": "function",
        "title": "PerExecution"
      },
      "index": {
        "description": "Rate limit the action to execution once per time unit With this option the time it takes for the action to take plase is taken into account and all actions will necessarily occur sequentially However if your action takes longer than the time unit given then the rate of execution will be slower than the given unit of time",
        "hierarchy": "Control RateLimit",
        "module": "Control.RateLimit",
        "name": "PerExecution",
        "normalized": "",
        "package": "rate-limit",
        "partial": "Per Execution",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rate-limit/docs/Control-RateLimit.html#v:PerInvocation",
      "description": {
        "fct-descr": "\u003cp\u003eRate limit the action to invocation once per time\n  unit. With this option, the time it takes for the\n  action to take place is not taken into consideration\n  when computing the rate, only the time between \n  invocations of the action. This may cause the action\n  to execute concurrently, as an invocation may occur\n  while an action is still running.\n\u003c/p\u003e",
        "fct-module": "Control.RateLimit",
        "fct-package": "rate-limit",
        "fct-signature": "PerInvocation a",
        "fct-source": "src/Control-RateLimit.html#RateLimit",
        "fct-type": "function",
        "title": "PerInvocation"
      },
      "index": {
        "description": "Rate limit the action to invocation once per time unit With this option the time it takes for the action to take place is not taken into consideration when computing the rate only the time between invocations of the action This may cause the action to execute concurrently as an invocation may occur while an action is still running",
        "hierarchy": "Control RateLimit",
        "module": "Control.RateLimit",
        "name": "PerInvocation",
        "normalized": "",
        "package": "rate-limit",
        "partial": "Per Invocation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rate-limit/docs/Control-RateLimit.html#v:dontCombine",
      "description": {
        "fct-module": "Control.RateLimit",
        "fct-package": "rate-limit",
        "fct-signature": "ResultsCombiner a b",
        "fct-source": "src/Control-RateLimit.html#dontCombine",
        "fct-type": "function",
        "title": "dontCombine"
      },
      "index": {
        "description": "",
        "hierarchy": "Control RateLimit",
        "module": "Control.RateLimit",
        "name": "dontCombine",
        "normalized": "",
        "package": "rate-limit",
        "partial": "Combine",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rate-limit/docs/Control-RateLimit.html#v:generateRateLimitedFunction",
      "description": {
        "fct-descr": "\u003cp\u003eThe most generic way to rate limit an invocation.\n\u003c/p\u003e",
        "fct-module": "Control.RateLimit",
        "fct-package": "rate-limit",
        "fct-signature": "RateLimit t-\u003e (req -\u003e IO resp)-\u003e ResultsCombiner req resp-\u003e IO (req -\u003e IO resp)",
        "fct-type": "function",
        "title": "generateRateLimitedFunction"
      },
      "index": {
        "description": "The most generic way to rate limit an invocation",
        "hierarchy": "Control RateLimit",
        "module": "Control.RateLimit",
        "name": "generateRateLimitedFunction",
        "normalized": "RateLimit a-\u003e(b-\u003eIO c)-\u003eResultsCombiner b c-\u003eIO(b-\u003eIO c)",
        "package": "rate-limit",
        "partial": "Rate Limited Function",
        "signature": "RateLimit t-\u003e(req-\u003eIO resp)-\u003eResultsCombiner req resp-\u003eIO(req-\u003eIO resp)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rate-limit/docs/Control-RateLimit.html#v:rateLimitExecution",
      "description": {
        "fct-descr": "\u003cp\u003eRate limit the execution of a given action. This is equivalent to calling\n \u003ccode\u003e\u003ca\u003egenerateRateLimitedFunction\u003c/a\u003e\u003c/code\u003e with a \u003ccode\u003e\u003ca\u003ePerExecution\u003c/a\u003e\u003c/code\u003e rate limit and the\n \u003ccode\u003e\u003ca\u003edontCombine\u003c/a\u003e\u003c/code\u003e combining function.\n\u003c/p\u003e",
        "fct-module": "Control.RateLimit",
        "fct-package": "rate-limit",
        "fct-signature": "t -\u003e (req -\u003e IO resp) -\u003e IO (req -\u003e IO resp)",
        "fct-source": "src/Control-RateLimit.html#rateLimitExecution",
        "fct-type": "function",
        "title": "rateLimitExecution"
      },
      "index": {
        "description": "Rate limit the execution of given action This is equivalent to calling generateRateLimitedFunction with PerExecution rate limit and the dontCombine combining function",
        "hierarchy": "Control RateLimit",
        "module": "Control.RateLimit",
        "name": "rateLimitExecution",
        "normalized": "a-\u003e(b-\u003eIO c)-\u003eIO(b-\u003eIO c)",
        "package": "rate-limit",
        "partial": "Limit Execution",
        "signature": "t-\u003e(req-\u003eIO resp)-\u003eIO(req-\u003eIO resp)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rate-limit/docs/Control-RateLimit.html#v:rateLimitInvocation",
      "description": {
        "fct-descr": "\u003cp\u003eRate limit the invocation of a given action. This is equivalent to calling\n \u003ccode\u003e\u003ca\u003egenerateRateLimitedFunction\u003c/a\u003e\u003c/code\u003e with a \u003ccode\u003e\u003ca\u003ePerInvocation\u003c/a\u003e\u003c/code\u003e rate limit and the\n \u003ccode\u003e\u003ca\u003edontCombine\u003c/a\u003e\u003c/code\u003e combining function.\n\u003c/p\u003e",
        "fct-module": "Control.RateLimit",
        "fct-package": "rate-limit",
        "fct-signature": "t -\u003e (req -\u003e IO resp) -\u003e IO (req -\u003e IO resp)",
        "fct-source": "src/Control-RateLimit.html#rateLimitInvocation",
        "fct-type": "function",
        "title": "rateLimitInvocation"
      },
      "index": {
        "description": "Rate limit the invocation of given action This is equivalent to calling generateRateLimitedFunction with PerInvocation rate limit and the dontCombine combining function",
        "hierarchy": "Control RateLimit",
        "module": "Control.RateLimit",
        "name": "rateLimitInvocation",
        "normalized": "a-\u003e(b-\u003eIO c)-\u003eIO(b-\u003eIO c)",
        "package": "rate-limit",
        "partial": "Limit Invocation",
        "signature": "t-\u003e(req-\u003eIO resp)-\u003eIO(req-\u003eIO resp)"
      }
    }
  }
]