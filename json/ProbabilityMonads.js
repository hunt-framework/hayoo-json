[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ProbabilityMonads/docs/Control-Monad-Distribution-Base.html#t:3ABRand",
      "description": {
        "fct-descr": "A random distribution where some samples may be discarded.\n",
        "fct-module": "Control.Monad.Distribution.Base",
        "fct-package": "ProbabilityMonads",
        "fct-signature": "type",
        "fct-type": "unknown",
        "title": "3ABRand"
      },
      "index": {
        "description": "random distribution where some samples may be discarded",
        "hierarchy": "Control Monad Distribution Base",
        "module": "Control.Monad.Distribution.Base",
        "name": "3ABRand",
        "normalized": "",
        "package": "ProbabilityMonads",
        "partial": "ABRand",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ProbabilityMonads/docs/Control-Monad-Distribution-Base.html#v:3ADist",
      "description": {
        "fct-module": "Control.Monad.Distribution.Base",
        "fct-package": "ProbabilityMonads",
        "fct-signature": "class",
        "fct-type": "unknown",
        "title": "3ADist"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Distribution Base",
        "module": "Control.Monad.Distribution.Base",
        "name": "3ADist",
        "normalized": "",
        "package": "ProbabilityMonads",
        "partial": "ADist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ProbabilityMonads/docs/Control-Monad-Distribution-Base.html#v:3Abayes",
      "description": {
        "fct-descr": "\u003cp\u003eApply Bayes' rule, discarding impossible outcomes and normalizing the\n probabilities that remain.\n\u003c/p\u003e\u003cp\u003eTODO: It's entirely possible that this method should be moved to a type\n class.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Distribution.Base",
        "fct-package": "ProbabilityMonads",
        "fct-signature": "MaybeT (MVT p []) a -\u003e Maybe (MVT p [] a)",
        "fct-type": "unknown",
        "title": "3Abayes"
      },
      "index": {
        "description": "Apply Bayes rule discarding impossible outcomes and normalizing the probabilities that remain TODO It entirely possible that this method should be moved to type class",
        "hierarchy": "Control Monad Distribution Base",
        "module": "Control.Monad.Distribution.Base",
        "name": "3Abayes",
        "normalized": "MaybeT(MVT a[])b-\u003eMaybe(MVT a[]b)",
        "package": "ProbabilityMonads",
        "partial": "Abayes",
        "signature": "MaybeT(MVT p[])a-\u003eMaybe(MVT p[]a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ProbabilityMonads/docs/Control-Monad-Distribution-Base.html#v:3Asample",
      "description": {
        "fct-descr": "Take \u003ctt\u003en\u003c/tt\u003e samples from the distribution \u003ctt\u003er\u003c/tt\u003e.\n",
        "fct-module": "Control.Monad.Distribution.Base",
        "fct-package": "ProbabilityMonads",
        "fct-signature": "m a -\u003e Int -\u003e m [a]",
        "fct-type": "unknown",
        "title": "3Asample"
      },
      "index": {
        "description": "Take samples from the distribution",
        "hierarchy": "Control Monad Distribution Base",
        "module": "Control.Monad.Distribution.Base",
        "name": "3Asample",
        "normalized": "a b-\u003eInt-\u003ea[b]",
        "package": "ProbabilityMonads",
        "partial": "Asample",
        "signature": "m a-\u003eInt-\u003em[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ProbabilityMonads/docs/Control-Monad-Distribution-Base.html#v:3AsampleBayes",
      "description": {
        "fct-descr": "Take \u003ctt\u003en\u003c/tt\u003e samples from the distribution \u003ctt\u003er\u003c/tt\u003e, and eliminate any samples\n which fail a \u003ctt\u003e\u003ca\u003eguard\u003c/a\u003e\u003c/tt\u003e condition.\n",
        "fct-module": "Control.Monad.Distribution.Base",
        "fct-package": "ProbabilityMonads",
        "fct-signature": "MaybeT m a -\u003e Int -\u003e m [a]",
        "fct-type": "unknown",
        "title": "3AsampleBayes"
      },
      "index": {
        "description": "Take samples from the distribution and eliminate any samples which fail guard condition",
        "hierarchy": "Control Monad Distribution Base",
        "module": "Control.Monad.Distribution.Base",
        "name": "3AsampleBayes",
        "normalized": "MaybeT a b-\u003eInt-\u003ea[b]",
        "package": "ProbabilityMonads",
        "partial": "Asample Bayes",
        "signature": "MaybeT m a-\u003eInt-\u003em[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ProbabilityMonads/docs/Control-Monad-Distribution-Base.html#v:3AsampleBayesIO",
      "description": {
        "fct-descr": "Take \u003ctt\u003en\u003c/tt\u003e samples from the distribution \u003ctt\u003er\u003c/tt\u003e using the IO monad, and\n eliminate any samples which fail a \u003ctt\u003e\u003ca\u003eguard\u003c/a\u003e\u003c/tt\u003e condition.\n\u003cp\u003eUsing the \u003ctt\u003e\u003ca\u003eDDist\u003c/a\u003e\u003c/tt\u003e and\n\u003ctt\u003e\u003ca\u003eBDDist\u003c/a\u003e\u003c/tt\u003e monads, you can compute exact\ndistributions. For example:\n\u003c/p\u003e\u003cpre\u003eddist family\n-- [MV 0.25 [Girl,Girl],\n--  MV 0.25 [Girl,Boy],\n--  MV 0.25 [Boy,Girl],\n--  MV 0.25 [Boy,Boy]]\n\u003c/pre\u003e\u003cp\u003eIf the probability distribution uses \u003ctt\u003e\u003ca\u003eguard\u003c/a\u003e\u003c/tt\u003e, you can run it\nusing \u003ctt\u003e\u003ca\u003ebddist\u003c/a\u003e\u003c/tt\u003e.\n\u003c/p\u003e\u003cpre\u003ebddist (tossesWithAtLeastOneHead 2)\n-- Just [MV 1%3 [Heads,Heads],\n--       MV 1%3 [Heads,Tails],\n--       MV 1%3 [Tails,Heads]]\n\u003c/pre\u003e\u003cp\u003eNote that we see rational numbers in this second example, because we used\n\u003ctt\u003eControl.Monad.Distribution.Rational\u003c/tt\u003e above.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Distribution.Base",
        "fct-package": "ProbabilityMonads",
        "fct-signature": "BRand StdGen a -\u003e Int -\u003e IO [a]",
        "fct-type": "unknown",
        "title": "3AsampleBayesIO"
      },
      "index": {
        "description": "Take samples from the distribution using the IO monad and eliminate any samples which fail guard condition Using the DDist and BDDist monads you can compute exact distributions For example ddist family MV Girl Girl MV Girl Boy MV Boy Girl MV Boy Boy If the probability distribution uses guard you can run it using bddist bddist tossesWithAtLeastOneHead Just MV Heads Heads MV Heads Tails MV Tails Heads Note that we see rational numbers in this second example because we used Control.Monad.Distribution.Rational above",
        "hierarchy": "Control Monad Distribution Base",
        "module": "Control.Monad.Distribution.Base",
        "name": "3AsampleBayesIO",
        "normalized": "BRand StdGen a-\u003eInt-\u003eIO[a]",
        "package": "ProbabilityMonads",
        "partial": "Asample Bayes IO",
        "signature": "BRand StdGen a-\u003eInt-\u003eIO[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ProbabilityMonads/docs/Control-Monad-Distribution-Base.html#v:3AsampleIO",
      "description": {
        "fct-descr": "Take \u003ctt\u003en\u003c/tt\u003e samples from the distribution \u003ctt\u003er\u003c/tt\u003e using the IO monad.\n",
        "fct-module": "Control.Monad.Distribution.Base",
        "fct-package": "ProbabilityMonads",
        "fct-signature": "Rand StdGen a -\u003e Int -\u003e IO [a]",
        "fct-type": "unknown",
        "title": "3AsampleIO"
      },
      "index": {
        "description": "Take samples from the distribution using the IO monad",
        "hierarchy": "Control Monad Distribution Base",
        "module": "Control.Monad.Distribution.Base",
        "name": "3AsampleIO",
        "normalized": "Rand StdGen a-\u003eInt-\u003eIO[a]",
        "package": "ProbabilityMonads",
        "partial": "Asample IO",
        "signature": "Rand StdGen a-\u003eInt-\u003eIO[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ProbabilityMonads/docs/Control-Monad-Distribution-Base.html#v:3Auniform",
      "description": {
        "fct-descr": "Creates a new distribution from a list of values, weighting it evenly.\n\u003cp\u003eUsing \u003ctt\u003e\u003ca\u003eguard\u003c/a\u003e\u003c/tt\u003e, it's possible to calculate conditional\nprobabilities using Bayes' rule.  In the example below, we choose to\n\u003ctt\u003eControl.Monad.Distribution.Rational\u003c/tt\u003e, which calculates probabilities using\nexact rational numbers.  This is useful for small, interactive programs\nwhere you want answers like 1\u003cem\u003e3 and 2\u003c/em\u003e3 instead of 0.3333333 and 0.6666666.\n\u003c/p\u003e\u003cpre\u003e\n\nimport Control.Monad\nimport Control.Monad.Distribution.Rational\nimport Data.List\n\ndata Coin = Heads | Tails\n  deriving (Eq, Ord, Show)\n\ntoss = uniform [Heads, Tails]\n\ntosses n = sequence (replicate n toss)\n\ntossesWithAtLeastOneHead n = do\n  result \u003c- tosses n\n  guard (Heads `elem` result)\n  return result\n\u003c/pre\u003e\u003cp\u003eIn this example, we use \u003ctt\u003e\u003ca\u003eguard\u003c/a\u003e\u003c/tt\u003e to discard possible outcomes\nwhere no coin comes up heads.\n\u003c/p\u003e\u003cp\u003eSupport for probability distributions represented by sampling functions.\nThis API is heavily inspired by Sungwoo Park and colleagues'\n$lambda_{bigcirc}$ caculus \u003ca\u003ehttp://citeseer.ist.psu.edu/752237.html\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eTwo sampling-function monads are available: \u003ctt\u003e\u003ca\u003eRand\u003c/a\u003e\u003c/tt\u003e and\n\u003ctt\u003e\u003ca\u003eBRand\u003c/a\u003e\u003c/tt\u003e.  The former provides ordinary sampling functions, and the latter\nsupports Bayesian reasoning.\n\u003c/p\u003e\u003cp\u003eIt's possible run code in the \u003ctt\u003e\u003ca\u003eRand\u003c/a\u003e\u003c/tt\u003e monad using\neither \u003ctt\u003e\u003ca\u003esample\u003c/a\u003e\u003c/tt\u003e or \u003ctt\u003e\u003ca\u003esampleIO\u003c/a\u003e\u003c/tt\u003e.\n\u003c/p\u003e\u003cpre\u003esampleIO family 3\n-- [[Boy,Girl],[Boy,Girl],[Girl,Girl]]\n\u003c/pre\u003e\u003cp\u003eIf the probability distribution uses \u003ctt\u003e\u003ca\u003eguard\u003c/a\u003e\u003c/tt\u003e, you can run it\nusing \u003ctt\u003e\u003ca\u003esampleBayesIO\u003c/a\u003e\u003c/tt\u003e.  Note that one of the outcomes below was discarded,\nleaving 3 outcomes instead of the expected 4:\n\u003c/p\u003e\u003cpre\u003esampleBayesIO (tossesWithAtLeastOneHead 2) 4\n-- [[Tails,Heads],[Heads,Heads],[Tails,Heads]]\n\u003c/pre\u003e",
        "fct-module": "Control.Monad.Distribution.Base",
        "fct-package": "ProbabilityMonads",
        "fct-signature": "[a] -\u003e d a",
        "fct-type": "unknown",
        "title": "3Auniform"
      },
      "index": {
        "description": "Creates new distribution from list of values weighting it evenly Using guard it possible to calculate conditional probabilities using Bayes rule In the example below we choose to Control.Monad.Distribution.Rational which calculates probabilities using exact rational numbers This is useful for small interactive programs where you want answers like and instead of and import Control.Monad import Control.Monad.Distribution.Rational import Data.List data Coin Heads Tails deriving Eq Ord Show toss uniform Heads Tails tosses sequence replicate toss tossesWithAtLeastOneHead do result tosses guard Heads elem result return result In this example we use guard to discard possible outcomes where no coin comes up heads Support for probability distributions represented by sampling functions This API is heavily inspired by Sungwoo Park and colleagues lambda bigcirc caculus http citeseer.ist.psu.edu html Two sampling-function monads are available Rand and BRand The former provides ordinary sampling functions and the latter supports Bayesian reasoning It possible run code in the Rand monad using either sample or sampleIO sampleIO family Boy Girl Boy Girl Girl Girl If the probability distribution uses guard you can run it using sampleBayesIO Note that one of the outcomes below was discarded leaving outcomes instead of the expected sampleBayesIO tossesWithAtLeastOneHead Tails Heads Heads Heads Tails Heads",
        "hierarchy": "Control Monad Distribution Base",
        "module": "Control.Monad.Distribution.Base",
        "name": "3Auniform",
        "normalized": "[a]-\u003eb a",
        "package": "ProbabilityMonads",
        "partial": "Auniform",
        "signature": "[a]-\u003ed a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ProbabilityMonads/docs/Control-Monad-Distribution-Base.html#v:3Aweighted",
      "description": {
        "fct-descr": "Creates a new distribution from a weighted list of values.  The\n individual weights must be non-negative, and they must sum to a\n positive number.\n",
        "fct-module": "Control.Monad.Distribution.Base",
        "fct-package": "ProbabilityMonads",
        "fct-signature": "[(a, Rational)] -\u003e d a",
        "fct-type": "unknown",
        "title": "3Aweighted"
      },
      "index": {
        "description": "Creates new distribution from weighted list of values The individual weights must be non-negative and they must sum to positive number",
        "hierarchy": "Control Monad Distribution Base",
        "module": "Control.Monad.Distribution.Base",
        "name": "3Aweighted",
        "normalized": "[(a,Rational)]-\u003eb a",
        "package": "ProbabilityMonads",
        "partial": "Aweighted",
        "signature": "[(a,Rational)]-\u003ed a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ProbabilityMonads/docs/Control-Monad-Distribution-Rational.html#t:3ABDDist",
      "description": {
        "fct-descr": "A version of \u003ctt\u003e\u003ca\u003eBDDist\u003c/a\u003e\u003c/tt\u003e with support for Bayes' theorem.\n",
        "fct-module": "Control.Monad.Distribution.Rational",
        "fct-package": "ProbabilityMonads",
        "fct-signature": "type",
        "fct-type": "unknown",
        "title": "3ABDDist"
      },
      "index": {
        "description": "version of BDDist with support for Bayes theorem",
        "hierarchy": "Control Monad Distribution Rational",
        "module": "Control.Monad.Distribution.Rational",
        "name": "3ABDDist",
        "normalized": "",
        "package": "ProbabilityMonads",
        "partial": "ABDDist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ProbabilityMonads/docs/Control-Monad-Distribution-Rational.html#t:3ADDist",
      "description": {
        "fct-descr": "A discrete, finite probability distribution implemented using\n double-precision floating-point numbers.\n",
        "fct-module": "Control.Monad.Distribution.Rational",
        "fct-package": "ProbabilityMonads",
        "fct-signature": "type",
        "fct-type": "unknown",
        "title": "3ADDist"
      },
      "index": {
        "description": "discrete finite probability distribution implemented using double-precision floating-point numbers",
        "hierarchy": "Control Monad Distribution Rational",
        "module": "Control.Monad.Distribution.Rational",
        "name": "3ADDist",
        "normalized": "",
        "package": "ProbabilityMonads",
        "partial": "ADDist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ProbabilityMonads/docs/Control-Monad-Distribution-Rational.html#v:3Abddist",
      "description": {
        "fct-descr": "Force a value to be interpreted as having type \u003ctt\u003e\u003ca\u003eBDDist\u003c/a\u003e\u003c/tt\u003e, and apply\n Bayes' rule.  Returns \u003ctt\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/tt\u003e if no possible combination of events\n will satisfy the guard conditions specified in \u003ctt\u003e\u003ca\u003eBDDist\u003c/a\u003e\u003c/tt\u003e.\n",
        "fct-module": "Control.Monad.Distribution.Rational",
        "fct-package": "ProbabilityMonads",
        "fct-signature": "BDDist a -\u003e Maybe (DDist a)",
        "fct-type": "unknown",
        "title": "3Abddist"
      },
      "index": {
        "description": "Force value to be interpreted as having type BDDist and apply Bayes rule Returns Nothing if no possible combination of events will satisfy the guard conditions specified in BDDist",
        "hierarchy": "Control Monad Distribution Rational",
        "module": "Control.Monad.Distribution.Rational",
        "name": "3Abddist",
        "normalized": "BDDist a-\u003eMaybe(DDist a)",
        "package": "ProbabilityMonads",
        "partial": "Abddist",
        "signature": "BDDist a-\u003eMaybe(DDist a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ProbabilityMonads/docs/Control-Monad-Distribution-Rational.html#v:3Addist",
      "description": {
        "fct-descr": "Force a value to be interpreted as having type \u003ctt\u003e\u003ca\u003eDDist\u003c/a\u003e\u003c/tt\u003e.\n",
        "fct-module": "Control.Monad.Distribution.Rational",
        "fct-package": "ProbabilityMonads",
        "fct-signature": "DDist a -\u003e DDist a",
        "fct-type": "unknown",
        "title": "3Addist"
      },
      "index": {
        "description": "Force value to be interpreted as having type DDist",
        "hierarchy": "Control Monad Distribution Rational",
        "module": "Control.Monad.Distribution.Rational",
        "name": "3Addist",
        "normalized": "DDist a-\u003eDDist a",
        "package": "ProbabilityMonads",
        "partial": "Addist",
        "signature": "DDist a-\u003eDDist a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ProbabilityMonads/docs/Control-Monad-Distribution.html#t:3ABDDist",
      "description": {
        "fct-descr": "A version of \u003ctt\u003e\u003ca\u003eBDDist\u003c/a\u003e\u003c/tt\u003e with support for Bayes' theorem.\n",
        "fct-module": "Control.Monad.Distribution",
        "fct-package": "ProbabilityMonads",
        "fct-signature": "type",
        "fct-type": "unknown",
        "title": "3ABDDist"
      },
      "index": {
        "description": "version of BDDist with support for Bayes theorem",
        "hierarchy": "Control Monad Distribution",
        "module": "Control.Monad.Distribution",
        "name": "3ABDDist",
        "normalized": "",
        "package": "ProbabilityMonads",
        "partial": "ABDDist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ProbabilityMonads/docs/Control-Monad-Distribution.html#t:3ADDist",
      "description": {
        "fct-descr": "A discrete, finite probability distribution implemented using rational\n numbers.\n",
        "fct-module": "Control.Monad.Distribution",
        "fct-package": "ProbabilityMonads",
        "fct-signature": "type",
        "fct-type": "unknown",
        "title": "3ADDist"
      },
      "index": {
        "description": "discrete finite probability distribution implemented using rational numbers",
        "hierarchy": "Control Monad Distribution",
        "module": "Control.Monad.Distribution",
        "name": "3ADDist",
        "normalized": "",
        "package": "ProbabilityMonads",
        "partial": "ADDist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ProbabilityMonads/docs/Control-Monad-Distribution.html#v:3Abddist",
      "description": {
        "fct-descr": "Force a value to be interpreted as having type \u003ctt\u003e\u003ca\u003eBDDist\u003c/a\u003e\u003c/tt\u003e, and apply\n Bayes' rule.  Returns \u003ctt\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/tt\u003e if no possible combination of events\n will satisfy the guard conditions specified in \u003ctt\u003e\u003ca\u003eBDDist\u003c/a\u003e\u003c/tt\u003e.\n",
        "fct-module": "Control.Monad.Distribution",
        "fct-package": "ProbabilityMonads",
        "fct-signature": "BDDist a -\u003e Maybe (DDist a)",
        "fct-type": "unknown",
        "title": "3Abddist"
      },
      "index": {
        "description": "Force value to be interpreted as having type BDDist and apply Bayes rule Returns Nothing if no possible combination of events will satisfy the guard conditions specified in BDDist",
        "hierarchy": "Control Monad Distribution",
        "module": "Control.Monad.Distribution",
        "name": "3Abddist",
        "normalized": "BDDist a-\u003eMaybe(DDist a)",
        "package": "ProbabilityMonads",
        "partial": "Abddist",
        "signature": "BDDist a-\u003eMaybe(DDist a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ProbabilityMonads/docs/Control-Monad-Distribution.html#v:3Addist",
      "description": {
        "fct-descr": "Force a value to be interpreted as having type \u003ctt\u003e\u003ca\u003eDDist\u003c/a\u003e\u003c/tt\u003e.\n",
        "fct-module": "Control.Monad.Distribution",
        "fct-package": "ProbabilityMonads",
        "fct-signature": "DDist a -\u003e DDist a",
        "fct-type": "unknown",
        "title": "3Addist"
      },
      "index": {
        "description": "Force value to be interpreted as having type DDist",
        "hierarchy": "Control Monad Distribution",
        "module": "Control.Monad.Distribution",
        "name": "3Addist",
        "normalized": "DDist a-\u003eDDist a",
        "package": "ProbabilityMonads",
        "partial": "Addist",
        "signature": "DDist a-\u003eDDist a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ProbabilityMonads/docs/Control-Monad-MonoidValue.html#t:3AMV",
      "description": {
        "fct-module": "Control.Monad.MonoidValue",
        "fct-package": "ProbabilityMonads",
        "fct-signature": "data",
        "fct-type": "unknown",
        "title": "3AMV"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad MonoidValue",
        "module": "Control.Monad.MonoidValue",
        "name": "3AMV",
        "normalized": "",
        "package": "ProbabilityMonads",
        "partial": "AMV",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ProbabilityMonads/docs/Control-Monad-MonoidValue.html#t:3AMVT",
      "description": {
        "fct-module": "Control.Monad.MonoidValue",
        "fct-package": "ProbabilityMonads",
        "fct-signature": "newtype",
        "fct-type": "unknown",
        "title": "3AMVT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad MonoidValue",
        "module": "Control.Monad.MonoidValue",
        "name": "3AMVT",
        "normalized": "",
        "package": "ProbabilityMonads",
        "partial": "AMVT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ProbabilityMonads/docs/Control-Monad-MonoidValue.html#v:3AmvMonoid",
      "description": {
        "fct-module": "Control.Monad.MonoidValue",
        "fct-package": "ProbabilityMonads",
        "fct-signature": "MV w a -\u003e w",
        "fct-type": "unknown",
        "title": "3AmvMonoid"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad MonoidValue",
        "module": "Control.Monad.MonoidValue",
        "name": "3AmvMonoid",
        "normalized": "MV a b-\u003ea",
        "package": "ProbabilityMonads",
        "partial": "Amv Monoid",
        "signature": "MV w a-\u003ew"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ProbabilityMonads/docs/Control-Monad-MonoidValue.html#v:3AmvValue",
      "description": {
        "fct-module": "Control.Monad.MonoidValue",
        "fct-package": "ProbabilityMonads",
        "fct-signature": "MV w a -\u003e a",
        "fct-type": "unknown",
        "title": "3AmvValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad MonoidValue",
        "module": "Control.Monad.MonoidValue",
        "name": "3AmvValue",
        "normalized": "MV a b-\u003eb",
        "package": "ProbabilityMonads",
        "partial": "Amv Value",
        "signature": "MV w a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ProbabilityMonads/docs/Control-Monad-MonoidValue.html#v:3ArunMVT",
      "description": {
        "fct-module": "Control.Monad.MonoidValue",
        "fct-package": "ProbabilityMonads",
        "fct-signature": "MVT w m a -\u003e m (MV w a)",
        "fct-type": "unknown",
        "title": "3ArunMVT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad MonoidValue",
        "module": "Control.Monad.MonoidValue",
        "name": "3ArunMVT",
        "normalized": "MVT a b c-\u003eb(MV a c)",
        "package": "ProbabilityMonads",
        "partial": "Arun MVT",
        "signature": "MVT w m a-\u003em(MV w a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ProbabilityMonads/docs/Data-Probability-Base.html#v:3AProbability",
      "description": {
        "fct-module": "Data.Probability.Base",
        "fct-package": "ProbabilityMonads",
        "fct-signature": "class",
        "fct-type": "unknown",
        "title": "3AProbability"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Probability Base",
        "module": "Data.Probability.Base",
        "name": "3AProbability",
        "normalized": "",
        "package": "ProbabilityMonads",
        "partial": "AProbability",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ProbabilityMonads/docs/Data-Probability-Base.html#v:3AfromProb",
      "description": {
        "fct-descr": "Convert a probability to a rational number.\n",
        "fct-module": "Data.Probability.Base",
        "fct-package": "ProbabilityMonads",
        "fct-signature": "p -\u003e Rational",
        "fct-type": "unknown",
        "title": "3AfromProb"
      },
      "index": {
        "description": "Convert probability to rational number",
        "hierarchy": "Data Probability Base",
        "module": "Data.Probability.Base",
        "name": "3AfromProb",
        "normalized": "a-\u003eRational",
        "package": "ProbabilityMonads",
        "partial": "Afrom Prob",
        "signature": "p-\u003eRational"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ProbabilityMonads/docs/Data-Probability-Base.html#v:3Apadd",
      "description": {
        "fct-descr": "Given the probabilities of two disjoint events, calculate the\n probability of either event occuring.\n",
        "fct-module": "Data.Probability.Base",
        "fct-package": "ProbabilityMonads",
        "fct-signature": "p -\u003e p -\u003e p",
        "fct-type": "unknown",
        "title": "3Apadd"
      },
      "index": {
        "description": "Given the probabilities of two disjoint events calculate the probability of either event occuring",
        "hierarchy": "Data Probability Base",
        "module": "Data.Probability.Base",
        "name": "3Apadd",
        "normalized": "a-\u003ea-\u003ea",
        "package": "ProbabilityMonads",
        "partial": "Apadd",
        "signature": "p-\u003ep-\u003ep"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ProbabilityMonads/docs/Data-Probability-Base.html#v:3Apmul",
      "description": {
        "fct-descr": "Given the probabilities of two indepedent events, calculate the\n probability of both events occuring.\n",
        "fct-module": "Data.Probability.Base",
        "fct-package": "ProbabilityMonads",
        "fct-signature": "p -\u003e p -\u003e p",
        "fct-type": "unknown",
        "title": "3Apmul"
      },
      "index": {
        "description": "Given the probabilities of two indepedent events calculate the probability of both events occuring",
        "hierarchy": "Data Probability Base",
        "module": "Data.Probability.Base",
        "name": "3Apmul",
        "normalized": "a-\u003ea-\u003ea",
        "package": "ProbabilityMonads",
        "partial": "Apmul",
        "signature": "p-\u003ep-\u003ep"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ProbabilityMonads/docs/Data-Probability-Base.html#v:3Apnot",
      "description": {
        "fct-descr": "Given the probability of an event occuring, calculate the\n probability of the event \u003cem\u003enot\u003c/em\u003e occuring.\n",
        "fct-module": "Data.Probability.Base",
        "fct-package": "ProbabilityMonads",
        "fct-signature": "p -\u003e p",
        "fct-type": "unknown",
        "title": "3Apnot"
      },
      "index": {
        "description": "Given the probability of an event occuring calculate the probability of the event not occuring",
        "hierarchy": "Data Probability Base",
        "module": "Data.Probability.Base",
        "name": "3Apnot",
        "normalized": "a-\u003ea",
        "package": "ProbabilityMonads",
        "partial": "Apnot",
        "signature": "p-\u003ep"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ProbabilityMonads/docs/Data-Probability-Base.html#v:3Aprob",
      "description": {
        "fct-descr": "Create a probability from a rational number between 0 and 1, inclusive.\n",
        "fct-module": "Data.Probability.Base",
        "fct-package": "ProbabilityMonads",
        "fct-signature": "Rational -\u003e p",
        "fct-type": "unknown",
        "title": "3Aprob"
      },
      "index": {
        "description": "Create probability from rational number between and inclusive",
        "hierarchy": "Data Probability Base",
        "module": "Data.Probability.Base",
        "name": "3Aprob",
        "normalized": "Rational-\u003ea",
        "package": "ProbabilityMonads",
        "partial": "Aprob",
        "signature": "Rational-\u003ep"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ProbabilityMonads/docs/Data-Probability-Rational.html#t:3AProb",
      "description": {
        "fct-module": "Data.Probability.Rational",
        "fct-package": "ProbabilityMonads",
        "fct-signature": "data",
        "fct-type": "unknown",
        "title": "3AProb"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Probability Rational",
        "module": "Data.Probability.Rational",
        "name": "3AProb",
        "normalized": "",
        "package": "ProbabilityMonads",
        "partial": "AProb",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ProbabilityMonads/docs/Data-Probability.html#t:3AProb",
      "description": {
        "fct-module": "Data.Probability",
        "fct-package": "ProbabilityMonads",
        "fct-signature": "data",
        "fct-type": "unknown",
        "title": "3AProb"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Probability",
        "module": "Data.Probability",
        "name": "3AProb",
        "normalized": "",
        "package": "ProbabilityMonads",
        "partial": "AProb",
        "signature": ""
      }
    }
  }
]