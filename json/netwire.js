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
        "word": "netwire"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Wire.Core",
          "name": "Core",
          "package": "netwire",
          "source": "src/Control-Wire-Core.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Wire Core",
          "module": "Control.Wire.Core",
          "name": "Core",
          "package": "netwire",
          "partial": "Core",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Core.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wire is a signal function.  It maps a reactive value to another\n reactive value.\n\u003c/p\u003e",
          "module": "Control.Wire.Core",
          "name": "Wire",
          "package": "netwire",
          "source": "src/Control-Wire-Core.html#Wire",
          "type": "data"
        },
        "index": {
          "description": "wire is signal function It maps reactive value to another reactive value",
          "hierarchy": "Control Wire Core",
          "module": "Control.Wire.Core",
          "name": "Wire",
          "package": "netwire",
          "partial": "Wire",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Core.html#t:Wire"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft-strict version of \u003ccode\u003e\u003ca\u003e&&&\u003c/a\u003e\u003c/code\u003e for functions.\n\u003c/p\u003e",
          "module": "Control.Wire.Core",
          "name": "(&&&!)",
          "package": "netwire",
          "signature": "(a -\u003e b) -\u003e (a -\u003e c) -\u003e a -\u003e (b, c)",
          "source": "src/Control-Wire-Core.html#%26%26%26%21",
          "type": "function"
        },
        "index": {
          "description": "Left-strict version of for functions",
          "hierarchy": "Control Wire Core",
          "module": "Control.Wire.Core",
          "name": "(&&&!) &&&!",
          "normalized": "(a-\u003eb)-\u003e(a-\u003ec)-\u003ea-\u003e(b,c)",
          "package": "netwire",
          "signature": "(a-\u003eb)-\u003e(a-\u003ec)-\u003ea-\u003e(b,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Core.html#v:-38--38--38--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft-strict version of \u003ccode\u003e\u003ca\u003e***\u003c/a\u003e\u003c/code\u003e for functions.\n\u003c/p\u003e",
          "module": "Control.Wire.Core",
          "name": "(***!)",
          "package": "netwire",
          "signature": "(a -\u003e c) -\u003e (b -\u003e d) -\u003e (a, b) -\u003e (c, d)",
          "source": "src/Control-Wire-Core.html#%2A%2A%2A%21",
          "type": "function"
        },
        "index": {
          "description": "Left-strict version of for functions",
          "hierarchy": "Control Wire Core",
          "module": "Control.Wire.Core",
          "name": "(***!) ***!",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ed)-\u003e(a,c)-\u003e(b,d)",
          "package": "netwire",
          "signature": "(a-\u003ec)-\u003e(b-\u003ed)-\u003e(a,b)-\u003e(c,d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Core.html#v:-42--42--42--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Wire.Core",
          "name": "WArr",
          "package": "netwire",
          "signature": "(Either e a -\u003e Either e b) -\u003e Wire s e m a b",
          "source": "src/Control-Wire-Core.html#Wire",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Wire Core",
          "module": "Control.Wire.Core",
          "name": "WArr",
          "normalized": "(Either a b-\u003eEither a c)-\u003eWire d a e b c",
          "package": "netwire",
          "partial": "WArr",
          "signature": "(Either e a-\u003eEither e b)-\u003eWire s e m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Core.html#v:WArr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Wire.Core",
          "name": "WConst",
          "package": "netwire",
          "signature": "Either e b -\u003e Wire s e m a b",
          "source": "src/Control-Wire-Core.html#Wire",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Wire Core",
          "module": "Control.Wire.Core",
          "name": "WConst",
          "normalized": "Either a b-\u003eWire c a d e b",
          "package": "netwire",
          "partial": "WConst",
          "signature": "Either e b-\u003eWire s e m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Core.html#v:WConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Wire.Core",
          "name": "WGen",
          "package": "netwire",
          "signature": "(s -\u003e Either e a -\u003e m (Either e b, Wire s e m a b)) -\u003e Wire s e m a b",
          "source": "src/Control-Wire-Core.html#Wire",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Wire Core",
          "module": "Control.Wire.Core",
          "name": "WGen",
          "normalized": "(a-\u003eEither b c-\u003ed(Either b e,Wire a b d c e))-\u003eWire a b d c e",
          "package": "netwire",
          "partial": "WGen",
          "signature": "(s-\u003eEither e a-\u003em(Either e b,Wire s e m a b))-\u003eWire s e m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Core.html#v:WGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Wire.Core",
          "name": "WId",
          "package": "netwire",
          "signature": "Wire s e m a a",
          "source": "src/Control-Wire-Core.html#Wire",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Wire Core",
          "module": "Control.Wire.Core",
          "name": "WId",
          "package": "netwire",
          "partial": "WId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Core.html#v:WId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Wire.Core",
          "name": "WPure",
          "package": "netwire",
          "signature": "(s -\u003e Either e a -\u003e (Either e b, Wire s e m a b)) -\u003e Wire s e m a b",
          "source": "src/Control-Wire-Core.html#Wire",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Wire Core",
          "module": "Control.Wire.Core",
          "name": "WPure",
          "normalized": "(a-\u003eEither b c-\u003e(Either b d,Wire a b e c d))-\u003eWire a b e c d",
          "package": "netwire",
          "partial": "WPure",
          "signature": "(s-\u003eEither e a-\u003e(Either e b,Wire s e m a b))-\u003eWire s e m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Core.html#v:WPure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis wire delays its input signal by the smallest possible\n (semantically infinitesimal) amount of time.  You can use it when you\n want to use feedback (\u003ccode\u003e\u003ca\u003eArrowLoop\u003c/a\u003e\u003c/code\u003e):  If the user of the feedback\n depends on \u003cem\u003enow\u003c/em\u003e, delay the value before feeding it back.  The\n argument value is the replacement signal at the beginning.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Depends: before now.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Control.Wire.Core\",\"FRP.Netwire\"]",
          "name": "delay",
          "package": "netwire",
          "signature": "a -\u003e Wire s e m a a",
          "source": "src/Control-Wire-Core.html#delay",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netwire/docs/Control-Wire-Core.html#v:delay\",\"http://hackage.haskell.org/package/netwire/docs/FRP-Netwire.html#v:delay\"]"
        },
        "index": {
          "description": "This wire delays its input signal by the smallest possible semantically infinitesimal amount of time You can use it when you want to use feedback ArrowLoop If the user of the feedback depends on now delay the value before feeding it back The argument value is the replacement signal at the beginning Depends before now",
          "hierarchy": "Control Wire Core",
          "module": "Control.Wire.Core",
          "name": "delay",
          "normalized": "a-\u003eWire b c d a a",
          "package": "netwire",
          "signature": "a-\u003eWire s e m a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Core.html#v:delay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate the input signal using the given \u003ccode\u003e\u003ca\u003eStrategy\u003c/a\u003e\u003c/code\u003e here.  This\n wire evaluates only produced values.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Depends: now.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Control.Wire.Core\",\"FRP.Netwire\"]",
          "name": "evalWith",
          "package": "netwire",
          "signature": "Strategy a -\u003e Wire s e m a a",
          "source": "src/Control-Wire-Core.html#evalWith",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netwire/docs/Control-Wire-Core.html#v:evalWith\",\"http://hackage.haskell.org/package/netwire/docs/FRP-Netwire.html#v:evalWith\"]"
        },
        "index": {
          "description": "Evaluate the input signal using the given Strategy here This wire evaluates only produced values Depends now",
          "hierarchy": "Control Wire Core",
          "module": "Control.Wire.Core",
          "name": "evalWith",
          "normalized": "Strategy a-\u003eWire b c d a a",
          "package": "netwire",
          "partial": "With",
          "signature": "Strategy a-\u003eWire s e m a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Core.html#v:evalWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForce the input signal to WHNF here.  This wire forces both\n produced values and inhibition values.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Depends: now.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Control.Wire.Core\",\"FRP.Netwire\"]",
          "name": "force",
          "package": "netwire",
          "signature": "Wire s e m a a",
          "source": "src/Control-Wire-Core.html#force",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netwire/docs/Control-Wire-Core.html#v:force\",\"http://hackage.haskell.org/package/netwire/docs/FRP-Netwire.html#v:force\"]"
        },
        "index": {
          "description": "Force the input signal to WHNF here This wire forces both produced values and inhibition values Depends now",
          "hierarchy": "Control Wire Core",
          "module": "Control.Wire.Core",
          "name": "force",
          "package": "netwire",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Core.html#v:force"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForce the input signal to NF here.  This wire forces only produced\n values.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Depends: now.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Control.Wire.Core\",\"FRP.Netwire\"]",
          "name": "forceNF",
          "package": "netwire",
          "signature": "Wire s e m a a",
          "source": "src/Control-Wire-Core.html#forceNF",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netwire/docs/Control-Wire-Core.html#v:forceNF\",\"http://hackage.haskell.org/package/netwire/docs/FRP-Netwire.html#v:forceNF\"]"
        },
        "index": {
          "description": "Force the input signal to NF here This wire forces only produced values Depends now",
          "hierarchy": "Control Wire Core",
          "module": "Control.Wire.Core",
          "name": "forceNF",
          "package": "netwire",
          "partial": "NF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Core.html#v:forceNF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft-strict tuple.\n\u003c/p\u003e",
          "module": "Control.Wire.Core",
          "name": "lstrict",
          "package": "netwire",
          "signature": "(a, b) -\u003e (a, b)",
          "source": "src/Control-Wire-Core.html#lstrict",
          "type": "function"
        },
        "index": {
          "description": "Left-strict tuple",
          "hierarchy": "Control Wire Core",
          "module": "Control.Wire.Core",
          "name": "lstrict",
          "normalized": "(a,b)-\u003e(a,b)",
          "package": "netwire",
          "signature": "(a,b)-\u003e(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Core.html#v:lstrict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply the given monad morphism to the wire's underlying monad.\n\u003c/p\u003e",
          "module": "Control.Wire.Core",
          "name": "mapWire",
          "package": "netwire",
          "signature": "(forall a.  m' a -\u003e m a) -\u003e Wire s e m' a b -\u003e Wire s e m a b",
          "source": "src/Control-Wire-Core.html#mapWire",
          "type": "function"
        },
        "index": {
          "description": "Apply the given monad morphism to the wire underlying monad",
          "hierarchy": "Control Wire Core",
          "module": "Control.Wire.Core",
          "name": "mapWire",
          "normalized": "(a b c d-\u003ee d)-\u003eWire f g c d h-\u003eWire f g e d h",
          "package": "netwire",
          "partial": "Wire",
          "signature": "(forall a. m' a-\u003em a)-\u003eWire s e m' a b-\u003eWire s e m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Core.html#v:mapWire"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a stateless wire from the given signal mapping function.\n\u003c/p\u003e",
          "module": "Control.Wire.Core",
          "name": "mkConst",
          "package": "netwire",
          "signature": "Either e b -\u003e Wire s e m a b",
          "source": "src/Control-Wire-Core.html#mkConst",
          "type": "function"
        },
        "index": {
          "description": "Construct stateless wire from the given signal mapping function",
          "hierarchy": "Control Wire Core",
          "module": "Control.Wire.Core",
          "name": "mkConst",
          "normalized": "Either a b-\u003eWire c a d e b",
          "package": "netwire",
          "partial": "Const",
          "signature": "Either e b-\u003eWire s e m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Core.html#v:mkConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct the empty wire, which inhibits forever.\n\u003c/p\u003e",
          "module": "Control.Wire.Core",
          "name": "mkEmpty",
          "package": "netwire",
          "signature": "Wire s e m a b",
          "source": "src/Control-Wire-Core.html#mkEmpty",
          "type": "function"
        },
        "index": {
          "description": "Construct the empty wire which inhibits forever",
          "hierarchy": "Control Wire Core",
          "module": "Control.Wire.Core",
          "name": "mkEmpty",
          "package": "netwire",
          "partial": "Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Core.html#v:mkEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a stateful wire from the given transition function.\n\u003c/p\u003e",
          "module": "Control.Wire.Core",
          "name": "mkGen",
          "package": "netwire",
          "signature": "(s -\u003e a -\u003e m (Either e b, Wire s e m a b)) -\u003e Wire s e m a b",
          "source": "src/Control-Wire-Core.html#mkGen",
          "type": "function"
        },
        "index": {
          "description": "Construct stateful wire from the given transition function",
          "hierarchy": "Control Wire Core",
          "module": "Control.Wire.Core",
          "name": "mkGen",
          "normalized": "(a-\u003eb-\u003ec(Either d e,Wire a d c b e))-\u003eWire a d c b e",
          "package": "netwire",
          "partial": "Gen",
          "signature": "(s-\u003ea-\u003em(Either e b,Wire s e m a b))-\u003eWire s e m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Core.html#v:mkGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a stateful wire from the given transition function.\n\u003c/p\u003e",
          "module": "Control.Wire.Core",
          "name": "mkGenN",
          "package": "netwire",
          "signature": "(a -\u003e m (Either e b, Wire s e m a b)) -\u003e Wire s e m a b",
          "source": "src/Control-Wire-Core.html#mkGenN",
          "type": "function"
        },
        "index": {
          "description": "Construct stateful wire from the given transition function",
          "hierarchy": "Control Wire Core",
          "module": "Control.Wire.Core",
          "name": "mkGenN",
          "normalized": "(a-\u003eb(Either c d,Wire e c b a d))-\u003eWire e c b a d",
          "package": "netwire",
          "partial": "Gen",
          "signature": "(a-\u003em(Either e b,Wire s e m a b))-\u003eWire s e m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Core.html#v:mkGenN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a stateless wire from the given transition function.\n\u003c/p\u003e",
          "module": "Control.Wire.Core",
          "name": "mkGen_",
          "package": "netwire",
          "signature": "(a -\u003e m (Either e b)) -\u003e Wire s e m a b",
          "source": "src/Control-Wire-Core.html#mkGen_",
          "type": "function"
        },
        "index": {
          "description": "Construct stateless wire from the given transition function",
          "hierarchy": "Control Wire Core",
          "module": "Control.Wire.Core",
          "name": "mkGen_",
          "normalized": "(a-\u003eb(Either c d))-\u003eWire e c b a d",
          "package": "netwire",
          "partial": "Gen",
          "signature": "(a-\u003em(Either e b))-\u003eWire s e m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Core.html#v:mkGen_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct the identity wire.\n\u003c/p\u003e",
          "module": "Control.Wire.Core",
          "name": "mkId",
          "package": "netwire",
          "signature": "Wire s e m a a",
          "source": "src/Control-Wire-Core.html#mkId",
          "type": "function"
        },
        "index": {
          "description": "Construct the identity wire",
          "hierarchy": "Control Wire Core",
          "module": "Control.Wire.Core",
          "name": "mkId",
          "package": "netwire",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Core.html#v:mkId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a pure stateful wire from the given transition function.\n\u003c/p\u003e",
          "module": "Control.Wire.Core",
          "name": "mkPure",
          "package": "netwire",
          "signature": "(s -\u003e a -\u003e (Either e b, Wire s e m a b)) -\u003e Wire s e m a b",
          "source": "src/Control-Wire-Core.html#mkPure",
          "type": "function"
        },
        "index": {
          "description": "Construct pure stateful wire from the given transition function",
          "hierarchy": "Control Wire Core",
          "module": "Control.Wire.Core",
          "name": "mkPure",
          "normalized": "(a-\u003eb-\u003e(Either c d,Wire a c e b d))-\u003eWire a c e b d",
          "package": "netwire",
          "partial": "Pure",
          "signature": "(s-\u003ea-\u003e(Either e b,Wire s e m a b))-\u003eWire s e m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Core.html#v:mkPure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a pure stateful wire from the given transition function.\n\u003c/p\u003e",
          "module": "Control.Wire.Core",
          "name": "mkPureN",
          "package": "netwire",
          "signature": "(a -\u003e (Either e b, Wire s e m a b)) -\u003e Wire s e m a b",
          "source": "src/Control-Wire-Core.html#mkPureN",
          "type": "function"
        },
        "index": {
          "description": "Construct pure stateful wire from the given transition function",
          "hierarchy": "Control Wire Core",
          "module": "Control.Wire.Core",
          "name": "mkPureN",
          "normalized": "(a-\u003e(Either b c,Wire d b e a c))-\u003eWire d b e a c",
          "package": "netwire",
          "partial": "Pure",
          "signature": "(a-\u003e(Either e b,Wire s e m a b))-\u003eWire s e m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Core.html#v:mkPureN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a pure stateless wire from the given transition function.\n\u003c/p\u003e",
          "module": "Control.Wire.Core",
          "name": "mkPure_",
          "package": "netwire",
          "signature": "(a -\u003e Either e b) -\u003e Wire s e m a b",
          "source": "src/Control-Wire-Core.html#mkPure_",
          "type": "function"
        },
        "index": {
          "description": "Construct pure stateless wire from the given transition function",
          "hierarchy": "Control Wire Core",
          "module": "Control.Wire.Core",
          "name": "mkPure_",
          "normalized": "(a-\u003eEither b c)-\u003eWire d b e a c",
          "package": "netwire",
          "partial": "Pure",
          "signature": "(a-\u003eEither e b)-\u003eWire s e m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Core.html#v:mkPure_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a pure stateful wire from the given signal function.\n\u003c/p\u003e",
          "module": "Control.Wire.Core",
          "name": "mkSF",
          "package": "netwire",
          "signature": "(s -\u003e a -\u003e (b, Wire s e m a b)) -\u003e Wire s e m a b",
          "source": "src/Control-Wire-Core.html#mkSF",
          "type": "function"
        },
        "index": {
          "description": "Construct pure stateful wire from the given signal function",
          "hierarchy": "Control Wire Core",
          "module": "Control.Wire.Core",
          "name": "mkSF",
          "normalized": "(a-\u003eb-\u003e(c,Wire a d e b c))-\u003eWire a d e b c",
          "package": "netwire",
          "partial": "SF",
          "signature": "(s-\u003ea-\u003e(b,Wire s e m a b))-\u003eWire s e m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Core.html#v:mkSF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a pure stateful wire from the given signal function.\n\u003c/p\u003e",
          "module": "Control.Wire.Core",
          "name": "mkSFN",
          "package": "netwire",
          "signature": "(a -\u003e (b, Wire s e m a b)) -\u003e Wire s e m a b",
          "source": "src/Control-Wire-Core.html#mkSFN",
          "type": "function"
        },
        "index": {
          "description": "Construct pure stateful wire from the given signal function",
          "hierarchy": "Control Wire Core",
          "module": "Control.Wire.Core",
          "name": "mkSFN",
          "normalized": "(a-\u003e(b,Wire c d e a b))-\u003eWire c d e a b",
          "package": "netwire",
          "partial": "SFN",
          "signature": "(a-\u003e(b,Wire s e m a b))-\u003eWire s e m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Core.html#v:mkSFN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a pure stateless wire from the given function.\n\u003c/p\u003e",
          "module": "Control.Wire.Core",
          "name": "mkSF_",
          "package": "netwire",
          "signature": "(a -\u003e b) -\u003e Wire s e m a b",
          "source": "src/Control-Wire-Core.html#mkSF_",
          "type": "function"
        },
        "index": {
          "description": "Construct pure stateless wire from the given function",
          "hierarchy": "Control Wire Core",
          "module": "Control.Wire.Core",
          "name": "mkSF_",
          "normalized": "(a-\u003eb)-\u003eWire c d e a b",
          "package": "netwire",
          "partial": "SF",
          "signature": "(a-\u003eb)-\u003eWire s e m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Core.html#v:mkSF_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform one step of the given wire.\n\u003c/p\u003e",
          "module": "Control.Wire.Core",
          "name": "stepWire",
          "package": "netwire",
          "signature": "Wire s e m a b -\u003e s -\u003e Either e a -\u003e m (Either e b, Wire s e m a b)",
          "source": "src/Control-Wire-Core.html#stepWire",
          "type": "function"
        },
        "index": {
          "description": "Perform one step of the given wire",
          "hierarchy": "Control Wire Core",
          "module": "Control.Wire.Core",
          "name": "stepWire",
          "normalized": "Wire a b c d e-\u003ea-\u003eEither b d-\u003ec(Either b e,Wire a b c d e)",
          "package": "netwire",
          "partial": "Wire",
          "signature": "Wire s e m a b-\u003es-\u003eEither e a-\u003em(Either e b,Wire s e m a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Core.html#v:stepWire"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Wire.Event",
          "name": "Event",
          "package": "netwire",
          "source": "src/Control-Wire-Event.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Wire Event",
          "module": "Control.Wire.Event",
          "name": "Event",
          "package": "netwire",
          "partial": "Event",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Event.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDenotes a stream of values, each together with time of occurrence.\n Since \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e is commonly used for functional reactive programming it\n does not define most of the usual instances to protect continuous\n time and discrete event occurrence semantics.\n\u003c/p\u003e",
          "module": "Control.Wire.Event",
          "name": "Event",
          "package": "netwire",
          "source": "src/Control-Wire-Unsafe-Event.html#Event",
          "type": "data"
        },
        "index": {
          "description": "Denotes stream of values each together with time of occurrence Since Event is commonly used for functional reactive programming it does not define most of the usual instances to protect continuous time and discrete event occurrence semantics",
          "hierarchy": "Control Wire Event",
          "module": "Control.Wire.Event",
          "name": "Event",
          "package": "netwire",
          "partial": "Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Event.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge events with the rightmost event taking precedence.\n Equivalent to using the monoid interface with \u003ccode\u003eLast\u003c/code\u003e.  Infixl 5.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Depends: now on both.\n\u003c/li\u003e\u003cli\u003e Inhibits: when any of the two wires inhibit.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Wire.Event",
          "name": "(&\u003e)",
          "package": "netwire",
          "signature": "Wire s e m a (Event b) -\u003e Wire s e m a (Event b) -\u003e Wire s e m a (Event b)",
          "source": "src/Control-Wire-Event.html#%26%3E",
          "type": "function"
        },
        "index": {
          "description": "Merge events with the rightmost event taking precedence Equivalent to using the monoid interface with Last Infixl Depends now on both Inhibits when any of the two wires inhibit",
          "hierarchy": "Control Wire Event",
          "module": "Control.Wire.Event",
          "name": "(&\u003e) &\u003e",
          "normalized": "Wire a b c d(Event e)-\u003eWire a b c d(Event e)-\u003eWire a b c d(Event e)",
          "package": "netwire",
          "signature": "Wire s e m a(Event b)-\u003eWire s e m a(Event b)-\u003eWire s e m a(Event b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Event.html#v:-38--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge events with the leftmost event taking precedence.  Equivalent\n to using the monoid interface with \u003ccode\u003eFirst\u003c/code\u003e.  Infixl 5.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Depends: now on both.\n\u003c/li\u003e\u003cli\u003e Inhibits: when any of the two wires inhibit.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Wire.Event",
          "name": "(\u003c&)",
          "package": "netwire",
          "signature": "Wire s e m a (Event b) -\u003e Wire s e m a (Event b) -\u003e Wire s e m a (Event b)",
          "source": "src/Control-Wire-Event.html#%3C%26",
          "type": "function"
        },
        "index": {
          "description": "Merge events with the leftmost event taking precedence Equivalent to using the monoid interface with First Infixl Depends now on both Inhibits when any of the two wires inhibit",
          "hierarchy": "Control Wire Event",
          "module": "Control.Wire.Event",
          "name": "(\u003c&) \u003c&",
          "normalized": "Wire a b c d(Event e)-\u003eWire a b c d(Event e)-\u003eWire a b c d(Event e)",
          "package": "netwire",
          "signature": "Wire s e m a(Event b)-\u003eWire s e m a(Event b)-\u003eWire s e m a(Event b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Event.html#v:-60--38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft scan for events with no initial value.  Each time an event\n occurs, apply the given function.  The first event is produced\n unchanged.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Depends: now.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Wire.Event",
          "name": "accum1E",
          "package": "netwire",
          "signature": "(a -\u003e a -\u003e a)-\u003e Wire s e m (Event a) (Event a)",
          "type": "function"
        },
        "index": {
          "description": "Left scan for events with no initial value Each time an event occurs apply the given function The first event is produced unchanged Depends now",
          "hierarchy": "Control Wire Event",
          "module": "Control.Wire.Event",
          "name": "accum1E",
          "normalized": "(a-\u003ea-\u003ea)-\u003eWire b c d(Event a)(Event a)",
          "package": "netwire",
          "signature": "(a-\u003ea-\u003ea)-\u003eWire s e m(Event a)(Event a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Event.html#v:accum1E"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft scan for events.  Each time an event occurs, apply the given\n function.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Depends: now.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Wire.Event",
          "name": "accumE",
          "package": "netwire",
          "signature": "(b -\u003e a -\u003e b)-\u003e b-\u003e Wire s e m (Event a) (Event b)",
          "type": "function"
        },
        "index": {
          "description": "Left scan for events Each time an event occurs apply the given function Depends now",
          "hierarchy": "Control Wire Event",
          "module": "Control.Wire.Event",
          "name": "accumE",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eWire c d e(Event b)(Event a)",
          "package": "netwire",
          "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eWire s e m(Event a)(Event b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Event.html#v:accumE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAt the given point in time.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Depends: now when occurring.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Wire.Event",
          "name": "at",
          "package": "netwire",
          "signature": "t-\u003e Wire s e m a (Event a)",
          "type": "function"
        },
        "index": {
          "description": "At the given point in time Depends now when occurring",
          "hierarchy": "Control Wire Event",
          "module": "Control.Wire.Event",
          "name": "at",
          "normalized": "a-\u003eWire b c d e(Event e)",
          "package": "netwire",
          "signature": "t-\u003eWire s e m a(Event a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Event.html#v:at"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOccurs each time the predicate becomes true for the input signal,\n for example each time a given threshold is reached.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Depends: now.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Wire.Event",
          "name": "became",
          "package": "netwire",
          "signature": "(a -\u003e Bool) -\u003e Wire s e m a (Event a)",
          "source": "src/Control-Wire-Event.html#became",
          "type": "function"
        },
        "index": {
          "description": "Occurs each time the predicate becomes true for the input signal for example each time given threshold is reached Depends now",
          "hierarchy": "Control Wire Event",
          "module": "Control.Wire.Event",
          "name": "became",
          "normalized": "(a-\u003eBool)-\u003eWire b c d a(Event a)",
          "package": "netwire",
          "signature": "(a-\u003eBool)-\u003eWire s e m a(Event a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Event.html#v:became"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForget the first given number of occurrences.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Depends: now.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Wire.Event",
          "name": "dropE",
          "package": "netwire",
          "signature": "Int -\u003e Wire s e m (Event a) (Event a)",
          "source": "src/Control-Wire-Event.html#dropE",
          "type": "function"
        },
        "index": {
          "description": "Forget the first given number of occurrences Depends now",
          "hierarchy": "Control Wire Event",
          "module": "Control.Wire.Event",
          "name": "dropE",
          "normalized": "Int-\u003eWire a b c(Event d)(Event d)",
          "package": "netwire",
          "signature": "Int-\u003eWire s e m(Event a)(Event a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Event.html#v:dropE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForget all initial occurrences until the given predicate becomes\n false.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Depends: now.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Wire.Event",
          "name": "dropWhileE",
          "package": "netwire",
          "signature": "(a -\u003e Bool) -\u003e Wire s e m (Event a) (Event a)",
          "source": "src/Control-Wire-Event.html#dropWhileE",
          "type": "function"
        },
        "index": {
          "description": "Forget all initial occurrences until the given predicate becomes false Depends now",
          "hierarchy": "Control Wire Event",
          "module": "Control.Wire.Event",
          "name": "dropWhileE",
          "normalized": "(a-\u003eBool)-\u003eWire b c d(Event a)(Event a)",
          "package": "netwire",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003eWire s e m(Event a)(Event a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Event.html#v:dropWhileE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForget all occurrences for which the given predicate is false.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Depends: now.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Wire.Event",
          "name": "filterE",
          "package": "netwire",
          "signature": "(a -\u003e Bool) -\u003e Wire s e m (Event a) (Event a)",
          "source": "src/Control-Wire-Event.html#filterE",
          "type": "function"
        },
        "index": {
          "description": "Forget all occurrences for which the given predicate is false Depends now",
          "hierarchy": "Control Wire Event",
          "module": "Control.Wire.Event",
          "name": "filterE",
          "normalized": "(a-\u003eBool)-\u003eWire b c d(Event a)(Event a)",
          "package": "netwire",
          "signature": "(a-\u003eBool)-\u003eWire s e m(Event a)(Event a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Event.html#v:filterE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOn each occurrence, apply the function the event carries.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Depends: now.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Wire.Event",
          "name": "iterateE",
          "package": "netwire",
          "signature": "a -\u003e Wire s e m (Event (a -\u003e a)) (Event a)",
          "source": "src/Control-Wire-Event.html#iterateE",
          "type": "function"
        },
        "index": {
          "description": "On each occurrence apply the function the event carries Depends now",
          "hierarchy": "Control Wire Event",
          "module": "Control.Wire.Event",
          "name": "iterateE",
          "normalized": "a-\u003eWire b c d(Event(a-\u003ea))(Event a)",
          "package": "netwire",
          "signature": "a-\u003eWire s e m(Event(a-\u003ea))(Event a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Event.html#v:iterateE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximum of all events.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Depends: now.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Wire.Event",
          "name": "maximumE",
          "package": "netwire",
          "signature": "Wire s e m (Event a) (Event a)",
          "source": "src/Control-Wire-Event.html#maximumE",
          "type": "function"
        },
        "index": {
          "description": "Maximum of all events Depends now",
          "hierarchy": "Control Wire Event",
          "module": "Control.Wire.Event",
          "name": "maximumE",
          "package": "netwire",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Event.html#v:maximumE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge two events using the given function when both occur at the\n same time.\n\u003c/p\u003e",
          "module": "[\"Control.Wire.Event\",\"Control.Wire.Unsafe.Event\"]",
          "name": "merge",
          "package": "netwire",
          "signature": "(a -\u003e a -\u003e a) -\u003e Event a -\u003e Event a -\u003e Event a",
          "source": "src/Control-Wire-Unsafe-Event.html#merge",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netwire/docs/Control-Wire-Event.html#v:merge\",\"http://hackage.haskell.org/package/netwire/docs/Control-Wire-Unsafe-Event.html#v:merge\"]"
        },
        "index": {
          "description": "Merge two events using the given function when both occur at the same time",
          "hierarchy": "Control Wire Event",
          "module": "Control.Wire.Event",
          "name": "merge",
          "normalized": "(a-\u003ea-\u003ea)-\u003eEvent a-\u003eEvent a-\u003eEvent a",
          "package": "netwire",
          "signature": "(a-\u003ea-\u003ea)-\u003eEvent a-\u003eEvent a-\u003eEvent a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Event.html#v:merge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft-biased event merge.\n\u003c/p\u003e",
          "module": "Control.Wire.Event",
          "name": "mergeL",
          "package": "netwire",
          "signature": "Event a -\u003e Event a -\u003e Event a",
          "source": "src/Control-Wire-Event.html#mergeL",
          "type": "function"
        },
        "index": {
          "description": "Left-biased event merge",
          "hierarchy": "Control Wire Event",
          "module": "Control.Wire.Event",
          "name": "mergeL",
          "normalized": "Event a-\u003eEvent a-\u003eEvent a",
          "package": "netwire",
          "signature": "Event a-\u003eEvent a-\u003eEvent a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Event.html#v:mergeL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRight-biased event merge.\n\u003c/p\u003e",
          "module": "Control.Wire.Event",
          "name": "mergeR",
          "package": "netwire",
          "signature": "Event a -\u003e Event a -\u003e Event a",
          "source": "src/Control-Wire-Event.html#mergeR",
          "type": "function"
        },
        "index": {
          "description": "Right-biased event merge",
          "hierarchy": "Control Wire Event",
          "module": "Control.Wire.Event",
          "name": "mergeR",
          "normalized": "Event a-\u003eEvent a-\u003eEvent a",
          "package": "netwire",
          "signature": "Event a-\u003eEvent a-\u003eEvent a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Event.html#v:mergeR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMinimum of all events.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Depends: now.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Wire.Event",
          "name": "minimumE",
          "package": "netwire",
          "signature": "Wire s e m (Event a) (Event a)",
          "source": "src/Control-Wire-Event.html#minimumE",
          "type": "function"
        },
        "index": {
          "description": "Minimum of all events Depends now",
          "hierarchy": "Control Wire Event",
          "module": "Control.Wire.Event",
          "name": "minimumE",
          "package": "netwire",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Event.html#v:minimumE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNever occurs.\n\u003c/p\u003e",
          "module": "Control.Wire.Event",
          "name": "never",
          "package": "netwire",
          "signature": "Wire s e m a (Event b)",
          "source": "src/Control-Wire-Event.html#never",
          "type": "function"
        },
        "index": {
          "description": "Never occurs",
          "hierarchy": "Control Wire Event",
          "module": "Control.Wire.Event",
          "name": "never",
          "package": "netwire",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Event.html#v:never"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOccurs each time the predicate becomes false for the input signal,\n for example each time a given threshold is no longer exceeded.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Depends: now.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Wire.Event",
          "name": "noLonger",
          "package": "netwire",
          "signature": "(a -\u003e Bool) -\u003e Wire s e m a (Event a)",
          "source": "src/Control-Wire-Event.html#noLonger",
          "type": "function"
        },
        "index": {
          "description": "Occurs each time the predicate becomes false for the input signal for example each time given threshold is no longer exceeded Depends now",
          "hierarchy": "Control Wire Event",
          "module": "Control.Wire.Event",
          "name": "noLonger",
          "normalized": "(a-\u003eBool)-\u003eWire b c d a(Event a)",
          "package": "netwire",
          "partial": "Longer",
          "signature": "(a-\u003eBool)-\u003eWire s e m a(Event a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Event.html#v:noLonger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForget the first occurrence.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Depends: now.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Wire.Event",
          "name": "notYet",
          "package": "netwire",
          "signature": "Wire s e m (Event a) (Event a)",
          "source": "src/Control-Wire-Event.html#notYet",
          "type": "function"
        },
        "index": {
          "description": "Forget the first occurrence Depends now",
          "hierarchy": "Control Wire Event",
          "module": "Control.Wire.Event",
          "name": "notYet",
          "package": "netwire",
          "partial": "Yet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Event.html#v:notYet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOccurs once immediately.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Depends: now when occurring.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Wire.Event",
          "name": "now",
          "package": "netwire",
          "signature": "Wire s e m a (Event a)",
          "source": "src/Control-Wire-Event.html#now",
          "type": "function"
        },
        "index": {
          "description": "Occurs once immediately Depends now when occurring",
          "hierarchy": "Control Wire Event",
          "module": "Control.Wire.Event",
          "name": "now",
          "package": "netwire",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Event.html#v:now"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForget all occurrences except the first.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Depends: now when occurring.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Wire.Event",
          "name": "once",
          "package": "netwire",
          "signature": "Wire s e m (Event a) (Event a)",
          "source": "src/Control-Wire-Event.html#once",
          "type": "function"
        },
        "index": {
          "description": "Forget all occurrences except the first Depends now when occurring",
          "hierarchy": "Control Wire Event",
          "module": "Control.Wire.Event",
          "name": "once",
          "package": "netwire",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Event.html#v:once"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePeriodic occurrence with the given time period.  First occurrence\n is now.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Depends: now when occurring.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Wire.Event",
          "name": "periodic",
          "package": "netwire",
          "signature": "t -\u003e Wire s e m a (Event a)",
          "source": "src/Control-Wire-Event.html#periodic",
          "type": "function"
        },
        "index": {
          "description": "Periodic occurrence with the given time period First occurrence is now Depends now when occurring",
          "hierarchy": "Control Wire Event",
          "module": "Control.Wire.Event",
          "name": "periodic",
          "normalized": "a-\u003eWire b c d e(Event e)",
          "package": "netwire",
          "signature": "t-\u003eWire s e m a(Event a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Event.html#v:periodic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePeriodic occurrence with the given time period.  First occurrence\n is now.  The event values are picked one by one from the given list.\n When the list is exhausted, the event does not occur again.\n\u003c/p\u003e",
          "module": "Control.Wire.Event",
          "name": "periodicList",
          "package": "netwire",
          "signature": "t -\u003e [b] -\u003e Wire s e m a (Event b)",
          "source": "src/Control-Wire-Event.html#periodicList",
          "type": "function"
        },
        "index": {
          "description": "Periodic occurrence with the given time period First occurrence is now The event values are picked one by one from the given list When the list is exhausted the event does not occur again",
          "hierarchy": "Control Wire Event",
          "module": "Control.Wire.Event",
          "name": "periodicList",
          "normalized": "a-\u003e[b]-\u003eWire c d e f(Event b)",
          "package": "netwire",
          "partial": "List",
          "signature": "t-\u003e[b]-\u003eWire s e m a(Event b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Event.html#v:periodicList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduct of all events.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Depends: now.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Wire.Event",
          "name": "productE",
          "package": "netwire",
          "signature": "Wire s e m (Event a) (Event a)",
          "source": "src/Control-Wire-Event.html#productE",
          "type": "function"
        },
        "index": {
          "description": "Product of all events Depends now",
          "hierarchy": "Control Wire Event",
          "module": "Control.Wire.Event",
          "name": "productE",
          "package": "netwire",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Event.html#v:productE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSum of all events.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Depends: now.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Wire.Event",
          "name": "sumE",
          "package": "netwire",
          "signature": "Wire s e m (Event a) (Event a)",
          "source": "src/Control-Wire-Event.html#sumE",
          "type": "function"
        },
        "index": {
          "description": "Sum of all events Depends now",
          "hierarchy": "Control Wire Event",
          "module": "Control.Wire.Event",
          "name": "sumE",
          "package": "netwire",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Event.html#v:sumE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForget all but the first given number of occurrences.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Depends: now.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Wire.Event",
          "name": "takeE",
          "package": "netwire",
          "signature": "Int -\u003e Wire s e m (Event a) (Event a)",
          "source": "src/Control-Wire-Event.html#takeE",
          "type": "function"
        },
        "index": {
          "description": "Forget all but the first given number of occurrences Depends now",
          "hierarchy": "Control Wire Event",
          "module": "Control.Wire.Event",
          "name": "takeE",
          "normalized": "Int-\u003eWire a b c(Event d)(Event d)",
          "package": "netwire",
          "signature": "Int-\u003eWire s e m(Event a)(Event a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Event.html#v:takeE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForget all but the initial occurrences for which the given\n predicate is true.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Depends: now.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Wire.Event",
          "name": "takeWhileE",
          "package": "netwire",
          "signature": "(a -\u003e Bool) -\u003e Wire s e m (Event a) (Event a)",
          "source": "src/Control-Wire-Event.html#takeWhileE",
          "type": "function"
        },
        "index": {
          "description": "Forget all but the initial occurrences for which the given predicate is true Depends now",
          "hierarchy": "Control Wire Event",
          "module": "Control.Wire.Event",
          "name": "takeWhileE",
          "normalized": "(a-\u003eBool)-\u003eWire b c d(Event a)(Event a)",
          "package": "netwire",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003eWire s e m(Event a)(Event a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Event.html#v:takeWhileE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Wire.Interval",
          "name": "Interval",
          "package": "netwire",
          "source": "src/Control-Wire-Interval.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Wire Interval",
          "module": "Control.Wire.Interval",
          "name": "Interval",
          "package": "netwire",
          "partial": "Interval",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Interval.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAfter the given time period.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Depends: now after the given time period.\n\u003c/li\u003e\u003cli\u003e Inhibits: for the given time period.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Wire.Interval",
          "name": "after",
          "package": "netwire",
          "signature": "t -\u003e Wire s e m a a",
          "source": "src/Control-Wire-Interval.html#after",
          "type": "function"
        },
        "index": {
          "description": "After the given time period Depends now after the given time period Inhibits for the given time period",
          "hierarchy": "Control Wire Interval",
          "module": "Control.Wire.Interval",
          "name": "after",
          "normalized": "a-\u003eWire b c d e e",
          "package": "netwire",
          "signature": "t-\u003eWire s e m a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Interval.html#v:after"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003ehold\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Wire.Interval",
          "name": "asSoonAs",
          "package": "netwire",
          "signature": "Wire s e m (Event a) a",
          "source": "src/Control-Wire-Interval.html#asSoonAs",
          "type": "function"
        },
        "index": {
          "description": "Alias for hold",
          "hierarchy": "Control Wire Interval",
          "module": "Control.Wire.Interval",
          "name": "asSoonAs",
          "package": "netwire",
          "partial": "Soon As",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Interval.html#v:asSoonAs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart each time the left event occurs, stop each time the right\n event occurs.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Depends: now when active.\n\u003c/li\u003e\u003cli\u003e Inhibits: after the right event occurred, before the left event\n occurs.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Wire.Interval",
          "name": "between",
          "package": "netwire",
          "signature": "Wire s e m (a, Event b, Event c) a",
          "source": "src/Control-Wire-Interval.html#between",
          "type": "function"
        },
        "index": {
          "description": "Start each time the left event occurs stop each time the right event occurs Depends now when active Inhibits after the right event occurred before the left event occurs",
          "hierarchy": "Control Wire Interval",
          "module": "Control.Wire.Interval",
          "name": "between",
          "normalized": "Wire a b c(d,Event e,Event f)d",
          "package": "netwire",
          "signature": "Wire s e m(a,Event b,Event c)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Interval.html#v:between"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor the given time period.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Depends: now for the given time period.\n\u003c/li\u003e\u003cli\u003e Inhibits: after the given time period.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Wire.Interval",
          "name": "for",
          "package": "netwire",
          "signature": "t -\u003e Wire s e m a a",
          "source": "src/Control-Wire-Interval.html#for",
          "type": "function"
        },
        "index": {
          "description": "For the given time period Depends now for the given time period Inhibits after the given time period",
          "hierarchy": "Control Wire Interval",
          "module": "Control.Wire.Interval",
          "name": "for",
          "normalized": "a-\u003eWire b c d e e",
          "package": "netwire",
          "signature": "t-\u003eWire s e m a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Interval.html#v:for"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart when the event occurs for the first time reflecting its\n latest value.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Depends: now.\n\u003c/li\u003e\u003cli\u003e Inhibits: until the event occurs for the first time.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Wire.Interval",
          "name": "hold",
          "package": "netwire",
          "signature": "Wire s e m (Event a) a",
          "source": "src/Control-Wire-Interval.html#hold",
          "type": "function"
        },
        "index": {
          "description": "Start when the event occurs for the first time reflecting its latest value Depends now Inhibits until the event occurs for the first time",
          "hierarchy": "Control Wire Interval",
          "module": "Control.Wire.Interval",
          "name": "hold",
          "package": "netwire",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Interval.html#v:hold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHold each event occurrence for the given time period.  Inhibits\n when no event occurred for the given amount of time.  New occurrences\n override old occurrences, even when they are still held.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Depends: now.\n\u003c/li\u003e\u003cli\u003e Inhibits: when no event occurred for the given amount of time.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Wire.Interval",
          "name": "holdFor",
          "package": "netwire",
          "signature": "t -\u003e Wire s e m (Event a) a",
          "source": "src/Control-Wire-Interval.html#holdFor",
          "type": "function"
        },
        "index": {
          "description": "Hold each event occurrence for the given time period Inhibits when no event occurred for the given amount of time New occurrences override old occurrences even when they are still held Depends now Inhibits when no event occurred for the given amount of time",
          "hierarchy": "Control Wire Interval",
          "module": "Control.Wire.Interval",
          "name": "holdFor",
          "normalized": "a-\u003eWire b c d(Event e)e",
          "package": "netwire",
          "partial": "For",
          "signature": "t-\u003eWire s e m(Event a)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Interval.html#v:holdFor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInhibit forever with the given value.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Inhibits: always.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Wire.Interval",
          "name": "inhibit",
          "package": "netwire",
          "signature": "e -\u003e Wire s e m a b",
          "source": "src/Control-Wire-Interval.html#inhibit",
          "type": "function"
        },
        "index": {
          "description": "Inhibit forever with the given value Inhibits always",
          "hierarchy": "Control Wire Interval",
          "module": "Control.Wire.Interval",
          "name": "inhibit",
          "normalized": "a-\u003eWire b a c d e",
          "package": "netwire",
          "signature": "e-\u003eWire s e m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Interval.html#v:inhibit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen the given predicate is false for the input signal.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Depends: now.\n\u003c/li\u003e\u003cli\u003e Inhibits: unless the predicate is false.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Wire.Interval",
          "name": "unless",
          "package": "netwire",
          "signature": "(a -\u003e Bool) -\u003e Wire s e m a a",
          "source": "src/Control-Wire-Interval.html#unless",
          "type": "function"
        },
        "index": {
          "description": "When the given predicate is false for the input signal Depends now Inhibits unless the predicate is false",
          "hierarchy": "Control Wire Interval",
          "module": "Control.Wire.Interval",
          "name": "unless",
          "normalized": "(a-\u003eBool)-\u003eWire b c d a a",
          "package": "netwire",
          "signature": "(a-\u003eBool)-\u003eWire s e m a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Interval.html#v:unless"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce until the given event occurs.  When it occurs, inhibit with\n its value forever.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Depends: now until event occurs.\n\u003c/li\u003e\u003cli\u003e Inhibits: forever after event occurs.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Wire.Interval",
          "name": "until",
          "package": "netwire",
          "signature": "Wire s e m (a, Event b) a",
          "source": "src/Control-Wire-Interval.html#until",
          "type": "function"
        },
        "index": {
          "description": "Produce until the given event occurs When it occurs inhibit with its value forever Depends now until event occurs Inhibits forever after event occurs",
          "hierarchy": "Control Wire Interval",
          "module": "Control.Wire.Interval",
          "name": "until",
          "normalized": "Wire a b c(d,Event e)d",
          "package": "netwire",
          "signature": "Wire s e m(a,Event b)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Interval.html#v:until"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen the given predicate is true for the input signal.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Depends: now.\n\u003c/li\u003e\u003cli\u003e Inhibits: when the predicate is false.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Wire.Interval",
          "name": "when",
          "package": "netwire",
          "signature": "(a -\u003e Bool) -\u003e Wire s e m a a",
          "source": "src/Control-Wire-Interval.html#when",
          "type": "function"
        },
        "index": {
          "description": "When the given predicate is true for the input signal Depends now Inhibits when the predicate is false",
          "hierarchy": "Control Wire Interval",
          "module": "Control.Wire.Interval",
          "name": "when",
          "normalized": "(a-\u003eBool)-\u003eWire b c d a a",
          "package": "netwire",
          "signature": "(a-\u003eBool)-\u003eWire s e m a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Interval.html#v:when"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Wire.Run",
          "name": "Run",
          "package": "netwire",
          "source": "src/Control-Wire-Run.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Wire Run",
          "module": "Control.Wire.Run",
          "name": "Run",
          "package": "netwire",
          "partial": "Run",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Run.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function runs the given wire using the given state delta\n generator.  It constantly shows the output of the wire on one line on\n stdout.  Press Ctrl-C to abort.\n\u003c/p\u003e",
          "module": "Control.Wire.Run",
          "name": "testWire",
          "package": "netwire",
          "signature": "Session m s -\u003e (forall a.  Wire s e Identity a b) -\u003e m c",
          "source": "src/Control-Wire-Run.html#testWire",
          "type": "function"
        },
        "index": {
          "description": "This function runs the given wire using the given state delta generator It constantly shows the output of the wire on one line on stdout Press Ctrl-C to abort",
          "hierarchy": "Control Wire Run",
          "module": "Control.Wire.Run",
          "name": "testWire",
          "normalized": "Session a b-\u003e(c d Wire b e Identity f g)-\u003ea h",
          "package": "netwire",
          "partial": "Wire",
          "signature": "Session m s-\u003e(forall a. Wire s e Identity a b)-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Run.html#v:testWire"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function runs the given wire using the given state delta\n generator.  It constantly shows the output of the wire on one line on\n stdout.  Press Ctrl-C to abort.\n\u003c/p\u003e",
          "module": "Control.Wire.Run",
          "name": "testWireM",
          "package": "netwire",
          "signature": "(forall a.  m' a -\u003e m a) -\u003e Session m s -\u003e (forall a.  Wire s e m' a b) -\u003e m c",
          "source": "src/Control-Wire-Run.html#testWireM",
          "type": "function"
        },
        "index": {
          "description": "This function runs the given wire using the given state delta generator It constantly shows the output of the wire on one line on stdout Press Ctrl-C to abort",
          "hierarchy": "Control Wire Run",
          "module": "Control.Wire.Run",
          "name": "testWireM",
          "normalized": "(a b c d-\u003ee d)-\u003eSession e f-\u003e(a b Wire f g c d h)-\u003ee i",
          "package": "netwire",
          "partial": "Wire",
          "signature": "(forall a. m' a-\u003em a)-\u003eSession m s-\u003e(forall a. Wire s e m' a b)-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Run.html#v:testWireM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Wire.Session",
          "name": "Session",
          "package": "netwire",
          "source": "src/Control-Wire-Session.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Wire Session",
          "module": "Control.Wire.Session",
          "name": "Session",
          "package": "netwire",
          "partial": "Session",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Session.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eState delta types with time deltas.\n\u003c/p\u003e",
          "module": "Control.Wire.Session",
          "name": "HasTime",
          "package": "netwire",
          "source": "src/Control-Wire-Session.html#HasTime",
          "type": "class"
        },
        "index": {
          "description": "State delta types with time deltas",
          "hierarchy": "Control Wire Session",
          "module": "Control.Wire.Session",
          "name": "HasTime",
          "package": "netwire",
          "partial": "Has Time",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Session.html#t:HasTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eState delta generators as required for wire sessions, most notably\n to generate time deltas.  These are mini-wires with the sole purpose\n of generating these deltas.\n\u003c/p\u003e",
          "module": "Control.Wire.Session",
          "name": "Session",
          "package": "netwire",
          "source": "src/Control-Wire-Session.html#Session",
          "type": "newtype"
        },
        "index": {
          "description": "State delta generators as required for wire sessions most notably to generate time deltas These are mini-wires with the sole purpose of generating these deltas",
          "hierarchy": "Control Wire Session",
          "module": "Control.Wire.Session",
          "name": "Session",
          "package": "netwire",
          "partial": "Session",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Session.html#t:Session"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis state delta type denotes time deltas.  This is necessary for\n most FRP applications.\n\u003c/p\u003e",
          "module": "Control.Wire.Session",
          "name": "Timed",
          "package": "netwire",
          "source": "src/Control-Wire-Session.html#Timed",
          "type": "data"
        },
        "index": {
          "description": "This state delta type denotes time deltas This is necessary for most FRP applications",
          "hierarchy": "Control Wire Session",
          "module": "Control.Wire.Session",
          "name": "Timed",
          "package": "netwire",
          "partial": "Timed",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Session.html#t:Timed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Wire.Session",
          "name": "Session",
          "package": "netwire",
          "signature": "Session",
          "source": "src/Control-Wire-Session.html#Session",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Wire Session",
          "module": "Control.Wire.Session",
          "name": "Session",
          "package": "netwire",
          "partial": "Session",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Session.html#v:Session"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Wire.Session",
          "name": "Timed",
          "package": "netwire",
          "signature": "Timed t s",
          "source": "src/Control-Wire-Session.html#Timed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Wire Session",
          "module": "Control.Wire.Session",
          "name": "Timed",
          "package": "netwire",
          "partial": "Timed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Session.html#v:Timed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eState delta generator for a real time clock.\n\u003c/p\u003e",
          "module": "Control.Wire.Session",
          "name": "clockSession",
          "package": "netwire",
          "signature": "Session m (s -\u003e Timed NominalDiffTime s)",
          "source": "src/Control-Wire-Session.html#clockSession",
          "type": "function"
        },
        "index": {
          "description": "State delta generator for real time clock",
          "hierarchy": "Control Wire Session",
          "module": "Control.Wire.Session",
          "name": "clockSession",
          "normalized": "Session a(b-\u003eTimed NominalDiffTime b)",
          "package": "netwire",
          "partial": "Session",
          "signature": "Session m(s-\u003eTimed NominalDiffTime s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Session.html#v:clockSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon-extending version of \u003ccode\u003e\u003ca\u003eclockSession\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Wire.Session",
          "name": "clockSession_",
          "package": "netwire",
          "signature": "Session m (Timed NominalDiffTime ())",
          "source": "src/Control-Wire-Session.html#clockSession_",
          "type": "function"
        },
        "index": {
          "description": "Non-extending version of clockSession",
          "hierarchy": "Control Wire Session",
          "module": "Control.Wire.Session",
          "name": "clockSession_",
          "normalized": "Session a(Timed NominalDiffTime())",
          "package": "netwire",
          "partial": "Session",
          "signature": "Session m(Timed NominalDiffTime())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Session.html#v:clockSession_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eState delta generator for a simple counting clock.  Denotes a fixed\n framerate.  This is likely more useful than \u003ccode\u003e\u003ca\u003eclockSession\u003c/a\u003e\u003c/code\u003e for\n simulations and real-time games.\n\u003c/p\u003e",
          "module": "Control.Wire.Session",
          "name": "countSession",
          "package": "netwire",
          "signature": "t-\u003e Session m (s -\u003e Timed t s)",
          "type": "function"
        },
        "index": {
          "description": "State delta generator for simple counting clock Denotes fixed framerate This is likely more useful than clockSession for simulations and real-time games",
          "hierarchy": "Control Wire Session",
          "module": "Control.Wire.Session",
          "name": "countSession",
          "normalized": "a-\u003eSession b(c-\u003eTimed a c)",
          "package": "netwire",
          "partial": "Session",
          "signature": "t-\u003eSession m(s-\u003eTimed t s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Session.html#v:countSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon-extending version of \u003ccode\u003e\u003ca\u003ecountSession\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Wire.Session",
          "name": "countSession_",
          "package": "netwire",
          "signature": "t -\u003e Session m (Timed t ())",
          "source": "src/Control-Wire-Session.html#countSession_",
          "type": "function"
        },
        "index": {
          "description": "Non-extending version of countSession",
          "hierarchy": "Control Wire Session",
          "module": "Control.Wire.Session",
          "name": "countSession_",
          "normalized": "a-\u003eSession b(Timed a())",
          "package": "netwire",
          "partial": "Session",
          "signature": "t-\u003eSession m(Timed t())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Session.html#v:countSession_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the current time delta.\n\u003c/p\u003e",
          "module": "Control.Wire.Session",
          "name": "dtime",
          "package": "netwire",
          "signature": "s -\u003e t",
          "source": "src/Control-Wire-Session.html#dtime",
          "type": "method"
        },
        "index": {
          "description": "Extract the current time delta",
          "hierarchy": "Control Wire Session",
          "module": "Control.Wire.Session",
          "name": "dtime",
          "normalized": "a-\u003eb",
          "package": "netwire",
          "signature": "s-\u003et",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Session.html#v:dtime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Wire.Session",
          "name": "stepSession",
          "package": "netwire",
          "signature": "m (s, Session m s)",
          "source": "src/Control-Wire-Session.html#Session",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Wire Session",
          "module": "Control.Wire.Session",
          "name": "stepSession",
          "normalized": "a(b,Session a b)",
          "package": "netwire",
          "partial": "Session",
          "signature": "m(s,Session m s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Session.html#v:stepSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Wire.Switch",
          "name": "Switch",
          "package": "netwire",
          "source": "src/Control-Wire-Switch.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Wire Switch",
          "module": "Control.Wire.Switch",
          "name": "Switch",
          "package": "netwire",
          "partial": "Switch",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Switch.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eActs like the first wire until it inhibits, then switches to the\n second wire.  Infixr 1.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Depends: like current wire.\n\u003c/li\u003e\u003cli\u003e Inhibits: after switching like the second wire.\n\u003c/li\u003e\u003cli\u003e Switch: now.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Wire.Switch",
          "name": "(--\u003e)",
          "package": "netwire",
          "signature": "Wire s e m a b -\u003e Wire s e m a b -\u003e Wire s e m a b",
          "source": "src/Control-Wire-Switch.html#--%3E",
          "type": "function"
        },
        "index": {
          "description": "Acts like the first wire until it inhibits then switches to the second wire Infixr Depends like current wire Inhibits after switching like the second wire Switch now",
          "hierarchy": "Control Wire Switch",
          "module": "Control.Wire.Switch",
          "name": "(--\u003e) --\u003e",
          "normalized": "Wire a b c d e-\u003eWire a b c d e-\u003eWire a b c d e",
          "package": "netwire",
          "signature": "Wire s e m a b-\u003eWire s e m a b-\u003eWire s e m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Switch.html#v:-45--45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntrinsic switch:  Delayed version of \u003ccode\u003e\u003ca\u003eswitch\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Inhibits: like argument wire until switch, then like the new wire.\n\u003c/li\u003e\u003cli\u003e Switch: once, after now, restart state.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Wire.Switch",
          "name": "dSwitch",
          "package": "netwire",
          "signature": "Wire s e m a (b, Event (Wire s e m a b)) -\u003e Wire s e m a b",
          "source": "src/Control-Wire-Switch.html#dSwitch",
          "type": "function"
        },
        "index": {
          "description": "Intrinsic switch Delayed version of switch Inhibits like argument wire until switch then like the new wire Switch once after now restart state",
          "hierarchy": "Control Wire Switch",
          "module": "Control.Wire.Switch",
          "name": "dSwitch",
          "normalized": "Wire a b c d(e,Event(Wire a b c d e))-\u003eWire a b c d e",
          "package": "netwire",
          "partial": "Switch",
          "signature": "Wire s e m a(b,Event(Wire s e m a b))-\u003eWire s e m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Switch.html#v:dSwitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntrinsic continuable switch:  Delayed version of \u003ccode\u003e\u003ca\u003ekSwitch\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Inhibits: like the first argument wire, like the new wire after\n   switch.  Inhibition of the second argument wire is ignored.\n\u003c/li\u003e\u003cli\u003e Switch: once, after now, restart state.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Wire.Switch",
          "name": "dkSwitch",
          "package": "netwire",
          "signature": "Wire s e m a b -\u003e Wire s e m (a, b) (Event (Wire s e m a b -\u003e Wire s e m a b)) -\u003e Wire s e m a b",
          "source": "src/Control-Wire-Switch.html#dkSwitch",
          "type": "function"
        },
        "index": {
          "description": "Intrinsic continuable switch Delayed version of kSwitch Inhibits like the first argument wire like the new wire after switch Inhibition of the second argument wire is ignored Switch once after now restart state",
          "hierarchy": "Control Wire Switch",
          "module": "Control.Wire.Switch",
          "name": "dkSwitch",
          "normalized": "Wire a b c d e-\u003eWire a b c(d,e)(Event(Wire a b c d e-\u003eWire a b c d e))-\u003eWire a b c d e",
          "package": "netwire",
          "partial": "Switch",
          "signature": "Wire s e m a b-\u003eWire s e m(a,b)(Event(Wire s e m a b-\u003eWire s e m a b))-\u003eWire s e m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Switch.html#v:dkSwitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtrinsic continuable switch.  Delayed version of \u003ccode\u003e\u003ca\u003ekrSwitch\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Inhibits: like the current wire.\n\u003c/li\u003e\u003cli\u003e Switch: recurrent, after now, restart state.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Wire.Switch",
          "name": "dkrSwitch",
          "package": "netwire",
          "signature": "Wire s e m a b -\u003e Wire s e m (a, Event (Wire s e m a b -\u003e Wire s e m a b)) b",
          "source": "src/Control-Wire-Switch.html#dkrSwitch",
          "type": "function"
        },
        "index": {
          "description": "Extrinsic continuable switch Delayed version of krSwitch Inhibits like the current wire Switch recurrent after now restart state",
          "hierarchy": "Control Wire Switch",
          "module": "Control.Wire.Switch",
          "name": "dkrSwitch",
          "normalized": "Wire a b c d e-\u003eWire a b c(d,Event(Wire a b c d e-\u003eWire a b c d e))e",
          "package": "netwire",
          "partial": "Switch",
          "signature": "Wire s e m a b-\u003eWire s e m(a,Event(Wire s e m a b-\u003eWire s e m a b))b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Switch.html#v:dkrSwitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtrinsic switch:  Delayed version of \u003ccode\u003e\u003ca\u003erSwitch\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Inhibits: like the current wire.\n\u003c/li\u003e\u003cli\u003e Switch: recurrent, after now, restart state.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Wire.Switch",
          "name": "drSwitch",
          "package": "netwire",
          "signature": "Wire s e m a b -\u003e Wire s e m (a, Event (Wire s e m a b)) b",
          "source": "src/Control-Wire-Switch.html#drSwitch",
          "type": "function"
        },
        "index": {
          "description": "Extrinsic switch Delayed version of rSwitch Inhibits like the current wire Switch recurrent after now restart state",
          "hierarchy": "Control Wire Switch",
          "module": "Control.Wire.Switch",
          "name": "drSwitch",
          "normalized": "Wire a b c d e-\u003eWire a b c(d,Event(Wire a b c d e))e",
          "package": "netwire",
          "partial": "Switch",
          "signature": "Wire s e m a b-\u003eWire s e m(a,Event(Wire s e m a b))b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Switch.html#v:drSwitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntrinsic continuable switch:  \u003ccode\u003ekSwitch w1 w2\u003c/code\u003e starts with \u003ccode\u003ew1\u003c/code\u003e.\n Its signal is received by \u003ccode\u003ew2\u003c/code\u003e, which may choose to switch to a new\n wire.  Passes the wire we are switching away from to the new wire,\n such that it may be reused in it.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Inhibits: like the first argument wire, like the new wire after\n   switch.  Inhibition of the second argument wire is ignored.\n\u003c/li\u003e\u003cli\u003e Switch: once, now, restart state.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Wire.Switch",
          "name": "kSwitch",
          "package": "netwire",
          "signature": "Wire s e m a b -\u003e Wire s e m (a, b) (Event (Wire s e m a b -\u003e Wire s e m a b)) -\u003e Wire s e m a b",
          "source": "src/Control-Wire-Switch.html#kSwitch",
          "type": "function"
        },
        "index": {
          "description": "Intrinsic continuable switch kSwitch w1 w2 starts with w1 Its signal is received by w2 which may choose to switch to new wire Passes the wire we are switching away from to the new wire such that it may be reused in it Inhibits like the first argument wire like the new wire after switch Inhibition of the second argument wire is ignored Switch once now restart state",
          "hierarchy": "Control Wire Switch",
          "module": "Control.Wire.Switch",
          "name": "kSwitch",
          "normalized": "Wire a b c d e-\u003eWire a b c(d,e)(Event(Wire a b c d e-\u003eWire a b c d e))-\u003eWire a b c d e",
          "package": "netwire",
          "partial": "Switch",
          "signature": "Wire s e m a b-\u003eWire s e m(a,b)(Event(Wire s e m a b-\u003eWire s e m a b))-\u003eWire s e m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Switch.html#v:kSwitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtrinsic continuable switch.  This switch works like \u003ccode\u003e\u003ca\u003erSwitch\u003c/a\u003e\u003c/code\u003e,\n except that it passes the wire we are switching away from to the new\n wire.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Inhibits: like the current wire.\n\u003c/li\u003e\u003cli\u003e Switch: recurrent, now, restart state.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Wire.Switch",
          "name": "krSwitch",
          "package": "netwire",
          "signature": "Wire s e m a b -\u003e Wire s e m (a, Event (Wire s e m a b -\u003e Wire s e m a b)) b",
          "source": "src/Control-Wire-Switch.html#krSwitch",
          "type": "function"
        },
        "index": {
          "description": "Extrinsic continuable switch This switch works like rSwitch except that it passes the wire we are switching away from to the new wire Inhibits like the current wire Switch recurrent now restart state",
          "hierarchy": "Control Wire Switch",
          "module": "Control.Wire.Switch",
          "name": "krSwitch",
          "normalized": "Wire a b c d e-\u003eWire a b c(d,Event(Wire a b c d e-\u003eWire a b c d e))e",
          "package": "netwire",
          "partial": "Switch",
          "signature": "Wire s e m a b-\u003eWire s e m(a,Event(Wire s e m a b-\u003eWire s e m a b))b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Switch.html#v:krSwitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRoute the left input signal based on the current mode.  The right\n input signal can be used to change the current mode.  When switching\n away from a mode and then switching back to it, it will be resumed.\n Freezes time during inactivity.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Complexity: O(n * log n) space, O(log n) lookup time on switch wrt\n   number of started, inactive modes.\n\u003c/li\u003e\u003cli\u003e Depends: like currently active wire (left), now (right).\n\u003c/li\u003e\u003cli\u003e Inhibits: when active wire inhibits.\n\u003c/li\u003e\u003cli\u003e Switch: now on mode change.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Wire.Switch",
          "name": "modes",
          "package": "netwire",
          "signature": "k-\u003e (k -\u003e Wire s e m a b)-\u003e Wire s e m (a, Event k) b",
          "type": "function"
        },
        "index": {
          "description": "Route the left input signal based on the current mode The right input signal can be used to change the current mode When switching away from mode and then switching back to it it will be resumed Freezes time during inactivity Complexity log space log lookup time on switch wrt number of started inactive modes Depends like currently active wire left now right Inhibits when active wire inhibits Switch now on mode change",
          "hierarchy": "Control Wire Switch",
          "module": "Control.Wire.Switch",
          "name": "modes",
          "normalized": "a-\u003e(a-\u003eWire b c d e f)-\u003eWire b c d(e,Event a)f",
          "package": "netwire",
          "signature": "k-\u003e(k-\u003eWire s e m a b)-\u003eWire s e m(a,Event k)b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Switch.html#v:modes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtrinsic switch:  Start with the given wire.  Each time the input\n event occurs, switch to the wire it carries.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Inhibits: like the current wire.\n\u003c/li\u003e\u003cli\u003e Switch: recurrent, now, restart state.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Wire.Switch",
          "name": "rSwitch",
          "package": "netwire",
          "signature": "Wire s e m a b -\u003e Wire s e m (a, Event (Wire s e m a b)) b",
          "source": "src/Control-Wire-Switch.html#rSwitch",
          "type": "function"
        },
        "index": {
          "description": "Extrinsic switch Start with the given wire Each time the input event occurs switch to the wire it carries Inhibits like the current wire Switch recurrent now restart state",
          "hierarchy": "Control Wire Switch",
          "module": "Control.Wire.Switch",
          "name": "rSwitch",
          "normalized": "Wire a b c d e-\u003eWire a b c(d,Event(Wire a b c d e))e",
          "package": "netwire",
          "partial": "Switch",
          "signature": "Wire s e m a b-\u003eWire s e m(a,Event(Wire s e m a b))b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Switch.html#v:rSwitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntrinsic switch:  Start with the given wire.  As soon as its event\n occurs, switch to the wire in the event's value.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Inhibits: like argument wire until switch, then like the new wire.\n\u003c/li\u003e\u003cli\u003e Switch: once, now, restart state.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Wire.Switch",
          "name": "switch",
          "package": "netwire",
          "signature": "Wire s e m a (b, Event (Wire s e m a b)) -\u003e Wire s e m a b",
          "source": "src/Control-Wire-Switch.html#switch",
          "type": "function"
        },
        "index": {
          "description": "Intrinsic switch Start with the given wire As soon as its event occurs switch to the wire in the event value Inhibits like argument wire until switch then like the new wire Switch once now restart state",
          "hierarchy": "Control Wire Switch",
          "module": "Control.Wire.Switch",
          "name": "switch",
          "normalized": "Wire a b c d(e,Event(Wire a b c d e))-\u003eWire a b c d e",
          "package": "netwire",
          "signature": "Wire s e m a(b,Event(Wire s e m a b))-\u003eWire s e m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Switch.html#v:switch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Wire.Time",
          "name": "Time",
          "package": "netwire",
          "source": "src/Control-Wire-Time.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Wire Time",
          "module": "Control.Wire.Time",
          "name": "Time",
          "package": "netwire",
          "partial": "Time",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Time.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocal time starting from zero.\n\u003c/p\u003e",
          "module": "Control.Wire.Time",
          "name": "time",
          "package": "netwire",
          "signature": "Wire s e m a t",
          "source": "src/Control-Wire-Time.html#time",
          "type": "function"
        },
        "index": {
          "description": "Local time starting from zero",
          "hierarchy": "Control Wire Time",
          "module": "Control.Wire.Time",
          "name": "time",
          "package": "netwire",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Time.html#v:time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocal time starting from zero, converted to your favorite\n fractional type.\n\u003c/p\u003e",
          "module": "Control.Wire.Time",
          "name": "timeF",
          "package": "netwire",
          "signature": "Wire s e m a b",
          "source": "src/Control-Wire-Time.html#timeF",
          "type": "function"
        },
        "index": {
          "description": "Local time starting from zero converted to your favorite fractional type",
          "hierarchy": "Control Wire Time",
          "module": "Control.Wire.Time",
          "name": "timeF",
          "package": "netwire",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Time.html#v:timeF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocal time starting from the given value.\n\u003c/p\u003e",
          "module": "Control.Wire.Time",
          "name": "timeFrom",
          "package": "netwire",
          "signature": "t -\u003e Wire s e m a t",
          "source": "src/Control-Wire-Time.html#timeFrom",
          "type": "function"
        },
        "index": {
          "description": "Local time starting from the given value",
          "hierarchy": "Control Wire Time",
          "module": "Control.Wire.Time",
          "name": "timeFrom",
          "normalized": "a-\u003eWire b c d e a",
          "package": "netwire",
          "partial": "From",
          "signature": "t-\u003eWire s e m a t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Time.html#v:timeFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Wire.Unsafe.Event",
          "name": "Event",
          "package": "netwire",
          "source": "src/Control-Wire-Unsafe-Event.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Wire Unsafe Event",
          "module": "Control.Wire.Unsafe.Event",
          "name": "Event",
          "package": "netwire",
          "partial": "Event",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Unsafe-Event.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDenotes a stream of values, each together with time of occurrence.\n Since \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e is commonly used for functional reactive programming it\n does not define most of the usual instances to protect continuous\n time and discrete event occurrence semantics.\n\u003c/p\u003e",
          "module": "Control.Wire.Unsafe.Event",
          "name": "Event",
          "package": "netwire",
          "source": "src/Control-Wire-Unsafe-Event.html#Event",
          "type": "data"
        },
        "index": {
          "description": "Denotes stream of values each together with time of occurrence Since Event is commonly used for functional reactive programming it does not define most of the usual instances to protect continuous time and discrete event occurrence semantics",
          "hierarchy": "Control Wire Unsafe Event",
          "module": "Control.Wire.Unsafe.Event",
          "name": "Event",
          "package": "netwire",
          "partial": "Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Unsafe-Event.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Wire.Unsafe.Event",
          "name": "Event",
          "package": "netwire",
          "signature": "Event a",
          "source": "src/Control-Wire-Unsafe-Event.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Wire Unsafe Event",
          "module": "Control.Wire.Unsafe.Event",
          "name": "Event",
          "package": "netwire",
          "partial": "Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Unsafe-Event.html#v:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Wire.Unsafe.Event",
          "name": "NoEvent",
          "package": "netwire",
          "signature": "NoEvent",
          "source": "src/Control-Wire-Unsafe-Event.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Wire Unsafe Event",
          "module": "Control.Wire.Unsafe.Event",
          "name": "NoEvent",
          "package": "netwire",
          "partial": "No Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Unsafe-Event.html#v:NoEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold the given event.\n\u003c/p\u003e",
          "module": "Control.Wire.Unsafe.Event",
          "name": "event",
          "package": "netwire",
          "signature": "b -\u003e (a -\u003e b) -\u003e Event a -\u003e b",
          "source": "src/Control-Wire-Unsafe-Event.html#event",
          "type": "function"
        },
        "index": {
          "description": "Fold the given event",
          "hierarchy": "Control Wire Unsafe Event",
          "module": "Control.Wire.Unsafe.Event",
          "name": "event",
          "normalized": "a-\u003e(b-\u003ea)-\u003eEvent b-\u003ea",
          "package": "netwire",
          "signature": "b-\u003e(a-\u003eb)-\u003eEvent a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Unsafe-Event.html#v:event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDid the given event occur?\n\u003c/p\u003e",
          "module": "Control.Wire.Unsafe.Event",
          "name": "occurred",
          "package": "netwire",
          "signature": "Event a -\u003e Bool",
          "source": "src/Control-Wire-Unsafe-Event.html#occurred",
          "type": "function"
        },
        "index": {
          "description": "Did the given event occur",
          "hierarchy": "Control Wire Unsafe Event",
          "module": "Control.Wire.Unsafe.Event",
          "name": "occurred",
          "normalized": "Event a-\u003eBool",
          "package": "netwire",
          "signature": "Event a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Unsafe-Event.html#v:occurred"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEach time the given event occurs, perform the given action with the\n value the event carries.  The resulting event carries the result of\n the action.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Depends: now.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Wire.Unsafe.Event",
          "name": "onEventM",
          "package": "netwire",
          "signature": "(a -\u003e m b) -\u003e Wire s e m (Event a) (Event b)",
          "source": "src/Control-Wire-Unsafe-Event.html#onEventM",
          "type": "function"
        },
        "index": {
          "description": "Each time the given event occurs perform the given action with the value the event carries The resulting event carries the result of the action Depends now",
          "hierarchy": "Control Wire Unsafe Event",
          "module": "Control.Wire.Unsafe.Event",
          "name": "onEventM",
          "normalized": "(a-\u003eb c)-\u003eWire d e b(Event a)(Event c)",
          "package": "netwire",
          "partial": "Event",
          "signature": "(a-\u003em b)-\u003eWire s e m(Event a)(Event b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire-Unsafe-Event.html#v:onEventM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Wire",
          "name": "Wire",
          "package": "netwire",
          "source": "src/Control-Wire.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Wire",
          "module": "Control.Wire",
          "name": "Wire",
          "package": "netwire",
          "partial": "Wire",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Wire",
          "name": "Identity",
          "package": "netwire",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Wire",
          "module": "Control.Wire",
          "name": "Identity",
          "package": "netwire",
          "partial": "Identity",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire.html#t:Identity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a length of time, as measured by UTC.\n Conversion functions will treat it as seconds.\n It has a precision of 10^-12 s.\n It ignores leap-seconds, so it's not necessarily a fixed amount of clock time.\n For instance, 23:00 UTC + 2 hours of NominalDiffTime = 01:00 UTC (+ 1 day),\n regardless of whether a leap-second intervened.\n\u003c/p\u003e",
          "module": "Control.Wire",
          "name": "NominalDiffTime",
          "package": "netwire",
          "type": "data"
        },
        "index": {
          "description": "This is length of time as measured by UTC Conversion functions will treat it as seconds It has precision of It ignores leap-seconds so it not necessarily fixed amount of clock time For instance UTC hours of NominalDiffTime UTC day regardless of whether leap-second intervened",
          "hierarchy": "Control Wire",
          "module": "Control.Wire",
          "name": "NominalDiffTime",
          "package": "netwire",
          "partial": "Nominal Diff Time",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire.html#t:NominalDiffTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple wires with time.\n\u003c/p\u003e",
          "module": "Control.Wire",
          "name": "SimpleWire",
          "package": "netwire",
          "source": "src/Control-Wire.html#SimpleWire",
          "type": "type"
        },
        "index": {
          "description": "Simple wires with time",
          "hierarchy": "Control Wire",
          "module": "Control.Wire",
          "name": "SimpleWire",
          "package": "netwire",
          "partial": "Simple Wire",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire.html#t:SimpleWire"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePure wires.\n\u003c/p\u003e",
          "module": "Control.Wire",
          "name": "WireP",
          "package": "netwire",
          "source": "src/Control-Wire.html#WireP",
          "type": "type"
        },
        "index": {
          "description": "Pure wires",
          "hierarchy": "Control Wire",
          "module": "Control.Wire",
          "name": "WireP",
          "package": "netwire",
          "partial": "Wire",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire.html#t:WireP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Wire",
          "name": "Identity",
          "package": "netwire",
          "signature": "Identity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Wire",
          "module": "Control.Wire",
          "name": "Identity",
          "package": "netwire",
          "partial": "Identity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire.html#v:Identity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Wire",
          "name": "runIdentity",
          "package": "netwire",
          "signature": "a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Wire",
          "module": "Control.Wire",
          "name": "runIdentity",
          "package": "netwire",
          "partial": "Identity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/Control-Wire.html#v:runIdentity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Netwire.Analyze",
          "name": "Analyze",
          "package": "netwire",
          "source": "src/FRP-Netwire-Analyze.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "FRP Netwire Analyze",
          "module": "FRP.Netwire.Analyze",
          "name": "Analyze",
          "package": "netwire",
          "partial": "Analyze",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/FRP-Netwire-Analyze.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAverage framerate over the last given number of samples.  One\n important thing to note is that the value of this wire will generally\n disagree with \u003ccode\u003e\u003ca\u003esAvg\u003c/a\u003e\u003c/code\u003e composed with \u003ccode\u003e\u003ca\u003eframerate\u003c/a\u003e\u003c/code\u003e.  This is expected,\n because this wire simply calculates the arithmetic mean, whereas\n \u003ccode\u003e\u003ca\u003esAvg\u003c/a\u003e\u003c/code\u003e will actually integrate the framerate graph.\n\u003c/p\u003e\u003cp\u003eNote:  This wire is for debugging purposes only, because it exposes\n discrete time.  Do not taint your application with discrete time.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Complexity: O(n) time and space wrt number of samples.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "FRP.Netwire.Analyze",
          "name": "avgFps",
          "package": "netwire",
          "signature": "Int-\u003e Wire s e m a b",
          "type": "function"
        },
        "index": {
          "description": "Average framerate over the last given number of samples One important thing to note is that the value of this wire will generally disagree with sAvg composed with framerate This is expected because this wire simply calculates the arithmetic mean whereas sAvg will actually integrate the framerate graph Note This wire is for debugging purposes only because it exposes discrete time Do not taint your application with discrete time Complexity time and space wrt number of samples",
          "hierarchy": "FRP Netwire Analyze",
          "module": "FRP.Netwire.Analyze",
          "name": "avgFps",
          "normalized": "Int-\u003eWire a b c d e",
          "package": "netwire",
          "partial": "Fps",
          "signature": "Int-\u003eWire s e m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/FRP-Netwire-Analyze.html#v:avgFps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCurrent framerate.\n\u003c/p\u003e\u003cp\u003eNote:  This wire is for debugging purposes only, because it exposes\n discrete time.  Do not taint your application with discrete time.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Inhibits: when the clock stopped ticking.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "FRP.Netwire.Analyze",
          "name": "framerate",
          "package": "netwire",
          "signature": "Wire s e m a b",
          "source": "src/FRP-Netwire-Analyze.html#framerate",
          "type": "function"
        },
        "index": {
          "description": "Current framerate Note This wire is for debugging purposes only because it exposes discrete time Do not taint your application with discrete time Inhibits when the clock stopped ticking",
          "hierarchy": "FRP Netwire Analyze",
          "module": "FRP.Netwire.Analyze",
          "name": "framerate",
          "package": "netwire",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/FRP-Netwire-Analyze.html#v:framerate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHigh peak.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Depends: now.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "FRP.Netwire.Analyze",
          "name": "highPeak",
          "package": "netwire",
          "signature": "Wire s e m a a",
          "source": "src/FRP-Netwire-Analyze.html#highPeak",
          "type": "function"
        },
        "index": {
          "description": "High peak Depends now",
          "hierarchy": "FRP Netwire Analyze",
          "module": "FRP.Netwire.Analyze",
          "name": "highPeak",
          "package": "netwire",
          "partial": "Peak",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/FRP-Netwire-Analyze.html#v:highPeak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHigh peak with respect to the given comparison function.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Depends: now.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "FRP.Netwire.Analyze",
          "name": "highPeakBy",
          "package": "netwire",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e Wire s e m a a",
          "source": "src/FRP-Netwire-Analyze.html#highPeakBy",
          "type": "function"
        },
        "index": {
          "description": "High peak with respect to the given comparison function Depends now",
          "hierarchy": "FRP Netwire Analyze",
          "module": "FRP.Netwire.Analyze",
          "name": "highPeakBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003eWire b c d a a",
          "package": "netwire",
          "partial": "Peak By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003eWire s e m a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/FRP-Netwire-Analyze.html#v:highPeakBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate the average of the signal over the given interval (from\n now).  This is done by calculating the integral of the corresponding\n linearly interpolated graph and dividing it by the interval length.\n See \u003ccode\u003e\u003ca\u003elinAvg\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e\u003cp\u003eLinear interpolation can be slow.  If you don't need it, you can use\n the staircase variant \u003ccode\u003e\u003ca\u003esAvg\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample: \u003ccode\u003elAvg 2\u003c/code\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Complexity: O(s) space, O(s) time wrt number of samples in the\n   interval.\n\u003c/li\u003e\u003cli\u003e Depends: now.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "FRP.Netwire.Analyze",
          "name": "lAvg",
          "package": "netwire",
          "signature": "t-\u003e Wire s e m a a",
          "type": "function"
        },
        "index": {
          "description": "Calculate the average of the signal over the given interval from now This is done by calculating the integral of the corresponding linearly interpolated graph and dividing it by the interval length See linAvg for details Linear interpolation can be slow If you don need it you can use the staircase variant sAvg Example lAvg Complexity space time wrt number of samples in the interval Depends now",
          "hierarchy": "FRP Netwire Analyze",
          "module": "FRP.Netwire.Analyze",
          "name": "lAvg",
          "normalized": "a-\u003eWire b c d e e",
          "package": "netwire",
          "partial": "Avg",
          "signature": "t-\u003eWire s e m a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/FRP-Netwire-Analyze.html#v:lAvg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce a linearly interpolated graph for the given points in time,\n where the magnitudes of the points are distances from \u003cem\u003enow\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eLinear interpolation can be slow.  If you don't need it, you can use\n the faster staircase variant \u003ccode\u003e\u003ca\u003esGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample: \u003ccode\u003elGraph [0, 1, 2]\u003c/code\u003e will output the interpolated inputs at\n \u003cem\u003enow\u003c/em\u003e, one second before now and two seconds before now.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Complexity: O(s) space, O(n * log s) time, where s = number of\n   samples in the interval, n = number of requested data points.\n\u003c/li\u003e\u003cli\u003e Depends: now.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "FRP.Netwire.Analyze",
          "name": "lGraph",
          "package": "netwire",
          "signature": "[t]-\u003e Wire s e m a [a]",
          "type": "function"
        },
        "index": {
          "description": "Produce linearly interpolated graph for the given points in time where the magnitudes of the points are distances from now Linear interpolation can be slow If you don need it you can use the faster staircase variant sGraph Example lGraph will output the interpolated inputs at now one second before now and two seconds before now Complexity space log time where number of samples in the interval number of requested data points Depends now",
          "hierarchy": "FRP Netwire Analyze",
          "module": "FRP.Netwire.Analyze",
          "name": "lGraph",
          "normalized": "[a]-\u003eWire b c d e[e]",
          "package": "netwire",
          "partial": "Graph",
          "signature": "[t]-\u003eWire s e m a[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/FRP-Netwire-Analyze.html#v:lGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGraph the given interval from now with the given number of evenly\n distributed points in time.  Convenience interface to \u003ccode\u003e\u003ca\u003elGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eLinear interpolation can be slow.  If you don't need it, you can use\n the faster staircase variant \u003ccode\u003e\u003ca\u003esGraphN\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Complexity: O(s) space, O(n * log s) time, where s = number of\n   samples in the interval, n = number of requested data points.\n\u003c/li\u003e\u003cli\u003e Depends: now.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "FRP.Netwire.Analyze",
          "name": "lGraphN",
          "package": "netwire",
          "signature": "t-\u003e Int-\u003e Wire s e m a [a]",
          "type": "function"
        },
        "index": {
          "description": "Graph the given interval from now with the given number of evenly distributed points in time Convenience interface to lGraph Linear interpolation can be slow If you don need it you can use the faster staircase variant sGraphN Complexity space log time where number of samples in the interval number of requested data points Depends now",
          "hierarchy": "FRP Netwire Analyze",
          "module": "FRP.Netwire.Analyze",
          "name": "lGraphN",
          "normalized": "a-\u003eInt-\u003eWire b c d e[e]",
          "package": "netwire",
          "partial": "Graph",
          "signature": "t-\u003eInt-\u003eWire s e m a[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/FRP-Netwire-Analyze.html#v:lGraphN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLow peak.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Depends: now.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "FRP.Netwire.Analyze",
          "name": "lowPeak",
          "package": "netwire",
          "signature": "Wire s e m a a",
          "source": "src/FRP-Netwire-Analyze.html#lowPeak",
          "type": "function"
        },
        "index": {
          "description": "Low peak Depends now",
          "hierarchy": "FRP Netwire Analyze",
          "module": "FRP.Netwire.Analyze",
          "name": "lowPeak",
          "package": "netwire",
          "partial": "Peak",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/FRP-Netwire-Analyze.html#v:lowPeak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLow peak with respect to the given comparison function.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Depends: now.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "FRP.Netwire.Analyze",
          "name": "lowPeakBy",
          "package": "netwire",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e Wire s e m a a",
          "source": "src/FRP-Netwire-Analyze.html#lowPeakBy",
          "type": "function"
        },
        "index": {
          "description": "Low peak with respect to the given comparison function Depends now",
          "hierarchy": "FRP Netwire Analyze",
          "module": "FRP.Netwire.Analyze",
          "name": "lowPeakBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003eWire b c d a a",
          "package": "netwire",
          "partial": "Peak By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003eWire s e m a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/FRP-Netwire-Analyze.html#v:lowPeakBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate the average of the signal over the given interval (from\n now).  This is done by calculating the integral of the corresponding\n staircase graph and dividing it by the interval length.  See\n \u003ccode\u003e\u003ca\u003escAvg\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003elAvg\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample: \u003ccode\u003esAvg 2\u003c/code\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Complexity: O(s) space, O(s) time wrt number of samples in the\n   interval.\n\u003c/li\u003e\u003cli\u003e Depends: now.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "FRP.Netwire.Analyze",
          "name": "sAvg",
          "package": "netwire",
          "signature": "t-\u003e Wire s e m a a",
          "type": "function"
        },
        "index": {
          "description": "Calculate the average of the signal over the given interval from now This is done by calculating the integral of the corresponding staircase graph and dividing it by the interval length See scAvg for details See also lAvg Example sAvg Complexity space time wrt number of samples in the interval Depends now",
          "hierarchy": "FRP Netwire Analyze",
          "module": "FRP.Netwire.Analyze",
          "name": "sAvg",
          "normalized": "a-\u003eWire b c d e e",
          "package": "netwire",
          "partial": "Avg",
          "signature": "t-\u003eWire s e m a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/FRP-Netwire-Analyze.html#v:sAvg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce a staircase graph for the given points in time, where the\n magnitudes of the points are distances from \u003cem\u003enow\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003elGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample: \u003ccode\u003esGraph [0, 1, 2]\u003c/code\u003e will output the inputs at \u003cem\u003enow\u003c/em\u003e, one\n second before now and two seconds before now.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Complexity: O(s) space, O(n * log s) time, where s = number of\n   samples in the interval, n = number of requested data points.\n\u003c/li\u003e\u003cli\u003e Depends: now.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "FRP.Netwire.Analyze",
          "name": "sGraph",
          "package": "netwire",
          "signature": "[t]-\u003e Wire s e m a [a]",
          "type": "function"
        },
        "index": {
          "description": "Produce staircase graph for the given points in time where the magnitudes of the points are distances from now See also lGraph Example sGraph will output the inputs at now one second before now and two seconds before now Complexity space log time where number of samples in the interval number of requested data points Depends now",
          "hierarchy": "FRP Netwire Analyze",
          "module": "FRP.Netwire.Analyze",
          "name": "sGraph",
          "normalized": "[a]-\u003eWire b c d e[e]",
          "package": "netwire",
          "partial": "Graph",
          "signature": "[t]-\u003eWire s e m a[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/FRP-Netwire-Analyze.html#v:sGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGraph the given interval from now with the given number of evenly\n distributed points in time.  Convenience interface to \u003ccode\u003e\u003ca\u003esGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003elGraphN\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Complexity: O(s) space, O(n * log s) time, where s = number of\n   samples in the interval, n = number of requested data points.\n\u003c/li\u003e\u003cli\u003e Depends: now.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "FRP.Netwire.Analyze",
          "name": "sGraphN",
          "package": "netwire",
          "signature": "t-\u003e Int-\u003e Wire s e m a [a]",
          "type": "function"
        },
        "index": {
          "description": "Graph the given interval from now with the given number of evenly distributed points in time Convenience interface to sGraph See also lGraphN Complexity space log time where number of samples in the interval number of requested data points Depends now",
          "hierarchy": "FRP Netwire Analyze",
          "module": "FRP.Netwire.Analyze",
          "name": "sGraphN",
          "normalized": "a-\u003eInt-\u003eWire b c d e[e]",
          "package": "netwire",
          "partial": "Graph",
          "signature": "t-\u003eInt-\u003eWire s e m a[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/FRP-Netwire-Analyze.html#v:sGraphN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Netwire.Move",
          "name": "Move",
          "package": "netwire",
          "source": "src/FRP-Netwire-Move.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "FRP Netwire Move",
          "module": "FRP.Netwire.Move",
          "name": "Move",
          "package": "netwire",
          "partial": "Move",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/FRP-Netwire-Move.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTime derivative of the input signal.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Depends: now.\n\u003c/li\u003e\u003cli\u003e Inhibits: at singularities.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "FRP.Netwire.Move",
          "name": "derivative",
          "package": "netwire",
          "signature": "Wire s e m a a",
          "source": "src/FRP-Netwire-Move.html#derivative",
          "type": "function"
        },
        "index": {
          "description": "Time derivative of the input signal Depends now Inhibits at singularities",
          "hierarchy": "FRP Netwire Move",
          "module": "FRP.Netwire.Move",
          "name": "derivative",
          "package": "netwire",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/FRP-Netwire-Move.html#v:derivative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntegrate the input signal over time.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Depends: before now.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "FRP.Netwire.Move",
          "name": "integral",
          "package": "netwire",
          "signature": "a-\u003e Wire s e m a a",
          "type": "function"
        },
        "index": {
          "description": "Integrate the input signal over time Depends before now",
          "hierarchy": "FRP Netwire Move",
          "module": "FRP.Netwire.Move",
          "name": "integral",
          "normalized": "a-\u003eWire b c d a a",
          "package": "netwire",
          "signature": "a-\u003eWire s e m a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/FRP-Netwire-Move.html#v:integral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntegrate the left input signal over time, but apply the given\n correction function to it.  This can be used to implement collision\n detection/reaction.\n\u003c/p\u003e\u003cp\u003eThe right signal of type \u003ccode\u003ew\u003c/code\u003e is the \u003cem\u003eworld value\u003c/em\u003e.  It is just passed\n to the correction function for reference and is not used otherwise.\n\u003c/p\u003e\u003cp\u003eThe correction function must be idempotent with respect to the world\n value: \u003ccode\u003ef w (f w x) = f w x\u003c/code\u003e.  This is necessary and sufficient to\n protect time continuity.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Depends: before now.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "FRP.Netwire.Move",
          "name": "integralWith",
          "package": "netwire",
          "signature": "(w -\u003e a -\u003e a)-\u003e a-\u003e Wire s e m (a, w) a",
          "type": "function"
        },
        "index": {
          "description": "Integrate the left input signal over time but apply the given correction function to it This can be used to implement collision detection reaction The right signal of type is the world value It is just passed to the correction function for reference and is not used otherwise The correction function must be idempotent with respect to the world value This is necessary and sufficient to protect time continuity Depends before now",
          "hierarchy": "FRP Netwire Move",
          "module": "FRP.Netwire.Move",
          "name": "integralWith",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eWire c d e(b,a)b",
          "package": "netwire",
          "partial": "With",
          "signature": "(w-\u003ea-\u003ea)-\u003ea-\u003eWire s e m(a,w)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/FRP-Netwire-Move.html#v:integralWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Netwire.Noise",
          "name": "Noise",
          "package": "netwire",
          "source": "src/FRP-Netwire-Noise.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "FRP Netwire Noise",
          "module": "FRP.Netwire.Noise",
          "name": "Noise",
          "package": "netwire",
          "partial": "Noise",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/FRP-Netwire-Noise.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNoise events with the given distance between events.  Use \u003ccode\u003e\u003ca\u003ehold\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003eholdFor\u003c/a\u003e\u003c/code\u003e to generate a staircase.\n\u003c/p\u003e",
          "module": "FRP.Netwire.Noise",
          "name": "noise",
          "package": "netwire",
          "signature": "t-\u003e g-\u003e Wire s e m a (Event b)",
          "type": "function"
        },
        "index": {
          "description": "Noise events with the given distance between events Use hold or holdFor to generate staircase",
          "hierarchy": "FRP Netwire Noise",
          "module": "FRP.Netwire.Noise",
          "name": "noise",
          "normalized": "a-\u003eb-\u003eWire c d e f(Event g)",
          "package": "netwire",
          "signature": "t-\u003eg-\u003eWire s e m a(Event b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/FRP-Netwire-Noise.html#v:noise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNoise events with the given distance between events.  Noise will be\n in the given range.  Use \u003ccode\u003e\u003ca\u003ehold\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eholdFor\u003c/a\u003e\u003c/code\u003e to generate a staircase.\n\u003c/p\u003e",
          "module": "FRP.Netwire.Noise",
          "name": "noiseR",
          "package": "netwire",
          "signature": "t-\u003e (b, b)-\u003e g-\u003e Wire s e m a (Event b)",
          "type": "function"
        },
        "index": {
          "description": "Noise events with the given distance between events Noise will be in the given range Use hold or holdFor to generate staircase",
          "hierarchy": "FRP Netwire Noise",
          "module": "FRP.Netwire.Noise",
          "name": "noiseR",
          "normalized": "a-\u003e(b,b)-\u003ec-\u003eWire d e f g(Event b)",
          "package": "netwire",
          "signature": "t-\u003e(b,b)-\u003eg-\u003eWire s e m a(Event b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/FRP-Netwire-Noise.html#v:noiseR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience interface to \u003ccode\u003e\u003ca\u003enoise\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003eStdGen\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "FRP.Netwire.Noise",
          "name": "stdNoise",
          "package": "netwire",
          "signature": "t-\u003e Int-\u003e Wire s e m a (Event b)",
          "type": "function"
        },
        "index": {
          "description": "Convenience interface to noise for StdGen",
          "hierarchy": "FRP Netwire Noise",
          "module": "FRP.Netwire.Noise",
          "name": "stdNoise",
          "normalized": "a-\u003eInt-\u003eWire b c d e(Event f)",
          "package": "netwire",
          "partial": "Noise",
          "signature": "t-\u003eInt-\u003eWire s e m a(Event b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/FRP-Netwire-Noise.html#v:stdNoise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience interface to \u003ccode\u003e\u003ca\u003enoiseR\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003eStdGen\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "FRP.Netwire.Noise",
          "name": "stdNoiseR",
          "package": "netwire",
          "signature": "t-\u003e (b, b)-\u003e Int-\u003e Wire s e m a (Event b)",
          "type": "function"
        },
        "index": {
          "description": "Convenience interface to noiseR for StdGen",
          "hierarchy": "FRP Netwire Noise",
          "module": "FRP.Netwire.Noise",
          "name": "stdNoiseR",
          "normalized": "a-\u003e(b,b)-\u003eInt-\u003eWire c d e f(Event b)",
          "package": "netwire",
          "partial": "Noise",
          "signature": "t-\u003e(b,b)-\u003eInt-\u003eWire s e m a(Event b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/FRP-Netwire-Noise.html#v:stdNoiseR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience interface to \u003ccode\u003e\u003ca\u003ewackelkontakt\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003eStdGen\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "FRP.Netwire.Noise",
          "name": "stdWackelkontakt",
          "package": "netwire",
          "signature": "t-\u003e Double-\u003e Int-\u003e Wire s e m a a",
          "type": "function"
        },
        "index": {
          "description": "Convenience interface to wackelkontakt for StdGen",
          "hierarchy": "FRP Netwire Noise",
          "module": "FRP.Netwire.Noise",
          "name": "stdWackelkontakt",
          "normalized": "a-\u003eDouble-\u003eInt-\u003eWire b c d e e",
          "package": "netwire",
          "partial": "Wackelkontakt",
          "signature": "t-\u003eDouble-\u003eInt-\u003eWire s e m a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/FRP-Netwire-Noise.html#v:stdWackelkontakt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRandomly produce or inhibit with the given probability, each time\n for the given duration.\n\u003c/p\u003e\u003cp\u003eThe name \u003cem\u003eWackelkontakt\u003c/em\u003e (German for \u003cem\u003eslack joint\u003c/em\u003e) is a Netwire\n running gag.  It makes sure that you revisit the documentation from\n time to time. =)\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Depends: now.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "FRP.Netwire.Noise",
          "name": "wackelkontakt",
          "package": "netwire",
          "signature": "t-\u003e Double-\u003e g-\u003e Wire s e m a a",
          "type": "function"
        },
        "index": {
          "description": "Randomly produce or inhibit with the given probability each time for the given duration The name Wackelkontakt German for slack joint is Netwire running gag It makes sure that you revisit the documentation from time to time Depends now",
          "hierarchy": "FRP Netwire Noise",
          "module": "FRP.Netwire.Noise",
          "name": "wackelkontakt",
          "normalized": "a-\u003eDouble-\u003eb-\u003eWire c d e f f",
          "package": "netwire",
          "signature": "t-\u003eDouble-\u003eg-\u003eWire s e m a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/FRP-Netwire-Noise.html#v:wackelkontakt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Netwire.Utils.Timeline",
          "name": "Timeline",
          "package": "netwire",
          "source": "src/FRP-Netwire-Utils-Timeline.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "FRP Netwire Utils Timeline",
          "module": "FRP.Netwire.Utils.Timeline",
          "name": "Timeline",
          "package": "netwire",
          "partial": "Timeline",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/FRP-Netwire-Utils-Timeline.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA time line is a non-empty set of samples together with time\n information.\n\u003c/p\u003e",
          "module": "FRP.Netwire.Utils.Timeline",
          "name": "Timeline",
          "package": "netwire",
          "source": "src/FRP-Netwire-Utils-Timeline.html#Timeline",
          "type": "data"
        },
        "index": {
          "description": "time line is non-empty set of samples together with time information",
          "hierarchy": "FRP Netwire Utils Timeline",
          "module": "FRP.Netwire.Utils.Timeline",
          "name": "Timeline",
          "package": "netwire",
          "partial": "Timeline",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/FRP-Netwire-Utils-Timeline.html#t:Timeline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert the given data point.\n\u003c/p\u003e",
          "module": "FRP.Netwire.Utils.Timeline",
          "name": "insert",
          "package": "netwire",
          "signature": "t -\u003e a -\u003e Timeline t a -\u003e Timeline t a",
          "source": "src/FRP-Netwire-Utils-Timeline.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Insert the given data point",
          "hierarchy": "FRP Netwire Utils Timeline",
          "module": "FRP.Netwire.Utils.Timeline",
          "name": "insert",
          "normalized": "a-\u003eb-\u003eTimeline a b-\u003eTimeline a b",
          "package": "netwire",
          "signature": "t-\u003ea-\u003eTimeline t a-\u003eTimeline t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/FRP-Netwire-Utils-Timeline.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLinearly interpolate the points in the time line, integrate the\n given time interval of the graph, divide by the interval length.\n\u003c/p\u003e",
          "module": "FRP.Netwire.Utils.Timeline",
          "name": "linAvg",
          "package": "netwire",
          "signature": "t -\u003e t -\u003e Timeline t a -\u003e a",
          "source": "src/FRP-Netwire-Utils-Timeline.html#linAvg",
          "type": "function"
        },
        "index": {
          "description": "Linearly interpolate the points in the time line integrate the given time interval of the graph divide by the interval length",
          "hierarchy": "FRP Netwire Utils Timeline",
          "module": "FRP.Netwire.Utils.Timeline",
          "name": "linAvg",
          "normalized": "a-\u003ea-\u003eTimeline a b-\u003eb",
          "package": "netwire",
          "partial": "Avg",
          "signature": "t-\u003et-\u003eTimeline t a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/FRP-Netwire-Utils-Timeline.html#v:linAvg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCut the timeline at the given point in time \u003ccode\u003et\u003c/code\u003e, such that all\n samples up to but not including \u003ccode\u003et\u003c/code\u003e are forgotten.  The most recent\n sample before \u003ccode\u003et\u003c/code\u003e is moved and interpolated accordingly.\n\u003c/p\u003e",
          "module": "FRP.Netwire.Utils.Timeline",
          "name": "linCutL",
          "package": "netwire",
          "signature": "t -\u003e Timeline t a -\u003e Timeline t a",
          "source": "src/FRP-Netwire-Utils-Timeline.html#linCutL",
          "type": "function"
        },
        "index": {
          "description": "Cut the timeline at the given point in time such that all samples up to but not including are forgotten The most recent sample before is moved and interpolated accordingly",
          "hierarchy": "FRP Netwire Utils Timeline",
          "module": "FRP.Netwire.Utils.Timeline",
          "name": "linCutL",
          "normalized": "a-\u003eTimeline a b-\u003eTimeline a b",
          "package": "netwire",
          "partial": "Cut",
          "signature": "t-\u003eTimeline t a-\u003eTimeline t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/FRP-Netwire-Utils-Timeline.html#v:linCutL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCut the timeline at the given point in time \u003ccode\u003et\u003c/code\u003e, such that all\n samples later than \u003ccode\u003et\u003c/code\u003e are forgotten.  The most recent sample after\n \u003ccode\u003et\u003c/code\u003e is moved and interpolated accordingly.\n\u003c/p\u003e",
          "module": "FRP.Netwire.Utils.Timeline",
          "name": "linCutR",
          "package": "netwire",
          "signature": "t -\u003e Timeline t a -\u003e Timeline t a",
          "source": "src/FRP-Netwire-Utils-Timeline.html#linCutR",
          "type": "function"
        },
        "index": {
          "description": "Cut the timeline at the given point in time such that all samples later than are forgotten The most recent sample after is moved and interpolated accordingly",
          "hierarchy": "FRP Netwire Utils Timeline",
          "module": "FRP.Netwire.Utils.Timeline",
          "name": "linCutR",
          "normalized": "a-\u003eTimeline a b-\u003eTimeline a b",
          "package": "netwire",
          "partial": "Cut",
          "signature": "t-\u003eTimeline t a-\u003eTimeline t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/FRP-Netwire-Utils-Timeline.html#v:linCutR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook up with linear sampling.\n\u003c/p\u003e",
          "module": "FRP.Netwire.Utils.Timeline",
          "name": "linLookup",
          "package": "netwire",
          "signature": "t -\u003e Timeline t a -\u003e a",
          "source": "src/FRP-Netwire-Utils-Timeline.html#linLookup",
          "type": "function"
        },
        "index": {
          "description": "Look up with linear sampling",
          "hierarchy": "FRP Netwire Utils Timeline",
          "module": "FRP.Netwire.Utils.Timeline",
          "name": "linLookup",
          "normalized": "a-\u003eTimeline a b-\u003eb",
          "package": "netwire",
          "partial": "Lookup",
          "signature": "t-\u003eTimeline t a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/FRP-Netwire-Utils-Timeline.html#v:linLookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntegrate the given time interval of the staircase, divide by the\n interval length.\n\u003c/p\u003e",
          "module": "FRP.Netwire.Utils.Timeline",
          "name": "scAvg",
          "package": "netwire",
          "signature": "t -\u003e t -\u003e Timeline t a -\u003e a",
          "source": "src/FRP-Netwire-Utils-Timeline.html#scAvg",
          "type": "function"
        },
        "index": {
          "description": "Integrate the given time interval of the staircase divide by the interval length",
          "hierarchy": "FRP Netwire Utils Timeline",
          "module": "FRP.Netwire.Utils.Timeline",
          "name": "scAvg",
          "normalized": "a-\u003ea-\u003eTimeline a b-\u003eb",
          "package": "netwire",
          "partial": "Avg",
          "signature": "t-\u003et-\u003eTimeline t a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/FRP-Netwire-Utils-Timeline.html#v:scAvg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCut the timeline at the given point in time \u003ccode\u003et\u003c/code\u003e, such that all\n samples up to but not including \u003ccode\u003et\u003c/code\u003e are forgotten.  The most recent\n sample before \u003ccode\u003et\u003c/code\u003e is moved accordingly.\n\u003c/p\u003e",
          "module": "FRP.Netwire.Utils.Timeline",
          "name": "scCutL",
          "package": "netwire",
          "signature": "t -\u003e Timeline t a -\u003e Timeline t a",
          "source": "src/FRP-Netwire-Utils-Timeline.html#scCutL",
          "type": "function"
        },
        "index": {
          "description": "Cut the timeline at the given point in time such that all samples up to but not including are forgotten The most recent sample before is moved accordingly",
          "hierarchy": "FRP Netwire Utils Timeline",
          "module": "FRP.Netwire.Utils.Timeline",
          "name": "scCutL",
          "normalized": "a-\u003eTimeline a b-\u003eTimeline a b",
          "package": "netwire",
          "partial": "Cut",
          "signature": "t-\u003eTimeline t a-\u003eTimeline t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/FRP-Netwire-Utils-Timeline.html#v:scCutL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCut the timeline at the given point in time \u003ccode\u003et\u003c/code\u003e, such that all\n samples later than \u003ccode\u003et\u003c/code\u003e are forgotten.  The earliest sample after \u003ccode\u003et\u003c/code\u003e\n is moved accordingly.\n\u003c/p\u003e",
          "module": "FRP.Netwire.Utils.Timeline",
          "name": "scCutR",
          "package": "netwire",
          "signature": "t -\u003e Timeline t a -\u003e Timeline t a",
          "source": "src/FRP-Netwire-Utils-Timeline.html#scCutR",
          "type": "function"
        },
        "index": {
          "description": "Cut the timeline at the given point in time such that all samples later than are forgotten The earliest sample after is moved accordingly",
          "hierarchy": "FRP Netwire Utils Timeline",
          "module": "FRP.Netwire.Utils.Timeline",
          "name": "scCutR",
          "normalized": "a-\u003eTimeline a b-\u003eTimeline a b",
          "package": "netwire",
          "partial": "Cut",
          "signature": "t-\u003eTimeline t a-\u003eTimeline t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/FRP-Netwire-Utils-Timeline.html#v:scCutR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook up on staircase.\n\u003c/p\u003e",
          "module": "FRP.Netwire.Utils.Timeline",
          "name": "scLookup",
          "package": "netwire",
          "signature": "t -\u003e Timeline t a -\u003e a",
          "source": "src/FRP-Netwire-Utils-Timeline.html#scLookup",
          "type": "function"
        },
        "index": {
          "description": "Look up on staircase",
          "hierarchy": "FRP Netwire Utils Timeline",
          "module": "FRP.Netwire.Utils.Timeline",
          "name": "scLookup",
          "normalized": "a-\u003eTimeline a b-\u003eb",
          "package": "netwire",
          "partial": "Lookup",
          "signature": "t-\u003eTimeline t a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/FRP-Netwire-Utils-Timeline.html#v:scLookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSingleton timeline with the given point.\n\u003c/p\u003e",
          "module": "FRP.Netwire.Utils.Timeline",
          "name": "singleton",
          "package": "netwire",
          "signature": "t -\u003e a -\u003e Timeline t a",
          "source": "src/FRP-Netwire-Utils-Timeline.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Singleton timeline with the given point",
          "hierarchy": "FRP Netwire Utils Timeline",
          "module": "FRP.Netwire.Utils.Timeline",
          "name": "singleton",
          "normalized": "a-\u003eb-\u003eTimeline a b",
          "package": "netwire",
          "signature": "t-\u003ea-\u003eTimeline t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/FRP-Netwire-Utils-Timeline.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnion of two time lines.  Right-biased.\n\u003c/p\u003e",
          "module": "FRP.Netwire.Utils.Timeline",
          "name": "union",
          "package": "netwire",
          "signature": "Timeline t a -\u003e Timeline t a -\u003e Timeline t a",
          "source": "src/FRP-Netwire-Utils-Timeline.html#union",
          "type": "function"
        },
        "index": {
          "description": "Union of two time lines Right-biased",
          "hierarchy": "FRP Netwire Utils Timeline",
          "module": "FRP.Netwire.Utils.Timeline",
          "name": "union",
          "normalized": "Timeline a b-\u003eTimeline a b-\u003eTimeline a b",
          "package": "netwire",
          "signature": "Timeline t a-\u003eTimeline t a-\u003eTimeline t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/FRP-Netwire-Utils-Timeline.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Netwire",
          "name": "Netwire",
          "package": "netwire",
          "source": "src/FRP-Netwire.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "FRP Netwire",
          "module": "FRP.Netwire",
          "name": "Netwire",
          "package": "netwire",
          "partial": "Netwire",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/FRP-Netwire.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple wires with time.\n\u003c/p\u003e",
          "module": "FRP.Netwire",
          "name": "SimpleWire",
          "package": "netwire",
          "source": "src/Control-Wire.html#SimpleWire",
          "type": "type"
        },
        "index": {
          "description": "Simple wires with time",
          "hierarchy": "FRP Netwire",
          "module": "FRP.Netwire",
          "name": "SimpleWire",
          "package": "netwire",
          "partial": "Simple Wire",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/FRP-Netwire.html#t:SimpleWire"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wire is a signal function.  It maps a reactive value to another\n reactive value.\n\u003c/p\u003e",
          "module": "FRP.Netwire",
          "name": "Wire",
          "package": "netwire",
          "source": "src/Control-Wire-Core.html#Wire",
          "type": "data"
        },
        "index": {
          "description": "wire is signal function It maps reactive value to another reactive value",
          "hierarchy": "FRP Netwire",
          "module": "FRP.Netwire",
          "name": "Wire",
          "package": "netwire",
          "partial": "Wire",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/FRP-Netwire.html#t:Wire"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePure wires.\n\u003c/p\u003e",
          "module": "FRP.Netwire",
          "name": "WireP",
          "package": "netwire",
          "source": "src/Control-Wire.html#WireP",
          "type": "type"
        },
        "index": {
          "description": "Pure wires",
          "hierarchy": "FRP Netwire",
          "module": "FRP.Netwire",
          "name": "WireP",
          "package": "netwire",
          "partial": "Wire",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/netwire/docs/FRP-Netwire.html#t:WireP"
      }
    }
  ]
]