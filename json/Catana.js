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
        "word": "Catana"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003eComputation type:\u003c/dt\u003e\u003cdd\u003e Computations that both consume and produce elements lazily with support for advanced control flow using continuations, recursion, and parallel and serial composition.\n\u003c/dd\u003e\u003cdt\u003eBinding Strategy:\u003c/dt\u003e\u003cdd\u003e Binding a function to a monadic value produces a continuation which is represented as a \u003ccode\u003eStep\u003c/code\u003e that either \u003ccode\u003eWait\u003c/code\u003es for input or \u003ccode\u003eYield\u003c/code\u003es a value, and returns the next \u003ccode\u003eStep\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003eUseful for:\u003c/dt\u003e\u003cdd\u003e Lazily processing a list with complex control structures.\n\u003c/dd\u003e\u003cdt\u003eZero and plus:\u003c/dt\u003e\u003cdd\u003e mzero consumes all input with producing any output, mplus combines output of two Catana's in parallel\n\u003c/dd\u003e\u003cdt\u003eExample type:\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eCatana\u003c/a\u003e\u003c/code\u003e i o b a\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe Catana monad represents computations that are both catamorphisms and anamorphisms; they both consume and produce values.  In addition, the Catana monad represents the computation in continuation-passing style, and implements callCC.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Catana",
          "name": "Catana",
          "package": "Catana",
          "source": "src/Control-Monad-Catana.html",
          "type": "module"
        },
        "index": {
          "description": "Computation type Computations that both consume and produce elements lazily with support for advanced control flow using continuations recursion and parallel and serial composition Binding Strategy Binding function to monadic value produces continuation which is represented as Step that either Wait for input or Yield value and returns the next Step Useful for Lazily processing list with complex control structures Zero and plus mzero consumes all input with producing any output mplus combines output of two Catana in parallel Example type Catana The Catana monad represents computations that are both catamorphisms and anamorphisms they both consume and produce values In addition the Catana monad represents the computation in continuation-passing style and implements callCC",
          "hierarchy": "Control Monad Catana",
          "module": "Control.Monad.Catana",
          "name": "Catana",
          "package": "Catana",
          "partial": "Catana",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Catana/docs/Control-Monad-Catana.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Catana",
          "name": "Catana",
          "package": "Catana",
          "source": "src/Control-Monad-Catana.html#Catana",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Monad Catana",
          "module": "Control.Monad.Catana",
          "name": "Catana",
          "package": "Catana",
          "partial": "Catana",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Catana/docs/Control-Monad-Catana.html#t:Catana"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Catana",
          "name": "Catana",
          "package": "Catana",
          "signature": "Catana",
          "source": "src/Control-Monad-Catana.html#Catana",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Catana",
          "module": "Control.Monad.Catana",
          "name": "Catana",
          "package": "Catana",
          "partial": "Catana",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Catana/docs/Control-Monad-Catana.html#v:Catana"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsumes an element from the input list, returning it\n If there is no more input, the chain of continuations ends\n immediately; no more computations will be processed\n\u003c/p\u003e",
          "module": "Control.Monad.Catana",
          "name": "consume",
          "package": "Catana",
          "signature": "Catana i o a i",
          "source": "src/Control-Monad-Catana.html#consume",
          "type": "function"
        },
        "index": {
          "description": "Consumes an element from the input list returning it If there is no more input the chain of continuations ends immediately no more computations will be processed",
          "hierarchy": "Control Monad Catana",
          "module": "Control.Monad.Catana",
          "name": "consume",
          "package": "Catana",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Catana/docs/Control-Monad-Catana.html#v:consume"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a Catana monad into a function over lists\n\u003c/p\u003e",
          "module": "Control.Monad.Catana",
          "name": "execCatana",
          "package": "Catana",
          "signature": "Catana i o a a -\u003e [i] -\u003e [o]",
          "source": "src/Control-Monad-Catana.html#execCatana",
          "type": "function"
        },
        "index": {
          "description": "Converts Catana monad into function over lists",
          "hierarchy": "Control Monad Catana",
          "module": "Control.Monad.Catana",
          "name": "execCatana",
          "normalized": "Catana a b c c-\u003e[a]-\u003e[b]",
          "package": "Catana",
          "partial": "Catana",
          "signature": "Catana i o a a-\u003e[i]-\u003e[o]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Catana/docs/Control-Monad-Catana.html#v:execCatana"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine two monads to run in parallel, consuming the same input\n\u003c/p\u003e",
          "module": "Control.Monad.Catana",
          "name": "parallelB",
          "package": "Catana",
          "signature": "Catana i o a a -\u003e Catana i o b b -\u003e Catana i o c (a, b)",
          "source": "src/Control-Monad-Catana.html#parallelB",
          "type": "function"
        },
        "index": {
          "description": "Combine two monads to run in parallel consuming the same input",
          "hierarchy": "Control Monad Catana",
          "module": "Control.Monad.Catana",
          "name": "parallelB",
          "normalized": "Catana a b c c-\u003eCatana a b d d-\u003eCatana a b e(c,d)",
          "package": "Catana",
          "signature": "Catana i o a a-\u003eCatana i o b b-\u003eCatana i o c(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Catana/docs/Control-Monad-Catana.html#v:parallelB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine two monads to run in parallel, consuming the same input, stopping when either of them finish.\n\u003c/p\u003e",
          "module": "Control.Monad.Catana",
          "name": "parallelE",
          "package": "Catana",
          "signature": "Catana i o a a -\u003e Catana i o b b -\u003e Catana i o c (Either a b)",
          "source": "src/Control-Monad-Catana.html#parallelE",
          "type": "function"
        },
        "index": {
          "description": "Combine two monads to run in parallel consuming the same input stopping when either of them finish",
          "hierarchy": "Control Monad Catana",
          "module": "Control.Monad.Catana",
          "name": "parallelE",
          "normalized": "Catana a b c c-\u003eCatana a b d d-\u003eCatana a b e(Either c d)",
          "package": "Catana",
          "signature": "Catana i o a a-\u003eCatana i o b b-\u003eCatana i o c(Either a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Catana/docs/Control-Monad-Catana.html#v:parallelE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduces \u003ccode\u003ex\u003c/code\u003e in the output\n\u003c/p\u003e",
          "module": "Control.Monad.Catana",
          "name": "produce",
          "package": "Catana",
          "signature": "o -\u003e Catana i o a ()",
          "source": "src/Control-Monad-Catana.html#produce",
          "type": "function"
        },
        "index": {
          "description": "Produces in the output",
          "hierarchy": "Control Monad Catana",
          "module": "Control.Monad.Catana",
          "name": "produce",
          "normalized": "a-\u003eCatana b a c()",
          "package": "Catana",
          "signature": "o-\u003eCatana i o a()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Catana/docs/Control-Monad-Catana.html#v:produce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePushes \u003ccode\u003ex\u003c/code\u003e into the input\n\u003c/p\u003e",
          "module": "Control.Monad.Catana",
          "name": "push",
          "package": "Catana",
          "signature": "i -\u003e Catana i o a ()",
          "source": "src/Control-Monad-Catana.html#push",
          "type": "function"
        },
        "index": {
          "description": "Pushes into the input",
          "hierarchy": "Control Monad Catana",
          "module": "Control.Monad.Catana",
          "name": "push",
          "normalized": "a-\u003eCatana a b c()",
          "package": "Catana",
          "signature": "i-\u003eCatana i o a()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Catana/docs/Control-Monad-Catana.html#v:push"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluates a Catana monad over a list returning the result and output\n\u003c/p\u003e",
          "module": "Control.Monad.Catana",
          "name": "runCatana",
          "package": "Catana",
          "signature": "Catana i o a a -\u003e [i] -\u003e (Maybe a, [o])",
          "source": "src/Control-Monad-Catana.html#runCatana",
          "type": "function"
        },
        "index": {
          "description": "Evaluates Catana monad over list returning the result and output",
          "hierarchy": "Control Monad Catana",
          "module": "Control.Monad.Catana",
          "name": "runCatana",
          "normalized": "Catana a b c c-\u003e[a]-\u003e(Maybe c,[b])",
          "package": "Catana",
          "partial": "Catana",
          "signature": "Catana i o a a-\u003e[i]-\u003e(Maybe a,[o])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Catana/docs/Control-Monad-Catana.html#v:runCatana"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine two monads to run in serial, the first consuming the output of the second\n\u003c/p\u003e",
          "module": "Control.Monad.Catana",
          "name": "serial",
          "package": "Catana",
          "signature": "Catana io o a a -\u003e Catana i io b b -\u003e Catana i o c (Either a b)",
          "source": "src/Control-Monad-Catana.html#serial",
          "type": "function"
        },
        "index": {
          "description": "Combine two monads to run in serial the first consuming the output of the second",
          "hierarchy": "Control Monad Catana",
          "module": "Control.Monad.Catana",
          "name": "serial",
          "normalized": "Catana a b c c-\u003eCatana d a e e-\u003eCatana d b f(Either c e)",
          "package": "Catana",
          "signature": "Catana io o a a-\u003eCatana i io b b-\u003eCatana i o c(Either a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Catana/docs/Control-Monad-Catana.html#v:serial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Catana",
          "name": "step",
          "package": "Catana",
          "signature": "(a -\u003e Step i o b) -\u003e Step i o b",
          "source": "src/Control-Monad-Catana.html#Catana",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Catana",
          "module": "Control.Monad.Catana",
          "name": "step",
          "normalized": "(a-\u003eStep b c d)-\u003eStep b c d",
          "package": "Catana",
          "signature": "(a-\u003eStep i o b)-\u003eStep i o b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Catana/docs/Control-Monad-Catana.html#v:step"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStops computation, ending the continuation chain\n\u003c/p\u003e",
          "module": "Control.Monad.Catana",
          "name": "stop",
          "package": "Catana",
          "signature": "b -\u003e Catana i o b a",
          "source": "src/Control-Monad-Catana.html#stop",
          "type": "function"
        },
        "index": {
          "description": "Stops computation ending the continuation chain",
          "hierarchy": "Control Monad Catana",
          "module": "Control.Monad.Catana",
          "name": "stop",
          "normalized": "a-\u003eCatana b c a d",
          "package": "Catana",
          "signature": "b-\u003eCatana i o b a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Catana/docs/Control-Monad-Catana.html#v:stop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the next input without consuming it\n\u003c/p\u003e",
          "module": "Control.Monad.Catana",
          "name": "top",
          "package": "Catana",
          "signature": "Catana i o a i",
          "source": "src/Control-Monad-Catana.html#top",
          "type": "function"
        },
        "index": {
          "description": "Returns the next input without consuming it",
          "hierarchy": "Control Monad Catana",
          "module": "Control.Monad.Catana",
          "name": "top",
          "package": "Catana",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Catana/docs/Control-Monad-Catana.html#v:top"
      }
    }
  ]
]