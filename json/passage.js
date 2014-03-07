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
        "word": "passage"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Passage.Distribution",
          "name": "Distribution",
          "package": "passage",
          "source": "src/Language-Passage-Distribution.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Passage Distribution",
          "module": "Language.Passage.Distribution",
          "name": "Distribution",
          "package": "passage",
          "partial": "Distribution",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage-Distribution.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Bernoulli distribution with a mean\n\u003c/p\u003e",
          "module": "Language.Passage.Distribution",
          "name": "bernoulli",
          "package": "passage",
          "signature": "Expr -\u003e Distribution",
          "source": "src/Language-Passage-Distribution.html#bernoulli",
          "type": "function"
        },
        "index": {
          "description": "Bernoulli distribution with mean",
          "hierarchy": "Language Passage Distribution",
          "module": "Language.Passage.Distribution",
          "name": "bernoulli",
          "normalized": "Expr-\u003eDistribution",
          "package": "passage",
          "signature": "Expr-\u003eDistribution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage-Distribution.html#v:bernoulli"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA beta distribution with the given prior sample sizes.\n\u003c/p\u003e",
          "module": "Language.Passage.Distribution",
          "name": "beta",
          "package": "passage",
          "signature": "Expr -\u003e Expr -\u003e Distribution",
          "source": "src/Language-Passage-Distribution.html#beta",
          "type": "function"
        },
        "index": {
          "description": "beta distribution with the given prior sample sizes",
          "hierarchy": "Language Passage Distribution",
          "module": "Language.Passage.Distribution",
          "name": "beta",
          "normalized": "Expr-\u003eExpr-\u003eDistribution",
          "package": "passage",
          "signature": "Expr-\u003eExpr-\u003eDistribution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage-Distribution.html#v:beta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA binomial distribution with given number of samples and probability of success\n | Number of samples is assumed to be fixed\n\u003c/p\u003e",
          "module": "Language.Passage.Distribution",
          "name": "binomial",
          "package": "passage",
          "signature": "Expr -\u003e Expr -\u003e Distribution",
          "source": "src/Language-Passage-Distribution.html#binomial",
          "type": "function"
        },
        "index": {
          "description": "binomial distribution with given number of samples and probability of success Number of samples is assumed to be fixed",
          "hierarchy": "Language Passage Distribution",
          "module": "Language.Passage.Distribution",
          "name": "binomial",
          "normalized": "Expr-\u003eExpr-\u003eDistribution",
          "package": "passage",
          "signature": "Expr-\u003eExpr-\u003eDistribution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage-Distribution.html#v:binomial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA categorical distribution with given support size and probabilities\n | Probabilities are assumed to add to one (not checked here)\n\u003c/p\u003e",
          "module": "Language.Passage.Distribution",
          "name": "categorical",
          "package": "passage",
          "signature": "Expr -\u003e [Expr] -\u003e Distribution",
          "source": "src/Language-Passage-Distribution.html#categorical",
          "type": "function"
        },
        "index": {
          "description": "categorical distribution with given support size and probabilities Probabilities are assumed to add to one not checked here",
          "hierarchy": "Language Passage Distribution",
          "module": "Language.Passage.Distribution",
          "name": "categorical",
          "normalized": "Expr-\u003e[Expr]-\u003eDistribution",
          "package": "passage",
          "signature": "Expr-\u003e[Expr]-\u003eDistribution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage-Distribution.html#v:categorical"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA gamma distribution with the given prior sample sizes.\n\u003c/p\u003e",
          "module": "Language.Passage.Distribution",
          "name": "dgamma",
          "package": "passage",
          "signature": "Expr -\u003e Expr -\u003e Distribution",
          "source": "src/Language-Passage-Distribution.html#dgamma",
          "type": "function"
        },
        "index": {
          "description": "gamma distribution with the given prior sample sizes",
          "hierarchy": "Language Passage Distribution",
          "module": "Language.Passage.Distribution",
          "name": "dgamma",
          "normalized": "Expr-\u003eExpr-\u003eDistribution",
          "package": "passage",
          "signature": "Expr-\u003eExpr-\u003eDistribution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage-Distribution.html#v:dgamma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Passage.Distribution",
          "name": "discreteUniform",
          "package": "passage",
          "signature": "Expr -\u003e Distribution",
          "source": "src/Language-Passage-Distribution.html#discreteUniform",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Passage Distribution",
          "module": "Language.Passage.Distribution",
          "name": "discreteUniform",
          "normalized": "Expr-\u003eDistribution",
          "package": "passage",
          "partial": "Uniform",
          "signature": "Expr-\u003eDistribution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage-Distribution.html#v:discreteUniform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Passage.Distribution",
          "name": "geometric",
          "package": "passage",
          "signature": "Expr -\u003e Distribution",
          "source": "src/Language-Passage-Distribution.html#geometric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Passage Distribution",
          "module": "Language.Passage.Distribution",
          "name": "geometric",
          "normalized": "Expr-\u003eDistribution",
          "package": "passage",
          "signature": "Expr-\u003eDistribution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage-Distribution.html#v:geometric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn improper scale\n\u003c/p\u003e",
          "module": "Language.Passage.Distribution",
          "name": "improperScale",
          "package": "passage",
          "signature": "Distribution",
          "source": "src/Language-Passage-Distribution.html#improperScale",
          "type": "function"
        },
        "index": {
          "description": "An improper scale",
          "hierarchy": "Language Passage Distribution",
          "module": "Language.Passage.Distribution",
          "name": "improperScale",
          "package": "passage",
          "partial": "Scale",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage-Distribution.html#v:improperScale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn improper uniform distribution; has no impact on likelihood\n\u003c/p\u003e",
          "module": "Language.Passage.Distribution",
          "name": "improperUniform",
          "package": "passage",
          "signature": "Distribution",
          "source": "src/Language-Passage-Distribution.html#improperUniform",
          "type": "function"
        },
        "index": {
          "description": "An improper uniform distribution has no impact on likelihood",
          "hierarchy": "Language Passage Distribution",
          "module": "Language.Passage.Distribution",
          "name": "improperUniform",
          "package": "passage",
          "partial": "Uniform",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage-Distribution.html#v:improperUniform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Passage.Distribution",
          "name": "logBeta",
          "package": "passage",
          "signature": "Expr -\u003e Expr -\u003e Expr",
          "source": "src/Language-Passage-Distribution.html#logBeta",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Passage Distribution",
          "module": "Language.Passage.Distribution",
          "name": "logBeta",
          "normalized": "Expr-\u003eExpr-\u003eExpr",
          "package": "passage",
          "partial": "Beta",
          "signature": "Expr-\u003eExpr-\u003eExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage-Distribution.html#v:logBeta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Passage.Distribution",
          "name": "logComb",
          "package": "passage",
          "signature": "Expr -\u003e Expr -\u003e Expr",
          "source": "src/Language-Passage-Distribution.html#logComb",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Passage Distribution",
          "module": "Language.Passage.Distribution",
          "name": "logComb",
          "normalized": "Expr-\u003eExpr-\u003eExpr",
          "package": "passage",
          "partial": "Comb",
          "signature": "Expr-\u003eExpr-\u003eExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage-Distribution.html#v:logComb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Passage.Distribution",
          "name": "logFact",
          "package": "passage",
          "signature": "Expr -\u003e Expr",
          "source": "src/Language-Passage-Distribution.html#logFact",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Passage Distribution",
          "module": "Language.Passage.Distribution",
          "name": "logFact",
          "normalized": "Expr-\u003eExpr",
          "package": "passage",
          "partial": "Fact",
          "signature": "Expr-\u003eExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage-Distribution.html#v:logFact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Passage.Distribution",
          "name": "logit",
          "package": "passage",
          "signature": "a -\u003e a",
          "source": "src/Language-Passage-Distribution.html#logit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Passage Distribution",
          "module": "Language.Passage.Distribution",
          "name": "logit",
          "normalized": "a-\u003ea",
          "package": "passage",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage-Distribution.html#v:logit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Passage.Distribution",
          "name": "negBinomial",
          "package": "passage",
          "signature": "Expr -\u003e Expr -\u003e Distribution",
          "source": "src/Language-Passage-Distribution.html#negBinomial",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Passage Distribution",
          "module": "Language.Passage.Distribution",
          "name": "negBinomial",
          "normalized": "Expr-\u003eExpr-\u003eDistribution",
          "package": "passage",
          "partial": "Binomial",
          "signature": "Expr-\u003eExpr-\u003eDistribution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage-Distribution.html#v:negBinomial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA normal distribution, with a mean and precision\n\u003c/p\u003e",
          "module": "Language.Passage.Distribution",
          "name": "normal",
          "package": "passage",
          "signature": "Expr -\u003e Expr -\u003e Distribution",
          "source": "src/Language-Passage-Distribution.html#normal",
          "type": "function"
        },
        "index": {
          "description": "normal distribution with mean and precision",
          "hierarchy": "Language Passage Distribution",
          "module": "Language.Passage.Distribution",
          "name": "normal",
          "normalized": "Expr-\u003eExpr-\u003eDistribution",
          "package": "passage",
          "signature": "Expr-\u003eExpr-\u003eDistribution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage-Distribution.html#v:normal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Passage.Distribution",
          "name": "poisson",
          "package": "passage",
          "signature": "Expr -\u003e Distribution",
          "source": "src/Language-Passage-Distribution.html#poisson",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Passage Distribution",
          "module": "Language.Passage.Distribution",
          "name": "poisson",
          "normalized": "Expr-\u003eDistribution",
          "package": "passage",
          "signature": "Expr-\u003eDistribution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage-Distribution.html#v:poisson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Passage.Distribution",
          "name": "standardUniform",
          "package": "passage",
          "signature": "Distribution",
          "source": "src/Language-Passage-Distribution.html#standardUniform",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Passage Distribution",
          "module": "Language.Passage.Distribution",
          "name": "standardUniform",
          "package": "passage",
          "partial": "Uniform",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage-Distribution.html#v:standardUniform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA normal distribution with mean 0 and precision 1\n\u003c/p\u003e",
          "module": "Language.Passage.Distribution",
          "name": "stdNormal",
          "package": "passage",
          "signature": "Distribution",
          "source": "src/Language-Passage-Distribution.html#stdNormal",
          "type": "function"
        },
        "index": {
          "description": "normal distribution with mean and precision",
          "hierarchy": "Language Passage Distribution",
          "module": "Language.Passage.Distribution",
          "name": "stdNormal",
          "package": "passage",
          "partial": "Normal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage-Distribution.html#v:stdNormal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Passage.Distribution",
          "name": "uniform",
          "package": "passage",
          "signature": "Expr -\u003e Expr -\u003e Distribution",
          "source": "src/Language-Passage-Distribution.html#uniform",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Passage Distribution",
          "module": "Language.Passage.Distribution",
          "name": "uniform",
          "normalized": "Expr-\u003eExpr-\u003eDistribution",
          "package": "passage",
          "signature": "Expr-\u003eExpr-\u003eDistribution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage-Distribution.html#v:uniform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Passage.UI",
          "name": "UI",
          "package": "passage",
          "source": "src/Language-Passage-UI.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Passage UI",
          "module": "Language.Passage.UI",
          "name": "UI",
          "package": "passage",
          "partial": "UI",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage-UI.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Bernoulli distribution with a mean\n\u003c/p\u003e",
          "module": "Language.Passage.UI",
          "name": "bernoulli",
          "package": "passage",
          "signature": "Expr -\u003e BayesianNetwork Expr",
          "source": "src/Language-Passage-UI.html#bernoulli",
          "type": "function"
        },
        "index": {
          "description": "Bernoulli distribution with mean",
          "hierarchy": "Language Passage UI",
          "module": "Language.Passage.UI",
          "name": "bernoulli",
          "normalized": "Expr-\u003eBayesianNetwork Expr",
          "package": "passage",
          "signature": "Expr-\u003eBayesianNetwork Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage-UI.html#v:bernoulli"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA beta distribution with the given prior sample sizes.\n\u003c/p\u003e",
          "module": "Language.Passage.UI",
          "name": "beta",
          "package": "passage",
          "signature": "Expr -\u003e Expr -\u003e BayesianNetwork Expr",
          "source": "src/Language-Passage-UI.html#beta",
          "type": "function"
        },
        "index": {
          "description": "beta distribution with the given prior sample sizes",
          "hierarchy": "Language Passage UI",
          "module": "Language.Passage.UI",
          "name": "beta",
          "normalized": "Expr-\u003eExpr-\u003eBayesianNetwork Expr",
          "package": "passage",
          "signature": "Expr-\u003eExpr-\u003eBayesianNetwork Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage-UI.html#v:beta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA chi-square distribution with the given degrees of freedom.\n\u003c/p\u003e",
          "module": "Language.Passage.UI",
          "name": "chiSquare",
          "package": "passage",
          "signature": "Expr -\u003e BayesianNetwork Expr",
          "source": "src/Language-Passage-UI.html#chiSquare",
          "type": "function"
        },
        "index": {
          "description": "chi-square distribution with the given degrees of freedom",
          "hierarchy": "Language Passage UI",
          "module": "Language.Passage.UI",
          "name": "chiSquare",
          "normalized": "Expr-\u003eBayesianNetwork Expr",
          "package": "passage",
          "partial": "Square",
          "signature": "Expr-\u003eBayesianNetwork Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage-UI.html#v:chiSquare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn exponential distribution with the given rate (inverse scale)\n\u003c/p\u003e",
          "module": "Language.Passage.UI",
          "name": "dexp",
          "package": "passage",
          "signature": "Expr -\u003e BayesianNetwork Expr",
          "source": "src/Language-Passage-UI.html#dexp",
          "type": "function"
        },
        "index": {
          "description": "An exponential distribution with the given rate inverse scale",
          "hierarchy": "Language Passage UI",
          "module": "Language.Passage.UI",
          "name": "dexp",
          "normalized": "Expr-\u003eBayesianNetwork Expr",
          "package": "passage",
          "signature": "Expr-\u003eBayesianNetwork Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage-UI.html#v:dexp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA gamma distribution with the given prior sample sizes.\n\u003c/p\u003e",
          "module": "Language.Passage.UI",
          "name": "dgamma",
          "package": "passage",
          "signature": "Expr -\u003e Expr -\u003e BayesianNetwork Expr",
          "source": "src/Language-Passage-UI.html#dgamma",
          "type": "function"
        },
        "index": {
          "description": "gamma distribution with the given prior sample sizes",
          "hierarchy": "Language Passage UI",
          "module": "Language.Passage.UI",
          "name": "dgamma",
          "normalized": "Expr-\u003eExpr-\u003eBayesianNetwork Expr",
          "package": "passage",
          "signature": "Expr-\u003eExpr-\u003eBayesianNetwork Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage-UI.html#v:dgamma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Passage.UI",
          "name": "improperScale",
          "package": "passage",
          "signature": "BayesianNetwork Expr",
          "source": "src/Language-Passage-UI.html#improperScale",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Passage UI",
          "module": "Language.Passage.UI",
          "name": "improperScale",
          "package": "passage",
          "partial": "Scale",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage-UI.html#v:improperScale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn improper uniform distribution; has no impact on likelihood\n\u003c/p\u003e",
          "module": "Language.Passage.UI",
          "name": "improperUniform",
          "package": "passage",
          "signature": "BayesianNetwork Expr",
          "source": "src/Language-Passage-UI.html#improperUniform",
          "type": "function"
        },
        "index": {
          "description": "An improper uniform distribution has no impact on likelihood",
          "hierarchy": "Language Passage UI",
          "module": "Language.Passage.UI",
          "name": "improperUniform",
          "package": "passage",
          "partial": "Uniform",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage-UI.html#v:improperUniform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA normal distribution, with a mean and precision\n\u003c/p\u003e",
          "module": "Language.Passage.UI",
          "name": "normal",
          "package": "passage",
          "signature": "Expr -\u003e Expr -\u003e BayesianNetwork Expr",
          "source": "src/Language-Passage-UI.html#normal",
          "type": "function"
        },
        "index": {
          "description": "normal distribution with mean and precision",
          "hierarchy": "Language Passage UI",
          "module": "Language.Passage.UI",
          "name": "normal",
          "normalized": "Expr-\u003eExpr-\u003eBayesianNetwork Expr",
          "package": "passage",
          "signature": "Expr-\u003eExpr-\u003eBayesianNetwork Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage-UI.html#v:normal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Passage.UI",
          "name": "standardUniform",
          "package": "passage",
          "signature": "BayesianNetwork Expr",
          "source": "src/Language-Passage-UI.html#standardUniform",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Passage UI",
          "module": "Language.Passage.UI",
          "name": "standardUniform",
          "package": "passage",
          "partial": "Uniform",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage-UI.html#v:standardUniform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Student's T distribution, given the degrees of freedom.\n\u003c/p\u003e",
          "module": "Language.Passage.UI",
          "name": "studentT",
          "package": "passage",
          "signature": "Expr -\u003e BayesianNetwork Expr",
          "source": "src/Language-Passage-UI.html#studentT",
          "type": "function"
        },
        "index": {
          "description": "Student distribution given the degrees of freedom",
          "hierarchy": "Language Passage UI",
          "module": "Language.Passage.UI",
          "name": "studentT",
          "normalized": "Expr-\u003eBayesianNetwork Expr",
          "package": "passage",
          "signature": "Expr-\u003eBayesianNetwork Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage-UI.html#v:studentT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Passage.UI",
          "name": "symDirichlet",
          "package": "passage",
          "signature": "Int -\u003e Expr -\u003e BayesianNetwork [Expr]",
          "source": "src/Language-Passage-UI.html#symDirichlet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Passage UI",
          "module": "Language.Passage.UI",
          "name": "symDirichlet",
          "normalized": "Int-\u003eExpr-\u003eBayesianNetwork[Expr]",
          "package": "passage",
          "partial": "Dirichlet",
          "signature": "Int-\u003eExpr-\u003eBayesianNetwork[Expr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage-UI.html#v:symDirichlet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Passage.UI",
          "name": "uniform",
          "package": "passage",
          "signature": "Expr -\u003e Expr -\u003e BayesianNetwork Expr",
          "source": "src/Language-Passage-UI.html#uniform",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Passage UI",
          "module": "Language.Passage.UI",
          "name": "uniform",
          "normalized": "Expr-\u003eExpr-\u003eBayesianNetwork Expr",
          "package": "passage",
          "signature": "Expr-\u003eExpr-\u003eBayesianNetwork Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage-UI.html#v:uniform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Passage",
          "name": "Passage",
          "package": "passage",
          "source": "src/Language-Passage.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Passage",
          "module": "Language.Passage",
          "name": "Passage",
          "package": "passage",
          "partial": "Passage",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Bayesian Network is a collection of stochastic nodes.\n Stochastic nodes may be (optionally) grouped into arrays.\n\u003c/p\u003e",
          "module": "Language.Passage",
          "name": "BayesianGraph",
          "package": "passage",
          "source": "src/Language-Passage-AST.html#BayesianGraph",
          "type": "data"
        },
        "index": {
          "description": "Bayesian Network is collection of stochastic nodes Stochastic nodes may be optionally grouped into arrays",
          "hierarchy": "Language Passage",
          "module": "Language.Passage",
          "name": "BayesianGraph",
          "package": "passage",
          "partial": "Bayesian Graph",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage.html#t:BayesianGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Passage",
          "name": "BayesianNetwork",
          "package": "passage",
          "source": "src/Language-Passage-AST.html#BayesianNetwork",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Passage",
          "module": "Language.Passage",
          "name": "BayesianNetwork",
          "package": "passage",
          "partial": "Bayesian Network",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage.html#t:BayesianNetwork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Passage",
          "name": "BayesianSimulator",
          "package": "passage",
          "source": "src/Language-Passage-SimulatorConf.html#BayesianSimulator",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Passage",
          "module": "Language.Passage",
          "name": "BayesianSimulator",
          "package": "passage",
          "partial": "Bayesian Simulator",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage.html#t:BayesianSimulator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Passage",
          "name": "LaTeX",
          "package": "passage",
          "source": "src/Language-Passage-Lang-LaTeX.html#LaTeX",
          "type": "class"
        },
        "index": {
          "hierarchy": "Language Passage",
          "module": "Language.Passage",
          "name": "LaTeX",
          "package": "passage",
          "partial": "La Te",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage.html#t:LaTeX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Passage",
          "name": "Matrix",
          "package": "passage",
          "source": "src/Language-Passage-AST.html#Matrix",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Passage",
          "module": "Language.Passage",
          "name": "Matrix",
          "package": "passage",
          "partial": "Matrix",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage.html#t:Matrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Passage",
          "name": "Node",
          "package": "passage",
          "source": "src/Language-Passage.html#Node",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Passage",
          "module": "Language.Passage",
          "name": "Node",
          "package": "passage",
          "partial": "Node",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage.html#t:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Passage",
          "name": "NodeArray",
          "package": "passage",
          "source": "src/Language-Passage-AST.html#NodeArray",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Passage",
          "module": "Language.Passage",
          "name": "NodeArray",
          "package": "passage",
          "partial": "Node Array",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage.html#t:NodeArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty printing\n\u003c/p\u003e",
          "module": "Language.Passage",
          "name": "PP",
          "package": "passage",
          "source": "src/Language-Passage-Utils.html#PP",
          "type": "class"
        },
        "index": {
          "description": "Pretty printing",
          "hierarchy": "Language Passage",
          "module": "Language.Passage",
          "name": "PP",
          "package": "passage",
          "partial": "PP",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage.html#t:PP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Stochastic variable.\n\u003c/p\u003e",
          "module": "Language.Passage",
          "name": "StoVar",
          "package": "passage",
          "source": "src/Language-Passage-AST.html#StoVar",
          "type": "data"
        },
        "index": {
          "description": "Stochastic variable",
          "hierarchy": "Language Passage",
          "module": "Language.Passage",
          "name": "StoVar",
          "package": "passage",
          "partial": "Sto Var",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage.html#t:StoVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Passage",
          "name": "Vector",
          "package": "passage",
          "source": "src/Language-Passage-AST.html#Vector",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Passage",
          "module": "Language.Passage",
          "name": "Vector",
          "package": "passage",
          "partial": "Vector",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage.html#t:Vector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Passage",
          "name": "(//)",
          "package": "passage",
          "signature": "BayesianNetwork Expr -\u003e String -\u003e BayesianNetwork Expr",
          "source": "src/Language-Passage-AST.html#%2F%2F",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Passage",
          "module": "Language.Passage",
          "name": "(//) //",
          "normalized": "BayesianNetwork Expr-\u003eString-\u003eBayesianNetwork Expr",
          "package": "passage",
          "signature": "BayesianNetwork Expr-\u003eString-\u003eBayesianNetwork Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage.html#v:-47--47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Passage",
          "name": "BayesianGraph",
          "package": "passage",
          "signature": "BayesianGraph",
          "source": "src/Language-Passage-AST.html#BayesianGraph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Passage",
          "module": "Language.Passage",
          "name": "BayesianGraph",
          "package": "passage",
          "partial": "Bayesian Graph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage.html#v:BayesianGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Passage",
          "name": "StoVar",
          "package": "passage",
          "signature": "StoVar",
          "source": "src/Language-Passage-AST.html#StoVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Passage",
          "module": "Language.Passage",
          "name": "StoVar",
          "package": "passage",
          "partial": "Sto Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage.html#v:StoVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Passage",
          "name": "buildBayesianGraph",
          "package": "passage",
          "signature": "BayesianNetwork a -\u003e (a, BayesianGraph)",
          "source": "src/Language-Passage-Graph.html#buildBayesianGraph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Passage",
          "module": "Language.Passage",
          "name": "buildBayesianGraph",
          "normalized": "BayesianNetwork a-\u003e(a,BayesianGraph)",
          "package": "passage",
          "partial": "Bayesian Graph",
          "signature": "BayesianNetwork a-\u003e(a,BayesianGraph)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage.html#v:buildBayesianGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Passage",
          "name": "enableProfiling",
          "package": "passage",
          "signature": "Bool -\u003e BayesianSimulator ()",
          "source": "src/Language-Passage-SimulatorConf.html#enableProfiling",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Passage",
          "module": "Language.Passage",
          "name": "enableProfiling",
          "normalized": "Bool-\u003eBayesianSimulator()",
          "package": "passage",
          "partial": "Profiling",
          "signature": "Bool-\u003eBayesianSimulator()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage.html#v:enableProfiling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Passage",
          "name": "genSimulator",
          "package": "passage",
          "signature": "FilePath -\u003e BayesianSimulator () -\u003e IO ()",
          "source": "src/Language-Passage.html#genSimulator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Passage",
          "module": "Language.Passage",
          "name": "genSimulator",
          "normalized": "FilePath-\u003eBayesianSimulator()-\u003eIO()",
          "package": "passage",
          "partial": "Simulator",
          "signature": "FilePath-\u003eBayesianSimulator()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage.html#v:genSimulator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Passage",
          "name": "latex",
          "package": "passage",
          "signature": "t -\u003e Doc",
          "source": "src/Language-Passage-Lang-LaTeX.html#latex",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Passage",
          "module": "Language.Passage",
          "name": "latex",
          "normalized": "a-\u003eDoc",
          "package": "passage",
          "signature": "t-\u003eDoc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage.html#v:latex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Passage",
          "name": "logGamma",
          "package": "passage",
          "signature": "Term a -\u003e Term a",
          "source": "src/Language-Passage-Term.html#logGamma",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Passage",
          "module": "Language.Passage",
          "name": "logGamma",
          "normalized": "Term a-\u003eTerm a",
          "package": "passage",
          "partial": "Gamma",
          "signature": "Term a-\u003eTerm a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage.html#v:logGamma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a 2D matrix\n\u003c/p\u003e",
          "module": "Language.Passage",
          "name": "matrix",
          "package": "passage",
          "signature": "(Int, Int)-\u003e (Int, Int)-\u003e ([Int] -\u003e BayesianNetwork Expr)-\u003e BayesianNetwork ([Expr] -\u003e Expr)",
          "type": "function"
        },
        "index": {
          "description": "Create matrix",
          "hierarchy": "Language Passage",
          "module": "Language.Passage",
          "name": "matrix",
          "normalized": "(Int,Int)-\u003e(Int,Int)-\u003e([Int]-\u003eBayesianNetwork Expr)-\u003eBayesianNetwork([Expr]-\u003eExpr)",
          "package": "passage",
          "signature": "(Int,Int)-\u003e(Int,Int)-\u003e([Int]-\u003eBayesianNetwork Expr)-\u003eBayesianNetwork([Expr]-\u003eExpr)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage.html#v:matrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Passage",
          "name": "model",
          "package": "passage",
          "signature": "BayesianNetwork a -\u003e BayesianSimulator a",
          "source": "src/Language-Passage-SimulatorConf.html#model",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Passage",
          "module": "Language.Passage",
          "name": "model",
          "normalized": "BayesianNetwork a-\u003eBayesianSimulator a",
          "package": "passage",
          "signature": "BayesianNetwork a-\u003eBayesianSimulator a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage.html#v:model"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Passage",
          "name": "monitor",
          "package": "passage",
          "signature": "String -\u003e Expr -\u003e BayesianSimulator ()",
          "source": "src/Language-Passage-SimulatorConf.html#monitor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Passage",
          "module": "Language.Passage",
          "name": "monitor",
          "normalized": "String-\u003eExpr-\u003eBayesianSimulator()",
          "package": "passage",
          "signature": "String-\u003eExpr-\u003eBayesianSimulator()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage.html#v:monitor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike monitor, but adds the indexes in the label of the variable.\n\u003c/p\u003e",
          "module": "Language.Passage",
          "name": "monitorVec",
          "package": "passage",
          "signature": "String -\u003e Matrix -\u003e [Int] -\u003e BayesianSimulator ()",
          "source": "src/Language-Passage.html#monitorVec",
          "type": "function"
        },
        "index": {
          "description": "Like monitor but adds the indexes in the label of the variable",
          "hierarchy": "Language Passage",
          "module": "Language.Passage",
          "name": "monitorVec",
          "normalized": "String-\u003eMatrix-\u003e[Int]-\u003eBayesianSimulator()",
          "package": "passage",
          "partial": "Vec",
          "signature": "String-\u003eMatrix-\u003e[Int]-\u003eBayesianSimulator()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage.html#v:monitorVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Passage",
          "name": "monitorVecs",
          "package": "passage",
          "signature": "String -\u003e NodeArray -\u003e [[Int]] -\u003e BayesianSimulator ()",
          "source": "src/Language-Passage.html#monitorVecs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Passage",
          "module": "Language.Passage",
          "name": "monitorVecs",
          "normalized": "String-\u003eNodeArray-\u003e[[Int]]-\u003eBayesianSimulator()",
          "package": "passage",
          "partial": "Vecs",
          "signature": "String-\u003eNodeArray-\u003e[[Int]]-\u003eBayesianSimulator()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage.html#v:monitorVecs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an \u003e= 3D array\n\u003c/p\u003e",
          "module": "Language.Passage",
          "name": "nodeArray",
          "package": "passage",
          "signature": "[(Int, Int)]-\u003e ([Int] -\u003e BayesianNetwork Expr)-\u003e BayesianNetwork ([Expr] -\u003e Expr)",
          "type": "function"
        },
        "index": {
          "description": "Create an array",
          "hierarchy": "Language Passage",
          "module": "Language.Passage",
          "name": "nodeArray",
          "normalized": "[(Int,Int)]-\u003e([Int]-\u003eBayesianNetwork Expr)-\u003eBayesianNetwork([Expr]-\u003eExpr)",
          "package": "passage",
          "partial": "Array",
          "signature": "[(Int,Int)]-\u003e([Int]-\u003eBayesianNetwork Expr)-\u003eBayesianNetwork([Expr]-\u003eExpr)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage.html#v:nodeArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Passage",
          "name": "observe",
          "package": "passage",
          "signature": "Term NodeIdx -\u003e Double -\u003e BayesianSimulator ()",
          "source": "src/Language-Passage-SimulatorConf.html#observe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Passage",
          "module": "Language.Passage",
          "name": "observe",
          "normalized": "Term NodeIdx-\u003eDouble-\u003eBayesianSimulator()",
          "package": "passage",
          "signature": "Term NodeIdx-\u003eDouble-\u003eBayesianSimulator()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage.html#v:observe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Passage",
          "name": "pp",
          "package": "passage",
          "signature": "t -\u003e Doc",
          "source": "src/Language-Passage-Utils.html#pp",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Passage",
          "module": "Language.Passage",
          "name": "pp",
          "normalized": "a-\u003eDoc",
          "package": "passage",
          "signature": "t-\u003eDoc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage.html#v:pp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Passage",
          "name": "ppPrec",
          "package": "passage",
          "signature": "Rational -\u003e t -\u003e Doc",
          "source": "src/Language-Passage-Utils.html#ppPrec",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Passage",
          "module": "Language.Passage",
          "name": "ppPrec",
          "normalized": "Rational-\u003ea-\u003eDoc",
          "package": "passage",
          "partial": "Prec",
          "signature": "Rational-\u003et-\u003eDoc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage.html#v:ppPrec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Passage",
          "name": "runLatex",
          "package": "passage",
          "signature": "BayesianNetwork a -\u003e IO ()",
          "source": "src/Language-Passage.html#runLatex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Passage",
          "module": "Language.Passage",
          "name": "runLatex",
          "normalized": "BayesianNetwork a-\u003eIO()",
          "package": "passage",
          "partial": "Latex",
          "signature": "BayesianNetwork a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage.html#v:runLatex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Passage",
          "name": "setIterationsPerSample",
          "package": "passage",
          "signature": "Int -\u003e BayesianSimulator ()",
          "source": "src/Language-Passage-SimulatorConf.html#setIterationsPerSample",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Passage",
          "module": "Language.Passage",
          "name": "setIterationsPerSample",
          "normalized": "Int-\u003eBayesianSimulator()",
          "package": "passage",
          "partial": "Iterations Per Sample",
          "signature": "Int-\u003eBayesianSimulator()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage.html#v:setIterationsPerSample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the random seed for a thread.  This function may be calledd\n multiple times to set the seeds for multiple threads.\n The seeds are used in order: first call is for thread 0, next for thread 1,\n etc.\n\u003c/p\u003e",
          "module": "Language.Passage",
          "name": "setRandomSeed",
          "package": "passage",
          "signature": "Int -\u003e BayesianSimulator ()",
          "source": "src/Language-Passage-SimulatorConf.html#setRandomSeed",
          "type": "function"
        },
        "index": {
          "description": "Set the random seed for thread This function may be calledd multiple times to set the seeds for multiple threads The seeds are used in order first call is for thread next for thread etc",
          "hierarchy": "Language Passage",
          "module": "Language.Passage",
          "name": "setRandomSeed",
          "normalized": "Int-\u003eBayesianSimulator()",
          "package": "passage",
          "partial": "Random Seed",
          "signature": "Int-\u003eBayesianSimulator()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage.html#v:setRandomSeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Passage",
          "name": "setSampleCount",
          "package": "passage",
          "signature": "Int -\u003e BayesianSimulator ()",
          "source": "src/Language-Passage-SimulatorConf.html#setSampleCount",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Passage",
          "module": "Language.Passage",
          "name": "setSampleCount",
          "normalized": "Int-\u003eBayesianSimulator()",
          "package": "passage",
          "partial": "Sample Count",
          "signature": "Int-\u003eBayesianSimulator()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage.html#v:setSampleCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Passage",
          "name": "setThreadNum",
          "package": "passage",
          "signature": "Int -\u003e BayesianSimulator ()",
          "source": "src/Language-Passage-SimulatorConf.html#setThreadNum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Passage",
          "module": "Language.Passage",
          "name": "setThreadNum",
          "normalized": "Int-\u003eBayesianSimulator()",
          "package": "passage",
          "partial": "Thread Num",
          "signature": "Int-\u003eBayesianSimulator()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage.html#v:setThreadNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Passage",
          "name": "setWarmupCount",
          "package": "passage",
          "signature": "Int -\u003e BayesianSimulator ()",
          "source": "src/Language-Passage-SimulatorConf.html#setWarmupCount",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Passage",
          "module": "Language.Passage",
          "name": "setWarmupCount",
          "normalized": "Int-\u003eBayesianSimulator()",
          "package": "passage",
          "partial": "Warmup Count",
          "signature": "Int-\u003eBayesianSimulator()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage.html#v:setWarmupCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Passage",
          "name": "simulate",
          "package": "passage",
          "signature": "FilePath -\u003e BayesianSimulator () -\u003e IO ()",
          "source": "src/Language-Passage.html#simulate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Passage",
          "module": "Language.Passage",
          "name": "simulate",
          "normalized": "FilePath-\u003eBayesianSimulator()-\u003eIO()",
          "package": "passage",
          "signature": "FilePath-\u003eBayesianSimulator()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage.html#v:simulate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a separate file for each stochastic variable.\n The benefit of this flag is that it makes it possible to compile\n multiple files in parallel.  The drawback is that some optimizations\n may be lost because the files are compiled separately.  Also, there\n is some overhead for processing multiple files.\n\u003c/p\u003e",
          "module": "Language.Passage",
          "name": "splitFiles",
          "package": "passage",
          "signature": "Bool -\u003e BayesianSimulator ()",
          "source": "src/Language-Passage-SimulatorConf.html#splitFiles",
          "type": "function"
        },
        "index": {
          "description": "Generate separate file for each stochastic variable The benefit of this flag is that it makes it possible to compile multiple files in parallel The drawback is that some optimizations may be lost because the files are compiled separately Also there is some overhead for processing multiple files",
          "hierarchy": "Language Passage",
          "module": "Language.Passage",
          "name": "splitFiles",
          "normalized": "Bool-\u003eBayesianSimulator()",
          "package": "passage",
          "partial": "Files",
          "signature": "Bool-\u003eBayesianSimulator()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage.html#v:splitFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Passage",
          "name": "stoArryas",
          "package": "passage",
          "signature": "(IntMap ArrayInfo)",
          "source": "src/Language-Passage-AST.html#BayesianGraph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Passage",
          "module": "Language.Passage",
          "name": "stoArryas",
          "package": "passage",
          "partial": "Arryas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage.html#v:stoArryas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Passage",
          "name": "stoNodes",
          "package": "passage",
          "signature": "(IntMap StoVar)",
          "source": "src/Language-Passage-AST.html#BayesianGraph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Passage",
          "module": "Language.Passage",
          "name": "stoNodes",
          "package": "passage",
          "partial": "Nodes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage.html#v:stoNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaps terms that mention the variable to their coefficients,\n which do not depend on the variable.  The term for the\n distribution is the sum of the products of the map elements\n (see \u003ccode\u003estoPostLL\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Language.Passage",
          "name": "stoPostDistLL",
          "package": "passage",
          "signature": "(Map Expr Expr)",
          "source": "src/Language-Passage-AST.html#StoVar",
          "type": "function"
        },
        "index": {
          "description": "Maps terms that mention the variable to their coefficients which do not depend on the variable The term for the distribution is the sum of the products of the map elements see stoPostLL",
          "hierarchy": "Language Passage",
          "module": "Language.Passage",
          "name": "stoPostDistLL",
          "package": "passage",
          "partial": "Post Dist LL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage.html#v:stoPostDistLL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Passage",
          "name": "stoVarName",
          "package": "passage",
          "signature": "StoVarName",
          "source": "src/Language-Passage-AST.html#StoVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Passage",
          "module": "Language.Passage",
          "name": "stoVarName",
          "package": "passage",
          "partial": "Var Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage.html#v:stoVarName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Passage",
          "name": "stoVarPrior",
          "package": "passage",
          "signature": "PriorInfo",
          "source": "src/Language-Passage-AST.html#StoVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Passage",
          "module": "Language.Passage",
          "name": "stoVarPrior",
          "package": "passage",
          "partial": "Var Prior",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage.html#v:stoVarPrior"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Passage",
          "name": "tcase",
          "package": "passage",
          "signature": "Term a -\u003e [Term a] -\u003e Term a",
          "source": "src/Language-Passage-Term.html#tcase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Passage",
          "module": "Language.Passage",
          "name": "tcase",
          "normalized": "Term a-\u003e[Term a]-\u003eTerm a",
          "package": "passage",
          "signature": "Term a-\u003e[Term a]-\u003eTerm a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage.html#v:tcase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Passage",
          "name": "tconst",
          "package": "passage",
          "signature": "Double -\u003e Term a",
          "source": "src/Language-Passage-Term.html#tconst",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Passage",
          "module": "Language.Passage",
          "name": "tconst",
          "normalized": "Double-\u003eTerm a",
          "package": "passage",
          "signature": "Double-\u003eTerm a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage.html#v:tconst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Passage",
          "name": "useMersenneTwister",
          "package": "passage",
          "signature": "Bool -\u003e BayesianSimulator ()",
          "source": "src/Language-Passage-SimulatorConf.html#useMersenneTwister",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Passage",
          "module": "Language.Passage",
          "name": "useMersenneTwister",
          "normalized": "Bool-\u003eBayesianSimulator()",
          "package": "passage",
          "partial": "Mersenne Twister",
          "signature": "Bool-\u003eBayesianSimulator()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage.html#v:useMersenneTwister"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen using a specialized slizer, we generate a custom slicer\n for each stochastic variable.  The benefit of this is that, in principle,\n this may result in more efficient code, at the cost of longer compilation\n time, and larger binary.  The alternative is to use a generic slicing\n function which is parameterized by the log-likelihood function for\n a variable.\n\u003c/p\u003e",
          "module": "Language.Passage",
          "name": "useSpecialSlicers",
          "package": "passage",
          "signature": "Bool -\u003e BayesianSimulator ()",
          "source": "src/Language-Passage-SimulatorConf.html#useSpecialSlicers",
          "type": "function"
        },
        "index": {
          "description": "When using specialized slizer we generate custom slicer for each stochastic variable The benefit of this is that in principle this may result in more efficient code at the cost of longer compilation time and larger binary The alternative is to use generic slicing function which is parameterized by the log-likelihood function for variable",
          "hierarchy": "Language Passage",
          "module": "Language.Passage",
          "name": "useSpecialSlicers",
          "normalized": "Bool-\u003eBayesianSimulator()",
          "package": "passage",
          "partial": "Special Slicers",
          "signature": "Bool-\u003eBayesianSimulator()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage.html#v:useSpecialSlicers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Passage",
          "name": "using",
          "package": "passage",
          "signature": "Distribution -\u003e BayesianNetwork Expr",
          "source": "src/Language-Passage-AST.html#using",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Passage",
          "module": "Language.Passage",
          "name": "using",
          "normalized": "Distribution-\u003eBayesianNetwork Expr",
          "package": "passage",
          "signature": "Distribution-\u003eBayesianNetwork Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage.html#v:using"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a 1D vector\n\u003c/p\u003e",
          "module": "Language.Passage",
          "name": "vector",
          "package": "passage",
          "signature": "(Int, Int)-\u003e (Int -\u003e BayesianNetwork Expr)-\u003e BayesianNetwork ([Expr] -\u003e Expr)",
          "type": "function"
        },
        "index": {
          "description": "Create vector",
          "hierarchy": "Language Passage",
          "module": "Language.Passage",
          "name": "vector",
          "normalized": "(Int,Int)-\u003e(Int-\u003eBayesianNetwork Expr)-\u003eBayesianNetwork([Expr]-\u003eExpr)",
          "package": "passage",
          "signature": "(Int,Int)-\u003e(Int-\u003eBayesianNetwork Expr)-\u003eBayesianNetwork([Expr]-\u003eExpr)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/passage/docs/Language-Passage.html#v:vector"
      }
    }
  ]
]