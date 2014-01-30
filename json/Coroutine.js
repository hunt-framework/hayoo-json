[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module allows you to implement coroutines that communicate in a type-safe manner\nusing lightweight session types.  An abstract group of session \"type-combinators\" are\noffered, and implementations are indexed by those types.\n\u003c/p\u003e\u003cp\u003eIndexed monads are used to thread the session state through the computation.  We\ngenerally use them to implement \"type-level substitution\"; also known as\n\"big lambda\".  For example, consider a session\n\u003c/p\u003e\u003cpre\u003e  session1 :: forall r. Session (Int :?: String :!: r) r Int\n\u003c/pre\u003e\u003cp\u003eThis represents a session that reads an Int, then writes a String, and delivers\nan Int which can be used in the remainder of the session \u003ccode\u003er\u003c/code\u003e.  A way to write it\nwith full type functions (not legal Haskell) would be\n\u003c/p\u003e\u003cpre\u003e  session1 :: Session (/\\r. Int :?: String :!: r) Float\n\u003c/pre\u003e\u003cp\u003eUsing the indexed monad bind operator, we can do, for example:\n\u003c/p\u003e\u003cpre\u003e\n  session2 = do\n      x \u003c- session1\n      put x\n\u003c/pre\u003e\u003cp\u003eNow session2 has the type \u003ccode\u003eforall r. (Int :?: String :!: Float :!: r) r ()\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eConnecting two sessions is easy; if they are the dual of each other (one reads\nwhere the other writes), just call \u003ca\u003econnects s1 s2\u003c/a\u003e.  If the sessions are not\ncompatible, you'll get a reasonably readable compile-time error.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Coroutine",
        "fct-package": "Coroutine",
        "fct-signature": "module",
        "fct-source": "src/Control-Coroutine.html",
        "fct-type": "module",
        "title": "Coroutine"
      },
      "index": {
        "description": "This module allows you to implement coroutines that communicate in type-safe manner using lightweight session types An abstract group of session type-combinators are offered and implementations are indexed by those types Indexed monads are used to thread the session state through the computation We generally use them to implement type-level substitution also known as big lambda For example consider session session1 forall Session Int String Int This represents session that reads an Int then writes String and delivers an Int which can be used in the remainder of the session way to write it with full type functions not legal Haskell would be session1 Session Int String Float Using the indexed monad bind operator we can do for example session2 do session1 put Now session2 has the type forall Int String Float Connecting two sessions is easy if they are the dual of each other one reads where the other writes just call connects s1 s2 If the sessions are not compatible you ll get reasonably readable compile-time error",
        "hierarchy": "Control Coroutine",
        "module": "Control.Coroutine",
        "name": "Coroutine",
        "normalized": "",
        "package": "Coroutine",
        "partial": "Coroutine",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#t::-124-:",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ea :|: b\u003c/code\u003e allows the choice between sessions \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e at runtime\n\u003c/p\u003e",
        "fct-module": "Control.Coroutine",
        "fct-package": "Coroutine",
        "fct-signature": "data",
        "fct-source": "src/Control-Coroutine.html#%3A%7C%3A",
        "fct-type": "data",
        "title": ":|:"
      },
      "index": {
        "description": "allows the choice between sessions and at runtime",
        "hierarchy": "Control Coroutine",
        "module": "Control.Coroutine",
        "name": ":|:",
        "normalized": "",
        "package": "Coroutine",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#t::-33--42-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ea :!* b\u003c/code\u003e is the session \u003ccode\u003ea\u003c/code\u003e zero or more times followed by \u003ccode\u003eb\u003c/code\u003e, choosing whether or not to loop.\n\u003c/p\u003e",
        "fct-module": "Control.Coroutine",
        "fct-package": "Coroutine",
        "fct-signature": "data",
        "fct-source": "src/Control-Coroutine.html#%3A%21%2A",
        "fct-type": "data",
        "title": ":!*"
      },
      "index": {
        "description": "is the session zero or more times followed by choosing whether or not to loop",
        "hierarchy": "Control Coroutine",
        "module": "Control.Coroutine",
        "name": ":!*",
        "normalized": "",
        "package": "Coroutine",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#t::-33-:",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ea :!: r\u003c/code\u003e writes \u003ccode\u003ea\u003c/code\u003e followed by the sesison \u003ccode\u003er\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Coroutine",
        "fct-package": "Coroutine",
        "fct-signature": "data",
        "fct-source": "src/Control-Coroutine.html#%3A%21%3A",
        "fct-type": "data",
        "title": ":!:"
      },
      "index": {
        "description": "writes followed by the sesison",
        "hierarchy": "Control Coroutine",
        "module": "Control.Coroutine",
        "name": ":!:",
        "normalized": "",
        "package": "Coroutine",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#t::-38-:",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ea :&: b\u003c/code\u003e offers both the sessions \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e to the other end\n\u003c/p\u003e",
        "fct-module": "Control.Coroutine",
        "fct-package": "Coroutine",
        "fct-signature": "data",
        "fct-source": "src/Control-Coroutine.html#%3A%26%3A",
        "fct-type": "data",
        "title": ":&:"
      },
      "index": {
        "description": "offers both the sessions and to the other end",
        "hierarchy": "Control Coroutine",
        "module": "Control.Coroutine",
        "name": ":&:",
        "normalized": "",
        "package": "Coroutine",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#t::-42-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ea :* b\u003c/code\u003e is the session \u003ccode\u003ea\u003c/code\u003e zero or more times followed by \u003ccode\u003eb\u003c/code\u003e.  Either side may terminate the loop.\n\u003c/p\u003e",
        "fct-module": "Control.Coroutine",
        "fct-package": "Coroutine",
        "fct-signature": "data",
        "fct-source": "src/Control-Coroutine.html#%3A%2A",
        "fct-type": "data",
        "title": ":*"
      },
      "index": {
        "description": "is the session zero or more times followed by Either side may terminate the loop",
        "hierarchy": "Control Coroutine",
        "module": "Control.Coroutine",
        "name": ":*",
        "normalized": "",
        "package": "Coroutine",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#t::-43--43-:",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ea :++: b\u003c/code\u003e is session \u003ccode\u003ea\u003c/code\u003e followed by session \u003ccode\u003eb\u003c/code\u003e.\n This is mostly used for constructing looping constructs;\n you generally won't need to use it yourself.\n\u003c/p\u003e",
        "fct-module": "Control.Coroutine",
        "fct-package": "Coroutine",
        "fct-signature": "data",
        "fct-source": "src/Control-Coroutine.html#%3A%2B%2B%3A",
        "fct-type": "data",
        "title": ":++:"
      },
      "index": {
        "description": "is session followed by session This is mostly used for constructing looping constructs you generally won need to use it yourself",
        "hierarchy": "Control Coroutine",
        "module": "Control.Coroutine",
        "name": ":++:",
        "normalized": "",
        "package": "Coroutine",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#t::-63--42-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ea :?* b\u003c/code\u003e is the session \u003ccode\u003ea\u003c/code\u003e zero or more times followed by \u003ccode\u003eb\u003c/code\u003e, offering the loop.\n\u003c/p\u003e",
        "fct-module": "Control.Coroutine",
        "fct-package": "Coroutine",
        "fct-signature": "data",
        "fct-source": "src/Control-Coroutine.html#%3A%3F%2A",
        "fct-type": "data",
        "title": ":?*"
      },
      "index": {
        "description": "is the session zero or more times followed by offering the loop",
        "hierarchy": "Control Coroutine",
        "module": "Control.Coroutine",
        "name": ":?*",
        "normalized": "",
        "package": "Coroutine",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#t::-63-:",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ea :?: r\u003c/code\u003e reads \u003ccode\u003ea\u003c/code\u003e followed by the session \u003ccode\u003er\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Coroutine",
        "fct-package": "Coroutine",
        "fct-signature": "data",
        "fct-source": "src/Control-Coroutine.html#%3A%3F%3A",
        "fct-type": "data",
        "title": ":?:"
      },
      "index": {
        "description": "reads followed by the session",
        "hierarchy": "Control Coroutine",
        "module": "Control.Coroutine",
        "name": ":?:",
        "normalized": "",
        "package": "Coroutine",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#t:Connect",
      "description": {
        "fct-module": "Control.Coroutine",
        "fct-package": "Coroutine",
        "fct-signature": "class",
        "fct-source": "src/Control-Coroutine.html#Connect",
        "fct-type": "class",
        "title": "Connect"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Coroutine",
        "module": "Control.Coroutine",
        "name": "Connect",
        "normalized": "",
        "package": "Coroutine",
        "partial": "Connect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#t:Dual",
      "description": {
        "fct-module": "Control.Coroutine",
        "fct-package": "Coroutine",
        "fct-signature": "Dual",
        "fct-type": "function",
        "title": "Dual"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Coroutine",
        "module": "Control.Coroutine",
        "name": "Dual",
        "normalized": "",
        "package": "Coroutine",
        "partial": "Dual",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#t:Eps",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eEps\u003c/code\u003e is the empty session.\n\u003c/p\u003e",
        "fct-module": "Control.Coroutine",
        "fct-package": "Coroutine",
        "fct-signature": "data",
        "fct-source": "src/Control-Coroutine.html#Eps",
        "fct-type": "data",
        "title": "Eps"
      },
      "index": {
        "description": "Eps is the empty session",
        "hierarchy": "Control Coroutine",
        "module": "Control.Coroutine",
        "name": "Eps",
        "normalized": "",
        "package": "Coroutine",
        "partial": "Eps",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#t:InSession",
      "description": {
        "fct-descr": "\u003cp\u003eInSession s v is a functor type representing a session that results in the value v\n being computed by the session.  s should be indexed by one of the session types above,\n although you can extended the session type system by adding additional instances\n here and to Dual and Connect below.\n\u003c/p\u003e",
        "fct-module": "Control.Coroutine",
        "fct-package": "Coroutine",
        "fct-signature": "InSession",
        "fct-type": "function",
        "title": "InSession"
      },
      "index": {
        "description": "InSession is functor type representing session that results in the value being computed by the session should be indexed by one of the session types above although you can extended the session type system by adding additional instances here and to Dual and Connect below",
        "hierarchy": "Control Coroutine",
        "module": "Control.Coroutine",
        "name": "InSession",
        "normalized": "",
        "package": "Coroutine",
        "partial": "In Session",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#t:Loop",
      "description": {
        "fct-descr": "\u003cp\u003eLoop is just nicely-named Either; it is used for\n choosing whether or not to loop in these simplified looping\n primitives.\n\u003c/p\u003e",
        "fct-module": "Control.Coroutine",
        "fct-package": "Coroutine",
        "fct-signature": "data",
        "fct-source": "src/Control-Coroutine.html#Loop",
        "fct-type": "data",
        "title": "Loop"
      },
      "index": {
        "description": "Loop is just nicely-named Either it is used for choosing whether or not to loop in these simplified looping primitives",
        "hierarchy": "Control Coroutine",
        "module": "Control.Coroutine",
        "name": "Loop",
        "normalized": "",
        "package": "Coroutine",
        "partial": "Loop",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#t:Session",
      "description": {
        "fct-descr": "\u003cp\u003eBy indexing using a data family, we get an untagged representation of the\n session; resolving how to link sessions together with \u003ca\u003econnect\u003c/a\u003e can happen\n at compile-time.  A similar encoding is possible using GADTs, but it requires\n runtime branching based on the GADT tag.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eIxCont s x y a\u003c/code\u003e == \u003ccode\u003eforall b. (a -\u003e s y b) -\u003e s x b\u003c/code\u003e; that is, if you give us\n a continuation function that takes an \u003ca\u003ea\u003c/a\u003e and outputs the rest of the session,\n we can give you a representation of the full session.  When a session is\n complete, \u003ccode\u003ey\u003c/code\u003e is \u003ccode\u003eEps\u003c/code\u003e, the empty session, so getting the full session out\n is just \u003ccode\u003erunIxCont (getSession session) Eps\u003c/code\u003e which gives you the result of type\n \u003ccode\u003eInSession session_type a\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Coroutine",
        "fct-package": "Coroutine",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Coroutine.html#Session",
        "fct-type": "newtype",
        "title": "Session"
      },
      "index": {
        "description": "By indexing using data family we get an untagged representation of the session resolving how to link sessions together with connect can happen at compile-time similar encoding is possible using GADTs but it requires runtime branching based on the GADT tag IxCont forall that is if you give us continuation function that takes an and outputs the rest of the session we can give you representation of the full session When session is complete is Eps the empty session so getting the full session out is just runIxCont getSession session Eps which gives you the result of type InSession session type",
        "hierarchy": "Control Coroutine",
        "module": "Control.Coroutine",
        "name": "Session",
        "normalized": "",
        "package": "Coroutine",
        "partial": "Session",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#t:WM",
      "description": {
        "fct-descr": "\u003cp\u003eWM stands for \u003ca\u003ewrapped monad\u003c/a\u003e; it wraps any Prelude monad.\n This doesn't really belong in this module, but exporting it\n correctly from IxMonad is a real pain.\n This allows you to use NoImplicitPrelude when writing\n \u003ca\u003emain\u003c/a\u003e in the following way:\n\u003c/p\u003e\u003cpre\u003e\n module Main where\n import Control.Coroutine\n main = runWM $ do\n           LiftWM $ putStrLn \u003ca\u003ehello world\u003c/a\u003e\n\u003c/pre\u003e",
        "fct-module": "Control.Coroutine",
        "fct-package": "Coroutine",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Coroutine.html#WM",
        "fct-type": "newtype",
        "title": "WM"
      },
      "index": {
        "description": "WM stands for wrapped monad it wraps any Prelude monad This doesn really belong in this module but exporting it correctly from IxMonad is real pain This allows you to use NoImplicitPrelude when writing main in the following way module Main where import Control.Coroutine main runWM do LiftWM putStrLn hello world",
        "hierarchy": "Control Coroutine",
        "module": "Control.Coroutine",
        "name": "WM",
        "normalized": "",
        "package": "Coroutine",
        "partial": "WM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#v:Done",
      "description": {
        "fct-module": "Control.Coroutine",
        "fct-package": "Coroutine",
        "fct-signature": "Done b",
        "fct-source": "src/Control-Coroutine.html#Loop",
        "fct-type": "function",
        "title": "Done"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Coroutine",
        "module": "Control.Coroutine",
        "name": "Done",
        "normalized": "",
        "package": "Coroutine",
        "partial": "Done",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#v:LiftWM",
      "description": {
        "fct-module": "Control.Coroutine",
        "fct-package": "Coroutine",
        "fct-signature": "LiftWM",
        "fct-source": "src/Control-Coroutine.html#WM",
        "fct-type": "function",
        "title": "LiftWM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Coroutine",
        "module": "Control.Coroutine",
        "name": "LiftWM",
        "normalized": "",
        "package": "Coroutine",
        "partial": "Lift WM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#v:Loop",
      "description": {
        "fct-module": "Control.Coroutine",
        "fct-package": "Coroutine",
        "fct-signature": "Loop a",
        "fct-source": "src/Control-Coroutine.html#Loop",
        "fct-type": "function",
        "title": "Loop"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Coroutine",
        "module": "Control.Coroutine",
        "name": "Loop",
        "normalized": "",
        "package": "Coroutine",
        "partial": "Loop",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#v:Session",
      "description": {
        "fct-module": "Control.Coroutine",
        "fct-package": "Coroutine",
        "fct-signature": "Session",
        "fct-source": "src/Control-Coroutine.html#Session",
        "fct-type": "function",
        "title": "Session"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Coroutine",
        "module": "Control.Coroutine",
        "name": "Session",
        "normalized": "",
        "package": "Coroutine",
        "partial": "Session",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#v:cat",
      "description": {
        "fct-descr": "\u003cp\u003ecat m takes a completed session and connects it at\n the beginning of a sequence inside another session.\n\u003c/p\u003e",
        "fct-module": "Control.Coroutine",
        "fct-package": "Coroutine",
        "fct-signature": "Session a Eps v -\u003e Session (a :++: r) r v",
        "fct-source": "src/Control-Coroutine.html#cat",
        "fct-type": "function",
        "title": "cat"
      },
      "index": {
        "description": "cat takes completed session and connects it at the beginning of sequence inside another session",
        "hierarchy": "Control Coroutine",
        "module": "Control.Coroutine",
        "name": "cat",
        "normalized": "Session a Eps b-\u003eSession(a c)c b",
        "package": "Coroutine",
        "partial": "",
        "signature": "Session a Eps v-\u003eSession(a r)r v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#v:close",
      "description": {
        "fct-descr": "\u003cp\u003eYou never \u003cem\u003eneed\u003c/em\u003e to explicitly call close; doing so just seals the\n \"rest-of-computation\" parameter of the session.\n\u003c/p\u003e",
        "fct-module": "Control.Coroutine",
        "fct-package": "Coroutine",
        "fct-signature": "Session Eps Eps ()",
        "fct-source": "src/Control-Coroutine.html#close",
        "fct-type": "function",
        "title": "close"
      },
      "index": {
        "description": "You never need to explicitly call close doing so just seals the rest-of-computation parameter of the session",
        "hierarchy": "Control Coroutine",
        "module": "Control.Coroutine",
        "name": "close",
        "normalized": "Session Eps Eps()",
        "package": "Coroutine",
        "partial": "",
        "signature": "Session Eps Eps()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#v:connect",
      "description": {
        "fct-module": "Control.Coroutine",
        "fct-package": "Coroutine",
        "fct-signature": "InSession s a -\u003e InSession c b -\u003e (a, b)",
        "fct-source": "src/Control-Coroutine.html#connect",
        "fct-type": "method",
        "title": "connect"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Coroutine",
        "module": "Control.Coroutine",
        "name": "connect",
        "normalized": "InSession a b-\u003eInSession c d-\u003e(b,d)",
        "package": "Coroutine",
        "partial": "",
        "signature": "InSession s a-\u003eInSession c b-\u003e(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#v:connects",
      "description": {
        "fct-descr": "\u003cp\u003econnect two completed sessions to each other\n\u003c/p\u003e",
        "fct-module": "Control.Coroutine",
        "fct-package": "Coroutine",
        "fct-signature": "Session s Eps a -\u003e Session c Eps b -\u003e (a, b)",
        "fct-source": "src/Control-Coroutine.html#connects",
        "fct-type": "function",
        "title": "connects"
      },
      "index": {
        "description": "connect two completed sessions to each other",
        "hierarchy": "Control Coroutine",
        "module": "Control.Coroutine",
        "name": "connects",
        "normalized": "Session a Eps b-\u003eSession c Eps d-\u003e(b,d)",
        "package": "Coroutine",
        "partial": "",
        "signature": "Session s Eps a-\u003eSession c Eps b-\u003e(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#v:get",
      "description": {
        "fct-descr": "\u003cp\u003eget reads an element from the connected coroutine\n\u003c/p\u003e",
        "fct-module": "Control.Coroutine",
        "fct-package": "Coroutine",
        "fct-signature": "Session (a :?: r) r a",
        "fct-source": "src/Control-Coroutine.html#get",
        "fct-type": "function",
        "title": "get"
      },
      "index": {
        "description": "get reads an element from the connected coroutine",
        "hierarchy": "Control Coroutine",
        "module": "Control.Coroutine",
        "name": "get",
        "normalized": "",
        "package": "Coroutine",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#v:getSession",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Coroutine",
        "fct-package": "Coroutine",
        "fct-signature": "IxCont InSession x y a",
        "fct-source": "src/Control-Coroutine.html#Session",
        "fct-type": "function",
        "title": "getSession"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Coroutine",
        "module": "Control.Coroutine",
        "name": "getSession",
        "normalized": "",
        "package": "Coroutine",
        "partial": "Session",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#v:loop",
      "description": {
        "fct-descr": "\u003cp\u003eloop is a slightly more complicated looping primitive where either\n side of the loop may choose to terminate the loop at each iteration.\n It is useful for a server that has a fixed amount of data to give out,\n when the client can also choose to escape early.\n\u003c/p\u003e",
        "fct-module": "Control.Coroutine",
        "fct-package": "Coroutine",
        "fct-signature": "Loop a b-\u003e (a -\u003e Session x Eps (Loop a b))-\u003e Session (x :* r) r (Either a b)",
        "fct-type": "function",
        "title": "loop"
      },
      "index": {
        "description": "loop is slightly more complicated looping primitive where either side of the loop may choose to terminate the loop at each iteration It is useful for server that has fixed amount of data to give out when the client can also choose to escape early",
        "hierarchy": "Control Coroutine",
        "module": "Control.Coroutine",
        "name": "loop",
        "normalized": "Loop a b-\u003e(a-\u003eSession c Eps(Loop a b))-\u003eSession(c*d)d(Either a b)",
        "package": "Coroutine",
        "partial": "",
        "signature": "Loop a b-\u003e(a-\u003eSession x Eps(Loop a b))-\u003eSession(x*r)r(Either a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#v:loopC",
      "description": {
        "fct-descr": "\u003cp\u003eloopC is the client side of a \u003ca\u003ewhile\u003c/a\u003e loop; it takes the current\n loop state, and a computation that figures out the next loop state,\n and loops until the computation returns \u003ca\u003eDone\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Coroutine",
        "fct-package": "Coroutine",
        "fct-signature": "Loop a b-\u003e (a -\u003e Session x Eps (Loop a b))-\u003e Session (x :!* r) r b",
        "fct-type": "function",
        "title": "loopC"
      },
      "index": {
        "description": "loopC is the client side of while loop it takes the current loop state and computation that figures out the next loop state and loops until the computation returns Done",
        "hierarchy": "Control Coroutine",
        "module": "Control.Coroutine",
        "name": "loopC",
        "normalized": "Loop a b-\u003e(a-\u003eSession c Eps(Loop a b))-\u003eSession(c*d)d b",
        "package": "Coroutine",
        "partial": "",
        "signature": "Loop a b-\u003e(a-\u003eSession x Eps(Loop a b))-\u003eSession(x*r)r b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#v:loopS",
      "description": {
        "fct-descr": "\u003cp\u003eloopS is the server side of a \u003ca\u003ewhile\u003c/a\u003e loop; it must always offer\n the client the option to terminate the loop at each iteration, or\n to continue the loop.\n\u003c/p\u003e",
        "fct-module": "Control.Coroutine",
        "fct-package": "Coroutine",
        "fct-signature": "a-\u003e (a -\u003e Session x Eps a)-\u003e Session (x :?* r) r a",
        "fct-type": "function",
        "title": "loopS"
      },
      "index": {
        "description": "loopS is the server side of while loop it must always offer the client the option to terminate the loop at each iteration or to continue the loop",
        "hierarchy": "Control Coroutine",
        "module": "Control.Coroutine",
        "name": "loopS",
        "normalized": "a-\u003e(a-\u003eSession b Eps a)-\u003eSession(b*c)c a",
        "package": "Coroutine",
        "partial": "",
        "signature": "a-\u003e(a-\u003eSession x Eps a)-\u003eSession(x*r)r a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#v:offer",
      "description": {
        "fct-descr": "\u003cp\u003eoffer s1 s2 gives the other side the choice of whether\n to continue with session s1 or s2.\n\u003c/p\u003e",
        "fct-module": "Control.Coroutine",
        "fct-package": "Coroutine",
        "fct-signature": "Session a r v -\u003e Session b r v -\u003e Session (a :&: b) r v",
        "fct-source": "src/Control-Coroutine.html#offer",
        "fct-type": "function",
        "title": "offer"
      },
      "index": {
        "description": "offer s1 s2 gives the other side the choice of whether to continue with session s1 or s2",
        "hierarchy": "Control Coroutine",
        "module": "Control.Coroutine",
        "name": "offer",
        "normalized": "Session a b c-\u003eSession d b c-\u003eSession(a d)b c",
        "package": "Coroutine",
        "partial": "",
        "signature": "Session a r v-\u003eSession b r v-\u003eSession(a b)r v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#v:put",
      "description": {
        "fct-descr": "\u003cp\u003eput x sends the value x to the connected coroutine\n\u003c/p\u003e",
        "fct-module": "Control.Coroutine",
        "fct-package": "Coroutine",
        "fct-signature": "a -\u003e Session (a :!: r) r ()",
        "fct-source": "src/Control-Coroutine.html#put",
        "fct-type": "function",
        "title": "put"
      },
      "index": {
        "description": "put sends the value to the connected coroutine",
        "hierarchy": "Control Coroutine",
        "module": "Control.Coroutine",
        "name": "put",
        "normalized": "a-\u003eSession(a b)b()",
        "package": "Coroutine",
        "partial": "",
        "signature": "a-\u003eSession(a r)r()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#v:runSession",
      "description": {
        "fct-descr": "\u003cp\u003erunSession converts a session computation into a \u003ca\u003econnectable\u003c/a\u003e\n session.\n\u003c/p\u003e",
        "fct-module": "Control.Coroutine",
        "fct-package": "Coroutine",
        "fct-signature": "Session c Eps a -\u003e InSession c a",
        "fct-source": "src/Control-Coroutine.html#runSession",
        "fct-type": "function",
        "title": "runSession"
      },
      "index": {
        "description": "runSession converts session computation into connectable session",
        "hierarchy": "Control Coroutine",
        "module": "Control.Coroutine",
        "name": "runSession",
        "normalized": "Session a Eps b-\u003eInSession a b",
        "package": "Coroutine",
        "partial": "Session",
        "signature": "Session c Eps a-\u003eInSession c a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#v:runWM",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Coroutine",
        "fct-package": "Coroutine",
        "fct-signature": "m a",
        "fct-source": "src/Control-Coroutine.html#WM",
        "fct-type": "function",
        "title": "runWM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Coroutine",
        "module": "Control.Coroutine",
        "name": "runWM",
        "normalized": "",
        "package": "Coroutine",
        "partial": "WM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#v:sel1",
      "description": {
        "fct-descr": "\u003cp\u003esel1 chooses the first branch of an offer\n\u003c/p\u003e",
        "fct-module": "Control.Coroutine",
        "fct-package": "Coroutine",
        "fct-signature": "Session (a :|: b) a ()",
        "fct-source": "src/Control-Coroutine.html#sel1",
        "fct-type": "function",
        "title": "sel1"
      },
      "index": {
        "description": "sel1 chooses the first branch of an offer",
        "hierarchy": "Control Coroutine",
        "module": "Control.Coroutine",
        "name": "sel1",
        "normalized": "Session(a b)a()",
        "package": "Coroutine",
        "partial": "",
        "signature": "Session(a b)a()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#v:sel2",
      "description": {
        "fct-descr": "\u003cp\u003esel2 chooses the second branch of an offer\n\u003c/p\u003e",
        "fct-module": "Control.Coroutine",
        "fct-package": "Coroutine",
        "fct-signature": "Session (a :|: b) b ()",
        "fct-source": "src/Control-Coroutine.html#sel2",
        "fct-type": "function",
        "title": "sel2"
      },
      "index": {
        "description": "sel2 chooses the second branch of an offer",
        "hierarchy": "Control Coroutine",
        "module": "Control.Coroutine",
        "name": "sel2",
        "normalized": "Session(a b)b()",
        "package": "Coroutine",
        "partial": "",
        "signature": "Session(a b)b()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Monad-Indexed.html#",
      "description": {
        "fct-module": "Control.Monad.Indexed",
        "fct-package": "Coroutine",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Indexed.html",
        "fct-type": "module",
        "title": "Indexed"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Indexed",
        "module": "Control.Monad.Indexed",
        "name": "Indexed",
        "normalized": "",
        "package": "Coroutine",
        "partial": "Indexed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Monad-Indexed.html#t:IxCont",
      "description": {
        "fct-descr": "\u003cp\u003eIxCont is a continuation monad that supports changing\n of the answer type during the computation.  The result\n is a functor \u003ca\u003es x\u003c/a\u003e, where the caller of the computation\n controls the type held inside the functor.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Indexed",
        "fct-package": "Coroutine",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Indexed.html#IxCont",
        "fct-type": "newtype",
        "title": "IxCont"
      },
      "index": {
        "description": "IxCont is continuation monad that supports changing of the answer type during the computation The result is functor where the caller of the computation controls the type held inside the functor",
        "hierarchy": "Control Monad Indexed",
        "module": "Control.Monad.Indexed",
        "name": "IxCont",
        "normalized": "",
        "package": "Coroutine",
        "partial": "Ix Cont",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Monad-Indexed.html#t:IxMonad",
      "description": {
        "fct-descr": "\u003cp\u003eIxMonad (Indexed Monad) carries type-level state through a\n computation.  For an IxMonad m, m px py a represents a computation\n with precondition px, postcondition py, and result value a.\n \u003ca\u003epx\u003c/a\u003e and \u003ca\u003epy\u003c/a\u003e can be thought of as type-level propositions\n that hold at the beginning and end of the computation.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Indexed",
        "fct-package": "Coroutine",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Indexed.html#IxMonad",
        "fct-type": "class",
        "title": "IxMonad"
      },
      "index": {
        "description": "IxMonad Indexed Monad carries type-level state through computation For an IxMonad px py represents computation with precondition px postcondition py and result value px and py can be thought of as type-level propositions that hold at the beginning and end of the computation",
        "hierarchy": "Control Monad Indexed",
        "module": "Control.Monad.Indexed",
        "name": "IxMonad",
        "normalized": "",
        "package": "Coroutine",
        "partial": "Ix Monad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Monad-Indexed.html#v:-62--62-",
      "description": {
        "fct-module": "Control.Monad.Indexed",
        "fct-package": "Coroutine",
        "fct-signature": "m x y a -\u003e m y z b -\u003e m x z b",
        "fct-source": "src/Control-Monad-Indexed.html#%3E%3E",
        "fct-type": "method",
        "title": "(\u003e\u003e)"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Indexed",
        "module": "Control.Monad.Indexed",
        "name": "(\u003e\u003e) \u003e\u003e",
        "normalized": "a b c d-\u003ea c e f-\u003ea b e f",
        "package": "Coroutine",
        "partial": "",
        "signature": "m x y a-\u003em y z b-\u003em x z b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Monad-Indexed.html#v:-62--62--61-",
      "description": {
        "fct-module": "Control.Monad.Indexed",
        "fct-package": "Coroutine",
        "fct-signature": "m x y a -\u003e (a -\u003e m y z b) -\u003e m x z b",
        "fct-source": "src/Control-Monad-Indexed.html#%3E%3E%3D",
        "fct-type": "method",
        "title": "(\u003e\u003e=)"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Indexed",
        "module": "Control.Monad.Indexed",
        "name": "(\u003e\u003e=) \u003e\u003e=",
        "normalized": "a b c d-\u003e(d-\u003ea c e f)-\u003ea b e f",
        "package": "Coroutine",
        "partial": "",
        "signature": "m x y a-\u003e(a-\u003em y z b)-\u003em x z b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Monad-Indexed.html#v:IxCont",
      "description": {
        "fct-module": "Control.Monad.Indexed",
        "fct-package": "Coroutine",
        "fct-signature": "IxCont",
        "fct-source": "src/Control-Monad-Indexed.html#IxCont",
        "fct-type": "function",
        "title": "IxCont"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Indexed",
        "module": "Control.Monad.Indexed",
        "name": "IxCont",
        "normalized": "",
        "package": "Coroutine",
        "partial": "Ix Cont",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Monad-Indexed.html#v:fail",
      "description": {
        "fct-module": "Control.Monad.Indexed",
        "fct-package": "Coroutine",
        "fct-signature": "String -\u003e m x y a",
        "fct-source": "src/Control-Monad-Indexed.html#fail",
        "fct-type": "method",
        "title": "fail"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Indexed",
        "module": "Control.Monad.Indexed",
        "name": "fail",
        "normalized": "String-\u003ea b c d",
        "package": "Coroutine",
        "partial": "",
        "signature": "String-\u003em x y a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Monad-Indexed.html#v:mapCont",
      "description": {
        "fct-descr": "\u003cp\u003emapCont changes the answer type of an IxCont, given a function\n that maps any (s x) to a (s y).\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Indexed",
        "fct-package": "Coroutine",
        "fct-signature": "(forall a.  s x a -\u003e s y a) -\u003e IxCont s x z a -\u003e IxCont s y z a",
        "fct-source": "src/Control-Monad-Indexed.html#mapCont",
        "fct-type": "function",
        "title": "mapCont"
      },
      "index": {
        "description": "mapCont changes the answer type of an IxCont given function that maps any to",
        "hierarchy": "Control Monad Indexed",
        "module": "Control.Monad.Indexed",
        "name": "mapCont",
        "normalized": "(a b c d e-\u003ec f e)-\u003eIxCont c d g e-\u003eIxCont c f g e",
        "package": "Coroutine",
        "partial": "Cont",
        "signature": "(forall a. s x a-\u003es y a)-\u003eIxCont s x z a-\u003eIxCont s y z a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Monad-Indexed.html#v:return",
      "description": {
        "fct-module": "Control.Monad.Indexed",
        "fct-package": "Coroutine",
        "fct-signature": "a -\u003e m x x a",
        "fct-source": "src/Control-Monad-Indexed.html#return",
        "fct-type": "method",
        "title": "return"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Indexed",
        "module": "Control.Monad.Indexed",
        "name": "return",
        "normalized": "a-\u003eb c c a",
        "package": "Coroutine",
        "partial": "",
        "signature": "a-\u003em x x a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Monad-Indexed.html#v:runIxCont",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Indexed",
        "fct-package": "Coroutine",
        "fct-signature": "forall b.  (a -\u003e s y b) -\u003e s x b",
        "fct-source": "src/Control-Monad-Indexed.html#IxCont",
        "fct-type": "function",
        "title": "runIxCont"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Indexed",
        "module": "Control.Monad.Indexed",
        "name": "runIxCont",
        "normalized": "a b(c-\u003ed e f)-\u003ed g f",
        "package": "Coroutine",
        "partial": "Ix Cont",
        "signature": "forall b.(a-\u003es y b)-\u003es x b"
      }
    }
  }
]