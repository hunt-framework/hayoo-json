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
        "word": "bayes-stack"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BayesStack.Core.Gibbs",
          "name": "Gibbs",
          "package": "bayes-stack",
          "source": "src/BayesStack-Core-Gibbs.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "BayesStack Core Gibbs",
          "module": "BayesStack.Core.Gibbs",
          "name": "Gibbs",
          "package": "bayes-stack",
          "partial": "Gibbs",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-Core-Gibbs.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BayesStack.Core.Gibbs",
          "name": "UpdateUnit",
          "package": "bayes-stack",
          "source": "src/BayesStack-Core-Gibbs.html#UpdateUnit",
          "type": "class"
        },
        "index": {
          "hierarchy": "BayesStack Core Gibbs",
          "module": "BayesStack.Core.Gibbs",
          "name": "UpdateUnit",
          "package": "bayes-stack",
          "partial": "Update Unit",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-Core-Gibbs.html#t:UpdateUnit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BayesStack.Core.Gibbs",
          "name": "WrappedUpdateUnit",
          "package": "bayes-stack",
          "source": "src/BayesStack-Core-Gibbs.html#WrappedUpdateUnit",
          "type": "data"
        },
        "index": {
          "hierarchy": "BayesStack Core Gibbs",
          "module": "BayesStack.Core.Gibbs",
          "name": "WrappedUpdateUnit",
          "package": "bayes-stack",
          "partial": "Wrapped Update Unit",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-Core-Gibbs.html#t:WrappedUpdateUnit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BayesStack.Core.Gibbs",
          "name": "WrappedUU",
          "package": "bayes-stack",
          "signature": "WrappedUU uu",
          "source": "src/BayesStack-Core-Gibbs.html#WrappedUpdateUnit",
          "type": "function"
        },
        "index": {
          "hierarchy": "BayesStack Core Gibbs",
          "module": "BayesStack.Core.Gibbs",
          "name": "WrappedUU",
          "package": "bayes-stack",
          "partial": "Wrapped UU",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-Core-Gibbs.html#v:WrappedUU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BayesStack.Core.Gibbs",
          "name": "evolveSetting",
          "package": "bayes-stack",
          "signature": "ModelState uu -\u003e uu -\u003e RVar (Setting uu)",
          "source": "src/BayesStack-Core-Gibbs.html#evolveSetting",
          "type": "method"
        },
        "index": {
          "hierarchy": "BayesStack Core Gibbs",
          "module": "BayesStack.Core.Gibbs",
          "name": "evolveSetting",
          "normalized": "ModelState a-\u003ea-\u003eRVar(Setting a)",
          "package": "bayes-stack",
          "partial": "Setting",
          "signature": "ModelState uu-\u003euu-\u003eRVar(Setting uu)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-Core-Gibbs.html#v:evolveSetting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BayesStack.Core.Gibbs",
          "name": "fetchSetting",
          "package": "bayes-stack",
          "signature": "uu -\u003e ModelState uu -\u003e Setting uu",
          "source": "src/BayesStack-Core-Gibbs.html#fetchSetting",
          "type": "method"
        },
        "index": {
          "hierarchy": "BayesStack Core Gibbs",
          "module": "BayesStack.Core.Gibbs",
          "name": "fetchSetting",
          "normalized": "a-\u003eModelState a-\u003eSetting a",
          "package": "bayes-stack",
          "partial": "Setting",
          "signature": "uu-\u003eModelState uu-\u003eSetting uu",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-Core-Gibbs.html#v:fetchSetting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BayesStack.Core.Gibbs",
          "name": "gibbsUpdate",
          "package": "bayes-stack",
          "signature": "Int -\u003e ms -\u003e [WrappedUpdateUnit ms] -\u003e IO ms",
          "source": "src/BayesStack-Core-Gibbs.html#gibbsUpdate",
          "type": "function"
        },
        "index": {
          "hierarchy": "BayesStack Core Gibbs",
          "module": "BayesStack.Core.Gibbs",
          "name": "gibbsUpdate",
          "normalized": "Int-\u003ea-\u003e[WrappedUpdateUnit a]-\u003eIO a",
          "package": "bayes-stack",
          "partial": "Update",
          "signature": "Int-\u003ems-\u003e[WrappedUpdateUnit ms]-\u003eIO ms",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-Core-Gibbs.html#v:gibbsUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BayesStack.Core.Gibbs",
          "name": "updateSetting",
          "package": "bayes-stack",
          "signature": "uu -\u003e Setting uu -\u003e Setting uu -\u003e ModelState uu -\u003e ModelState uu",
          "source": "src/BayesStack-Core-Gibbs.html#updateSetting",
          "type": "method"
        },
        "index": {
          "hierarchy": "BayesStack Core Gibbs",
          "module": "BayesStack.Core.Gibbs",
          "name": "updateSetting",
          "normalized": "a-\u003eSetting a-\u003eSetting a-\u003eModelState a-\u003eModelState a",
          "package": "bayes-stack",
          "partial": "Setting",
          "signature": "uu-\u003eSetting uu-\u003eSetting uu-\u003eModelState uu-\u003eModelState uu",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-Core-Gibbs.html#v:updateSetting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BayesStack.Core.Types",
          "name": "Types",
          "package": "bayes-stack",
          "source": "src/BayesStack-Core-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "BayesStack Core Types",
          "module": "BayesStack.Core.Types",
          "name": "Types",
          "package": "bayes-stack",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-Core-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA distribution for which a full conditional factor can be produced\n\u003c/p\u003e",
          "module": "BayesStack.Core.Types",
          "name": "FullConditionable",
          "package": "bayes-stack",
          "source": "src/BayesStack-Core-Types.html#FullConditionable",
          "type": "class"
        },
        "index": {
          "description": "distribution for which full conditional factor can be produced",
          "hierarchy": "BayesStack Core Types",
          "module": "BayesStack.Core.Types",
          "name": "FullConditionable",
          "package": "bayes-stack",
          "partial": "Full Conditionable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-Core-Types.html#t:FullConditionable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BayesStack.Core.Types",
          "name": "HasLikelihood",
          "package": "bayes-stack",
          "source": "src/BayesStack-Core-Types.html#HasLikelihood",
          "type": "class"
        },
        "index": {
          "hierarchy": "BayesStack Core Types",
          "module": "BayesStack.Core.Types",
          "name": "HasLikelihood",
          "package": "bayes-stack",
          "partial": "Has Likelihood",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-Core-Types.html#t:HasLikelihood"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BayesStack.Core.Types",
          "name": "Probability",
          "package": "bayes-stack",
          "source": "src/BayesStack-Core-Types.html#Probability",
          "type": "type"
        },
        "index": {
          "hierarchy": "BayesStack Core Types",
          "module": "BayesStack.Core.Types",
          "name": "Probability",
          "package": "bayes-stack",
          "partial": "Probability",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-Core-Types.html#t:Probability"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BayesStack.Core.Types",
          "name": "likelihood",
          "package": "bayes-stack",
          "signature": "p a -\u003e Probability",
          "source": "src/BayesStack-Core-Types.html#likelihood",
          "type": "method"
        },
        "index": {
          "hierarchy": "BayesStack Core Types",
          "module": "BayesStack.Core.Types",
          "name": "likelihood",
          "normalized": "a b-\u003eProbability",
          "package": "bayes-stack",
          "signature": "p a-\u003eProbability",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-Core-Types.html#v:likelihood"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BayesStack.Core.Types",
          "name": "prob",
          "package": "bayes-stack",
          "signature": "p a -\u003e a -\u003e Probability",
          "source": "src/BayesStack-Core-Types.html#prob",
          "type": "method"
        },
        "index": {
          "hierarchy": "BayesStack Core Types",
          "module": "BayesStack.Core.Types",
          "name": "prob",
          "normalized": "a b-\u003eb-\u003eProbability",
          "package": "bayes-stack",
          "signature": "p a-\u003ea-\u003eProbability",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-Core-Types.html#v:prob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BayesStack.Core.Types",
          "name": "sampleProb",
          "package": "bayes-stack",
          "signature": "p a -\u003e a -\u003e Double",
          "source": "src/BayesStack-Core-Types.html#sampleProb",
          "type": "method"
        },
        "index": {
          "hierarchy": "BayesStack Core Types",
          "module": "BayesStack.Core.Types",
          "name": "sampleProb",
          "normalized": "a b-\u003eb-\u003eDouble",
          "package": "bayes-stack",
          "partial": "Prob",
          "signature": "p a-\u003ea-\u003eDouble",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-Core-Types.html#v:sampleProb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BayesStack.Core",
          "name": "Core",
          "package": "bayes-stack",
          "source": "src/BayesStack-Core.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "BayesStack Core",
          "module": "BayesStack.Core",
          "name": "Core",
          "package": "bayes-stack",
          "partial": "Core",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-Core.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BayesStack.DirMulti",
          "name": "DirMulti",
          "package": "bayes-stack",
          "source": "src/BayesStack-DirMulti.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "BayesStack DirMulti",
          "module": "BayesStack.DirMulti",
          "name": "DirMulti",
          "package": "bayes-stack",
          "partial": "Dir Multi",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-DirMulti.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'Multinom a' represents multinomial distribution over domain \u003ccode\u003ea\u003c/code\u003e.\n Optionally, this can include a collapsed Dirichlet prior.\n 'Multinom alpha count total' is a multinomial with Dirichlet prior\n with symmetric parameter \u003ccode\u003ealpha\u003c/code\u003e, ...\n\u003c/p\u003e",
          "module": "BayesStack.DirMulti",
          "name": "Multinom",
          "package": "bayes-stack",
          "source": "src/BayesStack-DirMulti.html#Multinom",
          "type": "data"
        },
        "index": {
          "description": "Multinom represents multinomial distribution over domain Optionally this can include collapsed Dirichlet prior Multinom alpha count total is multinomial with Dirichlet prior with symmetric parameter alpha",
          "hierarchy": "BayesStack DirMulti",
          "module": "BayesStack.DirMulti",
          "name": "Multinom",
          "package": "bayes-stack",
          "partial": "Multinom",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-DirMulti.html#t:Multinom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BayesStack.DirMulti",
          "name": "SetUnset",
          "package": "bayes-stack",
          "source": "src/BayesStack-DirMulti.html#SetUnset",
          "type": "data"
        },
        "index": {
          "hierarchy": "BayesStack DirMulti",
          "module": "BayesStack.DirMulti",
          "name": "SetUnset",
          "package": "bayes-stack",
          "partial": "Set Unset",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-DirMulti.html#t:SetUnset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BayesStack.DirMulti",
          "name": "Set",
          "package": "bayes-stack",
          "signature": "Set",
          "source": "src/BayesStack-DirMulti.html#SetUnset",
          "type": "function"
        },
        "index": {
          "hierarchy": "BayesStack DirMulti",
          "module": "BayesStack.DirMulti",
          "name": "Set",
          "package": "bayes-stack",
          "partial": "Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-DirMulti.html#v:Set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BayesStack.DirMulti",
          "name": "Unset",
          "package": "bayes-stack",
          "signature": "Unset",
          "source": "src/BayesStack-DirMulti.html#SetUnset",
          "type": "function"
        },
        "index": {
          "hierarchy": "BayesStack DirMulti",
          "module": "BayesStack.DirMulti",
          "name": "Unset",
          "package": "bayes-stack",
          "partial": "Unset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-DirMulti.html#v:Unset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BayesStack.DirMulti",
          "name": "decMultinom",
          "package": "bayes-stack",
          "signature": "a -\u003e Multinom a -\u003e Multinom a",
          "source": "src/BayesStack-DirMulti.html#decMultinom",
          "type": "function"
        },
        "index": {
          "hierarchy": "BayesStack DirMulti",
          "module": "BayesStack.DirMulti",
          "name": "decMultinom",
          "normalized": "a-\u003eMultinom a-\u003eMultinom a",
          "package": "bayes-stack",
          "partial": "Multinom",
          "signature": "a-\u003eMultinom a-\u003eMultinom a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-DirMulti.html#v:decMultinom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProbabilities sorted decreasingly              \n\u003c/p\u003e",
          "module": "BayesStack.DirMulti",
          "name": "decProbabilities",
          "package": "bayes-stack",
          "signature": "Multinom a -\u003e Seq (Double, a)",
          "source": "src/BayesStack-DirMulti.html#decProbabilities",
          "type": "function"
        },
        "index": {
          "description": "Probabilities sorted decreasingly",
          "hierarchy": "BayesStack DirMulti",
          "module": "BayesStack.DirMulti",
          "name": "decProbabilities",
          "normalized": "Multinom a-\u003eSeq(Double,a)",
          "package": "bayes-stack",
          "partial": "Probabilities",
          "signature": "Multinom a-\u003eSeq(Double,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-DirMulti.html#v:decProbabilities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an asymmetric Dirichlet/multinomial from items and alphas\n\u003c/p\u003e",
          "module": "BayesStack.DirMulti",
          "name": "dirMulti",
          "package": "bayes-stack",
          "signature": "[(a, Double)] -\u003e Multinom a",
          "source": "src/BayesStack-DirMulti.html#dirMulti",
          "type": "function"
        },
        "index": {
          "description": "Create an asymmetric Dirichlet multinomial from items and alphas",
          "hierarchy": "BayesStack DirMulti",
          "module": "BayesStack.DirMulti",
          "name": "dirMulti",
          "normalized": "[(a,Double)]-\u003eMultinom a",
          "package": "bayes-stack",
          "partial": "Multi",
          "signature": "[(a,Double)]-\u003eMultinom a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-DirMulti.html#v:dirMulti"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BayesStack.DirMulti",
          "name": "dmAlpha",
          "package": "bayes-stack",
          "signature": "Multinom a -\u003e Alpha a",
          "source": "src/BayesStack-DirMulti.html#dmAlpha",
          "type": "function"
        },
        "index": {
          "hierarchy": "BayesStack DirMulti",
          "module": "BayesStack.DirMulti",
          "name": "dmAlpha",
          "normalized": "Multinom a-\u003eAlpha a",
          "package": "bayes-stack",
          "partial": "Alpha",
          "signature": "Multinom a-\u003eAlpha a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-DirMulti.html#v:dmAlpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BayesStack.DirMulti",
          "name": "dmDomain",
          "package": "bayes-stack",
          "signature": "Multinom a -\u003e Seq a",
          "source": "src/BayesStack-DirMulti.html#dmDomain",
          "type": "function"
        },
        "index": {
          "hierarchy": "BayesStack DirMulti",
          "module": "BayesStack.DirMulti",
          "name": "dmDomain",
          "normalized": "Multinom a-\u003eSeq a",
          "package": "bayes-stack",
          "partial": "Domain",
          "signature": "Multinom a-\u003eSeq a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-DirMulti.html#v:dmDomain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BayesStack.DirMulti",
          "name": "dmTotal",
          "package": "bayes-stack",
          "signature": "Multinom a -\u003e Int",
          "source": "src/BayesStack-DirMulti.html#dmTotal",
          "type": "function"
        },
        "index": {
          "hierarchy": "BayesStack DirMulti",
          "module": "BayesStack.DirMulti",
          "name": "dmTotal",
          "normalized": "Multinom a-\u003eInt",
          "package": "bayes-stack",
          "partial": "Total",
          "signature": "Multinom a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-DirMulti.html#v:dmTotal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BayesStack.DirMulti",
          "name": "estimatePrior",
          "package": "bayes-stack",
          "signature": "Double -\u003e [Multinom a] -\u003e Alpha a",
          "source": "src/BayesStack-DirMulti.html#estimatePrior",
          "type": "function"
        },
        "index": {
          "hierarchy": "BayesStack DirMulti",
          "module": "BayesStack.DirMulti",
          "name": "estimatePrior",
          "normalized": "Double-\u003e[Multinom a]-\u003eAlpha a",
          "package": "bayes-stack",
          "partial": "Prior",
          "signature": "Double-\u003e[Multinom a]-\u003eAlpha a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-DirMulti.html#v:estimatePrior"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BayesStack.DirMulti",
          "name": "incMultinom",
          "package": "bayes-stack",
          "signature": "a -\u003e Multinom a -\u003e Multinom a",
          "source": "src/BayesStack-DirMulti.html#incMultinom",
          "type": "function"
        },
        "index": {
          "hierarchy": "BayesStack DirMulti",
          "module": "BayesStack.DirMulti",
          "name": "incMultinom",
          "normalized": "a-\u003eMultinom a-\u003eMultinom a",
          "package": "bayes-stack",
          "partial": "Multinom",
          "signature": "a-\u003eMultinom a-\u003eMultinom a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-DirMulti.html#v:incMultinom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA multinomial without a prior\n\u003c/p\u003e",
          "module": "BayesStack.DirMulti",
          "name": "multinom",
          "package": "bayes-stack",
          "signature": "[(a, Double)] -\u003e Multinom a",
          "source": "src/BayesStack-DirMulti.html#multinom",
          "type": "function"
        },
        "index": {
          "description": "multinomial without prior",
          "hierarchy": "BayesStack DirMulti",
          "module": "BayesStack.DirMulti",
          "name": "multinom",
          "normalized": "[(a,Double)]-\u003eMultinom a",
          "package": "bayes-stack",
          "signature": "[(a,Double)]-\u003eMultinom a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-DirMulti.html#v:multinom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BayesStack.DirMulti",
          "name": "prettyMultinom",
          "package": "bayes-stack",
          "signature": "Int -\u003e (a -\u003e String) -\u003e Multinom a -\u003e Doc",
          "source": "src/BayesStack-DirMulti.html#prettyMultinom",
          "type": "function"
        },
        "index": {
          "hierarchy": "BayesStack DirMulti",
          "module": "BayesStack.DirMulti",
          "name": "prettyMultinom",
          "normalized": "Int-\u003e(a-\u003eString)-\u003eMultinom a-\u003eDoc",
          "package": "bayes-stack",
          "partial": "Multinom",
          "signature": "Int-\u003e(a-\u003eString)-\u003eMultinom a-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-DirMulti.html#v:prettyMultinom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BayesStack.DirMulti",
          "name": "probabilities",
          "package": "bayes-stack",
          "signature": "Multinom a -\u003e Seq (Double, a)",
          "source": "src/BayesStack-DirMulti.html#probabilities",
          "type": "function"
        },
        "index": {
          "hierarchy": "BayesStack DirMulti",
          "module": "BayesStack.DirMulti",
          "name": "probabilities",
          "normalized": "Multinom a-\u003eSeq(Double,a)",
          "package": "bayes-stack",
          "signature": "Multinom a-\u003eSeq(Double,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-DirMulti.html#v:probabilities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BayesStack.DirMulti",
          "name": "reestimatePriors",
          "package": "bayes-stack",
          "signature": "f (Multinom a) -\u003e f (Multinom a)",
          "source": "src/BayesStack-DirMulti.html#reestimatePriors",
          "type": "function"
        },
        "index": {
          "hierarchy": "BayesStack DirMulti",
          "module": "BayesStack.DirMulti",
          "name": "reestimatePriors",
          "normalized": "a(Multinom b)-\u003ea(Multinom b)",
          "package": "bayes-stack",
          "partial": "Priors",
          "signature": "f(Multinom a)-\u003ef(Multinom a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-DirMulti.html#v:reestimatePriors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BayesStack.DirMulti",
          "name": "reestimateSymPriors",
          "package": "bayes-stack",
          "signature": "f (Multinom a) -\u003e f (Multinom a)",
          "source": "src/BayesStack-DirMulti.html#reestimateSymPriors",
          "type": "function"
        },
        "index": {
          "hierarchy": "BayesStack DirMulti",
          "module": "BayesStack.DirMulti",
          "name": "reestimateSymPriors",
          "normalized": "a(Multinom b)-\u003ea(Multinom b)",
          "package": "bayes-stack",
          "partial": "Sym Priors",
          "signature": "f(Multinom a)-\u003ef(Multinom a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-DirMulti.html#v:reestimateSymPriors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BayesStack.DirMulti",
          "name": "setMultinom",
          "package": "bayes-stack",
          "signature": "SetUnset -\u003e a -\u003e Multinom a -\u003e Multinom a",
          "source": "src/BayesStack-DirMulti.html#setMultinom",
          "type": "function"
        },
        "index": {
          "hierarchy": "BayesStack DirMulti",
          "module": "BayesStack.DirMulti",
          "name": "setMultinom",
          "normalized": "SetUnset-\u003ea-\u003eMultinom a-\u003eMultinom a",
          "package": "bayes-stack",
          "partial": "Multinom",
          "signature": "SetUnset-\u003ea-\u003eMultinom a-\u003eMultinom a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-DirMulti.html#v:setMultinom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a symmetric Dirichlet/multinomial\n\u003c/p\u003e",
          "module": "BayesStack.DirMulti",
          "name": "symDirMulti",
          "package": "bayes-stack",
          "signature": "Double -\u003e [a] -\u003e Multinom a",
          "source": "src/BayesStack-DirMulti.html#symDirMulti",
          "type": "function"
        },
        "index": {
          "description": "Create symmetric Dirichlet multinomial",
          "hierarchy": "BayesStack DirMulti",
          "module": "BayesStack.DirMulti",
          "name": "symDirMulti",
          "normalized": "Double-\u003e[a]-\u003eMultinom a",
          "package": "bayes-stack",
          "partial": "Dir Multi",
          "signature": "Double-\u003e[a]-\u003eMultinom a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-DirMulti.html#v:symDirMulti"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate the prior of a Dirichlet/multinomial\n\u003c/p\u003e",
          "module": "BayesStack.DirMulti",
          "name": "updatePrior",
          "package": "bayes-stack",
          "signature": "(Alpha a -\u003e Alpha a) -\u003e Multinom a -\u003e Multinom a",
          "source": "src/BayesStack-DirMulti.html#updatePrior",
          "type": "function"
        },
        "index": {
          "description": "Update the prior of Dirichlet multinomial",
          "hierarchy": "BayesStack DirMulti",
          "module": "BayesStack.DirMulti",
          "name": "updatePrior",
          "normalized": "(Alpha a-\u003eAlpha a)-\u003eMultinom a-\u003eMultinom a",
          "package": "bayes-stack",
          "partial": "Prior",
          "signature": "(Alpha a-\u003eAlpha a)-\u003eMultinom a-\u003eMultinom a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-DirMulti.html#v:updatePrior"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BayesStack.Dirichlet",
          "name": "Dirichlet",
          "package": "bayes-stack",
          "source": "src/BayesStack-Dirichlet.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "BayesStack Dirichlet",
          "module": "BayesStack.Dirichlet",
          "name": "Dirichlet",
          "package": "bayes-stack",
          "partial": "Dirichlet",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-Dirichlet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Dirichlet prior\n\u003c/p\u003e",
          "module": "BayesStack.Dirichlet",
          "name": "Alpha",
          "package": "bayes-stack",
          "source": "src/BayesStack-Dirichlet.html#Alpha",
          "type": "data"
        },
        "index": {
          "description": "Dirichlet prior",
          "hierarchy": "BayesStack Dirichlet",
          "module": "BayesStack.Dirichlet",
          "name": "Alpha",
          "package": "bayes-stack",
          "partial": "Alpha",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-Dirichlet.html#t:Alpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BayesStack.Dirichlet",
          "name": "DirMean",
          "package": "bayes-stack",
          "source": "src/BayesStack-Dirichlet.html#DirMean",
          "type": "type"
        },
        "index": {
          "hierarchy": "BayesStack Dirichlet",
          "module": "BayesStack.Dirichlet",
          "name": "DirMean",
          "package": "bayes-stack",
          "partial": "Dir Mean",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-Dirichlet.html#t:DirMean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BayesStack.Dirichlet",
          "name": "DirPrecision",
          "package": "bayes-stack",
          "source": "src/BayesStack-Dirichlet.html#DirPrecision",
          "type": "type"
        },
        "index": {
          "hierarchy": "BayesStack Dirichlet",
          "module": "BayesStack.Dirichlet",
          "name": "DirPrecision",
          "package": "bayes-stack",
          "partial": "Dir Precision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-Dirichlet.html#t:DirPrecision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'alphaDomain a' is the domain of prior \u003ccode\u003ea\u003c/code\u003e\n\u003c/p\u003e",
          "module": "BayesStack.Dirichlet",
          "name": "alphaDomain",
          "package": "bayes-stack",
          "signature": "Alpha a -\u003e Seq a",
          "source": "src/BayesStack-Dirichlet.html#alphaDomain",
          "type": "function"
        },
        "index": {
          "description": "alphaDomain is the domain of prior",
          "hierarchy": "BayesStack Dirichlet",
          "module": "BayesStack.Dirichlet",
          "name": "alphaDomain",
          "normalized": "Alpha a-\u003eSeq a",
          "package": "bayes-stack",
          "partial": "Domain",
          "signature": "Alpha a-\u003eSeq a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-Dirichlet.html#v:alphaDomain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BayesStack.Dirichlet",
          "name": "alphaNormalizer",
          "package": "bayes-stack",
          "signature": "Alpha a -\u003e LogFloat",
          "source": "src/BayesStack-Dirichlet.html#alphaNormalizer",
          "type": "function"
        },
        "index": {
          "hierarchy": "BayesStack Dirichlet",
          "module": "BayesStack.Dirichlet",
          "name": "alphaNormalizer",
          "normalized": "Alpha a-\u003eLogFloat",
          "package": "bayes-stack",
          "partial": "Normalizer",
          "signature": "Alpha a-\u003eLogFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-Dirichlet.html#v:alphaNormalizer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'alphaOf alpha k' is the value of element \u003ccode\u003ek\u003c/code\u003e in prior \u003ccode\u003ealpha\u003c/code\u003e\n\u003c/p\u003e",
          "module": "BayesStack.Dirichlet",
          "name": "alphaOf",
          "package": "bayes-stack",
          "signature": "Alpha a -\u003e a -\u003e Double",
          "source": "src/BayesStack-Dirichlet.html#alphaOf",
          "type": "function"
        },
        "index": {
          "description": "alphaOf alpha is the value of element in prior alpha",
          "hierarchy": "BayesStack Dirichlet",
          "module": "BayesStack.Dirichlet",
          "name": "alphaOf",
          "normalized": "Alpha a-\u003ea-\u003eDouble",
          "package": "bayes-stack",
          "partial": "Of",
          "signature": "Alpha a-\u003ea-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-Dirichlet.html#v:alphaOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'alphaToMeanPrecision a' is the mean/precision representation of the prior \u003ccode\u003ea\u003c/code\u003e\n\u003c/p\u003e",
          "module": "BayesStack.Dirichlet",
          "name": "alphaToMeanPrecision",
          "package": "bayes-stack",
          "signature": "Alpha a -\u003e (DirMean a, DirPrecision)",
          "source": "src/BayesStack-Dirichlet.html#alphaToMeanPrecision",
          "type": "function"
        },
        "index": {
          "description": "alphaToMeanPrecision is the mean precision representation of the prior",
          "hierarchy": "BayesStack Dirichlet",
          "module": "BayesStack.Dirichlet",
          "name": "alphaToMeanPrecision",
          "normalized": "Alpha a-\u003e(DirMean a,DirPrecision)",
          "package": "bayes-stack",
          "partial": "To Mean Precision",
          "signature": "Alpha a-\u003e(DirMean a,DirPrecision)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-Dirichlet.html#v:alphaToMeanPrecision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an asymmetric Alpha\n\u003c/p\u003e",
          "module": "BayesStack.Dirichlet",
          "name": "asymAlpha",
          "package": "bayes-stack",
          "signature": "EnumMap a Double -\u003e Alpha a",
          "source": "src/BayesStack-Dirichlet.html#asymAlpha",
          "type": "function"
        },
        "index": {
          "description": "Construct an asymmetric Alpha",
          "hierarchy": "BayesStack Dirichlet",
          "module": "BayesStack.Dirichlet",
          "name": "asymAlpha",
          "normalized": "EnumMap a Double-\u003eAlpha a",
          "package": "bayes-stack",
          "partial": "Alpha",
          "signature": "EnumMap a Double-\u003eAlpha a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-Dirichlet.html#v:asymAlpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'meanPrecisionToAlpha m p' is a prior with mean \u003ccode\u003em\u003c/code\u003e and precision \u003ccode\u003e\u003ca\u003ep\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "BayesStack.Dirichlet",
          "name": "meanPrecisionToAlpha",
          "package": "bayes-stack",
          "signature": "DirMean a -\u003e DirPrecision -\u003e Alpha a",
          "source": "src/BayesStack-Dirichlet.html#meanPrecisionToAlpha",
          "type": "function"
        },
        "index": {
          "description": "meanPrecisionToAlpha is prior with mean and precision",
          "hierarchy": "BayesStack Dirichlet",
          "module": "BayesStack.Dirichlet",
          "name": "meanPrecisionToAlpha",
          "normalized": "DirMean a-\u003eDirPrecision-\u003eAlpha a",
          "package": "bayes-stack",
          "partial": "Precision To Alpha",
          "signature": "DirMean a-\u003eDirPrecision-\u003eAlpha a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-Dirichlet.html#v:meanPrecisionToAlpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty-print a Dirichlet prior\n\u003c/p\u003e",
          "module": "BayesStack.Dirichlet",
          "name": "prettyAlpha",
          "package": "bayes-stack",
          "signature": "(a -\u003e String) -\u003e Alpha a -\u003e Doc",
          "source": "src/BayesStack-Dirichlet.html#prettyAlpha",
          "type": "function"
        },
        "index": {
          "description": "Pretty-print Dirichlet prior",
          "hierarchy": "BayesStack Dirichlet",
          "module": "BayesStack.Dirichlet",
          "name": "prettyAlpha",
          "normalized": "(a-\u003eString)-\u003eAlpha a-\u003eDoc",
          "package": "bayes-stack",
          "partial": "Alpha",
          "signature": "(a-\u003eString)-\u003eAlpha a-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-Dirichlet.html#v:prettyAlpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a particular alpha element\n\u003c/p\u003e",
          "module": "BayesStack.Dirichlet",
          "name": "setAlphaOf",
          "package": "bayes-stack",
          "signature": "a -\u003e Double -\u003e Alpha a -\u003e Alpha a",
          "source": "src/BayesStack-Dirichlet.html#setAlphaOf",
          "type": "function"
        },
        "index": {
          "description": "Set particular alpha element",
          "hierarchy": "BayesStack Dirichlet",
          "module": "BayesStack.Dirichlet",
          "name": "setAlphaOf",
          "normalized": "a-\u003eDouble-\u003eAlpha a-\u003eAlpha a",
          "package": "bayes-stack",
          "partial": "Alpha Of",
          "signature": "a-\u003eDouble-\u003eAlpha a-\u003eAlpha a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-Dirichlet.html#v:setAlphaOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BayesStack.Dirichlet",
          "name": "setSymAlpha",
          "package": "bayes-stack",
          "signature": "Double -\u003e Alpha a -\u003e Alpha a",
          "source": "src/BayesStack-Dirichlet.html#setSymAlpha",
          "type": "function"
        },
        "index": {
          "hierarchy": "BayesStack Dirichlet",
          "module": "BayesStack.Dirichlet",
          "name": "setSymAlpha",
          "normalized": "Double-\u003eAlpha a-\u003eAlpha a",
          "package": "bayes-stack",
          "partial": "Sym Alpha",
          "signature": "Double-\u003eAlpha a-\u003eAlpha a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-Dirichlet.html#v:setSymAlpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'sumAlpha alpha' is the sum of all alphas\n\u003c/p\u003e",
          "module": "BayesStack.Dirichlet",
          "name": "sumAlpha",
          "package": "bayes-stack",
          "signature": "Alpha a -\u003e Double",
          "source": "src/BayesStack-Dirichlet.html#sumAlpha",
          "type": "function"
        },
        "index": {
          "description": "sumAlpha alpha is the sum of all alphas",
          "hierarchy": "BayesStack Dirichlet",
          "module": "BayesStack.Dirichlet",
          "name": "sumAlpha",
          "normalized": "Alpha a-\u003eDouble",
          "package": "bayes-stack",
          "partial": "Alpha",
          "signature": "Alpha a-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-Dirichlet.html#v:sumAlpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BayesStack.Dirichlet",
          "name": "symAlpha",
          "package": "bayes-stack",
          "signature": "[a] -\u003e Double -\u003e Alpha a",
          "source": "src/BayesStack-Dirichlet.html#symAlpha",
          "type": "function"
        },
        "index": {
          "hierarchy": "BayesStack Dirichlet",
          "module": "BayesStack.Dirichlet",
          "name": "symAlpha",
          "normalized": "[a]-\u003eDouble-\u003eAlpha a",
          "package": "bayes-stack",
          "partial": "Alpha",
          "signature": "[a]-\u003eDouble-\u003eAlpha a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-Dirichlet.html#v:symAlpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSymmetrize a Dirichlet prior (such that mean=0) \n\u003c/p\u003e",
          "module": "BayesStack.Dirichlet",
          "name": "symmetrizeAlpha",
          "package": "bayes-stack",
          "signature": "Alpha a -\u003e Alpha a",
          "source": "src/BayesStack-Dirichlet.html#symmetrizeAlpha",
          "type": "function"
        },
        "index": {
          "description": "Symmetrize Dirichlet prior such that mean",
          "hierarchy": "BayesStack Dirichlet",
          "module": "BayesStack.Dirichlet",
          "name": "symmetrizeAlpha",
          "normalized": "Alpha a-\u003eAlpha a",
          "package": "bayes-stack",
          "partial": "Alpha",
          "signature": "Alpha a-\u003eAlpha a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-Dirichlet.html#v:symmetrizeAlpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BayesStack.TupleEnum",
          "name": "TupleEnum",
          "package": "bayes-stack",
          "source": "src/BayesStack-TupleEnum.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "BayesStack TupleEnum",
          "module": "BayesStack.TupleEnum",
          "name": "TupleEnum",
          "package": "bayes-stack",
          "partial": "Tuple Enum",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-TupleEnum.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BayesStack.UniqueKey",
          "name": "UniqueKey",
          "package": "bayes-stack",
          "source": "src/BayesStack-UniqueKey.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "BayesStack UniqueKey",
          "module": "BayesStack.UniqueKey",
          "name": "UniqueKey",
          "package": "bayes-stack",
          "partial": "Unique Key",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-UniqueKey.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'UniqueKey val key' is a monad for a calculation of a mapping unique keys\n \u003ccode\u003ekey\u003c/code\u003e onto values \u003ccode\u003eval\u003c/code\u003e\n\u003c/p\u003e",
          "module": "BayesStack.UniqueKey",
          "name": "UniqueKey",
          "package": "bayes-stack",
          "source": "src/BayesStack-UniqueKey.html#UniqueKey",
          "type": "type"
        },
        "index": {
          "description": "UniqueKey val key is monad for calculation of mapping unique keys key onto values val",
          "hierarchy": "BayesStack UniqueKey",
          "module": "BayesStack.UniqueKey",
          "name": "UniqueKey",
          "package": "bayes-stack",
          "partial": "Unique Key",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-UniqueKey.html#t:UniqueKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BayesStack.UniqueKey",
          "name": "UniqueKeyT",
          "package": "bayes-stack",
          "source": "src/BayesStack-UniqueKey.html#UniqueKeyT",
          "type": "data"
        },
        "index": {
          "hierarchy": "BayesStack UniqueKey",
          "module": "BayesStack.UniqueKey",
          "name": "UniqueKeyT",
          "package": "bayes-stack",
          "partial": "Unique Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-UniqueKey.html#t:UniqueKeyT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet map of unique keys to values              \n\u003c/p\u003e",
          "module": "BayesStack.UniqueKey",
          "name": "getKeyMap",
          "package": "bayes-stack",
          "signature": "UniqueKeyT val key m (Map key val)",
          "source": "src/BayesStack-UniqueKey.html#getKeyMap",
          "type": "function"
        },
        "index": {
          "description": "Get map of unique keys to values",
          "hierarchy": "BayesStack UniqueKey",
          "module": "BayesStack.UniqueKey",
          "name": "getKeyMap",
          "package": "bayes-stack",
          "partial": "Key Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-UniqueKey.html#v:getKeyMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BayesStack.UniqueKey",
          "name": "getUniqueKey",
          "package": "bayes-stack",
          "signature": "val -\u003e UniqueKeyT val key m key",
          "source": "src/BayesStack-UniqueKey.html#getUniqueKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "BayesStack UniqueKey",
          "module": "BayesStack.UniqueKey",
          "name": "getUniqueKey",
          "normalized": "a-\u003eUniqueKeyT a b c b",
          "package": "bayes-stack",
          "partial": "Unique Key",
          "signature": "val-\u003eUniqueKeyT val key m key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-UniqueKey.html#v:getUniqueKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet map of values to unique keys\n\u003c/p\u003e",
          "module": "BayesStack.UniqueKey",
          "name": "getValueMap",
          "package": "bayes-stack",
          "signature": "UniqueKeyT val key m (Map val key)",
          "source": "src/BayesStack-UniqueKey.html#getValueMap",
          "type": "function"
        },
        "index": {
          "description": "Get map of values to unique keys",
          "hierarchy": "BayesStack UniqueKey",
          "module": "BayesStack.UniqueKey",
          "name": "getValueMap",
          "package": "bayes-stack",
          "partial": "Value Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-UniqueKey.html#v:getValueMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BayesStack.UniqueKey",
          "name": "mapTraversable",
          "package": "bayes-stack",
          "signature": "[key] -\u003e t val -\u003e (t key, Map key val)",
          "source": "src/BayesStack-UniqueKey.html#mapTraversable",
          "type": "function"
        },
        "index": {
          "hierarchy": "BayesStack UniqueKey",
          "module": "BayesStack.UniqueKey",
          "name": "mapTraversable",
          "normalized": "[a]-\u003eb c-\u003e(b a,Map a c)",
          "package": "bayes-stack",
          "partial": "Traversable",
          "signature": "[key]-\u003et val-\u003e(t key,Map key val)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-UniqueKey.html#v:mapTraversable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BayesStack.UniqueKey",
          "name": "runUniqueKey",
          "package": "bayes-stack",
          "signature": "[key] -\u003e UniqueKey val key a -\u003e a",
          "source": "src/BayesStack-UniqueKey.html#runUniqueKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "BayesStack UniqueKey",
          "module": "BayesStack.UniqueKey",
          "name": "runUniqueKey",
          "normalized": "[a]-\u003eUniqueKey b a c-\u003ec",
          "package": "bayes-stack",
          "partial": "Unique Key",
          "signature": "[key]-\u003eUniqueKey val key a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-UniqueKey.html#v:runUniqueKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eUniqueKey\u003c/a\u003e\u003c/code\u003e, returning the result and the associated key map\n\u003c/p\u003e",
          "module": "BayesStack.UniqueKey",
          "name": "runUniqueKey'",
          "package": "bayes-stack",
          "signature": "[key] -\u003e UniqueKey val key a -\u003e (a, Map key val)",
          "source": "src/BayesStack-UniqueKey.html#runUniqueKey%27",
          "type": "function"
        },
        "index": {
          "description": "Run UniqueKey returning the result and the associated key map",
          "hierarchy": "BayesStack UniqueKey",
          "module": "BayesStack.UniqueKey",
          "name": "runUniqueKey'",
          "normalized": "[a]-\u003eUniqueKey b a c-\u003e(c,Map a b)",
          "package": "bayes-stack",
          "partial": "Unique Key'",
          "signature": "[key]-\u003eUniqueKey val key a-\u003e(a,Map key val)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-UniqueKey.html#v:runUniqueKey-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BayesStack.UniqueKey",
          "name": "runUniqueKeyT",
          "package": "bayes-stack",
          "signature": "[key] -\u003e UniqueKeyT val key m a -\u003e m a",
          "source": "src/BayesStack-UniqueKey.html#runUniqueKeyT",
          "type": "function"
        },
        "index": {
          "hierarchy": "BayesStack UniqueKey",
          "module": "BayesStack.UniqueKey",
          "name": "runUniqueKeyT",
          "normalized": "[a]-\u003eUniqueKeyT b a c d-\u003ec d",
          "package": "bayes-stack",
          "partial": "Unique Key",
          "signature": "[key]-\u003eUniqueKeyT val key m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-UniqueKey.html#v:runUniqueKeyT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eUniqueKeyT\u003c/a\u003e\u003c/code\u003e, returning the result and the associated key map\n\u003c/p\u003e",
          "module": "BayesStack.UniqueKey",
          "name": "runUniqueKeyT'",
          "package": "bayes-stack",
          "signature": "[key] -\u003e UniqueKeyT val key m a -\u003e m (a, Map key val)",
          "source": "src/BayesStack-UniqueKey.html#runUniqueKeyT%27",
          "type": "function"
        },
        "index": {
          "description": "Run UniqueKeyT returning the result and the associated key map",
          "hierarchy": "BayesStack UniqueKey",
          "module": "BayesStack.UniqueKey",
          "name": "runUniqueKeyT'",
          "normalized": "[a]-\u003eUniqueKeyT b a c d-\u003ec(d,Map a b)",
          "package": "bayes-stack",
          "partial": "Unique Key T'",
          "signature": "[key]-\u003eUniqueKeyT val key m a-\u003em(a,Map key val)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/BayesStack-UniqueKey.html#v:runUniqueKeyT-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Sequence",
          "name": "Sequence",
          "package": "bayes-stack",
          "source": "src/Data-Random-Sequence.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Random Sequence",
          "module": "Data.Random.Sequence",
          "name": "Sequence",
          "package": "bayes-stack",
          "partial": "Sequence",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/Data-Random-Sequence.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Sequence",
          "name": "randomElementT",
          "package": "bayes-stack",
          "signature": "Seq a -\u003e RVarT m a",
          "source": "src/Data-Random-Sequence.html#randomElementT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Sequence",
          "module": "Data.Random.Sequence",
          "name": "randomElementT",
          "normalized": "Seq a-\u003eRVarT b a",
          "package": "bayes-stack",
          "partial": "Element",
          "signature": "Seq a-\u003eRVarT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/Data-Random-Sequence.html#v:randomElementT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequence.Chunk",
          "name": "Chunk",
          "package": "bayes-stack",
          "source": "src/Data-Sequence-Chunk.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Sequence Chunk",
          "module": "Data.Sequence.Chunk",
          "name": "Chunk",
          "package": "bayes-stack",
          "partial": "Chunk",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/Data-Sequence-Chunk.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'chunk n xs' splits \u003ccode\u003exs\u003c/code\u003e into \u003ccode\u003en\u003c/code\u003e chunks\n\u003c/p\u003e",
          "module": "Data.Sequence.Chunk",
          "name": "chunk",
          "package": "bayes-stack",
          "signature": "Int -\u003e Seq a -\u003e Seq (Seq a)",
          "source": "src/Data-Sequence-Chunk.html#chunk",
          "type": "function"
        },
        "index": {
          "description": "chunk xs splits xs into chunks",
          "hierarchy": "Data Sequence Chunk",
          "module": "Data.Sequence.Chunk",
          "name": "chunk",
          "normalized": "Int-\u003eSeq a-\u003eSeq(Seq a)",
          "package": "bayes-stack",
          "signature": "Int-\u003eSeq a-\u003eSeq(Seq a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/Data-Sequence-Chunk.html#v:chunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Serialize.EnumMap",
          "name": "EnumMap",
          "package": "bayes-stack",
          "source": "src/Data-Serialize-EnumMap.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Serialize EnumMap",
          "module": "Data.Serialize.EnumMap",
          "name": "EnumMap",
          "package": "bayes-stack",
          "partial": "Enum Map",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/Data-Serialize-EnumMap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Serialize.LogFloat",
          "name": "LogFloat",
          "package": "bayes-stack",
          "source": "src/Data-Serialize-LogFloat.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Serialize LogFloat",
          "module": "Data.Serialize.LogFloat",
          "name": "LogFloat",
          "package": "bayes-stack",
          "partial": "Log Float",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bayes-stack/docs/Data-Serialize-LogFloat.html#"
      }
    }
  ]
]