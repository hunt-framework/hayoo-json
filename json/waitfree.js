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
        "word": "waitfree"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Waitfree",
          "name": "Waitfree",
          "package": "waitfree",
          "source": "src/Control-Concurrent-Waitfree.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Concurrent Waitfree",
          "module": "Control.Concurrent.Waitfree",
          "name": "Waitfree",
          "package": "waitfree",
          "partial": "Waitfree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/waitfree/docs/Control-Concurrent-Waitfree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ean abreviation for \u003ccode\u003e\u003ca\u003eHCons\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concurrent.Waitfree",
          "name": ":*:",
          "package": "waitfree",
          "source": "src/Control-Concurrent-Waitfree.html#%3A%2A%3A",
          "type": "type"
        },
        "index": {
          "description": "an abreviation for HCons",
          "hierarchy": "Control Concurrent Waitfree",
          "module": "Control.Concurrent.Waitfree",
          "name": ":*:",
          "package": "waitfree",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/waitfree/docs/Control-Concurrent-Waitfree.html#t::-42-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEach \u003ccode\u003e\u003ca\u003eThread\u003c/a\u003e\u003c/code\u003e type has \u003ccode\u003e\u003ca\u003eAbstractThreadId\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concurrent.Waitfree",
          "name": "AbstractThreadId",
          "package": "waitfree",
          "source": "src/Control-Concurrent-Waitfree.html#AbstractThreadId",
          "type": "type"
        },
        "index": {
          "description": "Each Thread type has AbstractThreadId",
          "hierarchy": "Control Concurrent Waitfree",
          "module": "Control.Concurrent.Waitfree",
          "name": "AbstractThreadId",
          "package": "waitfree",
          "partial": "Abstract Thread Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/waitfree/docs/Control-Concurrent-Waitfree.html#t:AbstractThreadId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'HCons (K t e)' adds a remote computation in front of a \u003ccode\u003eIOerSequent\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concurrent.Waitfree",
          "name": "HCons",
          "package": "waitfree",
          "source": "src/Control-Concurrent-Waitfree.html#HCons",
          "type": "data"
        },
        "index": {
          "description": "HCons adds remote computation in front of IOerSequent",
          "hierarchy": "Control Concurrent Waitfree",
          "module": "Control.Concurrent.Waitfree",
          "name": "HCons",
          "package": "waitfree",
          "partial": "HCons",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/waitfree/docs/Control-Concurrent-Waitfree.html#t:HCons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eHNil\u003c/a\u003e\u003c/code\u003e is the empty \u003ccode\u003eIOerSequent\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concurrent.Waitfree",
          "name": "HNil",
          "package": "waitfree",
          "source": "src/Control-Concurrent-Waitfree.html#HNil",
          "type": "data"
        },
        "index": {
          "description": "HNil is the empty IOerSequent",
          "hierarchy": "Control Concurrent Waitfree",
          "module": "Control.Concurrent.Waitfree",
          "name": "HNil",
          "package": "waitfree",
          "partial": "HNil",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/waitfree/docs/Control-Concurrent-Waitfree.html#t:HNil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA value of type 'K t a' represents a remote computation returning \u003ccode\u003ea\u003c/code\u003e that is performed by a thread \u003ccode\u003e\u003ca\u003et\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Waitfree",
          "name": "K",
          "package": "waitfree",
          "source": "src/Control-Concurrent-Waitfree.html#K",
          "type": "data"
        },
        "index": {
          "description": "value of type represents remote computation returning that is performed by thread",
          "hierarchy": "Control Concurrent Waitfree",
          "module": "Control.Concurrent.Waitfree",
          "name": "K",
          "package": "waitfree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/waitfree/docs/Control-Concurrent-Waitfree.html#t:K"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'SucT t' is a \u003ccode\u003e\u003ca\u003eThread\u003c/a\u003e\u003c/code\u003e if t is a \u003ccode\u003e\u003ca\u003eThread\u003c/a\u003e\u003c/code\u003e.  The name \u003ccode\u003e\u003ca\u003eSucT\u003c/a\u003e\u003c/code\u003e comes from the successor function.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Waitfree",
          "name": "SucT",
          "package": "waitfree",
          "source": "src/Control-Concurrent-Waitfree.html#SucT",
          "type": "data"
        },
        "index": {
          "description": "SucT is Thread if is Thread The name SucT comes from the successor function",
          "hierarchy": "Control Concurrent Waitfree",
          "module": "Control.Concurrent.Waitfree",
          "name": "SucT",
          "package": "waitfree",
          "partial": "Suc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/waitfree/docs/Control-Concurrent-Waitfree.html#t:SucT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn abstract representation of a thread.  Threads are actually implemented using \u003ccode\u003e\u003ca\u003eforkIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Waitfree",
          "name": "Thread",
          "package": "waitfree",
          "source": "src/Control-Concurrent-Waitfree.html#Thread",
          "type": "class"
        },
        "index": {
          "description": "An abstract representation of thread Threads are actually implemented using forkIO",
          "hierarchy": "Control Concurrent Waitfree",
          "module": "Control.Concurrent.Waitfree",
          "name": "Thread",
          "package": "waitfree",
          "partial": "Thread",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/waitfree/docs/Control-Concurrent-Waitfree.html#t:Thread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThreadStatus shows whether a thread is finished or have to try executing another job.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Waitfree",
          "name": "ThreadStatus",
          "package": "waitfree",
          "source": "src/Control-Concurrent-Waitfree.html#ThreadStatus",
          "type": "data"
        },
        "index": {
          "description": "ThreadStatus shows whether thread is finished or have to try executing another job",
          "hierarchy": "Control Concurrent Waitfree",
          "module": "Control.Concurrent.Waitfree",
          "name": "ThreadStatus",
          "package": "waitfree",
          "partial": "Thread Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/waitfree/docs/Control-Concurrent-Waitfree.html#t:ThreadStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eZeroT\u003c/a\u003e\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eThread\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concurrent.Waitfree",
          "name": "ZeroT",
          "package": "waitfree",
          "source": "src/Control-Concurrent-Waitfree.html#ZeroT",
          "type": "data"
        },
        "index": {
          "description": "ZeroT is Thread",
          "hierarchy": "Control Concurrent Waitfree",
          "module": "Control.Concurrent.Waitfree",
          "name": "ZeroT",
          "package": "waitfree",
          "partial": "Zero",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/waitfree/docs/Control-Concurrent-Waitfree.html#t:ZeroT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eextend a IO hypersequent with another computation\n\u003c/p\u003e",
          "module": "Control.Concurrent.Waitfree",
          "name": "(-*-)",
          "package": "waitfree",
          "signature": "(t -\u003e a -\u003e IO b) -\u003e (l -\u003e IO l') -\u003e HCons (K t a) l -\u003e IO (HCons (K t b) l')",
          "source": "src/Control-Concurrent-Waitfree.html#-%2A-",
          "type": "function"
        },
        "index": {
          "description": "extend IO hypersequent with another computation",
          "hierarchy": "Control Concurrent Waitfree",
          "module": "Control.Concurrent.Waitfree",
          "name": "(-*-) -*-",
          "normalized": "(a-\u003eb-\u003eIO c)-\u003e(d-\u003eIO e)-\u003eHCons(K a b)d-\u003eIO(HCons(K a c)e)",
          "package": "waitfree",
          "signature": "(t-\u003ea-\u003eIO b)-\u003e(l-\u003eIO l')-\u003eHCons(K t a)l-\u003eIO(HCons(K t b)l')",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/waitfree/docs/Control-Concurrent-Waitfree.html#v:-45--42--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Waitfree",
          "name": "Finished",
          "package": "waitfree",
          "signature": "Finished",
          "source": "src/Control-Concurrent-Waitfree.html#ThreadStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Waitfree",
          "module": "Control.Concurrent.Waitfree",
          "name": "Finished",
          "package": "waitfree",
          "partial": "Finished",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/waitfree/docs/Control-Concurrent-Waitfree.html#v:Finished"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Waitfree",
          "name": "TryAnotherJob",
          "package": "waitfree",
          "signature": "TryAnotherJob",
          "source": "src/Control-Concurrent-Waitfree.html#ThreadStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Waitfree",
          "module": "Control.Concurrent.Waitfree",
          "name": "TryAnotherJob",
          "package": "waitfree",
          "partial": "Try Another Job",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/waitfree/docs/Control-Concurrent-Waitfree.html#v:TryAnotherJob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Waitfree",
          "name": "atid",
          "package": "waitfree",
          "signature": "t -\u003e AbstractThreadId",
          "source": "src/Control-Concurrent-Waitfree.html#atid",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Concurrent Waitfree",
          "module": "Control.Concurrent.Waitfree",
          "name": "atid",
          "normalized": "a-\u003eAbstractThreadId",
          "package": "waitfree",
          "signature": "t-\u003eAbstractThreadId",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/waitfree/docs/Control-Concurrent-Waitfree.html#v:atid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Waitfree",
          "name": "choice",
          "package": "waitfree",
          "signature": "(K t a :*: (K t a :*: l)) -\u003e IO (K t a :*: l)",
          "source": "src/Control-Concurrent-Waitfree.html#choice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Waitfree",
          "module": "Control.Concurrent.Waitfree",
          "name": "choice",
          "normalized": "(K a b*(K a b*c))-\u003eIO(K a b*c)",
          "package": "waitfree",
          "signature": "(K t a*(K t a*l))-\u003eIO(K t a*l)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/waitfree/docs/Control-Concurrent-Waitfree.html#v:choice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ecomm\u003c/a\u003e\u003c/code\u003e stands for communication.  \u003ccode\u003e\u003ca\u003ecomm\u003c/a\u003e\u003c/code\u003e combines two hypersequents with a communicating component from each hypersequent.\n | 'comm hypersequent1 error1 hypersequent2 error2' where \u003ccode\u003eerror1\u003c/code\u003e and \u003ccode\u003eerror2\u003c/code\u003e specifies what to do in case of read failure.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Waitfree",
          "name": "comm",
          "package": "waitfree",
          "signature": "IO (HCons (K t (b, a)) l) -\u003e (t -\u003e b -\u003e IO ThreadStatus) -\u003e IO (HCons (K s (d, c)) l') -\u003e (s -\u003e d -\u003e IO ThreadStatus) -\u003e IO (K t (b, c) :*: (K s (d, a) :*: l''))",
          "source": "src/Control-Concurrent-Waitfree.html#comm",
          "type": "function"
        },
        "index": {
          "description": "comm stands for communication comm combines two hypersequents with communicating component from each hypersequent comm hypersequent1 error1 hypersequent2 error2 where error1 and error2 specifies what to do in case of read failure",
          "hierarchy": "Control Concurrent Waitfree",
          "module": "Control.Concurrent.Waitfree",
          "name": "comm",
          "normalized": "IO(HCons(K a(b,c))d)-\u003e(a-\u003eb-\u003eIO ThreadStatus)-\u003eIO(HCons(K e(f,g))h)-\u003e(e-\u003ef-\u003eIO ThreadStatus)-\u003eIO(K a(b,g)*(K e(f,c)*i))",
          "package": "waitfree",
          "signature": "IO(HCons(K t(b,a))l)-\u003e(t-\u003eb-\u003eIO ThreadStatus)-\u003eIO(HCons(K s(d,c))l')-\u003e(s-\u003ed-\u003eIO ThreadStatus)-\u003eIO(K t(b,c)*(K s(d,a)*l''))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/waitfree/docs/Control-Concurrent-Waitfree.html#v:comm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Waitfree",
          "name": "cycling",
          "package": "waitfree",
          "signature": "IO l -\u003e IO (HCons last heads)",
          "source": "src/Control-Concurrent-Waitfree.html#cycling",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Waitfree",
          "module": "Control.Concurrent.Waitfree",
          "name": "cycling",
          "normalized": "IO a-\u003eIO(HCons b c)",
          "package": "waitfree",
          "signature": "IO l-\u003eIO(HCons last heads)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/waitfree/docs/Control-Concurrent-Waitfree.html#v:cycling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Waitfree",
          "name": "exchange",
          "package": "waitfree",
          "signature": "(K t a :*: (K s b :*: l)) -\u003e IO (K s b :*: (K t a :*: l))",
          "source": "src/Control-Concurrent-Waitfree.html#exchange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Waitfree",
          "module": "Control.Concurrent.Waitfree",
          "name": "exchange",
          "normalized": "(K a b*(K c d*e))-\u003eIO(K c d*(K a b*e))",
          "package": "waitfree",
          "signature": "(K t a*(K s b*l))-\u003eIO(K s b*(K t a*l))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/waitfree/docs/Control-Concurrent-Waitfree.html#v:exchange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eexecute\u003c/a\u003e\u003c/code\u003e executes a \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e hypersequent.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Waitfree",
          "name": "execute",
          "package": "waitfree",
          "signature": "IO l -\u003e IO ()",
          "source": "src/Control-Concurrent-Waitfree.html#execute",
          "type": "function"
        },
        "index": {
          "description": "execute executes IO hypersequent",
          "hierarchy": "Control Concurrent Waitfree",
          "module": "Control.Concurrent.Waitfree",
          "name": "execute",
          "normalized": "IO a-\u003eIO()",
          "package": "waitfree",
          "signature": "IO l-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/waitfree/docs/Control-Concurrent-Waitfree.html#v:execute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Waitfree",
          "name": "follows",
          "package": "waitfree",
          "signature": "IO l -\u003e IO l' -\u003e IO l''",
          "source": "src/Control-Concurrent-Waitfree.html#follows",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Waitfree",
          "module": "Control.Concurrent.Waitfree",
          "name": "follows",
          "normalized": "IO a-\u003eIO b-\u003eIO c",
          "package": "waitfree",
          "signature": "IO l-\u003eIO l'-\u003eIO l''",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/waitfree/docs/Control-Concurrent-Waitfree.html#v:follows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003epeek\u003c/a\u003e\u003c/code\u003e allows to look at the result of a remote computation\n\u003c/p\u003e",
          "module": "Control.Concurrent.Waitfree",
          "name": "peek",
          "package": "waitfree",
          "signature": "(t -\u003e JobStatus a -\u003e IO b) -\u003e K t a -\u003e IO b",
          "source": "src/Control-Concurrent-Waitfree.html#peek",
          "type": "function"
        },
        "index": {
          "description": "peek allows to look at the result of remote computation",
          "hierarchy": "Control Concurrent Waitfree",
          "module": "Control.Concurrent.Waitfree",
          "name": "peek",
          "normalized": "(a-\u003eJobStatus b-\u003eIO c)-\u003eK a b-\u003eIO c",
          "package": "waitfree",
          "signature": "(t-\u003eJobStatus a-\u003eIO b)-\u003eK t a-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/waitfree/docs/Control-Concurrent-Waitfree.html#v:peek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esingle\u003c/a\u003e\u003c/code\u003e creates a IO hypersequent consisting of a single remote computation.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Waitfree",
          "name": "single",
          "package": "waitfree",
          "signature": "(t -\u003e IO a) -\u003e IO (K t a :*: HNil)",
          "source": "src/Control-Concurrent-Waitfree.html#single",
          "type": "function"
        },
        "index": {
          "description": "single creates IO hypersequent consisting of single remote computation",
          "hierarchy": "Control Concurrent Waitfree",
          "module": "Control.Concurrent.Waitfree",
          "name": "single",
          "normalized": "(a-\u003eIO b)-\u003eIO(K a b*HNil)",
          "package": "waitfree",
          "signature": "(t-\u003eIO a)-\u003eIO(K t a*HNil)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/waitfree/docs/Control-Concurrent-Waitfree.html#v:single"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Waitfree",
          "name": "t",
          "package": "waitfree",
          "signature": "t",
          "source": "src/Control-Concurrent-Waitfree.html#t",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Concurrent Waitfree",
          "module": "Control.Concurrent.Waitfree",
          "name": "t",
          "package": "waitfree",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/waitfree/docs/Control-Concurrent-Waitfree.html#v:t"
      }
    }
  ]
]