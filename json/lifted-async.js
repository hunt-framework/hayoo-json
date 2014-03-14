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
        "word": "lifted-async"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is a wrapped version of \u003ca\u003eControl.Concurrent.Async\u003c/a\u003e with types generalized\nfrom \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e to all monads in either \u003ccode\u003e\u003ca\u003eMonadBase\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eMonadBaseControl\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "Lifted",
          "package": "lifted-async",
          "source": "src/Control-Concurrent-Async-Lifted.html",
          "type": "module"
        },
        "index": {
          "description": "This is wrapped version of Control.Concurrent.Async with types generalized from IO to all monads in either MonadBase or MonadBaseControl",
          "hierarchy": "Control Concurrent Async Lifted",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "Lifted",
          "package": "lifted-async",
          "partial": "Lifted",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lifted-async/docs/Control-Concurrent-Async-Lifted.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn asynchronous action spawned by \u003ccode\u003e\u003ca\u003easync\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ewithAsync\u003c/a\u003e\u003c/code\u003e.\n Asynchronous actions are executed in a separate thread, and\n operations are provided for waiting for asynchronous actions to\n complete and obtaining their results (see e.g. \u003ccode\u003e\u003ca\u003ewait\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "Async",
          "package": "lifted-async",
          "type": "data"
        },
        "index": {
          "description": "An asynchronous action spawned by async or withAsync Asynchronous actions are executed in separate thread and operations are provided for waiting for asynchronous actions to complete and obtaining their results see e.g wait",
          "hierarchy": "Control Concurrent Async Lifted",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "Async",
          "package": "lifted-async",
          "partial": "Async",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lifted-async/docs/Control-Concurrent-Async-Lifted.html#t:Async"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA value of type \u003ccode\u003eConcurrently a\u003c/code\u003e is an \u003ccode\u003eIO\u003c/code\u003e operation that can be\n composed with other \u003ccode\u003eConcurrently\u003c/code\u003e values, using the \u003ccode\u003eApplicative\u003c/code\u003e\n and \u003ccode\u003eAlternative\u003c/code\u003e instances.\n\u003c/p\u003e\u003cp\u003eCalling \u003ccode\u003erunConcurrently\u003c/code\u003e on a value of type \u003ccode\u003eConcurrently a\u003c/code\u003e will\n execute the \u003ccode\u003eIO\u003c/code\u003e operations it contains concurrently, before\n delivering the result of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example\n\u003c/p\u003e\u003cpre\u003e (page1, page2, page3)\n     \u003c- runConcurrently $ (,,)\n     \u003c$\u003e Concurrently (getURL \"url1\")\n     \u003c*\u003e Concurrently (getURL \"url2\")\n     \u003c*\u003e Concurrently (getURL \"url3\")\n\u003c/pre\u003e",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "Concurrently",
          "package": "lifted-async",
          "type": "data"
        },
        "index": {
          "description": "value of type Concurrently is an IO operation that can be composed with other Concurrently values using the Applicative and Alternative instances Calling runConcurrently on value of type Concurrently will execute the IO operations it contains concurrently before delivering the result of type For example page1 page2 page3 runConcurrently Concurrently getURL url1 Concurrently getURL url2 Concurrently getURL url3",
          "hierarchy": "Control Concurrent Async Lifted",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "Concurrently",
          "package": "lifted-async",
          "partial": "Concurrently",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lifted-async/docs/Control-Concurrent-Async-Lifted.html#t:Concurrently"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003easync\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "async",
          "package": "lifted-async",
          "signature": "m a -\u003e m (Async (StM m a))",
          "source": "src/Control-Concurrent-Async-Lifted.html#async",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of async",
          "hierarchy": "Control Concurrent Async Lifted",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "async",
          "normalized": "a b-\u003ea(Async(StM a b))",
          "package": "lifted-async",
          "signature": "m a-\u003em(Async(StM m a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-async/docs/Control-Concurrent-Async-Lifted.html#v:async"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003easyncBound\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "asyncBound",
          "package": "lifted-async",
          "signature": "m a -\u003e m (Async (StM m a))",
          "source": "src/Control-Concurrent-Async-Lifted.html#asyncBound",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of asyncBound",
          "hierarchy": "Control Concurrent Async Lifted",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "asyncBound",
          "normalized": "a b-\u003ea(Async(StM a b))",
          "package": "lifted-async",
          "partial": "Bound",
          "signature": "m a-\u003em(Async(StM m a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-async/docs/Control-Concurrent-Async-Lifted.html#v:asyncBound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003easyncOn\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "asyncOn",
          "package": "lifted-async",
          "signature": "Int -\u003e m a -\u003e m (Async (StM m a))",
          "source": "src/Control-Concurrent-Async-Lifted.html#asyncOn",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of asyncOn",
          "hierarchy": "Control Concurrent Async Lifted",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "asyncOn",
          "normalized": "Int-\u003ea b-\u003ea(Async(StM a b))",
          "package": "lifted-async",
          "partial": "On",
          "signature": "Int-\u003em a-\u003em(Async(StM m a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-async/docs/Control-Concurrent-Async-Lifted.html#v:asyncOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003easyncOnWithUnmask\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "asyncOnWithUnmask",
          "package": "lifted-async",
          "signature": "Int -\u003e ((forall b.  m b -\u003e m b) -\u003e m a) -\u003e m (Async (StM m a))",
          "source": "src/Control-Concurrent-Async-Lifted.html#asyncOnWithUnmask",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of asyncOnWithUnmask",
          "hierarchy": "Control Concurrent Async Lifted",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "asyncOnWithUnmask",
          "normalized": "Int-\u003e((a b c d-\u003ec d)-\u003ec e)-\u003ec(Async(StM c e))",
          "package": "lifted-async",
          "partial": "On With Unmask",
          "signature": "Int-\u003e((forall b. m b-\u003em b)-\u003em a)-\u003em(Async(StM m a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-async/docs/Control-Concurrent-Async-Lifted.html#v:asyncOnWithUnmask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the \u003ccode\u003e\u003ca\u003eThreadId\u003c/a\u003e\u003c/code\u003e of the thread running the given \u003ccode\u003e\u003ca\u003eAsync\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "asyncThreadId",
          "package": "lifted-async",
          "signature": "Async a -\u003e ThreadId",
          "type": "function"
        },
        "index": {
          "description": "Returns the ThreadId of the thread running the given Async",
          "hierarchy": "Control Concurrent Async Lifted",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "asyncThreadId",
          "normalized": "Async a-\u003eThreadId",
          "package": "lifted-async",
          "partial": "Thread Id",
          "signature": "Async a-\u003eThreadId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-async/docs/Control-Concurrent-Async-Lifted.html#v:asyncThreadId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003easyncWithUnmask\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "asyncWithUnmask",
          "package": "lifted-async",
          "signature": "((forall b.  m b -\u003e m b) -\u003e m a) -\u003e m (Async (StM m a))",
          "source": "src/Control-Concurrent-Async-Lifted.html#asyncWithUnmask",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of asyncWithUnmask",
          "hierarchy": "Control Concurrent Async Lifted",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "asyncWithUnmask",
          "normalized": "((a b c d-\u003ec d)-\u003ec e)-\u003ec(Async(StM c e))",
          "package": "lifted-async",
          "partial": "With Unmask",
          "signature": "((forall b. m b-\u003em b)-\u003em a)-\u003em(Async(StM m a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-async/docs/Control-Concurrent-Async-Lifted.html#v:asyncWithUnmask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "cancel",
          "package": "lifted-async",
          "signature": "Async (StM m a) -\u003e m ()",
          "source": "src/Control-Concurrent-Async-Lifted.html#cancel",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of catch",
          "hierarchy": "Control Concurrent Async Lifted",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "cancel",
          "normalized": "Async(StM a b)-\u003ea()",
          "package": "lifted-async",
          "signature": "Async(StM m a)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-async/docs/Control-Concurrent-Async-Lifted.html#v:cancel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ecancelWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "cancelWith",
          "package": "lifted-async",
          "signature": "Async (StM m a) -\u003e e -\u003e m ()",
          "source": "src/Control-Concurrent-Async-Lifted.html#cancelWith",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of cancelWith",
          "hierarchy": "Control Concurrent Async Lifted",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "cancelWith",
          "normalized": "Async(StM a b)-\u003ec-\u003ea()",
          "package": "lifted-async",
          "partial": "With",
          "signature": "Async(StM m a)-\u003ee-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-async/docs/Control-Concurrent-Async-Lifted.html#v:cancelWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003econcurrently\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "concurrently",
          "package": "lifted-async",
          "signature": "m a -\u003e m b -\u003e m (a, b)",
          "source": "src/Control-Concurrent-Async-Lifted.html#concurrently",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of concurrently",
          "hierarchy": "Control Concurrent Async Lifted",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "concurrently",
          "normalized": "a b-\u003ea c-\u003ea(b,c)",
          "package": "lifted-async",
          "signature": "m a-\u003em b-\u003em(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-async/docs/Control-Concurrent-Async-Lifted.html#v:concurrently"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003elink\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "link",
          "package": "lifted-async",
          "signature": "Async (StM m a) -\u003e m ()",
          "source": "src/Control-Concurrent-Async-Lifted.html#link",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of link",
          "hierarchy": "Control Concurrent Async Lifted",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "link",
          "normalized": "Async(StM a b)-\u003ea()",
          "package": "lifted-async",
          "signature": "Async(StM m a)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-async/docs/Control-Concurrent-Async-Lifted.html#v:link"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003elink2\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "link2",
          "package": "lifted-async",
          "signature": "Async (StM m a) -\u003e Async (StM m b) -\u003e m ()",
          "source": "src/Control-Concurrent-Async-Lifted.html#link2",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of link2",
          "hierarchy": "Control Concurrent Async Lifted",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "link2",
          "normalized": "Async(StM a b)-\u003eAsync(StM a c)-\u003ea()",
          "package": "lifted-async",
          "signature": "Async(StM m a)-\u003eAsync(StM m b)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-async/docs/Control-Concurrent-Async-Lifted.html#v:link2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003emapConcurrently\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "mapConcurrently",
          "package": "lifted-async",
          "signature": "(a -\u003e m b) -\u003e t a -\u003e m (t b)",
          "source": "src/Control-Concurrent-Async-Lifted.html#mapConcurrently",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of mapConcurrently",
          "hierarchy": "Control Concurrent Async Lifted",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "mapConcurrently",
          "normalized": "(a-\u003eb c)-\u003ed a-\u003eb(d c)",
          "package": "lifted-async",
          "partial": "Concurrently",
          "signature": "(a-\u003em b)-\u003et a-\u003em(t b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-async/docs/Control-Concurrent-Async-Lifted.html#v:mapConcurrently"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003epoll\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "poll",
          "package": "lifted-async",
          "signature": "Async (StM m a) -\u003e m (Maybe (Either SomeException a))",
          "source": "src/Control-Concurrent-Async-Lifted.html#poll",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of poll",
          "hierarchy": "Control Concurrent Async Lifted",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "poll",
          "normalized": "Async(StM a b)-\u003ea(Maybe(Either SomeException b))",
          "package": "lifted-async",
          "signature": "Async(StM m a)-\u003em(Maybe(Either SomeException a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-async/docs/Control-Concurrent-Async-Lifted.html#v:poll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003epoll\u003c/a\u003e\u003c/code\u003e that can be used inside an STM transaction.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "pollSTM",
          "package": "lifted-async",
          "signature": "Async a -\u003e STM (Maybe (Either SomeException a))",
          "type": "function"
        },
        "index": {
          "description": "version of poll that can be used inside an STM transaction",
          "hierarchy": "Control Concurrent Async Lifted",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "pollSTM",
          "normalized": "Async a-\u003eSTM(Maybe(Either SomeException a))",
          "package": "lifted-async",
          "partial": "STM",
          "signature": "Async a-\u003eSTM(Maybe(Either SomeException a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-async/docs/Control-Concurrent-Async-Lifted.html#v:pollSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003erace\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "race",
          "package": "lifted-async",
          "signature": "m a -\u003e m b -\u003e m (Either a b)",
          "source": "src/Control-Concurrent-Async-Lifted.html#race",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of race",
          "hierarchy": "Control Concurrent Async Lifted",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "race",
          "normalized": "a b-\u003ea c-\u003ea(Either b c)",
          "package": "lifted-async",
          "signature": "m a-\u003em b-\u003em(Either a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-async/docs/Control-Concurrent-Async-Lifted.html#v:race"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003erace_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "race_",
          "package": "lifted-async",
          "signature": "m a -\u003e m b -\u003e m ()",
          "source": "src/Control-Concurrent-Async-Lifted.html#race_",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of race",
          "hierarchy": "Control Concurrent Async Lifted",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "race_",
          "normalized": "a b-\u003ea c-\u003ea()",
          "package": "lifted-async",
          "signature": "m a-\u003em b-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-async/docs/Control-Concurrent-Async-Lifted.html#v:race_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Async.Lifted",
          "name": "runConcurrently",
          "package": "lifted-async",
          "signature": "Concurrently a -\u003e IO a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Async Lifted",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "runConcurrently",
          "normalized": "Concurrently a-\u003eIO a",
          "package": "lifted-async",
          "partial": "Concurrently",
          "signature": "Concurrently a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-async/docs/Control-Concurrent-Async-Lifted.html#v:runConcurrently"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ewait\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "wait",
          "package": "lifted-async",
          "signature": "Async (StM m a) -\u003e m a",
          "source": "src/Control-Concurrent-Async-Lifted.html#wait",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of wait",
          "hierarchy": "Control Concurrent Async Lifted",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "wait",
          "normalized": "Async(StM a b)-\u003ea b",
          "package": "lifted-async",
          "signature": "Async(StM m a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-async/docs/Control-Concurrent-Async-Lifted.html#v:wait"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ewaitAny\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "waitAny",
          "package": "lifted-async",
          "signature": "[Async (StM m a)] -\u003e m (Async (StM m a), a)",
          "source": "src/Control-Concurrent-Async-Lifted.html#waitAny",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of waitAny",
          "hierarchy": "Control Concurrent Async Lifted",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "waitAny",
          "normalized": "[Async(StM a b)]-\u003ea(Async(StM a b),b)",
          "package": "lifted-async",
          "partial": "Any",
          "signature": "[Async(StM m a)]-\u003em(Async(StM m a),a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-async/docs/Control-Concurrent-Async-Lifted.html#v:waitAny"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ewaitAnyCancel\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "waitAnyCancel",
          "package": "lifted-async",
          "signature": "[Async a] -\u003e m (Async a, a)",
          "source": "src/Control-Concurrent-Async-Lifted.html#waitAnyCancel",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of waitAnyCancel",
          "hierarchy": "Control Concurrent Async Lifted",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "waitAnyCancel",
          "normalized": "[Async a]-\u003eb(Async a,a)",
          "package": "lifted-async",
          "partial": "Any Cancel",
          "signature": "[Async a]-\u003em(Async a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-async/docs/Control-Concurrent-Async-Lifted.html#v:waitAnyCancel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ewaitAnyCatch\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "waitAnyCatch",
          "package": "lifted-async",
          "signature": "[Async (StM m a)] -\u003e m (Async (StM m a), Either SomeException a)",
          "source": "src/Control-Concurrent-Async-Lifted.html#waitAnyCatch",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of waitAnyCatch",
          "hierarchy": "Control Concurrent Async Lifted",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "waitAnyCatch",
          "normalized": "[Async(StM a b)]-\u003ea(Async(StM a b),Either SomeException b)",
          "package": "lifted-async",
          "partial": "Any Catch",
          "signature": "[Async(StM m a)]-\u003em(Async(StM m a),Either SomeException a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-async/docs/Control-Concurrent-Async-Lifted.html#v:waitAnyCatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ewaitAnyCatchCancel\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "waitAnyCatchCancel",
          "package": "lifted-async",
          "signature": "[Async (StM m a)] -\u003e m (Async (StM m a), Either SomeException a)",
          "source": "src/Control-Concurrent-Async-Lifted.html#waitAnyCatchCancel",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of waitAnyCatchCancel",
          "hierarchy": "Control Concurrent Async Lifted",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "waitAnyCatchCancel",
          "normalized": "[Async(StM a b)]-\u003ea(Async(StM a b),Either SomeException b)",
          "package": "lifted-async",
          "partial": "Any Catch Cancel",
          "signature": "[Async(StM m a)]-\u003em(Async(StM m a),Either SomeException a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-async/docs/Control-Concurrent-Async-Lifted.html#v:waitAnyCatchCancel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ewaitBoth\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "waitBoth",
          "package": "lifted-async",
          "signature": "Async (StM m a) -\u003e Async (StM m b) -\u003e m (a, b)",
          "source": "src/Control-Concurrent-Async-Lifted.html#waitBoth",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of waitBoth",
          "hierarchy": "Control Concurrent Async Lifted",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "waitBoth",
          "normalized": "Async(StM a b)-\u003eAsync(StM a c)-\u003ea(b,c)",
          "package": "lifted-async",
          "partial": "Both",
          "signature": "Async(StM m a)-\u003eAsync(StM m b)-\u003em(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-async/docs/Control-Concurrent-Async-Lifted.html#v:waitBoth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ewaitCatch\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "waitCatch",
          "package": "lifted-async",
          "signature": "Async (StM m a) -\u003e m (Either SomeException a)",
          "source": "src/Control-Concurrent-Async-Lifted.html#waitCatch",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of waitCatch",
          "hierarchy": "Control Concurrent Async Lifted",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "waitCatch",
          "normalized": "Async(StM a b)-\u003ea(Either SomeException b)",
          "package": "lifted-async",
          "partial": "Catch",
          "signature": "Async(StM m a)-\u003em(Either SomeException a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-async/docs/Control-Concurrent-Async-Lifted.html#v:waitCatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003ewaitCatch\u003c/a\u003e\u003c/code\u003e that can be used inside an STM transaction.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "waitCatchSTM",
          "package": "lifted-async",
          "signature": "Async a -\u003e STM (Either SomeException a)",
          "type": "function"
        },
        "index": {
          "description": "version of waitCatch that can be used inside an STM transaction",
          "hierarchy": "Control Concurrent Async Lifted",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "waitCatchSTM",
          "normalized": "Async a-\u003eSTM(Either SomeException a)",
          "package": "lifted-async",
          "partial": "Catch STM",
          "signature": "Async a-\u003eSTM(Either SomeException a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-async/docs/Control-Concurrent-Async-Lifted.html#v:waitCatchSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ewaitEither\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "waitEither",
          "package": "lifted-async",
          "signature": "Async (StM m a) -\u003e Async (StM m b) -\u003e m (Either a b)",
          "source": "src/Control-Concurrent-Async-Lifted.html#waitEither",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of waitEither",
          "hierarchy": "Control Concurrent Async Lifted",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "waitEither",
          "normalized": "Async(StM a b)-\u003eAsync(StM a c)-\u003ea(Either b c)",
          "package": "lifted-async",
          "partial": "Either",
          "signature": "Async(StM m a)-\u003eAsync(StM m b)-\u003em(Either a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-async/docs/Control-Concurrent-Async-Lifted.html#v:waitEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ewaitEitherCancel\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "waitEitherCancel",
          "package": "lifted-async",
          "signature": "Async (StM m a) -\u003e Async (StM m b) -\u003e m (Either a b)",
          "source": "src/Control-Concurrent-Async-Lifted.html#waitEitherCancel",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of waitEitherCancel",
          "hierarchy": "Control Concurrent Async Lifted",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "waitEitherCancel",
          "normalized": "Async(StM a b)-\u003eAsync(StM a c)-\u003ea(Either b c)",
          "package": "lifted-async",
          "partial": "Either Cancel",
          "signature": "Async(StM m a)-\u003eAsync(StM m b)-\u003em(Either a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-async/docs/Control-Concurrent-Async-Lifted.html#v:waitEitherCancel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ewaitEitherCatch\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "waitEitherCatch",
          "package": "lifted-async",
          "signature": "Async (StM m a) -\u003e Async (StM m b) -\u003e m (Either (Either SomeException a) (Either SomeException b))",
          "source": "src/Control-Concurrent-Async-Lifted.html#waitEitherCatch",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of waitEitherCatch",
          "hierarchy": "Control Concurrent Async Lifted",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "waitEitherCatch",
          "normalized": "Async(StM a b)-\u003eAsync(StM a c)-\u003ea(Either(Either SomeException b)(Either SomeException c))",
          "package": "lifted-async",
          "partial": "Either Catch",
          "signature": "Async(StM m a)-\u003eAsync(StM m b)-\u003em(Either(Either SomeException a)(Either SomeException b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-async/docs/Control-Concurrent-Async-Lifted.html#v:waitEitherCatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ewaitEitherCatchCancel\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "waitEitherCatchCancel",
          "package": "lifted-async",
          "signature": "Async (StM m a) -\u003e Async (StM m b) -\u003e m (Either (Either SomeException a) (Either SomeException b))",
          "source": "src/Control-Concurrent-Async-Lifted.html#waitEitherCatchCancel",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of waitEitherCatchCancel",
          "hierarchy": "Control Concurrent Async Lifted",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "waitEitherCatchCancel",
          "normalized": "Async(StM a b)-\u003eAsync(StM a c)-\u003ea(Either(Either SomeException b)(Either SomeException c))",
          "package": "lifted-async",
          "partial": "Either Catch Cancel",
          "signature": "Async(StM m a)-\u003eAsync(StM m b)-\u003em(Either(Either SomeException a)(Either SomeException b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-async/docs/Control-Concurrent-Async-Lifted.html#v:waitEitherCatchCancel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ewaitEither_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "waitEither_",
          "package": "lifted-async",
          "signature": "Async (StM m a) -\u003e Async (StM m b) -\u003e m ()",
          "source": "src/Control-Concurrent-Async-Lifted.html#waitEither_",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of waitEither",
          "hierarchy": "Control Concurrent Async Lifted",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "waitEither_",
          "normalized": "Async(StM a b)-\u003eAsync(StM a c)-\u003ea()",
          "package": "lifted-async",
          "partial": "Either",
          "signature": "Async(StM m a)-\u003eAsync(StM m b)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-async/docs/Control-Concurrent-Async-Lifted.html#v:waitEither_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003ewait\u003c/a\u003e\u003c/code\u003e that can be used inside an STM transaction.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "waitSTM",
          "package": "lifted-async",
          "signature": "Async a -\u003e STM a",
          "type": "function"
        },
        "index": {
          "description": "version of wait that can be used inside an STM transaction",
          "hierarchy": "Control Concurrent Async Lifted",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "waitSTM",
          "normalized": "Async a-\u003eSTM a",
          "package": "lifted-async",
          "partial": "STM",
          "signature": "Async a-\u003eSTM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-async/docs/Control-Concurrent-Async-Lifted.html#v:waitSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ewithAsync\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "withAsync",
          "package": "lifted-async",
          "signature": "m a -\u003e (Async (StM m a) -\u003e m b) -\u003e m b",
          "source": "src/Control-Concurrent-Async-Lifted.html#withAsync",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of withAsync",
          "hierarchy": "Control Concurrent Async Lifted",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "withAsync",
          "normalized": "a b-\u003e(Async(StM a b)-\u003ea c)-\u003ea c",
          "package": "lifted-async",
          "partial": "Async",
          "signature": "m a-\u003e(Async(StM m a)-\u003em b)-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-async/docs/Control-Concurrent-Async-Lifted.html#v:withAsync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ewithAsyncBound\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "withAsyncBound",
          "package": "lifted-async",
          "signature": "m a -\u003e (Async (StM m a) -\u003e m b) -\u003e m b",
          "source": "src/Control-Concurrent-Async-Lifted.html#withAsyncBound",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of withAsyncBound",
          "hierarchy": "Control Concurrent Async Lifted",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "withAsyncBound",
          "normalized": "a b-\u003e(Async(StM a b)-\u003ea c)-\u003ea c",
          "package": "lifted-async",
          "partial": "Async Bound",
          "signature": "m a-\u003e(Async(StM m a)-\u003em b)-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-async/docs/Control-Concurrent-Async-Lifted.html#v:withAsyncBound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ewithAsyncOn\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "withAsyncOn",
          "package": "lifted-async",
          "signature": "Int -\u003e m a -\u003e (Async (StM m a) -\u003e m b) -\u003e m b",
          "source": "src/Control-Concurrent-Async-Lifted.html#withAsyncOn",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of withAsyncOn",
          "hierarchy": "Control Concurrent Async Lifted",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "withAsyncOn",
          "normalized": "Int-\u003ea b-\u003e(Async(StM a b)-\u003ea c)-\u003ea c",
          "package": "lifted-async",
          "partial": "Async On",
          "signature": "Int-\u003em a-\u003e(Async(StM m a)-\u003em b)-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-async/docs/Control-Concurrent-Async-Lifted.html#v:withAsyncOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ewithAsyncOnWithUnmask\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "withAsyncOnWithUnmask",
          "package": "lifted-async",
          "signature": "Int -\u003e ((forall c.  m c -\u003e m c) -\u003e m a) -\u003e (Async (StM m a) -\u003e m b) -\u003e m b",
          "source": "src/Control-Concurrent-Async-Lifted.html#withAsyncOnWithUnmask",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of withAsyncOnWithUnmask",
          "hierarchy": "Control Concurrent Async Lifted",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "withAsyncOnWithUnmask",
          "normalized": "Int-\u003e((a b c d-\u003ec d)-\u003ec e)-\u003e(Async(StM c e)-\u003ec f)-\u003ec f",
          "package": "lifted-async",
          "partial": "Async On With Unmask",
          "signature": "Int-\u003e((forall c. m c-\u003em c)-\u003em a)-\u003e(Async(StM m a)-\u003em b)-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-async/docs/Control-Concurrent-Async-Lifted.html#v:withAsyncOnWithUnmask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ewithAsyncWithUnmask\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "withAsyncWithUnmask",
          "package": "lifted-async",
          "signature": "((forall c.  m c -\u003e m c) -\u003e m a) -\u003e (Async (StM m a) -\u003e m b) -\u003e m b",
          "source": "src/Control-Concurrent-Async-Lifted.html#withAsyncWithUnmask",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of withAsyncWithUnmask",
          "hierarchy": "Control Concurrent Async Lifted",
          "module": "Control.Concurrent.Async.Lifted",
          "name": "withAsyncWithUnmask",
          "normalized": "((a b c d-\u003ec d)-\u003ec e)-\u003e(Async(StM c e)-\u003ec f)-\u003ec f",
          "package": "lifted-async",
          "partial": "Async With Unmask",
          "signature": "((forall c. m c-\u003em c)-\u003em a)-\u003e(Async(StM m a)-\u003em b)-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-async/docs/Control-Concurrent-Async-Lifted.html#v:withAsyncWithUnmask"
      }
    }
  ]
]