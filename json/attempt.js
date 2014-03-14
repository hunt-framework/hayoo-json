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
        "word": "attempt"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA universal data type for computations which may fail. Errors are reported\n using extensible exceptions. These exceptions are not explicitly stated; if\n you want this kind of functionality, something like control-monad-exception\n might be a more appropriate fit.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Attempt",
          "name": "Attempt",
          "package": "attempt",
          "source": "src/Data-Attempt.html",
          "type": "module"
        },
        "index": {
          "description": "universal data type for computations which may fail Errors are reported using extensible exceptions These exceptions are not explicitly stated if you want this kind of functionality something like control-monad-exception might be more appropriate fit",
          "hierarchy": "Data Attempt",
          "module": "Data.Attempt",
          "name": "Attempt",
          "package": "attempt",
          "partial": "Attempt",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/attempt/docs/Data-Attempt.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContains either a \u003ccode\u003e\u003ca\u003eSuccess\u003c/a\u003e\u003c/code\u003e value or a \u003ccode\u003e\u003ca\u003eFailure\u003c/a\u003e\u003c/code\u003e exception.\n\u003c/p\u003e",
          "module": "Data.Attempt",
          "name": "Attempt",
          "package": "attempt",
          "source": "src/Data-Attempt.html#Attempt",
          "type": "data"
        },
        "index": {
          "description": "Contains either Success value or Failure exception",
          "hierarchy": "Data Attempt",
          "module": "Data.Attempt",
          "name": "Attempt",
          "package": "attempt",
          "partial": "Attempt",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/attempt/docs/Data-Attempt.html#t:Attempt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple wrapper value necesary due to the Haskell type system. Wraps a\n function from a *specific* \u003ccode\u003e\u003ca\u003eException\u003c/a\u003e\u003c/code\u003e type to some value.\n\u003c/p\u003e",
          "module": "Data.Attempt",
          "name": "AttemptHandler",
          "package": "attempt",
          "source": "src/Data-Attempt.html#AttemptHandler",
          "type": "data"
        },
        "index": {
          "description": "simple wrapper value necesary due to the Haskell type system Wraps function from specific Exception type to some value",
          "hierarchy": "Data Attempt",
          "module": "Data.Attempt",
          "name": "AttemptHandler",
          "package": "attempt",
          "partial": "Attempt Handler",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/attempt/docs/Data-Attempt.html#t:AttemptHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny type which can be converted from an \u003ccode\u003e\u003ca\u003eAttempt\u003c/a\u003e\u003c/code\u003e. The included instances are your \"usual suspects\" for dealing with error handling. They include:\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e: For the IO instance, any exceptions in the \u003ccode\u003e\u003ca\u003eAttempt\u003c/a\u003e\u003c/code\u003e are thrown as\n runtime exceptions.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e: Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e on \u003ccode\u003e\u003ca\u003eFailure\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e on \u003ccode\u003e\u003ca\u003eSuccess\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eList: Returns the empty list on \u003ccode\u003e\u003ca\u003eFailure\u003c/a\u003e\u003c/code\u003e, or a singleton list on \u003ccode\u003e\u003ca\u003eSuccess\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e: Returns \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e exception) on \u003ccode\u003e\u003ca\u003eFailure\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e on\n \u003ccode\u003e\u003ca\u003eSuccess\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eException\u003c/a\u003e\u003c/code\u003e: Returns \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e exception on \u003ccode\u003e\u003ca\u003eFailure\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e on\n \u003ccode\u003e\u003ca\u003eSuccess\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Attempt",
          "name": "FromAttempt",
          "package": "attempt",
          "source": "src/Data-Attempt.html#FromAttempt",
          "type": "class"
        },
        "index": {
          "description": "Any type which can be converted from an Attempt The included instances are your usual suspects for dealing with error handling They include IO For the IO instance any exceptions in the Attempt are thrown as runtime exceptions Maybe Returns Nothing on Failure or Just on Success List Returns the empty list on Failure or singleton list on Success Either String Returns Left show exception on Failure or Right on Success Either Exception Returns Left exception on Failure or Right on Success",
          "hierarchy": "Data Attempt",
          "module": "Data.Attempt",
          "name": "FromAttempt",
          "package": "attempt",
          "partial": "From Attempt",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/attempt/docs/Data-Attempt.html#t:FromAttempt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Attempt",
          "name": "AttemptHandler",
          "package": "attempt",
          "signature": "AttemptHandler (e -\u003e v)",
          "source": "src/Data-Attempt.html#AttemptHandler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Attempt",
          "module": "Data.Attempt",
          "name": "AttemptHandler",
          "normalized": "AttemptHandler(a-\u003eb)",
          "package": "attempt",
          "partial": "Attempt Handler",
          "signature": "AttemptHandler(e-\u003ev)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attempt/docs/Data-Attempt.html#v:AttemptHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Attempt",
          "name": "Failure",
          "package": "attempt",
          "signature": "Failure e",
          "source": "src/Data-Attempt.html#Attempt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Attempt",
          "module": "Data.Attempt",
          "name": "Failure",
          "package": "attempt",
          "partial": "Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attempt/docs/Data-Attempt.html#v:Failure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Attempt",
          "name": "Success",
          "package": "attempt",
          "signature": "Success v",
          "source": "src/Data-Attempt.html#Attempt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Attempt",
          "module": "Data.Attempt",
          "name": "Success",
          "package": "attempt",
          "partial": "Success",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attempt/docs/Data-Attempt.html#v:Success"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcess either the exception or value in an \u003ccode\u003e\u003ca\u003eAttempt\u003c/a\u003e\u003c/code\u003e to produce a result.\n\u003c/p\u003e\u003cp\u003eThis function is modeled after \u003ccode\u003e\u003ca\u003emaybe\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eeither\u003c/a\u003e\u003c/code\u003e. The first argument must\n accept any instances of \u003ccode\u003e\u003ca\u003eException\u003c/a\u003e\u003c/code\u003e. If you want to handle multiple types\n of exceptions, see \u003ccode\u003e\u003ca\u003emakeHandler\u003c/a\u003e\u003c/code\u003e. The second argument converts the success\n value.\n\u003c/p\u003e\u003cp\u003eNote that this function does not expose all the data available in an\n \u003ccode\u003e\u003ca\u003eAttempt\u003c/a\u003e\u003c/code\u003e value. Notably, the monadic stack trace is not passed on to the\n error handler. If desired, use the \u003ccode\u003emonadicStackTrace\u003c/code\u003e function to extract\n it.\n\u003c/p\u003e",
          "module": "Data.Attempt",
          "name": "attempt",
          "package": "attempt",
          "signature": "e -\u003e b)-\u003e (a -\u003e b)-\u003e Attempt a-\u003e b",
          "type": "function"
        },
        "index": {
          "description": "Process either the exception or value in an Attempt to produce result This function is modeled after maybe and either The first argument must accept any instances of Exception If you want to handle multiple types of exceptions see makeHandler The second argument converts the success value Note that this function does not expose all the data available in an Attempt value Notably the monadic stack trace is not passed on to the error handler If desired use the monadicStackTrace function to extract it",
          "hierarchy": "Data Attempt",
          "module": "Data.Attempt",
          "name": "attempt",
          "normalized": "a-\u003eb)-\u003e(c-\u003eb)-\u003eAttempt c-\u003eb",
          "package": "attempt",
          "signature": "e-\u003eb)-\u003e(a-\u003eb)-\u003eAttempt a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attempt/docs/Data-Attempt.html#v:attempt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCatches runtime (ie, IO) exceptions and inserts them into an \u003ccode\u003e\u003ca\u003eAttempt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eLike \u003ccode\u003ehandle\u003c/code\u003e, the first argument to this function must explicitly state the\n type of its input.\n\u003c/p\u003e",
          "module": "Data.Attempt",
          "name": "attemptIO",
          "package": "attempt",
          "signature": "(eIn -\u003e eOut) -\u003e IO v -\u003e IO (Attempt v)",
          "source": "src/Data-Attempt.html#attemptIO",
          "type": "function"
        },
        "index": {
          "description": "Catches runtime ie IO exceptions and inserts them into an Attempt Like handle the first argument to this function must explicitly state the type of its input",
          "hierarchy": "Data Attempt",
          "module": "Data.Attempt",
          "name": "attemptIO",
          "normalized": "(a-\u003eb)-\u003eIO c-\u003eIO(Attempt c)",
          "package": "attempt",
          "partial": "IO",
          "signature": "(eIn-\u003eeOut)-\u003eIO v-\u003eIO(Attempt v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attempt/docs/Data-Attempt.html#v:attemptIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA shortcut for \u003ccode\u003e\u003ca\u003efromAttempt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Attempt",
          "name": "fa",
          "package": "attempt",
          "signature": "Attempt v -\u003e a v",
          "source": "src/Data-Attempt.html#fa",
          "type": "function"
        },
        "index": {
          "description": "shortcut for fromAttempt",
          "hierarchy": "Data Attempt",
          "module": "Data.Attempt",
          "name": "fa",
          "normalized": "Attempt a-\u003eb a",
          "package": "attempt",
          "signature": "Attempt v-\u003ea v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attempt/docs/Data-Attempt.html#v:fa"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns only the \u003ccode\u003e\u003ca\u003eFailure\u003c/a\u003e\u003c/code\u003e values, each wrapped in a \u003ccode\u003eSomeException\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Attempt",
          "name": "failures",
          "package": "attempt",
          "signature": "[Attempt v] -\u003e [SomeException]",
          "source": "src/Data-Attempt.html#failures",
          "type": "function"
        },
        "index": {
          "description": "Returns only the Failure values each wrapped in SomeException",
          "hierarchy": "Data Attempt",
          "module": "Data.Attempt",
          "name": "failures",
          "normalized": "[Attempt a]-\u003e[SomeException]",
          "package": "attempt",
          "signature": "[Attempt v]-\u003e[SomeException]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attempt/docs/Data-Attempt.html#v:failures"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Attempt",
          "name": "fromAttempt",
          "package": "attempt",
          "signature": "Attempt v -\u003e a v",
          "source": "src/Data-Attempt.html#fromAttempt",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Attempt",
          "module": "Data.Attempt",
          "name": "fromAttempt",
          "normalized": "Attempt a-\u003eb a",
          "package": "attempt",
          "partial": "Attempt",
          "signature": "Attempt v-\u003ea v",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/attempt/docs/Data-Attempt.html#v:fromAttempt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is an unsafe, partial function which should only be used if you\n either know that a function will succeed or don't mind the occassional\n runtime exception.\n\u003c/p\u003e",
          "module": "Data.Attempt",
          "name": "fromSuccess",
          "package": "attempt",
          "signature": "Attempt v -\u003e v",
          "source": "src/Data-Attempt.html#fromSuccess",
          "type": "function"
        },
        "index": {
          "description": "This is an unsafe partial function which should only be used if you either know that function will succeed or don mind the occassional runtime exception",
          "hierarchy": "Data Attempt",
          "module": "Data.Attempt",
          "name": "fromSuccess",
          "normalized": "Attempt a-\u003ea",
          "package": "attempt",
          "partial": "Success",
          "signature": "Attempt v-\u003ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attempt/docs/Data-Attempt.html#v:fromSuccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTests for a \u003ccode\u003e\u003ca\u003eFailure\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Data.Attempt",
          "name": "isFailure",
          "package": "attempt",
          "signature": "Attempt v -\u003e Bool",
          "source": "src/Data-Attempt.html#isFailure",
          "type": "function"
        },
        "index": {
          "description": "Tests for Failure value",
          "hierarchy": "Data Attempt",
          "module": "Data.Attempt",
          "name": "isFailure",
          "normalized": "Attempt a-\u003eBool",
          "package": "attempt",
          "partial": "Failure",
          "signature": "Attempt v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attempt/docs/Data-Attempt.html#v:isFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTests for a \u003ccode\u003e\u003ca\u003eSuccess\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Data.Attempt",
          "name": "isSuccess",
          "package": "attempt",
          "signature": "Attempt v -\u003e Bool",
          "source": "src/Data-Attempt.html#isSuccess",
          "type": "function"
        },
        "index": {
          "description": "Tests for Success value",
          "hierarchy": "Data Attempt",
          "module": "Data.Attempt",
          "name": "isSuccess",
          "normalized": "Attempt a-\u003eBool",
          "package": "attempt",
          "partial": "Success",
          "signature": "Attempt v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attempt/docs/Data-Attempt.html#v:isSuccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is not a simple translation of the Control.Monad.join function.\n Instead, for \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003es which are instances of \u003ccode\u003e\u003ca\u003eFromAttempt\u003c/a\u003e\u003c/code\u003e, it removes the\n inner \u003ccode\u003e\u003ca\u003eAttempt\u003c/a\u003e\u003c/code\u003e type, reporting errors as defined in the \u003ccode\u003e\u003ca\u003eFromAttempt\u003c/a\u003e\u003c/code\u003e\n instance.\n\u003c/p\u003e\u003cp\u003eFor example, join (Just (failureString \"foo\")) == Nothing.\n\u003c/p\u003e",
          "module": "Data.Attempt",
          "name": "joinAttempt",
          "package": "attempt",
          "signature": "m (Attempt v) -\u003e m v",
          "source": "src/Data-Attempt.html#joinAttempt",
          "type": "function"
        },
        "index": {
          "description": "This is not simple translation of the Control.Monad.join function Instead for Monad which are instances of FromAttempt it removes the inner Attempt type reporting errors as defined in the FromAttempt instance For example join Just failureString foo Nothing",
          "hierarchy": "Data Attempt",
          "module": "Data.Attempt",
          "name": "joinAttempt",
          "normalized": "a(Attempt b)-\u003ea b",
          "package": "attempt",
          "partial": "Attempt",
          "signature": "m(Attempt v)-\u003em v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attempt/docs/Data-Attempt.html#v:joinAttempt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert multiple \u003ccode\u003e\u003ca\u003eAttemptHandler\u003c/a\u003e\u003c/code\u003es and a default value into an exception\n handler.\n\u003c/p\u003e\u003cp\u003eThis is a convenience function when you want to have special handling for a\n few types of \u003ccode\u003e\u003ca\u003eException\u003c/a\u003e\u003c/code\u003es and provide another value for anything else.\n\u003c/p\u003e",
          "module": "Data.Attempt",
          "name": "makeHandler",
          "package": "attempt",
          "signature": "e -\u003e v",
          "source": "src/Data-Attempt.html#makeHandler",
          "type": "function"
        },
        "index": {
          "description": "Convert multiple AttemptHandler and default value into an exception handler This is convenience function when you want to have special handling for few types of Exception and provide another value for anything else",
          "hierarchy": "Data Attempt",
          "module": "Data.Attempt",
          "name": "makeHandler",
          "normalized": "a-\u003eb",
          "package": "attempt",
          "partial": "Handler",
          "signature": "e-\u003ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attempt/docs/Data-Attempt.html#v:makeHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all of the \u003ccode\u003e\u003ca\u003eFailure\u003c/a\u003e\u003c/code\u003es and \u003ccode\u003e\u003ca\u003eSuccess\u003c/a\u003e\u003c/code\u003ees separately in a tuple.\n\u003c/p\u003e",
          "module": "Data.Attempt",
          "name": "partitionAttempts",
          "package": "attempt",
          "signature": "[Attempt v] -\u003e ([SomeException], [v])",
          "source": "src/Data-Attempt.html#partitionAttempts",
          "type": "function"
        },
        "index": {
          "description": "Return all of the Failure and Success es separately in tuple",
          "hierarchy": "Data Attempt",
          "module": "Data.Attempt",
          "name": "partitionAttempts",
          "normalized": "[Attempt a]-\u003e([SomeException],[a])",
          "package": "attempt",
          "partial": "Attempts",
          "signature": "[Attempt v]-\u003e([SomeException],[v])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attempt/docs/Data-Attempt.html#v:partitionAttempts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns only the \u003ccode\u003e\u003ca\u003eSuccess\u003c/a\u003e\u003c/code\u003e values.\n\u003c/p\u003e",
          "module": "Data.Attempt",
          "name": "successes",
          "package": "attempt",
          "signature": "[Attempt v] -\u003e [v]",
          "source": "src/Data-Attempt.html#successes",
          "type": "function"
        },
        "index": {
          "description": "Returns only the Success values",
          "hierarchy": "Data Attempt",
          "module": "Data.Attempt",
          "name": "successes",
          "normalized": "[Attempt a]-\u003e[a]",
          "package": "attempt",
          "signature": "[Attempt v]-\u003e[v]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/attempt/docs/Data-Attempt.html#v:successes"
      }
    }
  ]
]