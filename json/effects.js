[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects-Cont.html#",
      "description": {
        "fct-module": "Control.Effects.Cont",
        "fct-package": "effects",
        "fct-signature": "module",
        "fct-source": "src/Control-Effects-Cont.html",
        "fct-type": "module",
        "title": "Cont"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Effects Cont",
        "module": "Control.Effects.Cont",
        "name": "Cont",
        "normalized": "",
        "package": "effects",
        "partial": "Cont",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects-Cont.html#v:reset",
      "description": {
        "fct-module": "Control.Effects.Cont",
        "fct-package": "effects",
        "fct-signature": "Handler a a m a",
        "fct-source": "src/Control-Effects-Cont.html#reset",
        "fct-type": "function",
        "title": "reset"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Effects Cont",
        "module": "Control.Effects.Cont",
        "name": "reset",
        "normalized": "",
        "package": "effects",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects-Cont.html#v:shift",
      "description": {
        "fct-module": "Control.Effects.Cont",
        "fct-package": "effects",
        "fct-signature": "Effect r m -\u003e ((m a -\u003e m r) -\u003e m r) -\u003e n a",
        "fct-source": "src/Control-Effects-Cont.html#shift",
        "fct-type": "function",
        "title": "shift"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Effects Cont",
        "module": "Control.Effects.Cont",
        "name": "shift",
        "normalized": "Effect a b-\u003e((b c-\u003eb a)-\u003eb a)-\u003ed c",
        "package": "effects",
        "partial": "",
        "signature": "Effect r m-\u003e((m a-\u003em r)-\u003em r)-\u003en a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects-Either.html#",
      "description": {
        "fct-module": "Control.Effects.Either",
        "fct-package": "effects",
        "fct-signature": "module",
        "fct-source": "src/Control-Effects-Either.html",
        "fct-type": "module",
        "title": "Either"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Effects Either",
        "module": "Control.Effects.Either",
        "name": "Either",
        "normalized": "",
        "package": "effects",
        "partial": "Either",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects-Either.html#v:catchEither",
      "description": {
        "fct-module": "Control.Effects.Either",
        "fct-package": "effects",
        "fct-signature": "(e -\u003e m a) -\u003e Handler (Either e a) a m a",
        "fct-source": "src/Control-Effects-Either.html#catchEither",
        "fct-type": "function",
        "title": "catchEither"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Effects Either",
        "module": "Control.Effects.Either",
        "name": "catchEither",
        "normalized": "(a-\u003eb c)-\u003eHandler(Either a c)c b c",
        "package": "effects",
        "partial": "Either",
        "signature": "(e-\u003em a)-\u003eHandler(Either e a)a m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects-Either.html#v:throwEither",
      "description": {
        "fct-module": "Control.Effects.Either",
        "fct-package": "effects",
        "fct-signature": "Effect (Either e r) m -\u003e e -\u003e n Void",
        "fct-source": "src/Control-Effects-Either.html#throwEither",
        "fct-type": "function",
        "title": "throwEither"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Effects Either",
        "module": "Control.Effects.Either",
        "name": "throwEither",
        "normalized": "Effect(Either a b)c-\u003ea-\u003ed Void",
        "package": "effects",
        "partial": "Either",
        "signature": "Effect(Either e r)m-\u003ee-\u003en Void"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects-Error.html#",
      "description": {
        "fct-module": "Control.Effects.Error",
        "fct-package": "effects",
        "fct-signature": "module",
        "fct-source": "src/Control-Effects-Error.html",
        "fct-type": "module",
        "title": "Error"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Effects Error",
        "module": "Control.Effects.Error",
        "name": "Error",
        "normalized": "",
        "package": "effects",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects-Error.html#v:catchError",
      "description": {
        "fct-module": "Control.Effects.Error",
        "fct-package": "effects",
        "fct-signature": "(e -\u003e m a) -\u003e Handler ((e -\u003e m a) -\u003e m a) a m a",
        "fct-source": "src/Control-Effects-Error.html#catchError",
        "fct-type": "function",
        "title": "catchError"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Effects Error",
        "module": "Control.Effects.Error",
        "name": "catchError",
        "normalized": "(a-\u003eb c)-\u003eHandler((a-\u003eb c)-\u003eb c)c b c",
        "package": "effects",
        "partial": "Error",
        "signature": "(e-\u003em a)-\u003eHandler((e-\u003em a)-\u003em a)a m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects-Error.html#v:throwError",
      "description": {
        "fct-module": "Control.Effects.Error",
        "fct-package": "effects",
        "fct-signature": "Effect ((e -\u003e m r) -\u003e m r) m -\u003e e -\u003e n Void",
        "fct-source": "src/Control-Effects-Error.html#throwError",
        "fct-type": "function",
        "title": "throwError"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Effects Error",
        "module": "Control.Effects.Error",
        "name": "throwError",
        "normalized": "Effect((a-\u003eb c)-\u003eb c)b-\u003ea-\u003ed Void",
        "package": "effects",
        "partial": "Error",
        "signature": "Effect((e-\u003em r)-\u003em r)m-\u003ee-\u003en Void"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects-NonDet.html#",
      "description": {
        "fct-module": "Control.Effects.NonDet",
        "fct-package": "effects",
        "fct-signature": "module",
        "fct-source": "src/Control-Effects-NonDet.html",
        "fct-type": "module",
        "title": "NonDet"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Effects NonDet",
        "module": "Control.Effects.NonDet",
        "name": "NonDet",
        "normalized": "",
        "package": "effects",
        "partial": "Non Det",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects-NonDet.html#v:accumulate",
      "description": {
        "fct-module": "Control.Effects.NonDet",
        "fct-package": "effects",
        "fct-signature": "(a -\u003e n) -\u003e Handler n o m a",
        "fct-source": "src/Control-Effects-NonDet.html#accumulate",
        "fct-type": "function",
        "title": "accumulate"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Effects NonDet",
        "module": "Control.Effects.NonDet",
        "name": "accumulate",
        "normalized": "(a-\u003eb)-\u003eHandler b c d a",
        "package": "effects",
        "partial": "",
        "signature": "(a-\u003en)-\u003eHandler n o m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects-NonDet.html#v:alternatives",
      "description": {
        "fct-module": "Control.Effects.NonDet",
        "fct-package": "effects",
        "fct-signature": "Handler (WrappedAlt f a) (f a) m a",
        "fct-source": "src/Control-Effects-NonDet.html#alternatives",
        "fct-type": "function",
        "title": "alternatives"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Effects NonDet",
        "module": "Control.Effects.NonDet",
        "name": "alternatives",
        "normalized": "",
        "package": "effects",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects-NonDet.html#v:bfs",
      "description": {
        "fct-module": "Control.Effects.NonDet",
        "fct-package": "effects",
        "fct-signature": "(a -\u003e r) -\u003e Handler (BFS r) r m a",
        "fct-source": "src/Control-Effects-NonDet.html#bfs",
        "fct-type": "function",
        "title": "bfs"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Effects NonDet",
        "module": "Control.Effects.NonDet",
        "name": "bfs",
        "normalized": "(a-\u003eb)-\u003eHandler(BFS b)b c a",
        "package": "effects",
        "partial": "",
        "signature": "(a-\u003er)-\u003eHandler(BFS r)r m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects-NonDet.html#v:choose",
      "description": {
        "fct-module": "Control.Effects.NonDet",
        "fct-package": "effects",
        "fct-signature": "Effect r m -\u003e f a -\u003e n a",
        "fct-source": "src/Control-Effects-NonDet.html#choose",
        "fct-type": "function",
        "title": "choose"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Effects NonDet",
        "module": "Control.Effects.NonDet",
        "name": "choose",
        "normalized": "Effect a b-\u003ec d-\u003ee d",
        "package": "effects",
        "partial": "",
        "signature": "Effect r m-\u003ef a-\u003en a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects-NonDet.html#v:dfs",
      "description": {
        "fct-module": "Control.Effects.NonDet",
        "fct-package": "effects",
        "fct-signature": "(a -\u003e r) -\u003e Handler r r m a",
        "fct-source": "src/Control-Effects-NonDet.html#dfs",
        "fct-type": "function",
        "title": "dfs"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Effects NonDet",
        "module": "Control.Effects.NonDet",
        "name": "dfs",
        "normalized": "(a-\u003eb)-\u003eHandler b b c a",
        "package": "effects",
        "partial": "",
        "signature": "(a-\u003er)-\u003eHandler r r m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects-NonDet.html#v:guard",
      "description": {
        "fct-module": "Control.Effects.NonDet",
        "fct-package": "effects",
        "fct-signature": "Effect r m -\u003e Bool -\u003e n ()",
        "fct-source": "src/Control-Effects-NonDet.html#guard",
        "fct-type": "function",
        "title": "guard"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Effects NonDet",
        "module": "Control.Effects.NonDet",
        "name": "guard",
        "normalized": "Effect a b-\u003eBool-\u003ec()",
        "package": "effects",
        "partial": "",
        "signature": "Effect r m-\u003eBool-\u003en()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects-NonDet.html#v:set",
      "description": {
        "fct-module": "Control.Effects.NonDet",
        "fct-package": "effects",
        "fct-signature": "Handler (Set a) (Set a) m a",
        "fct-source": "src/Control-Effects-NonDet.html#set",
        "fct-type": "function",
        "title": "set"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Effects NonDet",
        "module": "Control.Effects.NonDet",
        "name": "set",
        "normalized": "",
        "package": "effects",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects-State.html#",
      "description": {
        "fct-module": "Control.Effects.State",
        "fct-package": "effects",
        "fct-signature": "module",
        "fct-source": "src/Control-Effects-State.html",
        "fct-type": "module",
        "title": "State"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Effects State",
        "module": "Control.Effects.State",
        "name": "State",
        "normalized": "",
        "package": "effects",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects-State.html#t:State",
      "description": {
        "fct-module": "Control.Effects.State",
        "fct-package": "effects",
        "fct-signature": "type",
        "fct-source": "src/Control-Effects-State.html#State",
        "fct-type": "type",
        "title": "State"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Effects State",
        "module": "Control.Effects.State",
        "name": "State",
        "normalized": "",
        "package": "effects",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects-State.html#v:-61-:",
      "description": {
        "fct-module": "Control.Effects.State",
        "fct-package": "effects",
        "fct-signature": "Effect (State s m a) m -\u003e n s -\u003e n ()",
        "fct-source": "src/Control-Effects-State.html#%3D%3A",
        "fct-type": "function",
        "title": "(=:)"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Effects State",
        "module": "Control.Effects.State",
        "name": "(=:) =:",
        "normalized": "Effect(State a b c)b-\u003ed a-\u003ed()",
        "package": "effects",
        "partial": "",
        "signature": "Effect(State s m a)m-\u003en s-\u003en()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects-State.html#v:get",
      "description": {
        "fct-module": "Control.Effects.State",
        "fct-package": "effects",
        "fct-signature": "Effect (State s m a) m -\u003e n s",
        "fct-source": "src/Control-Effects-State.html#get",
        "fct-type": "function",
        "title": "get"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Effects State",
        "module": "Control.Effects.State",
        "name": "get",
        "normalized": "Effect(State a b c)b-\u003ed a",
        "package": "effects",
        "partial": "",
        "signature": "Effect(State s m a)m-\u003en s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects-State.html#v:local",
      "description": {
        "fct-module": "Control.Effects.State",
        "fct-package": "effects",
        "fct-signature": "Effect (State s m a) m -\u003e (s -\u003e s) -\u003e n b -\u003e n b",
        "fct-source": "src/Control-Effects-State.html#local",
        "fct-type": "function",
        "title": "local"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Effects State",
        "module": "Control.Effects.State",
        "name": "local",
        "normalized": "Effect(State a b c)b-\u003e(a-\u003ea)-\u003ed e-\u003ed e",
        "package": "effects",
        "partial": "",
        "signature": "Effect(State s m a)m-\u003e(s-\u003es)-\u003en b-\u003en b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects-State.html#v:modify",
      "description": {
        "fct-module": "Control.Effects.State",
        "fct-package": "effects",
        "fct-signature": "Effect (State s m a) m -\u003e (s -\u003e s) -\u003e n ()",
        "fct-source": "src/Control-Effects-State.html#modify",
        "fct-type": "function",
        "title": "modify"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Effects State",
        "module": "Control.Effects.State",
        "name": "modify",
        "normalized": "Effect(State a b c)b-\u003e(a-\u003ea)-\u003ed()",
        "package": "effects",
        "partial": "",
        "signature": "Effect(State s m a)m-\u003e(s-\u003es)-\u003en()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects-State.html#v:put",
      "description": {
        "fct-module": "Control.Effects.State",
        "fct-package": "effects",
        "fct-signature": "Effect (State s m a) m -\u003e s -\u003e n ()",
        "fct-source": "src/Control-Effects-State.html#put",
        "fct-type": "function",
        "title": "put"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Effects State",
        "module": "Control.Effects.State",
        "name": "put",
        "normalized": "Effect(State a b c)b-\u003ea-\u003ed()",
        "package": "effects",
        "partial": "",
        "signature": "Effect(State s m a)m-\u003es-\u003en()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects-State.html#v:ref",
      "description": {
        "fct-module": "Control.Effects.State",
        "fct-package": "effects",
        "fct-signature": "s -\u003e Handler (State s m a) a m a",
        "fct-source": "src/Control-Effects-State.html#ref",
        "fct-type": "function",
        "title": "ref"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Effects State",
        "module": "Control.Effects.State",
        "name": "ref",
        "normalized": "a-\u003eHandler(State a b c)c b c",
        "package": "effects",
        "partial": "",
        "signature": "s-\u003eHandler(State s m a)a m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects-Writer.html#",
      "description": {
        "fct-module": "Control.Effects.Writer",
        "fct-package": "effects",
        "fct-signature": "module",
        "fct-source": "src/Control-Effects-Writer.html",
        "fct-type": "module",
        "title": "Writer"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Effects Writer",
        "module": "Control.Effects.Writer",
        "name": "Writer",
        "normalized": "",
        "package": "effects",
        "partial": "Writer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects-Writer.html#v:tell",
      "description": {
        "fct-module": "Control.Effects.Writer",
        "fct-package": "effects",
        "fct-signature": "Effect (w, r) m -\u003e w -\u003e n ()",
        "fct-source": "src/Control-Effects-Writer.html#tell",
        "fct-type": "function",
        "title": "tell"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Effects Writer",
        "module": "Control.Effects.Writer",
        "name": "tell",
        "normalized": "Effect(a,b)c-\u003ea-\u003ed()",
        "package": "effects",
        "partial": "",
        "signature": "Effect(w,r)m-\u003ew-\u003en()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects-Writer.html#v:writer",
      "description": {
        "fct-module": "Control.Effects.Writer",
        "fct-package": "effects",
        "fct-signature": "Handler (w, a) (w, a) m a",
        "fct-source": "src/Control-Effects-Writer.html#writer",
        "fct-type": "function",
        "title": "writer"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Effects Writer",
        "module": "Control.Effects.Writer",
        "name": "writer",
        "normalized": "Handler(a,b)(a,b)c b",
        "package": "effects",
        "partial": "",
        "signature": "Handler(w,a)(w,a)m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects.html#",
      "description": {
        "fct-module": "Control.Effects",
        "fct-package": "effects",
        "fct-signature": "module",
        "fct-source": "src/Control-Effects.html",
        "fct-type": "module",
        "title": "Effects"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Effects",
        "module": "Control.Effects",
        "name": "Effects",
        "normalized": "",
        "package": "effects",
        "partial": "Effects",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects.html#t:AutoLift",
      "description": {
        "fct-module": "Control.Effects",
        "fct-package": "effects",
        "fct-signature": "class",
        "fct-source": "src/Control-Effects.html#AutoLift",
        "fct-type": "class",
        "title": "AutoLift"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Effects",
        "module": "Control.Effects",
        "name": "AutoLift",
        "normalized": "",
        "package": "effects",
        "partial": "Auto Lift",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects.html#t:AutoLiftBase",
      "description": {
        "fct-module": "Control.Effects",
        "fct-package": "effects",
        "fct-signature": "class",
        "fct-source": "src/Control-Effects.html#AutoLiftBase",
        "fct-type": "class",
        "title": "AutoLiftBase"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Effects",
        "module": "Control.Effects",
        "name": "AutoLiftBase",
        "normalized": "",
        "package": "effects",
        "partial": "Auto Lift Base",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects.html#t:Base",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eBase m\u003c/code\u003e is a newtype wrapper around a monadic computation.\n\u003c/p\u003e",
        "fct-module": "Control.Effects",
        "fct-package": "effects",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Effects.html#Base",
        "fct-type": "newtype",
        "title": "Base"
      },
      "index": {
        "description": "Base is newtype wrapper around monadic computation",
        "hierarchy": "Control Effects",
        "module": "Control.Effects",
        "name": "Base",
        "normalized": "",
        "package": "effects",
        "partial": "Base",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects.html#t:Effect",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eEffect e m\u003c/code\u003e is a proxy for the type checker to be able to work with multiple effects at the same time.\n\u003c/p\u003e",
        "fct-module": "Control.Effects",
        "fct-package": "effects",
        "fct-signature": "data",
        "fct-source": "src/Control-Effects.html#Effect",
        "fct-type": "data",
        "title": "Effect"
      },
      "index": {
        "description": "Effect is proxy for the type checker to be able to work with multiple effects at the same time",
        "hierarchy": "Control Effects",
        "module": "Control.Effects",
        "name": "Effect",
        "normalized": "",
        "package": "effects",
        "partial": "Effect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects.html#t:Handler",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eHandler e r m a\u003c/code\u003e is a handler of effects with type \u003ccode\u003ee\u003c/code\u003e. \n   The \u003ccode\u003eret\u003c/code\u003e field provides a function to lift pure values into the effect.\n   The \u003ccode\u003efin\u003c/code\u003e field provides a function to extract a final value of type \u003ccode\u003er\u003c/code\u003e from the effect.\n   The parameter \u003ccode\u003em\u003c/code\u003e should normally be left polymorphic, it's the monad that handles the other effects.\n\u003c/p\u003e",
        "fct-module": "Control.Effects",
        "fct-package": "effects",
        "fct-signature": "data",
        "fct-source": "src/Control-Effects.html#Handler",
        "fct-type": "data",
        "title": "Handler"
      },
      "index": {
        "description": "Handler is handler of effects with type The ret field provides function to lift pure values into the effect The fin field provides function to extract final value of type from the effect The parameter should normally be left polymorphic it the monad that handles the other effects",
        "hierarchy": "Control Effects",
        "module": "Control.Effects",
        "name": "Handler",
        "normalized": "",
        "package": "effects",
        "partial": "Handler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects.html#t:Layer",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eLayer e m\u003c/code\u003e is a monad that adds an effect \u003ccode\u003ee\u003c/code\u003e to the underlying monad \u003ccode\u003em\u003c/code\u003e.\n   (It is the continuation monad transformer with a friendlier name.)\n\u003c/p\u003e",
        "fct-module": "Control.Effects",
        "fct-package": "effects",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Effects.html#Layer",
        "fct-type": "newtype",
        "title": "Layer"
      },
      "index": {
        "description": "Layer is monad that adds an effect to the underlying monad It is the continuation monad transformer with friendlier name",
        "hierarchy": "Control Effects",
        "module": "Control.Effects",
        "name": "Layer",
        "normalized": "",
        "package": "effects",
        "partial": "Layer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects.html#t:Pure",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ePure\u003c/code\u003e is the identity monad and is used when no other base monad is needed.\n\u003c/p\u003e",
        "fct-module": "Control.Effects",
        "fct-package": "effects",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Effects.html#Pure",
        "fct-type": "newtype",
        "title": "Pure"
      },
      "index": {
        "description": "Pure is the identity monad and is used when no other base monad is needed",
        "hierarchy": "Control Effects",
        "module": "Control.Effects",
        "name": "Pure",
        "normalized": "",
        "package": "effects",
        "partial": "Pure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects.html#v:Base",
      "description": {
        "fct-module": "Control.Effects",
        "fct-package": "effects",
        "fct-signature": "Base (m a)",
        "fct-source": "src/Control-Effects.html#Base",
        "fct-type": "function",
        "title": "Base"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Effects",
        "module": "Control.Effects",
        "name": "Base",
        "normalized": "",
        "package": "effects",
        "partial": "Base",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects.html#v:Handler",
      "description": {
        "fct-module": "Control.Effects",
        "fct-package": "effects",
        "fct-signature": "Handler",
        "fct-source": "src/Control-Effects.html#Handler",
        "fct-type": "function",
        "title": "Handler"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Effects",
        "module": "Control.Effects",
        "name": "Handler",
        "normalized": "",
        "package": "effects",
        "partial": "Handler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects.html#v:Layer",
      "description": {
        "fct-module": "Control.Effects",
        "fct-package": "effects",
        "fct-signature": "Layer",
        "fct-source": "src/Control-Effects.html#Layer",
        "fct-type": "function",
        "title": "Layer"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Effects",
        "module": "Control.Effects",
        "name": "Layer",
        "normalized": "",
        "package": "effects",
        "partial": "Layer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects.html#v:Pure",
      "description": {
        "fct-module": "Control.Effects",
        "fct-package": "effects",
        "fct-signature": "Pure a",
        "fct-source": "src/Control-Effects.html#Pure",
        "fct-type": "function",
        "title": "Pure"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Effects",
        "module": "Control.Effects",
        "name": "Pure",
        "normalized": "",
        "package": "effects",
        "partial": "Pure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects.html#v:base",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ebase\u003c/code\u003e takes a computation in the base monad and auto-lifts it so it can be used inside any effect.\n\u003c/p\u003e",
        "fct-module": "Control.Effects",
        "fct-package": "effects",
        "fct-signature": "m a -\u003e n a",
        "fct-source": "src/Control-Effects.html#base",
        "fct-type": "function",
        "title": "base"
      },
      "index": {
        "description": "base takes computation in the base monad and auto-lifts it so it can be used inside any effect",
        "hierarchy": "Control Effects",
        "module": "Control.Effects",
        "name": "base",
        "normalized": "a b-\u003ec b",
        "package": "effects",
        "partial": "",
        "signature": "m a-\u003en a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects.html#v:fin",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Effects",
        "fct-package": "effects",
        "fct-signature": "e -\u003e m r",
        "fct-source": "src/Control-Effects.html#Handler",
        "fct-type": "function",
        "title": "fin"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Effects",
        "module": "Control.Effects",
        "name": "fin",
        "normalized": "a-\u003eb c",
        "package": "effects",
        "partial": "",
        "signature": "e-\u003em r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects.html#v:operation",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eoperation\u003c/code\u003e takes an effect identifier generated by \u003ccode\u003e\u003ca\u003ewith\u003c/a\u003e\u003c/code\u003e and a function which takes a continuation as parameter.\n   The result is auto-lifted so it can be used inside any other effect.\n\u003c/p\u003e",
        "fct-module": "Control.Effects",
        "fct-package": "effects",
        "fct-signature": "Effect e m -\u003e ((a -\u003e m e) -\u003e m e) -\u003e n a",
        "fct-source": "src/Control-Effects.html#operation",
        "fct-type": "function",
        "title": "operation"
      },
      "index": {
        "description": "operation takes an effect identifier generated by with and function which takes continuation as parameter The result is auto-lifted so it can be used inside any other effect",
        "hierarchy": "Control Effects",
        "module": "Control.Effects",
        "name": "operation",
        "normalized": "Effect a b-\u003e((c-\u003eb a)-\u003eb a)-\u003ed c",
        "package": "effects",
        "partial": "",
        "signature": "Effect e m-\u003e((a-\u003em e)-\u003em e)-\u003en a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects.html#v:ret",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Effects",
        "fct-package": "effects",
        "fct-signature": "a -\u003e m e",
        "fct-source": "src/Control-Effects.html#Handler",
        "fct-type": "function",
        "title": "ret"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Effects",
        "module": "Control.Effects",
        "name": "ret",
        "normalized": "a-\u003eb c",
        "package": "effects",
        "partial": "",
        "signature": "a-\u003em e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects.html#v:run",
      "description": {
        "fct-descr": "\u003cp\u003eUnwrap the result of the top-level effect.\n\u003c/p\u003e",
        "fct-module": "Control.Effects",
        "fct-package": "effects",
        "fct-signature": "Base Pure a -\u003e a",
        "fct-source": "src/Control-Effects.html#run",
        "fct-type": "function",
        "title": "run"
      },
      "index": {
        "description": "Unwrap the result of the top-level effect",
        "hierarchy": "Control Effects",
        "module": "Control.Effects",
        "name": "run",
        "normalized": "Base Pure a-\u003ea",
        "package": "effects",
        "partial": "",
        "signature": "Base Pure a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects.html#v:runBase",
      "description": {
        "fct-descr": "\u003cp\u003eUnwrap the result of a computation using a base monad.\n\u003c/p\u003e",
        "fct-module": "Control.Effects",
        "fct-package": "effects",
        "fct-signature": "Base m a -\u003e m a",
        "fct-source": "src/Control-Effects.html#runBase",
        "fct-type": "function",
        "title": "runBase"
      },
      "index": {
        "description": "Unwrap the result of computation using base monad",
        "hierarchy": "Control Effects",
        "module": "Control.Effects",
        "name": "runBase",
        "normalized": "Base a b-\u003ea b",
        "package": "effects",
        "partial": "Base",
        "signature": "Base m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects.html#v:runLayer",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Effects",
        "fct-package": "effects",
        "fct-signature": "(a -\u003e m e) -\u003e m e",
        "fct-source": "src/Control-Effects.html#Layer",
        "fct-type": "function",
        "title": "runLayer"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Effects",
        "module": "Control.Effects",
        "name": "runLayer",
        "normalized": "(a-\u003eb c)-\u003eb c",
        "package": "effects",
        "partial": "Layer",
        "signature": "(a-\u003em e)-\u003em e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects.html#v:with",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ewith\u003c/code\u003e takes a handler and creates a new effect instance.\n   The \u003ccode\u003eEffect\u003c/code\u003e is passed on to a function which can use it to do operations with it.\n\u003c/p\u003e",
        "fct-module": "Control.Effects",
        "fct-package": "effects",
        "fct-signature": "Handler e r m a -\u003e (Effect e m -\u003e Layer e m a) -\u003e m r",
        "fct-source": "src/Control-Effects.html#with",
        "fct-type": "function",
        "title": "with"
      },
      "index": {
        "description": "with takes handler and creates new effect instance The Effect is passed on to function which can use it to do operations with it",
        "hierarchy": "Control Effects",
        "module": "Control.Effects",
        "name": "with",
        "normalized": "Handler a b c d-\u003e(Effect a c-\u003eLayer a c d)-\u003ec b",
        "package": "effects",
        "partial": "",
        "signature": "Handler e r m a-\u003e(Effect e m-\u003eLayer e m a)-\u003em r"
      }
    }
  }
]