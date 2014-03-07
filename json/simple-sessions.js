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
        "word": "simple-sessions"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.SimpleSession.Implicit",
          "name": "Implicit",
          "package": "simple-sessions",
          "source": "src/Control-Concurrent-SimpleSession-Implicit.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Concurrent SimpleSession Implicit",
          "module": "Control.Concurrent.SimpleSession.Implicit",
          "name": "Implicit",
          "package": "simple-sessions",
          "partial": "Implicit",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Implicit.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.SimpleSession.Implicit",
          "name": "Cap",
          "package": "simple-sessions",
          "source": "src/Control-Concurrent-SimpleSession-Implicit.html#Cap",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Concurrent SimpleSession Implicit",
          "module": "Control.Concurrent.SimpleSession.Implicit",
          "name": "Cap",
          "package": "simple-sessions",
          "partial": "Cap",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Implicit.html#t:Cap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.SimpleSession.Implicit",
          "name": "Pop",
          "package": "simple-sessions",
          "source": "src/Control-Concurrent-SimpleSession-Implicit.html#Pop",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Concurrent SimpleSession Implicit",
          "module": "Control.Concurrent.SimpleSession.Implicit",
          "name": "Pop",
          "package": "simple-sessions",
          "partial": "Pop",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Implicit.html#t:Pop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.SimpleSession.Implicit",
          "name": "Rendezvous",
          "package": "simple-sessions",
          "source": "src/Control-Concurrent-SimpleSession-Implicit.html#Rendezvous",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Concurrent SimpleSession Implicit",
          "module": "Control.Concurrent.SimpleSession.Implicit",
          "name": "Rendezvous",
          "package": "simple-sessions",
          "partial": "Rendezvous",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Implicit.html#t:Rendezvous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSession| is implemented as the composition of the IO monad with\n a reader monad carrying a untyped channel.\n\u003c/p\u003e",
          "module": "Control.Concurrent.SimpleSession.Implicit",
          "name": "Session",
          "package": "simple-sessions",
          "source": "src/Control-Concurrent-SimpleSession-Implicit.html#Session",
          "type": "data"
        },
        "index": {
          "description": "Session is implemented as the composition of the IO monad with reader monad carrying untyped channel",
          "hierarchy": "Control Concurrent SimpleSession Implicit",
          "module": "Control.Concurrent.SimpleSession.Implicit",
          "name": "Session",
          "package": "simple-sessions",
          "partial": "Session",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Implicit.html#t:Session"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.SimpleSession.Implicit",
          "name": "accept",
          "package": "simple-sessions",
          "signature": "Rendezvous r -\u003e Session (Cap () r) () a -\u003e IO a",
          "source": "src/Control-Concurrent-SimpleSession-Implicit.html#accept",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent SimpleSession Implicit",
          "module": "Control.Concurrent.SimpleSession.Implicit",
          "name": "accept",
          "normalized": "Rendezvous a-\u003eSession(Cap()a)()b-\u003eIO b",
          "package": "simple-sessions",
          "signature": "Rendezvous r-\u003eSession(Cap()r)()a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Implicit.html#v:accept"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.SimpleSession.Implicit",
          "name": "close",
          "package": "simple-sessions",
          "signature": "Session (Cap e Eps) () ()",
          "source": "src/Control-Concurrent-SimpleSession-Implicit.html#close",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent SimpleSession Implicit",
          "module": "Control.Concurrent.SimpleSession.Implicit",
          "name": "close",
          "normalized": "Session(Cap a Eps)()()",
          "package": "simple-sessions",
          "signature": "Session(Cap e Eps)()()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Implicit.html#v:close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.SimpleSession.Implicit",
          "name": "enter",
          "package": "simple-sessions",
          "signature": "Session (Cap e (Rec r)) (Cap (r, e) r) ()",
          "source": "src/Control-Concurrent-SimpleSession-Implicit.html#enter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent SimpleSession Implicit",
          "module": "Control.Concurrent.SimpleSession.Implicit",
          "name": "enter",
          "normalized": "Session(Cap a(Rec b))(Cap(b,a)b)()",
          "package": "simple-sessions",
          "signature": "Session(Cap e(Rec r))(Cap(r,e)r)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Implicit.html#v:enter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.SimpleSession.Implicit",
          "name": "io",
          "package": "simple-sessions",
          "signature": "IO a -\u003e Session s s a",
          "source": "src/Control-Concurrent-SimpleSession-Implicit.html#io",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent SimpleSession Implicit",
          "module": "Control.Concurrent.SimpleSession.Implicit",
          "name": "io",
          "normalized": "IO a-\u003eSession b b a",
          "package": "simple-sessions",
          "signature": "IO a-\u003eSession s s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Implicit.html#v:io"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.SimpleSession.Implicit",
          "name": "newRendezvous",
          "package": "simple-sessions",
          "signature": "IO (Rendezvous r)",
          "source": "src/Control-Concurrent-SimpleSession-Implicit.html#newRendezvous",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent SimpleSession Implicit",
          "module": "Control.Concurrent.SimpleSession.Implicit",
          "name": "newRendezvous",
          "package": "simple-sessions",
          "partial": "Rendezvous",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Implicit.html#v:newRendezvous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.SimpleSession.Implicit",
          "name": "offer",
          "package": "simple-sessions",
          "signature": "Session (Cap e r) u a -\u003e Session (Cap e s) u a -\u003e Session (Cap e (r :&: s)) u a",
          "source": "src/Control-Concurrent-SimpleSession-Implicit.html#offer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent SimpleSession Implicit",
          "module": "Control.Concurrent.SimpleSession.Implicit",
          "name": "offer",
          "normalized": "Session(Cap a b)c d-\u003eSession(Cap a e)c d-\u003eSession(Cap a(b e))c d",
          "package": "simple-sessions",
          "signature": "Session(Cap e r)u a-\u003eSession(Cap e s)u a-\u003eSession(Cap e(r s))u a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Implicit.html#v:offer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.SimpleSession.Implicit",
          "name": "pop",
          "package": "simple-sessions",
          "signature": "Session s s' ()",
          "source": "src/Control-Concurrent-SimpleSession-Implicit.html#pop",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Concurrent SimpleSession Implicit",
          "module": "Control.Concurrent.SimpleSession.Implicit",
          "name": "pop",
          "normalized": "Session a b()",
          "package": "simple-sessions",
          "signature": "Session s s'()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Implicit.html#v:pop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea :!: r| to |r|.\n In its implementation, |unsafeWriteUChan|\n indiscriminately transmits values of any type over an untyped channel.\n Thus, if we fail to ensure that the receiving process expects a value of\n type |a|, things can go very wrong.  In Sectionref{sec:theory}, we\n argue that this cannot happen.\n\u003c/p\u003e\u003cp\u003ePredictably, |recv| requires the capability to receive an |a|, which it\n then produces:\n\u003c/p\u003e",
          "module": "Control.Concurrent.SimpleSession.Implicit",
          "name": "recv",
          "package": "simple-sessions",
          "signature": "Session (Cap e (a :?: r)) (Cap e r) a",
          "source": "src/Control-Concurrent-SimpleSession-Implicit.html#recv",
          "type": "function"
        },
        "index": {
          "description": "to In its implementation unsafeWriteUChan indiscriminately transmits values of any type over an untyped channel Thus if we fail to ensure that the receiving process expects value of type things can go very wrong In Sectionref sec theory we argue that this cannot happen Predictably recv requires the capability to receive an which it then produces",
          "hierarchy": "Control Concurrent SimpleSession Implicit",
          "module": "Control.Concurrent.SimpleSession.Implicit",
          "name": "recv",
          "package": "simple-sessions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Implicit.html#v:recv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erequest| receives a new, untyped channel from |accept| over the\n |Rendezvous| channel and then runs the computation using the channel.\n\u003c/p\u003e",
          "module": "Control.Concurrent.SimpleSession.Implicit",
          "name": "request",
          "package": "simple-sessions",
          "signature": "Rendezvous r -\u003e Session (Cap () r') () a -\u003e IO a",
          "source": "src/Control-Concurrent-SimpleSession-Implicit.html#request",
          "type": "function"
        },
        "index": {
          "description": "request receives new untyped channel from accept over the Rendezvous channel and then runs the computation using the channel",
          "hierarchy": "Control Concurrent SimpleSession Implicit",
          "module": "Control.Concurrent.SimpleSession.Implicit",
          "name": "request",
          "normalized": "Rendezvous a-\u003eSession(Cap()b)()c-\u003eIO c",
          "package": "simple-sessions",
          "signature": "Rendezvous r-\u003eSession(Cap()r')()a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Implicit.html#v:request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSession|, this does not jeopardize safety in the sense that any\n messages received will still have the expected representation.  Some\n formulations of session types guarantee that a session, once initiated,\n will run to completion, but this seems unrealistic for real-world\n programs.  Handling exceptions from within a session remains an open\n problem.\n\u003c/p\u003e\u003cp\u003eparagraph{Alternation.}\n\u003c/p\u003e\u003cp\u003eThe session actions |sel1|, |sel2|, and |offer| implement alternation.\n Action |sel1| selects the left side of an ``internal choice'',\n thereby replacing a session |r :+: s| with the session |r|; |sel2|\n selects the right side.  On the other side of the channel, |offer| combines a\n |Session| computation for |r| with a computation for |s| into a\n computation that can handle |r :&: s|.  Dynamically, |sel1| sends |True|\n over the channel, whereas |sel2| sends |False|, and |offer| dispatches\n on the boolean value received.\n\u003c/p\u003e",
          "module": "Control.Concurrent.SimpleSession.Implicit",
          "name": "sel1",
          "package": "simple-sessions",
          "signature": "Session (Cap e (r :+: s)) (Cap e r) ()",
          "source": "src/Control-Concurrent-SimpleSession-Implicit.html#sel1",
          "type": "function"
        },
        "index": {
          "description": "Session this does not jeopardize safety in the sense that any messages received will still have the expected representation Some formulations of session types guarantee that session once initiated will run to completion but this seems unrealistic for real-world programs Handling exceptions from within session remains an open problem paragraph Alternation The session actions sel1 sel2 and offer implement alternation Action sel1 selects the left side of an internal choice thereby replacing session with the session sel2 selects the right side On the other side of the channel offer combines Session computation for with computation for into computation that can handle Dynamically sel1 sends True over the channel whereas sel2 sends False and offer dispatches on the boolean value received",
          "hierarchy": "Control Concurrent SimpleSession Implicit",
          "module": "Control.Concurrent.SimpleSession.Implicit",
          "name": "sel1",
          "normalized": "Session(Cap a(b c))(Cap a b)()",
          "package": "simple-sessions",
          "signature": "Session(Cap e(r s))(Cap e r)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Implicit.html#v:sel1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.SimpleSession.Implicit",
          "name": "sel2",
          "package": "simple-sessions",
          "signature": "Session (Cap e (r :+: s)) (Cap e s) ()",
          "source": "src/Control-Concurrent-SimpleSession-Implicit.html#sel2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent SimpleSession Implicit",
          "module": "Control.Concurrent.SimpleSession.Implicit",
          "name": "sel2",
          "normalized": "Session(Cap a(b c))(Cap a c)()",
          "package": "simple-sessions",
          "signature": "Session(Cap e(r s))(Cap e s)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Implicit.html#v:sel2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.SimpleSession.Implicit",
          "name": "send",
          "package": "simple-sessions",
          "signature": "a -\u003e Session (Cap e (a :!: r)) (Cap e r) ()",
          "source": "src/Control-Concurrent-SimpleSession-Implicit.html#send",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent SimpleSession Implicit",
          "module": "Control.Concurrent.SimpleSession.Implicit",
          "name": "send",
          "normalized": "a-\u003eSession(Cap b(a c))(Cap b c)()",
          "package": "simple-sessions",
          "signature": "a-\u003eSession(Cap e(a r))(Cap e r)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Implicit.html#v:send"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.SimpleSession.Implicit",
          "name": "suc",
          "package": "simple-sessions",
          "signature": "Session (Cap (r, e) (Var (S v))) (Cap e (Var v)) ()",
          "source": "src/Control-Concurrent-SimpleSession-Implicit.html#suc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent SimpleSession Implicit",
          "module": "Control.Concurrent.SimpleSession.Implicit",
          "name": "suc",
          "normalized": "Session(Cap(a,b)(Var(S c)))(Cap b(Var c))()",
          "package": "simple-sessions",
          "signature": "Session(Cap(r,e)(Var(S v)))(Cap e(Var v))()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Implicit.html#v:suc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRec|, representing an environment that closes over |r|.  Upon\n encountering a variable occurence |Var |$n$, where $n$ is a Peano\n numeral, we restore the\n $n$th session type from the stack and return the stack to its former\n state, using $n$ expressed with |zero| and |suc|:\n\u003c/p\u003e",
          "module": "Control.Concurrent.SimpleSession.Implicit",
          "name": "zero",
          "package": "simple-sessions",
          "signature": "Session (Cap (r, e) (Var Z)) (Cap (r, e) r) ()",
          "source": "src/Control-Concurrent-SimpleSession-Implicit.html#zero",
          "type": "function"
        },
        "index": {
          "description": "Rec representing an environment that closes over Upon encountering variable occurence Var where is Peano numeral we restore the th session type from the stack and return the stack to its former state using expressed with zero and suc",
          "hierarchy": "Control Concurrent SimpleSession Implicit",
          "module": "Control.Concurrent.SimpleSession.Implicit",
          "name": "zero",
          "normalized": "Session(Cap(a,b)(Var Z))(Cap(a,b)a)()",
          "package": "simple-sessions",
          "signature": "Session(Cap(r,e)(Var Z))(Cap(r,e)r)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Implicit.html#v:zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.SimpleSession.Positional",
          "name": "Positional",
          "package": "simple-sessions",
          "source": "src/Control-Concurrent-SimpleSession-Positional.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Concurrent SimpleSession Positional",
          "module": "Control.Concurrent.SimpleSession.Positional",
          "name": "Positional",
          "package": "simple-sessions",
          "partial": "Positional",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Positional.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.SimpleSession.Positional",
          "name": "Cap",
          "package": "simple-sessions",
          "source": "src/Control-Concurrent-SimpleSession-Positional.html#Cap",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Concurrent SimpleSession Positional",
          "module": "Control.Concurrent.SimpleSession.Positional",
          "name": "Cap",
          "package": "simple-sessions",
          "partial": "Cap",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Positional.html#t:Cap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.SimpleSession.Positional",
          "name": "Channel",
          "package": "simple-sessions",
          "source": "src/Control-Concurrent-SimpleSession-Positional.html#Channel",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Concurrent SimpleSession Positional",
          "module": "Control.Concurrent.SimpleSession.Positional",
          "name": "Channel",
          "package": "simple-sessions",
          "partial": "Channel",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Positional.html#t:Channel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.SimpleSession.Positional",
          "name": "Rendezvous",
          "package": "simple-sessions",
          "source": "src/Control-Concurrent-SimpleSession-Positional.html#Rendezvous",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Concurrent SimpleSession Positional",
          "module": "Control.Concurrent.SimpleSession.Positional",
          "name": "Rendezvous",
          "package": "simple-sessions",
          "partial": "Rendezvous",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Positional.html#t:Rendezvous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.SimpleSession.Positional",
          "name": "Session",
          "package": "simple-sessions",
          "source": "src/Control-Concurrent-SimpleSession-Positional.html#Session",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Concurrent SimpleSession Positional",
          "module": "Control.Concurrent.SimpleSession.Positional",
          "name": "Session",
          "package": "simple-sessions",
          "partial": "Session",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Positional.html#t:Session"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.SimpleSession.Positional",
          "name": "accept",
          "package": "simple-sessions",
          "signature": "Rendezvous r -\u003e (forall t.  Channel t -\u003e Session (Cap t () r, x) y a) -\u003e Session x y a",
          "source": "src/Control-Concurrent-SimpleSession-Positional.html#accept",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent SimpleSession Positional",
          "module": "Control.Concurrent.SimpleSession.Positional",
          "name": "accept",
          "normalized": "Rendezvous a-\u003e(b c Channel d-\u003eSession(Cap d()a,e)f g)-\u003eSession e f g",
          "package": "simple-sessions",
          "signature": "Rendezvous r-\u003e(forall t. Channel t-\u003eSession(Cap t()r,x)y a)-\u003eSession x y a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Positional.html#v:accept"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.SimpleSession.Positional",
          "name": "close",
          "package": "simple-sessions",
          "signature": "Channel t -\u003e Session (Cap t e Eps, x) x ()",
          "source": "src/Control-Concurrent-SimpleSession-Positional.html#close",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent SimpleSession Positional",
          "module": "Control.Concurrent.SimpleSession.Positional",
          "name": "close",
          "normalized": "Channel a-\u003eSession(Cap a b Eps,c)c()",
          "package": "simple-sessions",
          "signature": "Channel t-\u003eSession(Cap t e Eps,x)x()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Positional.html#v:close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.SimpleSession.Positional",
          "name": "dig",
          "package": "simple-sessions",
          "signature": "Session x x' a -\u003e Session (r, x) (r, x') a",
          "source": "src/Control-Concurrent-SimpleSession-Positional.html#dig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent SimpleSession Positional",
          "module": "Control.Concurrent.SimpleSession.Positional",
          "name": "dig",
          "normalized": "Session a b c-\u003eSession(d,a)(d,b)c",
          "package": "simple-sessions",
          "signature": "Session x x' a-\u003eSession(r,x)(r,x')a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Positional.html#v:dig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.SimpleSession.Positional",
          "name": "enter",
          "package": "simple-sessions",
          "signature": "Channel t -\u003e Session (Cap t e (Rec r), x) (Cap t (r, e) r, x) ()",
          "source": "src/Control-Concurrent-SimpleSession-Positional.html#enter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent SimpleSession Positional",
          "module": "Control.Concurrent.SimpleSession.Positional",
          "name": "enter",
          "normalized": "Channel a-\u003eSession(Cap a b(Rec c),d)(Cap a(c,b)c,d)()",
          "package": "simple-sessions",
          "signature": "Channel t-\u003eSession(Cap t e(Rec r),x)(Cap t(r,e)r,x)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Positional.html#v:enter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.SimpleSession.Positional",
          "name": "forkSession",
          "package": "simple-sessions",
          "signature": "Session x () () -\u003e Session x () ()",
          "source": "src/Control-Concurrent-SimpleSession-Positional.html#forkSession",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent SimpleSession Positional",
          "module": "Control.Concurrent.SimpleSession.Positional",
          "name": "forkSession",
          "normalized": "Session a()()-\u003eSession a()()",
          "package": "simple-sessions",
          "partial": "Session",
          "signature": "Session x()()-\u003eSession x()()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Positional.html#v:forkSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.SimpleSession.Positional",
          "name": "io",
          "package": "simple-sessions",
          "signature": "IO a -\u003e Session s s a",
          "source": "src/Control-Concurrent-SimpleSession-Positional.html#io",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent SimpleSession Positional",
          "module": "Control.Concurrent.SimpleSession.Positional",
          "name": "io",
          "normalized": "IO a-\u003eSession b b a",
          "package": "simple-sessions",
          "signature": "IO a-\u003eSession s s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Positional.html#v:io"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.SimpleSession.Positional",
          "name": "newRendezvous",
          "package": "simple-sessions",
          "signature": "IO (Rendezvous r)",
          "source": "src/Control-Concurrent-SimpleSession-Positional.html#newRendezvous",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent SimpleSession Positional",
          "module": "Control.Concurrent.SimpleSession.Positional",
          "name": "newRendezvous",
          "package": "simple-sessions",
          "partial": "Rendezvous",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Positional.html#v:newRendezvous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.SimpleSession.Positional",
          "name": "offer",
          "package": "simple-sessions",
          "signature": "Channel t -\u003e Session (Cap t e r, x) u a -\u003e Session (Cap t e s, x) u a -\u003e Session (Cap t e (r :&: s), x) u a",
          "source": "src/Control-Concurrent-SimpleSession-Positional.html#offer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent SimpleSession Positional",
          "module": "Control.Concurrent.SimpleSession.Positional",
          "name": "offer",
          "normalized": "Channel a-\u003eSession(Cap a b c,d)e f-\u003eSession(Cap a b g,d)e f-\u003eSession(Cap a b(c g),d)e f",
          "package": "simple-sessions",
          "signature": "Channel t-\u003eSession(Cap t e r,x)u a-\u003eSession(Cap t e s,x)u a-\u003eSession(Cap t e(r s),x)u a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Positional.html#v:offer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.SimpleSession.Positional",
          "name": "recv",
          "package": "simple-sessions",
          "signature": "Channel t -\u003e Session (Cap t e (a :?: r), x) (Cap t e r, x) a",
          "source": "src/Control-Concurrent-SimpleSession-Positional.html#recv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent SimpleSession Positional",
          "module": "Control.Concurrent.SimpleSession.Positional",
          "name": "recv",
          "normalized": "Channel a-\u003eSession(Cap a b(c d),e)(Cap a b d,e)c",
          "package": "simple-sessions",
          "signature": "Channel t-\u003eSession(Cap t e(a r),x)(Cap t e r,x)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Positional.html#v:recv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.SimpleSession.Positional",
          "name": "recv_cap",
          "package": "simple-sessions",
          "signature": "Channel t -\u003e Session (Cap t e (Cap t' e' r' :?: r), x) (Cap t e r, (Cap t' e' r', x)) ()",
          "source": "src/Control-Concurrent-SimpleSession-Positional.html#recv_cap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent SimpleSession Positional",
          "module": "Control.Concurrent.SimpleSession.Positional",
          "name": "recv_cap",
          "normalized": "Channel a-\u003eSession(Cap a b(Cap c d e f),g)(Cap a b f,(Cap c d e,g))()",
          "package": "simple-sessions",
          "signature": "Channel t-\u003eSession(Cap t e(Cap t' e' r' r),x)(Cap t e r,(Cap t' e' r',x))()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Positional.html#v:recv_cap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.SimpleSession.Positional",
          "name": "request",
          "package": "simple-sessions",
          "signature": "Rendezvous r -\u003e (forall t.  Channel t -\u003e Session (Cap t () r', x) y a) -\u003e Session x y a",
          "source": "src/Control-Concurrent-SimpleSession-Positional.html#request",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent SimpleSession Positional",
          "module": "Control.Concurrent.SimpleSession.Positional",
          "name": "request",
          "normalized": "Rendezvous a-\u003e(b c Channel d-\u003eSession(Cap d()e,f)g h)-\u003eSession f g h",
          "package": "simple-sessions",
          "signature": "Rendezvous r-\u003e(forall t. Channel t-\u003eSession(Cap t()r',x)y a)-\u003eSession x y a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Positional.html#v:request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.SimpleSession.Positional",
          "name": "runSession",
          "package": "simple-sessions",
          "signature": "Session () () a -\u003e IO a",
          "source": "src/Control-Concurrent-SimpleSession-Positional.html#runSession",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent SimpleSession Positional",
          "module": "Control.Concurrent.SimpleSession.Positional",
          "name": "runSession",
          "normalized": "Session()()a-\u003eIO a",
          "package": "simple-sessions",
          "partial": "Session",
          "signature": "Session()()a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Positional.html#v:runSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.SimpleSession.Positional",
          "name": "sel1",
          "package": "simple-sessions",
          "signature": "Channel t -\u003e Session (Cap t e (r :+: s), x) (Cap t e r, x) ()",
          "source": "src/Control-Concurrent-SimpleSession-Positional.html#sel1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent SimpleSession Positional",
          "module": "Control.Concurrent.SimpleSession.Positional",
          "name": "sel1",
          "normalized": "Channel a-\u003eSession(Cap a b(c d),e)(Cap a b c,e)()",
          "package": "simple-sessions",
          "signature": "Channel t-\u003eSession(Cap t e(r s),x)(Cap t e r,x)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Positional.html#v:sel1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.SimpleSession.Positional",
          "name": "sel2",
          "package": "simple-sessions",
          "signature": "Channel t -\u003e Session (Cap t e (r :+: s), x) (Cap t e s, x) ()",
          "source": "src/Control-Concurrent-SimpleSession-Positional.html#sel2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent SimpleSession Positional",
          "module": "Control.Concurrent.SimpleSession.Positional",
          "name": "sel2",
          "normalized": "Channel a-\u003eSession(Cap a b(c d),e)(Cap a b d,e)()",
          "package": "simple-sessions",
          "signature": "Channel t-\u003eSession(Cap t e(r s),x)(Cap t e s,x)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Positional.html#v:sel2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.SimpleSession.Positional",
          "name": "send",
          "package": "simple-sessions",
          "signature": "Channel t -\u003e a -\u003e Session (Cap t e (a :!: r), x) (Cap t e r, x) ()",
          "source": "src/Control-Concurrent-SimpleSession-Positional.html#send",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent SimpleSession Positional",
          "module": "Control.Concurrent.SimpleSession.Positional",
          "name": "send",
          "normalized": "Channel a-\u003eb-\u003eSession(Cap a c(b d),e)(Cap a c d,e)()",
          "package": "simple-sessions",
          "signature": "Channel t-\u003ea-\u003eSession(Cap t e(a r),x)(Cap t e r,x)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Positional.html#v:send"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.SimpleSession.Positional",
          "name": "send_cap",
          "package": "simple-sessions",
          "signature": "Channel t -\u003e Session (Cap t e (Cap t' e' r' :!: r), (Cap t' e' r', x)) (Cap t e r, x) ()",
          "source": "src/Control-Concurrent-SimpleSession-Positional.html#send_cap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent SimpleSession Positional",
          "module": "Control.Concurrent.SimpleSession.Positional",
          "name": "send_cap",
          "normalized": "Channel a-\u003eSession(Cap a b(Cap c d e f),(Cap c d e,g))(Cap a b f,g)()",
          "package": "simple-sessions",
          "signature": "Channel t-\u003eSession(Cap t e(Cap t' e' r' r),(Cap t' e' r',x))(Cap t e r,x)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Positional.html#v:send_cap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.SimpleSession.Positional",
          "name": "suc",
          "package": "simple-sessions",
          "signature": "Session (Cap t (r, e) (Var (S v)), x) (Cap t e (Var v), x) ()",
          "source": "src/Control-Concurrent-SimpleSession-Positional.html#suc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent SimpleSession Positional",
          "module": "Control.Concurrent.SimpleSession.Positional",
          "name": "suc",
          "normalized": "Session(Cap a(b,c)(Var(S d)),e)(Cap a c(Var d),e)()",
          "package": "simple-sessions",
          "signature": "Session(Cap t(r,e)(Var(S v)),x)(Cap t e(Var v),x)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Positional.html#v:suc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eswap| may be combined to exchange any two adjacent capabilities.\n\u003c/p\u003e",
          "module": "Control.Concurrent.SimpleSession.Positional",
          "name": "swap",
          "package": "simple-sessions",
          "signature": "Session (r, (s, x)) (s, (r, x)) ()",
          "source": "src/Control-Concurrent-SimpleSession-Positional.html#swap",
          "type": "function"
        },
        "index": {
          "description": "swap may be combined to exchange any two adjacent capabilities",
          "hierarchy": "Control Concurrent SimpleSession Positional",
          "module": "Control.Concurrent.SimpleSession.Positional",
          "name": "swap",
          "normalized": "Session(a,(b,c))(b,(a,c))()",
          "package": "simple-sessions",
          "signature": "Session(r,(s,x))(s,(r,x))()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Positional.html#v:swap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.SimpleSession.Positional",
          "name": "zero",
          "package": "simple-sessions",
          "signature": "Channel t -\u003e Session (Cap t (r, e) (Var Z), x) (Cap t (r, e) r, x) ()",
          "source": "src/Control-Concurrent-SimpleSession-Positional.html#zero",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent SimpleSession Positional",
          "module": "Control.Concurrent.SimpleSession.Positional",
          "name": "zero",
          "normalized": "Channel a-\u003eSession(Cap a(b,c)(Var Z),d)(Cap a(b,c)b,d)()",
          "package": "simple-sessions",
          "signature": "Channel t-\u003eSession(Cap t(r,e)(Var Z),x)(Cap t(r,e)r,x)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-Positional.html#v:zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.SimpleSession.SessionTypes",
          "name": "SessionTypes",
          "package": "simple-sessions",
          "source": "src/Control-Concurrent-SimpleSession-SessionTypes.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Concurrent SimpleSession SessionTypes",
          "module": "Control.Concurrent.SimpleSession.SessionTypes",
          "name": "SessionTypes",
          "package": "simple-sessions",
          "partial": "Session Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-SessionTypes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.SimpleSession.SessionTypes",
          "name": ":!:",
          "package": "simple-sessions",
          "source": "src/Control-Concurrent-SimpleSession-SessionTypes.html#%3A%21%3A",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Concurrent SimpleSession SessionTypes",
          "module": "Control.Concurrent.SimpleSession.SessionTypes",
          "name": ":!:",
          "package": "simple-sessions",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-SessionTypes.html#t::-33-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.SimpleSession.SessionTypes",
          "name": ":&:",
          "package": "simple-sessions",
          "source": "src/Control-Concurrent-SimpleSession-SessionTypes.html#%3A%26%3A",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Concurrent SimpleSession SessionTypes",
          "module": "Control.Concurrent.SimpleSession.SessionTypes",
          "name": ":&:",
          "package": "simple-sessions",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-SessionTypes.html#t::-38-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.SimpleSession.SessionTypes",
          "name": ":+:",
          "package": "simple-sessions",
          "source": "src/Control-Concurrent-SimpleSession-SessionTypes.html#%3A%2B%3A",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Concurrent SimpleSession SessionTypes",
          "module": "Control.Concurrent.SimpleSession.SessionTypes",
          "name": ":+:",
          "package": "simple-sessions",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-SessionTypes.html#t::-43-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.SimpleSession.SessionTypes",
          "name": ":?:",
          "package": "simple-sessions",
          "source": "src/Control-Concurrent-SimpleSession-SessionTypes.html#%3A%3F%3A",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Concurrent SimpleSession SessionTypes",
          "module": "Control.Concurrent.SimpleSession.SessionTypes",
          "name": ":?:",
          "package": "simple-sessions",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-SessionTypes.html#t::-63-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(:?:)| are declared right associative and with higher precedence than\n |(:+:)| and |(:&:)|.}\n\u003c/p\u003e\u003cp\u003eIf the process on one end of a channel speaks a particular protocol,\n its correspondant at the other end of the channel must be prepared to\n understand it.  For example, if one process speaks |Int :!: Bool :?: Eps|,\n the other process must implement the dual protocol\n |Int :?: Bool :!: Eps|.  We encode the duality relation using a type\n class with multiple parameters and functional dependencies\n citep{Jones1997Type,Jones2000Type}.\n\u003c/p\u003e",
          "module": "Control.Concurrent.SimpleSession.SessionTypes",
          "name": "Dual",
          "package": "simple-sessions",
          "source": "src/Control-Concurrent-SimpleSession-SessionTypes.html#Dual",
          "type": "class"
        },
        "index": {
          "description": "are declared right associative and with higher precedence than and If the process on one end of channel speaks particular protocol its correspondant at the other end of the channel must be prepared to understand it For example if one process speaks Int Bool Eps the other process must implement the dual protocol Int Bool Eps We encode the duality relation using type class with multiple parameters and functional dependencies citep Jones1997Type Jones2000Type",
          "hierarchy": "Control Concurrent SimpleSession SessionTypes",
          "module": "Control.Concurrent.SimpleSession.SessionTypes",
          "name": "Dual",
          "package": "simple-sessions",
          "partial": "Dual",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-SessionTypes.html#t:Dual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.SimpleSession.SessionTypes",
          "name": "Eps",
          "package": "simple-sessions",
          "source": "src/Control-Concurrent-SimpleSession-SessionTypes.html#Eps",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Concurrent SimpleSession SessionTypes",
          "module": "Control.Concurrent.SimpleSession.SessionTypes",
          "name": "Eps",
          "package": "simple-sessions",
          "partial": "Eps",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-SessionTypes.html#t:Eps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.SimpleSession.SessionTypes",
          "name": "Rec",
          "package": "simple-sessions",
          "source": "src/Control-Concurrent-SimpleSession-SessionTypes.html#Rec",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Concurrent SimpleSession SessionTypes",
          "module": "Control.Concurrent.SimpleSession.SessionTypes",
          "name": "Rec",
          "package": "simple-sessions",
          "partial": "Rec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-SessionTypes.html#t:Rec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.SimpleSession.SessionTypes",
          "name": "S",
          "package": "simple-sessions",
          "source": "src/Control-Concurrent-SimpleSession-SessionTypes.html#S",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Concurrent SimpleSession SessionTypes",
          "module": "Control.Concurrent.SimpleSession.SessionTypes",
          "name": "S",
          "package": "simple-sessions",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-SessionTypes.html#t:S"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.SimpleSession.SessionTypes",
          "name": "Var",
          "package": "simple-sessions",
          "source": "src/Control-Concurrent-SimpleSession-SessionTypes.html#Var",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Concurrent SimpleSession SessionTypes",
          "module": "Control.Concurrent.SimpleSession.SessionTypes",
          "name": "Var",
          "package": "simple-sessions",
          "partial": "Var",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-SessionTypes.html#t:Var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.SimpleSession.SessionTypes",
          "name": "Z",
          "package": "simple-sessions",
          "source": "src/Control-Concurrent-SimpleSession-SessionTypes.html#Z",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Concurrent SimpleSession SessionTypes",
          "module": "Control.Concurrent.SimpleSession.SessionTypes",
          "name": "Z",
          "package": "simple-sessions",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-sessions/docs/Control-Concurrent-SimpleSession-SessionTypes.html#t:Z"
      }
    }
  ]
]