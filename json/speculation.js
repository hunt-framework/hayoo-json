[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Class.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVersions of the combinators from the \u003ccode\u003especulation\u003c/code\u003e package\n with the signature rearranged to enable them to be used\n directly as actions in the \u003ccode\u003e\u003ca\u003eCont\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eContT\u003c/a\u003e\u003c/code\u003e monads\n or any other \u003ccode\u003eCodensity\u003c/code\u003e-shaped monad.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.Speculation.Class",
        "fct-package": "speculation",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-Speculation-Class.html",
        "fct-type": "module",
        "title": "Class"
      },
      "index": {
        "description": "Versions of the combinators from the speculation package with the signature rearranged to enable them to be used directly as actions in the Cont and ContT monads or any other Codensity shaped monad",
        "hierarchy": "Control Concurrent Speculation Class",
        "module": "Control.Concurrent.Speculation.Class",
        "name": "Class",
        "normalized": "",
        "package": "speculation",
        "partial": "Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Class.html#t:MonadSpec",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Class",
        "fct-package": "speculation",
        "fct-signature": "class",
        "fct-source": "src/Control-Concurrent-Speculation-Class.html#MonadSpec",
        "fct-type": "class",
        "title": "MonadSpec"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Class",
        "module": "Control.Concurrent.Speculation.Class",
        "name": "MonadSpec",
        "normalized": "",
        "package": "speculation",
        "partial": "Monad Spec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Class.html#v:specByM",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003espec\u003c/code\u003e with a user supplied comparison function\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Speculation.Class",
        "fct-package": "speculation",
        "fct-signature": "(a -\u003e a -\u003e Bool) -\u003e a -\u003e a -\u003e m a",
        "fct-source": "src/Control-Concurrent-Speculation-Class.html#specByM",
        "fct-type": "method",
        "title": "specByM"
      },
      "index": {
        "description": "spec with user supplied comparison function",
        "hierarchy": "Control Concurrent Speculation Class",
        "module": "Control.Concurrent.Speculation.Class",
        "name": "specByM",
        "normalized": "(a-\u003ea-\u003eBool)-\u003ea-\u003ea-\u003eb a",
        "package": "speculation",
        "partial": "By",
        "signature": "(a-\u003ea-\u003eBool)-\u003ea-\u003ea-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Class.html#v:specM",
      "description": {
        "fct-descr": "\u003cp\u003eWhen a is unevaluated, \u003ccode\u003e\u003ccode\u003e\u003ca\u003espec\u003c/a\u003e\u003c/code\u003e g a\u003c/code\u003e evaluates the current continuation \n with \u003ccode\u003eg\u003c/code\u003e while testing if \u003ccode\u003eg\u003c/code\u003e \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ea\u003c/code\u003e, if they differ, it re-evalutes the\n continuation with \u003ccode\u003ea\u003c/code\u003e. If \u003ccode\u003ea\u003c/code\u003e was already evaluated, the continuation is\n just directly applied to \u003ccode\u003ea\u003c/code\u003e instead.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Speculation.Class",
        "fct-package": "speculation",
        "fct-signature": "a -\u003e a -\u003e m a",
        "fct-source": "src/Control-Concurrent-Speculation-Class.html#specM",
        "fct-type": "function",
        "title": "specM"
      },
      "index": {
        "description": "When is unevaluated spec evaluates the current continuation with while testing if if they differ it re-evalutes the continuation with If was already evaluated the continuation is just directly applied to instead",
        "hierarchy": "Control Concurrent Speculation Class",
        "module": "Control.Concurrent.Speculation.Class",
        "name": "specM",
        "normalized": "a-\u003ea-\u003eb a",
        "package": "speculation",
        "partial": "",
        "signature": "a-\u003ea-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Class.html#v:specOnM",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003espec'\u003c/code\u003e with a user supplied comparison function\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Speculation.Class",
        "fct-package": "speculation",
        "fct-signature": "(a -\u003e c) -\u003e a -\u003e a -\u003e m a",
        "fct-source": "src/Control-Concurrent-Speculation-Class.html#specOnM",
        "fct-type": "function",
        "title": "specOnM"
      },
      "index": {
        "description": "spec with user supplied comparison function",
        "hierarchy": "Control Concurrent Speculation Class",
        "module": "Control.Concurrent.Speculation.Class",
        "name": "specOnM",
        "normalized": "(a-\u003eb)-\u003ea-\u003ea-\u003ec a",
        "package": "speculation",
        "partial": "On",
        "signature": "(a-\u003ec)-\u003ea-\u003ea-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html",
        "fct-type": "module",
        "title": "Foldable"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "Foldable",
        "normalized": "",
        "package": "speculation",
        "partial": "Foldable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:all",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "(Int -\u003e Bool) -\u003e (a -\u003e Bool) -\u003e t a -\u003e Bool",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#all",
        "fct-type": "function",
        "title": "all"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "all",
        "normalized": "(Int-\u003eBool)-\u003e(a-\u003eBool)-\u003eb a-\u003eBool",
        "package": "speculation",
        "partial": "",
        "signature": "(Int-\u003eBool)-\u003e(a-\u003eBool)-\u003et a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:and",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "(Int -\u003e Bool) -\u003e t Bool -\u003e Bool",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#and",
        "fct-type": "function",
        "title": "and"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "and",
        "normalized": "(Int-\u003eBool)-\u003ea Bool-\u003eBool",
        "package": "speculation",
        "partial": "",
        "signature": "(Int-\u003eBool)-\u003et Bool-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:any",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "(Int -\u003e Bool) -\u003e (a -\u003e Bool) -\u003e t a -\u003e Bool",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#any",
        "fct-type": "function",
        "title": "any"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "any",
        "normalized": "(Int-\u003eBool)-\u003e(a-\u003eBool)-\u003eb a-\u003eBool",
        "package": "speculation",
        "partial": "",
        "signature": "(Int-\u003eBool)-\u003e(a-\u003eBool)-\u003et a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:asum",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "(Int -\u003e f a) -\u003e t (f a) -\u003e f a",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#asum",
        "fct-type": "function",
        "title": "asum"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "asum",
        "normalized": "(Int-\u003ea b)-\u003ec(a b)-\u003ea b",
        "package": "speculation",
        "partial": "",
        "signature": "(Int-\u003ef a)-\u003et(f a)-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:asumBy",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "(f a -\u003e f a -\u003e Bool) -\u003e (Int -\u003e f a) -\u003e t (f a) -\u003e f a",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#asumBy",
        "fct-type": "function",
        "title": "asumBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "asumBy",
        "normalized": "(a b-\u003ea b-\u003eBool)-\u003e(Int-\u003ea b)-\u003ec(a b)-\u003ea b",
        "package": "speculation",
        "partial": "By",
        "signature": "(f a-\u003ef a-\u003eBool)-\u003e(Int-\u003ef a)-\u003et(f a)-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:concat",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "(Int -\u003e [a]) -\u003e t [a] -\u003e [a]",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#concat",
        "fct-type": "function",
        "title": "concat"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "concat",
        "normalized": "(Int-\u003e[a])-\u003eb[a]-\u003e[a]",
        "package": "speculation",
        "partial": "",
        "signature": "(Int-\u003e[a])-\u003et[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:concatBy",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "([a] -\u003e [a] -\u003e Bool) -\u003e (Int -\u003e [a]) -\u003e t [a] -\u003e [a]",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#concatBy",
        "fct-type": "function",
        "title": "concatBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "concatBy",
        "normalized": "([a]-\u003e[a]-\u003eBool)-\u003e(Int-\u003e[a])-\u003eb[a]-\u003e[a]",
        "package": "speculation",
        "partial": "By",
        "signature": "([a]-\u003e[a]-\u003eBool)-\u003e(Int-\u003e[a])-\u003et[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:concatMap",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "(Int -\u003e [b]) -\u003e (a -\u003e [b]) -\u003e t a -\u003e [b]",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#concatMap",
        "fct-type": "function",
        "title": "concatMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "concatMap",
        "normalized": "(Int-\u003e[a])-\u003e(b-\u003e[a])-\u003ec b-\u003e[a]",
        "package": "speculation",
        "partial": "Map",
        "signature": "(Int-\u003e[b])-\u003e(a-\u003e[b])-\u003et a-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:concatMapBy",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "([b] -\u003e [b] -\u003e Bool) -\u003e (Int -\u003e [b]) -\u003e (a -\u003e [b]) -\u003e t a -\u003e [b]",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#concatMapBy",
        "fct-type": "function",
        "title": "concatMapBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "concatMapBy",
        "normalized": "([a]-\u003e[a]-\u003eBool)-\u003e(Int-\u003e[a])-\u003e(b-\u003e[a])-\u003ec b-\u003e[a]",
        "package": "speculation",
        "partial": "Map By",
        "signature": "([b]-\u003e[b]-\u003eBool)-\u003e(Int-\u003e[b])-\u003e(a-\u003e[b])-\u003et a-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:elem",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "(Int -\u003e Bool) -\u003e a -\u003e t a -\u003e Bool",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#elem",
        "fct-type": "function",
        "title": "elem"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "elem",
        "normalized": "(Int-\u003eBool)-\u003ea-\u003eb a-\u003eBool",
        "package": "speculation",
        "partial": "",
        "signature": "(Int-\u003eBool)-\u003ea-\u003et a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:elemBy",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "(a -\u003e a -\u003e Bool) -\u003e (Int -\u003e Bool) -\u003e a -\u003e t a -\u003e Bool",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#elemBy",
        "fct-type": "function",
        "title": "elemBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "elemBy",
        "normalized": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003eBool)-\u003ea-\u003eb a-\u003eBool",
        "package": "speculation",
        "partial": "By",
        "signature": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003eBool)-\u003ea-\u003et a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:find",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "(Int -\u003e Maybe a) -\u003e (a -\u003e Bool) -\u003e t a -\u003e Maybe a",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#find",
        "fct-type": "function",
        "title": "find"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "find",
        "normalized": "(Int-\u003eMaybe a)-\u003e(a-\u003eBool)-\u003eb a-\u003eMaybe a",
        "package": "speculation",
        "partial": "",
        "signature": "(Int-\u003eMaybe a)-\u003e(a-\u003eBool)-\u003et a-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:findBy",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "(Maybe a -\u003e Maybe a -\u003e Bool) -\u003e (Int -\u003e Maybe a) -\u003e (a -\u003e Bool) -\u003e t a -\u003e Maybe a",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#findBy",
        "fct-type": "function",
        "title": "findBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "findBy",
        "normalized": "(Maybe a-\u003eMaybe a-\u003eBool)-\u003e(Int-\u003eMaybe a)-\u003e(a-\u003eBool)-\u003eb a-\u003eMaybe a",
        "package": "speculation",
        "partial": "By",
        "signature": "(Maybe a-\u003eMaybe a-\u003eBool)-\u003e(Int-\u003eMaybe a)-\u003e(a-\u003eBool)-\u003et a-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:fold",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a valid estimator \u003ccode\u003eg\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e g f xs\u003c/code\u003e yields the same answer as \u003ccode\u003e\u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e f xs\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eg n\u003c/code\u003e should supply an estimate of the value of the monoidal summation over the last \u003ccode\u003en\u003c/code\u003e elements of the container.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003eg n\u003c/code\u003e is accurate a reasonable percentage of the time and faster to compute than the fold, then this can\n provide increased opportunities for parallelism.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "(Int -\u003e m) -\u003e f m -\u003e m",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#fold",
        "fct-type": "function",
        "title": "fold"
      },
      "index": {
        "description": "Given valid estimator fold xs yields the same answer as fold xs should supply an estimate of the value of the monoidal summation over the last elements of the container If is accurate reasonable percentage of the time and faster to compute than the fold then this can provide increased opportunities for parallelism",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "fold",
        "normalized": "(Int-\u003ea)-\u003eb a-\u003ea",
        "package": "speculation",
        "partial": "",
        "signature": "(Int-\u003em)-\u003ef m-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:foldBy",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003especBy\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "(m -\u003e m -\u003e Bool) -\u003e (Int -\u003e m) -\u003e f m -\u003e m",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#foldBy",
        "fct-type": "function",
        "title": "foldBy"
      },
      "index": {
        "description": "fold using specBy",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "foldBy",
        "normalized": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003eb a-\u003ea",
        "package": "speculation",
        "partial": "By",
        "signature": "(m-\u003em-\u003eBool)-\u003e(Int-\u003em)-\u003ef m-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:foldMap",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a valid estimator \u003ccode\u003eg\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003efoldMap\u003c/a\u003e\u003c/code\u003e g f xs\u003c/code\u003e yields the same answer as \u003ccode\u003e\u003ccode\u003e\u003ca\u003efoldMap\u003c/a\u003e\u003c/code\u003e f xs\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eg n\u003c/code\u003e should supply an estimate of the value of the monoidal summation over the last \u003ccode\u003en\u003c/code\u003e elements of the container.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003eg n\u003c/code\u003e is accurate a reasonable percentage of the time and faster to compute than the fold, then this can\n provide increased opportunities for parallelism.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "(Int -\u003e m) -\u003e (a -\u003e m) -\u003e f a -\u003e m",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#foldMap",
        "fct-type": "function",
        "title": "foldMap"
      },
      "index": {
        "description": "Given valid estimator foldMap xs yields the same answer as foldMap xs should supply an estimate of the value of the monoidal summation over the last elements of the container If is accurate reasonable percentage of the time and faster to compute than the fold then this can provide increased opportunities for parallelism",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "foldMap",
        "normalized": "(Int-\u003ea)-\u003e(b-\u003ea)-\u003ec b-\u003ea",
        "package": "speculation",
        "partial": "Map",
        "signature": "(Int-\u003em)-\u003e(a-\u003em)-\u003ef a-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:foldMapBy",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldMap\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003especBy\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "(m -\u003e m -\u003e Bool) -\u003e (Int -\u003e m) -\u003e (a -\u003e m) -\u003e f a -\u003e m",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#foldMapBy",
        "fct-type": "function",
        "title": "foldMapBy"
      },
      "index": {
        "description": "foldMap using specBy",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "foldMapBy",
        "normalized": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003e(b-\u003ea)-\u003ec b-\u003ea",
        "package": "speculation",
        "partial": "Map By",
        "signature": "(m-\u003em-\u003eBool)-\u003e(Int-\u003em)-\u003e(a-\u003em)-\u003ef a-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:foldl",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a valid estimator \u003ccode\u003eg\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e g f z xs\u003c/code\u003e yields the same answer as \u003ccode\u003e\u003ccode\u003efoldl'\u003c/code\u003e f z xs\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eg n\u003c/code\u003e should supply an estimate of the value returned from folding over the first \u003ccode\u003en\u003c/code\u003e elements of the container.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003eg n\u003c/code\u003e is accurate a reasonable percentage of the time and faster to compute than the fold, then this can\n provide increased opportunities for parallelism.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "(Int -\u003e b) -\u003e (b -\u003e a -\u003e b) -\u003e b -\u003e f a -\u003e b",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#foldl",
        "fct-type": "function",
        "title": "foldl"
      },
      "index": {
        "description": "Given valid estimator foldl xs yields the same answer as foldl xs should supply an estimate of the value returned from folding over the first elements of the container If is accurate reasonable percentage of the time and faster to compute than the fold then this can provide increased opportunities for parallelism",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "foldl",
        "normalized": "(Int-\u003ea)-\u003e(a-\u003eb-\u003ea)-\u003ea-\u003ec b-\u003ea",
        "package": "speculation",
        "partial": "",
        "signature": "(Int-\u003eb)-\u003e(b-\u003ea-\u003eb)-\u003eb-\u003ef a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:foldl1",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "(Int -\u003e a) -\u003e (a -\u003e a -\u003e a) -\u003e f a -\u003e a",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#foldl1",
        "fct-type": "function",
        "title": "foldl1"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "foldl1",
        "normalized": "(Int-\u003ea)-\u003e(a-\u003ea-\u003ea)-\u003eb a-\u003ea",
        "package": "speculation",
        "partial": "",
        "signature": "(Int-\u003ea)-\u003e(a-\u003ea-\u003ea)-\u003ef a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:foldl1By",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "(a -\u003e a -\u003e Bool) -\u003e (Int -\u003e a) -\u003e (a -\u003e a -\u003e a) -\u003e f a -\u003e a",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#foldl1By",
        "fct-type": "function",
        "title": "foldl1By"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "foldl1By",
        "normalized": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003e(a-\u003ea-\u003ea)-\u003eb a-\u003ea",
        "package": "speculation",
        "partial": "By",
        "signature": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003e(a-\u003ea-\u003ea)-\u003ef a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:foldlBy",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "(b -\u003e b -\u003e Bool) -\u003e (Int -\u003e b) -\u003e (b -\u003e a -\u003e b) -\u003e b -\u003e f a -\u003e b",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#foldlBy",
        "fct-type": "function",
        "title": "foldlBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "foldlBy",
        "normalized": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003e(a-\u003eb-\u003ea)-\u003ea-\u003ec b-\u003ea",
        "package": "speculation",
        "partial": "By",
        "signature": "(b-\u003eb-\u003eBool)-\u003e(Int-\u003eb)-\u003e(b-\u003ea-\u003eb)-\u003eb-\u003ef a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:foldlByM",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "(m b -\u003e m b -\u003e Bool) -\u003e (Int -\u003e m b) -\u003e (b -\u003e a -\u003e m b) -\u003e m b -\u003e f a -\u003e m b",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#foldlByM",
        "fct-type": "function",
        "title": "foldlByM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "foldlByM",
        "normalized": "(a b-\u003ea b-\u003eBool)-\u003e(Int-\u003ea b)-\u003e(b-\u003ec-\u003ea b)-\u003ea b-\u003ed c-\u003ea b",
        "package": "speculation",
        "partial": "By",
        "signature": "(m b-\u003em b-\u003eBool)-\u003e(Int-\u003em b)-\u003e(b-\u003ea-\u003em b)-\u003em b-\u003ef a-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:foldlBySTM",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "(a -\u003e a -\u003e STM Bool) -\u003e (Int -\u003e STM a) -\u003e (a -\u003e b -\u003e STM a) -\u003e STM a -\u003e f b -\u003e STM a",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#foldlBySTM",
        "fct-type": "function",
        "title": "foldlBySTM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "foldlBySTM",
        "normalized": "(a-\u003ea-\u003eSTM Bool)-\u003e(Int-\u003eSTM a)-\u003e(a-\u003eb-\u003eSTM a)-\u003eSTM a-\u003ec b-\u003eSTM a",
        "package": "speculation",
        "partial": "By STM",
        "signature": "(a-\u003ea-\u003eSTM Bool)-\u003e(Int-\u003eSTM a)-\u003e(a-\u003eb-\u003eSTM a)-\u003eSTM a-\u003ef b-\u003eSTM a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:foldlM",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "(Int -\u003e m b) -\u003e (b -\u003e a -\u003e m b) -\u003e m b -\u003e f a -\u003e m b",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#foldlM",
        "fct-type": "function",
        "title": "foldlM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "foldlM",
        "normalized": "(Int-\u003ea b)-\u003e(b-\u003ec-\u003ea b)-\u003ea b-\u003ed c-\u003ea b",
        "package": "speculation",
        "partial": "",
        "signature": "(Int-\u003em b)-\u003e(b-\u003ea-\u003em b)-\u003em b-\u003ef a-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:foldlSTM",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "(Int -\u003e STM a) -\u003e (a -\u003e b -\u003e STM a) -\u003e STM a -\u003e f b -\u003e STM a",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#foldlSTM",
        "fct-type": "function",
        "title": "foldlSTM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "foldlSTM",
        "normalized": "(Int-\u003eSTM a)-\u003e(a-\u003eb-\u003eSTM a)-\u003eSTM a-\u003ec b-\u003eSTM a",
        "package": "speculation",
        "partial": "STM",
        "signature": "(Int-\u003eSTM a)-\u003e(a-\u003eb-\u003eSTM a)-\u003eSTM a-\u003ef b-\u003eSTM a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:foldr",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "(Int -\u003e b) -\u003e (a -\u003e b -\u003e b) -\u003e b -\u003e f a -\u003e b",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#foldr",
        "fct-type": "function",
        "title": "foldr"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "foldr",
        "normalized": "(Int-\u003ea)-\u003e(b-\u003ea-\u003ea)-\u003ea-\u003ec b-\u003ea",
        "package": "speculation",
        "partial": "",
        "signature": "(Int-\u003eb)-\u003e(a-\u003eb-\u003eb)-\u003eb-\u003ef a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:foldr1",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "(Int -\u003e a) -\u003e (a -\u003e a -\u003e a) -\u003e f a -\u003e a",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#foldr1",
        "fct-type": "function",
        "title": "foldr1"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "foldr1",
        "normalized": "(Int-\u003ea)-\u003e(a-\u003ea-\u003ea)-\u003eb a-\u003ea",
        "package": "speculation",
        "partial": "",
        "signature": "(Int-\u003ea)-\u003e(a-\u003ea-\u003ea)-\u003ef a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:foldr1By",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "(a -\u003e a -\u003e Bool) -\u003e (Int -\u003e a) -\u003e (a -\u003e a -\u003e a) -\u003e f a -\u003e a",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#foldr1By",
        "fct-type": "function",
        "title": "foldr1By"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "foldr1By",
        "normalized": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003e(a-\u003ea-\u003ea)-\u003eb a-\u003ea",
        "package": "speculation",
        "partial": "By",
        "signature": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003e(a-\u003ea-\u003ea)-\u003ef a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:foldrBy",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a valid estimator \u003ccode\u003eg\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e g f z xs\u003c/code\u003e yields the same answer as \u003ccode\u003e\u003ccode\u003efoldr'\u003c/code\u003e f z xs\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eg n\u003c/code\u003e should supply an estimate of the value returned from folding over the last \u003ccode\u003en\u003c/code\u003e elements of the container.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003eg n\u003c/code\u003e is accurate a reasonable percentage of the time and faster to compute than the fold, then this can\n provide increased opportunities for parallelism.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "(b -\u003e b -\u003e Bool) -\u003e (Int -\u003e b) -\u003e (a -\u003e b -\u003e b) -\u003e b -\u003e f a -\u003e b",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#foldrBy",
        "fct-type": "function",
        "title": "foldrBy"
      },
      "index": {
        "description": "Given valid estimator foldr xs yields the same answer as foldr xs should supply an estimate of the value returned from folding over the last elements of the container If is accurate reasonable percentage of the time and faster to compute than the fold then this can provide increased opportunities for parallelism",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "foldrBy",
        "normalized": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003e(b-\u003ea-\u003ea)-\u003ea-\u003ec b-\u003ea",
        "package": "speculation",
        "partial": "By",
        "signature": "(b-\u003eb-\u003eBool)-\u003e(Int-\u003eb)-\u003e(a-\u003eb-\u003eb)-\u003eb-\u003ef a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:foldrByM",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "(m b -\u003e m b -\u003e Bool) -\u003e (Int -\u003e m b) -\u003e (a -\u003e b -\u003e m b) -\u003e m b -\u003e f a -\u003e m b",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#foldrByM",
        "fct-type": "function",
        "title": "foldrByM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "foldrByM",
        "normalized": "(a b-\u003ea b-\u003eBool)-\u003e(Int-\u003ea b)-\u003e(c-\u003eb-\u003ea b)-\u003ea b-\u003ed c-\u003ea b",
        "package": "speculation",
        "partial": "By",
        "signature": "(m b-\u003em b-\u003eBool)-\u003e(Int-\u003em b)-\u003e(a-\u003eb-\u003em b)-\u003em b-\u003ef a-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:foldrBySTM",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "(b -\u003e b -\u003e STM Bool) -\u003e (Int -\u003e STM b) -\u003e (a -\u003e b -\u003e STM b) -\u003e STM b -\u003e f a -\u003e STM b",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#foldrBySTM",
        "fct-type": "function",
        "title": "foldrBySTM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "foldrBySTM",
        "normalized": "(a-\u003ea-\u003eSTM Bool)-\u003e(Int-\u003eSTM a)-\u003e(b-\u003ea-\u003eSTM a)-\u003eSTM a-\u003ec b-\u003eSTM a",
        "package": "speculation",
        "partial": "By STM",
        "signature": "(b-\u003eb-\u003eSTM Bool)-\u003e(Int-\u003eSTM b)-\u003e(a-\u003eb-\u003eSTM b)-\u003eSTM b-\u003ef a-\u003eSTM b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:foldrM",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "(Int -\u003e m b) -\u003e (a -\u003e b -\u003e m b) -\u003e m b -\u003e f a -\u003e m b",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#foldrM",
        "fct-type": "function",
        "title": "foldrM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "foldrM",
        "normalized": "(Int-\u003ea b)-\u003e(c-\u003eb-\u003ea b)-\u003ea b-\u003ed c-\u003ea b",
        "package": "speculation",
        "partial": "",
        "signature": "(Int-\u003em b)-\u003e(a-\u003eb-\u003em b)-\u003em b-\u003ef a-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:foldrSTM",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "(Int -\u003e STM b) -\u003e (a -\u003e b -\u003e STM b) -\u003e STM b -\u003e f a -\u003e STM b",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#foldrSTM",
        "fct-type": "function",
        "title": "foldrSTM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "foldrSTM",
        "normalized": "(Int-\u003eSTM a)-\u003e(b-\u003ea-\u003eSTM a)-\u003eSTM a-\u003ec b-\u003eSTM a",
        "package": "speculation",
        "partial": "STM",
        "signature": "(Int-\u003eSTM b)-\u003e(a-\u003eb-\u003eSTM b)-\u003eSTM b-\u003ef a-\u003eSTM b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:forByM_",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "(m () -\u003e m () -\u003e Bool) -\u003e (Int -\u003e m c) -\u003e t a -\u003e (a -\u003e m b) -\u003e m ()",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#forByM_",
        "fct-type": "function",
        "title": "forByM_"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "forByM_",
        "normalized": "(a()-\u003ea()-\u003eBool)-\u003e(Int-\u003ea b)-\u003ec d-\u003e(d-\u003ea e)-\u003ea()",
        "package": "speculation",
        "partial": "By",
        "signature": "(m()-\u003em()-\u003eBool)-\u003e(Int-\u003em c)-\u003et a-\u003e(a-\u003em b)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:forBy_",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "(f () -\u003e f () -\u003e Bool) -\u003e (Int -\u003e f c) -\u003e t a -\u003e (a -\u003e f b) -\u003e f ()",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#forBy_",
        "fct-type": "function",
        "title": "forBy_"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "forBy_",
        "normalized": "(a()-\u003ea()-\u003eBool)-\u003e(Int-\u003ea b)-\u003ec d-\u003e(d-\u003ea e)-\u003ea()",
        "package": "speculation",
        "partial": "By",
        "signature": "(f()-\u003ef()-\u003eBool)-\u003e(Int-\u003ef c)-\u003et a-\u003e(a-\u003ef b)-\u003ef()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:forM_",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efor_\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003emapM_\u003c/a\u003e\u003c/code\u003e with its arguments flipped.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "(Int -\u003e m c) -\u003e t a -\u003e (a -\u003e m b) -\u003e m ()",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#forM_",
        "fct-type": "function",
        "title": "forM_"
      },
      "index": {
        "description": "for is mapM with its arguments flipped",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "forM_",
        "normalized": "(Int-\u003ea b)-\u003ec d-\u003e(d-\u003ea e)-\u003ea()",
        "package": "speculation",
        "partial": "",
        "signature": "(Int-\u003em c)-\u003et a-\u003e(a-\u003em b)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:forSTM_",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efor_\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003emapM_\u003c/a\u003e\u003c/code\u003e with its arguments flipped.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "STM Bool -\u003e (Int -\u003e STM c) -\u003e t a -\u003e (a -\u003e STM b) -\u003e STM ()",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#forSTM_",
        "fct-type": "function",
        "title": "forSTM_"
      },
      "index": {
        "description": "for is mapM with its arguments flipped",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "forSTM_",
        "normalized": "STM Bool-\u003e(Int-\u003eSTM a)-\u003eb c-\u003e(c-\u003eSTM d)-\u003eSTM()",
        "package": "speculation",
        "partial": "STM",
        "signature": "STM Bool-\u003e(Int-\u003eSTM c)-\u003et a-\u003e(a-\u003eSTM b)-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:for_",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efor_\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003etraverse_\u003c/a\u003e\u003c/code\u003e with its arguments flipped.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "(Int -\u003e f c) -\u003e t a -\u003e (a -\u003e f b) -\u003e f ()",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#for_",
        "fct-type": "function",
        "title": "for_"
      },
      "index": {
        "description": "for is traverse with its arguments flipped",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "for_",
        "normalized": "(Int-\u003ea b)-\u003ec d-\u003e(d-\u003ea e)-\u003ea()",
        "package": "speculation",
        "partial": "",
        "signature": "(Int-\u003ef c)-\u003et a-\u003e(a-\u003ef b)-\u003ef()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:mapByM_",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "(m () -\u003e m () -\u003e Bool) -\u003e (Int -\u003e m c) -\u003e (a -\u003e m b) -\u003e t a -\u003e m ()",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#mapByM_",
        "fct-type": "function",
        "title": "mapByM_"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "mapByM_",
        "normalized": "(a()-\u003ea()-\u003eBool)-\u003e(Int-\u003ea b)-\u003e(c-\u003ea d)-\u003ee c-\u003ea()",
        "package": "speculation",
        "partial": "By",
        "signature": "(m()-\u003em()-\u003eBool)-\u003e(Int-\u003em c)-\u003e(a-\u003em b)-\u003et a-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:mapM_",
      "description": {
        "fct-descr": "\u003cp\u003eMap each element of the structure to a monadic action, evaluating these actions\n from left to right and ignoring the results.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "(Int -\u003e m c) -\u003e (a -\u003e m b) -\u003e t a -\u003e m ()",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#mapM_",
        "fct-type": "function",
        "title": "mapM_"
      },
      "index": {
        "description": "Map each element of the structure to monadic action evaluating these actions from left to right and ignoring the results",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "mapM_",
        "normalized": "(Int-\u003ea b)-\u003e(c-\u003ea d)-\u003ee c-\u003ea()",
        "package": "speculation",
        "partial": "",
        "signature": "(Int-\u003em c)-\u003e(a-\u003em b)-\u003et a-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:mapSTM_",
      "description": {
        "fct-descr": "\u003cp\u003eMap each element of the structure to a monadic action, evaluating these actions\n from left to right and ignoring the results, while transactional side-effects from \n mis-speculated actions are rolled back.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "STM Bool -\u003e (Int -\u003e STM c) -\u003e (a -\u003e STM b) -\u003e t a -\u003e STM ()",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#mapSTM_",
        "fct-type": "function",
        "title": "mapSTM_"
      },
      "index": {
        "description": "Map each element of the structure to monadic action evaluating these actions from left to right and ignoring the results while transactional side-effects from mis-speculated actions are rolled back",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "mapSTM_",
        "normalized": "STM Bool-\u003e(Int-\u003eSTM a)-\u003e(b-\u003eSTM c)-\u003ed b-\u003eSTM()",
        "package": "speculation",
        "partial": "STM",
        "signature": "STM Bool-\u003e(Int-\u003eSTM c)-\u003e(a-\u003eSTM b)-\u003et a-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:maximum",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "(Int -\u003e a) -\u003e t a -\u003e a",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#maximum",
        "fct-type": "function",
        "title": "maximum"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "maximum",
        "normalized": "(Int-\u003ea)-\u003eb a-\u003ea",
        "package": "speculation",
        "partial": "",
        "signature": "(Int-\u003ea)-\u003et a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:maximumBy",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "(a -\u003e a -\u003e Ordering) -\u003e (Int -\u003e a) -\u003e t a -\u003e a",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#maximumBy",
        "fct-type": "function",
        "title": "maximumBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "maximumBy",
        "normalized": "(a-\u003ea-\u003eOrdering)-\u003e(Int-\u003ea)-\u003eb a-\u003ea",
        "package": "speculation",
        "partial": "By",
        "signature": "(a-\u003ea-\u003eOrdering)-\u003e(Int-\u003ea)-\u003et a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:minimum",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "(Int -\u003e a) -\u003e t a -\u003e a",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#minimum",
        "fct-type": "function",
        "title": "minimum"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "minimum",
        "normalized": "(Int-\u003ea)-\u003eb a-\u003ea",
        "package": "speculation",
        "partial": "",
        "signature": "(Int-\u003ea)-\u003et a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:minimumBy",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "(a -\u003e a -\u003e Ordering) -\u003e (Int -\u003e a) -\u003e t a -\u003e a",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#minimumBy",
        "fct-type": "function",
        "title": "minimumBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "minimumBy",
        "normalized": "(a-\u003ea-\u003eOrdering)-\u003e(Int-\u003ea)-\u003eb a-\u003ea",
        "package": "speculation",
        "partial": "By",
        "signature": "(a-\u003ea-\u003eOrdering)-\u003e(Int-\u003ea)-\u003et a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:msum",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "(Int -\u003e m a) -\u003e t (m a) -\u003e m a",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#msum",
        "fct-type": "function",
        "title": "msum"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "msum",
        "normalized": "(Int-\u003ea b)-\u003ec(a b)-\u003ea b",
        "package": "speculation",
        "partial": "",
        "signature": "(Int-\u003em a)-\u003et(m a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:msumBy",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "(m a -\u003e m a -\u003e Bool) -\u003e (Int -\u003e m a) -\u003e t (m a) -\u003e m a",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#msumBy",
        "fct-type": "function",
        "title": "msumBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "msumBy",
        "normalized": "(a b-\u003ea b-\u003eBool)-\u003e(Int-\u003ea b)-\u003ec(a b)-\u003ea b",
        "package": "speculation",
        "partial": "By",
        "signature": "(m a-\u003em a-\u003eBool)-\u003e(Int-\u003em a)-\u003et(m a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:notElem",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "(Int -\u003e Bool) -\u003e a -\u003e t a -\u003e Bool",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#notElem",
        "fct-type": "function",
        "title": "notElem"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "notElem",
        "normalized": "(Int-\u003eBool)-\u003ea-\u003eb a-\u003eBool",
        "package": "speculation",
        "partial": "Elem",
        "signature": "(Int-\u003eBool)-\u003ea-\u003et a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:notElemBy",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "(a -\u003e a -\u003e Bool) -\u003e (Int -\u003e Bool) -\u003e a -\u003e t a -\u003e Bool",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#notElemBy",
        "fct-type": "function",
        "title": "notElemBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "notElemBy",
        "normalized": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003eBool)-\u003ea-\u003eb a-\u003eBool",
        "package": "speculation",
        "partial": "Elem By",
        "signature": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003eBool)-\u003ea-\u003et a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:or",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "(Int -\u003e Bool) -\u003e t Bool -\u003e Bool",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#or",
        "fct-type": "function",
        "title": "or"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "or",
        "normalized": "(Int-\u003eBool)-\u003ea Bool-\u003eBool",
        "package": "speculation",
        "partial": "",
        "signature": "(Int-\u003eBool)-\u003et Bool-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:product",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "(Int -\u003e a) -\u003e t a -\u003e a",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#product",
        "fct-type": "function",
        "title": "product"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "product",
        "normalized": "(Int-\u003ea)-\u003eb a-\u003ea",
        "package": "speculation",
        "partial": "",
        "signature": "(Int-\u003ea)-\u003et a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:productBy",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "(a -\u003e a -\u003e Bool) -\u003e (Int -\u003e a) -\u003e t a -\u003e a",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#productBy",
        "fct-type": "function",
        "title": "productBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "productBy",
        "normalized": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003eb a-\u003ea",
        "package": "speculation",
        "partial": "By",
        "signature": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003et a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:sequenceA_",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "(Int -\u003e f b) -\u003e t (f a) -\u003e f ()",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#sequenceA_",
        "fct-type": "function",
        "title": "sequenceA_"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "sequenceA_",
        "normalized": "(Int-\u003ea b)-\u003ec(a d)-\u003ea()",
        "package": "speculation",
        "partial": "",
        "signature": "(Int-\u003ef b)-\u003et(f a)-\u003ef()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:sequenceByA_",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "(f () -\u003e f () -\u003e Bool) -\u003e (Int -\u003e f b) -\u003e t (f a) -\u003e f ()",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#sequenceByA_",
        "fct-type": "function",
        "title": "sequenceByA_"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "sequenceByA_",
        "normalized": "(a()-\u003ea()-\u003eBool)-\u003e(Int-\u003ea b)-\u003ec(a d)-\u003ea()",
        "package": "speculation",
        "partial": "By",
        "signature": "(f()-\u003ef()-\u003eBool)-\u003e(Int-\u003ef b)-\u003et(f a)-\u003ef()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:sequenceBy_",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "(m () -\u003e m () -\u003e Bool) -\u003e (Int -\u003e m b) -\u003e t (m a) -\u003e m ()",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#sequenceBy_",
        "fct-type": "function",
        "title": "sequenceBy_"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "sequenceBy_",
        "normalized": "(a()-\u003ea()-\u003eBool)-\u003e(Int-\u003ea b)-\u003ec(a d)-\u003ea()",
        "package": "speculation",
        "partial": "By",
        "signature": "(m()-\u003em()-\u003eBool)-\u003e(Int-\u003em b)-\u003et(m a)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:sequenceSTM_",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "STM Bool -\u003e (Int -\u003e STM a) -\u003e t (STM b) -\u003e STM ()",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#sequenceSTM_",
        "fct-type": "function",
        "title": "sequenceSTM_"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "sequenceSTM_",
        "normalized": "STM Bool-\u003e(Int-\u003eSTM a)-\u003eb(STM c)-\u003eSTM()",
        "package": "speculation",
        "partial": "STM",
        "signature": "STM Bool-\u003e(Int-\u003eSTM a)-\u003et(STM b)-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:sequence_",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "(Int -\u003e m b) -\u003e t (m a) -\u003e m ()",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#sequence_",
        "fct-type": "function",
        "title": "sequence_"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "sequence_",
        "normalized": "(Int-\u003ea b)-\u003ec(a d)-\u003ea()",
        "package": "speculation",
        "partial": "",
        "signature": "(Int-\u003em b)-\u003et(m a)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:sum",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "(Int -\u003e a) -\u003e t a -\u003e a",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#sum",
        "fct-type": "function",
        "title": "sum"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "sum",
        "normalized": "(Int-\u003ea)-\u003eb a-\u003ea",
        "package": "speculation",
        "partial": "",
        "signature": "(Int-\u003ea)-\u003et a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:sumBy",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "(a -\u003e a -\u003e Bool) -\u003e (Int -\u003e a) -\u003e t a -\u003e a",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#sumBy",
        "fct-type": "function",
        "title": "sumBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "sumBy",
        "normalized": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003eb a-\u003ea",
        "package": "speculation",
        "partial": "By",
        "signature": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003et a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:toList",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "(Int -\u003e [a]) -\u003e t a -\u003e [a]",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "toList",
        "normalized": "(Int-\u003e[a])-\u003eb a-\u003e[a]",
        "package": "speculation",
        "partial": "List",
        "signature": "(Int-\u003e[a])-\u003et a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:toListBy",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "([a] -\u003e [a] -\u003e Bool) -\u003e (Int -\u003e [a]) -\u003e t a -\u003e [a]",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#toListBy",
        "fct-type": "function",
        "title": "toListBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "toListBy",
        "normalized": "([a]-\u003e[a]-\u003eBool)-\u003e(Int-\u003e[a])-\u003eb a-\u003e[a]",
        "package": "speculation",
        "partial": "List By",
        "signature": "([a]-\u003e[a]-\u003eBool)-\u003e(Int-\u003e[a])-\u003et a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:traverseBy_",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "(f () -\u003e f () -\u003e Bool) -\u003e (Int -\u003e f c) -\u003e (a -\u003e f b) -\u003e t a -\u003e f ()",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#traverseBy_",
        "fct-type": "function",
        "title": "traverseBy_"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "traverseBy_",
        "normalized": "(a()-\u003ea()-\u003eBool)-\u003e(Int-\u003ea b)-\u003e(c-\u003ea d)-\u003ee c-\u003ea()",
        "package": "speculation",
        "partial": "By",
        "signature": "(f()-\u003ef()-\u003eBool)-\u003e(Int-\u003ef c)-\u003e(a-\u003ef b)-\u003et a-\u003ef()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Foldable.html#v:traverse_",
      "description": {
        "fct-descr": "\u003cp\u003eMap each element of a structure to an action, evaluate these actions\n from left to right and ignore the results.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Speculation.Foldable",
        "fct-package": "speculation",
        "fct-signature": "(Int -\u003e f c) -\u003e (a -\u003e f b) -\u003e t a -\u003e f ()",
        "fct-source": "src/Control-Concurrent-Speculation-Foldable.html#traverse_",
        "fct-type": "function",
        "title": "traverse_"
      },
      "index": {
        "description": "Map each element of structure to an action evaluate these actions from left to right and ignore the results",
        "hierarchy": "Control Concurrent Speculation Foldable",
        "module": "Control.Concurrent.Speculation.Foldable",
        "name": "traverse_",
        "normalized": "(Int-\u003ea b)-\u003e(c-\u003ea d)-\u003ee c-\u003ea()",
        "package": "speculation",
        "partial": "",
        "signature": "(Int-\u003ef c)-\u003e(a-\u003ef b)-\u003et a-\u003ef()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-List.html#",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.List",
        "fct-package": "speculation",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-Speculation-List.html",
        "fct-type": "module",
        "title": "List"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation List",
        "module": "Control.Concurrent.Speculation.List",
        "name": "List",
        "normalized": "",
        "package": "speculation",
        "partial": "List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-List.html#v:scan",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a valid estimator \u003ccode\u003eg\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003escan\u003c/a\u003e\u003c/code\u003e g xs\u003c/code\u003e converts \u003ccode\u003exs\u003c/code\u003e into a list of the prefix sums.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eg n\u003c/code\u003e should supply an estimate of the value of the monoidal summation over the first \u003ccode\u003en\u003c/code\u003e elements of the container.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003eg n\u003c/code\u003e is accurate a reasonable percentage of the time and faster to compute than the prefix sum, then this can\n provide increased opportunities for parallelism.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Speculation.List",
        "fct-package": "speculation",
        "fct-signature": "(Int -\u003e m) -\u003e [m] -\u003e [m]",
        "fct-source": "src/Control-Concurrent-Speculation-List.html#scan",
        "fct-type": "function",
        "title": "scan"
      },
      "index": {
        "description": "Given valid estimator scan xs converts xs into list of the prefix sums should supply an estimate of the value of the monoidal summation over the first elements of the container If is accurate reasonable percentage of the time and faster to compute than the prefix sum then this can provide increased opportunities for parallelism",
        "hierarchy": "Control Concurrent Speculation List",
        "module": "Control.Concurrent.Speculation.List",
        "name": "scan",
        "normalized": "(Int-\u003ea)-\u003e[a]-\u003e[a]",
        "package": "speculation",
        "partial": "",
        "signature": "(Int-\u003em)-\u003e[m]-\u003e[m]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-List.html#v:scanBy",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escan\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003especBy\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Speculation.List",
        "fct-package": "speculation",
        "fct-signature": "(m -\u003e m -\u003e Bool) -\u003e (Int -\u003e m) -\u003e [m] -\u003e [m]",
        "fct-source": "src/Control-Concurrent-Speculation-List.html#scanBy",
        "fct-type": "function",
        "title": "scanBy"
      },
      "index": {
        "description": "scan using specBy",
        "hierarchy": "Control Concurrent Speculation List",
        "module": "Control.Concurrent.Speculation.List",
        "name": "scanBy",
        "normalized": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003e[a]-\u003e[a]",
        "package": "speculation",
        "partial": "By",
        "signature": "(m-\u003em-\u003eBool)-\u003e(Int-\u003em)-\u003e[m]-\u003e[m]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-List.html#v:scanMap",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a valid estimator \u003ccode\u003eg\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003escanMap\u003c/a\u003e\u003c/code\u003e g f xs\u003c/code\u003e converts \u003ccode\u003exs\u003c/code\u003e into a list of the prefix sums.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eg n\u003c/code\u003e should supply an estimate of the value of the monoidal summation over the first \u003ccode\u003en\u003c/code\u003e elements of the container.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003eg n\u003c/code\u003e is accurate a reasonable percentage of the time and faster to compute than the scan, then this can\n provide increased opportunities for parallelism.\n\u003c/p\u003e\u003cpre\u003e scan = scanMap id\n scanMap = scanMapBy (==)\n\u003c/pre\u003e",
        "fct-module": "Control.Concurrent.Speculation.List",
        "fct-package": "speculation",
        "fct-signature": "(Int -\u003e m) -\u003e (a -\u003e m) -\u003e [a] -\u003e [m]",
        "fct-source": "src/Control-Concurrent-Speculation-List.html#scanMap",
        "fct-type": "function",
        "title": "scanMap"
      },
      "index": {
        "description": "Given valid estimator scanMap xs converts xs into list of the prefix sums should supply an estimate of the value of the monoidal summation over the first elements of the container If is accurate reasonable percentage of the time and faster to compute than the scan then this can provide increased opportunities for parallelism scan scanMap id scanMap scanMapBy",
        "hierarchy": "Control Concurrent Speculation List",
        "module": "Control.Concurrent.Speculation.List",
        "name": "scanMap",
        "normalized": "(Int-\u003ea)-\u003e(b-\u003ea)-\u003e[b]-\u003e[a]",
        "package": "speculation",
        "partial": "Map",
        "signature": "(Int-\u003em)-\u003e(a-\u003em)-\u003e[a]-\u003e[m]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-List.html#v:scanMapBy",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.List",
        "fct-package": "speculation",
        "fct-signature": "(m -\u003e m -\u003e Bool) -\u003e (Int -\u003e m) -\u003e (a -\u003e m) -\u003e [a] -\u003e [m]",
        "fct-source": "src/Control-Concurrent-Speculation-List.html#scanMapBy",
        "fct-type": "function",
        "title": "scanMapBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation List",
        "module": "Control.Concurrent.Speculation.List",
        "name": "scanMapBy",
        "normalized": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003e(b-\u003ea)-\u003e[b]-\u003e[a]",
        "package": "speculation",
        "partial": "Map By",
        "signature": "(m-\u003em-\u003eBool)-\u003e(Int-\u003em)-\u003e(a-\u003em)-\u003e[a]-\u003e[m]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-List.html#v:scanl",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.List",
        "fct-package": "speculation",
        "fct-signature": "(Int -\u003e b) -\u003e (b -\u003e a -\u003e b) -\u003e b -\u003e [a] -\u003e [b]",
        "fct-source": "src/Control-Concurrent-Speculation-List.html#scanl",
        "fct-type": "function",
        "title": "scanl"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation List",
        "module": "Control.Concurrent.Speculation.List",
        "name": "scanl",
        "normalized": "(Int-\u003ea)-\u003e(a-\u003eb-\u003ea)-\u003ea-\u003e[b]-\u003e[a]",
        "package": "speculation",
        "partial": "",
        "signature": "(Int-\u003eb)-\u003e(b-\u003ea-\u003eb)-\u003eb-\u003e[a]-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-List.html#v:scanl1",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.List",
        "fct-package": "speculation",
        "fct-signature": "(Int -\u003e a) -\u003e (a -\u003e a -\u003e a) -\u003e [a] -\u003e [a]",
        "fct-source": "src/Control-Concurrent-Speculation-List.html#scanl1",
        "fct-type": "function",
        "title": "scanl1"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation List",
        "module": "Control.Concurrent.Speculation.List",
        "name": "scanl1",
        "normalized": "(Int-\u003ea)-\u003e(a-\u003ea-\u003ea)-\u003e[a]-\u003e[a]",
        "package": "speculation",
        "partial": "",
        "signature": "(Int-\u003ea)-\u003e(a-\u003ea-\u003ea)-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-List.html#v:scanl1By",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.List",
        "fct-package": "speculation",
        "fct-signature": "(a -\u003e a -\u003e Bool) -\u003e (Int -\u003e a) -\u003e (a -\u003e a -\u003e a) -\u003e [a] -\u003e [a]",
        "fct-source": "src/Control-Concurrent-Speculation-List.html#scanl1By",
        "fct-type": "function",
        "title": "scanl1By"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation List",
        "module": "Control.Concurrent.Speculation.List",
        "name": "scanl1By",
        "normalized": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003e(a-\u003ea-\u003ea)-\u003e[a]-\u003e[a]",
        "package": "speculation",
        "partial": "By",
        "signature": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003e(a-\u003ea-\u003ea)-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-List.html#v:scanlBy",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.List",
        "fct-package": "speculation",
        "fct-signature": "(b -\u003e b -\u003e Bool) -\u003e (Int -\u003e b) -\u003e (b -\u003e a -\u003e b) -\u003e b -\u003e [a] -\u003e [b]",
        "fct-source": "src/Control-Concurrent-Speculation-List.html#scanlBy",
        "fct-type": "function",
        "title": "scanlBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation List",
        "module": "Control.Concurrent.Speculation.List",
        "name": "scanlBy",
        "normalized": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003e(a-\u003eb-\u003ea)-\u003ea-\u003e[b]-\u003e[a]",
        "package": "speculation",
        "partial": "By",
        "signature": "(b-\u003eb-\u003eBool)-\u003e(Int-\u003eb)-\u003e(b-\u003ea-\u003eb)-\u003eb-\u003e[a]-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-List.html#v:scanr",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a valid estimator \u003ccode\u003eg\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003escanr\u003c/a\u003e\u003c/code\u003e g f z xs\u003c/code\u003e yields the same answer as \u003ccode\u003e\u003ccode\u003escanr'\u003c/code\u003e f z xs\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eg n\u003c/code\u003e should supply an estimate of the value returned from scanning over the last \u003ccode\u003en\u003c/code\u003e elements of the container.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003eg n\u003c/code\u003e is accurate a reasonable percentage of the time and faster to compute than the scan, then this can\n provide increased opportunities for parallelism.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Speculation.List",
        "fct-package": "speculation",
        "fct-signature": "(Int -\u003e b) -\u003e (a -\u003e b -\u003e b) -\u003e b -\u003e [a] -\u003e [b]",
        "fct-source": "src/Control-Concurrent-Speculation-List.html#scanr",
        "fct-type": "function",
        "title": "scanr"
      },
      "index": {
        "description": "Given valid estimator scanr xs yields the same answer as scanr xs should supply an estimate of the value returned from scanning over the last elements of the container If is accurate reasonable percentage of the time and faster to compute than the scan then this can provide increased opportunities for parallelism",
        "hierarchy": "Control Concurrent Speculation List",
        "module": "Control.Concurrent.Speculation.List",
        "name": "scanr",
        "normalized": "(Int-\u003ea)-\u003e(b-\u003ea-\u003ea)-\u003ea-\u003e[b]-\u003e[a]",
        "package": "speculation",
        "partial": "",
        "signature": "(Int-\u003eb)-\u003e(a-\u003eb-\u003eb)-\u003eb-\u003e[a]-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-List.html#v:scanr1",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.List",
        "fct-package": "speculation",
        "fct-signature": "(Int -\u003e a) -\u003e (a -\u003e a -\u003e a) -\u003e [a] -\u003e [a]",
        "fct-source": "src/Control-Concurrent-Speculation-List.html#scanr1",
        "fct-type": "function",
        "title": "scanr1"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation List",
        "module": "Control.Concurrent.Speculation.List",
        "name": "scanr1",
        "normalized": "(Int-\u003ea)-\u003e(a-\u003ea-\u003ea)-\u003e[a]-\u003e[a]",
        "package": "speculation",
        "partial": "",
        "signature": "(Int-\u003ea)-\u003e(a-\u003ea-\u003ea)-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-List.html#v:scanr1By",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.List",
        "fct-package": "speculation",
        "fct-signature": "(a -\u003e a -\u003e Bool) -\u003e (Int -\u003e a) -\u003e (a -\u003e a -\u003e a) -\u003e [a] -\u003e [a]",
        "fct-source": "src/Control-Concurrent-Speculation-List.html#scanr1By",
        "fct-type": "function",
        "title": "scanr1By"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation List",
        "module": "Control.Concurrent.Speculation.List",
        "name": "scanr1By",
        "normalized": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003e(a-\u003ea-\u003ea)-\u003e[a]-\u003e[a]",
        "package": "speculation",
        "partial": "By",
        "signature": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003e(a-\u003ea-\u003ea)-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-List.html#v:scanrBy",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.List",
        "fct-package": "speculation",
        "fct-signature": "(b -\u003e b -\u003e Bool) -\u003e (Int -\u003e b) -\u003e (a -\u003e b -\u003e b) -\u003e b -\u003e [a] -\u003e [b]",
        "fct-source": "src/Control-Concurrent-Speculation-List.html#scanrBy",
        "fct-type": "function",
        "title": "scanrBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation List",
        "module": "Control.Concurrent.Speculation.List",
        "name": "scanrBy",
        "normalized": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003e(b-\u003ea-\u003ea)-\u003ea-\u003e[b]-\u003e[a]",
        "package": "speculation",
        "partial": "By",
        "signature": "(b-\u003eb-\u003eBool)-\u003e(Int-\u003eb)-\u003e(a-\u003eb-\u003eb)-\u003eb-\u003e[a]-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Traversable.html#",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Traversable",
        "fct-package": "speculation",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-Speculation-Traversable.html",
        "fct-type": "module",
        "title": "Traversable"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Traversable",
        "module": "Control.Concurrent.Speculation.Traversable",
        "name": "Traversable",
        "normalized": "",
        "package": "speculation",
        "partial": "Traversable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Traversable.html#v:for",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Traversable",
        "fct-package": "speculation",
        "fct-signature": "(Int -\u003e a) -\u003e t a -\u003e (a -\u003e f b) -\u003e f (t b)",
        "fct-source": "src/Control-Concurrent-Speculation-Traversable.html#for",
        "fct-type": "function",
        "title": "for"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Traversable",
        "module": "Control.Concurrent.Speculation.Traversable",
        "name": "for",
        "normalized": "(Int-\u003ea)-\u003eb a-\u003e(a-\u003ec d)-\u003ec(b d)",
        "package": "speculation",
        "partial": "",
        "signature": "(Int-\u003ea)-\u003et a-\u003e(a-\u003ef b)-\u003ef(t b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Traversable.html#v:forBy",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Traversable",
        "fct-package": "speculation",
        "fct-signature": "(a -\u003e a -\u003e Bool) -\u003e (Int -\u003e a) -\u003e t a -\u003e (a -\u003e f b) -\u003e f (t b)",
        "fct-source": "src/Control-Concurrent-Speculation-Traversable.html#forBy",
        "fct-type": "function",
        "title": "forBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Traversable",
        "module": "Control.Concurrent.Speculation.Traversable",
        "name": "forBy",
        "normalized": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003eb a-\u003e(a-\u003ec d)-\u003ec(b d)",
        "package": "speculation",
        "partial": "By",
        "signature": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003et a-\u003e(a-\u003ef b)-\u003ef(t b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Traversable.html#v:forByM",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Traversable",
        "fct-package": "speculation",
        "fct-signature": "(a -\u003e a -\u003e Bool) -\u003e (Int -\u003e a) -\u003e t a -\u003e (a -\u003e m b) -\u003e m (t b)",
        "fct-source": "src/Control-Concurrent-Speculation-Traversable.html#forByM",
        "fct-type": "function",
        "title": "forByM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Traversable",
        "module": "Control.Concurrent.Speculation.Traversable",
        "name": "forByM",
        "normalized": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003eb a-\u003e(a-\u003ec d)-\u003ec(b d)",
        "package": "speculation",
        "partial": "By",
        "signature": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003et a-\u003e(a-\u003em b)-\u003em(t b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Traversable.html#v:forBySTM",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Traversable",
        "fct-package": "speculation",
        "fct-signature": "(a -\u003e a -\u003e STM Bool) -\u003e (Int -\u003e STM a) -\u003e t a -\u003e (a -\u003e STM b) -\u003e STM (t b)",
        "fct-source": "src/Control-Concurrent-Speculation-Traversable.html#forBySTM",
        "fct-type": "function",
        "title": "forBySTM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Traversable",
        "module": "Control.Concurrent.Speculation.Traversable",
        "name": "forBySTM",
        "normalized": "(a-\u003ea-\u003eSTM Bool)-\u003e(Int-\u003eSTM a)-\u003eb a-\u003e(a-\u003eSTM c)-\u003eSTM(b c)",
        "package": "speculation",
        "partial": "By STM",
        "signature": "(a-\u003ea-\u003eSTM Bool)-\u003e(Int-\u003eSTM a)-\u003et a-\u003e(a-\u003eSTM b)-\u003eSTM(t b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Traversable.html#v:forM",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Traversable",
        "fct-package": "speculation",
        "fct-signature": "(Int -\u003e a) -\u003e t a -\u003e (a -\u003e m b) -\u003e m (t b)",
        "fct-source": "src/Control-Concurrent-Speculation-Traversable.html#forM",
        "fct-type": "function",
        "title": "forM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Traversable",
        "module": "Control.Concurrent.Speculation.Traversable",
        "name": "forM",
        "normalized": "(Int-\u003ea)-\u003eb a-\u003e(a-\u003ec d)-\u003ec(b d)",
        "package": "speculation",
        "partial": "",
        "signature": "(Int-\u003ea)-\u003et a-\u003e(a-\u003em b)-\u003em(t b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Traversable.html#v:forSTM",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Traversable",
        "fct-package": "speculation",
        "fct-signature": "(Int -\u003e STM a) -\u003e t a -\u003e (a -\u003e STM b) -\u003e STM (t b)",
        "fct-source": "src/Control-Concurrent-Speculation-Traversable.html#forSTM",
        "fct-type": "function",
        "title": "forSTM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Traversable",
        "module": "Control.Concurrent.Speculation.Traversable",
        "name": "forSTM",
        "normalized": "(Int-\u003eSTM a)-\u003eb a-\u003e(a-\u003eSTM c)-\u003eSTM(b c)",
        "package": "speculation",
        "partial": "STM",
        "signature": "(Int-\u003eSTM a)-\u003et a-\u003e(a-\u003eSTM b)-\u003eSTM(t b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Traversable.html#v:mapAccumL",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Traversable",
        "fct-package": "speculation",
        "fct-signature": "(Int -\u003e a) -\u003e (a -\u003e b -\u003e (a, c)) -\u003e a -\u003e t b -\u003e (a, t c)",
        "fct-source": "src/Control-Concurrent-Speculation-Traversable.html#mapAccumL",
        "fct-type": "function",
        "title": "mapAccumL"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Traversable",
        "module": "Control.Concurrent.Speculation.Traversable",
        "name": "mapAccumL",
        "normalized": "(Int-\u003ea)-\u003e(a-\u003eb-\u003e(a,c))-\u003ea-\u003ed b-\u003e(a,d c)",
        "package": "speculation",
        "partial": "Accum",
        "signature": "(Int-\u003ea)-\u003e(a-\u003eb-\u003e(a,c))-\u003ea-\u003et b-\u003e(a,t c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Traversable.html#v:mapAccumLBy",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Traversable",
        "fct-package": "speculation",
        "fct-signature": "(a -\u003e a -\u003e Bool) -\u003e (Int -\u003e a) -\u003e (a -\u003e b -\u003e (a, c)) -\u003e a -\u003e t b -\u003e (a, t c)",
        "fct-source": "src/Control-Concurrent-Speculation-Traversable.html#mapAccumLBy",
        "fct-type": "function",
        "title": "mapAccumLBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Traversable",
        "module": "Control.Concurrent.Speculation.Traversable",
        "name": "mapAccumLBy",
        "normalized": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003e(a-\u003eb-\u003e(a,c))-\u003ea-\u003ed b-\u003e(a,d c)",
        "package": "speculation",
        "partial": "Accum LBy",
        "signature": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003e(a-\u003eb-\u003e(a,c))-\u003ea-\u003et b-\u003e(a,t c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Traversable.html#v:mapAccumR",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Traversable",
        "fct-package": "speculation",
        "fct-signature": "(Int -\u003e a) -\u003e (a -\u003e b -\u003e (a, c)) -\u003e a -\u003e t b -\u003e (a, t c)",
        "fct-source": "src/Control-Concurrent-Speculation-Traversable.html#mapAccumR",
        "fct-type": "function",
        "title": "mapAccumR"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Traversable",
        "module": "Control.Concurrent.Speculation.Traversable",
        "name": "mapAccumR",
        "normalized": "(Int-\u003ea)-\u003e(a-\u003eb-\u003e(a,c))-\u003ea-\u003ed b-\u003e(a,d c)",
        "package": "speculation",
        "partial": "Accum",
        "signature": "(Int-\u003ea)-\u003e(a-\u003eb-\u003e(a,c))-\u003ea-\u003et b-\u003e(a,t c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Traversable.html#v:mapAccumRBy",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Traversable",
        "fct-package": "speculation",
        "fct-signature": "(a -\u003e a -\u003e Bool) -\u003e (Int -\u003e a) -\u003e (a -\u003e b -\u003e (a, c)) -\u003e a -\u003e t b -\u003e (a, t c)",
        "fct-source": "src/Control-Concurrent-Speculation-Traversable.html#mapAccumRBy",
        "fct-type": "function",
        "title": "mapAccumRBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Traversable",
        "module": "Control.Concurrent.Speculation.Traversable",
        "name": "mapAccumRBy",
        "normalized": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003e(a-\u003eb-\u003e(a,c))-\u003ea-\u003ed b-\u003e(a,d c)",
        "package": "speculation",
        "partial": "Accum RBy",
        "signature": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003e(a-\u003eb-\u003e(a,c))-\u003ea-\u003et b-\u003e(a,t c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Traversable.html#v:mapByM",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Traversable",
        "fct-package": "speculation",
        "fct-signature": "(a -\u003e a -\u003e Bool) -\u003e (Int -\u003e a) -\u003e (a -\u003e m b) -\u003e t a -\u003e m (t b)",
        "fct-source": "src/Control-Concurrent-Speculation-Traversable.html#mapByM",
        "fct-type": "function",
        "title": "mapByM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Traversable",
        "module": "Control.Concurrent.Speculation.Traversable",
        "name": "mapByM",
        "normalized": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003e(a-\u003eb c)-\u003ed a-\u003eb(d c)",
        "package": "speculation",
        "partial": "By",
        "signature": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003e(a-\u003em b)-\u003et a-\u003em(t b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Traversable.html#v:mapBySTM",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Traversable",
        "fct-package": "speculation",
        "fct-signature": "(a -\u003e a -\u003e STM Bool) -\u003e (Int -\u003e STM a) -\u003e (a -\u003e STM b) -\u003e t a -\u003e STM (t b)",
        "fct-source": "src/Control-Concurrent-Speculation-Traversable.html#mapBySTM",
        "fct-type": "function",
        "title": "mapBySTM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Traversable",
        "module": "Control.Concurrent.Speculation.Traversable",
        "name": "mapBySTM",
        "normalized": "(a-\u003ea-\u003eSTM Bool)-\u003e(Int-\u003eSTM a)-\u003e(a-\u003eSTM b)-\u003ec a-\u003eSTM(c b)",
        "package": "speculation",
        "partial": "By STM",
        "signature": "(a-\u003ea-\u003eSTM Bool)-\u003e(Int-\u003eSTM a)-\u003e(a-\u003eSTM b)-\u003et a-\u003eSTM(t b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Traversable.html#v:mapM",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Traversable",
        "fct-package": "speculation",
        "fct-signature": "(Int -\u003e a) -\u003e (a -\u003e m b) -\u003e t a -\u003e m (t b)",
        "fct-source": "src/Control-Concurrent-Speculation-Traversable.html#mapM",
        "fct-type": "function",
        "title": "mapM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Traversable",
        "module": "Control.Concurrent.Speculation.Traversable",
        "name": "mapM",
        "normalized": "(Int-\u003ea)-\u003e(a-\u003eb c)-\u003ed a-\u003eb(d c)",
        "package": "speculation",
        "partial": "",
        "signature": "(Int-\u003ea)-\u003e(a-\u003em b)-\u003et a-\u003em(t b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Traversable.html#v:mapSTM",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Traversable",
        "fct-package": "speculation",
        "fct-signature": "(Int -\u003e STM a) -\u003e (a -\u003e STM b) -\u003e t a -\u003e STM (t b)",
        "fct-source": "src/Control-Concurrent-Speculation-Traversable.html#mapSTM",
        "fct-type": "function",
        "title": "mapSTM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Traversable",
        "module": "Control.Concurrent.Speculation.Traversable",
        "name": "mapSTM",
        "normalized": "(Int-\u003eSTM a)-\u003e(a-\u003eSTM b)-\u003ec a-\u003eSTM(c b)",
        "package": "speculation",
        "partial": "STM",
        "signature": "(Int-\u003eSTM a)-\u003e(a-\u003eSTM b)-\u003et a-\u003eSTM(t b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Traversable.html#v:sequence",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Traversable",
        "fct-package": "speculation",
        "fct-signature": "(Int -\u003e m a) -\u003e t (m a) -\u003e m (t a)",
        "fct-source": "src/Control-Concurrent-Speculation-Traversable.html#sequence",
        "fct-type": "function",
        "title": "sequence"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Traversable",
        "module": "Control.Concurrent.Speculation.Traversable",
        "name": "sequence",
        "normalized": "(Int-\u003ea b)-\u003ec(a b)-\u003ea(c b)",
        "package": "speculation",
        "partial": "",
        "signature": "(Int-\u003em a)-\u003et(m a)-\u003em(t a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Traversable.html#v:sequenceA",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Traversable",
        "fct-package": "speculation",
        "fct-signature": "(Int -\u003e f a) -\u003e t (f a) -\u003e f (t a)",
        "fct-source": "src/Control-Concurrent-Speculation-Traversable.html#sequenceA",
        "fct-type": "function",
        "title": "sequenceA"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Traversable",
        "module": "Control.Concurrent.Speculation.Traversable",
        "name": "sequenceA",
        "normalized": "(Int-\u003ea b)-\u003ec(a b)-\u003ea(c b)",
        "package": "speculation",
        "partial": "",
        "signature": "(Int-\u003ef a)-\u003et(f a)-\u003ef(t a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Traversable.html#v:sequenceBy",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Traversable",
        "fct-package": "speculation",
        "fct-signature": "(m a -\u003e m a -\u003e Bool) -\u003e (Int -\u003e m a) -\u003e t (m a) -\u003e m (t a)",
        "fct-source": "src/Control-Concurrent-Speculation-Traversable.html#sequenceBy",
        "fct-type": "function",
        "title": "sequenceBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Traversable",
        "module": "Control.Concurrent.Speculation.Traversable",
        "name": "sequenceBy",
        "normalized": "(a b-\u003ea b-\u003eBool)-\u003e(Int-\u003ea b)-\u003ec(a b)-\u003ea(c b)",
        "package": "speculation",
        "partial": "By",
        "signature": "(m a-\u003em a-\u003eBool)-\u003e(Int-\u003em a)-\u003et(m a)-\u003em(t a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Traversable.html#v:sequenceByA",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Traversable",
        "fct-package": "speculation",
        "fct-signature": "(f a -\u003e f a -\u003e Bool) -\u003e (Int -\u003e f a) -\u003e t (f a) -\u003e f (t a)",
        "fct-source": "src/Control-Concurrent-Speculation-Traversable.html#sequenceByA",
        "fct-type": "function",
        "title": "sequenceByA"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Traversable",
        "module": "Control.Concurrent.Speculation.Traversable",
        "name": "sequenceByA",
        "normalized": "(a b-\u003ea b-\u003eBool)-\u003e(Int-\u003ea b)-\u003ec(a b)-\u003ea(c b)",
        "package": "speculation",
        "partial": "By",
        "signature": "(f a-\u003ef a-\u003eBool)-\u003e(Int-\u003ef a)-\u003et(f a)-\u003ef(t a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Traversable.html#v:traverse",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Traversable",
        "fct-package": "speculation",
        "fct-signature": "(Int -\u003e a) -\u003e (a -\u003e f b) -\u003e t a -\u003e f (t b)",
        "fct-source": "src/Control-Concurrent-Speculation-Traversable.html#traverse",
        "fct-type": "function",
        "title": "traverse"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Traversable",
        "module": "Control.Concurrent.Speculation.Traversable",
        "name": "traverse",
        "normalized": "(Int-\u003ea)-\u003e(a-\u003eb c)-\u003ed a-\u003eb(d c)",
        "package": "speculation",
        "partial": "",
        "signature": "(Int-\u003ea)-\u003e(a-\u003ef b)-\u003et a-\u003ef(t b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation-Traversable.html#v:traverseBy",
      "description": {
        "fct-module": "Control.Concurrent.Speculation.Traversable",
        "fct-package": "speculation",
        "fct-signature": "(a -\u003e a -\u003e Bool) -\u003e (Int -\u003e a) -\u003e (a -\u003e f b) -\u003e t a -\u003e f (t b)",
        "fct-source": "src/Control-Concurrent-Speculation-Traversable.html#traverseBy",
        "fct-type": "function",
        "title": "traverseBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation Traversable",
        "module": "Control.Concurrent.Speculation.Traversable",
        "name": "traverseBy",
        "normalized": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003e(a-\u003eb c)-\u003ed a-\u003eb(d c)",
        "package": "speculation",
        "partial": "By",
        "signature": "(a-\u003ea-\u003eBool)-\u003e(Int-\u003ea)-\u003e(a-\u003ef b)-\u003et a-\u003ef(t b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation.html#",
      "description": {
        "fct-module": "Control.Concurrent.Speculation",
        "fct-package": "speculation",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-Speculation.html",
        "fct-type": "module",
        "title": "Speculation"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Speculation",
        "module": "Control.Concurrent.Speculation",
        "name": "Speculation",
        "normalized": "",
        "package": "speculation",
        "partial": "Speculation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation.html#v:spec",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003espec\u003c/a\u003e\u003c/code\u003e g f a\u003c/code\u003e evaluates \u003ccode\u003ef g\u003c/code\u003e while forcing \u003ccode\u003ea\u003c/code\u003e, if \u003ccode\u003eg == a\u003c/code\u003e then \u003ccode\u003ef g\u003c/code\u003e is returned, otherwise \u003ccode\u003ef a\u003c/code\u003e is evaluated and returned. Furthermore, if the argument has already been evaluated or are not running on the threaded runtime, we skip the \u003ccode\u003ef g\u003c/code\u003e computation entirely. If a good guess at the value of \u003ccode\u003ea\u003c/code\u003e is available, this is one way to induce parallelism in an otherwise sequential task. However, if the guess isn't available more cheaply than the actual answer, then this saves no work and if the guess is wrong, you risk evaluating the function twice. Under high load or in a runtime with access to a single capability, since 'f g' is computed via the spark queue, the speculation will be skipped and you will obtain the same answer as 'f $! a'.\n\u003c/p\u003e\u003cp\u003eThe best-case timeline looks like:\n\u003c/p\u003e\u003cpre\u003e foreground: [----- a -----]\n foreground:               [-]    (check g == a)\n spark:         [----- f g -----]\n overall:    [--- spec g f a ---]\n\u003c/pre\u003e\u003cp\u003eThe worst-case timeline looks like:\n\u003c/p\u003e\u003cpre\u003e foreground: [----- a -----]\n foreground:               [-]               (check g == a)\n foreground:                 [---- f a ----]\n spark:         [----- f g -----]\n overall:    [-------- spec g f a ---------]\n\u003c/pre\u003e\u003cp\u003eNote that, if \u003ccode\u003ef g\u003c/code\u003e takes longer than a to compute, in the HEAD release of GHC, \u003ccode\u003ef g\u003c/code\u003e will be collected and killed during garbage collection.\n\u003c/p\u003e\u003cpre\u003e foreground: [----- a -----]\n foreground:               [-]               (check g == a)\n foreground:                 [---- f a ----]\n spark:         [---- f g ----######         (#'s mark when this spark is collectable)\n overall:    [--------- spec g f a --------]\n\u003c/pre\u003e\u003cp\u003eUnder high load:\n\u003c/p\u003e\u003cpre\u003e foreground: [----- a -----]\n foreground:               [-]               (check g == a)\n foreground:                 [---- f a ----]\n overall:    [-------- spec g f a ---------]\n\u003c/pre\u003e\u003cp\u003eCompare these to the timeline of \u003ccode\u003ef $! a\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e foreground: [----- a -----]\n foreground:               [---- f a ----]\n orverall:   [---------- f $! a ---------]\n\u003c/pre\u003e",
        "fct-module": "Control.Concurrent.Speculation",
        "fct-package": "speculation",
        "fct-signature": "a -\u003e (a -\u003e b) -\u003e a -\u003e b",
        "fct-source": "src/Control-Concurrent-Speculation.html#spec",
        "fct-type": "function",
        "title": "spec"
      },
      "index": {
        "description": "spec evaluates while forcing if then is returned otherwise is evaluated and returned Furthermore if the argument has already been evaluated or are not running on the threaded runtime we skip the computation entirely If good guess at the value of is available this is one way to induce parallelism in an otherwise sequential task However if the guess isn available more cheaply than the actual answer then this saves no work and if the guess is wrong you risk evaluating the function twice Under high load or in runtime with access to single capability since is computed via the spark queue the speculation will be skipped and you will obtain the same answer as The best-case timeline looks like foreground foreground check spark overall spec The worst-case timeline looks like foreground foreground check foreground spark overall spec Note that if takes longer than to compute in the HEAD release of GHC will be collected and killed during garbage collection foreground foreground check foreground spark mark when this spark is collectable overall spec Under high load foreground foreground check foreground overall spec Compare these to the timeline of foreground foreground orverall",
        "hierarchy": "Control Concurrent Speculation",
        "module": "Control.Concurrent.Speculation",
        "name": "spec",
        "normalized": "a-\u003e(a-\u003eb)-\u003ea-\u003eb",
        "package": "speculation",
        "partial": "",
        "signature": "a-\u003e(a-\u003eb)-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation.html#v:specBy",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003espec\u003c/a\u003e\u003c/code\u003e with a user defined comparison function\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Speculation",
        "fct-package": "speculation",
        "fct-signature": "(a -\u003e a -\u003e Bool) -\u003e a -\u003e (a -\u003e b) -\u003e a -\u003e b",
        "fct-source": "src/Control-Concurrent-Speculation.html#specBy",
        "fct-type": "function",
        "title": "specBy"
      },
      "index": {
        "description": "spec with user defined comparison function",
        "hierarchy": "Control Concurrent Speculation",
        "module": "Control.Concurrent.Speculation",
        "name": "specBy",
        "normalized": "(a-\u003ea-\u003eBool)-\u003ea-\u003e(a-\u003eb)-\u003ea-\u003eb",
        "package": "speculation",
        "partial": "By",
        "signature": "(a-\u003ea-\u003eBool)-\u003ea-\u003e(a-\u003eb)-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation.html#v:specBySTM",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003especSTM\u003c/a\u003e\u003c/code\u003e using a user defined comparison function\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Speculation",
        "fct-package": "speculation",
        "fct-signature": "(a -\u003e a -\u003e STM Bool) -\u003e STM a -\u003e (a -\u003e STM b) -\u003e a -\u003e STM b",
        "fct-source": "src/Control-Concurrent-Speculation.html#specBySTM",
        "fct-type": "function",
        "title": "specBySTM"
      },
      "index": {
        "description": "specSTM using user defined comparison function",
        "hierarchy": "Control Concurrent Speculation",
        "module": "Control.Concurrent.Speculation",
        "name": "specBySTM",
        "normalized": "(a-\u003ea-\u003eSTM Bool)-\u003eSTM a-\u003e(a-\u003eSTM b)-\u003ea-\u003eSTM b",
        "package": "speculation",
        "partial": "By STM",
        "signature": "(a-\u003ea-\u003eSTM Bool)-\u003eSTM a-\u003e(a-\u003eSTM b)-\u003ea-\u003eSTM b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation.html#v:specOn",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003espec\u003c/a\u003e\u003c/code\u003e comparing by projection onto another type\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Speculation",
        "fct-package": "speculation",
        "fct-signature": "(a -\u003e c) -\u003e a -\u003e (a -\u003e b) -\u003e a -\u003e b",
        "fct-source": "src/Control-Concurrent-Speculation.html#specOn",
        "fct-type": "function",
        "title": "specOn"
      },
      "index": {
        "description": "spec comparing by projection onto another type",
        "hierarchy": "Control Concurrent Speculation",
        "module": "Control.Concurrent.Speculation",
        "name": "specOn",
        "normalized": "(a-\u003eb)-\u003ea-\u003e(a-\u003ec)-\u003ea-\u003ec",
        "package": "speculation",
        "partial": "On",
        "signature": "(a-\u003ec)-\u003ea-\u003e(a-\u003eb)-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation.html#v:specOnSTM",
      "description": {
        "fct-descr": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003especBySTM\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003eon\u003c/a\u003e\u003c/code\u003e (==)\u003c/pre\u003e",
        "fct-module": "Control.Concurrent.Speculation",
        "fct-package": "speculation",
        "fct-signature": "(a -\u003e STM c) -\u003e STM a -\u003e (a -\u003e STM b) -\u003e a -\u003e STM b",
        "fct-source": "src/Control-Concurrent-Speculation.html#specOnSTM",
        "fct-type": "function",
        "title": "specOnSTM"
      },
      "index": {
        "description": "specBySTM on",
        "hierarchy": "Control Concurrent Speculation",
        "module": "Control.Concurrent.Speculation",
        "name": "specOnSTM",
        "normalized": "(a-\u003eSTM b)-\u003eSTM a-\u003e(a-\u003eSTM c)-\u003ea-\u003eSTM c",
        "package": "speculation",
        "partial": "On STM",
        "signature": "(a-\u003eSTM c)-\u003eSTM a-\u003e(a-\u003eSTM b)-\u003ea-\u003eSTM b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/speculation/docs/Control-Concurrent-Speculation.html#v:specSTM",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003especSTM\u003c/a\u003e\u003c/code\u003e g f a\u003c/code\u003e evaluates \u003ccode\u003efg = do g' \u003c- g; f g'\u003c/code\u003e, while forcing \u003ccode\u003ea\u003c/code\u003e, then if \u003ccode\u003eg' == a\u003c/code\u003e then \u003ccode\u003efg\u003c/code\u003e is returned. Otherwise the side-effects of \u003ccode\u003efg\u003c/code\u003e are rolled back and \u003ccode\u003ef a\u003c/code\u003e is evaluated. \u003ccode\u003eg\u003c/code\u003e is allowed to be a monadic action, so that we can kickstart the computation of \u003ccode\u003ea\u003c/code\u003e earlier. Under high load, or when we are not using the parallel runtime, the speculation is avoided, to enable this to more closely approximate the runtime profile of spec.\n\u003c/p\u003e\u003cp\u003eIf the argument \u003ccode\u003ea\u003c/code\u003e is already evaluated, we don't bother to perform \u003ccode\u003ef g\u003c/code\u003e at all.\n\u003c/p\u003e\u003cp\u003eIf a good guess at the value of \u003ccode\u003ea\u003c/code\u003e is available, this is one way to induce parallelism in an otherwise sequential task.\n\u003c/p\u003e\u003cp\u003eHowever, if the guess isn't available more cheaply than the actual answer then this saves no work, and if the guess is\n wrong, you risk evaluating the function twice.\n\u003c/p\u003e\u003cp\u003eThe best-case timeline looks like:\n\u003c/p\u003e\u003cpre\u003e foreground: [--- g \u003e\u003e= f ---]\n spark:          [------- a -------]\n foreground:                       [-] (compare g' == a)\n overall:    [---- specSTM g f a ----]\n\u003c/pre\u003e\u003cp\u003eThe worst-case timeline looks like:\n\u003c/p\u003e\u003cpre\u003e foreground: [---- g \u003e\u003e= f ----]\n spark:         [------- a -------]\n foreground:                      [-] (check if g' == a)\n foreground:                        [--] (rollback)\n foreground:                           [------ f a ------]\n overall:    [------------ specSTM g f a ----------------]\n\u003c/pre\u003e\u003cp\u003eUnder high load, \u003ccode\u003e\u003ca\u003especSTM\u003c/a\u003e\u003c/code\u003e degrades less gracefully than \u003ccode\u003e\u003ca\u003espec\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e foreground: [---- g \u003e\u003e= f ----]\n spark:                        [------- a -------]\n foreground:                                     [-] (check if g' == a)\n foreground:                                       [--] (rollback)\n foreground:                                          [------ f a ------]\n overall:    [--------------------specSTM g f a ------------------------]\n\u003c/pre\u003e\u003cp\u003eCompare these to the timeline of \u003ccode\u003ef $! a\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e foreground: [------- a -------]\n foreground:                   [------ f a ------]\n\u003c/pre\u003e",
        "fct-module": "Control.Concurrent.Speculation",
        "fct-package": "speculation",
        "fct-signature": "STM a -\u003e (a -\u003e STM b) -\u003e a -\u003e STM b",
        "fct-source": "src/Control-Concurrent-Speculation.html#specSTM",
        "fct-type": "function",
        "title": "specSTM"
      },
      "index": {
        "description": "specSTM evaluates fg do while forcing then if then fg is returned Otherwise the side-effects of fg are rolled back and is evaluated is allowed to be monadic action so that we can kickstart the computation of earlier Under high load or when we are not using the parallel runtime the speculation is avoided to enable this to more closely approximate the runtime profile of spec If the argument is already evaluated we don bother to perform at all If good guess at the value of is available this is one way to induce parallelism in an otherwise sequential task However if the guess isn available more cheaply than the actual answer then this saves no work and if the guess is wrong you risk evaluating the function twice The best-case timeline looks like foreground spark foreground compare overall specSTM The worst-case timeline looks like foreground spark foreground check if foreground rollback foreground overall specSTM Under high load specSTM degrades less gracefully than spec foreground spark foreground check if foreground rollback foreground overall specSTM Compare these to the timeline of foreground foreground",
        "hierarchy": "Control Concurrent Speculation",
        "module": "Control.Concurrent.Speculation",
        "name": "specSTM",
        "normalized": "STM a-\u003e(a-\u003eSTM b)-\u003ea-\u003eSTM b",
        "package": "speculation",
        "partial": "STM",
        "signature": "STM a-\u003e(a-\u003eSTM b)-\u003ea-\u003eSTM b"
      }
    }
  }
]