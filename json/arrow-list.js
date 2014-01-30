[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowF.html#",
      "description": {
        "fct-module": "Control.Arrow.ArrowF",
        "fct-package": "arrow-list",
        "fct-signature": "module",
        "fct-source": "src/Control-Arrow-ArrowF.html",
        "fct-type": "module",
        "title": "ArrowF"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Arrow ArrowF",
        "module": "Control.Arrow.ArrowF",
        "name": "ArrowF",
        "normalized": "",
        "package": "arrow-list",
        "partial": "Arrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowF.html#t:ArrowF",
      "description": {
        "fct-descr": "\u003cp\u003eA type class for arrows that produce containers of results. The container\n arrow can be seen as a generalization for list arrows. Most operations\n assume the container type has an \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e, an \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e and a\n \u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.ArrowF",
        "fct-package": "arrow-list",
        "fct-signature": "class",
        "fct-source": "src/Control-Arrow-ArrowF.html#ArrowF",
        "fct-type": "class",
        "title": "ArrowF"
      },
      "index": {
        "description": "type class for arrows that produce containers of results The container arrow can be seen as generalization for list arrows Most operations assume the container type has an Applicative an Alternative and Foldable instance",
        "hierarchy": "Control Arrow ArrowF",
        "module": "Control.Arrow.ArrowF",
        "name": "ArrowF",
        "normalized": "",
        "package": "arrow-list",
        "partial": "Arrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowF.html#v:arrMF",
      "description": {
        "fct-descr": "\u003cp\u003eEmbed a monadic function returning an ordered list into a container arrow.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.ArrowF",
        "fct-package": "arrow-list",
        "fct-signature": "(a -\u003e m (f c)) -\u003e a `ar` c",
        "fct-source": "src/Control-Arrow-ArrowF.html#arrMF",
        "fct-type": "function",
        "title": "arrMF"
      },
      "index": {
        "description": "Embed monadic function returning an ordered list into container arrow",
        "hierarchy": "Control Arrow ArrowF",
        "module": "Control.Arrow.ArrowF",
        "name": "arrMF",
        "normalized": "(a-\u003eb(c d))-\u003ea e d",
        "package": "arrow-list",
        "partial": "MF",
        "signature": "(a-\u003em(f c))-\u003ea ar c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowF.html#v:concatA",
      "description": {
        "fct-descr": "\u003cp\u003eCollect the results of applying multiple arrows to the same input.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.ArrowF",
        "fct-package": "arrow-list",
        "fct-signature": "[a `ar` b] -\u003e a `ar` b",
        "fct-source": "src/Control-Arrow-ArrowF.html#concatA",
        "fct-type": "function",
        "title": "concatA"
      },
      "index": {
        "description": "Collect the results of applying multiple arrows to the same input",
        "hierarchy": "Control Arrow ArrowF",
        "module": "Control.Arrow.ArrowF",
        "name": "concatA",
        "normalized": "[a b c]-\u003ea b c",
        "package": "arrow-list",
        "partial": "",
        "signature": "[a ar b]-\u003ea ar b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowF.html#v:const",
      "description": {
        "fct-descr": "\u003cp\u003eSkip the input and produce a constant output.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.ArrowF",
        "fct-package": "arrow-list",
        "fct-signature": "b -\u003e a `ar` b",
        "fct-source": "src/Control-Arrow-ArrowF.html#const",
        "fct-type": "function",
        "title": "const"
      },
      "index": {
        "description": "Skip the input and produce constant output",
        "hierarchy": "Control Arrow ArrowF",
        "module": "Control.Arrow.ArrowF",
        "name": "const",
        "normalized": "a-\u003eb c a",
        "package": "arrow-list",
        "partial": "",
        "signature": "b-\u003ea ar b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowF.html#v:constF",
      "description": {
        "fct-descr": "\u003cp\u003eSkip the input and produce a constant output specified as a container.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.ArrowF",
        "fct-package": "arrow-list",
        "fct-signature": "f c -\u003e a `ar` c",
        "fct-source": "src/Control-Arrow-ArrowF.html#constF",
        "fct-type": "function",
        "title": "constF"
      },
      "index": {
        "description": "Skip the input and produce constant output specified as container",
        "hierarchy": "Control Arrow ArrowF",
        "module": "Control.Arrow.ArrowF",
        "name": "constF",
        "normalized": "a b-\u003ec d b",
        "package": "arrow-list",
        "partial": "",
        "signature": "f c-\u003ea ar c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowF.html#v:embed",
      "description": {
        "fct-module": "Control.Arrow.ArrowF",
        "fct-package": "arrow-list",
        "fct-signature": "embed",
        "fct-source": "src/Control-Arrow-ArrowF.html#embed",
        "fct-type": "method",
        "title": "embed"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Arrow ArrowF",
        "module": "Control.Arrow.ArrowF",
        "name": "embed",
        "normalized": "",
        "package": "arrow-list",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowF.html#v:filterA",
      "description": {
        "fct-descr": "\u003cp\u003eFilter the results of an arrow with a predicate arrow, when the filter\n condition produces results the input is accepted otherwise it is excluded.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.ArrowF",
        "fct-package": "arrow-list",
        "fct-signature": "(a `ar` c) -\u003e a `ar` a",
        "fct-source": "src/Control-Arrow-ArrowF.html#filterA",
        "fct-type": "function",
        "title": "filterA"
      },
      "index": {
        "description": "Filter the results of an arrow with predicate arrow when the filter condition produces results the input is accepted otherwise it is excluded",
        "hierarchy": "Control Arrow ArrowF",
        "module": "Control.Arrow.ArrowF",
        "name": "filterA",
        "normalized": "(a b c)-\u003ea b a",
        "package": "arrow-list",
        "partial": "",
        "signature": "(a ar c)-\u003ea ar a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowF.html#v:guards",
      "description": {
        "fct-descr": "\u003cp\u003eApply a container arrow only when a conditional arrow produces any\n results.  When the conditional produces no results the output arrow\n \u003cem\u003eproduces no results\u003c/em\u003e. The \u003cem\u003efirst\u003c/em\u003e input arrow is used as the conditional,\n this allow you to write: \u003ccode\u003e condition `guards` a \u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.ArrowF",
        "fct-package": "arrow-list",
        "fct-signature": "(a `ar` c) -\u003e (a `ar` b) -\u003e a `ar` b",
        "fct-source": "src/Control-Arrow-ArrowF.html#guards",
        "fct-type": "function",
        "title": "guards"
      },
      "index": {
        "description": "Apply container arrow only when conditional arrow produces any results When the conditional produces no results the output arrow produces no results The first input arrow is used as the conditional this allow you to write condition guards",
        "hierarchy": "Control Arrow ArrowF",
        "module": "Control.Arrow.ArrowF",
        "name": "guards",
        "normalized": "(a b c)-\u003e(a b d)-\u003ea b d",
        "package": "arrow-list",
        "partial": "",
        "signature": "(a ar c)-\u003e(a ar b)-\u003ea ar b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowF.html#v:ifA",
      "description": {
        "fct-descr": "\u003cp\u003eUse the result of a container arrow as a conditional, like an if-then-else\n arrow. When the first arrow produces any results the \u003cem\u003ethen\u003c/em\u003e arrow will be\n used, when the first arrow produces no results the \u003cem\u003eelse\u003c/em\u003e arrow will be\n used.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.ArrowF",
        "fct-package": "arrow-list",
        "fct-signature": "(a `ar` b) -\u003e (a `ar` t) -\u003e (a `ar` t) -\u003e a `ar` t",
        "fct-source": "src/Control-Arrow-ArrowF.html#ifA",
        "fct-type": "function",
        "title": "ifA"
      },
      "index": {
        "description": "Use the result of container arrow as conditional like an if-then-else arrow When the first arrow produces any results the then arrow will be used when the first arrow produces no results the else arrow will be used",
        "hierarchy": "Control Arrow ArrowF",
        "module": "Control.Arrow.ArrowF",
        "name": "ifA",
        "normalized": "(a b c)-\u003e(a b d)-\u003e(a b d)-\u003ea b d",
        "package": "arrow-list",
        "partial": "",
        "signature": "(a ar b)-\u003e(a ar t)-\u003e(a ar t)-\u003ea ar t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowF.html#v:isA",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a filtering container arrow by mapping a predicate function over the\n input. When the predicate returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e the input will be returned in the\n output container, when \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e the empty container is returned.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.ArrowF",
        "fct-package": "arrow-list",
        "fct-signature": "(a -\u003e Bool) -\u003e a `ar` a",
        "fct-source": "src/Control-Arrow-ArrowF.html#isA",
        "fct-type": "function",
        "title": "isA"
      },
      "index": {
        "description": "Create filtering container arrow by mapping predicate function over the input When the predicate returns True the input will be returned in the output container when False the empty container is returned",
        "hierarchy": "Control Arrow ArrowF",
        "module": "Control.Arrow.ArrowF",
        "name": "isA",
        "normalized": "(a-\u003eBool)-\u003ea b a",
        "package": "arrow-list",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003ea ar a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowF.html#v:mapF",
      "description": {
        "fct-descr": "\u003cp\u003eMap a function over the result collection of a container arrow.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.ArrowF",
        "fct-package": "arrow-list",
        "fct-signature": "(f b -\u003e f c) -\u003e (a `ar` b) -\u003e a `ar` c",
        "fct-source": "src/Control-Arrow-ArrowF.html#mapF",
        "fct-type": "function",
        "title": "mapF"
      },
      "index": {
        "description": "Map function over the result collection of container arrow",
        "hierarchy": "Control Arrow ArrowF",
        "module": "Control.Arrow.ArrowF",
        "name": "mapF",
        "normalized": "(a b-\u003ea c)-\u003e(d e b)-\u003ed e c",
        "package": "arrow-list",
        "partial": "",
        "signature": "(f b-\u003ef c)-\u003e(a ar b)-\u003ea ar c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowF.html#v:maybeA",
      "description": {
        "fct-descr": "\u003cp\u003eMap a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e input to a container output. When the Maybe is a \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n an empty container will be returned, \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e will result in a singleton\n container.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.ArrowF",
        "fct-package": "arrow-list",
        "fct-signature": "Maybe a `ar` a",
        "fct-source": "src/Control-Arrow-ArrowF.html#maybeA",
        "fct-type": "function",
        "title": "maybeA"
      },
      "index": {
        "description": "Map Maybe input to container output When the Maybe is Nothing an empty container will be returned Just will result in singleton container",
        "hierarchy": "Control Arrow ArrowF",
        "module": "Control.Arrow.ArrowF",
        "name": "maybeA",
        "normalized": "",
        "package": "arrow-list",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowF.html#v:none",
      "description": {
        "fct-descr": "\u003cp\u003eIgnore the input and produce no results. Like \u003ccode\u003e\u003ca\u003ezeroArrow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.ArrowF",
        "fct-package": "arrow-list",
        "fct-signature": "a `ar` b",
        "fct-source": "src/Control-Arrow-ArrowF.html#none",
        "fct-type": "function",
        "title": "none"
      },
      "index": {
        "description": "Ignore the input and produce no results Like zeroArrow",
        "hierarchy": "Control Arrow ArrowF",
        "module": "Control.Arrow.ArrowF",
        "name": "none",
        "normalized": "",
        "package": "arrow-list",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowF.html#v:notA",
      "description": {
        "fct-descr": "\u003cp\u003eNegation container arrow. Only accept the input when the condition\n produces no output.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.ArrowF",
        "fct-package": "arrow-list",
        "fct-signature": "(a `ar` c) -\u003e a `ar` a",
        "fct-source": "src/Control-Arrow-ArrowF.html#notA",
        "fct-type": "function",
        "title": "notA"
      },
      "index": {
        "description": "Negation container arrow Only accept the input when the condition produces no output",
        "hierarchy": "Control Arrow ArrowF",
        "module": "Control.Arrow.ArrowF",
        "name": "notA",
        "normalized": "(a b c)-\u003ea b a",
        "package": "arrow-list",
        "partial": "",
        "signature": "(a ar c)-\u003ea ar a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowF.html#v:observe",
      "description": {
        "fct-module": "Control.Arrow.ArrowF",
        "fct-package": "arrow-list",
        "fct-signature": "observe",
        "fct-source": "src/Control-Arrow-ArrowF.html#observe",
        "fct-type": "method",
        "title": "observe"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Arrow ArrowF",
        "module": "Control.Arrow.ArrowF",
        "name": "observe",
        "normalized": "",
        "package": "arrow-list",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowF.html#v:optional",
      "description": {
        "fct-descr": "\u003cp\u003eApply a container arrow, when there are no results a \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e will be\n returned, otherwise the results will be wrapped in a \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e. This function\n always produces result.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.ArrowF",
        "fct-package": "arrow-list",
        "fct-signature": "(a `ar` b) -\u003e a `ar` Maybe b",
        "fct-source": "src/Control-Arrow-ArrowF.html#optional",
        "fct-type": "function",
        "title": "optional"
      },
      "index": {
        "description": "Apply container arrow when there are no results Nothing will be returned otherwise the results will be wrapped in Just This function always produces result",
        "hierarchy": "Control Arrow ArrowF",
        "module": "Control.Arrow.ArrowF",
        "name": "optional",
        "normalized": "(a b c)-\u003ea b Maybe c",
        "package": "arrow-list",
        "partial": "",
        "signature": "(a ar b)-\u003ea ar Maybe b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowF.html#v:orElse",
      "description": {
        "fct-descr": "\u003cp\u003eApply the input arrow, when the arrow does not produces any results the\n second fallback arrow is applied.\n Likely written infix like this \u003ccode\u003e a `orElse` b \u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.ArrowF",
        "fct-package": "arrow-list",
        "fct-signature": "(a `ar` b) -\u003e (a `ar` b) -\u003e a `ar` b",
        "fct-source": "src/Control-Arrow-ArrowF.html#orElse",
        "fct-type": "function",
        "title": "orElse"
      },
      "index": {
        "description": "Apply the input arrow when the arrow does not produces any results the second fallback arrow is applied Likely written infix like this orElse",
        "hierarchy": "Control Arrow ArrowF",
        "module": "Control.Arrow.ArrowF",
        "name": "orElse",
        "normalized": "(a b c)-\u003e(a b c)-\u003ea b c",
        "package": "arrow-list",
        "partial": "Else",
        "signature": "(a ar b)-\u003e(a ar b)-\u003ea ar b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowF.html#v:plus",
      "description": {
        "fct-descr": "\u003cp\u003eJoin the results of two arrows, like (\u003ca\u003e+\u003c/a\u003e) from ArrowPlus.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.ArrowF",
        "fct-package": "arrow-list",
        "fct-signature": "(a `ar` b) -\u003e (a `ar` b) -\u003e a `ar` b",
        "fct-source": "src/Control-Arrow-ArrowF.html#plus",
        "fct-type": "function",
        "title": "plus"
      },
      "index": {
        "description": "Join the results of two arrows like from ArrowPlus",
        "hierarchy": "Control Arrow ArrowF",
        "module": "Control.Arrow.ArrowF",
        "name": "plus",
        "normalized": "(a b c)-\u003e(a b c)-\u003ea b c",
        "package": "arrow-list",
        "partial": "",
        "signature": "(a ar b)-\u003e(a ar b)-\u003ea ar b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowF.html#v:results",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e indicating whether the input arrow produces a container\n with any results.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.ArrowF",
        "fct-package": "arrow-list",
        "fct-signature": "(a `ar` b) -\u003e a `ar` Bool",
        "fct-source": "src/Control-Arrow-ArrowF.html#results",
        "fct-type": "function",
        "title": "results"
      },
      "index": {
        "description": "Returns Bool indicating whether the input arrow produces container with any results",
        "hierarchy": "Control Arrow ArrowF",
        "module": "Control.Arrow.ArrowF",
        "name": "results",
        "normalized": "(a b c)-\u003ea b Bool",
        "package": "arrow-list",
        "partial": "",
        "signature": "(a ar b)-\u003ea ar Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowF.html#v:unite",
      "description": {
        "fct-descr": "\u003cp\u003eTake the output of an arrow producing two results and concatenate them\n into the result of the container arrow.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.ArrowF",
        "fct-package": "arrow-list",
        "fct-signature": "(b, b) `ar` b",
        "fct-source": "src/Control-Arrow-ArrowF.html#unite",
        "fct-type": "function",
        "title": "unite"
      },
      "index": {
        "description": "Take the output of an arrow producing two results and concatenate them into the result of the container arrow",
        "hierarchy": "Control Arrow ArrowF",
        "module": "Control.Arrow.ArrowF",
        "name": "unite",
        "normalized": "(a,a)b a",
        "package": "arrow-list",
        "partial": "",
        "signature": "(b,b)ar b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowF.html#v:when",
      "description": {
        "fct-descr": "\u003cp\u003eApply a container arrow only when a conditional arrow produces any\n results.  When the conditional produces no results the output arrow /behaves\n like the identity\u003cem\u003e. The \u003c/em\u003esecond/ input arrow is used as the conditional,\n this allow you to write: \u003ccode\u003e a `when` condition \u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.ArrowF",
        "fct-package": "arrow-list",
        "fct-signature": "(a `ar` a) -\u003e (a `ar` c) -\u003e a `ar` a",
        "fct-source": "src/Control-Arrow-ArrowF.html#when",
        "fct-type": "function",
        "title": "when"
      },
      "index": {
        "description": "Apply container arrow only when conditional arrow produces any results When the conditional produces no results the output arrow behaves like the identity The second input arrow is used as the conditional this allow you to write when condition",
        "hierarchy": "Control Arrow ArrowF",
        "module": "Control.Arrow.ArrowF",
        "name": "when",
        "normalized": "(a b a)-\u003e(a b c)-\u003ea b a",
        "package": "arrow-list",
        "partial": "",
        "signature": "(a ar a)-\u003e(a ar c)-\u003ea ar a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowKleisli.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eArrowKleisli\u003c/a\u003e\u003c/code\u003e type class allows for embedding monadic operations in\nKleisli arrows.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Arrow.ArrowKleisli",
        "fct-package": "arrow-list",
        "fct-signature": "module",
        "fct-source": "src/Control-Arrow-ArrowKleisli.html",
        "fct-type": "module",
        "title": "ArrowKleisli"
      },
      "index": {
        "description": "The ArrowKleisli type class allows for embedding monadic operations in Kleisli arrows",
        "hierarchy": "Control Arrow ArrowKleisli",
        "module": "Control.Arrow.ArrowKleisli",
        "name": "ArrowKleisli",
        "normalized": "",
        "package": "arrow-list",
        "partial": "Arrow Kleisli",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowKleisli.html#t:ArrowKleisli",
      "description": {
        "fct-module": "Control.Arrow.ArrowKleisli",
        "fct-package": "arrow-list",
        "fct-signature": "class",
        "fct-source": "src/Control-Arrow-ArrowKleisli.html#ArrowKleisli",
        "fct-type": "class",
        "title": "ArrowKleisli"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Arrow ArrowKleisli",
        "module": "Control.Arrow.ArrowKleisli",
        "name": "ArrowKleisli",
        "normalized": "",
        "package": "arrow-list",
        "partial": "Arrow Kleisli",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowKleisli.html#v:arrIO",
      "description": {
        "fct-module": "Control.Arrow.ArrowKleisli",
        "fct-package": "arrow-list",
        "fct-signature": "(a -\u003e IO b) -\u003e a `ar` b",
        "fct-source": "src/Control-Arrow-ArrowKleisli.html#arrIO",
        "fct-type": "function",
        "title": "arrIO"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Arrow ArrowKleisli",
        "module": "Control.Arrow.ArrowKleisli",
        "name": "arrIO",
        "normalized": "(a-\u003eIO b)-\u003ea c b",
        "package": "arrow-list",
        "partial": "IO",
        "signature": "(a-\u003eIO b)-\u003ea ar b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowKleisli.html#v:arrM",
      "description": {
        "fct-module": "Control.Arrow.ArrowKleisli",
        "fct-package": "arrow-list",
        "fct-signature": "(a -\u003e m b) -\u003e a `ar` b",
        "fct-source": "src/Control-Arrow-ArrowKleisli.html#arrM",
        "fct-type": "method",
        "title": "arrM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Arrow ArrowKleisli",
        "module": "Control.Arrow.ArrowKleisli",
        "name": "arrM",
        "normalized": "(a-\u003eb c)-\u003ea d c",
        "package": "arrow-list",
        "partial": "",
        "signature": "(a-\u003em b)-\u003ea ar b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowKleisli.html#v:constM",
      "description": {
        "fct-module": "Control.Arrow.ArrowKleisli",
        "fct-package": "arrow-list",
        "fct-signature": "m b -\u003e a `ar` b",
        "fct-source": "src/Control-Arrow-ArrowKleisli.html#constM",
        "fct-type": "function",
        "title": "constM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Arrow ArrowKleisli",
        "module": "Control.Arrow.ArrowKleisli",
        "name": "constM",
        "normalized": "a b-\u003ec d b",
        "package": "arrow-list",
        "partial": "",
        "signature": "m b-\u003ea ar b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowKleisli.html#v:effect",
      "description": {
        "fct-module": "Control.Arrow.ArrowKleisli",
        "fct-package": "arrow-list",
        "fct-signature": "m () -\u003e a `ar` a",
        "fct-source": "src/Control-Arrow-ArrowKleisli.html#effect",
        "fct-type": "function",
        "title": "effect"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Arrow ArrowKleisli",
        "module": "Control.Arrow.ArrowKleisli",
        "name": "effect",
        "normalized": "a()-\u003eb c b",
        "package": "arrow-list",
        "partial": "",
        "signature": "m()-\u003ea ar a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowList.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eArrowList\u003c/a\u003e\u003c/code\u003e type class, and a collection of list arrow related functions.\nThis typeclass can be used to embed functions producing multiple outputs into a\nan arrow.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Arrow.ArrowList",
        "fct-package": "arrow-list",
        "fct-signature": "module",
        "fct-source": "src/Control-Arrow-ArrowList.html",
        "fct-type": "module",
        "title": "ArrowList"
      },
      "index": {
        "description": "The ArrowList type class and collection of list arrow related functions This typeclass can be used to embed functions producing multiple outputs into an arrow",
        "hierarchy": "Control Arrow ArrowList",
        "module": "Control.Arrow.ArrowList",
        "name": "ArrowList",
        "normalized": "",
        "package": "arrow-list",
        "partial": "Arrow List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowList.html#t:ArrowList",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eArrowList\u003c/a\u003e\u003c/code\u003e class represents two possible actions:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Lifting functions from one value to a list of values into a list arrow.\n\u003c/li\u003e\u003cli\u003e Mapping a function over the result list of a list arrow.\n\u003c/li\u003e\u003c/ol\u003e",
        "fct-module": "Control.Arrow.ArrowList",
        "fct-package": "arrow-list",
        "fct-signature": "class",
        "fct-source": "src/Control-Arrow-ArrowList.html#ArrowList",
        "fct-type": "class",
        "title": "ArrowList"
      },
      "index": {
        "description": "The ArrowList class represents two possible actions Lifting functions from one value to list of values into list arrow Mapping function over the result list of list arrow",
        "hierarchy": "Control Arrow ArrowList",
        "module": "Control.Arrow.ArrowList",
        "name": "ArrowList",
        "normalized": "",
        "package": "arrow-list",
        "partial": "Arrow List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowList.html#v:arrL",
      "description": {
        "fct-module": "Control.Arrow.ArrowList",
        "fct-package": "arrow-list",
        "fct-signature": "(a -\u003e [b]) -\u003e a `ar` b",
        "fct-source": "src/Control-Arrow-ArrowList.html#arrL",
        "fct-type": "method",
        "title": "arrL"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Arrow ArrowList",
        "module": "Control.Arrow.ArrowList",
        "name": "arrL",
        "normalized": "(a-\u003e[b])-\u003ea c b",
        "package": "arrow-list",
        "partial": "",
        "signature": "(a-\u003e[b])-\u003ea ar b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowList.html#v:concatA",
      "description": {
        "fct-descr": "\u003cp\u003eCollect the results of applying multiple arrows to the same input.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.ArrowList",
        "fct-package": "arrow-list",
        "fct-signature": "[a `ar` b] -\u003e a `ar` b",
        "fct-source": "src/Control-Arrow-ArrowList.html#concatA",
        "fct-type": "function",
        "title": "concatA"
      },
      "index": {
        "description": "Collect the results of applying multiple arrows to the same input",
        "hierarchy": "Control Arrow ArrowList",
        "module": "Control.Arrow.ArrowList",
        "name": "concatA",
        "normalized": "[a b c]-\u003ea b c",
        "package": "arrow-list",
        "partial": "",
        "signature": "[a ar b]-\u003ea ar b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowList.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e indicating whether the input arrow produce any results.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.ArrowList",
        "fct-package": "arrow-list",
        "fct-signature": "(a `ar` b) -\u003e a `ar` Bool",
        "fct-source": "src/Control-Arrow-ArrowList.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "Returns Bool indicating whether the input arrow produce any results",
        "hierarchy": "Control Arrow ArrowList",
        "module": "Control.Arrow.ArrowList",
        "name": "empty",
        "normalized": "(a b c)-\u003ea b Bool",
        "package": "arrow-list",
        "partial": "",
        "signature": "(a ar b)-\u003ea ar Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowList.html#v:filterA",
      "description": {
        "fct-descr": "\u003cp\u003eFilter the results of an arrow with a predicate arrow, when the filter\n condition produces results the input is accepted otherwise it is excluded.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.ArrowList",
        "fct-package": "arrow-list",
        "fct-signature": "(a `ar` c) -\u003e a `ar` a",
        "fct-source": "src/Control-Arrow-ArrowList.html#filterA",
        "fct-type": "function",
        "title": "filterA"
      },
      "index": {
        "description": "Filter the results of an arrow with predicate arrow when the filter condition produces results the input is accepted otherwise it is excluded",
        "hierarchy": "Control Arrow ArrowList",
        "module": "Control.Arrow.ArrowList",
        "name": "filterA",
        "normalized": "(a b c)-\u003ea b a",
        "package": "arrow-list",
        "partial": "",
        "signature": "(a ar c)-\u003ea ar a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowList.html#v:guards",
      "description": {
        "fct-descr": "\u003cp\u003eApply a list arrow only when a conditional arrow produces any results.\n When the conditional produces no results the output arrow \u003cem\u003eproduces no results\u003c/em\u003e.\n The \u003cem\u003efirst\u003c/em\u003e input arrow is used as the conditional, this allow you\n to write: \u003ccode\u003e c `guards` a \u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.ArrowList",
        "fct-package": "arrow-list",
        "fct-signature": "(a `ar` c)-\u003e (a `ar` b)-\u003e a `ar` b",
        "fct-type": "function",
        "title": "guards"
      },
      "index": {
        "description": "Apply list arrow only when conditional arrow produces any results When the conditional produces no results the output arrow produces no results The first input arrow is used as the conditional this allow you to write guards",
        "hierarchy": "Control Arrow ArrowList",
        "module": "Control.Arrow.ArrowList",
        "name": "guards",
        "normalized": "(a b c)-\u003e(a b d)-\u003ea b d",
        "package": "arrow-list",
        "partial": "",
        "signature": "(a ar c)-\u003e(a ar b)-\u003ea ar b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowList.html#v:ifA",
      "description": {
        "fct-descr": "\u003cp\u003eUse the result a list arrow as a conditional, like an if-then-else arrow.\n When the first arrow produces any results the \u003cem\u003ethen\u003c/em\u003e arrow will be used,\n when the first arrow produces no results the \u003cem\u003eelse\u003c/em\u003e arrow will be used.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.ArrowList",
        "fct-package": "arrow-list",
        "fct-signature": "(a `ar` c)-\u003e (a `ar` b)-\u003e (a `ar` b)-\u003e a `ar` b",
        "fct-type": "function",
        "title": "ifA"
      },
      "index": {
        "description": "Use the result list arrow as conditional like an if-then-else arrow When the first arrow produces any results the then arrow will be used when the first arrow produces no results the else arrow will be used",
        "hierarchy": "Control Arrow ArrowList",
        "module": "Control.Arrow.ArrowList",
        "name": "ifA",
        "normalized": "(a b c)-\u003e(a b d)-\u003e(a b d)-\u003ea b d",
        "package": "arrow-list",
        "partial": "",
        "signature": "(a ar c)-\u003e(a ar b)-\u003e(a ar b)-\u003ea ar b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowList.html#v:isA",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a filtering list arrow by mapping a predicate function over the\n input. When the predicate returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e the input will be returned in the\n output list, when \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e the empty list is returned.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.ArrowList",
        "fct-package": "arrow-list",
        "fct-signature": "(a -\u003e Bool) -\u003e a `ar` a",
        "fct-source": "src/Control-Arrow-ArrowList.html#isA",
        "fct-type": "function",
        "title": "isA"
      },
      "index": {
        "description": "Create filtering list arrow by mapping predicate function over the input When the predicate returns True the input will be returned in the output list when False the empty list is returned",
        "hierarchy": "Control Arrow ArrowList",
        "module": "Control.Arrow.ArrowList",
        "name": "isA",
        "normalized": "(a-\u003eBool)-\u003ea b a",
        "package": "arrow-list",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003ea ar a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowList.html#v:list",
      "description": {
        "fct-descr": "\u003cp\u003eCollect the entire results of an list arrow as a singleton value in the\n result list.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.ArrowList",
        "fct-package": "arrow-list",
        "fct-signature": "(a `ar` b) -\u003e a `ar` [b]",
        "fct-source": "src/Control-Arrow-ArrowList.html#list",
        "fct-type": "function",
        "title": "list"
      },
      "index": {
        "description": "Collect the entire results of an list arrow as singleton value in the result list",
        "hierarchy": "Control Arrow ArrowList",
        "module": "Control.Arrow.ArrowList",
        "name": "list",
        "normalized": "(a b c)-\u003ea b[c]",
        "package": "arrow-list",
        "partial": "",
        "signature": "(a ar b)-\u003ea ar[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowList.html#v:mapL",
      "description": {
        "fct-module": "Control.Arrow.ArrowList",
        "fct-package": "arrow-list",
        "fct-signature": "([b] -\u003e [c]) -\u003e (a `ar` b) -\u003e a `ar` c",
        "fct-source": "src/Control-Arrow-ArrowList.html#mapL",
        "fct-type": "method",
        "title": "mapL"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Arrow ArrowList",
        "module": "Control.Arrow.ArrowList",
        "name": "mapL",
        "normalized": "([a]-\u003e[b])-\u003e(c d a)-\u003ec d b",
        "package": "arrow-list",
        "partial": "",
        "signature": "([b]-\u003e[c])-\u003e(a ar b)-\u003ea ar c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowList.html#v:maybeL",
      "description": {
        "fct-descr": "\u003cp\u003eMap a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e input to a list output. When the Maybe is a \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e an\n empty list will be returned, \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e will result in a singleton list.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.ArrowList",
        "fct-package": "arrow-list",
        "fct-signature": "Maybe a `ar` a",
        "fct-source": "src/Control-Arrow-ArrowList.html#maybeL",
        "fct-type": "function",
        "title": "maybeL"
      },
      "index": {
        "description": "Map Maybe input to list output When the Maybe is Nothing an empty list will be returned Just will result in singleton list",
        "hierarchy": "Control Arrow ArrowList",
        "module": "Control.Arrow.ArrowList",
        "name": "maybeL",
        "normalized": "",
        "package": "arrow-list",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowList.html#v:none",
      "description": {
        "fct-descr": "\u003cp\u003eIgnore the input and produce no results. Like \u003ccode\u003e\u003ca\u003ezeroArrow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.ArrowList",
        "fct-package": "arrow-list",
        "fct-signature": "a `ar` b",
        "fct-source": "src/Control-Arrow-ArrowList.html#none",
        "fct-type": "function",
        "title": "none"
      },
      "index": {
        "description": "Ignore the input and produce no results Like zeroArrow",
        "hierarchy": "Control Arrow ArrowList",
        "module": "Control.Arrow.ArrowList",
        "name": "none",
        "normalized": "",
        "package": "arrow-list",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowList.html#v:notA",
      "description": {
        "fct-descr": "\u003cp\u003eNegation list arrow. Only accept the input when the condition produces no\n output.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.ArrowList",
        "fct-package": "arrow-list",
        "fct-signature": "(a `ar` c) -\u003e a `ar` a",
        "fct-source": "src/Control-Arrow-ArrowList.html#notA",
        "fct-type": "function",
        "title": "notA"
      },
      "index": {
        "description": "Negation list arrow Only accept the input when the condition produces no output",
        "hierarchy": "Control Arrow ArrowList",
        "module": "Control.Arrow.ArrowList",
        "name": "notA",
        "normalized": "(a b c)-\u003ea b a",
        "package": "arrow-list",
        "partial": "",
        "signature": "(a ar c)-\u003ea ar a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowList.html#v:optional",
      "description": {
        "fct-descr": "\u003cp\u003eApply a list arrow, when there are no results a \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e will be\n returned, otherwise the results will be wrapped in a \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e. This function\n always produces result.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.ArrowList",
        "fct-package": "arrow-list",
        "fct-signature": "(a `ar` b) -\u003e a `ar` Maybe b",
        "fct-source": "src/Control-Arrow-ArrowList.html#optional",
        "fct-type": "function",
        "title": "optional"
      },
      "index": {
        "description": "Apply list arrow when there are no results Nothing will be returned otherwise the results will be wrapped in Just This function always produces result",
        "hierarchy": "Control Arrow ArrowList",
        "module": "Control.Arrow.ArrowList",
        "name": "optional",
        "normalized": "(a b c)-\u003ea b Maybe c",
        "package": "arrow-list",
        "partial": "",
        "signature": "(a ar b)-\u003ea ar Maybe b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowList.html#v:orElse",
      "description": {
        "fct-descr": "\u003cp\u003eApply the input arrow, when the arrow does not produces any results the\n second fallback arrow is applied.\n Likely written infix like this \u003ccode\u003e a `orElse` b \u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.ArrowList",
        "fct-package": "arrow-list",
        "fct-signature": "(a `ar` b) -\u003e (a `ar` b) -\u003e a `ar` b",
        "fct-source": "src/Control-Arrow-ArrowList.html#orElse",
        "fct-type": "function",
        "title": "orElse"
      },
      "index": {
        "description": "Apply the input arrow when the arrow does not produces any results the second fallback arrow is applied Likely written infix like this orElse",
        "hierarchy": "Control Arrow ArrowList",
        "module": "Control.Arrow.ArrowList",
        "name": "orElse",
        "normalized": "(a b c)-\u003e(a b c)-\u003ea b c",
        "package": "arrow-list",
        "partial": "Else",
        "signature": "(a ar b)-\u003e(a ar b)-\u003ea ar b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowList.html#v:unite",
      "description": {
        "fct-descr": "\u003cp\u003eTake the output of an arrow producing two results and concatenate them\n into the result of the list arrow.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.ArrowList",
        "fct-package": "arrow-list",
        "fct-signature": "(a `ar` (b, b)) -\u003e a `ar` b",
        "fct-source": "src/Control-Arrow-ArrowList.html#unite",
        "fct-type": "function",
        "title": "unite"
      },
      "index": {
        "description": "Take the output of an arrow producing two results and concatenate them into the result of the list arrow",
        "hierarchy": "Control Arrow ArrowList",
        "module": "Control.Arrow.ArrowList",
        "name": "unite",
        "normalized": "(a b(c,c))-\u003ea b c",
        "package": "arrow-list",
        "partial": "",
        "signature": "(a ar(b,b))-\u003ea ar b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowList.html#v:unlist",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a list arrow of an input list.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.ArrowList",
        "fct-package": "arrow-list",
        "fct-signature": "[b] `ar` b",
        "fct-source": "src/Control-Arrow-ArrowList.html#unlist",
        "fct-type": "function",
        "title": "unlist"
      },
      "index": {
        "description": "Create list arrow of an input list",
        "hierarchy": "Control Arrow ArrowList",
        "module": "Control.Arrow.ArrowList",
        "name": "unlist",
        "normalized": "[a]b a",
        "package": "arrow-list",
        "partial": "",
        "signature": "[b]ar b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowList.html#v:when",
      "description": {
        "fct-descr": "\u003cp\u003eApply a list arrow only when a conditional arrow produces any results.\n When the conditional produces no results the output arrow \u003cem\u003ebehaves like the identity\u003c/em\u003e.\n The \u003cem\u003esecond\u003c/em\u003e input arrow is used as the conditional, this allow\n you to write: \u003ccode\u003e a `when` c \u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.ArrowList",
        "fct-package": "arrow-list",
        "fct-signature": "(a `ar` a)-\u003e (a `ar` b)-\u003e a `ar` a",
        "fct-type": "function",
        "title": "when"
      },
      "index": {
        "description": "Apply list arrow only when conditional arrow produces any results When the conditional produces no results the output arrow behaves like the identity The second input arrow is used as the conditional this allow you to write when",
        "hierarchy": "Control Arrow ArrowList",
        "module": "Control.Arrow.ArrowList",
        "name": "when",
        "normalized": "(a b a)-\u003e(a b c)-\u003ea b a",
        "package": "arrow-list",
        "partial": "",
        "signature": "(a ar a)-\u003e(a ar b)-\u003ea ar a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-List.html#",
      "description": {
        "fct-module": "Control.Arrow.List",
        "fct-package": "arrow-list",
        "fct-signature": "module",
        "fct-source": "src/Control-Arrow-List.html",
        "fct-type": "module",
        "title": "List"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Arrow List",
        "module": "Control.Arrow.List",
        "name": "List",
        "normalized": "",
        "package": "arrow-list",
        "partial": "List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-List.html#t:ListArrow",
      "description": {
        "fct-module": "Control.Arrow.List",
        "fct-package": "arrow-list",
        "fct-signature": "type",
        "fct-source": "src/Control-Arrow-List.html#ListArrow",
        "fct-type": "type",
        "title": "ListArrow"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Arrow List",
        "module": "Control.Arrow.List",
        "name": "ListArrow",
        "normalized": "",
        "package": "arrow-list",
        "partial": "List Arrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-List.html#t:ListTArrow",
      "description": {
        "fct-module": "Control.Arrow.List",
        "fct-package": "arrow-list",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Arrow-List.html#ListTArrow",
        "fct-type": "newtype",
        "title": "ListTArrow"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Arrow List",
        "module": "Control.Arrow.List",
        "name": "ListTArrow",
        "normalized": "",
        "package": "arrow-list",
        "partial": "List TArrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-List.html#v:ListTArrow",
      "description": {
        "fct-module": "Control.Arrow.List",
        "fct-package": "arrow-list",
        "fct-signature": "ListTArrow",
        "fct-source": "src/Control-Arrow-List.html#ListTArrow",
        "fct-type": "function",
        "title": "ListTArrow"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Arrow List",
        "module": "Control.Arrow.List",
        "name": "ListTArrow",
        "normalized": "",
        "package": "arrow-list",
        "partial": "List TArrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-List.html#v:arrML",
      "description": {
        "fct-module": "Control.Arrow.List",
        "fct-package": "arrow-list",
        "fct-signature": "(a -\u003e m [b]) -\u003e a `ar` b",
        "fct-source": "src/Control-Arrow-List.html#arrML",
        "fct-type": "function",
        "title": "arrML"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Arrow List",
        "module": "Control.Arrow.List",
        "name": "arrML",
        "normalized": "(a-\u003eb[c])-\u003ea d c",
        "package": "arrow-list",
        "partial": "ML",
        "signature": "(a-\u003em[b])-\u003ea ar b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-List.html#v:runListArrow",
      "description": {
        "fct-module": "Control.Arrow.List",
        "fct-package": "arrow-list",
        "fct-signature": "ListArrow a b -\u003e a -\u003e [b]",
        "fct-source": "src/Control-Arrow-List.html#runListArrow",
        "fct-type": "function",
        "title": "runListArrow"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Arrow List",
        "module": "Control.Arrow.List",
        "name": "runListArrow",
        "normalized": "ListArrow a b-\u003ea-\u003e[b]",
        "package": "arrow-list",
        "partial": "List Arrow",
        "signature": "ListArrow a b-\u003ea-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-List.html#v:runListTArrow",
      "description": {
        "fct-module": "Control.Arrow.List",
        "fct-package": "arrow-list",
        "fct-signature": "ListTArrow m a b -\u003e a -\u003e m [b]",
        "fct-source": "src/Control-Arrow-List.html#runListTArrow",
        "fct-type": "function",
        "title": "runListTArrow"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Arrow List",
        "module": "Control.Arrow.List",
        "name": "runListTArrow",
        "normalized": "ListTArrow a b c-\u003eb-\u003ea[c]",
        "package": "arrow-list",
        "partial": "List TArrow",
        "signature": "ListTArrow m a b-\u003ea-\u003em[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-List.html#v:runListTArrow-39-",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Arrow.List",
        "fct-package": "arrow-list",
        "fct-signature": "Kleisli (ListT m) a b",
        "fct-source": "src/Control-Arrow-List.html#ListTArrow",
        "fct-type": "function",
        "title": "runListTArrow'"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Arrow List",
        "module": "Control.Arrow.List",
        "name": "runListTArrow'",
        "normalized": "",
        "package": "arrow-list",
        "partial": "List TArrow'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-Sequence.html#",
      "description": {
        "fct-module": "Control.Arrow.Sequence",
        "fct-package": "arrow-list",
        "fct-signature": "module",
        "fct-source": "src/Control-Arrow-Sequence.html",
        "fct-type": "module",
        "title": "Sequence"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Arrow Sequence",
        "module": "Control.Arrow.Sequence",
        "name": "Sequence",
        "normalized": "",
        "package": "arrow-list",
        "partial": "Sequence",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-Sequence.html#t:SeqArrow",
      "description": {
        "fct-module": "Control.Arrow.Sequence",
        "fct-package": "arrow-list",
        "fct-signature": "type",
        "fct-source": "src/Control-Arrow-Sequence.html#SeqArrow",
        "fct-type": "type",
        "title": "SeqArrow"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Arrow Sequence",
        "module": "Control.Arrow.Sequence",
        "name": "SeqArrow",
        "normalized": "",
        "package": "arrow-list",
        "partial": "Seq Arrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-Sequence.html#t:SeqTArrow",
      "description": {
        "fct-module": "Control.Arrow.Sequence",
        "fct-package": "arrow-list",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Arrow-Sequence.html#SeqTArrow",
        "fct-type": "newtype",
        "title": "SeqTArrow"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Arrow Sequence",
        "module": "Control.Arrow.Sequence",
        "name": "SeqTArrow",
        "normalized": "",
        "package": "arrow-list",
        "partial": "Seq TArrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-Sequence.html#v:SeqTArrow",
      "description": {
        "fct-module": "Control.Arrow.Sequence",
        "fct-package": "arrow-list",
        "fct-signature": "SeqTArrow",
        "fct-source": "src/Control-Arrow-Sequence.html#SeqTArrow",
        "fct-type": "function",
        "title": "SeqTArrow"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Arrow Sequence",
        "module": "Control.Arrow.Sequence",
        "name": "SeqTArrow",
        "normalized": "",
        "package": "arrow-list",
        "partial": "Seq TArrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-Sequence.html#v:runSeqArrow",
      "description": {
        "fct-module": "Control.Arrow.Sequence",
        "fct-package": "arrow-list",
        "fct-signature": "SeqArrow a b -\u003e a -\u003e Seq b",
        "fct-source": "src/Control-Arrow-Sequence.html#runSeqArrow",
        "fct-type": "function",
        "title": "runSeqArrow"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Arrow Sequence",
        "module": "Control.Arrow.Sequence",
        "name": "runSeqArrow",
        "normalized": "SeqArrow a b-\u003ea-\u003eSeq b",
        "package": "arrow-list",
        "partial": "Seq Arrow",
        "signature": "SeqArrow a b-\u003ea-\u003eSeq b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-Sequence.html#v:runSeqTArrow",
      "description": {
        "fct-module": "Control.Arrow.Sequence",
        "fct-package": "arrow-list",
        "fct-signature": "SeqTArrow m a b -\u003e a -\u003e m (Seq b)",
        "fct-source": "src/Control-Arrow-Sequence.html#runSeqTArrow",
        "fct-type": "function",
        "title": "runSeqTArrow"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Arrow Sequence",
        "module": "Control.Arrow.Sequence",
        "name": "runSeqTArrow",
        "normalized": "SeqTArrow a b c-\u003eb-\u003ea(Seq c)",
        "package": "arrow-list",
        "partial": "Seq TArrow",
        "signature": "SeqTArrow m a b-\u003ea-\u003em(Seq b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-Sequence.html#v:runSeqTArrow-39-",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Arrow.Sequence",
        "fct-package": "arrow-list",
        "fct-signature": "Kleisli (SeqT m) a b",
        "fct-source": "src/Control-Arrow-Sequence.html#SeqTArrow",
        "fct-type": "function",
        "title": "runSeqTArrow'"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Arrow Sequence",
        "module": "Control.Arrow.Sequence",
        "name": "runSeqTArrow'",
        "normalized": "",
        "package": "arrow-list",
        "partial": "Seq TArrow'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Monad-Sequence.html#",
      "description": {
        "fct-module": "Control.Monad.Sequence",
        "fct-package": "arrow-list",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Sequence.html",
        "fct-type": "module",
        "title": "Sequence"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Sequence",
        "module": "Control.Monad.Sequence",
        "name": "Sequence",
        "normalized": "",
        "package": "arrow-list",
        "partial": "Sequence",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Monad-Sequence.html#t:SeqT",
      "description": {
        "fct-descr": "\u003cp\u003eParameterizable \u003ccode\u003eSequence\u003c/code\u003e monad, with an inner monad. The semantics of\n \u003ccode\u003e\u003ca\u003eSeqT\u003c/a\u003e\u003c/code\u003e are comparable to that of \u003ccode\u003eListT\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote:\u003c/em\u003e Like the ListT monad, this does not yield a monad unless the\n argument monad is commutative.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Sequence",
        "fct-package": "arrow-list",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Sequence.html#SeqT",
        "fct-type": "newtype",
        "title": "SeqT"
      },
      "index": {
        "description": "Parameterizable Sequence monad with an inner monad The semantics of SeqT are comparable to that of ListT Note Like the ListT monad this does not yield monad unless the argument monad is commutative",
        "hierarchy": "Control Monad Sequence",
        "module": "Control.Monad.Sequence",
        "name": "SeqT",
        "normalized": "",
        "package": "arrow-list",
        "partial": "Seq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Monad-Sequence.html#v:SeqT",
      "description": {
        "fct-module": "Control.Monad.Sequence",
        "fct-package": "arrow-list",
        "fct-signature": "SeqT",
        "fct-source": "src/Control-Monad-Sequence.html#SeqT",
        "fct-type": "function",
        "title": "SeqT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Sequence",
        "module": "Control.Monad.Sequence",
        "name": "SeqT",
        "normalized": "",
        "package": "arrow-list",
        "partial": "Seq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Monad-Sequence.html#v:runSeqT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Sequence",
        "fct-package": "arrow-list",
        "fct-signature": "m (Seq a)",
        "fct-source": "src/Control-Monad-Sequence.html#SeqT",
        "fct-type": "function",
        "title": "runSeqT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Sequence",
        "module": "Control.Monad.Sequence",
        "name": "runSeqT",
        "normalized": "",
        "package": "arrow-list",
        "partial": "Seq",
        "signature": ""
      }
    }
  }
]