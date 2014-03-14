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
        "word": "unsafe-promises"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn experimental library for lazy promises that can be evaluated in \n pure code.\n\u003c/p\u003e\u003cp\u003eEvaluation of a promise before its thread completes results in an \n indefinite block. This is accomplished by the use of \u003ccode\u003e\u003ca\u003eunsafeInterleaveIO\u003c/a\u003e\u003c/code\u003e.\n Thus, care should be taken in using this library, since it couples the\n execution time of pure code with an arbitrary IO computation.\n Using System.Timeout from the timeout package can help to ensure that\n forcing a promise is always well-defined.\n\u003c/p\u003e\u003cp\u003eFor safer implementations of promises, see Control.Concurrent.Spawn from \n the spawn package, and Control.Concurrent.Future from the future package. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.Promise.Unsafe",
          "name": "Unsafe",
          "package": "unsafe-promises",
          "source": "src/Control-Concurrent-Promise-Unsafe.html",
          "type": "module"
        },
        "index": {
          "description": "An experimental library for lazy promises that can be evaluated in pure code Evaluation of promise before its thread completes results in an indefinite block This is accomplished by the use of unsafeInterleaveIO Thus care should be taken in using this library since it couples the execution time of pure code with an arbitrary IO computation Using System.Timeout from the timeout package can help to ensure that forcing promise is always well-defined For safer implementations of promises see Control.Concurrent.Spawn from the spawn package and Control.Concurrent.Future from the future package",
          "hierarchy": "Control Concurrent Promise Unsafe",
          "module": "Control.Concurrent.Promise.Unsafe",
          "name": "Unsafe",
          "package": "unsafe-promises",
          "partial": "Unsafe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unsafe-promises/docs/Control-Concurrent-Promise-Unsafe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForks an IO computation as a thread and immediately returns \n an IO computation that results in a lazy future. Evaluating the future before\n the thread completes causes it to wait for a result. If the thread halts with\n a thrown exception, then evaluating the future will re-throw the exception.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Promise.Unsafe",
          "name": "promise",
          "package": "unsafe-promises",
          "signature": "IO a -\u003e IO a",
          "source": "src/Control-Concurrent-Promise-Unsafe.html#promise",
          "type": "function"
        },
        "index": {
          "description": "Forks an IO computation as thread and immediately returns an IO computation that results in lazy future Evaluating the future before the thread completes causes it to wait for result If the thread halts with thrown exception then evaluating the future will re-throw the exception",
          "hierarchy": "Control Concurrent Promise Unsafe",
          "module": "Control.Concurrent.Promise.Unsafe",
          "name": "promise",
          "normalized": "IO a-\u003eIO a",
          "package": "unsafe-promises",
          "signature": "IO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unsafe-promises/docs/Control-Concurrent-Promise-Unsafe.html#v:promise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForks a sequence of IO computations in multiple threads, and immediately\n returns a list of futures. The order of the futures is determined by\n the order in which the threads terminate. If an exception is thrown by the\n list of threads, then the exception is re-thrown when its corresponding\n future is evaluated.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Promise.Unsafe",
          "name": "promises",
          "package": "unsafe-promises",
          "signature": "[IO a] -\u003e IO [a]",
          "source": "src/Control-Concurrent-Promise-Unsafe.html#promises",
          "type": "function"
        },
        "index": {
          "description": "Forks sequence of IO computations in multiple threads and immediately returns list of futures The order of the futures is determined by the order in which the threads terminate If an exception is thrown by the list of threads then the exception is re-thrown when its corresponding future is evaluated",
          "hierarchy": "Control Concurrent Promise Unsafe",
          "module": "Control.Concurrent.Promise.Unsafe",
          "name": "promises",
          "normalized": "[IO a]-\u003eIO[a]",
          "package": "unsafe-promises",
          "signature": "[IO a]-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unsafe-promises/docs/Control-Concurrent-Promise-Unsafe.html#v:promises"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003epromise\u003c/a\u003e\u003c/code\u003e, but does not rethrow exceptions. Instead the exception is\n wrapped as part of the \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Promise.Unsafe",
          "name": "tryPromise",
          "package": "unsafe-promises",
          "signature": "IO a -\u003e IO (Result a)",
          "source": "src/Control-Concurrent-Promise-Unsafe.html#tryPromise",
          "type": "function"
        },
        "index": {
          "description": "Like promise but does not rethrow exceptions Instead the exception is wrapped as part of the Result",
          "hierarchy": "Control Concurrent Promise Unsafe",
          "module": "Control.Concurrent.Promise.Unsafe",
          "name": "tryPromise",
          "normalized": "IO a-\u003eIO(Result a)",
          "package": "unsafe-promises",
          "partial": "Promise",
          "signature": "IO a-\u003eIO(Result a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unsafe-promises/docs/Control-Concurrent-Promise-Unsafe.html#v:tryPromise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003epromises\u003c/a\u003e\u003c/code\u003e, but doesn't re-throw exceptions.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Promise.Unsafe",
          "name": "tryPromises",
          "package": "unsafe-promises",
          "signature": "[IO a] -\u003e IO [Result a]",
          "source": "src/Control-Concurrent-Promise-Unsafe.html#tryPromises",
          "type": "function"
        },
        "index": {
          "description": "Like promises but doesn re-throw exceptions",
          "hierarchy": "Control Concurrent Promise Unsafe",
          "module": "Control.Concurrent.Promise.Unsafe",
          "name": "tryPromises",
          "normalized": "[IO a]-\u003eIO[Result a]",
          "package": "unsafe-promises",
          "partial": "Promises",
          "signature": "[IO a]-\u003eIO[Result a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unsafe-promises/docs/Control-Concurrent-Promise-Unsafe.html#v:tryPromises"
      }
    }
  ]
]