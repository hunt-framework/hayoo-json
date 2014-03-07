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
        "word": "monte-carlo"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe abstract MonadMC interface and utility functions for Monte Carlo\n computations.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.MC.Class",
          "name": "Class",
          "package": "monte-carlo",
          "source": "src/Control-Monad-MC-Class.html",
          "type": "module"
        },
        "index": {
          "description": "The abstract MonadMC interface and utility functions for Monte Carlo computations",
          "hierarchy": "Control Monad MC Class",
          "module": "Control.Monad.MC.Class",
          "name": "Class",
          "package": "monte-carlo",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.MC.Class",
          "name": "HasRNG",
          "package": "monte-carlo",
          "source": "src/Control-Monad-MC-Base.html#HasRNG",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad MC Class",
          "module": "Control.Monad.MC.Class",
          "name": "HasRNG",
          "package": "monte-carlo",
          "partial": "Has RNG",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#t:HasRNG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.MC.Class",
          "name": "MonadMC",
          "package": "monte-carlo",
          "source": "src/Control-Monad-MC-Base.html#MonadMC",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad MC Class",
          "module": "Control.Monad.MC.Class",
          "name": "MonadMC",
          "package": "monte-carlo",
          "partial": "Monad MC",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#t:MonadMC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e events with the given probability\n\u003c/p\u003e",
          "module": "Control.Monad.MC.Class",
          "name": "bernoulli",
          "package": "monte-carlo",
          "signature": "Double -\u003e m Bool",
          "source": "src/Control-Monad-MC-Base.html#bernoulli",
          "type": "function"
        },
        "index": {
          "description": "Generate True events with the given probability",
          "hierarchy": "Control Monad MC Class",
          "module": "Control.Monad.MC.Class",
          "name": "bernoulli",
          "normalized": "Double-\u003ea Bool",
          "package": "monte-carlo",
          "signature": "Double-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:bernoulli"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ebeta a b\u003c/code\u003e generates a beta random variable with\n parameters \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.MC.Class",
          "name": "beta",
          "package": "monte-carlo",
          "signature": "Double -\u003e Double -\u003e m Double",
          "source": "src/Control-Monad-MC-Base.html#beta",
          "type": "method"
        },
        "index": {
          "description": "beta generates beta random variable with parameters and",
          "hierarchy": "Control Monad MC Class",
          "module": "Control.Monad.MC.Class",
          "name": "beta",
          "normalized": "Double-\u003eDouble-\u003ea Double",
          "package": "monte-carlo",
          "signature": "Double-\u003eDouble-\u003em Double",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:beta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecauchy a\u003c/code\u003e generates a Cauchy random variable with scale\n parameter \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.MC.Class",
          "name": "cauchy",
          "package": "monte-carlo",
          "signature": "Double -\u003e m Double",
          "source": "src/Control-Monad-MC-Base.html#cauchy",
          "type": "method"
        },
        "index": {
          "description": "cauchy generates Cauchy random variable with scale parameter",
          "hierarchy": "Control Monad MC Class",
          "module": "Control.Monad.MC.Class",
          "name": "cauchy",
          "normalized": "Double-\u003ea Double",
          "package": "monte-carlo",
          "signature": "Double-\u003em Double",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:cauchy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003edirichlet alphas\u003c/code\u003e generates a Dirichlet random variable\n with parameters \u003ccode\u003ealphas\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.MC.Class",
          "name": "dirichlet",
          "package": "monte-carlo",
          "signature": "Vector Double -\u003e m (Vector Double)",
          "source": "src/Control-Monad-MC-Base.html#dirichlet",
          "type": "method"
        },
        "index": {
          "description": "dirichlet alphas generates Dirichlet random variable with parameters alphas",
          "hierarchy": "Control Monad MC Class",
          "module": "Control.Monad.MC.Class",
          "name": "dirichlet",
          "normalized": "Vector Double-\u003ea(Vector Double)",
          "package": "monte-carlo",
          "signature": "Vector Double-\u003em(Vector Double)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:dirichlet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eexponential mu\u003c/code\u003e generates an Exponential variate with mean \u003ccode\u003emu\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.MC.Class",
          "name": "exponential",
          "package": "monte-carlo",
          "signature": "Double -\u003e m Double",
          "source": "src/Control-Monad-MC-Base.html#exponential",
          "type": "method"
        },
        "index": {
          "description": "exponential mu generates an Exponential variate with mean mu",
          "hierarchy": "Control Monad MC Class",
          "module": "Control.Monad.MC.Class",
          "name": "exponential",
          "normalized": "Double-\u003ea Double",
          "package": "monte-carlo",
          "signature": "Double-\u003em Double",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:exponential"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egamma a b\u003c/code\u003e generates a gamma random variable with\n parameters \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.MC.Class",
          "name": "gamma",
          "package": "monte-carlo",
          "signature": "Double -\u003e Double -\u003e m Double",
          "source": "src/Control-Monad-MC-Base.html#gamma",
          "type": "method"
        },
        "index": {
          "description": "gamma generates gamma random variable with parameters and",
          "hierarchy": "Control Monad MC Class",
          "module": "Control.Monad.MC.Class",
          "name": "gamma",
          "normalized": "Double-\u003eDouble-\u003ea Double",
          "package": "monte-carlo",
          "signature": "Double-\u003eDouble-\u003em Double",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:gamma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the current random number generator.\n\u003c/p\u003e",
          "module": "Control.Monad.MC.Class",
          "name": "getRNG",
          "package": "monte-carlo",
          "signature": "m (RNG m)",
          "source": "src/Control-Monad-MC-Base.html#getRNG",
          "type": "method"
        },
        "index": {
          "description": "Get the current random number generator",
          "hierarchy": "Control Monad MC Class",
          "module": "Control.Monad.MC.Class",
          "name": "getRNG",
          "package": "monte-carlo",
          "partial": "RNG",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:getRNG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003elevy c alpha\u003c/code\u003e gets a Levy alpha-stable variate with scale \u003ccode\u003ec\u003c/code\u003e and\n exponent \u003ccode\u003ealpha\u003c/code\u003e.  The algorithm only works for \u003ccode\u003e0 \u003c alpha \u003c= 2\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.MC.Class",
          "name": "levy",
          "package": "monte-carlo",
          "signature": "Double -\u003e Double -\u003e m Double",
          "source": "src/Control-Monad-MC-Base.html#levy",
          "type": "method"
        },
        "index": {
          "description": "levy alpha gets Levy alpha-stable variate with scale and exponent alpha The algorithm only works for alpha",
          "hierarchy": "Control Monad MC Class",
          "module": "Control.Monad.MC.Class",
          "name": "levy",
          "normalized": "Double-\u003eDouble-\u003ea Double",
          "package": "monte-carlo",
          "signature": "Double-\u003eDouble-\u003em Double",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:levy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003elevySkew c alpha beta \u003c/code\u003e gets a skew Levy alpha-stable variate\n with scale \u003ccode\u003ec\u003c/code\u003e, exponent \u003ccode\u003ealpha\u003c/code\u003e, and skewness \u003ccode\u003ebeta\u003c/code\u003e.  The skew\n parameter must lie in the range \u003ccode\u003e[-1,1]\u003c/code\u003e.  The algorithm only works\n for \u003ccode\u003e0 \u003c alpha \u003c= 2\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.MC.Class",
          "name": "levySkew",
          "package": "monte-carlo",
          "signature": "Double -\u003e Double -\u003e Double -\u003e m Double",
          "source": "src/Control-Monad-MC-Base.html#levySkew",
          "type": "method"
        },
        "index": {
          "description": "levySkew alpha beta gets skew Levy alpha-stable variate with scale exponent alpha and skewness beta The skew parameter must lie in the range The algorithm only works for alpha",
          "hierarchy": "Control Monad MC Class",
          "module": "Control.Monad.MC.Class",
          "name": "levySkew",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003ea Double",
          "package": "monte-carlo",
          "partial": "Skew",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003em Double",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:levySkew"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003elogistic a\u003c/code\u003e generates a logistic random variable with\n parameter \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.MC.Class",
          "name": "logistic",
          "package": "monte-carlo",
          "signature": "Double -\u003e m Double",
          "source": "src/Control-Monad-MC-Base.html#logistic",
          "type": "method"
        },
        "index": {
          "description": "logistic generates logistic random variable with parameter",
          "hierarchy": "Control Monad MC Class",
          "module": "Control.Monad.MC.Class",
          "name": "logistic",
          "normalized": "Double-\u003ea Double",
          "package": "monte-carlo",
          "signature": "Double-\u003em Double",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:logistic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003emultinomial n ps\u003c/code\u003e generates a multinomial random\n variable with parameters \u003ccode\u003eps\u003c/code\u003e formed by \u003ccode\u003en\u003c/code\u003e trials.\n\u003c/p\u003e",
          "module": "Control.Monad.MC.Class",
          "name": "multinomial",
          "package": "monte-carlo",
          "signature": "Int -\u003e Vector Double -\u003e m (Vector Int)",
          "source": "src/Control-Monad-MC-Base.html#multinomial",
          "type": "method"
        },
        "index": {
          "description": "multinomial ps generates multinomial random variable with parameters ps formed by trials",
          "hierarchy": "Control Monad MC Class",
          "module": "Control.Monad.MC.Class",
          "name": "multinomial",
          "normalized": "Int-\u003eVector Double-\u003ea(Vector Int)",
          "package": "monte-carlo",
          "signature": "Int-\u003eVector Double-\u003em(Vector Int)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:multinomial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003enormal mu sigma\u003c/code\u003e generates a Normal random variable with mean\n \u003ccode\u003emu\u003c/code\u003e and standard deviation \u003ccode\u003esigma\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.MC.Class",
          "name": "normal",
          "package": "monte-carlo",
          "signature": "Double -\u003e Double -\u003e m Double",
          "source": "src/Control-Monad-MC-Base.html#normal",
          "type": "method"
        },
        "index": {
          "description": "normal mu sigma generates Normal random variable with mean mu and standard deviation sigma",
          "hierarchy": "Control Monad MC Class",
          "module": "Control.Monad.MC.Class",
          "name": "normal",
          "normalized": "Double-\u003eDouble-\u003ea Double",
          "package": "monte-carlo",
          "signature": "Double-\u003eDouble-\u003em Double",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:normal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003epareto a b\u003c/code\u003e generates a Pareto random variable with\n exponent \u003ccode\u003ea\u003c/code\u003e and scale \u003ccode\u003eb\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.MC.Class",
          "name": "pareto",
          "package": "monte-carlo",
          "signature": "Double -\u003e Double -\u003e m Double",
          "source": "src/Control-Monad-MC-Base.html#pareto",
          "type": "method"
        },
        "index": {
          "description": "pareto generates Pareto random variable with exponent and scale",
          "hierarchy": "Control Monad MC Class",
          "module": "Control.Monad.MC.Class",
          "name": "pareto",
          "normalized": "Double-\u003eDouble-\u003ea Double",
          "package": "monte-carlo",
          "signature": "Double-\u003eDouble-\u003em Double",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:pareto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003epoisson mu\u003c/code\u003e generates a Poisson random variable with mean \u003ccode\u003emu\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.MC.Class",
          "name": "poisson",
          "package": "monte-carlo",
          "signature": "Double -\u003e m Int",
          "source": "src/Control-Monad-MC-Base.html#poisson",
          "type": "method"
        },
        "index": {
          "description": "poisson mu generates Poisson random variable with mean mu",
          "hierarchy": "Control Monad MC Class",
          "module": "Control.Monad.MC.Class",
          "name": "poisson",
          "normalized": "Double-\u003ea Int",
          "package": "monte-carlo",
          "signature": "Double-\u003em Int",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:poisson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce a lazy infinite list of values from the given Monte Carlo\n generator.\n\u003c/p\u003e",
          "module": "Control.Monad.MC.Class",
          "name": "repeatMC",
          "package": "monte-carlo",
          "signature": "m a -\u003e m [a]",
          "source": "src/Control-Monad-MC-Repeat.html#repeatMC",
          "type": "function"
        },
        "index": {
          "description": "Produce lazy infinite list of values from the given Monte Carlo generator",
          "hierarchy": "Control Monad MC Class",
          "module": "Control.Monad.MC.Class",
          "name": "repeatMC",
          "normalized": "a b-\u003ea[b]",
          "package": "monte-carlo",
          "partial": "MC",
          "signature": "m a-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:repeatMC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce a lazy list of the given length using the specified\n generator.\n\u003c/p\u003e",
          "module": "Control.Monad.MC.Class",
          "name": "replicateMC",
          "package": "monte-carlo",
          "signature": "Int -\u003e m a -\u003e m [a]",
          "source": "src/Control-Monad-MC-Repeat.html#replicateMC",
          "type": "function"
        },
        "index": {
          "description": "Produce lazy list of the given length using the specified generator",
          "hierarchy": "Control Monad MC Class",
          "module": "Control.Monad.MC.Class",
          "name": "replicateMC",
          "normalized": "Int-\u003ea b-\u003ea[b]",
          "package": "monte-carlo",
          "partial": "MC",
          "signature": "Int-\u003em a-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:replicateMC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esample xs\u003c/code\u003e samples a value uniformly from the elements of \u003ccode\u003exs\u003c/code\u003e.  The\n results are undefined if \u003ccode\u003elength xs\u003c/code\u003e is zero.\n\u003c/p\u003e",
          "module": "Control.Monad.MC.Class",
          "name": "sample",
          "package": "monte-carlo",
          "signature": "[a] -\u003e m a",
          "source": "src/Control-Monad-MC-Sample.html#sample",
          "type": "function"
        },
        "index": {
          "description": "sample xs samples value uniformly from the elements of xs The results are undefined if length xs is zero",
          "hierarchy": "Control Monad MC Class",
          "module": "Control.Monad.MC.Class",
          "name": "sample",
          "normalized": "[a]-\u003eb a",
          "package": "monte-carlo",
          "signature": "[a]-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:sample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esampleInt n\u003c/code\u003e samples integers uniformly from \u003ccode\u003e[ 0..n-1 ]\u003c/code\u003e.  It is an\n error to call this function with a non-positive \u003ccode\u003en\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.MC.Class",
          "name": "sampleInt",
          "package": "monte-carlo",
          "signature": "Int -\u003e m Int",
          "source": "src/Control-Monad-MC-Sample.html#sampleInt",
          "type": "function"
        },
        "index": {
          "description": "sampleInt samples integers uniformly from n-1 It is an error to call this function with non-positive",
          "hierarchy": "Control Monad MC Class",
          "module": "Control.Monad.MC.Class",
          "name": "sampleInt",
          "normalized": "Int-\u003ea Int",
          "package": "monte-carlo",
          "partial": "Int",
          "signature": "Int-\u003em Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:sampleInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esampleIntSubset n k\u003c/code\u003e samples a subset of size \u003ccode\u003ek\u003c/code\u003e by sampling without\n replacement from the integers \u003ccode\u003e{ 0, ..., n-1 }\u003c/code\u003e.  The return value is a\n list of length \u003ccode\u003ek\u003c/code\u003e with the elements in the subset in the order that they\n were sampled.  Note also that the elements are lazily generated.\n\u003c/p\u003e",
          "module": "Control.Monad.MC.Class",
          "name": "sampleIntSubset",
          "package": "monte-carlo",
          "signature": "Int -\u003e Int -\u003e m [Int]",
          "source": "src/Control-Monad-MC-Sample.html#sampleIntSubset",
          "type": "function"
        },
        "index": {
          "description": "sampleIntSubset samples subset of size by sampling without replacement from the integers n-1 The return value is list of length with the elements in the subset in the order that they were sampled Note also that the elements are lazily generated",
          "hierarchy": "Control Monad MC Class",
          "module": "Control.Monad.MC.Class",
          "name": "sampleIntSubset",
          "normalized": "Int-\u003eInt-\u003ea[Int]",
          "package": "monte-carlo",
          "partial": "Int Subset",
          "signature": "Int-\u003eInt-\u003em[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:sampleIntSubset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict version of \u003ccode\u003e\u003ca\u003esampleIntSubset\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.MC.Class",
          "name": "sampleIntSubset'",
          "package": "monte-carlo",
          "signature": "Int -\u003e Int -\u003e m [Int]",
          "source": "src/Control-Monad-MC-Sample.html#sampleIntSubset%27",
          "type": "function"
        },
        "index": {
          "description": "Strict version of sampleIntSubset",
          "hierarchy": "Control Monad MC Class",
          "module": "Control.Monad.MC.Class",
          "name": "sampleIntSubset'",
          "normalized": "Int-\u003eInt-\u003ea[Int]",
          "package": "monte-carlo",
          "partial": "Int Subset'",
          "signature": "Int-\u003eInt-\u003em[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:sampleIntSubset-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esampleIntSubsetWithWeights ws n k\u003c/code\u003e samplea size \u003ccode\u003ek\u003c/code\u003e subset of\n \u003ccode\u003e{ 0, ..., n-1 }\u003c/code\u003e with the given weights by sampling elements without\n replacement.  It returns the elements of the subset lazily in the order\n they were sampled.\n\u003c/p\u003e",
          "module": "Control.Monad.MC.Class",
          "name": "sampleIntSubsetWithWeights",
          "package": "monte-carlo",
          "signature": "[Double] -\u003e Int -\u003e Int -\u003e m [Int]",
          "source": "src/Control-Monad-MC-Sample.html#sampleIntSubsetWithWeights",
          "type": "function"
        },
        "index": {
          "description": "sampleIntSubsetWithWeights ws samplea size subset of n-1 with the given weights by sampling elements without replacement It returns the elements of the subset lazily in the order they were sampled",
          "hierarchy": "Control Monad MC Class",
          "module": "Control.Monad.MC.Class",
          "name": "sampleIntSubsetWithWeights",
          "normalized": "[Double]-\u003eInt-\u003eInt-\u003ea[Int]",
          "package": "monte-carlo",
          "partial": "Int Subset With Weights",
          "signature": "[Double]-\u003eInt-\u003eInt-\u003em[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:sampleIntSubsetWithWeights"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict version of \u003ccode\u003e\u003ca\u003esampleIntSubsetWithWeights\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.MC.Class",
          "name": "sampleIntSubsetWithWeights'",
          "package": "monte-carlo",
          "signature": "[Double] -\u003e Int -\u003e Int -\u003e m [Int]",
          "source": "src/Control-Monad-MC-Sample.html#sampleIntSubsetWithWeights%27",
          "type": "function"
        },
        "index": {
          "description": "Strict version of sampleIntSubsetWithWeights",
          "hierarchy": "Control Monad MC Class",
          "module": "Control.Monad.MC.Class",
          "name": "sampleIntSubsetWithWeights'",
          "normalized": "[Double]-\u003eInt-\u003eInt-\u003ea[Int]",
          "package": "monte-carlo",
          "partial": "Int Subset With Weights'",
          "signature": "[Double]-\u003eInt-\u003eInt-\u003em[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:sampleIntSubsetWithWeights-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esampleIntWithWeights ws n\u003c/code\u003e samples integers from \u003ccode\u003e[ 0..n-1 ]\u003c/code\u003e with the\n probability of choosing \u003ccode\u003ei\u003c/code\u003e proportional to \u003ccode\u003ews !! i\u003c/code\u003e.  The list \u003ccode\u003ews\u003c/code\u003e must\n have length equal to \u003ccode\u003en\u003c/code\u003e.  Also, the elements of \u003ccode\u003ews\u003c/code\u003e must be non-negative\n with at least one nonzero entry.\n\u003c/p\u003e",
          "module": "Control.Monad.MC.Class",
          "name": "sampleIntWithWeights",
          "package": "monte-carlo",
          "signature": "[Double] -\u003e Int -\u003e m Int",
          "source": "src/Control-Monad-MC-Sample.html#sampleIntWithWeights",
          "type": "function"
        },
        "index": {
          "description": "sampleIntWithWeights ws samples integers from n-1 with the probability of choosing proportional to ws The list ws must have length equal to Also the elements of ws must be non-negative with at least one nonzero entry",
          "hierarchy": "Control Monad MC Class",
          "module": "Control.Monad.MC.Class",
          "name": "sampleIntWithWeights",
          "normalized": "[Double]-\u003eInt-\u003ea Int",
          "package": "monte-carlo",
          "partial": "Int With Weights",
          "signature": "[Double]-\u003eInt-\u003em Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:sampleIntWithWeights"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esampleSubset xs k\u003c/code\u003e samples a subset of size \u003ccode\u003ek\u003c/code\u003e from \u003ccode\u003exs\u003c/code\u003e by\n sampling without replacement.  The return value is a list of length \u003ccode\u003ek\u003c/code\u003e\n with the elements in the subset in the order that they were sampled.  Note\n also that the elements are lazily generated.\n\u003c/p\u003e",
          "module": "Control.Monad.MC.Class",
          "name": "sampleSubset",
          "package": "monte-carlo",
          "signature": "[a] -\u003e Int -\u003e m [a]",
          "source": "src/Control-Monad-MC-Sample.html#sampleSubset",
          "type": "function"
        },
        "index": {
          "description": "sampleSubset xs samples subset of size from xs by sampling without replacement The return value is list of length with the elements in the subset in the order that they were sampled Note also that the elements are lazily generated",
          "hierarchy": "Control Monad MC Class",
          "module": "Control.Monad.MC.Class",
          "name": "sampleSubset",
          "normalized": "[a]-\u003eInt-\u003eb[a]",
          "package": "monte-carlo",
          "partial": "Subset",
          "signature": "[a]-\u003eInt-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:sampleSubset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict version of \u003ccode\u003e\u003ca\u003esampleSubset\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.MC.Class",
          "name": "sampleSubset'",
          "package": "monte-carlo",
          "signature": "[a] -\u003e Int -\u003e m [a]",
          "source": "src/Control-Monad-MC-Sample.html#sampleSubset%27",
          "type": "function"
        },
        "index": {
          "description": "Strict version of sampleSubset",
          "hierarchy": "Control Monad MC Class",
          "module": "Control.Monad.MC.Class",
          "name": "sampleSubset'",
          "normalized": "[a]-\u003eInt-\u003eb[a]",
          "package": "monte-carlo",
          "partial": "Subset'",
          "signature": "[a]-\u003eInt-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:sampleSubset-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample a subset of the elements with the given weights.  Return\n the elements of the subset lazily in the order they were sampled.\n\u003c/p\u003e",
          "module": "Control.Monad.MC.Class",
          "name": "sampleSubsetWithWeights",
          "package": "monte-carlo",
          "signature": "[(Double, a)] -\u003e Int -\u003e m [a]",
          "source": "src/Control-Monad-MC-Sample.html#sampleSubsetWithWeights",
          "type": "function"
        },
        "index": {
          "description": "Sample subset of the elements with the given weights Return the elements of the subset lazily in the order they were sampled",
          "hierarchy": "Control Monad MC Class",
          "module": "Control.Monad.MC.Class",
          "name": "sampleSubsetWithWeights",
          "normalized": "[(Double,a)]-\u003eInt-\u003eb[a]",
          "package": "monte-carlo",
          "partial": "Subset With Weights",
          "signature": "[(Double,a)]-\u003eInt-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:sampleSubsetWithWeights"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict version of \u003ccode\u003e\u003ca\u003esampleSubsetWithWeights\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.MC.Class",
          "name": "sampleSubsetWithWeights'",
          "package": "monte-carlo",
          "signature": "[(Double, a)] -\u003e Int -\u003e m [a]",
          "source": "src/Control-Monad-MC-Sample.html#sampleSubsetWithWeights%27",
          "type": "function"
        },
        "index": {
          "description": "Strict version of sampleSubsetWithWeights",
          "hierarchy": "Control Monad MC Class",
          "module": "Control.Monad.MC.Class",
          "name": "sampleSubsetWithWeights'",
          "normalized": "[(Double,a)]-\u003eInt-\u003eb[a]",
          "package": "monte-carlo",
          "partial": "Subset With Weights'",
          "signature": "[(Double,a)]-\u003eInt-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:sampleSubsetWithWeights-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esampleWithWeights wxs\u003c/code\u003e samples a value from the list with the given\n weight.\n\u003c/p\u003e",
          "module": "Control.Monad.MC.Class",
          "name": "sampleWithWeights",
          "package": "monte-carlo",
          "signature": "[(Double, a)] -\u003e m a",
          "source": "src/Control-Monad-MC-Sample.html#sampleWithWeights",
          "type": "function"
        },
        "index": {
          "description": "sampleWithWeights wxs samples value from the list with the given weight",
          "hierarchy": "Control Monad MC Class",
          "module": "Control.Monad.MC.Class",
          "name": "sampleWithWeights",
          "normalized": "[(Double,a)]-\u003eb a",
          "package": "monte-carlo",
          "partial": "With Weights",
          "signature": "[(Double,a)]-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:sampleWithWeights"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the current random number generator.\n\u003c/p\u003e",
          "module": "Control.Monad.MC.Class",
          "name": "setRNG",
          "package": "monte-carlo",
          "signature": "RNG m -\u003e m ()",
          "source": "src/Control-Monad-MC-Base.html#setRNG",
          "type": "method"
        },
        "index": {
          "description": "Set the current random number generator",
          "hierarchy": "Control Monad MC Class",
          "module": "Control.Monad.MC.Class",
          "name": "setRNG",
          "normalized": "RNG a-\u003ea()",
          "package": "monte-carlo",
          "partial": "RNG",
          "signature": "RNG m-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:setRNG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eshuffle xs\u003c/code\u003e randomly permutes the list \u003ccode\u003exs\u003c/code\u003e and returns\n the result.  All permutations of the elements of \u003ccode\u003exs\u003c/code\u003e are equally\n likely.\n\u003c/p\u003e",
          "module": "Control.Monad.MC.Class",
          "name": "shuffle",
          "package": "monte-carlo",
          "signature": "[a] -\u003e m [a]",
          "source": "src/Control-Monad-MC-Sample.html#shuffle",
          "type": "function"
        },
        "index": {
          "description": "shuffle xs randomly permutes the list xs and returns the result All permutations of the elements of xs are equally likely",
          "hierarchy": "Control Monad MC Class",
          "module": "Control.Monad.MC.Class",
          "name": "shuffle",
          "normalized": "[a]-\u003eb[a]",
          "package": "monte-carlo",
          "signature": "[a]-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:shuffle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eshuffleInt n\u003c/code\u003e generates a sequence of swaps equivalent to a\n uniformly-chosen random permutatation of the integers \u003ccode\u003e{0, ..., n-1}\u003c/code\u003e.\n For an input of \u003ccode\u003en\u003c/code\u003e, there are \u003ccode\u003en-1\u003c/code\u003e swaps, which are lazily generated.\n\u003c/p\u003e",
          "module": "Control.Monad.MC.Class",
          "name": "shuffleInt",
          "package": "monte-carlo",
          "signature": "Int -\u003e m [(Int, Int)]",
          "source": "src/Control-Monad-MC-Sample.html#shuffleInt",
          "type": "function"
        },
        "index": {
          "description": "shuffleInt generates sequence of swaps equivalent to uniformly-chosen random permutatation of the integers n-1 For an input of there are n-1 swaps which are lazily generated",
          "hierarchy": "Control Monad MC Class",
          "module": "Control.Monad.MC.Class",
          "name": "shuffleInt",
          "normalized": "Int-\u003ea[(Int,Int)]",
          "package": "monte-carlo",
          "partial": "Int",
          "signature": "Int-\u003em[(Int,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:shuffleInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict version of \u003ccode\u003e\u003ca\u003eshuffleInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.MC.Class",
          "name": "shuffleInt'",
          "package": "monte-carlo",
          "signature": "Int -\u003e m [(Int, Int)]",
          "source": "src/Control-Monad-MC-Sample.html#shuffleInt%27",
          "type": "function"
        },
        "index": {
          "description": "Strict version of shuffleInt",
          "hierarchy": "Control Monad MC Class",
          "module": "Control.Monad.MC.Class",
          "name": "shuffleInt'",
          "normalized": "Int-\u003ea[(Int,Int)]",
          "package": "monte-carlo",
          "partial": "Int'",
          "signature": "Int-\u003em[(Int,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:shuffleInt-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003euniform a b\u003c/code\u003e generates a value uniformly distributed in \u003ccode\u003e[a,b)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.MC.Class",
          "name": "uniform",
          "package": "monte-carlo",
          "signature": "Double -\u003e Double -\u003e m Double",
          "source": "src/Control-Monad-MC-Base.html#uniform",
          "type": "method"
        },
        "index": {
          "description": "uniform generates value uniformly distributed in",
          "hierarchy": "Control Monad MC Class",
          "module": "Control.Monad.MC.Class",
          "name": "uniform",
          "normalized": "Double-\u003eDouble-\u003ea Double",
          "package": "monte-carlo",
          "signature": "Double-\u003eDouble-\u003em Double",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:uniform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003euniformInt n\u003c/code\u003e generates an integer uniformly in the range \u003ccode\u003e[0,n-1]\u003c/code\u003e.\n It is an error to call this function with a non-positive value.\n\u003c/p\u003e",
          "module": "Control.Monad.MC.Class",
          "name": "uniformInt",
          "package": "monte-carlo",
          "signature": "Int -\u003e m Int",
          "source": "src/Control-Monad-MC-Base.html#uniformInt",
          "type": "method"
        },
        "index": {
          "description": "uniformInt generates an integer uniformly in the range n-1 It is an error to call this function with non-positive value",
          "hierarchy": "Control Monad MC Class",
          "module": "Control.Monad.MC.Class",
          "name": "uniformInt",
          "normalized": "Int-\u003ea Int",
          "package": "monte-carlo",
          "partial": "Int",
          "signature": "Int-\u003em Int",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:uniformInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the baton from the Monte Carlo monad without performing any\n computations.  Useful but dangerous.\n\u003c/p\u003e",
          "module": "Control.Monad.MC.Class",
          "name": "unsafeInterleaveMC",
          "package": "monte-carlo",
          "signature": "m a -\u003e m a",
          "source": "src/Control-Monad-MC-Base.html#unsafeInterleaveMC",
          "type": "method"
        },
        "index": {
          "description": "Get the baton from the Monte Carlo monad without performing any computations Useful but dangerous",
          "hierarchy": "Control Monad MC Class",
          "module": "Control.Monad.MC.Class",
          "name": "unsafeInterleaveMC",
          "normalized": "a b-\u003ea b",
          "package": "monte-carlo",
          "partial": "Interleave MC",
          "signature": "m a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:unsafeInterleaveMC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eweibull a b\u003c/code\u003e generates a Weibull random variable with\n scale \u003ccode\u003ea\u003c/code\u003e and exponent \u003ccode\u003eb\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.MC.Class",
          "name": "weibull",
          "package": "monte-carlo",
          "signature": "Double -\u003e Double -\u003e m Double",
          "source": "src/Control-Monad-MC-Base.html#weibull",
          "type": "method"
        },
        "index": {
          "description": "weibull generates Weibull random variable with scale and exponent",
          "hierarchy": "Control Monad MC Class",
          "module": "Control.Monad.MC.Class",
          "name": "weibull",
          "normalized": "Double-\u003eDouble-\u003ea Double",
          "package": "monte-carlo",
          "signature": "Double-\u003eDouble-\u003em Double",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:weibull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA monad and monad transformer for monte carlo computations built on top\n of the functions in the GNU Scientific Library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.MC.GSL",
          "name": "GSL",
          "package": "monte-carlo",
          "source": "src/Control-Monad-MC-GSL.html",
          "type": "module"
        },
        "index": {
          "description": "monad and monad transformer for monte carlo computations built on top of the functions in the GNU Scientific Library",
          "hierarchy": "Control Monad MC GSL",
          "module": "Control.Monad.MC.GSL",
          "name": "GSL",
          "package": "monte-carlo",
          "partial": "GSL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-GSL.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Monte Carlo monad with an internal random number generator.\n\u003c/p\u003e",
          "module": "Control.Monad.MC.GSL",
          "name": "MC",
          "package": "monte-carlo",
          "source": "src/Control-Monad-MC-GSLBase.html#MC",
          "type": "data"
        },
        "index": {
          "description": "Monte Carlo monad with an internal random number generator",
          "hierarchy": "Control Monad MC GSL",
          "module": "Control.Monad.MC.GSL",
          "name": "MC",
          "package": "monte-carlo",
          "partial": "MC",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-GSL.html#t:MC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA parameterizable Monte Carlo monad for encapsulating an inner\n monad.\n\u003c/p\u003e",
          "module": "Control.Monad.MC.GSL",
          "name": "MCT",
          "package": "monte-carlo",
          "source": "src/Control-Monad-MC-GSLBase.html#MCT",
          "type": "data"
        },
        "index": {
          "description": "parameterizable Monte Carlo monad for encapsulating an inner monad",
          "hierarchy": "Control Monad MC GSL",
          "module": "Control.Monad.MC.GSL",
          "name": "MCT",
          "package": "monte-carlo",
          "partial": "MCT",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-GSL.html#t:MCT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe random number generator type associated with \u003ccode\u003e\u003ca\u003eMC\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eMCT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.MC.GSL",
          "name": "RNG",
          "package": "monte-carlo",
          "source": "src/Control-Monad-MC-GSLBase.html#RNG",
          "type": "data"
        },
        "index": {
          "description": "The random number generator type associated with MC and MCT",
          "hierarchy": "Control Monad MC GSL",
          "module": "Control.Monad.MC.GSL",
          "name": "RNG",
          "package": "monte-carlo",
          "partial": "RNG",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-GSL.html#t:RNG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe seed type for the random number generators.\n\u003c/p\u003e",
          "module": "Control.Monad.MC.GSL",
          "name": "Seed",
          "package": "monte-carlo",
          "source": "src/Control-Monad-MC-GSLBase.html#Seed",
          "type": "type"
        },
        "index": {
          "description": "The seed type for the random number generators",
          "hierarchy": "Control Monad MC GSL",
          "module": "Control.Monad.MC.GSL",
          "name": "Seed",
          "package": "monte-carlo",
          "partial": "Seed",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-GSL.html#t:Seed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate this Monte Carlo monad and throw away the final random number\n generator.  Very much like \u003ccode\u003efst\u003c/code\u003e composed with \u003ccode\u003erunMC\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.MC.GSL",
          "name": "evalMC",
          "package": "monte-carlo",
          "signature": "MC a -\u003e RNG -\u003e a",
          "source": "src/Control-Monad-MC-GSLBase.html#evalMC",
          "type": "function"
        },
        "index": {
          "description": "Evaluate this Monte Carlo monad and throw away the final random number generator Very much like fst composed with runMC",
          "hierarchy": "Control Monad MC GSL",
          "module": "Control.Monad.MC.GSL",
          "name": "evalMC",
          "normalized": "MC a-\u003eRNG-\u003ea",
          "package": "monte-carlo",
          "partial": "MC",
          "signature": "MC a-\u003eRNG-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-GSL.html#v:evalMC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003eevalMC\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.MC.GSL",
          "name": "evalMCT",
          "package": "monte-carlo",
          "signature": "MCT m a -\u003e RNG -\u003e m a",
          "source": "src/Control-Monad-MC-GSLBase.html#evalMCT",
          "type": "function"
        },
        "index": {
          "description": "Similar to evalMC",
          "hierarchy": "Control Monad MC GSL",
          "module": "Control.Monad.MC.GSL",
          "name": "evalMCT",
          "normalized": "MCT a b-\u003eRNG-\u003ea b",
          "package": "monte-carlo",
          "partial": "MCT",
          "signature": "MCT m a-\u003eRNG-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-GSL.html#v:evalMCT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExicute this Monte Carlo monad and return the final random number\n generator.  Very much like \u003ccode\u003esnd\u003c/code\u003e composed with \u003ccode\u003erunMC\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.MC.GSL",
          "name": "execMC",
          "package": "monte-carlo",
          "signature": "MC a -\u003e RNG -\u003e RNG",
          "source": "src/Control-Monad-MC-GSLBase.html#execMC",
          "type": "function"
        },
        "index": {
          "description": "Exicute this Monte Carlo monad and return the final random number generator Very much like snd composed with runMC",
          "hierarchy": "Control Monad MC GSL",
          "module": "Control.Monad.MC.GSL",
          "name": "execMC",
          "normalized": "MC a-\u003eRNG-\u003eRNG",
          "package": "monte-carlo",
          "partial": "MC",
          "signature": "MC a-\u003eRNG-\u003eRNG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-GSL.html#v:execMC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003eexecMC\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.MC.GSL",
          "name": "execMCT",
          "package": "monte-carlo",
          "signature": "MCT m a -\u003e RNG -\u003e m RNG",
          "source": "src/Control-Monad-MC-GSLBase.html#execMCT",
          "type": "function"
        },
        "index": {
          "description": "Similar to execMC",
          "hierarchy": "Control Monad MC GSL",
          "module": "Control.Monad.MC.GSL",
          "name": "execMCT",
          "normalized": "MCT a b-\u003eRNG-\u003ea RNG",
          "package": "monte-carlo",
          "partial": "MCT",
          "signature": "MCT m a-\u003eRNG-\u003em RNG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-GSL.html#v:execMCT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a Mersenne Twister random number generator seeded with the given\n value.\n\u003c/p\u003e",
          "module": "Control.Monad.MC.GSL",
          "name": "mt19937",
          "package": "monte-carlo",
          "signature": "Seed -\u003e RNG",
          "source": "src/Control-Monad-MC-GSLBase.html#mt19937",
          "type": "function"
        },
        "index": {
          "description": "Get Mersenne Twister random number generator seeded with the given value",
          "hierarchy": "Control Monad MC GSL",
          "module": "Control.Monad.MC.GSL",
          "name": "mt19937",
          "normalized": "Seed-\u003eRNG",
          "package": "monte-carlo",
          "signature": "Seed-\u003eRNG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-GSL.html#v:mt19937"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a Mersenne Twister seeded with the given state.\n\u003c/p\u003e",
          "module": "Control.Monad.MC.GSL",
          "name": "mt19937WithState",
          "package": "monte-carlo",
          "signature": "[Word8] -\u003e RNG",
          "source": "src/Control-Monad-MC-GSLBase.html#mt19937WithState",
          "type": "function"
        },
        "index": {
          "description": "Get Mersenne Twister seeded with the given state",
          "hierarchy": "Control Monad MC GSL",
          "module": "Control.Monad.MC.GSL",
          "name": "mt19937WithState",
          "normalized": "[Word]-\u003eRNG",
          "package": "monte-carlo",
          "partial": "With State",
          "signature": "[Word]-\u003eRNG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-GSL.html#v:mt19937WithState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the name of the random number generator algorithm.\n\u003c/p\u003e",
          "module": "Control.Monad.MC.GSL",
          "name": "rngName",
          "package": "monte-carlo",
          "signature": "RNG -\u003e String",
          "source": "src/Control-Monad-MC-GSLBase.html#rngName",
          "type": "function"
        },
        "index": {
          "description": "Get the name of the random number generator algorithm",
          "hierarchy": "Control Monad MC GSL",
          "module": "Control.Monad.MC.GSL",
          "name": "rngName",
          "normalized": "RNG-\u003eString",
          "package": "monte-carlo",
          "partial": "Name",
          "signature": "RNG-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-GSL.html#v:rngName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the size of the generator state, in bytes.\n\u003c/p\u003e",
          "module": "Control.Monad.MC.GSL",
          "name": "rngSize",
          "package": "monte-carlo",
          "signature": "RNG -\u003e Int",
          "source": "src/Control-Monad-MC-GSLBase.html#rngSize",
          "type": "function"
        },
        "index": {
          "description": "Get the size of the generator state in bytes",
          "hierarchy": "Control Monad MC GSL",
          "module": "Control.Monad.MC.GSL",
          "name": "rngSize",
          "normalized": "RNG-\u003eInt",
          "package": "monte-carlo",
          "partial": "Size",
          "signature": "RNG-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-GSL.html#v:rngSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the state of the generator.\n\u003c/p\u003e",
          "module": "Control.Monad.MC.GSL",
          "name": "rngState",
          "package": "monte-carlo",
          "signature": "RNG -\u003e [Word8]",
          "source": "src/Control-Monad-MC-GSLBase.html#rngState",
          "type": "function"
        },
        "index": {
          "description": "Get the state of the generator",
          "hierarchy": "Control Monad MC GSL",
          "module": "Control.Monad.MC.GSL",
          "name": "rngState",
          "normalized": "RNG-\u003e[Word]",
          "package": "monte-carlo",
          "partial": "State",
          "signature": "RNG-\u003e[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-GSL.html#v:rngState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun this Monte Carlo monad with the given initial random number generator,\n getting the result and the new random number generator.\n\u003c/p\u003e",
          "module": "Control.Monad.MC.GSL",
          "name": "runMC",
          "package": "monte-carlo",
          "signature": "MC a -\u003e RNG -\u003e (a, RNG)",
          "source": "src/Control-Monad-MC-GSLBase.html#runMC",
          "type": "function"
        },
        "index": {
          "description": "Run this Monte Carlo monad with the given initial random number generator getting the result and the new random number generator",
          "hierarchy": "Control Monad MC GSL",
          "module": "Control.Monad.MC.GSL",
          "name": "runMC",
          "normalized": "MC a-\u003eRNG-\u003e(a,RNG)",
          "package": "monte-carlo",
          "partial": "MC",
          "signature": "MC a-\u003eRNG-\u003e(a,RNG)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-GSL.html#v:runMC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003erunMC\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.MC.GSL",
          "name": "runMCT",
          "package": "monte-carlo",
          "signature": "MCT m a -\u003e RNG -\u003e m (a, RNG)",
          "source": "src/Control-Monad-MC-GSLBase.html#runMCT",
          "type": "function"
        },
        "index": {
          "description": "Similar to runMC",
          "hierarchy": "Control Monad MC GSL",
          "module": "Control.Monad.MC.GSL",
          "name": "runMCT",
          "normalized": "MCT a b-\u003eRNG-\u003ea(b,RNG)",
          "package": "monte-carlo",
          "partial": "MCT",
          "signature": "MCT m a-\u003eRNG-\u003em(a,RNG)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-GSL.html#v:runMCT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA monad and monad transformer for monte carlo computations.  Currently,\n the default is the GNU Scientific Library-based implementation, but this\n may change in the future.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.MC",
          "name": "MC",
          "package": "monte-carlo",
          "source": "src/Control-Monad-MC.html",
          "type": "module"
        },
        "index": {
          "description": "monad and monad transformer for monte carlo computations Currently the default is the GNU Scientific Library-based implementation but this may change in the future",
          "hierarchy": "Control Monad MC",
          "module": "Control.Monad.MC",
          "name": "MC",
          "package": "monte-carlo",
          "partial": "MC",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary statistics for \u003ccode\u003eBool\u003c/code\u003es.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Summary.Bool",
          "name": "Bool",
          "package": "monte-carlo",
          "source": "src/Data-Summary-Bool.html",
          "type": "module"
        },
        "index": {
          "description": "Summary statistics for Bool",
          "hierarchy": "Data Summary Bool",
          "module": "Data.Summary.Bool",
          "name": "Bool",
          "package": "monte-carlo",
          "partial": "Bool",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Data-Summary-Bool.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type for storing summary statistics for a data set of\n booleans.  Specifically, this just keeps track of the number\n of \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e events and gives estimates for the success\n probability.  \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e is interpreted as a one, and \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e\n is interpreted as a zero.\n\u003c/p\u003e",
          "module": "Data.Summary.Bool",
          "name": "Summary",
          "package": "monte-carlo",
          "source": "src/Data-Summary-Bool.html#Summary",
          "type": "data"
        },
        "index": {
          "description": "type for storing summary statistics for data set of booleans Specifically this just keeps track of the number of True events and gives estimates for the success probability True is interpreted as one and False is interpreted as zero",
          "hierarchy": "Data Summary Bool",
          "module": "Data.Summary.Bool",
          "name": "Summary",
          "package": "monte-carlo",
          "partial": "Summary",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Data-Summary-Bool.html#t:Summary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the number of \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e values\n\u003c/p\u003e",
          "module": "Data.Summary.Bool",
          "name": "count",
          "package": "monte-carlo",
          "signature": "Summary -\u003e Int",
          "source": "src/Data-Summary-Bool.html#count",
          "type": "function"
        },
        "index": {
          "description": "Get the number of True values",
          "hierarchy": "Data Summary Bool",
          "module": "Data.Summary.Bool",
          "name": "count",
          "normalized": "Summary-\u003eInt",
          "package": "monte-carlo",
          "signature": "Summary-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Data-Summary-Bool.html#v:count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a Central Limit Theorem-based confidence interval for the mean\n with the specified coverage level.  The level must be in the range \u003ccode\u003e(0,1)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Summary.Bool",
          "name": "sampleCI",
          "package": "monte-carlo",
          "signature": "Double -\u003e Summary -\u003e (Double, Double)",
          "source": "src/Data-Summary-Bool.html#sampleCI",
          "type": "function"
        },
        "index": {
          "description": "Get Central Limit Theorem-based confidence interval for the mean with the specified coverage level The level must be in the range",
          "hierarchy": "Data Summary Bool",
          "module": "Data.Summary.Bool",
          "name": "sampleCI",
          "normalized": "Double-\u003eSummary-\u003e(Double,Double)",
          "package": "monte-carlo",
          "partial": "CI",
          "signature": "Double-\u003eSummary-\u003e(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Data-Summary-Bool.html#v:sampleCI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the proportion of \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e events.\n\u003c/p\u003e",
          "module": "Data.Summary.Bool",
          "name": "sampleMean",
          "package": "monte-carlo",
          "signature": "Summary -\u003e Double",
          "source": "src/Data-Summary-Bool.html#sampleMean",
          "type": "function"
        },
        "index": {
          "description": "Get the proportion of True events",
          "hierarchy": "Data Summary Bool",
          "module": "Data.Summary.Bool",
          "name": "sampleMean",
          "normalized": "Summary-\u003eDouble",
          "package": "monte-carlo",
          "partial": "Mean",
          "signature": "Summary-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Data-Summary-Bool.html#v:sampleMean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the standard error for the sample proportion.\n\u003c/p\u003e",
          "module": "Data.Summary.Bool",
          "name": "sampleSE",
          "package": "monte-carlo",
          "signature": "Summary -\u003e Double",
          "source": "src/Data-Summary-Bool.html#sampleSE",
          "type": "function"
        },
        "index": {
          "description": "Get the standard error for the sample proportion",
          "hierarchy": "Data Summary Bool",
          "module": "Data.Summary.Bool",
          "name": "sampleSE",
          "normalized": "Summary-\u003eDouble",
          "package": "monte-carlo",
          "partial": "SE",
          "signature": "Summary-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Data-Summary-Bool.html#v:sampleSE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the sample size.\n\u003c/p\u003e",
          "module": "Data.Summary.Bool",
          "name": "sampleSize",
          "package": "monte-carlo",
          "signature": "Summary -\u003e Int",
          "source": "src/Data-Summary-Bool.html#sampleSize",
          "type": "function"
        },
        "index": {
          "description": "Get the sample size",
          "hierarchy": "Data Summary Bool",
          "module": "Data.Summary.Bool",
          "name": "sampleSize",
          "normalized": "Summary-\u003eInt",
          "package": "monte-carlo",
          "partial": "Size",
          "signature": "Summary-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Data-Summary-Bool.html#v:sampleSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a summary of a list of values.\n\u003c/p\u003e",
          "module": "Data.Summary.Bool",
          "name": "summary",
          "package": "monte-carlo",
          "signature": "[Bool] -\u003e Summary",
          "source": "src/Data-Summary-Bool.html#summary",
          "type": "function"
        },
        "index": {
          "description": "Get summary of list of values",
          "hierarchy": "Data Summary Bool",
          "module": "Data.Summary.Bool",
          "name": "summary",
          "normalized": "[Bool]-\u003eSummary",
          "package": "monte-carlo",
          "signature": "[Bool]-\u003eSummary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Data-Summary-Bool.html#v:summary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate the summary with a data point.\n\u003c/p\u003e",
          "module": "Data.Summary.Bool",
          "name": "update",
          "package": "monte-carlo",
          "signature": "Summary -\u003e Bool -\u003e Summary",
          "source": "src/Data-Summary-Bool.html#update",
          "type": "function"
        },
        "index": {
          "description": "Update the summary with data point",
          "hierarchy": "Data Summary Bool",
          "module": "Data.Summary.Bool",
          "name": "update",
          "normalized": "Summary-\u003eBool-\u003eSummary",
          "package": "monte-carlo",
          "signature": "Summary-\u003eBool-\u003eSummary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Data-Summary-Bool.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary statistics for \u003ccode\u003eDouble\u003c/code\u003es.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Summary.Double",
          "name": "Double",
          "package": "monte-carlo",
          "source": "src/Data-Summary-Double.html",
          "type": "module"
        },
        "index": {
          "description": "Summary statistics for Double",
          "hierarchy": "Data Summary Double",
          "module": "Data.Summary.Double",
          "name": "Double",
          "package": "monte-carlo",
          "partial": "Double",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Data-Summary-Double.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type for storing summary statistics for a data set including\n sample size, min and max values, and first and second moments.\n\u003c/p\u003e",
          "module": "Data.Summary.Double",
          "name": "Summary",
          "package": "monte-carlo",
          "source": "src/Data-Summary-Double.html#Summary",
          "type": "data"
        },
        "index": {
          "description": "type for storing summary statistics for data set including sample size min and max values and first and second moments",
          "hierarchy": "Data Summary Double",
          "module": "Data.Summary.Double",
          "name": "Summary",
          "package": "monte-carlo",
          "partial": "Summary",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Data-Summary-Double.html#t:Summary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a Central Limit Theorem-based confidence interval for the mean\n with the specified coverage level.  The level must be in the range \u003ccode\u003e(0,1)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Summary.Double",
          "name": "sampleCI",
          "package": "monte-carlo",
          "signature": "Double -\u003e Summary -\u003e (Double, Double)",
          "source": "src/Data-Summary-Double.html#sampleCI",
          "type": "function"
        },
        "index": {
          "description": "Get Central Limit Theorem-based confidence interval for the mean with the specified coverage level The level must be in the range",
          "hierarchy": "Data Summary Double",
          "module": "Data.Summary.Double",
          "name": "sampleCI",
          "normalized": "Double-\u003eSummary-\u003e(Double,Double)",
          "package": "monte-carlo",
          "partial": "CI",
          "signature": "Double-\u003eSummary-\u003e(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Data-Summary-Double.html#v:sampleCI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the maximum of the sample.\n\u003c/p\u003e",
          "module": "Data.Summary.Double",
          "name": "sampleMax",
          "package": "monte-carlo",
          "signature": "Summary -\u003e Double",
          "source": "src/Data-Summary-Double.html#sampleMax",
          "type": "function"
        },
        "index": {
          "description": "Get the maximum of the sample",
          "hierarchy": "Data Summary Double",
          "module": "Data.Summary.Double",
          "name": "sampleMax",
          "normalized": "Summary-\u003eDouble",
          "package": "monte-carlo",
          "partial": "Max",
          "signature": "Summary-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Data-Summary-Double.html#v:sampleMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the sample mean.\n\u003c/p\u003e",
          "module": "Data.Summary.Double",
          "name": "sampleMean",
          "package": "monte-carlo",
          "signature": "Summary -\u003e Double",
          "source": "src/Data-Summary-Double.html#sampleMean",
          "type": "function"
        },
        "index": {
          "description": "Get the sample mean",
          "hierarchy": "Data Summary Double",
          "module": "Data.Summary.Double",
          "name": "sampleMean",
          "normalized": "Summary-\u003eDouble",
          "package": "monte-carlo",
          "partial": "Mean",
          "signature": "Summary-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Data-Summary-Double.html#v:sampleMean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the minimum of the sample.\n\u003c/p\u003e",
          "module": "Data.Summary.Double",
          "name": "sampleMin",
          "package": "monte-carlo",
          "signature": "Summary -\u003e Double",
          "source": "src/Data-Summary-Double.html#sampleMin",
          "type": "function"
        },
        "index": {
          "description": "Get the minimum of the sample",
          "hierarchy": "Data Summary Double",
          "module": "Data.Summary.Double",
          "name": "sampleMin",
          "normalized": "Summary-\u003eDouble",
          "package": "monte-carlo",
          "partial": "Min",
          "signature": "Summary-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Data-Summary-Double.html#v:sampleMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the sample standard deviation.\n\u003c/p\u003e",
          "module": "Data.Summary.Double",
          "name": "sampleSD",
          "package": "monte-carlo",
          "signature": "Summary -\u003e Double",
          "source": "src/Data-Summary-Double.html#sampleSD",
          "type": "function"
        },
        "index": {
          "description": "Get the sample standard deviation",
          "hierarchy": "Data Summary Double",
          "module": "Data.Summary.Double",
          "name": "sampleSD",
          "normalized": "Summary-\u003eDouble",
          "package": "monte-carlo",
          "partial": "SD",
          "signature": "Summary-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Data-Summary-Double.html#v:sampleSD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the sample standard error.\n\u003c/p\u003e",
          "module": "Data.Summary.Double",
          "name": "sampleSE",
          "package": "monte-carlo",
          "signature": "Summary -\u003e Double",
          "source": "src/Data-Summary-Double.html#sampleSE",
          "type": "function"
        },
        "index": {
          "description": "Get the sample standard error",
          "hierarchy": "Data Summary Double",
          "module": "Data.Summary.Double",
          "name": "sampleSE",
          "normalized": "Summary-\u003eDouble",
          "package": "monte-carlo",
          "partial": "SE",
          "signature": "Summary-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Data-Summary-Double.html#v:sampleSE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the sample size.\n\u003c/p\u003e",
          "module": "Data.Summary.Double",
          "name": "sampleSize",
          "package": "monte-carlo",
          "signature": "Summary -\u003e Int",
          "source": "src/Data-Summary-Double.html#sampleSize",
          "type": "function"
        },
        "index": {
          "description": "Get the sample size",
          "hierarchy": "Data Summary Double",
          "module": "Data.Summary.Double",
          "name": "sampleSize",
          "normalized": "Summary-\u003eInt",
          "package": "monte-carlo",
          "partial": "Size",
          "signature": "Summary-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Data-Summary-Double.html#v:sampleSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the sample variance.\n\u003c/p\u003e",
          "module": "Data.Summary.Double",
          "name": "sampleVar",
          "package": "monte-carlo",
          "signature": "Summary -\u003e Double",
          "source": "src/Data-Summary-Double.html#sampleVar",
          "type": "function"
        },
        "index": {
          "description": "Get the sample variance",
          "hierarchy": "Data Summary Double",
          "module": "Data.Summary.Double",
          "name": "sampleVar",
          "normalized": "Summary-\u003eDouble",
          "package": "monte-carlo",
          "partial": "Var",
          "signature": "Summary-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Data-Summary-Double.html#v:sampleVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a summary of a list of values.\n\u003c/p\u003e",
          "module": "Data.Summary.Double",
          "name": "summary",
          "package": "monte-carlo",
          "signature": "[Double] -\u003e Summary",
          "source": "src/Data-Summary-Double.html#summary",
          "type": "function"
        },
        "index": {
          "description": "Get summary of list of values",
          "hierarchy": "Data Summary Double",
          "module": "Data.Summary.Double",
          "name": "summary",
          "normalized": "[Double]-\u003eSummary",
          "package": "monte-carlo",
          "signature": "[Double]-\u003eSummary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Data-Summary-Double.html#v:summary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate the summary with a data point.\n Running mean and variance computed as in Knuth, Vol 2, page 232,\n 3rd edition, see http:\u003cem/\u003ewww.johndcook.com/standard_deviation.html for\n a description.\n\u003c/p\u003e",
          "module": "Data.Summary.Double",
          "name": "update",
          "package": "monte-carlo",
          "signature": "Summary -\u003e Double -\u003e Summary",
          "source": "src/Data-Summary-Double.html#update",
          "type": "function"
        },
        "index": {
          "description": "Update the summary with data point Running mean and variance computed as in Knuth Vol page rd edition see http www.johndcook.com standard deviation.html for description",
          "hierarchy": "Data Summary Double",
          "module": "Data.Summary.Double",
          "name": "update",
          "normalized": "Summary-\u003eDouble-\u003eSummary",
          "package": "monte-carlo",
          "signature": "Summary-\u003eDouble-\u003eSummary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Data-Summary-Double.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities for data summaries.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Summary.Utils",
          "name": "Utils",
          "package": "monte-carlo",
          "source": "src/Data-Summary-Utils.html",
          "type": "module"
        },
        "index": {
          "description": "Utilities for data summaries",
          "hierarchy": "Data Summary Utils",
          "module": "Data.Summary.Utils",
          "name": "Utils",
          "package": "monte-carlo",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Data-Summary-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTests if the value is in the open interval (a,b)\n\u003c/p\u003e",
          "module": "Data.Summary.Utils",
          "name": "inInterval",
          "package": "monte-carlo",
          "signature": "Double -\u003e (Double, Double) -\u003e Bool",
          "source": "src/Data-Summary-Utils.html#inInterval",
          "type": "function"
        },
        "index": {
          "description": "Tests if the value is in the open interval",
          "hierarchy": "Data Summary Utils",
          "module": "Data.Summary.Utils",
          "name": "inInterval",
          "normalized": "Double-\u003e(Double,Double)-\u003eBool",
          "package": "monte-carlo",
          "partial": "Interval",
          "signature": "Double-\u003e(Double,Double)-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Data-Summary-Utils.html#v:inInterval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a Central Limit Theorem-based confidence interval for the\n population mean with the specified coverage level.  The level must\n be in the range \u003ccode\u003e(0,1)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Summary.Utils",
          "name": "interval",
          "package": "monte-carlo",
          "signature": "Double-\u003e Double-\u003e Double-\u003e (Double, Double)",
          "type": "function"
        },
        "index": {
          "description": "Get Central Limit Theorem-based confidence interval for the population mean with the specified coverage level The level must be in the range",
          "hierarchy": "Data Summary Utils",
          "module": "Data.Summary.Utils",
          "name": "interval",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003e(Double,Double)",
          "package": "monte-carlo",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003e(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Data-Summary-Utils.html#v:interval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary Statistics\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Summary",
          "name": "Summary",
          "package": "monte-carlo",
          "source": "src/Data-Summary.html",
          "type": "module"
        },
        "index": {
          "description": "Summary Statistics",
          "hierarchy": "Data Summary",
          "module": "Data.Summary",
          "name": "Summary",
          "package": "monte-carlo",
          "partial": "Summary",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Data-Summary.html#"
      }
    }
  ]
]