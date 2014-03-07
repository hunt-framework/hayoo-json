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
        "word": "probability"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDeterministic and probabilistic values\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Probability.Distribution",
          "name": "Distribution",
          "package": "probability",
          "source": "src/Numeric-Probability-Distribution.html",
          "type": "module"
        },
        "index": {
          "description": "Deterministic and probabilistic values",
          "hierarchy": "Numeric Probability Distribution",
          "module": "Numeric.Probability.Distribution",
          "name": "Distribution",
          "package": "probability",
          "partial": "Distribution",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Distribution",
          "name": "Event",
          "package": "probability",
          "source": "src/Numeric-Probability-Distribution.html#Event",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Probability Distribution",
          "module": "Numeric.Probability.Distribution",
          "name": "Event",
          "package": "probability",
          "partial": "Event",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efiltering distributions\n\u003c/p\u003e",
          "module": "Numeric.Probability.Distribution",
          "name": "Select",
          "package": "probability",
          "source": "src/Numeric-Probability-Distribution.html#Select",
          "type": "data"
        },
        "index": {
          "description": "filtering distributions",
          "hierarchy": "Numeric Probability Distribution",
          "module": "Numeric.Probability.Distribution",
          "name": "Select",
          "package": "probability",
          "partial": "Select",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#t:Select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edistribution generators\n\u003c/p\u003e",
          "module": "Numeric.Probability.Distribution",
          "name": "Spread",
          "package": "probability",
          "source": "src/Numeric-Probability-Distribution.html#Spread",
          "type": "type"
        },
        "index": {
          "description": "distribution generators",
          "hierarchy": "Numeric Probability Distribution",
          "module": "Numeric.Probability.Distribution",
          "name": "Spread",
          "package": "probability",
          "partial": "Spread",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#t:Spread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProbability disribution\n\u003c/p\u003e\u003cp\u003eThe underlying data structure is a list.\nUnfortunately we cannot use a more efficient data structure\nbecause the key type must be of class \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e,\nbut the \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e class does not allow constraints for result types.\nThe Monad instance is particularly useful\nbecause many generic monad functions make sense here,\nmonad transformers can be used\nand the monadic design allows to simulate probabilistic games in an elegant manner.\n\u003c/p\u003e\u003cp\u003eWe have the same problem like making \u003ca\u003eData.Set\u003c/a\u003e an instance of \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e,\nsee \u003ca\u003ehttp://www.randomhacks.net/articles/2007/03/15/data-set-monad-haskell-macros\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eIf you need efficiency, you should remove redundant elements by \u003ccode\u003e\u003ca\u003enorm\u003c/a\u003e\u003c/code\u003e.\n\u003ccode\u003e\u003ca\u003enorm\u003c/a\u003e\u003c/code\u003e converts to \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e and back internally\nand you can hope that the compiler fuses the lists with the intermediate Map structure.\n\u003c/p\u003e\u003cp\u003eThe defined monad is equivalent to\n\u003ccode\u003eWriterT (Product prob) [] a\u003c/code\u003e.\nSee \u003ca\u003ehttp://www.randomhacks.net/articles/2007/02/21/refactoring-probability-distributions\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Distribution",
          "name": "T",
          "package": "probability",
          "source": "src/Numeric-Probability-Distribution.html#T",
          "type": "newtype"
        },
        "index": {
          "description": "Probability disribution The underlying data structure is list Unfortunately we cannot use more efficient data structure because the key type must be of class Ord but the Monad class does not allow constraints for result types The Monad instance is particularly useful because many generic monad functions make sense here monad transformers can be used and the monadic design allows to simulate probabilistic games in an elegant manner We have the same problem like making Data.Set an instance of Monad see http www.randomhacks.net articles data-set-monad-haskell-macros If you need efficiency you should remove redundant elements by norm norm converts to Map and back internally and you can hope that the compiler fuses the lists with the intermediate Map structure The defined monad is equivalent to WriterT Product prob See http www.randomhacks.net articles refactoring-probability-distributions",
          "hierarchy": "Numeric Probability Distribution",
          "module": "Numeric.Probability.Distribution",
          "name": "T",
          "package": "probability",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Distribution",
          "name": "(//%)",
          "package": "probability",
          "signature": "T Rational a -\u003e () -\u003e IO ()",
          "source": "src/Numeric-Probability-Distribution.html#%2F%2F%25",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Distribution",
          "module": "Numeric.Probability.Distribution",
          "name": "(//%) //%",
          "normalized": "T Rational a-\u003e()-\u003eIO()",
          "package": "probability",
          "signature": "T Rational a-\u003e()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:-47--47--37-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e in infix form.\nCan be considered an additional monadic combinator,\nwhich can be used where you would want \u003ccode\u003e\u003ca\u003eguard\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Distribution",
          "name": "(\u003e\u003e=?)",
          "package": "probability",
          "signature": "T prob a -\u003e (a -\u003e Bool) -\u003e T prob a",
          "source": "src/Numeric-Probability-Distribution.html#%3E%3E%3D%3F",
          "type": "function"
        },
        "index": {
          "description": "filter in infix form Can be considered an additional monadic combinator which can be used where you would want guard otherwise",
          "hierarchy": "Numeric Probability Distribution",
          "module": "Numeric.Probability.Distribution",
          "name": "(\u003e\u003e=?) \u003e\u003e=?",
          "normalized": "T a b-\u003e(b-\u003eBool)-\u003eT a b",
          "package": "probability",
          "signature": "T prob a-\u003e(a-\u003eBool)-\u003eT prob a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:-62--62--61--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econditional probability, identical to \u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Numeric.Probability.Distribution",
          "name": "(?=\u003c\u003c)",
          "package": "probability",
          "signature": "(a -\u003e Bool) -\u003e T prob a -\u003e T prob a",
          "source": "src/Numeric-Probability-Distribution.html#%3F%3D%3C%3C",
          "type": "function"
        },
        "index": {
          "description": "conditional probability identical to filter",
          "hierarchy": "Numeric Probability Distribution",
          "module": "Numeric.Probability.Distribution",
          "name": "(?=\u003c\u003c) ?=\u003c\u003c",
          "normalized": "(a-\u003eBool)-\u003eT b a-\u003eT b a",
          "package": "probability",
          "signature": "(a-\u003eBool)-\u003eT prob a-\u003eT prob a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:-63--61--60--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Distribution",
          "name": "(??)",
          "package": "probability",
          "signature": "Event a -\u003e T prob a -\u003e prob",
          "source": "src/Numeric-Probability-Distribution.html#%3F%3F",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Distribution",
          "module": "Numeric.Probability.Distribution",
          "name": "(??) ??",
          "normalized": "Event a-\u003eT b a-\u003eb",
          "package": "probability",
          "signature": "Event a-\u003eT prob a-\u003eprob",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:-63--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Distribution",
          "name": "Case",
          "package": "probability",
          "signature": "Case a",
          "source": "src/Numeric-Probability-Distribution.html#Select",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Distribution",
          "module": "Numeric.Probability.Distribution",
          "name": "Case",
          "package": "probability",
          "partial": "Case",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:Case"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Distribution",
          "name": "Cons",
          "package": "probability",
          "signature": "Cons",
          "source": "src/Numeric-Probability-Distribution.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Distribution",
          "module": "Numeric.Probability.Distribution",
          "name": "Cons",
          "package": "probability",
          "partial": "Cons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:Cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Distribution",
          "name": "Other",
          "package": "probability",
          "signature": "Other",
          "source": "src/Numeric-Probability-Distribution.html#Select",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Distribution",
          "module": "Numeric.Probability.Distribution",
          "name": "Other",
          "package": "probability",
          "partial": "Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:Other"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Distribution",
          "name": "above",
          "package": "probability",
          "signature": "prob -\u003e T prob a -\u003e T prob (Select a)",
          "source": "src/Numeric-Probability-Distribution.html#above",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Distribution",
          "module": "Numeric.Probability.Distribution",
          "name": "above",
          "normalized": "a-\u003eT a b-\u003eT a(Select b)",
          "package": "probability",
          "signature": "prob-\u003eT prob a-\u003eT prob(Select a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:above"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether two distributions are equal when neglecting rounding errors.\nWe do not want to put this into an \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e instance,\nsince it is not exact equivalence\nand it seems to be too easy to mix it up with \u003ccode\u003eliftM2 (==) x y\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Distribution",
          "name": "approx",
          "package": "probability",
          "signature": "T prob a -\u003e T prob a -\u003e Bool",
          "source": "src/Numeric-Probability-Distribution.html#approx",
          "type": "function"
        },
        "index": {
          "description": "Check whether two distributions are equal when neglecting rounding errors We do not want to put this into an Eq instance since it is not exact equivalence and it seems to be too easy to mix it up with liftM2",
          "hierarchy": "Numeric Probability Distribution",
          "module": "Numeric.Probability.Distribution",
          "name": "approx",
          "normalized": "T a b-\u003eT a b-\u003eBool",
          "package": "probability",
          "signature": "T prob a-\u003eT prob a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:approx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Distribution",
          "name": "certainly",
          "package": "probability",
          "signature": "a -\u003e T prob a",
          "source": "src/Numeric-Probability-Distribution.html#certainly",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Distribution",
          "module": "Numeric.Probability.Distribution",
          "name": "certainly",
          "normalized": "a-\u003eT b a",
          "package": "probability",
          "signature": "a-\u003eT prob a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:certainly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Distribution",
          "name": "check",
          "package": "probability",
          "signature": "T prob a -\u003e T prob a",
          "source": "src/Numeric-Probability-Distribution.html#check",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Distribution",
          "module": "Numeric.Probability.Distribution",
          "name": "check",
          "normalized": "T a b-\u003eT a b",
          "package": "probability",
          "signature": "T prob a-\u003eT prob a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:check"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Distribution",
          "name": "choose",
          "package": "probability",
          "signature": "prob -\u003e a -\u003e a -\u003e T prob a",
          "source": "src/Numeric-Probability-Distribution.html#choose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Distribution",
          "module": "Numeric.Probability.Distribution",
          "name": "choose",
          "normalized": "a-\u003eb-\u003eb-\u003eT a b",
          "package": "probability",
          "signature": "prob-\u003ea-\u003ea-\u003eT prob a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:choose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econditional distribution\n\u003c/p\u003e",
          "module": "Numeric.Probability.Distribution",
          "name": "cond",
          "package": "probability",
          "signature": "T prob Bool-\u003e T prob a-\u003e T prob a-\u003e T prob a",
          "type": "function"
        },
        "index": {
          "description": "conditional distribution",
          "hierarchy": "Numeric Probability Distribution",
          "module": "Numeric.Probability.Distribution",
          "name": "cond",
          "normalized": "T a Bool-\u003eT a b-\u003eT a b-\u003eT a b",
          "package": "probability",
          "signature": "T prob Bool-\u003eT prob a-\u003eT prob a-\u003eT prob a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:cond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecan fail because of rounding errors, better use \u003ccode\u003e\u003ca\u003efromFreqs\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Numeric.Probability.Distribution",
          "name": "cons",
          "package": "probability",
          "signature": "[(a, prob)] -\u003e T prob a",
          "source": "src/Numeric-Probability-Distribution.html#cons",
          "type": "function"
        },
        "index": {
          "description": "can fail because of rounding errors better use fromFreqs",
          "hierarchy": "Numeric Probability Distribution",
          "module": "Numeric.Probability.Distribution",
          "name": "cons",
          "normalized": "[(a,b)]-\u003eT b a",
          "package": "probability",
          "signature": "[(a,prob)]-\u003eT prob a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Distribution",
          "name": "decons",
          "package": "probability",
          "signature": "[(a, prob)]",
          "source": "src/Numeric-Probability-Distribution.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Distribution",
          "module": "Numeric.Probability.Distribution",
          "name": "decons",
          "normalized": "[(a,b)]",
          "package": "probability",
          "signature": "[(a,prob)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:decons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Distribution",
          "name": "enum",
          "package": "probability",
          "signature": "[Int] -\u003e Spread prob a",
          "source": "src/Numeric-Probability-Distribution.html#enum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Distribution",
          "module": "Numeric.Probability.Distribution",
          "name": "enum",
          "normalized": "[Int]-\u003eSpread a b",
          "package": "probability",
          "signature": "[Int]-\u003eSpread prob a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:enum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Distribution",
          "name": "equal",
          "package": "probability",
          "signature": "T prob a -\u003e T prob a -\u003e Bool",
          "source": "src/Numeric-Probability-Distribution.html#equal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Distribution",
          "module": "Numeric.Probability.Distribution",
          "name": "equal",
          "normalized": "T a b-\u003eT a b-\u003eBool",
          "package": "probability",
          "signature": "T prob a-\u003eT prob a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:equal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Distribution",
          "name": "errorMargin",
          "package": "probability",
          "signature": "prob",
          "source": "src/Numeric-Probability-Distribution.html#errorMargin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Distribution",
          "module": "Numeric.Probability.Distribution",
          "name": "errorMargin",
          "package": "probability",
          "partial": "Margin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:errorMargin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eexpectation value\n\u003c/p\u003e",
          "module": "Numeric.Probability.Distribution",
          "name": "expected",
          "package": "probability",
          "signature": "T a a -\u003e a",
          "source": "src/Numeric-Probability-Distribution.html#expected",
          "type": "function"
        },
        "index": {
          "description": "expectation value",
          "hierarchy": "Numeric Probability Distribution",
          "module": "Numeric.Probability.Distribution",
          "name": "expected",
          "normalized": "T a a-\u003ea",
          "package": "probability",
          "signature": "T a a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:expected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eextracting and mapping the domain of a distribution\n\u003c/p\u003e",
          "module": "Numeric.Probability.Distribution",
          "name": "extract",
          "package": "probability",
          "signature": "T prob a -\u003e [a]",
          "source": "src/Numeric-Probability-Distribution.html#extract",
          "type": "function"
        },
        "index": {
          "description": "extracting and mapping the domain of distribution",
          "hierarchy": "Numeric Probability Distribution",
          "module": "Numeric.Probability.Distribution",
          "name": "extract",
          "normalized": "T a b-\u003e[b]",
          "package": "probability",
          "signature": "T prob a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:extract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Distribution",
          "name": "filter",
          "package": "probability",
          "signature": "(a -\u003e Bool) -\u003e T prob a -\u003e T prob a",
          "source": "src/Numeric-Probability-Distribution.html#filter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Distribution",
          "module": "Numeric.Probability.Distribution",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003eT b a-\u003eT b a",
          "package": "probability",
          "signature": "(a-\u003eBool)-\u003eT prob a-\u003eT prob a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Distribution",
          "name": "fromFreqs",
          "package": "probability",
          "signature": "[(a, prob)] -\u003e T prob a",
          "source": "src/Numeric-Probability-Distribution.html#fromFreqs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Distribution",
          "module": "Numeric.Probability.Distribution",
          "name": "fromFreqs",
          "normalized": "[(a,b)]-\u003eT b a",
          "package": "probability",
          "partial": "Freqs",
          "signature": "[(a,prob)]-\u003eT prob a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:fromFreqs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Distribution",
          "name": "just",
          "package": "probability",
          "signature": "a -\u003e Event a",
          "source": "src/Numeric-Probability-Distribution.html#just",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Distribution",
          "module": "Numeric.Probability.Distribution",
          "name": "just",
          "normalized": "a-\u003eEvent a",
          "package": "probability",
          "signature": "a-\u003eEvent a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:just"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Distribution",
          "name": "lift",
          "package": "probability",
          "signature": "([(a, prob)] -\u003e [(a, prob)]) -\u003e T prob a -\u003e T prob a",
          "source": "src/Numeric-Probability-Distribution.html#lift",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Distribution",
          "module": "Numeric.Probability.Distribution",
          "name": "lift",
          "normalized": "([(a,b)]-\u003e[(a,b)])-\u003eT b a-\u003eT b a",
          "package": "probability",
          "signature": "([(a,prob)]-\u003e[(a,prob)])-\u003eT prob a-\u003eT prob a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:lift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Distribution",
          "name": "linear",
          "package": "probability",
          "signature": "Spread prob a",
          "source": "src/Numeric-Probability-Distribution.html#linear",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Distribution",
          "module": "Numeric.Probability.Distribution",
          "name": "linear",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:linear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e with normalization\n\u003c/p\u003e",
          "module": "Numeric.Probability.Distribution",
          "name": "map",
          "package": "probability",
          "signature": "(a -\u003e b) -\u003e T prob a -\u003e T prob b",
          "source": "src/Numeric-Probability-Distribution.html#map",
          "type": "function"
        },
        "index": {
          "description": "fmap with normalization",
          "hierarchy": "Numeric Probability Distribution",
          "module": "Numeric.Probability.Distribution",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003eT c a-\u003eT c b",
          "package": "probability",
          "signature": "(a-\u003eb)-\u003eT prob a-\u003eT prob b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Distribution",
          "name": "mapMaybe",
          "package": "probability",
          "signature": "(a -\u003e Maybe b) -\u003e T prob a -\u003e T prob b",
          "source": "src/Numeric-Probability-Distribution.html#mapMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Distribution",
          "module": "Numeric.Probability.Distribution",
          "name": "mapMaybe",
          "normalized": "(a-\u003eMaybe b)-\u003eT c a-\u003eT c b",
          "package": "probability",
          "partial": "Maybe",
          "signature": "(a-\u003eMaybe b)-\u003eT prob a-\u003eT prob b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:mapMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Distribution",
          "name": "negExp",
          "package": "probability",
          "signature": "Spread prob a",
          "source": "src/Numeric-Probability-Distribution.html#negExp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Distribution",
          "module": "Numeric.Probability.Distribution",
          "name": "negExp",
          "package": "probability",
          "partial": "Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:negExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Distribution",
          "name": "norm",
          "package": "probability",
          "signature": "T prob a -\u003e T prob a",
          "source": "src/Numeric-Probability-Distribution.html#norm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Distribution",
          "module": "Numeric.Probability.Distribution",
          "name": "norm",
          "normalized": "T a b-\u003eT a b",
          "package": "probability",
          "signature": "T prob a-\u003eT prob a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:norm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Distribution",
          "name": "norm'",
          "package": "probability",
          "signature": "[(a, prob)] -\u003e [(a, prob)]",
          "source": "src/Numeric-Probability-Distribution.html#norm%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Distribution",
          "module": "Numeric.Probability.Distribution",
          "name": "norm'",
          "normalized": "[(a,b)]-\u003e[(a,b)]",
          "package": "probability",
          "signature": "[(a,prob)]-\u003e[(a,prob)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:norm-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Distribution",
          "name": "norm''",
          "package": "probability",
          "signature": "[(a, prob)] -\u003e [(a, prob)]",
          "source": "src/Numeric-Probability-Distribution.html#norm%27%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Distribution",
          "module": "Numeric.Probability.Distribution",
          "name": "norm''",
          "normalized": "[(a,b)]-\u003e[(a,b)]",
          "package": "probability",
          "signature": "[(a,prob)]-\u003e[(a,prob)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:norm-39--39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Distribution",
          "name": "normal",
          "package": "probability",
          "signature": "Spread prob a",
          "source": "src/Numeric-Probability-Distribution.html#normal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Distribution",
          "module": "Numeric.Probability.Distribution",
          "name": "normal",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:normal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Distribution",
          "name": "oneOf",
          "package": "probability",
          "signature": "[a] -\u003e Event a",
          "source": "src/Numeric-Probability-Distribution.html#oneOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Distribution",
          "module": "Numeric.Probability.Distribution",
          "name": "oneOf",
          "normalized": "[a]-\u003eEvent a",
          "package": "probability",
          "partial": "Of",
          "signature": "[a]-\u003eEvent a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:oneOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epretty printing\n\u003c/p\u003e",
          "module": "Numeric.Probability.Distribution",
          "name": "pretty",
          "package": "probability",
          "signature": "(prob -\u003e String) -\u003e T prob a -\u003e String",
          "source": "src/Numeric-Probability-Distribution.html#pretty",
          "type": "function"
        },
        "index": {
          "description": "pretty printing",
          "hierarchy": "Numeric Probability Distribution",
          "module": "Numeric.Probability.Distribution",
          "name": "pretty",
          "normalized": "(a-\u003eString)-\u003eT a b-\u003eString",
          "package": "probability",
          "signature": "(prob-\u003eString)-\u003eT prob a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:pretty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGive a list of frequencies, they do not need to sum up to 1.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Distribution",
          "name": "relative",
          "package": "probability",
          "signature": "[prob] -\u003e Spread prob a",
          "source": "src/Numeric-Probability-Distribution.html#relative",
          "type": "function"
        },
        "index": {
          "description": "Give list of frequencies they do not need to sum up to",
          "hierarchy": "Numeric Probability Distribution",
          "module": "Numeric.Probability.Distribution",
          "name": "relative",
          "normalized": "[a]-\u003eSpread a b",
          "package": "probability",
          "signature": "[prob]-\u003eSpread prob a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:relative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Distribution",
          "name": "scanP",
          "package": "probability",
          "signature": "prob -\u003e [(a, prob)] -\u003e a",
          "source": "src/Numeric-Probability-Distribution.html#scanP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Distribution",
          "module": "Numeric.Probability.Distribution",
          "name": "scanP",
          "normalized": "a-\u003e[(b,a)]-\u003eb",
          "package": "probability",
          "signature": "prob-\u003e[(a,prob)]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:scanP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eselecting from distributions\n\u003c/p\u003e",
          "module": "Numeric.Probability.Distribution",
          "name": "selectP",
          "package": "probability",
          "signature": "T prob a -\u003e prob -\u003e a",
          "source": "src/Numeric-Probability-Distribution.html#selectP",
          "type": "function"
        },
        "index": {
          "description": "selecting from distributions",
          "hierarchy": "Numeric Probability Distribution",
          "module": "Numeric.Probability.Distribution",
          "name": "selectP",
          "normalized": "T a b-\u003ea-\u003eb",
          "package": "probability",
          "signature": "T prob a-\u003eprob-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:selectP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Distribution",
          "name": "shape",
          "package": "probability",
          "signature": "(prob -\u003e prob) -\u003e Spread prob a",
          "source": "src/Numeric-Probability-Distribution.html#shape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Distribution",
          "module": "Numeric.Probability.Distribution",
          "name": "shape",
          "normalized": "(a-\u003ea)-\u003eSpread a b",
          "package": "probability",
          "signature": "(prob-\u003eprob)-\u003eSpread prob a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:shape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Distribution",
          "name": "size",
          "package": "probability",
          "signature": "T prob a -\u003e Int",
          "source": "src/Numeric-Probability-Distribution.html#size",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Distribution",
          "module": "Numeric.Probability.Distribution",
          "name": "size",
          "normalized": "T a b-\u003eInt",
          "package": "probability",
          "signature": "T prob a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Distribution",
          "name": "sortElem",
          "package": "probability",
          "signature": "[(a, prob)] -\u003e [(a, prob)]",
          "source": "src/Numeric-Probability-Distribution.html#sortElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Distribution",
          "module": "Numeric.Probability.Distribution",
          "name": "sortElem",
          "normalized": "[(a,b)]-\u003e[(a,b)]",
          "package": "probability",
          "partial": "Elem",
          "signature": "[(a,prob)]-\u003e[(a,prob)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:sortElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Distribution",
          "name": "sortP",
          "package": "probability",
          "signature": "[(a, prob)] -\u003e [(a, prob)]",
          "source": "src/Numeric-Probability-Distribution.html#sortP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Distribution",
          "module": "Numeric.Probability.Distribution",
          "name": "sortP",
          "normalized": "[(a,b)]-\u003e[(a,b)]",
          "package": "probability",
          "signature": "[(a,prob)]-\u003e[(a,prob)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:sortP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Distribution",
          "name": "stdDev",
          "package": "probability",
          "signature": "T a a -\u003e a",
          "source": "src/Numeric-Probability-Distribution.html#stdDev",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Distribution",
          "module": "Numeric.Probability.Distribution",
          "name": "stdDev",
          "normalized": "T a a-\u003ea",
          "package": "probability",
          "partial": "Dev",
          "signature": "T a a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:stdDev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Distribution",
          "name": "sumP",
          "package": "probability",
          "signature": "[(a, prob)] -\u003e prob",
          "source": "src/Numeric-Probability-Distribution.html#sumP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Distribution",
          "module": "Numeric.Probability.Distribution",
          "name": "sumP",
          "normalized": "[(a,b)]-\u003eb",
          "package": "probability",
          "signature": "[(a,prob)]-\u003eprob",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:sumP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Distribution",
          "name": "truth",
          "package": "probability",
          "signature": "T prob Bool -\u003e prob",
          "source": "src/Numeric-Probability-Distribution.html#truth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Distribution",
          "module": "Numeric.Probability.Distribution",
          "name": "truth",
          "normalized": "T a Bool-\u003ea",
          "package": "probability",
          "signature": "T prob Bool-\u003eprob",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:truth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eunfold a distribution of distributions into one distribution,\nthis is \u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e with normalization.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Distribution",
          "name": "unfold",
          "package": "probability",
          "signature": "T prob (T prob a) -\u003e T prob a",
          "source": "src/Numeric-Probability-Distribution.html#unfold",
          "type": "function"
        },
        "index": {
          "description": "unfold distribution of distributions into one distribution this is join with normalization",
          "hierarchy": "Numeric Probability Distribution",
          "module": "Numeric.Probability.Distribution",
          "name": "unfold",
          "normalized": "T a(T a b)-\u003eT a b",
          "package": "probability",
          "signature": "T prob(T prob a)-\u003eT prob a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:unfold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Distribution",
          "name": "uniform",
          "package": "probability",
          "signature": "Spread prob a",
          "source": "src/Numeric-Probability-Distribution.html#uniform",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Distribution",
          "module": "Numeric.Probability.Distribution",
          "name": "uniform",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:uniform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estatistical analyses\n\u003c/p\u003e",
          "module": "Numeric.Probability.Distribution",
          "name": "variance",
          "package": "probability",
          "signature": "T a a -\u003e a",
          "source": "src/Numeric-Probability-Distribution.html#variance",
          "type": "function"
        },
        "index": {
          "description": "statistical analyses",
          "hierarchy": "Numeric Probability Distribution",
          "module": "Numeric.Probability.Distribution",
          "name": "variance",
          "normalized": "T a a-\u003ea",
          "package": "probability",
          "signature": "T a a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Distribution.html#v:variance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Alarm",
          "name": "Alarm",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-Alarm.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Alarm",
          "module": "Numeric.Probability.Example.Alarm",
          "name": "Alarm",
          "package": "probability",
          "partial": "Alarm",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Alarm.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecalculate the full joint distribution\n\u003c/p\u003e",
          "module": "Numeric.Probability.Example.Alarm",
          "name": "Burglary",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-Alarm.html#Burglary",
          "type": "data"
        },
        "index": {
          "description": "calculate the full joint distribution",
          "hierarchy": "Numeric Probability Example Alarm",
          "module": "Numeric.Probability.Example.Alarm",
          "name": "Burglary",
          "package": "probability",
          "partial": "Burglary",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Alarm.html#t:Burglary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Alarm",
          "name": "Dist",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-Alarm.html#Dist",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Alarm",
          "module": "Numeric.Probability.Example.Alarm",
          "name": "Dist",
          "package": "probability",
          "partial": "Dist",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Alarm.html#t:Dist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Alarm",
          "name": "PBool",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-Alarm.html#PBool",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Alarm",
          "module": "Numeric.Probability.Example.Alarm",
          "name": "PBool",
          "package": "probability",
          "partial": "PBool",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Alarm.html#t:PBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Alarm",
          "name": "Probability",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-Alarm.html#Probability",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Alarm",
          "module": "Numeric.Probability.Example.Alarm",
          "name": "Probability",
          "package": "probability",
          "partial": "Probability",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Alarm.html#t:Probability"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Alarm",
          "name": "B",
          "package": "probability",
          "signature": "B",
          "source": "src/Numeric-Probability-Example-Alarm.html#Burglary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Alarm",
          "module": "Numeric.Probability.Example.Alarm",
          "name": "B",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Alarm.html#v:B"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econditional probability of alarm given burglary and earthquake\n\u003c/p\u003e",
          "module": "Numeric.Probability.Example.Alarm",
          "name": "a",
          "package": "probability",
          "signature": "Bool -\u003e Bool -\u003e PBool",
          "source": "src/Numeric-Probability-Example-Alarm.html#a",
          "type": "function"
        },
        "index": {
          "description": "conditional probability of alarm given burglary and earthquake",
          "hierarchy": "Numeric Probability Example Alarm",
          "module": "Numeric.Probability.Example.Alarm",
          "name": "a",
          "normalized": "Bool-\u003eBool-\u003ePBool",
          "package": "probability",
          "signature": "Bool-\u003eBool-\u003ePBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Alarm.html#v:a"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Alarm",
          "name": "alarm",
          "package": "probability",
          "signature": "Bool",
          "source": "src/Numeric-Probability-Example-Alarm.html#Burglary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Alarm",
          "module": "Numeric.Probability.Example.Alarm",
          "name": "alarm",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Alarm.html#v:alarm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eprior burglary 1%\n\u003c/p\u003e",
          "module": "Numeric.Probability.Example.Alarm",
          "name": "b",
          "package": "probability",
          "signature": "PBool",
          "source": "src/Numeric-Probability-Example-Alarm.html#b",
          "type": "function"
        },
        "index": {
          "description": "prior burglary",
          "hierarchy": "Numeric Probability Example Alarm",
          "module": "Numeric.Probability.Example.Alarm",
          "name": "b",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Alarm.html#v:b"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Alarm",
          "name": "bJoint",
          "package": "probability",
          "signature": "Dist Burglary",
          "source": "src/Numeric-Probability-Example-Alarm.html#bJoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Alarm",
          "module": "Numeric.Probability.Example.Alarm",
          "name": "bJoint",
          "package": "probability",
          "partial": "Joint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Alarm.html#v:bJoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Alarm",
          "name": "burglary",
          "package": "probability",
          "signature": "Bool",
          "source": "src/Numeric-Probability-Example-Alarm.html#Burglary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Alarm",
          "module": "Numeric.Probability.Example.Alarm",
          "name": "burglary",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Alarm.html#v:burglary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eprior earthquake 0.1%\n\u003c/p\u003e",
          "module": "Numeric.Probability.Example.Alarm",
          "name": "e",
          "package": "probability",
          "signature": "PBool",
          "source": "src/Numeric-Probability-Example-Alarm.html#e",
          "type": "function"
        },
        "index": {
          "description": "prior earthquake",
          "hierarchy": "Numeric Probability Example Alarm",
          "module": "Numeric.Probability.Example.Alarm",
          "name": "e",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Alarm.html#v:e"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Alarm",
          "name": "earthquake",
          "package": "probability",
          "signature": "Bool",
          "source": "src/Numeric-Probability-Example-Alarm.html#Burglary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Alarm",
          "module": "Numeric.Probability.Example.Alarm",
          "name": "earthquake",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Alarm.html#v:earthquake"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Alarm",
          "name": "flp",
          "package": "probability",
          "signature": "Probability -\u003e PBool",
          "source": "src/Numeric-Probability-Example-Alarm.html#flp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Alarm",
          "module": "Numeric.Probability.Example.Alarm",
          "name": "flp",
          "normalized": "Probability-\u003ePBool",
          "package": "probability",
          "signature": "Probability-\u003ePBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Alarm.html#v:flp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econditional probability of john calling given alarm\n\u003c/p\u003e",
          "module": "Numeric.Probability.Example.Alarm",
          "name": "j",
          "package": "probability",
          "signature": "Bool -\u003e PBool",
          "source": "src/Numeric-Probability-Example-Alarm.html#j",
          "type": "function"
        },
        "index": {
          "description": "conditional probability of john calling given alarm",
          "hierarchy": "Numeric Probability Example Alarm",
          "module": "Numeric.Probability.Example.Alarm",
          "name": "j",
          "normalized": "Bool-\u003ePBool",
          "package": "probability",
          "signature": "Bool-\u003ePBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Alarm.html#v:j"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Alarm",
          "name": "john",
          "package": "probability",
          "signature": "Bool",
          "source": "src/Numeric-Probability-Example-Alarm.html#Burglary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Alarm",
          "module": "Numeric.Probability.Example.Alarm",
          "name": "john",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Alarm.html#v:john"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econditional probability of mary calling given alarm\n\u003c/p\u003e",
          "module": "Numeric.Probability.Example.Alarm",
          "name": "m",
          "package": "probability",
          "signature": "Bool -\u003e PBool",
          "source": "src/Numeric-Probability-Example-Alarm.html#m",
          "type": "function"
        },
        "index": {
          "description": "conditional probability of mary calling given alarm",
          "hierarchy": "Numeric Probability Example Alarm",
          "module": "Numeric.Probability.Example.Alarm",
          "name": "m",
          "normalized": "Bool-\u003ePBool",
          "package": "probability",
          "signature": "Bool-\u003ePBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Alarm.html#v:m"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Alarm",
          "name": "mary",
          "package": "probability",
          "signature": "Bool",
          "source": "src/Numeric-Probability-Example-Alarm.html#Burglary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Alarm",
          "module": "Numeric.Probability.Example.Alarm",
          "name": "mary",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Alarm.html#v:mary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewhat is the probability that mary calls given that john calls?\n\u003c/p\u003e",
          "module": "Numeric.Probability.Example.Alarm",
          "name": "pmj",
          "package": "probability",
          "signature": "Probability",
          "source": "src/Numeric-Probability-Example-Alarm.html#pmj",
          "type": "function"
        },
        "index": {
          "description": "what is the probability that mary calls given that john calls",
          "hierarchy": "Numeric Probability Example Alarm",
          "module": "Numeric.Probability.Example.Alarm",
          "name": "pmj",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Alarm.html#v:pmj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Barber",
          "name": "Barber",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-Barber.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Barber",
          "module": "Numeric.Probability.Example.Barber",
          "name": "Barber",
          "package": "probability",
          "partial": "Barber",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Barber.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Barber",
          "name": "Category",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-Barber.html#Category",
          "type": "data"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Barber",
          "module": "Numeric.Probability.Example.Barber",
          "name": "Category",
          "package": "probability",
          "partial": "Category",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Barber.html#t:Category"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Barber",
          "name": "FourToTen",
          "package": "probability",
          "signature": "FourToTen",
          "source": "src/Numeric-Probability-Example-Barber.html#Category",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Barber",
          "module": "Numeric.Probability.Example.Barber",
          "name": "FourToTen",
          "package": "probability",
          "partial": "Four To Ten",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Barber.html#v:FourToTen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Barber",
          "name": "MoreThanTen",
          "package": "probability",
          "signature": "MoreThanTen",
          "source": "src/Numeric-Probability-Example-Barber.html#Category",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Barber",
          "module": "Numeric.Probability.Example.Barber",
          "name": "MoreThanTen",
          "package": "probability",
          "partial": "More Than Ten",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Barber.html#v:MoreThanTen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Barber",
          "name": "ThreeOrLess",
          "package": "probability",
          "signature": "ThreeOrLess",
          "source": "src/Numeric-Probability-Example-Barber.html#Category",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Barber",
          "module": "Numeric.Probability.Example.Barber",
          "name": "ThreeOrLess",
          "package": "probability",
          "partial": "Three Or Less",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Barber.html#v:ThreeOrLess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Barber",
          "name": "barberEvent",
          "package": "probability",
          "signature": "((), (Dist Time, Time -\u003e Dist Time))",
          "source": "src/Numeric-Probability-Example-Barber.html#barberEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Barber",
          "module": "Numeric.Probability.Example.Barber",
          "name": "barberEvent",
          "normalized": "((),(Dist Time,Time-\u003eDist Time))",
          "package": "probability",
          "partial": "Event",
          "signature": "((),(Dist Time,Time-\u003eDist Time))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Barber.html#v:barberEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Barber",
          "name": "barberEvents",
          "package": "probability",
          "signature": "[((), (Dist Time, Time -\u003e Dist Time))]",
          "source": "src/Numeric-Probability-Example-Barber.html#barberEvents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Barber",
          "module": "Numeric.Probability.Example.Barber",
          "name": "barberEvents",
          "normalized": "[((),(Dist Time,Time-\u003eDist Time))]",
          "package": "probability",
          "partial": "Events",
          "signature": "[((),(Dist Time,Time-\u003eDist Time))]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Barber.html#v:barberEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eavg barber idle time\n\u003c/p\u003e",
          "module": "Numeric.Probability.Example.Barber",
          "name": "barberIdle",
          "package": "probability",
          "signature": "RDist String",
          "source": "src/Numeric-Probability-Example-Barber.html#barberIdle",
          "type": "function"
        },
        "index": {
          "description": "avg barber idle time",
          "hierarchy": "Numeric Probability Example Barber",
          "module": "Numeric.Probability.Example.Barber",
          "name": "barberIdle",
          "package": "probability",
          "partial": "Idle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Barber.html#v:barberIdle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Barber",
          "name": "barberSystem",
          "package": "probability",
          "signature": "(System () -\u003e b) -\u003e RDist b",
          "source": "src/Numeric-Probability-Example-Barber.html#barberSystem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Barber",
          "module": "Numeric.Probability.Example.Barber",
          "name": "barberSystem",
          "normalized": "(System()-\u003ea)-\u003eRDist a",
          "package": "probability",
          "partial": "System",
          "signature": "(System()-\u003eb)-\u003eRDist b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Barber.html#v:barberSystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Barber",
          "name": "barbers",
          "package": "probability",
          "signature": "Int",
          "source": "src/Numeric-Probability-Example-Barber.html#barbers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Barber",
          "module": "Numeric.Probability.Example.Barber",
          "name": "barbers",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Barber.html#v:barbers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Barber",
          "name": "cat",
          "package": "probability",
          "signature": "Time -\u003e Category",
          "source": "src/Numeric-Probability-Example-Barber.html#cat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Barber",
          "module": "Numeric.Probability.Example.Barber",
          "name": "cat",
          "normalized": "Time-\u003eCategory",
          "package": "probability",
          "signature": "Time-\u003eCategory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Barber.html#v:cat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Barber",
          "name": "custServ",
          "package": "probability",
          "signature": "Dist Time",
          "source": "src/Numeric-Probability-Example-Barber.html#custServ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Barber",
          "module": "Numeric.Probability.Example.Barber",
          "name": "custServ",
          "package": "probability",
          "partial": "Serv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Barber.html#v:custServ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eavg customer waiting time (unserved customers)\n\u003c/p\u003e",
          "module": "Numeric.Probability.Example.Barber",
          "name": "customerWait",
          "package": "probability",
          "signature": "RDist Category",
          "source": "src/Numeric-Probability-Example-Barber.html#customerWait",
          "type": "function"
        },
        "index": {
          "description": "avg customer waiting time unserved customers",
          "hierarchy": "Numeric Probability Example Barber",
          "module": "Numeric.Probability.Example.Barber",
          "name": "customerWait",
          "package": "probability",
          "partial": "Wait",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Barber.html#v:customerWait"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Barber",
          "name": "customers",
          "package": "probability",
          "signature": "Int",
          "source": "src/Numeric-Probability-Example-Barber.html#customers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Barber",
          "module": "Numeric.Probability.Example.Barber",
          "name": "customers",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Barber.html#v:customers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Barber",
          "name": "nextCust",
          "package": "probability",
          "signature": "Trans Time",
          "source": "src/Numeric-Probability-Example-Barber.html#nextCust",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Barber",
          "module": "Numeric.Probability.Example.Barber",
          "name": "nextCust",
          "package": "probability",
          "partial": "Cust",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Barber.html#v:nextCust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Barber",
          "name": "perc",
          "package": "probability",
          "signature": "Float -\u003e String",
          "source": "src/Numeric-Probability-Example-Barber.html#perc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Barber",
          "module": "Numeric.Probability.Example.Barber",
          "name": "perc",
          "normalized": "Float-\u003eString",
          "package": "probability",
          "signature": "Float-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Barber.html#v:perc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Barber",
          "name": "runs",
          "package": "probability",
          "signature": "Int",
          "source": "src/Numeric-Probability-Example-Barber.html#runs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Barber",
          "module": "Numeric.Probability.Example.Barber",
          "name": "runs",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Barber.html#v:runs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eApproach: model a node with k predecessors as a function with k\n          parameters\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Probability.Example.Bayesian",
          "name": "Bayesian",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-Bayesian.html",
          "type": "module"
        },
        "index": {
          "description": "Approach model node with predecessors as function with parameters",
          "hierarchy": "Numeric Probability Example Bayesian",
          "module": "Numeric.Probability.Example.Bayesian",
          "name": "Bayesian",
          "package": "probability",
          "partial": "Bayesian",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Bayesian.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Bayesian",
          "name": "Dist",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-Bayesian.html#Dist",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Bayesian",
          "module": "Numeric.Probability.Example.Bayesian",
          "name": "Dist",
          "package": "probability",
          "partial": "Dist",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Bayesian.html#t:Dist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTwo possible causes for one effect\n\u003c/p\u003e",
          "module": "Numeric.Probability.Example.Bayesian",
          "name": "Nodes",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-Bayesian.html#Nodes",
          "type": "data"
        },
        "index": {
          "description": "Two possible causes for one effect",
          "hierarchy": "Numeric Probability Example Bayesian",
          "module": "Numeric.Probability.Example.Bayesian",
          "name": "Nodes",
          "package": "probability",
          "partial": "Nodes",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Bayesian.html#t:Nodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Bayesian",
          "name": "PState",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-Bayesian.html#PState",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Bayesian",
          "module": "Numeric.Probability.Example.Bayesian",
          "name": "PState",
          "package": "probability",
          "partial": "PState",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Bayesian.html#t:PState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Bayesian",
          "name": "Probability",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-Bayesian.html#Probability",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Bayesian",
          "module": "Numeric.Probability.Example.Bayesian",
          "name": "Probability",
          "package": "probability",
          "partial": "Probability",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Bayesian.html#t:Probability"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Bayesian",
          "name": "SPred",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-Bayesian.html#SPred",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Bayesian",
          "module": "Numeric.Probability.Example.Bayesian",
          "name": "SPred",
          "package": "probability",
          "partial": "SPred",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Bayesian.html#t:SPred"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Bayesian",
          "name": "STrans",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-Bayesian.html#STrans",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Bayesian",
          "module": "Numeric.Probability.Example.Bayesian",
          "name": "STrans",
          "package": "probability",
          "partial": "STrans",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Bayesian.html#t:STrans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Bayesian",
          "name": "State",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-Bayesian.html#State",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Bayesian",
          "module": "Numeric.Probability.Example.Bayesian",
          "name": "State",
          "package": "probability",
          "partial": "State",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Bayesian.html#t:State"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Bayesian",
          "name": "A",
          "package": "probability",
          "signature": "A",
          "source": "src/Numeric-Probability-Example-Bayesian.html#Nodes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Bayesian",
          "module": "Numeric.Probability.Example.Bayesian",
          "name": "A",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Bayesian.html#v:A"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Bayesian",
          "name": "B",
          "package": "probability",
          "signature": "B",
          "source": "src/Numeric-Probability-Example-Bayesian.html#Nodes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Bayesian",
          "module": "Numeric.Probability.Example.Bayesian",
          "name": "B",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Bayesian.html#v:B"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Bayesian",
          "name": "E",
          "package": "probability",
          "signature": "E",
          "source": "src/Numeric-Probability-Example-Bayesian.html#Nodes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Bayesian",
          "module": "Numeric.Probability.Example.Bayesian",
          "name": "E",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Bayesian.html#v:E"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Bayesian",
          "name": "aE",
          "package": "probability",
          "signature": "Probability",
          "source": "src/Numeric-Probability-Example-Bayesian.html#e",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Bayesian",
          "module": "Numeric.Probability.Example.Bayesian",
          "name": "aE",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Bayesian.html#v:aE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Bayesian",
          "name": "bE",
          "package": "probability",
          "signature": "Probability",
          "source": "src/Numeric-Probability-Example-Bayesian.html#e",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Bayesian",
          "module": "Numeric.Probability.Example.Bayesian",
          "name": "bE",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Bayesian.html#v:bE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Bayesian",
          "name": "bin",
          "package": "probability",
          "signature": "a -\u003e a -\u003e Probability -\u003e Probability -\u003e Probability -\u003e Probability -\u003e a -\u003e STrans a",
          "source": "src/Numeric-Probability-Example-Bayesian.html#bin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Bayesian",
          "module": "Numeric.Probability.Example.Bayesian",
          "name": "bin",
          "normalized": "a-\u003ea-\u003eProbability-\u003eProbability-\u003eProbability-\u003eProbability-\u003ea-\u003eSTrans a",
          "package": "probability",
          "signature": "a-\u003ea-\u003eProbability-\u003eProbability-\u003eProbability-\u003eProbability-\u003ea-\u003eSTrans a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Bayesian.html#v:bin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Bayesian",
          "name": "e",
          "package": "probability",
          "signature": "Probability",
          "source": "src/Numeric-Probability-Example-Bayesian.html#e",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Bayesian",
          "module": "Numeric.Probability.Example.Bayesian",
          "name": "e",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Bayesian.html#v:e"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Bayesian",
          "name": "event",
          "package": "probability",
          "signature": "Probability -\u003e a -\u003e STrans a",
          "source": "src/Numeric-Probability-Example-Bayesian.html#event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Bayesian",
          "module": "Numeric.Probability.Example.Bayesian",
          "name": "event",
          "normalized": "Probability-\u003ea-\u003eSTrans a",
          "package": "probability",
          "signature": "Probability-\u003ea-\u003eSTrans a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Bayesian.html#v:event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Bayesian",
          "name": "g",
          "package": "probability",
          "signature": "PState Nodes",
          "source": "src/Numeric-Probability-Example-Bayesian.html#g",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Bayesian",
          "module": "Numeric.Probability.Example.Bayesian",
          "name": "g",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Bayesian.html#v:g"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Bayesian",
          "name": "happens",
          "package": "probability",
          "signature": "SPred a",
          "source": "src/Numeric-Probability-Example-Bayesian.html#happens",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Bayesian",
          "module": "Numeric.Probability.Example.Bayesian",
          "name": "happens",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Bayesian.html#v:happens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Bayesian",
          "name": "network",
          "package": "probability",
          "signature": "[STrans a] -\u003e PState a",
          "source": "src/Numeric-Probability-Example-Bayesian.html#network",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Bayesian",
          "module": "Numeric.Probability.Example.Bayesian",
          "name": "network",
          "normalized": "[STrans a]-\u003ePState a",
          "package": "probability",
          "signature": "[STrans a]-\u003ePState a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Bayesian.html#v:network"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Bayesian",
          "name": "source",
          "package": "probability",
          "signature": "Probability -\u003e a -\u003e STrans a",
          "source": "src/Numeric-Probability-Example-Bayesian.html#source",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Bayesian",
          "module": "Numeric.Probability.Example.Bayesian",
          "name": "source",
          "normalized": "Probability-\u003ea-\u003eSTrans a",
          "package": "probability",
          "signature": "Probability-\u003ea-\u003eSTrans a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Bayesian.html#v:source"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConsider a family of two children.  Given that there is a boy in the family,\nwhat is the probability that there are two boys in the family?\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Probability.Example.Boys",
          "name": "Boys",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-Boys.html",
          "type": "module"
        },
        "index": {
          "description": "Consider family of two children Given that there is boy in the family what is the probability that there are two boys in the family",
          "hierarchy": "Numeric Probability Example Boys",
          "module": "Numeric.Probability.Example.Boys",
          "name": "Boys",
          "package": "probability",
          "partial": "Boys",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Boys.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Boys",
          "name": "Child",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-Boys.html#Child",
          "type": "data"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Boys",
          "module": "Numeric.Probability.Example.Boys",
          "name": "Child",
          "package": "probability",
          "partial": "Child",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Boys.html#t:Child"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Boys",
          "name": "Dist",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-Boys.html#Dist",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Boys",
          "module": "Numeric.Probability.Example.Boys",
          "name": "Dist",
          "package": "probability",
          "partial": "Dist",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Boys.html#t:Dist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Boys",
          "name": "Family",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-Boys.html#Family",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Boys",
          "module": "Numeric.Probability.Example.Boys",
          "name": "Family",
          "package": "probability",
          "partial": "Family",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Boys.html#t:Family"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Boys",
          "name": "Probability",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-Boys.html#Probability",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Boys",
          "module": "Numeric.Probability.Example.Boys",
          "name": "Probability",
          "package": "probability",
          "partial": "Probability",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Boys.html#t:Probability"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Boys",
          "name": "Boy",
          "package": "probability",
          "signature": "Boy",
          "source": "src/Numeric-Probability-Example-Boys.html#Child",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Boys",
          "module": "Numeric.Probability.Example.Boys",
          "name": "Boy",
          "package": "probability",
          "partial": "Boy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Boys.html#v:Boy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Boys",
          "name": "Girl",
          "package": "probability",
          "signature": "Girl",
          "source": "src/Numeric-Probability-Example-Boys.html#Child",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Boys",
          "module": "Numeric.Probability.Example.Boys",
          "name": "Girl",
          "package": "probability",
          "partial": "Girl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Boys.html#v:Girl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Boys",
          "name": "allBoys",
          "package": "probability",
          "signature": "Event Family",
          "source": "src/Numeric-Probability-Example-Boys.html#allBoys",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Boys",
          "module": "Numeric.Probability.Example.Boys",
          "name": "allBoys",
          "package": "probability",
          "partial": "Boys",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Boys.html#v:allBoys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Boys",
          "name": "birth",
          "package": "probability",
          "signature": "Dist Child",
          "source": "src/Numeric-Probability-Example-Boys.html#birth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Boys",
          "module": "Numeric.Probability.Example.Boys",
          "name": "birth",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Boys.html#v:birth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Boys",
          "name": "countBoy",
          "package": "probability",
          "signature": "Child -\u003e Int",
          "source": "src/Numeric-Probability-Example-Boys.html#countBoy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Boys",
          "module": "Numeric.Probability.Example.Boys",
          "name": "countBoy",
          "normalized": "Child-\u003eInt",
          "package": "probability",
          "partial": "Boy",
          "signature": "Child-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Boys.html#v:countBoy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Boys",
          "name": "countBoys",
          "package": "probability",
          "signature": "Family -\u003e Int",
          "source": "src/Numeric-Probability-Example-Boys.html#countBoys",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Boys",
          "module": "Numeric.Probability.Example.Boys",
          "name": "countBoys",
          "normalized": "Family-\u003eInt",
          "package": "probability",
          "partial": "Boys",
          "signature": "Family-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Boys.html#v:countBoys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Boys",
          "name": "existsBoy",
          "package": "probability",
          "signature": "Event Family",
          "source": "src/Numeric-Probability-Example-Boys.html#existsBoy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Boys",
          "module": "Numeric.Probability.Example.Boys",
          "name": "existsBoy",
          "package": "probability",
          "partial": "Boy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Boys.html#v:existsBoy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Boys",
          "name": "family",
          "package": "probability",
          "signature": "Dist Family",
          "source": "src/Numeric-Probability-Example-Boys.html#family",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Boys",
          "module": "Numeric.Probability.Example.Boys",
          "name": "family",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Boys.html#v:family"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Boys",
          "name": "familyWithBoy",
          "package": "probability",
          "signature": "Dist Family",
          "source": "src/Numeric-Probability-Example-Boys.html#familyWithBoy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Boys",
          "module": "Numeric.Probability.Example.Boys",
          "name": "familyWithBoy",
          "package": "probability",
          "partial": "With Boy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Boys.html#v:familyWithBoy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Boys",
          "name": "numBoys",
          "package": "probability",
          "signature": "Dist Int",
          "source": "src/Numeric-Probability-Example-Boys.html#numBoys",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Boys",
          "module": "Numeric.Probability.Example.Boys",
          "name": "numBoys",
          "package": "probability",
          "partial": "Boys",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Boys.html#v:numBoys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Boys",
          "name": "twoBoys",
          "package": "probability",
          "signature": "Probability",
          "source": "src/Numeric-Probability-Example-Boys.html#twoBoys",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Boys",
          "module": "Numeric.Probability.Example.Boys",
          "name": "twoBoys",
          "package": "probability",
          "partial": "Boys",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Boys.html#v:twoBoys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Collection",
          "name": "Collection",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-Collection.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Collection",
          "module": "Numeric.Probability.Example.Collection",
          "name": "Collection",
          "package": "probability",
          "partial": "Collection",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Collection",
          "name": "Card",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-Collection.html#Card",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Collection",
          "module": "Numeric.Probability.Example.Collection",
          "name": "Card",
          "package": "probability",
          "partial": "Card",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#t:Card"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Collection",
          "name": "Collection",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-Collection.html#Collection",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Collection",
          "module": "Numeric.Probability.Example.Collection",
          "name": "Collection",
          "package": "probability",
          "partial": "Collection",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#t:Collection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Collection",
          "name": "Marble",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-Collection.html#Marble",
          "type": "data"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Collection",
          "module": "Numeric.Probability.Example.Collection",
          "name": "Marble",
          "package": "probability",
          "partial": "Marble",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#t:Marble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Collection",
          "name": "Probability",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-Collection.html#Probability",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Collection",
          "module": "Numeric.Probability.Example.Collection",
          "name": "Probability",
          "package": "probability",
          "partial": "Probability",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#t:Probability"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Collection",
          "name": "Rank",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-Collection.html#Rank",
          "type": "data"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Collection",
          "module": "Numeric.Probability.Example.Collection",
          "name": "Rank",
          "package": "probability",
          "partial": "Rank",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#t:Rank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Collection",
          "name": "Suit",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-Collection.html#Suit",
          "type": "data"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Collection",
          "module": "Numeric.Probability.Example.Collection",
          "name": "Suit",
          "package": "probability",
          "partial": "Suit",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#t:Suit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Collection",
          "name": "Ace",
          "package": "probability",
          "signature": "Ace",
          "source": "src/Numeric-Probability-Example-Collection.html#Rank",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Collection",
          "module": "Numeric.Probability.Example.Collection",
          "name": "Ace",
          "package": "probability",
          "partial": "Ace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:Ace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Collection",
          "name": "B",
          "package": "probability",
          "signature": "B",
          "source": "src/Numeric-Probability-Example-Collection.html#Marble",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Collection",
          "module": "Numeric.Probability.Example.Collection",
          "name": "B",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:B"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Collection",
          "name": "Club",
          "package": "probability",
          "signature": "Club",
          "source": "src/Numeric-Probability-Example-Collection.html#Suit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Collection",
          "module": "Numeric.Probability.Example.Collection",
          "name": "Club",
          "package": "probability",
          "partial": "Club",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:Club"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Collection",
          "name": "Diamond",
          "package": "probability",
          "signature": "Diamond",
          "source": "src/Numeric-Probability-Example-Collection.html#Suit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Collection",
          "module": "Numeric.Probability.Example.Collection",
          "name": "Diamond",
          "package": "probability",
          "partial": "Diamond",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:Diamond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Collection",
          "name": "G",
          "package": "probability",
          "signature": "G",
          "source": "src/Numeric-Probability-Example-Collection.html#Marble",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Collection",
          "module": "Numeric.Probability.Example.Collection",
          "name": "G",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:G"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Collection",
          "name": "Heart",
          "package": "probability",
          "signature": "Heart",
          "source": "src/Numeric-Probability-Example-Collection.html#Suit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Collection",
          "module": "Numeric.Probability.Example.Collection",
          "name": "Heart",
          "package": "probability",
          "partial": "Heart",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:Heart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Collection",
          "name": "Jack",
          "package": "probability",
          "signature": "Jack",
          "source": "src/Numeric-Probability-Example-Collection.html#Rank",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Collection",
          "module": "Numeric.Probability.Example.Collection",
          "name": "Jack",
          "package": "probability",
          "partial": "Jack",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:Jack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Collection",
          "name": "King",
          "package": "probability",
          "signature": "King",
          "source": "src/Numeric-Probability-Example-Collection.html#Rank",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Collection",
          "module": "Numeric.Probability.Example.Collection",
          "name": "King",
          "package": "probability",
          "partial": "King",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:King"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Collection",
          "name": "Plain",
          "package": "probability",
          "signature": "Plain Int",
          "source": "src/Numeric-Probability-Example-Collection.html#Rank",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Collection",
          "module": "Numeric.Probability.Example.Collection",
          "name": "Plain",
          "package": "probability",
          "partial": "Plain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:Plain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Collection",
          "name": "Queen",
          "package": "probability",
          "signature": "Queen",
          "source": "src/Numeric-Probability-Example-Collection.html#Rank",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Collection",
          "module": "Numeric.Probability.Example.Collection",
          "name": "Queen",
          "package": "probability",
          "partial": "Queen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:Queen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Collection",
          "name": "R",
          "package": "probability",
          "signature": "R",
          "source": "src/Numeric-Probability-Example-Collection.html#Marble",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Collection",
          "module": "Numeric.Probability.Example.Collection",
          "name": "R",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Collection",
          "name": "Spade",
          "package": "probability",
          "signature": "Spade",
          "source": "src/Numeric-Probability-Example-Collection.html#Suit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Collection",
          "module": "Numeric.Probability.Example.Collection",
          "name": "Spade",
          "package": "probability",
          "partial": "Spade",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:Spade"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Collection",
          "name": "bucket",
          "package": "probability",
          "signature": "Collection Marble",
          "source": "src/Numeric-Probability-Example-Collection.html#bucket",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Collection",
          "module": "Numeric.Probability.Example.Collection",
          "name": "bucket",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:bucket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Collection",
          "name": "chanceWin",
          "package": "probability",
          "signature": "T (T prob Bool)",
          "source": "src/Numeric-Probability-Example-Collection.html#chanceWin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Collection",
          "module": "Numeric.Probability.Example.Collection",
          "name": "chanceWin",
          "package": "probability",
          "partial": "Win",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:chanceWin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Collection",
          "name": "deck",
          "package": "probability",
          "signature": "Collection Card",
          "source": "src/Numeric-Probability-Example-Collection.html#deck",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Collection",
          "module": "Numeric.Probability.Example.Collection",
          "name": "deck",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:deck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Collection",
          "name": "draw",
          "package": "probability",
          "signature": "([Card], Collection Card) -\u003e T prob ([Card], Collection Card)",
          "source": "src/Numeric-Probability-Example-Collection.html#draw",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Collection",
          "module": "Numeric.Probability.Example.Collection",
          "name": "draw",
          "normalized": "([Card],Collection Card)-\u003eT a([Card],Collection Card)",
          "package": "probability",
          "signature": "([Card],Collection Card)-\u003eT prob([Card],Collection Card)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:draw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Collection",
          "name": "drawF",
          "package": "probability",
          "signature": "([Card], Collection Card) -\u003e Dist ([Card], Collection Card)",
          "source": "src/Numeric-Probability-Example-Collection.html#drawF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Collection",
          "module": "Numeric.Probability.Example.Collection",
          "name": "drawF",
          "normalized": "([Card],Collection Card)-\u003eDist([Card],Collection Card)",
          "package": "probability",
          "signature": "([Card],Collection Card)-\u003eDist([Card],Collection Card)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:drawF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Collection",
          "name": "drawTo16",
          "package": "probability",
          "signature": "T ([Card], Collection Card)",
          "source": "src/Numeric-Probability-Example-Collection.html#drawTo16",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Collection",
          "module": "Numeric.Probability.Example.Collection",
          "name": "drawTo16",
          "normalized": "T([Card],Collection Card)",
          "package": "probability",
          "partial": "To",
          "signature": "T([Card],Collection Card)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:drawTo16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Collection",
          "name": "faces",
          "package": "probability",
          "signature": "[Rank]",
          "source": "src/Numeric-Probability-Example-Collection.html#faces",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Collection",
          "module": "Numeric.Probability.Example.Collection",
          "name": "faces",
          "normalized": "[Rank]",
          "package": "probability",
          "signature": "[Rank]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:faces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Collection",
          "name": "isFace",
          "package": "probability",
          "signature": "Card -\u003e Bool",
          "source": "src/Numeric-Probability-Example-Collection.html#isFace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Collection",
          "module": "Numeric.Probability.Example.Collection",
          "name": "isFace",
          "normalized": "Card-\u003eBool",
          "package": "probability",
          "partial": "Face",
          "signature": "Card-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:isFace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Collection",
          "name": "isPlain",
          "package": "probability",
          "signature": "Card -\u003e Bool",
          "source": "src/Numeric-Probability-Example-Collection.html#isPlain",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Collection",
          "module": "Numeric.Probability.Example.Collection",
          "name": "isPlain",
          "normalized": "Card-\u003eBool",
          "package": "probability",
          "partial": "Plain",
          "signature": "Card-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:isPlain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Collection",
          "name": "jar",
          "package": "probability",
          "signature": "Collection Marble",
          "source": "src/Numeric-Probability-Example-Collection.html#jar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Collection",
          "module": "Numeric.Probability.Example.Collection",
          "name": "jar",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:jar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Collection",
          "name": "pRG",
          "package": "probability",
          "signature": "Probability",
          "source": "src/Numeric-Probability-Example-Collection.html#pRG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Collection",
          "module": "Numeric.Probability.Example.Collection",
          "name": "pRG",
          "package": "probability",
          "partial": "RG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:pRG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Collection",
          "name": "pRGB",
          "package": "probability",
          "signature": "Probability",
          "source": "src/Numeric-Probability-Example-Collection.html#pRGB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Collection",
          "module": "Numeric.Probability.Example.Collection",
          "name": "pRGB",
          "package": "probability",
          "partial": "RGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:pRGB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Collection",
          "name": "plains",
          "package": "probability",
          "signature": "[Rank]",
          "source": "src/Numeric-Probability-Example-Collection.html#plains",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Collection",
          "module": "Numeric.Probability.Example.Collection",
          "name": "plains",
          "normalized": "[Rank]",
          "package": "probability",
          "signature": "[Rank]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:plains"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Collection",
          "name": "ranks",
          "package": "probability",
          "signature": "[Rank]",
          "source": "src/Numeric-Probability-Example-Collection.html#ranks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Collection",
          "module": "Numeric.Probability.Example.Collection",
          "name": "ranks",
          "normalized": "[Rank]",
          "package": "probability",
          "signature": "[Rank]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:ranks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Collection",
          "name": "select",
          "package": "probability",
          "signature": "Int -\u003e Collection a -\u003e T prob [a]",
          "source": "src/Numeric-Probability-Example-Collection.html#select",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Collection",
          "module": "Numeric.Probability.Example.Collection",
          "name": "select",
          "normalized": "Int-\u003eCollection a-\u003eT b[a]",
          "package": "probability",
          "signature": "Int-\u003eCollection a-\u003eT prob[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Collection",
          "name": "select1",
          "package": "probability",
          "signature": "Collection a -\u003e T prob a",
          "source": "src/Numeric-Probability-Example-Collection.html#select1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Collection",
          "module": "Numeric.Probability.Example.Collection",
          "name": "select1",
          "normalized": "Collection a-\u003eT b a",
          "package": "probability",
          "signature": "Collection a-\u003eT prob a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:select1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Collection",
          "name": "select2",
          "package": "probability",
          "signature": "Collection a -\u003e T prob (a, a)",
          "source": "src/Numeric-Probability-Example-Collection.html#select2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Collection",
          "module": "Numeric.Probability.Example.Collection",
          "name": "select2",
          "normalized": "Collection a-\u003eT b(a,a)",
          "package": "probability",
          "signature": "Collection a-\u003eT prob(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:select2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Collection",
          "name": "selectOne",
          "package": "probability",
          "signature": "StateT (Collection a) (T prob) a",
          "source": "src/Numeric-Probability-Example-Collection.html#selectOne",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Collection",
          "module": "Numeric.Probability.Example.Collection",
          "name": "selectOne",
          "package": "probability",
          "partial": "One",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:selectOne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Collection",
          "name": "suits",
          "package": "probability",
          "signature": "[Suit]",
          "source": "src/Numeric-Probability-Example-Collection.html#suits",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Collection",
          "module": "Numeric.Probability.Example.Collection",
          "name": "suits",
          "normalized": "[Suit]",
          "package": "probability",
          "signature": "[Suit]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:suits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Collection",
          "name": "totalValue",
          "package": "probability",
          "signature": "Collection Card -\u003e Int",
          "source": "src/Numeric-Probability-Example-Collection.html#totalValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Collection",
          "module": "Numeric.Probability.Example.Collection",
          "name": "totalValue",
          "normalized": "Collection Card-\u003eInt",
          "package": "probability",
          "partial": "Value",
          "signature": "Collection Card-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:totalValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emini-blackjack:\ndraw 2 cards, and if value is less than 14, continue drawing\nuntil value equals or exceeds 14.  if values exceeds 21,\nyou lose, otherwise you win.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Example.Collection",
          "name": "value",
          "package": "probability",
          "signature": "Card -\u003e Int",
          "source": "src/Numeric-Probability-Example-Collection.html#value",
          "type": "function"
        },
        "index": {
          "description": "mini-blackjack draw cards and if value is less than continue drawing until value equals or exceeds if values exceeds you lose otherwise you win",
          "hierarchy": "Numeric Probability Example Collection",
          "module": "Numeric.Probability.Example.Collection",
          "name": "value",
          "normalized": "Card-\u003eInt",
          "package": "probability",
          "signature": "Card-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Collection",
          "name": "win",
          "package": "probability",
          "signature": "([Card], b) -\u003e Bool",
          "source": "src/Numeric-Probability-Example-Collection.html#win",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Collection",
          "module": "Numeric.Probability.Example.Collection",
          "name": "win",
          "normalized": "([Card],a)-\u003eBool",
          "package": "probability",
          "signature": "([Card],b)-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Collection.html#v:win"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eYou take part in a screening test for a disease\nthat you have with a probability \u003ccode\u003e\u003ca\u003epDisease\u003c/a\u003e\u003c/code\u003e.\nThe test can fail in two ways:\nIf you are ill,\nthe test says with probability \u003ccode\u003e\u003ca\u003epFalseNegative\u003c/a\u003e\u003c/code\u003e that you are healthy.\nIf you are healthy,\nit says with probability \u003ccode\u003e\u003ca\u003epFalsePositive\u003c/a\u003e\u003c/code\u003e that you are ill.\n\u003c/p\u003e\u003cp\u003eNow consider the test is positive -\nwhat is the probability that you are indeed ill?\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Probability.Example.Diagnosis",
          "name": "Diagnosis",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-Diagnosis.html",
          "type": "module"
        },
        "index": {
          "description": "You take part in screening test for disease that you have with probability pDisease The test can fail in two ways If you are ill the test says with probability pFalseNegative that you are healthy If you are healthy it says with probability pFalsePositive that you are ill Now consider the test is positive what is the probability that you are indeed ill",
          "hierarchy": "Numeric Probability Example Diagnosis",
          "module": "Numeric.Probability.Example.Diagnosis",
          "name": "Diagnosis",
          "package": "probability",
          "partial": "Diagnosis",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Diagnosis.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Diagnosis",
          "name": "Dist",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-Diagnosis.html#Dist",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Diagnosis",
          "module": "Numeric.Probability.Example.Diagnosis",
          "name": "Dist",
          "package": "probability",
          "partial": "Dist",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Diagnosis.html#t:Dist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Diagnosis",
          "name": "Finding",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-Diagnosis.html#Finding",
          "type": "data"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Diagnosis",
          "module": "Numeric.Probability.Example.Diagnosis",
          "name": "Finding",
          "package": "probability",
          "partial": "Finding",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Diagnosis.html#t:Finding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Diagnosis",
          "name": "Probability",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-Diagnosis.html#Probability",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Diagnosis",
          "module": "Numeric.Probability.Example.Diagnosis",
          "name": "Probability",
          "package": "probability",
          "partial": "Probability",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Diagnosis.html#t:Probability"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Diagnosis",
          "name": "State",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-Diagnosis.html#State",
          "type": "data"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Diagnosis",
          "module": "Numeric.Probability.Example.Diagnosis",
          "name": "State",
          "package": "probability",
          "partial": "State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Diagnosis.html#t:State"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Diagnosis",
          "name": "Healthy",
          "package": "probability",
          "signature": "Healthy",
          "source": "src/Numeric-Probability-Example-Diagnosis.html#State",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Diagnosis",
          "module": "Numeric.Probability.Example.Diagnosis",
          "name": "Healthy",
          "package": "probability",
          "partial": "Healthy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Diagnosis.html#v:Healthy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Diagnosis",
          "name": "Ill",
          "package": "probability",
          "signature": "Ill",
          "source": "src/Numeric-Probability-Example-Diagnosis.html#State",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Diagnosis",
          "module": "Numeric.Probability.Example.Diagnosis",
          "name": "Ill",
          "package": "probability",
          "partial": "Ill",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Diagnosis.html#v:Ill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Diagnosis",
          "name": "Negative",
          "package": "probability",
          "signature": "Negative",
          "source": "src/Numeric-Probability-Example-Diagnosis.html#Finding",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Diagnosis",
          "module": "Numeric.Probability.Example.Diagnosis",
          "name": "Negative",
          "package": "probability",
          "partial": "Negative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Diagnosis.html#v:Negative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Diagnosis",
          "name": "Positive",
          "package": "probability",
          "signature": "Positive",
          "source": "src/Numeric-Probability-Example-Diagnosis.html#Finding",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Diagnosis",
          "module": "Numeric.Probability.Example.Diagnosis",
          "name": "Positive",
          "package": "probability",
          "partial": "Positive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Diagnosis.html#v:Positive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Diagnosis",
          "name": "dist",
          "package": "probability",
          "signature": "Dist (State, Finding)",
          "source": "src/Numeric-Probability-Example-Diagnosis.html#dist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Diagnosis",
          "module": "Numeric.Probability.Example.Diagnosis",
          "name": "dist",
          "normalized": "Dist(State,Finding)",
          "package": "probability",
          "signature": "Dist(State,Finding)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Diagnosis.html#v:dist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlternative way for computing the distribution.\nIt is usually more efficient because we do not need to switch on the healthy state.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Example.Diagnosis",
          "name": "distAlt",
          "package": "probability",
          "signature": "Dist (State, Finding)",
          "source": "src/Numeric-Probability-Example-Diagnosis.html#distAlt",
          "type": "function"
        },
        "index": {
          "description": "Alternative way for computing the distribution It is usually more efficient because we do not need to switch on the healthy state",
          "hierarchy": "Numeric Probability Example Diagnosis",
          "module": "Numeric.Probability.Example.Diagnosis",
          "name": "distAlt",
          "normalized": "Dist(State,Finding)",
          "package": "probability",
          "partial": "Alt",
          "signature": "Dist(State,Finding)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Diagnosis.html#v:distAlt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Diagnosis",
          "name": "p",
          "package": "probability",
          "signature": "Probability",
          "source": "src/Numeric-Probability-Example-Diagnosis.html#p",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Diagnosis",
          "module": "Numeric.Probability.Example.Diagnosis",
          "name": "p",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Diagnosis.html#v:p"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Diagnosis",
          "name": "pDisease",
          "package": "probability",
          "signature": "Probability",
          "source": "src/Numeric-Probability-Example-Diagnosis.html#pDisease",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Diagnosis",
          "module": "Numeric.Probability.Example.Diagnosis",
          "name": "pDisease",
          "package": "probability",
          "partial": "Disease",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Diagnosis.html#v:pDisease"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Diagnosis",
          "name": "pFalseNegative",
          "package": "probability",
          "signature": "Probability",
          "source": "src/Numeric-Probability-Example-Diagnosis.html#pDisease",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Diagnosis",
          "module": "Numeric.Probability.Example.Diagnosis",
          "name": "pFalseNegative",
          "package": "probability",
          "partial": "False Negative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Diagnosis.html#v:pFalseNegative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Diagnosis",
          "name": "pFalsePositive",
          "package": "probability",
          "signature": "Probability",
          "source": "src/Numeric-Probability-Example-Diagnosis.html#pDisease",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Diagnosis",
          "module": "Numeric.Probability.Example.Diagnosis",
          "name": "pFalsePositive",
          "package": "probability",
          "partial": "False Positive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Diagnosis.html#v:pFalsePositive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Dice",
          "name": "Dice",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-Dice.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Dice",
          "module": "Numeric.Probability.Example.Dice",
          "name": "Dice",
          "package": "probability",
          "partial": "Dice",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Dice.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Dice",
          "name": "Die",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-Dice.html#Die",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Dice",
          "module": "Numeric.Probability.Example.Dice",
          "name": "Die",
          "package": "probability",
          "partial": "Die",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Dice.html#t:Die"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Dice",
          "name": "Dist",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-Dice.html#Dist",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Dice",
          "module": "Numeric.Probability.Example.Dice",
          "name": "Dist",
          "package": "probability",
          "partial": "Dist",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Dice.html#t:Dist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Dice",
          "name": "Probability",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-Dice.html#Probability",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Dice",
          "module": "Numeric.Probability.Example.Dice",
          "name": "Probability",
          "package": "probability",
          "partial": "Probability",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Dice.html#t:Probability"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Dice",
          "name": "addTwo",
          "package": "probability",
          "signature": "Dist Die",
          "source": "src/Numeric-Probability-Example-Dice.html#addTwo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Dice",
          "module": "Numeric.Probability.Example.Dice",
          "name": "addTwo",
          "package": "probability",
          "partial": "Two",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Dice.html#v:addTwo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Dice",
          "name": "dice",
          "package": "probability",
          "signature": "Int -\u003e Dist [Die]",
          "source": "src/Numeric-Probability-Example-Dice.html#dice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Dice",
          "module": "Numeric.Probability.Example.Dice",
          "name": "dice",
          "normalized": "Int-\u003eDist[Die]",
          "package": "probability",
          "signature": "Int-\u003eDist[Die]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Dice.html#v:dice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Dice",
          "name": "die",
          "package": "probability",
          "signature": "Dist Die",
          "source": "src/Numeric-Probability-Example-Dice.html#die",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Dice",
          "module": "Numeric.Probability.Example.Dice",
          "name": "die",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Dice.html#v:die"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Dice",
          "name": "droll",
          "package": "probability",
          "signature": "Dist Die",
          "source": "src/Numeric-Probability-Example-Dice.html#droll",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Dice",
          "module": "Numeric.Probability.Example.Dice",
          "name": "droll",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Dice.html#v:droll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Dice",
          "name": "g3",
          "package": "probability",
          "signature": "Probability",
          "source": "src/Numeric-Probability-Example-Dice.html#g3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Dice",
          "module": "Numeric.Probability.Example.Dice",
          "name": "g3",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Dice.html#v:g3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esixes p n\u003c/code\u003e computes the probability of getting\np sixes (\u003ccode\u003e\u003e1\u003c/code\u003e, \u003ccode\u003e==2\u003c/code\u003e, ...) when rolling n dice\n\u003c/p\u003e",
          "module": "Numeric.Probability.Example.Dice",
          "name": "sixes",
          "package": "probability",
          "signature": "(Int -\u003e Bool) -\u003e Int -\u003e Probability",
          "source": "src/Numeric-Probability-Example-Dice.html#sixes",
          "type": "function"
        },
        "index": {
          "description": "sixes computes the probability of getting sixes when rolling dice",
          "hierarchy": "Numeric Probability Example Dice",
          "module": "Numeric.Probability.Example.Dice",
          "name": "sixes",
          "normalized": "(Int-\u003eBool)-\u003eInt-\u003eProbability",
          "package": "probability",
          "signature": "(Int-\u003eBool)-\u003eInt-\u003eProbability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Dice.html#v:sixes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eproduct of independent distributions\n\u003c/p\u003e",
          "module": "Numeric.Probability.Example.Dice",
          "name": "twoDice",
          "package": "probability",
          "signature": "Dist (Die, Die)",
          "source": "src/Numeric-Probability-Example-Dice.html#twoDice",
          "type": "function"
        },
        "index": {
          "description": "product of independent distributions",
          "hierarchy": "Numeric Probability Example Dice",
          "module": "Numeric.Probability.Example.Dice",
          "name": "twoDice",
          "normalized": "Dist(Die,Die)",
          "package": "probability",
          "partial": "Dice",
          "signature": "Dist(Die,Die)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Dice.html#v:twoDice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Dice",
          "name": "twoSixes",
          "package": "probability",
          "signature": "Probability",
          "source": "src/Numeric-Probability-Example-Dice.html#twoSixes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Dice",
          "module": "Numeric.Probability.Example.Dice",
          "name": "twoSixes",
          "package": "probability",
          "partial": "Sixes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Dice.html#v:twoSixes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWe play the following game:\nWe roll a die until we stop or we get three spots.\nIn the first case we own all spots obtained so far,\nin the latter case we own nothing.\n\u003c/p\u003e\u003cp\u003eWhat is the strategy for maximizing the expected score?\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Probability.Example.DiceAccum",
          "name": "DiceAccum",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-DiceAccum.html",
          "type": "module"
        },
        "index": {
          "description": "We play the following game We roll die until we stop or we get three spots In the first case we own all spots obtained so far in the latter case we own nothing What is the strategy for maximizing the expected score",
          "hierarchy": "Numeric Probability Example DiceAccum",
          "module": "Numeric.Probability.Example.DiceAccum",
          "name": "DiceAccum",
          "package": "probability",
          "partial": "Dice Accum",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-DiceAccum.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.DiceAccum",
          "name": "Score",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-DiceAccum.html#Score",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Probability Example DiceAccum",
          "module": "Numeric.Probability.Example.DiceAccum",
          "name": "Score",
          "package": "probability",
          "partial": "Score",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-DiceAccum.html#t:Score"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.DiceAccum",
          "name": "continue",
          "package": "probability",
          "signature": "Score -\u003e Bool",
          "source": "src/Numeric-Probability-Example-DiceAccum.html#continue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example DiceAccum",
          "module": "Numeric.Probability.Example.DiceAccum",
          "name": "continue",
          "normalized": "Score-\u003eBool",
          "package": "probability",
          "signature": "Score-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-DiceAccum.html#v:continue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.DiceAccum",
          "name": "die",
          "package": "probability",
          "signature": "T prob Die",
          "source": "src/Numeric-Probability-Example-DiceAccum.html#die",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example DiceAccum",
          "module": "Numeric.Probability.Example.DiceAccum",
          "name": "die",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-DiceAccum.html#v:die"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edistribution of the scores that are achieved with the optimal strategy\n\u003c/p\u003e",
          "module": "Numeric.Probability.Example.DiceAccum",
          "name": "game",
          "package": "probability",
          "signature": "T prob (Maybe Score)",
          "source": "src/Numeric-Probability-Example-DiceAccum.html#game",
          "type": "function"
        },
        "index": {
          "description": "distribution of the scores that are achieved with the optimal strategy",
          "hierarchy": "Numeric Probability Example DiceAccum",
          "module": "Numeric.Probability.Example.DiceAccum",
          "name": "game",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-DiceAccum.html#v:game"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.DiceAccum",
          "name": "roll",
          "package": "probability",
          "signature": "T prob (Maybe Score)",
          "source": "src/Numeric-Probability-Example-DiceAccum.html#roll",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example DiceAccum",
          "module": "Numeric.Probability.Example.DiceAccum",
          "name": "roll",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-DiceAccum.html#v:roll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eoptimal strategy\n\u003c/p\u003e",
          "module": "Numeric.Probability.Example.DiceAccum",
          "name": "strategy",
          "package": "probability",
          "signature": "T prob (Maybe Score)",
          "source": "src/Numeric-Probability-Example-DiceAccum.html#strategy",
          "type": "function"
        },
        "index": {
          "description": "optimal strategy",
          "hierarchy": "Numeric Probability Example DiceAccum",
          "module": "Numeric.Probability.Example.DiceAccum",
          "name": "strategy",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-DiceAccum.html#v:strategy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.DiceAccum",
          "name": "walk",
          "package": "probability",
          "signature": "Int -\u003e IO (Trace (Maybe Score))",
          "source": "src/Numeric-Probability-Example-DiceAccum.html#walk",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example DiceAccum",
          "module": "Numeric.Probability.Example.DiceAccum",
          "name": "walk",
          "normalized": "Int-\u003eIO(Trace(Maybe Score))",
          "package": "probability",
          "signature": "Int-\u003eIO(Trace(Maybe Score))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-DiceAccum.html#v:walk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGiven a row of n (~50) dice and\ntwo players starting with a random dice within the first m (~5) dice.\nEvery players moves along the row, according the pips on the dice.\nThey stop if a move would exceed the row.\nWhat is the probability that they stop at the same die?\n(It is close to one.)\n\u003c/p\u003e\u003cp\u003eWuerfelschlange (german)\nhttp:\u003cem/\u003efaculty.uml.edu\u003cem\u003ermontenegro\u003c/em\u003eresearch\u003cem\u003ekruskal_count\u003c/em\u003ekruskal.html\n\u003c/p\u003e\u003cp\u003eKruskal's trick\nhttp:\u003cem/\u003ewww.math.de\u003cem\u003eexponate\u003c/em\u003ewuerfelschlange.html/\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Probability.Example.Kruskal",
          "name": "Kruskal",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-Kruskal.html",
          "type": "module"
        },
        "index": {
          "description": "Given row of dice and two players starting with random dice within the first dice Every players moves along the row according the pips on the dice They stop if move would exceed the row What is the probability that they stop at the same die It is close to one Wuerfelschlange german http faculty.uml.edu rmontenegro research kruskal count kruskal.html Kruskal trick http www.math.de exponate wuerfelschlange.html",
          "hierarchy": "Numeric Probability Example Kruskal",
          "module": "Numeric.Probability.Example.Kruskal",
          "name": "Kruskal",
          "package": "probability",
          "partial": "Kruskal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Kruskal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Kruskal",
          "name": "Die",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-Kruskal.html#Die",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Kruskal",
          "module": "Numeric.Probability.Example.Kruskal",
          "name": "Die",
          "package": "probability",
          "partial": "Die",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Kruskal.html#t:Die"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Kruskal",
          "name": "Dist",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-Kruskal.html#Dist",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Kruskal",
          "module": "Numeric.Probability.Example.Kruskal",
          "name": "Dist",
          "package": "probability",
          "partial": "Dist",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Kruskal.html#t:Dist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Kruskal",
          "name": "Probability",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-Kruskal.html#Probability",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Kruskal",
          "module": "Numeric.Probability.Example.Kruskal",
          "name": "Probability",
          "package": "probability",
          "partial": "Probability",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Kruskal.html#t:Probability"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Kruskal",
          "name": "Score",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-Kruskal.html#Score",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Kruskal",
          "module": "Numeric.Probability.Example.Kruskal",
          "name": "Score",
          "package": "probability",
          "partial": "Score",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Kruskal.html#t:Score"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a bruteforce implementation of the original game:\nWe just roll the die \u003ccode\u003emaxScore\u003c/code\u003e times\nand then jump from die to die according to the number of pips.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Example.Kruskal",
          "name": "bruteforce",
          "package": "probability",
          "signature": "Score -\u003e Score -\u003e (Score, Score) -\u003e T (Maybe Score)",
          "source": "src/Numeric-Probability-Example-Kruskal.html#bruteforce",
          "type": "function"
        },
        "index": {
          "description": "This is bruteforce implementation of the original game We just roll the die maxScore times and then jump from die to die according to the number of pips",
          "hierarchy": "Numeric Probability Example Kruskal",
          "module": "Numeric.Probability.Example.Kruskal",
          "name": "bruteforce",
          "normalized": "Score-\u003eScore-\u003e(Score,Score)-\u003eT(Maybe Score)",
          "package": "probability",
          "signature": "Score-\u003eScore-\u003e(Score,Score)-\u003eT(Maybe Score)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Kruskal.html#v:bruteforce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Kruskal",
          "name": "chop",
          "package": "probability",
          "signature": "[Score] -\u003e [[Score]]",
          "source": "src/Numeric-Probability-Example-Kruskal.html#chop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Kruskal",
          "module": "Numeric.Probability.Example.Kruskal",
          "name": "chop",
          "normalized": "[Score]-\u003e[[Score]]",
          "package": "probability",
          "signature": "[Score]-\u003e[[Score]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Kruskal.html#v:chop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Kruskal",
          "name": "compareMaybe",
          "package": "probability",
          "signature": "Maybe a -\u003e Maybe a -\u003e Ordering",
          "source": "src/Numeric-Probability-Example-Kruskal.html#compareMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Kruskal",
          "module": "Numeric.Probability.Example.Kruskal",
          "name": "compareMaybe",
          "normalized": "Maybe a-\u003eMaybe a-\u003eOrdering",
          "package": "probability",
          "partial": "Maybe",
          "signature": "Maybe a-\u003eMaybe a-\u003eOrdering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Kruskal.html#v:compareMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Kruskal",
          "name": "cumulate",
          "package": "probability",
          "signature": "Dist (Maybe a) -\u003e [(Maybe a, Probability)]",
          "source": "src/Numeric-Probability-Example-Kruskal.html#cumulate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Kruskal",
          "module": "Numeric.Probability.Example.Kruskal",
          "name": "cumulate",
          "normalized": "Dist(Maybe a)-\u003e[(Maybe a,Probability)]",
          "package": "probability",
          "signature": "Dist(Maybe a)-\u003e[(Maybe a,Probability)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Kruskal.html#v:cumulate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Kruskal",
          "name": "die",
          "package": "probability",
          "signature": "Score -\u003e experiment Die",
          "source": "src/Numeric-Probability-Example-Kruskal.html#die",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Kruskal",
          "module": "Numeric.Probability.Example.Kruskal",
          "name": "die",
          "normalized": "Score-\u003ea Die",
          "package": "probability",
          "signature": "Score-\u003eexperiment Die",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Kruskal.html#v:die"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003egameLeastScore\u003c/a\u003e\u003c/code\u003e can be written in terms of a matrix power.\nFor n pips we need a n&#178; &#215; n&#178; matrix.\nUsing symmetries, we reduce it to a square matrix with size n&#183;(n+1)/2.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003e p[n+1,(n+1,n+1)] \\          \u003c/em\u003e p[n,(n+0,n+0)] \\\n| p[n+1,(n+1,n+2)] |          | p[n,(n+0,n+1)] |\n| p[n+1,(n+1,n+3)] |          | p[n,(n+0,n+2)] |\n|        ...       |          |       ...      |\n| p[n+1,(n+1,n+6)] |  = M/6 &#183; | p[n,(n+0,n+5)] |\n| p[n+1,(n+2,n+2)] |          | p[n,(n+1,n+1)] |\n|        ...       |          |       ...      |\n| p[n+1,(n+2,n+6)] |          | p[n,(n+1,n+5)] |\n|        ...       |          |       ...      |\n p[n+1,(n+6,n+6)] \u003cem\u003e          \\ p[n,(n+5,n+5)] \u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eM[(n+1,(x,y)),(n,(x,y))] = 6\n\u003c/p\u003e\u003cp\u003eM[(n+1,(min y (n+d), max y (n+d))), (n,(n,y))] = 1\n\u003c/p\u003e\u003cp\u003eM[(n+1,(x1,y1)),(n,(x0,y0))] = 0\n\u003c/p\u003e",
          "module": "Numeric.Probability.Example.Kruskal",
          "name": "flattenedMatrix",
          "package": "probability",
          "signature": "Score -\u003e [Int]",
          "source": "src/Numeric-Probability-Example-Kruskal.html#flattenedMatrix",
          "type": "function"
        },
        "index": {
          "description": "gameLeastScore can be written in terms of matrix power For pips we need matrix Using symmetries we reduce it to square matrix with size min max x1 y1 x0 y0",
          "hierarchy": "Numeric Probability Example Kruskal",
          "module": "Numeric.Probability.Example.Kruskal",
          "name": "flattenedMatrix",
          "normalized": "Score-\u003e[Int]",
          "package": "probability",
          "partial": "Matrix",
          "signature": "Score-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Kruskal.html#v:flattenedMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe reformulate the problem to the following game:\nThere are two players, both of them collect a number of points.\nIn every round the player with the smaller score throws a die\nand adds the pips to his score.\nIf the two players somewhen get the same score, then the game ends\nand the score is the result of the game (\u003ccode\u003eJust score\u003c/code\u003e).\nIf one of the players exceeds the maximum score n,\nthen the game stops and players lose (\u003ccode\u003eNothing\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Numeric.Probability.Example.Kruskal",
          "name": "game",
          "package": "probability",
          "signature": "Score -\u003e Score -\u003e (Score, Score) -\u003e experiment (Maybe Score)",
          "source": "src/Numeric-Probability-Example-Kruskal.html#game",
          "type": "function"
        },
        "index": {
          "description": "We reformulate the problem to the following game There are two players both of them collect number of points In every round the player with the smaller score throws die and adds the pips to his score If the two players somewhen get the same score then the game ends and the score is the result of the game Just score If one of the players exceeds the maximum score then the game stops and players lose Nothing",
          "hierarchy": "Numeric Probability Example Kruskal",
          "module": "Numeric.Probability.Example.Kruskal",
          "name": "game",
          "normalized": "Score-\u003eScore-\u003e(Score,Score)-\u003ea(Maybe Score)",
          "package": "probability",
          "signature": "Score-\u003eScore-\u003e(Score,Score)-\u003eexperiment(Maybe Score)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Kruskal.html#v:game"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Kruskal",
          "name": "gameFast",
          "package": "probability",
          "signature": "Score -\u003e Score -\u003e Dist (Score, Score) -\u003e Dist (Maybe Score)",
          "source": "src/Numeric-Probability-Example-Kruskal.html#gameFast",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Kruskal",
          "module": "Numeric.Probability.Example.Kruskal",
          "name": "gameFast",
          "normalized": "Score-\u003eScore-\u003eDist(Score,Score)-\u003eDist(Maybe Score)",
          "package": "probability",
          "partial": "Fast",
          "signature": "Score-\u003eScore-\u003eDist(Score,Score)-\u003eDist(Maybe Score)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Kruskal.html#v:gameFast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Kruskal",
          "name": "gameFastEither",
          "package": "probability",
          "signature": "Score -\u003e Score -\u003e Dist (Score, Score) -\u003e Dist (Maybe Score)",
          "source": "src/Numeric-Probability-Example-Kruskal.html#gameFastEither",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Kruskal",
          "module": "Numeric.Probability.Example.Kruskal",
          "name": "gameFastEither",
          "normalized": "Score-\u003eScore-\u003eDist(Score,Score)-\u003eDist(Maybe Score)",
          "package": "probability",
          "partial": "Fast Either",
          "signature": "Score-\u003eScore-\u003eDist(Score,Score)-\u003eDist(Maybe Score)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Kruskal.html#v:gameFastEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis version could be generalized\nto both Random and Distribution monad\nwhile remaining efficient.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Example.Kruskal",
          "name": "gameFastFix",
          "package": "probability",
          "signature": "Score -\u003e Score -\u003e Dist (Score, Score) -\u003e Dist (Maybe Score)",
          "source": "src/Numeric-Probability-Example-Kruskal.html#gameFastFix",
          "type": "function"
        },
        "index": {
          "description": "This version could be generalized to both Random and Distribution monad while remaining efficient",
          "hierarchy": "Numeric Probability Example Kruskal",
          "module": "Numeric.Probability.Example.Kruskal",
          "name": "gameFastFix",
          "normalized": "Score-\u003eScore-\u003eDist(Score,Score)-\u003eDist(Maybe Score)",
          "package": "probability",
          "partial": "Fast Fix",
          "signature": "Score-\u003eScore-\u003eDist(Score,Score)-\u003eDist(Maybe Score)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Kruskal.html#v:gameFastFix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn \u003ccode\u003e\u003ca\u003egameFastFix\u003c/a\u003e\u003c/code\u003e we group the scores by rounds.\nThis leads to a growing probability distribution,\nbut we do not need the round number.\nWe could process the game in a different way:\nWe only consider the game states\nwhere the lower score matches the round number.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Example.Kruskal",
          "name": "gameLeastScore",
          "package": "probability",
          "signature": "Score -\u003e Score -\u003e Dist (Score, Score) -\u003e Dist (Maybe Score)",
          "source": "src/Numeric-Probability-Example-Kruskal.html#gameLeastScore",
          "type": "function"
        },
        "index": {
          "description": "In gameFastFix we group the scores by rounds This leads to growing probability distribution but we do not need the round number We could process the game in different way We only consider the game states where the lower score matches the round number",
          "hierarchy": "Numeric Probability Example Kruskal",
          "module": "Numeric.Probability.Example.Kruskal",
          "name": "gameLeastScore",
          "normalized": "Score-\u003eScore-\u003eDist(Score,Score)-\u003eDist(Maybe Score)",
          "package": "probability",
          "partial": "Least Score",
          "signature": "Score-\u003eScore-\u003eDist(Score,Score)-\u003eDist(Maybe Score)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Kruskal.html#v:gameLeastScore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Kruskal",
          "name": "gameRound",
          "package": "probability",
          "signature": "Score -\u003e Score -\u003e Dist (Either (Maybe Score) (Score, Score)) -\u003e Dist (Either (Maybe Score) (Score, Score))",
          "source": "src/Numeric-Probability-Example-Kruskal.html#gameRound",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Kruskal",
          "module": "Numeric.Probability.Example.Kruskal",
          "name": "gameRound",
          "normalized": "Score-\u003eScore-\u003eDist(Either(Maybe Score)(Score,Score))-\u003eDist(Either(Maybe Score)(Score,Score))",
          "package": "probability",
          "partial": "Round",
          "signature": "Score-\u003eScore-\u003eDist(Either(Maybe Score)(Score,Score))-\u003eDist(Either(Maybe Score)(Score,Score))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Kruskal.html#v:gameRound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Kruskal",
          "name": "latexChoppedFromChain",
          "package": "probability",
          "signature": "[Score] -\u003e String",
          "source": "src/Numeric-Probability-Example-Kruskal.html#latexChoppedFromChain",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Kruskal",
          "module": "Numeric.Probability.Example.Kruskal",
          "name": "latexChoppedFromChain",
          "normalized": "[Score]-\u003eString",
          "package": "probability",
          "partial": "Chopped From Chain",
          "signature": "[Score]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Kruskal.html#v:latexChoppedFromChain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Kruskal",
          "name": "latexDie",
          "package": "probability",
          "signature": "Score -\u003e String",
          "source": "src/Numeric-Probability-Example-Kruskal.html#latexDie",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Kruskal",
          "module": "Numeric.Probability.Example.Kruskal",
          "name": "latexDie",
          "normalized": "Score-\u003eString",
          "package": "probability",
          "partial": "Die",
          "signature": "Score-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Kruskal.html#v:latexDie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Kruskal",
          "name": "latexFromChain",
          "package": "probability",
          "signature": "[Score] -\u003e String",
          "source": "src/Numeric-Probability-Example-Kruskal.html#latexFromChain",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Kruskal",
          "module": "Numeric.Probability.Example.Kruskal",
          "name": "latexFromChain",
          "normalized": "[Score]-\u003eString",
          "package": "probability",
          "partial": "From Chain",
          "signature": "[Score]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Kruskal.html#v:latexFromChain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Kruskal",
          "name": "latexMarkedDie",
          "package": "probability",
          "signature": "Score -\u003e String",
          "source": "src/Numeric-Probability-Example-Kruskal.html#latexMarkedDie",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Kruskal",
          "module": "Numeric.Probability.Example.Kruskal",
          "name": "latexMarkedDie",
          "normalized": "Score-\u003eString",
          "package": "probability",
          "partial": "Marked Die",
          "signature": "Score-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Kruskal.html#v:latexMarkedDie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Kruskal",
          "name": "makeChains",
          "package": "probability",
          "signature": "IO ()",
          "source": "src/Numeric-Probability-Example-Kruskal.html#makeChains",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Kruskal",
          "module": "Numeric.Probability.Example.Kruskal",
          "name": "makeChains",
          "normalized": "IO()",
          "package": "probability",
          "partial": "Chains",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Kruskal.html#v:makeChains"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Kruskal",
          "name": "meeting",
          "package": "probability",
          "signature": "[Score] -\u003e [Score] -\u003e Maybe Score",
          "source": "src/Numeric-Probability-Example-Kruskal.html#meeting",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Kruskal",
          "module": "Numeric.Probability.Example.Kruskal",
          "name": "meeting",
          "normalized": "[Score]-\u003e[Score]-\u003eMaybe Score",
          "package": "probability",
          "signature": "[Score]-\u003e[Score]-\u003eMaybe Score",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Kruskal.html#v:meeting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Kruskal",
          "name": "runExact",
          "package": "probability",
          "signature": "Score -\u003e IO ()",
          "source": "src/Numeric-Probability-Example-Kruskal.html#runExact",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Kruskal",
          "module": "Numeric.Probability.Example.Kruskal",
          "name": "runExact",
          "normalized": "Score-\u003eIO()",
          "package": "probability",
          "partial": "Exact",
          "signature": "Score-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Kruskal.html#v:runExact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Kruskal",
          "name": "runSimulation",
          "package": "probability",
          "signature": "Score -\u003e IO ()",
          "source": "src/Numeric-Probability-Example-Kruskal.html#runSimulation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Kruskal",
          "module": "Numeric.Probability.Example.Kruskal",
          "name": "runSimulation",
          "normalized": "Score-\u003eIO()",
          "package": "probability",
          "partial": "Simulation",
          "signature": "Score-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Kruskal.html#v:runSimulation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Kruskal",
          "name": "startVector",
          "package": "probability",
          "signature": "Score -\u003e [Int]",
          "source": "src/Numeric-Probability-Example-Kruskal.html#startVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Kruskal",
          "module": "Numeric.Probability.Example.Kruskal",
          "name": "startVector",
          "normalized": "Score-\u003e[Int]",
          "package": "probability",
          "partial": "Vector",
          "signature": "Score-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Kruskal.html#v:startVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Kruskal",
          "name": "trace",
          "package": "probability",
          "signature": "Score -\u003e [Score] -\u003e [Score]",
          "source": "src/Numeric-Probability-Example-Kruskal.html#trace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Kruskal",
          "module": "Numeric.Probability.Example.Kruskal",
          "name": "trace",
          "normalized": "Score-\u003e[Score]-\u003e[Score]",
          "package": "probability",
          "signature": "Score-\u003e[Score]-\u003e[Score]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Kruskal.html#v:trace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "MontyHall",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-MontyHall.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Probability Example MontyHall",
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "MontyHall",
          "package": "probability",
          "partial": "Monty Hall",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "Door",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-MontyHall.html#Door",
          "type": "data"
        },
        "index": {
          "hierarchy": "Numeric Probability Example MontyHall",
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "Door",
          "package": "probability",
          "partial": "Door",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#t:Door"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "Outcome",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-MontyHall.html#Outcome",
          "type": "data"
        },
        "index": {
          "hierarchy": "Numeric Probability Example MontyHall",
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "Outcome",
          "package": "probability",
          "partial": "Outcome",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#t:Outcome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "State",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-MontyHall.html#State",
          "type": "data"
        },
        "index": {
          "hierarchy": "Numeric Probability Example MontyHall",
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "State",
          "package": "probability",
          "partial": "State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#t:State"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "Strategy",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-MontyHall.html#Strategy",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Probability Example MontyHall",
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "Strategy",
          "package": "probability",
          "partial": "Strategy",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#t:Strategy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "StrategyM",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-MontyHall.html#StrategyM",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Probability Example MontyHall",
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "StrategyM",
          "package": "probability",
          "partial": "Strategy",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#t:StrategyM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "A",
          "package": "probability",
          "signature": "A",
          "source": "src/Numeric-Probability-Example-MontyHall.html#Door",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example MontyHall",
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "A",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#v:A"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "B",
          "package": "probability",
          "signature": "B",
          "source": "src/Numeric-Probability-Example-MontyHall.html#Door",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example MontyHall",
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "B",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#v:B"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "C",
          "package": "probability",
          "signature": "C",
          "source": "src/Numeric-Probability-Example-MontyHall.html#Door",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example MontyHall",
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "C",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#v:C"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "Doors",
          "package": "probability",
          "signature": "Doors",
          "source": "src/Numeric-Probability-Example-MontyHall.html#State",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example MontyHall",
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "Doors",
          "package": "probability",
          "partial": "Doors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#v:Doors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "Lose",
          "package": "probability",
          "signature": "Lose",
          "source": "src/Numeric-Probability-Example-MontyHall.html#Outcome",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example MontyHall",
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "Lose",
          "package": "probability",
          "partial": "Lose",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#v:Lose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "Win",
          "package": "probability",
          "signature": "Win",
          "source": "src/Numeric-Probability-Example-MontyHall.html#Outcome",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example MontyHall",
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "Win",
          "package": "probability",
          "partial": "Win",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#v:Win"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "choose",
          "package": "probability",
          "signature": "Trans State",
          "source": "src/Numeric-Probability-Example-MontyHall.html#choose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example MontyHall",
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "choose",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#v:choose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "chosen",
          "package": "probability",
          "signature": "Door",
          "source": "src/Numeric-Probability-Example-MontyHall.html#State",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example MontyHall",
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "chosen",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#v:chosen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "doors",
          "package": "probability",
          "signature": "[Door]",
          "source": "src/Numeric-Probability-Example-MontyHall.html#doors",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example MontyHall",
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "doors",
          "normalized": "[Door]",
          "package": "probability",
          "signature": "[Door]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#v:doors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "eval",
          "package": "probability",
          "signature": "Strategy -\u003e Dist Outcome",
          "source": "src/Numeric-Probability-Example-MontyHall.html#eval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example MontyHall",
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "eval",
          "normalized": "Strategy-\u003eDist Outcome",
          "package": "probability",
          "signature": "Strategy-\u003eDist Outcome",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#v:eval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "evalM",
          "package": "probability",
          "signature": "StrategyM -\u003e Dist Outcome",
          "source": "src/Numeric-Probability-Example-MontyHall.html#evalM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example MontyHall",
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "evalM",
          "normalized": "StrategyM-\u003eDist Outcome",
          "package": "probability",
          "signature": "StrategyM-\u003eDist Outcome",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#v:evalM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "firstChoice",
          "package": "probability",
          "signature": "Dist Outcome",
          "source": "src/Numeric-Probability-Example-MontyHall.html#firstChoice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example MontyHall",
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "firstChoice",
          "package": "probability",
          "partial": "Choice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#v:firstChoice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "game",
          "package": "probability",
          "signature": "Strategy -\u003e Trans State",
          "source": "src/Numeric-Probability-Example-MontyHall.html#game",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example MontyHall",
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "game",
          "normalized": "Strategy-\u003eTrans State",
          "package": "probability",
          "signature": "Strategy-\u003eTrans State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#v:game"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSteps of the game:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e hide the prize\n\u003c/li\u003e\u003cli\u003e choose a door\n\u003c/li\u003e\u003cli\u003e open a non-open door, not revealing the prize\n\u003c/li\u003e\u003cli\u003e apply strategy: switch or stay\n\u003c/li\u003e\u003c/ol\u003e",
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "hide",
          "package": "probability",
          "signature": "Trans State",
          "source": "src/Numeric-Probability-Example-MontyHall.html#hide",
          "type": "function"
        },
        "index": {
          "description": "Steps of the game hide the prize choose door open non-open door not revealing the prize apply strategy switch or stay",
          "hierarchy": "Numeric Probability Example MontyHall",
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "hide",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#v:hide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "open",
          "package": "probability",
          "signature": "Trans State",
          "source": "src/Numeric-Probability-Example-MontyHall.html#open",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example MontyHall",
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "open",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#v:open"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "opened",
          "package": "probability",
          "signature": "Door",
          "source": "src/Numeric-Probability-Example-MontyHall.html#State",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example MontyHall",
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "opened",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#v:opened"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "prize",
          "package": "probability",
          "signature": "Door",
          "source": "src/Numeric-Probability-Example-MontyHall.html#State",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example MontyHall",
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "prize",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#v:prize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "result",
          "package": "probability",
          "signature": "State -\u003e Outcome",
          "source": "src/Numeric-Probability-Example-MontyHall.html#result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example MontyHall",
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "result",
          "normalized": "State-\u003eOutcome",
          "package": "probability",
          "signature": "State-\u003eOutcome",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#v:result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "simEval",
          "package": "probability",
          "signature": "Int -\u003e Strategy -\u003e RDist Outcome",
          "source": "src/Numeric-Probability-Example-MontyHall.html#simEval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example MontyHall",
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "simEval",
          "normalized": "Int-\u003eStrategy-\u003eRDist Outcome",
          "package": "probability",
          "partial": "Eval",
          "signature": "Int-\u003eStrategy-\u003eRDist Outcome",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#v:simEval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einitial configuration of the game status\n\u003c/p\u003e",
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "start",
          "package": "probability",
          "signature": "State",
          "source": "src/Numeric-Probability-Example-MontyHall.html#start",
          "type": "function"
        },
        "index": {
          "description": "initial configuration of the game status",
          "hierarchy": "Numeric Probability Example MontyHall",
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "start",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#v:start"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "stay",
          "package": "probability",
          "signature": "Strategy",
          "source": "src/Numeric-Probability-Example-MontyHall.html#stay",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example MontyHall",
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "stay",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#v:stay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "stayM",
          "package": "probability",
          "signature": "StrategyM",
          "source": "src/Numeric-Probability-Example-MontyHall.html#stayM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example MontyHall",
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "stayM",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#v:stayM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "switch",
          "package": "probability",
          "signature": "Strategy",
          "source": "src/Numeric-Probability-Example-MontyHall.html#switch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example MontyHall",
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "switch",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#v:switch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "switch'",
          "package": "probability",
          "signature": "Trans Outcome",
          "source": "src/Numeric-Probability-Example-MontyHall.html#switch%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example MontyHall",
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "switch'",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#v:switch-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "switchM",
          "package": "probability",
          "signature": "StrategyM",
          "source": "src/Numeric-Probability-Example-MontyHall.html#switchM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example MontyHall",
          "module": "Numeric.Probability.Example.MontyHall",
          "name": "switchM",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-MontyHall.html#v:switchM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCeneralization of \u003ca\u003eNumeric.Probability.Example.Boys\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eConsider a family of n children.  Given that there are k boys in the family,\nwhat is the probability that there are m boys in the family?\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Probability.Example.NBoys",
          "name": "NBoys",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-NBoys.html",
          "type": "module"
        },
        "index": {
          "description": "Ceneralization of Numeric.Probability.Example.Boys Consider family of children Given that there are boys in the family what is the probability that there are boys in the family",
          "hierarchy": "Numeric Probability Example NBoys",
          "module": "Numeric.Probability.Example.NBoys",
          "name": "NBoys",
          "package": "probability",
          "partial": "NBoys",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-NBoys.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.NBoys",
          "name": "Family",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-NBoys.html#Family",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Probability Example NBoys",
          "module": "Numeric.Probability.Example.NBoys",
          "name": "Family",
          "package": "probability",
          "partial": "Family",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-NBoys.html#t:Family"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.NBoys",
          "name": "boys",
          "package": "probability",
          "signature": "Int -\u003e Event Family",
          "source": "src/Numeric-Probability-Example-NBoys.html#boys",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example NBoys",
          "module": "Numeric.Probability.Example.NBoys",
          "name": "boys",
          "normalized": "Int-\u003eEvent Family",
          "package": "probability",
          "signature": "Int-\u003eEvent Family",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-NBoys.html#v:boys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.NBoys",
          "name": "countBoys",
          "package": "probability",
          "signature": "Family -\u003e Int",
          "source": "src/Numeric-Probability-Example-NBoys.html#countBoys",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example NBoys",
          "module": "Numeric.Probability.Example.NBoys",
          "name": "countBoys",
          "normalized": "Family-\u003eInt",
          "package": "probability",
          "partial": "Boys",
          "signature": "Family-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-NBoys.html#v:countBoys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.NBoys",
          "name": "family",
          "package": "probability",
          "signature": "Int -\u003e Dist Family",
          "source": "src/Numeric-Probability-Example-NBoys.html#family",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example NBoys",
          "module": "Numeric.Probability.Example.NBoys",
          "name": "family",
          "normalized": "Int-\u003eDist Family",
          "package": "probability",
          "signature": "Int-\u003eDist Family",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-NBoys.html#v:family"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.NBoys",
          "name": "nBoys",
          "package": "probability",
          "signature": "Int -\u003e Int -\u003e Int -\u003e Probability",
          "source": "src/Numeric-Probability-Example-NBoys.html#nBoys",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example NBoys",
          "module": "Numeric.Probability.Example.NBoys",
          "name": "nBoys",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eProbability",
          "package": "probability",
          "partial": "Boys",
          "signature": "Int-\u003eInt-\u003eInt-\u003eProbability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-NBoys.html#v:nBoys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.NBoys",
          "name": "numBoys",
          "package": "probability",
          "signature": "Int -\u003e Int -\u003e Dist Int",
          "source": "src/Numeric-Probability-Example-NBoys.html#numBoys",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example NBoys",
          "module": "Numeric.Probability.Example.NBoys",
          "name": "numBoys",
          "normalized": "Int-\u003eInt-\u003eDist Int",
          "package": "probability",
          "partial": "Boys",
          "signature": "Int-\u003eInt-\u003eDist Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-NBoys.html#v:numBoys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eonly boys in a family that has one boy\n\u003c/p\u003e",
          "module": "Numeric.Probability.Example.NBoys",
          "name": "onlyBoys1",
          "package": "probability",
          "signature": "Int -\u003e Probability",
          "source": "src/Numeric-Probability-Example-NBoys.html#onlyBoys1",
          "type": "function"
        },
        "index": {
          "description": "only boys in family that has one boy",
          "hierarchy": "Numeric Probability Example NBoys",
          "module": "Numeric.Probability.Example.NBoys",
          "name": "onlyBoys1",
          "normalized": "Int-\u003eProbability",
          "package": "probability",
          "partial": "Boys",
          "signature": "Int-\u003eProbability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-NBoys.html#v:onlyBoys1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLotka-Volterra predator-prey model\n\u003c/p\u003e\u003cp\u003eparameters\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eg\u003c/code\u003e : victims' growth factor\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ed\u003c/code\u003e : predators' death factor\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003es\u003c/code\u003e : search rate\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ee\u003c/code\u003e : energetic efficiency\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Numeric.Probability.Example.Predator",
          "name": "Predator",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-Predator.html",
          "type": "module"
        },
        "index": {
          "description": "Lotka-Volterra predator-prey model parameters victims growth factor predators death factor search rate energetic efficiency",
          "hierarchy": "Numeric Probability Example Predator",
          "module": "Numeric.Probability.Example.Predator",
          "name": "Predator",
          "package": "probability",
          "partial": "Predator",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Predator.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Predator",
          "name": "d",
          "package": "probability",
          "signature": "Float",
          "source": "src/Numeric-Probability-Example-Predator.html#g",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Predator",
          "module": "Numeric.Probability.Example.Predator",
          "name": "d",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Predator.html#v:d"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Predator",
          "name": "dp",
          "package": "probability",
          "signature": "(Float, Float) -\u003e Float",
          "source": "src/Numeric-Probability-Example-Predator.html#dp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Predator",
          "module": "Numeric.Probability.Example.Predator",
          "name": "dp",
          "normalized": "(Float,Float)-\u003eFloat",
          "package": "probability",
          "signature": "(Float,Float)-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Predator.html#v:dp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Predator",
          "name": "dv",
          "package": "probability",
          "signature": "(Float, Float) -\u003e Float",
          "source": "src/Numeric-Probability-Example-Predator.html#dv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Predator",
          "module": "Numeric.Probability.Example.Predator",
          "name": "dv",
          "normalized": "(Float,Float)-\u003eFloat",
          "package": "probability",
          "signature": "(Float,Float)-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Predator.html#v:dv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Predator",
          "name": "dvp",
          "package": "probability",
          "signature": "(Float, Float) -\u003e (Float, Float)",
          "source": "src/Numeric-Probability-Example-Predator.html#dvp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Predator",
          "module": "Numeric.Probability.Example.Predator",
          "name": "dvp",
          "normalized": "(Float,Float)-\u003e(Float,Float)",
          "package": "probability",
          "signature": "(Float,Float)-\u003e(Float,Float)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Predator.html#v:dvp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Predator",
          "name": "e",
          "package": "probability",
          "signature": "Float",
          "source": "src/Numeric-Probability-Example-Predator.html#g",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Predator",
          "module": "Numeric.Probability.Example.Predator",
          "name": "e",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Predator.html#v:e"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Predator",
          "name": "fig1",
          "package": "probability",
          "signature": "Int -\u003e Vis",
          "source": "src/Numeric-Probability-Example-Predator.html#fig1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Predator",
          "module": "Numeric.Probability.Example.Predator",
          "name": "fig1",
          "normalized": "Int-\u003eVis",
          "package": "probability",
          "signature": "Int-\u003eVis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Predator.html#v:fig1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Predator",
          "name": "g",
          "package": "probability",
          "signature": "Float",
          "source": "src/Numeric-Probability-Example-Predator.html#g",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Predator",
          "module": "Numeric.Probability.Example.Predator",
          "name": "g",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Predator.html#v:g"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Predator",
          "name": "p0",
          "package": "probability",
          "signature": "Float",
          "source": "src/Numeric-Probability-Example-Predator.html#p0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Predator",
          "module": "Numeric.Probability.Example.Predator",
          "name": "p0",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Predator.html#v:p0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Predator",
          "name": "ps",
          "package": "probability",
          "signature": "[Float]",
          "source": "src/Numeric-Probability-Example-Predator.html#ps",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Predator",
          "module": "Numeric.Probability.Example.Predator",
          "name": "ps",
          "normalized": "[Float]",
          "package": "probability",
          "signature": "[Float]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Predator.html#v:ps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Predator",
          "name": "s",
          "package": "probability",
          "signature": "Float",
          "source": "src/Numeric-Probability-Example-Predator.html#g",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Predator",
          "module": "Numeric.Probability.Example.Predator",
          "name": "s",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Predator.html#v:s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Predator",
          "name": "v0",
          "package": "probability",
          "signature": "Float",
          "source": "src/Numeric-Probability-Example-Predator.html#v0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Predator",
          "module": "Numeric.Probability.Example.Predator",
          "name": "v0",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Predator.html#v:v0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Predator",
          "name": "vp",
          "package": "probability",
          "signature": "[(Float, Float)]",
          "source": "src/Numeric-Probability-Example-Predator.html#vp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Predator",
          "module": "Numeric.Probability.Example.Predator",
          "name": "vp",
          "normalized": "[(Float,Float)]",
          "package": "probability",
          "signature": "[(Float,Float)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Predator.html#v:vp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Predator",
          "name": "vs",
          "package": "probability",
          "signature": "[Float]",
          "source": "src/Numeric-Probability-Example-Predator.html#vs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Predator",
          "module": "Numeric.Probability.Example.Predator",
          "name": "vs",
          "normalized": "[Float]",
          "package": "probability",
          "signature": "[Float]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Predator.html#v:vs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe newspaper \u003ca\u003eSueddeutsche\u003c/a\u003e asked their readers\nwhat professions 16 persons have,\nby only showing the photographies of them and three choices.\n\u003c/p\u003e\u003cp\u003eTheir statistics was:\n22% readers had  0 to  5 correct answers   (category 0)\n75% readers had  6 to 11 correct answers   (category 1)\n 3% readers had 12 to 16 correct answers   (category 2)\n\u003c/p\u003e\u003cp\u003eCan this statistics be explained with random guessing,\nor is there some information in the photographies\nthat the readers could utilize?\n\u003c/p\u003e\u003cp\u003eI got 6 correct answers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Probability.Example.Profession",
          "name": "Profession",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-Profession.html",
          "type": "module"
        },
        "index": {
          "description": "The newspaper Sueddeutsche asked their readers what professions persons have by only showing the photographies of them and three choices Their statistics was readers had to correct answers category readers had to correct answers category readers had to correct answers category Can this statistics be explained with random guessing or is there some information in the photographies that the readers could utilize got correct answers",
          "hierarchy": "Numeric Probability Example Profession",
          "module": "Numeric.Probability.Example.Profession",
          "name": "Profession",
          "package": "probability",
          "partial": "Profession",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Profession.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Profession",
          "name": "Dist",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-Profession.html#Dist",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Profession",
          "module": "Numeric.Probability.Example.Profession",
          "name": "Dist",
          "package": "probability",
          "partial": "Dist",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Profession.html#t:Dist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Profession",
          "name": "Probability",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-Profession.html#Probability",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Profession",
          "module": "Numeric.Probability.Example.Profession",
          "name": "Probability",
          "package": "probability",
          "partial": "Probability",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Profession.html#t:Probability"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Profession",
          "name": "categories",
          "package": "probability",
          "signature": "Dist Int",
          "source": "src/Numeric-Probability-Example-Profession.html#categories",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Profession",
          "module": "Numeric.Probability.Example.Profession",
          "name": "categories",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Profession.html#v:categories"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Profession",
          "name": "correctAnswers",
          "package": "probability",
          "signature": "Dist Int",
          "source": "src/Numeric-Probability-Example-Profession.html#correctAnswers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Profession",
          "module": "Numeric.Probability.Example.Profession",
          "name": "correctAnswers",
          "package": "probability",
          "partial": "Answers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Profession.html#v:correctAnswers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModel:\n\u003c/p\u003e\u003cp\u003eone server serving customers from one queue\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Probability.Example.Queuing",
          "name": "Queuing",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-Queuing.html",
          "type": "module"
        },
        "index": {
          "description": "Model one server serving customers from one queue",
          "hierarchy": "Numeric Probability Example Queuing",
          "module": "Numeric.Probability.Example.Queuing",
          "name": "Queuing",
          "package": "probability",
          "partial": "Queuing",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Queuing",
          "name": "Event",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-Queuing.html#Event",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Queuing",
          "module": "Numeric.Probability.Example.Queuing",
          "name": "Event",
          "package": "probability",
          "partial": "Event",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Queuing",
          "name": "Events",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-Queuing.html#Events",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Queuing",
          "module": "Numeric.Probability.Example.Queuing",
          "name": "Events",
          "package": "probability",
          "partial": "Events",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#t:Events"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(servingTime, nextArrival)\n\u003c/p\u003e",
          "module": "Numeric.Probability.Example.Queuing",
          "name": "Profile",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-Queuing.html#Profile",
          "type": "type"
        },
        "index": {
          "description": "servingTime nextArrival",
          "hierarchy": "Numeric Probability Example Queuing",
          "module": "Numeric.Probability.Example.Queuing",
          "name": "Profile",
          "package": "probability",
          "partial": "Profile",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#t:Profile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecustomers and their individual serving times\n\u003c/p\u003e",
          "module": "Numeric.Probability.Example.Queuing",
          "name": "Queue",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-Queuing.html#Queue",
          "type": "type"
        },
        "index": {
          "description": "customers and their individual serving times",
          "hierarchy": "Numeric Probability Example Queuing",
          "module": "Numeric.Probability.Example.Queuing",
          "name": "Queue",
          "package": "probability",
          "partial": "Queue",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#t:Queue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Queuing",
          "name": "REvent",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-Queuing.html#REvent",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Queuing",
          "module": "Numeric.Probability.Example.Queuing",
          "name": "REvent",
          "package": "probability",
          "partial": "REvent",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#t:REvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Queuing",
          "name": "REvents",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-Queuing.html#REvents",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Queuing",
          "module": "Numeric.Probability.Example.Queuing",
          "name": "REvents",
          "package": "probability",
          "partial": "REvents",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#t:REvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Queuing",
          "name": "RProfile",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-Queuing.html#RProfile",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Queuing",
          "module": "Numeric.Probability.Example.Queuing",
          "name": "RProfile",
          "package": "probability",
          "partial": "RProfile",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#t:RProfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(customers waiting,validity period of that queue)\n\u003c/p\u003e",
          "module": "Numeric.Probability.Example.Queuing",
          "name": "State",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-Queuing.html#State",
          "type": "type"
        },
        "index": {
          "description": "customers waiting validity period of that queue",
          "hierarchy": "Numeric Probability Example Queuing",
          "module": "Numeric.Probability.Example.Queuing",
          "name": "State",
          "package": "probability",
          "partial": "State",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#t:State"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Queuing",
          "name": "System",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-Queuing.html#System",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Queuing",
          "module": "Numeric.Probability.Example.Queuing",
          "name": "System",
          "package": "probability",
          "partial": "System",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#t:System"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Queuing",
          "name": "Time",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-Queuing.html#Time",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Queuing",
          "module": "Numeric.Probability.Example.Queuing",
          "name": "Time",
          "package": "probability",
          "partial": "Time",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#t:Time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Queuing",
          "name": "allWaiting",
          "package": "probability",
          "signature": "Int -\u003e System a -\u003e [a]",
          "source": "src/Numeric-Probability-Example-Queuing.html#allWaiting",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Queuing",
          "module": "Numeric.Probability.Example.Queuing",
          "name": "allWaiting",
          "normalized": "Int-\u003eSystem a-\u003e[a]",
          "package": "probability",
          "partial": "Waiting",
          "signature": "Int-\u003eSystem a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#v:allWaiting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Queuing",
          "name": "countWaiting",
          "package": "probability",
          "signature": "Int -\u003e System a -\u003e Int",
          "source": "src/Numeric-Probability-Example-Queuing.html#countWaiting",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Queuing",
          "module": "Numeric.Probability.Example.Queuing",
          "name": "countWaiting",
          "normalized": "Int-\u003eSystem a-\u003eInt",
          "package": "probability",
          "partial": "Waiting",
          "signature": "Int-\u003eSystem a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#v:countWaiting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Queuing",
          "name": "evalSystem",
          "package": "probability",
          "signature": "Int -\u003e Int -\u003e REvents a -\u003e (System a -\u003e b) -\u003e RDist b",
          "source": "src/Numeric-Probability-Example-Queuing.html#evalSystem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Queuing",
          "module": "Numeric.Probability.Example.Queuing",
          "name": "evalSystem",
          "normalized": "Int-\u003eInt-\u003eREvents a-\u003e(System a-\u003eb)-\u003eRDist b",
          "package": "probability",
          "partial": "System",
          "signature": "Int-\u003eInt-\u003eREvents a-\u003e(System a-\u003eb)-\u003eRDist b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#v:evalSystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Queuing",
          "name": "event",
          "package": "probability",
          "signature": "Time -\u003e Events a -\u003e Queue a -\u003e [State a]",
          "source": "src/Numeric-Probability-Example-Queuing.html#event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Queuing",
          "module": "Numeric.Probability.Example.Queuing",
          "name": "event",
          "normalized": "Time-\u003eEvents a-\u003eQueue a-\u003e[State a]",
          "package": "probability",
          "signature": "Time-\u003eEvents a-\u003eQueue a-\u003e[State a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#v:event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Queuing",
          "name": "idle",
          "package": "probability",
          "signature": "Int -\u003e System a -\u003e Time",
          "source": "src/Numeric-Probability-Example-Queuing.html#idle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Queuing",
          "module": "Numeric.Probability.Example.Queuing",
          "name": "idle",
          "normalized": "Int-\u003eSystem a-\u003eTime",
          "package": "probability",
          "signature": "Int-\u003eSystem a-\u003eTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#v:idle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Queuing",
          "name": "idleAvgP",
          "package": "probability",
          "signature": "Int -\u003e System a -\u003e Float",
          "source": "src/Numeric-Probability-Example-Queuing.html#idleAvgP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Queuing",
          "module": "Numeric.Probability.Example.Queuing",
          "name": "idleAvgP",
          "normalized": "Int-\u003eSystem a-\u003eFloat",
          "package": "probability",
          "partial": "Avg",
          "signature": "Int-\u003eSystem a-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#v:idleAvgP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Queuing",
          "name": "inSystem",
          "package": "probability",
          "signature": "System a -\u003e Time",
          "source": "src/Numeric-Probability-Example-Queuing.html#inSystem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Queuing",
          "module": "Numeric.Probability.Example.Queuing",
          "name": "inSystem",
          "normalized": "System a-\u003eTime",
          "package": "probability",
          "partial": "System",
          "signature": "System a-\u003eTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#v:inSystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emultiple servers\n\u003c/p\u003e",
          "module": "Numeric.Probability.Example.Queuing",
          "name": "mEvent",
          "package": "probability",
          "signature": "Int -\u003e Time -\u003e Events a -\u003e Queue a -\u003e [State a]",
          "source": "src/Numeric-Probability-Example-Queuing.html#mEvent",
          "type": "function"
        },
        "index": {
          "description": "multiple servers",
          "hierarchy": "Numeric Probability Example Queuing",
          "module": "Numeric.Probability.Example.Queuing",
          "name": "mEvent",
          "normalized": "Int-\u003eTime-\u003eEvents a-\u003eQueue a-\u003e[State a]",
          "package": "probability",
          "partial": "Event",
          "signature": "Int-\u003eTime-\u003eEvents a-\u003eQueue a-\u003e[State a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#v:mEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edecrease served customers remaining time by specified amount\n\u003c/p\u003e",
          "module": "Numeric.Probability.Example.Queuing",
          "name": "mServe",
          "package": "probability",
          "signature": "Int -\u003e Int -\u003e Queue a -\u003e Queue a",
          "source": "src/Numeric-Probability-Example-Queuing.html#mServe",
          "type": "function"
        },
        "index": {
          "description": "decrease served customers remaining time by specified amount",
          "hierarchy": "Numeric Probability Example Queuing",
          "module": "Numeric.Probability.Example.Queuing",
          "name": "mServe",
          "normalized": "Int-\u003eInt-\u003eQueue a-\u003eQueue a",
          "package": "probability",
          "partial": "Serve",
          "signature": "Int-\u003eInt-\u003eQueue a-\u003eQueue a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#v:mServe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Queuing",
          "name": "mSystem",
          "package": "probability",
          "signature": "Int -\u003e Events a -\u003e System a",
          "source": "src/Numeric-Probability-Example-Queuing.html#mSystem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Queuing",
          "module": "Numeric.Probability.Example.Queuing",
          "name": "mSystem",
          "normalized": "Int-\u003eEvents a-\u003eSystem a",
          "package": "probability",
          "partial": "System",
          "signature": "Int-\u003eEvents a-\u003eSystem a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#v:mSystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etime until next completion\n\u003c/p\u003e",
          "module": "Numeric.Probability.Example.Queuing",
          "name": "mTimeStep",
          "package": "probability",
          "signature": "Int -\u003e Queue a -\u003e Int",
          "source": "src/Numeric-Probability-Example-Queuing.html#mTimeStep",
          "type": "function"
        },
        "index": {
          "description": "time until next completion",
          "hierarchy": "Numeric Probability Example Queuing",
          "module": "Numeric.Probability.Example.Queuing",
          "name": "mTimeStep",
          "normalized": "Int-\u003eQueue a-\u003eInt",
          "package": "probability",
          "partial": "Time Step",
          "signature": "Int-\u003eQueue a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#v:mTimeStep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Queuing",
          "name": "maxQueue",
          "package": "probability",
          "signature": "System a -\u003e Int",
          "source": "src/Numeric-Probability-Example-Queuing.html#maxQueue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Queuing",
          "module": "Numeric.Probability.Example.Queuing",
          "name": "maxQueue",
          "normalized": "System a-\u003eInt",
          "package": "probability",
          "partial": "Queue",
          "signature": "System a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#v:maxQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Queuing",
          "name": "rBuildEvents",
          "package": "probability",
          "signature": "REvents a -\u003e T (Events a)",
          "source": "src/Numeric-Probability-Example-Queuing.html#rBuildEvents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Queuing",
          "module": "Numeric.Probability.Example.Queuing",
          "name": "rBuildEvents",
          "normalized": "REvents a-\u003eT(Events a)",
          "package": "probability",
          "partial": "Build Events",
          "signature": "REvents a-\u003eT(Events a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#v:rBuildEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Queuing",
          "name": "rSystem",
          "package": "probability",
          "signature": "Int -\u003e REvents a -\u003e T (System a)",
          "source": "src/Numeric-Probability-Example-Queuing.html#rSystem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Queuing",
          "module": "Numeric.Probability.Example.Queuing",
          "name": "rSystem",
          "normalized": "Int-\u003eREvents a-\u003eT(System a)",
          "package": "probability",
          "partial": "System",
          "signature": "Int-\u003eREvents a-\u003eT(System a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#v:rSystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Queuing",
          "name": "rmSystem",
          "package": "probability",
          "signature": "Int -\u003e Int -\u003e REvents a -\u003e RDist (System a)",
          "source": "src/Numeric-Probability-Example-Queuing.html#rmSystem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Queuing",
          "module": "Numeric.Probability.Example.Queuing",
          "name": "rmSystem",
          "normalized": "Int-\u003eInt-\u003eREvents a-\u003eRDist(System a)",
          "package": "probability",
          "partial": "System",
          "signature": "Int-\u003eInt-\u003eREvents a-\u003eRDist(System a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#v:rmSystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Queuing",
          "name": "server",
          "package": "probability",
          "signature": "Int -\u003e System a -\u003e Time",
          "source": "src/Numeric-Probability-Example-Queuing.html#server",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Queuing",
          "module": "Numeric.Probability.Example.Queuing",
          "name": "server",
          "normalized": "Int-\u003eSystem a-\u003eTime",
          "package": "probability",
          "signature": "Int-\u003eSystem a-\u003eTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#v:server"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Queuing",
          "name": "system",
          "package": "probability",
          "signature": "Events a -\u003e System a",
          "source": "src/Numeric-Probability-Example-Queuing.html#system",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Queuing",
          "module": "Numeric.Probability.Example.Queuing",
          "name": "system",
          "normalized": "Events a-\u003eSystem a",
          "package": "probability",
          "signature": "Events a-\u003eSystem a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#v:system"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Queuing",
          "name": "total",
          "package": "probability",
          "signature": "System a -\u003e Time",
          "source": "src/Numeric-Probability-Example-Queuing.html#total",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Queuing",
          "module": "Numeric.Probability.Example.Queuing",
          "name": "total",
          "normalized": "System a-\u003eTime",
          "package": "probability",
          "signature": "System a-\u003eTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#v:total"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Queuing",
          "name": "unit",
          "package": "probability",
          "signature": "b -\u003e ((), b)",
          "source": "src/Numeric-Probability-Example-Queuing.html#unit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Queuing",
          "module": "Numeric.Probability.Example.Queuing",
          "name": "unit",
          "normalized": "a-\u003e((),a)",
          "package": "probability",
          "signature": "b-\u003e((),b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#v:unit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.Queuing",
          "name": "waiting",
          "package": "probability",
          "signature": "Int -\u003e System a -\u003e Time",
          "source": "src/Numeric-Probability-Example-Queuing.html#waiting",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example Queuing",
          "module": "Numeric.Probability.Example.Queuing",
          "name": "waiting",
          "normalized": "Int-\u003eSystem a-\u003eTime",
          "package": "probability",
          "signature": "Int-\u003eSystem a-\u003eTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-Queuing.html#v:waiting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "TreeGrowth",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-TreeGrowth.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Probability Example TreeGrowth",
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "TreeGrowth",
          "package": "probability",
          "partial": "Tree Growth",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "Height",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-TreeGrowth.html#Height",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Probability Example TreeGrowth",
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "Height",
          "package": "probability",
          "partial": "Height",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#t:Height"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "Tree",
          "package": "probability",
          "source": "src/Numeric-Probability-Example-TreeGrowth.html#Tree",
          "type": "data"
        },
        "index": {
          "hierarchy": "Numeric Probability Example TreeGrowth",
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "Tree",
          "package": "probability",
          "partial": "Tree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#t:Tree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "Alive",
          "package": "probability",
          "signature": "Alive Height",
          "source": "src/Numeric-Probability-Example-TreeGrowth.html#Tree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example TreeGrowth",
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "Alive",
          "package": "probability",
          "partial": "Alive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#v:Alive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "Fallen",
          "package": "probability",
          "signature": "Fallen",
          "source": "src/Numeric-Probability-Example-TreeGrowth.html#Tree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example TreeGrowth",
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "Fallen",
          "package": "probability",
          "partial": "Fallen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#v:Fallen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "Hit",
          "package": "probability",
          "signature": "Hit Height",
          "source": "src/Numeric-Probability-Example-TreeGrowth.html#Tree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example TreeGrowth",
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "Hit",
          "package": "probability",
          "partial": "Hit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#v:Hit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "done",
          "package": "probability",
          "signature": "Tree -\u003e Bool",
          "source": "src/Numeric-Probability-Example-TreeGrowth.html#done",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example TreeGrowth",
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "done",
          "normalized": "Tree-\u003eBool",
          "package": "probability",
          "signature": "Tree-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#v:done"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "ev5",
          "package": "probability",
          "signature": "Tree -\u003e Dist Tree",
          "source": "src/Numeric-Probability-Example-TreeGrowth.html#ev5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example TreeGrowth",
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "ev5",
          "normalized": "Tree-\u003eDist Tree",
          "package": "probability",
          "signature": "Tree-\u003eDist Tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#v:ev5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "evolve",
          "package": "probability",
          "signature": "Trans Tree",
          "source": "src/Numeric-Probability-Example-TreeGrowth.html#evolve",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example TreeGrowth",
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "evolve",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#v:evolve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "fall",
          "package": "probability",
          "signature": "Trans Tree",
          "source": "src/Numeric-Probability-Example-TreeGrowth.html#fall",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example TreeGrowth",
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "fall",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#v:fall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "grow",
          "package": "probability",
          "signature": "Trans Tree",
          "source": "src/Numeric-Probability-Example-TreeGrowth.html#grow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example TreeGrowth",
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "grow",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#v:grow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "h2",
          "package": "probability",
          "signature": "Space Tree",
          "source": "src/Numeric-Probability-Example-TreeGrowth.html#h2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example TreeGrowth",
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "h2",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#v:h2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "height",
          "package": "probability",
          "signature": "Tree -\u003e Int",
          "source": "src/Numeric-Probability-Example-TreeGrowth.html#height",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example TreeGrowth",
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "height",
          "normalized": "Tree-\u003eInt",
          "package": "probability",
          "signature": "Tree-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#v:height"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "heightAtTime",
          "package": "probability",
          "signature": "Int -\u003e Plot",
          "source": "src/Numeric-Probability-Example-TreeGrowth.html#heightAtTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example TreeGrowth",
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "heightAtTime",
          "normalized": "Int-\u003ePlot",
          "package": "probability",
          "partial": "At Time",
          "signature": "Int-\u003ePlot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#v:heightAtTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "heightCurve",
          "package": "probability",
          "signature": "(Int, Color) -\u003e Plot",
          "source": "src/Numeric-Probability-Example-TreeGrowth.html#heightCurve",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example TreeGrowth",
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "heightCurve",
          "normalized": "(Int,Color)-\u003ePlot",
          "package": "probability",
          "partial": "Curve",
          "signature": "(Int,Color)-\u003ePlot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#v:heightCurve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ehist n\u003c/code\u003e : history of tree distributions for n generations\n\u003c/p\u003e",
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "hist",
          "package": "probability",
          "signature": "Int -\u003e Expand Tree",
          "source": "src/Numeric-Probability-Example-TreeGrowth.html#hist",
          "type": "function"
        },
        "index": {
          "description": "hist history of tree distributions for generations",
          "hierarchy": "Numeric Probability Example TreeGrowth",
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "hist",
          "normalized": "Int-\u003eExpand Tree",
          "package": "probability",
          "signature": "Int-\u003eExpand Tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#v:hist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "hit",
          "package": "probability",
          "signature": "Trans Tree",
          "source": "src/Numeric-Probability-Example-TreeGrowth.html#hit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example TreeGrowth",
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "hit",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#v:hit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "p1",
          "package": "probability",
          "signature": "Vis",
          "source": "src/Numeric-Probability-Example-TreeGrowth.html#p1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example TreeGrowth",
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "p1",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#v:p1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "p2",
          "package": "probability",
          "signature": "Vis",
          "source": "src/Numeric-Probability-Example-TreeGrowth.html#p1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example TreeGrowth",
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "p2",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#v:p2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "p3",
          "package": "probability",
          "signature": "Vis",
          "source": "src/Numeric-Probability-Example-TreeGrowth.html#p1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example TreeGrowth",
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "p3",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#v:p3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "p4",
          "package": "probability",
          "signature": "Vis",
          "source": "src/Numeric-Probability-Example-TreeGrowth.html#p1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example TreeGrowth",
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "p4",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#v:p4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "p5",
          "package": "probability",
          "signature": "Vis",
          "source": "src/Numeric-Probability-Example-TreeGrowth.html#p1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example TreeGrowth",
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "p5",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#v:p5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "p6",
          "package": "probability",
          "signature": "Vis",
          "source": "src/Numeric-Probability-Example-TreeGrowth.html#p1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example TreeGrowth",
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "p6",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#v:p6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etree growth simulation:\n start with seed and run for n generations\n\u003c/p\u003e",
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "seed",
          "package": "probability",
          "signature": "Tree",
          "source": "src/Numeric-Probability-Example-TreeGrowth.html#seed",
          "type": "function"
        },
        "index": {
          "description": "tree growth simulation start with seed and run for generations",
          "hierarchy": "Numeric Probability Example TreeGrowth",
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "seed",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#v:seed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "sh2",
          "package": "probability",
          "signature": "IO ()",
          "source": "src/Numeric-Probability-Example-TreeGrowth.html#sh2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example TreeGrowth",
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "sh2",
          "normalized": "IO()",
          "package": "probability",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#v:sh2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "simHist",
          "package": "probability",
          "signature": "Int -\u003e Int -\u003e RExpand Tree",
          "source": "src/Numeric-Probability-Example-TreeGrowth.html#simHist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example TreeGrowth",
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "simHist",
          "normalized": "Int-\u003eInt-\u003eRExpand Tree",
          "package": "probability",
          "partial": "Hist",
          "signature": "Int-\u003eInt-\u003eRExpand Tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#v:simHist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSince '(*.)' is overloaded for Trans and RChange,\nwe can run the simulation ~. directly to \u003ccode\u003en *. live\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "simTree",
          "package": "probability",
          "signature": "Int -\u003e Int -\u003e RTrans Tree",
          "source": "src/Numeric-Probability-Example-TreeGrowth.html#simTree",
          "type": "function"
        },
        "index": {
          "description": "Since is overloaded for Trans and RChange we can run the simulation directly to live",
          "hierarchy": "Numeric Probability Example TreeGrowth",
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "simTree",
          "normalized": "Int-\u003eInt-\u003eRTrans Tree",
          "package": "probability",
          "partial": "Tree",
          "signature": "Int-\u003eInt-\u003eRTrans Tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#v:simTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "st2",
          "package": "probability",
          "signature": "IO ()",
          "source": "src/Numeric-Probability-Example-TreeGrowth.html#sh2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example TreeGrowth",
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "st2",
          "normalized": "IO()",
          "package": "probability",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#v:st2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "t2",
          "package": "probability",
          "signature": "Dist Tree",
          "source": "src/Numeric-Probability-Example-TreeGrowth.html#t2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Example TreeGrowth",
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "t2",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#v:t2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etree n\u003c/code\u003e : tree distribution after n generations\n\u003c/p\u003e",
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "tree",
          "package": "probability",
          "signature": "Int -\u003e Tree -\u003e Dist Tree",
          "source": "src/Numeric-Probability-Example-TreeGrowth.html#tree",
          "type": "function"
        },
        "index": {
          "description": "tree tree distribution after generations",
          "hierarchy": "Numeric Probability Example TreeGrowth",
          "module": "Numeric.Probability.Example.TreeGrowth",
          "name": "tree",
          "normalized": "Int-\u003eTree-\u003eDist Tree",
          "package": "probability",
          "signature": "Int-\u003eTree-\u003eDist Tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Example-TreeGrowth.html#v:tree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Expectation",
          "name": "Expectation",
          "package": "probability",
          "source": "src/Numeric-Probability-Expectation.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Probability Expectation",
          "module": "Numeric.Probability.Expectation",
          "name": "Expectation",
          "package": "probability",
          "partial": "Expectation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Expectation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Expectation",
          "name": "Expected",
          "package": "probability",
          "source": "src/Numeric-Probability-Expectation.html#Expected",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Probability Expectation",
          "module": "Numeric.Probability.Expectation",
          "name": "Expected",
          "package": "probability",
          "partial": "Expected",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Expectation.html#t:Expected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Expectation",
          "name": "FromFloat",
          "package": "probability",
          "source": "src/Numeric-Probability-Expectation.html#FromFloat",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Probability Expectation",
          "module": "Numeric.Probability.Expectation",
          "name": "FromFloat",
          "package": "probability",
          "partial": "From Float",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Expectation.html#t:FromFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Expectation",
          "name": "ToFloat",
          "package": "probability",
          "source": "src/Numeric-Probability-Expectation.html#ToFloat",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Probability Expectation",
          "module": "Numeric.Probability.Expectation",
          "name": "ToFloat",
          "package": "probability",
          "partial": "To Float",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Expectation.html#t:ToFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Expectation",
          "name": "expected",
          "package": "probability",
          "signature": "a -\u003e Float",
          "source": "src/Numeric-Probability-Expectation.html#expected",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Probability Expectation",
          "module": "Numeric.Probability.Expectation",
          "name": "expected",
          "normalized": "a-\u003eFloat",
          "package": "probability",
          "signature": "a-\u003eFloat",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Expectation.html#v:expected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Expectation",
          "name": "floatDist",
          "package": "probability",
          "signature": "T prob a -\u003e T Float Float",
          "source": "src/Numeric-Probability-Expectation.html#floatDist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Expectation",
          "module": "Numeric.Probability.Expectation",
          "name": "floatDist",
          "normalized": "T a b-\u003eT Float Float",
          "package": "probability",
          "partial": "Dist",
          "signature": "T prob a-\u003eT Float Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Expectation.html#v:floatDist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Expectation",
          "name": "fromFloat",
          "package": "probability",
          "signature": "Float -\u003e a",
          "source": "src/Numeric-Probability-Expectation.html#fromFloat",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Probability Expectation",
          "module": "Numeric.Probability.Expectation",
          "name": "fromFloat",
          "normalized": "Float-\u003ea",
          "package": "probability",
          "partial": "Float",
          "signature": "Float-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Expectation.html#v:fromFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Expectation",
          "name": "stdDev",
          "package": "probability",
          "signature": "Dist a -\u003e Float",
          "source": "src/Numeric-Probability-Expectation.html#stdDev",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Expectation",
          "module": "Numeric.Probability.Expectation",
          "name": "stdDev",
          "normalized": "Dist a-\u003eFloat",
          "package": "probability",
          "partial": "Dev",
          "signature": "Dist a-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Expectation.html#v:stdDev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Expectation",
          "name": "toFloat",
          "package": "probability",
          "signature": "a -\u003e Float",
          "source": "src/Numeric-Probability-Expectation.html#toFloat",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Probability Expectation",
          "module": "Numeric.Probability.Expectation",
          "name": "toFloat",
          "normalized": "a-\u003eFloat",
          "package": "probability",
          "partial": "Float",
          "signature": "a-\u003eFloat",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Expectation.html#v:toFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estatistical analyses\n\u003c/p\u003e",
          "module": "Numeric.Probability.Expectation",
          "name": "variance",
          "package": "probability",
          "signature": "Dist a -\u003e Float",
          "source": "src/Numeric-Probability-Expectation.html#variance",
          "type": "function"
        },
        "index": {
          "description": "statistical analyses",
          "hierarchy": "Numeric Probability Expectation",
          "module": "Numeric.Probability.Expectation",
          "name": "variance",
          "normalized": "Dist a-\u003eFloat",
          "package": "probability",
          "signature": "Dist a-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Expectation.html#v:variance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAbstract interface to probabilistic objects\nlike random generators and probability distributions.\nIt allows to use the same code\nboth for computing complete distributions\nand for generating random values according to the distribution.\nThe latter one is of course more efficient\nand may be used for approximation of the distribution by simulation.\n\u003c/p\u003e\u003cp\u003eMaybe a better name is \u003ccode\u003eExperiment\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Probability.Object",
          "name": "Object",
          "package": "probability",
          "source": "src/Numeric-Probability-Object.html",
          "type": "module"
        },
        "index": {
          "description": "Abstract interface to probabilistic objects like random generators and probability distributions It allows to use the same code both for computing complete distributions and for generating random values according to the distribution The latter one is of course more efficient and may be used for approximation of the distribution by simulation Maybe better name is Experiment",
          "hierarchy": "Numeric Probability Object",
          "module": "Numeric.Probability.Object",
          "name": "Object",
          "package": "probability",
          "partial": "Object",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Object.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Object",
          "name": "C",
          "package": "probability",
          "source": "src/Numeric-Probability-Object.html#C",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric Probability Object",
          "module": "Numeric.Probability.Object",
          "name": "C",
          "package": "probability",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Object.html#t:C"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Object",
          "name": "Spread",
          "package": "probability",
          "source": "src/Numeric-Probability-Object.html#Spread",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Probability Object",
          "module": "Numeric.Probability.Object",
          "name": "Spread",
          "package": "probability",
          "partial": "Spread",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Object.html#t:Spread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Object",
          "name": "enum",
          "package": "probability",
          "signature": "[Int] -\u003e Spread obj a",
          "source": "src/Numeric-Probability-Object.html#enum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Object",
          "module": "Numeric.Probability.Object",
          "name": "enum",
          "normalized": "[Int]-\u003eSpread a b",
          "package": "probability",
          "signature": "[Int]-\u003eSpread obj a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Object.html#v:enum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Object",
          "name": "fromFrequencies",
          "package": "probability",
          "signature": "[(a, prob)] -\u003e obj a",
          "source": "src/Numeric-Probability-Object.html#fromFrequencies",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric Probability Object",
          "module": "Numeric.Probability.Object",
          "name": "fromFrequencies",
          "normalized": "[(a,b)]-\u003ec a",
          "package": "probability",
          "partial": "Frequencies",
          "signature": "[(a,prob)]-\u003eobj a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Object.html#v:fromFrequencies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Object",
          "name": "linear",
          "package": "probability",
          "signature": "Spread obj a",
          "source": "src/Numeric-Probability-Object.html#linear",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Object",
          "module": "Numeric.Probability.Object",
          "name": "linear",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Object.html#v:linear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Object",
          "name": "negExp",
          "package": "probability",
          "signature": "Spread obj a",
          "source": "src/Numeric-Probability-Object.html#negExp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Object",
          "module": "Numeric.Probability.Object",
          "name": "negExp",
          "package": "probability",
          "partial": "Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Object.html#v:negExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Object",
          "name": "normal",
          "package": "probability",
          "signature": "Spread obj a",
          "source": "src/Numeric-Probability-Object.html#normal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Object",
          "module": "Numeric.Probability.Object",
          "name": "normal",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Object.html#v:normal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGive a list of frequencies, they do not need to sum up to 1.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Object",
          "name": "relative",
          "package": "probability",
          "signature": "[prob] -\u003e Spread obj a",
          "source": "src/Numeric-Probability-Object.html#relative",
          "type": "function"
        },
        "index": {
          "description": "Give list of frequencies they do not need to sum up to",
          "hierarchy": "Numeric Probability Object",
          "module": "Numeric.Probability.Object",
          "name": "relative",
          "normalized": "[a]-\u003eSpread b c",
          "package": "probability",
          "signature": "[prob]-\u003eSpread obj a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Object.html#v:relative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Object",
          "name": "shape",
          "package": "probability",
          "signature": "(prob -\u003e prob) -\u003e Spread obj a",
          "source": "src/Numeric-Probability-Object.html#shape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Object",
          "module": "Numeric.Probability.Object",
          "name": "shape",
          "normalized": "(a-\u003ea)-\u003eSpread b c",
          "package": "probability",
          "signature": "(prob-\u003eprob)-\u003eSpread obj a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Object.html#v:shape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Object",
          "name": "uniform",
          "package": "probability",
          "signature": "Spread obj a",
          "source": "src/Numeric-Probability-Object.html#uniform",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Object",
          "module": "Numeric.Probability.Object",
          "name": "uniform",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Object.html#v:uniform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNumber type based on Float with formatting in percents.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Probability.Percentage",
          "name": "Percentage",
          "package": "probability",
          "source": "src/Numeric-Probability-Percentage.html",
          "type": "module"
        },
        "index": {
          "description": "Number type based on Float with formatting in percents",
          "hierarchy": "Numeric Probability Percentage",
          "module": "Numeric.Probability.Percentage",
          "name": "Percentage",
          "package": "probability",
          "partial": "Percentage",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Percentage.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Percentage",
          "name": "Dist",
          "package": "probability",
          "source": "src/Numeric-Probability-Percentage.html#Dist",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Probability Percentage",
          "module": "Numeric.Probability.Percentage",
          "name": "Dist",
          "package": "probability",
          "partial": "Dist",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Percentage.html#t:Dist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Percentage",
          "name": "Expand",
          "package": "probability",
          "source": "src/Numeric-Probability-Percentage.html#Expand",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Probability Percentage",
          "module": "Numeric.Probability.Percentage",
          "name": "Expand",
          "package": "probability",
          "partial": "Expand",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Percentage.html#t:Expand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Percentage",
          "name": "RDist",
          "package": "probability",
          "source": "src/Numeric-Probability-Percentage.html#RDist",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Probability Percentage",
          "module": "Numeric.Probability.Percentage",
          "name": "RDist",
          "package": "probability",
          "partial": "RDist",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Percentage.html#t:RDist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Percentage",
          "name": "RExpand",
          "package": "probability",
          "source": "src/Numeric-Probability-Percentage.html#RExpand",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Probability Percentage",
          "module": "Numeric.Probability.Percentage",
          "name": "RExpand",
          "package": "probability",
          "partial": "RExpand",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Percentage.html#t:RExpand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Percentage",
          "name": "RSpace",
          "package": "probability",
          "source": "src/Numeric-Probability-Percentage.html#RSpace",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Probability Percentage",
          "module": "Numeric.Probability.Percentage",
          "name": "RSpace",
          "package": "probability",
          "partial": "RSpace",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Percentage.html#t:RSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Percentage",
          "name": "RTrans",
          "package": "probability",
          "source": "src/Numeric-Probability-Percentage.html#RTrans",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Probability Percentage",
          "module": "Numeric.Probability.Percentage",
          "name": "RTrans",
          "package": "probability",
          "partial": "RTrans",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Percentage.html#t:RTrans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Percentage",
          "name": "Space",
          "package": "probability",
          "source": "src/Numeric-Probability-Percentage.html#Space",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Probability Percentage",
          "module": "Numeric.Probability.Percentage",
          "name": "Space",
          "package": "probability",
          "partial": "Space",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Percentage.html#t:Space"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Percentage",
          "name": "Spread",
          "package": "probability",
          "source": "src/Numeric-Probability-Percentage.html#Spread",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Probability Percentage",
          "module": "Numeric.Probability.Percentage",
          "name": "Spread",
          "package": "probability",
          "partial": "Spread",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Percentage.html#t:Spread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Percentage",
          "name": "T",
          "package": "probability",
          "source": "src/Numeric-Probability-Percentage.html#T",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Numeric Probability Percentage",
          "module": "Numeric.Probability.Percentage",
          "name": "T",
          "package": "probability",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Percentage.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Percentage",
          "name": "Trans",
          "package": "probability",
          "source": "src/Numeric-Probability-Percentage.html#Trans",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Probability Percentage",
          "module": "Numeric.Probability.Percentage",
          "name": "Trans",
          "package": "probability",
          "partial": "Trans",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Percentage.html#t:Trans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint distribution as table with configurable precision.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Percentage",
          "name": "(//)",
          "package": "probability",
          "signature": "Dist a -\u003e Int -\u003e IO ()",
          "source": "src/Numeric-Probability-Percentage.html#%2F%2F",
          "type": "function"
        },
        "index": {
          "description": "Print distribution as table with configurable precision",
          "hierarchy": "Numeric Probability Percentage",
          "module": "Numeric.Probability.Percentage",
          "name": "(//) //",
          "normalized": "Dist a-\u003eInt-\u003eIO()",
          "package": "probability",
          "signature": "Dist a-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Percentage.html#v:-47--47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Percentage",
          "name": "(//*)",
          "package": "probability",
          "signature": "Dist a -\u003e (Int, Int) -\u003e IO ()",
          "source": "src/Numeric-Probability-Percentage.html#%2F%2F%2A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Percentage",
          "module": "Numeric.Probability.Percentage",
          "name": "(//*) //*",
          "normalized": "Dist a-\u003e(Int,Int)-\u003eIO()",
          "package": "probability",
          "signature": "Dist a-\u003e(Int,Int)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Percentage.html#v:-47--47--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Percentage",
          "name": "Cons",
          "package": "probability",
          "signature": "Cons Float",
          "source": "src/Numeric-Probability-Percentage.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Percentage",
          "module": "Numeric.Probability.Percentage",
          "name": "Cons",
          "package": "probability",
          "partial": "Cons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Percentage.html#v:Cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Percentage",
          "name": "liftP",
          "package": "probability",
          "signature": "(Float -\u003e Float) -\u003e T -\u003e T",
          "source": "src/Numeric-Probability-Percentage.html#liftP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Percentage",
          "module": "Numeric.Probability.Percentage",
          "name": "liftP",
          "normalized": "(Float-\u003eFloat)-\u003eT-\u003eT",
          "package": "probability",
          "signature": "(Float-\u003eFloat)-\u003eT-\u003eT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Percentage.html#v:liftP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Percentage",
          "name": "liftP2",
          "package": "probability",
          "signature": "(Float -\u003e Float -\u003e Float) -\u003e T -\u003e T -\u003e T",
          "source": "src/Numeric-Probability-Percentage.html#liftP2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Percentage",
          "module": "Numeric.Probability.Percentage",
          "name": "liftP2",
          "normalized": "(Float-\u003eFloat-\u003eFloat)-\u003eT-\u003eT-\u003eT",
          "package": "probability",
          "signature": "(Float-\u003eFloat-\u003eFloat)-\u003eT-\u003eT-\u003eT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Percentage.html#v:liftP2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Percentage",
          "name": "percent",
          "package": "probability",
          "signature": "Float -\u003e T",
          "source": "src/Numeric-Probability-Percentage.html#percent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Percentage",
          "module": "Numeric.Probability.Percentage",
          "name": "percent",
          "normalized": "Float-\u003eT",
          "package": "probability",
          "signature": "Float-\u003eT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Percentage.html#v:percent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Percentage",
          "name": "roundRel",
          "package": "probability",
          "signature": "Int -\u003e a -\u003e a",
          "source": "src/Numeric-Probability-Percentage.html#roundRel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Percentage",
          "module": "Numeric.Probability.Percentage",
          "name": "roundRel",
          "normalized": "Int-\u003ea-\u003ea",
          "package": "probability",
          "partial": "Rel",
          "signature": "Int-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Percentage.html#v:roundRel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Percentage",
          "name": "showPfix",
          "package": "probability",
          "signature": "Int -\u003e prob -\u003e String",
          "source": "src/Numeric-Probability-Percentage.html#showPfix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Percentage",
          "module": "Numeric.Probability.Percentage",
          "name": "showPfix",
          "normalized": "Int-\u003ea-\u003eString",
          "package": "probability",
          "partial": "Pfix",
          "signature": "Int-\u003eprob-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Percentage.html#v:showPfix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRandomized values\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Probability.Random",
          "name": "Random",
          "package": "probability",
          "source": "src/Numeric-Probability-Random.html",
          "type": "module"
        },
        "index": {
          "description": "Randomized values",
          "hierarchy": "Numeric Probability Random",
          "module": "Numeric.Probability.Random",
          "name": "Random",
          "package": "probability",
          "partial": "Random",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Random.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Random",
          "name": "ApproxDist",
          "package": "probability",
          "source": "src/Numeric-Probability-Random.html#ApproxDist",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Probability Random",
          "module": "Numeric.Probability.Random",
          "name": "ApproxDist",
          "package": "probability",
          "partial": "Approx Dist",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Random.html#t:ApproxDist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erandom change\n\u003c/p\u003e",
          "module": "Numeric.Probability.Random",
          "name": "Change",
          "package": "probability",
          "source": "src/Numeric-Probability-Random.html#Change",
          "type": "type"
        },
        "index": {
          "description": "random change",
          "hierarchy": "Numeric Probability Random",
          "module": "Numeric.Probability.Random",
          "name": "Change",
          "package": "probability",
          "partial": "Change",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Random.html#t:Change"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRandomized distribution\n\u003c/p\u003e",
          "module": "Numeric.Probability.Random",
          "name": "Distribution",
          "package": "probability",
          "source": "src/Numeric-Probability-Random.html#Distribution",
          "type": "type"
        },
        "index": {
          "description": "Randomized distribution",
          "hierarchy": "Numeric Probability Random",
          "module": "Numeric.Probability.Random",
          "name": "Distribution",
          "package": "probability",
          "partial": "Distribution",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Random.html#t:Distribution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRandom values\n\u003c/p\u003e",
          "module": "Numeric.Probability.Random",
          "name": "T",
          "package": "probability",
          "source": "src/Numeric-Probability-Random.html#T",
          "type": "newtype"
        },
        "index": {
          "description": "Random values",
          "hierarchy": "Numeric Probability Random",
          "module": "Numeric.Probability.Random",
          "name": "T",
          "package": "probability",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Random.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erandom transition\n\u003c/p\u003e",
          "module": "Numeric.Probability.Random",
          "name": "Transition",
          "package": "probability",
          "source": "src/Numeric-Probability-Random.html#Transition",
          "type": "type"
        },
        "index": {
          "description": "random transition",
          "hierarchy": "Numeric Probability Random",
          "module": "Numeric.Probability.Random",
          "name": "Transition",
          "package": "probability",
          "partial": "Transition",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Random.html#t:Transition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Random",
          "name": "Cons",
          "package": "probability",
          "signature": "Cons",
          "source": "src/Numeric-Probability-Random.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Random",
          "module": "Numeric.Probability.Random",
          "name": "Cons",
          "package": "probability",
          "partial": "Cons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Random.html#v:Cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Random",
          "name": "above",
          "package": "probability",
          "signature": "prob -\u003e Distribution prob a -\u003e Distribution prob (Select a)",
          "source": "src/Numeric-Probability-Random.html#above",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Random",
          "module": "Numeric.Probability.Random",
          "name": "above",
          "normalized": "a-\u003eDistribution a b-\u003eDistribution a(Select b)",
          "package": "probability",
          "signature": "prob-\u003eDistribution prob a-\u003eDistribution prob(Select a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Random.html#v:above"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Random",
          "name": "change",
          "package": "probability",
          "signature": "T prob a -\u003e Change a",
          "source": "src/Numeric-Probability-Random.html#change",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Random",
          "module": "Numeric.Probability.Random",
          "name": "change",
          "normalized": "T a b-\u003eChange b",
          "package": "probability",
          "signature": "T prob a-\u003eChange a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Random.html#v:change"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Random",
          "name": "decons",
          "package": "probability",
          "signature": "State StdGen a",
          "source": "src/Numeric-Probability-Random.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Random",
          "module": "Numeric.Probability.Random",
          "name": "decons",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Random.html#v:decons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edist\u003c/a\u003e\u003c/code\u003e converts a list of randomly generated values into\na distribution by taking equal weights for all values.\nThus \u003ccode\u003edist (replicate n rnd)\u003c/code\u003e simulates \u003ccode\u003ernd\u003c/code\u003e \u003ccode\u003en\u003c/code\u003e times\nand returns an estimation of the distribution represented by \u003ccode\u003ernd\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Random",
          "name": "dist",
          "package": "probability",
          "signature": "[T a] -\u003e Distribution prob a",
          "source": "src/Numeric-Probability-Random.html#dist",
          "type": "function"
        },
        "index": {
          "description": "dist converts list of randomly generated values into distribution by taking equal weights for all values Thus dist replicate rnd simulates rnd times and returns an estimation of the distribution represented by rnd",
          "hierarchy": "Numeric Probability Random",
          "module": "Numeric.Probability.Random",
          "name": "dist",
          "normalized": "[T a]-\u003eDistribution b a",
          "package": "probability",
          "signature": "[T a]-\u003eDistribution prob a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Random.html#v:dist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Random",
          "name": "pick",
          "package": "probability",
          "signature": "T prob a -\u003e T a",
          "source": "src/Numeric-Probability-Random.html#pick",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Random",
          "module": "Numeric.Probability.Random",
          "name": "pick",
          "normalized": "T a b-\u003eT b",
          "package": "probability",
          "signature": "T prob a-\u003eT a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Random.html#v:pick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Random",
          "name": "print",
          "package": "probability",
          "signature": "T a -\u003e IO ()",
          "source": "src/Numeric-Probability-Random.html#print",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Random",
          "module": "Numeric.Probability.Random",
          "name": "print",
          "normalized": "T a-\u003eIO()",
          "package": "probability",
          "signature": "T a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Random.html#v:print"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Random",
          "name": "randomR",
          "package": "probability",
          "signature": "(a, a) -\u003e T a",
          "source": "src/Numeric-Probability-Random.html#randomR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Random",
          "module": "Numeric.Probability.Random",
          "name": "randomR",
          "normalized": "(a,a)-\u003eT a",
          "package": "probability",
          "signature": "(a,a)-\u003eT a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Random.html#v:randomR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun random action in \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Random",
          "name": "run",
          "package": "probability",
          "signature": "T a -\u003e IO a",
          "source": "src/Numeric-Probability-Random.html#run",
          "type": "function"
        },
        "index": {
          "description": "Run random action in IO monad",
          "hierarchy": "Numeric Probability Random",
          "module": "Numeric.Probability.Random",
          "name": "run",
          "normalized": "T a-\u003eIO a",
          "package": "probability",
          "signature": "T a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Random.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun random action without \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e using a seed.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Random",
          "name": "runSeed",
          "package": "probability",
          "signature": "StdGen -\u003e T a -\u003e a",
          "source": "src/Numeric-Probability-Random.html#runSeed",
          "type": "function"
        },
        "index": {
          "description": "Run random action without IO using seed",
          "hierarchy": "Numeric Probability Random",
          "module": "Numeric.Probability.Random",
          "name": "runSeed",
          "normalized": "StdGen-\u003eT a-\u003ea",
          "package": "probability",
          "partial": "Seed",
          "signature": "StdGen-\u003eT a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Random.html#v:runSeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCollection of some shapes of distribution.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Probability.Shape",
          "name": "Shape",
          "package": "probability",
          "source": "src/Numeric-Probability-Shape.html",
          "type": "module"
        },
        "index": {
          "description": "Collection of some shapes of distribution",
          "hierarchy": "Numeric Probability Shape",
          "module": "Numeric.Probability.Shape",
          "name": "Shape",
          "package": "probability",
          "partial": "Shape",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Shape.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA shape is a mapping from the interval \u003ccode\u003e[0,1]\u003c/code\u003e to non-negative numbers.\nThey need not to be normalized (sum up to 1)\nbecause this is done by subsequent steps.\n(It would also be impossible to normalize the function in a way\nthat each discretization is normalized as well.)\n\u003c/p\u003e",
          "module": "Numeric.Probability.Shape",
          "name": "T",
          "package": "probability",
          "source": "src/Numeric-Probability-Shape.html#T",
          "type": "type"
        },
        "index": {
          "description": "shape is mapping from the interval to non-negative numbers They need not to be normalized sum up to because this is done by subsequent steps It would also be impossible to normalize the function in way that each discretization is normalized as well",
          "hierarchy": "Numeric Probability Shape",
          "module": "Numeric.Probability.Shape",
          "name": "T",
          "package": "probability",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Shape.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Shape",
          "name": "linear",
          "package": "probability",
          "signature": "T prob",
          "source": "src/Numeric-Probability-Shape.html#linear",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Shape",
          "module": "Numeric.Probability.Shape",
          "name": "linear",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Shape.html#v:linear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Shape",
          "name": "negExp",
          "package": "probability",
          "signature": "T prob",
          "source": "src/Numeric-Probability-Shape.html#negExp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Shape",
          "module": "Numeric.Probability.Shape",
          "name": "negExp",
          "package": "probability",
          "partial": "Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Shape.html#v:negExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Shape",
          "name": "normal",
          "package": "probability",
          "signature": "T prob",
          "source": "src/Numeric-Probability-Shape.html#normal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Shape",
          "module": "Numeric.Probability.Shape",
          "name": "normal",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Shape.html#v:normal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Shape",
          "name": "normalCurve",
          "package": "probability",
          "signature": "prob -\u003e prob -\u003e prob -\u003e prob",
          "source": "src/Numeric-Probability-Shape.html#normalCurve",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Shape",
          "module": "Numeric.Probability.Shape",
          "name": "normalCurve",
          "normalized": "a-\u003ea-\u003ea-\u003ea",
          "package": "probability",
          "partial": "Curve",
          "signature": "prob-\u003eprob-\u003eprob-\u003eprob",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Shape.html#v:normalCurve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Shape",
          "name": "uniform",
          "package": "probability",
          "signature": "T prob",
          "source": "src/Numeric-Probability-Shape.html#uniform",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Shape",
          "module": "Numeric.Probability.Shape",
          "name": "uniform",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Shape.html#v:uniform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimulation\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Probability.Simulation",
          "name": "Simulation",
          "package": "probability",
          "source": "src/Numeric-Probability-Simulation.html",
          "type": "module"
        },
        "index": {
          "description": "Simulation",
          "hierarchy": "Numeric Probability Simulation",
          "module": "Numeric.Probability.Simulation",
          "name": "Simulation",
          "package": "probability",
          "partial": "Simulation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Simulation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimulation means to repeat a Rnd.change change many times and\nto accumulate all results into a distribution. Therefore,\nsimulation can be regarded as an approximation of distributions\nthrough randomization.\n\u003c/p\u003e\u003cp\u003eThe Sim class allows the overloading of simulation for different\nkinds of generators, namely transitions and Rnd.change changes:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003eTrans   a = a -\u003e Dist a   ==\u003e   c = Dist\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003eRChange a = a -\u003e Rnd.T a  ==\u003e   c = Rnd.T = IO\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "Numeric.Probability.Simulation",
          "name": "C",
          "package": "probability",
          "source": "src/Numeric-Probability-Simulation.html#C",
          "type": "class"
        },
        "index": {
          "description": "Simulation means to repeat Rnd.change change many times and to accumulate all results into distribution Therefore simulation can be regarded as an approximation of distributions through randomization The Sim class allows the overloading of simulation for different kinds of generators namely transitions and Rnd.change changes Trans Dist Dist RChange Rnd.T Rnd.T IO",
          "hierarchy": "Numeric Probability Simulation",
          "module": "Numeric.Probability.Simulation",
          "name": "C",
          "package": "probability",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Simulation.html#t:C"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturns the whole trace for a single simulation\n\u003c/p\u003e",
          "module": "Numeric.Probability.Simulation",
          "name": "(~*.)",
          "package": "probability",
          "signature": "(Int, Int) -\u003e (a -\u003e c a) -\u003e Transition prob a",
          "source": "src/Numeric-Probability-Simulation.html#~%2A.",
          "type": "method"
        },
        "index": {
          "description": "returns the whole trace for single simulation",
          "hierarchy": "Numeric Probability Simulation",
          "module": "Numeric.Probability.Simulation",
          "name": "(~*.) ~*.",
          "normalized": "(Int,Int)-\u003e(a-\u003eb a)-\u003eTransition c a",
          "package": "probability",
          "signature": "(Int,Int)-\u003e(a-\u003ec a)-\u003eTransition prob a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Simulation.html#v:-126--42-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturns the final randomized transition\n\u003c/p\u003e",
          "module": "Numeric.Probability.Simulation",
          "name": "(~.)",
          "package": "probability",
          "signature": "Int -\u003e (a -\u003e c a) -\u003e Transition prob a",
          "source": "src/Numeric-Probability-Simulation.html#~.",
          "type": "method"
        },
        "index": {
          "description": "returns the final randomized transition",
          "hierarchy": "Numeric Probability Simulation",
          "module": "Numeric.Probability.Simulation",
          "name": "(~.) ~.",
          "normalized": "Int-\u003e(a-\u003eb a)-\u003eTransition c a",
          "package": "probability",
          "signature": "Int-\u003e(a-\u003ec a)-\u003eTransition prob a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Simulation.html#v:-126-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturns the whole trace for a k-fold simulation\n\u003c/p\u003e",
          "module": "Numeric.Probability.Simulation",
          "name": "(~..)",
          "package": "probability",
          "signature": "(Int, Int) -\u003e (a -\u003e c a) -\u003e RExpand prob a",
          "source": "src/Numeric-Probability-Simulation.html#~..",
          "type": "method"
        },
        "index": {
          "description": "returns the whole trace for k-fold simulation",
          "hierarchy": "Numeric Probability Simulation",
          "module": "Numeric.Probability.Simulation",
          "name": "(~..) ~..",
          "normalized": "(Int,Int)-\u003e(a-\u003eb a)-\u003eRExpand c a",
          "package": "probability",
          "signature": "(Int,Int)-\u003e(a-\u003ec a)-\u003eRExpand prob a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Simulation.html#v:-126-.."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTracing\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Probability.Trace",
          "name": "Trace",
          "package": "probability",
          "source": "src/Numeric-Probability-Trace.html",
          "type": "module"
        },
        "index": {
          "description": "Tracing",
          "hierarchy": "Numeric Probability Trace",
          "module": "Numeric.Probability.Trace",
          "name": "Trace",
          "package": "probability",
          "partial": "Trace",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Trace.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Trace",
          "name": "Expand",
          "package": "probability",
          "source": "src/Numeric-Probability-Trace.html#Expand",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Probability Trace",
          "module": "Numeric.Probability.Trace",
          "name": "Expand",
          "package": "probability",
          "partial": "Expand",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Trace.html#t:Expand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Trace",
          "name": "RExpand",
          "package": "probability",
          "source": "src/Numeric-Probability-Trace.html#RExpand",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Probability Trace",
          "module": "Numeric.Probability.Trace",
          "name": "RExpand",
          "package": "probability",
          "partial": "RExpand",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Trace.html#t:RExpand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Trace",
          "name": "RSpace",
          "package": "probability",
          "source": "src/Numeric-Probability-Trace.html#RSpace",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Probability Trace",
          "module": "Numeric.Probability.Trace",
          "name": "RSpace",
          "package": "probability",
          "partial": "RSpace",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Trace.html#t:RSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Trace",
          "name": "RTrace",
          "package": "probability",
          "source": "src/Numeric-Probability-Trace.html#RTrace",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Probability Trace",
          "module": "Numeric.Probability.Trace",
          "name": "RTrace",
          "package": "probability",
          "partial": "RTrace",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Trace.html#t:RTrace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Trace",
          "name": "RWalk",
          "package": "probability",
          "source": "src/Numeric-Probability-Trace.html#RWalk",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Probability Trace",
          "module": "Numeric.Probability.Trace",
          "name": "RWalk",
          "package": "probability",
          "partial": "RWalk",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Trace.html#t:RWalk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Trace",
          "name": "Space",
          "package": "probability",
          "source": "src/Numeric-Probability-Trace.html#Space",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Probability Trace",
          "module": "Numeric.Probability.Trace",
          "name": "Space",
          "package": "probability",
          "partial": "Space",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Trace.html#t:Space"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Trace",
          "name": "Trace",
          "package": "probability",
          "source": "src/Numeric-Probability-Trace.html#Trace",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Probability Trace",
          "module": "Numeric.Probability.Trace",
          "name": "Trace",
          "package": "probability",
          "partial": "Trace",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Trace.html#t:Trace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Trace",
          "name": "Walk",
          "package": "probability",
          "source": "src/Numeric-Probability-Trace.html#Walk",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Probability Trace",
          "module": "Numeric.Probability.Trace",
          "name": "Walk",
          "package": "probability",
          "partial": "Walk",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Trace.html#t:Walk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emerge\u003c/a\u003e\u003c/code\u003e converts a list of \u003ccode\u003e\u003ca\u003eRTrace\u003c/a\u003e\u003c/code\u003es\ninto a list of randomized distributions, i.e., an \u003ccode\u003e\u003ca\u003eRSpace\u003c/a\u003e\u003c/code\u003e,\nby creating a randomized distribution for each list position across all traces\n\u003c/p\u003e",
          "module": "Numeric.Probability.Trace",
          "name": "merge",
          "package": "probability",
          "signature": "[RTrace a] -\u003e RSpace prob a",
          "source": "src/Numeric-Probability-Trace.html#merge",
          "type": "function"
        },
        "index": {
          "description": "merge converts list of RTrace into list of randomized distributions i.e an RSpace by creating randomized distribution for each list position across all traces",
          "hierarchy": "Numeric Probability Trace",
          "module": "Numeric.Probability.Trace",
          "name": "merge",
          "normalized": "[RTrace a]-\u003eRSpace b a",
          "package": "probability",
          "signature": "[RTrace a]-\u003eRSpace prob a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Trace.html#v:merge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewalk is a bounded version of the predefined function iterate\n\u003c/p\u003e",
          "module": "Numeric.Probability.Trace",
          "name": "walk",
          "package": "probability",
          "signature": "Int -\u003e Change a -\u003e Walk a",
          "source": "src/Numeric-Probability-Trace.html#walk",
          "type": "function"
        },
        "index": {
          "description": "walk is bounded version of the predefined function iterate",
          "hierarchy": "Numeric Probability Trace",
          "module": "Numeric.Probability.Trace",
          "name": "walk",
          "normalized": "Int-\u003eChange a-\u003eWalk a",
          "package": "probability",
          "signature": "Int-\u003eChange a-\u003eWalk a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Trace.html#v:walk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Trace",
          "name": "zipListWith",
          "package": "probability",
          "signature": "([a] -\u003e b) -\u003e [[a]] -\u003e [b]",
          "source": "src/Numeric-Probability-Trace.html#zipListWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Trace",
          "module": "Numeric.Probability.Trace",
          "name": "zipListWith",
          "normalized": "([a]-\u003eb)-\u003e[[a]]-\u003e[b]",
          "package": "probability",
          "partial": "List With",
          "signature": "([a]-\u003eb)-\u003e[[a]]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Trace.html#v:zipListWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDeterministic and probabilistic generators\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Probability.Transition",
          "name": "Transition",
          "package": "probability",
          "source": "src/Numeric-Probability-Transition.html",
          "type": "module"
        },
        "index": {
          "description": "Deterministic and probabilistic generators",
          "hierarchy": "Numeric Probability Transition",
          "module": "Numeric.Probability.Transition",
          "name": "Transition",
          "package": "probability",
          "partial": "Transition",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Transition.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edeterministic generator\n\u003c/p\u003e",
          "module": "Numeric.Probability.Transition",
          "name": "Change",
          "package": "probability",
          "source": "src/Numeric-Probability-Transition.html#Change",
          "type": "type"
        },
        "index": {
          "description": "deterministic generator",
          "hierarchy": "Numeric Probability Transition",
          "module": "Numeric.Probability.Transition",
          "name": "Change",
          "package": "probability",
          "partial": "Change",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Transition.html#t:Change"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efunctions to convert a list of changes into a transition\n\u003c/p\u003e",
          "module": "Numeric.Probability.Transition",
          "name": "SpreadC",
          "package": "probability",
          "source": "src/Numeric-Probability-Transition.html#SpreadC",
          "type": "type"
        },
        "index": {
          "description": "functions to convert list of changes into transition",
          "hierarchy": "Numeric Probability Transition",
          "module": "Numeric.Probability.Transition",
          "name": "SpreadC",
          "package": "probability",
          "partial": "Spread",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Transition.html#t:SpreadC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efunctions to convert a list of transitions into a transition\n\u003c/p\u003e",
          "module": "Numeric.Probability.Transition",
          "name": "SpreadT",
          "package": "probability",
          "source": "src/Numeric-Probability-Transition.html#SpreadT",
          "type": "type"
        },
        "index": {
          "description": "functions to convert list of transitions into transition",
          "hierarchy": "Numeric Probability Transition",
          "module": "Numeric.Probability.Transition",
          "name": "SpreadT",
          "package": "probability",
          "partial": "Spread",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Transition.html#t:SpreadT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eprobabilistic generator\n\u003c/p\u003e",
          "module": "Numeric.Probability.Transition",
          "name": "T",
          "package": "probability",
          "source": "src/Numeric-Probability-Transition.html#T",
          "type": "type"
        },
        "index": {
          "description": "probabilistic generator",
          "hierarchy": "Numeric Probability Transition",
          "module": "Numeric.Probability.Transition",
          "name": "T",
          "package": "probability",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Transition.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Transition",
          "name": "apply",
          "package": "probability",
          "signature": "Change a -\u003e T prob a",
          "source": "src/Numeric-Probability-Transition.html#apply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Transition",
          "module": "Numeric.Probability.Transition",
          "name": "apply",
          "normalized": "Change a-\u003eT b a",
          "package": "probability",
          "signature": "Change a-\u003eT prob a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Transition.html#v:apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComposition of transitions similar to \u003ccode\u003e\u003ca\u003ecompose\u003c/a\u003e\u003c/code\u003e\nbut with intermediate duplicate elimination.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Transition",
          "name": "compose",
          "package": "probability",
          "signature": "[T prob a] -\u003e T prob a",
          "source": "src/Numeric-Probability-Transition.html#compose",
          "type": "function"
        },
        "index": {
          "description": "Composition of transitions similar to compose but with intermediate duplicate elimination",
          "hierarchy": "Numeric Probability Transition",
          "module": "Numeric.Probability.Transition",
          "name": "compose",
          "normalized": "[T a b]-\u003eT a b",
          "package": "probability",
          "signature": "[T prob a]-\u003eT prob a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Transition.html#v:compose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Transition",
          "name": "enum",
          "package": "probability",
          "signature": "[Int] -\u003e SpreadC prob a",
          "source": "src/Numeric-Probability-Transition.html#enum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Transition",
          "module": "Numeric.Probability.Transition",
          "name": "enum",
          "normalized": "[Int]-\u003eSpreadC a b",
          "package": "probability",
          "signature": "[Int]-\u003eSpreadC prob a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Transition.html#v:enum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Transition",
          "name": "enumT",
          "package": "probability",
          "signature": "[Int] -\u003e SpreadT prob a",
          "source": "src/Numeric-Probability-Transition.html#enumT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Transition",
          "module": "Numeric.Probability.Transition",
          "name": "enumT",
          "normalized": "[Int]-\u003eSpreadT a b",
          "package": "probability",
          "signature": "[Int]-\u003eSpreadT prob a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Transition.html#v:enumT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn \u003ccode\u003efix $ go a -\u003e do ...; go xy\u003c/code\u003e\nany action after a \u003ccode\u003ego\u003c/code\u003e is ignored.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Transition",
          "name": "fix",
          "package": "probability",
          "signature": "((a -\u003e EitherT a (T prob) b) -\u003e a -\u003e EitherT a (T prob) b) -\u003e T prob a -\u003e T prob b",
          "source": "src/Numeric-Probability-Transition.html#fix",
          "type": "function"
        },
        "index": {
          "description": "In fix go do go xy any action after go is ignored",
          "hierarchy": "Numeric Probability Transition",
          "module": "Numeric.Probability.Transition",
          "name": "fix",
          "normalized": "((a-\u003eEitherT a(T b)c)-\u003ea-\u003eEitherT a(T b)c)-\u003eT b a-\u003eT b c",
          "package": "probability",
          "signature": "((a-\u003eEitherT a(T prob)b)-\u003ea-\u003eEitherT a(T prob)b)-\u003eT prob a-\u003eT prob b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Transition.html#v:fix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Transition",
          "name": "id",
          "package": "probability",
          "signature": "T prob a",
          "source": "src/Numeric-Probability-Transition.html#id",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Transition",
          "module": "Numeric.Probability.Transition",
          "name": "id",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Transition.html#v:id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Transition",
          "name": "lift",
          "package": "probability",
          "signature": "Spread prob a -\u003e SpreadC prob a",
          "source": "src/Numeric-Probability-Transition.html#lift",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Transition",
          "module": "Numeric.Probability.Transition",
          "name": "lift",
          "normalized": "Spread a b-\u003eSpreadC a b",
          "package": "probability",
          "signature": "Spread prob a-\u003eSpreadC prob a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Transition.html#v:lift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Transition",
          "name": "liftT",
          "package": "probability",
          "signature": "Spread prob (T prob a) -\u003e SpreadT prob a",
          "source": "src/Numeric-Probability-Transition.html#liftT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Transition",
          "module": "Numeric.Probability.Transition",
          "name": "liftT",
          "normalized": "Spread a(T a b)-\u003eSpreadT a b",
          "package": "probability",
          "signature": "Spread prob(T prob a)-\u003eSpreadT prob a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Transition.html#v:liftT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Transition",
          "name": "linear",
          "package": "probability",
          "signature": "SpreadC prob a",
          "source": "src/Numeric-Probability-Transition.html#linear",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Transition",
          "module": "Numeric.Probability.Transition",
          "name": "linear",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Transition.html#v:linear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Transition",
          "name": "linearT",
          "package": "probability",
          "signature": "SpreadT prob a",
          "source": "src/Numeric-Probability-Transition.html#linearT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Transition",
          "module": "Numeric.Probability.Transition",
          "name": "linearT",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Transition.html#v:linearT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e maps a change function to the result of a transformation\n(\u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e is somehow a lifted form of \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e)\nThe restricted type of \u003ccode\u003ef\u003c/code\u003e results from the fact that the\nargument to \u003ccode\u003et\u003c/code\u003e cannot be changed to \u003ccode\u003eb\u003c/code\u003e in the result \u003ccode\u003e\u003ca\u003eT\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Numeric.Probability.Transition",
          "name": "map",
          "package": "probability",
          "signature": "Change a -\u003e T prob a -\u003e T prob a",
          "source": "src/Numeric-Probability-Transition.html#map",
          "type": "function"
        },
        "index": {
          "description": "map maps change function to the result of transformation map is somehow lifted form of map The restricted type of results from the fact that the argument to cannot be changed to in the result type",
          "hierarchy": "Numeric Probability Transition",
          "module": "Numeric.Probability.Transition",
          "name": "map",
          "normalized": "Change a-\u003eT b a-\u003eT b a",
          "package": "probability",
          "signature": "Change a-\u003eT prob a-\u003eT prob a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Transition.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Transition",
          "name": "maybe",
          "package": "probability",
          "signature": "prob -\u003e Change a -\u003e T prob a",
          "source": "src/Numeric-Probability-Transition.html#maybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Transition",
          "module": "Numeric.Probability.Transition",
          "name": "maybe",
          "normalized": "a-\u003eChange b-\u003eT a b",
          "package": "probability",
          "signature": "prob-\u003eChange a-\u003eT prob a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Transition.html#v:maybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Transition",
          "name": "normal",
          "package": "probability",
          "signature": "SpreadC prob a",
          "source": "src/Numeric-Probability-Transition.html#normal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Transition",
          "module": "Numeric.Probability.Transition",
          "name": "normal",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Transition.html#v:normal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Transition",
          "name": "normalT",
          "package": "probability",
          "signature": "SpreadT prob a",
          "source": "src/Numeric-Probability-Transition.html#normalT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Transition",
          "module": "Numeric.Probability.Transition",
          "name": "normalT",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Transition.html#v:normalT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Transition",
          "name": "relative",
          "package": "probability",
          "signature": "[prob] -\u003e SpreadC prob a",
          "source": "src/Numeric-Probability-Transition.html#relative",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Transition",
          "module": "Numeric.Probability.Transition",
          "name": "relative",
          "normalized": "[a]-\u003eSpreadC a b",
          "package": "probability",
          "signature": "[prob]-\u003eSpreadC prob a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Transition.html#v:relative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Transition",
          "name": "relativeT",
          "package": "probability",
          "signature": "[prob] -\u003e SpreadT prob a",
          "source": "src/Numeric-Probability-Transition.html#relativeT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Transition",
          "module": "Numeric.Probability.Transition",
          "name": "relativeT",
          "normalized": "[a]-\u003eSpreadT a b",
          "package": "probability",
          "signature": "[prob]-\u003eSpreadT prob a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Transition.html#v:relativeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eunfold a distribution of transitions into one transition\n\u003c/p\u003e\u003cp\u003eNOTE: The argument transitions must be independent\n\u003c/p\u003e",
          "module": "Numeric.Probability.Transition",
          "name": "unfold",
          "package": "probability",
          "signature": "T prob (T prob a) -\u003e T prob a",
          "source": "src/Numeric-Probability-Transition.html#unfold",
          "type": "function"
        },
        "index": {
          "description": "unfold distribution of transitions into one transition NOTE The argument transitions must be independent",
          "hierarchy": "Numeric Probability Transition",
          "module": "Numeric.Probability.Transition",
          "name": "unfold",
          "normalized": "T a(T a b)-\u003eT a b",
          "package": "probability",
          "signature": "T prob(T prob a)-\u003eT prob a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Transition.html#v:unfold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Transition",
          "name": "uniform",
          "package": "probability",
          "signature": "SpreadC prob a",
          "source": "src/Numeric-Probability-Transition.html#uniform",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Transition",
          "module": "Numeric.Probability.Transition",
          "name": "uniform",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Transition.html#v:uniform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Transition",
          "name": "uniformT",
          "package": "probability",
          "signature": "SpreadT prob a",
          "source": "src/Numeric-Probability-Transition.html#uniformT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Transition",
          "module": "Numeric.Probability.Transition",
          "name": "uniformT",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Transition.html#v:uniformT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Transition",
          "name": "untilLeft",
          "package": "probability",
          "signature": "(a -\u003e T prob (Either b a)) -\u003e T prob a -\u003e T prob b",
          "source": "src/Numeric-Probability-Transition.html#untilLeft",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Transition",
          "module": "Numeric.Probability.Transition",
          "name": "untilLeft",
          "normalized": "(a-\u003eT b(Either c a))-\u003eT b a-\u003eT b c",
          "package": "probability",
          "partial": "Left",
          "signature": "(a-\u003eT prob(Either b a))-\u003eT prob a-\u003eT prob b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Transition.html#v:untilLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Visualize",
          "name": "Visualize",
          "package": "probability",
          "source": "src/Numeric-Probability-Visualize.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "Visualize",
          "package": "probability",
          "partial": "Visualize",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Visualize",
          "name": "Color",
          "package": "probability",
          "source": "src/Numeric-Probability-Visualize.html#Color",
          "type": "data"
        },
        "index": {
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "Color",
          "package": "probability",
          "partial": "Color",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#t:Color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eglobal settings for one figure\n\u003c/p\u003e",
          "module": "Numeric.Probability.Visualize",
          "name": "FigureEnv",
          "package": "probability",
          "source": "src/Numeric-Probability-Visualize.html#FigureEnv",
          "type": "data"
        },
        "index": {
          "description": "global settings for one figure",
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "FigureEnv",
          "package": "probability",
          "partial": "Figure Env",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#t:FigureEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Visualize",
          "name": "LineStyle",
          "package": "probability",
          "source": "src/Numeric-Probability-Visualize.html#LineStyle",
          "type": "data"
        },
        "index": {
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "LineStyle",
          "package": "probability",
          "partial": "Line Style",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#t:LineStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esettings for individual plots\n\u003c/p\u003e",
          "module": "Numeric.Probability.Visualize",
          "name": "Plot",
          "package": "probability",
          "source": "src/Numeric-Probability-Visualize.html#Plot",
          "type": "data"
        },
        "index": {
          "description": "settings for individual plots",
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "Plot",
          "package": "probability",
          "partial": "Plot",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#t:Plot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Visualize",
          "name": "PlotFun",
          "package": "probability",
          "source": "src/Numeric-Probability-Visualize.html#PlotFun",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "PlotFun",
          "package": "probability",
          "partial": "Plot Fun",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#t:PlotFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVisualization output\n\u003c/p\u003e",
          "module": "Numeric.Probability.Visualize",
          "name": "Vis",
          "package": "probability",
          "source": "src/Numeric-Probability-Visualize.html#Vis",
          "type": "type"
        },
        "index": {
          "description": "Visualization output",
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "Vis",
          "package": "probability",
          "partial": "Vis",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#t:Vis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Visualize",
          "name": "Black",
          "package": "probability",
          "signature": "Black",
          "source": "src/Numeric-Probability-Visualize.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "Black",
          "package": "probability",
          "partial": "Black",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:Black"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Visualize",
          "name": "Blue",
          "package": "probability",
          "signature": "Blue",
          "source": "src/Numeric-Probability-Visualize.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "Blue",
          "package": "probability",
          "partial": "Blue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:Blue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Visualize",
          "name": "Brown",
          "package": "probability",
          "signature": "Brown",
          "source": "src/Numeric-Probability-Visualize.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "Brown",
          "package": "probability",
          "partial": "Brown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:Brown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Visualize",
          "name": "Custom",
          "package": "probability",
          "signature": "Custom Int Int Int",
          "source": "src/Numeric-Probability-Visualize.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "Custom",
          "package": "probability",
          "partial": "Custom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:Custom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Visualize",
          "name": "Cyan",
          "package": "probability",
          "signature": "Cyan",
          "source": "src/Numeric-Probability-Visualize.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "Cyan",
          "package": "probability",
          "partial": "Cyan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:Cyan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Visualize",
          "name": "DarkGray",
          "package": "probability",
          "signature": "DarkGray",
          "source": "src/Numeric-Probability-Visualize.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "DarkGray",
          "package": "probability",
          "partial": "Dark Gray",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:DarkGray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Visualize",
          "name": "Dashed",
          "package": "probability",
          "signature": "Dashed",
          "source": "src/Numeric-Probability-Visualize.html#LineStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "Dashed",
          "package": "probability",
          "partial": "Dashed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:Dashed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Visualize",
          "name": "DotDash",
          "package": "probability",
          "signature": "DotDash",
          "source": "src/Numeric-Probability-Visualize.html#LineStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "DotDash",
          "package": "probability",
          "partial": "Dot Dash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:DotDash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Visualize",
          "name": "Dotted",
          "package": "probability",
          "signature": "Dotted",
          "source": "src/Numeric-Probability-Visualize.html#LineStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "Dotted",
          "package": "probability",
          "partial": "Dotted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:Dotted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Visualize",
          "name": "FE",
          "package": "probability",
          "signature": "FE",
          "source": "src/Numeric-Probability-Visualize.html#FigureEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "FE",
          "package": "probability",
          "partial": "FE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:FE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Visualize",
          "name": "Gray",
          "package": "probability",
          "signature": "Gray",
          "source": "src/Numeric-Probability-Visualize.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "Gray",
          "package": "probability",
          "partial": "Gray",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:Gray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Visualize",
          "name": "Green",
          "package": "probability",
          "signature": "Green",
          "source": "src/Numeric-Probability-Visualize.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "Green",
          "package": "probability",
          "partial": "Green",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:Green"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Visualize",
          "name": "LightGreen",
          "package": "probability",
          "signature": "LightGreen",
          "source": "src/Numeric-Probability-Visualize.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "LightGreen",
          "package": "probability",
          "partial": "Light Green",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:LightGreen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Visualize",
          "name": "LongDash",
          "package": "probability",
          "signature": "LongDash",
          "source": "src/Numeric-Probability-Visualize.html#LineStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "LongDash",
          "package": "probability",
          "partial": "Long Dash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:LongDash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Visualize",
          "name": "Magenta",
          "package": "probability",
          "signature": "Magenta",
          "source": "src/Numeric-Probability-Visualize.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "Magenta",
          "package": "probability",
          "partial": "Magenta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:Magenta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Visualize",
          "name": "Orange",
          "package": "probability",
          "signature": "Orange",
          "source": "src/Numeric-Probability-Visualize.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "Orange",
          "package": "probability",
          "partial": "Orange",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:Orange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Visualize",
          "name": "Plot",
          "package": "probability",
          "signature": "Plot",
          "source": "src/Numeric-Probability-Visualize.html#Plot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "Plot",
          "package": "probability",
          "partial": "Plot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:Plot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Visualize",
          "name": "Purple",
          "package": "probability",
          "signature": "Purple",
          "source": "src/Numeric-Probability-Visualize.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "Purple",
          "package": "probability",
          "partial": "Purple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:Purple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Visualize",
          "name": "Red",
          "package": "probability",
          "signature": "Red",
          "source": "src/Numeric-Probability-Visualize.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "Red",
          "package": "probability",
          "partial": "Red",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:Red"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Visualize",
          "name": "Solid",
          "package": "probability",
          "signature": "Solid",
          "source": "src/Numeric-Probability-Visualize.html#LineStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "Solid",
          "package": "probability",
          "partial": "Solid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:Solid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Visualize",
          "name": "TwoDash",
          "package": "probability",
          "signature": "TwoDash",
          "source": "src/Numeric-Probability-Visualize.html#LineStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "TwoDash",
          "package": "probability",
          "partial": "Two Dash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:TwoDash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Visualize",
          "name": "White",
          "package": "probability",
          "signature": "White",
          "source": "src/Numeric-Probability-Visualize.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "White",
          "package": "probability",
          "partial": "White",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:White"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Visualize",
          "name": "Yellow",
          "package": "probability",
          "signature": "Yellow",
          "source": "src/Numeric-Probability-Visualize.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "Yellow",
          "package": "probability",
          "partial": "Yellow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:Yellow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Visualize",
          "name": "autoColor",
          "package": "probability",
          "signature": "[Plot] -\u003e [Plot]",
          "source": "src/Numeric-Probability-Visualize.html#autoColor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "autoColor",
          "normalized": "[Plot]-\u003e[Plot]",
          "package": "probability",
          "partial": "Color",
          "signature": "[Plot]-\u003e[Plot]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:autoColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Visualize",
          "name": "color",
          "package": "probability",
          "signature": "Color",
          "source": "src/Numeric-Probability-Visualize.html#Plot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "color",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Visualize",
          "name": "colors",
          "package": "probability",
          "signature": "[Color]",
          "source": "src/Numeric-Probability-Visualize.html#colors",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "colors",
          "normalized": "[Color]",
          "package": "probability",
          "signature": "[Color]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:colors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewe want to increase the bounds absolutely, account for negative numbers\n\u003c/p\u003e",
          "module": "Numeric.Probability.Visualize",
          "name": "decr",
          "package": "probability",
          "signature": "a -\u003e a",
          "source": "src/Numeric-Probability-Visualize.html#incr",
          "type": "function"
        },
        "index": {
          "description": "we want to increase the bounds absolutely account for negative numbers",
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "decr",
          "normalized": "a-\u003ea",
          "package": "probability",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:decr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Visualize",
          "name": "drawy",
          "package": "probability",
          "signature": "Int -\u003e Plot -\u003e [a] -\u003e String",
          "source": "src/Numeric-Probability-Visualize.html#drawy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "drawy",
          "normalized": "Int-\u003ePlot-\u003e[a]-\u003eString",
          "package": "probability",
          "signature": "Int-\u003ePlot-\u003e[a]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:drawy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Visualize",
          "name": "fig",
          "package": "probability",
          "signature": "[Plot] -\u003e Vis",
          "source": "src/Numeric-Probability-Visualize.html#fig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "fig",
          "normalized": "[Plot]-\u003eVis",
          "package": "probability",
          "signature": "[Plot]-\u003eVis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:fig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Visualize",
          "name": "figP",
          "package": "probability",
          "signature": "FigureEnv -\u003e [Plot] -\u003e Vis",
          "source": "src/Numeric-Probability-Visualize.html#figP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "figP",
          "normalized": "FigureEnv-\u003e[Plot]-\u003eVis",
          "package": "probability",
          "signature": "FigureEnv-\u003e[Plot]-\u003eVis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:figP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edefault settings for figure environment\n\u003c/p\u003e",
          "module": "Numeric.Probability.Visualize",
          "name": "figure",
          "package": "probability",
          "signature": "FigureEnv",
          "source": "src/Numeric-Probability-Visualize.html#figure",
          "type": "function"
        },
        "index": {
          "description": "default settings for figure environment",
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "figure",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:figure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Visualize",
          "name": "fileName",
          "package": "probability",
          "signature": "String",
          "source": "src/Numeric-Probability-Visualize.html#FigureEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "fileName",
          "package": "probability",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:fileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewe want to increase the bounds absolutely, account for negative numbers\n\u003c/p\u003e",
          "module": "Numeric.Probability.Visualize",
          "name": "incr",
          "package": "probability",
          "signature": "a -\u003e a",
          "source": "src/Numeric-Probability-Visualize.html#incr",
          "type": "function"
        },
        "index": {
          "description": "we want to increase the bounds absolutely account for negative numbers",
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "incr",
          "normalized": "a-\u003ea",
          "package": "probability",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:incr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Visualize",
          "name": "label",
          "package": "probability",
          "signature": "String",
          "source": "src/Numeric-Probability-Visualize.html#Plot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "label",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Visualize",
          "name": "legend",
          "package": "probability",
          "signature": "Float -\u003e Float -\u003e [Plot] -\u003e String",
          "source": "src/Numeric-Probability-Visualize.html#legend",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "legend",
          "normalized": "Float-\u003eFloat-\u003e[Plot]-\u003eString",
          "package": "probability",
          "signature": "Float-\u003eFloat-\u003e[Plot]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:legend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Visualize",
          "name": "lineStyle",
          "package": "probability",
          "signature": "LineStyle",
          "source": "src/Numeric-Probability-Visualize.html#Plot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "lineStyle",
          "package": "probability",
          "partial": "Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:lineStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Visualize",
          "name": "lineWidth",
          "package": "probability",
          "signature": "Int",
          "source": "src/Numeric-Probability-Visualize.html#Plot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "lineWidth",
          "package": "probability",
          "partial": "Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:lineWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Visualize",
          "name": "metaTuple",
          "package": "probability",
          "signature": "[Float] -\u003e [(Float, Float)] -\u003e [(Float, Float)]",
          "source": "src/Numeric-Probability-Visualize.html#metaTuple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "metaTuple",
          "normalized": "[Float]-\u003e[(Float,Float)]-\u003e[(Float,Float)]",
          "package": "probability",
          "partial": "Tuple",
          "signature": "[Float]-\u003e[(Float,Float)]-\u003e[(Float,Float)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:metaTuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Visualize",
          "name": "out0",
          "package": "probability",
          "signature": "FilePath -\u003e String -\u003e IO ()",
          "source": "src/Numeric-Probability-Visualize.html#out0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "out0",
          "normalized": "FilePath-\u003eString-\u003eIO()",
          "package": "probability",
          "signature": "FilePath-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:out0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Visualize",
          "name": "out1",
          "package": "probability",
          "signature": "FilePath -\u003e String -\u003e IO ()",
          "source": "src/Numeric-Probability-Visualize.html#out1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "out1",
          "normalized": "FilePath-\u003eString-\u003eIO()",
          "package": "probability",
          "signature": "FilePath-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:out1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edefault plotting environment\n\u003c/p\u003e",
          "module": "Numeric.Probability.Visualize",
          "name": "plot",
          "package": "probability",
          "signature": "Plot",
          "source": "src/Numeric-Probability-Visualize.html#plot",
          "type": "function"
        },
        "index": {
          "description": "default plotting environment",
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "plot",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:plot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate a plot from a distribution\n\u003c/p\u003e",
          "module": "Numeric.Probability.Visualize",
          "name": "plotD",
          "package": "probability",
          "signature": "Dist a -\u003e Plot",
          "source": "src/Numeric-Probability-Visualize.html#plotD",
          "type": "function"
        },
        "index": {
          "description": "create plot from distribution",
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "plotD",
          "normalized": "Dist a-\u003ePlot",
          "package": "probability",
          "signature": "Dist a-\u003ePlot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:plotD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate a plot from a function\n\u003c/p\u003e",
          "module": "Numeric.Probability.Visualize",
          "name": "plotF",
          "package": "probability",
          "signature": "(Float, Float, Float) -\u003e (a -\u003e b) -\u003e Plot",
          "source": "src/Numeric-Probability-Visualize.html#plotF",
          "type": "function"
        },
        "index": {
          "description": "create plot from function",
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "plotF",
          "normalized": "(Float,Float,Float)-\u003e(a-\u003eb)-\u003ePlot",
          "package": "probability",
          "signature": "(Float,Float,Float)-\u003e(a-\u003eb)-\u003ePlot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:plotF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate a plot from a list\n\u003c/p\u003e",
          "module": "Numeric.Probability.Visualize",
          "name": "plotL",
          "package": "probability",
          "signature": "[a] -\u003e Plot",
          "source": "src/Numeric-Probability-Visualize.html#plotL",
          "type": "function"
        },
        "index": {
          "description": "create plot from list",
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "plotL",
          "normalized": "[a]-\u003ePlot",
          "package": "probability",
          "signature": "[a]-\u003ePlot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:plotL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Visualize",
          "name": "plotRD",
          "package": "probability",
          "signature": "RDist a -\u003e IO Plot",
          "source": "src/Numeric-Probability-Visualize.html#plotRD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "plotRD",
          "normalized": "RDist a-\u003eIO Plot",
          "package": "probability",
          "partial": "RD",
          "signature": "RDist a-\u003eIO Plot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:plotRD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Visualize",
          "name": "plotRL",
          "package": "probability",
          "signature": "T [a] -\u003e IO Plot",
          "source": "src/Numeric-Probability-Visualize.html#plotRL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "plotRL",
          "normalized": "T[a]-\u003eIO Plot",
          "package": "probability",
          "partial": "RL",
          "signature": "T[a]-\u003eIO Plot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:plotRL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Visualize",
          "name": "setColor",
          "package": "probability",
          "signature": "Plot -\u003e Color -\u003e Plot",
          "source": "src/Numeric-Probability-Visualize.html#setColor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "setColor",
          "normalized": "Plot-\u003eColor-\u003ePlot",
          "package": "probability",
          "partial": "Color",
          "signature": "Plot-\u003eColor-\u003ePlot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:setColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Visualize",
          "name": "showParams",
          "package": "probability",
          "signature": "[a] -\u003e [String] -\u003e String",
          "source": "src/Numeric-Probability-Visualize.html#showParams",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "showParams",
          "normalized": "[a]-\u003e[String]-\u003eString",
          "package": "probability",
          "partial": "Params",
          "signature": "[a]-\u003e[String]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:showParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Visualize",
          "name": "title",
          "package": "probability",
          "signature": "String",
          "source": "src/Numeric-Probability-Visualize.html#FigureEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "title",
          "package": "probability",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:title"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Visualize",
          "name": "vec",
          "package": "probability",
          "signature": "[a] -\u003e String",
          "source": "src/Numeric-Probability-Visualize.html#vec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "vec",
          "normalized": "[a]-\u003eString",
          "package": "probability",
          "signature": "[a]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:vec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Visualize",
          "name": "xLabel",
          "package": "probability",
          "signature": "String",
          "source": "src/Numeric-Probability-Visualize.html#FigureEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "xLabel",
          "package": "probability",
          "partial": "Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:xLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Visualize",
          "name": "xs",
          "package": "probability",
          "signature": "[Float]",
          "source": "src/Numeric-Probability-Visualize.html#Plot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "xs",
          "normalized": "[Float]",
          "package": "probability",
          "signature": "[Float]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:xs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Visualize",
          "name": "yLabel",
          "package": "probability",
          "signature": "String",
          "source": "src/Numeric-Probability-Visualize.html#FigureEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "yLabel",
          "package": "probability",
          "partial": "Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:yLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Visualize",
          "name": "yls",
          "package": "probability",
          "signature": "[Float] -\u003e Plot -\u003e Plot",
          "source": "src/Numeric-Probability-Visualize.html#yls",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "yls",
          "normalized": "[Float]-\u003ePlot-\u003ePlot",
          "package": "probability",
          "signature": "[Float]-\u003ePlot-\u003ePlot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:yls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Probability.Visualize",
          "name": "ys",
          "package": "probability",
          "signature": "[Float]",
          "source": "src/Numeric-Probability-Visualize.html#Plot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Probability Visualize",
          "module": "Numeric.Probability.Visualize",
          "name": "ys",
          "normalized": "[Float]",
          "package": "probability",
          "signature": "[Float]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/probability/docs/Numeric-Probability-Visualize.html#v:ys"
      }
    }
  ]
]