[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDeterministic and probabilistic values\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.Probability.Distribution",
        "fct-package": "probability",
        "fct-signature": "module",
        "fct-source": "src/Numeric-Probability-Distribution.html",
        "fct-type": "module",
        "title": "Distribution"
      },
      "index": {
        "description": "Deterministic and probabilistic values",
        "hierarchy": "Numeric Probability Distribution",
        "module": "Numeric.Probability.Distribution",
        "name": "Distribution",
        "normalized": "",
        "package": "probability",
        "partial": "Distribution",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#t:Event",
      "description": {
        "fct-module": "Numeric.Probability.Distribution",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Distribution.html#Event",
        "fct-type": "type",
        "title": "Event"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Distribution",
        "module": "Numeric.Probability.Distribution",
        "name": "Event",
        "normalized": "",
        "package": "probability",
        "partial": "Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#t:Select",
      "description": {
        "fct-descr": "\u003cp\u003efiltering distributions\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Distribution",
        "fct-package": "probability",
        "fct-signature": "data",
        "fct-source": "src/Numeric-Probability-Distribution.html#Select",
        "fct-type": "data",
        "title": "Select"
      },
      "index": {
        "description": "filtering distributions",
        "hierarchy": "Numeric Probability Distribution",
        "module": "Numeric.Probability.Distribution",
        "name": "Select",
        "normalized": "",
        "package": "probability",
        "partial": "Select",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#t:Spread",
      "description": {
        "fct-descr": "\u003cp\u003edistribution generators\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Distribution",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Distribution.html#Spread",
        "fct-type": "type",
        "title": "Spread"
      },
      "index": {
        "description": "distribution generators",
        "hierarchy": "Numeric Probability Distribution",
        "module": "Numeric.Probability.Distribution",
        "name": "Spread",
        "normalized": "",
        "package": "probability",
        "partial": "Spread",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#t:T",
      "description": {
        "fct-descr": "\u003cp\u003eProbability disribution\n\u003c/p\u003e\u003cp\u003eThe underlying data structure is a list.\nUnfortunately we cannot use a more efficient data structure\nbecause the key type must be of class \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e,\nbut the \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e class does not allow constraints for result types.\nThe Monad instance is particularly useful\nbecause many generic monad functions make sense here,\nmonad transformers can be used\nand the monadic design allows to simulate probabilistic games in an elegant manner.\n\u003c/p\u003e\u003cp\u003eWe have the same problem like making \u003ca\u003eData.Set\u003c/a\u003e an instance of \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e,\nsee \u003ca\u003ehttp://www.randomhacks.net/articles/2007/03/15/data-set-monad-haskell-macros\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eIf you need efficiency, you should remove redundant elements by \u003ccode\u003e\u003ca\u003enorm\u003c/a\u003e\u003c/code\u003e.\n\u003ccode\u003e\u003ca\u003enorm\u003c/a\u003e\u003c/code\u003e converts to \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e and back internally\nand you can hope that the compiler fuses the lists with the intermediate Map structure.\n\u003c/p\u003e\u003cp\u003eThe defined monad is equivalent to\n\u003ccode\u003eWriterT (Product prob) [] a\u003c/code\u003e.\nSee \u003ca\u003ehttp://www.randomhacks.net/articles/2007/02/21/refactoring-probability-distributions\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Distribution",
        "fct-package": "probability",
        "fct-signature": "newtype",
        "fct-source": "src/Numeric-Probability-Distribution.html#T",
        "fct-type": "newtype",
        "title": "T"
      },
      "index": {
        "description": "Probability disribution The underlying data structure is list Unfortunately we cannot use more efficient data structure because the key type must be of class Ord but the Monad class does not allow constraints for result types The Monad instance is particularly useful because many generic monad functions make sense here monad transformers can be used and the monadic design allows to simulate probabilistic games in an elegant manner We have the same problem like making Data.Set an instance of Monad see http www.randomhacks.net articles data-set-monad-haskell-macros If you need efficiency you should remove redundant elements by norm norm converts to Map and back internally and you can hope that the compiler fuses the lists with the intermediate Map structure The defined monad is equivalent to WriterT Product prob See http www.randomhacks.net articles refactoring-probability-distributions",
        "hierarchy": "Numeric Probability Distribution",
        "module": "Numeric.Probability.Distribution",
        "name": "T",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:-47--47--37-",
      "description": {
        "fct-module": "Numeric.Probability.Distribution",
        "fct-package": "probability",
        "fct-signature": "T Rational a -\u003e () -\u003e IO ()",
        "fct-source": "src/Numeric-Probability-Distribution.html#%2F%2F%25",
        "fct-type": "function",
        "title": "(//%)"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Distribution",
        "module": "Numeric.Probability.Distribution",
        "name": "(//%) //%",
        "normalized": "T Rational a-\u003e()-\u003eIO()",
        "package": "probability",
        "partial": "",
        "signature": "T Rational a-\u003e()-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:-62--62--61--63-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e in infix form.\nCan be considered an additional monadic combinator,\nwhich can be used where you would want \u003ccode\u003e\u003ca\u003eguard\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Distribution",
        "fct-package": "probability",
        "fct-signature": "T prob a -\u003e (a -\u003e Bool) -\u003e T prob a",
        "fct-source": "src/Numeric-Probability-Distribution.html#%3E%3E%3D%3F",
        "fct-type": "function",
        "title": "(\u003e\u003e=?)"
      },
      "index": {
        "description": "filter in infix form Can be considered an additional monadic combinator which can be used where you would want guard otherwise",
        "hierarchy": "Numeric Probability Distribution",
        "module": "Numeric.Probability.Distribution",
        "name": "(\u003e\u003e=?) \u003e\u003e=?",
        "normalized": "T a b-\u003e(b-\u003eBool)-\u003eT a b",
        "package": "probability",
        "partial": "",
        "signature": "T prob a-\u003e(a-\u003eBool)-\u003eT prob a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:-63--61--60--60-",
      "description": {
        "fct-descr": "\u003cp\u003econditional probability, identical to \u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Distribution",
        "fct-package": "probability",
        "fct-signature": "(a -\u003e Bool) -\u003e T prob a -\u003e T prob a",
        "fct-source": "src/Numeric-Probability-Distribution.html#%3F%3D%3C%3C",
        "fct-type": "function",
        "title": "(?=\u003c\u003c)"
      },
      "index": {
        "description": "conditional probability identical to filter",
        "hierarchy": "Numeric Probability Distribution",
        "module": "Numeric.Probability.Distribution",
        "name": "(?=\u003c\u003c) ?=\u003c\u003c",
        "normalized": "(a-\u003eBool)-\u003eT b a-\u003eT b a",
        "package": "probability",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eT prob a-\u003eT prob a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:-63--63-",
      "description": {
        "fct-module": "Numeric.Probability.Distribution",
        "fct-package": "probability",
        "fct-signature": "Event a -\u003e T prob a -\u003e prob",
        "fct-source": "src/Numeric-Probability-Distribution.html#%3F%3F",
        "fct-type": "function",
        "title": "(??)"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Distribution",
        "module": "Numeric.Probability.Distribution",
        "name": "(??) ??",
        "normalized": "Event a-\u003eT b a-\u003eb",
        "package": "probability",
        "partial": "",
        "signature": "Event a-\u003eT prob a-\u003eprob"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:Case",
      "description": {
        "fct-module": "Numeric.Probability.Distribution",
        "fct-package": "probability",
        "fct-signature": "Case a",
        "fct-source": "src/Numeric-Probability-Distribution.html#Select",
        "fct-type": "function",
        "title": "Case"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Distribution",
        "module": "Numeric.Probability.Distribution",
        "name": "Case",
        "normalized": "",
        "package": "probability",
        "partial": "Case",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:Cons",
      "description": {
        "fct-module": "Numeric.Probability.Distribution",
        "fct-package": "probability",
        "fct-signature": "Cons",
        "fct-source": "src/Numeric-Probability-Distribution.html#T",
        "fct-type": "function",
        "title": "Cons"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Distribution",
        "module": "Numeric.Probability.Distribution",
        "name": "Cons",
        "normalized": "",
        "package": "probability",
        "partial": "Cons",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:Other",
      "description": {
        "fct-module": "Numeric.Probability.Distribution",
        "fct-package": "probability",
        "fct-signature": "Other",
        "fct-source": "src/Numeric-Probability-Distribution.html#Select",
        "fct-type": "function",
        "title": "Other"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Distribution",
        "module": "Numeric.Probability.Distribution",
        "name": "Other",
        "normalized": "",
        "package": "probability",
        "partial": "Other",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:above",
      "description": {
        "fct-module": "Numeric.Probability.Distribution",
        "fct-package": "probability",
        "fct-signature": "prob -\u003e T prob a -\u003e T prob (Select a)",
        "fct-source": "src/Numeric-Probability-Distribution.html#above",
        "fct-type": "function",
        "title": "above"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Distribution",
        "module": "Numeric.Probability.Distribution",
        "name": "above",
        "normalized": "a-\u003eT a b-\u003eT a(Select b)",
        "package": "probability",
        "partial": "",
        "signature": "prob-\u003eT prob a-\u003eT prob(Select a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:approx",
      "description": {
        "fct-descr": "\u003cp\u003eCheck whether two distributions are equal when neglecting rounding errors.\nWe do not want to put this into an \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e instance,\nsince it is not exact equivalence\nand it seems to be too easy to mix it up with \u003ccode\u003eliftM2 (==) x y\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Distribution",
        "fct-package": "probability",
        "fct-signature": "T prob a -\u003e T prob a -\u003e Bool",
        "fct-source": "src/Numeric-Probability-Distribution.html#approx",
        "fct-type": "function",
        "title": "approx"
      },
      "index": {
        "description": "Check whether two distributions are equal when neglecting rounding errors We do not want to put this into an Eq instance since it is not exact equivalence and it seems to be too easy to mix it up with liftM2",
        "hierarchy": "Numeric Probability Distribution",
        "module": "Numeric.Probability.Distribution",
        "name": "approx",
        "normalized": "T a b-\u003eT a b-\u003eBool",
        "package": "probability",
        "partial": "",
        "signature": "T prob a-\u003eT prob a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:certainly",
      "description": {
        "fct-module": "Numeric.Probability.Distribution",
        "fct-package": "probability",
        "fct-signature": "a -\u003e T prob a",
        "fct-source": "src/Numeric-Probability-Distribution.html#certainly",
        "fct-type": "function",
        "title": "certainly"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Distribution",
        "module": "Numeric.Probability.Distribution",
        "name": "certainly",
        "normalized": "a-\u003eT b a",
        "package": "probability",
        "partial": "",
        "signature": "a-\u003eT prob a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:check",
      "description": {
        "fct-module": "Numeric.Probability.Distribution",
        "fct-package": "probability",
        "fct-signature": "T prob a -\u003e T prob a",
        "fct-source": "src/Numeric-Probability-Distribution.html#check",
        "fct-type": "function",
        "title": "check"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Distribution",
        "module": "Numeric.Probability.Distribution",
        "name": "check",
        "normalized": "T a b-\u003eT a b",
        "package": "probability",
        "partial": "",
        "signature": "T prob a-\u003eT prob a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:choose",
      "description": {
        "fct-module": "Numeric.Probability.Distribution",
        "fct-package": "probability",
        "fct-signature": "prob -\u003e a -\u003e a -\u003e T prob a",
        "fct-source": "src/Numeric-Probability-Distribution.html#choose",
        "fct-type": "function",
        "title": "choose"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Distribution",
        "module": "Numeric.Probability.Distribution",
        "name": "choose",
        "normalized": "a-\u003eb-\u003eb-\u003eT a b",
        "package": "probability",
        "partial": "",
        "signature": "prob-\u003ea-\u003ea-\u003eT prob a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:cond",
      "description": {
        "fct-descr": "\u003cp\u003econditional distribution\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Distribution",
        "fct-package": "probability",
        "fct-signature": "T prob Bool-\u003e T prob a-\u003e T prob a-\u003e T prob a",
        "fct-type": "function",
        "title": "cond"
      },
      "index": {
        "description": "conditional distribution",
        "hierarchy": "Numeric Probability Distribution",
        "module": "Numeric.Probability.Distribution",
        "name": "cond",
        "normalized": "T a Bool-\u003eT a b-\u003eT a b-\u003eT a b",
        "package": "probability",
        "partial": "",
        "signature": "T prob Bool-\u003eT prob a-\u003eT prob a-\u003eT prob a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:cons",
      "description": {
        "fct-descr": "\u003cp\u003ecan fail because of rounding errors, better use \u003ccode\u003e\u003ca\u003efromFreqs\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Distribution",
        "fct-package": "probability",
        "fct-signature": "[(a, prob)] -\u003e T prob a",
        "fct-source": "src/Numeric-Probability-Distribution.html#cons",
        "fct-type": "function",
        "title": "cons"
      },
      "index": {
        "description": "can fail because of rounding errors better use fromFreqs",
        "hierarchy": "Numeric Probability Distribution",
        "module": "Numeric.Probability.Distribution",
        "name": "cons",
        "normalized": "[(a,b)]-\u003eT b a",
        "package": "probability",
        "partial": "",
        "signature": "[(a,prob)]-\u003eT prob a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:decons",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Numeric.Probability.Distribution",
        "fct-package": "probability",
        "fct-signature": "[(a, prob)]",
        "fct-source": "src/Numeric-Probability-Distribution.html#T",
        "fct-type": "function",
        "title": "decons"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Distribution",
        "module": "Numeric.Probability.Distribution",
        "name": "decons",
        "normalized": "[(a,b)]",
        "package": "probability",
        "partial": "",
        "signature": "[(a,prob)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:enum",
      "description": {
        "fct-module": "Numeric.Probability.Distribution",
        "fct-package": "probability",
        "fct-signature": "[Int] -\u003e Spread prob a",
        "fct-source": "src/Numeric-Probability-Distribution.html#enum",
        "fct-type": "function",
        "title": "enum"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Distribution",
        "module": "Numeric.Probability.Distribution",
        "name": "enum",
        "normalized": "[Int]-\u003eSpread a b",
        "package": "probability",
        "partial": "",
        "signature": "[Int]-\u003eSpread prob a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:equal",
      "description": {
        "fct-module": "Numeric.Probability.Distribution",
        "fct-package": "probability",
        "fct-signature": "T prob a -\u003e T prob a -\u003e Bool",
        "fct-source": "src/Numeric-Probability-Distribution.html#equal",
        "fct-type": "function",
        "title": "equal"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Distribution",
        "module": "Numeric.Probability.Distribution",
        "name": "equal",
        "normalized": "T a b-\u003eT a b-\u003eBool",
        "package": "probability",
        "partial": "",
        "signature": "T prob a-\u003eT prob a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:errorMargin",
      "description": {
        "fct-module": "Numeric.Probability.Distribution",
        "fct-package": "probability",
        "fct-signature": "prob",
        "fct-source": "src/Numeric-Probability-Distribution.html#errorMargin",
        "fct-type": "function",
        "title": "errorMargin"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Distribution",
        "module": "Numeric.Probability.Distribution",
        "name": "errorMargin",
        "normalized": "",
        "package": "probability",
        "partial": "Margin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:expected",
      "description": {
        "fct-descr": "\u003cp\u003eexpectation value\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Distribution",
        "fct-package": "probability",
        "fct-signature": "T a a -\u003e a",
        "fct-source": "src/Numeric-Probability-Distribution.html#expected",
        "fct-type": "function",
        "title": "expected"
      },
      "index": {
        "description": "expectation value",
        "hierarchy": "Numeric Probability Distribution",
        "module": "Numeric.Probability.Distribution",
        "name": "expected",
        "normalized": "T a a-\u003ea",
        "package": "probability",
        "partial": "",
        "signature": "T a a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:extract",
      "description": {
        "fct-descr": "\u003cp\u003eextracting and mapping the domain of a distribution\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Distribution",
        "fct-package": "probability",
        "fct-signature": "T prob a -\u003e [a]",
        "fct-source": "src/Numeric-Probability-Distribution.html#extract",
        "fct-type": "function",
        "title": "extract"
      },
      "index": {
        "description": "extracting and mapping the domain of distribution",
        "hierarchy": "Numeric Probability Distribution",
        "module": "Numeric.Probability.Distribution",
        "name": "extract",
        "normalized": "T a b-\u003e[b]",
        "package": "probability",
        "partial": "",
        "signature": "T prob a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:filter",
      "description": {
        "fct-module": "Numeric.Probability.Distribution",
        "fct-package": "probability",
        "fct-signature": "(a -\u003e Bool) -\u003e T prob a -\u003e T prob a",
        "fct-source": "src/Numeric-Probability-Distribution.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Distribution",
        "module": "Numeric.Probability.Distribution",
        "name": "filter",
        "normalized": "(a-\u003eBool)-\u003eT b a-\u003eT b a",
        "package": "probability",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eT prob a-\u003eT prob a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:fromFreqs",
      "description": {
        "fct-module": "Numeric.Probability.Distribution",
        "fct-package": "probability",
        "fct-signature": "[(a, prob)] -\u003e T prob a",
        "fct-source": "src/Numeric-Probability-Distribution.html#fromFreqs",
        "fct-type": "function",
        "title": "fromFreqs"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Distribution",
        "module": "Numeric.Probability.Distribution",
        "name": "fromFreqs",
        "normalized": "[(a,b)]-\u003eT b a",
        "package": "probability",
        "partial": "Freqs",
        "signature": "[(a,prob)]-\u003eT prob a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:just",
      "description": {
        "fct-module": "Numeric.Probability.Distribution",
        "fct-package": "probability",
        "fct-signature": "a -\u003e Event a",
        "fct-source": "src/Numeric-Probability-Distribution.html#just",
        "fct-type": "function",
        "title": "just"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Distribution",
        "module": "Numeric.Probability.Distribution",
        "name": "just",
        "normalized": "a-\u003eEvent a",
        "package": "probability",
        "partial": "",
        "signature": "a-\u003eEvent a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:lift",
      "description": {
        "fct-module": "Numeric.Probability.Distribution",
        "fct-package": "probability",
        "fct-signature": "([(a, prob)] -\u003e [(a, prob)]) -\u003e T prob a -\u003e T prob a",
        "fct-source": "src/Numeric-Probability-Distribution.html#lift",
        "fct-type": "function",
        "title": "lift"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Distribution",
        "module": "Numeric.Probability.Distribution",
        "name": "lift",
        "normalized": "([(a,b)]-\u003e[(a,b)])-\u003eT b a-\u003eT b a",
        "package": "probability",
        "partial": "",
        "signature": "([(a,prob)]-\u003e[(a,prob)])-\u003eT prob a-\u003eT prob a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:linear",
      "description": {
        "fct-module": "Numeric.Probability.Distribution",
        "fct-package": "probability",
        "fct-signature": "Spread prob a",
        "fct-source": "src/Numeric-Probability-Distribution.html#linear",
        "fct-type": "function",
        "title": "linear"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Distribution",
        "module": "Numeric.Probability.Distribution",
        "name": "linear",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e with normalization\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Distribution",
        "fct-package": "probability",
        "fct-signature": "(a -\u003e b) -\u003e T prob a -\u003e T prob b",
        "fct-source": "src/Numeric-Probability-Distribution.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "fmap with normalization",
        "hierarchy": "Numeric Probability Distribution",
        "module": "Numeric.Probability.Distribution",
        "name": "map",
        "normalized": "(a-\u003eb)-\u003eT c a-\u003eT c b",
        "package": "probability",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eT prob a-\u003eT prob b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:mapMaybe",
      "description": {
        "fct-module": "Numeric.Probability.Distribution",
        "fct-package": "probability",
        "fct-signature": "(a -\u003e Maybe b) -\u003e T prob a -\u003e T prob b",
        "fct-source": "src/Numeric-Probability-Distribution.html#mapMaybe",
        "fct-type": "function",
        "title": "mapMaybe"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Distribution",
        "module": "Numeric.Probability.Distribution",
        "name": "mapMaybe",
        "normalized": "(a-\u003eMaybe b)-\u003eT c a-\u003eT c b",
        "package": "probability",
        "partial": "Maybe",
        "signature": "(a-\u003eMaybe b)-\u003eT prob a-\u003eT prob b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:negExp",
      "description": {
        "fct-module": "Numeric.Probability.Distribution",
        "fct-package": "probability",
        "fct-signature": "Spread prob a",
        "fct-source": "src/Numeric-Probability-Distribution.html#negExp",
        "fct-type": "function",
        "title": "negExp"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Distribution",
        "module": "Numeric.Probability.Distribution",
        "name": "negExp",
        "normalized": "",
        "package": "probability",
        "partial": "Exp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:norm",
      "description": {
        "fct-module": "Numeric.Probability.Distribution",
        "fct-package": "probability",
        "fct-signature": "T prob a -\u003e T prob a",
        "fct-source": "src/Numeric-Probability-Distribution.html#norm",
        "fct-type": "function",
        "title": "norm"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Distribution",
        "module": "Numeric.Probability.Distribution",
        "name": "norm",
        "normalized": "T a b-\u003eT a b",
        "package": "probability",
        "partial": "",
        "signature": "T prob a-\u003eT prob a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:norm-39-",
      "description": {
        "fct-module": "Numeric.Probability.Distribution",
        "fct-package": "probability",
        "fct-signature": "[(a, prob)] -\u003e [(a, prob)]",
        "fct-source": "src/Numeric-Probability-Distribution.html#norm%27",
        "fct-type": "function",
        "title": "norm'"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Distribution",
        "module": "Numeric.Probability.Distribution",
        "name": "norm'",
        "normalized": "[(a,b)]-\u003e[(a,b)]",
        "package": "probability",
        "partial": "",
        "signature": "[(a,prob)]-\u003e[(a,prob)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:norm-39--39-",
      "description": {
        "fct-module": "Numeric.Probability.Distribution",
        "fct-package": "probability",
        "fct-signature": "[(a, prob)] -\u003e [(a, prob)]",
        "fct-source": "src/Numeric-Probability-Distribution.html#norm%27%27",
        "fct-type": "function",
        "title": "norm''"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Distribution",
        "module": "Numeric.Probability.Distribution",
        "name": "norm''",
        "normalized": "[(a,b)]-\u003e[(a,b)]",
        "package": "probability",
        "partial": "",
        "signature": "[(a,prob)]-\u003e[(a,prob)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:normal",
      "description": {
        "fct-module": "Numeric.Probability.Distribution",
        "fct-package": "probability",
        "fct-signature": "Spread prob a",
        "fct-source": "src/Numeric-Probability-Distribution.html#normal",
        "fct-type": "function",
        "title": "normal"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Distribution",
        "module": "Numeric.Probability.Distribution",
        "name": "normal",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:oneOf",
      "description": {
        "fct-module": "Numeric.Probability.Distribution",
        "fct-package": "probability",
        "fct-signature": "[a] -\u003e Event a",
        "fct-source": "src/Numeric-Probability-Distribution.html#oneOf",
        "fct-type": "function",
        "title": "oneOf"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Distribution",
        "module": "Numeric.Probability.Distribution",
        "name": "oneOf",
        "normalized": "[a]-\u003eEvent a",
        "package": "probability",
        "partial": "Of",
        "signature": "[a]-\u003eEvent a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:pretty",
      "description": {
        "fct-descr": "\u003cp\u003epretty printing\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Distribution",
        "fct-package": "probability",
        "fct-signature": "(prob -\u003e String) -\u003e T prob a -\u003e String",
        "fct-source": "src/Numeric-Probability-Distribution.html#pretty",
        "fct-type": "function",
        "title": "pretty"
      },
      "index": {
        "description": "pretty printing",
        "hierarchy": "Numeric Probability Distribution",
        "module": "Numeric.Probability.Distribution",
        "name": "pretty",
        "normalized": "(a-\u003eString)-\u003eT a b-\u003eString",
        "package": "probability",
        "partial": "",
        "signature": "(prob-\u003eString)-\u003eT prob a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:relative",
      "description": {
        "fct-descr": "\u003cp\u003eGive a list of frequencies, they do not need to sum up to 1.\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Distribution",
        "fct-package": "probability",
        "fct-signature": "[prob] -\u003e Spread prob a",
        "fct-source": "src/Numeric-Probability-Distribution.html#relative",
        "fct-type": "function",
        "title": "relative"
      },
      "index": {
        "description": "Give list of frequencies they do not need to sum up to",
        "hierarchy": "Numeric Probability Distribution",
        "module": "Numeric.Probability.Distribution",
        "name": "relative",
        "normalized": "[a]-\u003eSpread a b",
        "package": "probability",
        "partial": "",
        "signature": "[prob]-\u003eSpread prob a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:scanP",
      "description": {
        "fct-module": "Numeric.Probability.Distribution",
        "fct-package": "probability",
        "fct-signature": "prob -\u003e [(a, prob)] -\u003e a",
        "fct-source": "src/Numeric-Probability-Distribution.html#scanP",
        "fct-type": "function",
        "title": "scanP"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Distribution",
        "module": "Numeric.Probability.Distribution",
        "name": "scanP",
        "normalized": "a-\u003e[(b,a)]-\u003eb",
        "package": "probability",
        "partial": "",
        "signature": "prob-\u003e[(a,prob)]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:selectP",
      "description": {
        "fct-descr": "\u003cp\u003eselecting from distributions\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Distribution",
        "fct-package": "probability",
        "fct-signature": "T prob a -\u003e prob -\u003e a",
        "fct-source": "src/Numeric-Probability-Distribution.html#selectP",
        "fct-type": "function",
        "title": "selectP"
      },
      "index": {
        "description": "selecting from distributions",
        "hierarchy": "Numeric Probability Distribution",
        "module": "Numeric.Probability.Distribution",
        "name": "selectP",
        "normalized": "T a b-\u003ea-\u003eb",
        "package": "probability",
        "partial": "",
        "signature": "T prob a-\u003eprob-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:shape",
      "description": {
        "fct-module": "Numeric.Probability.Distribution",
        "fct-package": "probability",
        "fct-signature": "(prob -\u003e prob) -\u003e Spread prob a",
        "fct-source": "src/Numeric-Probability-Distribution.html#shape",
        "fct-type": "function",
        "title": "shape"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Distribution",
        "module": "Numeric.Probability.Distribution",
        "name": "shape",
        "normalized": "(a-\u003ea)-\u003eSpread a b",
        "package": "probability",
        "partial": "",
        "signature": "(prob-\u003eprob)-\u003eSpread prob a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:size",
      "description": {
        "fct-module": "Numeric.Probability.Distribution",
        "fct-package": "probability",
        "fct-signature": "T prob a -\u003e Int",
        "fct-source": "src/Numeric-Probability-Distribution.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Distribution",
        "module": "Numeric.Probability.Distribution",
        "name": "size",
        "normalized": "T a b-\u003eInt",
        "package": "probability",
        "partial": "",
        "signature": "T prob a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:sortElem",
      "description": {
        "fct-module": "Numeric.Probability.Distribution",
        "fct-package": "probability",
        "fct-signature": "[(a, prob)] -\u003e [(a, prob)]",
        "fct-source": "src/Numeric-Probability-Distribution.html#sortElem",
        "fct-type": "function",
        "title": "sortElem"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Distribution",
        "module": "Numeric.Probability.Distribution",
        "name": "sortElem",
        "normalized": "[(a,b)]-\u003e[(a,b)]",
        "package": "probability",
        "partial": "Elem",
        "signature": "[(a,prob)]-\u003e[(a,prob)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:sortP",
      "description": {
        "fct-module": "Numeric.Probability.Distribution",
        "fct-package": "probability",
        "fct-signature": "[(a, prob)] -\u003e [(a, prob)]",
        "fct-source": "src/Numeric-Probability-Distribution.html#sortP",
        "fct-type": "function",
        "title": "sortP"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Distribution",
        "module": "Numeric.Probability.Distribution",
        "name": "sortP",
        "normalized": "[(a,b)]-\u003e[(a,b)]",
        "package": "probability",
        "partial": "",
        "signature": "[(a,prob)]-\u003e[(a,prob)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:stdDev",
      "description": {
        "fct-module": "Numeric.Probability.Distribution",
        "fct-package": "probability",
        "fct-signature": "T a a -\u003e a",
        "fct-source": "src/Numeric-Probability-Distribution.html#stdDev",
        "fct-type": "function",
        "title": "stdDev"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Distribution",
        "module": "Numeric.Probability.Distribution",
        "name": "stdDev",
        "normalized": "T a a-\u003ea",
        "package": "probability",
        "partial": "Dev",
        "signature": "T a a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:sumP",
      "description": {
        "fct-module": "Numeric.Probability.Distribution",
        "fct-package": "probability",
        "fct-signature": "[(a, prob)] -\u003e prob",
        "fct-source": "src/Numeric-Probability-Distribution.html#sumP",
        "fct-type": "function",
        "title": "sumP"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Distribution",
        "module": "Numeric.Probability.Distribution",
        "name": "sumP",
        "normalized": "[(a,b)]-\u003eb",
        "package": "probability",
        "partial": "",
        "signature": "[(a,prob)]-\u003eprob"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:truth",
      "description": {
        "fct-module": "Numeric.Probability.Distribution",
        "fct-package": "probability",
        "fct-signature": "T prob Bool -\u003e prob",
        "fct-source": "src/Numeric-Probability-Distribution.html#truth",
        "fct-type": "function",
        "title": "truth"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Distribution",
        "module": "Numeric.Probability.Distribution",
        "name": "truth",
        "normalized": "T a Bool-\u003ea",
        "package": "probability",
        "partial": "",
        "signature": "T prob Bool-\u003eprob"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:unfold",
      "description": {
        "fct-descr": "\u003cp\u003eunfold a distribution of distributions into one distribution,\nthis is \u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e with normalization.\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Distribution",
        "fct-package": "probability",
        "fct-signature": "T prob (T prob a) -\u003e T prob a",
        "fct-source": "src/Numeric-Probability-Distribution.html#unfold",
        "fct-type": "function",
        "title": "unfold"
      },
      "index": {
        "description": "unfold distribution of distributions into one distribution this is join with normalization",
        "hierarchy": "Numeric Probability Distribution",
        "module": "Numeric.Probability.Distribution",
        "name": "unfold",
        "normalized": "T a(T a b)-\u003eT a b",
        "package": "probability",
        "partial": "",
        "signature": "T prob(T prob a)-\u003eT prob a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:uniform",
      "description": {
        "fct-module": "Numeric.Probability.Distribution",
        "fct-package": "probability",
        "fct-signature": "Spread prob a",
        "fct-source": "src/Numeric-Probability-Distribution.html#uniform",
        "fct-type": "function",
        "title": "uniform"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Distribution",
        "module": "Numeric.Probability.Distribution",
        "name": "uniform",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:variance",
      "description": {
        "fct-descr": "\u003cp\u003estatistical analyses\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Distribution",
        "fct-package": "probability",
        "fct-signature": "T a a -\u003e a",
        "fct-source": "src/Numeric-Probability-Distribution.html#variance",
        "fct-type": "function",
        "title": "variance"
      },
      "index": {
        "description": "statistical analyses",
        "hierarchy": "Numeric Probability Distribution",
        "module": "Numeric.Probability.Distribution",
        "name": "variance",
        "normalized": "T a a-\u003ea",
        "package": "probability",
        "partial": "",
        "signature": "T a a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Alarm.html#",
      "description": {
        "fct-module": "Numeric.Probability.Example.Alarm",
        "fct-package": "probability",
        "fct-signature": "module",
        "fct-source": "src/Numeric-Probability-Example-Alarm.html",
        "fct-type": "module",
        "title": "Alarm"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Alarm",
        "module": "Numeric.Probability.Example.Alarm",
        "name": "Alarm",
        "normalized": "",
        "package": "probability",
        "partial": "Alarm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Alarm.html#t:Burglary",
      "description": {
        "fct-descr": "\u003cp\u003ecalculate the full joint distribution\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Example.Alarm",
        "fct-package": "probability",
        "fct-signature": "data",
        "fct-source": "src/Numeric-Probability-Example-Alarm.html#Burglary",
        "fct-type": "data",
        "title": "Burglary"
      },
      "index": {
        "description": "calculate the full joint distribution",
        "hierarchy": "Numeric Probability Example Alarm",
        "module": "Numeric.Probability.Example.Alarm",
        "name": "Burglary",
        "normalized": "",
        "package": "probability",
        "partial": "Burglary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Alarm.html#t:Dist",
      "description": {
        "fct-module": "Numeric.Probability.Example.Alarm",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Example-Alarm.html#Dist",
        "fct-type": "type",
        "title": "Dist"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Alarm",
        "module": "Numeric.Probability.Example.Alarm",
        "name": "Dist",
        "normalized": "",
        "package": "probability",
        "partial": "Dist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Alarm.html#t:PBool",
      "description": {
        "fct-module": "Numeric.Probability.Example.Alarm",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Example-Alarm.html#PBool",
        "fct-type": "type",
        "title": "PBool"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Alarm",
        "module": "Numeric.Probability.Example.Alarm",
        "name": "PBool",
        "normalized": "",
        "package": "probability",
        "partial": "PBool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Alarm.html#t:Probability",
      "description": {
        "fct-module": "Numeric.Probability.Example.Alarm",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Example-Alarm.html#Probability",
        "fct-type": "type",
        "title": "Probability"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Alarm",
        "module": "Numeric.Probability.Example.Alarm",
        "name": "Probability",
        "normalized": "",
        "package": "probability",
        "partial": "Probability",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Alarm.html#v:B",
      "description": {
        "fct-module": "Numeric.Probability.Example.Alarm",
        "fct-package": "probability",
        "fct-signature": "B",
        "fct-source": "src/Numeric-Probability-Example-Alarm.html#Burglary",
        "fct-type": "function",
        "title": "B"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Alarm",
        "module": "Numeric.Probability.Example.Alarm",
        "name": "B",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Alarm.html#v:a",
      "description": {
        "fct-descr": "\u003cp\u003econditional probability of alarm given burglary and earthquake\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Example.Alarm",
        "fct-package": "probability",
        "fct-signature": "Bool -\u003e Bool -\u003e PBool",
        "fct-source": "src/Numeric-Probability-Example-Alarm.html#a",
        "fct-type": "function",
        "title": "a"
      },
      "index": {
        "description": "conditional probability of alarm given burglary and earthquake",
        "hierarchy": "Numeric Probability Example Alarm",
        "module": "Numeric.Probability.Example.Alarm",
        "name": "a",
        "normalized": "Bool-\u003eBool-\u003ePBool",
        "package": "probability",
        "partial": "",
        "signature": "Bool-\u003eBool-\u003ePBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Alarm.html#v:alarm",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Numeric.Probability.Example.Alarm",
        "fct-package": "probability",
        "fct-signature": "Bool",
        "fct-source": "src/Numeric-Probability-Example-Alarm.html#Burglary",
        "fct-type": "function",
        "title": "alarm"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Alarm",
        "module": "Numeric.Probability.Example.Alarm",
        "name": "alarm",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Alarm.html#v:b",
      "description": {
        "fct-descr": "\u003cp\u003eprior burglary 1%\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Example.Alarm",
        "fct-package": "probability",
        "fct-signature": "PBool",
        "fct-source": "src/Numeric-Probability-Example-Alarm.html#b",
        "fct-type": "function",
        "title": "b"
      },
      "index": {
        "description": "prior burglary",
        "hierarchy": "Numeric Probability Example Alarm",
        "module": "Numeric.Probability.Example.Alarm",
        "name": "b",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Alarm.html#v:bJoint",
      "description": {
        "fct-module": "Numeric.Probability.Example.Alarm",
        "fct-package": "probability",
        "fct-signature": "Dist Burglary",
        "fct-source": "src/Numeric-Probability-Example-Alarm.html#bJoint",
        "fct-type": "function",
        "title": "bJoint"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Alarm",
        "module": "Numeric.Probability.Example.Alarm",
        "name": "bJoint",
        "normalized": "",
        "package": "probability",
        "partial": "Joint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Alarm.html#v:burglary",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Numeric.Probability.Example.Alarm",
        "fct-package": "probability",
        "fct-signature": "Bool",
        "fct-source": "src/Numeric-Probability-Example-Alarm.html#Burglary",
        "fct-type": "function",
        "title": "burglary"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Alarm",
        "module": "Numeric.Probability.Example.Alarm",
        "name": "burglary",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Alarm.html#v:e",
      "description": {
        "fct-descr": "\u003cp\u003eprior earthquake 0.1%\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Example.Alarm",
        "fct-package": "probability",
        "fct-signature": "PBool",
        "fct-source": "src/Numeric-Probability-Example-Alarm.html#e",
        "fct-type": "function",
        "title": "e"
      },
      "index": {
        "description": "prior earthquake",
        "hierarchy": "Numeric Probability Example Alarm",
        "module": "Numeric.Probability.Example.Alarm",
        "name": "e",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Alarm.html#v:earthquake",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Numeric.Probability.Example.Alarm",
        "fct-package": "probability",
        "fct-signature": "Bool",
        "fct-source": "src/Numeric-Probability-Example-Alarm.html#Burglary",
        "fct-type": "function",
        "title": "earthquake"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Alarm",
        "module": "Numeric.Probability.Example.Alarm",
        "name": "earthquake",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Alarm.html#v:flp",
      "description": {
        "fct-module": "Numeric.Probability.Example.Alarm",
        "fct-package": "probability",
        "fct-signature": "Probability -\u003e PBool",
        "fct-source": "src/Numeric-Probability-Example-Alarm.html#flp",
        "fct-type": "function",
        "title": "flp"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Alarm",
        "module": "Numeric.Probability.Example.Alarm",
        "name": "flp",
        "normalized": "Probability-\u003ePBool",
        "package": "probability",
        "partial": "",
        "signature": "Probability-\u003ePBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Alarm.html#v:j",
      "description": {
        "fct-descr": "\u003cp\u003econditional probability of john calling given alarm\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Example.Alarm",
        "fct-package": "probability",
        "fct-signature": "Bool -\u003e PBool",
        "fct-source": "src/Numeric-Probability-Example-Alarm.html#j",
        "fct-type": "function",
        "title": "j"
      },
      "index": {
        "description": "conditional probability of john calling given alarm",
        "hierarchy": "Numeric Probability Example Alarm",
        "module": "Numeric.Probability.Example.Alarm",
        "name": "j",
        "normalized": "Bool-\u003ePBool",
        "package": "probability",
        "partial": "",
        "signature": "Bool-\u003ePBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Alarm.html#v:john",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Numeric.Probability.Example.Alarm",
        "fct-package": "probability",
        "fct-signature": "Bool",
        "fct-source": "src/Numeric-Probability-Example-Alarm.html#Burglary",
        "fct-type": "function",
        "title": "john"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Alarm",
        "module": "Numeric.Probability.Example.Alarm",
        "name": "john",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Alarm.html#v:m",
      "description": {
        "fct-descr": "\u003cp\u003econditional probability of mary calling given alarm\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Example.Alarm",
        "fct-package": "probability",
        "fct-signature": "Bool -\u003e PBool",
        "fct-source": "src/Numeric-Probability-Example-Alarm.html#m",
        "fct-type": "function",
        "title": "m"
      },
      "index": {
        "description": "conditional probability of mary calling given alarm",
        "hierarchy": "Numeric Probability Example Alarm",
        "module": "Numeric.Probability.Example.Alarm",
        "name": "m",
        "normalized": "Bool-\u003ePBool",
        "package": "probability",
        "partial": "",
        "signature": "Bool-\u003ePBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Alarm.html#v:mary",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Numeric.Probability.Example.Alarm",
        "fct-package": "probability",
        "fct-signature": "Bool",
        "fct-source": "src/Numeric-Probability-Example-Alarm.html#Burglary",
        "fct-type": "function",
        "title": "mary"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Alarm",
        "module": "Numeric.Probability.Example.Alarm",
        "name": "mary",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Alarm.html#v:pmj",
      "description": {
        "fct-descr": "\u003cp\u003ewhat is the probability that mary calls given that john calls?\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Example.Alarm",
        "fct-package": "probability",
        "fct-signature": "Probability",
        "fct-source": "src/Numeric-Probability-Example-Alarm.html#pmj",
        "fct-type": "function",
        "title": "pmj"
      },
      "index": {
        "description": "what is the probability that mary calls given that john calls",
        "hierarchy": "Numeric Probability Example Alarm",
        "module": "Numeric.Probability.Example.Alarm",
        "name": "pmj",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Barber.html#",
      "description": {
        "fct-module": "Numeric.Probability.Example.Barber",
        "fct-package": "probability",
        "fct-signature": "module",
        "fct-source": "src/Numeric-Probability-Example-Barber.html",
        "fct-type": "module",
        "title": "Barber"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Barber",
        "module": "Numeric.Probability.Example.Barber",
        "name": "Barber",
        "normalized": "",
        "package": "probability",
        "partial": "Barber",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Barber.html#t:Category",
      "description": {
        "fct-module": "Numeric.Probability.Example.Barber",
        "fct-package": "probability",
        "fct-signature": "data",
        "fct-source": "src/Numeric-Probability-Example-Barber.html#Category",
        "fct-type": "data",
        "title": "Category"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Barber",
        "module": "Numeric.Probability.Example.Barber",
        "name": "Category",
        "normalized": "",
        "package": "probability",
        "partial": "Category",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Barber.html#v:FourToTen",
      "description": {
        "fct-module": "Numeric.Probability.Example.Barber",
        "fct-package": "probability",
        "fct-signature": "FourToTen",
        "fct-source": "src/Numeric-Probability-Example-Barber.html#Category",
        "fct-type": "function",
        "title": "FourToTen"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Barber",
        "module": "Numeric.Probability.Example.Barber",
        "name": "FourToTen",
        "normalized": "",
        "package": "probability",
        "partial": "Four To Ten",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Barber.html#v:MoreThanTen",
      "description": {
        "fct-module": "Numeric.Probability.Example.Barber",
        "fct-package": "probability",
        "fct-signature": "MoreThanTen",
        "fct-source": "src/Numeric-Probability-Example-Barber.html#Category",
        "fct-type": "function",
        "title": "MoreThanTen"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Barber",
        "module": "Numeric.Probability.Example.Barber",
        "name": "MoreThanTen",
        "normalized": "",
        "package": "probability",
        "partial": "More Than Ten",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Barber.html#v:ThreeOrLess",
      "description": {
        "fct-module": "Numeric.Probability.Example.Barber",
        "fct-package": "probability",
        "fct-signature": "ThreeOrLess",
        "fct-source": "src/Numeric-Probability-Example-Barber.html#Category",
        "fct-type": "function",
        "title": "ThreeOrLess"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Barber",
        "module": "Numeric.Probability.Example.Barber",
        "name": "ThreeOrLess",
        "normalized": "",
        "package": "probability",
        "partial": "Three Or Less",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Barber.html#v:barberEvent",
      "description": {
        "fct-module": "Numeric.Probability.Example.Barber",
        "fct-package": "probability",
        "fct-signature": "((), (Dist Time, Time -\u003e Dist Time))",
        "fct-source": "src/Numeric-Probability-Example-Barber.html#barberEvent",
        "fct-type": "function",
        "title": "barberEvent"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Barber",
        "module": "Numeric.Probability.Example.Barber",
        "name": "barberEvent",
        "normalized": "((),(Dist Time,Time-\u003eDist Time))",
        "package": "probability",
        "partial": "Event",
        "signature": "((),(Dist Time,Time-\u003eDist Time))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Barber.html#v:barberEvents",
      "description": {
        "fct-module": "Numeric.Probability.Example.Barber",
        "fct-package": "probability",
        "fct-signature": "[((), (Dist Time, Time -\u003e Dist Time))]",
        "fct-source": "src/Numeric-Probability-Example-Barber.html#barberEvents",
        "fct-type": "function",
        "title": "barberEvents"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Barber",
        "module": "Numeric.Probability.Example.Barber",
        "name": "barberEvents",
        "normalized": "[((),(Dist Time,Time-\u003eDist Time))]",
        "package": "probability",
        "partial": "Events",
        "signature": "[((),(Dist Time,Time-\u003eDist Time))]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Barber.html#v:barberIdle",
      "description": {
        "fct-descr": "\u003cp\u003eavg barber idle time\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Example.Barber",
        "fct-package": "probability",
        "fct-signature": "RDist String",
        "fct-source": "src/Numeric-Probability-Example-Barber.html#barberIdle",
        "fct-type": "function",
        "title": "barberIdle"
      },
      "index": {
        "description": "avg barber idle time",
        "hierarchy": "Numeric Probability Example Barber",
        "module": "Numeric.Probability.Example.Barber",
        "name": "barberIdle",
        "normalized": "",
        "package": "probability",
        "partial": "Idle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Barber.html#v:barberSystem",
      "description": {
        "fct-module": "Numeric.Probability.Example.Barber",
        "fct-package": "probability",
        "fct-signature": "(System () -\u003e b) -\u003e RDist b",
        "fct-source": "src/Numeric-Probability-Example-Barber.html#barberSystem",
        "fct-type": "function",
        "title": "barberSystem"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Barber",
        "module": "Numeric.Probability.Example.Barber",
        "name": "barberSystem",
        "normalized": "(System()-\u003ea)-\u003eRDist a",
        "package": "probability",
        "partial": "System",
        "signature": "(System()-\u003eb)-\u003eRDist b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Barber.html#v:barbers",
      "description": {
        "fct-module": "Numeric.Probability.Example.Barber",
        "fct-package": "probability",
        "fct-signature": "Int",
        "fct-source": "src/Numeric-Probability-Example-Barber.html#barbers",
        "fct-type": "function",
        "title": "barbers"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Barber",
        "module": "Numeric.Probability.Example.Barber",
        "name": "barbers",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Barber.html#v:cat",
      "description": {
        "fct-module": "Numeric.Probability.Example.Barber",
        "fct-package": "probability",
        "fct-signature": "Time -\u003e Category",
        "fct-source": "src/Numeric-Probability-Example-Barber.html#cat",
        "fct-type": "function",
        "title": "cat"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Barber",
        "module": "Numeric.Probability.Example.Barber",
        "name": "cat",
        "normalized": "Time-\u003eCategory",
        "package": "probability",
        "partial": "",
        "signature": "Time-\u003eCategory"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Barber.html#v:custServ",
      "description": {
        "fct-module": "Numeric.Probability.Example.Barber",
        "fct-package": "probability",
        "fct-signature": "Dist Time",
        "fct-source": "src/Numeric-Probability-Example-Barber.html#custServ",
        "fct-type": "function",
        "title": "custServ"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Barber",
        "module": "Numeric.Probability.Example.Barber",
        "name": "custServ",
        "normalized": "",
        "package": "probability",
        "partial": "Serv",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Barber.html#v:customerWait",
      "description": {
        "fct-descr": "\u003cp\u003eavg customer waiting time (unserved customers)\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Example.Barber",
        "fct-package": "probability",
        "fct-signature": "RDist Category",
        "fct-source": "src/Numeric-Probability-Example-Barber.html#customerWait",
        "fct-type": "function",
        "title": "customerWait"
      },
      "index": {
        "description": "avg customer waiting time unserved customers",
        "hierarchy": "Numeric Probability Example Barber",
        "module": "Numeric.Probability.Example.Barber",
        "name": "customerWait",
        "normalized": "",
        "package": "probability",
        "partial": "Wait",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Barber.html#v:customers",
      "description": {
        "fct-module": "Numeric.Probability.Example.Barber",
        "fct-package": "probability",
        "fct-signature": "Int",
        "fct-source": "src/Numeric-Probability-Example-Barber.html#customers",
        "fct-type": "function",
        "title": "customers"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Barber",
        "module": "Numeric.Probability.Example.Barber",
        "name": "customers",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Barber.html#v:nextCust",
      "description": {
        "fct-module": "Numeric.Probability.Example.Barber",
        "fct-package": "probability",
        "fct-signature": "Trans Time",
        "fct-source": "src/Numeric-Probability-Example-Barber.html#nextCust",
        "fct-type": "function",
        "title": "nextCust"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Barber",
        "module": "Numeric.Probability.Example.Barber",
        "name": "nextCust",
        "normalized": "",
        "package": "probability",
        "partial": "Cust",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Barber.html#v:perc",
      "description": {
        "fct-module": "Numeric.Probability.Example.Barber",
        "fct-package": "probability",
        "fct-signature": "Float -\u003e String",
        "fct-source": "src/Numeric-Probability-Example-Barber.html#perc",
        "fct-type": "function",
        "title": "perc"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Barber",
        "module": "Numeric.Probability.Example.Barber",
        "name": "perc",
        "normalized": "Float-\u003eString",
        "package": "probability",
        "partial": "",
        "signature": "Float-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Barber.html#v:runs",
      "description": {
        "fct-module": "Numeric.Probability.Example.Barber",
        "fct-package": "probability",
        "fct-signature": "Int",
        "fct-source": "src/Numeric-Probability-Example-Barber.html#runs",
        "fct-type": "function",
        "title": "runs"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Barber",
        "module": "Numeric.Probability.Example.Barber",
        "name": "runs",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Bayesian.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eApproach: model a node with k predecessors as a function with k\n          parameters\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.Probability.Example.Bayesian",
        "fct-package": "probability",
        "fct-signature": "module",
        "fct-source": "src/Numeric-Probability-Example-Bayesian.html",
        "fct-type": "module",
        "title": "Bayesian"
      },
      "index": {
        "description": "Approach model node with predecessors as function with parameters",
        "hierarchy": "Numeric Probability Example Bayesian",
        "module": "Numeric.Probability.Example.Bayesian",
        "name": "Bayesian",
        "normalized": "",
        "package": "probability",
        "partial": "Bayesian",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Bayesian.html#t:Dist",
      "description": {
        "fct-module": "Numeric.Probability.Example.Bayesian",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Example-Bayesian.html#Dist",
        "fct-type": "type",
        "title": "Dist"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Bayesian",
        "module": "Numeric.Probability.Example.Bayesian",
        "name": "Dist",
        "normalized": "",
        "package": "probability",
        "partial": "Dist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Bayesian.html#t:Nodes",
      "description": {
        "fct-descr": "\u003cp\u003eTwo possible causes for one effect\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Example.Bayesian",
        "fct-package": "probability",
        "fct-signature": "data",
        "fct-source": "src/Numeric-Probability-Example-Bayesian.html#Nodes",
        "fct-type": "data",
        "title": "Nodes"
      },
      "index": {
        "description": "Two possible causes for one effect",
        "hierarchy": "Numeric Probability Example Bayesian",
        "module": "Numeric.Probability.Example.Bayesian",
        "name": "Nodes",
        "normalized": "",
        "package": "probability",
        "partial": "Nodes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Bayesian.html#t:PState",
      "description": {
        "fct-module": "Numeric.Probability.Example.Bayesian",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Example-Bayesian.html#PState",
        "fct-type": "type",
        "title": "PState"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Bayesian",
        "module": "Numeric.Probability.Example.Bayesian",
        "name": "PState",
        "normalized": "",
        "package": "probability",
        "partial": "PState",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Bayesian.html#t:Probability",
      "description": {
        "fct-module": "Numeric.Probability.Example.Bayesian",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Example-Bayesian.html#Probability",
        "fct-type": "type",
        "title": "Probability"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Bayesian",
        "module": "Numeric.Probability.Example.Bayesian",
        "name": "Probability",
        "normalized": "",
        "package": "probability",
        "partial": "Probability",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Bayesian.html#t:SPred",
      "description": {
        "fct-module": "Numeric.Probability.Example.Bayesian",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Example-Bayesian.html#SPred",
        "fct-type": "type",
        "title": "SPred"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Bayesian",
        "module": "Numeric.Probability.Example.Bayesian",
        "name": "SPred",
        "normalized": "",
        "package": "probability",
        "partial": "SPred",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Bayesian.html#t:STrans",
      "description": {
        "fct-module": "Numeric.Probability.Example.Bayesian",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Example-Bayesian.html#STrans",
        "fct-type": "type",
        "title": "STrans"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Bayesian",
        "module": "Numeric.Probability.Example.Bayesian",
        "name": "STrans",
        "normalized": "",
        "package": "probability",
        "partial": "STrans",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Bayesian.html#t:State",
      "description": {
        "fct-module": "Numeric.Probability.Example.Bayesian",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Example-Bayesian.html#State",
        "fct-type": "type",
        "title": "State"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Bayesian",
        "module": "Numeric.Probability.Example.Bayesian",
        "name": "State",
        "normalized": "",
        "package": "probability",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Bayesian.html#v:A",
      "description": {
        "fct-module": "Numeric.Probability.Example.Bayesian",
        "fct-package": "probability",
        "fct-signature": "A",
        "fct-source": "src/Numeric-Probability-Example-Bayesian.html#Nodes",
        "fct-type": "function",
        "title": "A"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Bayesian",
        "module": "Numeric.Probability.Example.Bayesian",
        "name": "A",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Bayesian.html#v:B",
      "description": {
        "fct-module": "Numeric.Probability.Example.Bayesian",
        "fct-package": "probability",
        "fct-signature": "B",
        "fct-source": "src/Numeric-Probability-Example-Bayesian.html#Nodes",
        "fct-type": "function",
        "title": "B"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Bayesian",
        "module": "Numeric.Probability.Example.Bayesian",
        "name": "B",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Bayesian.html#v:E",
      "description": {
        "fct-module": "Numeric.Probability.Example.Bayesian",
        "fct-package": "probability",
        "fct-signature": "E",
        "fct-source": "src/Numeric-Probability-Example-Bayesian.html#Nodes",
        "fct-type": "function",
        "title": "E"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Bayesian",
        "module": "Numeric.Probability.Example.Bayesian",
        "name": "E",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Bayesian.html#v:aE",
      "description": {
        "fct-module": "Numeric.Probability.Example.Bayesian",
        "fct-package": "probability",
        "fct-signature": "Probability",
        "fct-source": "src/Numeric-Probability-Example-Bayesian.html#e",
        "fct-type": "function",
        "title": "aE"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Bayesian",
        "module": "Numeric.Probability.Example.Bayesian",
        "name": "aE",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Bayesian.html#v:bE",
      "description": {
        "fct-module": "Numeric.Probability.Example.Bayesian",
        "fct-package": "probability",
        "fct-signature": "Probability",
        "fct-source": "src/Numeric-Probability-Example-Bayesian.html#e",
        "fct-type": "function",
        "title": "bE"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Bayesian",
        "module": "Numeric.Probability.Example.Bayesian",
        "name": "bE",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Bayesian.html#v:bin",
      "description": {
        "fct-module": "Numeric.Probability.Example.Bayesian",
        "fct-package": "probability",
        "fct-signature": "a -\u003e a -\u003e Probability -\u003e Probability -\u003e Probability -\u003e Probability -\u003e a -\u003e STrans a",
        "fct-source": "src/Numeric-Probability-Example-Bayesian.html#bin",
        "fct-type": "function",
        "title": "bin"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Bayesian",
        "module": "Numeric.Probability.Example.Bayesian",
        "name": "bin",
        "normalized": "a-\u003ea-\u003eProbability-\u003eProbability-\u003eProbability-\u003eProbability-\u003ea-\u003eSTrans a",
        "package": "probability",
        "partial": "",
        "signature": "a-\u003ea-\u003eProbability-\u003eProbability-\u003eProbability-\u003eProbability-\u003ea-\u003eSTrans a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Bayesian.html#v:e",
      "description": {
        "fct-module": "Numeric.Probability.Example.Bayesian",
        "fct-package": "probability",
        "fct-signature": "Probability",
        "fct-source": "src/Numeric-Probability-Example-Bayesian.html#e",
        "fct-type": "function",
        "title": "e"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Bayesian",
        "module": "Numeric.Probability.Example.Bayesian",
        "name": "e",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Bayesian.html#v:event",
      "description": {
        "fct-module": "Numeric.Probability.Example.Bayesian",
        "fct-package": "probability",
        "fct-signature": "Probability -\u003e a -\u003e STrans a",
        "fct-source": "src/Numeric-Probability-Example-Bayesian.html#event",
        "fct-type": "function",
        "title": "event"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Bayesian",
        "module": "Numeric.Probability.Example.Bayesian",
        "name": "event",
        "normalized": "Probability-\u003ea-\u003eSTrans a",
        "package": "probability",
        "partial": "",
        "signature": "Probability-\u003ea-\u003eSTrans a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Bayesian.html#v:g",
      "description": {
        "fct-module": "Numeric.Probability.Example.Bayesian",
        "fct-package": "probability",
        "fct-signature": "PState Nodes",
        "fct-source": "src/Numeric-Probability-Example-Bayesian.html#g",
        "fct-type": "function",
        "title": "g"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Bayesian",
        "module": "Numeric.Probability.Example.Bayesian",
        "name": "g",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Bayesian.html#v:happens",
      "description": {
        "fct-module": "Numeric.Probability.Example.Bayesian",
        "fct-package": "probability",
        "fct-signature": "SPred a",
        "fct-source": "src/Numeric-Probability-Example-Bayesian.html#happens",
        "fct-type": "function",
        "title": "happens"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Bayesian",
        "module": "Numeric.Probability.Example.Bayesian",
        "name": "happens",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Bayesian.html#v:network",
      "description": {
        "fct-module": "Numeric.Probability.Example.Bayesian",
        "fct-package": "probability",
        "fct-signature": "[STrans a] -\u003e PState a",
        "fct-source": "src/Numeric-Probability-Example-Bayesian.html#network",
        "fct-type": "function",
        "title": "network"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Bayesian",
        "module": "Numeric.Probability.Example.Bayesian",
        "name": "network",
        "normalized": "[STrans a]-\u003ePState a",
        "package": "probability",
        "partial": "",
        "signature": "[STrans a]-\u003ePState a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Bayesian.html#v:source",
      "description": {
        "fct-module": "Numeric.Probability.Example.Bayesian",
        "fct-package": "probability",
        "fct-signature": "Probability -\u003e a -\u003e STrans a",
        "fct-source": "src/Numeric-Probability-Example-Bayesian.html#source",
        "fct-type": "function",
        "title": "source"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Bayesian",
        "module": "Numeric.Probability.Example.Bayesian",
        "name": "source",
        "normalized": "Probability-\u003ea-\u003eSTrans a",
        "package": "probability",
        "partial": "",
        "signature": "Probability-\u003ea-\u003eSTrans a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Boys.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConsider a family of two children.  Given that there is a boy in the family,\nwhat is the probability that there are two boys in the family?\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.Probability.Example.Boys",
        "fct-package": "probability",
        "fct-signature": "module",
        "fct-source": "src/Numeric-Probability-Example-Boys.html",
        "fct-type": "module",
        "title": "Boys"
      },
      "index": {
        "description": "Consider family of two children Given that there is boy in the family what is the probability that there are two boys in the family",
        "hierarchy": "Numeric Probability Example Boys",
        "module": "Numeric.Probability.Example.Boys",
        "name": "Boys",
        "normalized": "",
        "package": "probability",
        "partial": "Boys",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Boys.html#t:Child",
      "description": {
        "fct-module": "Numeric.Probability.Example.Boys",
        "fct-package": "probability",
        "fct-signature": "data",
        "fct-source": "src/Numeric-Probability-Example-Boys.html#Child",
        "fct-type": "data",
        "title": "Child"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Boys",
        "module": "Numeric.Probability.Example.Boys",
        "name": "Child",
        "normalized": "",
        "package": "probability",
        "partial": "Child",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Boys.html#t:Dist",
      "description": {
        "fct-module": "Numeric.Probability.Example.Boys",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Example-Boys.html#Dist",
        "fct-type": "type",
        "title": "Dist"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Boys",
        "module": "Numeric.Probability.Example.Boys",
        "name": "Dist",
        "normalized": "",
        "package": "probability",
        "partial": "Dist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Boys.html#t:Family",
      "description": {
        "fct-module": "Numeric.Probability.Example.Boys",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Example-Boys.html#Family",
        "fct-type": "type",
        "title": "Family"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Boys",
        "module": "Numeric.Probability.Example.Boys",
        "name": "Family",
        "normalized": "",
        "package": "probability",
        "partial": "Family",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Boys.html#t:Probability",
      "description": {
        "fct-module": "Numeric.Probability.Example.Boys",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Example-Boys.html#Probability",
        "fct-type": "type",
        "title": "Probability"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Boys",
        "module": "Numeric.Probability.Example.Boys",
        "name": "Probability",
        "normalized": "",
        "package": "probability",
        "partial": "Probability",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Boys.html#v:Boy",
      "description": {
        "fct-module": "Numeric.Probability.Example.Boys",
        "fct-package": "probability",
        "fct-signature": "Boy",
        "fct-source": "src/Numeric-Probability-Example-Boys.html#Child",
        "fct-type": "function",
        "title": "Boy"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Boys",
        "module": "Numeric.Probability.Example.Boys",
        "name": "Boy",
        "normalized": "",
        "package": "probability",
        "partial": "Boy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Boys.html#v:Girl",
      "description": {
        "fct-module": "Numeric.Probability.Example.Boys",
        "fct-package": "probability",
        "fct-signature": "Girl",
        "fct-source": "src/Numeric-Probability-Example-Boys.html#Child",
        "fct-type": "function",
        "title": "Girl"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Boys",
        "module": "Numeric.Probability.Example.Boys",
        "name": "Girl",
        "normalized": "",
        "package": "probability",
        "partial": "Girl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Boys.html#v:allBoys",
      "description": {
        "fct-module": "Numeric.Probability.Example.Boys",
        "fct-package": "probability",
        "fct-signature": "Event Family",
        "fct-source": "src/Numeric-Probability-Example-Boys.html#allBoys",
        "fct-type": "function",
        "title": "allBoys"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Boys",
        "module": "Numeric.Probability.Example.Boys",
        "name": "allBoys",
        "normalized": "",
        "package": "probability",
        "partial": "Boys",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Boys.html#v:birth",
      "description": {
        "fct-module": "Numeric.Probability.Example.Boys",
        "fct-package": "probability",
        "fct-signature": "Dist Child",
        "fct-source": "src/Numeric-Probability-Example-Boys.html#birth",
        "fct-type": "function",
        "title": "birth"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Boys",
        "module": "Numeric.Probability.Example.Boys",
        "name": "birth",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Boys.html#v:countBoy",
      "description": {
        "fct-module": "Numeric.Probability.Example.Boys",
        "fct-package": "probability",
        "fct-signature": "Child -\u003e Int",
        "fct-source": "src/Numeric-Probability-Example-Boys.html#countBoy",
        "fct-type": "function",
        "title": "countBoy"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Boys",
        "module": "Numeric.Probability.Example.Boys",
        "name": "countBoy",
        "normalized": "Child-\u003eInt",
        "package": "probability",
        "partial": "Boy",
        "signature": "Child-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Boys.html#v:countBoys",
      "description": {
        "fct-module": "Numeric.Probability.Example.Boys",
        "fct-package": "probability",
        "fct-signature": "Family -\u003e Int",
        "fct-source": "src/Numeric-Probability-Example-Boys.html#countBoys",
        "fct-type": "function",
        "title": "countBoys"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Boys",
        "module": "Numeric.Probability.Example.Boys",
        "name": "countBoys",
        "normalized": "Family-\u003eInt",
        "package": "probability",
        "partial": "Boys",
        "signature": "Family-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Boys.html#v:existsBoy",
      "description": {
        "fct-module": "Numeric.Probability.Example.Boys",
        "fct-package": "probability",
        "fct-signature": "Event Family",
        "fct-source": "src/Numeric-Probability-Example-Boys.html#existsBoy",
        "fct-type": "function",
        "title": "existsBoy"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Boys",
        "module": "Numeric.Probability.Example.Boys",
        "name": "existsBoy",
        "normalized": "",
        "package": "probability",
        "partial": "Boy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Boys.html#v:family",
      "description": {
        "fct-module": "Numeric.Probability.Example.Boys",
        "fct-package": "probability",
        "fct-signature": "Dist Family",
        "fct-source": "src/Numeric-Probability-Example-Boys.html#family",
        "fct-type": "function",
        "title": "family"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Boys",
        "module": "Numeric.Probability.Example.Boys",
        "name": "family",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Boys.html#v:familyWithBoy",
      "description": {
        "fct-module": "Numeric.Probability.Example.Boys",
        "fct-package": "probability",
        "fct-signature": "Dist Family",
        "fct-source": "src/Numeric-Probability-Example-Boys.html#familyWithBoy",
        "fct-type": "function",
        "title": "familyWithBoy"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Boys",
        "module": "Numeric.Probability.Example.Boys",
        "name": "familyWithBoy",
        "normalized": "",
        "package": "probability",
        "partial": "With Boy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Boys.html#v:numBoys",
      "description": {
        "fct-module": "Numeric.Probability.Example.Boys",
        "fct-package": "probability",
        "fct-signature": "Dist Int",
        "fct-source": "src/Numeric-Probability-Example-Boys.html#numBoys",
        "fct-type": "function",
        "title": "numBoys"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Boys",
        "module": "Numeric.Probability.Example.Boys",
        "name": "numBoys",
        "normalized": "",
        "package": "probability",
        "partial": "Boys",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Boys.html#v:twoBoys",
      "description": {
        "fct-module": "Numeric.Probability.Example.Boys",
        "fct-package": "probability",
        "fct-signature": "Probability",
        "fct-source": "src/Numeric-Probability-Example-Boys.html#twoBoys",
        "fct-type": "function",
        "title": "twoBoys"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Boys",
        "module": "Numeric.Probability.Example.Boys",
        "name": "twoBoys",
        "normalized": "",
        "package": "probability",
        "partial": "Boys",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#",
      "description": {
        "fct-module": "Numeric.Probability.Example.Collection",
        "fct-package": "probability",
        "fct-signature": "module",
        "fct-source": "src/Numeric-Probability-Example-Collection.html",
        "fct-type": "module",
        "title": "Collection"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Collection",
        "module": "Numeric.Probability.Example.Collection",
        "name": "Collection",
        "normalized": "",
        "package": "probability",
        "partial": "Collection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#t:Card",
      "description": {
        "fct-module": "Numeric.Probability.Example.Collection",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Example-Collection.html#Card",
        "fct-type": "type",
        "title": "Card"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Collection",
        "module": "Numeric.Probability.Example.Collection",
        "name": "Card",
        "normalized": "",
        "package": "probability",
        "partial": "Card",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#t:Collection",
      "description": {
        "fct-module": "Numeric.Probability.Example.Collection",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Example-Collection.html#Collection",
        "fct-type": "type",
        "title": "Collection"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Collection",
        "module": "Numeric.Probability.Example.Collection",
        "name": "Collection",
        "normalized": "",
        "package": "probability",
        "partial": "Collection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#t:Marble",
      "description": {
        "fct-module": "Numeric.Probability.Example.Collection",
        "fct-package": "probability",
        "fct-signature": "data",
        "fct-source": "src/Numeric-Probability-Example-Collection.html#Marble",
        "fct-type": "data",
        "title": "Marble"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Collection",
        "module": "Numeric.Probability.Example.Collection",
        "name": "Marble",
        "normalized": "",
        "package": "probability",
        "partial": "Marble",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#t:Probability",
      "description": {
        "fct-module": "Numeric.Probability.Example.Collection",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Example-Collection.html#Probability",
        "fct-type": "type",
        "title": "Probability"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Collection",
        "module": "Numeric.Probability.Example.Collection",
        "name": "Probability",
        "normalized": "",
        "package": "probability",
        "partial": "Probability",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#t:Rank",
      "description": {
        "fct-module": "Numeric.Probability.Example.Collection",
        "fct-package": "probability",
        "fct-signature": "data",
        "fct-source": "src/Numeric-Probability-Example-Collection.html#Rank",
        "fct-type": "data",
        "title": "Rank"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Collection",
        "module": "Numeric.Probability.Example.Collection",
        "name": "Rank",
        "normalized": "",
        "package": "probability",
        "partial": "Rank",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#t:Suit",
      "description": {
        "fct-module": "Numeric.Probability.Example.Collection",
        "fct-package": "probability",
        "fct-signature": "data",
        "fct-source": "src/Numeric-Probability-Example-Collection.html#Suit",
        "fct-type": "data",
        "title": "Suit"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Collection",
        "module": "Numeric.Probability.Example.Collection",
        "name": "Suit",
        "normalized": "",
        "package": "probability",
        "partial": "Suit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:Ace",
      "description": {
        "fct-module": "Numeric.Probability.Example.Collection",
        "fct-package": "probability",
        "fct-signature": "Ace",
        "fct-source": "src/Numeric-Probability-Example-Collection.html#Rank",
        "fct-type": "function",
        "title": "Ace"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Collection",
        "module": "Numeric.Probability.Example.Collection",
        "name": "Ace",
        "normalized": "",
        "package": "probability",
        "partial": "Ace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:B",
      "description": {
        "fct-module": "Numeric.Probability.Example.Collection",
        "fct-package": "probability",
        "fct-signature": "B",
        "fct-source": "src/Numeric-Probability-Example-Collection.html#Marble",
        "fct-type": "function",
        "title": "B"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Collection",
        "module": "Numeric.Probability.Example.Collection",
        "name": "B",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:Club",
      "description": {
        "fct-module": "Numeric.Probability.Example.Collection",
        "fct-package": "probability",
        "fct-signature": "Club",
        "fct-source": "src/Numeric-Probability-Example-Collection.html#Suit",
        "fct-type": "function",
        "title": "Club"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Collection",
        "module": "Numeric.Probability.Example.Collection",
        "name": "Club",
        "normalized": "",
        "package": "probability",
        "partial": "Club",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:Diamond",
      "description": {
        "fct-module": "Numeric.Probability.Example.Collection",
        "fct-package": "probability",
        "fct-signature": "Diamond",
        "fct-source": "src/Numeric-Probability-Example-Collection.html#Suit",
        "fct-type": "function",
        "title": "Diamond"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Collection",
        "module": "Numeric.Probability.Example.Collection",
        "name": "Diamond",
        "normalized": "",
        "package": "probability",
        "partial": "Diamond",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:G",
      "description": {
        "fct-module": "Numeric.Probability.Example.Collection",
        "fct-package": "probability",
        "fct-signature": "G",
        "fct-source": "src/Numeric-Probability-Example-Collection.html#Marble",
        "fct-type": "function",
        "title": "G"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Collection",
        "module": "Numeric.Probability.Example.Collection",
        "name": "G",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:Heart",
      "description": {
        "fct-module": "Numeric.Probability.Example.Collection",
        "fct-package": "probability",
        "fct-signature": "Heart",
        "fct-source": "src/Numeric-Probability-Example-Collection.html#Suit",
        "fct-type": "function",
        "title": "Heart"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Collection",
        "module": "Numeric.Probability.Example.Collection",
        "name": "Heart",
        "normalized": "",
        "package": "probability",
        "partial": "Heart",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:Jack",
      "description": {
        "fct-module": "Numeric.Probability.Example.Collection",
        "fct-package": "probability",
        "fct-signature": "Jack",
        "fct-source": "src/Numeric-Probability-Example-Collection.html#Rank",
        "fct-type": "function",
        "title": "Jack"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Collection",
        "module": "Numeric.Probability.Example.Collection",
        "name": "Jack",
        "normalized": "",
        "package": "probability",
        "partial": "Jack",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:King",
      "description": {
        "fct-module": "Numeric.Probability.Example.Collection",
        "fct-package": "probability",
        "fct-signature": "King",
        "fct-source": "src/Numeric-Probability-Example-Collection.html#Rank",
        "fct-type": "function",
        "title": "King"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Collection",
        "module": "Numeric.Probability.Example.Collection",
        "name": "King",
        "normalized": "",
        "package": "probability",
        "partial": "King",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:Plain",
      "description": {
        "fct-module": "Numeric.Probability.Example.Collection",
        "fct-package": "probability",
        "fct-signature": "Plain Int",
        "fct-source": "src/Numeric-Probability-Example-Collection.html#Rank",
        "fct-type": "function",
        "title": "Plain"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Collection",
        "module": "Numeric.Probability.Example.Collection",
        "name": "Plain",
        "normalized": "",
        "package": "probability",
        "partial": "Plain",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:Queen",
      "description": {
        "fct-module": "Numeric.Probability.Example.Collection",
        "fct-package": "probability",
        "fct-signature": "Queen",
        "fct-source": "src/Numeric-Probability-Example-Collection.html#Rank",
        "fct-type": "function",
        "title": "Queen"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Collection",
        "module": "Numeric.Probability.Example.Collection",
        "name": "Queen",
        "normalized": "",
        "package": "probability",
        "partial": "Queen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:R",
      "description": {
        "fct-module": "Numeric.Probability.Example.Collection",
        "fct-package": "probability",
        "fct-signature": "R",
        "fct-source": "src/Numeric-Probability-Example-Collection.html#Marble",
        "fct-type": "function",
        "title": "R"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Collection",
        "module": "Numeric.Probability.Example.Collection",
        "name": "R",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:Spade",
      "description": {
        "fct-module": "Numeric.Probability.Example.Collection",
        "fct-package": "probability",
        "fct-signature": "Spade",
        "fct-source": "src/Numeric-Probability-Example-Collection.html#Suit",
        "fct-type": "function",
        "title": "Spade"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Collection",
        "module": "Numeric.Probability.Example.Collection",
        "name": "Spade",
        "normalized": "",
        "package": "probability",
        "partial": "Spade",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:bucket",
      "description": {
        "fct-module": "Numeric.Probability.Example.Collection",
        "fct-package": "probability",
        "fct-signature": "Collection Marble",
        "fct-source": "src/Numeric-Probability-Example-Collection.html#bucket",
        "fct-type": "function",
        "title": "bucket"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Collection",
        "module": "Numeric.Probability.Example.Collection",
        "name": "bucket",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:chanceWin",
      "description": {
        "fct-module": "Numeric.Probability.Example.Collection",
        "fct-package": "probability",
        "fct-signature": "T (T prob Bool)",
        "fct-source": "src/Numeric-Probability-Example-Collection.html#chanceWin",
        "fct-type": "function",
        "title": "chanceWin"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Collection",
        "module": "Numeric.Probability.Example.Collection",
        "name": "chanceWin",
        "normalized": "",
        "package": "probability",
        "partial": "Win",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:deck",
      "description": {
        "fct-module": "Numeric.Probability.Example.Collection",
        "fct-package": "probability",
        "fct-signature": "Collection Card",
        "fct-source": "src/Numeric-Probability-Example-Collection.html#deck",
        "fct-type": "function",
        "title": "deck"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Collection",
        "module": "Numeric.Probability.Example.Collection",
        "name": "deck",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:draw",
      "description": {
        "fct-module": "Numeric.Probability.Example.Collection",
        "fct-package": "probability",
        "fct-signature": "([Card], Collection Card) -\u003e T prob ([Card], Collection Card)",
        "fct-source": "src/Numeric-Probability-Example-Collection.html#draw",
        "fct-type": "function",
        "title": "draw"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Collection",
        "module": "Numeric.Probability.Example.Collection",
        "name": "draw",
        "normalized": "([Card],Collection Card)-\u003eT a([Card],Collection Card)",
        "package": "probability",
        "partial": "",
        "signature": "([Card],Collection Card)-\u003eT prob([Card],Collection Card)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:drawF",
      "description": {
        "fct-module": "Numeric.Probability.Example.Collection",
        "fct-package": "probability",
        "fct-signature": "([Card], Collection Card) -\u003e Dist ([Card], Collection Card)",
        "fct-source": "src/Numeric-Probability-Example-Collection.html#drawF",
        "fct-type": "function",
        "title": "drawF"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Collection",
        "module": "Numeric.Probability.Example.Collection",
        "name": "drawF",
        "normalized": "([Card],Collection Card)-\u003eDist([Card],Collection Card)",
        "package": "probability",
        "partial": "",
        "signature": "([Card],Collection Card)-\u003eDist([Card],Collection Card)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:drawTo16",
      "description": {
        "fct-module": "Numeric.Probability.Example.Collection",
        "fct-package": "probability",
        "fct-signature": "T ([Card], Collection Card)",
        "fct-source": "src/Numeric-Probability-Example-Collection.html#drawTo16",
        "fct-type": "function",
        "title": "drawTo16"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Collection",
        "module": "Numeric.Probability.Example.Collection",
        "name": "drawTo16",
        "normalized": "T([Card],Collection Card)",
        "package": "probability",
        "partial": "To",
        "signature": "T([Card],Collection Card)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:faces",
      "description": {
        "fct-module": "Numeric.Probability.Example.Collection",
        "fct-package": "probability",
        "fct-signature": "[Rank]",
        "fct-source": "src/Numeric-Probability-Example-Collection.html#faces",
        "fct-type": "function",
        "title": "faces"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Collection",
        "module": "Numeric.Probability.Example.Collection",
        "name": "faces",
        "normalized": "[Rank]",
        "package": "probability",
        "partial": "",
        "signature": "[Rank]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:isFace",
      "description": {
        "fct-module": "Numeric.Probability.Example.Collection",
        "fct-package": "probability",
        "fct-signature": "Card -\u003e Bool",
        "fct-source": "src/Numeric-Probability-Example-Collection.html#isFace",
        "fct-type": "function",
        "title": "isFace"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Collection",
        "module": "Numeric.Probability.Example.Collection",
        "name": "isFace",
        "normalized": "Card-\u003eBool",
        "package": "probability",
        "partial": "Face",
        "signature": "Card-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:isPlain",
      "description": {
        "fct-module": "Numeric.Probability.Example.Collection",
        "fct-package": "probability",
        "fct-signature": "Card -\u003e Bool",
        "fct-source": "src/Numeric-Probability-Example-Collection.html#isPlain",
        "fct-type": "function",
        "title": "isPlain"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Collection",
        "module": "Numeric.Probability.Example.Collection",
        "name": "isPlain",
        "normalized": "Card-\u003eBool",
        "package": "probability",
        "partial": "Plain",
        "signature": "Card-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:jar",
      "description": {
        "fct-module": "Numeric.Probability.Example.Collection",
        "fct-package": "probability",
        "fct-signature": "Collection Marble",
        "fct-source": "src/Numeric-Probability-Example-Collection.html#jar",
        "fct-type": "function",
        "title": "jar"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Collection",
        "module": "Numeric.Probability.Example.Collection",
        "name": "jar",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:pRG",
      "description": {
        "fct-module": "Numeric.Probability.Example.Collection",
        "fct-package": "probability",
        "fct-signature": "Probability",
        "fct-source": "src/Numeric-Probability-Example-Collection.html#pRG",
        "fct-type": "function",
        "title": "pRG"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Collection",
        "module": "Numeric.Probability.Example.Collection",
        "name": "pRG",
        "normalized": "",
        "package": "probability",
        "partial": "RG",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:pRGB",
      "description": {
        "fct-module": "Numeric.Probability.Example.Collection",
        "fct-package": "probability",
        "fct-signature": "Probability",
        "fct-source": "src/Numeric-Probability-Example-Collection.html#pRGB",
        "fct-type": "function",
        "title": "pRGB"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Collection",
        "module": "Numeric.Probability.Example.Collection",
        "name": "pRGB",
        "normalized": "",
        "package": "probability",
        "partial": "RGB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:plains",
      "description": {
        "fct-module": "Numeric.Probability.Example.Collection",
        "fct-package": "probability",
        "fct-signature": "[Rank]",
        "fct-source": "src/Numeric-Probability-Example-Collection.html#plains",
        "fct-type": "function",
        "title": "plains"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Collection",
        "module": "Numeric.Probability.Example.Collection",
        "name": "plains",
        "normalized": "[Rank]",
        "package": "probability",
        "partial": "",
        "signature": "[Rank]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:ranks",
      "description": {
        "fct-module": "Numeric.Probability.Example.Collection",
        "fct-package": "probability",
        "fct-signature": "[Rank]",
        "fct-source": "src/Numeric-Probability-Example-Collection.html#ranks",
        "fct-type": "function",
        "title": "ranks"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Collection",
        "module": "Numeric.Probability.Example.Collection",
        "name": "ranks",
        "normalized": "[Rank]",
        "package": "probability",
        "partial": "",
        "signature": "[Rank]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:select",
      "description": {
        "fct-module": "Numeric.Probability.Example.Collection",
        "fct-package": "probability",
        "fct-signature": "Int -\u003e Collection a -\u003e T prob [a]",
        "fct-source": "src/Numeric-Probability-Example-Collection.html#select",
        "fct-type": "function",
        "title": "select"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Collection",
        "module": "Numeric.Probability.Example.Collection",
        "name": "select",
        "normalized": "Int-\u003eCollection a-\u003eT b[a]",
        "package": "probability",
        "partial": "",
        "signature": "Int-\u003eCollection a-\u003eT prob[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:select1",
      "description": {
        "fct-module": "Numeric.Probability.Example.Collection",
        "fct-package": "probability",
        "fct-signature": "Collection a -\u003e T prob a",
        "fct-source": "src/Numeric-Probability-Example-Collection.html#select1",
        "fct-type": "function",
        "title": "select1"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Collection",
        "module": "Numeric.Probability.Example.Collection",
        "name": "select1",
        "normalized": "Collection a-\u003eT b a",
        "package": "probability",
        "partial": "",
        "signature": "Collection a-\u003eT prob a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:select2",
      "description": {
        "fct-module": "Numeric.Probability.Example.Collection",
        "fct-package": "probability",
        "fct-signature": "Collection a -\u003e T prob (a, a)",
        "fct-source": "src/Numeric-Probability-Example-Collection.html#select2",
        "fct-type": "function",
        "title": "select2"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Collection",
        "module": "Numeric.Probability.Example.Collection",
        "name": "select2",
        "normalized": "Collection a-\u003eT b(a,a)",
        "package": "probability",
        "partial": "",
        "signature": "Collection a-\u003eT prob(a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:selectOne",
      "description": {
        "fct-module": "Numeric.Probability.Example.Collection",
        "fct-package": "probability",
        "fct-signature": "StateT (Collection a) (T prob) a",
        "fct-source": "src/Numeric-Probability-Example-Collection.html#selectOne",
        "fct-type": "function",
        "title": "selectOne"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Collection",
        "module": "Numeric.Probability.Example.Collection",
        "name": "selectOne",
        "normalized": "",
        "package": "probability",
        "partial": "One",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:suits",
      "description": {
        "fct-module": "Numeric.Probability.Example.Collection",
        "fct-package": "probability",
        "fct-signature": "[Suit]",
        "fct-source": "src/Numeric-Probability-Example-Collection.html#suits",
        "fct-type": "function",
        "title": "suits"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Collection",
        "module": "Numeric.Probability.Example.Collection",
        "name": "suits",
        "normalized": "[Suit]",
        "package": "probability",
        "partial": "",
        "signature": "[Suit]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:totalValue",
      "description": {
        "fct-module": "Numeric.Probability.Example.Collection",
        "fct-package": "probability",
        "fct-signature": "Collection Card -\u003e Int",
        "fct-source": "src/Numeric-Probability-Example-Collection.html#totalValue",
        "fct-type": "function",
        "title": "totalValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Collection",
        "module": "Numeric.Probability.Example.Collection",
        "name": "totalValue",
        "normalized": "Collection Card-\u003eInt",
        "package": "probability",
        "partial": "Value",
        "signature": "Collection Card-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:value",
      "description": {
        "fct-descr": "\u003cp\u003emini-blackjack:\ndraw 2 cards, and if value is less than 14, continue drawing\nuntil value equals or exceeds 14.  if values exceeds 21,\nyou lose, otherwise you win.\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Example.Collection",
        "fct-package": "probability",
        "fct-signature": "Card -\u003e Int",
        "fct-source": "src/Numeric-Probability-Example-Collection.html#value",
        "fct-type": "function",
        "title": "value"
      },
      "index": {
        "description": "mini-blackjack draw cards and if value is less than continue drawing until value equals or exceeds if values exceeds you lose otherwise you win",
        "hierarchy": "Numeric Probability Example Collection",
        "module": "Numeric.Probability.Example.Collection",
        "name": "value",
        "normalized": "Card-\u003eInt",
        "package": "probability",
        "partial": "",
        "signature": "Card-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:win",
      "description": {
        "fct-module": "Numeric.Probability.Example.Collection",
        "fct-package": "probability",
        "fct-signature": "([Card], b) -\u003e Bool",
        "fct-source": "src/Numeric-Probability-Example-Collection.html#win",
        "fct-type": "function",
        "title": "win"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Collection",
        "module": "Numeric.Probability.Example.Collection",
        "name": "win",
        "normalized": "([Card],a)-\u003eBool",
        "package": "probability",
        "partial": "",
        "signature": "([Card],b)-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Diagnosis.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eYou take part in a screening test for a disease\nthat you have with a probability \u003ccode\u003e\u003ca\u003epDisease\u003c/a\u003e\u003c/code\u003e.\nThe test can fail in two ways:\nIf you are ill,\nthe test says with probability \u003ccode\u003e\u003ca\u003epFalseNegative\u003c/a\u003e\u003c/code\u003e that you are healthy.\nIf you are healthy,\nit says with probability \u003ccode\u003e\u003ca\u003epFalsePositive\u003c/a\u003e\u003c/code\u003e that you are ill.\n\u003c/p\u003e\u003cp\u003eNow consider the test is positive -\nwhat is the probability that you are indeed ill?\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.Probability.Example.Diagnosis",
        "fct-package": "probability",
        "fct-signature": "module",
        "fct-source": "src/Numeric-Probability-Example-Diagnosis.html",
        "fct-type": "module",
        "title": "Diagnosis"
      },
      "index": {
        "description": "You take part in screening test for disease that you have with probability pDisease The test can fail in two ways If you are ill the test says with probability pFalseNegative that you are healthy If you are healthy it says with probability pFalsePositive that you are ill Now consider the test is positive what is the probability that you are indeed ill",
        "hierarchy": "Numeric Probability Example Diagnosis",
        "module": "Numeric.Probability.Example.Diagnosis",
        "name": "Diagnosis",
        "normalized": "",
        "package": "probability",
        "partial": "Diagnosis",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Diagnosis.html#t:Dist",
      "description": {
        "fct-module": "Numeric.Probability.Example.Diagnosis",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Example-Diagnosis.html#Dist",
        "fct-type": "type",
        "title": "Dist"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Diagnosis",
        "module": "Numeric.Probability.Example.Diagnosis",
        "name": "Dist",
        "normalized": "",
        "package": "probability",
        "partial": "Dist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Diagnosis.html#t:Finding",
      "description": {
        "fct-module": "Numeric.Probability.Example.Diagnosis",
        "fct-package": "probability",
        "fct-signature": "data",
        "fct-source": "src/Numeric-Probability-Example-Diagnosis.html#Finding",
        "fct-type": "data",
        "title": "Finding"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Diagnosis",
        "module": "Numeric.Probability.Example.Diagnosis",
        "name": "Finding",
        "normalized": "",
        "package": "probability",
        "partial": "Finding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Diagnosis.html#t:Probability",
      "description": {
        "fct-module": "Numeric.Probability.Example.Diagnosis",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Example-Diagnosis.html#Probability",
        "fct-type": "type",
        "title": "Probability"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Diagnosis",
        "module": "Numeric.Probability.Example.Diagnosis",
        "name": "Probability",
        "normalized": "",
        "package": "probability",
        "partial": "Probability",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Diagnosis.html#t:State",
      "description": {
        "fct-module": "Numeric.Probability.Example.Diagnosis",
        "fct-package": "probability",
        "fct-signature": "data",
        "fct-source": "src/Numeric-Probability-Example-Diagnosis.html#State",
        "fct-type": "data",
        "title": "State"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Diagnosis",
        "module": "Numeric.Probability.Example.Diagnosis",
        "name": "State",
        "normalized": "",
        "package": "probability",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Diagnosis.html#v:Healthy",
      "description": {
        "fct-module": "Numeric.Probability.Example.Diagnosis",
        "fct-package": "probability",
        "fct-signature": "Healthy",
        "fct-source": "src/Numeric-Probability-Example-Diagnosis.html#State",
        "fct-type": "function",
        "title": "Healthy"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Diagnosis",
        "module": "Numeric.Probability.Example.Diagnosis",
        "name": "Healthy",
        "normalized": "",
        "package": "probability",
        "partial": "Healthy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Diagnosis.html#v:Ill",
      "description": {
        "fct-module": "Numeric.Probability.Example.Diagnosis",
        "fct-package": "probability",
        "fct-signature": "Ill",
        "fct-source": "src/Numeric-Probability-Example-Diagnosis.html#State",
        "fct-type": "function",
        "title": "Ill"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Diagnosis",
        "module": "Numeric.Probability.Example.Diagnosis",
        "name": "Ill",
        "normalized": "",
        "package": "probability",
        "partial": "Ill",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Diagnosis.html#v:Negative",
      "description": {
        "fct-module": "Numeric.Probability.Example.Diagnosis",
        "fct-package": "probability",
        "fct-signature": "Negative",
        "fct-source": "src/Numeric-Probability-Example-Diagnosis.html#Finding",
        "fct-type": "function",
        "title": "Negative"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Diagnosis",
        "module": "Numeric.Probability.Example.Diagnosis",
        "name": "Negative",
        "normalized": "",
        "package": "probability",
        "partial": "Negative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Diagnosis.html#v:Positive",
      "description": {
        "fct-module": "Numeric.Probability.Example.Diagnosis",
        "fct-package": "probability",
        "fct-signature": "Positive",
        "fct-source": "src/Numeric-Probability-Example-Diagnosis.html#Finding",
        "fct-type": "function",
        "title": "Positive"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Diagnosis",
        "module": "Numeric.Probability.Example.Diagnosis",
        "name": "Positive",
        "normalized": "",
        "package": "probability",
        "partial": "Positive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Diagnosis.html#v:dist",
      "description": {
        "fct-module": "Numeric.Probability.Example.Diagnosis",
        "fct-package": "probability",
        "fct-signature": "Dist (State, Finding)",
        "fct-source": "src/Numeric-Probability-Example-Diagnosis.html#dist",
        "fct-type": "function",
        "title": "dist"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Diagnosis",
        "module": "Numeric.Probability.Example.Diagnosis",
        "name": "dist",
        "normalized": "Dist(State,Finding)",
        "package": "probability",
        "partial": "",
        "signature": "Dist(State,Finding)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Diagnosis.html#v:distAlt",
      "description": {
        "fct-descr": "\u003cp\u003eAlternative way for computing the distribution.\nIt is usually more efficient because we do not need to switch on the healthy state.\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Example.Diagnosis",
        "fct-package": "probability",
        "fct-signature": "Dist (State, Finding)",
        "fct-source": "src/Numeric-Probability-Example-Diagnosis.html#distAlt",
        "fct-type": "function",
        "title": "distAlt"
      },
      "index": {
        "description": "Alternative way for computing the distribution It is usually more efficient because we do not need to switch on the healthy state",
        "hierarchy": "Numeric Probability Example Diagnosis",
        "module": "Numeric.Probability.Example.Diagnosis",
        "name": "distAlt",
        "normalized": "Dist(State,Finding)",
        "package": "probability",
        "partial": "Alt",
        "signature": "Dist(State,Finding)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Diagnosis.html#v:p",
      "description": {
        "fct-module": "Numeric.Probability.Example.Diagnosis",
        "fct-package": "probability",
        "fct-signature": "Probability",
        "fct-source": "src/Numeric-Probability-Example-Diagnosis.html#p",
        "fct-type": "function",
        "title": "p"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Diagnosis",
        "module": "Numeric.Probability.Example.Diagnosis",
        "name": "p",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Diagnosis.html#v:pDisease",
      "description": {
        "fct-module": "Numeric.Probability.Example.Diagnosis",
        "fct-package": "probability",
        "fct-signature": "Probability",
        "fct-source": "src/Numeric-Probability-Example-Diagnosis.html#pDisease",
        "fct-type": "function",
        "title": "pDisease"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Diagnosis",
        "module": "Numeric.Probability.Example.Diagnosis",
        "name": "pDisease",
        "normalized": "",
        "package": "probability",
        "partial": "Disease",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Diagnosis.html#v:pFalseNegative",
      "description": {
        "fct-module": "Numeric.Probability.Example.Diagnosis",
        "fct-package": "probability",
        "fct-signature": "Probability",
        "fct-source": "src/Numeric-Probability-Example-Diagnosis.html#pDisease",
        "fct-type": "function",
        "title": "pFalseNegative"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Diagnosis",
        "module": "Numeric.Probability.Example.Diagnosis",
        "name": "pFalseNegative",
        "normalized": "",
        "package": "probability",
        "partial": "False Negative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Diagnosis.html#v:pFalsePositive",
      "description": {
        "fct-module": "Numeric.Probability.Example.Diagnosis",
        "fct-package": "probability",
        "fct-signature": "Probability",
        "fct-source": "src/Numeric-Probability-Example-Diagnosis.html#pDisease",
        "fct-type": "function",
        "title": "pFalsePositive"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Diagnosis",
        "module": "Numeric.Probability.Example.Diagnosis",
        "name": "pFalsePositive",
        "normalized": "",
        "package": "probability",
        "partial": "False Positive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Dice.html#",
      "description": {
        "fct-module": "Numeric.Probability.Example.Dice",
        "fct-package": "probability",
        "fct-signature": "module",
        "fct-source": "src/Numeric-Probability-Example-Dice.html",
        "fct-type": "module",
        "title": "Dice"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Dice",
        "module": "Numeric.Probability.Example.Dice",
        "name": "Dice",
        "normalized": "",
        "package": "probability",
        "partial": "Dice",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Dice.html#t:Die",
      "description": {
        "fct-module": "Numeric.Probability.Example.Dice",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Example-Dice.html#Die",
        "fct-type": "type",
        "title": "Die"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Dice",
        "module": "Numeric.Probability.Example.Dice",
        "name": "Die",
        "normalized": "",
        "package": "probability",
        "partial": "Die",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Dice.html#t:Dist",
      "description": {
        "fct-module": "Numeric.Probability.Example.Dice",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Example-Dice.html#Dist",
        "fct-type": "type",
        "title": "Dist"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Dice",
        "module": "Numeric.Probability.Example.Dice",
        "name": "Dist",
        "normalized": "",
        "package": "probability",
        "partial": "Dist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Dice.html#t:Probability",
      "description": {
        "fct-module": "Numeric.Probability.Example.Dice",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Example-Dice.html#Probability",
        "fct-type": "type",
        "title": "Probability"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Dice",
        "module": "Numeric.Probability.Example.Dice",
        "name": "Probability",
        "normalized": "",
        "package": "probability",
        "partial": "Probability",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Dice.html#v:addTwo",
      "description": {
        "fct-module": "Numeric.Probability.Example.Dice",
        "fct-package": "probability",
        "fct-signature": "Dist Die",
        "fct-source": "src/Numeric-Probability-Example-Dice.html#addTwo",
        "fct-type": "function",
        "title": "addTwo"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Dice",
        "module": "Numeric.Probability.Example.Dice",
        "name": "addTwo",
        "normalized": "",
        "package": "probability",
        "partial": "Two",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Dice.html#v:dice",
      "description": {
        "fct-module": "Numeric.Probability.Example.Dice",
        "fct-package": "probability",
        "fct-signature": "Int -\u003e Dist [Die]",
        "fct-source": "src/Numeric-Probability-Example-Dice.html#dice",
        "fct-type": "function",
        "title": "dice"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Dice",
        "module": "Numeric.Probability.Example.Dice",
        "name": "dice",
        "normalized": "Int-\u003eDist[Die]",
        "package": "probability",
        "partial": "",
        "signature": "Int-\u003eDist[Die]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Dice.html#v:die",
      "description": {
        "fct-module": "Numeric.Probability.Example.Dice",
        "fct-package": "probability",
        "fct-signature": "Dist Die",
        "fct-source": "src/Numeric-Probability-Example-Dice.html#die",
        "fct-type": "function",
        "title": "die"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Dice",
        "module": "Numeric.Probability.Example.Dice",
        "name": "die",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Dice.html#v:droll",
      "description": {
        "fct-module": "Numeric.Probability.Example.Dice",
        "fct-package": "probability",
        "fct-signature": "Dist Die",
        "fct-source": "src/Numeric-Probability-Example-Dice.html#droll",
        "fct-type": "function",
        "title": "droll"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Dice",
        "module": "Numeric.Probability.Example.Dice",
        "name": "droll",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Dice.html#v:g3",
      "description": {
        "fct-module": "Numeric.Probability.Example.Dice",
        "fct-package": "probability",
        "fct-signature": "Probability",
        "fct-source": "src/Numeric-Probability-Example-Dice.html#g3",
        "fct-type": "function",
        "title": "g3"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Dice",
        "module": "Numeric.Probability.Example.Dice",
        "name": "g3",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Dice.html#v:sixes",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esixes p n\u003c/code\u003e computes the probability of getting\np sixes (\u003ccode\u003e\u003e1\u003c/code\u003e, \u003ccode\u003e==2\u003c/code\u003e, ...) when rolling n dice\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Example.Dice",
        "fct-package": "probability",
        "fct-signature": "(Int -\u003e Bool) -\u003e Int -\u003e Probability",
        "fct-source": "src/Numeric-Probability-Example-Dice.html#sixes",
        "fct-type": "function",
        "title": "sixes"
      },
      "index": {
        "description": "sixes computes the probability of getting sixes when rolling dice",
        "hierarchy": "Numeric Probability Example Dice",
        "module": "Numeric.Probability.Example.Dice",
        "name": "sixes",
        "normalized": "(Int-\u003eBool)-\u003eInt-\u003eProbability",
        "package": "probability",
        "partial": "",
        "signature": "(Int-\u003eBool)-\u003eInt-\u003eProbability"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Dice.html#v:twoDice",
      "description": {
        "fct-descr": "\u003cp\u003eproduct of independent distributions\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Example.Dice",
        "fct-package": "probability",
        "fct-signature": "Dist (Die, Die)",
        "fct-source": "src/Numeric-Probability-Example-Dice.html#twoDice",
        "fct-type": "function",
        "title": "twoDice"
      },
      "index": {
        "description": "product of independent distributions",
        "hierarchy": "Numeric Probability Example Dice",
        "module": "Numeric.Probability.Example.Dice",
        "name": "twoDice",
        "normalized": "Dist(Die,Die)",
        "package": "probability",
        "partial": "Dice",
        "signature": "Dist(Die,Die)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Dice.html#v:twoSixes",
      "description": {
        "fct-module": "Numeric.Probability.Example.Dice",
        "fct-package": "probability",
        "fct-signature": "Probability",
        "fct-source": "src/Numeric-Probability-Example-Dice.html#twoSixes",
        "fct-type": "function",
        "title": "twoSixes"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Dice",
        "module": "Numeric.Probability.Example.Dice",
        "name": "twoSixes",
        "normalized": "",
        "package": "probability",
        "partial": "Sixes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-DiceAccum.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWe play the following game:\nWe roll a die until we stop or we get three spots.\nIn the first case we own all spots obtained so far,\nin the latter case we own nothing.\n\u003c/p\u003e\u003cp\u003eWhat is the strategy for maximizing the expected score?\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.Probability.Example.DiceAccum",
        "fct-package": "probability",
        "fct-signature": "module",
        "fct-source": "src/Numeric-Probability-Example-DiceAccum.html",
        "fct-type": "module",
        "title": "DiceAccum"
      },
      "index": {
        "description": "We play the following game We roll die until we stop or we get three spots In the first case we own all spots obtained so far in the latter case we own nothing What is the strategy for maximizing the expected score",
        "hierarchy": "Numeric Probability Example DiceAccum",
        "module": "Numeric.Probability.Example.DiceAccum",
        "name": "DiceAccum",
        "normalized": "",
        "package": "probability",
        "partial": "Dice Accum",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-DiceAccum.html#t:Score",
      "description": {
        "fct-module": "Numeric.Probability.Example.DiceAccum",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Example-DiceAccum.html#Score",
        "fct-type": "type",
        "title": "Score"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example DiceAccum",
        "module": "Numeric.Probability.Example.DiceAccum",
        "name": "Score",
        "normalized": "",
        "package": "probability",
        "partial": "Score",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-DiceAccum.html#v:continue",
      "description": {
        "fct-module": "Numeric.Probability.Example.DiceAccum",
        "fct-package": "probability",
        "fct-signature": "Score -\u003e Bool",
        "fct-source": "src/Numeric-Probability-Example-DiceAccum.html#continue",
        "fct-type": "function",
        "title": "continue"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example DiceAccum",
        "module": "Numeric.Probability.Example.DiceAccum",
        "name": "continue",
        "normalized": "Score-\u003eBool",
        "package": "probability",
        "partial": "",
        "signature": "Score-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-DiceAccum.html#v:die",
      "description": {
        "fct-module": "Numeric.Probability.Example.DiceAccum",
        "fct-package": "probability",
        "fct-signature": "T prob Die",
        "fct-source": "src/Numeric-Probability-Example-DiceAccum.html#die",
        "fct-type": "function",
        "title": "die"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example DiceAccum",
        "module": "Numeric.Probability.Example.DiceAccum",
        "name": "die",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-DiceAccum.html#v:game",
      "description": {
        "fct-descr": "\u003cp\u003edistribution of the scores that are achieved with the optimal strategy\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Example.DiceAccum",
        "fct-package": "probability",
        "fct-signature": "T prob (Maybe Score)",
        "fct-source": "src/Numeric-Probability-Example-DiceAccum.html#game",
        "fct-type": "function",
        "title": "game"
      },
      "index": {
        "description": "distribution of the scores that are achieved with the optimal strategy",
        "hierarchy": "Numeric Probability Example DiceAccum",
        "module": "Numeric.Probability.Example.DiceAccum",
        "name": "game",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-DiceAccum.html#v:roll",
      "description": {
        "fct-module": "Numeric.Probability.Example.DiceAccum",
        "fct-package": "probability",
        "fct-signature": "T prob (Maybe Score)",
        "fct-source": "src/Numeric-Probability-Example-DiceAccum.html#roll",
        "fct-type": "function",
        "title": "roll"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example DiceAccum",
        "module": "Numeric.Probability.Example.DiceAccum",
        "name": "roll",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-DiceAccum.html#v:strategy",
      "description": {
        "fct-descr": "\u003cp\u003eoptimal strategy\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Example.DiceAccum",
        "fct-package": "probability",
        "fct-signature": "T prob (Maybe Score)",
        "fct-source": "src/Numeric-Probability-Example-DiceAccum.html#strategy",
        "fct-type": "function",
        "title": "strategy"
      },
      "index": {
        "description": "optimal strategy",
        "hierarchy": "Numeric Probability Example DiceAccum",
        "module": "Numeric.Probability.Example.DiceAccum",
        "name": "strategy",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-DiceAccum.html#v:walk",
      "description": {
        "fct-module": "Numeric.Probability.Example.DiceAccum",
        "fct-package": "probability",
        "fct-signature": "Int -\u003e IO (Trace (Maybe Score))",
        "fct-source": "src/Numeric-Probability-Example-DiceAccum.html#walk",
        "fct-type": "function",
        "title": "walk"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example DiceAccum",
        "module": "Numeric.Probability.Example.DiceAccum",
        "name": "walk",
        "normalized": "Int-\u003eIO(Trace(Maybe Score))",
        "package": "probability",
        "partial": "",
        "signature": "Int-\u003eIO(Trace(Maybe Score))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Kruskal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGiven a row of n (~50) dice and\ntwo players starting with a random dice within the first m (~5) dice.\nEvery players moves along the row, according the pips on the dice.\nThey stop if a move would exceed the row.\nWhat is the probability that they stop at the same die?\n(It is close to one.)\n\u003c/p\u003e\u003cp\u003eWuerfelschlange (german)\nhttp:\u003cem/\u003efaculty.uml.edu\u003cem\u003ermontenegro\u003c/em\u003eresearch\u003cem\u003ekruskal_count\u003c/em\u003ekruskal.html\n\u003c/p\u003e\u003cp\u003eKruskal's trick\nhttp:\u003cem/\u003ewww.math.de\u003cem\u003eexponate\u003c/em\u003ewuerfelschlange.html/\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.Probability.Example.Kruskal",
        "fct-package": "probability",
        "fct-signature": "module",
        "fct-source": "src/Numeric-Probability-Example-Kruskal.html",
        "fct-type": "module",
        "title": "Kruskal"
      },
      "index": {
        "description": "Given row of dice and two players starting with random dice within the first dice Every players moves along the row according the pips on the dice They stop if move would exceed the row What is the probability that they stop at the same die It is close to one Wuerfelschlange german http faculty.uml.edu rmontenegro research kruskal count kruskal.html Kruskal trick http www.math.de exponate wuerfelschlange.html",
        "hierarchy": "Numeric Probability Example Kruskal",
        "module": "Numeric.Probability.Example.Kruskal",
        "name": "Kruskal",
        "normalized": "",
        "package": "probability",
        "partial": "Kruskal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Kruskal.html#t:Die",
      "description": {
        "fct-module": "Numeric.Probability.Example.Kruskal",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Example-Kruskal.html#Die",
        "fct-type": "type",
        "title": "Die"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Kruskal",
        "module": "Numeric.Probability.Example.Kruskal",
        "name": "Die",
        "normalized": "",
        "package": "probability",
        "partial": "Die",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Kruskal.html#t:Dist",
      "description": {
        "fct-module": "Numeric.Probability.Example.Kruskal",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Example-Kruskal.html#Dist",
        "fct-type": "type",
        "title": "Dist"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Kruskal",
        "module": "Numeric.Probability.Example.Kruskal",
        "name": "Dist",
        "normalized": "",
        "package": "probability",
        "partial": "Dist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Kruskal.html#t:Probability",
      "description": {
        "fct-module": "Numeric.Probability.Example.Kruskal",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Example-Kruskal.html#Probability",
        "fct-type": "type",
        "title": "Probability"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Kruskal",
        "module": "Numeric.Probability.Example.Kruskal",
        "name": "Probability",
        "normalized": "",
        "package": "probability",
        "partial": "Probability",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Kruskal.html#t:Score",
      "description": {
        "fct-module": "Numeric.Probability.Example.Kruskal",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Example-Kruskal.html#Score",
        "fct-type": "type",
        "title": "Score"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Kruskal",
        "module": "Numeric.Probability.Example.Kruskal",
        "name": "Score",
        "normalized": "",
        "package": "probability",
        "partial": "Score",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Kruskal.html#v:bruteforce",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a bruteforce implementation of the original game:\nWe just roll the die \u003ccode\u003emaxScore\u003c/code\u003e times\nand then jump from die to die according to the number of pips.\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Example.Kruskal",
        "fct-package": "probability",
        "fct-signature": "Score -\u003e Score -\u003e (Score, Score) -\u003e T (Maybe Score)",
        "fct-source": "src/Numeric-Probability-Example-Kruskal.html#bruteforce",
        "fct-type": "function",
        "title": "bruteforce"
      },
      "index": {
        "description": "This is bruteforce implementation of the original game We just roll the die maxScore times and then jump from die to die according to the number of pips",
        "hierarchy": "Numeric Probability Example Kruskal",
        "module": "Numeric.Probability.Example.Kruskal",
        "name": "bruteforce",
        "normalized": "Score-\u003eScore-\u003e(Score,Score)-\u003eT(Maybe Score)",
        "package": "probability",
        "partial": "",
        "signature": "Score-\u003eScore-\u003e(Score,Score)-\u003eT(Maybe Score)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Kruskal.html#v:chop",
      "description": {
        "fct-module": "Numeric.Probability.Example.Kruskal",
        "fct-package": "probability",
        "fct-signature": "[Score] -\u003e [[Score]]",
        "fct-source": "src/Numeric-Probability-Example-Kruskal.html#chop",
        "fct-type": "function",
        "title": "chop"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Kruskal",
        "module": "Numeric.Probability.Example.Kruskal",
        "name": "chop",
        "normalized": "[Score]-\u003e[[Score]]",
        "package": "probability",
        "partial": "",
        "signature": "[Score]-\u003e[[Score]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Kruskal.html#v:compareMaybe",
      "description": {
        "fct-module": "Numeric.Probability.Example.Kruskal",
        "fct-package": "probability",
        "fct-signature": "Maybe a -\u003e Maybe a -\u003e Ordering",
        "fct-source": "src/Numeric-Probability-Example-Kruskal.html#compareMaybe",
        "fct-type": "function",
        "title": "compareMaybe"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Kruskal",
        "module": "Numeric.Probability.Example.Kruskal",
        "name": "compareMaybe",
        "normalized": "Maybe a-\u003eMaybe a-\u003eOrdering",
        "package": "probability",
        "partial": "Maybe",
        "signature": "Maybe a-\u003eMaybe a-\u003eOrdering"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Kruskal.html#v:cumulate",
      "description": {
        "fct-module": "Numeric.Probability.Example.Kruskal",
        "fct-package": "probability",
        "fct-signature": "Dist (Maybe a) -\u003e [(Maybe a, Probability)]",
        "fct-source": "src/Numeric-Probability-Example-Kruskal.html#cumulate",
        "fct-type": "function",
        "title": "cumulate"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Kruskal",
        "module": "Numeric.Probability.Example.Kruskal",
        "name": "cumulate",
        "normalized": "Dist(Maybe a)-\u003e[(Maybe a,Probability)]",
        "package": "probability",
        "partial": "",
        "signature": "Dist(Maybe a)-\u003e[(Maybe a,Probability)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Kruskal.html#v:die",
      "description": {
        "fct-module": "Numeric.Probability.Example.Kruskal",
        "fct-package": "probability",
        "fct-signature": "Score -\u003e experiment Die",
        "fct-source": "src/Numeric-Probability-Example-Kruskal.html#die",
        "fct-type": "function",
        "title": "die"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Kruskal",
        "module": "Numeric.Probability.Example.Kruskal",
        "name": "die",
        "normalized": "Score-\u003ea Die",
        "package": "probability",
        "partial": "",
        "signature": "Score-\u003eexperiment Die"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Kruskal.html#v:flattenedMatrix",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003egameLeastScore\u003c/a\u003e\u003c/code\u003e can be written in terms of a matrix power.\nFor n pips we need a n&#178; &#215; n&#178; matrix.\nUsing symmetries, we reduce it to a square matrix with size n&#183;(n+1)/2.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003e p[n+1,(n+1,n+1)] \\          \u003c/em\u003e p[n,(n+0,n+0)] \\\n| p[n+1,(n+1,n+2)] |          | p[n,(n+0,n+1)] |\n| p[n+1,(n+1,n+3)] |          | p[n,(n+0,n+2)] |\n|        ...       |          |       ...      |\n| p[n+1,(n+1,n+6)] |  = M/6 &#183; | p[n,(n+0,n+5)] |\n| p[n+1,(n+2,n+2)] |          | p[n,(n+1,n+1)] |\n|        ...       |          |       ...      |\n| p[n+1,(n+2,n+6)] |          | p[n,(n+1,n+5)] |\n|        ...       |          |       ...      |\n p[n+1,(n+6,n+6)] \u003cem\u003e          \\ p[n,(n+5,n+5)] \u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eM[(n+1,(x,y)),(n,(x,y))] = 6\n\u003c/p\u003e\u003cp\u003eM[(n+1,(min y (n+d), max y (n+d))), (n,(n,y))] = 1\n\u003c/p\u003e\u003cp\u003eM[(n+1,(x1,y1)),(n,(x0,y0))] = 0\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Example.Kruskal",
        "fct-package": "probability",
        "fct-signature": "Score -\u003e [Int]",
        "fct-source": "src/Numeric-Probability-Example-Kruskal.html#flattenedMatrix",
        "fct-type": "function",
        "title": "flattenedMatrix"
      },
      "index": {
        "description": "gameLeastScore can be written in terms of matrix power For pips we need matrix Using symmetries we reduce it to square matrix with size min max x1 y1 x0 y0",
        "hierarchy": "Numeric Probability Example Kruskal",
        "module": "Numeric.Probability.Example.Kruskal",
        "name": "flattenedMatrix",
        "normalized": "Score-\u003e[Int]",
        "package": "probability",
        "partial": "Matrix",
        "signature": "Score-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Kruskal.html#v:game",
      "description": {
        "fct-descr": "\u003cp\u003eWe reformulate the problem to the following game:\nThere are two players, both of them collect a number of points.\nIn every round the player with the smaller score throws a die\nand adds the pips to his score.\nIf the two players somewhen get the same score, then the game ends\nand the score is the result of the game (\u003ccode\u003eJust score\u003c/code\u003e).\nIf one of the players exceeds the maximum score n,\nthen the game stops and players lose (\u003ccode\u003eNothing\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Example.Kruskal",
        "fct-package": "probability",
        "fct-signature": "Score -\u003e Score -\u003e (Score, Score) -\u003e experiment (Maybe Score)",
        "fct-source": "src/Numeric-Probability-Example-Kruskal.html#game",
        "fct-type": "function",
        "title": "game"
      },
      "index": {
        "description": "We reformulate the problem to the following game There are two players both of them collect number of points In every round the player with the smaller score throws die and adds the pips to his score If the two players somewhen get the same score then the game ends and the score is the result of the game Just score If one of the players exceeds the maximum score then the game stops and players lose Nothing",
        "hierarchy": "Numeric Probability Example Kruskal",
        "module": "Numeric.Probability.Example.Kruskal",
        "name": "game",
        "normalized": "Score-\u003eScore-\u003e(Score,Score)-\u003ea(Maybe Score)",
        "package": "probability",
        "partial": "",
        "signature": "Score-\u003eScore-\u003e(Score,Score)-\u003eexperiment(Maybe Score)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Kruskal.html#v:gameFast",
      "description": {
        "fct-module": "Numeric.Probability.Example.Kruskal",
        "fct-package": "probability",
        "fct-signature": "Score -\u003e Score -\u003e Dist (Score, Score) -\u003e Dist (Maybe Score)",
        "fct-source": "src/Numeric-Probability-Example-Kruskal.html#gameFast",
        "fct-type": "function",
        "title": "gameFast"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Kruskal",
        "module": "Numeric.Probability.Example.Kruskal",
        "name": "gameFast",
        "normalized": "Score-\u003eScore-\u003eDist(Score,Score)-\u003eDist(Maybe Score)",
        "package": "probability",
        "partial": "Fast",
        "signature": "Score-\u003eScore-\u003eDist(Score,Score)-\u003eDist(Maybe Score)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Kruskal.html#v:gameFastEither",
      "description": {
        "fct-module": "Numeric.Probability.Example.Kruskal",
        "fct-package": "probability",
        "fct-signature": "Score -\u003e Score -\u003e Dist (Score, Score) -\u003e Dist (Maybe Score)",
        "fct-source": "src/Numeric-Probability-Example-Kruskal.html#gameFastEither",
        "fct-type": "function",
        "title": "gameFastEither"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Kruskal",
        "module": "Numeric.Probability.Example.Kruskal",
        "name": "gameFastEither",
        "normalized": "Score-\u003eScore-\u003eDist(Score,Score)-\u003eDist(Maybe Score)",
        "package": "probability",
        "partial": "Fast Either",
        "signature": "Score-\u003eScore-\u003eDist(Score,Score)-\u003eDist(Maybe Score)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Kruskal.html#v:gameFastFix",
      "description": {
        "fct-descr": "\u003cp\u003eThis version could be generalized\nto both Random and Distribution monad\nwhile remaining efficient.\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Example.Kruskal",
        "fct-package": "probability",
        "fct-signature": "Score -\u003e Score -\u003e Dist (Score, Score) -\u003e Dist (Maybe Score)",
        "fct-source": "src/Numeric-Probability-Example-Kruskal.html#gameFastFix",
        "fct-type": "function",
        "title": "gameFastFix"
      },
      "index": {
        "description": "This version could be generalized to both Random and Distribution monad while remaining efficient",
        "hierarchy": "Numeric Probability Example Kruskal",
        "module": "Numeric.Probability.Example.Kruskal",
        "name": "gameFastFix",
        "normalized": "Score-\u003eScore-\u003eDist(Score,Score)-\u003eDist(Maybe Score)",
        "package": "probability",
        "partial": "Fast Fix",
        "signature": "Score-\u003eScore-\u003eDist(Score,Score)-\u003eDist(Maybe Score)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Kruskal.html#v:gameLeastScore",
      "description": {
        "fct-descr": "\u003cp\u003eIn \u003ccode\u003e\u003ca\u003egameFastFix\u003c/a\u003e\u003c/code\u003e we group the scores by rounds.\nThis leads to a growing probability distribution,\nbut we do not need the round number.\nWe could process the game in a different way:\nWe only consider the game states\nwhere the lower score matches the round number.\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Example.Kruskal",
        "fct-package": "probability",
        "fct-signature": "Score -\u003e Score -\u003e Dist (Score, Score) -\u003e Dist (Maybe Score)",
        "fct-source": "src/Numeric-Probability-Example-Kruskal.html#gameLeastScore",
        "fct-type": "function",
        "title": "gameLeastScore"
      },
      "index": {
        "description": "In gameFastFix we group the scores by rounds This leads to growing probability distribution but we do not need the round number We could process the game in different way We only consider the game states where the lower score matches the round number",
        "hierarchy": "Numeric Probability Example Kruskal",
        "module": "Numeric.Probability.Example.Kruskal",
        "name": "gameLeastScore",
        "normalized": "Score-\u003eScore-\u003eDist(Score,Score)-\u003eDist(Maybe Score)",
        "package": "probability",
        "partial": "Least Score",
        "signature": "Score-\u003eScore-\u003eDist(Score,Score)-\u003eDist(Maybe Score)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Kruskal.html#v:gameRound",
      "description": {
        "fct-module": "Numeric.Probability.Example.Kruskal",
        "fct-package": "probability",
        "fct-signature": "Score -\u003e Score -\u003e Dist (Either (Maybe Score) (Score, Score)) -\u003e Dist (Either (Maybe Score) (Score, Score))",
        "fct-source": "src/Numeric-Probability-Example-Kruskal.html#gameRound",
        "fct-type": "function",
        "title": "gameRound"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Kruskal",
        "module": "Numeric.Probability.Example.Kruskal",
        "name": "gameRound",
        "normalized": "Score-\u003eScore-\u003eDist(Either(Maybe Score)(Score,Score))-\u003eDist(Either(Maybe Score)(Score,Score))",
        "package": "probability",
        "partial": "Round",
        "signature": "Score-\u003eScore-\u003eDist(Either(Maybe Score)(Score,Score))-\u003eDist(Either(Maybe Score)(Score,Score))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Kruskal.html#v:latexChoppedFromChain",
      "description": {
        "fct-module": "Numeric.Probability.Example.Kruskal",
        "fct-package": "probability",
        "fct-signature": "[Score] -\u003e String",
        "fct-source": "src/Numeric-Probability-Example-Kruskal.html#latexChoppedFromChain",
        "fct-type": "function",
        "title": "latexChoppedFromChain"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Kruskal",
        "module": "Numeric.Probability.Example.Kruskal",
        "name": "latexChoppedFromChain",
        "normalized": "[Score]-\u003eString",
        "package": "probability",
        "partial": "Chopped From Chain",
        "signature": "[Score]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Kruskal.html#v:latexDie",
      "description": {
        "fct-module": "Numeric.Probability.Example.Kruskal",
        "fct-package": "probability",
        "fct-signature": "Score -\u003e String",
        "fct-source": "src/Numeric-Probability-Example-Kruskal.html#latexDie",
        "fct-type": "function",
        "title": "latexDie"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Kruskal",
        "module": "Numeric.Probability.Example.Kruskal",
        "name": "latexDie",
        "normalized": "Score-\u003eString",
        "package": "probability",
        "partial": "Die",
        "signature": "Score-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Kruskal.html#v:latexFromChain",
      "description": {
        "fct-module": "Numeric.Probability.Example.Kruskal",
        "fct-package": "probability",
        "fct-signature": "[Score] -\u003e String",
        "fct-source": "src/Numeric-Probability-Example-Kruskal.html#latexFromChain",
        "fct-type": "function",
        "title": "latexFromChain"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Kruskal",
        "module": "Numeric.Probability.Example.Kruskal",
        "name": "latexFromChain",
        "normalized": "[Score]-\u003eString",
        "package": "probability",
        "partial": "From Chain",
        "signature": "[Score]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Kruskal.html#v:latexMarkedDie",
      "description": {
        "fct-module": "Numeric.Probability.Example.Kruskal",
        "fct-package": "probability",
        "fct-signature": "Score -\u003e String",
        "fct-source": "src/Numeric-Probability-Example-Kruskal.html#latexMarkedDie",
        "fct-type": "function",
        "title": "latexMarkedDie"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Kruskal",
        "module": "Numeric.Probability.Example.Kruskal",
        "name": "latexMarkedDie",
        "normalized": "Score-\u003eString",
        "package": "probability",
        "partial": "Marked Die",
        "signature": "Score-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Kruskal.html#v:makeChains",
      "description": {
        "fct-module": "Numeric.Probability.Example.Kruskal",
        "fct-package": "probability",
        "fct-signature": "IO ()",
        "fct-source": "src/Numeric-Probability-Example-Kruskal.html#makeChains",
        "fct-type": "function",
        "title": "makeChains"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Kruskal",
        "module": "Numeric.Probability.Example.Kruskal",
        "name": "makeChains",
        "normalized": "IO()",
        "package": "probability",
        "partial": "Chains",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Kruskal.html#v:meeting",
      "description": {
        "fct-module": "Numeric.Probability.Example.Kruskal",
        "fct-package": "probability",
        "fct-signature": "[Score] -\u003e [Score] -\u003e Maybe Score",
        "fct-source": "src/Numeric-Probability-Example-Kruskal.html#meeting",
        "fct-type": "function",
        "title": "meeting"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Kruskal",
        "module": "Numeric.Probability.Example.Kruskal",
        "name": "meeting",
        "normalized": "[Score]-\u003e[Score]-\u003eMaybe Score",
        "package": "probability",
        "partial": "",
        "signature": "[Score]-\u003e[Score]-\u003eMaybe Score"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Kruskal.html#v:runExact",
      "description": {
        "fct-module": "Numeric.Probability.Example.Kruskal",
        "fct-package": "probability",
        "fct-signature": "Score -\u003e IO ()",
        "fct-source": "src/Numeric-Probability-Example-Kruskal.html#runExact",
        "fct-type": "function",
        "title": "runExact"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Kruskal",
        "module": "Numeric.Probability.Example.Kruskal",
        "name": "runExact",
        "normalized": "Score-\u003eIO()",
        "package": "probability",
        "partial": "Exact",
        "signature": "Score-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Kruskal.html#v:runSimulation",
      "description": {
        "fct-module": "Numeric.Probability.Example.Kruskal",
        "fct-package": "probability",
        "fct-signature": "Score -\u003e IO ()",
        "fct-source": "src/Numeric-Probability-Example-Kruskal.html#runSimulation",
        "fct-type": "function",
        "title": "runSimulation"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Kruskal",
        "module": "Numeric.Probability.Example.Kruskal",
        "name": "runSimulation",
        "normalized": "Score-\u003eIO()",
        "package": "probability",
        "partial": "Simulation",
        "signature": "Score-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Kruskal.html#v:startVector",
      "description": {
        "fct-module": "Numeric.Probability.Example.Kruskal",
        "fct-package": "probability",
        "fct-signature": "Score -\u003e [Int]",
        "fct-source": "src/Numeric-Probability-Example-Kruskal.html#startVector",
        "fct-type": "function",
        "title": "startVector"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Kruskal",
        "module": "Numeric.Probability.Example.Kruskal",
        "name": "startVector",
        "normalized": "Score-\u003e[Int]",
        "package": "probability",
        "partial": "Vector",
        "signature": "Score-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Kruskal.html#v:trace",
      "description": {
        "fct-module": "Numeric.Probability.Example.Kruskal",
        "fct-package": "probability",
        "fct-signature": "Score -\u003e [Score] -\u003e [Score]",
        "fct-source": "src/Numeric-Probability-Example-Kruskal.html#trace",
        "fct-type": "function",
        "title": "trace"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Kruskal",
        "module": "Numeric.Probability.Example.Kruskal",
        "name": "trace",
        "normalized": "Score-\u003e[Score]-\u003e[Score]",
        "package": "probability",
        "partial": "",
        "signature": "Score-\u003e[Score]-\u003e[Score]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#",
      "description": {
        "fct-module": "Numeric.Probability.Example.MontyHall",
        "fct-package": "probability",
        "fct-signature": "module",
        "fct-source": "src/Numeric-Probability-Example-MontyHall.html",
        "fct-type": "module",
        "title": "MontyHall"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example MontyHall",
        "module": "Numeric.Probability.Example.MontyHall",
        "name": "MontyHall",
        "normalized": "",
        "package": "probability",
        "partial": "Monty Hall",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#t:Door",
      "description": {
        "fct-module": "Numeric.Probability.Example.MontyHall",
        "fct-package": "probability",
        "fct-signature": "data",
        "fct-source": "src/Numeric-Probability-Example-MontyHall.html#Door",
        "fct-type": "data",
        "title": "Door"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example MontyHall",
        "module": "Numeric.Probability.Example.MontyHall",
        "name": "Door",
        "normalized": "",
        "package": "probability",
        "partial": "Door",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#t:Outcome",
      "description": {
        "fct-module": "Numeric.Probability.Example.MontyHall",
        "fct-package": "probability",
        "fct-signature": "data",
        "fct-source": "src/Numeric-Probability-Example-MontyHall.html#Outcome",
        "fct-type": "data",
        "title": "Outcome"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example MontyHall",
        "module": "Numeric.Probability.Example.MontyHall",
        "name": "Outcome",
        "normalized": "",
        "package": "probability",
        "partial": "Outcome",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#t:State",
      "description": {
        "fct-module": "Numeric.Probability.Example.MontyHall",
        "fct-package": "probability",
        "fct-signature": "data",
        "fct-source": "src/Numeric-Probability-Example-MontyHall.html#State",
        "fct-type": "data",
        "title": "State"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example MontyHall",
        "module": "Numeric.Probability.Example.MontyHall",
        "name": "State",
        "normalized": "",
        "package": "probability",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#t:Strategy",
      "description": {
        "fct-module": "Numeric.Probability.Example.MontyHall",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Example-MontyHall.html#Strategy",
        "fct-type": "type",
        "title": "Strategy"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example MontyHall",
        "module": "Numeric.Probability.Example.MontyHall",
        "name": "Strategy",
        "normalized": "",
        "package": "probability",
        "partial": "Strategy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#t:StrategyM",
      "description": {
        "fct-module": "Numeric.Probability.Example.MontyHall",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Example-MontyHall.html#StrategyM",
        "fct-type": "type",
        "title": "StrategyM"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example MontyHall",
        "module": "Numeric.Probability.Example.MontyHall",
        "name": "StrategyM",
        "normalized": "",
        "package": "probability",
        "partial": "Strategy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#v:A",
      "description": {
        "fct-module": "Numeric.Probability.Example.MontyHall",
        "fct-package": "probability",
        "fct-signature": "A",
        "fct-source": "src/Numeric-Probability-Example-MontyHall.html#Door",
        "fct-type": "function",
        "title": "A"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example MontyHall",
        "module": "Numeric.Probability.Example.MontyHall",
        "name": "A",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#v:B",
      "description": {
        "fct-module": "Numeric.Probability.Example.MontyHall",
        "fct-package": "probability",
        "fct-signature": "B",
        "fct-source": "src/Numeric-Probability-Example-MontyHall.html#Door",
        "fct-type": "function",
        "title": "B"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example MontyHall",
        "module": "Numeric.Probability.Example.MontyHall",
        "name": "B",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#v:C",
      "description": {
        "fct-module": "Numeric.Probability.Example.MontyHall",
        "fct-package": "probability",
        "fct-signature": "C",
        "fct-source": "src/Numeric-Probability-Example-MontyHall.html#Door",
        "fct-type": "function",
        "title": "C"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example MontyHall",
        "module": "Numeric.Probability.Example.MontyHall",
        "name": "C",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#v:Doors",
      "description": {
        "fct-module": "Numeric.Probability.Example.MontyHall",
        "fct-package": "probability",
        "fct-signature": "Doors",
        "fct-source": "src/Numeric-Probability-Example-MontyHall.html#State",
        "fct-type": "function",
        "title": "Doors"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example MontyHall",
        "module": "Numeric.Probability.Example.MontyHall",
        "name": "Doors",
        "normalized": "",
        "package": "probability",
        "partial": "Doors",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#v:Lose",
      "description": {
        "fct-module": "Numeric.Probability.Example.MontyHall",
        "fct-package": "probability",
        "fct-signature": "Lose",
        "fct-source": "src/Numeric-Probability-Example-MontyHall.html#Outcome",
        "fct-type": "function",
        "title": "Lose"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example MontyHall",
        "module": "Numeric.Probability.Example.MontyHall",
        "name": "Lose",
        "normalized": "",
        "package": "probability",
        "partial": "Lose",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#v:Win",
      "description": {
        "fct-module": "Numeric.Probability.Example.MontyHall",
        "fct-package": "probability",
        "fct-signature": "Win",
        "fct-source": "src/Numeric-Probability-Example-MontyHall.html#Outcome",
        "fct-type": "function",
        "title": "Win"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example MontyHall",
        "module": "Numeric.Probability.Example.MontyHall",
        "name": "Win",
        "normalized": "",
        "package": "probability",
        "partial": "Win",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#v:choose",
      "description": {
        "fct-module": "Numeric.Probability.Example.MontyHall",
        "fct-package": "probability",
        "fct-signature": "Trans State",
        "fct-source": "src/Numeric-Probability-Example-MontyHall.html#choose",
        "fct-type": "function",
        "title": "choose"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example MontyHall",
        "module": "Numeric.Probability.Example.MontyHall",
        "name": "choose",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#v:chosen",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Numeric.Probability.Example.MontyHall",
        "fct-package": "probability",
        "fct-signature": "Door",
        "fct-source": "src/Numeric-Probability-Example-MontyHall.html#State",
        "fct-type": "function",
        "title": "chosen"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example MontyHall",
        "module": "Numeric.Probability.Example.MontyHall",
        "name": "chosen",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#v:doors",
      "description": {
        "fct-module": "Numeric.Probability.Example.MontyHall",
        "fct-package": "probability",
        "fct-signature": "[Door]",
        "fct-source": "src/Numeric-Probability-Example-MontyHall.html#doors",
        "fct-type": "function",
        "title": "doors"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example MontyHall",
        "module": "Numeric.Probability.Example.MontyHall",
        "name": "doors",
        "normalized": "[Door]",
        "package": "probability",
        "partial": "",
        "signature": "[Door]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#v:eval",
      "description": {
        "fct-module": "Numeric.Probability.Example.MontyHall",
        "fct-package": "probability",
        "fct-signature": "Strategy -\u003e Dist Outcome",
        "fct-source": "src/Numeric-Probability-Example-MontyHall.html#eval",
        "fct-type": "function",
        "title": "eval"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example MontyHall",
        "module": "Numeric.Probability.Example.MontyHall",
        "name": "eval",
        "normalized": "Strategy-\u003eDist Outcome",
        "package": "probability",
        "partial": "",
        "signature": "Strategy-\u003eDist Outcome"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#v:evalM",
      "description": {
        "fct-module": "Numeric.Probability.Example.MontyHall",
        "fct-package": "probability",
        "fct-signature": "StrategyM -\u003e Dist Outcome",
        "fct-source": "src/Numeric-Probability-Example-MontyHall.html#evalM",
        "fct-type": "function",
        "title": "evalM"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example MontyHall",
        "module": "Numeric.Probability.Example.MontyHall",
        "name": "evalM",
        "normalized": "StrategyM-\u003eDist Outcome",
        "package": "probability",
        "partial": "",
        "signature": "StrategyM-\u003eDist Outcome"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#v:firstChoice",
      "description": {
        "fct-module": "Numeric.Probability.Example.MontyHall",
        "fct-package": "probability",
        "fct-signature": "Dist Outcome",
        "fct-source": "src/Numeric-Probability-Example-MontyHall.html#firstChoice",
        "fct-type": "function",
        "title": "firstChoice"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example MontyHall",
        "module": "Numeric.Probability.Example.MontyHall",
        "name": "firstChoice",
        "normalized": "",
        "package": "probability",
        "partial": "Choice",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#v:game",
      "description": {
        "fct-module": "Numeric.Probability.Example.MontyHall",
        "fct-package": "probability",
        "fct-signature": "Strategy -\u003e Trans State",
        "fct-source": "src/Numeric-Probability-Example-MontyHall.html#game",
        "fct-type": "function",
        "title": "game"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example MontyHall",
        "module": "Numeric.Probability.Example.MontyHall",
        "name": "game",
        "normalized": "Strategy-\u003eTrans State",
        "package": "probability",
        "partial": "",
        "signature": "Strategy-\u003eTrans State"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#v:hide",
      "description": {
        "fct-descr": "\u003cp\u003eSteps of the game:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e hide the prize\n\u003c/li\u003e\u003cli\u003e choose a door\n\u003c/li\u003e\u003cli\u003e open a non-open door, not revealing the prize\n\u003c/li\u003e\u003cli\u003e apply strategy: switch or stay\n\u003c/li\u003e\u003c/ol\u003e",
        "fct-module": "Numeric.Probability.Example.MontyHall",
        "fct-package": "probability",
        "fct-signature": "Trans State",
        "fct-source": "src/Numeric-Probability-Example-MontyHall.html#hide",
        "fct-type": "function",
        "title": "hide"
      },
      "index": {
        "description": "Steps of the game hide the prize choose door open non-open door not revealing the prize apply strategy switch or stay",
        "hierarchy": "Numeric Probability Example MontyHall",
        "module": "Numeric.Probability.Example.MontyHall",
        "name": "hide",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#v:open",
      "description": {
        "fct-module": "Numeric.Probability.Example.MontyHall",
        "fct-package": "probability",
        "fct-signature": "Trans State",
        "fct-source": "src/Numeric-Probability-Example-MontyHall.html#open",
        "fct-type": "function",
        "title": "open"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example MontyHall",
        "module": "Numeric.Probability.Example.MontyHall",
        "name": "open",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#v:opened",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Numeric.Probability.Example.MontyHall",
        "fct-package": "probability",
        "fct-signature": "Door",
        "fct-source": "src/Numeric-Probability-Example-MontyHall.html#State",
        "fct-type": "function",
        "title": "opened"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example MontyHall",
        "module": "Numeric.Probability.Example.MontyHall",
        "name": "opened",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#v:prize",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Numeric.Probability.Example.MontyHall",
        "fct-package": "probability",
        "fct-signature": "Door",
        "fct-source": "src/Numeric-Probability-Example-MontyHall.html#State",
        "fct-type": "function",
        "title": "prize"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example MontyHall",
        "module": "Numeric.Probability.Example.MontyHall",
        "name": "prize",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#v:result",
      "description": {
        "fct-module": "Numeric.Probability.Example.MontyHall",
        "fct-package": "probability",
        "fct-signature": "State -\u003e Outcome",
        "fct-source": "src/Numeric-Probability-Example-MontyHall.html#result",
        "fct-type": "function",
        "title": "result"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example MontyHall",
        "module": "Numeric.Probability.Example.MontyHall",
        "name": "result",
        "normalized": "State-\u003eOutcome",
        "package": "probability",
        "partial": "",
        "signature": "State-\u003eOutcome"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#v:simEval",
      "description": {
        "fct-module": "Numeric.Probability.Example.MontyHall",
        "fct-package": "probability",
        "fct-signature": "Int -\u003e Strategy -\u003e RDist Outcome",
        "fct-source": "src/Numeric-Probability-Example-MontyHall.html#simEval",
        "fct-type": "function",
        "title": "simEval"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example MontyHall",
        "module": "Numeric.Probability.Example.MontyHall",
        "name": "simEval",
        "normalized": "Int-\u003eStrategy-\u003eRDist Outcome",
        "package": "probability",
        "partial": "Eval",
        "signature": "Int-\u003eStrategy-\u003eRDist Outcome"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#v:start",
      "description": {
        "fct-descr": "\u003cp\u003einitial configuration of the game status\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Example.MontyHall",
        "fct-package": "probability",
        "fct-signature": "State",
        "fct-source": "src/Numeric-Probability-Example-MontyHall.html#start",
        "fct-type": "function",
        "title": "start"
      },
      "index": {
        "description": "initial configuration of the game status",
        "hierarchy": "Numeric Probability Example MontyHall",
        "module": "Numeric.Probability.Example.MontyHall",
        "name": "start",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#v:stay",
      "description": {
        "fct-module": "Numeric.Probability.Example.MontyHall",
        "fct-package": "probability",
        "fct-signature": "Strategy",
        "fct-source": "src/Numeric-Probability-Example-MontyHall.html#stay",
        "fct-type": "function",
        "title": "stay"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example MontyHall",
        "module": "Numeric.Probability.Example.MontyHall",
        "name": "stay",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#v:stayM",
      "description": {
        "fct-module": "Numeric.Probability.Example.MontyHall",
        "fct-package": "probability",
        "fct-signature": "StrategyM",
        "fct-source": "src/Numeric-Probability-Example-MontyHall.html#stayM",
        "fct-type": "function",
        "title": "stayM"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example MontyHall",
        "module": "Numeric.Probability.Example.MontyHall",
        "name": "stayM",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#v:switch",
      "description": {
        "fct-module": "Numeric.Probability.Example.MontyHall",
        "fct-package": "probability",
        "fct-signature": "Strategy",
        "fct-source": "src/Numeric-Probability-Example-MontyHall.html#switch",
        "fct-type": "function",
        "title": "switch"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example MontyHall",
        "module": "Numeric.Probability.Example.MontyHall",
        "name": "switch",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#v:switch-39-",
      "description": {
        "fct-module": "Numeric.Probability.Example.MontyHall",
        "fct-package": "probability",
        "fct-signature": "Trans Outcome",
        "fct-source": "src/Numeric-Probability-Example-MontyHall.html#switch%27",
        "fct-type": "function",
        "title": "switch'"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example MontyHall",
        "module": "Numeric.Probability.Example.MontyHall",
        "name": "switch'",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#v:switchM",
      "description": {
        "fct-module": "Numeric.Probability.Example.MontyHall",
        "fct-package": "probability",
        "fct-signature": "StrategyM",
        "fct-source": "src/Numeric-Probability-Example-MontyHall.html#switchM",
        "fct-type": "function",
        "title": "switchM"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example MontyHall",
        "module": "Numeric.Probability.Example.MontyHall",
        "name": "switchM",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-NBoys.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCeneralization of \u003ca\u003eNumeric.Probability.Example.Boys\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eConsider a family of n children.  Given that there are k boys in the family,\nwhat is the probability that there are m boys in the family?\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.Probability.Example.NBoys",
        "fct-package": "probability",
        "fct-signature": "module",
        "fct-source": "src/Numeric-Probability-Example-NBoys.html",
        "fct-type": "module",
        "title": "NBoys"
      },
      "index": {
        "description": "Ceneralization of Numeric.Probability.Example.Boys Consider family of children Given that there are boys in the family what is the probability that there are boys in the family",
        "hierarchy": "Numeric Probability Example NBoys",
        "module": "Numeric.Probability.Example.NBoys",
        "name": "NBoys",
        "normalized": "",
        "package": "probability",
        "partial": "NBoys",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-NBoys.html#t:Family",
      "description": {
        "fct-module": "Numeric.Probability.Example.NBoys",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Example-NBoys.html#Family",
        "fct-type": "type",
        "title": "Family"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example NBoys",
        "module": "Numeric.Probability.Example.NBoys",
        "name": "Family",
        "normalized": "",
        "package": "probability",
        "partial": "Family",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-NBoys.html#v:boys",
      "description": {
        "fct-module": "Numeric.Probability.Example.NBoys",
        "fct-package": "probability",
        "fct-signature": "Int -\u003e Event Family",
        "fct-source": "src/Numeric-Probability-Example-NBoys.html#boys",
        "fct-type": "function",
        "title": "boys"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example NBoys",
        "module": "Numeric.Probability.Example.NBoys",
        "name": "boys",
        "normalized": "Int-\u003eEvent Family",
        "package": "probability",
        "partial": "",
        "signature": "Int-\u003eEvent Family"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-NBoys.html#v:countBoys",
      "description": {
        "fct-module": "Numeric.Probability.Example.NBoys",
        "fct-package": "probability",
        "fct-signature": "Family -\u003e Int",
        "fct-source": "src/Numeric-Probability-Example-NBoys.html#countBoys",
        "fct-type": "function",
        "title": "countBoys"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example NBoys",
        "module": "Numeric.Probability.Example.NBoys",
        "name": "countBoys",
        "normalized": "Family-\u003eInt",
        "package": "probability",
        "partial": "Boys",
        "signature": "Family-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-NBoys.html#v:family",
      "description": {
        "fct-module": "Numeric.Probability.Example.NBoys",
        "fct-package": "probability",
        "fct-signature": "Int -\u003e Dist Family",
        "fct-source": "src/Numeric-Probability-Example-NBoys.html#family",
        "fct-type": "function",
        "title": "family"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example NBoys",
        "module": "Numeric.Probability.Example.NBoys",
        "name": "family",
        "normalized": "Int-\u003eDist Family",
        "package": "probability",
        "partial": "",
        "signature": "Int-\u003eDist Family"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-NBoys.html#v:nBoys",
      "description": {
        "fct-module": "Numeric.Probability.Example.NBoys",
        "fct-package": "probability",
        "fct-signature": "Int -\u003e Int -\u003e Int -\u003e Probability",
        "fct-source": "src/Numeric-Probability-Example-NBoys.html#nBoys",
        "fct-type": "function",
        "title": "nBoys"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example NBoys",
        "module": "Numeric.Probability.Example.NBoys",
        "name": "nBoys",
        "normalized": "Int-\u003eInt-\u003eInt-\u003eProbability",
        "package": "probability",
        "partial": "Boys",
        "signature": "Int-\u003eInt-\u003eInt-\u003eProbability"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-NBoys.html#v:numBoys",
      "description": {
        "fct-module": "Numeric.Probability.Example.NBoys",
        "fct-package": "probability",
        "fct-signature": "Int -\u003e Int -\u003e Dist Int",
        "fct-source": "src/Numeric-Probability-Example-NBoys.html#numBoys",
        "fct-type": "function",
        "title": "numBoys"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example NBoys",
        "module": "Numeric.Probability.Example.NBoys",
        "name": "numBoys",
        "normalized": "Int-\u003eInt-\u003eDist Int",
        "package": "probability",
        "partial": "Boys",
        "signature": "Int-\u003eInt-\u003eDist Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-NBoys.html#v:onlyBoys1",
      "description": {
        "fct-descr": "\u003cp\u003eonly boys in a family that has one boy\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Example.NBoys",
        "fct-package": "probability",
        "fct-signature": "Int -\u003e Probability",
        "fct-source": "src/Numeric-Probability-Example-NBoys.html#onlyBoys1",
        "fct-type": "function",
        "title": "onlyBoys1"
      },
      "index": {
        "description": "only boys in family that has one boy",
        "hierarchy": "Numeric Probability Example NBoys",
        "module": "Numeric.Probability.Example.NBoys",
        "name": "onlyBoys1",
        "normalized": "Int-\u003eProbability",
        "package": "probability",
        "partial": "Boys",
        "signature": "Int-\u003eProbability"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Predator.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLotka-Volterra predator-prey model\n\u003c/p\u003e\u003cp\u003eparameters\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eg\u003c/code\u003e : victims' growth factor\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ed\u003c/code\u003e : predators' death factor\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003es\u003c/code\u003e : search rate\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ee\u003c/code\u003e : energetic efficiency\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Numeric.Probability.Example.Predator",
        "fct-package": "probability",
        "fct-signature": "module",
        "fct-source": "src/Numeric-Probability-Example-Predator.html",
        "fct-type": "module",
        "title": "Predator"
      },
      "index": {
        "description": "Lotka-Volterra predator-prey model parameters victims growth factor predators death factor search rate energetic efficiency",
        "hierarchy": "Numeric Probability Example Predator",
        "module": "Numeric.Probability.Example.Predator",
        "name": "Predator",
        "normalized": "",
        "package": "probability",
        "partial": "Predator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Predator.html#v:d",
      "description": {
        "fct-module": "Numeric.Probability.Example.Predator",
        "fct-package": "probability",
        "fct-signature": "Float",
        "fct-source": "src/Numeric-Probability-Example-Predator.html#g",
        "fct-type": "function",
        "title": "d"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Predator",
        "module": "Numeric.Probability.Example.Predator",
        "name": "d",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Predator.html#v:dp",
      "description": {
        "fct-module": "Numeric.Probability.Example.Predator",
        "fct-package": "probability",
        "fct-signature": "(Float, Float) -\u003e Float",
        "fct-source": "src/Numeric-Probability-Example-Predator.html#dp",
        "fct-type": "function",
        "title": "dp"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Predator",
        "module": "Numeric.Probability.Example.Predator",
        "name": "dp",
        "normalized": "(Float,Float)-\u003eFloat",
        "package": "probability",
        "partial": "",
        "signature": "(Float,Float)-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Predator.html#v:dv",
      "description": {
        "fct-module": "Numeric.Probability.Example.Predator",
        "fct-package": "probability",
        "fct-signature": "(Float, Float) -\u003e Float",
        "fct-source": "src/Numeric-Probability-Example-Predator.html#dv",
        "fct-type": "function",
        "title": "dv"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Predator",
        "module": "Numeric.Probability.Example.Predator",
        "name": "dv",
        "normalized": "(Float,Float)-\u003eFloat",
        "package": "probability",
        "partial": "",
        "signature": "(Float,Float)-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Predator.html#v:dvp",
      "description": {
        "fct-module": "Numeric.Probability.Example.Predator",
        "fct-package": "probability",
        "fct-signature": "(Float, Float) -\u003e (Float, Float)",
        "fct-source": "src/Numeric-Probability-Example-Predator.html#dvp",
        "fct-type": "function",
        "title": "dvp"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Predator",
        "module": "Numeric.Probability.Example.Predator",
        "name": "dvp",
        "normalized": "(Float,Float)-\u003e(Float,Float)",
        "package": "probability",
        "partial": "",
        "signature": "(Float,Float)-\u003e(Float,Float)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Predator.html#v:e",
      "description": {
        "fct-module": "Numeric.Probability.Example.Predator",
        "fct-package": "probability",
        "fct-signature": "Float",
        "fct-source": "src/Numeric-Probability-Example-Predator.html#g",
        "fct-type": "function",
        "title": "e"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Predator",
        "module": "Numeric.Probability.Example.Predator",
        "name": "e",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Predator.html#v:fig1",
      "description": {
        "fct-module": "Numeric.Probability.Example.Predator",
        "fct-package": "probability",
        "fct-signature": "Int -\u003e Vis",
        "fct-source": "src/Numeric-Probability-Example-Predator.html#fig1",
        "fct-type": "function",
        "title": "fig1"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Predator",
        "module": "Numeric.Probability.Example.Predator",
        "name": "fig1",
        "normalized": "Int-\u003eVis",
        "package": "probability",
        "partial": "",
        "signature": "Int-\u003eVis"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Predator.html#v:g",
      "description": {
        "fct-module": "Numeric.Probability.Example.Predator",
        "fct-package": "probability",
        "fct-signature": "Float",
        "fct-source": "src/Numeric-Probability-Example-Predator.html#g",
        "fct-type": "function",
        "title": "g"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Predator",
        "module": "Numeric.Probability.Example.Predator",
        "name": "g",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Predator.html#v:p0",
      "description": {
        "fct-module": "Numeric.Probability.Example.Predator",
        "fct-package": "probability",
        "fct-signature": "Float",
        "fct-source": "src/Numeric-Probability-Example-Predator.html#p0",
        "fct-type": "function",
        "title": "p0"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Predator",
        "module": "Numeric.Probability.Example.Predator",
        "name": "p0",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Predator.html#v:ps",
      "description": {
        "fct-module": "Numeric.Probability.Example.Predator",
        "fct-package": "probability",
        "fct-signature": "[Float]",
        "fct-source": "src/Numeric-Probability-Example-Predator.html#ps",
        "fct-type": "function",
        "title": "ps"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Predator",
        "module": "Numeric.Probability.Example.Predator",
        "name": "ps",
        "normalized": "[Float]",
        "package": "probability",
        "partial": "",
        "signature": "[Float]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Predator.html#v:s",
      "description": {
        "fct-module": "Numeric.Probability.Example.Predator",
        "fct-package": "probability",
        "fct-signature": "Float",
        "fct-source": "src/Numeric-Probability-Example-Predator.html#g",
        "fct-type": "function",
        "title": "s"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Predator",
        "module": "Numeric.Probability.Example.Predator",
        "name": "s",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Predator.html#v:v0",
      "description": {
        "fct-module": "Numeric.Probability.Example.Predator",
        "fct-package": "probability",
        "fct-signature": "Float",
        "fct-source": "src/Numeric-Probability-Example-Predator.html#v0",
        "fct-type": "function",
        "title": "v0"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Predator",
        "module": "Numeric.Probability.Example.Predator",
        "name": "v0",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Predator.html#v:vp",
      "description": {
        "fct-module": "Numeric.Probability.Example.Predator",
        "fct-package": "probability",
        "fct-signature": "[(Float, Float)]",
        "fct-source": "src/Numeric-Probability-Example-Predator.html#vp",
        "fct-type": "function",
        "title": "vp"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Predator",
        "module": "Numeric.Probability.Example.Predator",
        "name": "vp",
        "normalized": "[(Float,Float)]",
        "package": "probability",
        "partial": "",
        "signature": "[(Float,Float)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Predator.html#v:vs",
      "description": {
        "fct-module": "Numeric.Probability.Example.Predator",
        "fct-package": "probability",
        "fct-signature": "[Float]",
        "fct-source": "src/Numeric-Probability-Example-Predator.html#vs",
        "fct-type": "function",
        "title": "vs"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Predator",
        "module": "Numeric.Probability.Example.Predator",
        "name": "vs",
        "normalized": "[Float]",
        "package": "probability",
        "partial": "",
        "signature": "[Float]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Profession.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe newspaper \u003ca\u003eSueddeutsche\u003c/a\u003e asked their readers\nwhat professions 16 persons have,\nby only showing the photographies of them and three choices.\n\u003c/p\u003e\u003cp\u003eTheir statistics was:\n22% readers had  0 to  5 correct answers   (category 0)\n75% readers had  6 to 11 correct answers   (category 1)\n 3% readers had 12 to 16 correct answers   (category 2)\n\u003c/p\u003e\u003cp\u003eCan this statistics be explained with random guessing,\nor is there some information in the photographies\nthat the readers could utilize?\n\u003c/p\u003e\u003cp\u003eI got 6 correct answers.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.Probability.Example.Profession",
        "fct-package": "probability",
        "fct-signature": "module",
        "fct-source": "src/Numeric-Probability-Example-Profession.html",
        "fct-type": "module",
        "title": "Profession"
      },
      "index": {
        "description": "The newspaper Sueddeutsche asked their readers what professions persons have by only showing the photographies of them and three choices Their statistics was readers had to correct answers category readers had to correct answers category readers had to correct answers category Can this statistics be explained with random guessing or is there some information in the photographies that the readers could utilize got correct answers",
        "hierarchy": "Numeric Probability Example Profession",
        "module": "Numeric.Probability.Example.Profession",
        "name": "Profession",
        "normalized": "",
        "package": "probability",
        "partial": "Profession",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Profession.html#t:Dist",
      "description": {
        "fct-module": "Numeric.Probability.Example.Profession",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Example-Profession.html#Dist",
        "fct-type": "type",
        "title": "Dist"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Profession",
        "module": "Numeric.Probability.Example.Profession",
        "name": "Dist",
        "normalized": "",
        "package": "probability",
        "partial": "Dist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Profession.html#t:Probability",
      "description": {
        "fct-module": "Numeric.Probability.Example.Profession",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Example-Profession.html#Probability",
        "fct-type": "type",
        "title": "Probability"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Profession",
        "module": "Numeric.Probability.Example.Profession",
        "name": "Probability",
        "normalized": "",
        "package": "probability",
        "partial": "Probability",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Profession.html#v:categories",
      "description": {
        "fct-module": "Numeric.Probability.Example.Profession",
        "fct-package": "probability",
        "fct-signature": "Dist Int",
        "fct-source": "src/Numeric-Probability-Example-Profession.html#categories",
        "fct-type": "function",
        "title": "categories"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Profession",
        "module": "Numeric.Probability.Example.Profession",
        "name": "categories",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Profession.html#v:correctAnswers",
      "description": {
        "fct-module": "Numeric.Probability.Example.Profession",
        "fct-package": "probability",
        "fct-signature": "Dist Int",
        "fct-source": "src/Numeric-Probability-Example-Profession.html#correctAnswers",
        "fct-type": "function",
        "title": "correctAnswers"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Profession",
        "module": "Numeric.Probability.Example.Profession",
        "name": "correctAnswers",
        "normalized": "",
        "package": "probability",
        "partial": "Answers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModel:\n\u003c/p\u003e\u003cp\u003eone server serving customers from one queue\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.Probability.Example.Queuing",
        "fct-package": "probability",
        "fct-signature": "module",
        "fct-source": "src/Numeric-Probability-Example-Queuing.html",
        "fct-type": "module",
        "title": "Queuing"
      },
      "index": {
        "description": "Model one server serving customers from one queue",
        "hierarchy": "Numeric Probability Example Queuing",
        "module": "Numeric.Probability.Example.Queuing",
        "name": "Queuing",
        "normalized": "",
        "package": "probability",
        "partial": "Queuing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#t:Event",
      "description": {
        "fct-module": "Numeric.Probability.Example.Queuing",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Example-Queuing.html#Event",
        "fct-type": "type",
        "title": "Event"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Queuing",
        "module": "Numeric.Probability.Example.Queuing",
        "name": "Event",
        "normalized": "",
        "package": "probability",
        "partial": "Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#t:Events",
      "description": {
        "fct-module": "Numeric.Probability.Example.Queuing",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Example-Queuing.html#Events",
        "fct-type": "type",
        "title": "Events"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Queuing",
        "module": "Numeric.Probability.Example.Queuing",
        "name": "Events",
        "normalized": "",
        "package": "probability",
        "partial": "Events",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#t:Profile",
      "description": {
        "fct-descr": "\u003cp\u003e(servingTime, nextArrival)\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Example.Queuing",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Example-Queuing.html#Profile",
        "fct-type": "type",
        "title": "Profile"
      },
      "index": {
        "description": "servingTime nextArrival",
        "hierarchy": "Numeric Probability Example Queuing",
        "module": "Numeric.Probability.Example.Queuing",
        "name": "Profile",
        "normalized": "",
        "package": "probability",
        "partial": "Profile",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#t:Queue",
      "description": {
        "fct-descr": "\u003cp\u003ecustomers and their individual serving times\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Example.Queuing",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Example-Queuing.html#Queue",
        "fct-type": "type",
        "title": "Queue"
      },
      "index": {
        "description": "customers and their individual serving times",
        "hierarchy": "Numeric Probability Example Queuing",
        "module": "Numeric.Probability.Example.Queuing",
        "name": "Queue",
        "normalized": "",
        "package": "probability",
        "partial": "Queue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#t:REvent",
      "description": {
        "fct-module": "Numeric.Probability.Example.Queuing",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Example-Queuing.html#REvent",
        "fct-type": "type",
        "title": "REvent"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Queuing",
        "module": "Numeric.Probability.Example.Queuing",
        "name": "REvent",
        "normalized": "",
        "package": "probability",
        "partial": "REvent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#t:REvents",
      "description": {
        "fct-module": "Numeric.Probability.Example.Queuing",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Example-Queuing.html#REvents",
        "fct-type": "type",
        "title": "REvents"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Queuing",
        "module": "Numeric.Probability.Example.Queuing",
        "name": "REvents",
        "normalized": "",
        "package": "probability",
        "partial": "REvents",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#t:RProfile",
      "description": {
        "fct-module": "Numeric.Probability.Example.Queuing",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Example-Queuing.html#RProfile",
        "fct-type": "type",
        "title": "RProfile"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Queuing",
        "module": "Numeric.Probability.Example.Queuing",
        "name": "RProfile",
        "normalized": "",
        "package": "probability",
        "partial": "RProfile",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#t:State",
      "description": {
        "fct-descr": "\u003cp\u003e(customers waiting,validity period of that queue)\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Example.Queuing",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Example-Queuing.html#State",
        "fct-type": "type",
        "title": "State"
      },
      "index": {
        "description": "customers waiting validity period of that queue",
        "hierarchy": "Numeric Probability Example Queuing",
        "module": "Numeric.Probability.Example.Queuing",
        "name": "State",
        "normalized": "",
        "package": "probability",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#t:System",
      "description": {
        "fct-module": "Numeric.Probability.Example.Queuing",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Example-Queuing.html#System",
        "fct-type": "type",
        "title": "System"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Queuing",
        "module": "Numeric.Probability.Example.Queuing",
        "name": "System",
        "normalized": "",
        "package": "probability",
        "partial": "System",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#t:Time",
      "description": {
        "fct-module": "Numeric.Probability.Example.Queuing",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Example-Queuing.html#Time",
        "fct-type": "type",
        "title": "Time"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Queuing",
        "module": "Numeric.Probability.Example.Queuing",
        "name": "Time",
        "normalized": "",
        "package": "probability",
        "partial": "Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#v:allWaiting",
      "description": {
        "fct-module": "Numeric.Probability.Example.Queuing",
        "fct-package": "probability",
        "fct-signature": "Int -\u003e System a -\u003e [a]",
        "fct-source": "src/Numeric-Probability-Example-Queuing.html#allWaiting",
        "fct-type": "function",
        "title": "allWaiting"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Queuing",
        "module": "Numeric.Probability.Example.Queuing",
        "name": "allWaiting",
        "normalized": "Int-\u003eSystem a-\u003e[a]",
        "package": "probability",
        "partial": "Waiting",
        "signature": "Int-\u003eSystem a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#v:countWaiting",
      "description": {
        "fct-module": "Numeric.Probability.Example.Queuing",
        "fct-package": "probability",
        "fct-signature": "Int -\u003e System a -\u003e Int",
        "fct-source": "src/Numeric-Probability-Example-Queuing.html#countWaiting",
        "fct-type": "function",
        "title": "countWaiting"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Queuing",
        "module": "Numeric.Probability.Example.Queuing",
        "name": "countWaiting",
        "normalized": "Int-\u003eSystem a-\u003eInt",
        "package": "probability",
        "partial": "Waiting",
        "signature": "Int-\u003eSystem a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#v:evalSystem",
      "description": {
        "fct-module": "Numeric.Probability.Example.Queuing",
        "fct-package": "probability",
        "fct-signature": "Int -\u003e Int -\u003e REvents a -\u003e (System a -\u003e b) -\u003e RDist b",
        "fct-source": "src/Numeric-Probability-Example-Queuing.html#evalSystem",
        "fct-type": "function",
        "title": "evalSystem"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Queuing",
        "module": "Numeric.Probability.Example.Queuing",
        "name": "evalSystem",
        "normalized": "Int-\u003eInt-\u003eREvents a-\u003e(System a-\u003eb)-\u003eRDist b",
        "package": "probability",
        "partial": "System",
        "signature": "Int-\u003eInt-\u003eREvents a-\u003e(System a-\u003eb)-\u003eRDist b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#v:event",
      "description": {
        "fct-module": "Numeric.Probability.Example.Queuing",
        "fct-package": "probability",
        "fct-signature": "Time -\u003e Events a -\u003e Queue a -\u003e [State a]",
        "fct-source": "src/Numeric-Probability-Example-Queuing.html#event",
        "fct-type": "function",
        "title": "event"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Queuing",
        "module": "Numeric.Probability.Example.Queuing",
        "name": "event",
        "normalized": "Time-\u003eEvents a-\u003eQueue a-\u003e[State a]",
        "package": "probability",
        "partial": "",
        "signature": "Time-\u003eEvents a-\u003eQueue a-\u003e[State a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#v:idle",
      "description": {
        "fct-module": "Numeric.Probability.Example.Queuing",
        "fct-package": "probability",
        "fct-signature": "Int -\u003e System a -\u003e Time",
        "fct-source": "src/Numeric-Probability-Example-Queuing.html#idle",
        "fct-type": "function",
        "title": "idle"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Queuing",
        "module": "Numeric.Probability.Example.Queuing",
        "name": "idle",
        "normalized": "Int-\u003eSystem a-\u003eTime",
        "package": "probability",
        "partial": "",
        "signature": "Int-\u003eSystem a-\u003eTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#v:idleAvgP",
      "description": {
        "fct-module": "Numeric.Probability.Example.Queuing",
        "fct-package": "probability",
        "fct-signature": "Int -\u003e System a -\u003e Float",
        "fct-source": "src/Numeric-Probability-Example-Queuing.html#idleAvgP",
        "fct-type": "function",
        "title": "idleAvgP"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Queuing",
        "module": "Numeric.Probability.Example.Queuing",
        "name": "idleAvgP",
        "normalized": "Int-\u003eSystem a-\u003eFloat",
        "package": "probability",
        "partial": "Avg",
        "signature": "Int-\u003eSystem a-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#v:inSystem",
      "description": {
        "fct-module": "Numeric.Probability.Example.Queuing",
        "fct-package": "probability",
        "fct-signature": "System a -\u003e Time",
        "fct-source": "src/Numeric-Probability-Example-Queuing.html#inSystem",
        "fct-type": "function",
        "title": "inSystem"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Queuing",
        "module": "Numeric.Probability.Example.Queuing",
        "name": "inSystem",
        "normalized": "System a-\u003eTime",
        "package": "probability",
        "partial": "System",
        "signature": "System a-\u003eTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#v:mEvent",
      "description": {
        "fct-descr": "\u003cp\u003emultiple servers\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Example.Queuing",
        "fct-package": "probability",
        "fct-signature": "Int -\u003e Time -\u003e Events a -\u003e Queue a -\u003e [State a]",
        "fct-source": "src/Numeric-Probability-Example-Queuing.html#mEvent",
        "fct-type": "function",
        "title": "mEvent"
      },
      "index": {
        "description": "multiple servers",
        "hierarchy": "Numeric Probability Example Queuing",
        "module": "Numeric.Probability.Example.Queuing",
        "name": "mEvent",
        "normalized": "Int-\u003eTime-\u003eEvents a-\u003eQueue a-\u003e[State a]",
        "package": "probability",
        "partial": "Event",
        "signature": "Int-\u003eTime-\u003eEvents a-\u003eQueue a-\u003e[State a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#v:mServe",
      "description": {
        "fct-descr": "\u003cp\u003edecrease served customers remaining time by specified amount\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Example.Queuing",
        "fct-package": "probability",
        "fct-signature": "Int -\u003e Int -\u003e Queue a -\u003e Queue a",
        "fct-source": "src/Numeric-Probability-Example-Queuing.html#mServe",
        "fct-type": "function",
        "title": "mServe"
      },
      "index": {
        "description": "decrease served customers remaining time by specified amount",
        "hierarchy": "Numeric Probability Example Queuing",
        "module": "Numeric.Probability.Example.Queuing",
        "name": "mServe",
        "normalized": "Int-\u003eInt-\u003eQueue a-\u003eQueue a",
        "package": "probability",
        "partial": "Serve",
        "signature": "Int-\u003eInt-\u003eQueue a-\u003eQueue a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#v:mSystem",
      "description": {
        "fct-module": "Numeric.Probability.Example.Queuing",
        "fct-package": "probability",
        "fct-signature": "Int -\u003e Events a -\u003e System a",
        "fct-source": "src/Numeric-Probability-Example-Queuing.html#mSystem",
        "fct-type": "function",
        "title": "mSystem"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Queuing",
        "module": "Numeric.Probability.Example.Queuing",
        "name": "mSystem",
        "normalized": "Int-\u003eEvents a-\u003eSystem a",
        "package": "probability",
        "partial": "System",
        "signature": "Int-\u003eEvents a-\u003eSystem a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#v:mTimeStep",
      "description": {
        "fct-descr": "\u003cp\u003etime until next completion\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Example.Queuing",
        "fct-package": "probability",
        "fct-signature": "Int -\u003e Queue a -\u003e Int",
        "fct-source": "src/Numeric-Probability-Example-Queuing.html#mTimeStep",
        "fct-type": "function",
        "title": "mTimeStep"
      },
      "index": {
        "description": "time until next completion",
        "hierarchy": "Numeric Probability Example Queuing",
        "module": "Numeric.Probability.Example.Queuing",
        "name": "mTimeStep",
        "normalized": "Int-\u003eQueue a-\u003eInt",
        "package": "probability",
        "partial": "Time Step",
        "signature": "Int-\u003eQueue a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#v:maxQueue",
      "description": {
        "fct-module": "Numeric.Probability.Example.Queuing",
        "fct-package": "probability",
        "fct-signature": "System a -\u003e Int",
        "fct-source": "src/Numeric-Probability-Example-Queuing.html#maxQueue",
        "fct-type": "function",
        "title": "maxQueue"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Queuing",
        "module": "Numeric.Probability.Example.Queuing",
        "name": "maxQueue",
        "normalized": "System a-\u003eInt",
        "package": "probability",
        "partial": "Queue",
        "signature": "System a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#v:rBuildEvents",
      "description": {
        "fct-module": "Numeric.Probability.Example.Queuing",
        "fct-package": "probability",
        "fct-signature": "REvents a -\u003e T (Events a)",
        "fct-source": "src/Numeric-Probability-Example-Queuing.html#rBuildEvents",
        "fct-type": "function",
        "title": "rBuildEvents"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Queuing",
        "module": "Numeric.Probability.Example.Queuing",
        "name": "rBuildEvents",
        "normalized": "REvents a-\u003eT(Events a)",
        "package": "probability",
        "partial": "Build Events",
        "signature": "REvents a-\u003eT(Events a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#v:rSystem",
      "description": {
        "fct-module": "Numeric.Probability.Example.Queuing",
        "fct-package": "probability",
        "fct-signature": "Int -\u003e REvents a -\u003e T (System a)",
        "fct-source": "src/Numeric-Probability-Example-Queuing.html#rSystem",
        "fct-type": "function",
        "title": "rSystem"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Queuing",
        "module": "Numeric.Probability.Example.Queuing",
        "name": "rSystem",
        "normalized": "Int-\u003eREvents a-\u003eT(System a)",
        "package": "probability",
        "partial": "System",
        "signature": "Int-\u003eREvents a-\u003eT(System a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#v:rmSystem",
      "description": {
        "fct-module": "Numeric.Probability.Example.Queuing",
        "fct-package": "probability",
        "fct-signature": "Int -\u003e Int -\u003e REvents a -\u003e RDist (System a)",
        "fct-source": "src/Numeric-Probability-Example-Queuing.html#rmSystem",
        "fct-type": "function",
        "title": "rmSystem"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Queuing",
        "module": "Numeric.Probability.Example.Queuing",
        "name": "rmSystem",
        "normalized": "Int-\u003eInt-\u003eREvents a-\u003eRDist(System a)",
        "package": "probability",
        "partial": "System",
        "signature": "Int-\u003eInt-\u003eREvents a-\u003eRDist(System a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#v:server",
      "description": {
        "fct-module": "Numeric.Probability.Example.Queuing",
        "fct-package": "probability",
        "fct-signature": "Int -\u003e System a -\u003e Time",
        "fct-source": "src/Numeric-Probability-Example-Queuing.html#server",
        "fct-type": "function",
        "title": "server"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Queuing",
        "module": "Numeric.Probability.Example.Queuing",
        "name": "server",
        "normalized": "Int-\u003eSystem a-\u003eTime",
        "package": "probability",
        "partial": "",
        "signature": "Int-\u003eSystem a-\u003eTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#v:system",
      "description": {
        "fct-module": "Numeric.Probability.Example.Queuing",
        "fct-package": "probability",
        "fct-signature": "Events a -\u003e System a",
        "fct-source": "src/Numeric-Probability-Example-Queuing.html#system",
        "fct-type": "function",
        "title": "system"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Queuing",
        "module": "Numeric.Probability.Example.Queuing",
        "name": "system",
        "normalized": "Events a-\u003eSystem a",
        "package": "probability",
        "partial": "",
        "signature": "Events a-\u003eSystem a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#v:total",
      "description": {
        "fct-module": "Numeric.Probability.Example.Queuing",
        "fct-package": "probability",
        "fct-signature": "System a -\u003e Time",
        "fct-source": "src/Numeric-Probability-Example-Queuing.html#total",
        "fct-type": "function",
        "title": "total"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Queuing",
        "module": "Numeric.Probability.Example.Queuing",
        "name": "total",
        "normalized": "System a-\u003eTime",
        "package": "probability",
        "partial": "",
        "signature": "System a-\u003eTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#v:unit",
      "description": {
        "fct-module": "Numeric.Probability.Example.Queuing",
        "fct-package": "probability",
        "fct-signature": "b -\u003e ((), b)",
        "fct-source": "src/Numeric-Probability-Example-Queuing.html#unit",
        "fct-type": "function",
        "title": "unit"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Queuing",
        "module": "Numeric.Probability.Example.Queuing",
        "name": "unit",
        "normalized": "a-\u003e((),a)",
        "package": "probability",
        "partial": "",
        "signature": "b-\u003e((),b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#v:waiting",
      "description": {
        "fct-module": "Numeric.Probability.Example.Queuing",
        "fct-package": "probability",
        "fct-signature": "Int -\u003e System a -\u003e Time",
        "fct-source": "src/Numeric-Probability-Example-Queuing.html#waiting",
        "fct-type": "function",
        "title": "waiting"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example Queuing",
        "module": "Numeric.Probability.Example.Queuing",
        "name": "waiting",
        "normalized": "Int-\u003eSystem a-\u003eTime",
        "package": "probability",
        "partial": "",
        "signature": "Int-\u003eSystem a-\u003eTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#",
      "description": {
        "fct-module": "Numeric.Probability.Example.TreeGrowth",
        "fct-package": "probability",
        "fct-signature": "module",
        "fct-source": "src/Numeric-Probability-Example-TreeGrowth.html",
        "fct-type": "module",
        "title": "TreeGrowth"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example TreeGrowth",
        "module": "Numeric.Probability.Example.TreeGrowth",
        "name": "TreeGrowth",
        "normalized": "",
        "package": "probability",
        "partial": "Tree Growth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#t:Height",
      "description": {
        "fct-module": "Numeric.Probability.Example.TreeGrowth",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Example-TreeGrowth.html#Height",
        "fct-type": "type",
        "title": "Height"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example TreeGrowth",
        "module": "Numeric.Probability.Example.TreeGrowth",
        "name": "Height",
        "normalized": "",
        "package": "probability",
        "partial": "Height",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#t:Tree",
      "description": {
        "fct-module": "Numeric.Probability.Example.TreeGrowth",
        "fct-package": "probability",
        "fct-signature": "data",
        "fct-source": "src/Numeric-Probability-Example-TreeGrowth.html#Tree",
        "fct-type": "data",
        "title": "Tree"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example TreeGrowth",
        "module": "Numeric.Probability.Example.TreeGrowth",
        "name": "Tree",
        "normalized": "",
        "package": "probability",
        "partial": "Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#v:Alive",
      "description": {
        "fct-module": "Numeric.Probability.Example.TreeGrowth",
        "fct-package": "probability",
        "fct-signature": "Alive Height",
        "fct-source": "src/Numeric-Probability-Example-TreeGrowth.html#Tree",
        "fct-type": "function",
        "title": "Alive"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example TreeGrowth",
        "module": "Numeric.Probability.Example.TreeGrowth",
        "name": "Alive",
        "normalized": "",
        "package": "probability",
        "partial": "Alive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#v:Fallen",
      "description": {
        "fct-module": "Numeric.Probability.Example.TreeGrowth",
        "fct-package": "probability",
        "fct-signature": "Fallen",
        "fct-source": "src/Numeric-Probability-Example-TreeGrowth.html#Tree",
        "fct-type": "function",
        "title": "Fallen"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example TreeGrowth",
        "module": "Numeric.Probability.Example.TreeGrowth",
        "name": "Fallen",
        "normalized": "",
        "package": "probability",
        "partial": "Fallen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#v:Hit",
      "description": {
        "fct-module": "Numeric.Probability.Example.TreeGrowth",
        "fct-package": "probability",
        "fct-signature": "Hit Height",
        "fct-source": "src/Numeric-Probability-Example-TreeGrowth.html#Tree",
        "fct-type": "function",
        "title": "Hit"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example TreeGrowth",
        "module": "Numeric.Probability.Example.TreeGrowth",
        "name": "Hit",
        "normalized": "",
        "package": "probability",
        "partial": "Hit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#v:done",
      "description": {
        "fct-module": "Numeric.Probability.Example.TreeGrowth",
        "fct-package": "probability",
        "fct-signature": "Tree -\u003e Bool",
        "fct-source": "src/Numeric-Probability-Example-TreeGrowth.html#done",
        "fct-type": "function",
        "title": "done"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example TreeGrowth",
        "module": "Numeric.Probability.Example.TreeGrowth",
        "name": "done",
        "normalized": "Tree-\u003eBool",
        "package": "probability",
        "partial": "",
        "signature": "Tree-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#v:ev5",
      "description": {
        "fct-module": "Numeric.Probability.Example.TreeGrowth",
        "fct-package": "probability",
        "fct-signature": "Tree -\u003e Dist Tree",
        "fct-source": "src/Numeric-Probability-Example-TreeGrowth.html#ev5",
        "fct-type": "function",
        "title": "ev5"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example TreeGrowth",
        "module": "Numeric.Probability.Example.TreeGrowth",
        "name": "ev5",
        "normalized": "Tree-\u003eDist Tree",
        "package": "probability",
        "partial": "",
        "signature": "Tree-\u003eDist Tree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#v:evolve",
      "description": {
        "fct-module": "Numeric.Probability.Example.TreeGrowth",
        "fct-package": "probability",
        "fct-signature": "Trans Tree",
        "fct-source": "src/Numeric-Probability-Example-TreeGrowth.html#evolve",
        "fct-type": "function",
        "title": "evolve"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example TreeGrowth",
        "module": "Numeric.Probability.Example.TreeGrowth",
        "name": "evolve",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#v:fall",
      "description": {
        "fct-module": "Numeric.Probability.Example.TreeGrowth",
        "fct-package": "probability",
        "fct-signature": "Trans Tree",
        "fct-source": "src/Numeric-Probability-Example-TreeGrowth.html#fall",
        "fct-type": "function",
        "title": "fall"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example TreeGrowth",
        "module": "Numeric.Probability.Example.TreeGrowth",
        "name": "fall",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#v:grow",
      "description": {
        "fct-module": "Numeric.Probability.Example.TreeGrowth",
        "fct-package": "probability",
        "fct-signature": "Trans Tree",
        "fct-source": "src/Numeric-Probability-Example-TreeGrowth.html#grow",
        "fct-type": "function",
        "title": "grow"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example TreeGrowth",
        "module": "Numeric.Probability.Example.TreeGrowth",
        "name": "grow",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#v:h2",
      "description": {
        "fct-module": "Numeric.Probability.Example.TreeGrowth",
        "fct-package": "probability",
        "fct-signature": "Space Tree",
        "fct-source": "src/Numeric-Probability-Example-TreeGrowth.html#h2",
        "fct-type": "function",
        "title": "h2"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example TreeGrowth",
        "module": "Numeric.Probability.Example.TreeGrowth",
        "name": "h2",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#v:height",
      "description": {
        "fct-module": "Numeric.Probability.Example.TreeGrowth",
        "fct-package": "probability",
        "fct-signature": "Tree -\u003e Int",
        "fct-source": "src/Numeric-Probability-Example-TreeGrowth.html#height",
        "fct-type": "function",
        "title": "height"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example TreeGrowth",
        "module": "Numeric.Probability.Example.TreeGrowth",
        "name": "height",
        "normalized": "Tree-\u003eInt",
        "package": "probability",
        "partial": "",
        "signature": "Tree-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#v:heightAtTime",
      "description": {
        "fct-module": "Numeric.Probability.Example.TreeGrowth",
        "fct-package": "probability",
        "fct-signature": "Int -\u003e Plot",
        "fct-source": "src/Numeric-Probability-Example-TreeGrowth.html#heightAtTime",
        "fct-type": "function",
        "title": "heightAtTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example TreeGrowth",
        "module": "Numeric.Probability.Example.TreeGrowth",
        "name": "heightAtTime",
        "normalized": "Int-\u003ePlot",
        "package": "probability",
        "partial": "At Time",
        "signature": "Int-\u003ePlot"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#v:heightCurve",
      "description": {
        "fct-module": "Numeric.Probability.Example.TreeGrowth",
        "fct-package": "probability",
        "fct-signature": "(Int, Color) -\u003e Plot",
        "fct-source": "src/Numeric-Probability-Example-TreeGrowth.html#heightCurve",
        "fct-type": "function",
        "title": "heightCurve"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example TreeGrowth",
        "module": "Numeric.Probability.Example.TreeGrowth",
        "name": "heightCurve",
        "normalized": "(Int,Color)-\u003ePlot",
        "package": "probability",
        "partial": "Curve",
        "signature": "(Int,Color)-\u003ePlot"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#v:hist",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ehist n\u003c/code\u003e : history of tree distributions for n generations\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Example.TreeGrowth",
        "fct-package": "probability",
        "fct-signature": "Int -\u003e Expand Tree",
        "fct-source": "src/Numeric-Probability-Example-TreeGrowth.html#hist",
        "fct-type": "function",
        "title": "hist"
      },
      "index": {
        "description": "hist history of tree distributions for generations",
        "hierarchy": "Numeric Probability Example TreeGrowth",
        "module": "Numeric.Probability.Example.TreeGrowth",
        "name": "hist",
        "normalized": "Int-\u003eExpand Tree",
        "package": "probability",
        "partial": "",
        "signature": "Int-\u003eExpand Tree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#v:hit",
      "description": {
        "fct-module": "Numeric.Probability.Example.TreeGrowth",
        "fct-package": "probability",
        "fct-signature": "Trans Tree",
        "fct-source": "src/Numeric-Probability-Example-TreeGrowth.html#hit",
        "fct-type": "function",
        "title": "hit"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example TreeGrowth",
        "module": "Numeric.Probability.Example.TreeGrowth",
        "name": "hit",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#v:p1",
      "description": {
        "fct-module": "Numeric.Probability.Example.TreeGrowth",
        "fct-package": "probability",
        "fct-signature": "Vis",
        "fct-source": "src/Numeric-Probability-Example-TreeGrowth.html#p1",
        "fct-type": "function",
        "title": "p1"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example TreeGrowth",
        "module": "Numeric.Probability.Example.TreeGrowth",
        "name": "p1",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#v:p2",
      "description": {
        "fct-module": "Numeric.Probability.Example.TreeGrowth",
        "fct-package": "probability",
        "fct-signature": "Vis",
        "fct-source": "src/Numeric-Probability-Example-TreeGrowth.html#p1",
        "fct-type": "function",
        "title": "p2"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example TreeGrowth",
        "module": "Numeric.Probability.Example.TreeGrowth",
        "name": "p2",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#v:p3",
      "description": {
        "fct-module": "Numeric.Probability.Example.TreeGrowth",
        "fct-package": "probability",
        "fct-signature": "Vis",
        "fct-source": "src/Numeric-Probability-Example-TreeGrowth.html#p1",
        "fct-type": "function",
        "title": "p3"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example TreeGrowth",
        "module": "Numeric.Probability.Example.TreeGrowth",
        "name": "p3",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#v:p4",
      "description": {
        "fct-module": "Numeric.Probability.Example.TreeGrowth",
        "fct-package": "probability",
        "fct-signature": "Vis",
        "fct-source": "src/Numeric-Probability-Example-TreeGrowth.html#p1",
        "fct-type": "function",
        "title": "p4"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example TreeGrowth",
        "module": "Numeric.Probability.Example.TreeGrowth",
        "name": "p4",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#v:p5",
      "description": {
        "fct-module": "Numeric.Probability.Example.TreeGrowth",
        "fct-package": "probability",
        "fct-signature": "Vis",
        "fct-source": "src/Numeric-Probability-Example-TreeGrowth.html#p1",
        "fct-type": "function",
        "title": "p5"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example TreeGrowth",
        "module": "Numeric.Probability.Example.TreeGrowth",
        "name": "p5",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#v:p6",
      "description": {
        "fct-module": "Numeric.Probability.Example.TreeGrowth",
        "fct-package": "probability",
        "fct-signature": "Vis",
        "fct-source": "src/Numeric-Probability-Example-TreeGrowth.html#p1",
        "fct-type": "function",
        "title": "p6"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example TreeGrowth",
        "module": "Numeric.Probability.Example.TreeGrowth",
        "name": "p6",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#v:seed",
      "description": {
        "fct-descr": "\u003cp\u003etree growth simulation:\n start with seed and run for n generations\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Example.TreeGrowth",
        "fct-package": "probability",
        "fct-signature": "Tree",
        "fct-source": "src/Numeric-Probability-Example-TreeGrowth.html#seed",
        "fct-type": "function",
        "title": "seed"
      },
      "index": {
        "description": "tree growth simulation start with seed and run for generations",
        "hierarchy": "Numeric Probability Example TreeGrowth",
        "module": "Numeric.Probability.Example.TreeGrowth",
        "name": "seed",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#v:sh2",
      "description": {
        "fct-module": "Numeric.Probability.Example.TreeGrowth",
        "fct-package": "probability",
        "fct-signature": "IO ()",
        "fct-source": "src/Numeric-Probability-Example-TreeGrowth.html#sh2",
        "fct-type": "function",
        "title": "sh2"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example TreeGrowth",
        "module": "Numeric.Probability.Example.TreeGrowth",
        "name": "sh2",
        "normalized": "IO()",
        "package": "probability",
        "partial": "",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#v:simHist",
      "description": {
        "fct-module": "Numeric.Probability.Example.TreeGrowth",
        "fct-package": "probability",
        "fct-signature": "Int -\u003e Int -\u003e RExpand Tree",
        "fct-source": "src/Numeric-Probability-Example-TreeGrowth.html#simHist",
        "fct-type": "function",
        "title": "simHist"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example TreeGrowth",
        "module": "Numeric.Probability.Example.TreeGrowth",
        "name": "simHist",
        "normalized": "Int-\u003eInt-\u003eRExpand Tree",
        "package": "probability",
        "partial": "Hist",
        "signature": "Int-\u003eInt-\u003eRExpand Tree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#v:simTree",
      "description": {
        "fct-descr": "\u003cp\u003eSince '(*.)' is overloaded for Trans and RChange,\nwe can run the simulation ~. directly to \u003ccode\u003en *. live\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Example.TreeGrowth",
        "fct-package": "probability",
        "fct-signature": "Int -\u003e Int -\u003e RTrans Tree",
        "fct-source": "src/Numeric-Probability-Example-TreeGrowth.html#simTree",
        "fct-type": "function",
        "title": "simTree"
      },
      "index": {
        "description": "Since is overloaded for Trans and RChange we can run the simulation directly to live",
        "hierarchy": "Numeric Probability Example TreeGrowth",
        "module": "Numeric.Probability.Example.TreeGrowth",
        "name": "simTree",
        "normalized": "Int-\u003eInt-\u003eRTrans Tree",
        "package": "probability",
        "partial": "Tree",
        "signature": "Int-\u003eInt-\u003eRTrans Tree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#v:st2",
      "description": {
        "fct-module": "Numeric.Probability.Example.TreeGrowth",
        "fct-package": "probability",
        "fct-signature": "IO ()",
        "fct-source": "src/Numeric-Probability-Example-TreeGrowth.html#sh2",
        "fct-type": "function",
        "title": "st2"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example TreeGrowth",
        "module": "Numeric.Probability.Example.TreeGrowth",
        "name": "st2",
        "normalized": "IO()",
        "package": "probability",
        "partial": "",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#v:t2",
      "description": {
        "fct-module": "Numeric.Probability.Example.TreeGrowth",
        "fct-package": "probability",
        "fct-signature": "Dist Tree",
        "fct-source": "src/Numeric-Probability-Example-TreeGrowth.html#t2",
        "fct-type": "function",
        "title": "t2"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Example TreeGrowth",
        "module": "Numeric.Probability.Example.TreeGrowth",
        "name": "t2",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#v:tree",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003etree n\u003c/code\u003e : tree distribution after n generations\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Example.TreeGrowth",
        "fct-package": "probability",
        "fct-signature": "Int -\u003e Tree -\u003e Dist Tree",
        "fct-source": "src/Numeric-Probability-Example-TreeGrowth.html#tree",
        "fct-type": "function",
        "title": "tree"
      },
      "index": {
        "description": "tree tree distribution after generations",
        "hierarchy": "Numeric Probability Example TreeGrowth",
        "module": "Numeric.Probability.Example.TreeGrowth",
        "name": "tree",
        "normalized": "Int-\u003eTree-\u003eDist Tree",
        "package": "probability",
        "partial": "",
        "signature": "Int-\u003eTree-\u003eDist Tree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Expectation.html#",
      "description": {
        "fct-module": "Numeric.Probability.Expectation",
        "fct-package": "probability",
        "fct-signature": "module",
        "fct-source": "src/Numeric-Probability-Expectation.html",
        "fct-type": "module",
        "title": "Expectation"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Expectation",
        "module": "Numeric.Probability.Expectation",
        "name": "Expectation",
        "normalized": "",
        "package": "probability",
        "partial": "Expectation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Expectation.html#t:Expected",
      "description": {
        "fct-module": "Numeric.Probability.Expectation",
        "fct-package": "probability",
        "fct-signature": "class",
        "fct-source": "src/Numeric-Probability-Expectation.html#Expected",
        "fct-type": "class",
        "title": "Expected"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Expectation",
        "module": "Numeric.Probability.Expectation",
        "name": "Expected",
        "normalized": "",
        "package": "probability",
        "partial": "Expected",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Expectation.html#t:FromFloat",
      "description": {
        "fct-module": "Numeric.Probability.Expectation",
        "fct-package": "probability",
        "fct-signature": "class",
        "fct-source": "src/Numeric-Probability-Expectation.html#FromFloat",
        "fct-type": "class",
        "title": "FromFloat"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Expectation",
        "module": "Numeric.Probability.Expectation",
        "name": "FromFloat",
        "normalized": "",
        "package": "probability",
        "partial": "From Float",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Expectation.html#t:ToFloat",
      "description": {
        "fct-module": "Numeric.Probability.Expectation",
        "fct-package": "probability",
        "fct-signature": "class",
        "fct-source": "src/Numeric-Probability-Expectation.html#ToFloat",
        "fct-type": "class",
        "title": "ToFloat"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Expectation",
        "module": "Numeric.Probability.Expectation",
        "name": "ToFloat",
        "normalized": "",
        "package": "probability",
        "partial": "To Float",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Expectation.html#v:expected",
      "description": {
        "fct-module": "Numeric.Probability.Expectation",
        "fct-package": "probability",
        "fct-signature": "a -\u003e Float",
        "fct-source": "src/Numeric-Probability-Expectation.html#expected",
        "fct-type": "method",
        "title": "expected"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Expectation",
        "module": "Numeric.Probability.Expectation",
        "name": "expected",
        "normalized": "a-\u003eFloat",
        "package": "probability",
        "partial": "",
        "signature": "a-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Expectation.html#v:floatDist",
      "description": {
        "fct-module": "Numeric.Probability.Expectation",
        "fct-package": "probability",
        "fct-signature": "T prob a -\u003e T Float Float",
        "fct-source": "src/Numeric-Probability-Expectation.html#floatDist",
        "fct-type": "function",
        "title": "floatDist"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Expectation",
        "module": "Numeric.Probability.Expectation",
        "name": "floatDist",
        "normalized": "T a b-\u003eT Float Float",
        "package": "probability",
        "partial": "Dist",
        "signature": "T prob a-\u003eT Float Float"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Expectation.html#v:fromFloat",
      "description": {
        "fct-module": "Numeric.Probability.Expectation",
        "fct-package": "probability",
        "fct-signature": "Float -\u003e a",
        "fct-source": "src/Numeric-Probability-Expectation.html#fromFloat",
        "fct-type": "method",
        "title": "fromFloat"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Expectation",
        "module": "Numeric.Probability.Expectation",
        "name": "fromFloat",
        "normalized": "Float-\u003ea",
        "package": "probability",
        "partial": "Float",
        "signature": "Float-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Expectation.html#v:stdDev",
      "description": {
        "fct-module": "Numeric.Probability.Expectation",
        "fct-package": "probability",
        "fct-signature": "Dist a -\u003e Float",
        "fct-source": "src/Numeric-Probability-Expectation.html#stdDev",
        "fct-type": "function",
        "title": "stdDev"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Expectation",
        "module": "Numeric.Probability.Expectation",
        "name": "stdDev",
        "normalized": "Dist a-\u003eFloat",
        "package": "probability",
        "partial": "Dev",
        "signature": "Dist a-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Expectation.html#v:toFloat",
      "description": {
        "fct-module": "Numeric.Probability.Expectation",
        "fct-package": "probability",
        "fct-signature": "a -\u003e Float",
        "fct-source": "src/Numeric-Probability-Expectation.html#toFloat",
        "fct-type": "method",
        "title": "toFloat"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Expectation",
        "module": "Numeric.Probability.Expectation",
        "name": "toFloat",
        "normalized": "a-\u003eFloat",
        "package": "probability",
        "partial": "Float",
        "signature": "a-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Expectation.html#v:variance",
      "description": {
        "fct-descr": "\u003cp\u003estatistical analyses\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Expectation",
        "fct-package": "probability",
        "fct-signature": "Dist a -\u003e Float",
        "fct-source": "src/Numeric-Probability-Expectation.html#variance",
        "fct-type": "function",
        "title": "variance"
      },
      "index": {
        "description": "statistical analyses",
        "hierarchy": "Numeric Probability Expectation",
        "module": "Numeric.Probability.Expectation",
        "name": "variance",
        "normalized": "Dist a-\u003eFloat",
        "package": "probability",
        "partial": "",
        "signature": "Dist a-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Object.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAbstract interface to probabilistic objects\nlike random generators and probability distributions.\nIt allows to use the same code\nboth for computing complete distributions\nand for generating random values according to the distribution.\nThe latter one is of course more efficient\nand may be used for approximation of the distribution by simulation.\n\u003c/p\u003e\u003cp\u003eMaybe a better name is \u003ccode\u003eExperiment\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.Probability.Object",
        "fct-package": "probability",
        "fct-signature": "module",
        "fct-source": "src/Numeric-Probability-Object.html",
        "fct-type": "module",
        "title": "Object"
      },
      "index": {
        "description": "Abstract interface to probabilistic objects like random generators and probability distributions It allows to use the same code both for computing complete distributions and for generating random values according to the distribution The latter one is of course more efficient and may be used for approximation of the distribution by simulation Maybe better name is Experiment",
        "hierarchy": "Numeric Probability Object",
        "module": "Numeric.Probability.Object",
        "name": "Object",
        "normalized": "",
        "package": "probability",
        "partial": "Object",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Object.html#t:C",
      "description": {
        "fct-module": "Numeric.Probability.Object",
        "fct-package": "probability",
        "fct-signature": "class",
        "fct-source": "src/Numeric-Probability-Object.html#C",
        "fct-type": "class",
        "title": "C"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Object",
        "module": "Numeric.Probability.Object",
        "name": "C",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Object.html#t:Spread",
      "description": {
        "fct-module": "Numeric.Probability.Object",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Object.html#Spread",
        "fct-type": "type",
        "title": "Spread"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Object",
        "module": "Numeric.Probability.Object",
        "name": "Spread",
        "normalized": "",
        "package": "probability",
        "partial": "Spread",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Object.html#v:enum",
      "description": {
        "fct-module": "Numeric.Probability.Object",
        "fct-package": "probability",
        "fct-signature": "[Int] -\u003e Spread obj a",
        "fct-source": "src/Numeric-Probability-Object.html#enum",
        "fct-type": "function",
        "title": "enum"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Object",
        "module": "Numeric.Probability.Object",
        "name": "enum",
        "normalized": "[Int]-\u003eSpread a b",
        "package": "probability",
        "partial": "",
        "signature": "[Int]-\u003eSpread obj a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Object.html#v:fromFrequencies",
      "description": {
        "fct-module": "Numeric.Probability.Object",
        "fct-package": "probability",
        "fct-signature": "[(a, prob)] -\u003e obj a",
        "fct-source": "src/Numeric-Probability-Object.html#fromFrequencies",
        "fct-type": "method",
        "title": "fromFrequencies"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Object",
        "module": "Numeric.Probability.Object",
        "name": "fromFrequencies",
        "normalized": "[(a,b)]-\u003ec a",
        "package": "probability",
        "partial": "Frequencies",
        "signature": "[(a,prob)]-\u003eobj a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Object.html#v:linear",
      "description": {
        "fct-module": "Numeric.Probability.Object",
        "fct-package": "probability",
        "fct-signature": "Spread obj a",
        "fct-source": "src/Numeric-Probability-Object.html#linear",
        "fct-type": "function",
        "title": "linear"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Object",
        "module": "Numeric.Probability.Object",
        "name": "linear",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Object.html#v:negExp",
      "description": {
        "fct-module": "Numeric.Probability.Object",
        "fct-package": "probability",
        "fct-signature": "Spread obj a",
        "fct-source": "src/Numeric-Probability-Object.html#negExp",
        "fct-type": "function",
        "title": "negExp"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Object",
        "module": "Numeric.Probability.Object",
        "name": "negExp",
        "normalized": "",
        "package": "probability",
        "partial": "Exp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Object.html#v:normal",
      "description": {
        "fct-module": "Numeric.Probability.Object",
        "fct-package": "probability",
        "fct-signature": "Spread obj a",
        "fct-source": "src/Numeric-Probability-Object.html#normal",
        "fct-type": "function",
        "title": "normal"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Object",
        "module": "Numeric.Probability.Object",
        "name": "normal",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Object.html#v:relative",
      "description": {
        "fct-descr": "\u003cp\u003eGive a list of frequencies, they do not need to sum up to 1.\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Object",
        "fct-package": "probability",
        "fct-signature": "[prob] -\u003e Spread obj a",
        "fct-source": "src/Numeric-Probability-Object.html#relative",
        "fct-type": "function",
        "title": "relative"
      },
      "index": {
        "description": "Give list of frequencies they do not need to sum up to",
        "hierarchy": "Numeric Probability Object",
        "module": "Numeric.Probability.Object",
        "name": "relative",
        "normalized": "[a]-\u003eSpread b c",
        "package": "probability",
        "partial": "",
        "signature": "[prob]-\u003eSpread obj a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Object.html#v:shape",
      "description": {
        "fct-module": "Numeric.Probability.Object",
        "fct-package": "probability",
        "fct-signature": "(prob -\u003e prob) -\u003e Spread obj a",
        "fct-source": "src/Numeric-Probability-Object.html#shape",
        "fct-type": "function",
        "title": "shape"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Object",
        "module": "Numeric.Probability.Object",
        "name": "shape",
        "normalized": "(a-\u003ea)-\u003eSpread b c",
        "package": "probability",
        "partial": "",
        "signature": "(prob-\u003eprob)-\u003eSpread obj a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Object.html#v:uniform",
      "description": {
        "fct-module": "Numeric.Probability.Object",
        "fct-package": "probability",
        "fct-signature": "Spread obj a",
        "fct-source": "src/Numeric-Probability-Object.html#uniform",
        "fct-type": "function",
        "title": "uniform"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Object",
        "module": "Numeric.Probability.Object",
        "name": "uniform",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Percentage.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNumber type based on Float with formatting in percents.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.Probability.Percentage",
        "fct-package": "probability",
        "fct-signature": "module",
        "fct-source": "src/Numeric-Probability-Percentage.html",
        "fct-type": "module",
        "title": "Percentage"
      },
      "index": {
        "description": "Number type based on Float with formatting in percents",
        "hierarchy": "Numeric Probability Percentage",
        "module": "Numeric.Probability.Percentage",
        "name": "Percentage",
        "normalized": "",
        "package": "probability",
        "partial": "Percentage",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Percentage.html#t:Dist",
      "description": {
        "fct-module": "Numeric.Probability.Percentage",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Percentage.html#Dist",
        "fct-type": "type",
        "title": "Dist"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Percentage",
        "module": "Numeric.Probability.Percentage",
        "name": "Dist",
        "normalized": "",
        "package": "probability",
        "partial": "Dist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Percentage.html#t:Expand",
      "description": {
        "fct-module": "Numeric.Probability.Percentage",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Percentage.html#Expand",
        "fct-type": "type",
        "title": "Expand"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Percentage",
        "module": "Numeric.Probability.Percentage",
        "name": "Expand",
        "normalized": "",
        "package": "probability",
        "partial": "Expand",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Percentage.html#t:RDist",
      "description": {
        "fct-module": "Numeric.Probability.Percentage",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Percentage.html#RDist",
        "fct-type": "type",
        "title": "RDist"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Percentage",
        "module": "Numeric.Probability.Percentage",
        "name": "RDist",
        "normalized": "",
        "package": "probability",
        "partial": "RDist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Percentage.html#t:RExpand",
      "description": {
        "fct-module": "Numeric.Probability.Percentage",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Percentage.html#RExpand",
        "fct-type": "type",
        "title": "RExpand"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Percentage",
        "module": "Numeric.Probability.Percentage",
        "name": "RExpand",
        "normalized": "",
        "package": "probability",
        "partial": "RExpand",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Percentage.html#t:RSpace",
      "description": {
        "fct-module": "Numeric.Probability.Percentage",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Percentage.html#RSpace",
        "fct-type": "type",
        "title": "RSpace"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Percentage",
        "module": "Numeric.Probability.Percentage",
        "name": "RSpace",
        "normalized": "",
        "package": "probability",
        "partial": "RSpace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Percentage.html#t:RTrans",
      "description": {
        "fct-module": "Numeric.Probability.Percentage",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Percentage.html#RTrans",
        "fct-type": "type",
        "title": "RTrans"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Percentage",
        "module": "Numeric.Probability.Percentage",
        "name": "RTrans",
        "normalized": "",
        "package": "probability",
        "partial": "RTrans",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Percentage.html#t:Space",
      "description": {
        "fct-module": "Numeric.Probability.Percentage",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Percentage.html#Space",
        "fct-type": "type",
        "title": "Space"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Percentage",
        "module": "Numeric.Probability.Percentage",
        "name": "Space",
        "normalized": "",
        "package": "probability",
        "partial": "Space",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Percentage.html#t:Spread",
      "description": {
        "fct-module": "Numeric.Probability.Percentage",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Percentage.html#Spread",
        "fct-type": "type",
        "title": "Spread"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Percentage",
        "module": "Numeric.Probability.Percentage",
        "name": "Spread",
        "normalized": "",
        "package": "probability",
        "partial": "Spread",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Percentage.html#t:T",
      "description": {
        "fct-module": "Numeric.Probability.Percentage",
        "fct-package": "probability",
        "fct-signature": "newtype",
        "fct-source": "src/Numeric-Probability-Percentage.html#T",
        "fct-type": "newtype",
        "title": "T"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Percentage",
        "module": "Numeric.Probability.Percentage",
        "name": "T",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Percentage.html#t:Trans",
      "description": {
        "fct-module": "Numeric.Probability.Percentage",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Percentage.html#Trans",
        "fct-type": "type",
        "title": "Trans"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Percentage",
        "module": "Numeric.Probability.Percentage",
        "name": "Trans",
        "normalized": "",
        "package": "probability",
        "partial": "Trans",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Percentage.html#v:-47--47-",
      "description": {
        "fct-descr": "\u003cp\u003ePrint distribution as table with configurable precision.\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Percentage",
        "fct-package": "probability",
        "fct-signature": "Dist a -\u003e Int -\u003e IO ()",
        "fct-source": "src/Numeric-Probability-Percentage.html#%2F%2F",
        "fct-type": "function",
        "title": "(//)"
      },
      "index": {
        "description": "Print distribution as table with configurable precision",
        "hierarchy": "Numeric Probability Percentage",
        "module": "Numeric.Probability.Percentage",
        "name": "(//) //",
        "normalized": "Dist a-\u003eInt-\u003eIO()",
        "package": "probability",
        "partial": "",
        "signature": "Dist a-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Percentage.html#v:-47--47--42-",
      "description": {
        "fct-module": "Numeric.Probability.Percentage",
        "fct-package": "probability",
        "fct-signature": "Dist a -\u003e (Int, Int) -\u003e IO ()",
        "fct-source": "src/Numeric-Probability-Percentage.html#%2F%2F%2A",
        "fct-type": "function",
        "title": "(//*)"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Percentage",
        "module": "Numeric.Probability.Percentage",
        "name": "(//*) //*",
        "normalized": "Dist a-\u003e(Int,Int)-\u003eIO()",
        "package": "probability",
        "partial": "",
        "signature": "Dist a-\u003e(Int,Int)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Percentage.html#v:Cons",
      "description": {
        "fct-module": "Numeric.Probability.Percentage",
        "fct-package": "probability",
        "fct-signature": "Cons Float",
        "fct-source": "src/Numeric-Probability-Percentage.html#T",
        "fct-type": "function",
        "title": "Cons"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Percentage",
        "module": "Numeric.Probability.Percentage",
        "name": "Cons",
        "normalized": "",
        "package": "probability",
        "partial": "Cons",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Percentage.html#v:liftP",
      "description": {
        "fct-module": "Numeric.Probability.Percentage",
        "fct-package": "probability",
        "fct-signature": "(Float -\u003e Float) -\u003e T -\u003e T",
        "fct-source": "src/Numeric-Probability-Percentage.html#liftP",
        "fct-type": "function",
        "title": "liftP"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Percentage",
        "module": "Numeric.Probability.Percentage",
        "name": "liftP",
        "normalized": "(Float-\u003eFloat)-\u003eT-\u003eT",
        "package": "probability",
        "partial": "",
        "signature": "(Float-\u003eFloat)-\u003eT-\u003eT"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Percentage.html#v:liftP2",
      "description": {
        "fct-module": "Numeric.Probability.Percentage",
        "fct-package": "probability",
        "fct-signature": "(Float -\u003e Float -\u003e Float) -\u003e T -\u003e T -\u003e T",
        "fct-source": "src/Numeric-Probability-Percentage.html#liftP2",
        "fct-type": "function",
        "title": "liftP2"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Percentage",
        "module": "Numeric.Probability.Percentage",
        "name": "liftP2",
        "normalized": "(Float-\u003eFloat-\u003eFloat)-\u003eT-\u003eT-\u003eT",
        "package": "probability",
        "partial": "",
        "signature": "(Float-\u003eFloat-\u003eFloat)-\u003eT-\u003eT-\u003eT"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Percentage.html#v:percent",
      "description": {
        "fct-module": "Numeric.Probability.Percentage",
        "fct-package": "probability",
        "fct-signature": "Float -\u003e T",
        "fct-source": "src/Numeric-Probability-Percentage.html#percent",
        "fct-type": "function",
        "title": "percent"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Percentage",
        "module": "Numeric.Probability.Percentage",
        "name": "percent",
        "normalized": "Float-\u003eT",
        "package": "probability",
        "partial": "",
        "signature": "Float-\u003eT"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Percentage.html#v:roundRel",
      "description": {
        "fct-module": "Numeric.Probability.Percentage",
        "fct-package": "probability",
        "fct-signature": "Int -\u003e a -\u003e a",
        "fct-source": "src/Numeric-Probability-Percentage.html#roundRel",
        "fct-type": "function",
        "title": "roundRel"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Percentage",
        "module": "Numeric.Probability.Percentage",
        "name": "roundRel",
        "normalized": "Int-\u003ea-\u003ea",
        "package": "probability",
        "partial": "Rel",
        "signature": "Int-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Percentage.html#v:showPfix",
      "description": {
        "fct-module": "Numeric.Probability.Percentage",
        "fct-package": "probability",
        "fct-signature": "Int -\u003e prob -\u003e String",
        "fct-source": "src/Numeric-Probability-Percentage.html#showPfix",
        "fct-type": "function",
        "title": "showPfix"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Percentage",
        "module": "Numeric.Probability.Percentage",
        "name": "showPfix",
        "normalized": "Int-\u003ea-\u003eString",
        "package": "probability",
        "partial": "Pfix",
        "signature": "Int-\u003eprob-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Random.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRandomized values\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.Probability.Random",
        "fct-package": "probability",
        "fct-signature": "module",
        "fct-source": "src/Numeric-Probability-Random.html",
        "fct-type": "module",
        "title": "Random"
      },
      "index": {
        "description": "Randomized values",
        "hierarchy": "Numeric Probability Random",
        "module": "Numeric.Probability.Random",
        "name": "Random",
        "normalized": "",
        "package": "probability",
        "partial": "Random",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Random.html#t:ApproxDist",
      "description": {
        "fct-module": "Numeric.Probability.Random",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Random.html#ApproxDist",
        "fct-type": "type",
        "title": "ApproxDist"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Random",
        "module": "Numeric.Probability.Random",
        "name": "ApproxDist",
        "normalized": "",
        "package": "probability",
        "partial": "Approx Dist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Random.html#t:Change",
      "description": {
        "fct-descr": "\u003cp\u003erandom change\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Random",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Random.html#Change",
        "fct-type": "type",
        "title": "Change"
      },
      "index": {
        "description": "random change",
        "hierarchy": "Numeric Probability Random",
        "module": "Numeric.Probability.Random",
        "name": "Change",
        "normalized": "",
        "package": "probability",
        "partial": "Change",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Random.html#t:Distribution",
      "description": {
        "fct-descr": "\u003cp\u003eRandomized distribution\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Random",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Random.html#Distribution",
        "fct-type": "type",
        "title": "Distribution"
      },
      "index": {
        "description": "Randomized distribution",
        "hierarchy": "Numeric Probability Random",
        "module": "Numeric.Probability.Random",
        "name": "Distribution",
        "normalized": "",
        "package": "probability",
        "partial": "Distribution",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Random.html#t:T",
      "description": {
        "fct-descr": "\u003cp\u003eRandom values\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Random",
        "fct-package": "probability",
        "fct-signature": "newtype",
        "fct-source": "src/Numeric-Probability-Random.html#T",
        "fct-type": "newtype",
        "title": "T"
      },
      "index": {
        "description": "Random values",
        "hierarchy": "Numeric Probability Random",
        "module": "Numeric.Probability.Random",
        "name": "T",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Random.html#t:Transition",
      "description": {
        "fct-descr": "\u003cp\u003erandom transition\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Random",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Random.html#Transition",
        "fct-type": "type",
        "title": "Transition"
      },
      "index": {
        "description": "random transition",
        "hierarchy": "Numeric Probability Random",
        "module": "Numeric.Probability.Random",
        "name": "Transition",
        "normalized": "",
        "package": "probability",
        "partial": "Transition",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Random.html#v:Cons",
      "description": {
        "fct-module": "Numeric.Probability.Random",
        "fct-package": "probability",
        "fct-signature": "Cons",
        "fct-source": "src/Numeric-Probability-Random.html#T",
        "fct-type": "function",
        "title": "Cons"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Random",
        "module": "Numeric.Probability.Random",
        "name": "Cons",
        "normalized": "",
        "package": "probability",
        "partial": "Cons",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Random.html#v:above",
      "description": {
        "fct-module": "Numeric.Probability.Random",
        "fct-package": "probability",
        "fct-signature": "prob -\u003e Distribution prob a -\u003e Distribution prob (Select a)",
        "fct-source": "src/Numeric-Probability-Random.html#above",
        "fct-type": "function",
        "title": "above"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Random",
        "module": "Numeric.Probability.Random",
        "name": "above",
        "normalized": "a-\u003eDistribution a b-\u003eDistribution a(Select b)",
        "package": "probability",
        "partial": "",
        "signature": "prob-\u003eDistribution prob a-\u003eDistribution prob(Select a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Random.html#v:change",
      "description": {
        "fct-module": "Numeric.Probability.Random",
        "fct-package": "probability",
        "fct-signature": "T prob a -\u003e Change a",
        "fct-source": "src/Numeric-Probability-Random.html#change",
        "fct-type": "function",
        "title": "change"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Random",
        "module": "Numeric.Probability.Random",
        "name": "change",
        "normalized": "T a b-\u003eChange b",
        "package": "probability",
        "partial": "",
        "signature": "T prob a-\u003eChange a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Random.html#v:decons",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Numeric.Probability.Random",
        "fct-package": "probability",
        "fct-signature": "State StdGen a",
        "fct-source": "src/Numeric-Probability-Random.html#T",
        "fct-type": "function",
        "title": "decons"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Random",
        "module": "Numeric.Probability.Random",
        "name": "decons",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Random.html#v:dist",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edist\u003c/a\u003e\u003c/code\u003e converts a list of randomly generated values into\na distribution by taking equal weights for all values.\nThus \u003ccode\u003edist (replicate n rnd)\u003c/code\u003e simulates \u003ccode\u003ernd\u003c/code\u003e \u003ccode\u003en\u003c/code\u003e times\nand returns an estimation of the distribution represented by \u003ccode\u003ernd\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Random",
        "fct-package": "probability",
        "fct-signature": "[T a] -\u003e Distribution prob a",
        "fct-source": "src/Numeric-Probability-Random.html#dist",
        "fct-type": "function",
        "title": "dist"
      },
      "index": {
        "description": "dist converts list of randomly generated values into distribution by taking equal weights for all values Thus dist replicate rnd simulates rnd times and returns an estimation of the distribution represented by rnd",
        "hierarchy": "Numeric Probability Random",
        "module": "Numeric.Probability.Random",
        "name": "dist",
        "normalized": "[T a]-\u003eDistribution b a",
        "package": "probability",
        "partial": "",
        "signature": "[T a]-\u003eDistribution prob a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Random.html#v:pick",
      "description": {
        "fct-module": "Numeric.Probability.Random",
        "fct-package": "probability",
        "fct-signature": "T prob a -\u003e T a",
        "fct-source": "src/Numeric-Probability-Random.html#pick",
        "fct-type": "function",
        "title": "pick"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Random",
        "module": "Numeric.Probability.Random",
        "name": "pick",
        "normalized": "T a b-\u003eT b",
        "package": "probability",
        "partial": "",
        "signature": "T prob a-\u003eT a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Random.html#v:print",
      "description": {
        "fct-module": "Numeric.Probability.Random",
        "fct-package": "probability",
        "fct-signature": "T a -\u003e IO ()",
        "fct-source": "src/Numeric-Probability-Random.html#print",
        "fct-type": "function",
        "title": "print"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Random",
        "module": "Numeric.Probability.Random",
        "name": "print",
        "normalized": "T a-\u003eIO()",
        "package": "probability",
        "partial": "",
        "signature": "T a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Random.html#v:randomR",
      "description": {
        "fct-module": "Numeric.Probability.Random",
        "fct-package": "probability",
        "fct-signature": "(a, a) -\u003e T a",
        "fct-source": "src/Numeric-Probability-Random.html#randomR",
        "fct-type": "function",
        "title": "randomR"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Random",
        "module": "Numeric.Probability.Random",
        "name": "randomR",
        "normalized": "(a,a)-\u003eT a",
        "package": "probability",
        "partial": "",
        "signature": "(a,a)-\u003eT a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Random.html#v:run",
      "description": {
        "fct-descr": "\u003cp\u003eRun random action in \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Random",
        "fct-package": "probability",
        "fct-signature": "T a -\u003e IO a",
        "fct-source": "src/Numeric-Probability-Random.html#run",
        "fct-type": "function",
        "title": "run"
      },
      "index": {
        "description": "Run random action in IO monad",
        "hierarchy": "Numeric Probability Random",
        "module": "Numeric.Probability.Random",
        "name": "run",
        "normalized": "T a-\u003eIO a",
        "package": "probability",
        "partial": "",
        "signature": "T a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Random.html#v:runSeed",
      "description": {
        "fct-descr": "\u003cp\u003eRun random action without \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e using a seed.\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Random",
        "fct-package": "probability",
        "fct-signature": "StdGen -\u003e T a -\u003e a",
        "fct-source": "src/Numeric-Probability-Random.html#runSeed",
        "fct-type": "function",
        "title": "runSeed"
      },
      "index": {
        "description": "Run random action without IO using seed",
        "hierarchy": "Numeric Probability Random",
        "module": "Numeric.Probability.Random",
        "name": "runSeed",
        "normalized": "StdGen-\u003eT a-\u003ea",
        "package": "probability",
        "partial": "Seed",
        "signature": "StdGen-\u003eT a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Shape.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCollection of some shapes of distribution.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.Probability.Shape",
        "fct-package": "probability",
        "fct-signature": "module",
        "fct-source": "src/Numeric-Probability-Shape.html",
        "fct-type": "module",
        "title": "Shape"
      },
      "index": {
        "description": "Collection of some shapes of distribution",
        "hierarchy": "Numeric Probability Shape",
        "module": "Numeric.Probability.Shape",
        "name": "Shape",
        "normalized": "",
        "package": "probability",
        "partial": "Shape",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Shape.html#t:T",
      "description": {
        "fct-descr": "\u003cp\u003eA shape is a mapping from the interval \u003ccode\u003e[0,1]\u003c/code\u003e to non-negative numbers.\nThey need not to be normalized (sum up to 1)\nbecause this is done by subsequent steps.\n(It would also be impossible to normalize the function in a way\nthat each discretization is normalized as well.)\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Shape",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Shape.html#T",
        "fct-type": "type",
        "title": "T"
      },
      "index": {
        "description": "shape is mapping from the interval to non-negative numbers They need not to be normalized sum up to because this is done by subsequent steps It would also be impossible to normalize the function in way that each discretization is normalized as well",
        "hierarchy": "Numeric Probability Shape",
        "module": "Numeric.Probability.Shape",
        "name": "T",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Shape.html#v:linear",
      "description": {
        "fct-module": "Numeric.Probability.Shape",
        "fct-package": "probability",
        "fct-signature": "T prob",
        "fct-source": "src/Numeric-Probability-Shape.html#linear",
        "fct-type": "function",
        "title": "linear"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Shape",
        "module": "Numeric.Probability.Shape",
        "name": "linear",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Shape.html#v:negExp",
      "description": {
        "fct-module": "Numeric.Probability.Shape",
        "fct-package": "probability",
        "fct-signature": "T prob",
        "fct-source": "src/Numeric-Probability-Shape.html#negExp",
        "fct-type": "function",
        "title": "negExp"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Shape",
        "module": "Numeric.Probability.Shape",
        "name": "negExp",
        "normalized": "",
        "package": "probability",
        "partial": "Exp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Shape.html#v:normal",
      "description": {
        "fct-module": "Numeric.Probability.Shape",
        "fct-package": "probability",
        "fct-signature": "T prob",
        "fct-source": "src/Numeric-Probability-Shape.html#normal",
        "fct-type": "function",
        "title": "normal"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Shape",
        "module": "Numeric.Probability.Shape",
        "name": "normal",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Shape.html#v:normalCurve",
      "description": {
        "fct-module": "Numeric.Probability.Shape",
        "fct-package": "probability",
        "fct-signature": "prob -\u003e prob -\u003e prob -\u003e prob",
        "fct-source": "src/Numeric-Probability-Shape.html#normalCurve",
        "fct-type": "function",
        "title": "normalCurve"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Shape",
        "module": "Numeric.Probability.Shape",
        "name": "normalCurve",
        "normalized": "a-\u003ea-\u003ea-\u003ea",
        "package": "probability",
        "partial": "Curve",
        "signature": "prob-\u003eprob-\u003eprob-\u003eprob"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Shape.html#v:uniform",
      "description": {
        "fct-module": "Numeric.Probability.Shape",
        "fct-package": "probability",
        "fct-signature": "T prob",
        "fct-source": "src/Numeric-Probability-Shape.html#uniform",
        "fct-type": "function",
        "title": "uniform"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Shape",
        "module": "Numeric.Probability.Shape",
        "name": "uniform",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Simulation.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimulation\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.Probability.Simulation",
        "fct-package": "probability",
        "fct-signature": "module",
        "fct-source": "src/Numeric-Probability-Simulation.html",
        "fct-type": "module",
        "title": "Simulation"
      },
      "index": {
        "description": "Simulation",
        "hierarchy": "Numeric Probability Simulation",
        "module": "Numeric.Probability.Simulation",
        "name": "Simulation",
        "normalized": "",
        "package": "probability",
        "partial": "Simulation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Simulation.html#t:C",
      "description": {
        "fct-descr": "\u003cp\u003eSimulation means to repeat a Rnd.change change many times and\nto accumulate all results into a distribution. Therefore,\nsimulation can be regarded as an approximation of distributions\nthrough randomization.\n\u003c/p\u003e\u003cp\u003eThe Sim class allows the overloading of simulation for different\nkinds of generators, namely transitions and Rnd.change changes:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003eTrans   a = a -\u003e Dist a   ==\u003e   c = Dist\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003eRChange a = a -\u003e Rnd.T a  ==\u003e   c = Rnd.T = IO\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Numeric.Probability.Simulation",
        "fct-package": "probability",
        "fct-signature": "class",
        "fct-source": "src/Numeric-Probability-Simulation.html#C",
        "fct-type": "class",
        "title": "C"
      },
      "index": {
        "description": "Simulation means to repeat Rnd.change change many times and to accumulate all results into distribution Therefore simulation can be regarded as an approximation of distributions through randomization The Sim class allows the overloading of simulation for different kinds of generators namely transitions and Rnd.change changes Trans Dist Dist RChange Rnd.T Rnd.T IO",
        "hierarchy": "Numeric Probability Simulation",
        "module": "Numeric.Probability.Simulation",
        "name": "C",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Simulation.html#v:-126--42-.",
      "description": {
        "fct-descr": "\u003cp\u003ereturns the whole trace for a single simulation\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Simulation",
        "fct-package": "probability",
        "fct-signature": "(Int, Int) -\u003e (a -\u003e c a) -\u003e Transition prob a",
        "fct-source": "src/Numeric-Probability-Simulation.html#~%2A.",
        "fct-type": "method",
        "title": "(~*.)"
      },
      "index": {
        "description": "returns the whole trace for single simulation",
        "hierarchy": "Numeric Probability Simulation",
        "module": "Numeric.Probability.Simulation",
        "name": "(~*.) ~*.",
        "normalized": "(Int,Int)-\u003e(a-\u003eb a)-\u003eTransition c a",
        "package": "probability",
        "partial": "",
        "signature": "(Int,Int)-\u003e(a-\u003ec a)-\u003eTransition prob a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Simulation.html#v:-126-.",
      "description": {
        "fct-descr": "\u003cp\u003ereturns the final randomized transition\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Simulation",
        "fct-package": "probability",
        "fct-signature": "Int -\u003e (a -\u003e c a) -\u003e Transition prob a",
        "fct-source": "src/Numeric-Probability-Simulation.html#~.",
        "fct-type": "method",
        "title": "(~.)"
      },
      "index": {
        "description": "returns the final randomized transition",
        "hierarchy": "Numeric Probability Simulation",
        "module": "Numeric.Probability.Simulation",
        "name": "(~.) ~.",
        "normalized": "Int-\u003e(a-\u003eb a)-\u003eTransition c a",
        "package": "probability",
        "partial": "",
        "signature": "Int-\u003e(a-\u003ec a)-\u003eTransition prob a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Simulation.html#v:-126-..",
      "description": {
        "fct-descr": "\u003cp\u003ereturns the whole trace for a k-fold simulation\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Simulation",
        "fct-package": "probability",
        "fct-signature": "(Int, Int) -\u003e (a -\u003e c a) -\u003e RExpand prob a",
        "fct-source": "src/Numeric-Probability-Simulation.html#~..",
        "fct-type": "method",
        "title": "(~..)"
      },
      "index": {
        "description": "returns the whole trace for k-fold simulation",
        "hierarchy": "Numeric Probability Simulation",
        "module": "Numeric.Probability.Simulation",
        "name": "(~..) ~..",
        "normalized": "(Int,Int)-\u003e(a-\u003eb a)-\u003eRExpand c a",
        "package": "probability",
        "partial": "",
        "signature": "(Int,Int)-\u003e(a-\u003ec a)-\u003eRExpand prob a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Trace.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTracing\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.Probability.Trace",
        "fct-package": "probability",
        "fct-signature": "module",
        "fct-source": "src/Numeric-Probability-Trace.html",
        "fct-type": "module",
        "title": "Trace"
      },
      "index": {
        "description": "Tracing",
        "hierarchy": "Numeric Probability Trace",
        "module": "Numeric.Probability.Trace",
        "name": "Trace",
        "normalized": "",
        "package": "probability",
        "partial": "Trace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Trace.html#t:Expand",
      "description": {
        "fct-module": "Numeric.Probability.Trace",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Trace.html#Expand",
        "fct-type": "type",
        "title": "Expand"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Trace",
        "module": "Numeric.Probability.Trace",
        "name": "Expand",
        "normalized": "",
        "package": "probability",
        "partial": "Expand",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Trace.html#t:RExpand",
      "description": {
        "fct-module": "Numeric.Probability.Trace",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Trace.html#RExpand",
        "fct-type": "type",
        "title": "RExpand"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Trace",
        "module": "Numeric.Probability.Trace",
        "name": "RExpand",
        "normalized": "",
        "package": "probability",
        "partial": "RExpand",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Trace.html#t:RSpace",
      "description": {
        "fct-module": "Numeric.Probability.Trace",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Trace.html#RSpace",
        "fct-type": "type",
        "title": "RSpace"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Trace",
        "module": "Numeric.Probability.Trace",
        "name": "RSpace",
        "normalized": "",
        "package": "probability",
        "partial": "RSpace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Trace.html#t:RTrace",
      "description": {
        "fct-module": "Numeric.Probability.Trace",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Trace.html#RTrace",
        "fct-type": "type",
        "title": "RTrace"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Trace",
        "module": "Numeric.Probability.Trace",
        "name": "RTrace",
        "normalized": "",
        "package": "probability",
        "partial": "RTrace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Trace.html#t:RWalk",
      "description": {
        "fct-module": "Numeric.Probability.Trace",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Trace.html#RWalk",
        "fct-type": "type",
        "title": "RWalk"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Trace",
        "module": "Numeric.Probability.Trace",
        "name": "RWalk",
        "normalized": "",
        "package": "probability",
        "partial": "RWalk",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Trace.html#t:Space",
      "description": {
        "fct-module": "Numeric.Probability.Trace",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Trace.html#Space",
        "fct-type": "type",
        "title": "Space"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Trace",
        "module": "Numeric.Probability.Trace",
        "name": "Space",
        "normalized": "",
        "package": "probability",
        "partial": "Space",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Trace.html#t:Trace",
      "description": {
        "fct-module": "Numeric.Probability.Trace",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Trace.html#Trace",
        "fct-type": "type",
        "title": "Trace"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Trace",
        "module": "Numeric.Probability.Trace",
        "name": "Trace",
        "normalized": "",
        "package": "probability",
        "partial": "Trace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Trace.html#t:Walk",
      "description": {
        "fct-module": "Numeric.Probability.Trace",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Trace.html#Walk",
        "fct-type": "type",
        "title": "Walk"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Trace",
        "module": "Numeric.Probability.Trace",
        "name": "Walk",
        "normalized": "",
        "package": "probability",
        "partial": "Walk",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Trace.html#v:merge",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emerge\u003c/a\u003e\u003c/code\u003e converts a list of \u003ccode\u003e\u003ca\u003eRTrace\u003c/a\u003e\u003c/code\u003es\ninto a list of randomized distributions, i.e., an \u003ccode\u003e\u003ca\u003eRSpace\u003c/a\u003e\u003c/code\u003e,\nby creating a randomized distribution for each list position across all traces\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Trace",
        "fct-package": "probability",
        "fct-signature": "[RTrace a] -\u003e RSpace prob a",
        "fct-source": "src/Numeric-Probability-Trace.html#merge",
        "fct-type": "function",
        "title": "merge"
      },
      "index": {
        "description": "merge converts list of RTrace into list of randomized distributions i.e an RSpace by creating randomized distribution for each list position across all traces",
        "hierarchy": "Numeric Probability Trace",
        "module": "Numeric.Probability.Trace",
        "name": "merge",
        "normalized": "[RTrace a]-\u003eRSpace b a",
        "package": "probability",
        "partial": "",
        "signature": "[RTrace a]-\u003eRSpace prob a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Trace.html#v:walk",
      "description": {
        "fct-descr": "\u003cp\u003ewalk is a bounded version of the predefined function iterate\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Trace",
        "fct-package": "probability",
        "fct-signature": "Int -\u003e Change a -\u003e Walk a",
        "fct-source": "src/Numeric-Probability-Trace.html#walk",
        "fct-type": "function",
        "title": "walk"
      },
      "index": {
        "description": "walk is bounded version of the predefined function iterate",
        "hierarchy": "Numeric Probability Trace",
        "module": "Numeric.Probability.Trace",
        "name": "walk",
        "normalized": "Int-\u003eChange a-\u003eWalk a",
        "package": "probability",
        "partial": "",
        "signature": "Int-\u003eChange a-\u003eWalk a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Trace.html#v:zipListWith",
      "description": {
        "fct-module": "Numeric.Probability.Trace",
        "fct-package": "probability",
        "fct-signature": "([a] -\u003e b) -\u003e [[a]] -\u003e [b]",
        "fct-source": "src/Numeric-Probability-Trace.html#zipListWith",
        "fct-type": "function",
        "title": "zipListWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Trace",
        "module": "Numeric.Probability.Trace",
        "name": "zipListWith",
        "normalized": "([a]-\u003eb)-\u003e[[a]]-\u003e[b]",
        "package": "probability",
        "partial": "List With",
        "signature": "([a]-\u003eb)-\u003e[[a]]-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Transition.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDeterministic and probabilistic generators\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.Probability.Transition",
        "fct-package": "probability",
        "fct-signature": "module",
        "fct-source": "src/Numeric-Probability-Transition.html",
        "fct-type": "module",
        "title": "Transition"
      },
      "index": {
        "description": "Deterministic and probabilistic generators",
        "hierarchy": "Numeric Probability Transition",
        "module": "Numeric.Probability.Transition",
        "name": "Transition",
        "normalized": "",
        "package": "probability",
        "partial": "Transition",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Transition.html#t:Change",
      "description": {
        "fct-descr": "\u003cp\u003edeterministic generator\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Transition",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Transition.html#Change",
        "fct-type": "type",
        "title": "Change"
      },
      "index": {
        "description": "deterministic generator",
        "hierarchy": "Numeric Probability Transition",
        "module": "Numeric.Probability.Transition",
        "name": "Change",
        "normalized": "",
        "package": "probability",
        "partial": "Change",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Transition.html#t:SpreadC",
      "description": {
        "fct-descr": "\u003cp\u003efunctions to convert a list of changes into a transition\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Transition",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Transition.html#SpreadC",
        "fct-type": "type",
        "title": "SpreadC"
      },
      "index": {
        "description": "functions to convert list of changes into transition",
        "hierarchy": "Numeric Probability Transition",
        "module": "Numeric.Probability.Transition",
        "name": "SpreadC",
        "normalized": "",
        "package": "probability",
        "partial": "Spread",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Transition.html#t:SpreadT",
      "description": {
        "fct-descr": "\u003cp\u003efunctions to convert a list of transitions into a transition\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Transition",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Transition.html#SpreadT",
        "fct-type": "type",
        "title": "SpreadT"
      },
      "index": {
        "description": "functions to convert list of transitions into transition",
        "hierarchy": "Numeric Probability Transition",
        "module": "Numeric.Probability.Transition",
        "name": "SpreadT",
        "normalized": "",
        "package": "probability",
        "partial": "Spread",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Transition.html#t:T",
      "description": {
        "fct-descr": "\u003cp\u003eprobabilistic generator\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Transition",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Transition.html#T",
        "fct-type": "type",
        "title": "T"
      },
      "index": {
        "description": "probabilistic generator",
        "hierarchy": "Numeric Probability Transition",
        "module": "Numeric.Probability.Transition",
        "name": "T",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Transition.html#v:apply",
      "description": {
        "fct-module": "Numeric.Probability.Transition",
        "fct-package": "probability",
        "fct-signature": "Change a -\u003e T prob a",
        "fct-source": "src/Numeric-Probability-Transition.html#apply",
        "fct-type": "function",
        "title": "apply"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Transition",
        "module": "Numeric.Probability.Transition",
        "name": "apply",
        "normalized": "Change a-\u003eT b a",
        "package": "probability",
        "partial": "",
        "signature": "Change a-\u003eT prob a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Transition.html#v:compose",
      "description": {
        "fct-descr": "\u003cp\u003eComposition of transitions similar to \u003ccode\u003e\u003ca\u003ecompose\u003c/a\u003e\u003c/code\u003e\nbut with intermediate duplicate elimination.\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Transition",
        "fct-package": "probability",
        "fct-signature": "[T prob a] -\u003e T prob a",
        "fct-source": "src/Numeric-Probability-Transition.html#compose",
        "fct-type": "function",
        "title": "compose"
      },
      "index": {
        "description": "Composition of transitions similar to compose but with intermediate duplicate elimination",
        "hierarchy": "Numeric Probability Transition",
        "module": "Numeric.Probability.Transition",
        "name": "compose",
        "normalized": "[T a b]-\u003eT a b",
        "package": "probability",
        "partial": "",
        "signature": "[T prob a]-\u003eT prob a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Transition.html#v:enum",
      "description": {
        "fct-module": "Numeric.Probability.Transition",
        "fct-package": "probability",
        "fct-signature": "[Int] -\u003e SpreadC prob a",
        "fct-source": "src/Numeric-Probability-Transition.html#enum",
        "fct-type": "function",
        "title": "enum"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Transition",
        "module": "Numeric.Probability.Transition",
        "name": "enum",
        "normalized": "[Int]-\u003eSpreadC a b",
        "package": "probability",
        "partial": "",
        "signature": "[Int]-\u003eSpreadC prob a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Transition.html#v:enumT",
      "description": {
        "fct-module": "Numeric.Probability.Transition",
        "fct-package": "probability",
        "fct-signature": "[Int] -\u003e SpreadT prob a",
        "fct-source": "src/Numeric-Probability-Transition.html#enumT",
        "fct-type": "function",
        "title": "enumT"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Transition",
        "module": "Numeric.Probability.Transition",
        "name": "enumT",
        "normalized": "[Int]-\u003eSpreadT a b",
        "package": "probability",
        "partial": "",
        "signature": "[Int]-\u003eSpreadT prob a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Transition.html#v:fix",
      "description": {
        "fct-descr": "\u003cp\u003eIn \u003ccode\u003efix $ go a -\u003e do ...; go xy\u003c/code\u003e\nany action after a \u003ccode\u003ego\u003c/code\u003e is ignored.\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Transition",
        "fct-package": "probability",
        "fct-signature": "((a -\u003e EitherT a (T prob) b) -\u003e a -\u003e EitherT a (T prob) b) -\u003e T prob a -\u003e T prob b",
        "fct-source": "src/Numeric-Probability-Transition.html#fix",
        "fct-type": "function",
        "title": "fix"
      },
      "index": {
        "description": "In fix go do go xy any action after go is ignored",
        "hierarchy": "Numeric Probability Transition",
        "module": "Numeric.Probability.Transition",
        "name": "fix",
        "normalized": "((a-\u003eEitherT a(T b)c)-\u003ea-\u003eEitherT a(T b)c)-\u003eT b a-\u003eT b c",
        "package": "probability",
        "partial": "",
        "signature": "((a-\u003eEitherT a(T prob)b)-\u003ea-\u003eEitherT a(T prob)b)-\u003eT prob a-\u003eT prob b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Transition.html#v:id",
      "description": {
        "fct-module": "Numeric.Probability.Transition",
        "fct-package": "probability",
        "fct-signature": "T prob a",
        "fct-source": "src/Numeric-Probability-Transition.html#id",
        "fct-type": "function",
        "title": "id"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Transition",
        "module": "Numeric.Probability.Transition",
        "name": "id",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Transition.html#v:lift",
      "description": {
        "fct-module": "Numeric.Probability.Transition",
        "fct-package": "probability",
        "fct-signature": "Spread prob a -\u003e SpreadC prob a",
        "fct-source": "src/Numeric-Probability-Transition.html#lift",
        "fct-type": "function",
        "title": "lift"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Transition",
        "module": "Numeric.Probability.Transition",
        "name": "lift",
        "normalized": "Spread a b-\u003eSpreadC a b",
        "package": "probability",
        "partial": "",
        "signature": "Spread prob a-\u003eSpreadC prob a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Transition.html#v:liftT",
      "description": {
        "fct-module": "Numeric.Probability.Transition",
        "fct-package": "probability",
        "fct-signature": "Spread prob (T prob a) -\u003e SpreadT prob a",
        "fct-source": "src/Numeric-Probability-Transition.html#liftT",
        "fct-type": "function",
        "title": "liftT"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Transition",
        "module": "Numeric.Probability.Transition",
        "name": "liftT",
        "normalized": "Spread a(T a b)-\u003eSpreadT a b",
        "package": "probability",
        "partial": "",
        "signature": "Spread prob(T prob a)-\u003eSpreadT prob a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Transition.html#v:linear",
      "description": {
        "fct-module": "Numeric.Probability.Transition",
        "fct-package": "probability",
        "fct-signature": "SpreadC prob a",
        "fct-source": "src/Numeric-Probability-Transition.html#linear",
        "fct-type": "function",
        "title": "linear"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Transition",
        "module": "Numeric.Probability.Transition",
        "name": "linear",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Transition.html#v:linearT",
      "description": {
        "fct-module": "Numeric.Probability.Transition",
        "fct-package": "probability",
        "fct-signature": "SpreadT prob a",
        "fct-source": "src/Numeric-Probability-Transition.html#linearT",
        "fct-type": "function",
        "title": "linearT"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Transition",
        "module": "Numeric.Probability.Transition",
        "name": "linearT",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Transition.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e maps a change function to the result of a transformation\n(\u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e is somehow a lifted form of \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e)\nThe restricted type of \u003ccode\u003ef\u003c/code\u003e results from the fact that the\nargument to \u003ccode\u003et\u003c/code\u003e cannot be changed to \u003ccode\u003eb\u003c/code\u003e in the result \u003ccode\u003e\u003ca\u003eT\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Transition",
        "fct-package": "probability",
        "fct-signature": "Change a -\u003e T prob a -\u003e T prob a",
        "fct-source": "src/Numeric-Probability-Transition.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "map maps change function to the result of transformation map is somehow lifted form of map The restricted type of results from the fact that the argument to cannot be changed to in the result type",
        "hierarchy": "Numeric Probability Transition",
        "module": "Numeric.Probability.Transition",
        "name": "map",
        "normalized": "Change a-\u003eT b a-\u003eT b a",
        "package": "probability",
        "partial": "",
        "signature": "Change a-\u003eT prob a-\u003eT prob a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Transition.html#v:maybe",
      "description": {
        "fct-module": "Numeric.Probability.Transition",
        "fct-package": "probability",
        "fct-signature": "prob -\u003e Change a -\u003e T prob a",
        "fct-source": "src/Numeric-Probability-Transition.html#maybe",
        "fct-type": "function",
        "title": "maybe"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Transition",
        "module": "Numeric.Probability.Transition",
        "name": "maybe",
        "normalized": "a-\u003eChange b-\u003eT a b",
        "package": "probability",
        "partial": "",
        "signature": "prob-\u003eChange a-\u003eT prob a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Transition.html#v:normal",
      "description": {
        "fct-module": "Numeric.Probability.Transition",
        "fct-package": "probability",
        "fct-signature": "SpreadC prob a",
        "fct-source": "src/Numeric-Probability-Transition.html#normal",
        "fct-type": "function",
        "title": "normal"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Transition",
        "module": "Numeric.Probability.Transition",
        "name": "normal",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Transition.html#v:normalT",
      "description": {
        "fct-module": "Numeric.Probability.Transition",
        "fct-package": "probability",
        "fct-signature": "SpreadT prob a",
        "fct-source": "src/Numeric-Probability-Transition.html#normalT",
        "fct-type": "function",
        "title": "normalT"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Transition",
        "module": "Numeric.Probability.Transition",
        "name": "normalT",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Transition.html#v:relative",
      "description": {
        "fct-module": "Numeric.Probability.Transition",
        "fct-package": "probability",
        "fct-signature": "[prob] -\u003e SpreadC prob a",
        "fct-source": "src/Numeric-Probability-Transition.html#relative",
        "fct-type": "function",
        "title": "relative"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Transition",
        "module": "Numeric.Probability.Transition",
        "name": "relative",
        "normalized": "[a]-\u003eSpreadC a b",
        "package": "probability",
        "partial": "",
        "signature": "[prob]-\u003eSpreadC prob a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Transition.html#v:relativeT",
      "description": {
        "fct-module": "Numeric.Probability.Transition",
        "fct-package": "probability",
        "fct-signature": "[prob] -\u003e SpreadT prob a",
        "fct-source": "src/Numeric-Probability-Transition.html#relativeT",
        "fct-type": "function",
        "title": "relativeT"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Transition",
        "module": "Numeric.Probability.Transition",
        "name": "relativeT",
        "normalized": "[a]-\u003eSpreadT a b",
        "package": "probability",
        "partial": "",
        "signature": "[prob]-\u003eSpreadT prob a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Transition.html#v:unfold",
      "description": {
        "fct-descr": "\u003cp\u003eunfold a distribution of transitions into one transition\n\u003c/p\u003e\u003cp\u003eNOTE: The argument transitions must be independent\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Transition",
        "fct-package": "probability",
        "fct-signature": "T prob (T prob a) -\u003e T prob a",
        "fct-source": "src/Numeric-Probability-Transition.html#unfold",
        "fct-type": "function",
        "title": "unfold"
      },
      "index": {
        "description": "unfold distribution of transitions into one transition NOTE The argument transitions must be independent",
        "hierarchy": "Numeric Probability Transition",
        "module": "Numeric.Probability.Transition",
        "name": "unfold",
        "normalized": "T a(T a b)-\u003eT a b",
        "package": "probability",
        "partial": "",
        "signature": "T prob(T prob a)-\u003eT prob a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Transition.html#v:uniform",
      "description": {
        "fct-module": "Numeric.Probability.Transition",
        "fct-package": "probability",
        "fct-signature": "SpreadC prob a",
        "fct-source": "src/Numeric-Probability-Transition.html#uniform",
        "fct-type": "function",
        "title": "uniform"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Transition",
        "module": "Numeric.Probability.Transition",
        "name": "uniform",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Transition.html#v:uniformT",
      "description": {
        "fct-module": "Numeric.Probability.Transition",
        "fct-package": "probability",
        "fct-signature": "SpreadT prob a",
        "fct-source": "src/Numeric-Probability-Transition.html#uniformT",
        "fct-type": "function",
        "title": "uniformT"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Transition",
        "module": "Numeric.Probability.Transition",
        "name": "uniformT",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Transition.html#v:untilLeft",
      "description": {
        "fct-module": "Numeric.Probability.Transition",
        "fct-package": "probability",
        "fct-signature": "(a -\u003e T prob (Either b a)) -\u003e T prob a -\u003e T prob b",
        "fct-source": "src/Numeric-Probability-Transition.html#untilLeft",
        "fct-type": "function",
        "title": "untilLeft"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Transition",
        "module": "Numeric.Probability.Transition",
        "name": "untilLeft",
        "normalized": "(a-\u003eT b(Either c a))-\u003eT b a-\u003eT b c",
        "package": "probability",
        "partial": "Left",
        "signature": "(a-\u003eT prob(Either b a))-\u003eT prob a-\u003eT prob b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#",
      "description": {
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "module",
        "fct-source": "src/Numeric-Probability-Visualize.html",
        "fct-type": "module",
        "title": "Visualize"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "Visualize",
        "normalized": "",
        "package": "probability",
        "partial": "Visualize",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#t:Color",
      "description": {
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "data",
        "fct-source": "src/Numeric-Probability-Visualize.html#Color",
        "fct-type": "data",
        "title": "Color"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "Color",
        "normalized": "",
        "package": "probability",
        "partial": "Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#t:FigureEnv",
      "description": {
        "fct-descr": "\u003cp\u003eglobal settings for one figure\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "data",
        "fct-source": "src/Numeric-Probability-Visualize.html#FigureEnv",
        "fct-type": "data",
        "title": "FigureEnv"
      },
      "index": {
        "description": "global settings for one figure",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "FigureEnv",
        "normalized": "",
        "package": "probability",
        "partial": "Figure Env",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#t:LineStyle",
      "description": {
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "data",
        "fct-source": "src/Numeric-Probability-Visualize.html#LineStyle",
        "fct-type": "data",
        "title": "LineStyle"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "LineStyle",
        "normalized": "",
        "package": "probability",
        "partial": "Line Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#t:Plot",
      "description": {
        "fct-descr": "\u003cp\u003esettings for individual plots\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "data",
        "fct-source": "src/Numeric-Probability-Visualize.html#Plot",
        "fct-type": "data",
        "title": "Plot"
      },
      "index": {
        "description": "settings for individual plots",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "Plot",
        "normalized": "",
        "package": "probability",
        "partial": "Plot",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#t:PlotFun",
      "description": {
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Visualize.html#PlotFun",
        "fct-type": "type",
        "title": "PlotFun"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "PlotFun",
        "normalized": "",
        "package": "probability",
        "partial": "Plot Fun",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#t:Vis",
      "description": {
        "fct-descr": "\u003cp\u003eVisualization output\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "type",
        "fct-source": "src/Numeric-Probability-Visualize.html#Vis",
        "fct-type": "type",
        "title": "Vis"
      },
      "index": {
        "description": "Visualization output",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "Vis",
        "normalized": "",
        "package": "probability",
        "partial": "Vis",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:Black",
      "description": {
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "Black",
        "fct-source": "src/Numeric-Probability-Visualize.html#Color",
        "fct-type": "function",
        "title": "Black"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "Black",
        "normalized": "",
        "package": "probability",
        "partial": "Black",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:Blue",
      "description": {
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "Blue",
        "fct-source": "src/Numeric-Probability-Visualize.html#Color",
        "fct-type": "function",
        "title": "Blue"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "Blue",
        "normalized": "",
        "package": "probability",
        "partial": "Blue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:Brown",
      "description": {
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "Brown",
        "fct-source": "src/Numeric-Probability-Visualize.html#Color",
        "fct-type": "function",
        "title": "Brown"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "Brown",
        "normalized": "",
        "package": "probability",
        "partial": "Brown",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:Custom",
      "description": {
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "Custom Int Int Int",
        "fct-source": "src/Numeric-Probability-Visualize.html#Color",
        "fct-type": "function",
        "title": "Custom"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "Custom",
        "normalized": "",
        "package": "probability",
        "partial": "Custom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:Cyan",
      "description": {
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "Cyan",
        "fct-source": "src/Numeric-Probability-Visualize.html#Color",
        "fct-type": "function",
        "title": "Cyan"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "Cyan",
        "normalized": "",
        "package": "probability",
        "partial": "Cyan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:DarkGray",
      "description": {
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "DarkGray",
        "fct-source": "src/Numeric-Probability-Visualize.html#Color",
        "fct-type": "function",
        "title": "DarkGray"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "DarkGray",
        "normalized": "",
        "package": "probability",
        "partial": "Dark Gray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:Dashed",
      "description": {
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "Dashed",
        "fct-source": "src/Numeric-Probability-Visualize.html#LineStyle",
        "fct-type": "function",
        "title": "Dashed"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "Dashed",
        "normalized": "",
        "package": "probability",
        "partial": "Dashed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:DotDash",
      "description": {
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "DotDash",
        "fct-source": "src/Numeric-Probability-Visualize.html#LineStyle",
        "fct-type": "function",
        "title": "DotDash"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "DotDash",
        "normalized": "",
        "package": "probability",
        "partial": "Dot Dash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:Dotted",
      "description": {
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "Dotted",
        "fct-source": "src/Numeric-Probability-Visualize.html#LineStyle",
        "fct-type": "function",
        "title": "Dotted"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "Dotted",
        "normalized": "",
        "package": "probability",
        "partial": "Dotted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:FE",
      "description": {
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "FE",
        "fct-source": "src/Numeric-Probability-Visualize.html#FigureEnv",
        "fct-type": "function",
        "title": "FE"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "FE",
        "normalized": "",
        "package": "probability",
        "partial": "FE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:Gray",
      "description": {
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "Gray",
        "fct-source": "src/Numeric-Probability-Visualize.html#Color",
        "fct-type": "function",
        "title": "Gray"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "Gray",
        "normalized": "",
        "package": "probability",
        "partial": "Gray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:Green",
      "description": {
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "Green",
        "fct-source": "src/Numeric-Probability-Visualize.html#Color",
        "fct-type": "function",
        "title": "Green"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "Green",
        "normalized": "",
        "package": "probability",
        "partial": "Green",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:LightGreen",
      "description": {
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "LightGreen",
        "fct-source": "src/Numeric-Probability-Visualize.html#Color",
        "fct-type": "function",
        "title": "LightGreen"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "LightGreen",
        "normalized": "",
        "package": "probability",
        "partial": "Light Green",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:LongDash",
      "description": {
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "LongDash",
        "fct-source": "src/Numeric-Probability-Visualize.html#LineStyle",
        "fct-type": "function",
        "title": "LongDash"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "LongDash",
        "normalized": "",
        "package": "probability",
        "partial": "Long Dash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:Magenta",
      "description": {
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "Magenta",
        "fct-source": "src/Numeric-Probability-Visualize.html#Color",
        "fct-type": "function",
        "title": "Magenta"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "Magenta",
        "normalized": "",
        "package": "probability",
        "partial": "Magenta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:Orange",
      "description": {
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "Orange",
        "fct-source": "src/Numeric-Probability-Visualize.html#Color",
        "fct-type": "function",
        "title": "Orange"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "Orange",
        "normalized": "",
        "package": "probability",
        "partial": "Orange",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:Plot",
      "description": {
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "Plot",
        "fct-source": "src/Numeric-Probability-Visualize.html#Plot",
        "fct-type": "function",
        "title": "Plot"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "Plot",
        "normalized": "",
        "package": "probability",
        "partial": "Plot",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:Purple",
      "description": {
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "Purple",
        "fct-source": "src/Numeric-Probability-Visualize.html#Color",
        "fct-type": "function",
        "title": "Purple"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "Purple",
        "normalized": "",
        "package": "probability",
        "partial": "Purple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:Red",
      "description": {
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "Red",
        "fct-source": "src/Numeric-Probability-Visualize.html#Color",
        "fct-type": "function",
        "title": "Red"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "Red",
        "normalized": "",
        "package": "probability",
        "partial": "Red",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:Solid",
      "description": {
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "Solid",
        "fct-source": "src/Numeric-Probability-Visualize.html#LineStyle",
        "fct-type": "function",
        "title": "Solid"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "Solid",
        "normalized": "",
        "package": "probability",
        "partial": "Solid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:TwoDash",
      "description": {
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "TwoDash",
        "fct-source": "src/Numeric-Probability-Visualize.html#LineStyle",
        "fct-type": "function",
        "title": "TwoDash"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "TwoDash",
        "normalized": "",
        "package": "probability",
        "partial": "Two Dash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:White",
      "description": {
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "White",
        "fct-source": "src/Numeric-Probability-Visualize.html#Color",
        "fct-type": "function",
        "title": "White"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "White",
        "normalized": "",
        "package": "probability",
        "partial": "White",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:Yellow",
      "description": {
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "Yellow",
        "fct-source": "src/Numeric-Probability-Visualize.html#Color",
        "fct-type": "function",
        "title": "Yellow"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "Yellow",
        "normalized": "",
        "package": "probability",
        "partial": "Yellow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:autoColor",
      "description": {
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "[Plot] -\u003e [Plot]",
        "fct-source": "src/Numeric-Probability-Visualize.html#autoColor",
        "fct-type": "function",
        "title": "autoColor"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "autoColor",
        "normalized": "[Plot]-\u003e[Plot]",
        "package": "probability",
        "partial": "Color",
        "signature": "[Plot]-\u003e[Plot]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:color",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "Color",
        "fct-source": "src/Numeric-Probability-Visualize.html#Plot",
        "fct-type": "function",
        "title": "color"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "color",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:colors",
      "description": {
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "[Color]",
        "fct-source": "src/Numeric-Probability-Visualize.html#colors",
        "fct-type": "function",
        "title": "colors"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "colors",
        "normalized": "[Color]",
        "package": "probability",
        "partial": "",
        "signature": "[Color]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:decr",
      "description": {
        "fct-descr": "\u003cp\u003ewe want to increase the bounds absolutely, account for negative numbers\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Numeric-Probability-Visualize.html#incr",
        "fct-type": "function",
        "title": "decr"
      },
      "index": {
        "description": "we want to increase the bounds absolutely account for negative numbers",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "decr",
        "normalized": "a-\u003ea",
        "package": "probability",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:drawy",
      "description": {
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "Int -\u003e Plot -\u003e [a] -\u003e String",
        "fct-source": "src/Numeric-Probability-Visualize.html#drawy",
        "fct-type": "function",
        "title": "drawy"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "drawy",
        "normalized": "Int-\u003ePlot-\u003e[a]-\u003eString",
        "package": "probability",
        "partial": "",
        "signature": "Int-\u003ePlot-\u003e[a]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:fig",
      "description": {
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "[Plot] -\u003e Vis",
        "fct-source": "src/Numeric-Probability-Visualize.html#fig",
        "fct-type": "function",
        "title": "fig"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "fig",
        "normalized": "[Plot]-\u003eVis",
        "package": "probability",
        "partial": "",
        "signature": "[Plot]-\u003eVis"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:figP",
      "description": {
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "FigureEnv -\u003e [Plot] -\u003e Vis",
        "fct-source": "src/Numeric-Probability-Visualize.html#figP",
        "fct-type": "function",
        "title": "figP"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "figP",
        "normalized": "FigureEnv-\u003e[Plot]-\u003eVis",
        "package": "probability",
        "partial": "",
        "signature": "FigureEnv-\u003e[Plot]-\u003eVis"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:figure",
      "description": {
        "fct-descr": "\u003cp\u003edefault settings for figure environment\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "FigureEnv",
        "fct-source": "src/Numeric-Probability-Visualize.html#figure",
        "fct-type": "function",
        "title": "figure"
      },
      "index": {
        "description": "default settings for figure environment",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "figure",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:fileName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "String",
        "fct-source": "src/Numeric-Probability-Visualize.html#FigureEnv",
        "fct-type": "function",
        "title": "fileName"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "fileName",
        "normalized": "",
        "package": "probability",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:incr",
      "description": {
        "fct-descr": "\u003cp\u003ewe want to increase the bounds absolutely, account for negative numbers\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Numeric-Probability-Visualize.html#incr",
        "fct-type": "function",
        "title": "incr"
      },
      "index": {
        "description": "we want to increase the bounds absolutely account for negative numbers",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "incr",
        "normalized": "a-\u003ea",
        "package": "probability",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:label",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "String",
        "fct-source": "src/Numeric-Probability-Visualize.html#Plot",
        "fct-type": "function",
        "title": "label"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "label",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:legend",
      "description": {
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "Float -\u003e Float -\u003e [Plot] -\u003e String",
        "fct-source": "src/Numeric-Probability-Visualize.html#legend",
        "fct-type": "function",
        "title": "legend"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "legend",
        "normalized": "Float-\u003eFloat-\u003e[Plot]-\u003eString",
        "package": "probability",
        "partial": "",
        "signature": "Float-\u003eFloat-\u003e[Plot]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:lineStyle",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "LineStyle",
        "fct-source": "src/Numeric-Probability-Visualize.html#Plot",
        "fct-type": "function",
        "title": "lineStyle"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "lineStyle",
        "normalized": "",
        "package": "probability",
        "partial": "Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:lineWidth",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "Int",
        "fct-source": "src/Numeric-Probability-Visualize.html#Plot",
        "fct-type": "function",
        "title": "lineWidth"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "lineWidth",
        "normalized": "",
        "package": "probability",
        "partial": "Width",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:metaTuple",
      "description": {
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "[Float] -\u003e [(Float, Float)] -\u003e [(Float, Float)]",
        "fct-source": "src/Numeric-Probability-Visualize.html#metaTuple",
        "fct-type": "function",
        "title": "metaTuple"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "metaTuple",
        "normalized": "[Float]-\u003e[(Float,Float)]-\u003e[(Float,Float)]",
        "package": "probability",
        "partial": "Tuple",
        "signature": "[Float]-\u003e[(Float,Float)]-\u003e[(Float,Float)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:out0",
      "description": {
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "FilePath -\u003e String -\u003e IO ()",
        "fct-source": "src/Numeric-Probability-Visualize.html#out0",
        "fct-type": "function",
        "title": "out0"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "out0",
        "normalized": "FilePath-\u003eString-\u003eIO()",
        "package": "probability",
        "partial": "",
        "signature": "FilePath-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:out1",
      "description": {
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "FilePath -\u003e String -\u003e IO ()",
        "fct-source": "src/Numeric-Probability-Visualize.html#out1",
        "fct-type": "function",
        "title": "out1"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "out1",
        "normalized": "FilePath-\u003eString-\u003eIO()",
        "package": "probability",
        "partial": "",
        "signature": "FilePath-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:plot",
      "description": {
        "fct-descr": "\u003cp\u003edefault plotting environment\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "Plot",
        "fct-source": "src/Numeric-Probability-Visualize.html#plot",
        "fct-type": "function",
        "title": "plot"
      },
      "index": {
        "description": "default plotting environment",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "plot",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:plotD",
      "description": {
        "fct-descr": "\u003cp\u003ecreate a plot from a distribution\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "Dist a -\u003e Plot",
        "fct-source": "src/Numeric-Probability-Visualize.html#plotD",
        "fct-type": "function",
        "title": "plotD"
      },
      "index": {
        "description": "create plot from distribution",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "plotD",
        "normalized": "Dist a-\u003ePlot",
        "package": "probability",
        "partial": "",
        "signature": "Dist a-\u003ePlot"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:plotF",
      "description": {
        "fct-descr": "\u003cp\u003ecreate a plot from a function\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "(Float, Float, Float) -\u003e (a -\u003e b) -\u003e Plot",
        "fct-source": "src/Numeric-Probability-Visualize.html#plotF",
        "fct-type": "function",
        "title": "plotF"
      },
      "index": {
        "description": "create plot from function",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "plotF",
        "normalized": "(Float,Float,Float)-\u003e(a-\u003eb)-\u003ePlot",
        "package": "probability",
        "partial": "",
        "signature": "(Float,Float,Float)-\u003e(a-\u003eb)-\u003ePlot"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:plotL",
      "description": {
        "fct-descr": "\u003cp\u003ecreate a plot from a list\n\u003c/p\u003e",
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "[a] -\u003e Plot",
        "fct-source": "src/Numeric-Probability-Visualize.html#plotL",
        "fct-type": "function",
        "title": "plotL"
      },
      "index": {
        "description": "create plot from list",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "plotL",
        "normalized": "[a]-\u003ePlot",
        "package": "probability",
        "partial": "",
        "signature": "[a]-\u003ePlot"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:plotRD",
      "description": {
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "RDist a -\u003e IO Plot",
        "fct-source": "src/Numeric-Probability-Visualize.html#plotRD",
        "fct-type": "function",
        "title": "plotRD"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "plotRD",
        "normalized": "RDist a-\u003eIO Plot",
        "package": "probability",
        "partial": "RD",
        "signature": "RDist a-\u003eIO Plot"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:plotRL",
      "description": {
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "T [a] -\u003e IO Plot",
        "fct-source": "src/Numeric-Probability-Visualize.html#plotRL",
        "fct-type": "function",
        "title": "plotRL"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "plotRL",
        "normalized": "T[a]-\u003eIO Plot",
        "package": "probability",
        "partial": "RL",
        "signature": "T[a]-\u003eIO Plot"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:setColor",
      "description": {
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "Plot -\u003e Color -\u003e Plot",
        "fct-source": "src/Numeric-Probability-Visualize.html#setColor",
        "fct-type": "function",
        "title": "setColor"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "setColor",
        "normalized": "Plot-\u003eColor-\u003ePlot",
        "package": "probability",
        "partial": "Color",
        "signature": "Plot-\u003eColor-\u003ePlot"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:showParams",
      "description": {
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "[a] -\u003e [String] -\u003e String",
        "fct-source": "src/Numeric-Probability-Visualize.html#showParams",
        "fct-type": "function",
        "title": "showParams"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "showParams",
        "normalized": "[a]-\u003e[String]-\u003eString",
        "package": "probability",
        "partial": "Params",
        "signature": "[a]-\u003e[String]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:title",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "String",
        "fct-source": "src/Numeric-Probability-Visualize.html#FigureEnv",
        "fct-type": "function",
        "title": "title"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "title",
        "normalized": "",
        "package": "probability",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:vec",
      "description": {
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "[a] -\u003e String",
        "fct-source": "src/Numeric-Probability-Visualize.html#vec",
        "fct-type": "function",
        "title": "vec"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "vec",
        "normalized": "[a]-\u003eString",
        "package": "probability",
        "partial": "",
        "signature": "[a]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:xLabel",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "String",
        "fct-source": "src/Numeric-Probability-Visualize.html#FigureEnv",
        "fct-type": "function",
        "title": "xLabel"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "xLabel",
        "normalized": "",
        "package": "probability",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:xs",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "[Float]",
        "fct-source": "src/Numeric-Probability-Visualize.html#Plot",
        "fct-type": "function",
        "title": "xs"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "xs",
        "normalized": "[Float]",
        "package": "probability",
        "partial": "",
        "signature": "[Float]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:yLabel",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "String",
        "fct-source": "src/Numeric-Probability-Visualize.html#FigureEnv",
        "fct-type": "function",
        "title": "yLabel"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "yLabel",
        "normalized": "",
        "package": "probability",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:yls",
      "description": {
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "[Float] -\u003e Plot -\u003e Plot",
        "fct-source": "src/Numeric-Probability-Visualize.html#yls",
        "fct-type": "function",
        "title": "yls"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "yls",
        "normalized": "[Float]-\u003ePlot-\u003ePlot",
        "package": "probability",
        "partial": "",
        "signature": "[Float]-\u003ePlot-\u003ePlot"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:ys",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Numeric.Probability.Visualize",
        "fct-package": "probability",
        "fct-signature": "[Float]",
        "fct-source": "src/Numeric-Probability-Visualize.html#Plot",
        "fct-type": "function",
        "title": "ys"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Probability Visualize",
        "module": "Numeric.Probability.Visualize",
        "name": "ys",
        "normalized": "[Float]",
        "package": "probability",
        "partial": "",
        "signature": "[Float]"
      }
    }
  }
]