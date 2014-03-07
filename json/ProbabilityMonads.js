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
        "word": "ProbabilityMonads"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "A random distribution where some samples may be discarded.\n",
          "module": "Control.Monad.Distribution.Base",
          "name": "3ABRand",
          "package": "ProbabilityMonads",
          "type": "type"
        },
        "index": {
          "description": "random distribution where some samples may be discarded",
          "hierarchy": "Control Monad Distribution Base",
          "module": "Control.Monad.Distribution.Base",
          "name": "3ABRand",
          "package": "ProbabilityMonads",
          "partial": "ABRand",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ProbabilityMonads/docs/Control-Monad-Distribution-Base.html#t:3ABRand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Distribution.Base",
          "name": "3ADist",
          "package": "ProbabilityMonads",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad Distribution Base",
          "module": "Control.Monad.Distribution.Base",
          "name": "3ADist",
          "package": "ProbabilityMonads",
          "partial": "ADist",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ProbabilityMonads/docs/Control-Monad-Distribution-Base.html#v:3ADist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply Bayes' rule, discarding impossible outcomes and normalizing the\n probabilities that remain.\n\u003c/p\u003e\u003cp\u003eTODO: It's entirely possible that this method should be moved to a type\n class.\n\u003c/p\u003e",
          "module": "Control.Monad.Distribution.Base",
          "name": "3Abayes",
          "package": "ProbabilityMonads",
          "signature": "MaybeT (MVT p []) a -\u003e Maybe (MVT p [] a)",
          "type": "function"
        },
        "index": {
          "description": "Apply Bayes rule discarding impossible outcomes and normalizing the probabilities that remain TODO It entirely possible that this method should be moved to type class",
          "hierarchy": "Control Monad Distribution Base",
          "module": "Control.Monad.Distribution.Base",
          "name": "3Abayes",
          "normalized": "MaybeT(MVT a[])b-\u003eMaybe(MVT a[]b)",
          "package": "ProbabilityMonads",
          "partial": "Abayes",
          "signature": "MaybeT(MVT p[])a-\u003eMaybe(MVT p[]a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ProbabilityMonads/docs/Control-Monad-Distribution-Base.html#v:3Abayes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Take \u003ctt\u003en\u003c/tt\u003e samples from the distribution \u003ctt\u003er\u003c/tt\u003e.\n",
          "module": "Control.Monad.Distribution.Base",
          "name": "3Asample",
          "package": "ProbabilityMonads",
          "signature": "m a -\u003e Int -\u003e m [a]",
          "type": "function"
        },
        "index": {
          "description": "Take samples from the distribution",
          "hierarchy": "Control Monad Distribution Base",
          "module": "Control.Monad.Distribution.Base",
          "name": "3Asample",
          "normalized": "a b-\u003eInt-\u003ea[b]",
          "package": "ProbabilityMonads",
          "partial": "Asample",
          "signature": "m a-\u003eInt-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ProbabilityMonads/docs/Control-Monad-Distribution-Base.html#v:3Asample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Take \u003ctt\u003en\u003c/tt\u003e samples from the distribution \u003ctt\u003er\u003c/tt\u003e, and eliminate any samples\n which fail a \u003ctt\u003e\u003ca\u003eguard\u003c/a\u003e\u003c/tt\u003e condition.\n",
          "module": "Control.Monad.Distribution.Base",
          "name": "3AsampleBayes",
          "package": "ProbabilityMonads",
          "signature": "MaybeT m a -\u003e Int -\u003e m [a]",
          "type": "function"
        },
        "index": {
          "description": "Take samples from the distribution and eliminate any samples which fail guard condition",
          "hierarchy": "Control Monad Distribution Base",
          "module": "Control.Monad.Distribution.Base",
          "name": "3AsampleBayes",
          "normalized": "MaybeT a b-\u003eInt-\u003ea[b]",
          "package": "ProbabilityMonads",
          "partial": "Asample Bayes",
          "signature": "MaybeT m a-\u003eInt-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ProbabilityMonads/docs/Control-Monad-Distribution-Base.html#v:3AsampleBayes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Take \u003ctt\u003en\u003c/tt\u003e samples from the distribution \u003ctt\u003er\u003c/tt\u003e using the IO monad, and\n eliminate any samples which fail a \u003ctt\u003e\u003ca\u003eguard\u003c/a\u003e\u003c/tt\u003e condition.\n\u003cp\u003eUsing the \u003ctt\u003e\u003ca\u003eDDist\u003c/a\u003e\u003c/tt\u003e and\n\u003ctt\u003e\u003ca\u003eBDDist\u003c/a\u003e\u003c/tt\u003e monads, you can compute exact\ndistributions. For example:\n\u003c/p\u003e\u003cpre\u003eddist family\n-- [MV 0.25 [Girl,Girl],\n--  MV 0.25 [Girl,Boy],\n--  MV 0.25 [Boy,Girl],\n--  MV 0.25 [Boy,Boy]]\n\u003c/pre\u003e\u003cp\u003eIf the probability distribution uses \u003ctt\u003e\u003ca\u003eguard\u003c/a\u003e\u003c/tt\u003e, you can run it\nusing \u003ctt\u003e\u003ca\u003ebddist\u003c/a\u003e\u003c/tt\u003e.\n\u003c/p\u003e\u003cpre\u003ebddist (tossesWithAtLeastOneHead 2)\n-- Just [MV 1%3 [Heads,Heads],\n--       MV 1%3 [Heads,Tails],\n--       MV 1%3 [Tails,Heads]]\n\u003c/pre\u003e\u003cp\u003eNote that we see rational numbers in this second example, because we used\n\u003ctt\u003eControl.Monad.Distribution.Rational\u003c/tt\u003e above.\n\u003c/p\u003e",
          "module": "Control.Monad.Distribution.Base",
          "name": "3AsampleBayesIO",
          "package": "ProbabilityMonads",
          "signature": "BRand StdGen a -\u003e Int -\u003e IO [a]",
          "type": "function"
        },
        "index": {
          "description": "Take samples from the distribution using the IO monad and eliminate any samples which fail guard condition Using the DDist and BDDist monads you can compute exact distributions For example ddist family MV Girl Girl MV Girl Boy MV Boy Girl MV Boy Boy If the probability distribution uses guard you can run it using bddist bddist tossesWithAtLeastOneHead Just MV Heads Heads MV Heads Tails MV Tails Heads Note that we see rational numbers in this second example because we used Control.Monad.Distribution.Rational above",
          "hierarchy": "Control Monad Distribution Base",
          "module": "Control.Monad.Distribution.Base",
          "name": "3AsampleBayesIO",
          "normalized": "BRand StdGen a-\u003eInt-\u003eIO[a]",
          "package": "ProbabilityMonads",
          "partial": "Asample Bayes IO",
          "signature": "BRand StdGen a-\u003eInt-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ProbabilityMonads/docs/Control-Monad-Distribution-Base.html#v:3AsampleBayesIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Take \u003ctt\u003en\u003c/tt\u003e samples from the distribution \u003ctt\u003er\u003c/tt\u003e using the IO monad.\n",
          "module": "Control.Monad.Distribution.Base",
          "name": "3AsampleIO",
          "package": "ProbabilityMonads",
          "signature": "Rand StdGen a -\u003e Int -\u003e IO [a]",
          "type": "function"
        },
        "index": {
          "description": "Take samples from the distribution using the IO monad",
          "hierarchy": "Control Monad Distribution Base",
          "module": "Control.Monad.Distribution.Base",
          "name": "3AsampleIO",
          "normalized": "Rand StdGen a-\u003eInt-\u003eIO[a]",
          "package": "ProbabilityMonads",
          "partial": "Asample IO",
          "signature": "Rand StdGen a-\u003eInt-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ProbabilityMonads/docs/Control-Monad-Distribution-Base.html#v:3AsampleIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Creates a new distribution from a list of values, weighting it evenly.\n\u003cp\u003eUsing \u003ctt\u003e\u003ca\u003eguard\u003c/a\u003e\u003c/tt\u003e, it's possible to calculate conditional\nprobabilities using Bayes' rule.  In the example below, we choose to\n\u003ctt\u003eControl.Monad.Distribution.Rational\u003c/tt\u003e, which calculates probabilities using\nexact rational numbers.  This is useful for small, interactive programs\nwhere you want answers like 1\u003cem\u003e3 and 2\u003c/em\u003e3 instead of 0.3333333 and 0.6666666.\n\u003c/p\u003e\u003cpre\u003e\n\nimport Control.Monad\nimport Control.Monad.Distribution.Rational\nimport Data.List\n\ndata Coin = Heads | Tails\n  deriving (Eq, Ord, Show)\n\ntoss = uniform [Heads, Tails]\n\ntosses n = sequence (replicate n toss)\n\ntossesWithAtLeastOneHead n = do\n  result \u003c- tosses n\n  guard (Heads `elem` result)\n  return result\n\u003c/pre\u003e\u003cp\u003eIn this example, we use \u003ctt\u003e\u003ca\u003eguard\u003c/a\u003e\u003c/tt\u003e to discard possible outcomes\nwhere no coin comes up heads.\n\u003c/p\u003e\u003cp\u003eSupport for probability distributions represented by sampling functions.\nThis API is heavily inspired by Sungwoo Park and colleagues'\n$lambda_{bigcirc}$ caculus \u003ca\u003ehttp://citeseer.ist.psu.edu/752237.html\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eTwo sampling-function monads are available: \u003ctt\u003e\u003ca\u003eRand\u003c/a\u003e\u003c/tt\u003e and\n\u003ctt\u003e\u003ca\u003eBRand\u003c/a\u003e\u003c/tt\u003e.  The former provides ordinary sampling functions, and the latter\nsupports Bayesian reasoning.\n\u003c/p\u003e\u003cp\u003eIt's possible run code in the \u003ctt\u003e\u003ca\u003eRand\u003c/a\u003e\u003c/tt\u003e monad using\neither \u003ctt\u003e\u003ca\u003esample\u003c/a\u003e\u003c/tt\u003e or \u003ctt\u003e\u003ca\u003esampleIO\u003c/a\u003e\u003c/tt\u003e.\n\u003c/p\u003e\u003cpre\u003esampleIO family 3\n-- [[Boy,Girl],[Boy,Girl],[Girl,Girl]]\n\u003c/pre\u003e\u003cp\u003eIf the probability distribution uses \u003ctt\u003e\u003ca\u003eguard\u003c/a\u003e\u003c/tt\u003e, you can run it\nusing \u003ctt\u003e\u003ca\u003esampleBayesIO\u003c/a\u003e\u003c/tt\u003e.  Note that one of the outcomes below was discarded,\nleaving 3 outcomes instead of the expected 4:\n\u003c/p\u003e\u003cpre\u003esampleBayesIO (tossesWithAtLeastOneHead 2) 4\n-- [[Tails,Heads],[Heads,Heads],[Tails,Heads]]\n\u003c/pre\u003e",
          "module": "Control.Monad.Distribution.Base",
          "name": "3Auniform",
          "package": "ProbabilityMonads",
          "signature": "[a] -\u003e d a",
          "type": "function"
        },
        "index": {
          "description": "Creates new distribution from list of values weighting it evenly Using guard it possible to calculate conditional probabilities using Bayes rule In the example below we choose to Control.Monad.Distribution.Rational which calculates probabilities using exact rational numbers This is useful for small interactive programs where you want answers like and instead of and import Control.Monad import Control.Monad.Distribution.Rational import Data.List data Coin Heads Tails deriving Eq Ord Show toss uniform Heads Tails tosses sequence replicate toss tossesWithAtLeastOneHead do result tosses guard Heads elem result return result In this example we use guard to discard possible outcomes where no coin comes up heads Support for probability distributions represented by sampling functions This API is heavily inspired by Sungwoo Park and colleagues lambda bigcirc caculus http citeseer.ist.psu.edu html Two sampling-function monads are available Rand and BRand The former provides ordinary sampling functions and the latter supports Bayesian reasoning It possible run code in the Rand monad using either sample or sampleIO sampleIO family Boy Girl Boy Girl Girl Girl If the probability distribution uses guard you can run it using sampleBayesIO Note that one of the outcomes below was discarded leaving outcomes instead of the expected sampleBayesIO tossesWithAtLeastOneHead Tails Heads Heads Heads Tails Heads",
          "hierarchy": "Control Monad Distribution Base",
          "module": "Control.Monad.Distribution.Base",
          "name": "3Auniform",
          "normalized": "[a]-\u003eb a",
          "package": "ProbabilityMonads",
          "partial": "Auniform",
          "signature": "[a]-\u003ed a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ProbabilityMonads/docs/Control-Monad-Distribution-Base.html#v:3Auniform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Creates a new distribution from a weighted list of values.  The\n individual weights must be non-negative, and they must sum to a\n positive number.\n",
          "module": "Control.Monad.Distribution.Base",
          "name": "3Aweighted",
          "package": "ProbabilityMonads",
          "signature": "[(a, Rational)] -\u003e d a",
          "type": "function"
        },
        "index": {
          "description": "Creates new distribution from weighted list of values The individual weights must be non-negative and they must sum to positive number",
          "hierarchy": "Control Monad Distribution Base",
          "module": "Control.Monad.Distribution.Base",
          "name": "3Aweighted",
          "normalized": "[(a,Rational)]-\u003eb a",
          "package": "ProbabilityMonads",
          "partial": "Aweighted",
          "signature": "[(a,Rational)]-\u003ed a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ProbabilityMonads/docs/Control-Monad-Distribution-Base.html#v:3Aweighted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "A version of \u003ctt\u003e\u003ca\u003eBDDist\u003c/a\u003e\u003c/tt\u003e with support for Bayes' theorem.\n",
          "module": "Control.Monad.Distribution.Rational",
          "name": "3ABDDist",
          "package": "ProbabilityMonads",
          "type": "type"
        },
        "index": {
          "description": "version of BDDist with support for Bayes theorem",
          "hierarchy": "Control Monad Distribution Rational",
          "module": "Control.Monad.Distribution.Rational",
          "name": "3ABDDist",
          "package": "ProbabilityMonads",
          "partial": "ABDDist",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ProbabilityMonads/docs/Control-Monad-Distribution-Rational.html#t:3ABDDist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "A discrete, finite probability distribution implemented using\n double-precision floating-point numbers.\n",
          "module": "Control.Monad.Distribution.Rational",
          "name": "3ADDist",
          "package": "ProbabilityMonads",
          "type": "type"
        },
        "index": {
          "description": "discrete finite probability distribution implemented using double-precision floating-point numbers",
          "hierarchy": "Control Monad Distribution Rational",
          "module": "Control.Monad.Distribution.Rational",
          "name": "3ADDist",
          "package": "ProbabilityMonads",
          "partial": "ADDist",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ProbabilityMonads/docs/Control-Monad-Distribution-Rational.html#t:3ADDist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Force a value to be interpreted as having type \u003ctt\u003e\u003ca\u003eBDDist\u003c/a\u003e\u003c/tt\u003e, and apply\n Bayes' rule.  Returns \u003ctt\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/tt\u003e if no possible combination of events\n will satisfy the guard conditions specified in \u003ctt\u003e\u003ca\u003eBDDist\u003c/a\u003e\u003c/tt\u003e.\n",
          "module": "[\"Control.Monad.Distribution.Rational\",\"Control.Monad.Distribution\"]",
          "name": "3Abddist",
          "package": "ProbabilityMonads",
          "signature": "BDDist a -\u003e Maybe (DDist a)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ProbabilityMonads/docs/Control-Monad-Distribution-Rational.html#v:3Abddist\",\"http://hackage.haskell.org/package/ProbabilityMonads/docs/Control-Monad-Distribution.html#v:3Abddist\"]"
        },
        "index": {
          "description": "Force value to be interpreted as having type BDDist and apply Bayes rule Returns Nothing if no possible combination of events will satisfy the guard conditions specified in BDDist",
          "hierarchy": "Control Monad Distribution Rational",
          "module": "Control.Monad.Distribution.Rational",
          "name": "3Abddist",
          "normalized": "BDDist a-\u003eMaybe(DDist a)",
          "package": "ProbabilityMonads",
          "partial": "Abddist",
          "signature": "BDDist a-\u003eMaybe(DDist a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ProbabilityMonads/docs/Control-Monad-Distribution-Rational.html#v:3Abddist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Force a value to be interpreted as having type \u003ctt\u003e\u003ca\u003eDDist\u003c/a\u003e\u003c/tt\u003e.\n",
          "module": "[\"Control.Monad.Distribution.Rational\",\"Control.Monad.Distribution\"]",
          "name": "3Addist",
          "package": "ProbabilityMonads",
          "signature": "DDist a -\u003e DDist a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ProbabilityMonads/docs/Control-Monad-Distribution-Rational.html#v:3Addist\",\"http://hackage.haskell.org/package/ProbabilityMonads/docs/Control-Monad-Distribution.html#v:3Addist\"]"
        },
        "index": {
          "description": "Force value to be interpreted as having type DDist",
          "hierarchy": "Control Monad Distribution Rational",
          "module": "Control.Monad.Distribution.Rational",
          "name": "3Addist",
          "normalized": "DDist a-\u003eDDist a",
          "package": "ProbabilityMonads",
          "partial": "Addist",
          "signature": "DDist a-\u003eDDist a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ProbabilityMonads/docs/Control-Monad-Distribution-Rational.html#v:3Addist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "A version of \u003ctt\u003e\u003ca\u003eBDDist\u003c/a\u003e\u003c/tt\u003e with support for Bayes' theorem.\n",
          "module": "Control.Monad.Distribution",
          "name": "3ABDDist",
          "package": "ProbabilityMonads",
          "type": "type"
        },
        "index": {
          "description": "version of BDDist with support for Bayes theorem",
          "hierarchy": "Control Monad Distribution",
          "module": "Control.Monad.Distribution",
          "name": "3ABDDist",
          "package": "ProbabilityMonads",
          "partial": "ABDDist",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ProbabilityMonads/docs/Control-Monad-Distribution.html#t:3ABDDist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "A discrete, finite probability distribution implemented using rational\n numbers.\n",
          "module": "Control.Monad.Distribution",
          "name": "3ADDist",
          "package": "ProbabilityMonads",
          "type": "type"
        },
        "index": {
          "description": "discrete finite probability distribution implemented using rational numbers",
          "hierarchy": "Control Monad Distribution",
          "module": "Control.Monad.Distribution",
          "name": "3ADDist",
          "package": "ProbabilityMonads",
          "partial": "ADDist",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ProbabilityMonads/docs/Control-Monad-Distribution.html#t:3ADDist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.MonoidValue",
          "name": "3AMV",
          "package": "ProbabilityMonads",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Monad MonoidValue",
          "module": "Control.Monad.MonoidValue",
          "name": "3AMV",
          "package": "ProbabilityMonads",
          "partial": "AMV",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ProbabilityMonads/docs/Control-Monad-MonoidValue.html#t:3AMV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.MonoidValue",
          "name": "3AMVT",
          "package": "ProbabilityMonads",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Monad MonoidValue",
          "module": "Control.Monad.MonoidValue",
          "name": "3AMVT",
          "package": "ProbabilityMonads",
          "partial": "AMVT",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/ProbabilityMonads/docs/Control-Monad-MonoidValue.html#t:3AMVT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.MonoidValue",
          "name": "3AmvMonoid",
          "package": "ProbabilityMonads",
          "signature": "MV w a -\u003e w",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad MonoidValue",
          "module": "Control.Monad.MonoidValue",
          "name": "3AmvMonoid",
          "normalized": "MV a b-\u003ea",
          "package": "ProbabilityMonads",
          "partial": "Amv Monoid",
          "signature": "MV w a-\u003ew",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ProbabilityMonads/docs/Control-Monad-MonoidValue.html#v:3AmvMonoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.MonoidValue",
          "name": "3AmvValue",
          "package": "ProbabilityMonads",
          "signature": "MV w a -\u003e a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad MonoidValue",
          "module": "Control.Monad.MonoidValue",
          "name": "3AmvValue",
          "normalized": "MV a b-\u003eb",
          "package": "ProbabilityMonads",
          "partial": "Amv Value",
          "signature": "MV w a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ProbabilityMonads/docs/Control-Monad-MonoidValue.html#v:3AmvValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.MonoidValue",
          "name": "3ArunMVT",
          "package": "ProbabilityMonads",
          "signature": "MVT w m a -\u003e m (MV w a)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad MonoidValue",
          "module": "Control.Monad.MonoidValue",
          "name": "3ArunMVT",
          "normalized": "MVT a b c-\u003eb(MV a c)",
          "package": "ProbabilityMonads",
          "partial": "Arun MVT",
          "signature": "MVT w m a-\u003em(MV w a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ProbabilityMonads/docs/Control-Monad-MonoidValue.html#v:3ArunMVT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Probability.Base",
          "name": "3AProbability",
          "package": "ProbabilityMonads",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Probability Base",
          "module": "Data.Probability.Base",
          "name": "3AProbability",
          "package": "ProbabilityMonads",
          "partial": "AProbability",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ProbabilityMonads/docs/Data-Probability-Base.html#v:3AProbability"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Convert a probability to a rational number.\n",
          "module": "Data.Probability.Base",
          "name": "3AfromProb",
          "package": "ProbabilityMonads",
          "signature": "p -\u003e Rational",
          "type": "function"
        },
        "index": {
          "description": "Convert probability to rational number",
          "hierarchy": "Data Probability Base",
          "module": "Data.Probability.Base",
          "name": "3AfromProb",
          "normalized": "a-\u003eRational",
          "package": "ProbabilityMonads",
          "partial": "Afrom Prob",
          "signature": "p-\u003eRational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ProbabilityMonads/docs/Data-Probability-Base.html#v:3AfromProb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Given the probabilities of two disjoint events, calculate the\n probability of either event occuring.\n",
          "module": "Data.Probability.Base",
          "name": "3Apadd",
          "package": "ProbabilityMonads",
          "signature": "p -\u003e p -\u003e p",
          "type": "function"
        },
        "index": {
          "description": "Given the probabilities of two disjoint events calculate the probability of either event occuring",
          "hierarchy": "Data Probability Base",
          "module": "Data.Probability.Base",
          "name": "3Apadd",
          "normalized": "a-\u003ea-\u003ea",
          "package": "ProbabilityMonads",
          "partial": "Apadd",
          "signature": "p-\u003ep-\u003ep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ProbabilityMonads/docs/Data-Probability-Base.html#v:3Apadd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Given the probabilities of two indepedent events, calculate the\n probability of both events occuring.\n",
          "module": "Data.Probability.Base",
          "name": "3Apmul",
          "package": "ProbabilityMonads",
          "signature": "p -\u003e p -\u003e p",
          "type": "function"
        },
        "index": {
          "description": "Given the probabilities of two indepedent events calculate the probability of both events occuring",
          "hierarchy": "Data Probability Base",
          "module": "Data.Probability.Base",
          "name": "3Apmul",
          "normalized": "a-\u003ea-\u003ea",
          "package": "ProbabilityMonads",
          "partial": "Apmul",
          "signature": "p-\u003ep-\u003ep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ProbabilityMonads/docs/Data-Probability-Base.html#v:3Apmul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Given the probability of an event occuring, calculate the\n probability of the event \u003cem\u003enot\u003c/em\u003e occuring.\n",
          "module": "Data.Probability.Base",
          "name": "3Apnot",
          "package": "ProbabilityMonads",
          "signature": "p -\u003e p",
          "type": "function"
        },
        "index": {
          "description": "Given the probability of an event occuring calculate the probability of the event not occuring",
          "hierarchy": "Data Probability Base",
          "module": "Data.Probability.Base",
          "name": "3Apnot",
          "normalized": "a-\u003ea",
          "package": "ProbabilityMonads",
          "partial": "Apnot",
          "signature": "p-\u003ep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ProbabilityMonads/docs/Data-Probability-Base.html#v:3Apnot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Create a probability from a rational number between 0 and 1, inclusive.\n",
          "module": "Data.Probability.Base",
          "name": "3Aprob",
          "package": "ProbabilityMonads",
          "signature": "Rational -\u003e p",
          "type": "function"
        },
        "index": {
          "description": "Create probability from rational number between and inclusive",
          "hierarchy": "Data Probability Base",
          "module": "Data.Probability.Base",
          "name": "3Aprob",
          "normalized": "Rational-\u003ea",
          "package": "ProbabilityMonads",
          "partial": "Aprob",
          "signature": "Rational-\u003ep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ProbabilityMonads/docs/Data-Probability-Base.html#v:3Aprob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Probability.Rational",
          "name": "3AProb",
          "package": "ProbabilityMonads",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Probability Rational",
          "module": "Data.Probability.Rational",
          "name": "3AProb",
          "package": "ProbabilityMonads",
          "partial": "AProb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ProbabilityMonads/docs/Data-Probability-Rational.html#t:3AProb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Probability",
          "name": "3AProb",
          "package": "ProbabilityMonads",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Probability",
          "module": "Data.Probability",
          "name": "3AProb",
          "package": "ProbabilityMonads",
          "partial": "AProb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ProbabilityMonads/docs/Data-Probability.html#t:3AProb"
      }
    }
  ]
]