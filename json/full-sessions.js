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
        "word": "full-sessions"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePi-calculus style communication and concurrency primitives which come with session types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.FullSession",
          "name": "FullSession",
          "package": "full-sessions",
          "source": "src/Control-Concurrent-FullSession.html",
          "type": "module"
        },
        "index": {
          "description": "Pi-calculus style communication and concurrency primitives which come with session types",
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "FullSession",
          "package": "full-sessions",
          "partial": "Full Session",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType-level snoc (reversed version of cons \u003ccode\u003e(:)\u003c/code\u003e). \u003ccode\u003ess :\u003e s\u003c/code\u003e denotes a list \u003ccode\u003ess\u003c/code\u003e with \u003ccode\u003es\u003c/code\u003e on its end.  (FIXME:English)\n\u003c/p\u003e",
          "module": "Control.Concurrent.FullSession",
          "name": ":\u003e",
          "package": "full-sessions",
          "source": "src/FullSession-Base.html#%3A%3E",
          "type": "data"
        },
        "index": {
          "description": "Type-level snoc reversed version of cons ss denotes list ss with on its end FIXME English",
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": ":\u003e",
          "package": "full-sessions",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t::-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etype-level \u003ccode\u003e\u003ca\u003e&&\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concurrent.FullSession",
          "name": "And",
          "package": "full-sessions",
          "source": "src/FullSession-Base.html#And",
          "type": "class"
        },
        "index": {
          "description": "type-level",
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "And",
          "package": "full-sessions",
          "partial": "And",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:And"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "AppendEnd",
          "package": "full-sessions",
          "source": "src/FullSession-Ended.html#AppendEnd",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "AppendEnd",
          "package": "full-sessions",
          "partial": "Append End",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:AppendEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "AppendEnd'",
          "package": "full-sessions",
          "source": "src/FullSession-Ended.html#AppendEnd%27",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "AppendEnd'",
          "package": "full-sessions",
          "partial": "Append End'",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:AppendEnd-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eBot\u003c/a\u003e\u003c/code\u003e is the type for a channel whose both endpoints are already engaged by two processes, so that no further processes can own that channel. \n   For example,  in \u003ccode\u003eforkIO (send k e) \u003e\u003e\u003e recv k\u003c/code\u003e, \u003ccode\u003ek\u003c/code\u003e has type \u003ccode\u003e\u003ca\u003eBot\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Control.Concurrent.FullSession",
          "name": "Bot",
          "package": "full-sessions",
          "source": "src/FullSession-Types.html#Bot",
          "type": "data"
        },
        "index": {
          "description": "Bot is the type for channel whose both endpoints are already engaged by two processes so that no further processes can own that channel For example in forkIO send recv has type Bot",
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "Bot",
          "package": "full-sessions",
          "partial": "Bot",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:Bot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eCatch\u003c/a\u003e\u003c/code\u003e u1 u2\u003c/code\u003e is the input of a channel with session type \u003ccode\u003eu1\u003c/code\u003e followed by a behavior of type \u003ccode\u003eu2\u003c/code\u003e. \n Use of \u003ccode\u003e\u003ccode\u003erecvS\u003c/code\u003e\u003c/code\u003e on a channel changes its session type from \u003ccode\u003e\u003ccode\u003e\u003ca\u003eCatch\u003c/a\u003e\u003c/code\u003e u1 u2\u003c/code\u003e into \u003ccode\u003eu2\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Control.Concurrent.FullSession",
          "name": "Catch",
          "package": "full-sessions",
          "source": "src/FullSession-Types.html#Catch",
          "type": "data"
        },
        "index": {
          "description": "Catch u1 u2 is the input of channel with session type u1 followed by behavior of type u2 Use of recvS on channel changes its session type from Catch u1 u2 into u2",
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "Catch",
          "package": "full-sessions",
          "partial": "Catch",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:Catch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe channel type. The type-level number \u003ccode\u003en\u003c/code\u003e points to the session-type in type environments. For example, in the type\n  \u003ccode\u003eSession t (Nil:\u003eSend Int End) (Nil:\u003eEnd) ()\u003c/code\u003e, \n the usage of the channel \u003ccode\u003ec :: Channel t Z\u003c/code\u003e is \u003ccode\u003eSend Int End\u003c/code\u003e in pretype and \u003ccode\u003eEnd\u003c/code\u003e in posttype.\n\u003c/p\u003e",
          "module": "Control.Concurrent.FullSession",
          "name": "Channel",
          "package": "full-sessions",
          "source": "src/FullSession-Types.html#Channel",
          "type": "data"
        },
        "index": {
          "description": "The channel type The type-level number points to the session-type in type environments For example in the type Session Nil Send Int End Nil End the usage of the channel Channel is Send Int End in pretype and End in posttype",
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "Channel",
          "package": "full-sessions",
          "partial": "Channel",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:Channel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eClose\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e denotes a session that can do nothing but closing it.\n\u003c/p\u003e",
          "module": "Control.Concurrent.FullSession",
          "name": "Close",
          "package": "full-sessions",
          "source": "src/FullSession-Types.html#Close",
          "type": "data"
        },
        "index": {
          "description": "Close denotes session that can do nothing but closing it",
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "Close",
          "package": "full-sessions",
          "partial": "Close",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:Close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esesion type algebra\n\u003c/p\u003e",
          "module": "Control.Concurrent.FullSession",
          "name": "Comp",
          "package": "full-sessions",
          "source": "src/FullSession-TypeAlgebra.html#Comp",
          "type": "class"
        },
        "index": {
          "description": "sesion type algebra",
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "Comp",
          "package": "full-sessions",
          "partial": "Comp",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:Comp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "Diff",
          "package": "full-sessions",
          "source": "src/FullSession-Types.html#Diff",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "Diff",
          "package": "full-sessions",
          "partial": "Diff",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:Diff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "Diff'",
          "package": "full-sessions",
          "source": "src/FullSession-Types.html#Diff%27",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "Diff'",
          "package": "full-sessions",
          "partial": "Diff'",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:Diff-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eduality\n\u003c/p\u003e",
          "module": "Control.Concurrent.FullSession",
          "name": "Dual",
          "package": "full-sessions",
          "source": "src/FullSession-TypeAlgebra.html#Dual",
          "type": "class"
        },
        "index": {
          "description": "duality",
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "Dual",
          "package": "full-sessions",
          "partial": "Dual",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:Dual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eEnd\u003c/a\u003e\u003c/code\u003e denotes a terminated session. Further communication along a channel with type \u003ccode\u003e\u003ca\u003eEnd\u003c/a\u003e\u003c/code\u003e cannot take place.\n\u003c/p\u003e",
          "module": "Control.Concurrent.FullSession",
          "name": "End",
          "package": "full-sessions",
          "source": "src/FullSession-Types.html#End",
          "type": "data"
        },
        "index": {
          "description": "End denotes terminated session Further communication along channel with type End cannot take place",
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "End",
          "package": "full-sessions",
          "partial": "End",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:End"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eEnded\u003c/a\u003e\u003c/code\u003e n ss\u003c/code\u003e denotes that the session-type environment \u003ccode\u003ess\u003c/code\u003e (the length of it is \u003ccode\u003en\u003c/code\u003e) is Ended. The all elements in an Ended type environments are \u003ccode\u003e\u003ccode\u003e\u003ca\u003eEnd\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Control.Concurrent.FullSession",
          "name": "Ended",
          "package": "full-sessions",
          "source": "src/FullSession-Ended.html#Ended",
          "type": "class"
        },
        "index": {
          "description": "Ended ss denotes that the session-type environment ss the length of it is is Ended The all elements in an Ended type environments are End",
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "Ended",
          "package": "full-sessions",
          "partial": "Ended",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:Ended"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "EndedWithout",
          "package": "full-sessions",
          "source": "src/FullSession-Ended.html#EndedWithout",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "EndedWithout",
          "package": "full-sessions",
          "partial": "Ended Without",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:EndedWithout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "EndedWithout'",
          "package": "full-sessions",
          "source": "src/FullSession-Ended.html#EndedWithout%27",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "EndedWithout'",
          "package": "full-sessions",
          "partial": "Ended Without'",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:EndedWithout-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "EndedWithout2",
          "package": "full-sessions",
          "source": "src/FullSession-Ended.html#EndedWithout2",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "EndedWithout2",
          "package": "full-sessions",
          "partial": "Ended Without",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:EndedWithout2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "EndedWithout2'",
          "package": "full-sessions",
          "source": "src/FullSession-Ended.html#EndedWithout2%27",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "EndedWithout2'",
          "package": "full-sessions",
          "partial": "Ended Without",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:EndedWithout2-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquality on type-level natural numbers.  \u003ccode\u003eb ~ \u003ccode\u003e\u003ca\u003eT\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e if \u003ccode\u003ex == y\u003c/code\u003e. Otherwise \u003ccode\u003eb ~ F\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.FullSession",
          "name": "EqNat",
          "package": "full-sessions",
          "source": "src/FullSession-Base.html#EqNat",
          "type": "class"
        },
        "index": {
          "description": "Equality on type-level natural numbers if Otherwise",
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "EqNat",
          "package": "full-sessions",
          "partial": "Eq Nat",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:EqNat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType level \u003ccode\u003eFalse\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.FullSession",
          "name": "F",
          "package": "full-sessions",
          "source": "src/FullSession-Base.html#F",
          "type": "data"
        },
        "index": {
          "description": "Type level False",
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "F",
          "package": "full-sessions",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:F"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eIsEnded\u003c/a\u003e\u003c/code\u003e ss b\u003c/code\u003e denotes that b ~ T if \u003ccode\u003ess\u003c/code\u003e is Ended, otherwise \u003ccode\u003eb ~ F\u003c/code\u003e.  In other words, \u003ccode\u003eb ~ T\u003c/code\u003e if the all elements of ss are End\n\u003c/p\u003e",
          "module": "Control.Concurrent.FullSession",
          "name": "IsEnded",
          "package": "full-sessions",
          "source": "src/FullSession-Ended.html#IsEnded",
          "type": "class"
        },
        "index": {
          "description": "IsEnded ss denotes that if ss is Ended otherwise In other words if the all elements of ss are End",
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "IsEnded",
          "package": "full-sessions",
          "partial": "Is Ended",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:IsEnded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "IsEndedST",
          "package": "full-sessions",
          "source": "src/FullSession-Ended.html#IsEndedST",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "IsEndedST",
          "package": "full-sessions",
          "partial": "Is Ended ST",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:IsEndedST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "Message",
          "package": "full-sessions",
          "source": "src/FullSession-NwSession.html#Message",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "Message",
          "package": "full-sessions",
          "partial": "Message",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:Message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class which covers type-level natural numbers.\n\u003c/p\u003e",
          "module": "Control.Concurrent.FullSession",
          "name": "Nat",
          "package": "full-sessions",
          "source": "src/FullSession-Base.html#Nat",
          "type": "class"
        },
        "index": {
          "description": "The class which covers type-level natural numbers",
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "Nat",
          "package": "full-sessions",
          "partial": "Nat",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:Nat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType-level empty list (\u003ccode\u003e[]\u003c/code\u003e). \n\u003c/p\u003e",
          "module": "Control.Concurrent.FullSession",
          "name": "Nil",
          "package": "full-sessions",
          "source": "src/FullSession-Base.html#Nil",
          "type": "data"
        },
        "index": {
          "description": "Type-level empty list",
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "Nil",
          "package": "full-sessions",
          "partial": "Nil",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:Nil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "NwDual",
          "package": "full-sessions",
          "source": "src/FullSession-NwSession.html#NwDual",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "NwDual",
          "package": "full-sessions",
          "partial": "Nw Dual",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:NwDual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "NwReceiveOnly",
          "package": "full-sessions",
          "source": "src/FullSession-NwSession.html#NwReceiveOnly",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "NwReceiveOnly",
          "package": "full-sessions",
          "partial": "Nw Receive Only",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:NwReceiveOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "NwReceiver",
          "package": "full-sessions",
          "source": "src/FullSession-NwSession.html#NwReceiver",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "NwReceiver",
          "package": "full-sessions",
          "partial": "Nw Receiver",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:NwReceiver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "NwSendOnly",
          "package": "full-sessions",
          "source": "src/FullSession-NwSession.html#NwSendOnly",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "NwSendOnly",
          "package": "full-sessions",
          "partial": "Nw Send Only",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:NwSendOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "NwSender",
          "package": "full-sessions",
          "source": "src/FullSession-NwSession.html#NwSender",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "NwSender",
          "package": "full-sessions",
          "partial": "Nw Sender",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:NwSender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "NwService",
          "package": "full-sessions",
          "source": "src/FullSession-NwSession.html#NwService",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "NwService",
          "package": "full-sessions",
          "partial": "Nw Service",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:NwService"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "NwService2",
          "package": "full-sessions",
          "source": "src/FullSession-NwSession.html#NwService2",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "NwService2",
          "package": "full-sessions",
          "partial": "Nw Service",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:NwService2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "NwSession",
          "package": "full-sessions",
          "source": "src/FullSession-NwSession.html#NwSession",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "NwSession",
          "package": "full-sessions",
          "partial": "Nw Session",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:NwSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eOffer\u003c/a\u003e\u003c/code\u003e u1 u2\u003c/code\u003e denotes a behavior like either \u003ccode\u003eu1\u003c/code\u003e or \u003ccode\u003eu2\u003c/code\u003e according to the incoming label.\n\u003c/p\u003e",
          "module": "Control.Concurrent.FullSession",
          "name": "Offer",
          "package": "full-sessions",
          "source": "src/FullSession-Types.html#Offer",
          "type": "data"
        },
        "index": {
          "description": "Offer u1 u2 denotes behavior like either u1 or u2 according to the incoming label",
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "Offer",
          "package": "full-sessions",
          "partial": "Offer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:Offer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "OfferN",
          "package": "full-sessions",
          "source": "src/FullSession-Types.html#OfferN",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "OfferN",
          "package": "full-sessions",
          "partial": "Offer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:OfferN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType level predecessor (only for internal use). \u003ccode\u003e\u003ccode\u003e\u003ca\u003eP\u003c/a\u003e\u003c/code\u003e n\u003c/code\u003e denotes \u003ccode\u003e(n-1)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.FullSession",
          "name": "P",
          "package": "full-sessions",
          "source": "src/FullSession-Base.html#P",
          "type": "data"
        },
        "index": {
          "description": "Type level predecessor only for internal use denotes n-1",
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "P",
          "package": "full-sessions",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:P"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epointwise extension of \u003ccode\u003e\u003ca\u003eComp\u003c/a\u003e\u003c/code\u003e -- FIXME: method\n\u003c/p\u003e",
          "module": "Control.Concurrent.FullSession",
          "name": "Par",
          "package": "full-sessions",
          "source": "src/FullSession-FullSession.html#Par",
          "type": "class"
        },
        "index": {
          "description": "pointwise extension of Comp FIXME method",
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "Par",
          "package": "full-sessions",
          "partial": "Par",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:Par"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe specialized case for \u003ccode\u003eended\u003c/code\u003e ss -- FIXME\n\u003c/p\u003e",
          "module": "Control.Concurrent.FullSession",
          "name": "Par'",
          "package": "full-sessions",
          "source": "src/FullSession-FullSession.html#Par%27",
          "type": "class"
        },
        "index": {
          "description": "the specialized case for ended ss FIXME",
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "Par'",
          "package": "full-sessions",
          "partial": "Par'",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:Par-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ePickup\u003c/a\u003e\u003c/code\u003e ss n s\u003c/code\u003e denotes that the \u003ccode\u003en\u003c/code\u003e-th element of the list \u003ccode\u003ess\u003c/code\u003e is \u003ccode\u003es\u003c/code\u003e. \n   This type class plays an important role in session-type inference.\n\u003c/p\u003e\u003cp\u003eFormally, \u003ccode\u003e\u003ccode\u003e\u003ca\u003ePickup\u003c/a\u003e\u003c/code\u003e ss n s\u003c/code\u003e if \u003ccode\u003es = pickup ss n\u003c/code\u003e where \u003ccode\u003epickup\u003c/code\u003e is:\n\u003c/p\u003e\u003cpre\u003e\n   pickup ss n = pickupR ss (len ss - (n+1))\n     where pickupR (ss:\u003es) Z     = s\n           pickupR (ss:\u003es) (S n) = pickupR ss n\n           len Nil     = 0\n           len (ss:\u003es) = (len ss) + 1\n\u003c/pre\u003e\u003cp\u003eFor example, \u003ccode\u003ePickup (End :\u003e Bot :\u003e Send Int End) Z t)\u003c/code\u003e is an instance of \u003ccode\u003ePickup\u003c/code\u003e, and \u003ccode\u003et\u003c/code\u003e is unified with \u003ccode\u003eBot\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that the list counts from left to right. \n   For example, The \u003ccode\u003e0\u003c/code\u003e-th element of the list \u003ccode\u003e((Nil :\u003e End) :\u003e Bot) :\u003e Send Int End\u003c/code\u003e is \u003ccode\u003eEnd\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eUsually the list is accessed from the right end. \n   The context \n\u003c/p\u003e\u003cpre\u003e\n     \u003ccode\u003e\u003ca\u003eSList\u003c/a\u003e\u003c/code\u003e ss (S n), \u003ccode\u003e\u003ca\u003ePickup\u003c/a\u003e\u003c/code\u003e (ss:\u003eBot:\u003eRecv Char End) n s\n\u003c/pre\u003e\u003cp\u003eis expanded into\n\u003c/p\u003e\u003cpre\u003e\n     \u003ccode\u003e\u003ca\u003eSList\u003c/a\u003e\u003c/code\u003e ss (S n), \u003ccode\u003e\u003ca\u003ePickupR\u003c/a\u003e\u003c/code\u003e (ss:\u003eBot:\u003eRecv Char End) (\u003ccode\u003e\u003ca\u003eSubT\u003c/a\u003e\u003c/code\u003e (S n) (S n)) s, \u003ccode\u003e\u003ca\u003eSub\u003c/a\u003e\u003c/code\u003e (S n) (S n)\n\u003c/pre\u003e\u003cp\u003esince \u003ccode\u003e\u003ccode\u003e\u003ca\u003eSubT\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eS\u003c/a\u003e\u003c/code\u003e n) (\u003ccode\u003e\u003ca\u003eS\u003c/a\u003e\u003c/code\u003e n) ~ Z\u003c/code\u003e,  it will be reduced to \n\u003c/p\u003e\u003cpre\u003e\n     \u003ccode\u003e\u003ca\u003ePickupR\u003c/a\u003e\u003c/code\u003e (ss:\u003eBot:\u003eRecv Char End) Z s\n\u003c/pre\u003e\u003cp\u003eand then \u003ccode\u003es\u003c/code\u003e is unified with \u003ccode\u003eRecv Char End\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.FullSession",
          "name": "Pickup",
          "package": "full-sessions",
          "source": "src/FullSession-Base.html#Pickup",
          "type": "class"
        },
        "index": {
          "description": "Pickup ss denotes that the th element of the list ss is This type class plays an important role in session-type inference Formally Pickup ss if pickup ss where pickup is pickup ss pickupR ss len ss where pickupR ss pickupR ss pickupR ss len Nil len ss len ss For example Pickup End Bot Send Int End is an instance of Pickup and is unified with Bot Note that the list counts from left to right For example The th element of the list Nil End Bot Send Int End is End Usually the list is accessed from the right end The context SList ss Pickup ss Bot Recv Char End is expanded into SList ss PickupR ss Bot Recv Char End SubT Sub since SubT it will be reduced to PickupR ss Bot Recv Char End and then is unified with Recv Char End",
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "Pickup",
          "package": "full-sessions",
          "partial": "Pickup",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:Pickup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe reversed version of \u003ccode\u003e\u003ca\u003ePickup\u003c/a\u003e\u003c/code\u003e which accesses lists in reversed order (counts from right to left).\n   I.e., \u003ccode\u003e\u003ccode\u003e\u003ca\u003ePickupR\u003c/a\u003e\u003c/code\u003e (End :\u003e Bot :\u003e Send Int End) Z (Send Int End)\u003c/code\u003e is an instance of \u003ccode\u003e\u003ca\u003ePickupR\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.FullSession",
          "name": "PickupR",
          "package": "full-sessions",
          "source": "src/FullSession-Base.html#PickupR",
          "type": "class"
        },
        "index": {
          "description": "The reversed version of Pickup which accesses lists in reversed order counts from right to left I.e PickupR End Bot Send Int End Send Int End is an instance of PickupR",
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "PickupR",
          "package": "full-sessions",
          "partial": "Pickup",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:PickupR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eRec\u003c/a\u003e\u003c/code\u003e m r\u003c/code\u003e denotes recursive session, where \u003ccode\u003em\u003c/code\u003e represents the binder of recursion variable. \n a type-level natural numer (like \u003ccode\u003e\u003ccode\u003e\u003ca\u003eS\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eZ\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e). nesting level of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eRec\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, and\n \u003ccode\u003er\u003c/code\u003e is the body of the recursion which may contain \u003ccode\u003e\u003ccode\u003e\u003ca\u003eVar\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Control.Concurrent.FullSession",
          "name": "Rec",
          "package": "full-sessions",
          "source": "src/FullSession-Types.html#Rec",
          "type": "data"
        },
        "index": {
          "description": "Rec denotes recursive session where represents the binder of recursion variable type-level natural numer like nesting level of Rec and is the body of the recursion which may contain Var",
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "Rec",
          "package": "full-sessions",
          "partial": "Rec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:Rec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "RecFold",
          "package": "full-sessions",
          "source": "src/FullSession-Recursion.html#RecFold",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "RecFold",
          "package": "full-sessions",
          "partial": "Rec Fold",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:RecFold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "RecFold2",
          "package": "full-sessions",
          "source": "src/FullSession-Recursion.html#RecFold2",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "RecFold2",
          "package": "full-sessions",
          "partial": "Rec Fold",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:RecFold2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "RecFoldCont",
          "package": "full-sessions",
          "source": "src/FullSession-Recursion.html#RecFoldCont",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "RecFoldCont",
          "package": "full-sessions",
          "partial": "Rec Fold Cont",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:RecFoldCont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "RecFoldCont2",
          "package": "full-sessions",
          "source": "src/FullSession-Recursion.html#RecFoldCont2",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "RecFoldCont2",
          "package": "full-sessions",
          "partial": "Rec Fold Cont",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:RecFoldCont2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "RecUnfold",
          "package": "full-sessions",
          "source": "src/FullSession-Recursion.html#RecUnfold",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "RecUnfold",
          "package": "full-sessions",
          "partial": "Rec Unfold",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:RecUnfold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "RecUnfoldCont",
          "package": "full-sessions",
          "source": "src/FullSession-Recursion.html#RecUnfoldCont",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "RecUnfoldCont",
          "package": "full-sessions",
          "partial": "Rec Unfold Cont",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:RecUnfoldCont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eRecv\u003c/a\u003e\u003c/code\u003e v u\u003c/code\u003e denotes a protocol of receiving a value of type \u003ccode\u003ev\u003c/code\u003e followed by a behavior of type \u003ccode\u003eu\u003c/code\u003e.\n Use of \u003ccode\u003e\u003ccode\u003erecv\u003c/code\u003e\u003c/code\u003e on a channel changes its session type from \u003ccode\u003e\u003ccode\u003e\u003ca\u003eRecv\u003c/a\u003e\u003c/code\u003e v u\u003c/code\u003e into \u003ccode\u003eu\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Control.Concurrent.FullSession",
          "name": "Recv",
          "package": "full-sessions",
          "source": "src/FullSession-Types.html#Recv",
          "type": "data"
        },
        "index": {
          "description": "Recv denotes protocol of receiving value of type followed by behavior of type Use of recv on channel changes its session type from Recv into",
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "Recv",
          "package": "full-sessions",
          "partial": "Recv",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:Recv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType level successor. \u003ccode\u003e\u003ccode\u003e\u003ca\u003eS\u003c/a\u003e\u003c/code\u003e n\u003c/code\u003e denotes \u003ccode\u003e(n+1)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.FullSession",
          "name": "S",
          "package": "full-sessions",
          "source": "src/FullSession-Base.html#S",
          "type": "data"
        },
        "index": {
          "description": "Type level successor denotes",
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "S",
          "package": "full-sessions",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:S"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class which covers session-type environments. The second parameter of the class denotes the length of the list.\n\u003c/p\u003e",
          "module": "Control.Concurrent.FullSession",
          "name": "SList",
          "package": "full-sessions",
          "source": "src/FullSession-Base.html#SList",
          "type": "class"
        },
        "index": {
          "description": "The class which covers session-type environments The second parameter of the class denotes the length of the list",
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "SList",
          "package": "full-sessions",
          "partial": "SList",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:SList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eSelect\u003c/a\u003e\u003c/code\u003e u1 u2\u003c/code\u003e denotes to be either behavior of type \u003ccode\u003eu1\u003c/code\u003e or type \u003ccode\u003eu2\u003c/code\u003e after emitting a corresponding label \u003ccode\u003e1\u003c/code\u003e or \u003ccode\u003e2\u003c/code\u003e.\n Use of \u003ccode\u003e\u003ccode\u003esel1\u003c/code\u003e\u003c/code\u003e or \u003ccode\u003e\u003ccode\u003esel2\u003c/code\u003e\u003c/code\u003e on a channel changes its session type from \u003ccode\u003e\u003ccode\u003e\u003ca\u003eSelect\u003c/a\u003e\u003c/code\u003e u1 u2\u003c/code\u003e into \u003ccode\u003eu1\u003c/code\u003e or \u003ccode\u003eu2\u003c/code\u003e, respectively. \n\u003c/p\u003e",
          "module": "Control.Concurrent.FullSession",
          "name": "Select",
          "package": "full-sessions",
          "source": "src/FullSession-Types.html#Select",
          "type": "data"
        },
        "index": {
          "description": "Select u1 u2 denotes to be either behavior of type u1 or type u2 after emitting corresponding label or Use of sel1 or sel2 on channel changes its session type from Select u1 u2 into u1 or u2 respectively",
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "Select",
          "package": "full-sessions",
          "partial": "Select",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:Select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "SelectN",
          "package": "full-sessions",
          "source": "src/FullSession-Types.html#SelectN",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "SelectN",
          "package": "full-sessions",
          "partial": "Select",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:SelectN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eSend\u003c/a\u003e\u003c/code\u003e v u\u003c/code\u003e denotes a protocol to emit a value of type \u003ccode\u003ev\u003c/code\u003e followed by a behavior of type \u003ccode\u003eu\u003c/code\u003e. \n Use of \u003ccode\u003e\u003ccode\u003esend\u003c/code\u003e\u003c/code\u003e on a channel changes its session type from \u003ccode\u003e\u003ccode\u003e\u003ca\u003eSend\u003c/a\u003e\u003c/code\u003e v u\u003c/code\u003e into \u003ccode\u003eu\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Control.Concurrent.FullSession",
          "name": "Send",
          "package": "full-sessions",
          "source": "src/FullSession-Types.html#Send",
          "type": "data"
        },
        "index": {
          "description": "Send denotes protocol to emit value of type followed by behavior of type Use of send on channel changes its session type from Send into",
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "Send",
          "package": "full-sessions",
          "partial": "Send",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:Send"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "Service",
          "package": "full-sessions",
          "source": "src/FullSession-FullSession.html#Service",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "Service",
          "package": "full-sessions",
          "partial": "Service",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:Service"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eSession\u003c/code\u003e monad. \u003ccode\u003ess\u003c/code\u003e and \u003ccode\u003ett\u003c/code\u003e denotes the \u003cem\u003eusage\u003c/em\u003e of channels. \n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003ess\u003c/code\u003e denotes \u003cem\u003epre-type\u003c/em\u003e, which denotes the type-level list of session types \u003cem\u003erequired\u003c/em\u003e to run the session.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ett\u003c/code\u003e denotes \u003cem\u003epost-type\u003c/em\u003e, which denotes the type-level lists of session types \u003cem\u003eproduced\u003c/em\u003e by the session.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003ccode\u003et\u003c/code\u003e denotes a \u003cem\u003etype-tag\u003c/em\u003e, which prevents abuse of use of channels. For detail, see \u003ccode\u003e\u003ca\u003erunS\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.FullSession",
          "name": "Session",
          "package": "full-sessions",
          "source": "src/FullSession-SMonad.html#Session",
          "type": "data"
        },
        "index": {
          "description": "The Session monad ss and tt denotes the usage of channels ss denotes pre-type which denotes the type-level list of session types required to run the session tt denotes post-type which denotes the type-level lists of session types produced by the session denotes type-tag which prevents abuse of use of channels For detail see runS",
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "Session",
          "package": "full-sessions",
          "partial": "Session",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:Session"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes subtraction of \u003ccode\u003en\u003c/code\u003e by \u003ccode\u003en'\u003c/code\u003e (FIXME:OK?)\n\u003c/p\u003e",
          "module": "Control.Concurrent.FullSession",
          "name": "Sub",
          "package": "full-sessions",
          "source": "src/FullSession-Base.html#Sub",
          "type": "class"
        },
        "index": {
          "description": "Computes subtraction of by FIXME OK",
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "Sub",
          "package": "full-sessions",
          "partial": "Sub",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:Sub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes subtraction of \u003ccode\u003en\u003c/code\u003e by \u003ccode\u003en'\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concurrent.FullSession",
          "name": "SubT",
          "package": "full-sessions",
          "signature": "SubT",
          "type": "function"
        },
        "index": {
          "description": "Computes subtraction of by",
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "SubT",
          "package": "full-sessions",
          "partial": "Sub",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:SubT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType level \u003ccode\u003eTrue\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.FullSession",
          "name": "T",
          "package": "full-sessions",
          "source": "src/FullSession-Base.html#T",
          "type": "data"
        },
        "index": {
          "description": "Type level True",
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "T",
          "package": "full-sessions",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eThrow\u003c/a\u003e\u003c/code\u003e u1 u2\u003c/code\u003e denotes a behavior to output of a channel with session type \u003ccode\u003eu1\u003c/code\u003e followed by a behavior of type \u003ccode\u003eu2\u003c/code\u003e. \n Use of \u003ccode\u003e\u003ccode\u003esendS\u003c/code\u003e\u003c/code\u003e on a channel changes its session type from \u003ccode\u003e\u003ccode\u003e\u003ca\u003eThrow\u003c/a\u003e\u003c/code\u003e u1 u2\u003c/code\u003e into \u003ccode\u003eu2\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Control.Concurrent.FullSession",
          "name": "Throw",
          "package": "full-sessions",
          "source": "src/FullSession-Types.html#Throw",
          "type": "data"
        },
        "index": {
          "description": "Throw u1 u2 denotes behavior to output of channel with session type u1 followed by behavior of type u2 Use of sendS on channel changes its session type from Throw u1 u2 into u2",
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "Throw",
          "package": "full-sessions",
          "partial": "Throw",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:Throw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "TypeEq",
          "package": "full-sessions",
          "source": "src/FullSession-TypeEq.html#TypeEq",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "TypeEq",
          "package": "full-sessions",
          "partial": "Type Eq",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:TypeEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "TypeEq'",
          "package": "full-sessions",
          "source": "src/FullSession-TypeEq.html#TypeEq%27",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "TypeEq'",
          "package": "full-sessions",
          "partial": "Type Eq'",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:TypeEq-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "TypeEq''",
          "package": "full-sessions",
          "source": "src/FullSession-TypeEq.html#TypeEq%27%27",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "TypeEq''",
          "package": "full-sessions",
          "partial": "Type Eq''",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:TypeEq-39--39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eUpdate\u003c/a\u003e\u003c/code\u003e ss n t ss'\u003c/code\u003e denotes that \u003ccode\u003ess'\u003c/code\u003e is same as \u003ccode\u003ess\u003c/code\u003e except that its \u003ccode\u003en\u003c/code\u003e-th element is \u003ccode\u003et\u003c/code\u003e.\n   Formally, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eUpdate\u003c/a\u003e\u003c/code\u003e ss n t ss'\u003c/code\u003e if \u003ccode\u003ess' = update ss n t\u003c/code\u003e where \u003ccode\u003eupdate\u003c/code\u003e is:\n\u003c/p\u003e\u003cpre\u003e\n   update ss n t = updateR ss (len ss - (n+1)) t\n     where updateR (ss:\u003e_) Z     t = ss :\u003e t\n           updateR (ss:\u003es) (S n) t = updateR ss n t :\u003e s\n           len Nil     = 0\n           len (ss:\u003es) = (len ss) + 1\n\u003c/pre\u003e\u003cp\u003eIn other words, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eUpdate\u003c/a\u003e\u003c/code\u003e (End :\u003e Bot :\u003e Send Int End) Z End (End :\u003e Bot :\u003e End))\u003c/code\u003e is an instance of \u003ccode\u003eUpdate\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that the list counts from left to right, as in the case of \u003ccode\u003ePickup\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Control.Concurrent.FullSession",
          "name": "Update",
          "package": "full-sessions",
          "source": "src/FullSession-Base.html#Update",
          "type": "class"
        },
        "index": {
          "description": "Update ss ss denotes that ss is same as ss except that its th element is Formally Update ss ss if ss update ss where update is update ss updateR ss len ss where updateR ss ss updateR ss updateR ss len Nil len ss len ss In other words Update End Bot Send Int End End End Bot End is an instance of Update Note that the list counts from left to right as in the case of Pickup",
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "Update",
          "package": "full-sessions",
          "partial": "Update",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:Update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe reversed version of \u003ccode\u003e\u003ca\u003eUpdate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.FullSession",
          "name": "UpdateR",
          "package": "full-sessions",
          "source": "src/FullSession-Base.html#UpdateR",
          "type": "class"
        },
        "index": {
          "description": "The reversed version of Update",
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "UpdateR",
          "package": "full-sessions",
          "partial": "Update",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:UpdateR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecursion variable.\n\u003c/p\u003e",
          "module": "Control.Concurrent.FullSession",
          "name": "Var",
          "package": "full-sessions",
          "source": "src/FullSession-Types.html#Var",
          "type": "data"
        },
        "index": {
          "description": "Recursion variable",
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "Var",
          "package": "full-sessions",
          "partial": "Var",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:Var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType level zero.\n\u003c/p\u003e",
          "module": "Control.Concurrent.FullSession",
          "name": "Z",
          "package": "full-sessions",
          "source": "src/FullSession-Base.html#Z",
          "type": "data"
        },
        "index": {
          "description": "Type level zero",
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "Z",
          "package": "full-sessions",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#t:Z"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "(\u003e\u003e\u003e)",
          "package": "full-sessions",
          "signature": "Session t ss tt a -\u003e Session t tt uu b -\u003e Session t ss uu b",
          "source": "src/FullSession-SMonad.html#%3E%3E%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "(\u003e\u003e\u003e) \u003e\u003e\u003e",
          "normalized": "Session a b c d-\u003eSession a c e f-\u003eSession a b e f",
          "package": "full-sessions",
          "signature": "Session t ss tt a-\u003eSession t tt uu b-\u003eSession t ss uu b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#v:-62--62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBind (a.k.a \u003ccode\u003e\u003e\u003e=\u003c/code\u003e) operation for \u003ccode\u003e\u003ca\u003eSession\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Control.Concurrent.FullSession",
          "name": "(\u003e\u003e\u003e=)",
          "package": "full-sessions",
          "signature": "Session t ss tt a -\u003e (a -\u003e Session t tt uu b) -\u003e Session t ss uu b",
          "source": "src/FullSession-SMonad.html#%3E%3E%3E%3D",
          "type": "function"
        },
        "index": {
          "description": "Bind a.k.a operation for Session monad",
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "(\u003e\u003e\u003e=) \u003e\u003e\u003e=",
          "normalized": "Session a b c d-\u003e(d-\u003eSession a c e f)-\u003eSession a b e f",
          "package": "full-sessions",
          "signature": "Session t ss tt a-\u003e(a-\u003eSession t tt uu b)-\u003eSession t ss uu b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#v:-62--62--62--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "accept",
          "package": "full-sessions",
          "signature": "Service u -\u003e Session t ss (ss :\u003e u) (Channel t l)",
          "source": "src/FullSession-FullSession.html#accept",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "accept",
          "normalized": "Service a-\u003eSession b c(c a)(Channel b d)",
          "package": "full-sessions",
          "signature": "Service u-\u003eSession t ss(ss u)(Channel t l)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#v:accept"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "acceptOneNw2",
          "package": "full-sessions",
          "signature": "NwService2 u u' -\u003e Session t ss ((ss :\u003e u) :\u003e u') (Channel t l, Channel t (S l))",
          "source": "src/FullSession-NwSession.html#acceptOneNw2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "acceptOneNw2",
          "normalized": "NwService a b-\u003eSession c d((d a)b)(Channel c e,Channel c(S e))",
          "package": "full-sessions",
          "partial": "One Nw",
          "signature": "NwService u u'-\u003eSession t ss((ss u)u')(Channel t l,Channel t(S l))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#v:acceptOneNw2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "acceptRunS",
          "package": "full-sessions",
          "signature": "Service u -\u003e (forall t.  Channel t Z -\u003e Session t (Nil :\u003e u) xs a) -\u003e IO a",
          "source": "src/FullSession-FullSession.html#acceptRunS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "acceptRunS",
          "normalized": "Service a-\u003e(b c Channel d Z-\u003eSession d(Nil a)e f)-\u003eIO f",
          "package": "full-sessions",
          "partial": "Run",
          "signature": "Service u-\u003e(forall t. Channel t Z-\u003eSession t(Nil u)xs a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#v:acceptRunS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "channeltype1",
          "package": "full-sessions",
          "signature": "(Channel t Z -\u003e Session t (Nil :\u003e s) ss' a) -\u003e (s, s')",
          "source": "src/FullSession-SMonad.html#channeltype1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "channeltype1",
          "normalized": "(Channel a Z-\u003eSession a(Nil b)c d)-\u003e(b,e)",
          "package": "full-sessions",
          "signature": "(Channel t Z-\u003eSession t(Nil s)ss' a)-\u003e(s,s')",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#v:channeltype1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "channeltype2",
          "package": "full-sessions",
          "signature": "(Channel t Z -\u003e Channel t (S Z) -\u003e Session t ((Nil :\u003e s) :\u003e t) ss' a) -\u003e ((s, s'), (t, t'))",
          "source": "src/FullSession-SMonad.html#channeltype2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "channeltype2",
          "normalized": "(Channel a Z-\u003eChannel a(S Z)-\u003eSession a((Nil b)a)c d)-\u003e((b,e),(a,f))",
          "package": "full-sessions",
          "signature": "(Channel t Z-\u003eChannel t(S Z)-\u003eSession t((Nil s)t)ss' a)-\u003e((s,s'),(t,t'))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#v:channeltype2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "close",
          "package": "full-sessions",
          "signature": "Channel t n -\u003e Session t ss ss' ()",
          "source": "src/FullSession-FullSession.html#close",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "close",
          "normalized": "Channel a b-\u003eSession a c d()",
          "package": "full-sessions",
          "signature": "Channel t n-\u003eSession t ss ss'()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#v:close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "connect",
          "package": "full-sessions",
          "signature": "Service u -\u003e Session t ss (ss :\u003e u') (Channel t l)",
          "source": "src/FullSession-FullSession.html#connect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "connect",
          "normalized": "Service a-\u003eSession b c(c d)(Channel b e)",
          "package": "full-sessions",
          "signature": "Service u-\u003eSession t ss(ss u')(Channel t l)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#v:connect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "connectNw",
          "package": "full-sessions",
          "signature": "NwService u -\u003e Session t ss (ss :\u003e u) (Channel t l)",
          "source": "src/FullSession-NwSession.html#connectNw",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "connectNw",
          "normalized": "NwService a-\u003eSession b c(c a)(Channel b d)",
          "package": "full-sessions",
          "partial": "Nw",
          "signature": "NwService u-\u003eSession t ss(ss u)(Channel t l)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#v:connectNw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "connectNw2",
          "package": "full-sessions",
          "signature": "NwService2 u u' -\u003e Session t ss ((ss :\u003e u) :\u003e u') (Channel t l, Channel t (S l))",
          "source": "src/FullSession-NwSession.html#connectNw2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "connectNw2",
          "normalized": "NwService a b-\u003eSession c d((d a)b)(Channel c e,Channel c(S e))",
          "package": "full-sessions",
          "partial": "Nw",
          "signature": "NwService u u'-\u003eSession t ss((ss u)u')(Channel t l,Channel t(S l))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#v:connectNw2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "connectRunS",
          "package": "full-sessions",
          "signature": "Service u -\u003e (forall t.  Channel t Z -\u003e Session t (Nil :\u003e u') xs a) -\u003e IO a",
          "source": "src/FullSession-FullSession.html#connectRunS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "connectRunS",
          "normalized": "Service a-\u003e(b c Channel d Z-\u003eSession d(Nil e)f g)-\u003eIO g",
          "package": "full-sessions",
          "partial": "Run",
          "signature": "Service u-\u003e(forall t. Channel t Z-\u003eSession t(Nil u')xs a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#v:connectRunS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "dualNw",
          "package": "full-sessions",
          "signature": "NwService u -\u003e NwService u'",
          "source": "src/FullSession-NwSession.html#dualNw",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "dualNw",
          "normalized": "NwService a-\u003eNwService b",
          "package": "full-sessions",
          "partial": "Nw",
          "signature": "NwService u-\u003eNwService u'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#v:dualNw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "dualNw2",
          "package": "full-sessions",
          "signature": "NwService2 u1 u2 -\u003e NwService2 u1' u2'",
          "source": "src/FullSession-NwSession.html#dualNw2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "dualNw2",
          "normalized": "NwService a a-\u003eNwService a a",
          "package": "full-sessions",
          "partial": "Nw",
          "signature": "NwService u u-\u003eNwService u u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#v:dualNw2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "finallys",
          "package": "full-sessions",
          "signature": "Session t ss tt () -\u003e IO () -\u003e Session t ss tt ()",
          "source": "src/FullSession-NwSession.html#finallys",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "finallys",
          "normalized": "Session a b c()-\u003eIO()-\u003eSession a b c()",
          "package": "full-sessions",
          "signature": "Session t ss tt()-\u003eIO()-\u003eSession t ss tt()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#v:finallys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estart a new thread\n\u003c/p\u003e",
          "module": "Control.Concurrent.FullSession",
          "name": "forkIOs",
          "package": "full-sessions",
          "signature": "Session t ss ss' () -\u003e Session t tt tt' ThreadId",
          "source": "src/FullSession-FullSession.html#forkIOs",
          "type": "function"
        },
        "index": {
          "description": "start new thread",
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "forkIOs",
          "normalized": "Session a b c()-\u003eSession a d e ThreadId",
          "package": "full-sessions",
          "partial": "IOs",
          "signature": "Session t ss ss'()-\u003eSession t tt tt' ThreadId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#v:forkIOs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estart a new thread\n\u003c/p\u003e",
          "module": "Control.Concurrent.FullSession",
          "name": "forkOSs",
          "package": "full-sessions",
          "signature": "Session t ss ss' () -\u003e Session t tt tt' ThreadId",
          "source": "src/FullSession-FullSession.html#forkIOs",
          "type": "function"
        },
        "index": {
          "description": "start new thread",
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "forkOSs",
          "normalized": "Session a b c()-\u003eSession a d e ThreadId",
          "package": "full-sessions",
          "partial": "OSs",
          "signature": "Session t ss ss'()-\u003eSession t tt tt' ThreadId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#v:forkOSs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "ifSelect",
          "package": "full-sessions",
          "signature": "Channel t n -\u003e Bool -\u003e Session t sx xx a -\u003e Session t sy yy a -\u003e Session t ss zz a",
          "source": "src/FullSession-FullSession.html#ifSelect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "ifSelect",
          "normalized": "Channel a b-\u003eBool-\u003eSession a c d e-\u003eSession a f g e-\u003eSession a h i e",
          "package": "full-sessions",
          "partial": "Select",
          "signature": "Channel t n-\u003eBool-\u003eSession t sx xx a-\u003eSession t sy yy a-\u003eSession t ss zz a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#v:ifSelect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "ifSelectN",
          "package": "full-sessions",
          "signature": "Channel t n -\u003e Bool -\u003e Session t sx xx a -\u003e Session t sy yy a -\u003e Session t ss zz a",
          "source": "src/FullSession-NwSession.html#ifSelectN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "ifSelectN",
          "normalized": "Channel a b-\u003eBool-\u003eSession a c d e-\u003eSession a f g e-\u003eSession a h i e",
          "package": "full-sessions",
          "partial": "Select",
          "signature": "Channel t n-\u003eBool-\u003eSession t sx xx a-\u003eSession t sy yy a-\u003eSession t ss zz a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#v:ifSelectN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "io",
          "package": "full-sessions",
          "signature": "IO a -\u003e Session t ss ss a",
          "source": "src/FullSession-FullSession.html#io",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "io",
          "normalized": "IO a-\u003eSession b c c a",
          "package": "full-sessions",
          "signature": "IO a-\u003eSession t ss ss a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#v:io"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "io_",
          "package": "full-sessions",
          "signature": "IO a -\u003e Session t ss ss ()",
          "source": "src/FullSession-FullSession.html#io_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "io_",
          "normalized": "IO a-\u003eSession b c c()",
          "package": "full-sessions",
          "signature": "IO a-\u003eSession t ss ss()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#v:io_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnit (a.k.a \u003ccode\u003ereturn\u003c/code\u003e) operation for \u003ccode\u003e\u003ca\u003eSession\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Control.Concurrent.FullSession",
          "name": "ireturn",
          "package": "full-sessions",
          "signature": "a -\u003e Session t ss ss a",
          "source": "src/FullSession-SMonad.html#ireturn",
          "type": "function"
        },
        "index": {
          "description": "Unit a.k.a return operation for Session monad",
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "ireturn",
          "normalized": "a-\u003eSession b c c a",
          "package": "full-sessions",
          "signature": "a-\u003eSession t ss ss a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#v:ireturn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "mkNwService",
          "package": "full-sessions",
          "signature": "String -\u003e Int -\u003e u -\u003e NwService u",
          "source": "src/FullSession-NwSession.html#mkNwService",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "mkNwService",
          "normalized": "String-\u003eInt-\u003ea-\u003eNwService a",
          "package": "full-sessions",
          "partial": "Nw Service",
          "signature": "String-\u003eInt-\u003eu-\u003eNwService u",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#v:mkNwService"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "mkNwService2",
          "package": "full-sessions",
          "signature": "String -\u003e Int -\u003e u -\u003e u' -\u003e NwService2 u u'",
          "source": "src/FullSession-NwSession.html#mkNwService2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "mkNwService2",
          "normalized": "String-\u003eInt-\u003ea-\u003eb-\u003eNwService a b",
          "package": "full-sessions",
          "partial": "Nw Service",
          "signature": "String-\u003eInt-\u003eu-\u003eu'-\u003eNwService u u'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#v:mkNwService2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "new",
          "package": "full-sessions",
          "signature": "Session t ss (ss :\u003e Bot) (Channel t l)",
          "source": "src/FullSession-FullSession.html#new",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "new",
          "package": "full-sessions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "newService",
          "package": "full-sessions",
          "signature": "IO (Service u)",
          "source": "src/FullSession-FullSession.html#newService",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "newService",
          "package": "full-sessions",
          "partial": "Service",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#v:newService"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "offer",
          "package": "full-sessions",
          "signature": "Channel t n -\u003e Session t sx xx a -\u003e Session t sy yy a -\u003e Session t ss zz a",
          "source": "src/FullSession-FullSession.html#offer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "offer",
          "normalized": "Channel a b-\u003eSession a c d e-\u003eSession a f g e-\u003eSession a h i e",
          "package": "full-sessions",
          "signature": "Channel t n-\u003eSession t sx xx a-\u003eSession t sy yy a-\u003eSession t ss zz a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#v:offer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "offerN",
          "package": "full-sessions",
          "signature": "Channel t n -\u003e Session t sx xx a -\u003e Session t sy yy a -\u003e Session t ss zz a",
          "source": "src/FullSession-NwSession.html#offerN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "offerN",
          "normalized": "Channel a b-\u003eSession a c d e-\u003eSession a f g e-\u003eSession a h i e",
          "package": "full-sessions",
          "signature": "Channel t n-\u003eSession t sx xx a-\u003eSession t sy yy a-\u003eSession t ss zz a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#v:offerN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "parseMessage",
          "package": "full-sessions",
          "signature": "String -\u003e Maybe (mes, String)",
          "source": "src/FullSession-NwSession.html#parseMessage",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "parseMessage",
          "normalized": "String-\u003eMaybe(a,String)",
          "package": "full-sessions",
          "partial": "Message",
          "signature": "String-\u003eMaybe(mes,String)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#v:parseMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "recur1",
          "package": "full-sessions",
          "signature": "(Channel t n -\u003e Session t ss tt ()) -\u003e Channel t n -\u003e Session t ss' tt ()",
          "source": "src/FullSession-FullSession.html#recur1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "recur1",
          "normalized": "(Channel a b-\u003eSession a c d())-\u003eChannel a b-\u003eSession a e d()",
          "package": "full-sessions",
          "signature": "(Channel t n-\u003eSession t ss tt())-\u003eChannel t n-\u003eSession t ss' tt()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#v:recur1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "recur2",
          "package": "full-sessions",
          "signature": "(Channel t n -\u003e Channel t m -\u003e Session t ss tt ()) -\u003e Channel t n -\u003e Channel t m -\u003e Session t ss' tt ()",
          "source": "src/FullSession-FullSession.html#recur2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "recur2",
          "normalized": "(Channel a b-\u003eChannel a c-\u003eSession a d e())-\u003eChannel a b-\u003eChannel a c-\u003eSession a f e()",
          "package": "full-sessions",
          "signature": "(Channel t n-\u003eChannel t m-\u003eSession t ss tt())-\u003eChannel t n-\u003eChannel t m-\u003eSession t ss' tt()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#v:recur2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "recv",
          "package": "full-sessions",
          "signature": "Channel t n -\u003e Session t ss ss' v",
          "source": "src/FullSession-FullSession.html#recv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "recv",
          "normalized": "Channel a b-\u003eSession a c d e",
          "package": "full-sessions",
          "signature": "Channel t n-\u003eSession t ss ss' v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#v:recv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "recvS",
          "package": "full-sessions",
          "signature": "Channel t n1 -\u003e Session t ss (ss' :\u003e c1) (Channel t l)",
          "source": "src/FullSession-FullSession.html#recvS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "recvS",
          "normalized": "Channel a b-\u003eSession a c(d e)(Channel a f)",
          "package": "full-sessions",
          "signature": "Channel t n-\u003eSession t ss(ss' c)(Channel t l)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#v:recvS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erunS\u003c/a\u003e\u003c/code\u003e runs the \u003ccode\u003e\u003ca\u003eSession\u003c/a\u003e\u003c/code\u003e. The pretype (see \u003ccode\u003e\u003ca\u003eSession\u003c/a\u003e\u003c/code\u003e) must be \u003ccode\u003e\u003ca\u003eNil\u003c/a\u003e\u003c/code\u003e. \n   The posttype must be \u003ccode\u003e\u003ca\u003eEnded\u003c/a\u003e\u003c/code\u003e, i.e. all channels must be \u003ccode\u003e\u003ca\u003eEnd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eForall'd type variable \u003ccode\u003et\u003c/code\u003e prevents abuse of use of channels inside different run.\n   For example, \u003ccode\u003enew \u003e\u003e\u003e= c -\u003e \u003ccode\u003eio_\u003c/code\u003e (runS ( ... send c ...) )\u003c/code\u003e is rejected by the Haskell typechecker with error \u003ccode\u003eInferred type is less polymorphic than expected\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.FullSession",
          "name": "runS",
          "package": "full-sessions",
          "signature": "forall a n.  (forall t.  Session t Nil ss a) -\u003e IO a",
          "source": "src/FullSession-SMonad.html#runS",
          "type": "function"
        },
        "index": {
          "description": "runS runs the Session The pretype see Session must be Nil The posttype must be Ended i.e all channels must be End Forall type variable prevents abuse of use of channels inside different run For example new io runS send is rejected by the Haskell typechecker with error Inferred type is less polymorphic than expected",
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "runS",
          "normalized": "a b c(a d Session e Nil f b)-\u003eIO b",
          "package": "full-sessions",
          "signature": "forall a n.(forall t. Session t Nil ss a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#v:runS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eoutput a label `1'\n\u003c/p\u003e",
          "module": "Control.Concurrent.FullSession",
          "name": "sel1",
          "package": "full-sessions",
          "signature": "Channel t n -\u003e Session t ss tt ()",
          "source": "src/FullSession-FullSession.html#sel1",
          "type": "function"
        },
        "index": {
          "description": "output label",
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "sel1",
          "normalized": "Channel a b-\u003eSession a c d()",
          "package": "full-sessions",
          "signature": "Channel t n-\u003eSession t ss tt()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#v:sel1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eoutput a label `1'\n\u003c/p\u003e",
          "module": "Control.Concurrent.FullSession",
          "name": "sel1N",
          "package": "full-sessions",
          "signature": "Channel t n -\u003e Session t ss tt ()",
          "source": "src/FullSession-NwSession.html#sel1N",
          "type": "function"
        },
        "index": {
          "description": "output label",
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "sel1N",
          "normalized": "Channel a b-\u003eSession a c d()",
          "package": "full-sessions",
          "signature": "Channel t n-\u003eSession t ss tt()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#v:sel1N"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eoutput a label `2'\n\u003c/p\u003e",
          "module": "Control.Concurrent.FullSession",
          "name": "sel2",
          "package": "full-sessions",
          "signature": "Channel t n -\u003e Session t ss tt ()",
          "source": "src/FullSession-FullSession.html#sel2",
          "type": "function"
        },
        "index": {
          "description": "output label",
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "sel2",
          "normalized": "Channel a b-\u003eSession a c d()",
          "package": "full-sessions",
          "signature": "Channel t n-\u003eSession t ss tt()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#v:sel2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "sel2N",
          "package": "full-sessions",
          "signature": "Channel t n -\u003e Session t ss tt ()",
          "source": "src/FullSession-NwSession.html#sel2N",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "sel2N",
          "normalized": "Channel a b-\u003eSession a c d()",
          "package": "full-sessions",
          "signature": "Channel t n-\u003eSession t ss tt()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#v:sel2N"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "send",
          "package": "full-sessions",
          "signature": "Channel t n -\u003e v -\u003e Session t ss ss' ()",
          "source": "src/FullSession-FullSession.html#send",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "send",
          "normalized": "Channel a b-\u003ec-\u003eSession a d e()",
          "package": "full-sessions",
          "signature": "Channel t n-\u003ev-\u003eSession t ss ss'()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#v:send"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "sendS",
          "package": "full-sessions",
          "signature": "Channel t n1 -\u003e Channel t n2 -\u003e Session t ss ss'' ()",
          "source": "src/FullSession-FullSession.html#sendS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "sendS",
          "normalized": "Channel a b-\u003eChannel a b-\u003eSession a c d()",
          "package": "full-sessions",
          "signature": "Channel t n-\u003eChannel t n-\u003eSession t ss ss''()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#v:sendS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "showMessage",
          "package": "full-sessions",
          "signature": "mes -\u003e String",
          "source": "src/FullSession-NwSession.html#showMessage",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "showMessage",
          "normalized": "a-\u003eString",
          "package": "full-sessions",
          "partial": "Message",
          "signature": "mes-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#v:showMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "typecheck1",
          "package": "full-sessions",
          "signature": "(Channel t l -\u003e Session t (ss :\u003e s1) ss' a) -\u003e Session t (ss :\u003e s1) ss' a",
          "source": "src/FullSession-SMonad.html#typecheck1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "typecheck1",
          "normalized": "(Channel a b-\u003eSession a(c d)e f)-\u003eSession a(c d)e f",
          "package": "full-sessions",
          "signature": "(Channel t l-\u003eSession t(ss s)ss' a)-\u003eSession t(ss s)ss' a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#v:typecheck1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "typecheck2",
          "package": "full-sessions",
          "signature": "(Channel t l -\u003e Channel t (S l) -\u003e Session t ((ss :\u003e s1) :\u003e s2) ss' a) -\u003e Session t ((ss :\u003e s1) :\u003e s2) ss' a",
          "source": "src/FullSession-SMonad.html#typecheck2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "typecheck2",
          "normalized": "(Channel a b-\u003eChannel a(S b)-\u003eSession a((c d)d)e f)-\u003eSession a((c d)d)e f",
          "package": "full-sessions",
          "signature": "(Channel t l-\u003eChannel t(S l)-\u003eSession t((ss s)s)ss' a)-\u003eSession t((ss s)s)ss' a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#v:typecheck2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "unwind0",
          "package": "full-sessions",
          "signature": "Channel t n -\u003e Session t ss tt ()",
          "source": "src/FullSession-FullSession.html#unwind0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "unwind0",
          "normalized": "Channel a b-\u003eSession a c d()",
          "package": "full-sessions",
          "signature": "Channel t n-\u003eSession t ss tt()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#v:unwind0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "unwind1",
          "package": "full-sessions",
          "signature": "Channel t n -\u003e Session t ss tt ()",
          "source": "src/FullSession-FullSession.html#unwind1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "unwind1",
          "normalized": "Channel a b-\u003eSession a c d()",
          "package": "full-sessions",
          "signature": "Channel t n-\u003eSession t ss tt()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#v:unwind1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.FullSession",
          "name": "unwind2",
          "package": "full-sessions",
          "signature": "Channel t n -\u003e Session t ss tt ()",
          "source": "src/FullSession-FullSession.html#unwind2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent FullSession",
          "module": "Control.Concurrent.FullSession",
          "name": "unwind2",
          "normalized": "Channel a b-\u003eSession a c d()",
          "package": "full-sessions",
          "signature": "Channel t n-\u003eSession t ss tt()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/full-sessions/docs/Control-Concurrent-FullSession.html#v:unwind2"
      }
    }
  ]
]