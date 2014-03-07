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
        "word": "random-fu"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Bernoulli",
          "name": "Bernoulli",
          "package": "random-fu",
          "source": "src/Data-Random-Distribution-Bernoulli.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Random Distribution Bernoulli",
          "module": "Data.Random.Distribution.Bernoulli",
          "name": "Bernoulli",
          "package": "random-fu",
          "partial": "Bernoulli",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Bernoulli.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Bernoulli",
          "name": "Bernoulli",
          "package": "random-fu",
          "source": "src/Data-Random-Distribution-Bernoulli.html#Bernoulli",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Random Distribution Bernoulli",
          "module": "Data.Random.Distribution.Bernoulli",
          "name": "Bernoulli",
          "package": "random-fu",
          "partial": "Bernoulli",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Bernoulli.html#t:Bernoulli"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Bernoulli",
          "name": "Bernoulli",
          "package": "random-fu",
          "signature": "Bernoulli b",
          "source": "src/Data-Random-Distribution-Bernoulli.html#Bernoulli",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution Bernoulli",
          "module": "Data.Random.Distribution.Bernoulli",
          "name": "Bernoulli",
          "package": "random-fu",
          "partial": "Bernoulli",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Bernoulli.html#v:Bernoulli"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a Bernoulli variate with the given probability.  For \u003ccode\u003eBool\u003c/code\u003e results,\n \u003ccode\u003ebernoulli p\u003c/code\u003e will return True (p*100)% of the time and False otherwise.\n For numerical types, True is replaced by 1 and False by 0.\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Bernoulli",
          "name": "bernoulli",
          "package": "random-fu",
          "signature": "b -\u003e RVar a",
          "source": "src/Data-Random-Distribution-Bernoulli.html#bernoulli",
          "type": "function"
        },
        "index": {
          "description": "Generate Bernoulli variate with the given probability For Bool results bernoulli will return True of the time and False otherwise For numerical types True is replaced by and False by",
          "hierarchy": "Data Random Distribution Bernoulli",
          "module": "Data.Random.Distribution.Bernoulli",
          "name": "bernoulli",
          "normalized": "a-\u003eRVar b",
          "package": "random-fu",
          "signature": "b-\u003eRVar a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Bernoulli.html#v:bernoulli"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a Bernoulli process with the given probability.  For \u003ccode\u003eBool\u003c/code\u003e results,\n \u003ccode\u003ebernoulli p\u003c/code\u003e will return True (p*100)% of the time and False otherwise.\n For numerical types, True is replaced by 1 and False by 0.\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Bernoulli",
          "name": "bernoulliT",
          "package": "random-fu",
          "signature": "b -\u003e RVarT m a",
          "source": "src/Data-Random-Distribution-Bernoulli.html#bernoulliT",
          "type": "function"
        },
        "index": {
          "description": "Generate Bernoulli process with the given probability For Bool results bernoulli will return True of the time and False otherwise For numerical types True is replaced by and False by",
          "hierarchy": "Data Random Distribution Bernoulli",
          "module": "Data.Random.Distribution.Bernoulli",
          "name": "bernoulliT",
          "normalized": "a-\u003eRVarT b c",
          "package": "random-fu",
          "signature": "b-\u003eRVarT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Bernoulli.html#v:bernoulliT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA random variable whose value is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e the given fraction of the time\n and \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e the rest.\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Bernoulli",
          "name": "boolBernoulli",
          "package": "random-fu",
          "signature": "a -\u003e RVarT m Bool",
          "source": "src/Data-Random-Distribution-Bernoulli.html#boolBernoulli",
          "type": "function"
        },
        "index": {
          "description": "random variable whose value is True the given fraction of the time and False the rest",
          "hierarchy": "Data Random Distribution Bernoulli",
          "module": "Data.Random.Distribution.Bernoulli",
          "name": "boolBernoulli",
          "normalized": "a-\u003eRVarT b Bool",
          "package": "random-fu",
          "partial": "Bernoulli",
          "signature": "a-\u003eRVarT m Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Bernoulli.html#v:boolBernoulli"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Bernoulli",
          "name": "boolBernoulliCDF",
          "package": "random-fu",
          "signature": "a -\u003e Bool -\u003e Double",
          "source": "src/Data-Random-Distribution-Bernoulli.html#boolBernoulliCDF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution Bernoulli",
          "module": "Data.Random.Distribution.Bernoulli",
          "name": "boolBernoulliCDF",
          "normalized": "a-\u003eBool-\u003eDouble",
          "package": "random-fu",
          "partial": "Bernoulli CDF",
          "signature": "a-\u003eBool-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Bernoulli.html#v:boolBernoulliCDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egeneralBernoulli t f p\u003c/code\u003e generates a random variable whose value is \u003ccode\u003et\u003c/code\u003e\n with probability \u003ccode\u003ep\u003c/code\u003e and \u003ccode\u003ef\u003c/code\u003e with probability \u003ccode\u003e1-p\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Bernoulli",
          "name": "generalBernoulli",
          "package": "random-fu",
          "signature": "a -\u003e a -\u003e b -\u003e RVarT m a",
          "source": "src/Data-Random-Distribution-Bernoulli.html#generalBernoulli",
          "type": "function"
        },
        "index": {
          "description": "generalBernoulli generates random variable whose value is with probability and with probability",
          "hierarchy": "Data Random Distribution Bernoulli",
          "module": "Data.Random.Distribution.Bernoulli",
          "name": "generalBernoulli",
          "normalized": "a-\u003ea-\u003eb-\u003eRVarT c a",
          "package": "random-fu",
          "partial": "Bernoulli",
          "signature": "a-\u003ea-\u003eb-\u003eRVarT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Bernoulli.html#v:generalBernoulli"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Bernoulli",
          "name": "generalBernoulliCDF",
          "package": "random-fu",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e a -\u003e a -\u003e b -\u003e a -\u003e Double",
          "source": "src/Data-Random-Distribution-Bernoulli.html#generalBernoulliCDF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution Bernoulli",
          "module": "Data.Random.Distribution.Bernoulli",
          "name": "generalBernoulliCDF",
          "normalized": "(a-\u003ea-\u003eBool)-\u003ea-\u003ea-\u003eb-\u003ea-\u003eDouble",
          "package": "random-fu",
          "partial": "Bernoulli CDF",
          "signature": "(a-\u003ea-\u003eBool)-\u003ea-\u003ea-\u003eb-\u003ea-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Bernoulli.html#v:generalBernoulliCDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Beta",
          "name": "Beta",
          "package": "random-fu",
          "source": "src/Data-Random-Distribution-Beta.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Random Distribution Beta",
          "module": "Data.Random.Distribution.Beta",
          "name": "Beta",
          "package": "random-fu",
          "partial": "Beta",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Beta.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Beta",
          "name": "Beta",
          "package": "random-fu",
          "source": "src/Data-Random-Distribution-Beta.html#Beta",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Random Distribution Beta",
          "module": "Data.Random.Distribution.Beta",
          "name": "Beta",
          "package": "random-fu",
          "partial": "Beta",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Beta.html#t:Beta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Beta",
          "name": "Beta",
          "package": "random-fu",
          "signature": "Beta a a",
          "source": "src/Data-Random-Distribution-Beta.html#Beta",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution Beta",
          "module": "Data.Random.Distribution.Beta",
          "name": "Beta",
          "package": "random-fu",
          "partial": "Beta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Beta.html#v:Beta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Beta",
          "name": "beta",
          "package": "random-fu",
          "signature": "a -\u003e a -\u003e RVar a",
          "source": "src/Data-Random-Distribution-Beta.html#beta",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution Beta",
          "module": "Data.Random.Distribution.Beta",
          "name": "beta",
          "normalized": "a-\u003ea-\u003eRVar a",
          "package": "random-fu",
          "signature": "a-\u003ea-\u003eRVar a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Beta.html#v:beta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Beta",
          "name": "betaT",
          "package": "random-fu",
          "signature": "a -\u003e a -\u003e RVarT m a",
          "source": "src/Data-Random-Distribution-Beta.html#betaT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution Beta",
          "module": "Data.Random.Distribution.Beta",
          "name": "betaT",
          "normalized": "a-\u003ea-\u003eRVarT b a",
          "package": "random-fu",
          "signature": "a-\u003ea-\u003eRVarT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Beta.html#v:betaT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Beta",
          "name": "fractionalBeta",
          "package": "random-fu",
          "signature": "a -\u003e a -\u003e RVarT m a",
          "source": "src/Data-Random-Distribution-Beta.html#fractionalBeta",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution Beta",
          "module": "Data.Random.Distribution.Beta",
          "name": "fractionalBeta",
          "normalized": "a-\u003ea-\u003eRVarT b a",
          "package": "random-fu",
          "partial": "Beta",
          "signature": "a-\u003ea-\u003eRVarT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Beta.html#v:fractionalBeta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Binomial",
          "name": "Binomial",
          "package": "random-fu",
          "source": "src/Data-Random-Distribution-Binomial.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Random Distribution Binomial",
          "module": "Data.Random.Distribution.Binomial",
          "name": "Binomial",
          "package": "random-fu",
          "partial": "Binomial",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Binomial.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Binomial",
          "name": "Binomial",
          "package": "random-fu",
          "source": "src/Data-Random-Distribution-Binomial.html#Binomial",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Random Distribution Binomial",
          "module": "Data.Random.Distribution.Binomial",
          "name": "Binomial",
          "package": "random-fu",
          "partial": "Binomial",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Binomial.html#t:Binomial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Binomial",
          "name": "Binomial",
          "package": "random-fu",
          "signature": "Binomial a b",
          "source": "src/Data-Random-Distribution-Binomial.html#Binomial",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution Binomial",
          "module": "Data.Random.Distribution.Binomial",
          "name": "Binomial",
          "package": "random-fu",
          "partial": "Binomial",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Binomial.html#v:Binomial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Binomial",
          "name": "binomial",
          "package": "random-fu",
          "signature": "a -\u003e b -\u003e RVar a",
          "source": "src/Data-Random-Distribution-Binomial.html#binomial",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution Binomial",
          "module": "Data.Random.Distribution.Binomial",
          "name": "binomial",
          "normalized": "a-\u003eb-\u003eRVar a",
          "package": "random-fu",
          "signature": "a-\u003eb-\u003eRVar a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Binomial.html#v:binomial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Binomial",
          "name": "binomialT",
          "package": "random-fu",
          "signature": "a -\u003e b -\u003e RVarT m a",
          "source": "src/Data-Random-Distribution-Binomial.html#binomialT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution Binomial",
          "module": "Data.Random.Distribution.Binomial",
          "name": "binomialT",
          "normalized": "a-\u003eb-\u003eRVarT c a",
          "package": "random-fu",
          "signature": "a-\u003eb-\u003eRVarT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Binomial.html#v:binomialT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Binomial",
          "name": "floatingBinomial",
          "package": "random-fu",
          "signature": "a -\u003e b -\u003e RVar a",
          "source": "src/Data-Random-Distribution-Binomial.html#floatingBinomial",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution Binomial",
          "module": "Data.Random.Distribution.Binomial",
          "name": "floatingBinomial",
          "normalized": "a-\u003eb-\u003eRVar a",
          "package": "random-fu",
          "partial": "Binomial",
          "signature": "a-\u003eb-\u003eRVar a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Binomial.html#v:floatingBinomial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Binomial",
          "name": "floatingBinomialCDF",
          "package": "random-fu",
          "signature": "a -\u003e b -\u003e a -\u003e Double",
          "source": "src/Data-Random-Distribution-Binomial.html#floatingBinomialCDF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution Binomial",
          "module": "Data.Random.Distribution.Binomial",
          "name": "floatingBinomialCDF",
          "normalized": "a-\u003eb-\u003ea-\u003eDouble",
          "package": "random-fu",
          "partial": "Binomial CDF",
          "signature": "a-\u003eb-\u003ea-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Binomial.html#v:floatingBinomialCDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Binomial",
          "name": "integralBinomial",
          "package": "random-fu",
          "signature": "a -\u003e b -\u003e RVarT m a",
          "source": "src/Data-Random-Distribution-Binomial.html#integralBinomial",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution Binomial",
          "module": "Data.Random.Distribution.Binomial",
          "name": "integralBinomial",
          "normalized": "a-\u003eb-\u003eRVarT c a",
          "package": "random-fu",
          "partial": "Binomial",
          "signature": "a-\u003eb-\u003eRVarT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Binomial.html#v:integralBinomial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Binomial",
          "name": "integralBinomialCDF",
          "package": "random-fu",
          "signature": "a -\u003e b -\u003e a -\u003e Double",
          "source": "src/Data-Random-Distribution-Binomial.html#integralBinomialCDF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution Binomial",
          "module": "Data.Random.Distribution.Binomial",
          "name": "integralBinomialCDF",
          "normalized": "a-\u003eb-\u003ea-\u003eDouble",
          "package": "random-fu",
          "partial": "Binomial CDF",
          "signature": "a-\u003eb-\u003ea-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Binomial.html#v:integralBinomialCDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Categorical",
          "name": "Categorical",
          "package": "random-fu",
          "source": "src/Data-Random-Distribution-Categorical.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Random Distribution Categorical",
          "module": "Data.Random.Distribution.Categorical",
          "name": "Categorical",
          "package": "random-fu",
          "partial": "Categorical",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Categorical.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCategorical distribution; a list of events with corresponding probabilities.\n The sum of the probabilities must be 1, and no event should have a zero \n or negative probability (at least, at time of sampling; very clever users\n can do what they want with the numbers before sampling, just make sure \n that if you're one of those clever ones, you at least eliminate negative \n weights before sampling).\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Categorical",
          "name": "Categorical",
          "package": "random-fu",
          "source": "src/Data-Random-Distribution-Categorical.html#Categorical",
          "type": "data"
        },
        "index": {
          "description": "Categorical distribution list of events with corresponding probabilities The sum of the probabilities must be and no event should have zero or negative probability at least at time of sampling very clever users can do what they want with the numbers before sampling just make sure that if you re one of those clever ones you at least eliminate negative weights before sampling",
          "hierarchy": "Data Random Distribution Categorical",
          "module": "Data.Random.Distribution.Categorical",
          "name": "Categorical",
          "package": "random-fu",
          "partial": "Categorical",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Categorical.html#t:Categorical"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eCategorical\u003c/a\u003e\u003c/code\u003e random variable from a list of probabilities\n and categories, where the probabilities all sum to 1.\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Categorical",
          "name": "categorical",
          "package": "random-fu",
          "signature": "[(p, a)] -\u003e RVar a",
          "source": "src/Data-Random-Distribution-Categorical.html#categorical",
          "type": "function"
        },
        "index": {
          "description": "Construct Categorical random variable from list of probabilities and categories where the probabilities all sum to",
          "hierarchy": "Data Random Distribution Categorical",
          "module": "Data.Random.Distribution.Categorical",
          "name": "categorical",
          "normalized": "[(a,b)]-\u003eRVar b",
          "package": "random-fu",
          "signature": "[(p,a)]-\u003eRVar a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Categorical.html#v:categorical"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eCategorical\u003c/a\u003e\u003c/code\u003e random process from a list of probabilities \n and categories, where the probabilities all sum to 1.\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Categorical",
          "name": "categoricalT",
          "package": "random-fu",
          "signature": "[(p, a)] -\u003e RVarT m a",
          "source": "src/Data-Random-Distribution-Categorical.html#categoricalT",
          "type": "function"
        },
        "index": {
          "description": "Construct Categorical random process from list of probabilities and categories where the probabilities all sum to",
          "hierarchy": "Data Random Distribution Categorical",
          "module": "Data.Random.Distribution.Categorical",
          "name": "categoricalT",
          "normalized": "[(a,b)]-\u003eRVarT c b",
          "package": "random-fu",
          "signature": "[(p,a)]-\u003eRVarT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Categorical.html#v:categoricalT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimplify a categorical distribution by combining equivalent events (the new\n event will have a probability equal to the sum of all the originals).\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Categorical",
          "name": "collectEvents",
          "package": "random-fu",
          "signature": "Categorical p e -\u003e Categorical p e",
          "source": "src/Data-Random-Distribution-Categorical.html#collectEvents",
          "type": "function"
        },
        "index": {
          "description": "Simplify categorical distribution by combining equivalent events the new event will have probability equal to the sum of all the originals",
          "hierarchy": "Data Random Distribution Categorical",
          "module": "Data.Random.Distribution.Categorical",
          "name": "collectEvents",
          "normalized": "Categorical a b-\u003eCategorical a b",
          "package": "random-fu",
          "partial": "Events",
          "signature": "Categorical p e-\u003eCategorical p e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Categorical.html#v:collectEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimplify a categorical distribution by combining equivalent events (the new\n event will have a weight equal to the sum of all the originals).\n The comparator function is used to identify events to combine.  Once chosen,\n the events and their weights are combined by the provided probability and\n event aggregation function.\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Categorical",
          "name": "collectEventsBy",
          "package": "random-fu",
          "signature": "(e -\u003e e -\u003e Ordering) -\u003e ([(p, e)] -\u003e (p, e)) -\u003e Categorical p e -\u003e Categorical p e",
          "source": "src/Data-Random-Distribution-Categorical.html#collectEventsBy",
          "type": "function"
        },
        "index": {
          "description": "Simplify categorical distribution by combining equivalent events the new event will have weight equal to the sum of all the originals The comparator function is used to identify events to combine Once chosen the events and their weights are combined by the provided probability and event aggregation function",
          "hierarchy": "Data Random Distribution Categorical",
          "module": "Data.Random.Distribution.Categorical",
          "name": "collectEventsBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003e([(b,a)]-\u003e(b,a))-\u003eCategorical b a-\u003eCategorical b a",
          "package": "random-fu",
          "partial": "Events By",
          "signature": "(e-\u003ee-\u003eOrdering)-\u003e([(p,e)]-\u003e(p,e))-\u003eCategorical p e-\u003eCategorical p e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Categorical.html#v:collectEventsBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eCategorical\u003c/a\u003e\u003c/code\u003e distribution from a list of weighted categories.\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Categorical",
          "name": "fromList",
          "package": "random-fu",
          "signature": "[(p, a)] -\u003e Categorical p a",
          "source": "src/Data-Random-Distribution-Categorical.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Construct Categorical distribution from list of weighted categories",
          "hierarchy": "Data Random Distribution Categorical",
          "module": "Data.Random.Distribution.Categorical",
          "name": "fromList",
          "normalized": "[(a,b)]-\u003eCategorical a b",
          "package": "random-fu",
          "partial": "List",
          "signature": "[(p,a)]-\u003eCategorical p a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Categorical.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eCategorical\u003c/a\u003e\u003c/code\u003e distribution from a list of observed outcomes.\n Equivalent events will be grouped and counted, and the probabilities of each\n event in the returned distribution will be proportional to the number of \n occurrences of that event.\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Categorical",
          "name": "fromObservations",
          "package": "random-fu",
          "signature": "[a] -\u003e Categorical p a",
          "source": "src/Data-Random-Distribution-Categorical.html#fromObservations",
          "type": "function"
        },
        "index": {
          "description": "Construct Categorical distribution from list of observed outcomes Equivalent events will be grouped and counted and the probabilities of each event in the returned distribution will be proportional to the number of occurrences of that event",
          "hierarchy": "Data Random Distribution Categorical",
          "module": "Data.Random.Distribution.Categorical",
          "name": "fromObservations",
          "normalized": "[a]-\u003eCategorical b a",
          "package": "random-fu",
          "partial": "Observations",
          "signature": "[a]-\u003eCategorical p a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Categorical.html#v:fromObservations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eCategorical\u003c/a\u003e\u003c/code\u003e distribution from a list of weighted categories, \n where the weights do not necessarily sum to 1.\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Categorical",
          "name": "fromWeightedList",
          "package": "random-fu",
          "signature": "[(p, a)] -\u003e Categorical p a",
          "source": "src/Data-Random-Distribution-Categorical.html#fromWeightedList",
          "type": "function"
        },
        "index": {
          "description": "Construct Categorical distribution from list of weighted categories where the weights do not necessarily sum to",
          "hierarchy": "Data Random Distribution Categorical",
          "module": "Data.Random.Distribution.Categorical",
          "name": "fromWeightedList",
          "normalized": "[(a,b)]-\u003eCategorical a b",
          "package": "random-fu",
          "partial": "Weighted List",
          "signature": "[(p,a)]-\u003eCategorical p a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Categorical.html#v:fromWeightedList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e, but for the probabilities of a categorical distribution.\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Categorical",
          "name": "mapCategoricalPs",
          "package": "random-fu",
          "signature": "(p -\u003e q) -\u003e Categorical p e -\u003e Categorical q e",
          "source": "src/Data-Random-Distribution-Categorical.html#mapCategoricalPs",
          "type": "function"
        },
        "index": {
          "description": "Like fmap but for the probabilities of categorical distribution",
          "hierarchy": "Data Random Distribution Categorical",
          "module": "Data.Random.Distribution.Categorical",
          "name": "mapCategoricalPs",
          "normalized": "(a-\u003eb)-\u003eCategorical a c-\u003eCategorical b c",
          "package": "random-fu",
          "partial": "Categorical Ps",
          "signature": "(p-\u003eq)-\u003eCategorical p e-\u003eCategorical q e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Categorical.html#v:mapCategoricalPs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdjust all the weights of a categorical distribution so that they \n sum to unity and remove all events whose probability is zero.\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Categorical",
          "name": "normalizeCategoricalPs",
          "package": "random-fu",
          "signature": "Categorical p e -\u003e Categorical p e",
          "source": "src/Data-Random-Distribution-Categorical.html#normalizeCategoricalPs",
          "type": "function"
        },
        "index": {
          "description": "Adjust all the weights of categorical distribution so that they sum to unity and remove all events whose probability is zero",
          "hierarchy": "Data Random Distribution Categorical",
          "module": "Data.Random.Distribution.Categorical",
          "name": "normalizeCategoricalPs",
          "normalized": "Categorical a b-\u003eCategorical a b",
          "package": "random-fu",
          "partial": "Categorical Ps",
          "signature": "Categorical p e-\u003eCategorical p e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Categorical.html#v:normalizeCategoricalPs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Categorical",
          "name": "numEvents",
          "package": "random-fu",
          "signature": "Categorical p a -\u003e Int",
          "source": "src/Data-Random-Distribution-Categorical.html#numEvents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution Categorical",
          "module": "Data.Random.Distribution.Categorical",
          "name": "numEvents",
          "normalized": "Categorical a b-\u003eInt",
          "package": "random-fu",
          "partial": "Events",
          "signature": "Categorical p a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Categorical.html#v:numEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Categorical",
          "name": "toList",
          "package": "random-fu",
          "signature": "Categorical p a -\u003e [(p, a)]",
          "source": "src/Data-Random-Distribution-Categorical.html#toList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution Categorical",
          "module": "Data.Random.Distribution.Categorical",
          "name": "toList",
          "normalized": "Categorical a b-\u003e[(a,b)]",
          "package": "random-fu",
          "partial": "List",
          "signature": "Categorical p a-\u003e[(p,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Categorical.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Categorical",
          "name": "totalWeight",
          "package": "random-fu",
          "signature": "Categorical p a -\u003e p",
          "source": "src/Data-Random-Distribution-Categorical.html#totalWeight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution Categorical",
          "module": "Data.Random.Distribution.Categorical",
          "name": "totalWeight",
          "normalized": "Categorical a b-\u003ea",
          "package": "random-fu",
          "partial": "Weight",
          "signature": "Categorical p a-\u003ep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Categorical.html#v:totalWeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eCategorical\u003c/a\u003e\u003c/code\u003e random variable from a list of probabilities\n and categories, where the probabilities all sum to 1.\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Categorical",
          "name": "weightedCategorical",
          "package": "random-fu",
          "signature": "[(p, a)] -\u003e RVar a",
          "source": "src/Data-Random-Distribution-Categorical.html#weightedCategorical",
          "type": "function"
        },
        "index": {
          "description": "Construct Categorical random variable from list of probabilities and categories where the probabilities all sum to",
          "hierarchy": "Data Random Distribution Categorical",
          "module": "Data.Random.Distribution.Categorical",
          "name": "weightedCategorical",
          "normalized": "[(a,b)]-\u003eRVar b",
          "package": "random-fu",
          "partial": "Categorical",
          "signature": "[(p,a)]-\u003eRVar a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Categorical.html#v:weightedCategorical"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eCategorical\u003c/a\u003e\u003c/code\u003e random process from a list of probabilities \n and categories, where the probabilities all sum to 1.\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Categorical",
          "name": "weightedCategoricalT",
          "package": "random-fu",
          "signature": "[(p, a)] -\u003e RVarT m a",
          "source": "src/Data-Random-Distribution-Categorical.html#weightedCategoricalT",
          "type": "function"
        },
        "index": {
          "description": "Construct Categorical random process from list of probabilities and categories where the probabilities all sum to",
          "hierarchy": "Data Random Distribution Categorical",
          "module": "Data.Random.Distribution.Categorical",
          "name": "weightedCategoricalT",
          "normalized": "[(a,b)]-\u003eRVarT c b",
          "package": "random-fu",
          "partial": "Categorical",
          "signature": "[(p,a)]-\u003eRVarT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Categorical.html#v:weightedCategoricalT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.ChiSquare",
          "name": "ChiSquare",
          "package": "random-fu",
          "source": "src/Data-Random-Distribution-ChiSquare.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Random Distribution ChiSquare",
          "module": "Data.Random.Distribution.ChiSquare",
          "name": "ChiSquare",
          "package": "random-fu",
          "partial": "Chi Square",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-ChiSquare.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.ChiSquare",
          "name": "ChiSquare",
          "package": "random-fu",
          "source": "src/Data-Random-Distribution-ChiSquare.html#ChiSquare",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Random Distribution ChiSquare",
          "module": "Data.Random.Distribution.ChiSquare",
          "name": "ChiSquare",
          "package": "random-fu",
          "partial": "Chi Square",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-ChiSquare.html#t:ChiSquare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.ChiSquare",
          "name": "ChiSquare",
          "package": "random-fu",
          "signature": "ChiSquare Integer",
          "source": "src/Data-Random-Distribution-ChiSquare.html#ChiSquare",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution ChiSquare",
          "module": "Data.Random.Distribution.ChiSquare",
          "name": "ChiSquare",
          "package": "random-fu",
          "partial": "Chi Square",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-ChiSquare.html#v:ChiSquare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.ChiSquare",
          "name": "chiSquare",
          "package": "random-fu",
          "signature": "Integer -\u003e RVar t",
          "source": "src/Data-Random-Distribution-ChiSquare.html#chiSquare",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution ChiSquare",
          "module": "Data.Random.Distribution.ChiSquare",
          "name": "chiSquare",
          "normalized": "Integer-\u003eRVar a",
          "package": "random-fu",
          "partial": "Square",
          "signature": "Integer-\u003eRVar t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-ChiSquare.html#v:chiSquare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.ChiSquare",
          "name": "chiSquareT",
          "package": "random-fu",
          "signature": "Integer -\u003e RVarT m t",
          "source": "src/Data-Random-Distribution-ChiSquare.html#chiSquareT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution ChiSquare",
          "module": "Data.Random.Distribution.ChiSquare",
          "name": "chiSquareT",
          "normalized": "Integer-\u003eRVarT a b",
          "package": "random-fu",
          "partial": "Square",
          "signature": "Integer-\u003eRVarT m t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-ChiSquare.html#v:chiSquareT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Dirichlet",
          "name": "Dirichlet",
          "package": "random-fu",
          "source": "src/Data-Random-Distribution-Dirichlet.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Random Distribution Dirichlet",
          "module": "Data.Random.Distribution.Dirichlet",
          "name": "Dirichlet",
          "package": "random-fu",
          "partial": "Dirichlet",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Dirichlet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Dirichlet",
          "name": "Dirichlet",
          "package": "random-fu",
          "source": "src/Data-Random-Distribution-Dirichlet.html#Dirichlet",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Random Distribution Dirichlet",
          "module": "Data.Random.Distribution.Dirichlet",
          "name": "Dirichlet",
          "package": "random-fu",
          "partial": "Dirichlet",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Dirichlet.html#t:Dirichlet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Dirichlet",
          "name": "Dirichlet",
          "package": "random-fu",
          "signature": "Dirichlet a",
          "source": "src/Data-Random-Distribution-Dirichlet.html#Dirichlet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution Dirichlet",
          "module": "Data.Random.Distribution.Dirichlet",
          "name": "Dirichlet",
          "package": "random-fu",
          "partial": "Dirichlet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Dirichlet.html#v:Dirichlet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Dirichlet",
          "name": "dirichlet",
          "package": "random-fu",
          "signature": "[a] -\u003e RVar [a]",
          "source": "src/Data-Random-Distribution-Dirichlet.html#dirichlet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution Dirichlet",
          "module": "Data.Random.Distribution.Dirichlet",
          "name": "dirichlet",
          "normalized": "[a]-\u003eRVar[a]",
          "package": "random-fu",
          "signature": "[a]-\u003eRVar[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Dirichlet.html#v:dirichlet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Dirichlet",
          "name": "dirichletT",
          "package": "random-fu",
          "signature": "[a] -\u003e RVarT m [a]",
          "source": "src/Data-Random-Distribution-Dirichlet.html#dirichletT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution Dirichlet",
          "module": "Data.Random.Distribution.Dirichlet",
          "name": "dirichletT",
          "normalized": "[a]-\u003eRVarT b[a]",
          "package": "random-fu",
          "signature": "[a]-\u003eRVarT m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Dirichlet.html#v:dirichletT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Dirichlet",
          "name": "fractionalDirichlet",
          "package": "random-fu",
          "signature": "[a] -\u003e RVarT m [a]",
          "source": "src/Data-Random-Distribution-Dirichlet.html#fractionalDirichlet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution Dirichlet",
          "module": "Data.Random.Distribution.Dirichlet",
          "name": "fractionalDirichlet",
          "normalized": "[a]-\u003eRVarT b[a]",
          "package": "random-fu",
          "partial": "Dirichlet",
          "signature": "[a]-\u003eRVarT m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Dirichlet.html#v:fractionalDirichlet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Exponential",
          "name": "Exponential",
          "package": "random-fu",
          "source": "src/Data-Random-Distribution-Exponential.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Random Distribution Exponential",
          "module": "Data.Random.Distribution.Exponential",
          "name": "Exponential",
          "package": "random-fu",
          "partial": "Exponential",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Exponential.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Exponential",
          "name": "Exponential",
          "package": "random-fu",
          "source": "src/Data-Random-Distribution-Exponential.html#Exponential",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Random Distribution Exponential",
          "module": "Data.Random.Distribution.Exponential",
          "name": "Exponential",
          "package": "random-fu",
          "partial": "Exponential",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Exponential.html#t:Exponential"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Exponential",
          "name": "Exp",
          "package": "random-fu",
          "signature": "Exp a",
          "source": "src/Data-Random-Distribution-Exponential.html#Exponential",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution Exponential",
          "module": "Data.Random.Distribution.Exponential",
          "name": "Exp",
          "package": "random-fu",
          "partial": "Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Exponential.html#v:Exp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Exponential",
          "name": "exponential",
          "package": "random-fu",
          "signature": "a -\u003e RVar a",
          "source": "src/Data-Random-Distribution-Exponential.html#exponential",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution Exponential",
          "module": "Data.Random.Distribution.Exponential",
          "name": "exponential",
          "normalized": "a-\u003eRVar a",
          "package": "random-fu",
          "signature": "a-\u003eRVar a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Exponential.html#v:exponential"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Exponential",
          "name": "exponentialT",
          "package": "random-fu",
          "signature": "a -\u003e RVarT m a",
          "source": "src/Data-Random-Distribution-Exponential.html#exponentialT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution Exponential",
          "module": "Data.Random.Distribution.Exponential",
          "name": "exponentialT",
          "normalized": "a-\u003eRVarT b a",
          "package": "random-fu",
          "signature": "a-\u003eRVarT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Exponential.html#v:exponentialT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Exponential",
          "name": "floatingExponential",
          "package": "random-fu",
          "signature": "a -\u003e RVarT m a",
          "source": "src/Data-Random-Distribution-Exponential.html#floatingExponential",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution Exponential",
          "module": "Data.Random.Distribution.Exponential",
          "name": "floatingExponential",
          "normalized": "a-\u003eRVarT b a",
          "package": "random-fu",
          "partial": "Exponential",
          "signature": "a-\u003eRVarT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Exponential.html#v:floatingExponential"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Exponential",
          "name": "floatingExponentialCDF",
          "package": "random-fu",
          "signature": "a -\u003e a -\u003e Double",
          "source": "src/Data-Random-Distribution-Exponential.html#floatingExponentialCDF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution Exponential",
          "module": "Data.Random.Distribution.Exponential",
          "name": "floatingExponentialCDF",
          "normalized": "a-\u003ea-\u003eDouble",
          "package": "random-fu",
          "partial": "Exponential CDF",
          "signature": "a-\u003ea-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Exponential.html#v:floatingExponentialCDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Gamma",
          "name": "Gamma",
          "package": "random-fu",
          "source": "src/Data-Random-Distribution-Gamma.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Random Distribution Gamma",
          "module": "Data.Random.Distribution.Gamma",
          "name": "Gamma",
          "package": "random-fu",
          "partial": "Gamma",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Gamma.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Gamma",
          "name": "Erlang",
          "package": "random-fu",
          "source": "src/Data-Random-Distribution-Gamma.html#Erlang",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Random Distribution Gamma",
          "module": "Data.Random.Distribution.Gamma",
          "name": "Erlang",
          "package": "random-fu",
          "partial": "Erlang",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Gamma.html#t:Erlang"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Gamma",
          "name": "Gamma",
          "package": "random-fu",
          "source": "src/Data-Random-Distribution-Gamma.html#Gamma",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Random Distribution Gamma",
          "module": "Data.Random.Distribution.Gamma",
          "name": "Gamma",
          "package": "random-fu",
          "partial": "Gamma",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Gamma.html#t:Gamma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Gamma",
          "name": "Erlang",
          "package": "random-fu",
          "signature": "Erlang a",
          "source": "src/Data-Random-Distribution-Gamma.html#Erlang",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution Gamma",
          "module": "Data.Random.Distribution.Gamma",
          "name": "Erlang",
          "package": "random-fu",
          "partial": "Erlang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Gamma.html#v:Erlang"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Random.Distribution.Gamma\",\"Data.Random\"]",
          "name": "Gamma",
          "package": "random-fu",
          "signature": "Gamma a a",
          "source": "src/Data-Random-Distribution-Gamma.html#Gamma",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Gamma.html#v:Gamma\",\"http://hackage.haskell.org/package/random-fu/docs/Data-Random.html#v:Gamma\"]"
        },
        "index": {
          "hierarchy": "Data Random Distribution Gamma",
          "module": "Data.Random.Distribution.Gamma",
          "name": "Gamma",
          "package": "random-fu",
          "partial": "Gamma",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Gamma.html#v:Gamma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Gamma",
          "name": "erlang",
          "package": "random-fu",
          "signature": "a -\u003e RVar b",
          "source": "src/Data-Random-Distribution-Gamma.html#erlang",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution Gamma",
          "module": "Data.Random.Distribution.Gamma",
          "name": "erlang",
          "normalized": "a-\u003eRVar b",
          "package": "random-fu",
          "signature": "a-\u003eRVar b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Gamma.html#v:erlang"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Gamma",
          "name": "erlangT",
          "package": "random-fu",
          "signature": "a -\u003e RVarT m b",
          "source": "src/Data-Random-Distribution-Gamma.html#erlangT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution Gamma",
          "module": "Data.Random.Distribution.Gamma",
          "name": "erlangT",
          "normalized": "a-\u003eRVarT b c",
          "package": "random-fu",
          "signature": "a-\u003eRVarT m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Gamma.html#v:erlangT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Random.Distribution.Gamma\",\"Data.Random\"]",
          "name": "gamma",
          "package": "random-fu",
          "signature": "a -\u003e a -\u003e RVar a",
          "source": "src/Data-Random-Distribution-Gamma.html#gamma",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Gamma.html#v:gamma\",\"http://hackage.haskell.org/package/random-fu/docs/Data-Random.html#v:gamma\"]"
        },
        "index": {
          "hierarchy": "Data Random Distribution Gamma",
          "module": "Data.Random.Distribution.Gamma",
          "name": "gamma",
          "normalized": "a-\u003ea-\u003eRVar a",
          "package": "random-fu",
          "signature": "a-\u003ea-\u003eRVar a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Gamma.html#v:gamma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Random.Distribution.Gamma\",\"Data.Random\"]",
          "name": "gammaT",
          "package": "random-fu",
          "signature": "a -\u003e a -\u003e RVarT m a",
          "source": "src/Data-Random-Distribution-Gamma.html#gammaT",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Gamma.html#v:gammaT\",\"http://hackage.haskell.org/package/random-fu/docs/Data-Random.html#v:gammaT\"]"
        },
        "index": {
          "hierarchy": "Data Random Distribution Gamma",
          "module": "Data.Random.Distribution.Gamma",
          "name": "gammaT",
          "normalized": "a-\u003ea-\u003eRVarT b a",
          "package": "random-fu",
          "signature": "a-\u003ea-\u003eRVarT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Gamma.html#v:gammaT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ederived from  Marsaglia & Tang, \u003ca\u003eA Simple Method for generating gamma\n variables\u003c/a\u003e, ACM Transactions on Mathematical Software, Vol 26, No 3 (2000), p363-372.\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Gamma",
          "name": "mtGamma",
          "package": "random-fu",
          "signature": "a -\u003e a -\u003e RVarT m a",
          "source": "src/Data-Random-Distribution-Gamma.html#mtGamma",
          "type": "function"
        },
        "index": {
          "description": "derived from Marsaglia Tang Simple Method for generating gamma variables ACM Transactions on Mathematical Software Vol No p363-372",
          "hierarchy": "Data Random Distribution Gamma",
          "module": "Data.Random.Distribution.Gamma",
          "name": "mtGamma",
          "normalized": "a-\u003ea-\u003eRVarT b a",
          "package": "random-fu",
          "partial": "Gamma",
          "signature": "a-\u003ea-\u003eRVarT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Gamma.html#v:mtGamma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Multinomial",
          "name": "Multinomial",
          "package": "random-fu",
          "source": "src/Data-Random-Distribution-Multinomial.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Random Distribution Multinomial",
          "module": "Data.Random.Distribution.Multinomial",
          "name": "Multinomial",
          "package": "random-fu",
          "partial": "Multinomial",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Multinomial.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Multinomial",
          "name": "Multinomial",
          "package": "random-fu",
          "source": "src/Data-Random-Distribution-Multinomial.html#Multinomial",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Random Distribution Multinomial",
          "module": "Data.Random.Distribution.Multinomial",
          "name": "Multinomial",
          "package": "random-fu",
          "partial": "Multinomial",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Multinomial.html#t:Multinomial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Multinomial",
          "name": "Multinomial",
          "package": "random-fu",
          "signature": "[p] -\u003e a -\u003e Multinomial p [a]",
          "source": "src/Data-Random-Distribution-Multinomial.html#Multinomial",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution Multinomial",
          "module": "Data.Random.Distribution.Multinomial",
          "name": "Multinomial",
          "normalized": "[a]-\u003eb-\u003eMultinomial a[b]",
          "package": "random-fu",
          "partial": "Multinomial",
          "signature": "[p]-\u003ea-\u003eMultinomial p[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Multinomial.html#v:Multinomial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Multinomial",
          "name": "multinomial",
          "package": "random-fu",
          "signature": "[p] -\u003e a -\u003e RVar [a]",
          "source": "src/Data-Random-Distribution-Multinomial.html#multinomial",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution Multinomial",
          "module": "Data.Random.Distribution.Multinomial",
          "name": "multinomial",
          "normalized": "[a]-\u003eb-\u003eRVar[b]",
          "package": "random-fu",
          "signature": "[p]-\u003ea-\u003eRVar[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Multinomial.html#v:multinomial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Multinomial",
          "name": "multinomialT",
          "package": "random-fu",
          "signature": "[p] -\u003e a -\u003e RVarT m [a]",
          "source": "src/Data-Random-Distribution-Multinomial.html#multinomialT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution Multinomial",
          "module": "Data.Random.Distribution.Multinomial",
          "name": "multinomialT",
          "normalized": "[a]-\u003eb-\u003eRVarT c[b]",
          "package": "random-fu",
          "signature": "[p]-\u003ea-\u003eRVarT m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Multinomial.html#v:multinomialT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Normal",
          "name": "Normal",
          "package": "random-fu",
          "source": "src/Data-Random-Distribution-Normal.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Random Distribution Normal",
          "module": "Data.Random.Distribution.Normal",
          "name": "Normal",
          "package": "random-fu",
          "partial": "Normal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Normal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specification of a normal distribution over the type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Normal",
          "name": "Normal",
          "package": "random-fu",
          "source": "src/Data-Random-Distribution-Normal.html#Normal",
          "type": "data"
        },
        "index": {
          "description": "specification of normal distribution over the type",
          "hierarchy": "Data Random Distribution Normal",
          "module": "Data.Random.Distribution.Normal",
          "name": "Normal",
          "package": "random-fu",
          "partial": "Normal",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Normal.html#t:Normal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eNormal m s\u003c/code\u003e is a normal distribution with mean \u003ccode\u003em\u003c/code\u003e and stddev \u003ccode\u003esd\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Random.Distribution.Normal\",\"Data.Random\"]",
          "name": "Normal",
          "package": "random-fu",
          "signature": "Normal a a",
          "source": "src/Data-Random-Distribution-Normal.html#Normal",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Normal.html#v:Normal\",\"http://hackage.haskell.org/package/random-fu/docs/Data-Random.html#v:Normal\"]"
        },
        "index": {
          "description": "Normal is normal distribution with mean and stddev sd",
          "hierarchy": "Data Random Distribution Normal",
          "module": "Data.Random.Distribution.Normal",
          "name": "Normal",
          "package": "random-fu",
          "partial": "Normal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Normal.html#v:Normal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \"standard\" normal distribution - mean 0, stddev 1\n\u003c/p\u003e",
          "module": "[\"Data.Random.Distribution.Normal\",\"Data.Random\"]",
          "name": "StdNormal",
          "package": "random-fu",
          "signature": "StdNormal",
          "source": "src/Data-Random-Distribution-Normal.html#Normal",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Normal.html#v:StdNormal\",\"http://hackage.haskell.org/package/random-fu/docs/Data-Random.html#v:StdNormal\"]"
        },
        "index": {
          "description": "The standard normal distribution mean stddev",
          "hierarchy": "Data Random Distribution Normal",
          "module": "Data.Random.Distribution.Normal",
          "name": "StdNormal",
          "package": "random-fu",
          "partial": "Std Normal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Normal.html#v:StdNormal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA random variable that produces a pair of independent\n normally-distributed values, computed using the Box-Muller method.\n This algorithm is slightly slower than Knuth's method but using a \n constant amount of entropy (Knuth's method is a rejection method).\n It is also slightly more general (Knuth's method require an \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e\n instance).\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Normal",
          "name": "boxMullerNormalPair",
          "package": "random-fu",
          "signature": "RVar (a, a)",
          "source": "src/Data-Random-Distribution-Normal.html#boxMullerNormalPair",
          "type": "function"
        },
        "index": {
          "description": "random variable that produces pair of independent normally-distributed values computed using the Box-Muller method This algorithm is slightly slower than Knuth method but using constant amount of entropy Knuth method is rejection method It is also slightly more general Knuth method require an Ord instance",
          "hierarchy": "Data Random Distribution Normal",
          "module": "Data.Random.Distribution.Normal",
          "name": "boxMullerNormalPair",
          "normalized": "RVar(a,a)",
          "package": "random-fu",
          "partial": "Muller Normal Pair",
          "signature": "RVar(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Normal.html#v:boxMullerNormalPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA random variable sampling from the standard normal distribution\n over the \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Normal",
          "name": "doubleStdNormal",
          "package": "random-fu",
          "signature": "RVarT m Double",
          "source": "src/Data-Random-Distribution-Normal.html#doubleStdNormal",
          "type": "function"
        },
        "index": {
          "description": "random variable sampling from the standard normal distribution over the Double type",
          "hierarchy": "Data Random Distribution Normal",
          "module": "Data.Random.Distribution.Normal",
          "name": "doubleStdNormal",
          "package": "random-fu",
          "partial": "Std Normal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Normal.html#v:doubleStdNormal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA random variable sampling from the standard normal distribution\n over the \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Normal",
          "name": "floatStdNormal",
          "package": "random-fu",
          "signature": "RVarT m Float",
          "source": "src/Data-Random-Distribution-Normal.html#floatStdNormal",
          "type": "function"
        },
        "index": {
          "description": "random variable sampling from the standard normal distribution over the Float type",
          "hierarchy": "Data Random Distribution Normal",
          "module": "Data.Random.Distribution.Normal",
          "name": "floatStdNormal",
          "package": "random-fu",
          "partial": "Std Normal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Normal.html#v:floatStdNormal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA random variable that produces a pair of independent\n normally-distributed values, computed using Knuth's polar method.\n Slightly faster than \u003ccode\u003e\u003ca\u003eboxMullerNormalPair\u003c/a\u003e\u003c/code\u003e when it accepts on the \n first try, but does not always do so.\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Normal",
          "name": "knuthPolarNormalPair",
          "package": "random-fu",
          "signature": "RVar (a, a)",
          "source": "src/Data-Random-Distribution-Normal.html#knuthPolarNormalPair",
          "type": "function"
        },
        "index": {
          "description": "random variable that produces pair of independent normally-distributed values computed using Knuth polar method Slightly faster than boxMullerNormalPair when it accepts on the first try but does not always do so",
          "hierarchy": "Data Random Distribution Normal",
          "module": "Data.Random.Distribution.Normal",
          "name": "knuthPolarNormalPair",
          "normalized": "RVar(a,a)",
          "package": "random-fu",
          "partial": "Polar Normal Pair",
          "signature": "RVar(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Normal.html#v:knuthPolarNormalPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003enormal m s\u003c/code\u003e is a random variable with distribution \u003ccode\u003e\u003ccode\u003e\u003ca\u003eNormal\u003c/a\u003e\u003c/code\u003e m s\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Random.Distribution.Normal\",\"Data.Random\"]",
          "name": "normal",
          "package": "random-fu",
          "signature": "a -\u003e a -\u003e RVar a",
          "source": "src/Data-Random-Distribution-Normal.html#normal",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Normal.html#v:normal\",\"http://hackage.haskell.org/package/random-fu/docs/Data-Random.html#v:normal\"]"
        },
        "index": {
          "description": "normal is random variable with distribution Normal",
          "hierarchy": "Data Random Distribution Normal",
          "module": "Data.Random.Distribution.Normal",
          "name": "normal",
          "normalized": "a-\u003ea-\u003eRVar a",
          "package": "random-fu",
          "signature": "a-\u003ea-\u003eRVar a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Normal.html#v:normal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA random variable that produces a pair of independent\n normally-distributed values.\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Normal",
          "name": "normalPair",
          "package": "random-fu",
          "signature": "RVar (a, a)",
          "source": "src/Data-Random-Distribution-Normal.html#normalPair",
          "type": "function"
        },
        "index": {
          "description": "random variable that produces pair of independent normally-distributed values",
          "hierarchy": "Data Random Distribution Normal",
          "module": "Data.Random.Distribution.Normal",
          "name": "normalPair",
          "normalized": "RVar(a,a)",
          "package": "random-fu",
          "partial": "Pair",
          "signature": "RVar(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Normal.html#v:normalPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003enormalT m s\u003c/code\u003e is a random process with distribution \u003ccode\u003e\u003ccode\u003e\u003ca\u003eNormal\u003c/a\u003e\u003c/code\u003e m s\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Random.Distribution.Normal\",\"Data.Random\"]",
          "name": "normalT",
          "package": "random-fu",
          "signature": "a -\u003e a -\u003e RVarT m a",
          "source": "src/Data-Random-Distribution-Normal.html#normalT",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Normal.html#v:normalT\",\"http://hackage.haskell.org/package/random-fu/docs/Data-Random.html#v:normalT\"]"
        },
        "index": {
          "description": "normalT is random process with distribution Normal",
          "hierarchy": "Data Random Distribution Normal",
          "module": "Data.Random.Distribution.Normal",
          "name": "normalT",
          "normalized": "a-\u003ea-\u003eRVarT b a",
          "package": "random-fu",
          "signature": "a-\u003ea-\u003eRVarT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Normal.html#v:normalT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw from the tail of a normal distribution (the region beyond the provided value)\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Normal",
          "name": "normalTail",
          "package": "random-fu",
          "signature": "a -\u003e RVarT m a",
          "source": "src/Data-Random-Distribution-Normal.html#normalTail",
          "type": "function"
        },
        "index": {
          "description": "Draw from the tail of normal distribution the region beyond the provided value",
          "hierarchy": "Data Random Distribution Normal",
          "module": "Data.Random.Distribution.Normal",
          "name": "normalTail",
          "normalized": "a-\u003eRVarT b a",
          "package": "random-fu",
          "partial": "Tail",
          "signature": "a-\u003eRVarT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Normal.html#v:normalTail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA random variable sampling from the standard normal distribution\n over any \u003ccode\u003e\u003ca\u003eRealFloat\u003c/a\u003e\u003c/code\u003e type (subject to the rest of the constraints -\n it builds and uses a \u003ccode\u003e\u003ca\u003eZiggurat\u003c/a\u003e\u003c/code\u003e internally, which requires the \u003ccode\u003e\u003ca\u003eErf\u003c/a\u003e\u003c/code\u003e\n class).  \n\u003c/p\u003e\u003cp\u003eBecause it computes a \u003ccode\u003e\u003ca\u003eZiggurat\u003c/a\u003e\u003c/code\u003e, it is very expensive to use for\n just one evaluation, or even for multiple evaluations if not used and\n reused monomorphically (to enable the ziggurat table to be let-floated\n out).  If you don't know whether your use case fits this description\n then you're probably better off using a different algorithm, such as\n \u003ccode\u003e\u003ca\u003eboxMullerNormalPair\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eknuthPolarNormalPair\u003c/a\u003e\u003c/code\u003e.  And of course if\n you don't need the full generality of this definition then you're much\n better off using \u003ccode\u003e\u003ca\u003edoubleStdNormal\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003efloatStdNormal\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAs far as I know, this should be safe to use in any monomorphic\n \u003ccode\u003eDistribution Normal\u003c/code\u003e instance declaration.\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Normal",
          "name": "realFloatStdNormal",
          "package": "random-fu",
          "signature": "RVarT m a",
          "source": "src/Data-Random-Distribution-Normal.html#realFloatStdNormal",
          "type": "function"
        },
        "index": {
          "description": "random variable sampling from the standard normal distribution over any RealFloat type subject to the rest of the constraints it builds and uses Ziggurat internally which requires the Erf class Because it computes Ziggurat it is very expensive to use for just one evaluation or even for multiple evaluations if not used and reused monomorphically to enable the ziggurat table to be let-floated out If you don know whether your use case fits this description then you re probably better off using different algorithm such as boxMullerNormalPair or knuthPolarNormalPair And of course if you don need the full generality of this definition then you re much better off using doubleStdNormal or floatStdNormal As far as know this should be safe to use in any monomorphic Distribution Normal instance declaration",
          "hierarchy": "Data Random Distribution Normal",
          "module": "Data.Random.Distribution.Normal",
          "name": "realFloatStdNormal",
          "package": "random-fu",
          "partial": "Float Std Normal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Normal.html#v:realFloatStdNormal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003estdNormal\u003c/a\u003e\u003c/code\u003e is a normal variable with distribution \u003ccode\u003e\u003ca\u003eStdNormal\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Random.Distribution.Normal\",\"Data.Random\"]",
          "name": "stdNormal",
          "package": "random-fu",
          "signature": "RVar a",
          "source": "src/Data-Random-Distribution-Normal.html#stdNormal",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Normal.html#v:stdNormal\",\"http://hackage.haskell.org/package/random-fu/docs/Data-Random.html#v:stdNormal\"]"
        },
        "index": {
          "description": "stdNormal is normal variable with distribution StdNormal",
          "hierarchy": "Data Random Distribution Normal",
          "module": "Data.Random.Distribution.Normal",
          "name": "stdNormal",
          "package": "random-fu",
          "partial": "Normal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Normal.html#v:stdNormal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003estdNormalT\u003c/a\u003e\u003c/code\u003e is a normal process with distribution \u003ccode\u003e\u003ca\u003eStdNormal\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Random.Distribution.Normal\",\"Data.Random\"]",
          "name": "stdNormalT",
          "package": "random-fu",
          "signature": "RVarT m a",
          "source": "src/Data-Random-Distribution-Normal.html#stdNormalT",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Normal.html#v:stdNormalT\",\"http://hackage.haskell.org/package/random-fu/docs/Data-Random.html#v:stdNormalT\"]"
        },
        "index": {
          "description": "stdNormalT is normal process with distribution StdNormal",
          "hierarchy": "Data Random Distribution Normal",
          "module": "Data.Random.Distribution.Normal",
          "name": "stdNormalT",
          "package": "random-fu",
          "partial": "Normal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Normal.html#v:stdNormalT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Pareto",
          "name": "Pareto",
          "package": "random-fu",
          "source": "src/Data-Random-Distribution-Pareto.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Random Distribution Pareto",
          "module": "Data.Random.Distribution.Pareto",
          "name": "Pareto",
          "package": "random-fu",
          "partial": "Pareto",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Pareto.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Pareto",
          "name": "Pareto",
          "package": "random-fu",
          "source": "src/Data-Random-Distribution-Pareto.html#Pareto",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Random Distribution Pareto",
          "module": "Data.Random.Distribution.Pareto",
          "name": "Pareto",
          "package": "random-fu",
          "partial": "Pareto",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Pareto.html#t:Pareto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Pareto",
          "name": "Pareto",
          "package": "random-fu",
          "signature": "Pareto !a !a",
          "source": "src/Data-Random-Distribution-Pareto.html#Pareto",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution Pareto",
          "module": "Data.Random.Distribution.Pareto",
          "name": "Pareto",
          "package": "random-fu",
          "partial": "Pareto",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Pareto.html#v:Pareto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Pareto",
          "name": "pareto",
          "package": "random-fu",
          "signature": "a -\u003e a -\u003e RVar a",
          "source": "src/Data-Random-Distribution-Pareto.html#pareto",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution Pareto",
          "module": "Data.Random.Distribution.Pareto",
          "name": "pareto",
          "normalized": "a-\u003ea-\u003eRVar a",
          "package": "random-fu",
          "signature": "a-\u003ea-\u003eRVar a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Pareto.html#v:pareto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Pareto",
          "name": "paretoT",
          "package": "random-fu",
          "signature": "a -\u003e a -\u003e RVarT m a",
          "source": "src/Data-Random-Distribution-Pareto.html#paretoT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution Pareto",
          "module": "Data.Random.Distribution.Pareto",
          "name": "paretoT",
          "normalized": "a-\u003ea-\u003eRVarT b a",
          "package": "random-fu",
          "signature": "a-\u003ea-\u003eRVarT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Pareto.html#v:paretoT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Poisson",
          "name": "Poisson",
          "package": "random-fu",
          "source": "src/Data-Random-Distribution-Poisson.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Random Distribution Poisson",
          "module": "Data.Random.Distribution.Poisson",
          "name": "Poisson",
          "package": "random-fu",
          "partial": "Poisson",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Poisson.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Poisson",
          "name": "Poisson",
          "package": "random-fu",
          "source": "src/Data-Random-Distribution-Poisson.html#Poisson",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Random Distribution Poisson",
          "module": "Data.Random.Distribution.Poisson",
          "name": "Poisson",
          "package": "random-fu",
          "partial": "Poisson",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Poisson.html#t:Poisson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Poisson",
          "name": "Poisson",
          "package": "random-fu",
          "signature": "Poisson b",
          "source": "src/Data-Random-Distribution-Poisson.html#Poisson",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution Poisson",
          "module": "Data.Random.Distribution.Poisson",
          "name": "Poisson",
          "package": "random-fu",
          "partial": "Poisson",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Poisson.html#v:Poisson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Poisson",
          "name": "fractionalPoisson",
          "package": "random-fu",
          "signature": "b -\u003e RVarT m a",
          "source": "src/Data-Random-Distribution-Poisson.html#fractionalPoisson",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution Poisson",
          "module": "Data.Random.Distribution.Poisson",
          "name": "fractionalPoisson",
          "normalized": "a-\u003eRVarT b c",
          "package": "random-fu",
          "partial": "Poisson",
          "signature": "b-\u003eRVarT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Poisson.html#v:fractionalPoisson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Poisson",
          "name": "fractionalPoissonCDF",
          "package": "random-fu",
          "signature": "b -\u003e a -\u003e Double",
          "source": "src/Data-Random-Distribution-Poisson.html#fractionalPoissonCDF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution Poisson",
          "module": "Data.Random.Distribution.Poisson",
          "name": "fractionalPoissonCDF",
          "normalized": "a-\u003eb-\u003eDouble",
          "package": "random-fu",
          "partial": "Poisson CDF",
          "signature": "b-\u003ea-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Poisson.html#v:fractionalPoissonCDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Poisson",
          "name": "integralPoisson",
          "package": "random-fu",
          "signature": "b -\u003e RVarT m a",
          "source": "src/Data-Random-Distribution-Poisson.html#integralPoisson",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution Poisson",
          "module": "Data.Random.Distribution.Poisson",
          "name": "integralPoisson",
          "normalized": "a-\u003eRVarT b c",
          "package": "random-fu",
          "partial": "Poisson",
          "signature": "b-\u003eRVarT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Poisson.html#v:integralPoisson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Poisson",
          "name": "integralPoissonCDF",
          "package": "random-fu",
          "signature": "b -\u003e a -\u003e Double",
          "source": "src/Data-Random-Distribution-Poisson.html#integralPoissonCDF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution Poisson",
          "module": "Data.Random.Distribution.Poisson",
          "name": "integralPoissonCDF",
          "normalized": "a-\u003eb-\u003eDouble",
          "package": "random-fu",
          "partial": "Poisson CDF",
          "signature": "b-\u003ea-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Poisson.html#v:integralPoissonCDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Poisson",
          "name": "poisson",
          "package": "random-fu",
          "signature": "b -\u003e RVar a",
          "source": "src/Data-Random-Distribution-Poisson.html#poisson",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution Poisson",
          "module": "Data.Random.Distribution.Poisson",
          "name": "poisson",
          "normalized": "a-\u003eRVar b",
          "package": "random-fu",
          "signature": "b-\u003eRVar a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Poisson.html#v:poisson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Poisson",
          "name": "poissonT",
          "package": "random-fu",
          "signature": "b -\u003e RVarT m a",
          "source": "src/Data-Random-Distribution-Poisson.html#poissonT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution Poisson",
          "module": "Data.Random.Distribution.Poisson",
          "name": "poissonT",
          "normalized": "a-\u003eRVarT b c",
          "package": "random-fu",
          "signature": "b-\u003eRVarT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Poisson.html#v:poissonT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Rayleigh",
          "name": "Rayleigh",
          "package": "random-fu",
          "source": "src/Data-Random-Distribution-Rayleigh.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Random Distribution Rayleigh",
          "module": "Data.Random.Distribution.Rayleigh",
          "name": "Rayleigh",
          "package": "random-fu",
          "partial": "Rayleigh",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Rayleigh.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe rayleigh distribution with a specified mode (\"sigma\") parameter.\n Its mean will be \u003ccode\u003esigma*sqrt(pi\u003cem\u003e2)@ and its variance will be @sigma^2*(4-pi)\u003c/em\u003e2\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e(therefore if you want one with a particular mean \u003ccode\u003em\u003c/code\u003e, \u003ccode\u003esigma\u003c/code\u003e should be \u003ccode\u003em*sqrt(2/pi)\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Rayleigh",
          "name": "Rayleigh",
          "package": "random-fu",
          "source": "src/Data-Random-Distribution-Rayleigh.html#Rayleigh",
          "type": "newtype"
        },
        "index": {
          "description": "The rayleigh distribution with specified mode sigma parameter Its mean will be sigma sqrt pi and its variance will be sigma pi therefore if you want one with particular mean sigma should be sqrt pi",
          "hierarchy": "Data Random Distribution Rayleigh",
          "module": "Data.Random.Distribution.Rayleigh",
          "name": "Rayleigh",
          "package": "random-fu",
          "partial": "Rayleigh",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Rayleigh.html#t:Rayleigh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Rayleigh",
          "name": "Rayleigh",
          "package": "random-fu",
          "signature": "Rayleigh a",
          "source": "src/Data-Random-Distribution-Rayleigh.html#Rayleigh",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution Rayleigh",
          "module": "Data.Random.Distribution.Rayleigh",
          "name": "Rayleigh",
          "package": "random-fu",
          "partial": "Rayleigh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Rayleigh.html#v:Rayleigh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Rayleigh",
          "name": "floatingRayleigh",
          "package": "random-fu",
          "signature": "a -\u003e RVarT m a",
          "source": "src/Data-Random-Distribution-Rayleigh.html#floatingRayleigh",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution Rayleigh",
          "module": "Data.Random.Distribution.Rayleigh",
          "name": "floatingRayleigh",
          "normalized": "a-\u003eRVarT b a",
          "package": "random-fu",
          "partial": "Rayleigh",
          "signature": "a-\u003eRVarT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Rayleigh.html#v:floatingRayleigh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Rayleigh",
          "name": "rayleigh",
          "package": "random-fu",
          "signature": "a -\u003e RVar a",
          "source": "src/Data-Random-Distribution-Rayleigh.html#rayleigh",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution Rayleigh",
          "module": "Data.Random.Distribution.Rayleigh",
          "name": "rayleigh",
          "normalized": "a-\u003eRVar a",
          "package": "random-fu",
          "signature": "a-\u003eRVar a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Rayleigh.html#v:rayleigh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Rayleigh",
          "name": "rayleighCDF",
          "package": "random-fu",
          "signature": "a -\u003e a -\u003e Double",
          "source": "src/Data-Random-Distribution-Rayleigh.html#rayleighCDF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution Rayleigh",
          "module": "Data.Random.Distribution.Rayleigh",
          "name": "rayleighCDF",
          "normalized": "a-\u003ea-\u003eDouble",
          "package": "random-fu",
          "partial": "CDF",
          "signature": "a-\u003ea-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Rayleigh.html#v:rayleighCDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Rayleigh",
          "name": "rayleighT",
          "package": "random-fu",
          "signature": "a -\u003e RVarT m a",
          "source": "src/Data-Random-Distribution-Rayleigh.html#rayleighT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution Rayleigh",
          "module": "Data.Random.Distribution.Rayleigh",
          "name": "rayleighT",
          "normalized": "a-\u003eRVarT b a",
          "package": "random-fu",
          "signature": "a-\u003eRVarT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Rayleigh.html#v:rayleighT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.StretchedExponential",
          "name": "StretchedExponential",
          "package": "random-fu",
          "source": "src/Data-Random-Distribution-StretchedExponential.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Random Distribution StretchedExponential",
          "module": "Data.Random.Distribution.StretchedExponential",
          "name": "StretchedExponential",
          "package": "random-fu",
          "partial": "Stretched Exponential",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-StretchedExponential.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.StretchedExponential",
          "name": "StretchedExponential",
          "package": "random-fu",
          "source": "src/Data-Random-Distribution-StretchedExponential.html#StretchedExponential",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Random Distribution StretchedExponential",
          "module": "Data.Random.Distribution.StretchedExponential",
          "name": "StretchedExponential",
          "package": "random-fu",
          "partial": "Stretched Exponential",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-StretchedExponential.html#t:StretchedExponential"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.StretchedExponential",
          "name": "StretchedExp",
          "package": "random-fu",
          "signature": "StretchedExp (a, a)",
          "source": "src/Data-Random-Distribution-StretchedExponential.html#StretchedExponential",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution StretchedExponential",
          "module": "Data.Random.Distribution.StretchedExponential",
          "name": "StretchedExp",
          "normalized": "StretchedExp(a,a)",
          "package": "random-fu",
          "partial": "Stretched Exp",
          "signature": "StretchedExp(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-StretchedExponential.html#v:StretchedExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.StretchedExponential",
          "name": "floatingStretchedExponential",
          "package": "random-fu",
          "signature": "a -\u003e a -\u003e RVarT m a",
          "source": "src/Data-Random-Distribution-StretchedExponential.html#floatingStretchedExponential",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution StretchedExponential",
          "module": "Data.Random.Distribution.StretchedExponential",
          "name": "floatingStretchedExponential",
          "normalized": "a-\u003ea-\u003eRVarT b a",
          "package": "random-fu",
          "partial": "Stretched Exponential",
          "signature": "a-\u003ea-\u003eRVarT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-StretchedExponential.html#v:floatingStretchedExponential"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.StretchedExponential",
          "name": "floatingStretchedExponentialCDF",
          "package": "random-fu",
          "signature": "a -\u003e a -\u003e a -\u003e Double",
          "source": "src/Data-Random-Distribution-StretchedExponential.html#floatingStretchedExponentialCDF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution StretchedExponential",
          "module": "Data.Random.Distribution.StretchedExponential",
          "name": "floatingStretchedExponentialCDF",
          "normalized": "a-\u003ea-\u003ea-\u003eDouble",
          "package": "random-fu",
          "partial": "Stretched Exponential CDF",
          "signature": "a-\u003ea-\u003ea-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-StretchedExponential.html#v:floatingStretchedExponentialCDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.StretchedExponential",
          "name": "stretchedExponential",
          "package": "random-fu",
          "signature": "a -\u003e a -\u003e RVar a",
          "source": "src/Data-Random-Distribution-StretchedExponential.html#stretchedExponential",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution StretchedExponential",
          "module": "Data.Random.Distribution.StretchedExponential",
          "name": "stretchedExponential",
          "normalized": "a-\u003ea-\u003eRVar a",
          "package": "random-fu",
          "partial": "Exponential",
          "signature": "a-\u003ea-\u003eRVar a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-StretchedExponential.html#v:stretchedExponential"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.StretchedExponential",
          "name": "stretchedExponentialT",
          "package": "random-fu",
          "signature": "a -\u003e a -\u003e RVarT m a",
          "source": "src/Data-Random-Distribution-StretchedExponential.html#stretchedExponentialT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution StretchedExponential",
          "module": "Data.Random.Distribution.StretchedExponential",
          "name": "stretchedExponentialT",
          "normalized": "a-\u003ea-\u003eRVarT b a",
          "package": "random-fu",
          "partial": "Exponential",
          "signature": "a-\u003ea-\u003eRVarT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-StretchedExponential.html#v:stretchedExponentialT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Triangular",
          "name": "Triangular",
          "package": "random-fu",
          "source": "src/Data-Random-Distribution-Triangular.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Random Distribution Triangular",
          "module": "Data.Random.Distribution.Triangular",
          "name": "Triangular",
          "package": "random-fu",
          "partial": "Triangular",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Triangular.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA description of a triangular distribution - a distribution whose PDF\n is a triangle ramping up from a lower bound to a specified midpoint\n and back down to the upper bound.  This is a very simple distribution\n that does not generally occur naturally but is used sometimes as an\n estimate of a true distribution when only the range of the values and\n an approximate mode of the true distribution are known.\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Triangular",
          "name": "Triangular",
          "package": "random-fu",
          "source": "src/Data-Random-Distribution-Triangular.html#Triangular",
          "type": "data"
        },
        "index": {
          "description": "description of triangular distribution distribution whose PDF is triangle ramping up from lower bound to specified midpoint and back down to the upper bound This is very simple distribution that does not generally occur naturally but is used sometimes as an estimate of true distribution when only the range of the values and an approximate mode of the true distribution are known",
          "hierarchy": "Data Random Distribution Triangular",
          "module": "Data.Random.Distribution.Triangular",
          "name": "Triangular",
          "package": "random-fu",
          "partial": "Triangular",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Triangular.html#t:Triangular"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Triangular",
          "name": "Triangular",
          "package": "random-fu",
          "signature": "Triangular",
          "source": "src/Data-Random-Distribution-Triangular.html#Triangular",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution Triangular",
          "module": "Data.Random.Distribution.Triangular",
          "name": "Triangular",
          "package": "random-fu",
          "partial": "Triangular",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Triangular.html#v:Triangular"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute a triangular distribution for a \u003ccode\u003e\u003ca\u003eFloating\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Triangular",
          "name": "floatingTriangular",
          "package": "random-fu",
          "signature": "a -\u003e a -\u003e a -\u003e RVarT m a",
          "source": "src/Data-Random-Distribution-Triangular.html#floatingTriangular",
          "type": "function"
        },
        "index": {
          "description": "Compute triangular distribution for Floating type",
          "hierarchy": "Data Random Distribution Triangular",
          "module": "Data.Random.Distribution.Triangular",
          "name": "floatingTriangular",
          "normalized": "a-\u003ea-\u003ea-\u003eRVarT b a",
          "package": "random-fu",
          "partial": "Triangular",
          "signature": "a-\u003ea-\u003ea-\u003eRVarT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Triangular.html#v:floatingTriangular"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe lower bound of the triangle in the PDF (the smallest number the distribution can generate)\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Triangular",
          "name": "triLower",
          "package": "random-fu",
          "signature": "a",
          "source": "src/Data-Random-Distribution-Triangular.html#Triangular",
          "type": "function"
        },
        "index": {
          "description": "The lower bound of the triangle in the PDF the smallest number the distribution can generate",
          "hierarchy": "Data Random Distribution Triangular",
          "module": "Data.Random.Distribution.Triangular",
          "name": "triLower",
          "package": "random-fu",
          "partial": "Lower",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Triangular.html#v:triLower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe midpoint of the triangle (also the mode of the distribution)\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Triangular",
          "name": "triMid",
          "package": "random-fu",
          "signature": "a",
          "source": "src/Data-Random-Distribution-Triangular.html#Triangular",
          "type": "function"
        },
        "index": {
          "description": "The midpoint of the triangle also the mode of the distribution",
          "hierarchy": "Data Random Distribution Triangular",
          "module": "Data.Random.Distribution.Triangular",
          "name": "triMid",
          "package": "random-fu",
          "partial": "Mid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Triangular.html#v:triMid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe upper bound of the triangle (and the largest number the distribution can generate)\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Triangular",
          "name": "triUpper",
          "package": "random-fu",
          "signature": "a",
          "source": "src/Data-Random-Distribution-Triangular.html#Triangular",
          "type": "function"
        },
        "index": {
          "description": "The upper bound of the triangle and the largest number the distribution can generate",
          "hierarchy": "Data Random Distribution Triangular",
          "module": "Data.Random.Distribution.Triangular",
          "name": "triUpper",
          "package": "random-fu",
          "partial": "Upper",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Triangular.html#v:triUpper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etriangularCDF a b c\u003c/code\u003e is the CDF of \u003ccode\u003erealFloatTriangular a b c\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Triangular",
          "name": "triangularCDF",
          "package": "random-fu",
          "signature": "a -\u003e a -\u003e a -\u003e a -\u003e Double",
          "source": "src/Data-Random-Distribution-Triangular.html#triangularCDF",
          "type": "function"
        },
        "index": {
          "description": "triangularCDF is the CDF of realFloatTriangular",
          "hierarchy": "Data Random Distribution Triangular",
          "module": "Data.Random.Distribution.Triangular",
          "name": "triangularCDF",
          "normalized": "a-\u003ea-\u003ea-\u003ea-\u003eDouble",
          "package": "random-fu",
          "partial": "CDF",
          "signature": "a-\u003ea-\u003ea-\u003ea-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Triangular.html#v:triangularCDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Uniform",
          "name": "Uniform",
          "package": "random-fu",
          "source": "src/Data-Random-Distribution-Uniform.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Random Distribution Uniform",
          "module": "Data.Random.Distribution.Uniform",
          "name": "Uniform",
          "package": "random-fu",
          "partial": "Uniform",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Uniform.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA name for the \"standard\" uniform distribution over the type \u003ccode\u003et\u003c/code\u003e,\n if one exists.  See also \u003ccode\u003e\u003ca\u003estdUniform\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e types that are also \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e, this is\n the uniform distribution over the full range of the type.\n For un-\u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e types this is not defined.\n For \u003ccode\u003e\u003ca\u003eFractional\u003c/a\u003e\u003c/code\u003e types this is a random variable in the range [0,1)\n (that is, 0 to 1 including 0 but not including 1).\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Uniform",
          "name": "StdUniform",
          "package": "random-fu",
          "source": "src/Data-Random-Distribution-Uniform.html#StdUniform",
          "type": "data"
        },
        "index": {
          "description": "name for the standard uniform distribution over the type if one exists See also stdUniform For Integral and Enum types that are also Bounded this is the uniform distribution over the full range of the type For un Bounded Integral types this is not defined For Fractional types this is random variable in the range that is to including but not including",
          "hierarchy": "Data Random Distribution Uniform",
          "module": "Data.Random.Distribution.Uniform",
          "name": "StdUniform",
          "package": "random-fu",
          "partial": "Std Uniform",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Uniform.html#t:StdUniform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA definition of a uniform distribution over the type \u003ccode\u003et\u003c/code\u003e.  See also \u003ccode\u003e\u003ca\u003euniform\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Uniform",
          "name": "Uniform",
          "package": "random-fu",
          "source": "src/Data-Random-Distribution-Uniform.html#Uniform",
          "type": "data"
        },
        "index": {
          "description": "definition of uniform distribution over the type See also uniform",
          "hierarchy": "Data Random Distribution Uniform",
          "module": "Data.Random.Distribution.Uniform",
          "name": "Uniform",
          "package": "random-fu",
          "partial": "Uniform",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Uniform.html#t:Uniform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Random.Distribution.Uniform\",\"Data.Random\"]",
          "name": "StdUniform",
          "package": "random-fu",
          "signature": "StdUniform",
          "source": "src/Data-Random-Distribution-Uniform.html#StdUniform",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Uniform.html#v:StdUniform\",\"http://hackage.haskell.org/package/random-fu/docs/Data-Random.html#v:StdUniform\"]"
        },
        "index": {
          "hierarchy": "Data Random Distribution Uniform",
          "module": "Data.Random.Distribution.Uniform",
          "name": "StdUniform",
          "package": "random-fu",
          "partial": "Std Uniform",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Uniform.html#v:StdUniform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA uniform distribution defined by a lower and upper range bound.\n For \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e types, the range is inclusive.  For \u003ccode\u003e\u003ca\u003eFractional\u003c/a\u003e\u003c/code\u003e\n types the range includes the lower bound but not the upper.\n\u003c/p\u003e",
          "module": "[\"Data.Random.Distribution.Uniform\",\"Data.Random\"]",
          "name": "Uniform",
          "package": "random-fu",
          "signature": "Uniform !t !t",
          "source": "src/Data-Random-Distribution-Uniform.html#Uniform",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Uniform.html#v:Uniform\",\"http://hackage.haskell.org/package/random-fu/docs/Data-Random.html#v:Uniform\"]"
        },
        "index": {
          "description": "uniform distribution defined by lower and upper range bound For Integral and Enum types the range is inclusive For Fractional types the range includes the lower bound but not the upper",
          "hierarchy": "Data Random Distribution Uniform",
          "module": "Data.Random.Distribution.Uniform",
          "name": "Uniform",
          "package": "random-fu",
          "partial": "Uniform",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Uniform.html#v:Uniform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute a random value for a \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e type, between \u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e (inclusive)\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Uniform",
          "name": "boundedEnumStdUniform",
          "package": "random-fu",
          "signature": "RVarT m a",
          "source": "src/Data-Random-Distribution-Uniform.html#boundedEnumStdUniform",
          "type": "function"
        },
        "index": {
          "description": "Compute random value for Bounded Enum type between minBound and maxBound inclusive",
          "hierarchy": "Data Random Distribution Uniform",
          "module": "Data.Random.Distribution.Uniform",
          "name": "boundedEnumStdUniform",
          "package": "random-fu",
          "partial": "Enum Std Uniform",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Uniform.html#v:boundedEnumStdUniform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute a random value for a \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e type, between \u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e\n (inclusive for \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e types, in [\u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e) for Fractional types.)\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Uniform",
          "name": "boundedStdUniform",
          "package": "random-fu",
          "signature": "RVar a",
          "source": "src/Data-Random-Distribution-Uniform.html#boundedStdUniform",
          "type": "function"
        },
        "index": {
          "description": "Compute random value for Bounded type between minBound and maxBound inclusive for Integral or Enum types in minBound maxBound for Fractional types",
          "hierarchy": "Data Random Distribution Uniform",
          "module": "Data.Random.Distribution.Uniform",
          "name": "boundedStdUniform",
          "package": "random-fu",
          "partial": "Std Uniform",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Uniform.html#v:boundedStdUniform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute a uniform random \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e value in the range [0,1)\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Uniform",
          "name": "doubleStdUniform",
          "package": "random-fu",
          "signature": "RVarT m Double",
          "source": "src/Data-Random-Distribution-Uniform.html#doubleStdUniform",
          "type": "function"
        },
        "index": {
          "description": "Compute uniform random Double value in the range",
          "hierarchy": "Data Random Distribution Uniform",
          "module": "Data.Random.Distribution.Uniform",
          "name": "doubleStdUniform",
          "package": "random-fu",
          "partial": "Std Uniform",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Uniform.html#v:doubleStdUniform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003edoubleUniform a b\u003c/code\u003e computes a uniform random \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e value in the range [a,b)\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Uniform",
          "name": "doubleUniform",
          "package": "random-fu",
          "signature": "Double -\u003e Double -\u003e RVarT m Double",
          "source": "src/Data-Random-Distribution-Uniform.html#doubleUniform",
          "type": "function"
        },
        "index": {
          "description": "doubleUniform computes uniform random Double value in the range",
          "hierarchy": "Data Random Distribution Uniform",
          "module": "Data.Random.Distribution.Uniform",
          "name": "doubleUniform",
          "normalized": "Double-\u003eDouble-\u003eRVarT a Double",
          "package": "random-fu",
          "partial": "Uniform",
          "signature": "Double-\u003eDouble-\u003eRVarT m Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Uniform.html#v:doubleUniform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute a uniform random \u003ccode\u003e\u003ca\u003eFixed\u003c/a\u003e\u003c/code\u003e value in the range [0,1), with any\n desired precision.\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Uniform",
          "name": "fixedStdUniform",
          "package": "random-fu",
          "signature": "RVarT m (Fixed r)",
          "source": "src/Data-Random-Distribution-Uniform.html#fixedStdUniform",
          "type": "function"
        },
        "index": {
          "description": "Compute uniform random Fixed value in the range with any desired precision",
          "hierarchy": "Data Random Distribution Uniform",
          "module": "Data.Random.Distribution.Uniform",
          "name": "fixedStdUniform",
          "package": "random-fu",
          "partial": "Std Uniform",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Uniform.html#v:fixedStdUniform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003efixedUniform a b\u003c/code\u003e computes a uniform random \u003ccode\u003e\u003ca\u003eFixed\u003c/a\u003e\u003c/code\u003e value in the range \n [a,b), with any desired precision.\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Uniform",
          "name": "fixedUniform",
          "package": "random-fu",
          "signature": "Fixed r -\u003e Fixed r -\u003e RVarT m (Fixed r)",
          "source": "src/Data-Random-Distribution-Uniform.html#fixedUniform",
          "type": "function"
        },
        "index": {
          "description": "fixedUniform computes uniform random Fixed value in the range with any desired precision",
          "hierarchy": "Data Random Distribution Uniform",
          "module": "Data.Random.Distribution.Uniform",
          "name": "fixedUniform",
          "normalized": "Fixed a-\u003eFixed a-\u003eRVarT b(Fixed a)",
          "package": "random-fu",
          "partial": "Uniform",
          "signature": "Fixed r-\u003eFixed r-\u003eRVarT m(Fixed r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Uniform.html#v:fixedUniform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute a uniform random \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e value in the range [0,1)\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Uniform",
          "name": "floatStdUniform",
          "package": "random-fu",
          "signature": "RVarT m Float",
          "source": "src/Data-Random-Distribution-Uniform.html#floatStdUniform",
          "type": "function"
        },
        "index": {
          "description": "Compute uniform random Float value in the range",
          "hierarchy": "Data Random Distribution Uniform",
          "module": "Data.Random.Distribution.Uniform",
          "name": "floatStdUniform",
          "package": "random-fu",
          "partial": "Std Uniform",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Uniform.html#v:floatStdUniform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003efloatUniform a b\u003c/code\u003e computes a uniform random \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e value in the range [a,b)\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Uniform",
          "name": "floatUniform",
          "package": "random-fu",
          "signature": "Float -\u003e Float -\u003e RVarT m Float",
          "source": "src/Data-Random-Distribution-Uniform.html#floatUniform",
          "type": "function"
        },
        "index": {
          "description": "floatUniform computes uniform random Float value in the range",
          "hierarchy": "Data Random Distribution Uniform",
          "module": "Data.Random.Distribution.Uniform",
          "name": "floatUniform",
          "normalized": "Float-\u003eFloat-\u003eRVarT a Float",
          "package": "random-fu",
          "partial": "Uniform",
          "signature": "Float-\u003eFloat-\u003eRVarT m Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Uniform.html#v:floatUniform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute a random \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e value between the 2 values provided (inclusive).\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Uniform",
          "name": "integralUniform",
          "package": "random-fu",
          "signature": "a -\u003e a -\u003e RVarT m a",
          "source": "src/Data-Random-Distribution-Uniform.html#integralUniform",
          "type": "function"
        },
        "index": {
          "description": "Compute random Integral value between the values provided inclusive",
          "hierarchy": "Data Random Distribution Uniform",
          "module": "Data.Random.Distribution.Uniform",
          "name": "integralUniform",
          "normalized": "a-\u003ea-\u003eRVarT b a",
          "package": "random-fu",
          "partial": "Uniform",
          "signature": "a-\u003ea-\u003eRVarT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Uniform.html#v:integralUniform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute a uniform random value in the range [0,1) for any \u003ccode\u003e\u003ca\u003eRealFloat\u003c/a\u003e\u003c/code\u003e type \n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Uniform",
          "name": "realFloatStdUniform",
          "package": "random-fu",
          "signature": "RVarT m a",
          "source": "src/Data-Random-Distribution-Uniform.html#realFloatStdUniform",
          "type": "function"
        },
        "index": {
          "description": "Compute uniform random value in the range for any RealFloat type",
          "hierarchy": "Data Random Distribution Uniform",
          "module": "Data.Random.Distribution.Uniform",
          "name": "realFloatStdUniform",
          "package": "random-fu",
          "partial": "Float Std Uniform",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Uniform.html#v:realFloatStdUniform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003erealFloatUniform a b\u003c/code\u003e computes a uniform random value in the range [a,b) for\n any \u003ccode\u003e\u003ca\u003eRealFloat\u003c/a\u003e\u003c/code\u003e type\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Uniform",
          "name": "realFloatUniform",
          "package": "random-fu",
          "signature": "a -\u003e a -\u003e RVarT m a",
          "source": "src/Data-Random-Distribution-Uniform.html#realFloatUniform",
          "type": "function"
        },
        "index": {
          "description": "realFloatUniform computes uniform random value in the range for any RealFloat type",
          "hierarchy": "Data Random Distribution Uniform",
          "module": "Data.Random.Distribution.Uniform",
          "name": "realFloatUniform",
          "normalized": "a-\u003ea-\u003eRVarT b a",
          "package": "random-fu",
          "partial": "Float Uniform",
          "signature": "a-\u003ea-\u003eRVarT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Uniform.html#v:realFloatUniform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe CDF of the random variable \u003ccode\u003e\u003ca\u003erealFloatStdUniform\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Uniform",
          "name": "realStdUniformCDF",
          "package": "random-fu",
          "signature": "a -\u003e Double",
          "source": "src/Data-Random-Distribution-Uniform.html#realStdUniformCDF",
          "type": "function"
        },
        "index": {
          "description": "The CDF of the random variable realFloatStdUniform",
          "hierarchy": "Data Random Distribution Uniform",
          "module": "Data.Random.Distribution.Uniform",
          "name": "realStdUniformCDF",
          "normalized": "a-\u003eDouble",
          "package": "random-fu",
          "partial": "Std Uniform CDF",
          "signature": "a-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Uniform.html#v:realStdUniformCDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003erealUniformCDF a b\u003c/code\u003e is the CDF of the random variable \u003ccode\u003erealFloatUniform a b\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Uniform",
          "name": "realUniformCDF",
          "package": "random-fu",
          "signature": "a -\u003e a -\u003e a -\u003e Double",
          "source": "src/Data-Random-Distribution-Uniform.html#realUniformCDF",
          "type": "function"
        },
        "index": {
          "description": "realUniformCDF is the CDF of the random variable realFloatUniform",
          "hierarchy": "Data Random Distribution Uniform",
          "module": "Data.Random.Distribution.Uniform",
          "name": "realUniformCDF",
          "normalized": "a-\u003ea-\u003ea-\u003eDouble",
          "package": "random-fu",
          "partial": "Uniform CDF",
          "signature": "a-\u003ea-\u003ea-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Uniform.html#v:realUniformCDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a \"standard\" uniformly distributed variable.\n For integral types, this means uniformly distributed over the full range\n of the type (there is no support for \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e).  For fractional\n types, this means uniformly distributed on the interval [0,1).\n\u003c/p\u003e",
          "module": "[\"Data.Random.Distribution.Uniform\",\"Data.Random\"]",
          "name": "stdUniform",
          "package": "random-fu",
          "signature": "RVar a",
          "source": "src/Data-Random-Distribution-Uniform.html#stdUniform",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Uniform.html#v:stdUniform\",\"http://hackage.haskell.org/package/random-fu/docs/Data-Random.html#v:stdUniform\"]"
        },
        "index": {
          "description": "Get standard uniformly distributed variable For integral types this means uniformly distributed over the full range of the type there is no support for Integer For fractional types this means uniformly distributed on the interval",
          "hierarchy": "Data Random Distribution Uniform",
          "module": "Data.Random.Distribution.Uniform",
          "name": "stdUniform",
          "package": "random-fu",
          "partial": "Uniform",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Uniform.html#v:stdUniform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003estdUniform\u003c/a\u003e\u003c/code\u003e but only returns positive values.\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Uniform",
          "name": "stdUniformPos",
          "package": "random-fu",
          "signature": "RVar a",
          "source": "src/Data-Random-Distribution-Uniform.html#stdUniformPos",
          "type": "function"
        },
        "index": {
          "description": "Like stdUniform but only returns positive values",
          "hierarchy": "Data Random Distribution Uniform",
          "module": "Data.Random.Distribution.Uniform",
          "name": "stdUniformPos",
          "package": "random-fu",
          "partial": "Uniform Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Uniform.html#v:stdUniformPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003estdUniform\u003c/a\u003e\u003c/code\u003e but only returns positive values.\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Uniform",
          "name": "stdUniformPosT",
          "package": "random-fu",
          "signature": "RVarT m a",
          "source": "src/Data-Random-Distribution-Uniform.html#stdUniformPosT",
          "type": "function"
        },
        "index": {
          "description": "Like stdUniform but only returns positive values",
          "hierarchy": "Data Random Distribution Uniform",
          "module": "Data.Random.Distribution.Uniform",
          "name": "stdUniformPosT",
          "package": "random-fu",
          "partial": "Uniform Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Uniform.html#v:stdUniformPosT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a \"standard\" uniformly distributed process.\n For integral types, this means uniformly distributed over the full range\n of the type (there is no support for \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e).  For fractional\n types, this means uniformly distributed on the interval [0,1).\n\u003c/p\u003e",
          "module": "[\"Data.Random.Distribution.Uniform\",\"Data.Random\"]",
          "name": "stdUniformT",
          "package": "random-fu",
          "signature": "RVarT m a",
          "source": "src/Data-Random-Distribution-Uniform.html#stdUniformT",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Uniform.html#v:stdUniformT\",\"http://hackage.haskell.org/package/random-fu/docs/Data-Random.html#v:stdUniformT\"]"
        },
        "index": {
          "description": "Get standard uniformly distributed process For integral types this means uniformly distributed over the full range of the type there is no support for Integer For fractional types this means uniformly distributed on the interval",
          "hierarchy": "Data Random Distribution Uniform",
          "module": "Data.Random.Distribution.Uniform",
          "name": "stdUniformT",
          "package": "random-fu",
          "partial": "Uniform",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Uniform.html#v:stdUniformT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Random.Distribution.Uniform\",\"Data.Random\"]",
          "name": "uniform",
          "package": "random-fu",
          "signature": "a -\u003e a -\u003e RVar a",
          "source": "src/Data-Random-Distribution-Uniform.html#uniform",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Uniform.html#v:uniform\",\"http://hackage.haskell.org/package/random-fu/docs/Data-Random.html#v:uniform\"]"
        },
        "index": {
          "hierarchy": "Data Random Distribution Uniform",
          "module": "Data.Random.Distribution.Uniform",
          "name": "uniform",
          "normalized": "a-\u003ea-\u003eRVar a",
          "package": "random-fu",
          "signature": "a-\u003ea-\u003eRVar a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Uniform.html#v:uniform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Random.Distribution.Uniform\",\"Data.Random\"]",
          "name": "uniformT",
          "package": "random-fu",
          "signature": "a -\u003e a -\u003e RVarT m a",
          "source": "src/Data-Random-Distribution-Uniform.html#uniformT",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Uniform.html#v:uniformT\",\"http://hackage.haskell.org/package/random-fu/docs/Data-Random.html#v:uniformT\"]"
        },
        "index": {
          "hierarchy": "Data Random Distribution Uniform",
          "module": "Data.Random.Distribution.Uniform",
          "name": "uniformT",
          "normalized": "a-\u003ea-\u003eRVarT b a",
          "package": "random-fu",
          "signature": "a-\u003ea-\u003eRVarT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Uniform.html#v:uniformT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Weibull",
          "name": "Weibull",
          "package": "random-fu",
          "source": "src/Data-Random-Distribution-Weibull.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Random Distribution Weibull",
          "module": "Data.Random.Distribution.Weibull",
          "name": "Weibull",
          "package": "random-fu",
          "partial": "Weibull",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Weibull.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Weibull",
          "name": "Weibull",
          "package": "random-fu",
          "source": "src/Data-Random-Distribution-Weibull.html#Weibull",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Random Distribution Weibull",
          "module": "Data.Random.Distribution.Weibull",
          "name": "Weibull",
          "package": "random-fu",
          "partial": "Weibull",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Weibull.html#t:Weibull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Weibull",
          "name": "Weibull",
          "package": "random-fu",
          "signature": "Weibull",
          "source": "src/Data-Random-Distribution-Weibull.html#Weibull",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution Weibull",
          "module": "Data.Random.Distribution.Weibull",
          "name": "Weibull",
          "package": "random-fu",
          "partial": "Weibull",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Weibull.html#v:Weibull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Weibull",
          "name": "weibullK",
          "package": "random-fu",
          "signature": "a",
          "source": "src/Data-Random-Distribution-Weibull.html#Weibull",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution Weibull",
          "module": "Data.Random.Distribution.Weibull",
          "name": "weibullK",
          "package": "random-fu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Weibull.html#v:weibullK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Weibull",
          "name": "weibullLambda",
          "package": "random-fu",
          "signature": "a",
          "source": "src/Data-Random-Distribution-Weibull.html#Weibull",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution Weibull",
          "module": "Data.Random.Distribution.Weibull",
          "name": "weibullLambda",
          "package": "random-fu",
          "partial": "Lambda",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Weibull.html#v:weibullLambda"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA generic \"ziggurat algorithm\" implementation.  Fairly rough right\n  now.\n\u003c/p\u003e\u003cp\u003eThere is a lot of room for improvement in \u003ccode\u003e\u003ca\u003efindBin0\u003c/a\u003e\u003c/code\u003e especially.\n  It needs a fair amount of cleanup and elimination of redundant\n  calculation, as well as either a justification for using the simple\n  \u003ccode\u003e\u003ca\u003efindMinFrom\u003c/a\u003e\u003c/code\u003e or a proper root-finding algorithm. \n\u003c/p\u003e\u003cp\u003eIt would also be nice to add (preferably by pulling in an \n  external package) support for numerical integration and \n  differentiation, so that tables can be derived from only a \n  PDF (if the end user is willing to take the performance and \n  accuracy hit for the convenience).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Random.Distribution.Ziggurat",
          "name": "Ziggurat",
          "package": "random-fu",
          "source": "src/Data-Random-Distribution-Ziggurat.html",
          "type": "module"
        },
        "index": {
          "description": "generic ziggurat algorithm implementation Fairly rough right now There is lot of room for improvement in findBin0 especially It needs fair amount of cleanup and elimination of redundant calculation as well as either justification for using the simple findMinFrom or proper root-finding algorithm It would also be nice to add preferably by pulling in an external package support for numerical integration and differentiation so that tables can be derived from only PDF if the end user is willing to take the performance and accuracy hit for the convenience",
          "hierarchy": "Data Random Distribution Ziggurat",
          "module": "Data.Random.Distribution.Ziggurat",
          "name": "Ziggurat",
          "package": "random-fu",
          "partial": "Ziggurat",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Ziggurat.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA data structure containing all the data that is needed\n to implement Marsaglia & Tang's \"ziggurat\" algorithm for\n sampling certain kinds of random distributions.\n\u003c/p\u003e\u003cp\u003eThe documentation here is probably not sufficient to tell a user exactly\n how to build one of these from scratch, but it is not really intended to\n be.  There are several helper functions that will build \u003ccode\u003e\u003ca\u003eZiggurat\u003c/a\u003e\u003c/code\u003es.\n The pathologically curious may wish to read the \u003ccode\u003e\u003ca\u003erunZiggurat\u003c/a\u003e\u003c/code\u003e source.\n That is the ultimate specification of the semantics of all these fields.\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Ziggurat",
          "name": "Ziggurat",
          "package": "random-fu",
          "source": "src/Data-Random-Distribution-Ziggurat.html#Ziggurat",
          "type": "data"
        },
        "index": {
          "description": "data structure containing all the data that is needed to implement Marsaglia Tang ziggurat algorithm for sampling certain kinds of random distributions The documentation here is probably not sufficient to tell user exactly how to build one of these from scratch but it is not really intended to be There are several helper functions that will build Ziggurat The pathologically curious may wish to read the runZiggurat source That is the ultimate specification of the semantics of all these fields",
          "hierarchy": "Data Random Distribution Ziggurat",
          "module": "Data.Random.Distribution.Ziggurat",
          "name": "Ziggurat",
          "package": "random-fu",
          "partial": "Ziggurat",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Ziggurat.html#t:Ziggurat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Ziggurat",
          "name": "Ziggurat",
          "package": "random-fu",
          "signature": "Ziggurat",
          "source": "src/Data-Random-Distribution-Ziggurat.html#Ziggurat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Distribution Ziggurat",
          "module": "Data.Random.Distribution.Ziggurat",
          "name": "Ziggurat",
          "package": "random-fu",
          "partial": "Ziggurat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Ziggurat.html#v:Ziggurat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eI suspect this isn't completely right, but it works well so far.\n Search the distribution for an appropriate R and V.\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Number of bins\n\u003c/li\u003e\u003cli\u003e target function (one-sided antitone PDF, not necessarily normalized)\n\u003c/li\u003e\u003cli\u003e function inverse\n\u003c/li\u003e\u003cli\u003e function definite integral (from 0 to _)\n\u003c/li\u003e\u003cli\u003e estimate of total volume under function (integral from 0 to infinity)\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eResult: (R,V)\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Ziggurat",
          "name": "findBin0",
          "package": "random-fu",
          "signature": "Int -\u003e (b -\u003e b) -\u003e (b -\u003e b) -\u003e (b -\u003e b) -\u003e b -\u003e (b, b)",
          "source": "src/Data-Random-Distribution-Ziggurat.html#findBin0",
          "type": "function"
        },
        "index": {
          "description": "suspect this isn completely right but it works well so far Search the distribution for an appropriate and Arguments Number of bins target function one-sided antitone PDF not necessarily normalized function inverse function definite integral from to estimate of total volume under function integral from to infinity Result",
          "hierarchy": "Data Random Distribution Ziggurat",
          "module": "Data.Random.Distribution.Ziggurat",
          "name": "findBin0",
          "normalized": "Int-\u003e(a-\u003ea)-\u003e(a-\u003ea)-\u003e(a-\u003ea)-\u003ea-\u003e(a,a)",
          "package": "random-fu",
          "partial": "Bin",
          "signature": "Int-\u003e(b-\u003eb)-\u003e(b-\u003eb)-\u003e(b-\u003eb)-\u003eb-\u003e(b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Ziggurat.html#v:findBin0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild the tables to implement the \"ziggurat algorithm\" devised by \n Marsaglia & Tang, attempting to automatically compute the R and V\n values.\n\u003c/p\u003e\u003cp\u003eArguments are the same as for \u003ccode\u003e\u003ca\u003emkZigguratRec\u003c/a\u003e\u003c/code\u003e, with an additional\n argument for the tail distribution as a function of the selected\n R value.\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Ziggurat",
          "name": "mkZiggurat",
          "package": "random-fu",
          "signature": "Bool -\u003e (t -\u003e t) -\u003e (t -\u003e t) -\u003e (t -\u003e t) -\u003e t -\u003e Int -\u003e (forall m.  RVarT m (Int, t)) -\u003e (forall m.  t -\u003e RVarT m t) -\u003e Ziggurat v t",
          "source": "src/Data-Random-Distribution-Ziggurat.html#mkZiggurat",
          "type": "function"
        },
        "index": {
          "description": "Build the tables to implement the ziggurat algorithm devised by Marsaglia Tang attempting to automatically compute the and values Arguments are the same as for mkZigguratRec with an additional argument for the tail distribution as function of the selected value",
          "hierarchy": "Data Random Distribution Ziggurat",
          "module": "Data.Random.Distribution.Ziggurat",
          "name": "mkZiggurat",
          "normalized": "Bool-\u003e(a-\u003ea)-\u003e(a-\u003ea)-\u003e(a-\u003ea)-\u003ea-\u003eInt-\u003e(b c RVarT d(Int,a))-\u003e(b c a-\u003eRVarT d a)-\u003eZiggurat e a",
          "package": "random-fu",
          "partial": "Ziggurat",
          "signature": "Bool-\u003e(t-\u003et)-\u003e(t-\u003et)-\u003e(t-\u003et)-\u003et-\u003eInt-\u003e(forall m. RVarT m(Int,t))-\u003e(forall m. t-\u003eRVarT m t)-\u003eZiggurat v t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Ziggurat.html#v:mkZiggurat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a lazy recursive ziggurat.  Uses a lazily-constructed ziggurat\n as its tail distribution (with another as its tail, ad nauseam).\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e flag indicating whether to mirror the distribution\n\u003c/li\u003e\u003cli\u003e the (one-sided antitone) PDF, not necessarily normalized\n\u003c/li\u003e\u003cli\u003e the inverse of the PDF\n\u003c/li\u003e\u003cli\u003e the integral of the PDF (definite, from 0)\n\u003c/li\u003e\u003cli\u003e the estimated volume under the PDF (from 0 to +infinity)\n\u003c/li\u003e\u003cli\u003e the chunk size (number of bins in each layer).  64 seems to\n    perform well in practice.\n\u003c/li\u003e\u003cli\u003e an RVar providing the \u003ccode\u003e\u003ca\u003ezGetIU\u003c/a\u003e\u003c/code\u003e random tuple\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Random.Distribution.Ziggurat",
          "name": "mkZigguratRec",
          "package": "random-fu",
          "signature": "Bool -\u003e (t -\u003e t) -\u003e (t -\u003e t) -\u003e (t -\u003e t) -\u003e t -\u003e Int -\u003e (forall m.  RVarT m (Int, t)) -\u003e Ziggurat v t",
          "source": "src/Data-Random-Distribution-Ziggurat.html#mkZigguratRec",
          "type": "function"
        },
        "index": {
          "description": "Build lazy recursive ziggurat Uses lazily-constructed ziggurat as its tail distribution with another as its tail ad nauseam Arguments flag indicating whether to mirror the distribution the one-sided antitone PDF not necessarily normalized the inverse of the PDF the integral of the PDF definite from the estimated volume under the PDF from to infinity the chunk size number of bins in each layer seems to perform well in practice an RVar providing the zGetIU random tuple",
          "hierarchy": "Data Random Distribution Ziggurat",
          "module": "Data.Random.Distribution.Ziggurat",
          "name": "mkZigguratRec",
          "normalized": "Bool-\u003e(a-\u003ea)-\u003e(a-\u003ea)-\u003e(a-\u003ea)-\u003ea-\u003eInt-\u003e(b c RVarT d(Int,a))-\u003eZiggurat e a",
          "package": "random-fu",
          "partial": "Ziggurat Rec",
          "signature": "Bool-\u003e(t-\u003et)-\u003e(t-\u003et)-\u003e(t-\u003et)-\u003et-\u003eInt-\u003e(forall m. RVarT m(Int,t))-\u003eZiggurat v t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Ziggurat.html#v:mkZigguratRec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild the tables to implement the \"ziggurat algorithm\" devised by \n Marsaglia & Tang, attempting to automatically compute the R and V\n values.\n\u003c/p\u003e\u003cp\u003eArguments:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e flag indicating whether to mirror the distribution\n\u003c/li\u003e\u003cli\u003e the (one-sided antitone) PDF, not necessarily normalized\n\u003c/li\u003e\u003cli\u003e the inverse of the PDF\n\u003c/li\u003e\u003cli\u003e the number of bins\n\u003c/li\u003e\u003cli\u003e R, the x value of the first bin\n\u003c/li\u003e\u003cli\u003e V, the volume of each bin\n\u003c/li\u003e\u003cli\u003e an RVar providing the \u003ccode\u003e\u003ca\u003ezGetIU\u003c/a\u003e\u003c/code\u003e random tuple\n\u003c/li\u003e\u003cli\u003e an RVar sampling from the tail (the region where x \u003e R)\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Random.Distribution.Ziggurat",
          "name": "mkZiggurat_",
          "package": "random-fu",
          "signature": "Bool -\u003e (t -\u003e t) -\u003e (t -\u003e t) -\u003e Int -\u003e t -\u003e t -\u003e (forall m.  RVarT m (Int, t)) -\u003e (forall m.  RVarT m t) -\u003e Ziggurat v t",
          "source": "src/Data-Random-Distribution-Ziggurat.html#mkZiggurat_",
          "type": "function"
        },
        "index": {
          "description": "Build the tables to implement the ziggurat algorithm devised by Marsaglia Tang attempting to automatically compute the and values Arguments flag indicating whether to mirror the distribution the one-sided antitone PDF not necessarily normalized the inverse of the PDF the number of bins the value of the first bin the volume of each bin an RVar providing the zGetIU random tuple an RVar sampling from the tail the region where",
          "hierarchy": "Data Random Distribution Ziggurat",
          "module": "Data.Random.Distribution.Ziggurat",
          "name": "mkZiggurat_",
          "normalized": "Bool-\u003e(a-\u003ea)-\u003e(a-\u003ea)-\u003eInt-\u003ea-\u003ea-\u003e(b c RVarT d(Int,a))-\u003e(b c RVarT d a)-\u003eZiggurat e a",
          "package": "random-fu",
          "partial": "Ziggurat",
          "signature": "Bool-\u003e(t-\u003et)-\u003e(t-\u003et)-\u003eInt-\u003et-\u003et-\u003e(forall m. RVarT m(Int,t))-\u003e(forall m. RVarT m t)-\u003eZiggurat v t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Ziggurat.html#v:mkZiggurat_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample from the distribution encoded in a \u003ccode\u003e\u003ca\u003eZiggurat\u003c/a\u003e\u003c/code\u003e data structure.\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Ziggurat",
          "name": "runZiggurat",
          "package": "random-fu",
          "signature": "Ziggurat v a -\u003e RVarT m a",
          "source": "src/Data-Random-Distribution-Ziggurat.html#runZiggurat",
          "type": "function"
        },
        "index": {
          "description": "Sample from the distribution encoded in Ziggurat data structure",
          "hierarchy": "Data Random Distribution Ziggurat",
          "module": "Data.Random.Distribution.Ziggurat",
          "name": "runZiggurat",
          "normalized": "Ziggurat a b-\u003eRVarT c b",
          "package": "random-fu",
          "partial": "Ziggurat",
          "signature": "Ziggurat v a-\u003eRVarT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Ziggurat.html#v:runZiggurat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe (one-sided antitone) PDF, not necessarily normalized\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Ziggurat",
          "name": "zFunc",
          "package": "random-fu",
          "signature": "(t -\u003e t)",
          "source": "src/Data-Random-Distribution-Ziggurat.html#Ziggurat",
          "type": "function"
        },
        "index": {
          "description": "The one-sided antitone PDF not necessarily normalized",
          "hierarchy": "Data Random Distribution Ziggurat",
          "module": "Data.Random.Distribution.Ziggurat",
          "name": "zFunc",
          "normalized": "(a-\u003ea)",
          "package": "random-fu",
          "partial": "Func",
          "signature": "(t-\u003et)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Ziggurat.html#v:zFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn RVar providing a random tuple consisting of:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e a bin index, uniform over [0,c) :: Int (where \u003ccode\u003ec\u003c/code\u003e is the\n    number of bins in the tables)\n\u003c/li\u003e\u003cli\u003e a uniformly distributed fractional value, from -1 to 1 \n    if not mirrored, from 0 to 1 otherwise.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis is provided as a single \u003ccode\u003e\u003ca\u003eRVar\u003c/a\u003e\u003c/code\u003e because it can be implemented\n more efficiently than naively sampling 2 separate values - a\n single random word (64 bits) can be efficiently converted to\n a double (using 52 bits) and a bin number (using up to 12 bits),\n for example.\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Ziggurat",
          "name": "zGetIU",
          "package": "random-fu",
          "signature": "(forall m.  RVarT m (Int, t))",
          "source": "src/Data-Random-Distribution-Ziggurat.html#Ziggurat",
          "type": "function"
        },
        "index": {
          "description": "An RVar providing random tuple consisting of bin index uniform over Int where is the number of bins in the tables uniformly distributed fractional value from to if not mirrored from to otherwise This is provided as single RVar because it can be implemented more efficiently than naively sampling separate values single random word bits can be efficiently converted to double using bits and bin number using up to bits for example",
          "hierarchy": "Data Random Distribution Ziggurat",
          "module": "Data.Random.Distribution.Ziggurat",
          "name": "zGetIU",
          "normalized": "(a b RVarT c(Int,d))",
          "package": "random-fu",
          "partial": "Get IU",
          "signature": "(forall m. RVarT m(Int,t))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Ziggurat.html#v:zGetIU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA flag indicating whether the distribution should be\n mirrored about the origin (the ziggurat algorithm in\n its native form only samples from one-sided distributions.\n By mirroring, we can extend it to symmetric distributions\n such as the normal distribution)\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Ziggurat",
          "name": "zMirror",
          "package": "random-fu",
          "signature": "Bool",
          "source": "src/Data-Random-Distribution-Ziggurat.html#Ziggurat",
          "type": "function"
        },
        "index": {
          "description": "flag indicating whether the distribution should be mirrored about the origin the ziggurat algorithm in its native form only samples from one-sided distributions By mirroring we can extend it to symmetric distributions such as the normal distribution",
          "hierarchy": "Data Random Distribution Ziggurat",
          "module": "Data.Random.Distribution.Ziggurat",
          "name": "zMirror",
          "package": "random-fu",
          "partial": "Mirror",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Ziggurat.html#v:zMirror"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe X locations of each bin in the distribution.  Bin 0 is the\n \u003ccode\u003einfinite\u003c/code\u003e one.\n\u003c/p\u003e\u003cp\u003eIn the case of bin 0, the value given is sort of magical - x[0] is\n defined to be V/f(R).  It's not actually the location of any bin, \n but a value computed to make the algorithm more concise and slightly \n faster by not needing to specially-handle bin 0 quite as often.\n If you really need to know why it works, see the \u003ccode\u003e\u003ca\u003erunZiggurat\u003c/a\u003e\u003c/code\u003e\n source or \"the literature\" - it's a fairly standard setup.\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Ziggurat",
          "name": "zTable_xs",
          "package": "random-fu",
          "signature": "(v t)",
          "source": "src/Data-Random-Distribution-Ziggurat.html#Ziggurat",
          "type": "function"
        },
        "index": {
          "description": "The locations of each bin in the distribution Bin is the infinite one In the case of bin the value given is sort of magical is defined to be It not actually the location of any bin but value computed to make the algorithm more concise and slightly faster by not needing to specially-handle bin quite as often If you really need to know why it works see the runZiggurat source or the literature it fairly standard setup",
          "hierarchy": "Data Random Distribution Ziggurat",
          "module": "Data.Random.Distribution.Ziggurat",
          "name": "zTable_xs",
          "package": "random-fu",
          "partial": "Table",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Ziggurat.html#v:zTable_xs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe ratio of each bin's Y value to the next bin's Y value\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Ziggurat",
          "name": "zTable_y_ratios",
          "package": "random-fu",
          "signature": "(v t)",
          "source": "src/Data-Random-Distribution-Ziggurat.html#Ziggurat",
          "type": "function"
        },
        "index": {
          "description": "The ratio of each bin value to the next bin value",
          "hierarchy": "Data Random Distribution Ziggurat",
          "module": "Data.Random.Distribution.Ziggurat",
          "name": "zTable_y_ratios",
          "package": "random-fu",
          "partial": "Table",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Ziggurat.html#v:zTable_y_ratios"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Y value (zFunc x) of each bin\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Ziggurat",
          "name": "zTable_ys",
          "package": "random-fu",
          "signature": "(v t)",
          "source": "src/Data-Random-Distribution-Ziggurat.html#Ziggurat",
          "type": "function"
        },
        "index": {
          "description": "The value zFunc of each bin",
          "hierarchy": "Data Random Distribution Ziggurat",
          "module": "Data.Random.Distribution.Ziggurat",
          "name": "zTable_ys",
          "package": "random-fu",
          "partial": "Table",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Ziggurat.html#v:zTable_ys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe distribution for the final \"virtual\" bin\n (the ziggurat algorithm does not handle distributions\n that wander off to infinity, so another distribution is needed\n to handle the last \"bin\" that stretches to infinity)\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Ziggurat",
          "name": "zTailDist",
          "package": "random-fu",
          "signature": "forall m.  RVarT m t",
          "source": "src/Data-Random-Distribution-Ziggurat.html#Ziggurat",
          "type": "function"
        },
        "index": {
          "description": "The distribution for the final virtual bin the ziggurat algorithm does not handle distributions that wander off to infinity so another distribution is needed to handle the last bin that stretches to infinity",
          "hierarchy": "Data Random Distribution Ziggurat",
          "module": "Data.Random.Distribution.Ziggurat",
          "name": "zTailDist",
          "package": "random-fu",
          "partial": "Tail Dist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Ziggurat.html#v:zTailDist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA copy of the uniform RVar generator for the base type,\n so that \u003ccode\u003eDistribution Uniform t\u003c/code\u003e is not needed when sampling\n from a Ziggurat (makes it a bit more self-contained).\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Ziggurat",
          "name": "zUniform",
          "package": "random-fu",
          "signature": "(forall m.  t -\u003e t -\u003e RVarT m t)",
          "source": "src/Data-Random-Distribution-Ziggurat.html#Ziggurat",
          "type": "function"
        },
        "index": {
          "description": "copy of the uniform RVar generator for the base type so that Distribution Uniform is not needed when sampling from Ziggurat makes it bit more self-contained",
          "hierarchy": "Data Random Distribution Ziggurat",
          "module": "Data.Random.Distribution.Ziggurat",
          "name": "zUniform",
          "normalized": "(a b c-\u003ec-\u003eRVarT d c)",
          "package": "random-fu",
          "partial": "Uniform",
          "signature": "(forall m. t-\u003et-\u003eRVarT m t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution-Ziggurat.html#v:zUniform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution",
          "name": "Distribution",
          "package": "random-fu",
          "source": "src/Data-Random-Distribution.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Random Distribution",
          "module": "Data.Random.Distribution",
          "name": "Distribution",
          "package": "random-fu",
          "partial": "Distribution",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution",
          "name": "CDF",
          "package": "random-fu",
          "source": "src/Data-Random-Distribution.html#CDF",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Random Distribution",
          "module": "Data.Random.Distribution",
          "name": "CDF",
          "package": "random-fu",
          "partial": "CDF",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution.html#t:CDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eDistribution\u003c/a\u003e\u003c/code\u003e is a data representation of a random variable's probability\n structure.  For example, in \u003ca\u003eData.Random.Distribution.Normal\u003c/a\u003e, the \u003ccode\u003eNormal\u003c/code\u003e\n distribution is defined as:\n\u003c/p\u003e\u003cpre\u003e data Normal a\n     = StdNormal\n     | Normal a a\n\u003c/pre\u003e\u003cp\u003eWhere the two parameters of the \u003ccode\u003eNormal\u003c/code\u003e data constructor are the mean and\n standard deviation of the random variable, respectively.  To make use of\n the \u003ccode\u003eNormal\u003c/code\u003e type, one can convert it to an \u003ccode\u003e\u003ca\u003ervar\u003c/a\u003e\u003c/code\u003e and manipulate it or\n sample it directly:\n\u003c/p\u003e\u003cpre\u003e x \u003c- sample (rvar (Normal 10 2))\n x \u003c- sample (Normal 10 2)\n\u003c/pre\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eDistribution\u003c/a\u003e\u003c/code\u003e is typically more transparent than an \u003ccode\u003e\u003ca\u003eRVar\u003c/a\u003e\u003c/code\u003e\n but less composable (precisely because of that transparency).  There are \n several practical uses for types implementing \u003ccode\u003e\u003ca\u003eDistribution\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Typically, a \u003ccode\u003e\u003ca\u003eDistribution\u003c/a\u003e\u003c/code\u003e will expose several parameters of a standard \n mathematical model of a probability distribution, such as mean and std deviation for\n the normal distribution.  Thus, they can be manipulated analytically using\n mathematical insights about the distributions they represent.  For example,\n a collection of bernoulli variables could be simplified into a (hopefully) smaller\n collection of binomial variables.\n\u003c/li\u003e\u003cli\u003e Because they are generally just containers for parameters, they can be\n easily serialized to persistent storage or read from user-supplied \n configurations (eg, initialization data for a simulation).\n\u003c/li\u003e\u003cli\u003e If a type additionally implements the \u003ccode\u003e\u003ca\u003eCDF\u003c/a\u003e\u003c/code\u003e subclass, which extends\n \u003ccode\u003e\u003ca\u003eDistribution\u003c/a\u003e\u003c/code\u003e with a cumulative density function, an arbitrary random\n variable \u003ccode\u003ex\u003c/code\u003e can be tested against the distribution by testing\n \u003ccode\u003efmap (cdf dist) x\u003c/code\u003e for uniformity.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eOn the other hand, most \u003ccode\u003e\u003ca\u003eDistribution\u003c/a\u003e\u003c/code\u003es will not be closed under all the\n same operations as \u003ccode\u003e\u003ca\u003eRVar\u003c/a\u003e\u003c/code\u003e (which, being a monad, has a fully turing-complete\n internal computational model).  The sum of two uniformly-distributed \n variables, for example, is not uniformly distributed.  To support general \n composition, the \u003ccode\u003e\u003ca\u003eDistribution\u003c/a\u003e\u003c/code\u003e class defines a function \u003ccode\u003e\u003ca\u003ervar\u003c/a\u003e\u003c/code\u003e to \n construct the more-abstract and more-composable \u003ccode\u003e\u003ca\u003eRVar\u003c/a\u003e\u003c/code\u003e representation \n of a random variable.\n\u003c/p\u003e",
          "module": "Data.Random.Distribution",
          "name": "Distribution",
          "package": "random-fu",
          "source": "src/Data-Random-Distribution.html#Distribution",
          "type": "class"
        },
        "index": {
          "description": "Distribution is data representation of random variable probability structure For example in Data.Random.Distribution.Normal the Normal distribution is defined as data Normal StdNormal Normal Where the two parameters of the Normal data constructor are the mean and standard deviation of the random variable respectively To make use of the Normal type one can convert it to an rvar and manipulate it or sample it directly sample rvar Normal sample Normal Distribution is typically more transparent than an RVar but less composable precisely because of that transparency There are several practical uses for types implementing Distribution Typically Distribution will expose several parameters of standard mathematical model of probability distribution such as mean and std deviation for the normal distribution Thus they can be manipulated analytically using mathematical insights about the distributions they represent For example collection of bernoulli variables could be simplified into hopefully smaller collection of binomial variables Because they are generally just containers for parameters they can be easily serialized to persistent storage or read from user-supplied configurations eg initialization data for simulation If type additionally implements the CDF subclass which extends Distribution with cumulative density function an arbitrary random variable can be tested against the distribution by testing fmap cdf dist for uniformity On the other hand most Distribution will not be closed under all the same operations as RVar which being monad has fully turing-complete internal computational model The sum of two uniformly-distributed variables for example is not uniformly distributed To support general composition the Distribution class defines function rvar to construct the more-abstract and more-composable RVar representation of random variable",
          "hierarchy": "Data Random Distribution",
          "module": "Data.Random.Distribution",
          "name": "Distribution",
          "package": "random-fu",
          "partial": "Distribution",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution.html#t:Distribution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the cumulative distribution function of this distribution.\n That is, a function taking \u003ccode\u003ex :: t\u003c/code\u003e to the probability that the next\n sample will return a value less than or equal to x, according to some\n order or partial order (not necessarily an obvious one).\n\u003c/p\u003e\u003cp\u003eIn the case where \u003ccode\u003et\u003c/code\u003e is an instance of Ord, \u003ccode\u003e\u003ca\u003ecdf\u003c/a\u003e\u003c/code\u003e should correspond\n to the CDF with respect to that order.\n\u003c/p\u003e\u003cp\u003eIn other cases, \u003ccode\u003e\u003ca\u003ecdf\u003c/a\u003e\u003c/code\u003e is only required to satisfy the following law:\n \u003ccode\u003efmap (cdf d) (rvar d)\u003c/code\u003e\n must be uniformly distributed over (0,1).  Inclusion of either endpoint is optional,\n though the preferred range is (0,1].\n\u003c/p\u003e\u003cp\u003eNote that this definition requires that  \u003ccode\u003e\u003ca\u003ecdf\u003c/a\u003e\u003c/code\u003e for a product type \n should _not_ be a joint CDF as commonly defined, as that definition \n violates both conditions.\n Instead, it should be a univariate CDF over the product type.  That is,\n it should represent the CDF with respect to the lexicographic order\n of the product.\n\u003c/p\u003e\u003cp\u003eThe present specification is probably only really useful for testing\n conformance of a variable to its target distribution, and I am open to\n suggestions for more-useful specifications (especially with regard to\n the interaction with product types).\n\u003c/p\u003e",
          "module": "Data.Random.Distribution",
          "name": "cdf",
          "package": "random-fu",
          "signature": "d t -\u003e t -\u003e Double",
          "source": "src/Data-Random-Distribution.html#cdf",
          "type": "method"
        },
        "index": {
          "description": "Return the cumulative distribution function of this distribution That is function taking to the probability that the next sample will return value less than or equal to according to some order or partial order not necessarily an obvious one In the case where is an instance of Ord cdf should correspond to the CDF with respect to that order In other cases cdf is only required to satisfy the following law fmap cdf rvar must be uniformly distributed over Inclusion of either endpoint is optional though the preferred range is Note that this definition requires that cdf for product type should not be joint CDF as commonly defined as that definition violates both conditions Instead it should be univariate CDF over the product type That is it should represent the CDF with respect to the lexicographic order of the product The present specification is probably only really useful for testing conformance of variable to its target distribution and am open to suggestions for more-useful specifications especially with regard to the interaction with product types",
          "hierarchy": "Data Random Distribution",
          "module": "Data.Random.Distribution",
          "name": "cdf",
          "normalized": "a b-\u003eb-\u003eDouble",
          "package": "random-fu",
          "signature": "d t-\u003et-\u003eDouble",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution.html#v:cdf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a random variable with this distribution.\n\u003c/p\u003e",
          "module": "Data.Random.Distribution",
          "name": "rvar",
          "package": "random-fu",
          "signature": "d t -\u003e RVar t",
          "source": "src/Data-Random-Distribution.html#rvar",
          "type": "method"
        },
        "index": {
          "description": "Return random variable with this distribution",
          "hierarchy": "Data Random Distribution",
          "module": "Data.Random.Distribution",
          "name": "rvar",
          "normalized": "a b-\u003eRVar b",
          "package": "random-fu",
          "signature": "d t-\u003eRVar t",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution.html#v:rvar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a random variable with the given distribution, pre-lifted to an arbitrary \u003ccode\u003e\u003ca\u003eRVarT\u003c/a\u003e\u003c/code\u003e.\n Any arbitrary \u003ccode\u003e\u003ca\u003eRVar\u003c/a\u003e\u003c/code\u003e can also be converted to an 'RVarT m' for an arbitrary \u003ccode\u003em\u003c/code\u003e, using\n either \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003esample\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Random.Distribution",
          "name": "rvarT",
          "package": "random-fu",
          "signature": "d t -\u003e RVarT n t",
          "source": "src/Data-Random-Distribution.html#rvarT",
          "type": "method"
        },
        "index": {
          "description": "Return random variable with the given distribution pre-lifted to an arbitrary RVarT Any arbitrary RVar can also be converted to an RVarT for an arbitrary using either lift or sample",
          "hierarchy": "Data Random Distribution",
          "module": "Data.Random.Distribution",
          "name": "rvarT",
          "normalized": "a b-\u003eRVarT c b",
          "package": "random-fu",
          "signature": "d t-\u003eRVarT n t",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Distribution.html#v:rvarT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Internal.Find",
          "name": "Find",
          "package": "random-fu",
          "source": "src/Data-Random-Internal-Find.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Random Internal Find",
          "module": "Data.Random.Internal.Find",
          "name": "Find",
          "package": "random-fu",
          "partial": "Find",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Internal-Find.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Internal.Find",
          "name": "findMax",
          "package": "random-fu",
          "signature": "(a -\u003e Bool) -\u003e a",
          "source": "src/Data-Random-Internal-Find.html#findMax",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Internal Find",
          "module": "Data.Random.Internal.Find",
          "name": "findMax",
          "normalized": "(a-\u003eBool)-\u003ea",
          "package": "random-fu",
          "partial": "Max",
          "signature": "(a-\u003eBool)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Internal-Find.html#v:findMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an upward-closed predicate on an ordered Fractional type,\n find the smallest value satisfying the predicate.\n\u003c/p\u003e",
          "module": "Data.Random.Internal.Find",
          "name": "findMin",
          "package": "random-fu",
          "signature": "(a -\u003e Bool) -\u003e a",
          "source": "src/Data-Random-Internal-Find.html#findMin",
          "type": "function"
        },
        "index": {
          "description": "Given an upward-closed predicate on an ordered Fractional type find the smallest value satisfying the predicate",
          "hierarchy": "Data Random Internal Find",
          "module": "Data.Random.Internal.Find",
          "name": "findMin",
          "normalized": "(a-\u003eBool)-\u003ea",
          "package": "random-fu",
          "partial": "Min",
          "signature": "(a-\u003eBool)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Internal-Find.html#v:findMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an upward-closed predicate on an ordered Fractional type,\n find the smallest value satisfying the predicate.  Starts at the\n specified point with the specified stepsize, performs an exponential\n search out from there until it finds an interval bracketing the\n change-point of the predicate, and then performs a bisection search\n to isolate the change point.  Note that infinitely-divisible domains \n such as \u003ccode\u003e\u003ca\u003eRational\u003c/a\u003e\u003c/code\u003e cannot be searched by this function because it does\n not terminate until it reaches a point where further subdivision of the\n interval has no effect.\n\u003c/p\u003e",
          "module": "Data.Random.Internal.Find",
          "name": "findMinFrom",
          "package": "random-fu",
          "signature": "a -\u003e a -\u003e (a -\u003e Bool) -\u003e a",
          "source": "src/Data-Random-Internal-Find.html#findMinFrom",
          "type": "function"
        },
        "index": {
          "description": "Given an upward-closed predicate on an ordered Fractional type find the smallest value satisfying the predicate Starts at the specified point with the specified stepsize performs an exponential search out from there until it finds an interval bracketing the change-point of the predicate and then performs bisection search to isolate the change point Note that infinitely-divisible domains such as Rational cannot be searched by this function because it does not terminate until it reaches point where further subdivision of the interval has no effect",
          "hierarchy": "Data Random Internal Find",
          "module": "Data.Random.Internal.Find",
          "name": "findMinFrom",
          "normalized": "a-\u003ea-\u003e(a-\u003eBool)-\u003ea",
          "package": "random-fu",
          "partial": "Min From",
          "signature": "a-\u003ea-\u003e(a-\u003eBool)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Internal-Find.html#v:findMinFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Internal.Fixed",
          "name": "Fixed",
          "package": "random-fu",
          "source": "src/Data-Random-Internal-Fixed.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Random Internal Fixed",
          "module": "Data.Random.Internal.Fixed",
          "name": "Fixed",
          "package": "random-fu",
          "partial": "Fixed",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Internal-Fixed.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eFixed\u003c/a\u003e\u003c/code\u003e type doesn't expose its constructors, but I need a way to\n convert them to and from their raw representation in order to sample\n them.  As long as \u003ccode\u003e\u003ca\u003eFixed\u003c/a\u003e\u003c/code\u003e is a newtype wrapping \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emkFixed\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eunMkFixed\u003c/a\u003e\u003c/code\u003e as defined here will work.  Both are implemented using \n \u003ccode\u003e\u003ca\u003eunsafeCoerce\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Random.Internal.Fixed",
          "name": "mkFixed",
          "package": "random-fu",
          "signature": "Integer -\u003e Fixed r",
          "source": "src/Data-Random-Internal-Fixed.html#mkFixed",
          "type": "function"
        },
        "index": {
          "description": "The Fixed type doesn expose its constructors but need way to convert them to and from their raw representation in order to sample them As long as Fixed is newtype wrapping Integer mkFixed and unMkFixed as defined here will work Both are implemented using unsafeCoerce",
          "hierarchy": "Data Random Internal Fixed",
          "module": "Data.Random.Internal.Fixed",
          "name": "mkFixed",
          "normalized": "Integer-\u003eFixed a",
          "package": "random-fu",
          "partial": "Fixed",
          "signature": "Integer-\u003eFixed r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Internal-Fixed.html#v:mkFixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Internal.Fixed",
          "name": "resolutionOf",
          "package": "random-fu",
          "signature": "f r -\u003e Integer",
          "source": "src/Data-Random-Internal-Fixed.html#resolutionOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Internal Fixed",
          "module": "Data.Random.Internal.Fixed",
          "name": "resolutionOf",
          "normalized": "a b-\u003eInteger",
          "package": "random-fu",
          "partial": "Of",
          "signature": "f r-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Internal-Fixed.html#v:resolutionOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Internal.Fixed",
          "name": "resolutionOf2",
          "package": "random-fu",
          "signature": "f (g r) -\u003e Integer",
          "source": "src/Data-Random-Internal-Fixed.html#resolutionOf2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Internal Fixed",
          "module": "Data.Random.Internal.Fixed",
          "name": "resolutionOf2",
          "normalized": "a(b c)-\u003eInteger",
          "package": "random-fu",
          "partial": "Of",
          "signature": "f(g r)-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Internal-Fixed.html#v:resolutionOf2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Internal.Fixed",
          "name": "unMkFixed",
          "package": "random-fu",
          "signature": "Fixed r -\u003e Integer",
          "source": "src/Data-Random-Internal-Fixed.html#unMkFixed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Internal Fixed",
          "module": "Data.Random.Internal.Fixed",
          "name": "unMkFixed",
          "normalized": "Fixed a-\u003eInteger",
          "package": "random-fu",
          "partial": "Mk Fixed",
          "signature": "Fixed r-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Internal-Fixed.html#v:unMkFixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTemplate Haskell utility code to replicate instance declarations\n to cover large numbers of types.  I'm doing that rather than using\n class contexts because most Distribution instances need to cover\n multiple classes (such as Enum, Integral and Fractional) and that\n can't be done easily because of overlap.  \n\u003c/p\u003e\u003cp\u003eI experimented a bit with a convoluted type-level classification \n scheme, but I think this is simpler and easier to understand.  It \n makes the haddock docs more cluttered because of the combinatorial \n explosion of instances, but overall I think it's just more sane than \n anything else I've come up with yet.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Random.Internal.TH",
          "name": "TH",
          "package": "random-fu",
          "source": "src/Data-Random-Internal-TH.html",
          "type": "module"
        },
        "index": {
          "description": "Template Haskell utility code to replicate instance declarations to cover large numbers of types doing that rather than using class contexts because most Distribution instances need to cover multiple classes such as Enum Integral and Fractional and that can be done easily because of overlap experimented bit with convoluted type-level classification scheme but think this is simpler and easier to understand It makes the haddock docs more cluttered because of the combinatorial explosion of instances but overall think it just more sane than anything else ve come up with yet",
          "hierarchy": "Data Random Internal TH",
          "module": "Data.Random.Internal.TH",
          "name": "TH",
          "package": "random-fu",
          "partial": "TH",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Internal-TH.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNames of standard \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e types\n\u003c/p\u003e",
          "module": "Data.Random.Internal.TH",
          "name": "integralTypes",
          "package": "random-fu",
          "signature": "[Name]",
          "source": "src/Data-Random-Internal-TH.html#integralTypes",
          "type": "function"
        },
        "index": {
          "description": "Names of standard Integral types",
          "hierarchy": "Data Random Internal TH",
          "module": "Data.Random.Internal.TH",
          "name": "integralTypes",
          "normalized": "[Name]",
          "package": "random-fu",
          "partial": "Types",
          "signature": "[Name]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Internal-TH.html#v:integralTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNames of standard \u003ccode\u003e\u003ca\u003eRealFloat\u003c/a\u003e\u003c/code\u003e types\n\u003c/p\u003e",
          "module": "Data.Random.Internal.TH",
          "name": "realFloatTypes",
          "package": "random-fu",
          "signature": "[Name]",
          "source": "src/Data-Random-Internal-TH.html#realFloatTypes",
          "type": "function"
        },
        "index": {
          "description": "Names of standard RealFloat types",
          "hierarchy": "Data Random Internal TH",
          "module": "Data.Random.Internal.TH",
          "name": "realFloatTypes",
          "normalized": "[Name]",
          "package": "random-fu",
          "partial": "Float Types",
          "signature": "[Name]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Internal-TH.html#v:realFloatTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ereplicateInstances standin types decls\u003c/code\u003e will take the template-haskell\n \u003ccode\u003e\u003ca\u003eDec\u003c/a\u003e\u003c/code\u003es in \u003ccode\u003edecls\u003c/code\u003e and substitute every instance of the \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e \u003ccode\u003estandin\u003c/code\u003e with\n each \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003etypes\u003c/code\u003e, producing one copy of the \u003ccode\u003e\u003ca\u003eDec\u003c/a\u003e\u003c/code\u003es in \u003ccode\u003edecls\u003c/code\u003e for every\n \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003etypes\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example, \u003ccode\u003e\u003ca\u003eUniform\u003c/a\u003e\u003c/code\u003e has the following bit of TH code:\n\u003c/p\u003e\u003cpre\u003e $( replicateInstances ''Int integralTypes [d|\u003c/pre\u003e\u003cpre\u003e       instance Distribution Uniform Int   where rvar (Uniform a b) = integralUniform a b\u003c/pre\u003e\u003cpre\u003e       instance CDF Uniform Int            where cdf  (Uniform a b) = integralUniformCDF a b\u003c/pre\u003e\u003cpre\u003e   |])\u003c/pre\u003e\u003cp\u003eThis code takes those 2 instance declarations and creates identical ones for\n every type named in \u003ccode\u003e\u003ca\u003eintegralTypes\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Random.Internal.TH",
          "name": "replicateInstances",
          "package": "random-fu",
          "signature": "Name -\u003e [Name] -\u003e m [t] -\u003e m [t]",
          "source": "src/Data-Random-Internal-TH.html#replicateInstances",
          "type": "function"
        },
        "index": {
          "description": "replicateInstances standin types decls will take the template-haskell Dec in decls and substitute every instance of the Name standin with each Name in types producing one copy of the Dec in decls for every Name in types For example Uniform has the following bit of TH code replicateInstances Int integralTypes instance Distribution Uniform Int where rvar Uniform integralUniform instance CDF Uniform Int where cdf Uniform integralUniformCDF This code takes those instance declarations and creates identical ones for every type named in integralTypes",
          "hierarchy": "Data Random Internal TH",
          "module": "Data.Random.Internal.TH",
          "name": "replicateInstances",
          "normalized": "Name-\u003e[Name]-\u003ea[b]-\u003ea[b]",
          "package": "random-fu",
          "partial": "Instances",
          "signature": "Name-\u003e[Name]-\u003em[t]-\u003em[t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Internal-TH.html#v:replicateInstances"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Lift",
          "name": "Lift",
          "package": "random-fu",
          "source": "src/Data-Random-Lift.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Random Lift",
          "module": "Data.Random.Lift",
          "name": "Lift",
          "package": "random-fu",
          "partial": "Lift",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Lift.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class for \"liftable\" data structures. Conceptually\n an extension of \u003ccode\u003e\u003ca\u003eMonadTrans\u003c/a\u003e\u003c/code\u003e to allow deep lifting,\n but lifting need not be done between monads only. Eg lifting\n between \u003ccode\u003eApplicative\u003c/code\u003es is allowed.\n\u003c/p\u003e\u003cp\u003eFor instances where \u003ccode\u003em\u003c/code\u003e and \u003ccode\u003en\u003c/code\u003e have 'return'/'pure' defined,\n these instances must satisfy\n \u003ccode\u003elift (return x) == return x\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis form of \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e has an extremely general type and is used primarily to\n support \u003ccode\u003esample\u003c/code\u003e.  Its excessive generality is the main reason it's not\n exported from \u003ca\u003eData.Random\u003c/a\u003e.  \u003ccode\u003e\u003ca\u003eRVarT\u003c/a\u003e\u003c/code\u003e is, however, an instance of \n \u003ccode\u003e\u003ca\u003eMonadTrans\u003c/a\u003e\u003c/code\u003e, which in most cases is the preferred way\n to do the lifting.\n\u003c/p\u003e",
          "module": "Data.Random.Lift",
          "name": "Lift",
          "package": "random-fu",
          "source": "src/Data-Random-Lift.html#Lift",
          "type": "class"
        },
        "index": {
          "description": "class for liftable data structures Conceptually an extension of MonadTrans to allow deep lifting but lifting need not be done between monads only Eg lifting between Applicative is allowed For instances where and have return pure defined these instances must satisfy lift return return This form of lift has an extremely general type and is used primarily to support sample Its excessive generality is the main reason it not exported from Data.Random RVarT is however an instance of MonadTrans which in most cases is the preferred way to do the lifting",
          "hierarchy": "Data Random Lift",
          "module": "Data.Random.Lift",
          "name": "Lift",
          "package": "random-fu",
          "partial": "Lift",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Lift.html#t:Lift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Lift",
          "name": "lift",
          "package": "random-fu",
          "signature": "m a -\u003e n a",
          "source": "src/Data-Random-Lift.html#lift",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Random Lift",
          "module": "Data.Random.Lift",
          "name": "lift",
          "normalized": "a b-\u003ec b",
          "package": "random-fu",
          "signature": "m a-\u003en a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Lift.html#v:lift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.List",
          "name": "List",
          "package": "random-fu",
          "source": "src/Data-Random-List.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Random List",
          "module": "Data.Random.List",
          "name": "List",
          "package": "random-fu",
          "partial": "List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-List.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA random variable returning an arbitrary element of the given list.\n Every element has equal probability of being chosen.  Because it is a\n pure \u003ccode\u003e\u003ca\u003eRVar\u003c/a\u003e\u003c/code\u003e it has no memory - that is, it \"draws with replacement.\"\n\u003c/p\u003e",
          "module": "[\"Data.Random.List\",\"Data.Random\"]",
          "name": "randomElement",
          "package": "random-fu",
          "signature": "[a] -\u003e RVar a",
          "source": "src/Data-Random-List.html#randomElement",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/random-fu/docs/Data-Random-List.html#v:randomElement\",\"http://hackage.haskell.org/package/random-fu/docs/Data-Random.html#v:randomElement\"]"
        },
        "index": {
          "description": "random variable returning an arbitrary element of the given list Every element has equal probability of being chosen Because it is pure RVar it has no memory that is it draws with replacement",
          "hierarchy": "Data Random List",
          "module": "Data.Random.List",
          "name": "randomElement",
          "normalized": "[a]-\u003eRVar a",
          "package": "random-fu",
          "partial": "Element",
          "signature": "[a]-\u003eRVar a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-List.html#v:randomElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.List",
          "name": "randomElementT",
          "package": "random-fu",
          "signature": "[a] -\u003e RVarT m a",
          "source": "src/Data-Random-List.html#randomElementT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random List",
          "module": "Data.Random.List",
          "name": "randomElementT",
          "normalized": "[a]-\u003eRVarT b a",
          "package": "random-fu",
          "partial": "Element",
          "signature": "[a]-\u003eRVarT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-List.html#v:randomElementT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA random variable that returns the given list in an arbitrary shuffled\n order.  Every ordering of the list has equal probability.\n\u003c/p\u003e",
          "module": "[\"Data.Random.List\",\"Data.Random\"]",
          "name": "shuffle",
          "package": "random-fu",
          "signature": "[a] -\u003e RVar [a]",
          "source": "src/Data-Random-List.html#shuffle",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/random-fu/docs/Data-Random-List.html#v:shuffle\",\"http://hackage.haskell.org/package/random-fu/docs/Data-Random.html#v:shuffle\"]"
        },
        "index": {
          "description": "random variable that returns the given list in an arbitrary shuffled order Every ordering of the list has equal probability",
          "hierarchy": "Data Random List",
          "module": "Data.Random.List",
          "name": "shuffle",
          "normalized": "[a]-\u003eRVar[a]",
          "package": "random-fu",
          "signature": "[a]-\u003eRVar[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-List.html#v:shuffle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA random variable that shuffles a list of a known length (or a list\n prefix of the specified length). Useful for shuffling large lists when \n the length is known in advance.  Avoids needing to traverse the list to\n discover its length.  Each ordering has equal probability.\n\u003c/p\u003e",
          "module": "[\"Data.Random.List\",\"Data.Random\"]",
          "name": "shuffleN",
          "package": "random-fu",
          "signature": "Int -\u003e [a] -\u003e RVar [a]",
          "source": "src/Data-Random-List.html#shuffleN",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/random-fu/docs/Data-Random-List.html#v:shuffleN\",\"http://hackage.haskell.org/package/random-fu/docs/Data-Random.html#v:shuffleN\"]"
        },
        "index": {
          "description": "random variable that shuffles list of known length or list prefix of the specified length Useful for shuffling large lists when the length is known in advance Avoids needing to traverse the list to discover its length Each ordering has equal probability",
          "hierarchy": "Data Random List",
          "module": "Data.Random.List",
          "name": "shuffleN",
          "normalized": "Int-\u003e[a]-\u003eRVar[a]",
          "package": "random-fu",
          "signature": "Int-\u003e[a]-\u003eRVar[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-List.html#v:shuffleN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.List",
          "name": "shuffleNT",
          "package": "random-fu",
          "signature": "Int -\u003e [a] -\u003e RVarT m [a]",
          "source": "src/Data-Random-List.html#shuffleNT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random List",
          "module": "Data.Random.List",
          "name": "shuffleNT",
          "normalized": "Int-\u003e[a]-\u003eRVarT b[a]",
          "package": "random-fu",
          "partial": "NT",
          "signature": "Int-\u003e[a]-\u003eRVarT m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-List.html#v:shuffleNT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA random variable that selects N arbitrary elements of a list of known length M.\n\u003c/p\u003e",
          "module": "[\"Data.Random.List\",\"Data.Random\"]",
          "name": "shuffleNofM",
          "package": "random-fu",
          "signature": "Int -\u003e Int -\u003e [a] -\u003e RVar [a]",
          "source": "src/Data-Random-List.html#shuffleNofM",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/random-fu/docs/Data-Random-List.html#v:shuffleNofM\",\"http://hackage.haskell.org/package/random-fu/docs/Data-Random.html#v:shuffleNofM\"]"
        },
        "index": {
          "description": "random variable that selects arbitrary elements of list of known length",
          "hierarchy": "Data Random List",
          "module": "Data.Random.List",
          "name": "shuffleNofM",
          "normalized": "Int-\u003eInt-\u003e[a]-\u003eRVar[a]",
          "package": "random-fu",
          "partial": "Nof",
          "signature": "Int-\u003eInt-\u003e[a]-\u003eRVar[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-List.html#v:shuffleNofM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.List",
          "name": "shuffleNofMT",
          "package": "random-fu",
          "signature": "Int -\u003e Int -\u003e [a] -\u003e RVarT m [a]",
          "source": "src/Data-Random-List.html#shuffleNofMT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random List",
          "module": "Data.Random.List",
          "name": "shuffleNofMT",
          "normalized": "Int-\u003eInt-\u003e[a]-\u003eRVarT b[a]",
          "package": "random-fu",
          "partial": "Nof MT",
          "signature": "Int-\u003eInt-\u003e[a]-\u003eRVarT m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-List.html#v:shuffleNofMT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.List",
          "name": "shuffleT",
          "package": "random-fu",
          "signature": "[a] -\u003e RVarT m [a]",
          "source": "src/Data-Random-List.html#shuffleT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random List",
          "module": "Data.Random.List",
          "name": "shuffleT",
          "normalized": "[a]-\u003eRVarT b[a]",
          "package": "random-fu",
          "signature": "[a]-\u003eRVarT m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-List.html#v:shuffleT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.RVar",
          "name": "RVar",
          "package": "random-fu",
          "source": "src/Data-Random-RVar.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Random RVar",
          "module": "Data.Random.RVar",
          "name": "RVar",
          "package": "random-fu",
          "partial": "RVar",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-RVar.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn opaque type modeling a \"random variable\" - a value \n which depends on the outcome of some random event.  \u003ccode\u003e\u003ca\u003eRVar\u003c/a\u003e\u003c/code\u003es \n can be conveniently defined by an imperative-looking style:\n\u003c/p\u003e\u003cpre\u003e normalPair =  do\n     u \u003c- stdUniform\n     t \u003c- stdUniform\n     let r = sqrt (-2 * log u)\n         theta = (2 * pi) * t\n         \n         x = r * cos theta\n         y = r * sin theta\n     return (x,y)\n\u003c/pre\u003e\u003cp\u003eOR by a more applicative style:\n\u003c/p\u003e\u003cpre\u003e logNormal = exp \u003c$\u003e stdNormal\n\u003c/pre\u003e\u003cp\u003eOnce defined (in any style), there are several ways to sample \u003ccode\u003e\u003ca\u003eRVar\u003c/a\u003e\u003c/code\u003es:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e In a monad, using a \u003ccode\u003e\u003ca\u003eRandomSource\u003c/a\u003e\u003c/code\u003e:\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e runRVar (uniform 1 100) DevRandom :: IO Int\n\u003c/pre\u003e\u003cul\u003e\u003cli\u003e In a monad, using a \u003ccode\u003e\u003ca\u003eMonadRandom\u003c/a\u003e\u003c/code\u003e instance:\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e sampleRVar (uniform 1 100) :: State PureMT Int\n\u003c/pre\u003e\u003cul\u003e\u003cli\u003e As a pure function transforming a functional RNG:\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e sampleState (uniform 1 100) :: StdGen -\u003e (Int, StdGen)\n\u003c/pre\u003e\u003cp\u003e(where \u003ccode\u003esampleState = runState . sampleRVar\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Data.Random.RVar",
          "name": "RVar",
          "package": "random-fu",
          "type": "type"
        },
        "index": {
          "description": "An opaque type modeling random variable value which depends on the outcome of some random event RVar can be conveniently defined by an imperative-looking style normalPair do stdUniform stdUniform let sqrt log theta pi cos theta sin theta return OR by more applicative style logNormal exp stdNormal Once defined in any style there are several ways to sample RVar In monad using RandomSource runRVar uniform DevRandom IO Int In monad using MonadRandom instance sampleRVar uniform State PureMT Int As pure function transforming functional RNG sampleState uniform StdGen Int StdGen where sampleState runState sampleRVar",
          "hierarchy": "Data Random RVar",
          "module": "Data.Random.RVar",
          "name": "RVar",
          "package": "random-fu",
          "partial": "RVar",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-RVar.html#t:RVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA random variable with access to operations in an underlying monad.  Useful\n examples include any form of state for implementing random processes with hysteresis,\n or writer monads for implementing tracing of complicated algorithms.\n\u003c/p\u003e\u003cp\u003eFor example, a simple random walk can be implemented as an \u003ccode\u003e\u003ca\u003eRVarT\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e value:\n\u003c/p\u003e\u003cpre\u003e rwalkIO :: IO (RVarT IO Double)\n rwalkIO d = do\n     lastVal \u003c- newIORef 0\n     \n     let x = do\n             prev    \u003c- lift (readIORef lastVal)\n             change  \u003c- rvarT StdNormal\n             \n             let new = prev + change\n             lift (writeIORef lastVal new)\n             return new\n         \n     return x\n\u003c/pre\u003e\u003cp\u003eTo run the random walk it must first be initialized, after which it can be sampled as usual:\n\u003c/p\u003e\u003cpre\u003e do\n     rw \u003c- rwalkIO\n     x \u003c- sampleRVarT rw\n     y \u003c- sampleRVarT rw\n     ...\n\u003c/pre\u003e\u003cp\u003eThe same random-walk process as above can be implemented using MTL types\n as follows (using \u003ccode\u003eimport Control.Monad.Trans as MTL\u003c/code\u003e):\n\u003c/p\u003e\u003cpre\u003e rwalkState :: RVarT (State Double) Double\n rwalkState = do\n     prev \u003c- MTL.lift get\n     change  \u003c- rvarT StdNormal\n     \n     let new = prev + change\n     MTL.lift (put new)\n     return new\n\u003c/pre\u003e\u003cp\u003eInvocation is straightforward (although a bit noisy) if you're used to MTL:\n\u003c/p\u003e\u003cpre\u003e rwalk :: Int -\u003e Double -\u003e StdGen -\u003e ([Double], StdGen)\n rwalk count start gen = \n     flip evalState start .\n         flip runStateT gen .\n             sampleRVarTWith MTL.lift $\n                 replicateM count rwalkState\n\u003c/pre\u003e",
          "module": "Data.Random.RVar",
          "name": "RVarT",
          "package": "random-fu",
          "type": "data"
        },
        "index": {
          "description": "random variable with access to operations in an underlying monad Useful examples include any form of state for implementing random processes with hysteresis or writer monads for implementing tracing of complicated algorithms For example simple random walk can be implemented as an RVarT IO value rwalkIO IO RVarT IO Double rwalkIO do lastVal newIORef let do prev lift readIORef lastVal change rvarT StdNormal let new prev change lift writeIORef lastVal new return new return To run the random walk it must first be initialized after which it can be sampled as usual do rw rwalkIO sampleRVarT rw sampleRVarT rw The same random-walk process as above can be implemented using MTL types as follows using import Control.Monad.Trans as MTL rwalkState RVarT State Double Double rwalkState do prev MTL.lift get change rvarT StdNormal let new prev change MTL.lift put new return new Invocation is straightforward although bit noisy if you re used to MTL rwalk Int Double StdGen Double StdGen rwalk count start gen flip evalState start flip runStateT gen sampleRVarTWith MTL.lift replicateM count rwalkState",
          "hierarchy": "Data Random RVar",
          "module": "Data.Random.RVar",
          "name": "RVarT",
          "package": "random-fu",
          "partial": "RVar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-RVar.html#t:RVarT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\"Run\" an \u003ccode\u003e\u003ca\u003eRVar\u003c/a\u003e\u003c/code\u003e - samples the random variable from the provided\n source of entropy.\n\u003c/p\u003e",
          "module": "[\"Data.Random.RVar\",\"Data.Random\"]",
          "name": "runRVar",
          "package": "random-fu",
          "signature": "RVar a -\u003e s -\u003e m a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/random-fu/docs/Data-Random-RVar.html#v:runRVar\",\"http://hackage.haskell.org/package/random-fu/docs/Data-Random.html#v:runRVar\"]"
        },
        "index": {
          "description": "Run an RVar samples the random variable from the provided source of entropy",
          "hierarchy": "Data Random RVar",
          "module": "Data.Random.RVar",
          "name": "runRVar",
          "normalized": "RVar a-\u003eb-\u003ec a",
          "package": "random-fu",
          "partial": "RVar",
          "signature": "RVar a-\u003es-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-RVar.html#v:runRVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erunRVarTWith\u003c/a\u003e\u003c/code\u003e, but using an implicit lifting (provided by the \n \u003ccode\u003e\u003ca\u003eLift\u003c/a\u003e\u003c/code\u003e class)\n\u003c/p\u003e",
          "module": "[\"Data.Random.RVar\",\"Data.Random\"]",
          "name": "runRVarT",
          "package": "random-fu",
          "signature": "RVarT n a -\u003e s -\u003e m a",
          "source": "src/Data-Random-RVar.html#runRVarT",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/random-fu/docs/Data-Random-RVar.html#v:runRVarT\",\"http://hackage.haskell.org/package/random-fu/docs/Data-Random.html#v:runRVarT\"]"
        },
        "index": {
          "description": "Like runRVarTWith but using an implicit lifting provided by the Lift class",
          "hierarchy": "Data Random RVar",
          "module": "Data.Random.RVar",
          "name": "runRVarT",
          "normalized": "RVarT a b-\u003ec-\u003ed b",
          "package": "random-fu",
          "partial": "RVar",
          "signature": "RVarT n a-\u003es-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-RVar.html#v:runRVarT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\"Runs\" an \u003ccode\u003e\u003ca\u003eRVarT\u003c/a\u003e\u003c/code\u003e, sampling the random variable it defines.\n\u003c/p\u003e\u003cp\u003eThe first argument lifts the base monad into the sampling monad.  This \n operation must obey the \"monad transformer\" laws:\n\u003c/p\u003e\u003cpre\u003e lift . return = return\n lift (x \u003e\u003e= f) = (lift x) \u003e\u003e= (lift . f)\n\u003c/pre\u003e\u003cp\u003eOne example of a useful non-standard lifting would be one that takes\n \u003ccode\u003eState s\u003c/code\u003e to another monad with a different state representation (such as\n \u003ccode\u003eIO\u003c/code\u003e with the state mapped to an \u003ccode\u003eIORef\u003c/code\u003e):\n\u003c/p\u003e\u003cpre\u003e embedState :: (Monad m) =\u003e m s -\u003e (s -\u003e m ()) -\u003e State s a -\u003e m a\n embedState get put = \\m -\u003e do\n     s \u003c- get\n     (res,s) \u003c- return (runState m s)\n     put s\n     return res\n\u003c/pre\u003e\u003cp\u003eThe ability to lift is very important - without it, every \u003ccode\u003e\u003ca\u003eRVar\u003c/a\u003e\u003c/code\u003e would have\n to either be given access to the full capability of the monad in which it\n will eventually be sampled (which, incidentally, would also have to be \n monomorphic so you couldn't sample one \u003ccode\u003e\u003ca\u003eRVar\u003c/a\u003e\u003c/code\u003e in more than one monad)\n or functions manipulating \u003ccode\u003e\u003ca\u003eRVar\u003c/a\u003e\u003c/code\u003es would have to use higher-ranked \n types to enforce the same kind of isolation and polymorphism.\n\u003c/p\u003e",
          "module": "[\"Data.Random.RVar\",\"Data.Random\"]",
          "name": "runRVarTWith",
          "package": "random-fu",
          "signature": "(forall t.  n t -\u003e m t) -\u003e RVarT n a -\u003e s -\u003e m a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/random-fu/docs/Data-Random-RVar.html#v:runRVarTWith\",\"http://hackage.haskell.org/package/random-fu/docs/Data-Random.html#v:runRVarTWith\"]"
        },
        "index": {
          "description": "Runs an RVarT sampling the random variable it defines The first argument lifts the base monad into the sampling monad This operation must obey the monad transformer laws lift return return lift lift lift One example of useful non-standard lifting would be one that takes State to another monad with different state representation such as IO with the state mapped to an IORef embedState Monad State embedState get put do get res return runState put return res The ability to lift is very important without it every RVar would have to either be given access to the full capability of the monad in which it will eventually be sampled which incidentally would also have to be monomorphic so you couldn sample one RVar in more than one monad or functions manipulating RVar would have to use higher-ranked types to enforce the same kind of isolation and polymorphism",
          "hierarchy": "Data Random RVar",
          "module": "Data.Random.RVar",
          "name": "runRVarTWith",
          "normalized": "(a b c d-\u003ee d)-\u003eRVarT c f-\u003eg-\u003ee f",
          "package": "random-fu",
          "partial": "RVar TWith",
          "signature": "(forall t. n t-\u003em t)-\u003eRVarT n a-\u003es-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-RVar.html#v:runRVarTWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Sample",
          "name": "Sample",
          "package": "random-fu",
          "source": "src/Data-Random-Sample.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Random Sample",
          "module": "Data.Random.Sample",
          "name": "Sample",
          "package": "random-fu",
          "partial": "Sample",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Sample.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA typeclass allowing \u003ccode\u003e\u003ca\u003eDistribution\u003c/a\u003e\u003c/code\u003es and \u003ccode\u003e\u003ca\u003eRVar\u003c/a\u003e\u003c/code\u003es to be sampled.  Both may\n also be sampled via \u003ccode\u003e\u003ca\u003erunRVar\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003erunRVarT\u003c/a\u003e\u003c/code\u003e, but I find it psychologically\n pleasing to be able to sample both using this function, as they are two\n separate abstractions for one base concept: a random variable.\n\u003c/p\u003e",
          "module": "Data.Random.Sample",
          "name": "Sampleable",
          "package": "random-fu",
          "source": "src/Data-Random-Sample.html#Sampleable",
          "type": "class"
        },
        "index": {
          "description": "typeclass allowing Distribution and RVar to be sampled Both may also be sampled via runRVar or runRVarT but find it psychologically pleasing to be able to sample both using this function as they are two separate abstractions for one base concept random variable",
          "hierarchy": "Data Random Sample",
          "module": "Data.Random.Sample",
          "name": "Sampleable",
          "package": "random-fu",
          "partial": "Sampleable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Sample.html#t:Sampleable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample a random variable using the default source of entropy for the\n monad in which the sampling occurs.\n\u003c/p\u003e",
          "module": "[\"Data.Random.Sample\",\"Data.Random\"]",
          "name": "sample",
          "package": "random-fu",
          "signature": "d t -\u003e m t",
          "source": "src/Data-Random-Sample.html#sample",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/random-fu/docs/Data-Random-Sample.html#v:sample\",\"http://hackage.haskell.org/package/random-fu/docs/Data-Random.html#v:sample\"]"
        },
        "index": {
          "description": "Sample random variable using the default source of entropy for the monad in which the sampling occurs",
          "hierarchy": "Data Random Sample",
          "module": "Data.Random.Sample",
          "name": "sample",
          "normalized": "a b-\u003ec b",
          "package": "random-fu",
          "signature": "d t-\u003em t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Sample.html#v:sample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDirectly sample from a distribution or random variable, using the given source of entropy.\n\u003c/p\u003e",
          "module": "Data.Random.Sample",
          "name": "sampleFrom",
          "package": "random-fu",
          "signature": "s -\u003e d t -\u003e m t",
          "source": "src/Data-Random-Sample.html#sampleFrom",
          "type": "method"
        },
        "index": {
          "description": "Directly sample from distribution or random variable using the given source of entropy",
          "hierarchy": "Data Random Sample",
          "module": "Data.Random.Sample",
          "name": "sampleFrom",
          "normalized": "a-\u003eb c-\u003ed c",
          "package": "random-fu",
          "partial": "From",
          "signature": "s-\u003ed t-\u003em t",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Sample.html#v:sampleFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample a random variable in a \"functional\" style.  Typical instantiations\n of \u003ccode\u003es\u003c/code\u003e are \u003ccode\u003eSystem.Random.StdGen\u003c/code\u003e or \u003ccode\u003eSystem.Random.Mersenne.Pure64.PureMT\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Random.Sample\",\"Data.Random\"]",
          "name": "sampleState",
          "package": "random-fu",
          "signature": "d t -\u003e s -\u003e (t, s)",
          "source": "src/Data-Random-Sample.html#sampleState",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/random-fu/docs/Data-Random-Sample.html#v:sampleState\",\"http://hackage.haskell.org/package/random-fu/docs/Data-Random.html#v:sampleState\"]"
        },
        "index": {
          "description": "Sample random variable in functional style Typical instantiations of are System.Random.StdGen or System.Random.Mersenne.Pure64.PureMT",
          "hierarchy": "Data Random Sample",
          "module": "Data.Random.Sample",
          "name": "sampleState",
          "normalized": "a b-\u003ec-\u003e(b,c)",
          "package": "random-fu",
          "partial": "State",
          "signature": "d t-\u003es-\u003e(t,s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Sample.html#v:sampleState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample a random variable in a \"semi-functional\" style.  Typical instantiations\n of \u003ccode\u003es\u003c/code\u003e are \u003ccode\u003eSystem.Random.StdGen\u003c/code\u003e or \u003ccode\u003eSystem.Random.Mersenne.Pure64.PureMT\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Random.Sample\",\"Data.Random\"]",
          "name": "sampleStateT",
          "package": "random-fu",
          "signature": "d t -\u003e s -\u003e m (t, s)",
          "source": "src/Data-Random-Sample.html#sampleStateT",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/random-fu/docs/Data-Random-Sample.html#v:sampleStateT\",\"http://hackage.haskell.org/package/random-fu/docs/Data-Random.html#v:sampleStateT\"]"
        },
        "index": {
          "description": "Sample random variable in semi-functional style Typical instantiations of are System.Random.StdGen or System.Random.Mersenne.Pure64.PureMT",
          "hierarchy": "Data Random Sample",
          "module": "Data.Random.Sample",
          "name": "sampleStateT",
          "normalized": "a b-\u003ec-\u003ed(b,c)",
          "package": "random-fu",
          "partial": "State",
          "signature": "d t-\u003es-\u003em(t,s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random-Sample.html#v:sampleStateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFlexible modeling and sampling of random variables.\n\u003c/p\u003e\u003cp\u003eThe central abstraction in this library is the concept of a random \n variable.  It is not fully formalized in the standard measure-theoretic \n language, but rather is informally defined as a \"thing you can get random \n values out of\".  Different random variables may have different types of \n values they can return or the same types but different probabilities for\n each value they can return.  The random values you get out of them are\n traditionally called \"random variates\".\n\u003c/p\u003e\u003cp\u003eMost imperative-language random number libraries are all about obtaining \n and manipulating random variates.  This one is about defining, manipulating \n and sampling random variables.  Computationally, the distinction is small \n and mostly just a matter of perspective, but from a program design \n perspective it provides both a powerfully composable abstraction and a\n very useful separation of concerns.\n\u003c/p\u003e\u003cp\u003eAbstract random variables as implemented by \u003ccode\u003e\u003ca\u003eRVar\u003c/a\u003e\u003c/code\u003e are composable.  They can\n be defined in a monadic / \"imperative\" style that amounts to manipulating\n variates, but with strict type-level isolation.  Concrete random variables\n are also provided, but they do not compose as generically.  The \u003ccode\u003e\u003ca\u003eDistribution\u003c/a\u003e\u003c/code\u003e\n type class allows concrete random variables to \"forget\" their concreteness \n so that they can be composed.  For examples of both, see the documentation \n for \u003ccode\u003e\u003ca\u003eRVar\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eDistribution\u003c/a\u003e\u003c/code\u003e, as well as the code for any of the concrete \n distributions such as \u003ccode\u003e\u003ca\u003eUniform\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eGamma\u003c/a\u003e\u003c/code\u003e, etc.\n\u003c/p\u003e\u003cp\u003eBoth abstract and concrete random variables can be sampled (despite the\n types GHCi may list for the functions) by the functions in \u003ca\u003eData.Random.Sample\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eRandom variable sampling is done with regard to a generic basis of primitive\n random variables defined in \u003ca\u003eData.Random.Internal.Primitives\u003c/a\u003e.  This basis \n is very low-level and the actual set of primitives is still fairly experimental,\n which is why it is in the \"Internal\" sub-heirarchy.  User-defined variables\n should use the existing high-level variables such as \u003ccode\u003e\u003ca\u003eUniform\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eNormal\u003c/a\u003e\u003c/code\u003e\n rather than these basis variables.  \u003ca\u003eData.Random.Source\u003c/a\u003e defines classes for\n entropy sources that provide implementations of these primitive variables. \n Several implementations are available in the Data.Random.Source.* modules.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Random",
          "name": "Random",
          "package": "random-fu",
          "source": "src/Data-Random.html",
          "type": "module"
        },
        "index": {
          "description": "Flexible modeling and sampling of random variables The central abstraction in this library is the concept of random variable It is not fully formalized in the standard measure-theoretic language but rather is informally defined as thing you can get random values out of Different random variables may have different types of values they can return or the same types but different probabilities for each value they can return The random values you get out of them are traditionally called random variates Most imperative-language random number libraries are all about obtaining and manipulating random variates This one is about defining manipulating and sampling random variables Computationally the distinction is small and mostly just matter of perspective but from program design perspective it provides both powerfully composable abstraction and very useful separation of concerns Abstract random variables as implemented by RVar are composable They can be defined in monadic imperative style that amounts to manipulating variates but with strict type-level isolation Concrete random variables are also provided but they do not compose as generically The Distribution type class allows concrete random variables to forget their concreteness so that they can be composed For examples of both see the documentation for RVar and Distribution as well as the code for any of the concrete distributions such as Uniform Gamma etc Both abstract and concrete random variables can be sampled despite the types GHCi may list for the functions by the functions in Data.Random.Sample Random variable sampling is done with regard to generic basis of primitive random variables defined in Data.Random.Internal.Primitives This basis is very low-level and the actual set of primitives is still fairly experimental which is why it is in the Internal sub-heirarchy User-defined variables should use the existing high-level variables such as Uniform and Normal rather than these basis variables Data.Random.Source defines classes for entropy sources that provide implementations of these primitive variables Several implementations are available in the Data.Random.Source modules",
          "hierarchy": "Data Random",
          "module": "Data.Random",
          "name": "Random",
          "package": "random-fu",
          "partial": "Random",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random",
          "name": "CDF",
          "package": "random-fu",
          "source": "src/Data-Random-Distribution.html#CDF",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Random",
          "module": "Data.Random",
          "name": "CDF",
          "package": "random-fu",
          "partial": "CDF",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random.html#t:CDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eDistribution\u003c/a\u003e\u003c/code\u003e is a data representation of a random variable's probability\n structure.  For example, in \u003ca\u003eData.Random.Distribution.Normal\u003c/a\u003e, the \u003ccode\u003eNormal\u003c/code\u003e\n distribution is defined as:\n\u003c/p\u003e\u003cpre\u003e data Normal a\n     = StdNormal\n     | Normal a a\n\u003c/pre\u003e\u003cp\u003eWhere the two parameters of the \u003ccode\u003eNormal\u003c/code\u003e data constructor are the mean and\n standard deviation of the random variable, respectively.  To make use of\n the \u003ccode\u003eNormal\u003c/code\u003e type, one can convert it to an \u003ccode\u003e\u003ca\u003ervar\u003c/a\u003e\u003c/code\u003e and manipulate it or\n sample it directly:\n\u003c/p\u003e\u003cpre\u003e x \u003c- sample (rvar (Normal 10 2))\n x \u003c- sample (Normal 10 2)\n\u003c/pre\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eDistribution\u003c/a\u003e\u003c/code\u003e is typically more transparent than an \u003ccode\u003e\u003ca\u003eRVar\u003c/a\u003e\u003c/code\u003e\n but less composable (precisely because of that transparency).  There are \n several practical uses for types implementing \u003ccode\u003e\u003ca\u003eDistribution\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Typically, a \u003ccode\u003e\u003ca\u003eDistribution\u003c/a\u003e\u003c/code\u003e will expose several parameters of a standard \n mathematical model of a probability distribution, such as mean and std deviation for\n the normal distribution.  Thus, they can be manipulated analytically using\n mathematical insights about the distributions they represent.  For example,\n a collection of bernoulli variables could be simplified into a (hopefully) smaller\n collection of binomial variables.\n\u003c/li\u003e\u003cli\u003e Because they are generally just containers for parameters, they can be\n easily serialized to persistent storage or read from user-supplied \n configurations (eg, initialization data for a simulation).\n\u003c/li\u003e\u003cli\u003e If a type additionally implements the \u003ccode\u003e\u003ca\u003eCDF\u003c/a\u003e\u003c/code\u003e subclass, which extends\n \u003ccode\u003e\u003ca\u003eDistribution\u003c/a\u003e\u003c/code\u003e with a cumulative density function, an arbitrary random\n variable \u003ccode\u003ex\u003c/code\u003e can be tested against the distribution by testing\n \u003ccode\u003efmap (cdf dist) x\u003c/code\u003e for uniformity.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eOn the other hand, most \u003ccode\u003e\u003ca\u003eDistribution\u003c/a\u003e\u003c/code\u003es will not be closed under all the\n same operations as \u003ccode\u003e\u003ca\u003eRVar\u003c/a\u003e\u003c/code\u003e (which, being a monad, has a fully turing-complete\n internal computational model).  The sum of two uniformly-distributed \n variables, for example, is not uniformly distributed.  To support general \n composition, the \u003ccode\u003e\u003ca\u003eDistribution\u003c/a\u003e\u003c/code\u003e class defines a function \u003ccode\u003e\u003ca\u003ervar\u003c/a\u003e\u003c/code\u003e to \n construct the more-abstract and more-composable \u003ccode\u003e\u003ca\u003eRVar\u003c/a\u003e\u003c/code\u003e representation \n of a random variable.\n\u003c/p\u003e",
          "module": "Data.Random",
          "name": "Distribution",
          "package": "random-fu",
          "source": "src/Data-Random-Distribution.html#Distribution",
          "type": "class"
        },
        "index": {
          "description": "Distribution is data representation of random variable probability structure For example in Data.Random.Distribution.Normal the Normal distribution is defined as data Normal StdNormal Normal Where the two parameters of the Normal data constructor are the mean and standard deviation of the random variable respectively To make use of the Normal type one can convert it to an rvar and manipulate it or sample it directly sample rvar Normal sample Normal Distribution is typically more transparent than an RVar but less composable precisely because of that transparency There are several practical uses for types implementing Distribution Typically Distribution will expose several parameters of standard mathematical model of probability distribution such as mean and std deviation for the normal distribution Thus they can be manipulated analytically using mathematical insights about the distributions they represent For example collection of bernoulli variables could be simplified into hopefully smaller collection of binomial variables Because they are generally just containers for parameters they can be easily serialized to persistent storage or read from user-supplied configurations eg initialization data for simulation If type additionally implements the CDF subclass which extends Distribution with cumulative density function an arbitrary random variable can be tested against the distribution by testing fmap cdf dist for uniformity On the other hand most Distribution will not be closed under all the same operations as RVar which being monad has fully turing-complete internal computational model The sum of two uniformly-distributed variables for example is not uniformly distributed To support general composition the Distribution class defines function rvar to construct the more-abstract and more-composable RVar representation of random variable",
          "hierarchy": "Data Random",
          "module": "Data.Random",
          "name": "Distribution",
          "package": "random-fu",
          "partial": "Distribution",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random.html#t:Distribution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random",
          "name": "Gamma",
          "package": "random-fu",
          "source": "src/Data-Random-Distribution-Gamma.html#Gamma",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Random",
          "module": "Data.Random",
          "name": "Gamma",
          "package": "random-fu",
          "partial": "Gamma",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random.html#t:Gamma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA typeclass for monads with a chosen source of entropy.  For example,\n \u003ccode\u003eRVar\u003c/code\u003e is such a monad - the source from which it is (eventually) sampled\n is the only source from which a random variable is permitted to draw, so\n when directly requesting entropy for a random variable these functions\n are used.\n\u003c/p\u003e\u003cp\u003eMinimum implementation is either the internal \u003ccode\u003e\u003ca\u003egetRandomPrim\u003c/a\u003e\u003c/code\u003e or all\n other functions.  Additionally, this class's interface is subject to \n extension at any time, so it is very, very strongly recommended that\n the \u003ccode\u003emonadRandom\u003c/code\u003e Template Haskell function be used to implement this \n function rather than directly implementing it.  That function takes care\n of choosing default implementations for any missing functions; as long as\n at least one function is implemented, it will derive sensible \n implementations of all others.\n\u003c/p\u003e\u003cp\u003eTo use \u003ccode\u003emonadRandom\u003c/code\u003e, just wrap your instance declaration as follows (and\n enable the TemplateHaskell and GADTs language extensions):\n\u003c/p\u003e\u003cpre\u003e $(monadRandom [d|\n         instance MonadRandom FooM where\n             getRandomDouble = return pi\n             getRandomWord16 = return 4\n             {- etc... -}\n     |])\n\u003c/pre\u003e",
          "module": "Data.Random",
          "name": "MonadRandom",
          "package": "random-fu",
          "type": "class"
        },
        "index": {
          "description": "typeclass for monads with chosen source of entropy For example RVar is such monad the source from which it is eventually sampled is the only source from which random variable is permitted to draw so when directly requesting entropy for random variable these functions are used Minimum implementation is either the internal getRandomPrim or all other functions Additionally this class interface is subject to extension at any time so it is very very strongly recommended that the monadRandom Template Haskell function be used to implement this function rather than directly implementing it That function takes care of choosing default implementations for any missing functions as long as at least one function is implemented it will derive sensible implementations of all others To use monadRandom just wrap your instance declaration as follows and enable the TemplateHaskell and GADTs language extensions monadRandom instance MonadRandom FooM where getRandomDouble return pi getRandomWord16 return etc",
          "hierarchy": "Data Random",
          "module": "Data.Random",
          "name": "MonadRandom",
          "package": "random-fu",
          "partial": "Monad Random",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random.html#t:MonadRandom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specification of a normal distribution over the type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Random",
          "name": "Normal",
          "package": "random-fu",
          "source": "src/Data-Random-Distribution-Normal.html#Normal",
          "type": "data"
        },
        "index": {
          "description": "specification of normal distribution over the type",
          "hierarchy": "Data Random",
          "module": "Data.Random",
          "name": "Normal",
          "package": "random-fu",
          "partial": "Normal",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random.html#t:Normal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn opaque type modeling a \"random variable\" - a value \n which depends on the outcome of some random event.  \u003ccode\u003e\u003ca\u003eRVar\u003c/a\u003e\u003c/code\u003es \n can be conveniently defined by an imperative-looking style:\n\u003c/p\u003e\u003cpre\u003e normalPair =  do\n     u \u003c- stdUniform\n     t \u003c- stdUniform\n     let r = sqrt (-2 * log u)\n         theta = (2 * pi) * t\n         \n         x = r * cos theta\n         y = r * sin theta\n     return (x,y)\n\u003c/pre\u003e\u003cp\u003eOR by a more applicative style:\n\u003c/p\u003e\u003cpre\u003e logNormal = exp \u003c$\u003e stdNormal\n\u003c/pre\u003e\u003cp\u003eOnce defined (in any style), there are several ways to sample \u003ccode\u003e\u003ca\u003eRVar\u003c/a\u003e\u003c/code\u003es:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e In a monad, using a \u003ccode\u003e\u003ca\u003eRandomSource\u003c/a\u003e\u003c/code\u003e:\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e runRVar (uniform 1 100) DevRandom :: IO Int\n\u003c/pre\u003e\u003cul\u003e\u003cli\u003e In a monad, using a \u003ccode\u003e\u003ca\u003eMonadRandom\u003c/a\u003e\u003c/code\u003e instance:\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e sampleRVar (uniform 1 100) :: State PureMT Int\n\u003c/pre\u003e\u003cul\u003e\u003cli\u003e As a pure function transforming a functional RNG:\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e sampleState (uniform 1 100) :: StdGen -\u003e (Int, StdGen)\n\u003c/pre\u003e\u003cp\u003e(where \u003ccode\u003esampleState = runState . sampleRVar\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Data.Random",
          "name": "RVar",
          "package": "random-fu",
          "type": "type"
        },
        "index": {
          "description": "An opaque type modeling random variable value which depends on the outcome of some random event RVar can be conveniently defined by an imperative-looking style normalPair do stdUniform stdUniform let sqrt log theta pi cos theta sin theta return OR by more applicative style logNormal exp stdNormal Once defined in any style there are several ways to sample RVar In monad using RandomSource runRVar uniform DevRandom IO Int In monad using MonadRandom instance sampleRVar uniform State PureMT Int As pure function transforming functional RNG sampleState uniform StdGen Int StdGen where sampleState runState sampleRVar",
          "hierarchy": "Data Random",
          "module": "Data.Random",
          "name": "RVar",
          "package": "random-fu",
          "partial": "RVar",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random.html#t:RVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA random variable with access to operations in an underlying monad.  Useful\n examples include any form of state for implementing random processes with hysteresis,\n or writer monads for implementing tracing of complicated algorithms.\n\u003c/p\u003e\u003cp\u003eFor example, a simple random walk can be implemented as an \u003ccode\u003e\u003ca\u003eRVarT\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e value:\n\u003c/p\u003e\u003cpre\u003e rwalkIO :: IO (RVarT IO Double)\n rwalkIO d = do\n     lastVal \u003c- newIORef 0\n     \n     let x = do\n             prev    \u003c- lift (readIORef lastVal)\n             change  \u003c- rvarT StdNormal\n             \n             let new = prev + change\n             lift (writeIORef lastVal new)\n             return new\n         \n     return x\n\u003c/pre\u003e\u003cp\u003eTo run the random walk it must first be initialized, after which it can be sampled as usual:\n\u003c/p\u003e\u003cpre\u003e do\n     rw \u003c- rwalkIO\n     x \u003c- sampleRVarT rw\n     y \u003c- sampleRVarT rw\n     ...\n\u003c/pre\u003e\u003cp\u003eThe same random-walk process as above can be implemented using MTL types\n as follows (using \u003ccode\u003eimport Control.Monad.Trans as MTL\u003c/code\u003e):\n\u003c/p\u003e\u003cpre\u003e rwalkState :: RVarT (State Double) Double\n rwalkState = do\n     prev \u003c- MTL.lift get\n     change  \u003c- rvarT StdNormal\n     \n     let new = prev + change\n     MTL.lift (put new)\n     return new\n\u003c/pre\u003e\u003cp\u003eInvocation is straightforward (although a bit noisy) if you're used to MTL:\n\u003c/p\u003e\u003cpre\u003e rwalk :: Int -\u003e Double -\u003e StdGen -\u003e ([Double], StdGen)\n rwalk count start gen = \n     flip evalState start .\n         flip runStateT gen .\n             sampleRVarTWith MTL.lift $\n                 replicateM count rwalkState\n\u003c/pre\u003e",
          "module": "Data.Random",
          "name": "RVarT",
          "package": "random-fu",
          "type": "data"
        },
        "index": {
          "description": "random variable with access to operations in an underlying monad Useful examples include any form of state for implementing random processes with hysteresis or writer monads for implementing tracing of complicated algorithms For example simple random walk can be implemented as an RVarT IO value rwalkIO IO RVarT IO Double rwalkIO do lastVal newIORef let do prev lift readIORef lastVal change rvarT StdNormal let new prev change lift writeIORef lastVal new return new return To run the random walk it must first be initialized after which it can be sampled as usual do rw rwalkIO sampleRVarT rw sampleRVarT rw The same random-walk process as above can be implemented using MTL types as follows using import Control.Monad.Trans as MTL rwalkState RVarT State Double Double rwalkState do prev MTL.lift get change rvarT StdNormal let new prev change MTL.lift put new return new Invocation is straightforward although bit noisy if you re used to MTL rwalk Int Double StdGen Double StdGen rwalk count start gen flip evalState start flip runStateT gen sampleRVarTWith MTL.lift replicateM count rwalkState",
          "hierarchy": "Data Random",
          "module": "Data.Random",
          "name": "RVarT",
          "package": "random-fu",
          "partial": "RVar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random.html#t:RVarT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA source of entropy which can be used in the given monad.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003eMonadRandom\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eMinimum implementation is either the internal \u003ccode\u003e\u003ca\u003egetRandomPrimFrom\u003c/a\u003e\u003c/code\u003e or all\n other functions.  Additionally, this class's interface is subject to \n extension at any time, so it is very, very strongly recommended that\n the \u003ccode\u003erandomSource\u003c/code\u003e Template Haskell function be used to implement this \n function rather than directly implementing it.  That function takes care\n of choosing default implementations for any missing functions; as long as\n at least one function is implemented, it will derive sensible \n implementations of all others.\n\u003c/p\u003e\u003cp\u003eTo use \u003ccode\u003erandomSource\u003c/code\u003e, just wrap your instance declaration as follows (and\n enable the TemplateHaskell, MultiParamTypeClasses and GADTs language\n extensions, as well as any others required by your instances, such as\n FlexibleInstances):\n\u003c/p\u003e\u003cpre\u003e $(randomSource [d|\n         instance RandomSource FooM Bar where\n             {- at least one RandomSource function... -}\n     |])\n\u003c/pre\u003e",
          "module": "Data.Random",
          "name": "RandomSource",
          "package": "random-fu",
          "type": "class"
        },
        "index": {
          "description": "source of entropy which can be used in the given monad See also MonadRandom Minimum implementation is either the internal getRandomPrimFrom or all other functions Additionally this class interface is subject to extension at any time so it is very very strongly recommended that the randomSource Template Haskell function be used to implement this function rather than directly implementing it That function takes care of choosing default implementations for any missing functions as long as at least one function is implemented it will derive sensible implementations of all others To use randomSource just wrap your instance declaration as follows and enable the TemplateHaskell MultiParamTypeClasses and GADTs language extensions as well as any others required by your instances such as FlexibleInstances randomSource instance RandomSource FooM Bar where at least one RandomSource function",
          "hierarchy": "Data Random",
          "module": "Data.Random",
          "name": "RandomSource",
          "package": "random-fu",
          "partial": "Random Source",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random.html#t:RandomSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA typeclass allowing \u003ccode\u003e\u003ca\u003eDistribution\u003c/a\u003e\u003c/code\u003es and \u003ccode\u003e\u003ca\u003eRVar\u003c/a\u003e\u003c/code\u003es to be sampled.  Both may\n also be sampled via \u003ccode\u003e\u003ca\u003erunRVar\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003erunRVarT\u003c/a\u003e\u003c/code\u003e, but I find it psychologically\n pleasing to be able to sample both using this function, as they are two\n separate abstractions for one base concept: a random variable.\n\u003c/p\u003e",
          "module": "Data.Random",
          "name": "Sampleable",
          "package": "random-fu",
          "source": "src/Data-Random-Sample.html#Sampleable",
          "type": "class"
        },
        "index": {
          "description": "typeclass allowing Distribution and RVar to be sampled Both may also be sampled via runRVar or runRVarT but find it psychologically pleasing to be able to sample both using this function as they are two separate abstractions for one base concept random variable",
          "hierarchy": "Data Random",
          "module": "Data.Random",
          "name": "Sampleable",
          "package": "random-fu",
          "partial": "Sampleable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random.html#t:Sampleable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA token representing the \"standard\" entropy source in a \u003ccode\u003e\u003ca\u003eMonadRandom\u003c/a\u003e\u003c/code\u003e\n monad.  Its sole purpose is to make the following true (when the types check):\n\u003c/p\u003e\u003cpre\u003e runRVar x StdRandom === sampleRVar\n\u003c/pre\u003e",
          "module": "Data.Random",
          "name": "StdRandom",
          "package": "random-fu",
          "type": "data"
        },
        "index": {
          "description": "token representing the standard entropy source in MonadRandom monad Its sole purpose is to make the following true when the types check runRVar StdRandom sampleRVar",
          "hierarchy": "Data Random",
          "module": "Data.Random",
          "name": "StdRandom",
          "package": "random-fu",
          "partial": "Std Random",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random.html#t:StdRandom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA name for the \"standard\" uniform distribution over the type \u003ccode\u003et\u003c/code\u003e,\n if one exists.  See also \u003ccode\u003e\u003ca\u003estdUniform\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e types that are also \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e, this is\n the uniform distribution over the full range of the type.\n For un-\u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e types this is not defined.\n For \u003ccode\u003e\u003ca\u003eFractional\u003c/a\u003e\u003c/code\u003e types this is a random variable in the range [0,1)\n (that is, 0 to 1 including 0 but not including 1).\n\u003c/p\u003e",
          "module": "Data.Random",
          "name": "StdUniform",
          "package": "random-fu",
          "source": "src/Data-Random-Distribution-Uniform.html#StdUniform",
          "type": "data"
        },
        "index": {
          "description": "name for the standard uniform distribution over the type if one exists See also stdUniform For Integral and Enum types that are also Bounded this is the uniform distribution over the full range of the type For un Bounded Integral types this is not defined For Fractional types this is random variable in the range that is to including but not including",
          "hierarchy": "Data Random",
          "module": "Data.Random",
          "name": "StdUniform",
          "package": "random-fu",
          "partial": "Std Uniform",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random.html#t:StdUniform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA definition of a uniform distribution over the type \u003ccode\u003et\u003c/code\u003e.  See also \u003ccode\u003e\u003ca\u003euniform\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Random",
          "name": "Uniform",
          "package": "random-fu",
          "source": "src/Data-Random-Distribution-Uniform.html#Uniform",
          "type": "data"
        },
        "index": {
          "description": "definition of uniform distribution over the type See also uniform",
          "hierarchy": "Data Random",
          "module": "Data.Random",
          "name": "Uniform",
          "package": "random-fu",
          "partial": "Uniform",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random.html#t:Uniform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random",
          "name": "StdRandom",
          "package": "random-fu",
          "signature": "StdRandom",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random",
          "module": "Data.Random",
          "name": "StdRandom",
          "package": "random-fu",
          "partial": "Std Random",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random.html#v:StdRandom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the cumulative distribution function of this distribution.\n That is, a function taking \u003ccode\u003ex :: t\u003c/code\u003e to the probability that the next\n sample will return a value less than or equal to x, according to some\n order or partial order (not necessarily an obvious one).\n\u003c/p\u003e\u003cp\u003eIn the case where \u003ccode\u003et\u003c/code\u003e is an instance of Ord, \u003ccode\u003e\u003ca\u003ecdf\u003c/a\u003e\u003c/code\u003e should correspond\n to the CDF with respect to that order.\n\u003c/p\u003e\u003cp\u003eIn other cases, \u003ccode\u003e\u003ca\u003ecdf\u003c/a\u003e\u003c/code\u003e is only required to satisfy the following law:\n \u003ccode\u003efmap (cdf d) (rvar d)\u003c/code\u003e\n must be uniformly distributed over (0,1).  Inclusion of either endpoint is optional,\n though the preferred range is (0,1].\n\u003c/p\u003e\u003cp\u003eNote that this definition requires that  \u003ccode\u003e\u003ca\u003ecdf\u003c/a\u003e\u003c/code\u003e for a product type \n should _not_ be a joint CDF as commonly defined, as that definition \n violates both conditions.\n Instead, it should be a univariate CDF over the product type.  That is,\n it should represent the CDF with respect to the lexicographic order\n of the product.\n\u003c/p\u003e\u003cp\u003eThe present specification is probably only really useful for testing\n conformance of a variable to its target distribution, and I am open to\n suggestions for more-useful specifications (especially with regard to\n the interaction with product types).\n\u003c/p\u003e",
          "module": "Data.Random",
          "name": "cdf",
          "package": "random-fu",
          "signature": "d t -\u003e t -\u003e Double",
          "source": "src/Data-Random-Distribution.html#cdf",
          "type": "method"
        },
        "index": {
          "description": "Return the cumulative distribution function of this distribution That is function taking to the probability that the next sample will return value less than or equal to according to some order or partial order not necessarily an obvious one In the case where is an instance of Ord cdf should correspond to the CDF with respect to that order In other cases cdf is only required to satisfy the following law fmap cdf rvar must be uniformly distributed over Inclusion of either endpoint is optional though the preferred range is Note that this definition requires that cdf for product type should not be joint CDF as commonly defined as that definition violates both conditions Instead it should be univariate CDF over the product type That is it should represent the CDF with respect to the lexicographic order of the product The present specification is probably only really useful for testing conformance of variable to its target distribution and am open to suggestions for more-useful specifications especially with regard to the interaction with product types",
          "hierarchy": "Data Random",
          "module": "Data.Random",
          "name": "cdf",
          "normalized": "a b-\u003eb-\u003eDouble",
          "package": "random-fu",
          "signature": "d t-\u003et-\u003eDouble",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random.html#v:cdf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a random variable with this distribution.\n\u003c/p\u003e",
          "module": "Data.Random",
          "name": "rvar",
          "package": "random-fu",
          "signature": "d t -\u003e RVar t",
          "source": "src/Data-Random-Distribution.html#rvar",
          "type": "method"
        },
        "index": {
          "description": "Return random variable with this distribution",
          "hierarchy": "Data Random",
          "module": "Data.Random",
          "name": "rvar",
          "normalized": "a b-\u003eRVar b",
          "package": "random-fu",
          "signature": "d t-\u003eRVar t",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random.html#v:rvar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a random variable with the given distribution, pre-lifted to an arbitrary \u003ccode\u003e\u003ca\u003eRVarT\u003c/a\u003e\u003c/code\u003e.\n Any arbitrary \u003ccode\u003e\u003ca\u003eRVar\u003c/a\u003e\u003c/code\u003e can also be converted to an 'RVarT m' for an arbitrary \u003ccode\u003em\u003c/code\u003e, using\n either \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003esample\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Random",
          "name": "rvarT",
          "package": "random-fu",
          "signature": "d t -\u003e RVarT n t",
          "source": "src/Data-Random-Distribution.html#rvarT",
          "type": "method"
        },
        "index": {
          "description": "Return random variable with the given distribution pre-lifted to an arbitrary RVarT Any arbitrary RVar can also be converted to an RVarT for an arbitrary using either lift or sample",
          "hierarchy": "Data Random",
          "module": "Data.Random",
          "name": "rvarT",
          "normalized": "a b-\u003eRVarT c b",
          "package": "random-fu",
          "signature": "d t-\u003eRVarT n t",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random.html#v:rvarT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDirectly sample from a distribution or random variable, using the given source of entropy.\n\u003c/p\u003e",
          "module": "Data.Random",
          "name": "sampleFrom",
          "package": "random-fu",
          "signature": "s -\u003e d t -\u003e m t",
          "source": "src/Data-Random-Sample.html#sampleFrom",
          "type": "method"
        },
        "index": {
          "description": "Directly sample from distribution or random variable using the given source of entropy",
          "hierarchy": "Data Random",
          "module": "Data.Random",
          "name": "sampleFrom",
          "normalized": "a-\u003eb c-\u003ed c",
          "package": "random-fu",
          "partial": "From",
          "signature": "s-\u003ed t-\u003em t",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/random-fu/docs/Data-Random.html#v:sampleFrom"
      }
    }
  ]
]