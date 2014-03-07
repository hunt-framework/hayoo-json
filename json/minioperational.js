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
        "word": "minioperational"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA class for operational monads\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Operational.Class",
          "name": "Class",
          "package": "minioperational",
          "source": "src/Control-Monad-Operational-Class.html",
          "type": "module"
        },
        "index": {
          "description": "class for operational monads",
          "hierarchy": "Control Monad Operational Class",
          "module": "Control.Monad.Operational.Class",
          "name": "Class",
          "package": "minioperational",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/minioperational/docs/Control-Monad-Operational-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Operational.Class",
          "name": ":!",
          "package": "minioperational",
          "source": "src/Control-Monad-Operational-Class.html#%3A%21",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad Operational Class",
          "module": "Control.Monad.Operational.Class",
          "name": ":!",
          "package": "minioperational",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/minioperational/docs/Control-Monad-Operational-Class.html#t::-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an operational action from a single imperative.\n\u003c/p\u003e",
          "module": "Control.Monad.Operational.Class",
          "name": "singleton",
          "package": "minioperational",
          "signature": "t a -\u003e m a",
          "source": "src/Control-Monad-Operational-Class.html#singleton",
          "type": "method"
        },
        "index": {
          "description": "Construct an operational action from single imperative",
          "hierarchy": "Control Monad Operational Class",
          "module": "Control.Monad.Operational.Class",
          "name": "singleton",
          "normalized": "a b-\u003ec b",
          "package": "minioperational",
          "signature": "t a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/minioperational/docs/Control-Monad-Operational-Class.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple operational monad\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Operational.Mini",
          "name": "Mini",
          "package": "minioperational",
          "source": "src/Control-Monad-Operational-Mini.html",
          "type": "module"
        },
        "index": {
          "description": "Simple operational monad",
          "hierarchy": "Control Monad Operational Mini",
          "module": "Control.Monad.Operational.Mini",
          "name": "Mini",
          "package": "minioperational",
          "partial": "Mini",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/minioperational/docs/Control-Monad-Operational-Mini.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProgram t is a \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e that represents a sequence of imperatives.\n To construct imperatives, use \u003ccode\u003e\u003ca\u003esingleton\u003c/a\u003e\u003c/code\u003e :: t a -\u003e Program t a.\n\u003c/p\u003e",
          "module": "Control.Monad.Operational.Mini",
          "name": "Program",
          "package": "minioperational",
          "source": "src/Control-Monad-Operational-Mini.html#Program",
          "type": "newtype"
        },
        "index": {
          "description": "Program is Monad that represents sequence of imperatives To construct imperatives use singleton Program",
          "hierarchy": "Control Monad Operational Mini",
          "module": "Control.Monad.Operational.Mini",
          "name": "Program",
          "package": "minioperational",
          "partial": "Program",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/minioperational/docs/Control-Monad-Operational-Mini.html#t:Program"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReified version of \u003ccode\u003e\u003ca\u003eProgram\u003c/a\u003e\u003c/code\u003e. It is useful for testing.\n\u003c/p\u003e",
          "module": "Control.Monad.Operational.Mini",
          "name": "ReifiedProgram",
          "package": "minioperational",
          "source": "src/Control-Monad-Operational-Mini.html#ReifiedProgram",
          "type": "data"
        },
        "index": {
          "description": "Reified version of Program It is useful for testing",
          "hierarchy": "Control Monad Operational Mini",
          "module": "Control.Monad.Operational.Mini",
          "name": "ReifiedProgram",
          "package": "minioperational",
          "partial": "Reified Program",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/minioperational/docs/Control-Monad-Operational-Mini.html#t:ReifiedProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Operational.Mini",
          "name": ":\u003e\u003e=",
          "package": "minioperational",
          "signature": "t a -\u003e (a -\u003e ReifiedProgram t b) -\u003e ReifiedProgram t b",
          "source": "src/Control-Monad-Operational-Mini.html#ReifiedProgram",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Operational Mini",
          "module": "Control.Monad.Operational.Mini",
          "name": ":\u003e\u003e=",
          "normalized": "a b-\u003e(b-\u003eReifiedProgram a c)-\u003eReifiedProgram a c",
          "package": "minioperational",
          "signature": "t a-\u003e(a-\u003eReifiedProgram t b)-\u003eReifiedProgram t b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minioperational/docs/Control-Monad-Operational-Mini.html#v::-62--62--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Operational.Mini",
          "name": "Program",
          "package": "minioperational",
          "signature": "Program",
          "source": "src/Control-Monad-Operational-Mini.html#Program",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Operational Mini",
          "module": "Control.Monad.Operational.Mini",
          "name": "Program",
          "package": "minioperational",
          "partial": "Program",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minioperational/docs/Control-Monad-Operational-Mini.html#v:Program"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Operational.Mini",
          "name": "Return",
          "package": "minioperational",
          "signature": "a -\u003e ReifiedProgram t a",
          "source": "src/Control-Monad-Operational-Mini.html#ReifiedProgram",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Operational Mini",
          "module": "Control.Monad.Operational.Mini",
          "name": "Return",
          "normalized": "a-\u003eReifiedProgram b a",
          "package": "minioperational",
          "partial": "Return",
          "signature": "a-\u003eReifiedProgram t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minioperational/docs/Control-Monad-Operational-Mini.html#v:Return"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Operational.Mini",
          "name": "cloneProgram",
          "package": "minioperational",
          "signature": "Program t a -\u003e m a",
          "source": "src/Control-Monad-Operational-Mini.html#cloneProgram",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Operational Mini",
          "module": "Control.Monad.Operational.Mini",
          "name": "cloneProgram",
          "normalized": "Program a b-\u003ec b",
          "package": "minioperational",
          "partial": "Program",
          "signature": "Program t a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minioperational/docs/Control-Monad-Operational-Mini.html#v:cloneProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Operational.Mini",
          "name": "fromReified",
          "package": "minioperational",
          "signature": "ReifiedProgram t a -\u003e Program t a",
          "source": "src/Control-Monad-Operational-Mini.html#fromReified",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Operational Mini",
          "module": "Control.Monad.Operational.Mini",
          "name": "fromReified",
          "normalized": "ReifiedProgram a b-\u003eProgram a b",
          "package": "minioperational",
          "partial": "Reified",
          "signature": "ReifiedProgram t a-\u003eProgram t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minioperational/docs/Control-Monad-Operational-Mini.html#v:fromReified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterpret a \u003ccode\u003e\u003ca\u003eProgram\u003c/a\u003e\u003c/code\u003e using the given transformation.\n\u003c/p\u003e",
          "module": "Control.Monad.Operational.Mini",
          "name": "interpret",
          "package": "minioperational",
          "signature": "(forall x.  t x -\u003e m x) -\u003e Program t a -\u003e m a",
          "source": "src/Control-Monad-Operational-Mini.html#interpret",
          "type": "function"
        },
        "index": {
          "description": "Interpret Program using the given transformation",
          "hierarchy": "Control Monad Operational Mini",
          "module": "Control.Monad.Operational.Mini",
          "name": "interpret",
          "normalized": "(a b c d-\u003ee d)-\u003eProgram c f-\u003ee f",
          "package": "minioperational",
          "signature": "(forall x. t x-\u003em x)-\u003eProgram t a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minioperational/docs/Control-Monad-Operational-Mini.html#v:interpret"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Operational.Mini",
          "name": "unProgram",
          "package": "minioperational",
          "signature": "forall r.  (a -\u003e r) -\u003e (forall x.  t x -\u003e (x -\u003e r) -\u003e r) -\u003e r",
          "source": "src/Control-Monad-Operational-Mini.html#Program",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Operational Mini",
          "module": "Control.Monad.Operational.Mini",
          "name": "unProgram",
          "normalized": "a b(c-\u003ed)-\u003e(a e f g-\u003e(g-\u003ed)-\u003ed)-\u003ed",
          "package": "minioperational",
          "partial": "Program",
          "signature": "forall r.(a-\u003er)-\u003e(forall x. t x-\u003e(x-\u003er)-\u003er)-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minioperational/docs/Control-Monad-Operational-Mini.html#v:unProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Operational.TH",
          "name": "TH",
          "package": "minioperational",
          "source": "src/Control-Monad-Operational-TH.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Operational TH",
          "module": "Control.Monad.Operational.TH",
          "name": "TH",
          "package": "minioperational",
          "partial": "TH",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/minioperational/docs/Control-Monad-Operational-TH.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Operational.TH",
          "name": "makeSingletons",
          "package": "minioperational",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/Control-Monad-Operational-TH.html#makeSingletons",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Operational TH",
          "module": "Control.Monad.Operational.TH",
          "name": "makeSingletons",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "minioperational",
          "partial": "Singletons",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minioperational/docs/Control-Monad-Operational-TH.html#v:makeSingletons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple operational monad transformer\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Trans.Operational.Mini",
          "name": "Mini",
          "package": "minioperational",
          "source": "src/Control-Monad-Trans-Operational-Mini.html",
          "type": "module"
        },
        "index": {
          "description": "Simple operational monad transformer",
          "hierarchy": "Control Monad Trans Operational Mini",
          "module": "Control.Monad.Trans.Operational.Mini",
          "name": "Mini",
          "package": "minioperational",
          "partial": "Mini",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/minioperational/docs/Control-Monad-Trans-Operational-Mini.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Operational.Mini",
          "name": "ProgramT",
          "package": "minioperational",
          "source": "src/Control-Monad-Trans-Operational-Mini.html#ProgramT",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Monad Trans Operational Mini",
          "module": "Control.Monad.Trans.Operational.Mini",
          "name": "ProgramT",
          "package": "minioperational",
          "partial": "Program",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/minioperational/docs/Control-Monad-Trans-Operational-Mini.html#t:ProgramT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Operational.Mini",
          "name": "ReifiedProgramT",
          "package": "minioperational",
          "source": "src/Control-Monad-Trans-Operational-Mini.html#ReifiedProgramT",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Monad Trans Operational Mini",
          "module": "Control.Monad.Trans.Operational.Mini",
          "name": "ReifiedProgramT",
          "package": "minioperational",
          "partial": "Reified Program",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/minioperational/docs/Control-Monad-Trans-Operational-Mini.html#t:ReifiedProgramT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Operational.Mini",
          "name": ":\u003e\u003e=",
          "package": "minioperational",
          "signature": "t a -\u003e (a -\u003e ReifiedProgramT t m b) -\u003e ReifiedProgramT t m b",
          "source": "src/Control-Monad-Trans-Operational-Mini.html#ReifiedProgramT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Operational Mini",
          "module": "Control.Monad.Trans.Operational.Mini",
          "name": ":\u003e\u003e=",
          "normalized": "a b-\u003e(b-\u003eReifiedProgramT a c d)-\u003eReifiedProgramT a c d",
          "package": "minioperational",
          "signature": "t a-\u003e(a-\u003eReifiedProgramT t m b)-\u003eReifiedProgramT t m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minioperational/docs/Control-Monad-Trans-Operational-Mini.html#v::-62--62--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Operational.Mini",
          "name": "Lift",
          "package": "minioperational",
          "signature": "m a -\u003e (a -\u003e ReifiedProgramT t m b) -\u003e ReifiedProgramT t m b",
          "source": "src/Control-Monad-Trans-Operational-Mini.html#ReifiedProgramT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Operational Mini",
          "module": "Control.Monad.Trans.Operational.Mini",
          "name": "Lift",
          "normalized": "a b-\u003e(b-\u003eReifiedProgramT c a d)-\u003eReifiedProgramT c a d",
          "package": "minioperational",
          "partial": "Lift",
          "signature": "m a-\u003e(a-\u003eReifiedProgramT t m b)-\u003eReifiedProgramT t m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minioperational/docs/Control-Monad-Trans-Operational-Mini.html#v:Lift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Operational.Mini",
          "name": "ProgramT",
          "package": "minioperational",
          "signature": "ProgramT",
          "source": "src/Control-Monad-Trans-Operational-Mini.html#ProgramT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Operational Mini",
          "module": "Control.Monad.Trans.Operational.Mini",
          "name": "ProgramT",
          "package": "minioperational",
          "partial": "Program",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minioperational/docs/Control-Monad-Trans-Operational-Mini.html#v:ProgramT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Operational.Mini",
          "name": "Return",
          "package": "minioperational",
          "signature": "a -\u003e ReifiedProgramT t m a",
          "source": "src/Control-Monad-Trans-Operational-Mini.html#ReifiedProgramT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Operational Mini",
          "module": "Control.Monad.Trans.Operational.Mini",
          "name": "Return",
          "normalized": "a-\u003eReifiedProgramT b c a",
          "package": "minioperational",
          "partial": "Return",
          "signature": "a-\u003eReifiedProgramT t m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minioperational/docs/Control-Monad-Trans-Operational-Mini.html#v:Return"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Operational.Mini",
          "name": "fromReifiedT",
          "package": "minioperational",
          "signature": "ReifiedProgramT t m a -\u003e ProgramT t m a",
          "source": "src/Control-Monad-Trans-Operational-Mini.html#fromReifiedT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Operational Mini",
          "module": "Control.Monad.Trans.Operational.Mini",
          "name": "fromReifiedT",
          "normalized": "ReifiedProgramT a b c-\u003eProgramT a b c",
          "package": "minioperational",
          "partial": "Reified",
          "signature": "ReifiedProgramT t m a-\u003eProgramT t m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minioperational/docs/Control-Monad-Trans-Operational-Mini.html#v:fromReifiedT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Operational.Mini",
          "name": "hoistReifiedT",
          "package": "minioperational",
          "signature": "(forall x.  t x -\u003e s x) -\u003e ReifiedProgramT t m a -\u003e ReifiedProgramT s m a",
          "source": "src/Control-Monad-Trans-Operational-Mini.html#hoistReifiedT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Operational Mini",
          "module": "Control.Monad.Trans.Operational.Mini",
          "name": "hoistReifiedT",
          "normalized": "(a b c d-\u003ee d)-\u003eReifiedProgramT c f g-\u003eReifiedProgramT e f g",
          "package": "minioperational",
          "partial": "Reified",
          "signature": "(forall x. t x-\u003es x)-\u003eReifiedProgramT t m a-\u003eReifiedProgramT s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minioperational/docs/Control-Monad-Trans-Operational-Mini.html#v:hoistReifiedT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterpret a \u003ccode\u003eProgram\u003c/code\u003e using the given transformation.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Operational.Mini",
          "name": "interpret",
          "package": "minioperational",
          "signature": "(forall x.  t x -\u003e m x) -\u003e ProgramT t m a -\u003e m a",
          "source": "src/Control-Monad-Trans-Operational-Mini.html#interpret",
          "type": "function"
        },
        "index": {
          "description": "Interpret Program using the given transformation",
          "hierarchy": "Control Monad Trans Operational Mini",
          "module": "Control.Monad.Trans.Operational.Mini",
          "name": "interpret",
          "normalized": "(a b c d-\u003ee d)-\u003eProgramT c e f-\u003ee f",
          "package": "minioperational",
          "signature": "(forall x. t x-\u003em x)-\u003eProgramT t m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minioperational/docs/Control-Monad-Trans-Operational-Mini.html#v:interpret"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Operational.Mini",
          "name": "transReifiedT",
          "package": "minioperational",
          "signature": "(forall x.  m x -\u003e n x) -\u003e ReifiedProgramT t m a -\u003e ReifiedProgramT t n a",
          "source": "src/Control-Monad-Trans-Operational-Mini.html#transReifiedT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Operational Mini",
          "module": "Control.Monad.Trans.Operational.Mini",
          "name": "transReifiedT",
          "normalized": "(a b c d-\u003ee d)-\u003eReifiedProgramT f c g-\u003eReifiedProgramT f e g",
          "package": "minioperational",
          "partial": "Reified",
          "signature": "(forall x. m x-\u003en x)-\u003eReifiedProgramT t m a-\u003eReifiedProgramT t n a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minioperational/docs/Control-Monad-Trans-Operational-Mini.html#v:transReifiedT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Operational.Mini",
          "name": "unProgram",
          "package": "minioperational",
          "signature": "ProgramT t m a -\u003e (a -\u003e m r) -\u003e (forall x.  t x -\u003e (x -\u003e m r) -\u003e m r) -\u003e m r",
          "source": "src/Control-Monad-Trans-Operational-Mini.html#unProgram",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Operational Mini",
          "module": "Control.Monad.Trans.Operational.Mini",
          "name": "unProgram",
          "normalized": "ProgramT a b c-\u003e(c-\u003eb d)-\u003e(e f a g-\u003e(g-\u003eb d)-\u003eb d)-\u003eb d",
          "package": "minioperational",
          "partial": "Program",
          "signature": "ProgramT t m a-\u003e(a-\u003em r)-\u003e(forall x. t x-\u003e(x-\u003em r)-\u003em r)-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minioperational/docs/Control-Monad-Trans-Operational-Mini.html#v:unProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Operational.Mini",
          "name": "unProgramT",
          "package": "minioperational",
          "signature": "forall r.  (a -\u003e r) -\u003e (m r -\u003e r) -\u003e (forall x.  t x -\u003e (x -\u003e r) -\u003e r) -\u003e r",
          "source": "src/Control-Monad-Trans-Operational-Mini.html#ProgramT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Operational Mini",
          "module": "Control.Monad.Trans.Operational.Mini",
          "name": "unProgramT",
          "normalized": "a b(c-\u003ed)-\u003e(e d-\u003ed)-\u003e(a f g h-\u003e(h-\u003ed)-\u003ed)-\u003ed",
          "package": "minioperational",
          "partial": "Program",
          "signature": "forall r.(a-\u003er)-\u003e(m r-\u003er)-\u003e(forall x. t x-\u003e(x-\u003er)-\u003er)-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minioperational/docs/Control-Monad-Trans-Operational-Mini.html#v:unProgramT"
      }
    }
  ]
]