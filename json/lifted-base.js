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
        "word": "lifted-base"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is a wrapped version of \u003ca\u003eControl.Concurrent.Chan\u003c/a\u003e with types\ngeneralised from \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e to all monads in \u003ccode\u003e\u003ca\u003eMonadBase\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eunGetChan\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eisEmptyChan\u003c/a\u003e\u003c/code\u003e are deprecated in \u003ccode\u003ebase\u003c/code\u003e, therefore\nthey are not included here. Use \u003ccode\u003e\u003ca\u003eTVar\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.Chan.Lifted",
          "name": "Lifted",
          "package": "lifted-base",
          "source": "src/Control-Concurrent-Chan-Lifted.html",
          "type": "module"
        },
        "index": {
          "description": "This is wrapped version of Control.Concurrent.Chan with types generalised from IO to all monads in MonadBase unGetChan and isEmptyChan are deprecated in base therefore they are not included here Use TVar instead",
          "hierarchy": "Control Concurrent Chan Lifted",
          "module": "Control.Concurrent.Chan.Lifted",
          "name": "Lifted",
          "package": "lifted-base",
          "partial": "Lifted",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Chan-Lifted.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eChan\u003c/a\u003e\u003c/code\u003e is an abstract type representing an unbounded FIFO channel.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Lifted",
          "name": "Chan",
          "package": "lifted-base",
          "type": "data"
        },
        "index": {
          "description": "Chan is an abstract type representing an unbounded FIFO channel",
          "hierarchy": "Control Concurrent Chan Lifted",
          "module": "Control.Concurrent.Chan.Lifted",
          "name": "Chan",
          "package": "lifted-base",
          "partial": "Chan",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Chan-Lifted.html#t:Chan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003edupChan\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Lifted",
          "name": "dupChan",
          "package": "lifted-base",
          "signature": "Chan a -\u003e m (Chan a)",
          "source": "src/Control-Concurrent-Chan-Lifted.html#dupChan",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of dupChan",
          "hierarchy": "Control Concurrent Chan Lifted",
          "module": "Control.Concurrent.Chan.Lifted",
          "name": "dupChan",
          "normalized": "Chan a-\u003eb(Chan a)",
          "package": "lifted-base",
          "partial": "Chan",
          "signature": "Chan a-\u003em(Chan a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Chan-Lifted.html#v:dupChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003egetChanContents\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Lifted",
          "name": "getChanContents",
          "package": "lifted-base",
          "signature": "Chan a -\u003e m [a]",
          "source": "src/Control-Concurrent-Chan-Lifted.html#getChanContents",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of getChanContents",
          "hierarchy": "Control Concurrent Chan Lifted",
          "module": "Control.Concurrent.Chan.Lifted",
          "name": "getChanContents",
          "normalized": "Chan a-\u003eb[a]",
          "package": "lifted-base",
          "partial": "Chan Contents",
          "signature": "Chan a-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Chan-Lifted.html#v:getChanContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003enewChan\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Lifted",
          "name": "newChan",
          "package": "lifted-base",
          "signature": "m (Chan a)",
          "source": "src/Control-Concurrent-Chan-Lifted.html#newChan",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of newChan",
          "hierarchy": "Control Concurrent Chan Lifted",
          "module": "Control.Concurrent.Chan.Lifted",
          "name": "newChan",
          "package": "lifted-base",
          "partial": "Chan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Chan-Lifted.html#v:newChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ereadChan\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Lifted",
          "name": "readChan",
          "package": "lifted-base",
          "signature": "Chan a -\u003e m a",
          "source": "src/Control-Concurrent-Chan-Lifted.html#readChan",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of readChan",
          "hierarchy": "Control Concurrent Chan Lifted",
          "module": "Control.Concurrent.Chan.Lifted",
          "name": "readChan",
          "normalized": "Chan a-\u003eb a",
          "package": "lifted-base",
          "partial": "Chan",
          "signature": "Chan a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Chan-Lifted.html#v:readChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ewriteChan\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Lifted",
          "name": "writeChan",
          "package": "lifted-base",
          "signature": "Chan a -\u003e a -\u003e m ()",
          "source": "src/Control-Concurrent-Chan-Lifted.html#writeChan",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of writeChan",
          "hierarchy": "Control Concurrent Chan Lifted",
          "module": "Control.Concurrent.Chan.Lifted",
          "name": "writeChan",
          "normalized": "Chan a-\u003ea-\u003eb()",
          "package": "lifted-base",
          "partial": "Chan",
          "signature": "Chan a-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Chan-Lifted.html#v:writeChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ewriteList2Chan\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Chan.Lifted",
          "name": "writeList2Chan",
          "package": "lifted-base",
          "signature": "Chan a -\u003e [a] -\u003e m ()",
          "source": "src/Control-Concurrent-Chan-Lifted.html#writeList2Chan",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of writeList2Chan",
          "hierarchy": "Control Concurrent Chan Lifted",
          "module": "Control.Concurrent.Chan.Lifted",
          "name": "writeList2Chan",
          "normalized": "Chan a-\u003e[a]-\u003eb()",
          "package": "lifted-base",
          "partial": "List Chan",
          "signature": "Chan a-\u003e[a]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Chan-Lifted.html#v:writeList2Chan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is a wrapped version of \u003ca\u003eControl.Concurrent\u003c/a\u003e with types generalized\nfrom \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e to all monads in either \u003ccode\u003e\u003ca\u003eMonadBase\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eMonadBaseControl\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.Lifted",
          "name": "Lifted",
          "package": "lifted-base",
          "source": "src/Control-Concurrent-Lifted.html",
          "type": "module"
        },
        "index": {
          "description": "This is wrapped version of Control.Concurrent with types generalized from IO to all monads in either MonadBase or MonadBaseControl",
          "hierarchy": "Control Concurrent Lifted",
          "module": "Control.Concurrent.Lifted",
          "name": "Lifted",
          "package": "lifted-base",
          "partial": "Lifted",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Lifted.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eThreadId\u003c/a\u003e\u003c/code\u003e is an abstract type representing a handle to a thread.\n\u003ccode\u003e\u003ca\u003eThreadId\u003c/a\u003e\u003c/code\u003e is an instance of \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e, where\nthe \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e instance implements an arbitrary total ordering over\n\u003ccode\u003e\u003ca\u003eThreadId\u003c/a\u003e\u003c/code\u003es. The \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance lets you convert an arbitrary-valued\n\u003ccode\u003e\u003ca\u003eThreadId\u003c/a\u003e\u003c/code\u003e to string form; showing a \u003ccode\u003e\u003ca\u003eThreadId\u003c/a\u003e\u003c/code\u003e value is occasionally\nuseful when debugging or diagnosing the behaviour of a concurrent\nprogram.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: in GHC, if you have a \u003ccode\u003e\u003ca\u003eThreadId\u003c/a\u003e\u003c/code\u003e, you essentially have\na pointer to the thread itself.  This means the thread itself can't be\ngarbage collected until you drop the \u003ccode\u003e\u003ca\u003eThreadId\u003c/a\u003e\u003c/code\u003e.\nThis misfeature will hopefully be corrected at a later date.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: Hugs does not provide any operations on other threads;\nit defines \u003ccode\u003e\u003ca\u003eThreadId\u003c/a\u003e\u003c/code\u003e as a synonym for ().\n\u003c/p\u003e",
          "module": "Control.Concurrent.Lifted",
          "name": "ThreadId",
          "package": "lifted-base",
          "type": "data"
        },
        "index": {
          "description": "ThreadId is an abstract type representing handle to thread ThreadId is an instance of Eq Ord and Show where the Ord instance implements an arbitrary total ordering over ThreadId The Show instance lets you convert an arbitrary-valued ThreadId to string form showing ThreadId value is occasionally useful when debugging or diagnosing the behaviour of concurrent program Note in GHC if you have ThreadId you essentially have pointer to the thread itself This means the thread itself can be garbage collected until you drop the ThreadId This misfeature will hopefully be corrected at later date Note Hugs does not provide any operations on other threads it defines ThreadId as synonym for",
          "hierarchy": "Control Concurrent Lifted",
          "module": "Control.Concurrent.Lifted",
          "name": "ThreadId",
          "package": "lifted-base",
          "partial": "Thread Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Lifted.html#t:ThreadId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003eforkIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that, while the forked computation \u003ccode\u003em ()\u003c/code\u003e has access to the captured\n state, all its side-effects in \u003ccode\u003em\u003c/code\u003e are discarded. It is run only for its\n side-effects in \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Lifted",
          "name": "fork",
          "package": "lifted-base",
          "signature": "m () -\u003e m ThreadId",
          "source": "src/Control-Concurrent-Lifted.html#fork",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of forkIO Note that while the forked computation has access to the captured state all its side-effects in are discarded It is run only for its side-effects in IO",
          "hierarchy": "Control Concurrent Lifted",
          "module": "Control.Concurrent.Lifted",
          "name": "fork",
          "normalized": "a()-\u003ea ThreadId",
          "package": "lifted-base",
          "signature": "m()-\u003em ThreadId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Lifted.html#v:fork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003eforkFinally\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that in \u003ccode\u003eforkFinally action and_then\u003c/code\u003e, while the forked\n \u003ccode\u003eaction\u003c/code\u003e and the \u003ccode\u003eand_then\u003c/code\u003e function have access to the captured\n state, all their side-effects in \u003ccode\u003em\u003c/code\u003e are discarded. They're run\n only for their side-effects in \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Lifted",
          "name": "forkFinally",
          "package": "lifted-base",
          "signature": "m a -\u003e (Either SomeException a -\u003e m ()) -\u003e m ThreadId",
          "source": "src/Control-Concurrent-Lifted.html#forkFinally",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of forkFinally Note that in forkFinally action and then while the forked action and the and then function have access to the captured state all their side-effects in are discarded They re run only for their side-effects in IO",
          "hierarchy": "Control Concurrent Lifted",
          "module": "Control.Concurrent.Lifted",
          "name": "forkFinally",
          "normalized": "a b-\u003e(Either SomeException b-\u003ea())-\u003ea ThreadId",
          "package": "lifted-base",
          "partial": "Finally",
          "signature": "m a-\u003e(Either SomeException a-\u003em())-\u003em ThreadId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Lifted.html#v:forkFinally"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003eforkOS\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that, while the forked computation \u003ccode\u003em ()\u003c/code\u003e has access to the captured\n state, all its side-effects in \u003ccode\u003em\u003c/code\u003e are discarded. It is run only for its\n side-effects in \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Lifted",
          "name": "forkOS",
          "package": "lifted-base",
          "signature": "m () -\u003e m ThreadId",
          "source": "src/Control-Concurrent-Lifted.html#forkOS",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of forkOS Note that while the forked computation has access to the captured state all its side-effects in are discarded It is run only for its side-effects in IO",
          "hierarchy": "Control Concurrent Lifted",
          "module": "Control.Concurrent.Lifted",
          "name": "forkOS",
          "normalized": "a()-\u003ea ThreadId",
          "package": "lifted-base",
          "partial": "OS",
          "signature": "m()-\u003em ThreadId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Lifted.html#v:forkOS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003eforkOn\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that, while the forked computation \u003ccode\u003em ()\u003c/code\u003e has access to the captured\n state, all its side-effects in \u003ccode\u003em\u003c/code\u003e are discarded. It is run only for its\n side-effects in \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Lifted",
          "name": "forkOn",
          "package": "lifted-base",
          "signature": "Int -\u003e m () -\u003e m ThreadId",
          "source": "src/Control-Concurrent-Lifted.html#forkOn",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of forkOn Note that while the forked computation has access to the captured state all its side-effects in are discarded It is run only for its side-effects in IO",
          "hierarchy": "Control Concurrent Lifted",
          "module": "Control.Concurrent.Lifted",
          "name": "forkOn",
          "normalized": "Int-\u003ea()-\u003ea ThreadId",
          "package": "lifted-base",
          "partial": "On",
          "signature": "Int-\u003em()-\u003em ThreadId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Lifted.html#v:forkOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003eforkOnWithUnmask\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that, while the forked computation \u003ccode\u003em ()\u003c/code\u003e has access to the captured\n state, all its side-effects in \u003ccode\u003em\u003c/code\u003e are discarded. It is run only for its\n side-effects in \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Lifted",
          "name": "forkOnWithUnmask",
          "package": "lifted-base",
          "signature": "Int -\u003e ((forall a.  m a -\u003e m a) -\u003e m ()) -\u003e m ThreadId",
          "source": "src/Control-Concurrent-Lifted.html#forkOnWithUnmask",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of forkOnWithUnmask Note that while the forked computation has access to the captured state all its side-effects in are discarded It is run only for its side-effects in IO",
          "hierarchy": "Control Concurrent Lifted",
          "module": "Control.Concurrent.Lifted",
          "name": "forkOnWithUnmask",
          "normalized": "Int-\u003e((a b c d-\u003ec d)-\u003ec())-\u003ec ThreadId",
          "package": "lifted-base",
          "partial": "On With Unmask",
          "signature": "Int-\u003e((forall a. m a-\u003em a)-\u003em())-\u003em ThreadId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Lifted.html#v:forkOnWithUnmask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003eforkIOWithUnmask\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that, while the forked computation \u003ccode\u003em ()\u003c/code\u003e has access to the captured\n state, all its side-effects in \u003ccode\u003em\u003c/code\u003e are discarded. It is run only for its\n side-effects in \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Lifted",
          "name": "forkWithUnmask",
          "package": "lifted-base",
          "signature": "((forall a.  m a -\u003e m a) -\u003e m ()) -\u003e m ThreadId",
          "source": "src/Control-Concurrent-Lifted.html#forkWithUnmask",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of forkIOWithUnmask Note that while the forked computation has access to the captured state all its side-effects in are discarded It is run only for its side-effects in IO",
          "hierarchy": "Control Concurrent Lifted",
          "module": "Control.Concurrent.Lifted",
          "name": "forkWithUnmask",
          "normalized": "((a b c d-\u003ec d)-\u003ec())-\u003ec ThreadId",
          "package": "lifted-base",
          "partial": "With Unmask",
          "signature": "((forall a. m a-\u003em a)-\u003em())-\u003em ThreadId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Lifted.html#v:forkWithUnmask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003egetNumCapabilities\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Lifted",
          "name": "getNumCapabilities",
          "package": "lifted-base",
          "signature": "m Int",
          "source": "src/Control-Concurrent-Lifted.html#getNumCapabilities",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of getNumCapabilities",
          "hierarchy": "Control Concurrent Lifted",
          "module": "Control.Concurrent.Lifted",
          "name": "getNumCapabilities",
          "package": "lifted-base",
          "partial": "Num Capabilities",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Lifted.html#v:getNumCapabilities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003eisCurrentThreadBound\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Lifted",
          "name": "isCurrentThreadBound",
          "package": "lifted-base",
          "signature": "m Bool",
          "source": "src/Control-Concurrent-Lifted.html#isCurrentThreadBound",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of isCurrentThreadBound",
          "hierarchy": "Control Concurrent Lifted",
          "module": "Control.Concurrent.Lifted",
          "name": "isCurrentThreadBound",
          "package": "lifted-base",
          "partial": "Current Thread Bound",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Lifted.html#v:isCurrentThreadBound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ekillThread\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Lifted",
          "name": "killThread",
          "package": "lifted-base",
          "signature": "ThreadId -\u003e m ()",
          "source": "src/Control-Concurrent-Lifted.html#killThread",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of killThread",
          "hierarchy": "Control Concurrent Lifted",
          "module": "Control.Concurrent.Lifted",
          "name": "killThread",
          "normalized": "ThreadId-\u003ea()",
          "package": "lifted-base",
          "partial": "Thread",
          "signature": "ThreadId-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Lifted.html#v:killThread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized versio  of \u003ccode\u003e\u003ca\u003emkWeakThreadId\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Lifted",
          "name": "mkWeakThreadId",
          "package": "lifted-base",
          "signature": "ThreadId -\u003e m (Weak ThreadId)",
          "source": "src/Control-Concurrent-Lifted.html#mkWeakThreadId",
          "type": "function"
        },
        "index": {
          "description": "Generalized versio of mkWeakThreadId",
          "hierarchy": "Control Concurrent Lifted",
          "module": "Control.Concurrent.Lifted",
          "name": "mkWeakThreadId",
          "normalized": "ThreadId-\u003ea(Weak ThreadId)",
          "package": "lifted-base",
          "partial": "Weak Thread Id",
          "signature": "ThreadId-\u003em(Weak ThreadId)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Lifted.html#v:mkWeakThreadId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003emyThreadId\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Lifted",
          "name": "myThreadId",
          "package": "lifted-base",
          "signature": "m ThreadId",
          "source": "src/Control-Concurrent-Lifted.html#myThreadId",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of myThreadId",
          "hierarchy": "Control Concurrent Lifted",
          "module": "Control.Concurrent.Lifted",
          "name": "myThreadId",
          "package": "lifted-base",
          "partial": "Thread Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Lifted.html#v:myThreadId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if bound threads are supported.\n If \u003ccode\u003ertsSupportsBoundThreads\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eisCurrentThreadBound\u003c/a\u003e\u003c/code\u003e\n will always return \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e and both \u003ccode\u003e\u003ca\u003eforkOS\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erunInBoundThread\u003c/a\u003e\u003c/code\u003e will\n fail.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Lifted",
          "name": "rtsSupportsBoundThreads",
          "package": "lifted-base",
          "signature": "Bool",
          "type": "function"
        },
        "index": {
          "description": "True if bound threads are supported If rtsSupportsBoundThreads is False isCurrentThreadBound will always return False and both forkOS and runInBoundThread will fail",
          "hierarchy": "Control Concurrent Lifted",
          "module": "Control.Concurrent.Lifted",
          "name": "rtsSupportsBoundThreads",
          "package": "lifted-base",
          "partial": "Supports Bound Threads",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Lifted.html#v:rtsSupportsBoundThreads"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003erunInBoundThread\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Lifted",
          "name": "runInBoundThread",
          "package": "lifted-base",
          "signature": "m a -\u003e m a",
          "source": "src/Control-Concurrent-Lifted.html#runInBoundThread",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of runInBoundThread",
          "hierarchy": "Control Concurrent Lifted",
          "module": "Control.Concurrent.Lifted",
          "name": "runInBoundThread",
          "normalized": "a b-\u003ea b",
          "package": "lifted-base",
          "partial": "In Bound Thread",
          "signature": "m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Lifted.html#v:runInBoundThread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003erunInUnboundThread\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Lifted",
          "name": "runInUnboundThread",
          "package": "lifted-base",
          "signature": "m a -\u003e m a",
          "source": "src/Control-Concurrent-Lifted.html#runInUnboundThread",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of runInUnboundThread",
          "hierarchy": "Control Concurrent Lifted",
          "module": "Control.Concurrent.Lifted",
          "name": "runInUnboundThread",
          "normalized": "a b-\u003ea b",
          "package": "lifted-base",
          "partial": "In Unbound Thread",
          "signature": "m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Lifted.html#v:runInUnboundThread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003esetNumCapabilities\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Lifted",
          "name": "setNumCapabilities",
          "package": "lifted-base",
          "signature": "Int -\u003e m ()",
          "source": "src/Control-Concurrent-Lifted.html#setNumCapabilities",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of setNumCapabilities",
          "hierarchy": "Control Concurrent Lifted",
          "module": "Control.Concurrent.Lifted",
          "name": "setNumCapabilities",
          "normalized": "Int-\u003ea()",
          "package": "lifted-base",
          "partial": "Num Capabilities",
          "signature": "Int-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Lifted.html#v:setNumCapabilities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ethreadCapability\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Lifted",
          "name": "threadCapability",
          "package": "lifted-base",
          "signature": "ThreadId -\u003e m (Int, Bool)",
          "source": "src/Control-Concurrent-Lifted.html#threadCapability",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of threadCapability",
          "hierarchy": "Control Concurrent Lifted",
          "module": "Control.Concurrent.Lifted",
          "name": "threadCapability",
          "normalized": "ThreadId-\u003ea(Int,Bool)",
          "package": "lifted-base",
          "partial": "Capability",
          "signature": "ThreadId-\u003em(Int,Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Lifted.html#v:threadCapability"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ethreadDelay\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Lifted",
          "name": "threadDelay",
          "package": "lifted-base",
          "signature": "Int -\u003e m ()",
          "source": "src/Control-Concurrent-Lifted.html#threadDelay",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of threadDelay",
          "hierarchy": "Control Concurrent Lifted",
          "module": "Control.Concurrent.Lifted",
          "name": "threadDelay",
          "normalized": "Int-\u003ea()",
          "package": "lifted-base",
          "partial": "Delay",
          "signature": "Int-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Lifted.html#v:threadDelay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ethreadWaitRead\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Lifted",
          "name": "threadWaitRead",
          "package": "lifted-base",
          "signature": "Fd -\u003e m ()",
          "source": "src/Control-Concurrent-Lifted.html#threadWaitRead",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of threadWaitRead",
          "hierarchy": "Control Concurrent Lifted",
          "module": "Control.Concurrent.Lifted",
          "name": "threadWaitRead",
          "normalized": "Fd-\u003ea()",
          "package": "lifted-base",
          "partial": "Wait Read",
          "signature": "Fd-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Lifted.html#v:threadWaitRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ethreadWaitWrite\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Lifted",
          "name": "threadWaitWrite",
          "package": "lifted-base",
          "signature": "Fd -\u003e m ()",
          "source": "src/Control-Concurrent-Lifted.html#threadWaitWrite",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of threadWaitWrite",
          "hierarchy": "Control Concurrent Lifted",
          "module": "Control.Concurrent.Lifted",
          "name": "threadWaitWrite",
          "normalized": "Fd-\u003ea()",
          "package": "lifted-base",
          "partial": "Wait Write",
          "signature": "Fd-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Lifted.html#v:threadWaitWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ethrowTo\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Control.Concurrent.Lifted\",\"Control.Exception.Lifted\"]",
          "name": "throwTo",
          "package": "lifted-base",
          "signature": "ThreadId -\u003e e -\u003e m ()",
          "source": "src/Control-Exception-Lifted.html#throwTo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Lifted.html#v:throwTo\",\"http://hackage.haskell.org/package/lifted-base/docs/Control-Exception-Lifted.html#v:throwTo\"]"
        },
        "index": {
          "description": "Generalized version of throwTo",
          "hierarchy": "Control Concurrent Lifted",
          "module": "Control.Concurrent.Lifted",
          "name": "throwTo",
          "normalized": "ThreadId-\u003ea-\u003eb()",
          "package": "lifted-base",
          "partial": "To",
          "signature": "ThreadId-\u003ee-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Lifted.html#v:throwTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003eyield\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Lifted",
          "name": "yield",
          "package": "lifted-base",
          "signature": "m ()",
          "source": "src/Control-Concurrent-Lifted.html#yield",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of yield",
          "hierarchy": "Control Concurrent Lifted",
          "module": "Control.Concurrent.Lifted",
          "name": "yield",
          "normalized": "a()",
          "package": "lifted-base",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Lifted.html#v:yield"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is a wrapped version of \u003ca\u003eControl.Concurrent.MVar\u003c/a\u003e with types generalized\nfrom \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e to all monads in either \u003ccode\u003e\u003ca\u003eMonadBase\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eMonadBaseControl\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.MVar.Lifted",
          "name": "Lifted",
          "package": "lifted-base",
          "source": "src/Control-Concurrent-MVar-Lifted.html",
          "type": "module"
        },
        "index": {
          "description": "This is wrapped version of Control.Concurrent.MVar with types generalized from IO to all monads in either MonadBase or MonadBaseControl",
          "hierarchy": "Control Concurrent MVar Lifted",
          "module": "Control.Concurrent.MVar.Lifted",
          "name": "Lifted",
          "package": "lifted-base",
          "partial": "Lifted",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-MVar-Lifted.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e (pronounced \"em-var\") is a synchronising variable, used\nfor communication between concurrent threads.  It can be thought of\nas a a box, which may be empty or full.\n\u003c/p\u003e",
          "module": "Control.Concurrent.MVar.Lifted",
          "name": "MVar",
          "package": "lifted-base",
          "type": "data"
        },
        "index": {
          "description": "An MVar pronounced em-var is synchronising variable used for communication between concurrent threads It can be thought of as box which may be empty or full",
          "hierarchy": "Control Concurrent MVar Lifted",
          "module": "Control.Concurrent.MVar.Lifted",
          "name": "MVar",
          "package": "lifted-base",
          "partial": "MVar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-MVar-Lifted.html#t:MVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003eisEmptyMVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.MVar.Lifted",
          "name": "isEmptyMVar",
          "package": "lifted-base",
          "signature": "MVar a -\u003e m Bool",
          "source": "src/Control-Concurrent-MVar-Lifted.html#isEmptyMVar",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of isEmptyMVar",
          "hierarchy": "Control Concurrent MVar Lifted",
          "module": "Control.Concurrent.MVar.Lifted",
          "name": "isEmptyMVar",
          "normalized": "MVar a-\u003eb Bool",
          "package": "lifted-base",
          "partial": "Empty MVar",
          "signature": "MVar a-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-MVar-Lifted.html#v:isEmptyMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003emkWeakMVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote any monadic side effects in \u003ccode\u003em\u003c/code\u003e of the \"finalizer\" computation are\n discarded.\n\u003c/p\u003e",
          "module": "Control.Concurrent.MVar.Lifted",
          "name": "mkWeakMVar",
          "package": "lifted-base",
          "signature": "MVar a -\u003e m () -\u003e m (Weak (MVar a))",
          "source": "src/Control-Concurrent-MVar-Lifted.html#mkWeakMVar",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of mkWeakMVar Note any monadic side effects in of the finalizer computation are discarded",
          "hierarchy": "Control Concurrent MVar Lifted",
          "module": "Control.Concurrent.MVar.Lifted",
          "name": "mkWeakMVar",
          "normalized": "MVar a-\u003eb()-\u003eb(Weak(MVar a))",
          "package": "lifted-base",
          "partial": "Weak MVar",
          "signature": "MVar a-\u003em()-\u003em(Weak(MVar a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-MVar-Lifted.html#v:mkWeakMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003emodifyMVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.MVar.Lifted",
          "name": "modifyMVar",
          "package": "lifted-base",
          "signature": "MVar a -\u003e (a -\u003e m (a, b)) -\u003e m b",
          "source": "src/Control-Concurrent-MVar-Lifted.html#modifyMVar",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of modifyMVar",
          "hierarchy": "Control Concurrent MVar Lifted",
          "module": "Control.Concurrent.MVar.Lifted",
          "name": "modifyMVar",
          "normalized": "MVar a-\u003e(a-\u003eb(a,c))-\u003eb c",
          "package": "lifted-base",
          "partial": "MVar",
          "signature": "MVar a-\u003e(a-\u003em(a,b))-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-MVar-Lifted.html#v:modifyMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003emodifyMVarMasked\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.MVar.Lifted",
          "name": "modifyMVarMasked",
          "package": "lifted-base",
          "signature": "MVar a -\u003e (a -\u003e m (a, b)) -\u003e m b",
          "source": "src/Control-Concurrent-MVar-Lifted.html#modifyMVarMasked",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of modifyMVarMasked",
          "hierarchy": "Control Concurrent MVar Lifted",
          "module": "Control.Concurrent.MVar.Lifted",
          "name": "modifyMVarMasked",
          "normalized": "MVar a-\u003e(a-\u003eb(a,c))-\u003eb c",
          "package": "lifted-base",
          "partial": "MVar Masked",
          "signature": "MVar a-\u003e(a-\u003em(a,b))-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-MVar-Lifted.html#v:modifyMVarMasked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003emodifyMVarMasked_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.MVar.Lifted",
          "name": "modifyMVarMasked_",
          "package": "lifted-base",
          "signature": "MVar a -\u003e (a -\u003e m a) -\u003e m ()",
          "source": "src/Control-Concurrent-MVar-Lifted.html#modifyMVarMasked_",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of modifyMVarMasked",
          "hierarchy": "Control Concurrent MVar Lifted",
          "module": "Control.Concurrent.MVar.Lifted",
          "name": "modifyMVarMasked_",
          "normalized": "MVar a-\u003e(a-\u003eb a)-\u003eb()",
          "package": "lifted-base",
          "partial": "MVar Masked",
          "signature": "MVar a-\u003e(a-\u003em a)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-MVar-Lifted.html#v:modifyMVarMasked_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003emodifyMVar_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.MVar.Lifted",
          "name": "modifyMVar_",
          "package": "lifted-base",
          "signature": "MVar a -\u003e (a -\u003e m a) -\u003e m ()",
          "source": "src/Control-Concurrent-MVar-Lifted.html#modifyMVar_",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of modifyMVar",
          "hierarchy": "Control Concurrent MVar Lifted",
          "module": "Control.Concurrent.MVar.Lifted",
          "name": "modifyMVar_",
          "normalized": "MVar a-\u003e(a-\u003eb a)-\u003eb()",
          "package": "lifted-base",
          "partial": "MVar",
          "signature": "MVar a-\u003e(a-\u003em a)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-MVar-Lifted.html#v:modifyMVar_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003enewEmptyMVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.MVar.Lifted",
          "name": "newEmptyMVar",
          "package": "lifted-base",
          "signature": "m (MVar a)",
          "source": "src/Control-Concurrent-MVar-Lifted.html#newEmptyMVar",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of newEmptyMVar",
          "hierarchy": "Control Concurrent MVar Lifted",
          "module": "Control.Concurrent.MVar.Lifted",
          "name": "newEmptyMVar",
          "package": "lifted-base",
          "partial": "Empty MVar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-MVar-Lifted.html#v:newEmptyMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003enewMVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.MVar.Lifted",
          "name": "newMVar",
          "package": "lifted-base",
          "signature": "a -\u003e m (MVar a)",
          "source": "src/Control-Concurrent-MVar-Lifted.html#newMVar",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of newMVar",
          "hierarchy": "Control Concurrent MVar Lifted",
          "module": "Control.Concurrent.MVar.Lifted",
          "name": "newMVar",
          "normalized": "a-\u003eb(MVar a)",
          "package": "lifted-base",
          "partial": "MVar",
          "signature": "a-\u003em(MVar a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-MVar-Lifted.html#v:newMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003eputMVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.MVar.Lifted",
          "name": "putMVar",
          "package": "lifted-base",
          "signature": "MVar a -\u003e a -\u003e m ()",
          "source": "src/Control-Concurrent-MVar-Lifted.html#putMVar",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of putMVar",
          "hierarchy": "Control Concurrent MVar Lifted",
          "module": "Control.Concurrent.MVar.Lifted",
          "name": "putMVar",
          "normalized": "MVar a-\u003ea-\u003eb()",
          "package": "lifted-base",
          "partial": "MVar",
          "signature": "MVar a-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-MVar-Lifted.html#v:putMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ereadMVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.MVar.Lifted",
          "name": "readMVar",
          "package": "lifted-base",
          "signature": "MVar a -\u003e m a",
          "source": "src/Control-Concurrent-MVar-Lifted.html#readMVar",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of readMVar",
          "hierarchy": "Control Concurrent MVar Lifted",
          "module": "Control.Concurrent.MVar.Lifted",
          "name": "readMVar",
          "normalized": "MVar a-\u003eb a",
          "package": "lifted-base",
          "partial": "MVar",
          "signature": "MVar a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-MVar-Lifted.html#v:readMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003eswapMVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.MVar.Lifted",
          "name": "swapMVar",
          "package": "lifted-base",
          "signature": "MVar a -\u003e a -\u003e m a",
          "source": "src/Control-Concurrent-MVar-Lifted.html#swapMVar",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of swapMVar",
          "hierarchy": "Control Concurrent MVar Lifted",
          "module": "Control.Concurrent.MVar.Lifted",
          "name": "swapMVar",
          "normalized": "MVar a-\u003ea-\u003eb a",
          "package": "lifted-base",
          "partial": "MVar",
          "signature": "MVar a-\u003ea-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-MVar-Lifted.html#v:swapMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003etakeMVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.MVar.Lifted",
          "name": "takeMVar",
          "package": "lifted-base",
          "signature": "MVar a -\u003e m a",
          "source": "src/Control-Concurrent-MVar-Lifted.html#takeMVar",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of takeMVar",
          "hierarchy": "Control Concurrent MVar Lifted",
          "module": "Control.Concurrent.MVar.Lifted",
          "name": "takeMVar",
          "normalized": "MVar a-\u003eb a",
          "package": "lifted-base",
          "partial": "MVar",
          "signature": "MVar a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-MVar-Lifted.html#v:takeMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003etryPutMVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.MVar.Lifted",
          "name": "tryPutMVar",
          "package": "lifted-base",
          "signature": "MVar a -\u003e a -\u003e m Bool",
          "source": "src/Control-Concurrent-MVar-Lifted.html#tryPutMVar",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of tryPutMVar",
          "hierarchy": "Control Concurrent MVar Lifted",
          "module": "Control.Concurrent.MVar.Lifted",
          "name": "tryPutMVar",
          "normalized": "MVar a-\u003ea-\u003eb Bool",
          "package": "lifted-base",
          "partial": "Put MVar",
          "signature": "MVar a-\u003ea-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-MVar-Lifted.html#v:tryPutMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003etryTakeMVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.MVar.Lifted",
          "name": "tryTakeMVar",
          "package": "lifted-base",
          "signature": "MVar a -\u003e m (Maybe a)",
          "source": "src/Control-Concurrent-MVar-Lifted.html#tryTakeMVar",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of tryTakeMVar",
          "hierarchy": "Control Concurrent MVar Lifted",
          "module": "Control.Concurrent.MVar.Lifted",
          "name": "tryTakeMVar",
          "normalized": "MVar a-\u003eb(Maybe a)",
          "package": "lifted-base",
          "partial": "Take MVar",
          "signature": "MVar a-\u003em(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-MVar-Lifted.html#v:tryTakeMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ewithMVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.MVar.Lifted",
          "name": "withMVar",
          "package": "lifted-base",
          "signature": "MVar a -\u003e (a -\u003e m b) -\u003e m b",
          "source": "src/Control-Concurrent-MVar-Lifted.html#withMVar",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of withMVar",
          "hierarchy": "Control Concurrent MVar Lifted",
          "module": "Control.Concurrent.MVar.Lifted",
          "name": "withMVar",
          "normalized": "MVar a-\u003e(a-\u003eb c)-\u003eb c",
          "package": "lifted-base",
          "partial": "MVar",
          "signature": "MVar a-\u003e(a-\u003em b)-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-MVar-Lifted.html#v:withMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is a wrapped version of \u003ca\u003eControl.Exception\u003c/a\u003e with types generalized\nfrom \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e to all monads in either \u003ccode\u003e\u003ca\u003eMonadBase\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eMonadBaseControl\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Exception.Lifted",
          "name": "Lifted",
          "package": "lifted-base",
          "source": "src/Control-Exception-Lifted.html",
          "type": "module"
        },
        "index": {
          "description": "This is wrapped version of Control.Exception with types generalized from IO to all monads in either MonadBase or MonadBaseControl",
          "hierarchy": "Control Exception Lifted",
          "module": "Control.Exception.Lifted",
          "name": "Lifted",
          "package": "lifted-base",
          "partial": "Lifted",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Exception-Lifted.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003eHandler\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Exception.Lifted",
          "name": "Handler",
          "package": "lifted-base",
          "source": "src/Control-Exception-Lifted.html#Handler",
          "type": "data"
        },
        "index": {
          "description": "Generalized version of Handler",
          "hierarchy": "Control Exception Lifted",
          "module": "Control.Exception.Lifted",
          "name": "Handler",
          "package": "lifted-base",
          "partial": "Handler",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Exception-Lifted.html#t:Handler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Exception.Lifted",
          "name": "Handler",
          "package": "lifted-base",
          "signature": "Handler (e -\u003e m a)",
          "source": "src/Control-Exception-Lifted.html#Handler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Exception Lifted",
          "module": "Control.Exception.Lifted",
          "name": "Handler",
          "normalized": "Handler(a-\u003eb c)",
          "package": "lifted-base",
          "partial": "Handler",
          "signature": "Handler(e-\u003em a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Exception-Lifted.html#v:Handler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003eallowInterrupt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Exception.Lifted",
          "name": "allowInterrupt",
          "package": "lifted-base",
          "signature": "m ()",
          "source": "src/Control-Exception-Lifted.html#allowInterrupt",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of allowInterrupt",
          "hierarchy": "Control Exception Lifted",
          "module": "Control.Exception.Lifted",
          "name": "allowInterrupt",
          "normalized": "a()",
          "package": "lifted-base",
          "partial": "Interrupt",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Exception-Lifted.html#v:allowInterrupt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e When the \"acquire\" or \"release\" computations throw exceptions\n   any monadic side effects in \u003ccode\u003em\u003c/code\u003e will be discarded.\n\u003c/li\u003e\u003cli\u003e When the \"in-between\" computation throws an exception any\n   monadic side effects in \u003ccode\u003em\u003c/code\u003e produced by that computation will be\n   discarded but the side effects of the \"acquire\" or \"release\"\n   computations will be retained.\n\u003c/li\u003e\u003cli\u003e Also, any monadic side effects in \u003ccode\u003em\u003c/code\u003e of the \"release\"\n   computation will be discarded; it is run only for its side\n   effects in \u003ccode\u003eIO\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNote that when your \u003ccode\u003eacquire\u003c/code\u003e and \u003ccode\u003erelease\u003c/code\u003e computations are of type \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\n it will be more efficient to write:\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eliftBaseOp\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e acquire release)\u003c/pre\u003e",
          "module": "Control.Exception.Lifted",
          "name": "bracket",
          "package": "lifted-base",
          "signature": "m a-\u003e (a -\u003e m b)-\u003e (a -\u003e m c)-\u003e m c",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of bracket Note When the acquire or release computations throw exceptions any monadic side effects in will be discarded When the in-between computation throws an exception any monadic side effects in produced by that computation will be discarded but the side effects of the acquire or release computations will be retained Also any monadic side effects in of the release computation will be discarded it is run only for its side effects in IO Note that when your acquire and release computations are of type IO it will be more efficient to write liftBaseOp bracket acquire release",
          "hierarchy": "Control Exception Lifted",
          "module": "Control.Exception.Lifted",
          "name": "bracket",
          "normalized": "a b-\u003e(b-\u003ea c)-\u003e(b-\u003ea d)-\u003ea d",
          "package": "lifted-base",
          "signature": "m a-\u003e(a-\u003em b)-\u003e(a-\u003em c)-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Exception-Lifted.html#v:bracket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ebracketOnError\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e When the \"acquire\" or \"release\" computations throw exceptions\n   any monadic side effects in \u003ccode\u003em\u003c/code\u003e will be discarded.\n\u003c/li\u003e\u003cli\u003e When the \"in-between\" computation throws an exception any\n   monadic side effects in \u003ccode\u003em\u003c/code\u003e produced by that computation will be\n   discarded but the side effects of the \"acquire\" computation\n   will be retained.\n\u003c/li\u003e\u003cli\u003e Also, any monadic side effects in \u003ccode\u003em\u003c/code\u003e of the \"release\"\n   computation will be discarded; it is run only for its side\n   effects in \u003ccode\u003eIO\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNote that when your \u003ccode\u003eacquire\u003c/code\u003e and \u003ccode\u003erelease\u003c/code\u003e computations are of\n type \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e it will be more efficient to write:\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eliftBaseOp\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ebracketOnError\u003c/a\u003e\u003c/code\u003e acquire release)\u003c/pre\u003e",
          "module": "Control.Exception.Lifted",
          "name": "bracketOnError",
          "package": "lifted-base",
          "signature": "m a-\u003e (a -\u003e m b)-\u003e (a -\u003e m c)-\u003e m c",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of bracketOnError Note When the acquire or release computations throw exceptions any monadic side effects in will be discarded When the in-between computation throws an exception any monadic side effects in produced by that computation will be discarded but the side effects of the acquire computation will be retained Also any monadic side effects in of the release computation will be discarded it is run only for its side effects in IO Note that when your acquire and release computations are of type IO it will be more efficient to write liftBaseOp bracketOnError acquire release",
          "hierarchy": "Control Exception Lifted",
          "module": "Control.Exception.Lifted",
          "name": "bracketOnError",
          "normalized": "a b-\u003e(b-\u003ea c)-\u003e(b-\u003ea d)-\u003ea d",
          "package": "lifted-base",
          "partial": "On Error",
          "signature": "m a-\u003e(a-\u003em b)-\u003e(a-\u003em c)-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Exception-Lifted.html#v:bracketOnError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ebracket_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote any monadic side effects in \u003ccode\u003em\u003c/code\u003e of \u003cem\u003eboth\u003c/em\u003e the \"acquire\" and\n \"release\" computations will be discarded. To keep the monadic\n side effects of the \"acquire\" computation, use \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e with\n constant functions instead.\n\u003c/p\u003e\u003cp\u003eNote that when your \u003ccode\u003eacquire\u003c/code\u003e and \u003ccode\u003erelease\u003c/code\u003e computations are of type \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\n it will be more efficient to write:\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eliftBaseOp_\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ebracket_\u003c/a\u003e\u003c/code\u003e acquire release)\u003c/pre\u003e",
          "module": "Control.Exception.Lifted",
          "name": "bracket_",
          "package": "lifted-base",
          "signature": "m a-\u003e m b-\u003e m c-\u003e m c",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of bracket Note any monadic side effects in of both the acquire and release computations will be discarded To keep the monadic side effects of the acquire computation use bracket with constant functions instead Note that when your acquire and release computations are of type IO it will be more efficient to write liftBaseOp bracket acquire release",
          "hierarchy": "Control Exception Lifted",
          "module": "Control.Exception.Lifted",
          "name": "bracket_",
          "normalized": "a b-\u003ea c-\u003ea d-\u003ea d",
          "package": "lifted-base",
          "signature": "m a-\u003em b-\u003em c-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Exception-Lifted.html#v:bracket_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote, when the given computation throws an exception any monadic\n side effects in \u003ccode\u003em\u003c/code\u003e will be discarded.\n\u003c/p\u003e",
          "module": "Control.Exception.Lifted",
          "name": "catch",
          "package": "lifted-base",
          "signature": "m a-\u003e (e -\u003e m a)-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of catch Note when the given computation throws an exception any monadic side effects in will be discarded",
          "hierarchy": "Control Exception Lifted",
          "module": "Control.Exception.Lifted",
          "name": "catch",
          "normalized": "a b-\u003e(c-\u003ea b)-\u003ea b",
          "package": "lifted-base",
          "signature": "m a-\u003e(e-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Exception-Lifted.html#v:catch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ecatchJust\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote, when the given computation throws an exception any monadic\n side effects in \u003ccode\u003em\u003c/code\u003e will be discarded.\n\u003c/p\u003e",
          "module": "Control.Exception.Lifted",
          "name": "catchJust",
          "package": "lifted-base",
          "signature": "(e -\u003e Maybe b)-\u003e m a-\u003e (b -\u003e m a)-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of catchJust Note when the given computation throws an exception any monadic side effects in will be discarded",
          "hierarchy": "Control Exception Lifted",
          "module": "Control.Exception.Lifted",
          "name": "catchJust",
          "normalized": "(a-\u003eMaybe b)-\u003ec d-\u003e(b-\u003ec d)-\u003ec d",
          "package": "lifted-base",
          "partial": "Just",
          "signature": "(e-\u003eMaybe b)-\u003em a-\u003e(b-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Exception-Lifted.html#v:catchJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ecatches\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote, when the given computation throws an exception any monadic\n side effects in \u003ccode\u003em\u003c/code\u003e will be discarded.\n\u003c/p\u003e",
          "module": "Control.Exception.Lifted",
          "name": "catches",
          "package": "lifted-base",
          "signature": "m a -\u003e [Handler m a] -\u003e m a",
          "source": "src/Control-Exception-Lifted.html#catches",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of catches Note when the given computation throws an exception any monadic side effects in will be discarded",
          "hierarchy": "Control Exception Lifted",
          "module": "Control.Exception.Lifted",
          "name": "catches",
          "normalized": "a b-\u003e[Handler a b]-\u003ea b",
          "package": "lifted-base",
          "signature": "m a-\u003e[Handler m a]-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Exception-Lifted.html#v:catches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003eevaluate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Exception.Lifted",
          "name": "evaluate",
          "package": "lifted-base",
          "signature": "a -\u003e m a",
          "source": "src/Control-Exception-Lifted.html#evaluate",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of evaluate",
          "hierarchy": "Control Exception Lifted",
          "module": "Control.Exception.Lifted",
          "name": "evaluate",
          "normalized": "a-\u003eb a",
          "package": "lifted-base",
          "signature": "a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Exception-Lifted.html#v:evaluate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003efinally\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote, any monadic side effects in \u003ccode\u003em\u003c/code\u003e of the \"afterward\"\n computation will be discarded.\n\u003c/p\u003e",
          "module": "Control.Exception.Lifted",
          "name": "finally",
          "package": "lifted-base",
          "signature": "m a-\u003e m b-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of finally Note any monadic side effects in of the afterward computation will be discarded",
          "hierarchy": "Control Exception Lifted",
          "module": "Control.Exception.Lifted",
          "name": "finally",
          "normalized": "a b-\u003ea c-\u003ea b",
          "package": "lifted-base",
          "signature": "m a-\u003em b-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Exception-Lifted.html#v:finally"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003egetMaskingState\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Exception.Lifted",
          "name": "getMaskingState",
          "package": "lifted-base",
          "signature": "m MaskingState",
          "source": "src/Control-Exception-Lifted.html#getMaskingState",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of getMaskingState",
          "hierarchy": "Control Exception Lifted",
          "module": "Control.Exception.Lifted",
          "name": "getMaskingState",
          "package": "lifted-base",
          "partial": "Masking State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Exception-Lifted.html#v:getMaskingState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ehandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote, when the given computation throws an exception any monadic\n side effects in \u003ccode\u003em\u003c/code\u003e will be discarded.\n\u003c/p\u003e",
          "module": "Control.Exception.Lifted",
          "name": "handle",
          "package": "lifted-base",
          "signature": "(e -\u003e m a) -\u003e m a -\u003e m a",
          "source": "src/Control-Exception-Lifted.html#handle",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of handle Note when the given computation throws an exception any monadic side effects in will be discarded",
          "hierarchy": "Control Exception Lifted",
          "module": "Control.Exception.Lifted",
          "name": "handle",
          "normalized": "(a-\u003eb c)-\u003eb c-\u003eb c",
          "package": "lifted-base",
          "signature": "(e-\u003em a)-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Exception-Lifted.html#v:handle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ehandleJust\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote, when the given computation throws an exception any monadic\n side effects in \u003ccode\u003em\u003c/code\u003e will be discarded.\n\u003c/p\u003e",
          "module": "Control.Exception.Lifted",
          "name": "handleJust",
          "package": "lifted-base",
          "signature": "(e -\u003e Maybe b) -\u003e (b -\u003e m a) -\u003e m a -\u003e m a",
          "source": "src/Control-Exception-Lifted.html#handleJust",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of handleJust Note when the given computation throws an exception any monadic side effects in will be discarded",
          "hierarchy": "Control Exception Lifted",
          "module": "Control.Exception.Lifted",
          "name": "handleJust",
          "normalized": "(a-\u003eMaybe b)-\u003e(b-\u003ec d)-\u003ec d-\u003ec d",
          "package": "lifted-base",
          "partial": "Just",
          "signature": "(e-\u003eMaybe b)-\u003e(b-\u003em a)-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Exception-Lifted.html#v:handleJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003eioError\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Exception.Lifted",
          "name": "ioError",
          "package": "lifted-base",
          "signature": "IOError -\u003e m a",
          "source": "src/Control-Exception-Lifted.html#ioError",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of ioError",
          "hierarchy": "Control Exception Lifted",
          "module": "Control.Exception.Lifted",
          "name": "ioError",
          "normalized": "IOError-\u003ea b",
          "package": "lifted-base",
          "partial": "Error",
          "signature": "IOError-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Exception-Lifted.html#v:ioError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003emask\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Exception.Lifted",
          "name": "mask",
          "package": "lifted-base",
          "signature": "((forall a.  m a -\u003e m a) -\u003e m b) -\u003e m b",
          "source": "src/Control-Exception-Lifted.html#mask",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of mask",
          "hierarchy": "Control Exception Lifted",
          "module": "Control.Exception.Lifted",
          "name": "mask",
          "normalized": "((a b c d-\u003ec d)-\u003ec e)-\u003ec e",
          "package": "lifted-base",
          "signature": "((forall a. m a-\u003em a)-\u003em b)-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Exception-Lifted.html#v:mask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003emask_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Exception.Lifted",
          "name": "mask_",
          "package": "lifted-base",
          "signature": "m a -\u003e m a",
          "source": "src/Control-Exception-Lifted.html#mask_",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of mask",
          "hierarchy": "Control Exception Lifted",
          "module": "Control.Exception.Lifted",
          "name": "mask_",
          "normalized": "a b-\u003ea b",
          "package": "lifted-base",
          "signature": "m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Exception-Lifted.html#v:mask_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003eonException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote, any monadic side effects in \u003ccode\u003em\u003c/code\u003e of the \"afterward\"\n computation will be discarded.\n\u003c/p\u003e",
          "module": "Control.Exception.Lifted",
          "name": "onException",
          "package": "lifted-base",
          "signature": "m a -\u003e m b -\u003e m a",
          "source": "src/Control-Exception-Lifted.html#onException",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of onException Note any monadic side effects in of the afterward computation will be discarded",
          "hierarchy": "Control Exception Lifted",
          "module": "Control.Exception.Lifted",
          "name": "onException",
          "normalized": "a b-\u003ea c-\u003ea b",
          "package": "lifted-base",
          "partial": "Exception",
          "signature": "m a-\u003em b-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Exception-Lifted.html#v:onException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ethrowIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Exception.Lifted",
          "name": "throwIO",
          "package": "lifted-base",
          "signature": "e -\u003e m a",
          "source": "src/Control-Exception-Lifted.html#throwIO",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of throwIO",
          "hierarchy": "Control Exception Lifted",
          "module": "Control.Exception.Lifted",
          "name": "throwIO",
          "normalized": "a-\u003eb c",
          "package": "lifted-base",
          "partial": "IO",
          "signature": "e-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Exception-Lifted.html#v:throwIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote, when the given computation throws an exception any monadic\n side effects in \u003ccode\u003em\u003c/code\u003e will be discarded.\n\u003c/p\u003e",
          "module": "Control.Exception.Lifted",
          "name": "try",
          "package": "lifted-base",
          "signature": "m a -\u003e m (Either e a)",
          "source": "src/Control-Exception-Lifted.html#try",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of try Note when the given computation throws an exception any monadic side effects in will be discarded",
          "hierarchy": "Control Exception Lifted",
          "module": "Control.Exception.Lifted",
          "name": "try",
          "normalized": "a b-\u003ea(Either c b)",
          "package": "lifted-base",
          "signature": "m a-\u003em(Either e a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Exception-Lifted.html#v:try"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003etryJust\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote, when the given computation throws an exception any monadic\n side effects in \u003ccode\u003em\u003c/code\u003e will be discarded.\n\u003c/p\u003e",
          "module": "Control.Exception.Lifted",
          "name": "tryJust",
          "package": "lifted-base",
          "signature": "(e -\u003e Maybe b) -\u003e m a -\u003e m (Either b a)",
          "source": "src/Control-Exception-Lifted.html#tryJust",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of tryJust Note when the given computation throws an exception any monadic side effects in will be discarded",
          "hierarchy": "Control Exception Lifted",
          "module": "Control.Exception.Lifted",
          "name": "tryJust",
          "normalized": "(a-\u003eMaybe b)-\u003ec d-\u003ec(Either b d)",
          "package": "lifted-base",
          "partial": "Just",
          "signature": "(e-\u003eMaybe b)-\u003em a-\u003em(Either b a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Exception-Lifted.html#v:tryJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003euninterruptibleMask\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Exception.Lifted",
          "name": "uninterruptibleMask",
          "package": "lifted-base",
          "signature": "((forall a.  m a -\u003e m a) -\u003e m b) -\u003e m b",
          "source": "src/Control-Exception-Lifted.html#uninterruptibleMask",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of uninterruptibleMask",
          "hierarchy": "Control Exception Lifted",
          "module": "Control.Exception.Lifted",
          "name": "uninterruptibleMask",
          "normalized": "((a b c d-\u003ec d)-\u003ec e)-\u003ec e",
          "package": "lifted-base",
          "partial": "Mask",
          "signature": "((forall a. m a-\u003em a)-\u003em b)-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Exception-Lifted.html#v:uninterruptibleMask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003euninterruptibleMask_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Exception.Lifted",
          "name": "uninterruptibleMask_",
          "package": "lifted-base",
          "signature": "m a -\u003e m a",
          "source": "src/Control-Exception-Lifted.html#uninterruptibleMask_",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of uninterruptibleMask",
          "hierarchy": "Control Exception Lifted",
          "module": "Control.Exception.Lifted",
          "name": "uninterruptibleMask_",
          "normalized": "a b-\u003ea b",
          "package": "lifted-base",
          "partial": "Mask",
          "signature": "m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Exception-Lifted.html#v:uninterruptibleMask_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is a wrapped version of \u003ca\u003eData.IORef\u003c/a\u003e with types\ngeneralised from \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e to all monads in \u003ccode\u003e\u003ca\u003eMonadBase\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.IORef.Lifted",
          "name": "Lifted",
          "package": "lifted-base",
          "source": "src/Data-IORef-Lifted.html",
          "type": "module"
        },
        "index": {
          "description": "This is wrapped version of Data.IORef with types generalised from IO to all monads in MonadBase",
          "hierarchy": "Data IORef Lifted",
          "module": "Data.IORef.Lifted",
          "name": "Lifted",
          "package": "lifted-base",
          "partial": "Lifted",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Data-IORef-Lifted.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mutable variable in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad\n\u003c/p\u003e",
          "module": "Data.IORef.Lifted",
          "name": "IORef",
          "package": "lifted-base",
          "type": "data"
        },
        "index": {
          "description": "mutable variable in the IO monad",
          "hierarchy": "Data IORef Lifted",
          "module": "Data.IORef.Lifted",
          "name": "IORef",
          "package": "lifted-base",
          "partial": "IORef",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Data-IORef-Lifted.html#t:IORef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003eatomicModifyIORef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IORef.Lifted",
          "name": "atomicModifyIORef",
          "package": "lifted-base",
          "signature": "IORef a -\u003e (a -\u003e (a, b)) -\u003e m b",
          "source": "src/Data-IORef-Lifted.html#atomicModifyIORef",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of atomicModifyIORef",
          "hierarchy": "Data IORef Lifted",
          "module": "Data.IORef.Lifted",
          "name": "atomicModifyIORef",
          "normalized": "IORef a-\u003e(a-\u003e(a,b))-\u003ec b",
          "package": "lifted-base",
          "partial": "Modify IORef",
          "signature": "IORef a-\u003e(a-\u003e(a,b))-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Data-IORef-Lifted.html#v:atomicModifyIORef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003eatomicModifyIORef'\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IORef.Lifted",
          "name": "atomicModifyIORef'",
          "package": "lifted-base",
          "signature": "IORef a -\u003e (a -\u003e (a, b)) -\u003e m b",
          "source": "src/Data-IORef-Lifted.html#atomicModifyIORef%27",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of atomicModifyIORef",
          "hierarchy": "Data IORef Lifted",
          "module": "Data.IORef.Lifted",
          "name": "atomicModifyIORef'",
          "normalized": "IORef a-\u003e(a-\u003e(a,b))-\u003ec b",
          "package": "lifted-base",
          "partial": "Modify IORef'",
          "signature": "IORef a-\u003e(a-\u003e(a,b))-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Data-IORef-Lifted.html#v:atomicModifyIORef-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003eatomicWriteIORef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IORef.Lifted",
          "name": "atomicWriteIORef",
          "package": "lifted-base",
          "signature": "IORef a -\u003e a -\u003e m ()",
          "source": "src/Data-IORef-Lifted.html#atomicWriteIORef",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of atomicWriteIORef",
          "hierarchy": "Data IORef Lifted",
          "module": "Data.IORef.Lifted",
          "name": "atomicWriteIORef",
          "normalized": "IORef a-\u003ea-\u003eb()",
          "package": "lifted-base",
          "partial": "Write IORef",
          "signature": "IORef a-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Data-IORef-Lifted.html#v:atomicWriteIORef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003emkWeakIORef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote any monadic side effects in \u003ccode\u003em\u003c/code\u003e of the \"finalizer\" computation\n are discarded.\n\u003c/p\u003e",
          "module": "Data.IORef.Lifted",
          "name": "mkWeakIORef",
          "package": "lifted-base",
          "signature": "IORef a -\u003e m () -\u003e m (Weak (IORef a))",
          "source": "src/Data-IORef-Lifted.html#mkWeakIORef",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of mkWeakIORef Note any monadic side effects in of the finalizer computation are discarded",
          "hierarchy": "Data IORef Lifted",
          "module": "Data.IORef.Lifted",
          "name": "mkWeakIORef",
          "normalized": "IORef a-\u003eb()-\u003eb(Weak(IORef a))",
          "package": "lifted-base",
          "partial": "Weak IORef",
          "signature": "IORef a-\u003em()-\u003em(Weak(IORef a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Data-IORef-Lifted.html#v:mkWeakIORef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003emodifyIORef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IORef.Lifted",
          "name": "modifyIORef",
          "package": "lifted-base",
          "signature": "IORef a -\u003e (a -\u003e a) -\u003e m ()",
          "source": "src/Data-IORef-Lifted.html#modifyIORef",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of modifyIORef",
          "hierarchy": "Data IORef Lifted",
          "module": "Data.IORef.Lifted",
          "name": "modifyIORef",
          "normalized": "IORef a-\u003e(a-\u003ea)-\u003eb()",
          "package": "lifted-base",
          "partial": "IORef",
          "signature": "IORef a-\u003e(a-\u003ea)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Data-IORef-Lifted.html#v:modifyIORef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003emodifyIORef'\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IORef.Lifted",
          "name": "modifyIORef'",
          "package": "lifted-base",
          "signature": "IORef a -\u003e (a -\u003e a) -\u003e m ()",
          "source": "src/Data-IORef-Lifted.html#modifyIORef%27",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of modifyIORef",
          "hierarchy": "Data IORef Lifted",
          "module": "Data.IORef.Lifted",
          "name": "modifyIORef'",
          "normalized": "IORef a-\u003e(a-\u003ea)-\u003eb()",
          "package": "lifted-base",
          "partial": "IORef'",
          "signature": "IORef a-\u003e(a-\u003ea)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Data-IORef-Lifted.html#v:modifyIORef-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003enewIORef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IORef.Lifted",
          "name": "newIORef",
          "package": "lifted-base",
          "signature": "a -\u003e m (IORef a)",
          "source": "src/Data-IORef-Lifted.html#newIORef",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of newIORef",
          "hierarchy": "Data IORef Lifted",
          "module": "Data.IORef.Lifted",
          "name": "newIORef",
          "normalized": "a-\u003eb(IORef a)",
          "package": "lifted-base",
          "partial": "IORef",
          "signature": "a-\u003em(IORef a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Data-IORef-Lifted.html#v:newIORef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ereadIORef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IORef.Lifted",
          "name": "readIORef",
          "package": "lifted-base",
          "signature": "IORef a -\u003e m a",
          "source": "src/Data-IORef-Lifted.html#readIORef",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of readIORef",
          "hierarchy": "Data IORef Lifted",
          "module": "Data.IORef.Lifted",
          "name": "readIORef",
          "normalized": "IORef a-\u003eb a",
          "package": "lifted-base",
          "partial": "IORef",
          "signature": "IORef a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Data-IORef-Lifted.html#v:readIORef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ewriteIORef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IORef.Lifted",
          "name": "writeIORef",
          "package": "lifted-base",
          "signature": "IORef a -\u003e a -\u003e m ()",
          "source": "src/Data-IORef-Lifted.html#writeIORef",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of writeIORef",
          "hierarchy": "Data IORef Lifted",
          "module": "Data.IORef.Lifted",
          "name": "writeIORef",
          "normalized": "IORef a-\u003ea-\u003eb()",
          "package": "lifted-base",
          "partial": "IORef",
          "signature": "IORef a-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Data-IORef-Lifted.html#v:writeIORef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is a wrapped version of \u003ca\u003eForeign.Marshal.Utils\u003c/a\u003e with types generalized\nfrom \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e to all monads in either \u003ccode\u003eMonadBase\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eMonadBaseControl\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Foreign.Marshal.Utils.Lifted",
          "name": "Lifted",
          "package": "lifted-base",
          "source": "src/Foreign-Marshal-Utils-Lifted.html",
          "type": "module"
        },
        "index": {
          "description": "This is wrapped version of Foreign.Marshal.Utils with types generalized from IO to all monads in either MonadBase or MonadBaseControl",
          "hierarchy": "Foreign Marshal Utils Lifted",
          "module": "Foreign.Marshal.Utils.Lifted",
          "name": "Lifted",
          "package": "lifted-base",
          "partial": "Lifted",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Foreign-Marshal-Utils-Lifted.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ewith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote, when the given function throws an exception any monadic side\n effects in \u003ccode\u003em\u003c/code\u003e will be discarded.\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Utils.Lifted",
          "name": "with",
          "package": "lifted-base",
          "signature": "a-\u003e (Ptr a -\u003e m b)-\u003e m b",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of with Note when the given function throws an exception any monadic side effects in will be discarded",
          "hierarchy": "Foreign Marshal Utils Lifted",
          "module": "Foreign.Marshal.Utils.Lifted",
          "name": "with",
          "normalized": "a-\u003e(Ptr a-\u003eb c)-\u003eb c",
          "package": "lifted-base",
          "signature": "a-\u003e(Ptr a-\u003em b)-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/Foreign-Marshal-Utils-Lifted.html#v:with"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAttach a timeout event to monadic computations\n which are instances of \u003ccode\u003e\u003ca\u003eMonadBaseControl\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Timeout.Lifted",
          "name": "Lifted",
          "package": "lifted-base",
          "source": "src/System-Timeout-Lifted.html",
          "type": "module"
        },
        "index": {
          "description": "Attach timeout event to monadic computations which are instances of MonadBaseControl",
          "hierarchy": "System Timeout Lifted",
          "module": "System.Timeout.Lifted",
          "name": "Lifted",
          "package": "lifted-base",
          "partial": "Lifted",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/System-Timeout-Lifted.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003etimeout\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that when the given computation times out any side effects of \u003ccode\u003em\u003c/code\u003e are\n discarded. When the computation completes within the given time the\n side-effects are restored on return.\n\u003c/p\u003e",
          "module": "System.Timeout.Lifted",
          "name": "timeout",
          "package": "lifted-base",
          "signature": "Int -\u003e m a -\u003e m (Maybe a)",
          "source": "src/System-Timeout-Lifted.html#timeout",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of timeout Note that when the given computation times out any side effects of are discarded When the computation completes within the given time the side-effects are restored on return",
          "hierarchy": "System Timeout Lifted",
          "module": "System.Timeout.Lifted",
          "name": "timeout",
          "normalized": "Int-\u003ea b-\u003ea(Maybe b)",
          "package": "lifted-base",
          "signature": "Int-\u003em a-\u003em(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lifted-base/docs/System-Timeout-Lifted.html#v:timeout"
      }
    }
  ]
]