[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Chan-Lifted.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is a wrapped version of \u003ca\u003eControl.Concurrent.Chan\u003c/a\u003e with types\ngeneralised from \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e to all monads in \u003ccode\u003e\u003ca\u003eMonadBase\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eunGetChan\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eisEmptyChan\u003c/a\u003e\u003c/code\u003e are deprecated in \u003ccode\u003ebase\u003c/code\u003e, therefore\nthey are not included here. Use \u003ccode\u003e\u003ca\u003eTVar\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.Chan.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-Chan-Lifted.html",
        "fct-type": "module",
        "title": "Lifted"
      },
      "index": {
        "description": "This is wrapped version of Control.Concurrent.Chan with types generalised from IO to all monads in MonadBase unGetChan and isEmptyChan are deprecated in base therefore they are not included here Use TVar instead",
        "hierarchy": "Control Concurrent Chan Lifted",
        "module": "Control.Concurrent.Chan.Lifted",
        "name": "Lifted",
        "normalized": "",
        "package": "lifted-base",
        "partial": "Lifted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Chan-Lifted.html#t:Chan",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eChan\u003c/a\u003e\u003c/code\u003e is an abstract type representing an unbounded FIFO channel.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Chan.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Chan"
      },
      "index": {
        "description": "Chan is an abstract type representing an unbounded FIFO channel",
        "hierarchy": "Control Concurrent Chan Lifted",
        "module": "Control.Concurrent.Chan.Lifted",
        "name": "Chan",
        "normalized": "",
        "package": "lifted-base",
        "partial": "Chan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Chan-Lifted.html#v:dupChan",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003edupChan\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Chan.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "Chan a -\u003e m (Chan a)",
        "fct-source": "src/Control-Concurrent-Chan-Lifted.html#dupChan",
        "fct-type": "function",
        "title": "dupChan"
      },
      "index": {
        "description": "Generalized version of dupChan",
        "hierarchy": "Control Concurrent Chan Lifted",
        "module": "Control.Concurrent.Chan.Lifted",
        "name": "dupChan",
        "normalized": "Chan a-\u003eb(Chan a)",
        "package": "lifted-base",
        "partial": "Chan",
        "signature": "Chan a-\u003em(Chan a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Chan-Lifted.html#v:getChanContents",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003egetChanContents\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Chan.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "Chan a -\u003e m [a]",
        "fct-source": "src/Control-Concurrent-Chan-Lifted.html#getChanContents",
        "fct-type": "function",
        "title": "getChanContents"
      },
      "index": {
        "description": "Generalized version of getChanContents",
        "hierarchy": "Control Concurrent Chan Lifted",
        "module": "Control.Concurrent.Chan.Lifted",
        "name": "getChanContents",
        "normalized": "Chan a-\u003eb[a]",
        "package": "lifted-base",
        "partial": "Chan Contents",
        "signature": "Chan a-\u003em[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Chan-Lifted.html#v:newChan",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003enewChan\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Chan.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "m (Chan a)",
        "fct-source": "src/Control-Concurrent-Chan-Lifted.html#newChan",
        "fct-type": "function",
        "title": "newChan"
      },
      "index": {
        "description": "Generalized version of newChan",
        "hierarchy": "Control Concurrent Chan Lifted",
        "module": "Control.Concurrent.Chan.Lifted",
        "name": "newChan",
        "normalized": "",
        "package": "lifted-base",
        "partial": "Chan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Chan-Lifted.html#v:readChan",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ereadChan\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Chan.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "Chan a -\u003e m a",
        "fct-source": "src/Control-Concurrent-Chan-Lifted.html#readChan",
        "fct-type": "function",
        "title": "readChan"
      },
      "index": {
        "description": "Generalized version of readChan",
        "hierarchy": "Control Concurrent Chan Lifted",
        "module": "Control.Concurrent.Chan.Lifted",
        "name": "readChan",
        "normalized": "Chan a-\u003eb a",
        "package": "lifted-base",
        "partial": "Chan",
        "signature": "Chan a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Chan-Lifted.html#v:writeChan",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ewriteChan\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Chan.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "Chan a -\u003e a -\u003e m ()",
        "fct-source": "src/Control-Concurrent-Chan-Lifted.html#writeChan",
        "fct-type": "function",
        "title": "writeChan"
      },
      "index": {
        "description": "Generalized version of writeChan",
        "hierarchy": "Control Concurrent Chan Lifted",
        "module": "Control.Concurrent.Chan.Lifted",
        "name": "writeChan",
        "normalized": "Chan a-\u003ea-\u003eb()",
        "package": "lifted-base",
        "partial": "Chan",
        "signature": "Chan a-\u003ea-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Chan-Lifted.html#v:writeList2Chan",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ewriteList2Chan\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Chan.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "Chan a -\u003e [a] -\u003e m ()",
        "fct-source": "src/Control-Concurrent-Chan-Lifted.html#writeList2Chan",
        "fct-type": "function",
        "title": "writeList2Chan"
      },
      "index": {
        "description": "Generalized version of writeList2Chan",
        "hierarchy": "Control Concurrent Chan Lifted",
        "module": "Control.Concurrent.Chan.Lifted",
        "name": "writeList2Chan",
        "normalized": "Chan a-\u003e[a]-\u003eb()",
        "package": "lifted-base",
        "partial": "List Chan",
        "signature": "Chan a-\u003e[a]-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Lifted.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is a wrapped version of \u003ca\u003eControl.Concurrent\u003c/a\u003e with types generalized\nfrom \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e to all monads in either \u003ccode\u003e\u003ca\u003eMonadBase\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eMonadBaseControl\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-Lifted.html",
        "fct-type": "module",
        "title": "Lifted"
      },
      "index": {
        "description": "This is wrapped version of Control.Concurrent with types generalized from IO to all monads in either MonadBase or MonadBaseControl",
        "hierarchy": "Control Concurrent Lifted",
        "module": "Control.Concurrent.Lifted",
        "name": "Lifted",
        "normalized": "",
        "package": "lifted-base",
        "partial": "Lifted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Lifted.html#t:ThreadId",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eThreadId\u003c/a\u003e\u003c/code\u003e is an abstract type representing a handle to a thread.\n\u003ccode\u003e\u003ca\u003eThreadId\u003c/a\u003e\u003c/code\u003e is an instance of \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e, where\nthe \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e instance implements an arbitrary total ordering over\n\u003ccode\u003e\u003ca\u003eThreadId\u003c/a\u003e\u003c/code\u003es. The \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance lets you convert an arbitrary-valued\n\u003ccode\u003e\u003ca\u003eThreadId\u003c/a\u003e\u003c/code\u003e to string form; showing a \u003ccode\u003e\u003ca\u003eThreadId\u003c/a\u003e\u003c/code\u003e value is occasionally\nuseful when debugging or diagnosing the behaviour of a concurrent\nprogram.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: in GHC, if you have a \u003ccode\u003e\u003ca\u003eThreadId\u003c/a\u003e\u003c/code\u003e, you essentially have\na pointer to the thread itself.  This means the thread itself can't be\ngarbage collected until you drop the \u003ccode\u003e\u003ca\u003eThreadId\u003c/a\u003e\u003c/code\u003e.\nThis misfeature will hopefully be corrected at a later date.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: Hugs does not provide any operations on other threads;\nit defines \u003ccode\u003e\u003ca\u003eThreadId\u003c/a\u003e\u003c/code\u003e as a synonym for ().\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "ThreadId"
      },
      "index": {
        "description": "ThreadId is an abstract type representing handle to thread ThreadId is an instance of Eq Ord and Show where the Ord instance implements an arbitrary total ordering over ThreadId The Show instance lets you convert an arbitrary-valued ThreadId to string form showing ThreadId value is occasionally useful when debugging or diagnosing the behaviour of concurrent program Note in GHC if you have ThreadId you essentially have pointer to the thread itself This means the thread itself can be garbage collected until you drop the ThreadId This misfeature will hopefully be corrected at later date Note Hugs does not provide any operations on other threads it defines ThreadId as synonym for",
        "hierarchy": "Control Concurrent Lifted",
        "module": "Control.Concurrent.Lifted",
        "name": "ThreadId",
        "normalized": "",
        "package": "lifted-base",
        "partial": "Thread Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Lifted.html#v:fork",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003eforkIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that, while the forked computation \u003ccode\u003em ()\u003c/code\u003e has access to the captured\n state, all its side-effects in \u003ccode\u003em\u003c/code\u003e are discarded. It is run only for its\n side-effects in \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "m () -\u003e m ThreadId",
        "fct-source": "src/Control-Concurrent-Lifted.html#fork",
        "fct-type": "function",
        "title": "fork"
      },
      "index": {
        "description": "Generalized version of forkIO Note that while the forked computation has access to the captured state all its side-effects in are discarded It is run only for its side-effects in IO",
        "hierarchy": "Control Concurrent Lifted",
        "module": "Control.Concurrent.Lifted",
        "name": "fork",
        "normalized": "a()-\u003ea ThreadId",
        "package": "lifted-base",
        "partial": "",
        "signature": "m()-\u003em ThreadId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Lifted.html#v:forkFinally",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003eforkFinally\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that in \u003ccode\u003eforkFinally action and_then\u003c/code\u003e, while the forked\n \u003ccode\u003eaction\u003c/code\u003e and the \u003ccode\u003eand_then\u003c/code\u003e function have access to the captured\n state, all their side-effects in \u003ccode\u003em\u003c/code\u003e are discarded. They're run\n only for their side-effects in \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "m a -\u003e (Either SomeException a -\u003e m ()) -\u003e m ThreadId",
        "fct-source": "src/Control-Concurrent-Lifted.html#forkFinally",
        "fct-type": "function",
        "title": "forkFinally"
      },
      "index": {
        "description": "Generalized version of forkFinally Note that in forkFinally action and then while the forked action and the and then function have access to the captured state all their side-effects in are discarded They re run only for their side-effects in IO",
        "hierarchy": "Control Concurrent Lifted",
        "module": "Control.Concurrent.Lifted",
        "name": "forkFinally",
        "normalized": "a b-\u003e(Either SomeException b-\u003ea())-\u003ea ThreadId",
        "package": "lifted-base",
        "partial": "Finally",
        "signature": "m a-\u003e(Either SomeException a-\u003em())-\u003em ThreadId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Lifted.html#v:forkOS",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003eforkOS\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that, while the forked computation \u003ccode\u003em ()\u003c/code\u003e has access to the captured\n state, all its side-effects in \u003ccode\u003em\u003c/code\u003e are discarded. It is run only for its\n side-effects in \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "m () -\u003e m ThreadId",
        "fct-source": "src/Control-Concurrent-Lifted.html#forkOS",
        "fct-type": "function",
        "title": "forkOS"
      },
      "index": {
        "description": "Generalized version of forkOS Note that while the forked computation has access to the captured state all its side-effects in are discarded It is run only for its side-effects in IO",
        "hierarchy": "Control Concurrent Lifted",
        "module": "Control.Concurrent.Lifted",
        "name": "forkOS",
        "normalized": "a()-\u003ea ThreadId",
        "package": "lifted-base",
        "partial": "OS",
        "signature": "m()-\u003em ThreadId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Lifted.html#v:forkOn",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003eforkOn\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that, while the forked computation \u003ccode\u003em ()\u003c/code\u003e has access to the captured\n state, all its side-effects in \u003ccode\u003em\u003c/code\u003e are discarded. It is run only for its\n side-effects in \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "Int -\u003e m () -\u003e m ThreadId",
        "fct-source": "src/Control-Concurrent-Lifted.html#forkOn",
        "fct-type": "function",
        "title": "forkOn"
      },
      "index": {
        "description": "Generalized version of forkOn Note that while the forked computation has access to the captured state all its side-effects in are discarded It is run only for its side-effects in IO",
        "hierarchy": "Control Concurrent Lifted",
        "module": "Control.Concurrent.Lifted",
        "name": "forkOn",
        "normalized": "Int-\u003ea()-\u003ea ThreadId",
        "package": "lifted-base",
        "partial": "On",
        "signature": "Int-\u003em()-\u003em ThreadId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Lifted.html#v:forkOnWithUnmask",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003eforkOnWithUnmask\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that, while the forked computation \u003ccode\u003em ()\u003c/code\u003e has access to the captured\n state, all its side-effects in \u003ccode\u003em\u003c/code\u003e are discarded. It is run only for its\n side-effects in \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "Int -\u003e ((forall a.  m a -\u003e m a) -\u003e m ()) -\u003e m ThreadId",
        "fct-source": "src/Control-Concurrent-Lifted.html#forkOnWithUnmask",
        "fct-type": "function",
        "title": "forkOnWithUnmask"
      },
      "index": {
        "description": "Generalized version of forkOnWithUnmask Note that while the forked computation has access to the captured state all its side-effects in are discarded It is run only for its side-effects in IO",
        "hierarchy": "Control Concurrent Lifted",
        "module": "Control.Concurrent.Lifted",
        "name": "forkOnWithUnmask",
        "normalized": "Int-\u003e((a b c d-\u003ec d)-\u003ec())-\u003ec ThreadId",
        "package": "lifted-base",
        "partial": "On With Unmask",
        "signature": "Int-\u003e((forall a. m a-\u003em a)-\u003em())-\u003em ThreadId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Lifted.html#v:forkWithUnmask",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003eforkIOWithUnmask\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that, while the forked computation \u003ccode\u003em ()\u003c/code\u003e has access to the captured\n state, all its side-effects in \u003ccode\u003em\u003c/code\u003e are discarded. It is run only for its\n side-effects in \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "((forall a.  m a -\u003e m a) -\u003e m ()) -\u003e m ThreadId",
        "fct-source": "src/Control-Concurrent-Lifted.html#forkWithUnmask",
        "fct-type": "function",
        "title": "forkWithUnmask"
      },
      "index": {
        "description": "Generalized version of forkIOWithUnmask Note that while the forked computation has access to the captured state all its side-effects in are discarded It is run only for its side-effects in IO",
        "hierarchy": "Control Concurrent Lifted",
        "module": "Control.Concurrent.Lifted",
        "name": "forkWithUnmask",
        "normalized": "((a b c d-\u003ec d)-\u003ec())-\u003ec ThreadId",
        "package": "lifted-base",
        "partial": "With Unmask",
        "signature": "((forall a. m a-\u003em a)-\u003em())-\u003em ThreadId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Lifted.html#v:getNumCapabilities",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003egetNumCapabilities\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "m Int",
        "fct-source": "src/Control-Concurrent-Lifted.html#getNumCapabilities",
        "fct-type": "function",
        "title": "getNumCapabilities"
      },
      "index": {
        "description": "Generalized version of getNumCapabilities",
        "hierarchy": "Control Concurrent Lifted",
        "module": "Control.Concurrent.Lifted",
        "name": "getNumCapabilities",
        "normalized": "",
        "package": "lifted-base",
        "partial": "Num Capabilities",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Lifted.html#v:isCurrentThreadBound",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003eisCurrentThreadBound\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "m Bool",
        "fct-source": "src/Control-Concurrent-Lifted.html#isCurrentThreadBound",
        "fct-type": "function",
        "title": "isCurrentThreadBound"
      },
      "index": {
        "description": "Generalized version of isCurrentThreadBound",
        "hierarchy": "Control Concurrent Lifted",
        "module": "Control.Concurrent.Lifted",
        "name": "isCurrentThreadBound",
        "normalized": "",
        "package": "lifted-base",
        "partial": "Current Thread Bound",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Lifted.html#v:killThread",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ekillThread\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "ThreadId -\u003e m ()",
        "fct-source": "src/Control-Concurrent-Lifted.html#killThread",
        "fct-type": "function",
        "title": "killThread"
      },
      "index": {
        "description": "Generalized version of killThread",
        "hierarchy": "Control Concurrent Lifted",
        "module": "Control.Concurrent.Lifted",
        "name": "killThread",
        "normalized": "ThreadId-\u003ea()",
        "package": "lifted-base",
        "partial": "Thread",
        "signature": "ThreadId-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Lifted.html#v:mkWeakThreadId",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized versio  of \u003ccode\u003e\u003ca\u003emkWeakThreadId\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "ThreadId -\u003e m (Weak ThreadId)",
        "fct-source": "src/Control-Concurrent-Lifted.html#mkWeakThreadId",
        "fct-type": "function",
        "title": "mkWeakThreadId"
      },
      "index": {
        "description": "Generalized versio of mkWeakThreadId",
        "hierarchy": "Control Concurrent Lifted",
        "module": "Control.Concurrent.Lifted",
        "name": "mkWeakThreadId",
        "normalized": "ThreadId-\u003ea(Weak ThreadId)",
        "package": "lifted-base",
        "partial": "Weak Thread Id",
        "signature": "ThreadId-\u003em(Weak ThreadId)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Lifted.html#v:myThreadId",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003emyThreadId\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "m ThreadId",
        "fct-source": "src/Control-Concurrent-Lifted.html#myThreadId",
        "fct-type": "function",
        "title": "myThreadId"
      },
      "index": {
        "description": "Generalized version of myThreadId",
        "hierarchy": "Control Concurrent Lifted",
        "module": "Control.Concurrent.Lifted",
        "name": "myThreadId",
        "normalized": "",
        "package": "lifted-base",
        "partial": "Thread Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Lifted.html#v:rtsSupportsBoundThreads",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if bound threads are supported.\n If \u003ccode\u003ertsSupportsBoundThreads\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eisCurrentThreadBound\u003c/a\u003e\u003c/code\u003e\n will always return \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e and both \u003ccode\u003e\u003ca\u003eforkOS\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erunInBoundThread\u003c/a\u003e\u003c/code\u003e will\n fail.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "Bool",
        "fct-type": "function",
        "title": "rtsSupportsBoundThreads"
      },
      "index": {
        "description": "True if bound threads are supported If rtsSupportsBoundThreads is False isCurrentThreadBound will always return False and both forkOS and runInBoundThread will fail",
        "hierarchy": "Control Concurrent Lifted",
        "module": "Control.Concurrent.Lifted",
        "name": "rtsSupportsBoundThreads",
        "normalized": "",
        "package": "lifted-base",
        "partial": "Supports Bound Threads",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Lifted.html#v:runInBoundThread",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003erunInBoundThread\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "m a -\u003e m a",
        "fct-source": "src/Control-Concurrent-Lifted.html#runInBoundThread",
        "fct-type": "function",
        "title": "runInBoundThread"
      },
      "index": {
        "description": "Generalized version of runInBoundThread",
        "hierarchy": "Control Concurrent Lifted",
        "module": "Control.Concurrent.Lifted",
        "name": "runInBoundThread",
        "normalized": "a b-\u003ea b",
        "package": "lifted-base",
        "partial": "In Bound Thread",
        "signature": "m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Lifted.html#v:runInUnboundThread",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003erunInUnboundThread\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "m a -\u003e m a",
        "fct-source": "src/Control-Concurrent-Lifted.html#runInUnboundThread",
        "fct-type": "function",
        "title": "runInUnboundThread"
      },
      "index": {
        "description": "Generalized version of runInUnboundThread",
        "hierarchy": "Control Concurrent Lifted",
        "module": "Control.Concurrent.Lifted",
        "name": "runInUnboundThread",
        "normalized": "a b-\u003ea b",
        "package": "lifted-base",
        "partial": "In Unbound Thread",
        "signature": "m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Lifted.html#v:setNumCapabilities",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003esetNumCapabilities\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "Int -\u003e m ()",
        "fct-source": "src/Control-Concurrent-Lifted.html#setNumCapabilities",
        "fct-type": "function",
        "title": "setNumCapabilities"
      },
      "index": {
        "description": "Generalized version of setNumCapabilities",
        "hierarchy": "Control Concurrent Lifted",
        "module": "Control.Concurrent.Lifted",
        "name": "setNumCapabilities",
        "normalized": "Int-\u003ea()",
        "package": "lifted-base",
        "partial": "Num Capabilities",
        "signature": "Int-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Lifted.html#v:threadCapability",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ethreadCapability\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "ThreadId -\u003e m (Int, Bool)",
        "fct-source": "src/Control-Concurrent-Lifted.html#threadCapability",
        "fct-type": "function",
        "title": "threadCapability"
      },
      "index": {
        "description": "Generalized version of threadCapability",
        "hierarchy": "Control Concurrent Lifted",
        "module": "Control.Concurrent.Lifted",
        "name": "threadCapability",
        "normalized": "ThreadId-\u003ea(Int,Bool)",
        "package": "lifted-base",
        "partial": "Capability",
        "signature": "ThreadId-\u003em(Int,Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Lifted.html#v:threadDelay",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ethreadDelay\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "Int -\u003e m ()",
        "fct-source": "src/Control-Concurrent-Lifted.html#threadDelay",
        "fct-type": "function",
        "title": "threadDelay"
      },
      "index": {
        "description": "Generalized version of threadDelay",
        "hierarchy": "Control Concurrent Lifted",
        "module": "Control.Concurrent.Lifted",
        "name": "threadDelay",
        "normalized": "Int-\u003ea()",
        "package": "lifted-base",
        "partial": "Delay",
        "signature": "Int-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Lifted.html#v:threadWaitRead",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ethreadWaitRead\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "Fd -\u003e m ()",
        "fct-source": "src/Control-Concurrent-Lifted.html#threadWaitRead",
        "fct-type": "function",
        "title": "threadWaitRead"
      },
      "index": {
        "description": "Generalized version of threadWaitRead",
        "hierarchy": "Control Concurrent Lifted",
        "module": "Control.Concurrent.Lifted",
        "name": "threadWaitRead",
        "normalized": "Fd-\u003ea()",
        "package": "lifted-base",
        "partial": "Wait Read",
        "signature": "Fd-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Lifted.html#v:threadWaitWrite",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ethreadWaitWrite\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "Fd -\u003e m ()",
        "fct-source": "src/Control-Concurrent-Lifted.html#threadWaitWrite",
        "fct-type": "function",
        "title": "threadWaitWrite"
      },
      "index": {
        "description": "Generalized version of threadWaitWrite",
        "hierarchy": "Control Concurrent Lifted",
        "module": "Control.Concurrent.Lifted",
        "name": "threadWaitWrite",
        "normalized": "Fd-\u003ea()",
        "package": "lifted-base",
        "partial": "Wait Write",
        "signature": "Fd-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Lifted.html#v:throwTo",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ethrowTo\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "ThreadId -\u003e e -\u003e m ()",
        "fct-source": "src/Control-Exception-Lifted.html#throwTo",
        "fct-type": "function",
        "title": "throwTo"
      },
      "index": {
        "description": "Generalized version of throwTo",
        "hierarchy": "Control Concurrent Lifted",
        "module": "Control.Concurrent.Lifted",
        "name": "throwTo",
        "normalized": "ThreadId-\u003ea-\u003eb()",
        "package": "lifted-base",
        "partial": "To",
        "signature": "ThreadId-\u003ee-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-Lifted.html#v:yield",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003eyield\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "m ()",
        "fct-source": "src/Control-Concurrent-Lifted.html#yield",
        "fct-type": "function",
        "title": "yield"
      },
      "index": {
        "description": "Generalized version of yield",
        "hierarchy": "Control Concurrent Lifted",
        "module": "Control.Concurrent.Lifted",
        "name": "yield",
        "normalized": "a()",
        "package": "lifted-base",
        "partial": "",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-MVar-Lifted.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is a wrapped version of \u003ca\u003eControl.Concurrent.MVar\u003c/a\u003e with types generalized\nfrom \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e to all monads in either \u003ccode\u003e\u003ca\u003eMonadBase\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eMonadBaseControl\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.MVar.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-MVar-Lifted.html",
        "fct-type": "module",
        "title": "Lifted"
      },
      "index": {
        "description": "This is wrapped version of Control.Concurrent.MVar with types generalized from IO to all monads in either MonadBase or MonadBaseControl",
        "hierarchy": "Control Concurrent MVar Lifted",
        "module": "Control.Concurrent.MVar.Lifted",
        "name": "Lifted",
        "normalized": "",
        "package": "lifted-base",
        "partial": "Lifted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-MVar-Lifted.html#t:MVar",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e (pronounced \"em-var\") is a synchronising variable, used\nfor communication between concurrent threads.  It can be thought of\nas a a box, which may be empty or full.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MVar.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "MVar"
      },
      "index": {
        "description": "An MVar pronounced em-var is synchronising variable used for communication between concurrent threads It can be thought of as box which may be empty or full",
        "hierarchy": "Control Concurrent MVar Lifted",
        "module": "Control.Concurrent.MVar.Lifted",
        "name": "MVar",
        "normalized": "",
        "package": "lifted-base",
        "partial": "MVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-MVar-Lifted.html#v:isEmptyMVar",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003eisEmptyMVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MVar.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "MVar a -\u003e m Bool",
        "fct-source": "src/Control-Concurrent-MVar-Lifted.html#isEmptyMVar",
        "fct-type": "function",
        "title": "isEmptyMVar"
      },
      "index": {
        "description": "Generalized version of isEmptyMVar",
        "hierarchy": "Control Concurrent MVar Lifted",
        "module": "Control.Concurrent.MVar.Lifted",
        "name": "isEmptyMVar",
        "normalized": "MVar a-\u003eb Bool",
        "package": "lifted-base",
        "partial": "Empty MVar",
        "signature": "MVar a-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-MVar-Lifted.html#v:mkWeakMVar",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003emkWeakMVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote any monadic side effects in \u003ccode\u003em\u003c/code\u003e of the \"finalizer\" computation are\n discarded.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MVar.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "MVar a -\u003e m () -\u003e m (Weak (MVar a))",
        "fct-source": "src/Control-Concurrent-MVar-Lifted.html#mkWeakMVar",
        "fct-type": "function",
        "title": "mkWeakMVar"
      },
      "index": {
        "description": "Generalized version of mkWeakMVar Note any monadic side effects in of the finalizer computation are discarded",
        "hierarchy": "Control Concurrent MVar Lifted",
        "module": "Control.Concurrent.MVar.Lifted",
        "name": "mkWeakMVar",
        "normalized": "MVar a-\u003eb()-\u003eb(Weak(MVar a))",
        "package": "lifted-base",
        "partial": "Weak MVar",
        "signature": "MVar a-\u003em()-\u003em(Weak(MVar a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-MVar-Lifted.html#v:modifyMVar",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003emodifyMVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MVar.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "MVar a -\u003e (a -\u003e m (a, b)) -\u003e m b",
        "fct-source": "src/Control-Concurrent-MVar-Lifted.html#modifyMVar",
        "fct-type": "function",
        "title": "modifyMVar"
      },
      "index": {
        "description": "Generalized version of modifyMVar",
        "hierarchy": "Control Concurrent MVar Lifted",
        "module": "Control.Concurrent.MVar.Lifted",
        "name": "modifyMVar",
        "normalized": "MVar a-\u003e(a-\u003eb(a,c))-\u003eb c",
        "package": "lifted-base",
        "partial": "MVar",
        "signature": "MVar a-\u003e(a-\u003em(a,b))-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-MVar-Lifted.html#v:modifyMVarMasked",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003emodifyMVarMasked\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MVar.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "MVar a -\u003e (a -\u003e m (a, b)) -\u003e m b",
        "fct-source": "src/Control-Concurrent-MVar-Lifted.html#modifyMVarMasked",
        "fct-type": "function",
        "title": "modifyMVarMasked"
      },
      "index": {
        "description": "Generalized version of modifyMVarMasked",
        "hierarchy": "Control Concurrent MVar Lifted",
        "module": "Control.Concurrent.MVar.Lifted",
        "name": "modifyMVarMasked",
        "normalized": "MVar a-\u003e(a-\u003eb(a,c))-\u003eb c",
        "package": "lifted-base",
        "partial": "MVar Masked",
        "signature": "MVar a-\u003e(a-\u003em(a,b))-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-MVar-Lifted.html#v:modifyMVarMasked_",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003emodifyMVarMasked_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MVar.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "MVar a -\u003e (a -\u003e m a) -\u003e m ()",
        "fct-source": "src/Control-Concurrent-MVar-Lifted.html#modifyMVarMasked_",
        "fct-type": "function",
        "title": "modifyMVarMasked_"
      },
      "index": {
        "description": "Generalized version of modifyMVarMasked",
        "hierarchy": "Control Concurrent MVar Lifted",
        "module": "Control.Concurrent.MVar.Lifted",
        "name": "modifyMVarMasked_",
        "normalized": "MVar a-\u003e(a-\u003eb a)-\u003eb()",
        "package": "lifted-base",
        "partial": "MVar Masked",
        "signature": "MVar a-\u003e(a-\u003em a)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-MVar-Lifted.html#v:modifyMVar_",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003emodifyMVar_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MVar.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "MVar a -\u003e (a -\u003e m a) -\u003e m ()",
        "fct-source": "src/Control-Concurrent-MVar-Lifted.html#modifyMVar_",
        "fct-type": "function",
        "title": "modifyMVar_"
      },
      "index": {
        "description": "Generalized version of modifyMVar",
        "hierarchy": "Control Concurrent MVar Lifted",
        "module": "Control.Concurrent.MVar.Lifted",
        "name": "modifyMVar_",
        "normalized": "MVar a-\u003e(a-\u003eb a)-\u003eb()",
        "package": "lifted-base",
        "partial": "MVar",
        "signature": "MVar a-\u003e(a-\u003em a)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-MVar-Lifted.html#v:newEmptyMVar",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003enewEmptyMVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MVar.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "m (MVar a)",
        "fct-source": "src/Control-Concurrent-MVar-Lifted.html#newEmptyMVar",
        "fct-type": "function",
        "title": "newEmptyMVar"
      },
      "index": {
        "description": "Generalized version of newEmptyMVar",
        "hierarchy": "Control Concurrent MVar Lifted",
        "module": "Control.Concurrent.MVar.Lifted",
        "name": "newEmptyMVar",
        "normalized": "",
        "package": "lifted-base",
        "partial": "Empty MVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-MVar-Lifted.html#v:newMVar",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003enewMVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MVar.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "a -\u003e m (MVar a)",
        "fct-source": "src/Control-Concurrent-MVar-Lifted.html#newMVar",
        "fct-type": "function",
        "title": "newMVar"
      },
      "index": {
        "description": "Generalized version of newMVar",
        "hierarchy": "Control Concurrent MVar Lifted",
        "module": "Control.Concurrent.MVar.Lifted",
        "name": "newMVar",
        "normalized": "a-\u003eb(MVar a)",
        "package": "lifted-base",
        "partial": "MVar",
        "signature": "a-\u003em(MVar a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-MVar-Lifted.html#v:putMVar",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003eputMVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MVar.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "MVar a -\u003e a -\u003e m ()",
        "fct-source": "src/Control-Concurrent-MVar-Lifted.html#putMVar",
        "fct-type": "function",
        "title": "putMVar"
      },
      "index": {
        "description": "Generalized version of putMVar",
        "hierarchy": "Control Concurrent MVar Lifted",
        "module": "Control.Concurrent.MVar.Lifted",
        "name": "putMVar",
        "normalized": "MVar a-\u003ea-\u003eb()",
        "package": "lifted-base",
        "partial": "MVar",
        "signature": "MVar a-\u003ea-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-MVar-Lifted.html#v:readMVar",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ereadMVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MVar.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "MVar a -\u003e m a",
        "fct-source": "src/Control-Concurrent-MVar-Lifted.html#readMVar",
        "fct-type": "function",
        "title": "readMVar"
      },
      "index": {
        "description": "Generalized version of readMVar",
        "hierarchy": "Control Concurrent MVar Lifted",
        "module": "Control.Concurrent.MVar.Lifted",
        "name": "readMVar",
        "normalized": "MVar a-\u003eb a",
        "package": "lifted-base",
        "partial": "MVar",
        "signature": "MVar a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-MVar-Lifted.html#v:swapMVar",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003eswapMVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MVar.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "MVar a -\u003e a -\u003e m a",
        "fct-source": "src/Control-Concurrent-MVar-Lifted.html#swapMVar",
        "fct-type": "function",
        "title": "swapMVar"
      },
      "index": {
        "description": "Generalized version of swapMVar",
        "hierarchy": "Control Concurrent MVar Lifted",
        "module": "Control.Concurrent.MVar.Lifted",
        "name": "swapMVar",
        "normalized": "MVar a-\u003ea-\u003eb a",
        "package": "lifted-base",
        "partial": "MVar",
        "signature": "MVar a-\u003ea-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-MVar-Lifted.html#v:takeMVar",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003etakeMVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MVar.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "MVar a -\u003e m a",
        "fct-source": "src/Control-Concurrent-MVar-Lifted.html#takeMVar",
        "fct-type": "function",
        "title": "takeMVar"
      },
      "index": {
        "description": "Generalized version of takeMVar",
        "hierarchy": "Control Concurrent MVar Lifted",
        "module": "Control.Concurrent.MVar.Lifted",
        "name": "takeMVar",
        "normalized": "MVar a-\u003eb a",
        "package": "lifted-base",
        "partial": "MVar",
        "signature": "MVar a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-MVar-Lifted.html#v:tryPutMVar",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003etryPutMVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MVar.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "MVar a -\u003e a -\u003e m Bool",
        "fct-source": "src/Control-Concurrent-MVar-Lifted.html#tryPutMVar",
        "fct-type": "function",
        "title": "tryPutMVar"
      },
      "index": {
        "description": "Generalized version of tryPutMVar",
        "hierarchy": "Control Concurrent MVar Lifted",
        "module": "Control.Concurrent.MVar.Lifted",
        "name": "tryPutMVar",
        "normalized": "MVar a-\u003ea-\u003eb Bool",
        "package": "lifted-base",
        "partial": "Put MVar",
        "signature": "MVar a-\u003ea-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-MVar-Lifted.html#v:tryTakeMVar",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003etryTakeMVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MVar.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "MVar a -\u003e m (Maybe a)",
        "fct-source": "src/Control-Concurrent-MVar-Lifted.html#tryTakeMVar",
        "fct-type": "function",
        "title": "tryTakeMVar"
      },
      "index": {
        "description": "Generalized version of tryTakeMVar",
        "hierarchy": "Control Concurrent MVar Lifted",
        "module": "Control.Concurrent.MVar.Lifted",
        "name": "tryTakeMVar",
        "normalized": "MVar a-\u003eb(Maybe a)",
        "package": "lifted-base",
        "partial": "Take MVar",
        "signature": "MVar a-\u003em(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Concurrent-MVar-Lifted.html#v:withMVar",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ewithMVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.MVar.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "MVar a -\u003e (a -\u003e m b) -\u003e m b",
        "fct-source": "src/Control-Concurrent-MVar-Lifted.html#withMVar",
        "fct-type": "function",
        "title": "withMVar"
      },
      "index": {
        "description": "Generalized version of withMVar",
        "hierarchy": "Control Concurrent MVar Lifted",
        "module": "Control.Concurrent.MVar.Lifted",
        "name": "withMVar",
        "normalized": "MVar a-\u003e(a-\u003eb c)-\u003eb c",
        "package": "lifted-base",
        "partial": "MVar",
        "signature": "MVar a-\u003e(a-\u003em b)-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Exception-Lifted.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is a wrapped version of \u003ca\u003eControl.Exception\u003c/a\u003e with types generalized\nfrom \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e to all monads in either \u003ccode\u003e\u003ca\u003eMonadBase\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eMonadBaseControl\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Exception.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "module",
        "fct-source": "src/Control-Exception-Lifted.html",
        "fct-type": "module",
        "title": "Lifted"
      },
      "index": {
        "description": "This is wrapped version of Control.Exception with types generalized from IO to all monads in either MonadBase or MonadBaseControl",
        "hierarchy": "Control Exception Lifted",
        "module": "Control.Exception.Lifted",
        "name": "Lifted",
        "normalized": "",
        "package": "lifted-base",
        "partial": "Lifted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Exception-Lifted.html#t:Handler",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003eHandler\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Exception.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "data",
        "fct-source": "src/Control-Exception-Lifted.html#Handler",
        "fct-type": "data",
        "title": "Handler"
      },
      "index": {
        "description": "Generalized version of Handler",
        "hierarchy": "Control Exception Lifted",
        "module": "Control.Exception.Lifted",
        "name": "Handler",
        "normalized": "",
        "package": "lifted-base",
        "partial": "Handler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Exception-Lifted.html#v:Handler",
      "description": {
        "fct-module": "Control.Exception.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "Handler (e -\u003e m a)",
        "fct-source": "src/Control-Exception-Lifted.html#Handler",
        "fct-type": "function",
        "title": "Handler"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Exception Lifted",
        "module": "Control.Exception.Lifted",
        "name": "Handler",
        "normalized": "Handler(a-\u003eb c)",
        "package": "lifted-base",
        "partial": "Handler",
        "signature": "Handler(e-\u003em a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Exception-Lifted.html#v:allowInterrupt",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003eallowInterrupt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Exception.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "m ()",
        "fct-source": "src/Control-Exception-Lifted.html#allowInterrupt",
        "fct-type": "function",
        "title": "allowInterrupt"
      },
      "index": {
        "description": "Generalized version of allowInterrupt",
        "hierarchy": "Control Exception Lifted",
        "module": "Control.Exception.Lifted",
        "name": "allowInterrupt",
        "normalized": "a()",
        "package": "lifted-base",
        "partial": "Interrupt",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Exception-Lifted.html#v:bracket",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e When the \"acquire\" or \"release\" computations throw exceptions\n   any monadic side effects in \u003ccode\u003em\u003c/code\u003e will be discarded.\n\u003c/li\u003e\u003cli\u003e When the \"in-between\" computation throws an exception any\n   monadic side effects in \u003ccode\u003em\u003c/code\u003e produced by that computation will be\n   discarded but the side effects of the \"acquire\" or \"release\"\n   computations will be retained.\n\u003c/li\u003e\u003cli\u003e Also, any monadic side effects in \u003ccode\u003em\u003c/code\u003e of the \"release\"\n   computation will be discarded; it is run only for its side\n   effects in \u003ccode\u003eIO\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNote that when your \u003ccode\u003eacquire\u003c/code\u003e and \u003ccode\u003erelease\u003c/code\u003e computations are of type \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\n it will be more efficient to write:\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eliftBaseOp\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e acquire release)\u003c/pre\u003e",
        "fct-module": "Control.Exception.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "m a-\u003e (a -\u003e m b)-\u003e (a -\u003e m c)-\u003e m c",
        "fct-type": "function",
        "title": "bracket"
      },
      "index": {
        "description": "Generalized version of bracket Note When the acquire or release computations throw exceptions any monadic side effects in will be discarded When the in-between computation throws an exception any monadic side effects in produced by that computation will be discarded but the side effects of the acquire or release computations will be retained Also any monadic side effects in of the release computation will be discarded it is run only for its side effects in IO Note that when your acquire and release computations are of type IO it will be more efficient to write liftBaseOp bracket acquire release",
        "hierarchy": "Control Exception Lifted",
        "module": "Control.Exception.Lifted",
        "name": "bracket",
        "normalized": "a b-\u003e(b-\u003ea c)-\u003e(b-\u003ea d)-\u003ea d",
        "package": "lifted-base",
        "partial": "",
        "signature": "m a-\u003e(a-\u003em b)-\u003e(a-\u003em c)-\u003em c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Exception-Lifted.html#v:bracketOnError",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ebracketOnError\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e When the \"acquire\" or \"release\" computations throw exceptions\n   any monadic side effects in \u003ccode\u003em\u003c/code\u003e will be discarded.\n\u003c/li\u003e\u003cli\u003e When the \"in-between\" computation throws an exception any\n   monadic side effects in \u003ccode\u003em\u003c/code\u003e produced by that computation will be\n   discarded but the side effects of the \"acquire\" computation\n   will be retained.\n\u003c/li\u003e\u003cli\u003e Also, any monadic side effects in \u003ccode\u003em\u003c/code\u003e of the \"release\"\n   computation will be discarded; it is run only for its side\n   effects in \u003ccode\u003eIO\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNote that when your \u003ccode\u003eacquire\u003c/code\u003e and \u003ccode\u003erelease\u003c/code\u003e computations are of\n type \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e it will be more efficient to write:\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eliftBaseOp\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ebracketOnError\u003c/a\u003e\u003c/code\u003e acquire release)\u003c/pre\u003e",
        "fct-module": "Control.Exception.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "m a-\u003e (a -\u003e m b)-\u003e (a -\u003e m c)-\u003e m c",
        "fct-type": "function",
        "title": "bracketOnError"
      },
      "index": {
        "description": "Generalized version of bracketOnError Note When the acquire or release computations throw exceptions any monadic side effects in will be discarded When the in-between computation throws an exception any monadic side effects in produced by that computation will be discarded but the side effects of the acquire computation will be retained Also any monadic side effects in of the release computation will be discarded it is run only for its side effects in IO Note that when your acquire and release computations are of type IO it will be more efficient to write liftBaseOp bracketOnError acquire release",
        "hierarchy": "Control Exception Lifted",
        "module": "Control.Exception.Lifted",
        "name": "bracketOnError",
        "normalized": "a b-\u003e(b-\u003ea c)-\u003e(b-\u003ea d)-\u003ea d",
        "package": "lifted-base",
        "partial": "On Error",
        "signature": "m a-\u003e(a-\u003em b)-\u003e(a-\u003em c)-\u003em c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Exception-Lifted.html#v:bracket_",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ebracket_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote any monadic side effects in \u003ccode\u003em\u003c/code\u003e of \u003cem\u003eboth\u003c/em\u003e the \"acquire\" and\n \"release\" computations will be discarded. To keep the monadic\n side effects of the \"acquire\" computation, use \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e with\n constant functions instead.\n\u003c/p\u003e\u003cp\u003eNote that when your \u003ccode\u003eacquire\u003c/code\u003e and \u003ccode\u003erelease\u003c/code\u003e computations are of type \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\n it will be more efficient to write:\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eliftBaseOp_\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ebracket_\u003c/a\u003e\u003c/code\u003e acquire release)\u003c/pre\u003e",
        "fct-module": "Control.Exception.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "m a-\u003e m b-\u003e m c-\u003e m c",
        "fct-type": "function",
        "title": "bracket_"
      },
      "index": {
        "description": "Generalized version of bracket Note any monadic side effects in of both the acquire and release computations will be discarded To keep the monadic side effects of the acquire computation use bracket with constant functions instead Note that when your acquire and release computations are of type IO it will be more efficient to write liftBaseOp bracket acquire release",
        "hierarchy": "Control Exception Lifted",
        "module": "Control.Exception.Lifted",
        "name": "bracket_",
        "normalized": "a b-\u003ea c-\u003ea d-\u003ea d",
        "package": "lifted-base",
        "partial": "",
        "signature": "m a-\u003em b-\u003em c-\u003em c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Exception-Lifted.html#v:catch",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote, when the given computation throws an exception any monadic\n side effects in \u003ccode\u003em\u003c/code\u003e will be discarded.\n\u003c/p\u003e",
        "fct-module": "Control.Exception.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "m a-\u003e (e -\u003e m a)-\u003e m a",
        "fct-type": "function",
        "title": "catch"
      },
      "index": {
        "description": "Generalized version of catch Note when the given computation throws an exception any monadic side effects in will be discarded",
        "hierarchy": "Control Exception Lifted",
        "module": "Control.Exception.Lifted",
        "name": "catch",
        "normalized": "a b-\u003e(c-\u003ea b)-\u003ea b",
        "package": "lifted-base",
        "partial": "",
        "signature": "m a-\u003e(e-\u003em a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Exception-Lifted.html#v:catchJust",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ecatchJust\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote, when the given computation throws an exception any monadic\n side effects in \u003ccode\u003em\u003c/code\u003e will be discarded.\n\u003c/p\u003e",
        "fct-module": "Control.Exception.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "(e -\u003e Maybe b)-\u003e m a-\u003e (b -\u003e m a)-\u003e m a",
        "fct-type": "function",
        "title": "catchJust"
      },
      "index": {
        "description": "Generalized version of catchJust Note when the given computation throws an exception any monadic side effects in will be discarded",
        "hierarchy": "Control Exception Lifted",
        "module": "Control.Exception.Lifted",
        "name": "catchJust",
        "normalized": "(a-\u003eMaybe b)-\u003ec d-\u003e(b-\u003ec d)-\u003ec d",
        "package": "lifted-base",
        "partial": "Just",
        "signature": "(e-\u003eMaybe b)-\u003em a-\u003e(b-\u003em a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Exception-Lifted.html#v:catches",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ecatches\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote, when the given computation throws an exception any monadic\n side effects in \u003ccode\u003em\u003c/code\u003e will be discarded.\n\u003c/p\u003e",
        "fct-module": "Control.Exception.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "m a -\u003e [Handler m a] -\u003e m a",
        "fct-source": "src/Control-Exception-Lifted.html#catches",
        "fct-type": "function",
        "title": "catches"
      },
      "index": {
        "description": "Generalized version of catches Note when the given computation throws an exception any monadic side effects in will be discarded",
        "hierarchy": "Control Exception Lifted",
        "module": "Control.Exception.Lifted",
        "name": "catches",
        "normalized": "a b-\u003e[Handler a b]-\u003ea b",
        "package": "lifted-base",
        "partial": "",
        "signature": "m a-\u003e[Handler m a]-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Exception-Lifted.html#v:evaluate",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003eevaluate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Exception.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "a -\u003e m a",
        "fct-source": "src/Control-Exception-Lifted.html#evaluate",
        "fct-type": "function",
        "title": "evaluate"
      },
      "index": {
        "description": "Generalized version of evaluate",
        "hierarchy": "Control Exception Lifted",
        "module": "Control.Exception.Lifted",
        "name": "evaluate",
        "normalized": "a-\u003eb a",
        "package": "lifted-base",
        "partial": "",
        "signature": "a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Exception-Lifted.html#v:finally",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003efinally\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote, any monadic side effects in \u003ccode\u003em\u003c/code\u003e of the \"afterward\"\n computation will be discarded.\n\u003c/p\u003e",
        "fct-module": "Control.Exception.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "m a-\u003e m b-\u003e m a",
        "fct-type": "function",
        "title": "finally"
      },
      "index": {
        "description": "Generalized version of finally Note any monadic side effects in of the afterward computation will be discarded",
        "hierarchy": "Control Exception Lifted",
        "module": "Control.Exception.Lifted",
        "name": "finally",
        "normalized": "a b-\u003ea c-\u003ea b",
        "package": "lifted-base",
        "partial": "",
        "signature": "m a-\u003em b-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Exception-Lifted.html#v:getMaskingState",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003egetMaskingState\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Exception.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "m MaskingState",
        "fct-source": "src/Control-Exception-Lifted.html#getMaskingState",
        "fct-type": "function",
        "title": "getMaskingState"
      },
      "index": {
        "description": "Generalized version of getMaskingState",
        "hierarchy": "Control Exception Lifted",
        "module": "Control.Exception.Lifted",
        "name": "getMaskingState",
        "normalized": "",
        "package": "lifted-base",
        "partial": "Masking State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Exception-Lifted.html#v:handle",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ehandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote, when the given computation throws an exception any monadic\n side effects in \u003ccode\u003em\u003c/code\u003e will be discarded.\n\u003c/p\u003e",
        "fct-module": "Control.Exception.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "(e -\u003e m a) -\u003e m a -\u003e m a",
        "fct-source": "src/Control-Exception-Lifted.html#handle",
        "fct-type": "function",
        "title": "handle"
      },
      "index": {
        "description": "Generalized version of handle Note when the given computation throws an exception any monadic side effects in will be discarded",
        "hierarchy": "Control Exception Lifted",
        "module": "Control.Exception.Lifted",
        "name": "handle",
        "normalized": "(a-\u003eb c)-\u003eb c-\u003eb c",
        "package": "lifted-base",
        "partial": "",
        "signature": "(e-\u003em a)-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Exception-Lifted.html#v:handleJust",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ehandleJust\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote, when the given computation throws an exception any monadic\n side effects in \u003ccode\u003em\u003c/code\u003e will be discarded.\n\u003c/p\u003e",
        "fct-module": "Control.Exception.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "(e -\u003e Maybe b) -\u003e (b -\u003e m a) -\u003e m a -\u003e m a",
        "fct-source": "src/Control-Exception-Lifted.html#handleJust",
        "fct-type": "function",
        "title": "handleJust"
      },
      "index": {
        "description": "Generalized version of handleJust Note when the given computation throws an exception any monadic side effects in will be discarded",
        "hierarchy": "Control Exception Lifted",
        "module": "Control.Exception.Lifted",
        "name": "handleJust",
        "normalized": "(a-\u003eMaybe b)-\u003e(b-\u003ec d)-\u003ec d-\u003ec d",
        "package": "lifted-base",
        "partial": "Just",
        "signature": "(e-\u003eMaybe b)-\u003e(b-\u003em a)-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Exception-Lifted.html#v:ioError",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003eioError\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Exception.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "IOError -\u003e m a",
        "fct-source": "src/Control-Exception-Lifted.html#ioError",
        "fct-type": "function",
        "title": "ioError"
      },
      "index": {
        "description": "Generalized version of ioError",
        "hierarchy": "Control Exception Lifted",
        "module": "Control.Exception.Lifted",
        "name": "ioError",
        "normalized": "IOError-\u003ea b",
        "package": "lifted-base",
        "partial": "Error",
        "signature": "IOError-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Exception-Lifted.html#v:mask",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003emask\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Exception.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "((forall a.  m a -\u003e m a) -\u003e m b) -\u003e m b",
        "fct-source": "src/Control-Exception-Lifted.html#mask",
        "fct-type": "function",
        "title": "mask"
      },
      "index": {
        "description": "Generalized version of mask",
        "hierarchy": "Control Exception Lifted",
        "module": "Control.Exception.Lifted",
        "name": "mask",
        "normalized": "((a b c d-\u003ec d)-\u003ec e)-\u003ec e",
        "package": "lifted-base",
        "partial": "",
        "signature": "((forall a. m a-\u003em a)-\u003em b)-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Exception-Lifted.html#v:mask_",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003emask_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Exception.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "m a -\u003e m a",
        "fct-source": "src/Control-Exception-Lifted.html#mask_",
        "fct-type": "function",
        "title": "mask_"
      },
      "index": {
        "description": "Generalized version of mask",
        "hierarchy": "Control Exception Lifted",
        "module": "Control.Exception.Lifted",
        "name": "mask_",
        "normalized": "a b-\u003ea b",
        "package": "lifted-base",
        "partial": "",
        "signature": "m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Exception-Lifted.html#v:onException",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003eonException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote, any monadic side effects in \u003ccode\u003em\u003c/code\u003e of the \"afterward\"\n computation will be discarded.\n\u003c/p\u003e",
        "fct-module": "Control.Exception.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "m a -\u003e m b -\u003e m a",
        "fct-source": "src/Control-Exception-Lifted.html#onException",
        "fct-type": "function",
        "title": "onException"
      },
      "index": {
        "description": "Generalized version of onException Note any monadic side effects in of the afterward computation will be discarded",
        "hierarchy": "Control Exception Lifted",
        "module": "Control.Exception.Lifted",
        "name": "onException",
        "normalized": "a b-\u003ea c-\u003ea b",
        "package": "lifted-base",
        "partial": "Exception",
        "signature": "m a-\u003em b-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Exception-Lifted.html#v:throwIO",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ethrowIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Exception.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "e -\u003e m a",
        "fct-source": "src/Control-Exception-Lifted.html#throwIO",
        "fct-type": "function",
        "title": "throwIO"
      },
      "index": {
        "description": "Generalized version of throwIO",
        "hierarchy": "Control Exception Lifted",
        "module": "Control.Exception.Lifted",
        "name": "throwIO",
        "normalized": "a-\u003eb c",
        "package": "lifted-base",
        "partial": "IO",
        "signature": "e-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Exception-Lifted.html#v:throwTo",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ethrowTo\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Exception.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "ThreadId -\u003e e -\u003e m ()",
        "fct-source": "src/Control-Exception-Lifted.html#throwTo",
        "fct-type": "function",
        "title": "throwTo"
      },
      "index": {
        "description": "Generalized version of throwTo",
        "hierarchy": "Control Exception Lifted",
        "module": "Control.Exception.Lifted",
        "name": "throwTo",
        "normalized": "ThreadId-\u003ea-\u003eb()",
        "package": "lifted-base",
        "partial": "To",
        "signature": "ThreadId-\u003ee-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Exception-Lifted.html#v:try",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote, when the given computation throws an exception any monadic\n side effects in \u003ccode\u003em\u003c/code\u003e will be discarded.\n\u003c/p\u003e",
        "fct-module": "Control.Exception.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "m a -\u003e m (Either e a)",
        "fct-source": "src/Control-Exception-Lifted.html#try",
        "fct-type": "function",
        "title": "try"
      },
      "index": {
        "description": "Generalized version of try Note when the given computation throws an exception any monadic side effects in will be discarded",
        "hierarchy": "Control Exception Lifted",
        "module": "Control.Exception.Lifted",
        "name": "try",
        "normalized": "a b-\u003ea(Either c b)",
        "package": "lifted-base",
        "partial": "",
        "signature": "m a-\u003em(Either e a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Exception-Lifted.html#v:tryJust",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003etryJust\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote, when the given computation throws an exception any monadic\n side effects in \u003ccode\u003em\u003c/code\u003e will be discarded.\n\u003c/p\u003e",
        "fct-module": "Control.Exception.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "(e -\u003e Maybe b) -\u003e m a -\u003e m (Either b a)",
        "fct-source": "src/Control-Exception-Lifted.html#tryJust",
        "fct-type": "function",
        "title": "tryJust"
      },
      "index": {
        "description": "Generalized version of tryJust Note when the given computation throws an exception any monadic side effects in will be discarded",
        "hierarchy": "Control Exception Lifted",
        "module": "Control.Exception.Lifted",
        "name": "tryJust",
        "normalized": "(a-\u003eMaybe b)-\u003ec d-\u003ec(Either b d)",
        "package": "lifted-base",
        "partial": "Just",
        "signature": "(e-\u003eMaybe b)-\u003em a-\u003em(Either b a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Exception-Lifted.html#v:uninterruptibleMask",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003euninterruptibleMask\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Exception.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "((forall a.  m a -\u003e m a) -\u003e m b) -\u003e m b",
        "fct-source": "src/Control-Exception-Lifted.html#uninterruptibleMask",
        "fct-type": "function",
        "title": "uninterruptibleMask"
      },
      "index": {
        "description": "Generalized version of uninterruptibleMask",
        "hierarchy": "Control Exception Lifted",
        "module": "Control.Exception.Lifted",
        "name": "uninterruptibleMask",
        "normalized": "((a b c d-\u003ec d)-\u003ec e)-\u003ec e",
        "package": "lifted-base",
        "partial": "Mask",
        "signature": "((forall a. m a-\u003em a)-\u003em b)-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Control-Exception-Lifted.html#v:uninterruptibleMask_",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003euninterruptibleMask_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Exception.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "m a -\u003e m a",
        "fct-source": "src/Control-Exception-Lifted.html#uninterruptibleMask_",
        "fct-type": "function",
        "title": "uninterruptibleMask_"
      },
      "index": {
        "description": "Generalized version of uninterruptibleMask",
        "hierarchy": "Control Exception Lifted",
        "module": "Control.Exception.Lifted",
        "name": "uninterruptibleMask_",
        "normalized": "a b-\u003ea b",
        "package": "lifted-base",
        "partial": "Mask",
        "signature": "m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Data-IORef-Lifted.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is a wrapped version of \u003ca\u003eData.IORef\u003c/a\u003e with types\ngeneralised from \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e to all monads in \u003ccode\u003e\u003ca\u003eMonadBase\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.IORef.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "module",
        "fct-source": "src/Data-IORef-Lifted.html",
        "fct-type": "module",
        "title": "Lifted"
      },
      "index": {
        "description": "This is wrapped version of Data.IORef with types generalised from IO to all monads in MonadBase",
        "hierarchy": "Data IORef Lifted",
        "module": "Data.IORef.Lifted",
        "name": "Lifted",
        "normalized": "",
        "package": "lifted-base",
        "partial": "Lifted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Data-IORef-Lifted.html#t:IORef",
      "description": {
        "fct-descr": "\u003cp\u003eA mutable variable in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad\n\u003c/p\u003e",
        "fct-module": "Data.IORef.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "IORef"
      },
      "index": {
        "description": "mutable variable in the IO monad",
        "hierarchy": "Data IORef Lifted",
        "module": "Data.IORef.Lifted",
        "name": "IORef",
        "normalized": "",
        "package": "lifted-base",
        "partial": "IORef",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Data-IORef-Lifted.html#v:atomicModifyIORef",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003eatomicModifyIORef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.IORef.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "IORef a -\u003e (a -\u003e (a, b)) -\u003e m b",
        "fct-source": "src/Data-IORef-Lifted.html#atomicModifyIORef",
        "fct-type": "function",
        "title": "atomicModifyIORef"
      },
      "index": {
        "description": "Generalized version of atomicModifyIORef",
        "hierarchy": "Data IORef Lifted",
        "module": "Data.IORef.Lifted",
        "name": "atomicModifyIORef",
        "normalized": "IORef a-\u003e(a-\u003e(a,b))-\u003ec b",
        "package": "lifted-base",
        "partial": "Modify IORef",
        "signature": "IORef a-\u003e(a-\u003e(a,b))-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Data-IORef-Lifted.html#v:atomicModifyIORef-39-",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003eatomicModifyIORef'\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.IORef.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "IORef a -\u003e (a -\u003e (a, b)) -\u003e m b",
        "fct-source": "src/Data-IORef-Lifted.html#atomicModifyIORef%27",
        "fct-type": "function",
        "title": "atomicModifyIORef'"
      },
      "index": {
        "description": "Generalized version of atomicModifyIORef",
        "hierarchy": "Data IORef Lifted",
        "module": "Data.IORef.Lifted",
        "name": "atomicModifyIORef'",
        "normalized": "IORef a-\u003e(a-\u003e(a,b))-\u003ec b",
        "package": "lifted-base",
        "partial": "Modify IORef'",
        "signature": "IORef a-\u003e(a-\u003e(a,b))-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Data-IORef-Lifted.html#v:atomicWriteIORef",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003eatomicWriteIORef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.IORef.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "IORef a -\u003e a -\u003e m ()",
        "fct-source": "src/Data-IORef-Lifted.html#atomicWriteIORef",
        "fct-type": "function",
        "title": "atomicWriteIORef"
      },
      "index": {
        "description": "Generalized version of atomicWriteIORef",
        "hierarchy": "Data IORef Lifted",
        "module": "Data.IORef.Lifted",
        "name": "atomicWriteIORef",
        "normalized": "IORef a-\u003ea-\u003eb()",
        "package": "lifted-base",
        "partial": "Write IORef",
        "signature": "IORef a-\u003ea-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Data-IORef-Lifted.html#v:mkWeakIORef",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003emkWeakIORef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote any monadic side effects in \u003ccode\u003em\u003c/code\u003e of the \"finalizer\" computation\n are discarded.\n\u003c/p\u003e",
        "fct-module": "Data.IORef.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "IORef a -\u003e m () -\u003e m (Weak (IORef a))",
        "fct-source": "src/Data-IORef-Lifted.html#mkWeakIORef",
        "fct-type": "function",
        "title": "mkWeakIORef"
      },
      "index": {
        "description": "Generalized version of mkWeakIORef Note any monadic side effects in of the finalizer computation are discarded",
        "hierarchy": "Data IORef Lifted",
        "module": "Data.IORef.Lifted",
        "name": "mkWeakIORef",
        "normalized": "IORef a-\u003eb()-\u003eb(Weak(IORef a))",
        "package": "lifted-base",
        "partial": "Weak IORef",
        "signature": "IORef a-\u003em()-\u003em(Weak(IORef a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Data-IORef-Lifted.html#v:modifyIORef",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003emodifyIORef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.IORef.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "IORef a -\u003e (a -\u003e a) -\u003e m ()",
        "fct-source": "src/Data-IORef-Lifted.html#modifyIORef",
        "fct-type": "function",
        "title": "modifyIORef"
      },
      "index": {
        "description": "Generalized version of modifyIORef",
        "hierarchy": "Data IORef Lifted",
        "module": "Data.IORef.Lifted",
        "name": "modifyIORef",
        "normalized": "IORef a-\u003e(a-\u003ea)-\u003eb()",
        "package": "lifted-base",
        "partial": "IORef",
        "signature": "IORef a-\u003e(a-\u003ea)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Data-IORef-Lifted.html#v:modifyIORef-39-",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003emodifyIORef'\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.IORef.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "IORef a -\u003e (a -\u003e a) -\u003e m ()",
        "fct-source": "src/Data-IORef-Lifted.html#modifyIORef%27",
        "fct-type": "function",
        "title": "modifyIORef'"
      },
      "index": {
        "description": "Generalized version of modifyIORef",
        "hierarchy": "Data IORef Lifted",
        "module": "Data.IORef.Lifted",
        "name": "modifyIORef'",
        "normalized": "IORef a-\u003e(a-\u003ea)-\u003eb()",
        "package": "lifted-base",
        "partial": "IORef'",
        "signature": "IORef a-\u003e(a-\u003ea)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Data-IORef-Lifted.html#v:newIORef",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003enewIORef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.IORef.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "a -\u003e m (IORef a)",
        "fct-source": "src/Data-IORef-Lifted.html#newIORef",
        "fct-type": "function",
        "title": "newIORef"
      },
      "index": {
        "description": "Generalized version of newIORef",
        "hierarchy": "Data IORef Lifted",
        "module": "Data.IORef.Lifted",
        "name": "newIORef",
        "normalized": "a-\u003eb(IORef a)",
        "package": "lifted-base",
        "partial": "IORef",
        "signature": "a-\u003em(IORef a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Data-IORef-Lifted.html#v:readIORef",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ereadIORef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.IORef.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "IORef a -\u003e m a",
        "fct-source": "src/Data-IORef-Lifted.html#readIORef",
        "fct-type": "function",
        "title": "readIORef"
      },
      "index": {
        "description": "Generalized version of readIORef",
        "hierarchy": "Data IORef Lifted",
        "module": "Data.IORef.Lifted",
        "name": "readIORef",
        "normalized": "IORef a-\u003eb a",
        "package": "lifted-base",
        "partial": "IORef",
        "signature": "IORef a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/Data-IORef-Lifted.html#v:writeIORef",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003ewriteIORef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.IORef.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "IORef a -\u003e a -\u003e m ()",
        "fct-source": "src/Data-IORef-Lifted.html#writeIORef",
        "fct-type": "function",
        "title": "writeIORef"
      },
      "index": {
        "description": "Generalized version of writeIORef",
        "hierarchy": "Data IORef Lifted",
        "module": "Data.IORef.Lifted",
        "name": "writeIORef",
        "normalized": "IORef a-\u003ea-\u003eb()",
        "package": "lifted-base",
        "partial": "IORef",
        "signature": "IORef a-\u003ea-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/System-Timeout-Lifted.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAttach a timeout event to monadic computations\n which are instances of \u003ccode\u003e\u003ca\u003eMonadBaseControl\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Timeout.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "module",
        "fct-source": "src/System-Timeout-Lifted.html",
        "fct-type": "module",
        "title": "Lifted"
      },
      "index": {
        "description": "Attach timeout event to monadic computations which are instances of MonadBaseControl",
        "hierarchy": "System Timeout Lifted",
        "module": "System.Timeout.Lifted",
        "name": "Lifted",
        "normalized": "",
        "package": "lifted-base",
        "partial": "Lifted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lifted-base/docs/System-Timeout-Lifted.html#v:timeout",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003etimeout\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that when the given computation times out any side effects of \u003ccode\u003em\u003c/code\u003e are\n discarded. When the computation completes within the given time the\n side-effects are restored on return.\n\u003c/p\u003e",
        "fct-module": "System.Timeout.Lifted",
        "fct-package": "lifted-base",
        "fct-signature": "Int -\u003e m a -\u003e m (Maybe a)",
        "fct-source": "src/System-Timeout-Lifted.html#timeout",
        "fct-type": "function",
        "title": "timeout"
      },
      "index": {
        "description": "Generalized version of timeout Note that when the given computation times out any side effects of are discarded When the computation completes within the given time the side-effects are restored on return",
        "hierarchy": "System Timeout Lifted",
        "module": "System.Timeout.Lifted",
        "name": "timeout",
        "normalized": "Int-\u003ea b-\u003ea(Maybe b)",
        "package": "lifted-base",
        "partial": "",
        "signature": "Int-\u003em a-\u003em(Maybe a)"
      }
    }
  }
]