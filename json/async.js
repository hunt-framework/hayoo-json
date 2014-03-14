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
        "word": "async"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a set of operations for running IO operations\n asynchronously and waiting for their results.  It is a thin layer\n over the basic concurrency operations provided by\n \u003ca\u003eControl.Concurrent\u003c/a\u003e.  The main additional functionality it\n provides is the ability to wait for the return value of a thread,\n but the interface also provides some additional safety and\n robustness over using threads and \u003ccode\u003eMVar\u003c/code\u003e directly.\n\u003c/p\u003e\u003cp\u003eThe basic type is \u003ccode\u003e\u003ccode\u003e\u003ca\u003eAsync\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e, which represents an asynchronous\n \u003ccode\u003eIO\u003c/code\u003e action that will return a value of type \u003ccode\u003ea\u003c/code\u003e, or die with an\n exception.  An \u003ccode\u003eAsync\u003c/code\u003e corresponds to a thread, and its \u003ccode\u003e\u003ca\u003eThreadId\u003c/a\u003e\u003c/code\u003e\n can be obtained with \u003ccode\u003e\u003ca\u003easyncThreadId\u003c/a\u003e\u003c/code\u003e, although that should rarely\n be necessary.\n\u003c/p\u003e\u003cp\u003eFor example, to fetch two web pages at the same time, we could do\n this (assuming a suitable \u003ccode\u003egetURL\u003c/code\u003e function):\n\u003c/p\u003e\u003cpre\u003e    do a1 \u003c- async (getURL url1)\n       a2 \u003c- async (getURL url2)\n       page1 \u003c- wait a1\n       page2 \u003c- wait a2\n       ...\n\u003c/pre\u003e\u003cp\u003ewhere \u003ccode\u003e\u003ca\u003easync\u003c/a\u003e\u003c/code\u003e starts the operation in a separate thread, and\n \u003ccode\u003e\u003ca\u003ewait\u003c/a\u003e\u003c/code\u003e waits for and returns the result.  If the operation\n throws an exception, then that exception is re-thrown by\n \u003ccode\u003e\u003ca\u003ewait\u003c/a\u003e\u003c/code\u003e.  This is one of the ways in which this library\n provides some additional safety: it is harder to accidentally\n forget about exceptions thrown in child threads.\n\u003c/p\u003e\u003cp\u003eA slight improvement over the previous example is this:\n\u003c/p\u003e\u003cpre\u003e       withAsync (getURL url1) $ \\a1 -\u003e do\n       withAsync (getURL url2) $ \\a2 -\u003e do\n       page1 \u003c- wait a1\n       page2 \u003c- wait a2\n       ...\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ewithAsync\u003c/a\u003e\u003c/code\u003e is like \u003ccode\u003e\u003ca\u003easync\u003c/a\u003e\u003c/code\u003e, except that the \u003ccode\u003e\u003ca\u003eAsync\u003c/a\u003e\u003c/code\u003e is\n automatically killed (using \u003ccode\u003e\u003ca\u003ecancel\u003c/a\u003e\u003c/code\u003e) if the enclosing IO operation\n returns before it has completed.  Consider the case when the first\n \u003ccode\u003e\u003ca\u003ewait\u003c/a\u003e\u003c/code\u003e throws an exception; then the second \u003ccode\u003e\u003ca\u003eAsync\u003c/a\u003e\u003c/code\u003e will be\n automatically killed rather than being left to run in the\n background, possibly indefinitely.  This is the second way that the\n library provides additional safety: using \u003ccode\u003e\u003ca\u003ewithAsync\u003c/a\u003e\u003c/code\u003e means we can\n avoid accidentally leaving threads running.  Furthermore,\n \u003ccode\u003e\u003ca\u003ewithAsync\u003c/a\u003e\u003c/code\u003e allows a tree of threads to be built, such that\n children are automatically killed if their parents die for any\n reason.\n\u003c/p\u003e\u003cp\u003eThe pattern of performing two IO actions concurrently and waiting\n for their results is packaged up in a combinator \u003ccode\u003e\u003ca\u003econcurrently\u003c/a\u003e\u003c/code\u003e, so\n we can further shorten the above example to:\n\u003c/p\u003e\u003cpre\u003e       (page1, page2) \u003c- concurrently (getURL url1) (getURL url2)\n       ...\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e instance can be used to change the result of an\n \u003ccode\u003e\u003ca\u003eAsync\u003c/a\u003e\u003c/code\u003e.  For example:\n\u003c/p\u003e\u003cpre\u003e ghci\u003e a \u003c- async (return 3)\n ghci\u003e wait a\n 3\n ghci\u003e wait (fmap (+1) a)\n 4\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.Async",
          "name": "Async",
          "package": "async",
          "source": "src/Control-Concurrent-Async.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides set of operations for running IO operations asynchronously and waiting for their results It is thin layer over the basic concurrency operations provided by Control.Concurrent The main additional functionality it provides is the ability to wait for the return value of thread but the interface also provides some additional safety and robustness over using threads and MVar directly The basic type is Async which represents an asynchronous IO action that will return value of type or die with an exception An Async corresponds to thread and its ThreadId can be obtained with asyncThreadId although that should rarely be necessary For example to fetch two web pages at the same time we could do this assuming suitable getURL function do a1 async getURL url1 a2 async getURL url2 page1 wait a1 page2 wait a2 where async starts the operation in separate thread and wait waits for and returns the result If the operation throws an exception then that exception is re-thrown by wait This is one of the ways in which this library provides some additional safety it is harder to accidentally forget about exceptions thrown in child threads slight improvement over the previous example is this withAsync getURL url1 a1 do withAsync getURL url2 a2 do page1 wait a1 page2 wait a2 withAsync is like async except that the Async is automatically killed using cancel if the enclosing IO operation returns before it has completed Consider the case when the first wait throws an exception then the second Async will be automatically killed rather than being left to run in the background possibly indefinitely This is the second way that the library provides additional safety using withAsync means we can avoid accidentally leaving threads running Furthermore withAsync allows tree of threads to be built such that children are automatically killed if their parents die for any reason The pattern of performing two IO actions concurrently and waiting for their results is packaged up in combinator concurrently so we can further shorten the above example to page1 page2 concurrently getURL url1 getURL url2 The Functor instance can be used to change the result of an Async For example ghci async return ghci wait ghci wait fmap",
          "hierarchy": "Control Concurrent Async",
          "module": "Control.Concurrent.Async",
          "name": "Async",
          "package": "async",
          "partial": "Async",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/async/docs/Control-Concurrent-Async.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn asynchronous action spawned by \u003ccode\u003e\u003ca\u003easync\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ewithAsync\u003c/a\u003e\u003c/code\u003e.\n Asynchronous actions are executed in a separate thread, and\n operations are provided for waiting for asynchronous actions to\n complete and obtaining their results (see e.g. \u003ccode\u003e\u003ca\u003ewait\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async",
          "name": "Async",
          "package": "async",
          "source": "src/Control-Concurrent-Async.html#Async",
          "type": "data"
        },
        "index": {
          "description": "An asynchronous action spawned by async or withAsync Asynchronous actions are executed in separate thread and operations are provided for waiting for asynchronous actions to complete and obtaining their results see e.g wait",
          "hierarchy": "Control Concurrent Async",
          "module": "Control.Concurrent.Async",
          "name": "Async",
          "package": "async",
          "partial": "Async",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/async/docs/Control-Concurrent-Async.html#t:Async"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA value of type \u003ccode\u003eConcurrently a\u003c/code\u003e is an \u003ccode\u003eIO\u003c/code\u003e operation that can be\n composed with other \u003ccode\u003eConcurrently\u003c/code\u003e values, using the \u003ccode\u003eApplicative\u003c/code\u003e\n and \u003ccode\u003eAlternative\u003c/code\u003e instances.\n\u003c/p\u003e\u003cp\u003eCalling \u003ccode\u003erunConcurrently\u003c/code\u003e on a value of type \u003ccode\u003eConcurrently a\u003c/code\u003e will\n execute the \u003ccode\u003eIO\u003c/code\u003e operations it contains concurrently, before\n delivering the result of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example\n\u003c/p\u003e\u003cpre\u003e (page1, page2, page3)\n     \u003c- runConcurrently $ (,,)\n     \u003c$\u003e Concurrently (getURL \"url1\")\n     \u003c*\u003e Concurrently (getURL \"url2\")\n     \u003c*\u003e Concurrently (getURL \"url3\")\n\u003c/pre\u003e",
          "module": "Control.Concurrent.Async",
          "name": "Concurrently",
          "package": "async",
          "source": "src/Control-Concurrent-Async.html#Concurrently",
          "type": "newtype"
        },
        "index": {
          "description": "value of type Concurrently is an IO operation that can be composed with other Concurrently values using the Applicative and Alternative instances Calling runConcurrently on value of type Concurrently will execute the IO operations it contains concurrently before delivering the result of type For example page1 page2 page3 runConcurrently Concurrently getURL url1 Concurrently getURL url2 Concurrently getURL url3",
          "hierarchy": "Control Concurrent Async",
          "module": "Control.Concurrent.Async",
          "name": "Concurrently",
          "package": "async",
          "partial": "Concurrently",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/async/docs/Control-Concurrent-Async.html#t:Concurrently"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Async",
          "name": "Concurrently",
          "package": "async",
          "signature": "Concurrently",
          "source": "src/Control-Concurrent-Async.html#Concurrently",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Async",
          "module": "Control.Concurrent.Async",
          "name": "Concurrently",
          "package": "async",
          "partial": "Concurrently",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/async/docs/Control-Concurrent-Async.html#v:Concurrently"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpawn an asynchronous action in a separate thread.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async",
          "name": "async",
          "package": "async",
          "signature": "IO a -\u003e IO (Async a)",
          "source": "src/Control-Concurrent-Async.html#async",
          "type": "function"
        },
        "index": {
          "description": "Spawn an asynchronous action in separate thread",
          "hierarchy": "Control Concurrent Async",
          "module": "Control.Concurrent.Async",
          "name": "async",
          "normalized": "IO a-\u003eIO(Async a)",
          "package": "async",
          "signature": "IO a-\u003eIO(Async a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/async/docs/Control-Concurrent-Async.html#v:async"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003easync\u003c/a\u003e\u003c/code\u003e but using \u003ccode\u003e\u003ca\u003eforkOS\u003c/a\u003e\u003c/code\u003e internally.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async",
          "name": "asyncBound",
          "package": "async",
          "signature": "IO a -\u003e IO (Async a)",
          "source": "src/Control-Concurrent-Async.html#asyncBound",
          "type": "function"
        },
        "index": {
          "description": "Like async but using forkOS internally",
          "hierarchy": "Control Concurrent Async",
          "module": "Control.Concurrent.Async",
          "name": "asyncBound",
          "normalized": "IO a-\u003eIO(Async a)",
          "package": "async",
          "partial": "Bound",
          "signature": "IO a-\u003eIO(Async a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/async/docs/Control-Concurrent-Async.html#v:asyncBound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003easync\u003c/a\u003e\u003c/code\u003e but using \u003ccode\u003e\u003ca\u003eforkOn\u003c/a\u003e\u003c/code\u003e internally.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async",
          "name": "asyncOn",
          "package": "async",
          "signature": "Int -\u003e IO a -\u003e IO (Async a)",
          "source": "src/Control-Concurrent-Async.html#asyncOn",
          "type": "function"
        },
        "index": {
          "description": "Like async but using forkOn internally",
          "hierarchy": "Control Concurrent Async",
          "module": "Control.Concurrent.Async",
          "name": "asyncOn",
          "normalized": "Int-\u003eIO a-\u003eIO(Async a)",
          "package": "async",
          "partial": "On",
          "signature": "Int-\u003eIO a-\u003eIO(Async a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/async/docs/Control-Concurrent-Async.html#v:asyncOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003easyncOn\u003c/a\u003e\u003c/code\u003e but using \u003ccode\u003e\u003ca\u003eforkOnWithUnmask\u003c/a\u003e\u003c/code\u003e internally.\n The child thread is passed a function that can be used to unmask asynchronous exceptions.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async",
          "name": "asyncOnWithUnmask",
          "package": "async",
          "signature": "Int -\u003e ((forall b.  IO b -\u003e IO b) -\u003e IO a) -\u003e IO (Async a)",
          "source": "src/Control-Concurrent-Async.html#asyncOnWithUnmask",
          "type": "function"
        },
        "index": {
          "description": "Like asyncOn but using forkOnWithUnmask internally The child thread is passed function that can be used to unmask asynchronous exceptions",
          "hierarchy": "Control Concurrent Async",
          "module": "Control.Concurrent.Async",
          "name": "asyncOnWithUnmask",
          "normalized": "Int-\u003e((a b IO c-\u003eIO c)-\u003eIO d)-\u003eIO(Async d)",
          "package": "async",
          "partial": "On With Unmask",
          "signature": "Int-\u003e((forall b. IO b-\u003eIO b)-\u003eIO a)-\u003eIO(Async a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/async/docs/Control-Concurrent-Async.html#v:asyncOnWithUnmask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the \u003ccode\u003e\u003ca\u003eThreadId\u003c/a\u003e\u003c/code\u003e of the thread running the given \u003ccode\u003e\u003ca\u003eAsync\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async",
          "name": "asyncThreadId",
          "package": "async",
          "signature": "Async a -\u003e ThreadId",
          "source": "src/Control-Concurrent-Async.html#asyncThreadId",
          "type": "function"
        },
        "index": {
          "description": "Returns the ThreadId of the thread running the given Async",
          "hierarchy": "Control Concurrent Async",
          "module": "Control.Concurrent.Async",
          "name": "asyncThreadId",
          "normalized": "Async a-\u003eThreadId",
          "package": "async",
          "partial": "Thread Id",
          "signature": "Async a-\u003eThreadId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/async/docs/Control-Concurrent-Async.html#v:asyncThreadId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003easync\u003c/a\u003e\u003c/code\u003e but using \u003ccode\u003e\u003ca\u003eforkIOWithUnmask\u003c/a\u003e\u003c/code\u003e internally.\n The child thread is passed a function that can be used to unmask asynchronous exceptions.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async",
          "name": "asyncWithUnmask",
          "package": "async",
          "signature": "((forall b.  IO b -\u003e IO b) -\u003e IO a) -\u003e IO (Async a)",
          "source": "src/Control-Concurrent-Async.html#asyncWithUnmask",
          "type": "function"
        },
        "index": {
          "description": "Like async but using forkIOWithUnmask internally The child thread is passed function that can be used to unmask asynchronous exceptions",
          "hierarchy": "Control Concurrent Async",
          "module": "Control.Concurrent.Async",
          "name": "asyncWithUnmask",
          "normalized": "((a b IO c-\u003eIO c)-\u003eIO d)-\u003eIO(Async d)",
          "package": "async",
          "partial": "With Unmask",
          "signature": "((forall b. IO b-\u003eIO b)-\u003eIO a)-\u003eIO(Async a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/async/docs/Control-Concurrent-Async.html#v:asyncWithUnmask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCancel an asynchronous action by throwing the \u003ccode\u003eThreadKilled\u003c/code\u003e\n exception to it.  Has no effect if the \u003ccode\u003e\u003ca\u003eAsync\u003c/a\u003e\u003c/code\u003e has already\n completed.\n\u003c/p\u003e\u003cpre\u003e cancel a = throwTo (asyncThreadId a) ThreadKilled\n\u003c/pre\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003ecancel\u003c/a\u003e\u003c/code\u003e is synchronous in the same sense as \u003ccode\u003e\u003ca\u003ethrowTo\u003c/a\u003e\u003c/code\u003e.\n It does not return until the exception has been thrown in the\n target thread, or the target thread has completed.  In particular,\n if the target thread is making a foreign call, the exception will\n not be thrown until the foreign call returns, and in this case\n \u003ccode\u003e\u003ca\u003ecancel\u003c/a\u003e\u003c/code\u003e may block indefinitely.  An asynchronous \u003ccode\u003e\u003ca\u003ecancel\u003c/a\u003e\u003c/code\u003e can\n of course be obtained by wrapping \u003ccode\u003e\u003ca\u003ecancel\u003c/a\u003e\u003c/code\u003e itself in \u003ccode\u003e\u003ca\u003easync\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async",
          "name": "cancel",
          "package": "async",
          "signature": "Async a -\u003e IO ()",
          "source": "src/Control-Concurrent-Async.html#cancel",
          "type": "function"
        },
        "index": {
          "description": "Cancel an asynchronous action by throwing the ThreadKilled exception to it Has no effect if the Async has already completed cancel throwTo asyncThreadId ThreadKilled Note that cancel is synchronous in the same sense as throwTo It does not return until the exception has been thrown in the target thread or the target thread has completed In particular if the target thread is making foreign call the exception will not be thrown until the foreign call returns and in this case cancel may block indefinitely An asynchronous cancel can of course be obtained by wrapping cancel itself in async",
          "hierarchy": "Control Concurrent Async",
          "module": "Control.Concurrent.Async",
          "name": "cancel",
          "normalized": "Async a-\u003eIO()",
          "package": "async",
          "signature": "Async a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/async/docs/Control-Concurrent-Async.html#v:cancel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCancel an asynchronous action by throwing the supplied exception\n to it.\n\u003c/p\u003e\u003cpre\u003e cancelWith a x = throwTo (asyncThreadId a) x\n\u003c/pre\u003e\u003cp\u003eThe notes about the synchronous nature of \u003ccode\u003e\u003ca\u003ecancel\u003c/a\u003e\u003c/code\u003e also apply to\n \u003ccode\u003e\u003ca\u003ecancelWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async",
          "name": "cancelWith",
          "package": "async",
          "signature": "Async a -\u003e e -\u003e IO ()",
          "source": "src/Control-Concurrent-Async.html#cancelWith",
          "type": "function"
        },
        "index": {
          "description": "Cancel an asynchronous action by throwing the supplied exception to it cancelWith throwTo asyncThreadId The notes about the synchronous nature of cancel also apply to cancelWith",
          "hierarchy": "Control Concurrent Async",
          "module": "Control.Concurrent.Async",
          "name": "cancelWith",
          "normalized": "Async a-\u003eb-\u003eIO()",
          "package": "async",
          "partial": "With",
          "signature": "Async a-\u003ee-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/async/docs/Control-Concurrent-Async.html#v:cancelWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun two \u003ccode\u003eIO\u003c/code\u003e actions concurrently, and return both results.  If\n either action throws an exception at any time, then the other\n action is \u003ccode\u003e\u003ca\u003ecancel\u003c/a\u003e\u003c/code\u003eled, and the exception is re-thrown by\n \u003ccode\u003e\u003ca\u003econcurrently\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e concurrently left right =\n   withAsync left $ \\a -\u003e\n   withAsync right $ \\b -\u003e\n   waitBoth a b\n\u003c/pre\u003e",
          "module": "Control.Concurrent.Async",
          "name": "concurrently",
          "package": "async",
          "signature": "IO a -\u003e IO b -\u003e IO (a, b)",
          "source": "src/Control-Concurrent-Async.html#concurrently",
          "type": "function"
        },
        "index": {
          "description": "Run two IO actions concurrently and return both results If either action throws an exception at any time then the other action is cancel led and the exception is re-thrown by concurrently concurrently left right withAsync left withAsync right waitBoth",
          "hierarchy": "Control Concurrent Async",
          "module": "Control.Concurrent.Async",
          "name": "concurrently",
          "normalized": "IO a-\u003eIO b-\u003eIO(a,b)",
          "package": "async",
          "signature": "IO a-\u003eIO b-\u003eIO(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/async/docs/Control-Concurrent-Async.html#v:concurrently"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLink the given \u003ccode\u003eAsync\u003c/code\u003e to the current thread, such that if the\n \u003ccode\u003eAsync\u003c/code\u003e raises an exception, that exception will be re-thrown in\n the current thread.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async",
          "name": "link",
          "package": "async",
          "signature": "Async a -\u003e IO ()",
          "source": "src/Control-Concurrent-Async.html#link",
          "type": "function"
        },
        "index": {
          "description": "Link the given Async to the current thread such that if the Async raises an exception that exception will be re-thrown in the current thread",
          "hierarchy": "Control Concurrent Async",
          "module": "Control.Concurrent.Async",
          "name": "link",
          "normalized": "Async a-\u003eIO()",
          "package": "async",
          "signature": "Async a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/async/docs/Control-Concurrent-Async.html#v:link"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLink two \u003ccode\u003eAsync\u003c/code\u003es together, such that if either raises an\n exception, the same exception is re-thrown in the other \u003ccode\u003eAsync\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async",
          "name": "link2",
          "package": "async",
          "signature": "Async a -\u003e Async b -\u003e IO ()",
          "source": "src/Control-Concurrent-Async.html#link2",
          "type": "function"
        },
        "index": {
          "description": "Link two Async together such that if either raises an exception the same exception is re-thrown in the other Async",
          "hierarchy": "Control Concurrent Async",
          "module": "Control.Concurrent.Async",
          "name": "link2",
          "normalized": "Async a-\u003eAsync b-\u003eIO()",
          "package": "async",
          "signature": "Async a-\u003eAsync b-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/async/docs/Control-Concurrent-Async.html#v:link2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emaps an \u003ccode\u003eIO\u003c/code\u003e-performing function over any \u003ccode\u003eTraversable\u003c/code\u003e data\n type, performing all the \u003ccode\u003eIO\u003c/code\u003e actions concurrently, and returning\n the original data structure with the arguments replaced by the\n results.\n\u003c/p\u003e\u003cp\u003eFor example, \u003ccode\u003emapConcurrently\u003c/code\u003e works with lists:\n\u003c/p\u003e\u003cpre\u003e pages \u003c- mapConcurrently getURL [\"url1\", \"url2\", \"url3\"]\n\u003c/pre\u003e",
          "module": "Control.Concurrent.Async",
          "name": "mapConcurrently",
          "package": "async",
          "signature": "(a -\u003e IO b) -\u003e t a -\u003e IO (t b)",
          "source": "src/Control-Concurrent-Async.html#mapConcurrently",
          "type": "function"
        },
        "index": {
          "description": "maps an IO performing function over any Traversable data type performing all the IO actions concurrently and returning the original data structure with the arguments replaced by the results For example mapConcurrently works with lists pages mapConcurrently getURL url1 url2 url3",
          "hierarchy": "Control Concurrent Async",
          "module": "Control.Concurrent.Async",
          "name": "mapConcurrently",
          "normalized": "(a-\u003eIO b)-\u003ec a-\u003eIO(c b)",
          "package": "async",
          "partial": "Concurrently",
          "signature": "(a-\u003eIO b)-\u003et a-\u003eIO(t b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/async/docs/Control-Concurrent-Async.html#v:mapConcurrently"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether an \u003ccode\u003e\u003ca\u003eAsync\u003c/a\u003e\u003c/code\u003e has completed yet.  If it has not\n completed yet, then the result is \u003ccode\u003eNothing\u003c/code\u003e, otherwise the result\n is \u003ccode\u003eJust e\u003c/code\u003e where \u003ccode\u003ee\u003c/code\u003e is \u003ccode\u003eLeft x\u003c/code\u003e if the \u003ccode\u003eAsync\u003c/code\u003e raised an\n exception \u003ccode\u003ex\u003c/code\u003e, or \u003ccode\u003eRight a\u003c/code\u003e if it returned a value \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e poll = atomically . pollSTM\n\u003c/pre\u003e",
          "module": "Control.Concurrent.Async",
          "name": "poll",
          "package": "async",
          "signature": "Async a -\u003e IO (Maybe (Either SomeException a))",
          "source": "src/Control-Concurrent-Async.html#poll",
          "type": "function"
        },
        "index": {
          "description": "Check whether an Async has completed yet If it has not completed yet then the result is Nothing otherwise the result is Just where is Left if the Async raised an exception or Right if it returned value poll atomically pollSTM",
          "hierarchy": "Control Concurrent Async",
          "module": "Control.Concurrent.Async",
          "name": "poll",
          "normalized": "Async a-\u003eIO(Maybe(Either SomeException a))",
          "package": "async",
          "signature": "Async a-\u003eIO(Maybe(Either SomeException a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/async/docs/Control-Concurrent-Async.html#v:poll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003epoll\u003c/a\u003e\u003c/code\u003e that can be used inside an STM transaction.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async",
          "name": "pollSTM",
          "package": "async",
          "signature": "Async a -\u003e STM (Maybe (Either SomeException a))",
          "source": "src/Control-Concurrent-Async.html#pollSTM",
          "type": "function"
        },
        "index": {
          "description": "version of poll that can be used inside an STM transaction",
          "hierarchy": "Control Concurrent Async",
          "module": "Control.Concurrent.Async",
          "name": "pollSTM",
          "normalized": "Async a-\u003eSTM(Maybe(Either SomeException a))",
          "package": "async",
          "partial": "STM",
          "signature": "Async a-\u003eSTM(Maybe(Either SomeException a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/async/docs/Control-Concurrent-Async.html#v:pollSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun two \u003ccode\u003eIO\u003c/code\u003e actions concurrently, and return the first to\n finish.  The loser of the race is \u003ccode\u003e\u003ca\u003ecancel\u003c/a\u003e\u003c/code\u003eled.\n\u003c/p\u003e\u003cpre\u003e race left right =\n   withAsync left $ \\a -\u003e\n   withAsync right $ \\b -\u003e\n   waitEither a b\n\u003c/pre\u003e",
          "module": "Control.Concurrent.Async",
          "name": "race",
          "package": "async",
          "signature": "IO a -\u003e IO b -\u003e IO (Either a b)",
          "source": "src/Control-Concurrent-Async.html#race",
          "type": "function"
        },
        "index": {
          "description": "Run two IO actions concurrently and return the first to finish The loser of the race is cancel led race left right withAsync left withAsync right waitEither",
          "hierarchy": "Control Concurrent Async",
          "module": "Control.Concurrent.Async",
          "name": "race",
          "normalized": "IO a-\u003eIO b-\u003eIO(Either a b)",
          "package": "async",
          "signature": "IO a-\u003eIO b-\u003eIO(Either a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/async/docs/Control-Concurrent-Async.html#v:race"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erace\u003c/a\u003e\u003c/code\u003e, but the result is ignored.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async",
          "name": "race_",
          "package": "async",
          "signature": "IO a -\u003e IO b -\u003e IO ()",
          "source": "src/Control-Concurrent-Async.html#race_",
          "type": "function"
        },
        "index": {
          "description": "Like race but the result is ignored",
          "hierarchy": "Control Concurrent Async",
          "module": "Control.Concurrent.Async",
          "name": "race_",
          "normalized": "IO a-\u003eIO b-\u003eIO()",
          "package": "async",
          "signature": "IO a-\u003eIO b-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/async/docs/Control-Concurrent-Async.html#v:race_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Async",
          "name": "runConcurrently",
          "package": "async",
          "signature": "IO a",
          "source": "src/Control-Concurrent-Async.html#Concurrently",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Async",
          "module": "Control.Concurrent.Async",
          "name": "runConcurrently",
          "package": "async",
          "partial": "Concurrently",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/async/docs/Control-Concurrent-Async.html#v:runConcurrently"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWait for an asynchronous action to complete, and return its\n value.  If the asynchronous action threw an exception, then the\n exception is re-thrown by \u003ccode\u003e\u003ca\u003ewait\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e wait = atomically . waitSTM\n\u003c/pre\u003e",
          "module": "Control.Concurrent.Async",
          "name": "wait",
          "package": "async",
          "signature": "Async a -\u003e IO a",
          "source": "src/Control-Concurrent-Async.html#wait",
          "type": "function"
        },
        "index": {
          "description": "Wait for an asynchronous action to complete and return its value If the asynchronous action threw an exception then the exception is re-thrown by wait wait atomically waitSTM",
          "hierarchy": "Control Concurrent Async",
          "module": "Control.Concurrent.Async",
          "name": "wait",
          "normalized": "Async a-\u003eIO a",
          "package": "async",
          "signature": "Async a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/async/docs/Control-Concurrent-Async.html#v:wait"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWait for any of the supplied \u003ccode\u003eAsync\u003c/code\u003es to complete.  If the first\n to complete throws an exception, then that exception is re-thrown\n by \u003ccode\u003e\u003ca\u003ewaitAny\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf multiple \u003ccode\u003e\u003ca\u003eAsync\u003c/a\u003e\u003c/code\u003es complete or have completed, then the value\n returned corresponds to the first completed \u003ccode\u003e\u003ca\u003eAsync\u003c/a\u003e\u003c/code\u003e in the list.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async",
          "name": "waitAny",
          "package": "async",
          "signature": "[Async a] -\u003e IO (Async a, a)",
          "source": "src/Control-Concurrent-Async.html#waitAny",
          "type": "function"
        },
        "index": {
          "description": "Wait for any of the supplied Async to complete If the first to complete throws an exception then that exception is re-thrown by waitAny If multiple Async complete or have completed then the value returned corresponds to the first completed Async in the list",
          "hierarchy": "Control Concurrent Async",
          "module": "Control.Concurrent.Async",
          "name": "waitAny",
          "normalized": "[Async a]-\u003eIO(Async a,a)",
          "package": "async",
          "partial": "Any",
          "signature": "[Async a]-\u003eIO(Async a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/async/docs/Control-Concurrent-Async.html#v:waitAny"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ewaitAny\u003c/a\u003e\u003c/code\u003e, but also cancels the other asynchronous\n operations as soon as one has completed.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async",
          "name": "waitAnyCancel",
          "package": "async",
          "signature": "[Async a] -\u003e IO (Async a, a)",
          "source": "src/Control-Concurrent-Async.html#waitAnyCancel",
          "type": "function"
        },
        "index": {
          "description": "Like waitAny but also cancels the other asynchronous operations as soon as one has completed",
          "hierarchy": "Control Concurrent Async",
          "module": "Control.Concurrent.Async",
          "name": "waitAnyCancel",
          "normalized": "[Async a]-\u003eIO(Async a,a)",
          "package": "async",
          "partial": "Any Cancel",
          "signature": "[Async a]-\u003eIO(Async a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/async/docs/Control-Concurrent-Async.html#v:waitAnyCancel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWait for any of the supplied asynchronous operations to complete.\n The value returned is a pair of the \u003ccode\u003e\u003ca\u003eAsync\u003c/a\u003e\u003c/code\u003e that completed, and the\n result that would be returned by \u003ccode\u003e\u003ca\u003ewait\u003c/a\u003e\u003c/code\u003e on that \u003ccode\u003e\u003ca\u003eAsync\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf multiple \u003ccode\u003e\u003ca\u003eAsync\u003c/a\u003e\u003c/code\u003es complete or have completed, then the value\n returned corresponds to the first completed \u003ccode\u003e\u003ca\u003eAsync\u003c/a\u003e\u003c/code\u003e in the list.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async",
          "name": "waitAnyCatch",
          "package": "async",
          "signature": "[Async a] -\u003e IO (Async a, Either SomeException a)",
          "source": "src/Control-Concurrent-Async.html#waitAnyCatch",
          "type": "function"
        },
        "index": {
          "description": "Wait for any of the supplied asynchronous operations to complete The value returned is pair of the Async that completed and the result that would be returned by wait on that Async If multiple Async complete or have completed then the value returned corresponds to the first completed Async in the list",
          "hierarchy": "Control Concurrent Async",
          "module": "Control.Concurrent.Async",
          "name": "waitAnyCatch",
          "normalized": "[Async a]-\u003eIO(Async a,Either SomeException a)",
          "package": "async",
          "partial": "Any Catch",
          "signature": "[Async a]-\u003eIO(Async a,Either SomeException a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/async/docs/Control-Concurrent-Async.html#v:waitAnyCatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ewaitAnyCatch\u003c/a\u003e\u003c/code\u003e, but also cancels the other asynchronous\n operations as soon as one has completed.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async",
          "name": "waitAnyCatchCancel",
          "package": "async",
          "signature": "[Async a] -\u003e IO (Async a, Either SomeException a)",
          "source": "src/Control-Concurrent-Async.html#waitAnyCatchCancel",
          "type": "function"
        },
        "index": {
          "description": "Like waitAnyCatch but also cancels the other asynchronous operations as soon as one has completed",
          "hierarchy": "Control Concurrent Async",
          "module": "Control.Concurrent.Async",
          "name": "waitAnyCatchCancel",
          "normalized": "[Async a]-\u003eIO(Async a,Either SomeException a)",
          "package": "async",
          "partial": "Any Catch Cancel",
          "signature": "[Async a]-\u003eIO(Async a,Either SomeException a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/async/docs/Control-Concurrent-Async.html#v:waitAnyCatchCancel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWaits for both \u003ccode\u003eAsync\u003c/code\u003es to finish, but if either of them throws\n an exception before they have both finished, then the exception is\n re-thrown by \u003ccode\u003e\u003ca\u003ewaitBoth\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async",
          "name": "waitBoth",
          "package": "async",
          "signature": "Async a -\u003e Async b -\u003e IO (a, b)",
          "source": "src/Control-Concurrent-Async.html#waitBoth",
          "type": "function"
        },
        "index": {
          "description": "Waits for both Async to finish but if either of them throws an exception before they have both finished then the exception is re-thrown by waitBoth",
          "hierarchy": "Control Concurrent Async",
          "module": "Control.Concurrent.Async",
          "name": "waitBoth",
          "normalized": "Async a-\u003eAsync b-\u003eIO(a,b)",
          "package": "async",
          "partial": "Both",
          "signature": "Async a-\u003eAsync b-\u003eIO(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/async/docs/Control-Concurrent-Async.html#v:waitBoth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWait for an asynchronous action to complete, and return either\n \u003ccode\u003eLeft e\u003c/code\u003e if the action raised an exception \u003ccode\u003ee\u003c/code\u003e, or \u003ccode\u003eRight a\u003c/code\u003e if it\n returned a value \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e waitCatch = atomically . waitCatchSTM\n\u003c/pre\u003e",
          "module": "Control.Concurrent.Async",
          "name": "waitCatch",
          "package": "async",
          "signature": "Async a -\u003e IO (Either SomeException a)",
          "source": "src/Control-Concurrent-Async.html#waitCatch",
          "type": "function"
        },
        "index": {
          "description": "Wait for an asynchronous action to complete and return either Left if the action raised an exception or Right if it returned value waitCatch atomically waitCatchSTM",
          "hierarchy": "Control Concurrent Async",
          "module": "Control.Concurrent.Async",
          "name": "waitCatch",
          "normalized": "Async a-\u003eIO(Either SomeException a)",
          "package": "async",
          "partial": "Catch",
          "signature": "Async a-\u003eIO(Either SomeException a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/async/docs/Control-Concurrent-Async.html#v:waitCatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003ewaitCatch\u003c/a\u003e\u003c/code\u003e that can be used inside an STM transaction.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async",
          "name": "waitCatchSTM",
          "package": "async",
          "signature": "Async a -\u003e STM (Either SomeException a)",
          "source": "src/Control-Concurrent-Async.html#waitCatchSTM",
          "type": "function"
        },
        "index": {
          "description": "version of waitCatch that can be used inside an STM transaction",
          "hierarchy": "Control Concurrent Async",
          "module": "Control.Concurrent.Async",
          "name": "waitCatchSTM",
          "normalized": "Async a-\u003eSTM(Either SomeException a)",
          "package": "async",
          "partial": "Catch STM",
          "signature": "Async a-\u003eSTM(Either SomeException a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/async/docs/Control-Concurrent-Async.html#v:waitCatchSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWait for the first of two \u003ccode\u003eAsync\u003c/code\u003es to finish.  If the \u003ccode\u003eAsync\u003c/code\u003e\n that finished first raised an exception, then the exception is\n re-thrown by \u003ccode\u003e\u003ca\u003ewaitEither\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async",
          "name": "waitEither",
          "package": "async",
          "signature": "Async a -\u003e Async b -\u003e IO (Either a b)",
          "source": "src/Control-Concurrent-Async.html#waitEither",
          "type": "function"
        },
        "index": {
          "description": "Wait for the first of two Async to finish If the Async that finished first raised an exception then the exception is re-thrown by waitEither",
          "hierarchy": "Control Concurrent Async",
          "module": "Control.Concurrent.Async",
          "name": "waitEither",
          "normalized": "Async a-\u003eAsync b-\u003eIO(Either a b)",
          "package": "async",
          "partial": "Either",
          "signature": "Async a-\u003eAsync b-\u003eIO(Either a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/async/docs/Control-Concurrent-Async.html#v:waitEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ewaitEither\u003c/a\u003e\u003c/code\u003e, but also \u003ccode\u003e\u003ca\u003ecancel\u003c/a\u003e\u003c/code\u003es both \u003ccode\u003eAsync\u003c/code\u003es before\n returning.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async",
          "name": "waitEitherCancel",
          "package": "async",
          "signature": "Async a -\u003e Async b -\u003e IO (Either a b)",
          "source": "src/Control-Concurrent-Async.html#waitEitherCancel",
          "type": "function"
        },
        "index": {
          "description": "Like waitEither but also cancel both Async before returning",
          "hierarchy": "Control Concurrent Async",
          "module": "Control.Concurrent.Async",
          "name": "waitEitherCancel",
          "normalized": "Async a-\u003eAsync b-\u003eIO(Either a b)",
          "package": "async",
          "partial": "Either Cancel",
          "signature": "Async a-\u003eAsync b-\u003eIO(Either a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/async/docs/Control-Concurrent-Async.html#v:waitEitherCancel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWait for the first of two \u003ccode\u003eAsync\u003c/code\u003es to finish.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async",
          "name": "waitEitherCatch",
          "package": "async",
          "signature": "Async a -\u003e Async b -\u003e IO (Either (Either SomeException a) (Either SomeException b))",
          "source": "src/Control-Concurrent-Async.html#waitEitherCatch",
          "type": "function"
        },
        "index": {
          "description": "Wait for the first of two Async to finish",
          "hierarchy": "Control Concurrent Async",
          "module": "Control.Concurrent.Async",
          "name": "waitEitherCatch",
          "normalized": "Async a-\u003eAsync b-\u003eIO(Either(Either SomeException a)(Either SomeException b))",
          "package": "async",
          "partial": "Either Catch",
          "signature": "Async a-\u003eAsync b-\u003eIO(Either(Either SomeException a)(Either SomeException b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/async/docs/Control-Concurrent-Async.html#v:waitEitherCatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ewaitEitherCatch\u003c/a\u003e\u003c/code\u003e, but also \u003ccode\u003e\u003ca\u003ecancel\u003c/a\u003e\u003c/code\u003es both \u003ccode\u003eAsync\u003c/code\u003es before\n returning.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async",
          "name": "waitEitherCatchCancel",
          "package": "async",
          "signature": "Async a -\u003e Async b -\u003e IO (Either (Either SomeException a) (Either SomeException b))",
          "source": "src/Control-Concurrent-Async.html#waitEitherCatchCancel",
          "type": "function"
        },
        "index": {
          "description": "Like waitEitherCatch but also cancel both Async before returning",
          "hierarchy": "Control Concurrent Async",
          "module": "Control.Concurrent.Async",
          "name": "waitEitherCatchCancel",
          "normalized": "Async a-\u003eAsync b-\u003eIO(Either(Either SomeException a)(Either SomeException b))",
          "package": "async",
          "partial": "Either Catch Cancel",
          "signature": "Async a-\u003eAsync b-\u003eIO(Either(Either SomeException a)(Either SomeException b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/async/docs/Control-Concurrent-Async.html#v:waitEitherCatchCancel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ewaitEither\u003c/a\u003e\u003c/code\u003e, but the result is ignored.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async",
          "name": "waitEither_",
          "package": "async",
          "signature": "Async a -\u003e Async b -\u003e IO ()",
          "source": "src/Control-Concurrent-Async.html#waitEither_",
          "type": "function"
        },
        "index": {
          "description": "Like waitEither but the result is ignored",
          "hierarchy": "Control Concurrent Async",
          "module": "Control.Concurrent.Async",
          "name": "waitEither_",
          "normalized": "Async a-\u003eAsync b-\u003eIO()",
          "package": "async",
          "partial": "Either",
          "signature": "Async a-\u003eAsync b-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/async/docs/Control-Concurrent-Async.html#v:waitEither_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003ewait\u003c/a\u003e\u003c/code\u003e that can be used inside an STM transaction.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async",
          "name": "waitSTM",
          "package": "async",
          "signature": "Async a -\u003e STM a",
          "source": "src/Control-Concurrent-Async.html#waitSTM",
          "type": "function"
        },
        "index": {
          "description": "version of wait that can be used inside an STM transaction",
          "hierarchy": "Control Concurrent Async",
          "module": "Control.Concurrent.Async",
          "name": "waitSTM",
          "normalized": "Async a-\u003eSTM a",
          "package": "async",
          "partial": "STM",
          "signature": "Async a-\u003eSTM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/async/docs/Control-Concurrent-Async.html#v:waitSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpawn an asynchronous action in a separate thread, and pass its\n \u003ccode\u003eAsync\u003c/code\u003e handle to the supplied function.  When the function returns\n or throws an exception, \u003ccode\u003e\u003ca\u003ecancel\u003c/a\u003e\u003c/code\u003e is called on the \u003ccode\u003eAsync\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e withAsync action inner = bracket (async action) cancel inner\n\u003c/pre\u003e\u003cp\u003eThis is a useful variant of \u003ccode\u003e\u003ca\u003easync\u003c/a\u003e\u003c/code\u003e that ensures an \u003ccode\u003eAsync\u003c/code\u003e is\n never left running unintentionally.\n\u003c/p\u003e\u003cp\u003eSince \u003ccode\u003e\u003ca\u003ecancel\u003c/a\u003e\u003c/code\u003e may block, \u003ccode\u003e\u003ca\u003ewithAsync\u003c/a\u003e\u003c/code\u003e may also block; see \u003ccode\u003e\u003ca\u003ecancel\u003c/a\u003e\u003c/code\u003e\n for details.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async",
          "name": "withAsync",
          "package": "async",
          "signature": "IO a -\u003e (Async a -\u003e IO b) -\u003e IO b",
          "source": "src/Control-Concurrent-Async.html#withAsync",
          "type": "function"
        },
        "index": {
          "description": "Spawn an asynchronous action in separate thread and pass its Async handle to the supplied function When the function returns or throws an exception cancel is called on the Async withAsync action inner bracket async action cancel inner This is useful variant of async that ensures an Async is never left running unintentionally Since cancel may block withAsync may also block see cancel for details",
          "hierarchy": "Control Concurrent Async",
          "module": "Control.Concurrent.Async",
          "name": "withAsync",
          "normalized": "IO a-\u003e(Async a-\u003eIO b)-\u003eIO b",
          "package": "async",
          "partial": "Async",
          "signature": "IO a-\u003e(Async a-\u003eIO b)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/async/docs/Control-Concurrent-Async.html#v:withAsync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ewithAsync\u003c/a\u003e\u003c/code\u003e but uses \u003ccode\u003e\u003ca\u003eforkOS\u003c/a\u003e\u003c/code\u003e internally.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async",
          "name": "withAsyncBound",
          "package": "async",
          "signature": "IO a -\u003e (Async a -\u003e IO b) -\u003e IO b",
          "source": "src/Control-Concurrent-Async.html#withAsyncBound",
          "type": "function"
        },
        "index": {
          "description": "Like withAsync but uses forkOS internally",
          "hierarchy": "Control Concurrent Async",
          "module": "Control.Concurrent.Async",
          "name": "withAsyncBound",
          "normalized": "IO a-\u003e(Async a-\u003eIO b)-\u003eIO b",
          "package": "async",
          "partial": "Async Bound",
          "signature": "IO a-\u003e(Async a-\u003eIO b)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/async/docs/Control-Concurrent-Async.html#v:withAsyncBound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ewithAsync\u003c/a\u003e\u003c/code\u003e but uses \u003ccode\u003e\u003ca\u003eforkOn\u003c/a\u003e\u003c/code\u003e internally.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async",
          "name": "withAsyncOn",
          "package": "async",
          "signature": "Int -\u003e IO a -\u003e (Async a -\u003e IO b) -\u003e IO b",
          "source": "src/Control-Concurrent-Async.html#withAsyncOn",
          "type": "function"
        },
        "index": {
          "description": "Like withAsync but uses forkOn internally",
          "hierarchy": "Control Concurrent Async",
          "module": "Control.Concurrent.Async",
          "name": "withAsyncOn",
          "normalized": "Int-\u003eIO a-\u003e(Async a-\u003eIO b)-\u003eIO b",
          "package": "async",
          "partial": "Async On",
          "signature": "Int-\u003eIO a-\u003e(Async a-\u003eIO b)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/async/docs/Control-Concurrent-Async.html#v:withAsyncOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ewithAsyncOn\u003c/a\u003e\u003c/code\u003e but uses \u003ccode\u003e\u003ca\u003eforkOnWithUnmask\u003c/a\u003e\u003c/code\u003e internally.\n The child thread is passed a function that can be used to unmask asynchronous exceptions\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async",
          "name": "withAsyncOnWithUnmask",
          "package": "async",
          "signature": "Int -\u003e ((forall c.  IO c -\u003e IO c) -\u003e IO a) -\u003e (Async a -\u003e IO b) -\u003e IO b",
          "source": "src/Control-Concurrent-Async.html#withAsyncOnWithUnmask",
          "type": "function"
        },
        "index": {
          "description": "Like withAsyncOn but uses forkOnWithUnmask internally The child thread is passed function that can be used to unmask asynchronous exceptions",
          "hierarchy": "Control Concurrent Async",
          "module": "Control.Concurrent.Async",
          "name": "withAsyncOnWithUnmask",
          "normalized": "Int-\u003e((a b IO c-\u003eIO c)-\u003eIO d)-\u003e(Async d-\u003eIO e)-\u003eIO e",
          "package": "async",
          "partial": "Async On With Unmask",
          "signature": "Int-\u003e((forall c. IO c-\u003eIO c)-\u003eIO a)-\u003e(Async a-\u003eIO b)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/async/docs/Control-Concurrent-Async.html#v:withAsyncOnWithUnmask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ewithAsync\u003c/a\u003e\u003c/code\u003e but uses \u003ccode\u003e\u003ca\u003eforkIOWithUnmask\u003c/a\u003e\u003c/code\u003e internally.\n The child thread is passed a function that can be used to unmask asynchronous exceptions.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async",
          "name": "withAsyncWithUnmask",
          "package": "async",
          "signature": "((forall c.  IO c -\u003e IO c) -\u003e IO a) -\u003e (Async a -\u003e IO b) -\u003e IO b",
          "source": "src/Control-Concurrent-Async.html#withAsyncWithUnmask",
          "type": "function"
        },
        "index": {
          "description": "Like withAsync but uses forkIOWithUnmask internally The child thread is passed function that can be used to unmask asynchronous exceptions",
          "hierarchy": "Control Concurrent Async",
          "module": "Control.Concurrent.Async",
          "name": "withAsyncWithUnmask",
          "normalized": "((a b IO c-\u003eIO c)-\u003eIO d)-\u003e(Async d-\u003eIO e)-\u003eIO e",
          "package": "async",
          "partial": "Async With Unmask",
          "signature": "((forall c. IO c-\u003eIO c)-\u003eIO a)-\u003e(Async a-\u003eIO b)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/async/docs/Control-Concurrent-Async.html#v:withAsyncWithUnmask"
      }
    }
  ]
]