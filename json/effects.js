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
        "word": "effects"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Effects.Cont",
          "name": "Cont",
          "package": "effects",
          "source": "src/Control-Effects-Cont.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Effects Cont",
          "module": "Control.Effects.Cont",
          "name": "Cont",
          "package": "effects",
          "partial": "Cont",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects-Cont.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Effects.Cont",
          "name": "reset",
          "package": "effects",
          "signature": "Handler a a m a",
          "source": "src/Control-Effects-Cont.html#reset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Effects Cont",
          "module": "Control.Effects.Cont",
          "name": "reset",
          "package": "effects",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects-Cont.html#v:reset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Effects.Cont",
          "name": "shift",
          "package": "effects",
          "signature": "Effect r m -\u003e ((m a -\u003e m r) -\u003e m r) -\u003e n a",
          "source": "src/Control-Effects-Cont.html#shift",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Effects Cont",
          "module": "Control.Effects.Cont",
          "name": "shift",
          "normalized": "Effect a b-\u003e((b c-\u003eb a)-\u003eb a)-\u003ed c",
          "package": "effects",
          "signature": "Effect r m-\u003e((m a-\u003em r)-\u003em r)-\u003en a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects-Cont.html#v:shift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Effects.Either",
          "name": "Either",
          "package": "effects",
          "source": "src/Control-Effects-Either.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Effects Either",
          "module": "Control.Effects.Either",
          "name": "Either",
          "package": "effects",
          "partial": "Either",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects-Either.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Effects.Either",
          "name": "catchEither",
          "package": "effects",
          "signature": "(e -\u003e m a) -\u003e Handler (Either e a) a m a",
          "source": "src/Control-Effects-Either.html#catchEither",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Effects Either",
          "module": "Control.Effects.Either",
          "name": "catchEither",
          "normalized": "(a-\u003eb c)-\u003eHandler(Either a c)c b c",
          "package": "effects",
          "partial": "Either",
          "signature": "(e-\u003em a)-\u003eHandler(Either e a)a m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects-Either.html#v:catchEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Effects.Either",
          "name": "throwEither",
          "package": "effects",
          "signature": "Effect (Either e r) m -\u003e e -\u003e n Void",
          "source": "src/Control-Effects-Either.html#throwEither",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Effects Either",
          "module": "Control.Effects.Either",
          "name": "throwEither",
          "normalized": "Effect(Either a b)c-\u003ea-\u003ed Void",
          "package": "effects",
          "partial": "Either",
          "signature": "Effect(Either e r)m-\u003ee-\u003en Void",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects-Either.html#v:throwEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Effects.Error",
          "name": "Error",
          "package": "effects",
          "source": "src/Control-Effects-Error.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Effects Error",
          "module": "Control.Effects.Error",
          "name": "Error",
          "package": "effects",
          "partial": "Error",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects-Error.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Effects.Error",
          "name": "catchError",
          "package": "effects",
          "signature": "(e -\u003e m a) -\u003e Handler ((e -\u003e m a) -\u003e m a) a m a",
          "source": "src/Control-Effects-Error.html#catchError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Effects Error",
          "module": "Control.Effects.Error",
          "name": "catchError",
          "normalized": "(a-\u003eb c)-\u003eHandler((a-\u003eb c)-\u003eb c)c b c",
          "package": "effects",
          "partial": "Error",
          "signature": "(e-\u003em a)-\u003eHandler((e-\u003em a)-\u003em a)a m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects-Error.html#v:catchError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Effects.Error",
          "name": "throwError",
          "package": "effects",
          "signature": "Effect ((e -\u003e m r) -\u003e m r) m -\u003e e -\u003e n Void",
          "source": "src/Control-Effects-Error.html#throwError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Effects Error",
          "module": "Control.Effects.Error",
          "name": "throwError",
          "normalized": "Effect((a-\u003eb c)-\u003eb c)b-\u003ea-\u003ed Void",
          "package": "effects",
          "partial": "Error",
          "signature": "Effect((e-\u003em r)-\u003em r)m-\u003ee-\u003en Void",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects-Error.html#v:throwError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Effects.NonDet",
          "name": "NonDet",
          "package": "effects",
          "source": "src/Control-Effects-NonDet.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Effects NonDet",
          "module": "Control.Effects.NonDet",
          "name": "NonDet",
          "package": "effects",
          "partial": "Non Det",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects-NonDet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Effects.NonDet",
          "name": "accumulate",
          "package": "effects",
          "signature": "(a -\u003e n) -\u003e Handler n o m a",
          "source": "src/Control-Effects-NonDet.html#accumulate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Effects NonDet",
          "module": "Control.Effects.NonDet",
          "name": "accumulate",
          "normalized": "(a-\u003eb)-\u003eHandler b c d a",
          "package": "effects",
          "signature": "(a-\u003en)-\u003eHandler n o m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects-NonDet.html#v:accumulate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Effects.NonDet",
          "name": "alternatives",
          "package": "effects",
          "signature": "Handler (WrappedAlt f a) (f a) m a",
          "source": "src/Control-Effects-NonDet.html#alternatives",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Effects NonDet",
          "module": "Control.Effects.NonDet",
          "name": "alternatives",
          "package": "effects",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects-NonDet.html#v:alternatives"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Effects.NonDet",
          "name": "bfs",
          "package": "effects",
          "signature": "(a -\u003e r) -\u003e Handler (BFS r) r m a",
          "source": "src/Control-Effects-NonDet.html#bfs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Effects NonDet",
          "module": "Control.Effects.NonDet",
          "name": "bfs",
          "normalized": "(a-\u003eb)-\u003eHandler(BFS b)b c a",
          "package": "effects",
          "signature": "(a-\u003er)-\u003eHandler(BFS r)r m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects-NonDet.html#v:bfs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Effects.NonDet",
          "name": "choose",
          "package": "effects",
          "signature": "Effect r m -\u003e f a -\u003e n a",
          "source": "src/Control-Effects-NonDet.html#choose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Effects NonDet",
          "module": "Control.Effects.NonDet",
          "name": "choose",
          "normalized": "Effect a b-\u003ec d-\u003ee d",
          "package": "effects",
          "signature": "Effect r m-\u003ef a-\u003en a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects-NonDet.html#v:choose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Effects.NonDet",
          "name": "dfs",
          "package": "effects",
          "signature": "(a -\u003e r) -\u003e Handler r r m a",
          "source": "src/Control-Effects-NonDet.html#dfs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Effects NonDet",
          "module": "Control.Effects.NonDet",
          "name": "dfs",
          "normalized": "(a-\u003eb)-\u003eHandler b b c a",
          "package": "effects",
          "signature": "(a-\u003er)-\u003eHandler r r m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects-NonDet.html#v:dfs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Effects.NonDet",
          "name": "guard",
          "package": "effects",
          "signature": "Effect r m -\u003e Bool -\u003e n ()",
          "source": "src/Control-Effects-NonDet.html#guard",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Effects NonDet",
          "module": "Control.Effects.NonDet",
          "name": "guard",
          "normalized": "Effect a b-\u003eBool-\u003ec()",
          "package": "effects",
          "signature": "Effect r m-\u003eBool-\u003en()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects-NonDet.html#v:guard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Effects.NonDet",
          "name": "set",
          "package": "effects",
          "signature": "Handler (Set a) (Set a) m a",
          "source": "src/Control-Effects-NonDet.html#set",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Effects NonDet",
          "module": "Control.Effects.NonDet",
          "name": "set",
          "package": "effects",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects-NonDet.html#v:set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Effects.State",
          "name": "State",
          "package": "effects",
          "source": "src/Control-Effects-State.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Effects State",
          "module": "Control.Effects.State",
          "name": "State",
          "package": "effects",
          "partial": "State",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects-State.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Effects.State",
          "name": "State",
          "package": "effects",
          "source": "src/Control-Effects-State.html#State",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Effects State",
          "module": "Control.Effects.State",
          "name": "State",
          "package": "effects",
          "partial": "State",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects-State.html#t:State"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Effects.State",
          "name": "(=:)",
          "package": "effects",
          "signature": "Effect (State s m a) m -\u003e n s -\u003e n ()",
          "source": "src/Control-Effects-State.html#%3D%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Effects State",
          "module": "Control.Effects.State",
          "name": "(=:) =:",
          "normalized": "Effect(State a b c)b-\u003ed a-\u003ed()",
          "package": "effects",
          "signature": "Effect(State s m a)m-\u003en s-\u003en()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects-State.html#v:-61-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Effects.State",
          "name": "get",
          "package": "effects",
          "signature": "Effect (State s m a) m -\u003e n s",
          "source": "src/Control-Effects-State.html#get",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Effects State",
          "module": "Control.Effects.State",
          "name": "get",
          "normalized": "Effect(State a b c)b-\u003ed a",
          "package": "effects",
          "signature": "Effect(State s m a)m-\u003en s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects-State.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Effects.State",
          "name": "local",
          "package": "effects",
          "signature": "Effect (State s m a) m -\u003e (s -\u003e s) -\u003e n b -\u003e n b",
          "source": "src/Control-Effects-State.html#local",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Effects State",
          "module": "Control.Effects.State",
          "name": "local",
          "normalized": "Effect(State a b c)b-\u003e(a-\u003ea)-\u003ed e-\u003ed e",
          "package": "effects",
          "signature": "Effect(State s m a)m-\u003e(s-\u003es)-\u003en b-\u003en b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects-State.html#v:local"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Effects.State",
          "name": "modify",
          "package": "effects",
          "signature": "Effect (State s m a) m -\u003e (s -\u003e s) -\u003e n ()",
          "source": "src/Control-Effects-State.html#modify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Effects State",
          "module": "Control.Effects.State",
          "name": "modify",
          "normalized": "Effect(State a b c)b-\u003e(a-\u003ea)-\u003ed()",
          "package": "effects",
          "signature": "Effect(State s m a)m-\u003e(s-\u003es)-\u003en()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects-State.html#v:modify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Effects.State",
          "name": "put",
          "package": "effects",
          "signature": "Effect (State s m a) m -\u003e s -\u003e n ()",
          "source": "src/Control-Effects-State.html#put",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Effects State",
          "module": "Control.Effects.State",
          "name": "put",
          "normalized": "Effect(State a b c)b-\u003ea-\u003ed()",
          "package": "effects",
          "signature": "Effect(State s m a)m-\u003es-\u003en()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects-State.html#v:put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Effects.State",
          "name": "ref",
          "package": "effects",
          "signature": "s -\u003e Handler (State s m a) a m a",
          "source": "src/Control-Effects-State.html#ref",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Effects State",
          "module": "Control.Effects.State",
          "name": "ref",
          "normalized": "a-\u003eHandler(State a b c)c b c",
          "package": "effects",
          "signature": "s-\u003eHandler(State s m a)a m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects-State.html#v:ref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Effects.Writer",
          "name": "Writer",
          "package": "effects",
          "source": "src/Control-Effects-Writer.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Effects Writer",
          "module": "Control.Effects.Writer",
          "name": "Writer",
          "package": "effects",
          "partial": "Writer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects-Writer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Effects.Writer",
          "name": "tell",
          "package": "effects",
          "signature": "Effect (w, r) m -\u003e w -\u003e n ()",
          "source": "src/Control-Effects-Writer.html#tell",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Effects Writer",
          "module": "Control.Effects.Writer",
          "name": "tell",
          "normalized": "Effect(a,b)c-\u003ea-\u003ed()",
          "package": "effects",
          "signature": "Effect(w,r)m-\u003ew-\u003en()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects-Writer.html#v:tell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Effects.Writer",
          "name": "writer",
          "package": "effects",
          "signature": "Handler (w, a) (w, a) m a",
          "source": "src/Control-Effects-Writer.html#writer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Effects Writer",
          "module": "Control.Effects.Writer",
          "name": "writer",
          "normalized": "Handler(a,b)(a,b)c b",
          "package": "effects",
          "signature": "Handler(w,a)(w,a)m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects-Writer.html#v:writer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Effects",
          "name": "Effects",
          "package": "effects",
          "source": "src/Control-Effects.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Effects",
          "module": "Control.Effects",
          "name": "Effects",
          "package": "effects",
          "partial": "Effects",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Effects",
          "name": "AutoLift",
          "package": "effects",
          "source": "src/Control-Effects.html#AutoLift",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Effects",
          "module": "Control.Effects",
          "name": "AutoLift",
          "package": "effects",
          "partial": "Auto Lift",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects.html#t:AutoLift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Effects",
          "name": "AutoLiftBase",
          "package": "effects",
          "source": "src/Control-Effects.html#AutoLiftBase",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Effects",
          "module": "Control.Effects",
          "name": "AutoLiftBase",
          "package": "effects",
          "partial": "Auto Lift Base",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects.html#t:AutoLiftBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eBase m\u003c/code\u003e is a newtype wrapper around a monadic computation.\n\u003c/p\u003e",
          "module": "Control.Effects",
          "name": "Base",
          "package": "effects",
          "source": "src/Control-Effects.html#Base",
          "type": "newtype"
        },
        "index": {
          "description": "Base is newtype wrapper around monadic computation",
          "hierarchy": "Control Effects",
          "module": "Control.Effects",
          "name": "Base",
          "package": "effects",
          "partial": "Base",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects.html#t:Base"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eEffect e m\u003c/code\u003e is a proxy for the type checker to be able to work with multiple effects at the same time.\n\u003c/p\u003e",
          "module": "Control.Effects",
          "name": "Effect",
          "package": "effects",
          "source": "src/Control-Effects.html#Effect",
          "type": "data"
        },
        "index": {
          "description": "Effect is proxy for the type checker to be able to work with multiple effects at the same time",
          "hierarchy": "Control Effects",
          "module": "Control.Effects",
          "name": "Effect",
          "package": "effects",
          "partial": "Effect",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects.html#t:Effect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003eHandler e r m a\u003c/code\u003e is a handler of effects with type \u003ccode\u003ee\u003c/code\u003e. \n   The \u003ccode\u003eret\u003c/code\u003e field provides a function to lift pure values into the effect.\n   The \u003ccode\u003efin\u003c/code\u003e field provides a function to extract a final value of type \u003ccode\u003er\u003c/code\u003e from the effect.\n   The parameter \u003ccode\u003em\u003c/code\u003e should normally be left polymorphic, it's the monad that handles the other effects.\n\u003c/p\u003e",
          "module": "Control.Effects",
          "name": "Handler",
          "package": "effects",
          "source": "src/Control-Effects.html#Handler",
          "type": "data"
        },
        "index": {
          "description": "Handler is handler of effects with type The ret field provides function to lift pure values into the effect The fin field provides function to extract final value of type from the effect The parameter should normally be left polymorphic it the monad that handles the other effects",
          "hierarchy": "Control Effects",
          "module": "Control.Effects",
          "name": "Handler",
          "package": "effects",
          "partial": "Handler",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects.html#t:Handler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eLayer e m\u003c/code\u003e is a monad that adds an effect \u003ccode\u003ee\u003c/code\u003e to the underlying monad \u003ccode\u003em\u003c/code\u003e.\n   (It is the continuation monad transformer with a friendlier name.)\n\u003c/p\u003e",
          "module": "Control.Effects",
          "name": "Layer",
          "package": "effects",
          "source": "src/Control-Effects.html#Layer",
          "type": "newtype"
        },
        "index": {
          "description": "Layer is monad that adds an effect to the underlying monad It is the continuation monad transformer with friendlier name",
          "hierarchy": "Control Effects",
          "module": "Control.Effects",
          "name": "Layer",
          "package": "effects",
          "partial": "Layer",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects.html#t:Layer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ePure\u003c/code\u003e is the identity monad and is used when no other base monad is needed.\n\u003c/p\u003e",
          "module": "Control.Effects",
          "name": "Pure",
          "package": "effects",
          "source": "src/Control-Effects.html#Pure",
          "type": "newtype"
        },
        "index": {
          "description": "Pure is the identity monad and is used when no other base monad is needed",
          "hierarchy": "Control Effects",
          "module": "Control.Effects",
          "name": "Pure",
          "package": "effects",
          "partial": "Pure",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects.html#t:Pure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Effects",
          "name": "Base",
          "package": "effects",
          "signature": "Base (m a)",
          "source": "src/Control-Effects.html#Base",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Effects",
          "module": "Control.Effects",
          "name": "Base",
          "package": "effects",
          "partial": "Base",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects.html#v:Base"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Effects",
          "name": "Handler",
          "package": "effects",
          "signature": "Handler",
          "source": "src/Control-Effects.html#Handler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Effects",
          "module": "Control.Effects",
          "name": "Handler",
          "package": "effects",
          "partial": "Handler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects.html#v:Handler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Effects",
          "name": "Layer",
          "package": "effects",
          "signature": "Layer",
          "source": "src/Control-Effects.html#Layer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Effects",
          "module": "Control.Effects",
          "name": "Layer",
          "package": "effects",
          "partial": "Layer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects.html#v:Layer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Effects",
          "name": "Pure",
          "package": "effects",
          "signature": "Pure a",
          "source": "src/Control-Effects.html#Pure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Effects",
          "module": "Control.Effects",
          "name": "Pure",
          "package": "effects",
          "partial": "Pure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects.html#v:Pure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ebase\u003c/code\u003e takes a computation in the base monad and auto-lifts it so it can be used inside any effect.\n\u003c/p\u003e",
          "module": "Control.Effects",
          "name": "base",
          "package": "effects",
          "signature": "m a -\u003e n a",
          "source": "src/Control-Effects.html#base",
          "type": "function"
        },
        "index": {
          "description": "base takes computation in the base monad and auto-lifts it so it can be used inside any effect",
          "hierarchy": "Control Effects",
          "module": "Control.Effects",
          "name": "base",
          "normalized": "a b-\u003ec b",
          "package": "effects",
          "signature": "m a-\u003en a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects.html#v:base"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Effects",
          "name": "fin",
          "package": "effects",
          "signature": "e -\u003e m r",
          "source": "src/Control-Effects.html#Handler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Effects",
          "module": "Control.Effects",
          "name": "fin",
          "normalized": "a-\u003eb c",
          "package": "effects",
          "signature": "e-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects.html#v:fin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eoperation\u003c/code\u003e takes an effect identifier generated by \u003ccode\u003e\u003ca\u003ewith\u003c/a\u003e\u003c/code\u003e and a function which takes a continuation as parameter.\n   The result is auto-lifted so it can be used inside any other effect.\n\u003c/p\u003e",
          "module": "Control.Effects",
          "name": "operation",
          "package": "effects",
          "signature": "Effect e m -\u003e ((a -\u003e m e) -\u003e m e) -\u003e n a",
          "source": "src/Control-Effects.html#operation",
          "type": "function"
        },
        "index": {
          "description": "operation takes an effect identifier generated by with and function which takes continuation as parameter The result is auto-lifted so it can be used inside any other effect",
          "hierarchy": "Control Effects",
          "module": "Control.Effects",
          "name": "operation",
          "normalized": "Effect a b-\u003e((c-\u003eb a)-\u003eb a)-\u003ed c",
          "package": "effects",
          "signature": "Effect e m-\u003e((a-\u003em e)-\u003em e)-\u003en a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects.html#v:operation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Effects",
          "name": "ret",
          "package": "effects",
          "signature": "a -\u003e m e",
          "source": "src/Control-Effects.html#Handler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Effects",
          "module": "Control.Effects",
          "name": "ret",
          "normalized": "a-\u003eb c",
          "package": "effects",
          "signature": "a-\u003em e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects.html#v:ret"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwrap the result of the top-level effect.\n\u003c/p\u003e",
          "module": "Control.Effects",
          "name": "run",
          "package": "effects",
          "signature": "Base Pure a -\u003e a",
          "source": "src/Control-Effects.html#run",
          "type": "function"
        },
        "index": {
          "description": "Unwrap the result of the top-level effect",
          "hierarchy": "Control Effects",
          "module": "Control.Effects",
          "name": "run",
          "normalized": "Base Pure a-\u003ea",
          "package": "effects",
          "signature": "Base Pure a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwrap the result of a computation using a base monad.\n\u003c/p\u003e",
          "module": "Control.Effects",
          "name": "runBase",
          "package": "effects",
          "signature": "Base m a -\u003e m a",
          "source": "src/Control-Effects.html#runBase",
          "type": "function"
        },
        "index": {
          "description": "Unwrap the result of computation using base monad",
          "hierarchy": "Control Effects",
          "module": "Control.Effects",
          "name": "runBase",
          "normalized": "Base a b-\u003ea b",
          "package": "effects",
          "partial": "Base",
          "signature": "Base m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects.html#v:runBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Effects",
          "name": "runLayer",
          "package": "effects",
          "signature": "(a -\u003e m e) -\u003e m e",
          "source": "src/Control-Effects.html#Layer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Effects",
          "module": "Control.Effects",
          "name": "runLayer",
          "normalized": "(a-\u003eb c)-\u003eb c",
          "package": "effects",
          "partial": "Layer",
          "signature": "(a-\u003em e)-\u003em e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects.html#v:runLayer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ewith\u003c/code\u003e takes a handler and creates a new effect instance.\n   The \u003ccode\u003eEffect\u003c/code\u003e is passed on to a function which can use it to do operations with it.\n\u003c/p\u003e",
          "module": "Control.Effects",
          "name": "with",
          "package": "effects",
          "signature": "Handler e r m a -\u003e (Effect e m -\u003e Layer e m a) -\u003e m r",
          "source": "src/Control-Effects.html#with",
          "type": "function"
        },
        "index": {
          "description": "with takes handler and creates new effect instance The Effect is passed on to function which can use it to do operations with it",
          "hierarchy": "Control Effects",
          "module": "Control.Effects",
          "name": "with",
          "normalized": "Handler a b c d-\u003e(Effect a c-\u003eLayer a c d)-\u003ec b",
          "package": "effects",
          "signature": "Handler e r m a-\u003e(Effect e m-\u003eLayer e m a)-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/effects/docs/Control-Effects.html#v:with"
      }
    }
  ]
]