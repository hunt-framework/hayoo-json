[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-monad/docs/Control-Monad-Stream.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis Haskell library provides an implementation of the MonadPlus\n type class that enumerates results of a non-deterministic\n computation by interleaving subcomputations in a way that has\n usually much better memory performance than other strategies with\n the same termination properties.\n\u003c/p\u003e\u003cp\u003eBy using supensions in strategic positions, the user can ensure\n that the search does not diverge if there are remaining\n non-deterministic results.\n\u003c/p\u003e\u003cp\u003eMore information is available on the authors website:\n \u003ca\u003ehttp://okmij.org/ftp/Computation/monads.html#fair-bt-stream\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eWarning: \u003ccode\u003eStream\u003c/code\u003e is only a monad when the results of \u003ccode\u003erunStream\u003c/code\u003e\n are interpreted as a multiset, i.e., a valid transformation\n according to the monad laws may change the order of the results.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Stream",
        "fct-package": "stream-monad",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Stream.html",
        "fct-type": "module",
        "title": "Stream"
      },
      "index": {
        "description": "This Haskell library provides an implementation of the MonadPlus type class that enumerates results of non-deterministic computation by interleaving subcomputations in way that has usually much better memory performance than other strategies with the same termination properties By using supensions in strategic positions the user can ensure that the search does not diverge if there are remaining non-deterministic results More information is available on the authors website http okmij.org ftp Computation monads.html fair-bt-stream Warning Stream is only monad when the results of runStream are interpreted as multiset i.e valid transformation according to the monad laws may change the order of the results",
        "hierarchy": "Control Monad Stream",
        "module": "Control.Monad.Stream",
        "name": "Stream",
        "normalized": "",
        "package": "stream-monad",
        "partial": "Stream",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-monad/docs/Control-Monad-Stream.html#t:Stream",
      "description": {
        "fct-descr": "\u003cp\u003eResults of non-deterministic computations of type \u003ccode\u003eStream a\u003c/code\u003e can be\n enumerated efficiently.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Stream",
        "fct-package": "stream-monad",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Stream.html#Stream",
        "fct-type": "data",
        "title": "Stream"
      },
      "index": {
        "description": "Results of non-deterministic computations of type Stream can be enumerated efficiently",
        "hierarchy": "Control Monad Stream",
        "module": "Control.Monad.Stream",
        "name": "Stream",
        "normalized": "",
        "package": "stream-monad",
        "partial": "Stream",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-monad/docs/Control-Monad-Stream.html#v:runStream",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: use toList\u003c/p\u003e\u003c/div\u003e\u003cp\u003eThe function \u003ccode\u003erunStream\u003c/code\u003e enumerates the results of a\n non-deterministic computation.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Stream",
        "fct-package": "stream-monad",
        "fct-signature": "Stream a -\u003e [a]",
        "fct-source": "src/Control-Monad-Stream.html#runStream",
        "fct-type": "function",
        "title": "runStream"
      },
      "index": {
        "description": "Deprecated use toList The function runStream enumerates the results of non-deterministic computation",
        "hierarchy": "Control Monad Stream",
        "module": "Control.Monad.Stream",
        "name": "runStream",
        "normalized": "Stream a-\u003e[a]",
        "package": "stream-monad",
        "partial": "Stream",
        "signature": "Stream a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-monad/docs/Control-Monad-Stream.html#v:suspended",
      "description": {
        "fct-descr": "\u003cp\u003eSuspensions can be used to ensure fairness.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Stream",
        "fct-package": "stream-monad",
        "fct-signature": "Stream a -\u003e Stream a",
        "fct-source": "src/Control-Monad-Stream.html#suspended",
        "fct-type": "function",
        "title": "suspended"
      },
      "index": {
        "description": "Suspensions can be used to ensure fairness",
        "hierarchy": "Control Monad Stream",
        "module": "Control.Monad.Stream",
        "name": "suspended",
        "normalized": "Stream a-\u003eStream a",
        "package": "stream-monad",
        "partial": "",
        "signature": "Stream a-\u003eStream a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stream-monad/docs/Control-Monad-Stream.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003eList of elements of a structure.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Stream",
        "fct-package": "stream-monad",
        "fct-signature": "t a -\u003e [a]",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "List of elements of structure",
        "hierarchy": "Control Monad Stream",
        "module": "Control.Monad.Stream",
        "name": "toList",
        "normalized": "a b-\u003e[b]",
        "package": "stream-monad",
        "partial": "List",
        "signature": "t a-\u003e[a]"
      }
    }
  }
]