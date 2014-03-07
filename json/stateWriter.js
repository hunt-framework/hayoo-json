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
        "word": "stateWriter"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLazy RSS monad.\n\u003c/p\u003e\u003cp\u003eThis is a variant of the classic \u003ca\u003eControl.Monad..RWS.Lazy\u003c/a\u003e transformer,\n where the Writer part rides with the State part.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.RSS.Lazy",
          "name": "Lazy",
          "package": "stateWriter",
          "source": "src/Control-Monad-RSS-Lazy.html",
          "type": "module"
        },
        "index": {
          "description": "Lazy RSS monad This is variant of the classic Control.Monad..RWS.Lazy transformer where the Writer part rides with the State part",
          "hierarchy": "Control Monad RSS Lazy",
          "module": "Control.Monad.RSS.Lazy",
          "name": "Lazy",
          "package": "stateWriter",
          "partial": "Lazy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-RSS-Lazy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad containing an environment of type \u003ccode\u003er\u003c/code\u003e, output of type \u003ccode\u003ew\u003c/code\u003e\n and an updatable state of type \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.RSS.Lazy",
          "name": "RSS",
          "package": "stateWriter",
          "source": "src/Control-Monad-Trans-RSS-Lazy.html#RSS",
          "type": "type"
        },
        "index": {
          "description": "monad containing an environment of type output of type and an updatable state of type",
          "hierarchy": "Control Monad RSS Lazy",
          "module": "Control.Monad.RSS.Lazy",
          "name": "RSS",
          "package": "stateWriter",
          "partial": "RSS",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-RSS-Lazy.html#t:RSS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad transformer adding reading an environment of type \u003ccode\u003er\u003c/code\u003e,\n collecting an output of type \u003ccode\u003ew\u003c/code\u003e and updating a state of type \u003ccode\u003es\u003c/code\u003e\n to an inner monad \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.RSS.Lazy",
          "name": "RSST",
          "package": "stateWriter",
          "source": "src/Control-Monad-Trans-RSS-Lazy.html#RSST",
          "type": "data"
        },
        "index": {
          "description": "monad transformer adding reading an environment of type collecting an output of type and updating state of type to an inner monad",
          "hierarchy": "Control Monad RSS Lazy",
          "module": "Control.Monad.RSS.Lazy",
          "name": "RSST",
          "package": "stateWriter",
          "partial": "RSST",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-RSS-Lazy.html#t:RSST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a computation with the given initial state and environment,\n returning the final value and output, discarding the final state.\n\u003c/p\u003e",
          "module": "[\"Control.Monad.RSS.Lazy\",\"Control.Monad.RSS.Strict\",\"Control.Monad.Trans.RSS.Lazy\",\"Control.Monad.Trans.RSS.Strict\"]",
          "name": "evalRSS",
          "package": "stateWriter",
          "signature": "RSS r w s a-\u003e r-\u003e s-\u003e (a, w)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-RSS-Lazy.html#v:evalRSS\",\"http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-RSS-Strict.html#v:evalRSS\",\"http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-Trans-RSS-Lazy.html#v:evalRSS\",\"http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-Trans-RSS-Strict.html#v:evalRSS\"]"
        },
        "index": {
          "description": "Evaluate computation with the given initial state and environment returning the final value and output discarding the final state",
          "hierarchy": "Control Monad RSS Lazy",
          "module": "Control.Monad.RSS.Lazy",
          "name": "evalRSS",
          "normalized": "RSS a b c d-\u003ea-\u003ec-\u003e(d,b)",
          "package": "stateWriter",
          "partial": "RSS",
          "signature": "RSS r w s a-\u003er-\u003es-\u003e(a,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-RSS-Lazy.html#v:evalRSS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a computation with the given initial state and environment,\n returning the final value and output, discarding the final state.\n\u003c/p\u003e",
          "module": "[\"Control.Monad.RSS.Lazy\",\"Control.Monad.RSS.Strict\",\"Control.Monad.Trans.RSS.Lazy\",\"Control.Monad.Trans.RSS.Strict\"]",
          "name": "evalRSST",
          "package": "stateWriter",
          "signature": "RSST r w s m a-\u003e r-\u003e s-\u003e m (a, w)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-RSS-Lazy.html#v:evalRSST\",\"http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-RSS-Strict.html#v:evalRSST\",\"http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-Trans-RSS-Lazy.html#v:evalRSST\",\"http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-Trans-RSS-Strict.html#v:evalRSST\"]"
        },
        "index": {
          "description": "Evaluate computation with the given initial state and environment returning the final value and output discarding the final state",
          "hierarchy": "Control Monad RSS Lazy",
          "module": "Control.Monad.RSS.Lazy",
          "name": "evalRSST",
          "normalized": "RSST a b c d e-\u003ea-\u003ec-\u003ed(e,b)",
          "package": "stateWriter",
          "partial": "RSST",
          "signature": "RSST r w s m a-\u003er-\u003es-\u003em(a,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-RSS-Lazy.html#v:evalRSST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a computation with the given initial state and environment,\n returning the final state and output, discarding the final value.\n\u003c/p\u003e",
          "module": "[\"Control.Monad.RSS.Lazy\",\"Control.Monad.RSS.Strict\",\"Control.Monad.Trans.RSS.Lazy\",\"Control.Monad.Trans.RSS.Strict\"]",
          "name": "execRSS",
          "package": "stateWriter",
          "signature": "RSS r w s a-\u003e r-\u003e s-\u003e (s, w)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-RSS-Lazy.html#v:execRSS\",\"http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-RSS-Strict.html#v:execRSS\",\"http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-Trans-RSS-Lazy.html#v:execRSS\",\"http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-Trans-RSS-Strict.html#v:execRSS\"]"
        },
        "index": {
          "description": "Evaluate computation with the given initial state and environment returning the final state and output discarding the final value",
          "hierarchy": "Control Monad RSS Lazy",
          "module": "Control.Monad.RSS.Lazy",
          "name": "execRSS",
          "normalized": "RSS a b c d-\u003ea-\u003ec-\u003e(c,b)",
          "package": "stateWriter",
          "partial": "RSS",
          "signature": "RSS r w s a-\u003er-\u003es-\u003e(s,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-RSS-Lazy.html#v:execRSS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a computation with the given initial state and environment,\n returning the final state and output, discarding the final value.\n\u003c/p\u003e",
          "module": "[\"Control.Monad.RSS.Lazy\",\"Control.Monad.RSS.Strict\",\"Control.Monad.Trans.RSS.Lazy\",\"Control.Monad.Trans.RSS.Strict\"]",
          "name": "execRSST",
          "package": "stateWriter",
          "signature": "RSST r w s m a-\u003e r-\u003e s-\u003e m (s, w)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-RSS-Lazy.html#v:execRSST\",\"http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-RSS-Strict.html#v:execRSST\",\"http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-Trans-RSS-Lazy.html#v:execRSST\",\"http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-Trans-RSS-Strict.html#v:execRSST\"]"
        },
        "index": {
          "description": "Evaluate computation with the given initial state and environment returning the final state and output discarding the final value",
          "hierarchy": "Control Monad RSS Lazy",
          "module": "Control.Monad.RSS.Lazy",
          "name": "execRSST",
          "normalized": "RSST a b c d e-\u003ea-\u003ec-\u003ed(c,b)",
          "package": "stateWriter",
          "partial": "RSST",
          "signature": "RSST r w s m a-\u003er-\u003es-\u003em(s,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-RSS-Lazy.html#v:execRSST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an RSS computation from a function.\n (The inverse of \u003ccode\u003e\u003ca\u003erunRSS\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
          "module": "[\"Control.Monad.RSS.Lazy\",\"Control.Monad.Trans.RSS.Lazy\"]",
          "name": "rss",
          "package": "stateWriter",
          "signature": "(r -\u003e s -\u003e (a, s, w)) -\u003e RSS r w s a",
          "source": "src/Control-Monad-Trans-RSS-Lazy.html#rss",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-RSS-Lazy.html#v:rss\",\"http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-Trans-RSS-Lazy.html#v:rss\"]"
        },
        "index": {
          "description": "Construct an RSS computation from function The inverse of runRSS",
          "hierarchy": "Control Monad RSS Lazy",
          "module": "Control.Monad.RSS.Lazy",
          "name": "rss",
          "normalized": "(a-\u003eb-\u003e(c,b,d))-\u003eRSS a d b c",
          "package": "stateWriter",
          "signature": "(r-\u003es-\u003e(a,s,w))-\u003eRSS r w s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-RSS-Lazy.html#v:rss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwrap an RSS computation as a function.\n (The inverse of \u003ccode\u003e\u003ca\u003erws\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
          "module": "[\"Control.Monad.RSS.Lazy\",\"Control.Monad.Trans.RSS.Lazy\"]",
          "name": "runRSS",
          "package": "stateWriter",
          "signature": "RSS r w s a -\u003e r -\u003e s -\u003e (a, s, w)",
          "source": "src/Control-Monad-Trans-RSS-Lazy.html#runRSS",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-RSS-Lazy.html#v:runRSS\",\"http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-Trans-RSS-Lazy.html#v:runRSS\"]"
        },
        "index": {
          "description": "Unwrap an RSS computation as function The inverse of rws",
          "hierarchy": "Control Monad RSS Lazy",
          "module": "Control.Monad.RSS.Lazy",
          "name": "runRSS",
          "normalized": "RSS a b c d-\u003ea-\u003ec-\u003e(d,c,b)",
          "package": "stateWriter",
          "partial": "RSS",
          "signature": "RSS r w s a-\u003er-\u003es-\u003e(a,s,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-RSS-Lazy.html#v:runRSS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Monad.RSS.Lazy\",\"Control.Monad.Trans.RSS.Lazy\"]",
          "name": "withRSS",
          "package": "stateWriter",
          "signature": "(r' -\u003e s -\u003e (r, s)) -\u003e RSS r w s a -\u003e RSS r' w s a",
          "source": "src/Control-Monad-Trans-RSS-Lazy.html#withRSS",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-RSS-Lazy.html#v:withRSS\",\"http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-Trans-RSS-Lazy.html#v:withRSS\"]"
        },
        "index": {
          "hierarchy": "Control Monad RSS Lazy",
          "module": "Control.Monad.RSS.Lazy",
          "name": "withRSS",
          "normalized": "(a-\u003eb-\u003e(c,b))-\u003eRSS c d b e-\u003eRSS a d b e",
          "package": "stateWriter",
          "partial": "RSS",
          "signature": "(r'-\u003es-\u003e(r,s))-\u003eRSS r w s a-\u003eRSS r' w s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-RSS-Lazy.html#v:withRSS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ewithRSST\u003c/a\u003e\u003c/code\u003e f m\u003c/code\u003e executes action \u003ccode\u003em\u003c/code\u003e with an initial environment\n and state modified by applying \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunRSST\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ewithRSST\u003c/a\u003e\u003c/code\u003e f m) r s = \u003ccode\u003e\u003ca\u003euncurry\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunRSST\u003c/a\u003e\u003c/code\u003e m) (f r s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Control.Monad.RSS.Lazy\",\"Control.Monad.Trans.RSS.Lazy\"]",
          "name": "withRSST",
          "package": "stateWriter",
          "signature": "(r' -\u003e s -\u003e (r, s)) -\u003e RSST r w s m a -\u003e RSST r' w s m a",
          "source": "src/Control-Monad-Trans-RSS-Lazy.html#withRSST",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-RSS-Lazy.html#v:withRSST\",\"http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-Trans-RSS-Lazy.html#v:withRSST\"]"
        },
        "index": {
          "description": "withRSST executes action with an initial environment and state modified by applying runRSST withRSST uncurry runRSST",
          "hierarchy": "Control Monad RSS Lazy",
          "module": "Control.Monad.RSS.Lazy",
          "name": "withRSST",
          "normalized": "(a-\u003eb-\u003e(c,b))-\u003eRSST c d b e f-\u003eRSST a d b e f",
          "package": "stateWriter",
          "partial": "RSST",
          "signature": "(r'-\u003es-\u003e(r,s))-\u003eRSST r w s m a-\u003eRSST r' w s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-RSS-Lazy.html#v:withRSST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStrict RSS monad.\n\u003c/p\u003e\u003cp\u003eThis is a variant of the classic \u003ca\u003eControl.Monad..RWS.Strict\u003c/a\u003e transformer,\n where the Writer part rides with the State part.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.RSS.Strict",
          "name": "Strict",
          "package": "stateWriter",
          "source": "src/Control-Monad-RSS-Strict.html",
          "type": "module"
        },
        "index": {
          "description": "Strict RSS monad This is variant of the classic Control.Monad..RWS.Strict transformer where the Writer part rides with the State part",
          "hierarchy": "Control Monad RSS Strict",
          "module": "Control.Monad.RSS.Strict",
          "name": "Strict",
          "package": "stateWriter",
          "partial": "Strict",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-RSS-Strict.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad containing an environment of type \u003ccode\u003er\u003c/code\u003e, output of type \u003ccode\u003ew\u003c/code\u003e\n and an updatable state of type \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.RSS.Strict",
          "name": "RSS",
          "package": "stateWriter",
          "source": "src/Control-Monad-Trans-RSS-Strict.html#RSS",
          "type": "type"
        },
        "index": {
          "description": "monad containing an environment of type output of type and an updatable state of type",
          "hierarchy": "Control Monad RSS Strict",
          "module": "Control.Monad.RSS.Strict",
          "name": "RSS",
          "package": "stateWriter",
          "partial": "RSS",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-RSS-Strict.html#t:RSS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad transformer adding reading an environment of type \u003ccode\u003er\u003c/code\u003e,\n collecting an output of type \u003ccode\u003ew\u003c/code\u003e and updating a state of type \u003ccode\u003es\u003c/code\u003e\n to an inner monad \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.RSS.Strict",
          "name": "RSST",
          "package": "stateWriter",
          "source": "src/Control-Monad-Trans-RSS-Strict.html#RSST",
          "type": "data"
        },
        "index": {
          "description": "monad transformer adding reading an environment of type collecting an output of type and updating state of type to an inner monad",
          "hierarchy": "Control Monad RSS Strict",
          "module": "Control.Monad.RSS.Strict",
          "name": "RSST",
          "package": "stateWriter",
          "partial": "RSST",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-RSS-Strict.html#t:RSST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an RSS computation from a function.\n (The inverse of \u003ccode\u003e\u003ca\u003erunRSS\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
          "module": "[\"Control.Monad.RSS.Strict\",\"Control.Monad.Trans.RSS.Strict\"]",
          "name": "rss",
          "package": "stateWriter",
          "signature": "(r -\u003e s -\u003e (a, s, w)) -\u003e RSS r w s a",
          "source": "src/Control-Monad-Trans-RSS-Strict.html#rss",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-RSS-Strict.html#v:rss\",\"http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-Trans-RSS-Strict.html#v:rss\"]"
        },
        "index": {
          "description": "Construct an RSS computation from function The inverse of runRSS",
          "hierarchy": "Control Monad RSS Strict",
          "module": "Control.Monad.RSS.Strict",
          "name": "rss",
          "normalized": "(a-\u003eb-\u003e(c,b,d))-\u003eRSS a d b c",
          "package": "stateWriter",
          "signature": "(r-\u003es-\u003e(a,s,w))-\u003eRSS r w s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-RSS-Strict.html#v:rss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwrap an RSS computation as a function.\n (The inverse of \u003ccode\u003e\u003ca\u003erss\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
          "module": "[\"Control.Monad.RSS.Strict\",\"Control.Monad.Trans.RSS.Strict\"]",
          "name": "runRSS",
          "package": "stateWriter",
          "signature": "RSS r w s a -\u003e r -\u003e s -\u003e (a, s, w)",
          "source": "src/Control-Monad-Trans-RSS-Strict.html#runRSS",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-RSS-Strict.html#v:runRSS\",\"http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-Trans-RSS-Strict.html#v:runRSS\"]"
        },
        "index": {
          "description": "Unwrap an RSS computation as function The inverse of rss",
          "hierarchy": "Control Monad RSS Strict",
          "module": "Control.Monad.RSS.Strict",
          "name": "runRSS",
          "normalized": "RSS a b c d-\u003ea-\u003ec-\u003e(d,c,b)",
          "package": "stateWriter",
          "partial": "RSS",
          "signature": "RSS r w s a-\u003er-\u003es-\u003e(a,s,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-RSS-Strict.html#v:runRSS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Monad.RSS.Strict\",\"Control.Monad.Trans.RSS.Strict\"]",
          "name": "withRSS",
          "package": "stateWriter",
          "signature": "(r' -\u003e s -\u003e (r, s)) -\u003e RSS r w s a -\u003e RSS r' w s a",
          "source": "src/Control-Monad-Trans-RSS-Strict.html#withRSS",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-RSS-Strict.html#v:withRSS\",\"http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-Trans-RSS-Strict.html#v:withRSS\"]"
        },
        "index": {
          "hierarchy": "Control Monad RSS Strict",
          "module": "Control.Monad.RSS.Strict",
          "name": "withRSS",
          "normalized": "(a-\u003eb-\u003e(c,b))-\u003eRSS c d b e-\u003eRSS a d b e",
          "package": "stateWriter",
          "partial": "RSS",
          "signature": "(r'-\u003es-\u003e(r,s))-\u003eRSS r w s a-\u003eRSS r' w s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-RSS-Strict.html#v:withRSS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ewithRSST\u003c/a\u003e\u003c/code\u003e f m\u003c/code\u003e executes action \u003ccode\u003em\u003c/code\u003e with an initial environment\n and state modified by applying \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunRSST\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ewithRSST\u003c/a\u003e\u003c/code\u003e f m) r s = \u003ccode\u003e\u003ca\u003euncurry\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003erunRSST\u003c/a\u003e\u003c/code\u003e m) (f r s)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Control.Monad.RSS.Strict\",\"Control.Monad.Trans.RSS.Strict\"]",
          "name": "withRSST",
          "package": "stateWriter",
          "signature": "(r' -\u003e s -\u003e (r, s)) -\u003e RSST r w s m a -\u003e RSST r' w s m a",
          "source": "src/Control-Monad-Trans-RSS-Strict.html#withRSST",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-RSS-Strict.html#v:withRSST\",\"http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-Trans-RSS-Strict.html#v:withRSST\"]"
        },
        "index": {
          "description": "withRSST executes action with an initial environment and state modified by applying runRSST withRSST uncurry runRSST",
          "hierarchy": "Control Monad RSS Strict",
          "module": "Control.Monad.RSS.Strict",
          "name": "withRSST",
          "normalized": "(a-\u003eb-\u003e(c,b))-\u003eRSST c d b e f-\u003eRSST a d b e f",
          "package": "stateWriter",
          "partial": "RSST",
          "signature": "(r'-\u003es-\u003e(r,s))-\u003eRSST r w s m a-\u003eRSST r' w s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-RSS-Strict.html#v:withRSST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.RSS",
          "name": "RSS",
          "package": "stateWriter",
          "source": "src/Control-Monad-RSS.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad RSS",
          "module": "Control.Monad.RSS",
          "name": "RSS",
          "package": "stateWriter",
          "partial": "RSS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-RSS.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.RSS.Lazy",
          "name": "Lazy",
          "package": "stateWriter",
          "source": "src/Control-Monad-Trans-RSS-Lazy.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Trans RSS Lazy",
          "module": "Control.Monad.Trans.RSS.Lazy",
          "name": "Lazy",
          "package": "stateWriter",
          "partial": "Lazy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-Trans-RSS-Lazy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad containing an environment of type \u003ccode\u003er\u003c/code\u003e, output of type \u003ccode\u003ew\u003c/code\u003e\n and an updatable state of type \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.RSS.Lazy",
          "name": "RSS",
          "package": "stateWriter",
          "source": "src/Control-Monad-Trans-RSS-Lazy.html#RSS",
          "type": "type"
        },
        "index": {
          "description": "monad containing an environment of type output of type and an updatable state of type",
          "hierarchy": "Control Monad Trans RSS Lazy",
          "module": "Control.Monad.Trans.RSS.Lazy",
          "name": "RSS",
          "package": "stateWriter",
          "partial": "RSS",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-Trans-RSS-Lazy.html#t:RSS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad transformer adding reading an environment of type \u003ccode\u003er\u003c/code\u003e,\n collecting an output of type \u003ccode\u003ew\u003c/code\u003e and updating a state of type \u003ccode\u003es\u003c/code\u003e\n to an inner monad \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.RSS.Lazy",
          "name": "RSST",
          "package": "stateWriter",
          "source": "src/Control-Monad-Trans-RSS-Lazy.html#RSST",
          "type": "data"
        },
        "index": {
          "description": "monad transformer adding reading an environment of type collecting an output of type and updating state of type to an inner monad",
          "hierarchy": "Control Monad Trans RSS Lazy",
          "module": "Control.Monad.Trans.RSS.Lazy",
          "name": "RSST",
          "package": "stateWriter",
          "partial": "RSST",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-Trans-RSS-Lazy.html#t:RSST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.RSS.Lazy",
          "name": "runRSST",
          "package": "stateWriter",
          "signature": "RSST r w s m a -\u003e r -\u003e s -\u003e m (a, s, w)",
          "source": "src/Control-Monad-Trans-RSS-Lazy.html#runRSST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans RSS Lazy",
          "module": "Control.Monad.Trans.RSS.Lazy",
          "name": "runRSST",
          "normalized": "RSST a b c d e-\u003ea-\u003ec-\u003ed(e,c,b)",
          "package": "stateWriter",
          "partial": "RSST",
          "signature": "RSST r w s m a-\u003er-\u003es-\u003em(a,s,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-Trans-RSS-Lazy.html#v:runRSST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.RSS.Strict",
          "name": "Strict",
          "package": "stateWriter",
          "source": "src/Control-Monad-Trans-RSS-Strict.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Trans RSS Strict",
          "module": "Control.Monad.Trans.RSS.Strict",
          "name": "Strict",
          "package": "stateWriter",
          "partial": "Strict",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-Trans-RSS-Strict.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad containing an environment of type \u003ccode\u003er\u003c/code\u003e, output of type \u003ccode\u003ew\u003c/code\u003e\n and an updatable state of type \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.RSS.Strict",
          "name": "RSS",
          "package": "stateWriter",
          "source": "src/Control-Monad-Trans-RSS-Strict.html#RSS",
          "type": "type"
        },
        "index": {
          "description": "monad containing an environment of type output of type and an updatable state of type",
          "hierarchy": "Control Monad Trans RSS Strict",
          "module": "Control.Monad.Trans.RSS.Strict",
          "name": "RSS",
          "package": "stateWriter",
          "partial": "RSS",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-Trans-RSS-Strict.html#t:RSS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad transformer adding reading an environment of type \u003ccode\u003er\u003c/code\u003e,\n collecting an output of type \u003ccode\u003ew\u003c/code\u003e and updating a state of type \u003ccode\u003es\u003c/code\u003e\n to an inner monad \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.RSS.Strict",
          "name": "RSST",
          "package": "stateWriter",
          "source": "src/Control-Monad-Trans-RSS-Strict.html#RSST",
          "type": "data"
        },
        "index": {
          "description": "monad transformer adding reading an environment of type collecting an output of type and updating state of type to an inner monad",
          "hierarchy": "Control Monad Trans RSS Strict",
          "module": "Control.Monad.Trans.RSS.Strict",
          "name": "RSST",
          "package": "stateWriter",
          "partial": "RSST",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-Trans-RSS-Strict.html#t:RSST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.RSS.Strict",
          "name": "runRSST",
          "package": "stateWriter",
          "signature": "RSST r w s m a -\u003e r -\u003e s -\u003e m (a, s, w)",
          "source": "src/Control-Monad-Trans-RSS-Strict.html#runRSST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans RSS Strict",
          "module": "Control.Monad.Trans.RSS.Strict",
          "name": "runRSST",
          "normalized": "RSST a b c d e-\u003ea-\u003ec-\u003ed(e,c,b)",
          "package": "stateWriter",
          "partial": "RSST",
          "signature": "RSST r w s m a-\u003er-\u003es-\u003em(a,s,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-Trans-RSS-Strict.html#v:runRSST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.RSS",
          "name": "RSS",
          "package": "stateWriter",
          "source": "src/Control-Monad-Trans-RSS.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Trans RSS",
          "module": "Control.Monad.Trans.RSS",
          "name": "RSS",
          "package": "stateWriter",
          "partial": "RSS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stateWriter/docs/Control-Monad-Trans-RSS.html#"
      }
    }
  ]
]