[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Implicit.html#",
      "description": {
        "fct-module": "Control.Concurrent.SimpleSession.Implicit",
        "fct-package": "simple-sessions",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-SimpleSession-Implicit.html",
        "fct-type": "module",
        "title": "Implicit"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SimpleSession Implicit",
        "module": "Control.Concurrent.SimpleSession.Implicit",
        "name": "Implicit",
        "normalized": "",
        "package": "simple-sessions",
        "partial": "Implicit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Implicit.html#t:Cap",
      "description": {
        "fct-module": "Control.Concurrent.SimpleSession.Implicit",
        "fct-package": "simple-sessions",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-SimpleSession-Implicit.html#Cap",
        "fct-type": "data",
        "title": "Cap"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SimpleSession Implicit",
        "module": "Control.Concurrent.SimpleSession.Implicit",
        "name": "Cap",
        "normalized": "",
        "package": "simple-sessions",
        "partial": "Cap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Implicit.html#t:Pop",
      "description": {
        "fct-module": "Control.Concurrent.SimpleSession.Implicit",
        "fct-package": "simple-sessions",
        "fct-signature": "class",
        "fct-source": "src/Control-Concurrent-SimpleSession-Implicit.html#Pop",
        "fct-type": "class",
        "title": "Pop"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SimpleSession Implicit",
        "module": "Control.Concurrent.SimpleSession.Implicit",
        "name": "Pop",
        "normalized": "",
        "package": "simple-sessions",
        "partial": "Pop",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Implicit.html#t:Rendezvous",
      "description": {
        "fct-module": "Control.Concurrent.SimpleSession.Implicit",
        "fct-package": "simple-sessions",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-SimpleSession-Implicit.html#Rendezvous",
        "fct-type": "data",
        "title": "Rendezvous"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SimpleSession Implicit",
        "module": "Control.Concurrent.SimpleSession.Implicit",
        "name": "Rendezvous",
        "normalized": "",
        "package": "simple-sessions",
        "partial": "Rendezvous",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Implicit.html#t:Session",
      "description": {
        "fct-descr": "\u003cp\u003eSession| is implemented as the composition of the IO monad with\n a reader monad carrying a untyped channel.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SimpleSession.Implicit",
        "fct-package": "simple-sessions",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-SimpleSession-Implicit.html#Session",
        "fct-type": "data",
        "title": "Session"
      },
      "index": {
        "description": "Session is implemented as the composition of the IO monad with reader monad carrying untyped channel",
        "hierarchy": "Control Concurrent SimpleSession Implicit",
        "module": "Control.Concurrent.SimpleSession.Implicit",
        "name": "Session",
        "normalized": "",
        "package": "simple-sessions",
        "partial": "Session",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Implicit.html#v:accept",
      "description": {
        "fct-module": "Control.Concurrent.SimpleSession.Implicit",
        "fct-package": "simple-sessions",
        "fct-signature": "Rendezvous r -\u003e Session (Cap () r) () a -\u003e IO a",
        "fct-source": "src/Control-Concurrent-SimpleSession-Implicit.html#accept",
        "fct-type": "function",
        "title": "accept"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SimpleSession Implicit",
        "module": "Control.Concurrent.SimpleSession.Implicit",
        "name": "accept",
        "normalized": "Rendezvous a-\u003eSession(Cap()a)()b-\u003eIO b",
        "package": "simple-sessions",
        "partial": "",
        "signature": "Rendezvous r-\u003eSession(Cap()r)()a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Implicit.html#v:close",
      "description": {
        "fct-module": "Control.Concurrent.SimpleSession.Implicit",
        "fct-package": "simple-sessions",
        "fct-signature": "Session (Cap e Eps) () ()",
        "fct-source": "src/Control-Concurrent-SimpleSession-Implicit.html#close",
        "fct-type": "function",
        "title": "close"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SimpleSession Implicit",
        "module": "Control.Concurrent.SimpleSession.Implicit",
        "name": "close",
        "normalized": "Session(Cap a Eps)()()",
        "package": "simple-sessions",
        "partial": "",
        "signature": "Session(Cap e Eps)()()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Implicit.html#v:enter",
      "description": {
        "fct-module": "Control.Concurrent.SimpleSession.Implicit",
        "fct-package": "simple-sessions",
        "fct-signature": "Session (Cap e (Rec r)) (Cap (r, e) r) ()",
        "fct-source": "src/Control-Concurrent-SimpleSession-Implicit.html#enter",
        "fct-type": "function",
        "title": "enter"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SimpleSession Implicit",
        "module": "Control.Concurrent.SimpleSession.Implicit",
        "name": "enter",
        "normalized": "Session(Cap a(Rec b))(Cap(b,a)b)()",
        "package": "simple-sessions",
        "partial": "",
        "signature": "Session(Cap e(Rec r))(Cap(r,e)r)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Implicit.html#v:io",
      "description": {
        "fct-module": "Control.Concurrent.SimpleSession.Implicit",
        "fct-package": "simple-sessions",
        "fct-signature": "IO a -\u003e Session s s a",
        "fct-source": "src/Control-Concurrent-SimpleSession-Implicit.html#io",
        "fct-type": "function",
        "title": "io"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SimpleSession Implicit",
        "module": "Control.Concurrent.SimpleSession.Implicit",
        "name": "io",
        "normalized": "IO a-\u003eSession b b a",
        "package": "simple-sessions",
        "partial": "",
        "signature": "IO a-\u003eSession s s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Implicit.html#v:newRendezvous",
      "description": {
        "fct-module": "Control.Concurrent.SimpleSession.Implicit",
        "fct-package": "simple-sessions",
        "fct-signature": "IO (Rendezvous r)",
        "fct-source": "src/Control-Concurrent-SimpleSession-Implicit.html#newRendezvous",
        "fct-type": "function",
        "title": "newRendezvous"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SimpleSession Implicit",
        "module": "Control.Concurrent.SimpleSession.Implicit",
        "name": "newRendezvous",
        "normalized": "",
        "package": "simple-sessions",
        "partial": "Rendezvous",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Implicit.html#v:offer",
      "description": {
        "fct-module": "Control.Concurrent.SimpleSession.Implicit",
        "fct-package": "simple-sessions",
        "fct-signature": "Session (Cap e r) u a -\u003e Session (Cap e s) u a -\u003e Session (Cap e (r :&: s)) u a",
        "fct-source": "src/Control-Concurrent-SimpleSession-Implicit.html#offer",
        "fct-type": "function",
        "title": "offer"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SimpleSession Implicit",
        "module": "Control.Concurrent.SimpleSession.Implicit",
        "name": "offer",
        "normalized": "Session(Cap a b)c d-\u003eSession(Cap a e)c d-\u003eSession(Cap a(b e))c d",
        "package": "simple-sessions",
        "partial": "",
        "signature": "Session(Cap e r)u a-\u003eSession(Cap e s)u a-\u003eSession(Cap e(r s))u a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Implicit.html#v:pop",
      "description": {
        "fct-module": "Control.Concurrent.SimpleSession.Implicit",
        "fct-package": "simple-sessions",
        "fct-signature": "Session s s' ()",
        "fct-source": "src/Control-Concurrent-SimpleSession-Implicit.html#pop",
        "fct-type": "method",
        "title": "pop"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SimpleSession Implicit",
        "module": "Control.Concurrent.SimpleSession.Implicit",
        "name": "pop",
        "normalized": "Session a b()",
        "package": "simple-sessions",
        "partial": "",
        "signature": "Session s s'()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Implicit.html#v:recv",
      "description": {
        "fct-descr": "\u003cp\u003ea :!: r| to |r|.\n In its implementation, |unsafeWriteUChan|\n indiscriminately transmits values of any type over an untyped channel.\n Thus, if we fail to ensure that the receiving process expects a value of\n type |a|, things can go very wrong.  In Sectionref{sec:theory}, we\n argue that this cannot happen.\n\u003c/p\u003e\u003cp\u003ePredictably, |recv| requires the capability to receive an |a|, which it\n then produces:\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SimpleSession.Implicit",
        "fct-package": "simple-sessions",
        "fct-signature": "Session (Cap e (a :?: r)) (Cap e r) a",
        "fct-source": "src/Control-Concurrent-SimpleSession-Implicit.html#recv",
        "fct-type": "function",
        "title": "recv"
      },
      "index": {
        "description": "to In its implementation unsafeWriteUChan indiscriminately transmits values of any type over an untyped channel Thus if we fail to ensure that the receiving process expects value of type things can go very wrong In Sectionref sec theory we argue that this cannot happen Predictably recv requires the capability to receive an which it then produces",
        "hierarchy": "Control Concurrent SimpleSession Implicit",
        "module": "Control.Concurrent.SimpleSession.Implicit",
        "name": "recv",
        "normalized": "",
        "package": "simple-sessions",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Implicit.html#v:request",
      "description": {
        "fct-descr": "\u003cp\u003erequest| receives a new, untyped channel from |accept| over the\n |Rendezvous| channel and then runs the computation using the channel.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SimpleSession.Implicit",
        "fct-package": "simple-sessions",
        "fct-signature": "Rendezvous r -\u003e Session (Cap () r') () a -\u003e IO a",
        "fct-source": "src/Control-Concurrent-SimpleSession-Implicit.html#request",
        "fct-type": "function",
        "title": "request"
      },
      "index": {
        "description": "request receives new untyped channel from accept over the Rendezvous channel and then runs the computation using the channel",
        "hierarchy": "Control Concurrent SimpleSession Implicit",
        "module": "Control.Concurrent.SimpleSession.Implicit",
        "name": "request",
        "normalized": "Rendezvous a-\u003eSession(Cap()b)()c-\u003eIO c",
        "package": "simple-sessions",
        "partial": "",
        "signature": "Rendezvous r-\u003eSession(Cap()r')()a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Implicit.html#v:sel1",
      "description": {
        "fct-descr": "\u003cp\u003eSession|, this does not jeopardize safety in the sense that any\n messages received will still have the expected representation.  Some\n formulations of session types guarantee that a session, once initiated,\n will run to completion, but this seems unrealistic for real-world\n programs.  Handling exceptions from within a session remains an open\n problem.\n\u003c/p\u003e\u003cp\u003eparagraph{Alternation.}\n\u003c/p\u003e\u003cp\u003eThe session actions |sel1|, |sel2|, and |offer| implement alternation.\n Action |sel1| selects the left side of an ``internal choice'',\n thereby replacing a session |r :+: s| with the session |r|; |sel2|\n selects the right side.  On the other side of the channel, |offer| combines a\n |Session| computation for |r| with a computation for |s| into a\n computation that can handle |r :&: s|.  Dynamically, |sel1| sends |True|\n over the channel, whereas |sel2| sends |False|, and |offer| dispatches\n on the boolean value received.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SimpleSession.Implicit",
        "fct-package": "simple-sessions",
        "fct-signature": "Session (Cap e (r :+: s)) (Cap e r) ()",
        "fct-source": "src/Control-Concurrent-SimpleSession-Implicit.html#sel1",
        "fct-type": "function",
        "title": "sel1"
      },
      "index": {
        "description": "Session this does not jeopardize safety in the sense that any messages received will still have the expected representation Some formulations of session types guarantee that session once initiated will run to completion but this seems unrealistic for real-world programs Handling exceptions from within session remains an open problem paragraph Alternation The session actions sel1 sel2 and offer implement alternation Action sel1 selects the left side of an internal choice thereby replacing session with the session sel2 selects the right side On the other side of the channel offer combines Session computation for with computation for into computation that can handle Dynamically sel1 sends True over the channel whereas sel2 sends False and offer dispatches on the boolean value received",
        "hierarchy": "Control Concurrent SimpleSession Implicit",
        "module": "Control.Concurrent.SimpleSession.Implicit",
        "name": "sel1",
        "normalized": "Session(Cap a(b c))(Cap a b)()",
        "package": "simple-sessions",
        "partial": "",
        "signature": "Session(Cap e(r s))(Cap e r)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Implicit.html#v:sel2",
      "description": {
        "fct-module": "Control.Concurrent.SimpleSession.Implicit",
        "fct-package": "simple-sessions",
        "fct-signature": "Session (Cap e (r :+: s)) (Cap e s) ()",
        "fct-source": "src/Control-Concurrent-SimpleSession-Implicit.html#sel2",
        "fct-type": "function",
        "title": "sel2"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SimpleSession Implicit",
        "module": "Control.Concurrent.SimpleSession.Implicit",
        "name": "sel2",
        "normalized": "Session(Cap a(b c))(Cap a c)()",
        "package": "simple-sessions",
        "partial": "",
        "signature": "Session(Cap e(r s))(Cap e s)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Implicit.html#v:send",
      "description": {
        "fct-module": "Control.Concurrent.SimpleSession.Implicit",
        "fct-package": "simple-sessions",
        "fct-signature": "a -\u003e Session (Cap e (a :!: r)) (Cap e r) ()",
        "fct-source": "src/Control-Concurrent-SimpleSession-Implicit.html#send",
        "fct-type": "function",
        "title": "send"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SimpleSession Implicit",
        "module": "Control.Concurrent.SimpleSession.Implicit",
        "name": "send",
        "normalized": "a-\u003eSession(Cap b(a c))(Cap b c)()",
        "package": "simple-sessions",
        "partial": "",
        "signature": "a-\u003eSession(Cap e(a r))(Cap e r)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Implicit.html#v:suc",
      "description": {
        "fct-module": "Control.Concurrent.SimpleSession.Implicit",
        "fct-package": "simple-sessions",
        "fct-signature": "Session (Cap (r, e) (Var (S v))) (Cap e (Var v)) ()",
        "fct-source": "src/Control-Concurrent-SimpleSession-Implicit.html#suc",
        "fct-type": "function",
        "title": "suc"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SimpleSession Implicit",
        "module": "Control.Concurrent.SimpleSession.Implicit",
        "name": "suc",
        "normalized": "Session(Cap(a,b)(Var(S c)))(Cap b(Var c))()",
        "package": "simple-sessions",
        "partial": "",
        "signature": "Session(Cap(r,e)(Var(S v)))(Cap e(Var v))()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Implicit.html#v:zero",
      "description": {
        "fct-descr": "\u003cp\u003eRec|, representing an environment that closes over |r|.  Upon\n encountering a variable occurence |Var |$n$, where $n$ is a Peano\n numeral, we restore the\n $n$th session type from the stack and return the stack to its former\n state, using $n$ expressed with |zero| and |suc|:\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SimpleSession.Implicit",
        "fct-package": "simple-sessions",
        "fct-signature": "Session (Cap (r, e) (Var Z)) (Cap (r, e) r) ()",
        "fct-source": "src/Control-Concurrent-SimpleSession-Implicit.html#zero",
        "fct-type": "function",
        "title": "zero"
      },
      "index": {
        "description": "Rec representing an environment that closes over Upon encountering variable occurence Var where is Peano numeral we restore the th session type from the stack and return the stack to its former state using expressed with zero and suc",
        "hierarchy": "Control Concurrent SimpleSession Implicit",
        "module": "Control.Concurrent.SimpleSession.Implicit",
        "name": "zero",
        "normalized": "Session(Cap(a,b)(Var Z))(Cap(a,b)a)()",
        "package": "simple-sessions",
        "partial": "",
        "signature": "Session(Cap(r,e)(Var Z))(Cap(r,e)r)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Positional.html#",
      "description": {
        "fct-module": "Control.Concurrent.SimpleSession.Positional",
        "fct-package": "simple-sessions",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-SimpleSession-Positional.html",
        "fct-type": "module",
        "title": "Positional"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SimpleSession Positional",
        "module": "Control.Concurrent.SimpleSession.Positional",
        "name": "Positional",
        "normalized": "",
        "package": "simple-sessions",
        "partial": "Positional",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Positional.html#t:Cap",
      "description": {
        "fct-module": "Control.Concurrent.SimpleSession.Positional",
        "fct-package": "simple-sessions",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-SimpleSession-Positional.html#Cap",
        "fct-type": "data",
        "title": "Cap"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SimpleSession Positional",
        "module": "Control.Concurrent.SimpleSession.Positional",
        "name": "Cap",
        "normalized": "",
        "package": "simple-sessions",
        "partial": "Cap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Positional.html#t:Channel",
      "description": {
        "fct-module": "Control.Concurrent.SimpleSession.Positional",
        "fct-package": "simple-sessions",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-SimpleSession-Positional.html#Channel",
        "fct-type": "data",
        "title": "Channel"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SimpleSession Positional",
        "module": "Control.Concurrent.SimpleSession.Positional",
        "name": "Channel",
        "normalized": "",
        "package": "simple-sessions",
        "partial": "Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Positional.html#t:Rendezvous",
      "description": {
        "fct-module": "Control.Concurrent.SimpleSession.Positional",
        "fct-package": "simple-sessions",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-SimpleSession-Positional.html#Rendezvous",
        "fct-type": "data",
        "title": "Rendezvous"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SimpleSession Positional",
        "module": "Control.Concurrent.SimpleSession.Positional",
        "name": "Rendezvous",
        "normalized": "",
        "package": "simple-sessions",
        "partial": "Rendezvous",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Positional.html#t:Session",
      "description": {
        "fct-module": "Control.Concurrent.SimpleSession.Positional",
        "fct-package": "simple-sessions",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-SimpleSession-Positional.html#Session",
        "fct-type": "data",
        "title": "Session"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SimpleSession Positional",
        "module": "Control.Concurrent.SimpleSession.Positional",
        "name": "Session",
        "normalized": "",
        "package": "simple-sessions",
        "partial": "Session",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Positional.html#v:accept",
      "description": {
        "fct-module": "Control.Concurrent.SimpleSession.Positional",
        "fct-package": "simple-sessions",
        "fct-signature": "Rendezvous r -\u003e (forall t.  Channel t -\u003e Session (Cap t () r, x) y a) -\u003e Session x y a",
        "fct-source": "src/Control-Concurrent-SimpleSession-Positional.html#accept",
        "fct-type": "function",
        "title": "accept"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SimpleSession Positional",
        "module": "Control.Concurrent.SimpleSession.Positional",
        "name": "accept",
        "normalized": "Rendezvous a-\u003e(b c Channel d-\u003eSession(Cap d()a,e)f g)-\u003eSession e f g",
        "package": "simple-sessions",
        "partial": "",
        "signature": "Rendezvous r-\u003e(forall t. Channel t-\u003eSession(Cap t()r,x)y a)-\u003eSession x y a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Positional.html#v:close",
      "description": {
        "fct-module": "Control.Concurrent.SimpleSession.Positional",
        "fct-package": "simple-sessions",
        "fct-signature": "Channel t -\u003e Session (Cap t e Eps, x) x ()",
        "fct-source": "src/Control-Concurrent-SimpleSession-Positional.html#close",
        "fct-type": "function",
        "title": "close"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SimpleSession Positional",
        "module": "Control.Concurrent.SimpleSession.Positional",
        "name": "close",
        "normalized": "Channel a-\u003eSession(Cap a b Eps,c)c()",
        "package": "simple-sessions",
        "partial": "",
        "signature": "Channel t-\u003eSession(Cap t e Eps,x)x()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Positional.html#v:dig",
      "description": {
        "fct-module": "Control.Concurrent.SimpleSession.Positional",
        "fct-package": "simple-sessions",
        "fct-signature": "Session x x' a -\u003e Session (r, x) (r, x') a",
        "fct-source": "src/Control-Concurrent-SimpleSession-Positional.html#dig",
        "fct-type": "function",
        "title": "dig"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SimpleSession Positional",
        "module": "Control.Concurrent.SimpleSession.Positional",
        "name": "dig",
        "normalized": "Session a b c-\u003eSession(d,a)(d,b)c",
        "package": "simple-sessions",
        "partial": "",
        "signature": "Session x x' a-\u003eSession(r,x)(r,x')a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Positional.html#v:enter",
      "description": {
        "fct-module": "Control.Concurrent.SimpleSession.Positional",
        "fct-package": "simple-sessions",
        "fct-signature": "Channel t -\u003e Session (Cap t e (Rec r), x) (Cap t (r, e) r, x) ()",
        "fct-source": "src/Control-Concurrent-SimpleSession-Positional.html#enter",
        "fct-type": "function",
        "title": "enter"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SimpleSession Positional",
        "module": "Control.Concurrent.SimpleSession.Positional",
        "name": "enter",
        "normalized": "Channel a-\u003eSession(Cap a b(Rec c),d)(Cap a(c,b)c,d)()",
        "package": "simple-sessions",
        "partial": "",
        "signature": "Channel t-\u003eSession(Cap t e(Rec r),x)(Cap t(r,e)r,x)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Positional.html#v:forkSession",
      "description": {
        "fct-module": "Control.Concurrent.SimpleSession.Positional",
        "fct-package": "simple-sessions",
        "fct-signature": "Session x () () -\u003e Session x () ()",
        "fct-source": "src/Control-Concurrent-SimpleSession-Positional.html#forkSession",
        "fct-type": "function",
        "title": "forkSession"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SimpleSession Positional",
        "module": "Control.Concurrent.SimpleSession.Positional",
        "name": "forkSession",
        "normalized": "Session a()()-\u003eSession a()()",
        "package": "simple-sessions",
        "partial": "Session",
        "signature": "Session x()()-\u003eSession x()()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Positional.html#v:io",
      "description": {
        "fct-module": "Control.Concurrent.SimpleSession.Positional",
        "fct-package": "simple-sessions",
        "fct-signature": "IO a -\u003e Session s s a",
        "fct-source": "src/Control-Concurrent-SimpleSession-Positional.html#io",
        "fct-type": "function",
        "title": "io"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SimpleSession Positional",
        "module": "Control.Concurrent.SimpleSession.Positional",
        "name": "io",
        "normalized": "IO a-\u003eSession b b a",
        "package": "simple-sessions",
        "partial": "",
        "signature": "IO a-\u003eSession s s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Positional.html#v:newRendezvous",
      "description": {
        "fct-module": "Control.Concurrent.SimpleSession.Positional",
        "fct-package": "simple-sessions",
        "fct-signature": "IO (Rendezvous r)",
        "fct-source": "src/Control-Concurrent-SimpleSession-Positional.html#newRendezvous",
        "fct-type": "function",
        "title": "newRendezvous"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SimpleSession Positional",
        "module": "Control.Concurrent.SimpleSession.Positional",
        "name": "newRendezvous",
        "normalized": "",
        "package": "simple-sessions",
        "partial": "Rendezvous",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Positional.html#v:offer",
      "description": {
        "fct-module": "Control.Concurrent.SimpleSession.Positional",
        "fct-package": "simple-sessions",
        "fct-signature": "Channel t -\u003e Session (Cap t e r, x) u a -\u003e Session (Cap t e s, x) u a -\u003e Session (Cap t e (r :&: s), x) u a",
        "fct-source": "src/Control-Concurrent-SimpleSession-Positional.html#offer",
        "fct-type": "function",
        "title": "offer"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SimpleSession Positional",
        "module": "Control.Concurrent.SimpleSession.Positional",
        "name": "offer",
        "normalized": "Channel a-\u003eSession(Cap a b c,d)e f-\u003eSession(Cap a b g,d)e f-\u003eSession(Cap a b(c g),d)e f",
        "package": "simple-sessions",
        "partial": "",
        "signature": "Channel t-\u003eSession(Cap t e r,x)u a-\u003eSession(Cap t e s,x)u a-\u003eSession(Cap t e(r s),x)u a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Positional.html#v:recv",
      "description": {
        "fct-module": "Control.Concurrent.SimpleSession.Positional",
        "fct-package": "simple-sessions",
        "fct-signature": "Channel t -\u003e Session (Cap t e (a :?: r), x) (Cap t e r, x) a",
        "fct-source": "src/Control-Concurrent-SimpleSession-Positional.html#recv",
        "fct-type": "function",
        "title": "recv"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SimpleSession Positional",
        "module": "Control.Concurrent.SimpleSession.Positional",
        "name": "recv",
        "normalized": "Channel a-\u003eSession(Cap a b(c d),e)(Cap a b d,e)c",
        "package": "simple-sessions",
        "partial": "",
        "signature": "Channel t-\u003eSession(Cap t e(a r),x)(Cap t e r,x)a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Positional.html#v:recv_cap",
      "description": {
        "fct-module": "Control.Concurrent.SimpleSession.Positional",
        "fct-package": "simple-sessions",
        "fct-signature": "Channel t -\u003e Session (Cap t e (Cap t' e' r' :?: r), x) (Cap t e r, (Cap t' e' r', x)) ()",
        "fct-source": "src/Control-Concurrent-SimpleSession-Positional.html#recv_cap",
        "fct-type": "function",
        "title": "recv_cap"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SimpleSession Positional",
        "module": "Control.Concurrent.SimpleSession.Positional",
        "name": "recv_cap",
        "normalized": "Channel a-\u003eSession(Cap a b(Cap c d e f),g)(Cap a b f,(Cap c d e,g))()",
        "package": "simple-sessions",
        "partial": "",
        "signature": "Channel t-\u003eSession(Cap t e(Cap t' e' r' r),x)(Cap t e r,(Cap t' e' r',x))()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Positional.html#v:request",
      "description": {
        "fct-module": "Control.Concurrent.SimpleSession.Positional",
        "fct-package": "simple-sessions",
        "fct-signature": "Rendezvous r -\u003e (forall t.  Channel t -\u003e Session (Cap t () r', x) y a) -\u003e Session x y a",
        "fct-source": "src/Control-Concurrent-SimpleSession-Positional.html#request",
        "fct-type": "function",
        "title": "request"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SimpleSession Positional",
        "module": "Control.Concurrent.SimpleSession.Positional",
        "name": "request",
        "normalized": "Rendezvous a-\u003e(b c Channel d-\u003eSession(Cap d()e,f)g h)-\u003eSession f g h",
        "package": "simple-sessions",
        "partial": "",
        "signature": "Rendezvous r-\u003e(forall t. Channel t-\u003eSession(Cap t()r',x)y a)-\u003eSession x y a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Positional.html#v:runSession",
      "description": {
        "fct-module": "Control.Concurrent.SimpleSession.Positional",
        "fct-package": "simple-sessions",
        "fct-signature": "Session () () a -\u003e IO a",
        "fct-source": "src/Control-Concurrent-SimpleSession-Positional.html#runSession",
        "fct-type": "function",
        "title": "runSession"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SimpleSession Positional",
        "module": "Control.Concurrent.SimpleSession.Positional",
        "name": "runSession",
        "normalized": "Session()()a-\u003eIO a",
        "package": "simple-sessions",
        "partial": "Session",
        "signature": "Session()()a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Positional.html#v:sel1",
      "description": {
        "fct-module": "Control.Concurrent.SimpleSession.Positional",
        "fct-package": "simple-sessions",
        "fct-signature": "Channel t -\u003e Session (Cap t e (r :+: s), x) (Cap t e r, x) ()",
        "fct-source": "src/Control-Concurrent-SimpleSession-Positional.html#sel1",
        "fct-type": "function",
        "title": "sel1"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SimpleSession Positional",
        "module": "Control.Concurrent.SimpleSession.Positional",
        "name": "sel1",
        "normalized": "Channel a-\u003eSession(Cap a b(c d),e)(Cap a b c,e)()",
        "package": "simple-sessions",
        "partial": "",
        "signature": "Channel t-\u003eSession(Cap t e(r s),x)(Cap t e r,x)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Positional.html#v:sel2",
      "description": {
        "fct-module": "Control.Concurrent.SimpleSession.Positional",
        "fct-package": "simple-sessions",
        "fct-signature": "Channel t -\u003e Session (Cap t e (r :+: s), x) (Cap t e s, x) ()",
        "fct-source": "src/Control-Concurrent-SimpleSession-Positional.html#sel2",
        "fct-type": "function",
        "title": "sel2"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SimpleSession Positional",
        "module": "Control.Concurrent.SimpleSession.Positional",
        "name": "sel2",
        "normalized": "Channel a-\u003eSession(Cap a b(c d),e)(Cap a b d,e)()",
        "package": "simple-sessions",
        "partial": "",
        "signature": "Channel t-\u003eSession(Cap t e(r s),x)(Cap t e s,x)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Positional.html#v:send",
      "description": {
        "fct-module": "Control.Concurrent.SimpleSession.Positional",
        "fct-package": "simple-sessions",
        "fct-signature": "Channel t -\u003e a -\u003e Session (Cap t e (a :!: r), x) (Cap t e r, x) ()",
        "fct-source": "src/Control-Concurrent-SimpleSession-Positional.html#send",
        "fct-type": "function",
        "title": "send"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SimpleSession Positional",
        "module": "Control.Concurrent.SimpleSession.Positional",
        "name": "send",
        "normalized": "Channel a-\u003eb-\u003eSession(Cap a c(b d),e)(Cap a c d,e)()",
        "package": "simple-sessions",
        "partial": "",
        "signature": "Channel t-\u003ea-\u003eSession(Cap t e(a r),x)(Cap t e r,x)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Positional.html#v:send_cap",
      "description": {
        "fct-module": "Control.Concurrent.SimpleSession.Positional",
        "fct-package": "simple-sessions",
        "fct-signature": "Channel t -\u003e Session (Cap t e (Cap t' e' r' :!: r), (Cap t' e' r', x)) (Cap t e r, x) ()",
        "fct-source": "src/Control-Concurrent-SimpleSession-Positional.html#send_cap",
        "fct-type": "function",
        "title": "send_cap"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SimpleSession Positional",
        "module": "Control.Concurrent.SimpleSession.Positional",
        "name": "send_cap",
        "normalized": "Channel a-\u003eSession(Cap a b(Cap c d e f),(Cap c d e,g))(Cap a b f,g)()",
        "package": "simple-sessions",
        "partial": "",
        "signature": "Channel t-\u003eSession(Cap t e(Cap t' e' r' r),(Cap t' e' r',x))(Cap t e r,x)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Positional.html#v:suc",
      "description": {
        "fct-module": "Control.Concurrent.SimpleSession.Positional",
        "fct-package": "simple-sessions",
        "fct-signature": "Session (Cap t (r, e) (Var (S v)), x) (Cap t e (Var v), x) ()",
        "fct-source": "src/Control-Concurrent-SimpleSession-Positional.html#suc",
        "fct-type": "function",
        "title": "suc"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SimpleSession Positional",
        "module": "Control.Concurrent.SimpleSession.Positional",
        "name": "suc",
        "normalized": "Session(Cap a(b,c)(Var(S d)),e)(Cap a c(Var d),e)()",
        "package": "simple-sessions",
        "partial": "",
        "signature": "Session(Cap t(r,e)(Var(S v)),x)(Cap t e(Var v),x)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Positional.html#v:swap",
      "description": {
        "fct-descr": "\u003cp\u003eswap| may be combined to exchange any two adjacent capabilities.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SimpleSession.Positional",
        "fct-package": "simple-sessions",
        "fct-signature": "Session (r, (s, x)) (s, (r, x)) ()",
        "fct-source": "src/Control-Concurrent-SimpleSession-Positional.html#swap",
        "fct-type": "function",
        "title": "swap"
      },
      "index": {
        "description": "swap may be combined to exchange any two adjacent capabilities",
        "hierarchy": "Control Concurrent SimpleSession Positional",
        "module": "Control.Concurrent.SimpleSession.Positional",
        "name": "swap",
        "normalized": "Session(a,(b,c))(b,(a,c))()",
        "package": "simple-sessions",
        "partial": "",
        "signature": "Session(r,(s,x))(s,(r,x))()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Positional.html#v:zero",
      "description": {
        "fct-module": "Control.Concurrent.SimpleSession.Positional",
        "fct-package": "simple-sessions",
        "fct-signature": "Channel t -\u003e Session (Cap t (r, e) (Var Z), x) (Cap t (r, e) r, x) ()",
        "fct-source": "src/Control-Concurrent-SimpleSession-Positional.html#zero",
        "fct-type": "function",
        "title": "zero"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SimpleSession Positional",
        "module": "Control.Concurrent.SimpleSession.Positional",
        "name": "zero",
        "normalized": "Channel a-\u003eSession(Cap a(b,c)(Var Z),d)(Cap a(b,c)b,d)()",
        "package": "simple-sessions",
        "partial": "",
        "signature": "Channel t-\u003eSession(Cap t(r,e)(Var Z),x)(Cap t(r,e)r,x)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-SessionTypes.html#",
      "description": {
        "fct-module": "Control.Concurrent.SimpleSession.SessionTypes",
        "fct-package": "simple-sessions",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-SimpleSession-SessionTypes.html",
        "fct-type": "module",
        "title": "SessionTypes"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SimpleSession SessionTypes",
        "module": "Control.Concurrent.SimpleSession.SessionTypes",
        "name": "SessionTypes",
        "normalized": "",
        "package": "simple-sessions",
        "partial": "Session Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-SessionTypes.html#t::-33-:",
      "description": {
        "fct-module": "Control.Concurrent.SimpleSession.SessionTypes",
        "fct-package": "simple-sessions",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-SimpleSession-SessionTypes.html#%3A%21%3A",
        "fct-type": "data",
        "title": ":!:"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SimpleSession SessionTypes",
        "module": "Control.Concurrent.SimpleSession.SessionTypes",
        "name": ":!:",
        "normalized": "",
        "package": "simple-sessions",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-SessionTypes.html#t::-38-:",
      "description": {
        "fct-module": "Control.Concurrent.SimpleSession.SessionTypes",
        "fct-package": "simple-sessions",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-SimpleSession-SessionTypes.html#%3A%26%3A",
        "fct-type": "data",
        "title": ":&:"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SimpleSession SessionTypes",
        "module": "Control.Concurrent.SimpleSession.SessionTypes",
        "name": ":&:",
        "normalized": "",
        "package": "simple-sessions",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-SessionTypes.html#t::-43-:",
      "description": {
        "fct-module": "Control.Concurrent.SimpleSession.SessionTypes",
        "fct-package": "simple-sessions",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-SimpleSession-SessionTypes.html#%3A%2B%3A",
        "fct-type": "data",
        "title": ":+:"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SimpleSession SessionTypes",
        "module": "Control.Concurrent.SimpleSession.SessionTypes",
        "name": ":+:",
        "normalized": "",
        "package": "simple-sessions",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-SessionTypes.html#t::-63-:",
      "description": {
        "fct-module": "Control.Concurrent.SimpleSession.SessionTypes",
        "fct-package": "simple-sessions",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-SimpleSession-SessionTypes.html#%3A%3F%3A",
        "fct-type": "data",
        "title": ":?:"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SimpleSession SessionTypes",
        "module": "Control.Concurrent.SimpleSession.SessionTypes",
        "name": ":?:",
        "normalized": "",
        "package": "simple-sessions",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-SessionTypes.html#t:Dual",
      "description": {
        "fct-descr": "\u003cp\u003e(:?:)| are declared right associative and with higher precedence than\n |(:+:)| and |(:&:)|.}\n\u003c/p\u003e\u003cp\u003eIf the process on one end of a channel speaks a particular protocol,\n its correspondant at the other end of the channel must be prepared to\n understand it.  For example, if one process speaks |Int :!: Bool :?: Eps|,\n the other process must implement the dual protocol\n |Int :?: Bool :!: Eps|.  We encode the duality relation using a type\n class with multiple parameters and functional dependencies\n citep{Jones1997Type,Jones2000Type}.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.SimpleSession.SessionTypes",
        "fct-package": "simple-sessions",
        "fct-signature": "class",
        "fct-source": "src/Control-Concurrent-SimpleSession-SessionTypes.html#Dual",
        "fct-type": "class",
        "title": "Dual"
      },
      "index": {
        "description": "are declared right associative and with higher precedence than and If the process on one end of channel speaks particular protocol its correspondant at the other end of the channel must be prepared to understand it For example if one process speaks Int Bool Eps the other process must implement the dual protocol Int Bool Eps We encode the duality relation using type class with multiple parameters and functional dependencies citep Jones1997Type Jones2000Type",
        "hierarchy": "Control Concurrent SimpleSession SessionTypes",
        "module": "Control.Concurrent.SimpleSession.SessionTypes",
        "name": "Dual",
        "normalized": "",
        "package": "simple-sessions",
        "partial": "Dual",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-SessionTypes.html#t:Eps",
      "description": {
        "fct-module": "Control.Concurrent.SimpleSession.SessionTypes",
        "fct-package": "simple-sessions",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-SimpleSession-SessionTypes.html#Eps",
        "fct-type": "data",
        "title": "Eps"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SimpleSession SessionTypes",
        "module": "Control.Concurrent.SimpleSession.SessionTypes",
        "name": "Eps",
        "normalized": "",
        "package": "simple-sessions",
        "partial": "Eps",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-SessionTypes.html#t:Rec",
      "description": {
        "fct-module": "Control.Concurrent.SimpleSession.SessionTypes",
        "fct-package": "simple-sessions",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-SimpleSession-SessionTypes.html#Rec",
        "fct-type": "data",
        "title": "Rec"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SimpleSession SessionTypes",
        "module": "Control.Concurrent.SimpleSession.SessionTypes",
        "name": "Rec",
        "normalized": "",
        "package": "simple-sessions",
        "partial": "Rec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-SessionTypes.html#t:S",
      "description": {
        "fct-module": "Control.Concurrent.SimpleSession.SessionTypes",
        "fct-package": "simple-sessions",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-SimpleSession-SessionTypes.html#S",
        "fct-type": "data",
        "title": "S"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SimpleSession SessionTypes",
        "module": "Control.Concurrent.SimpleSession.SessionTypes",
        "name": "S",
        "normalized": "",
        "package": "simple-sessions",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-SessionTypes.html#t:Var",
      "description": {
        "fct-module": "Control.Concurrent.SimpleSession.SessionTypes",
        "fct-package": "simple-sessions",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-SimpleSession-SessionTypes.html#Var",
        "fct-type": "data",
        "title": "Var"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SimpleSession SessionTypes",
        "module": "Control.Concurrent.SimpleSession.SessionTypes",
        "name": "Var",
        "normalized": "",
        "package": "simple-sessions",
        "partial": "Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-SessionTypes.html#t:Z",
      "description": {
        "fct-module": "Control.Concurrent.SimpleSession.SessionTypes",
        "fct-package": "simple-sessions",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-SimpleSession-SessionTypes.html#Z",
        "fct-type": "data",
        "title": "Z"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent SimpleSession SessionTypes",
        "module": "Control.Concurrent.SimpleSession.SessionTypes",
        "name": "Z",
        "normalized": "",
        "package": "simple-sessions",
        "partial": "",
        "signature": ""
      }
    }
  }
]