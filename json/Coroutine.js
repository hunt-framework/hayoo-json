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
        "word": "Coroutine"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module allows you to implement coroutines that communicate in a type-safe manner\nusing lightweight session types.  An abstract group of session \"type-combinators\" are\noffered, and implementations are indexed by those types.\n\u003c/p\u003e\u003cp\u003eIndexed monads are used to thread the session state through the computation.  We\ngenerally use them to implement \"type-level substitution\"; also known as\n\"big lambda\".  For example, consider a session\n\u003c/p\u003e\u003cpre\u003e  session1 :: forall r. Session (Int :?: String :!: r) r Int\n\u003c/pre\u003e\u003cp\u003eThis represents a session that reads an Int, then writes a String, and delivers\nan Int which can be used in the remainder of the session \u003ccode\u003er\u003c/code\u003e.  A way to write it\nwith full type functions (not legal Haskell) would be\n\u003c/p\u003e\u003cpre\u003e  session1 :: Session (/\\r. Int :?: String :!: r) Float\n\u003c/pre\u003e\u003cp\u003eUsing the indexed monad bind operator, we can do, for example:\n\u003c/p\u003e\u003cpre\u003e\n  session2 = do\n      x \u003c- session1\n      put x\n\u003c/pre\u003e\u003cp\u003eNow session2 has the type \u003ccode\u003eforall r. (Int :?: String :!: Float :!: r) r ()\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eConnecting two sessions is easy; if they are the dual of each other (one reads\nwhere the other writes), just call \u003ca\u003econnects s1 s2\u003c/a\u003e.  If the sessions are not\ncompatible, you'll get a reasonably readable compile-time error.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Coroutine",
          "name": "Coroutine",
          "package": "Coroutine",
          "source": "src/Control-Coroutine.html",
          "type": "module"
        },
        "index": {
          "description": "This module allows you to implement coroutines that communicate in type-safe manner using lightweight session types An abstract group of session type-combinators are offered and implementations are indexed by those types Indexed monads are used to thread the session state through the computation We generally use them to implement type-level substitution also known as big lambda For example consider session session1 forall Session Int String Int This represents session that reads an Int then writes String and delivers an Int which can be used in the remainder of the session way to write it with full type functions not legal Haskell would be session1 Session Int String Float Using the indexed monad bind operator we can do for example session2 do session1 put Now session2 has the type forall Int String Float Connecting two sessions is easy if they are the dual of each other one reads where the other writes just call connects s1 s2 If the sessions are not compatible you ll get reasonably readable compile-time error",
          "hierarchy": "Control Coroutine",
          "module": "Control.Coroutine",
          "name": "Coroutine",
          "package": "Coroutine",
          "partial": "Coroutine",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ea :|: b\u003c/code\u003e allows the choice between sessions \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e at runtime\n\u003c/p\u003e",
          "module": "Control.Coroutine",
          "name": ":|:",
          "package": "Coroutine",
          "source": "src/Control-Coroutine.html#%3A%7C%3A",
          "type": "data"
        },
        "index": {
          "description": "allows the choice between sessions and at runtime",
          "hierarchy": "Control Coroutine",
          "module": "Control.Coroutine",
          "name": ":|:",
          "package": "Coroutine",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#t::-124-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ea :!* b\u003c/code\u003e is the session \u003ccode\u003ea\u003c/code\u003e zero or more times followed by \u003ccode\u003eb\u003c/code\u003e, choosing whether or not to loop.\n\u003c/p\u003e",
          "module": "Control.Coroutine",
          "name": ":!*",
          "package": "Coroutine",
          "source": "src/Control-Coroutine.html#%3A%21%2A",
          "type": "data"
        },
        "index": {
          "description": "is the session zero or more times followed by choosing whether or not to loop",
          "hierarchy": "Control Coroutine",
          "module": "Control.Coroutine",
          "name": ":!*",
          "package": "Coroutine",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#t::-33--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ea :!: r\u003c/code\u003e writes \u003ccode\u003ea\u003c/code\u003e followed by the sesison \u003ccode\u003er\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Coroutine",
          "name": ":!:",
          "package": "Coroutine",
          "source": "src/Control-Coroutine.html#%3A%21%3A",
          "type": "data"
        },
        "index": {
          "description": "writes followed by the sesison",
          "hierarchy": "Control Coroutine",
          "module": "Control.Coroutine",
          "name": ":!:",
          "package": "Coroutine",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#t::-33-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ea :&: b\u003c/code\u003e offers both the sessions \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e to the other end\n\u003c/p\u003e",
          "module": "Control.Coroutine",
          "name": ":&:",
          "package": "Coroutine",
          "source": "src/Control-Coroutine.html#%3A%26%3A",
          "type": "data"
        },
        "index": {
          "description": "offers both the sessions and to the other end",
          "hierarchy": "Control Coroutine",
          "module": "Control.Coroutine",
          "name": ":&:",
          "package": "Coroutine",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#t::-38-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ea :* b\u003c/code\u003e is the session \u003ccode\u003ea\u003c/code\u003e zero or more times followed by \u003ccode\u003eb\u003c/code\u003e.  Either side may terminate the loop.\n\u003c/p\u003e",
          "module": "Control.Coroutine",
          "name": ":*",
          "package": "Coroutine",
          "source": "src/Control-Coroutine.html#%3A%2A",
          "type": "data"
        },
        "index": {
          "description": "is the session zero or more times followed by Either side may terminate the loop",
          "hierarchy": "Control Coroutine",
          "module": "Control.Coroutine",
          "name": ":*",
          "package": "Coroutine",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#t::-42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ea :++: b\u003c/code\u003e is session \u003ccode\u003ea\u003c/code\u003e followed by session \u003ccode\u003eb\u003c/code\u003e.\n This is mostly used for constructing looping constructs;\n you generally won't need to use it yourself.\n\u003c/p\u003e",
          "module": "Control.Coroutine",
          "name": ":++:",
          "package": "Coroutine",
          "source": "src/Control-Coroutine.html#%3A%2B%2B%3A",
          "type": "data"
        },
        "index": {
          "description": "is session followed by session This is mostly used for constructing looping constructs you generally won need to use it yourself",
          "hierarchy": "Control Coroutine",
          "module": "Control.Coroutine",
          "name": ":++:",
          "package": "Coroutine",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#t::-43--43-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ea :?* b\u003c/code\u003e is the session \u003ccode\u003ea\u003c/code\u003e zero or more times followed by \u003ccode\u003eb\u003c/code\u003e, offering the loop.\n\u003c/p\u003e",
          "module": "Control.Coroutine",
          "name": ":?*",
          "package": "Coroutine",
          "source": "src/Control-Coroutine.html#%3A%3F%2A",
          "type": "data"
        },
        "index": {
          "description": "is the session zero or more times followed by offering the loop",
          "hierarchy": "Control Coroutine",
          "module": "Control.Coroutine",
          "name": ":?*",
          "package": "Coroutine",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#t::-63--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ea :?: r\u003c/code\u003e reads \u003ccode\u003ea\u003c/code\u003e followed by the session \u003ccode\u003er\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Coroutine",
          "name": ":?:",
          "package": "Coroutine",
          "source": "src/Control-Coroutine.html#%3A%3F%3A",
          "type": "data"
        },
        "index": {
          "description": "reads followed by the session",
          "hierarchy": "Control Coroutine",
          "module": "Control.Coroutine",
          "name": ":?:",
          "package": "Coroutine",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#t::-63-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Coroutine",
          "name": "Connect",
          "package": "Coroutine",
          "source": "src/Control-Coroutine.html#Connect",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Coroutine",
          "module": "Control.Coroutine",
          "name": "Connect",
          "package": "Coroutine",
          "partial": "Connect",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#t:Connect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Coroutine",
          "name": "Dual",
          "package": "Coroutine",
          "signature": "Dual",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Coroutine",
          "module": "Control.Coroutine",
          "name": "Dual",
          "package": "Coroutine",
          "partial": "Dual",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#t:Dual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eEps\u003c/code\u003e is the empty session.\n\u003c/p\u003e",
          "module": "Control.Coroutine",
          "name": "Eps",
          "package": "Coroutine",
          "source": "src/Control-Coroutine.html#Eps",
          "type": "data"
        },
        "index": {
          "description": "Eps is the empty session",
          "hierarchy": "Control Coroutine",
          "module": "Control.Coroutine",
          "name": "Eps",
          "package": "Coroutine",
          "partial": "Eps",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#t:Eps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInSession s v is a functor type representing a session that results in the value v\n being computed by the session.  s should be indexed by one of the session types above,\n although you can extended the session type system by adding additional instances\n here and to Dual and Connect below.\n\u003c/p\u003e",
          "module": "Control.Coroutine",
          "name": "InSession",
          "package": "Coroutine",
          "signature": "InSession",
          "type": "function"
        },
        "index": {
          "description": "InSession is functor type representing session that results in the value being computed by the session should be indexed by one of the session types above although you can extended the session type system by adding additional instances here and to Dual and Connect below",
          "hierarchy": "Control Coroutine",
          "module": "Control.Coroutine",
          "name": "InSession",
          "package": "Coroutine",
          "partial": "In Session",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#t:InSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoop is just nicely-named Either; it is used for\n choosing whether or not to loop in these simplified looping\n primitives.\n\u003c/p\u003e",
          "module": "Control.Coroutine",
          "name": "Loop",
          "package": "Coroutine",
          "source": "src/Control-Coroutine.html#Loop",
          "type": "data"
        },
        "index": {
          "description": "Loop is just nicely-named Either it is used for choosing whether or not to loop in these simplified looping primitives",
          "hierarchy": "Control Coroutine",
          "module": "Control.Coroutine",
          "name": "Loop",
          "package": "Coroutine",
          "partial": "Loop",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#t:Loop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBy indexing using a data family, we get an untagged representation of the\n session; resolving how to link sessions together with \u003ca\u003econnect\u003c/a\u003e can happen\n at compile-time.  A similar encoding is possible using GADTs, but it requires\n runtime branching based on the GADT tag.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eIxCont s x y a\u003c/code\u003e == \u003ccode\u003eforall b. (a -\u003e s y b) -\u003e s x b\u003c/code\u003e; that is, if you give us\n a continuation function that takes an \u003ca\u003ea\u003c/a\u003e and outputs the rest of the session,\n we can give you a representation of the full session.  When a session is\n complete, \u003ccode\u003ey\u003c/code\u003e is \u003ccode\u003eEps\u003c/code\u003e, the empty session, so getting the full session out\n is just \u003ccode\u003erunIxCont (getSession session) Eps\u003c/code\u003e which gives you the result of type\n \u003ccode\u003eInSession session_type a\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Coroutine",
          "name": "Session",
          "package": "Coroutine",
          "source": "src/Control-Coroutine.html#Session",
          "type": "newtype"
        },
        "index": {
          "description": "By indexing using data family we get an untagged representation of the session resolving how to link sessions together with connect can happen at compile-time similar encoding is possible using GADTs but it requires runtime branching based on the GADT tag IxCont forall that is if you give us continuation function that takes an and outputs the rest of the session we can give you representation of the full session When session is complete is Eps the empty session so getting the full session out is just runIxCont getSession session Eps which gives you the result of type InSession session type",
          "hierarchy": "Control Coroutine",
          "module": "Control.Coroutine",
          "name": "Session",
          "package": "Coroutine",
          "partial": "Session",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#t:Session"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWM stands for \u003ca\u003ewrapped monad\u003c/a\u003e; it wraps any Prelude monad.\n This doesn't really belong in this module, but exporting it\n correctly from IxMonad is a real pain.\n This allows you to use NoImplicitPrelude when writing\n \u003ca\u003emain\u003c/a\u003e in the following way:\n\u003c/p\u003e\u003cpre\u003e\n module Main where\n import Control.Coroutine\n main = runWM $ do\n           LiftWM $ putStrLn \u003ca\u003ehello world\u003c/a\u003e\n\u003c/pre\u003e",
          "module": "Control.Coroutine",
          "name": "WM",
          "package": "Coroutine",
          "source": "src/Control-Coroutine.html#WM",
          "type": "newtype"
        },
        "index": {
          "description": "WM stands for wrapped monad it wraps any Prelude monad This doesn really belong in this module but exporting it correctly from IxMonad is real pain This allows you to use NoImplicitPrelude when writing main in the following way module Main where import Control.Coroutine main runWM do LiftWM putStrLn hello world",
          "hierarchy": "Control Coroutine",
          "module": "Control.Coroutine",
          "name": "WM",
          "package": "Coroutine",
          "partial": "WM",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#t:WM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Coroutine",
          "name": "Done",
          "package": "Coroutine",
          "signature": "Done b",
          "source": "src/Control-Coroutine.html#Loop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Coroutine",
          "module": "Control.Coroutine",
          "name": "Done",
          "package": "Coroutine",
          "partial": "Done",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#v:Done"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Coroutine",
          "name": "LiftWM",
          "package": "Coroutine",
          "signature": "LiftWM",
          "source": "src/Control-Coroutine.html#WM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Coroutine",
          "module": "Control.Coroutine",
          "name": "LiftWM",
          "package": "Coroutine",
          "partial": "Lift WM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#v:LiftWM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Coroutine",
          "name": "Loop",
          "package": "Coroutine",
          "signature": "Loop a",
          "source": "src/Control-Coroutine.html#Loop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Coroutine",
          "module": "Control.Coroutine",
          "name": "Loop",
          "package": "Coroutine",
          "partial": "Loop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#v:Loop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Coroutine",
          "name": "Session",
          "package": "Coroutine",
          "signature": "Session",
          "source": "src/Control-Coroutine.html#Session",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Coroutine",
          "module": "Control.Coroutine",
          "name": "Session",
          "package": "Coroutine",
          "partial": "Session",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#v:Session"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecat m takes a completed session and connects it at\n the beginning of a sequence inside another session.\n\u003c/p\u003e",
          "module": "Control.Coroutine",
          "name": "cat",
          "package": "Coroutine",
          "signature": "Session a Eps v -\u003e Session (a :++: r) r v",
          "source": "src/Control-Coroutine.html#cat",
          "type": "function"
        },
        "index": {
          "description": "cat takes completed session and connects it at the beginning of sequence inside another session",
          "hierarchy": "Control Coroutine",
          "module": "Control.Coroutine",
          "name": "cat",
          "normalized": "Session a Eps b-\u003eSession(a c)c b",
          "package": "Coroutine",
          "signature": "Session a Eps v-\u003eSession(a r)r v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#v:cat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYou never \u003cem\u003eneed\u003c/em\u003e to explicitly call close; doing so just seals the\n \"rest-of-computation\" parameter of the session.\n\u003c/p\u003e",
          "module": "Control.Coroutine",
          "name": "close",
          "package": "Coroutine",
          "signature": "Session Eps Eps ()",
          "source": "src/Control-Coroutine.html#close",
          "type": "function"
        },
        "index": {
          "description": "You never need to explicitly call close doing so just seals the rest-of-computation parameter of the session",
          "hierarchy": "Control Coroutine",
          "module": "Control.Coroutine",
          "name": "close",
          "normalized": "Session Eps Eps()",
          "package": "Coroutine",
          "signature": "Session Eps Eps()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#v:close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Coroutine",
          "name": "connect",
          "package": "Coroutine",
          "signature": "InSession s a -\u003e InSession c b -\u003e (a, b)",
          "source": "src/Control-Coroutine.html#connect",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Coroutine",
          "module": "Control.Coroutine",
          "name": "connect",
          "normalized": "InSession a b-\u003eInSession c d-\u003e(b,d)",
          "package": "Coroutine",
          "signature": "InSession s a-\u003eInSession c b-\u003e(a,b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#v:connect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econnect two completed sessions to each other\n\u003c/p\u003e",
          "module": "Control.Coroutine",
          "name": "connects",
          "package": "Coroutine",
          "signature": "Session s Eps a -\u003e Session c Eps b -\u003e (a, b)",
          "source": "src/Control-Coroutine.html#connects",
          "type": "function"
        },
        "index": {
          "description": "connect two completed sessions to each other",
          "hierarchy": "Control Coroutine",
          "module": "Control.Coroutine",
          "name": "connects",
          "normalized": "Session a Eps b-\u003eSession c Eps d-\u003e(b,d)",
          "package": "Coroutine",
          "signature": "Session s Eps a-\u003eSession c Eps b-\u003e(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#v:connects"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget reads an element from the connected coroutine\n\u003c/p\u003e",
          "module": "Control.Coroutine",
          "name": "get",
          "package": "Coroutine",
          "signature": "Session (a :?: r) r a",
          "source": "src/Control-Coroutine.html#get",
          "type": "function"
        },
        "index": {
          "description": "get reads an element from the connected coroutine",
          "hierarchy": "Control Coroutine",
          "module": "Control.Coroutine",
          "name": "get",
          "package": "Coroutine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Coroutine",
          "name": "getSession",
          "package": "Coroutine",
          "signature": "IxCont InSession x y a",
          "source": "src/Control-Coroutine.html#Session",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Coroutine",
          "module": "Control.Coroutine",
          "name": "getSession",
          "package": "Coroutine",
          "partial": "Session",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#v:getSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eloop is a slightly more complicated looping primitive where either\n side of the loop may choose to terminate the loop at each iteration.\n It is useful for a server that has a fixed amount of data to give out,\n when the client can also choose to escape early.\n\u003c/p\u003e",
          "module": "Control.Coroutine",
          "name": "loop",
          "package": "Coroutine",
          "signature": "Loop a b-\u003e (a -\u003e Session x Eps (Loop a b))-\u003e Session (x :* r) r (Either a b)",
          "type": "function"
        },
        "index": {
          "description": "loop is slightly more complicated looping primitive where either side of the loop may choose to terminate the loop at each iteration It is useful for server that has fixed amount of data to give out when the client can also choose to escape early",
          "hierarchy": "Control Coroutine",
          "module": "Control.Coroutine",
          "name": "loop",
          "normalized": "Loop a b-\u003e(a-\u003eSession c Eps(Loop a b))-\u003eSession(c*d)d(Either a b)",
          "package": "Coroutine",
          "signature": "Loop a b-\u003e(a-\u003eSession x Eps(Loop a b))-\u003eSession(x*r)r(Either a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#v:loop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eloopC is the client side of a \u003ca\u003ewhile\u003c/a\u003e loop; it takes the current\n loop state, and a computation that figures out the next loop state,\n and loops until the computation returns \u003ca\u003eDone\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Control.Coroutine",
          "name": "loopC",
          "package": "Coroutine",
          "signature": "Loop a b-\u003e (a -\u003e Session x Eps (Loop a b))-\u003e Session (x :!* r) r b",
          "type": "function"
        },
        "index": {
          "description": "loopC is the client side of while loop it takes the current loop state and computation that figures out the next loop state and loops until the computation returns Done",
          "hierarchy": "Control Coroutine",
          "module": "Control.Coroutine",
          "name": "loopC",
          "normalized": "Loop a b-\u003e(a-\u003eSession c Eps(Loop a b))-\u003eSession(c*d)d b",
          "package": "Coroutine",
          "signature": "Loop a b-\u003e(a-\u003eSession x Eps(Loop a b))-\u003eSession(x*r)r b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#v:loopC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eloopS is the server side of a \u003ca\u003ewhile\u003c/a\u003e loop; it must always offer\n the client the option to terminate the loop at each iteration, or\n to continue the loop.\n\u003c/p\u003e",
          "module": "Control.Coroutine",
          "name": "loopS",
          "package": "Coroutine",
          "signature": "a-\u003e (a -\u003e Session x Eps a)-\u003e Session (x :?* r) r a",
          "type": "function"
        },
        "index": {
          "description": "loopS is the server side of while loop it must always offer the client the option to terminate the loop at each iteration or to continue the loop",
          "hierarchy": "Control Coroutine",
          "module": "Control.Coroutine",
          "name": "loopS",
          "normalized": "a-\u003e(a-\u003eSession b Eps a)-\u003eSession(b*c)c a",
          "package": "Coroutine",
          "signature": "a-\u003e(a-\u003eSession x Eps a)-\u003eSession(x*r)r a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#v:loopS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eoffer s1 s2 gives the other side the choice of whether\n to continue with session s1 or s2.\n\u003c/p\u003e",
          "module": "Control.Coroutine",
          "name": "offer",
          "package": "Coroutine",
          "signature": "Session a r v -\u003e Session b r v -\u003e Session (a :&: b) r v",
          "source": "src/Control-Coroutine.html#offer",
          "type": "function"
        },
        "index": {
          "description": "offer s1 s2 gives the other side the choice of whether to continue with session s1 or s2",
          "hierarchy": "Control Coroutine",
          "module": "Control.Coroutine",
          "name": "offer",
          "normalized": "Session a b c-\u003eSession d b c-\u003eSession(a d)b c",
          "package": "Coroutine",
          "signature": "Session a r v-\u003eSession b r v-\u003eSession(a b)r v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#v:offer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eput x sends the value x to the connected coroutine\n\u003c/p\u003e",
          "module": "Control.Coroutine",
          "name": "put",
          "package": "Coroutine",
          "signature": "a -\u003e Session (a :!: r) r ()",
          "source": "src/Control-Coroutine.html#put",
          "type": "function"
        },
        "index": {
          "description": "put sends the value to the connected coroutine",
          "hierarchy": "Control Coroutine",
          "module": "Control.Coroutine",
          "name": "put",
          "normalized": "a-\u003eSession(a b)b()",
          "package": "Coroutine",
          "signature": "a-\u003eSession(a r)r()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#v:put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erunSession converts a session computation into a \u003ca\u003econnectable\u003c/a\u003e\n session.\n\u003c/p\u003e",
          "module": "Control.Coroutine",
          "name": "runSession",
          "package": "Coroutine",
          "signature": "Session c Eps a -\u003e InSession c a",
          "source": "src/Control-Coroutine.html#runSession",
          "type": "function"
        },
        "index": {
          "description": "runSession converts session computation into connectable session",
          "hierarchy": "Control Coroutine",
          "module": "Control.Coroutine",
          "name": "runSession",
          "normalized": "Session a Eps b-\u003eInSession a b",
          "package": "Coroutine",
          "partial": "Session",
          "signature": "Session c Eps a-\u003eInSession c a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#v:runSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Coroutine",
          "name": "runWM",
          "package": "Coroutine",
          "signature": "m a",
          "source": "src/Control-Coroutine.html#WM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Coroutine",
          "module": "Control.Coroutine",
          "name": "runWM",
          "package": "Coroutine",
          "partial": "WM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#v:runWM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esel1 chooses the first branch of an offer\n\u003c/p\u003e",
          "module": "Control.Coroutine",
          "name": "sel1",
          "package": "Coroutine",
          "signature": "Session (a :|: b) a ()",
          "source": "src/Control-Coroutine.html#sel1",
          "type": "function"
        },
        "index": {
          "description": "sel1 chooses the first branch of an offer",
          "hierarchy": "Control Coroutine",
          "module": "Control.Coroutine",
          "name": "sel1",
          "normalized": "Session(a b)a()",
          "package": "Coroutine",
          "signature": "Session(a b)a()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#v:sel1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esel2 chooses the second branch of an offer\n\u003c/p\u003e",
          "module": "Control.Coroutine",
          "name": "sel2",
          "package": "Coroutine",
          "signature": "Session (a :|: b) b ()",
          "source": "src/Control-Coroutine.html#sel2",
          "type": "function"
        },
        "index": {
          "description": "sel2 chooses the second branch of an offer",
          "hierarchy": "Control Coroutine",
          "module": "Control.Coroutine",
          "name": "sel2",
          "normalized": "Session(a b)b()",
          "package": "Coroutine",
          "signature": "Session(a b)b()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Coroutine.html#v:sel2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed",
          "name": "Indexed",
          "package": "Coroutine",
          "source": "src/Control-Monad-Indexed.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Indexed",
          "module": "Control.Monad.Indexed",
          "name": "Indexed",
          "package": "Coroutine",
          "partial": "Indexed",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Monad-Indexed.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIxCont is a continuation monad that supports changing\n of the answer type during the computation.  The result\n is a functor \u003ca\u003es x\u003c/a\u003e, where the caller of the computation\n controls the type held inside the functor.\n\u003c/p\u003e",
          "module": "Control.Monad.Indexed",
          "name": "IxCont",
          "package": "Coroutine",
          "source": "src/Control-Monad-Indexed.html#IxCont",
          "type": "newtype"
        },
        "index": {
          "description": "IxCont is continuation monad that supports changing of the answer type during the computation The result is functor where the caller of the computation controls the type held inside the functor",
          "hierarchy": "Control Monad Indexed",
          "module": "Control.Monad.Indexed",
          "name": "IxCont",
          "package": "Coroutine",
          "partial": "Ix Cont",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Monad-Indexed.html#t:IxCont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIxMonad (Indexed Monad) carries type-level state through a\n computation.  For an IxMonad m, m px py a represents a computation\n with precondition px, postcondition py, and result value a.\n \u003ca\u003epx\u003c/a\u003e and \u003ca\u003epy\u003c/a\u003e can be thought of as type-level propositions\n that hold at the beginning and end of the computation.\n\u003c/p\u003e",
          "module": "Control.Monad.Indexed",
          "name": "IxMonad",
          "package": "Coroutine",
          "source": "src/Control-Monad-Indexed.html#IxMonad",
          "type": "class"
        },
        "index": {
          "description": "IxMonad Indexed Monad carries type-level state through computation For an IxMonad px py represents computation with precondition px postcondition py and result value px and py can be thought of as type-level propositions that hold at the beginning and end of the computation",
          "hierarchy": "Control Monad Indexed",
          "module": "Control.Monad.Indexed",
          "name": "IxMonad",
          "package": "Coroutine",
          "partial": "Ix Monad",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Monad-Indexed.html#t:IxMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed",
          "name": "(\u003e\u003e)",
          "package": "Coroutine",
          "signature": "m x y a -\u003e m y z b -\u003e m x z b",
          "source": "src/Control-Monad-Indexed.html#%3E%3E",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Indexed",
          "module": "Control.Monad.Indexed",
          "name": "(\u003e\u003e) \u003e\u003e",
          "normalized": "a b c d-\u003ea c e f-\u003ea b e f",
          "package": "Coroutine",
          "signature": "m x y a-\u003em y z b-\u003em x z b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Monad-Indexed.html#v:-62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed",
          "name": "(\u003e\u003e=)",
          "package": "Coroutine",
          "signature": "m x y a -\u003e (a -\u003e m y z b) -\u003e m x z b",
          "source": "src/Control-Monad-Indexed.html#%3E%3E%3D",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Indexed",
          "module": "Control.Monad.Indexed",
          "name": "(\u003e\u003e=) \u003e\u003e=",
          "normalized": "a b c d-\u003e(d-\u003ea c e f)-\u003ea b e f",
          "package": "Coroutine",
          "signature": "m x y a-\u003e(a-\u003em y z b)-\u003em x z b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Monad-Indexed.html#v:-62--62--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed",
          "name": "IxCont",
          "package": "Coroutine",
          "signature": "IxCont",
          "source": "src/Control-Monad-Indexed.html#IxCont",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Indexed",
          "module": "Control.Monad.Indexed",
          "name": "IxCont",
          "package": "Coroutine",
          "partial": "Ix Cont",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Monad-Indexed.html#v:IxCont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed",
          "name": "fail",
          "package": "Coroutine",
          "signature": "String -\u003e m x y a",
          "source": "src/Control-Monad-Indexed.html#fail",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Indexed",
          "module": "Control.Monad.Indexed",
          "name": "fail",
          "normalized": "String-\u003ea b c d",
          "package": "Coroutine",
          "signature": "String-\u003em x y a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Monad-Indexed.html#v:fail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emapCont changes the answer type of an IxCont, given a function\n that maps any (s x) to a (s y).\n\u003c/p\u003e",
          "module": "Control.Monad.Indexed",
          "name": "mapCont",
          "package": "Coroutine",
          "signature": "(forall a.  s x a -\u003e s y a) -\u003e IxCont s x z a -\u003e IxCont s y z a",
          "source": "src/Control-Monad-Indexed.html#mapCont",
          "type": "function"
        },
        "index": {
          "description": "mapCont changes the answer type of an IxCont given function that maps any to",
          "hierarchy": "Control Monad Indexed",
          "module": "Control.Monad.Indexed",
          "name": "mapCont",
          "normalized": "(a b c d e-\u003ec f e)-\u003eIxCont c d g e-\u003eIxCont c f g e",
          "package": "Coroutine",
          "partial": "Cont",
          "signature": "(forall a. s x a-\u003es y a)-\u003eIxCont s x z a-\u003eIxCont s y z a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Monad-Indexed.html#v:mapCont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed",
          "name": "return",
          "package": "Coroutine",
          "signature": "a -\u003e m x x a",
          "source": "src/Control-Monad-Indexed.html#return",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Indexed",
          "module": "Control.Monad.Indexed",
          "name": "return",
          "normalized": "a-\u003eb c c a",
          "package": "Coroutine",
          "signature": "a-\u003em x x a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Monad-Indexed.html#v:return"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed",
          "name": "runIxCont",
          "package": "Coroutine",
          "signature": "forall b.  (a -\u003e s y b) -\u003e s x b",
          "source": "src/Control-Monad-Indexed.html#IxCont",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Indexed",
          "module": "Control.Monad.Indexed",
          "name": "runIxCont",
          "normalized": "a b(c-\u003ed e f)-\u003ed g f",
          "package": "Coroutine",
          "partial": "Ix Cont",
          "signature": "forall b.(a-\u003es y b)-\u003es x b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Coroutine/docs/Control-Monad-Indexed.html#v:runIxCont"
      }
    }
  ]
]