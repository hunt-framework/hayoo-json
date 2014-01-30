[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Catana/docs/Control-Monad-Catana.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003eComputation type:\u003c/dt\u003e\u003cdd\u003e Computations that both consume and produce elements lazily with support for advanced control flow using continuations, recursion, and parallel and serial composition.\n\u003c/dd\u003e\u003cdt\u003eBinding Strategy:\u003c/dt\u003e\u003cdd\u003e Binding a function to a monadic value produces a continuation which is represented as a \u003ccode\u003eStep\u003c/code\u003e that either \u003ccode\u003eWait\u003c/code\u003es for input or \u003ccode\u003eYield\u003c/code\u003es a value, and returns the next \u003ccode\u003eStep\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003eUseful for:\u003c/dt\u003e\u003cdd\u003e Lazily processing a list with complex control structures.\n\u003c/dd\u003e\u003cdt\u003eZero and plus:\u003c/dt\u003e\u003cdd\u003e mzero consumes all input with producing any output, mplus combines output of two Catana's in parallel\n\u003c/dd\u003e\u003cdt\u003eExample type:\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eCatana\u003c/a\u003e\u003c/code\u003e i o b a\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThe Catana monad represents computations that are both catamorphisms and anamorphisms; they both consume and produce values.  In addition, the Catana monad represents the computation in continuation-passing style, and implements callCC.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Catana",
        "fct-package": "Catana",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Catana.html",
        "fct-type": "module",
        "title": "Catana"
      },
      "index": {
        "description": "Computation type Computations that both consume and produce elements lazily with support for advanced control flow using continuations recursion and parallel and serial composition Binding Strategy Binding function to monadic value produces continuation which is represented as Step that either Wait for input or Yield value and returns the next Step Useful for Lazily processing list with complex control structures Zero and plus mzero consumes all input with producing any output mplus combines output of two Catana in parallel Example type Catana The Catana monad represents computations that are both catamorphisms and anamorphisms they both consume and produce values In addition the Catana monad represents the computation in continuation-passing style and implements callCC",
        "hierarchy": "Control Monad Catana",
        "module": "Control.Monad.Catana",
        "name": "Catana",
        "normalized": "",
        "package": "Catana",
        "partial": "Catana",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Catana/docs/Control-Monad-Catana.html#t:Catana",
      "description": {
        "fct-module": "Control.Monad.Catana",
        "fct-package": "Catana",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Catana.html#Catana",
        "fct-type": "data",
        "title": "Catana"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Catana",
        "module": "Control.Monad.Catana",
        "name": "Catana",
        "normalized": "",
        "package": "Catana",
        "partial": "Catana",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Catana/docs/Control-Monad-Catana.html#v:Catana",
      "description": {
        "fct-module": "Control.Monad.Catana",
        "fct-package": "Catana",
        "fct-signature": "Catana",
        "fct-source": "src/Control-Monad-Catana.html#Catana",
        "fct-type": "function",
        "title": "Catana"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Catana",
        "module": "Control.Monad.Catana",
        "name": "Catana",
        "normalized": "",
        "package": "Catana",
        "partial": "Catana",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Catana/docs/Control-Monad-Catana.html#v:consume",
      "description": {
        "fct-descr": "\u003cp\u003eConsumes an element from the input list, returning it\n If there is no more input, the chain of continuations ends\n immediately; no more computations will be processed\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Catana",
        "fct-package": "Catana",
        "fct-signature": "Catana i o a i",
        "fct-source": "src/Control-Monad-Catana.html#consume",
        "fct-type": "function",
        "title": "consume"
      },
      "index": {
        "description": "Consumes an element from the input list returning it If there is no more input the chain of continuations ends immediately no more computations will be processed",
        "hierarchy": "Control Monad Catana",
        "module": "Control.Monad.Catana",
        "name": "consume",
        "normalized": "",
        "package": "Catana",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Catana/docs/Control-Monad-Catana.html#v:execCatana",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a Catana monad into a function over lists\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Catana",
        "fct-package": "Catana",
        "fct-signature": "Catana i o a a -\u003e [i] -\u003e [o]",
        "fct-source": "src/Control-Monad-Catana.html#execCatana",
        "fct-type": "function",
        "title": "execCatana"
      },
      "index": {
        "description": "Converts Catana monad into function over lists",
        "hierarchy": "Control Monad Catana",
        "module": "Control.Monad.Catana",
        "name": "execCatana",
        "normalized": "Catana a b c c-\u003e[a]-\u003e[b]",
        "package": "Catana",
        "partial": "Catana",
        "signature": "Catana i o a a-\u003e[i]-\u003e[o]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Catana/docs/Control-Monad-Catana.html#v:parallelB",
      "description": {
        "fct-descr": "\u003cp\u003eCombine two monads to run in parallel, consuming the same input\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Catana",
        "fct-package": "Catana",
        "fct-signature": "Catana i o a a -\u003e Catana i o b b -\u003e Catana i o c (a, b)",
        "fct-source": "src/Control-Monad-Catana.html#parallelB",
        "fct-type": "function",
        "title": "parallelB"
      },
      "index": {
        "description": "Combine two monads to run in parallel consuming the same input",
        "hierarchy": "Control Monad Catana",
        "module": "Control.Monad.Catana",
        "name": "parallelB",
        "normalized": "Catana a b c c-\u003eCatana a b d d-\u003eCatana a b e(c,d)",
        "package": "Catana",
        "partial": "",
        "signature": "Catana i o a a-\u003eCatana i o b b-\u003eCatana i o c(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Catana/docs/Control-Monad-Catana.html#v:parallelE",
      "description": {
        "fct-descr": "\u003cp\u003eCombine two monads to run in parallel, consuming the same input, stopping when either of them finish.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Catana",
        "fct-package": "Catana",
        "fct-signature": "Catana i o a a -\u003e Catana i o b b -\u003e Catana i o c (Either a b)",
        "fct-source": "src/Control-Monad-Catana.html#parallelE",
        "fct-type": "function",
        "title": "parallelE"
      },
      "index": {
        "description": "Combine two monads to run in parallel consuming the same input stopping when either of them finish",
        "hierarchy": "Control Monad Catana",
        "module": "Control.Monad.Catana",
        "name": "parallelE",
        "normalized": "Catana a b c c-\u003eCatana a b d d-\u003eCatana a b e(Either c d)",
        "package": "Catana",
        "partial": "",
        "signature": "Catana i o a a-\u003eCatana i o b b-\u003eCatana i o c(Either a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Catana/docs/Control-Monad-Catana.html#v:produce",
      "description": {
        "fct-descr": "\u003cp\u003eProduces \u003ccode\u003ex\u003c/code\u003e in the output\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Catana",
        "fct-package": "Catana",
        "fct-signature": "o -\u003e Catana i o a ()",
        "fct-source": "src/Control-Monad-Catana.html#produce",
        "fct-type": "function",
        "title": "produce"
      },
      "index": {
        "description": "Produces in the output",
        "hierarchy": "Control Monad Catana",
        "module": "Control.Monad.Catana",
        "name": "produce",
        "normalized": "a-\u003eCatana b a c()",
        "package": "Catana",
        "partial": "",
        "signature": "o-\u003eCatana i o a()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Catana/docs/Control-Monad-Catana.html#v:push",
      "description": {
        "fct-descr": "\u003cp\u003ePushes \u003ccode\u003ex\u003c/code\u003e into the input\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Catana",
        "fct-package": "Catana",
        "fct-signature": "i -\u003e Catana i o a ()",
        "fct-source": "src/Control-Monad-Catana.html#push",
        "fct-type": "function",
        "title": "push"
      },
      "index": {
        "description": "Pushes into the input",
        "hierarchy": "Control Monad Catana",
        "module": "Control.Monad.Catana",
        "name": "push",
        "normalized": "a-\u003eCatana a b c()",
        "package": "Catana",
        "partial": "",
        "signature": "i-\u003eCatana i o a()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Catana/docs/Control-Monad-Catana.html#v:runCatana",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluates a Catana monad over a list returning the result and output\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Catana",
        "fct-package": "Catana",
        "fct-signature": "Catana i o a a -\u003e [i] -\u003e (Maybe a, [o])",
        "fct-source": "src/Control-Monad-Catana.html#runCatana",
        "fct-type": "function",
        "title": "runCatana"
      },
      "index": {
        "description": "Evaluates Catana monad over list returning the result and output",
        "hierarchy": "Control Monad Catana",
        "module": "Control.Monad.Catana",
        "name": "runCatana",
        "normalized": "Catana a b c c-\u003e[a]-\u003e(Maybe c,[b])",
        "package": "Catana",
        "partial": "Catana",
        "signature": "Catana i o a a-\u003e[i]-\u003e(Maybe a,[o])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Catana/docs/Control-Monad-Catana.html#v:serial",
      "description": {
        "fct-descr": "\u003cp\u003eCombine two monads to run in serial, the first consuming the output of the second\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Catana",
        "fct-package": "Catana",
        "fct-signature": "Catana io o a a -\u003e Catana i io b b -\u003e Catana i o c (Either a b)",
        "fct-source": "src/Control-Monad-Catana.html#serial",
        "fct-type": "function",
        "title": "serial"
      },
      "index": {
        "description": "Combine two monads to run in serial the first consuming the output of the second",
        "hierarchy": "Control Monad Catana",
        "module": "Control.Monad.Catana",
        "name": "serial",
        "normalized": "Catana a b c c-\u003eCatana d a e e-\u003eCatana d b f(Either c e)",
        "package": "Catana",
        "partial": "",
        "signature": "Catana io o a a-\u003eCatana i io b b-\u003eCatana i o c(Either a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Catana/docs/Control-Monad-Catana.html#v:step",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Catana",
        "fct-package": "Catana",
        "fct-signature": "(a -\u003e Step i o b) -\u003e Step i o b",
        "fct-source": "src/Control-Monad-Catana.html#Catana",
        "fct-type": "function",
        "title": "step"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Catana",
        "module": "Control.Monad.Catana",
        "name": "step",
        "normalized": "(a-\u003eStep b c d)-\u003eStep b c d",
        "package": "Catana",
        "partial": "",
        "signature": "(a-\u003eStep i o b)-\u003eStep i o b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Catana/docs/Control-Monad-Catana.html#v:stop",
      "description": {
        "fct-descr": "\u003cp\u003eStops computation, ending the continuation chain\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Catana",
        "fct-package": "Catana",
        "fct-signature": "b -\u003e Catana i o b a",
        "fct-source": "src/Control-Monad-Catana.html#stop",
        "fct-type": "function",
        "title": "stop"
      },
      "index": {
        "description": "Stops computation ending the continuation chain",
        "hierarchy": "Control Monad Catana",
        "module": "Control.Monad.Catana",
        "name": "stop",
        "normalized": "a-\u003eCatana b c a d",
        "package": "Catana",
        "partial": "",
        "signature": "b-\u003eCatana i o b a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Catana/docs/Control-Monad-Catana.html#v:top",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the next input without consuming it\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Catana",
        "fct-package": "Catana",
        "fct-signature": "Catana i o a i",
        "fct-source": "src/Control-Monad-Catana.html#top",
        "fct-type": "function",
        "title": "top"
      },
      "index": {
        "description": "Returns the next input without consuming it",
        "hierarchy": "Control Monad Catana",
        "module": "Control.Monad.Catana",
        "name": "top",
        "normalized": "",
        "package": "Catana",
        "partial": "",
        "signature": ""
      }
    }
  }
]