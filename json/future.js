[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/future/docs/Control-Concurrent-Future.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis \u003ca\u003eFuture\u003c/a\u003e module was written by Chris Kuklewicz to see if he understood the design and\n utility of the new C++ standard's future.  In particular the ability to cleanly access either a\n resulting value or exception.\n\u003c/p\u003e\u003cp\u003eThere a methods to poll (with \u003ccode\u003e\u003ca\u003echeck\u003c/a\u003e\u003c/code\u003e), to block (with \u003ccode\u003e\u003ca\u003ewait\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003etimedWait\u003c/a\u003e\u003c/code\u003e), and to block and\n retrieve the actual value or rethrow the exception in the accessing thread (with \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003etimedGet\u003c/a\u003e\u003c/code\u003e).  Timeouts are in micro seconds, values less than or equal to zero use non-blocking\n \u003ccode\u003e\u003ca\u003echeck\u003c/a\u003e\u003c/code\u003e.  The timeout should be detected reagarless of the blocking or FFI state of the worker\n thread.\n\u003c/p\u003e\u003cp\u003eOn top of \u003ccode\u003e\u003ca\u003eforkPromise\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eforkPromises\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eracePromises\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003edeclarePromise\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eOne can also manage the threadBy calling \u003ccode\u003e\u003ca\u003eabort\u003c/a\u003e\u003c/code\u003e, which may cause the promise to store the\n exception from the abort as well as killing the worker thread.  The worker thread Id is a\n secret, this is needed to ensure the running of the continuations. The \u003ccode\u003e\u003ca\u003eabort\u003c/a\u003e\u003c/code\u003e operation has the\n same synchronous behavior as \u003ccode\u003e\u003ca\u003ekillThread\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote: There is no way for an outside thread to directly set the value of the promise to a\n non-exception value.  Using \u003ccode\u003e\u003ca\u003eabort\u003c/a\u003e\u003c/code\u003e (or \u003ccode\u003ethrowTo\u003c/code\u003e with \u003ccode\u003egetPromiseThreadId\u003c/code\u003e) creates a race\n condition in setting the result of the promise.  There is no way to change the result of promise\n once it has been set.\n\u003c/p\u003e\u003cp\u003eThe extension to the C++ standard is in the continuation attachment.  The \u003ccode\u003e\u003ca\u003eaddTodo\u003c/a\u003e\u003c/code\u003e command\n will, while the worker is running, add the \u003ccode\u003etodo\u003c/code\u003e continuation to an internal list.  Immediately\n upon finishing the action the worker thread will always run through the queued continuations.\n Each \u003ccode\u003etodo\u003c/code\u003e will be run in its own forkIO thread (unblocked).  If the \u003ccode\u003e\u003ca\u003eaddTodo\u003c/a\u003e\u003c/code\u003e command is\n issued after the promise value has been set then it simplify runs the \u003ccode\u003etodo\u003c/code\u003e in a new thread.\n Thus there is no way multiple continuations can interfere with each other, and there are no\n ordering guarantees between them.  The \u003ccode\u003etodo\u003c/code\u003e action will not be able to distinguish whether it\n is being run from the stored queue or immediately.\n\u003c/p\u003e\u003cp\u003eThe use of \u003ccode\u003e\u003ca\u003eblock\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efinally\u003c/a\u003e\u003c/code\u003e should ensure that no matter how the worker ends the stored\n continations are run.  For instance: if \u003ccode\u003e\u003ca\u003eabort\u003c/a\u003e\u003c/code\u003e is used then the continations might be run with\n that thread killing exception or with the custom \u003ca\u003ePromise.abort\u003c/a\u003e exception if no other result is\n already present.\n\u003c/p\u003e\u003cp\u003eOne use case for \u003ccode\u003e\u003ca\u003eaddTodo\u003c/a\u003e\u003c/code\u003e is to allow multiplexing.  Several promises could be given a\n continuation to write the results to an MChan or MVar, allowing another process to block waiting\n for the first one to finish.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.Future",
        "fct-package": "future",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-Future.html",
        "fct-type": "module",
        "title": "Future"
      },
      "index": {
        "description": "This Future module was written by Chris Kuklewicz to see if he understood the design and utility of the new standard future In particular the ability to cleanly access either resulting value or exception There methods to poll with check to block with wait or timedWait and to block and retrieve the actual value or rethrow the exception in the accessing thread with get or timedGet Timeouts are in micro seconds values less than or equal to zero use non-blocking check The timeout should be detected reagarless of the blocking or FFI state of the worker thread On top of forkPromise is forkPromises racePromises and declarePromise One can also manage the threadBy calling abort which may cause the promise to store the exception from the abort as well as killing the worker thread The worker thread Id is secret this is needed to ensure the running of the continuations The abort operation has the same synchronous behavior as killThread Note There is no way for an outside thread to directly set the value of the promise to non-exception value Using abort or throwTo with getPromiseThreadId creates race condition in setting the result of the promise There is no way to change the result of promise once it has been set The extension to the standard is in the continuation attachment The addTodo command will while the worker is running add the todo continuation to an internal list Immediately upon finishing the action the worker thread will always run through the queued continuations Each todo will be run in its own forkIO thread unblocked If the addTodo command is issued after the promise value has been set then it simplify runs the todo in new thread Thus there is no way multiple continuations can interfere with each other and there are no ordering guarantees between them The todo action will not be able to distinguish whether it is being run from the stored queue or immediately The use of block and finally should ensure that no matter how the worker ends the stored continations are run For instance if abort is used then the continations might be run with that thread killing exception or with the custom Promise.abort exception if no other result is already present One use case for addTodo is to allow multiplexing Several promises could be given continuation to write the results to an MChan or MVar allowing another process to block waiting for the first one to finish",
        "hierarchy": "Control Concurrent Future",
        "module": "Control.Concurrent.Future",
        "name": "Future",
        "normalized": "",
        "package": "future",
        "partial": "Future",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/future/docs/Control-Concurrent-Future.html#t:Promise",
      "description": {
        "fct-module": "Control.Concurrent.Future",
        "fct-package": "future",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-Future.html#Promise",
        "fct-type": "data",
        "title": "Promise"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Future",
        "module": "Control.Concurrent.Future",
        "name": "Promise",
        "normalized": "",
        "package": "future",
        "partial": "Promise",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/future/docs/Control-Concurrent-Future.html#t:PromiseResult",
      "description": {
        "fct-module": "Control.Concurrent.Future",
        "fct-package": "future",
        "fct-signature": "type",
        "fct-source": "src/Control-Concurrent-Future.html#PromiseResult",
        "fct-type": "type",
        "title": "PromiseResult"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Future",
        "module": "Control.Concurrent.Future",
        "name": "PromiseResult",
        "normalized": "",
        "package": "future",
        "partial": "Promise Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/future/docs/Control-Concurrent-Future.html#v:abort",
      "description": {
        "fct-descr": "\u003cp\u003eIf the abort occurs before the action has stored a result then the result is set to an\n exception.  The first call to abort gets the threadId and performs the, possibly blocking,\n killThread.  If it completes then the ThreadId is forgotten (so the thread can be garbage\n collected).\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Future",
        "fct-package": "future",
        "fct-signature": "Promise t -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-Future.html#abort",
        "fct-type": "function",
        "title": "abort"
      },
      "index": {
        "description": "If the abort occurs before the action has stored result then the result is set to an exception The first call to abort gets the threadId and performs the possibly blocking killThread If it completes then the ThreadId is forgotten so the thread can be garbage collected",
        "hierarchy": "Control Concurrent Future",
        "module": "Control.Concurrent.Future",
        "name": "abort",
        "normalized": "Promise a-\u003eIO()",
        "package": "future",
        "partial": "",
        "signature": "Promise t-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/future/docs/Control-Concurrent-Future.html#v:addTodo",
      "description": {
        "fct-descr": "\u003cp\u003ePost an action to perform in a new thread with the reasult of the promise.  All are run\n unblocked in a fresh thread.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Future",
        "fct-package": "future",
        "fct-signature": "Promise a -\u003e (PromiseResult a -\u003e IO ()) -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-Future.html#addTodo",
        "fct-type": "function",
        "title": "addTodo"
      },
      "index": {
        "description": "Post an action to perform in new thread with the reasult of the promise All are run unblocked in fresh thread",
        "hierarchy": "Control Concurrent Future",
        "module": "Control.Concurrent.Future",
        "name": "addTodo",
        "normalized": "Promise a-\u003e(PromiseResult a-\u003eIO())-\u003eIO()",
        "package": "future",
        "partial": "Todo",
        "signature": "Promise a-\u003e(PromiseResult a-\u003eIO())-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/future/docs/Control-Concurrent-Future.html#v:check",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003echeck\u003c/a\u003e\u003c/code\u003e is a non-blocking read.  Like \u003ccode\u003e\u003ca\u003etimedWait\u003c/a\u003e\u003c/code\u003e with 0 delay.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Future",
        "fct-package": "future",
        "fct-signature": "Promise a -\u003e IO (Maybe (PromiseResult a))",
        "fct-source": "src/Control-Concurrent-Future.html#check",
        "fct-type": "function",
        "title": "check"
      },
      "index": {
        "description": "check is non-blocking read Like timedWait with delay",
        "hierarchy": "Control Concurrent Future",
        "module": "Control.Concurrent.Future",
        "name": "check",
        "normalized": "Promise a-\u003eIO(Maybe(PromiseResult a))",
        "package": "future",
        "partial": "",
        "signature": "Promise a-\u003eIO(Maybe(PromiseResult a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/future/docs/Control-Concurrent-Future.html#v:declarePromise",
      "description": {
        "fct-descr": "\u003cp\u003edeclarePromise is built on top of forkPromise.  It creates a promise and an function to fulfill\n the promise with an action.  The first time the fulfull function is used it gives the action to\n the promise and returns True.  All additional usages of the fulfill function will do nothing and\n return False.  Note that the Promise may be aborted before the fulfill function is used, and in\n this case the fulfill function will appear to succeed but achieve nothing.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Future",
        "fct-package": "future",
        "fct-signature": "IO (Promise a, IO a -\u003e IO Bool)",
        "fct-source": "src/Control-Concurrent-Future.html#declarePromise",
        "fct-type": "function",
        "title": "declarePromise"
      },
      "index": {
        "description": "declarePromise is built on top of forkPromise It creates promise and an function to fulfill the promise with an action The first time the fulfull function is used it gives the action to the promise and returns True All additional usages of the fulfill function will do nothing and return False Note that the Promise may be aborted before the fulfill function is used and in this case the fulfill function will appear to succeed but achieve nothing",
        "hierarchy": "Control Concurrent Future",
        "module": "Control.Concurrent.Future",
        "name": "declarePromise",
        "normalized": "IO(Promise a,IO a-\u003eIO Bool)",
        "package": "future",
        "partial": "Promise",
        "signature": "IO(Promise a,IO a-\u003eIO Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/future/docs/Control-Concurrent-Future.html#v:forkPromise",
      "description": {
        "fct-descr": "\u003cp\u003eforkPromise take an action to run, and runs it in a new thread.  This is run in an \u003ca\u003eunblock\u003c/a\u003e\n context.  If the action succeeds it will store its result as (Right {}).  If the action throws\n an exception, or the\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Future",
        "fct-package": "future",
        "fct-signature": "IO a -\u003e IO (Promise a)",
        "fct-source": "src/Control-Concurrent-Future.html#forkPromise",
        "fct-type": "function",
        "title": "forkPromise"
      },
      "index": {
        "description": "forkPromise take an action to run and runs it in new thread This is run in an unblock context If the action succeeds it will store its result as Right If the action throws an exception or the",
        "hierarchy": "Control Concurrent Future",
        "module": "Control.Concurrent.Future",
        "name": "forkPromise",
        "normalized": "IO a-\u003eIO(Promise a)",
        "package": "future",
        "partial": "Promise",
        "signature": "IO a-\u003eIO(Promise a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/future/docs/Control-Concurrent-Future.html#v:forkPromises",
      "description": {
        "fct-descr": "\u003cp\u003eforkPromises is build on top of forkPromise.  It converts a list of actions into a list of\n promises, and additionally collects the results, in completion order, into the returned Chan.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Future",
        "fct-package": "future",
        "fct-signature": "[IO a] -\u003e IO ([Promise a], Chan (PromiseResult a))",
        "fct-source": "src/Control-Concurrent-Future.html#forkPromises",
        "fct-type": "function",
        "title": "forkPromises"
      },
      "index": {
        "description": "forkPromises is build on top of forkPromise It converts list of actions into list of promises and additionally collects the results in completion order into the returned Chan",
        "hierarchy": "Control Concurrent Future",
        "module": "Control.Concurrent.Future",
        "name": "forkPromises",
        "normalized": "[IO a]-\u003eIO([Promise a],Chan(PromiseResult a))",
        "package": "future",
        "partial": "Promises",
        "signature": "[IO a]-\u003eIO([Promise a],Chan(PromiseResult a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/future/docs/Control-Concurrent-Future.html#v:get",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e is wait which rethrows a SomeException in the calling thread\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Future",
        "fct-package": "future",
        "fct-signature": "Promise a -\u003e IO a",
        "fct-source": "src/Control-Concurrent-Future.html#get",
        "fct-type": "function",
        "title": "get"
      },
      "index": {
        "description": "get is wait which rethrows SomeException in the calling thread",
        "hierarchy": "Control Concurrent Future",
        "module": "Control.Concurrent.Future",
        "name": "get",
        "normalized": "Promise a-\u003eIO a",
        "package": "future",
        "partial": "",
        "signature": "Promise a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/future/docs/Control-Concurrent-Future.html#v:racePromises",
      "description": {
        "fct-descr": "\u003cp\u003eracePromises is build on top of forkPromise.  It runs a list of actions as promises and waits\n for the first result (which may be an exception).  Once the result is found it asynchronously\n kills the threads.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Future",
        "fct-package": "future",
        "fct-signature": "[IO a] -\u003e IO (PromiseResult a)",
        "fct-source": "src/Control-Concurrent-Future.html#racePromises",
        "fct-type": "function",
        "title": "racePromises"
      },
      "index": {
        "description": "racePromises is build on top of forkPromise It runs list of actions as promises and waits for the first result which may be an exception Once the result is found it asynchronously kills the threads",
        "hierarchy": "Control Concurrent Future",
        "module": "Control.Concurrent.Future",
        "name": "racePromises",
        "normalized": "[IO a]-\u003eIO(PromiseResult a)",
        "package": "future",
        "partial": "Promises",
        "signature": "[IO a]-\u003eIO(PromiseResult a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/future/docs/Control-Concurrent-Future.html#v:timedGet",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etimedGet\u003c/a\u003e\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003etimedWait\u003c/a\u003e\u003c/code\u003e which rethrows a SomeException in the calling thread\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Future",
        "fct-package": "future",
        "fct-signature": "Int -\u003e Promise a -\u003e IO (Maybe a)",
        "fct-source": "src/Control-Concurrent-Future.html#timedGet",
        "fct-type": "function",
        "title": "timedGet"
      },
      "index": {
        "description": "timedGet is timedWait which rethrows SomeException in the calling thread",
        "hierarchy": "Control Concurrent Future",
        "module": "Control.Concurrent.Future",
        "name": "timedGet",
        "normalized": "Int-\u003ePromise a-\u003eIO(Maybe a)",
        "package": "future",
        "partial": "Get",
        "signature": "Int-\u003ePromise a-\u003eIO(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/future/docs/Control-Concurrent-Future.html#v:timedWait",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etimedWait\u003c/a\u003e\u003c/code\u003e with a positive value in micro seconds is a blocking read with timeout.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Future",
        "fct-package": "future",
        "fct-signature": "Int -\u003e Promise a -\u003e IO (Maybe (PromiseResult a))",
        "fct-source": "src/Control-Concurrent-Future.html#timedWait",
        "fct-type": "function",
        "title": "timedWait"
      },
      "index": {
        "description": "timedWait with positive value in micro seconds is blocking read with timeout",
        "hierarchy": "Control Concurrent Future",
        "module": "Control.Concurrent.Future",
        "name": "timedWait",
        "normalized": "Int-\u003ePromise a-\u003eIO(Maybe(PromiseResult a))",
        "package": "future",
        "partial": "Wait",
        "signature": "Int-\u003ePromise a-\u003eIO(Maybe(PromiseResult a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/future/docs/Control-Concurrent-Future.html#v:wait",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewait\u003c/a\u003e\u003c/code\u003e is a blocking read.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Future",
        "fct-package": "future",
        "fct-signature": "Promise a -\u003e IO (PromiseResult a)",
        "fct-source": "src/Control-Concurrent-Future.html#wait",
        "fct-type": "function",
        "title": "wait"
      },
      "index": {
        "description": "wait is blocking read",
        "hierarchy": "Control Concurrent Future",
        "module": "Control.Concurrent.Future",
        "name": "wait",
        "normalized": "Promise a-\u003eIO(PromiseResult a)",
        "package": "future",
        "partial": "",
        "signature": "Promise a-\u003eIO(PromiseResult a)"
      }
    }
  }
]