[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe abstract MonadMC interface and utility functions for Monte Carlo\n computations.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.MC.Class",
        "fct-package": "monte-carlo",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-MC-Class.html",
        "fct-type": "module",
        "title": "Class"
      },
      "index": {
        "description": "The abstract MonadMC interface and utility functions for Monte Carlo computations",
        "hierarchy": "Control Monad MC Class",
        "module": "Control.Monad.MC.Class",
        "name": "Class",
        "normalized": "",
        "package": "monte-carlo",
        "partial": "Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#t:HasRNG",
      "description": {
        "fct-module": "Control.Monad.MC.Class",
        "fct-package": "monte-carlo",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-MC-Base.html#HasRNG",
        "fct-type": "class",
        "title": "HasRNG"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad MC Class",
        "module": "Control.Monad.MC.Class",
        "name": "HasRNG",
        "normalized": "",
        "package": "monte-carlo",
        "partial": "Has RNG",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#t:MonadMC",
      "description": {
        "fct-module": "Control.Monad.MC.Class",
        "fct-package": "monte-carlo",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-MC-Base.html#MonadMC",
        "fct-type": "class",
        "title": "MonadMC"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad MC Class",
        "module": "Control.Monad.MC.Class",
        "name": "MonadMC",
        "normalized": "",
        "package": "monte-carlo",
        "partial": "Monad MC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:bernoulli",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e events with the given probability\n\u003c/p\u003e",
        "fct-module": "Control.Monad.MC.Class",
        "fct-package": "monte-carlo",
        "fct-signature": "Double -\u003e m Bool",
        "fct-source": "src/Control-Monad-MC-Base.html#bernoulli",
        "fct-type": "function",
        "title": "bernoulli"
      },
      "index": {
        "description": "Generate True events with the given probability",
        "hierarchy": "Control Monad MC Class",
        "module": "Control.Monad.MC.Class",
        "name": "bernoulli",
        "normalized": "Double-\u003ea Bool",
        "package": "monte-carlo",
        "partial": "",
        "signature": "Double-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:beta",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ebeta a b\u003c/code\u003e generates a beta random variable with\n parameters \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.MC.Class",
        "fct-package": "monte-carlo",
        "fct-signature": "Double -\u003e Double -\u003e m Double",
        "fct-source": "src/Control-Monad-MC-Base.html#beta",
        "fct-type": "method",
        "title": "beta"
      },
      "index": {
        "description": "beta generates beta random variable with parameters and",
        "hierarchy": "Control Monad MC Class",
        "module": "Control.Monad.MC.Class",
        "name": "beta",
        "normalized": "Double-\u003eDouble-\u003ea Double",
        "package": "monte-carlo",
        "partial": "",
        "signature": "Double-\u003eDouble-\u003em Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:cauchy",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ecauchy a\u003c/code\u003e generates a Cauchy random variable with scale\n parameter \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.MC.Class",
        "fct-package": "monte-carlo",
        "fct-signature": "Double -\u003e m Double",
        "fct-source": "src/Control-Monad-MC-Base.html#cauchy",
        "fct-type": "method",
        "title": "cauchy"
      },
      "index": {
        "description": "cauchy generates Cauchy random variable with scale parameter",
        "hierarchy": "Control Monad MC Class",
        "module": "Control.Monad.MC.Class",
        "name": "cauchy",
        "normalized": "Double-\u003ea Double",
        "package": "monte-carlo",
        "partial": "",
        "signature": "Double-\u003em Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:dirichlet",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003edirichlet alphas\u003c/code\u003e generates a Dirichlet random variable\n with parameters \u003ccode\u003ealphas\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.MC.Class",
        "fct-package": "monte-carlo",
        "fct-signature": "Vector Double -\u003e m (Vector Double)",
        "fct-source": "src/Control-Monad-MC-Base.html#dirichlet",
        "fct-type": "method",
        "title": "dirichlet"
      },
      "index": {
        "description": "dirichlet alphas generates Dirichlet random variable with parameters alphas",
        "hierarchy": "Control Monad MC Class",
        "module": "Control.Monad.MC.Class",
        "name": "dirichlet",
        "normalized": "Vector Double-\u003ea(Vector Double)",
        "package": "monte-carlo",
        "partial": "",
        "signature": "Vector Double-\u003em(Vector Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:exponential",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eexponential mu\u003c/code\u003e generates an Exponential variate with mean \u003ccode\u003emu\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.MC.Class",
        "fct-package": "monte-carlo",
        "fct-signature": "Double -\u003e m Double",
        "fct-source": "src/Control-Monad-MC-Base.html#exponential",
        "fct-type": "method",
        "title": "exponential"
      },
      "index": {
        "description": "exponential mu generates an Exponential variate with mean mu",
        "hierarchy": "Control Monad MC Class",
        "module": "Control.Monad.MC.Class",
        "name": "exponential",
        "normalized": "Double-\u003ea Double",
        "package": "monte-carlo",
        "partial": "",
        "signature": "Double-\u003em Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:gamma",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003egamma a b\u003c/code\u003e generates a gamma random variable with\n parameters \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.MC.Class",
        "fct-package": "monte-carlo",
        "fct-signature": "Double -\u003e Double -\u003e m Double",
        "fct-source": "src/Control-Monad-MC-Base.html#gamma",
        "fct-type": "method",
        "title": "gamma"
      },
      "index": {
        "description": "gamma generates gamma random variable with parameters and",
        "hierarchy": "Control Monad MC Class",
        "module": "Control.Monad.MC.Class",
        "name": "gamma",
        "normalized": "Double-\u003eDouble-\u003ea Double",
        "package": "monte-carlo",
        "partial": "",
        "signature": "Double-\u003eDouble-\u003em Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:getRNG",
      "description": {
        "fct-descr": "\u003cp\u003eGet the current random number generator.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.MC.Class",
        "fct-package": "monte-carlo",
        "fct-signature": "m (RNG m)",
        "fct-source": "src/Control-Monad-MC-Base.html#getRNG",
        "fct-type": "method",
        "title": "getRNG"
      },
      "index": {
        "description": "Get the current random number generator",
        "hierarchy": "Control Monad MC Class",
        "module": "Control.Monad.MC.Class",
        "name": "getRNG",
        "normalized": "",
        "package": "monte-carlo",
        "partial": "RNG",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:levy",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003elevy c alpha\u003c/code\u003e gets a Levy alpha-stable variate with scale \u003ccode\u003ec\u003c/code\u003e and\n exponent \u003ccode\u003ealpha\u003c/code\u003e.  The algorithm only works for \u003ccode\u003e0 \u003c alpha \u003c= 2\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.MC.Class",
        "fct-package": "monte-carlo",
        "fct-signature": "Double -\u003e Double -\u003e m Double",
        "fct-source": "src/Control-Monad-MC-Base.html#levy",
        "fct-type": "method",
        "title": "levy"
      },
      "index": {
        "description": "levy alpha gets Levy alpha-stable variate with scale and exponent alpha The algorithm only works for alpha",
        "hierarchy": "Control Monad MC Class",
        "module": "Control.Monad.MC.Class",
        "name": "levy",
        "normalized": "Double-\u003eDouble-\u003ea Double",
        "package": "monte-carlo",
        "partial": "",
        "signature": "Double-\u003eDouble-\u003em Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:levySkew",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003elevySkew c alpha beta \u003c/code\u003e gets a skew Levy alpha-stable variate\n with scale \u003ccode\u003ec\u003c/code\u003e, exponent \u003ccode\u003ealpha\u003c/code\u003e, and skewness \u003ccode\u003ebeta\u003c/code\u003e.  The skew\n parameter must lie in the range \u003ccode\u003e[-1,1]\u003c/code\u003e.  The algorithm only works\n for \u003ccode\u003e0 \u003c alpha \u003c= 2\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.MC.Class",
        "fct-package": "monte-carlo",
        "fct-signature": "Double -\u003e Double -\u003e Double -\u003e m Double",
        "fct-source": "src/Control-Monad-MC-Base.html#levySkew",
        "fct-type": "method",
        "title": "levySkew"
      },
      "index": {
        "description": "levySkew alpha beta gets skew Levy alpha-stable variate with scale exponent alpha and skewness beta The skew parameter must lie in the range The algorithm only works for alpha",
        "hierarchy": "Control Monad MC Class",
        "module": "Control.Monad.MC.Class",
        "name": "levySkew",
        "normalized": "Double-\u003eDouble-\u003eDouble-\u003ea Double",
        "package": "monte-carlo",
        "partial": "Skew",
        "signature": "Double-\u003eDouble-\u003eDouble-\u003em Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:logistic",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003elogistic a\u003c/code\u003e generates a logistic random variable with\n parameter \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.MC.Class",
        "fct-package": "monte-carlo",
        "fct-signature": "Double -\u003e m Double",
        "fct-source": "src/Control-Monad-MC-Base.html#logistic",
        "fct-type": "method",
        "title": "logistic"
      },
      "index": {
        "description": "logistic generates logistic random variable with parameter",
        "hierarchy": "Control Monad MC Class",
        "module": "Control.Monad.MC.Class",
        "name": "logistic",
        "normalized": "Double-\u003ea Double",
        "package": "monte-carlo",
        "partial": "",
        "signature": "Double-\u003em Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:multinomial",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003emultinomial n ps\u003c/code\u003e generates a multinomial random\n variable with parameters \u003ccode\u003eps\u003c/code\u003e formed by \u003ccode\u003en\u003c/code\u003e trials.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.MC.Class",
        "fct-package": "monte-carlo",
        "fct-signature": "Int -\u003e Vector Double -\u003e m (Vector Int)",
        "fct-source": "src/Control-Monad-MC-Base.html#multinomial",
        "fct-type": "method",
        "title": "multinomial"
      },
      "index": {
        "description": "multinomial ps generates multinomial random variable with parameters ps formed by trials",
        "hierarchy": "Control Monad MC Class",
        "module": "Control.Monad.MC.Class",
        "name": "multinomial",
        "normalized": "Int-\u003eVector Double-\u003ea(Vector Int)",
        "package": "monte-carlo",
        "partial": "",
        "signature": "Int-\u003eVector Double-\u003em(Vector Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:normal",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003enormal mu sigma\u003c/code\u003e generates a Normal random variable with mean\n \u003ccode\u003emu\u003c/code\u003e and standard deviation \u003ccode\u003esigma\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.MC.Class",
        "fct-package": "monte-carlo",
        "fct-signature": "Double -\u003e Double -\u003e m Double",
        "fct-source": "src/Control-Monad-MC-Base.html#normal",
        "fct-type": "method",
        "title": "normal"
      },
      "index": {
        "description": "normal mu sigma generates Normal random variable with mean mu and standard deviation sigma",
        "hierarchy": "Control Monad MC Class",
        "module": "Control.Monad.MC.Class",
        "name": "normal",
        "normalized": "Double-\u003eDouble-\u003ea Double",
        "package": "monte-carlo",
        "partial": "",
        "signature": "Double-\u003eDouble-\u003em Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:pareto",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003epareto a b\u003c/code\u003e generates a Pareto random variable with\n exponent \u003ccode\u003ea\u003c/code\u003e and scale \u003ccode\u003eb\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.MC.Class",
        "fct-package": "monte-carlo",
        "fct-signature": "Double -\u003e Double -\u003e m Double",
        "fct-source": "src/Control-Monad-MC-Base.html#pareto",
        "fct-type": "method",
        "title": "pareto"
      },
      "index": {
        "description": "pareto generates Pareto random variable with exponent and scale",
        "hierarchy": "Control Monad MC Class",
        "module": "Control.Monad.MC.Class",
        "name": "pareto",
        "normalized": "Double-\u003eDouble-\u003ea Double",
        "package": "monte-carlo",
        "partial": "",
        "signature": "Double-\u003eDouble-\u003em Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:poisson",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003epoisson mu\u003c/code\u003e generates a Poisson random variable with mean \u003ccode\u003emu\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.MC.Class",
        "fct-package": "monte-carlo",
        "fct-signature": "Double -\u003e m Int",
        "fct-source": "src/Control-Monad-MC-Base.html#poisson",
        "fct-type": "method",
        "title": "poisson"
      },
      "index": {
        "description": "poisson mu generates Poisson random variable with mean mu",
        "hierarchy": "Control Monad MC Class",
        "module": "Control.Monad.MC.Class",
        "name": "poisson",
        "normalized": "Double-\u003ea Int",
        "package": "monte-carlo",
        "partial": "",
        "signature": "Double-\u003em Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:repeatMC",
      "description": {
        "fct-descr": "\u003cp\u003eProduce a lazy infinite list of values from the given Monte Carlo\n generator.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.MC.Class",
        "fct-package": "monte-carlo",
        "fct-signature": "m a -\u003e m [a]",
        "fct-source": "src/Control-Monad-MC-Repeat.html#repeatMC",
        "fct-type": "function",
        "title": "repeatMC"
      },
      "index": {
        "description": "Produce lazy infinite list of values from the given Monte Carlo generator",
        "hierarchy": "Control Monad MC Class",
        "module": "Control.Monad.MC.Class",
        "name": "repeatMC",
        "normalized": "a b-\u003ea[b]",
        "package": "monte-carlo",
        "partial": "MC",
        "signature": "m a-\u003em[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:replicateMC",
      "description": {
        "fct-descr": "\u003cp\u003eProduce a lazy list of the given length using the specified\n generator.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.MC.Class",
        "fct-package": "monte-carlo",
        "fct-signature": "Int -\u003e m a -\u003e m [a]",
        "fct-source": "src/Control-Monad-MC-Repeat.html#replicateMC",
        "fct-type": "function",
        "title": "replicateMC"
      },
      "index": {
        "description": "Produce lazy list of the given length using the specified generator",
        "hierarchy": "Control Monad MC Class",
        "module": "Control.Monad.MC.Class",
        "name": "replicateMC",
        "normalized": "Int-\u003ea b-\u003ea[b]",
        "package": "monte-carlo",
        "partial": "MC",
        "signature": "Int-\u003em a-\u003em[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:sample",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esample xs\u003c/code\u003e samples a value uniformly from the elements of \u003ccode\u003exs\u003c/code\u003e.  The\n results are undefined if \u003ccode\u003elength xs\u003c/code\u003e is zero.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.MC.Class",
        "fct-package": "monte-carlo",
        "fct-signature": "[a] -\u003e m a",
        "fct-source": "src/Control-Monad-MC-Sample.html#sample",
        "fct-type": "function",
        "title": "sample"
      },
      "index": {
        "description": "sample xs samples value uniformly from the elements of xs The results are undefined if length xs is zero",
        "hierarchy": "Control Monad MC Class",
        "module": "Control.Monad.MC.Class",
        "name": "sample",
        "normalized": "[a]-\u003eb a",
        "package": "monte-carlo",
        "partial": "",
        "signature": "[a]-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:sampleInt",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esampleInt n\u003c/code\u003e samples integers uniformly from \u003ccode\u003e[ 0..n-1 ]\u003c/code\u003e.  It is an\n error to call this function with a non-positive \u003ccode\u003en\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.MC.Class",
        "fct-package": "monte-carlo",
        "fct-signature": "Int -\u003e m Int",
        "fct-source": "src/Control-Monad-MC-Sample.html#sampleInt",
        "fct-type": "function",
        "title": "sampleInt"
      },
      "index": {
        "description": "sampleInt samples integers uniformly from n-1 It is an error to call this function with non-positive",
        "hierarchy": "Control Monad MC Class",
        "module": "Control.Monad.MC.Class",
        "name": "sampleInt",
        "normalized": "Int-\u003ea Int",
        "package": "monte-carlo",
        "partial": "Int",
        "signature": "Int-\u003em Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:sampleIntSubset",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esampleIntSubset n k\u003c/code\u003e samples a subset of size \u003ccode\u003ek\u003c/code\u003e by sampling without\n replacement from the integers \u003ccode\u003e{ 0, ..., n-1 }\u003c/code\u003e.  The return value is a\n list of length \u003ccode\u003ek\u003c/code\u003e with the elements in the subset in the order that they\n were sampled.  Note also that the elements are lazily generated.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.MC.Class",
        "fct-package": "monte-carlo",
        "fct-signature": "Int -\u003e Int -\u003e m [Int]",
        "fct-source": "src/Control-Monad-MC-Sample.html#sampleIntSubset",
        "fct-type": "function",
        "title": "sampleIntSubset"
      },
      "index": {
        "description": "sampleIntSubset samples subset of size by sampling without replacement from the integers n-1 The return value is list of length with the elements in the subset in the order that they were sampled Note also that the elements are lazily generated",
        "hierarchy": "Control Monad MC Class",
        "module": "Control.Monad.MC.Class",
        "name": "sampleIntSubset",
        "normalized": "Int-\u003eInt-\u003ea[Int]",
        "package": "monte-carlo",
        "partial": "Int Subset",
        "signature": "Int-\u003eInt-\u003em[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:sampleIntSubset-39-",
      "description": {
        "fct-descr": "\u003cp\u003eStrict version of \u003ccode\u003e\u003ca\u003esampleIntSubset\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.MC.Class",
        "fct-package": "monte-carlo",
        "fct-signature": "Int -\u003e Int -\u003e m [Int]",
        "fct-source": "src/Control-Monad-MC-Sample.html#sampleIntSubset%27",
        "fct-type": "function",
        "title": "sampleIntSubset'"
      },
      "index": {
        "description": "Strict version of sampleIntSubset",
        "hierarchy": "Control Monad MC Class",
        "module": "Control.Monad.MC.Class",
        "name": "sampleIntSubset'",
        "normalized": "Int-\u003eInt-\u003ea[Int]",
        "package": "monte-carlo",
        "partial": "Int Subset'",
        "signature": "Int-\u003eInt-\u003em[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:sampleIntSubsetWithWeights",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esampleIntSubsetWithWeights ws n k\u003c/code\u003e samplea size \u003ccode\u003ek\u003c/code\u003e subset of\n \u003ccode\u003e{ 0, ..., n-1 }\u003c/code\u003e with the given weights by sampling elements without\n replacement.  It returns the elements of the subset lazily in the order\n they were sampled.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.MC.Class",
        "fct-package": "monte-carlo",
        "fct-signature": "[Double] -\u003e Int -\u003e Int -\u003e m [Int]",
        "fct-source": "src/Control-Monad-MC-Sample.html#sampleIntSubsetWithWeights",
        "fct-type": "function",
        "title": "sampleIntSubsetWithWeights"
      },
      "index": {
        "description": "sampleIntSubsetWithWeights ws samplea size subset of n-1 with the given weights by sampling elements without replacement It returns the elements of the subset lazily in the order they were sampled",
        "hierarchy": "Control Monad MC Class",
        "module": "Control.Monad.MC.Class",
        "name": "sampleIntSubsetWithWeights",
        "normalized": "[Double]-\u003eInt-\u003eInt-\u003ea[Int]",
        "package": "monte-carlo",
        "partial": "Int Subset With Weights",
        "signature": "[Double]-\u003eInt-\u003eInt-\u003em[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:sampleIntSubsetWithWeights-39-",
      "description": {
        "fct-descr": "\u003cp\u003eStrict version of \u003ccode\u003e\u003ca\u003esampleIntSubsetWithWeights\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.MC.Class",
        "fct-package": "monte-carlo",
        "fct-signature": "[Double] -\u003e Int -\u003e Int -\u003e m [Int]",
        "fct-source": "src/Control-Monad-MC-Sample.html#sampleIntSubsetWithWeights%27",
        "fct-type": "function",
        "title": "sampleIntSubsetWithWeights'"
      },
      "index": {
        "description": "Strict version of sampleIntSubsetWithWeights",
        "hierarchy": "Control Monad MC Class",
        "module": "Control.Monad.MC.Class",
        "name": "sampleIntSubsetWithWeights'",
        "normalized": "[Double]-\u003eInt-\u003eInt-\u003ea[Int]",
        "package": "monte-carlo",
        "partial": "Int Subset With Weights'",
        "signature": "[Double]-\u003eInt-\u003eInt-\u003em[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:sampleIntWithWeights",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esampleIntWithWeights ws n\u003c/code\u003e samples integers from \u003ccode\u003e[ 0..n-1 ]\u003c/code\u003e with the\n probability of choosing \u003ccode\u003ei\u003c/code\u003e proportional to \u003ccode\u003ews !! i\u003c/code\u003e.  The list \u003ccode\u003ews\u003c/code\u003e must\n have length equal to \u003ccode\u003en\u003c/code\u003e.  Also, the elements of \u003ccode\u003ews\u003c/code\u003e must be non-negative\n with at least one nonzero entry.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.MC.Class",
        "fct-package": "monte-carlo",
        "fct-signature": "[Double] -\u003e Int -\u003e m Int",
        "fct-source": "src/Control-Monad-MC-Sample.html#sampleIntWithWeights",
        "fct-type": "function",
        "title": "sampleIntWithWeights"
      },
      "index": {
        "description": "sampleIntWithWeights ws samples integers from n-1 with the probability of choosing proportional to ws The list ws must have length equal to Also the elements of ws must be non-negative with at least one nonzero entry",
        "hierarchy": "Control Monad MC Class",
        "module": "Control.Monad.MC.Class",
        "name": "sampleIntWithWeights",
        "normalized": "[Double]-\u003eInt-\u003ea Int",
        "package": "monte-carlo",
        "partial": "Int With Weights",
        "signature": "[Double]-\u003eInt-\u003em Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:sampleSubset",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esampleSubset xs k\u003c/code\u003e samples a subset of size \u003ccode\u003ek\u003c/code\u003e from \u003ccode\u003exs\u003c/code\u003e by\n sampling without replacement.  The return value is a list of length \u003ccode\u003ek\u003c/code\u003e\n with the elements in the subset in the order that they were sampled.  Note\n also that the elements are lazily generated.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.MC.Class",
        "fct-package": "monte-carlo",
        "fct-signature": "[a] -\u003e Int -\u003e m [a]",
        "fct-source": "src/Control-Monad-MC-Sample.html#sampleSubset",
        "fct-type": "function",
        "title": "sampleSubset"
      },
      "index": {
        "description": "sampleSubset xs samples subset of size from xs by sampling without replacement The return value is list of length with the elements in the subset in the order that they were sampled Note also that the elements are lazily generated",
        "hierarchy": "Control Monad MC Class",
        "module": "Control.Monad.MC.Class",
        "name": "sampleSubset",
        "normalized": "[a]-\u003eInt-\u003eb[a]",
        "package": "monte-carlo",
        "partial": "Subset",
        "signature": "[a]-\u003eInt-\u003em[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:sampleSubset-39-",
      "description": {
        "fct-descr": "\u003cp\u003eStrict version of \u003ccode\u003e\u003ca\u003esampleSubset\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.MC.Class",
        "fct-package": "monte-carlo",
        "fct-signature": "[a] -\u003e Int -\u003e m [a]",
        "fct-source": "src/Control-Monad-MC-Sample.html#sampleSubset%27",
        "fct-type": "function",
        "title": "sampleSubset'"
      },
      "index": {
        "description": "Strict version of sampleSubset",
        "hierarchy": "Control Monad MC Class",
        "module": "Control.Monad.MC.Class",
        "name": "sampleSubset'",
        "normalized": "[a]-\u003eInt-\u003eb[a]",
        "package": "monte-carlo",
        "partial": "Subset'",
        "signature": "[a]-\u003eInt-\u003em[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:sampleSubsetWithWeights",
      "description": {
        "fct-descr": "\u003cp\u003eSample a subset of the elements with the given weights.  Return\n the elements of the subset lazily in the order they were sampled.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.MC.Class",
        "fct-package": "monte-carlo",
        "fct-signature": "[(Double, a)] -\u003e Int -\u003e m [a]",
        "fct-source": "src/Control-Monad-MC-Sample.html#sampleSubsetWithWeights",
        "fct-type": "function",
        "title": "sampleSubsetWithWeights"
      },
      "index": {
        "description": "Sample subset of the elements with the given weights Return the elements of the subset lazily in the order they were sampled",
        "hierarchy": "Control Monad MC Class",
        "module": "Control.Monad.MC.Class",
        "name": "sampleSubsetWithWeights",
        "normalized": "[(Double,a)]-\u003eInt-\u003eb[a]",
        "package": "monte-carlo",
        "partial": "Subset With Weights",
        "signature": "[(Double,a)]-\u003eInt-\u003em[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:sampleSubsetWithWeights-39-",
      "description": {
        "fct-descr": "\u003cp\u003eStrict version of \u003ccode\u003e\u003ca\u003esampleSubsetWithWeights\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.MC.Class",
        "fct-package": "monte-carlo",
        "fct-signature": "[(Double, a)] -\u003e Int -\u003e m [a]",
        "fct-source": "src/Control-Monad-MC-Sample.html#sampleSubsetWithWeights%27",
        "fct-type": "function",
        "title": "sampleSubsetWithWeights'"
      },
      "index": {
        "description": "Strict version of sampleSubsetWithWeights",
        "hierarchy": "Control Monad MC Class",
        "module": "Control.Monad.MC.Class",
        "name": "sampleSubsetWithWeights'",
        "normalized": "[(Double,a)]-\u003eInt-\u003eb[a]",
        "package": "monte-carlo",
        "partial": "Subset With Weights'",
        "signature": "[(Double,a)]-\u003eInt-\u003em[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:sampleWithWeights",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esampleWithWeights wxs\u003c/code\u003e samples a value from the list with the given\n weight.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.MC.Class",
        "fct-package": "monte-carlo",
        "fct-signature": "[(Double, a)] -\u003e m a",
        "fct-source": "src/Control-Monad-MC-Sample.html#sampleWithWeights",
        "fct-type": "function",
        "title": "sampleWithWeights"
      },
      "index": {
        "description": "sampleWithWeights wxs samples value from the list with the given weight",
        "hierarchy": "Control Monad MC Class",
        "module": "Control.Monad.MC.Class",
        "name": "sampleWithWeights",
        "normalized": "[(Double,a)]-\u003eb a",
        "package": "monte-carlo",
        "partial": "With Weights",
        "signature": "[(Double,a)]-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:setRNG",
      "description": {
        "fct-descr": "\u003cp\u003eSet the current random number generator.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.MC.Class",
        "fct-package": "monte-carlo",
        "fct-signature": "RNG m -\u003e m ()",
        "fct-source": "src/Control-Monad-MC-Base.html#setRNG",
        "fct-type": "method",
        "title": "setRNG"
      },
      "index": {
        "description": "Set the current random number generator",
        "hierarchy": "Control Monad MC Class",
        "module": "Control.Monad.MC.Class",
        "name": "setRNG",
        "normalized": "RNG a-\u003ea()",
        "package": "monte-carlo",
        "partial": "RNG",
        "signature": "RNG m-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:shuffle",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eshuffle xs\u003c/code\u003e randomly permutes the list \u003ccode\u003exs\u003c/code\u003e and returns\n the result.  All permutations of the elements of \u003ccode\u003exs\u003c/code\u003e are equally\n likely.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.MC.Class",
        "fct-package": "monte-carlo",
        "fct-signature": "[a] -\u003e m [a]",
        "fct-source": "src/Control-Monad-MC-Sample.html#shuffle",
        "fct-type": "function",
        "title": "shuffle"
      },
      "index": {
        "description": "shuffle xs randomly permutes the list xs and returns the result All permutations of the elements of xs are equally likely",
        "hierarchy": "Control Monad MC Class",
        "module": "Control.Monad.MC.Class",
        "name": "shuffle",
        "normalized": "[a]-\u003eb[a]",
        "package": "monte-carlo",
        "partial": "",
        "signature": "[a]-\u003em[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:shuffleInt",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eshuffleInt n\u003c/code\u003e generates a sequence of swaps equivalent to a\n uniformly-chosen random permutatation of the integers \u003ccode\u003e{0, ..., n-1}\u003c/code\u003e.\n For an input of \u003ccode\u003en\u003c/code\u003e, there are \u003ccode\u003en-1\u003c/code\u003e swaps, which are lazily generated.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.MC.Class",
        "fct-package": "monte-carlo",
        "fct-signature": "Int -\u003e m [(Int, Int)]",
        "fct-source": "src/Control-Monad-MC-Sample.html#shuffleInt",
        "fct-type": "function",
        "title": "shuffleInt"
      },
      "index": {
        "description": "shuffleInt generates sequence of swaps equivalent to uniformly-chosen random permutatation of the integers n-1 For an input of there are n-1 swaps which are lazily generated",
        "hierarchy": "Control Monad MC Class",
        "module": "Control.Monad.MC.Class",
        "name": "shuffleInt",
        "normalized": "Int-\u003ea[(Int,Int)]",
        "package": "monte-carlo",
        "partial": "Int",
        "signature": "Int-\u003em[(Int,Int)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:shuffleInt-39-",
      "description": {
        "fct-descr": "\u003cp\u003eStrict version of \u003ccode\u003e\u003ca\u003eshuffleInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.MC.Class",
        "fct-package": "monte-carlo",
        "fct-signature": "Int -\u003e m [(Int, Int)]",
        "fct-source": "src/Control-Monad-MC-Sample.html#shuffleInt%27",
        "fct-type": "function",
        "title": "shuffleInt'"
      },
      "index": {
        "description": "Strict version of shuffleInt",
        "hierarchy": "Control Monad MC Class",
        "module": "Control.Monad.MC.Class",
        "name": "shuffleInt'",
        "normalized": "Int-\u003ea[(Int,Int)]",
        "package": "monte-carlo",
        "partial": "Int'",
        "signature": "Int-\u003em[(Int,Int)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:uniform",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003euniform a b\u003c/code\u003e generates a value uniformly distributed in \u003ccode\u003e[a,b)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.MC.Class",
        "fct-package": "monte-carlo",
        "fct-signature": "Double -\u003e Double -\u003e m Double",
        "fct-source": "src/Control-Monad-MC-Base.html#uniform",
        "fct-type": "method",
        "title": "uniform"
      },
      "index": {
        "description": "uniform generates value uniformly distributed in",
        "hierarchy": "Control Monad MC Class",
        "module": "Control.Monad.MC.Class",
        "name": "uniform",
        "normalized": "Double-\u003eDouble-\u003ea Double",
        "package": "monte-carlo",
        "partial": "",
        "signature": "Double-\u003eDouble-\u003em Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:uniformInt",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003euniformInt n\u003c/code\u003e generates an integer uniformly in the range \u003ccode\u003e[0,n-1]\u003c/code\u003e.\n It is an error to call this function with a non-positive value.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.MC.Class",
        "fct-package": "monte-carlo",
        "fct-signature": "Int -\u003e m Int",
        "fct-source": "src/Control-Monad-MC-Base.html#uniformInt",
        "fct-type": "method",
        "title": "uniformInt"
      },
      "index": {
        "description": "uniformInt generates an integer uniformly in the range n-1 It is an error to call this function with non-positive value",
        "hierarchy": "Control Monad MC Class",
        "module": "Control.Monad.MC.Class",
        "name": "uniformInt",
        "normalized": "Int-\u003ea Int",
        "package": "monte-carlo",
        "partial": "Int",
        "signature": "Int-\u003em Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:unsafeInterleaveMC",
      "description": {
        "fct-descr": "\u003cp\u003eGet the baton from the Monte Carlo monad without performing any\n computations.  Useful but dangerous.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.MC.Class",
        "fct-package": "monte-carlo",
        "fct-signature": "m a -\u003e m a",
        "fct-source": "src/Control-Monad-MC-Base.html#unsafeInterleaveMC",
        "fct-type": "method",
        "title": "unsafeInterleaveMC"
      },
      "index": {
        "description": "Get the baton from the Monte Carlo monad without performing any computations Useful but dangerous",
        "hierarchy": "Control Monad MC Class",
        "module": "Control.Monad.MC.Class",
        "name": "unsafeInterleaveMC",
        "normalized": "a b-\u003ea b",
        "package": "monte-carlo",
        "partial": "Interleave MC",
        "signature": "m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-Class.html#v:weibull",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eweibull a b\u003c/code\u003e generates a Weibull random variable with\n scale \u003ccode\u003ea\u003c/code\u003e and exponent \u003ccode\u003eb\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.MC.Class",
        "fct-package": "monte-carlo",
        "fct-signature": "Double -\u003e Double -\u003e m Double",
        "fct-source": "src/Control-Monad-MC-Base.html#weibull",
        "fct-type": "method",
        "title": "weibull"
      },
      "index": {
        "description": "weibull generates Weibull random variable with scale and exponent",
        "hierarchy": "Control Monad MC Class",
        "module": "Control.Monad.MC.Class",
        "name": "weibull",
        "normalized": "Double-\u003eDouble-\u003ea Double",
        "package": "monte-carlo",
        "partial": "",
        "signature": "Double-\u003eDouble-\u003em Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-GSL.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA monad and monad transformer for monte carlo computations built on top\n of the functions in the GNU Scientific Library.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.MC.GSL",
        "fct-package": "monte-carlo",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-MC-GSL.html",
        "fct-type": "module",
        "title": "GSL"
      },
      "index": {
        "description": "monad and monad transformer for monte carlo computations built on top of the functions in the GNU Scientific Library",
        "hierarchy": "Control Monad MC GSL",
        "module": "Control.Monad.MC.GSL",
        "name": "GSL",
        "normalized": "",
        "package": "monte-carlo",
        "partial": "GSL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-GSL.html#t:MC",
      "description": {
        "fct-descr": "\u003cp\u003eA Monte Carlo monad with an internal random number generator.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.MC.GSL",
        "fct-package": "monte-carlo",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-MC-GSLBase.html#MC",
        "fct-type": "data",
        "title": "MC"
      },
      "index": {
        "description": "Monte Carlo monad with an internal random number generator",
        "hierarchy": "Control Monad MC GSL",
        "module": "Control.Monad.MC.GSL",
        "name": "MC",
        "normalized": "",
        "package": "monte-carlo",
        "partial": "MC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-GSL.html#t:MCT",
      "description": {
        "fct-descr": "\u003cp\u003eA parameterizable Monte Carlo monad for encapsulating an inner\n monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.MC.GSL",
        "fct-package": "monte-carlo",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-MC-GSLBase.html#MCT",
        "fct-type": "data",
        "title": "MCT"
      },
      "index": {
        "description": "parameterizable Monte Carlo monad for encapsulating an inner monad",
        "hierarchy": "Control Monad MC GSL",
        "module": "Control.Monad.MC.GSL",
        "name": "MCT",
        "normalized": "",
        "package": "monte-carlo",
        "partial": "MCT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-GSL.html#t:RNG",
      "description": {
        "fct-descr": "\u003cp\u003eThe random number generator type associated with \u003ccode\u003e\u003ca\u003eMC\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eMCT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.MC.GSL",
        "fct-package": "monte-carlo",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-MC-GSLBase.html#RNG",
        "fct-type": "data",
        "title": "RNG"
      },
      "index": {
        "description": "The random number generator type associated with MC and MCT",
        "hierarchy": "Control Monad MC GSL",
        "module": "Control.Monad.MC.GSL",
        "name": "RNG",
        "normalized": "",
        "package": "monte-carlo",
        "partial": "RNG",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-GSL.html#t:Seed",
      "description": {
        "fct-descr": "\u003cp\u003eThe seed type for the random number generators.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.MC.GSL",
        "fct-package": "monte-carlo",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-MC-GSLBase.html#Seed",
        "fct-type": "type",
        "title": "Seed"
      },
      "index": {
        "description": "The seed type for the random number generators",
        "hierarchy": "Control Monad MC GSL",
        "module": "Control.Monad.MC.GSL",
        "name": "Seed",
        "normalized": "",
        "package": "monte-carlo",
        "partial": "Seed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-GSL.html#v:evalMC",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate this Monte Carlo monad and throw away the final random number\n generator.  Very much like \u003ccode\u003efst\u003c/code\u003e composed with \u003ccode\u003erunMC\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.MC.GSL",
        "fct-package": "monte-carlo",
        "fct-signature": "MC a -\u003e RNG -\u003e a",
        "fct-source": "src/Control-Monad-MC-GSLBase.html#evalMC",
        "fct-type": "function",
        "title": "evalMC"
      },
      "index": {
        "description": "Evaluate this Monte Carlo monad and throw away the final random number generator Very much like fst composed with runMC",
        "hierarchy": "Control Monad MC GSL",
        "module": "Control.Monad.MC.GSL",
        "name": "evalMC",
        "normalized": "MC a-\u003eRNG-\u003ea",
        "package": "monte-carlo",
        "partial": "MC",
        "signature": "MC a-\u003eRNG-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-GSL.html#v:evalMCT",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003eevalMC\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.MC.GSL",
        "fct-package": "monte-carlo",
        "fct-signature": "MCT m a -\u003e RNG -\u003e m a",
        "fct-source": "src/Control-Monad-MC-GSLBase.html#evalMCT",
        "fct-type": "function",
        "title": "evalMCT"
      },
      "index": {
        "description": "Similar to evalMC",
        "hierarchy": "Control Monad MC GSL",
        "module": "Control.Monad.MC.GSL",
        "name": "evalMCT",
        "normalized": "MCT a b-\u003eRNG-\u003ea b",
        "package": "monte-carlo",
        "partial": "MCT",
        "signature": "MCT m a-\u003eRNG-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-GSL.html#v:execMC",
      "description": {
        "fct-descr": "\u003cp\u003eExicute this Monte Carlo monad and return the final random number\n generator.  Very much like \u003ccode\u003esnd\u003c/code\u003e composed with \u003ccode\u003erunMC\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.MC.GSL",
        "fct-package": "monte-carlo",
        "fct-signature": "MC a -\u003e RNG -\u003e RNG",
        "fct-source": "src/Control-Monad-MC-GSLBase.html#execMC",
        "fct-type": "function",
        "title": "execMC"
      },
      "index": {
        "description": "Exicute this Monte Carlo monad and return the final random number generator Very much like snd composed with runMC",
        "hierarchy": "Control Monad MC GSL",
        "module": "Control.Monad.MC.GSL",
        "name": "execMC",
        "normalized": "MC a-\u003eRNG-\u003eRNG",
        "package": "monte-carlo",
        "partial": "MC",
        "signature": "MC a-\u003eRNG-\u003eRNG"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-GSL.html#v:execMCT",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003eexecMC\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.MC.GSL",
        "fct-package": "monte-carlo",
        "fct-signature": "MCT m a -\u003e RNG -\u003e m RNG",
        "fct-source": "src/Control-Monad-MC-GSLBase.html#execMCT",
        "fct-type": "function",
        "title": "execMCT"
      },
      "index": {
        "description": "Similar to execMC",
        "hierarchy": "Control Monad MC GSL",
        "module": "Control.Monad.MC.GSL",
        "name": "execMCT",
        "normalized": "MCT a b-\u003eRNG-\u003ea RNG",
        "package": "monte-carlo",
        "partial": "MCT",
        "signature": "MCT m a-\u003eRNG-\u003em RNG"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-GSL.html#v:mt19937",
      "description": {
        "fct-descr": "\u003cp\u003eGet a Mersenne Twister random number generator seeded with the given\n value.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.MC.GSL",
        "fct-package": "monte-carlo",
        "fct-signature": "Seed -\u003e RNG",
        "fct-source": "src/Control-Monad-MC-GSLBase.html#mt19937",
        "fct-type": "function",
        "title": "mt19937"
      },
      "index": {
        "description": "Get Mersenne Twister random number generator seeded with the given value",
        "hierarchy": "Control Monad MC GSL",
        "module": "Control.Monad.MC.GSL",
        "name": "mt19937",
        "normalized": "Seed-\u003eRNG",
        "package": "monte-carlo",
        "partial": "",
        "signature": "Seed-\u003eRNG"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-GSL.html#v:mt19937WithState",
      "description": {
        "fct-descr": "\u003cp\u003eGet a Mersenne Twister seeded with the given state.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.MC.GSL",
        "fct-package": "monte-carlo",
        "fct-signature": "[Word8] -\u003e RNG",
        "fct-source": "src/Control-Monad-MC-GSLBase.html#mt19937WithState",
        "fct-type": "function",
        "title": "mt19937WithState"
      },
      "index": {
        "description": "Get Mersenne Twister seeded with the given state",
        "hierarchy": "Control Monad MC GSL",
        "module": "Control.Monad.MC.GSL",
        "name": "mt19937WithState",
        "normalized": "[Word]-\u003eRNG",
        "package": "monte-carlo",
        "partial": "With State",
        "signature": "[Word]-\u003eRNG"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-GSL.html#v:rngName",
      "description": {
        "fct-descr": "\u003cp\u003eGet the name of the random number generator algorithm.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.MC.GSL",
        "fct-package": "monte-carlo",
        "fct-signature": "RNG -\u003e String",
        "fct-source": "src/Control-Monad-MC-GSLBase.html#rngName",
        "fct-type": "function",
        "title": "rngName"
      },
      "index": {
        "description": "Get the name of the random number generator algorithm",
        "hierarchy": "Control Monad MC GSL",
        "module": "Control.Monad.MC.GSL",
        "name": "rngName",
        "normalized": "RNG-\u003eString",
        "package": "monte-carlo",
        "partial": "Name",
        "signature": "RNG-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-GSL.html#v:rngSize",
      "description": {
        "fct-descr": "\u003cp\u003eGet the size of the generator state, in bytes.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.MC.GSL",
        "fct-package": "monte-carlo",
        "fct-signature": "RNG -\u003e Int",
        "fct-source": "src/Control-Monad-MC-GSLBase.html#rngSize",
        "fct-type": "function",
        "title": "rngSize"
      },
      "index": {
        "description": "Get the size of the generator state in bytes",
        "hierarchy": "Control Monad MC GSL",
        "module": "Control.Monad.MC.GSL",
        "name": "rngSize",
        "normalized": "RNG-\u003eInt",
        "package": "monte-carlo",
        "partial": "Size",
        "signature": "RNG-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-GSL.html#v:rngState",
      "description": {
        "fct-descr": "\u003cp\u003eGet the state of the generator.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.MC.GSL",
        "fct-package": "monte-carlo",
        "fct-signature": "RNG -\u003e [Word8]",
        "fct-source": "src/Control-Monad-MC-GSLBase.html#rngState",
        "fct-type": "function",
        "title": "rngState"
      },
      "index": {
        "description": "Get the state of the generator",
        "hierarchy": "Control Monad MC GSL",
        "module": "Control.Monad.MC.GSL",
        "name": "rngState",
        "normalized": "RNG-\u003e[Word]",
        "package": "monte-carlo",
        "partial": "State",
        "signature": "RNG-\u003e[Word]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-GSL.html#v:runMC",
      "description": {
        "fct-descr": "\u003cp\u003eRun this Monte Carlo monad with the given initial random number generator,\n getting the result and the new random number generator.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.MC.GSL",
        "fct-package": "monte-carlo",
        "fct-signature": "MC a -\u003e RNG -\u003e (a, RNG)",
        "fct-source": "src/Control-Monad-MC-GSLBase.html#runMC",
        "fct-type": "function",
        "title": "runMC"
      },
      "index": {
        "description": "Run this Monte Carlo monad with the given initial random number generator getting the result and the new random number generator",
        "hierarchy": "Control Monad MC GSL",
        "module": "Control.Monad.MC.GSL",
        "name": "runMC",
        "normalized": "MC a-\u003eRNG-\u003e(a,RNG)",
        "package": "monte-carlo",
        "partial": "MC",
        "signature": "MC a-\u003eRNG-\u003e(a,RNG)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC-GSL.html#v:runMCT",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003erunMC\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.MC.GSL",
        "fct-package": "monte-carlo",
        "fct-signature": "MCT m a -\u003e RNG -\u003e m (a, RNG)",
        "fct-source": "src/Control-Monad-MC-GSLBase.html#runMCT",
        "fct-type": "function",
        "title": "runMCT"
      },
      "index": {
        "description": "Similar to runMC",
        "hierarchy": "Control Monad MC GSL",
        "module": "Control.Monad.MC.GSL",
        "name": "runMCT",
        "normalized": "MCT a b-\u003eRNG-\u003ea(b,RNG)",
        "package": "monte-carlo",
        "partial": "MCT",
        "signature": "MCT m a-\u003eRNG-\u003em(a,RNG)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Control-Monad-MC.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA monad and monad transformer for monte carlo computations.  Currently,\n the default is the GNU Scientific Library-based implementation, but this\n may change in the future.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.MC",
        "fct-package": "monte-carlo",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-MC.html",
        "fct-type": "module",
        "title": "MC"
      },
      "index": {
        "description": "monad and monad transformer for monte carlo computations Currently the default is the GNU Scientific Library-based implementation but this may change in the future",
        "hierarchy": "Control Monad MC",
        "module": "Control.Monad.MC",
        "name": "MC",
        "normalized": "",
        "package": "monte-carlo",
        "partial": "MC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Data-Summary-Bool.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary statistics for \u003ccode\u003eBool\u003c/code\u003es.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Summary.Bool",
        "fct-package": "monte-carlo",
        "fct-signature": "module",
        "fct-source": "src/Data-Summary-Bool.html",
        "fct-type": "module",
        "title": "Bool"
      },
      "index": {
        "description": "Summary statistics for Bool",
        "hierarchy": "Data Summary Bool",
        "module": "Data.Summary.Bool",
        "name": "Bool",
        "normalized": "",
        "package": "monte-carlo",
        "partial": "Bool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Data-Summary-Bool.html#t:Summary",
      "description": {
        "fct-descr": "\u003cp\u003eA type for storing summary statistics for a data set of\n booleans.  Specifically, this just keeps track of the number\n of \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e events and gives estimates for the success\n probability.  \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e is interpreted as a one, and \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e\n is interpreted as a zero.\n\u003c/p\u003e",
        "fct-module": "Data.Summary.Bool",
        "fct-package": "monte-carlo",
        "fct-signature": "data",
        "fct-source": "src/Data-Summary-Bool.html#Summary",
        "fct-type": "data",
        "title": "Summary"
      },
      "index": {
        "description": "type for storing summary statistics for data set of booleans Specifically this just keeps track of the number of True events and gives estimates for the success probability True is interpreted as one and False is interpreted as zero",
        "hierarchy": "Data Summary Bool",
        "module": "Data.Summary.Bool",
        "name": "Summary",
        "normalized": "",
        "package": "monte-carlo",
        "partial": "Summary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Data-Summary-Bool.html#v:count",
      "description": {
        "fct-descr": "\u003cp\u003eGet the number of \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e values\n\u003c/p\u003e",
        "fct-module": "Data.Summary.Bool",
        "fct-package": "monte-carlo",
        "fct-signature": "Summary -\u003e Int",
        "fct-source": "src/Data-Summary-Bool.html#count",
        "fct-type": "function",
        "title": "count"
      },
      "index": {
        "description": "Get the number of True values",
        "hierarchy": "Data Summary Bool",
        "module": "Data.Summary.Bool",
        "name": "count",
        "normalized": "Summary-\u003eInt",
        "package": "monte-carlo",
        "partial": "",
        "signature": "Summary-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Data-Summary-Bool.html#v:sampleCI",
      "description": {
        "fct-descr": "\u003cp\u003eGet a Central Limit Theorem-based confidence interval for the mean\n with the specified coverage level.  The level must be in the range \u003ccode\u003e(0,1)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Summary.Bool",
        "fct-package": "monte-carlo",
        "fct-signature": "Double -\u003e Summary -\u003e (Double, Double)",
        "fct-source": "src/Data-Summary-Bool.html#sampleCI",
        "fct-type": "function",
        "title": "sampleCI"
      },
      "index": {
        "description": "Get Central Limit Theorem-based confidence interval for the mean with the specified coverage level The level must be in the range",
        "hierarchy": "Data Summary Bool",
        "module": "Data.Summary.Bool",
        "name": "sampleCI",
        "normalized": "Double-\u003eSummary-\u003e(Double,Double)",
        "package": "monte-carlo",
        "partial": "CI",
        "signature": "Double-\u003eSummary-\u003e(Double,Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Data-Summary-Bool.html#v:sampleMean",
      "description": {
        "fct-descr": "\u003cp\u003eGet the proportion of \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e events.\n\u003c/p\u003e",
        "fct-module": "Data.Summary.Bool",
        "fct-package": "monte-carlo",
        "fct-signature": "Summary -\u003e Double",
        "fct-source": "src/Data-Summary-Bool.html#sampleMean",
        "fct-type": "function",
        "title": "sampleMean"
      },
      "index": {
        "description": "Get the proportion of True events",
        "hierarchy": "Data Summary Bool",
        "module": "Data.Summary.Bool",
        "name": "sampleMean",
        "normalized": "Summary-\u003eDouble",
        "package": "monte-carlo",
        "partial": "Mean",
        "signature": "Summary-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Data-Summary-Bool.html#v:sampleSE",
      "description": {
        "fct-descr": "\u003cp\u003eGet the standard error for the sample proportion.\n\u003c/p\u003e",
        "fct-module": "Data.Summary.Bool",
        "fct-package": "monte-carlo",
        "fct-signature": "Summary -\u003e Double",
        "fct-source": "src/Data-Summary-Bool.html#sampleSE",
        "fct-type": "function",
        "title": "sampleSE"
      },
      "index": {
        "description": "Get the standard error for the sample proportion",
        "hierarchy": "Data Summary Bool",
        "module": "Data.Summary.Bool",
        "name": "sampleSE",
        "normalized": "Summary-\u003eDouble",
        "package": "monte-carlo",
        "partial": "SE",
        "signature": "Summary-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Data-Summary-Bool.html#v:sampleSize",
      "description": {
        "fct-descr": "\u003cp\u003eGet the sample size.\n\u003c/p\u003e",
        "fct-module": "Data.Summary.Bool",
        "fct-package": "monte-carlo",
        "fct-signature": "Summary -\u003e Int",
        "fct-source": "src/Data-Summary-Bool.html#sampleSize",
        "fct-type": "function",
        "title": "sampleSize"
      },
      "index": {
        "description": "Get the sample size",
        "hierarchy": "Data Summary Bool",
        "module": "Data.Summary.Bool",
        "name": "sampleSize",
        "normalized": "Summary-\u003eInt",
        "package": "monte-carlo",
        "partial": "Size",
        "signature": "Summary-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Data-Summary-Bool.html#v:summary",
      "description": {
        "fct-descr": "\u003cp\u003eGet a summary of a list of values.\n\u003c/p\u003e",
        "fct-module": "Data.Summary.Bool",
        "fct-package": "monte-carlo",
        "fct-signature": "[Bool] -\u003e Summary",
        "fct-source": "src/Data-Summary-Bool.html#summary",
        "fct-type": "function",
        "title": "summary"
      },
      "index": {
        "description": "Get summary of list of values",
        "hierarchy": "Data Summary Bool",
        "module": "Data.Summary.Bool",
        "name": "summary",
        "normalized": "[Bool]-\u003eSummary",
        "package": "monte-carlo",
        "partial": "",
        "signature": "[Bool]-\u003eSummary"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Data-Summary-Bool.html#v:update",
      "description": {
        "fct-descr": "\u003cp\u003eUpdate the summary with a data point.\n\u003c/p\u003e",
        "fct-module": "Data.Summary.Bool",
        "fct-package": "monte-carlo",
        "fct-signature": "Summary -\u003e Bool -\u003e Summary",
        "fct-source": "src/Data-Summary-Bool.html#update",
        "fct-type": "function",
        "title": "update"
      },
      "index": {
        "description": "Update the summary with data point",
        "hierarchy": "Data Summary Bool",
        "module": "Data.Summary.Bool",
        "name": "update",
        "normalized": "Summary-\u003eBool-\u003eSummary",
        "package": "monte-carlo",
        "partial": "",
        "signature": "Summary-\u003eBool-\u003eSummary"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Data-Summary-Double.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary statistics for \u003ccode\u003eDouble\u003c/code\u003es.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Summary.Double",
        "fct-package": "monte-carlo",
        "fct-signature": "module",
        "fct-source": "src/Data-Summary-Double.html",
        "fct-type": "module",
        "title": "Double"
      },
      "index": {
        "description": "Summary statistics for Double",
        "hierarchy": "Data Summary Double",
        "module": "Data.Summary.Double",
        "name": "Double",
        "normalized": "",
        "package": "monte-carlo",
        "partial": "Double",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Data-Summary-Double.html#t:Summary",
      "description": {
        "fct-descr": "\u003cp\u003eA type for storing summary statistics for a data set including\n sample size, min and max values, and first and second moments.\n\u003c/p\u003e",
        "fct-module": "Data.Summary.Double",
        "fct-package": "monte-carlo",
        "fct-signature": "data",
        "fct-source": "src/Data-Summary-Double.html#Summary",
        "fct-type": "data",
        "title": "Summary"
      },
      "index": {
        "description": "type for storing summary statistics for data set including sample size min and max values and first and second moments",
        "hierarchy": "Data Summary Double",
        "module": "Data.Summary.Double",
        "name": "Summary",
        "normalized": "",
        "package": "monte-carlo",
        "partial": "Summary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Data-Summary-Double.html#v:sampleCI",
      "description": {
        "fct-descr": "\u003cp\u003eGet a Central Limit Theorem-based confidence interval for the mean\n with the specified coverage level.  The level must be in the range \u003ccode\u003e(0,1)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Summary.Double",
        "fct-package": "monte-carlo",
        "fct-signature": "Double -\u003e Summary -\u003e (Double, Double)",
        "fct-source": "src/Data-Summary-Double.html#sampleCI",
        "fct-type": "function",
        "title": "sampleCI"
      },
      "index": {
        "description": "Get Central Limit Theorem-based confidence interval for the mean with the specified coverage level The level must be in the range",
        "hierarchy": "Data Summary Double",
        "module": "Data.Summary.Double",
        "name": "sampleCI",
        "normalized": "Double-\u003eSummary-\u003e(Double,Double)",
        "package": "monte-carlo",
        "partial": "CI",
        "signature": "Double-\u003eSummary-\u003e(Double,Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Data-Summary-Double.html#v:sampleMax",
      "description": {
        "fct-descr": "\u003cp\u003eGet the maximum of the sample.\n\u003c/p\u003e",
        "fct-module": "Data.Summary.Double",
        "fct-package": "monte-carlo",
        "fct-signature": "Summary -\u003e Double",
        "fct-source": "src/Data-Summary-Double.html#sampleMax",
        "fct-type": "function",
        "title": "sampleMax"
      },
      "index": {
        "description": "Get the maximum of the sample",
        "hierarchy": "Data Summary Double",
        "module": "Data.Summary.Double",
        "name": "sampleMax",
        "normalized": "Summary-\u003eDouble",
        "package": "monte-carlo",
        "partial": "Max",
        "signature": "Summary-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Data-Summary-Double.html#v:sampleMean",
      "description": {
        "fct-descr": "\u003cp\u003eGet the sample mean.\n\u003c/p\u003e",
        "fct-module": "Data.Summary.Double",
        "fct-package": "monte-carlo",
        "fct-signature": "Summary -\u003e Double",
        "fct-source": "src/Data-Summary-Double.html#sampleMean",
        "fct-type": "function",
        "title": "sampleMean"
      },
      "index": {
        "description": "Get the sample mean",
        "hierarchy": "Data Summary Double",
        "module": "Data.Summary.Double",
        "name": "sampleMean",
        "normalized": "Summary-\u003eDouble",
        "package": "monte-carlo",
        "partial": "Mean",
        "signature": "Summary-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Data-Summary-Double.html#v:sampleMin",
      "description": {
        "fct-descr": "\u003cp\u003eGet the minimum of the sample.\n\u003c/p\u003e",
        "fct-module": "Data.Summary.Double",
        "fct-package": "monte-carlo",
        "fct-signature": "Summary -\u003e Double",
        "fct-source": "src/Data-Summary-Double.html#sampleMin",
        "fct-type": "function",
        "title": "sampleMin"
      },
      "index": {
        "description": "Get the minimum of the sample",
        "hierarchy": "Data Summary Double",
        "module": "Data.Summary.Double",
        "name": "sampleMin",
        "normalized": "Summary-\u003eDouble",
        "package": "monte-carlo",
        "partial": "Min",
        "signature": "Summary-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Data-Summary-Double.html#v:sampleSD",
      "description": {
        "fct-descr": "\u003cp\u003eGet the sample standard deviation.\n\u003c/p\u003e",
        "fct-module": "Data.Summary.Double",
        "fct-package": "monte-carlo",
        "fct-signature": "Summary -\u003e Double",
        "fct-source": "src/Data-Summary-Double.html#sampleSD",
        "fct-type": "function",
        "title": "sampleSD"
      },
      "index": {
        "description": "Get the sample standard deviation",
        "hierarchy": "Data Summary Double",
        "module": "Data.Summary.Double",
        "name": "sampleSD",
        "normalized": "Summary-\u003eDouble",
        "package": "monte-carlo",
        "partial": "SD",
        "signature": "Summary-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Data-Summary-Double.html#v:sampleSE",
      "description": {
        "fct-descr": "\u003cp\u003eGet the sample standard error.\n\u003c/p\u003e",
        "fct-module": "Data.Summary.Double",
        "fct-package": "monte-carlo",
        "fct-signature": "Summary -\u003e Double",
        "fct-source": "src/Data-Summary-Double.html#sampleSE",
        "fct-type": "function",
        "title": "sampleSE"
      },
      "index": {
        "description": "Get the sample standard error",
        "hierarchy": "Data Summary Double",
        "module": "Data.Summary.Double",
        "name": "sampleSE",
        "normalized": "Summary-\u003eDouble",
        "package": "monte-carlo",
        "partial": "SE",
        "signature": "Summary-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Data-Summary-Double.html#v:sampleSize",
      "description": {
        "fct-descr": "\u003cp\u003eGet the sample size.\n\u003c/p\u003e",
        "fct-module": "Data.Summary.Double",
        "fct-package": "monte-carlo",
        "fct-signature": "Summary -\u003e Int",
        "fct-source": "src/Data-Summary-Double.html#sampleSize",
        "fct-type": "function",
        "title": "sampleSize"
      },
      "index": {
        "description": "Get the sample size",
        "hierarchy": "Data Summary Double",
        "module": "Data.Summary.Double",
        "name": "sampleSize",
        "normalized": "Summary-\u003eInt",
        "package": "monte-carlo",
        "partial": "Size",
        "signature": "Summary-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Data-Summary-Double.html#v:sampleVar",
      "description": {
        "fct-descr": "\u003cp\u003eGet the sample variance.\n\u003c/p\u003e",
        "fct-module": "Data.Summary.Double",
        "fct-package": "monte-carlo",
        "fct-signature": "Summary -\u003e Double",
        "fct-source": "src/Data-Summary-Double.html#sampleVar",
        "fct-type": "function",
        "title": "sampleVar"
      },
      "index": {
        "description": "Get the sample variance",
        "hierarchy": "Data Summary Double",
        "module": "Data.Summary.Double",
        "name": "sampleVar",
        "normalized": "Summary-\u003eDouble",
        "package": "monte-carlo",
        "partial": "Var",
        "signature": "Summary-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Data-Summary-Double.html#v:summary",
      "description": {
        "fct-descr": "\u003cp\u003eGet a summary of a list of values.\n\u003c/p\u003e",
        "fct-module": "Data.Summary.Double",
        "fct-package": "monte-carlo",
        "fct-signature": "[Double] -\u003e Summary",
        "fct-source": "src/Data-Summary-Double.html#summary",
        "fct-type": "function",
        "title": "summary"
      },
      "index": {
        "description": "Get summary of list of values",
        "hierarchy": "Data Summary Double",
        "module": "Data.Summary.Double",
        "name": "summary",
        "normalized": "[Double]-\u003eSummary",
        "package": "monte-carlo",
        "partial": "",
        "signature": "[Double]-\u003eSummary"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Data-Summary-Double.html#v:update",
      "description": {
        "fct-descr": "\u003cp\u003eUpdate the summary with a data point.\n Running mean and variance computed as in Knuth, Vol 2, page 232,\n 3rd edition, see http:\u003cem/\u003ewww.johndcook.com/standard_deviation.html for\n a description.\n\u003c/p\u003e",
        "fct-module": "Data.Summary.Double",
        "fct-package": "monte-carlo",
        "fct-signature": "Summary -\u003e Double -\u003e Summary",
        "fct-source": "src/Data-Summary-Double.html#update",
        "fct-type": "function",
        "title": "update"
      },
      "index": {
        "description": "Update the summary with data point Running mean and variance computed as in Knuth Vol page rd edition see http www.johndcook.com standard deviation.html for description",
        "hierarchy": "Data Summary Double",
        "module": "Data.Summary.Double",
        "name": "update",
        "normalized": "Summary-\u003eDouble-\u003eSummary",
        "package": "monte-carlo",
        "partial": "",
        "signature": "Summary-\u003eDouble-\u003eSummary"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Data-Summary-Utils.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities for data summaries.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Summary.Utils",
        "fct-package": "monte-carlo",
        "fct-signature": "module",
        "fct-source": "src/Data-Summary-Utils.html",
        "fct-type": "module",
        "title": "Utils"
      },
      "index": {
        "description": "Utilities for data summaries",
        "hierarchy": "Data Summary Utils",
        "module": "Data.Summary.Utils",
        "name": "Utils",
        "normalized": "",
        "package": "monte-carlo",
        "partial": "Utils",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Data-Summary-Utils.html#v:inInterval",
      "description": {
        "fct-descr": "\u003cp\u003eTests if the value is in the open interval (a,b)\n\u003c/p\u003e",
        "fct-module": "Data.Summary.Utils",
        "fct-package": "monte-carlo",
        "fct-signature": "Double -\u003e (Double, Double) -\u003e Bool",
        "fct-source": "src/Data-Summary-Utils.html#inInterval",
        "fct-type": "function",
        "title": "inInterval"
      },
      "index": {
        "description": "Tests if the value is in the open interval",
        "hierarchy": "Data Summary Utils",
        "module": "Data.Summary.Utils",
        "name": "inInterval",
        "normalized": "Double-\u003e(Double,Double)-\u003eBool",
        "package": "monte-carlo",
        "partial": "Interval",
        "signature": "Double-\u003e(Double,Double)-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Data-Summary-Utils.html#v:interval",
      "description": {
        "fct-descr": "\u003cp\u003eGet a Central Limit Theorem-based confidence interval for the\n population mean with the specified coverage level.  The level must\n be in the range \u003ccode\u003e(0,1)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Summary.Utils",
        "fct-package": "monte-carlo",
        "fct-signature": "Double-\u003e Double-\u003e Double-\u003e (Double, Double)",
        "fct-type": "function",
        "title": "interval"
      },
      "index": {
        "description": "Get Central Limit Theorem-based confidence interval for the population mean with the specified coverage level The level must be in the range",
        "hierarchy": "Data Summary Utils",
        "module": "Data.Summary.Utils",
        "name": "interval",
        "normalized": "Double-\u003eDouble-\u003eDouble-\u003e(Double,Double)",
        "package": "monte-carlo",
        "partial": "",
        "signature": "Double-\u003eDouble-\u003eDouble-\u003e(Double,Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monte-carlo/docs/Data-Summary.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSummary Statistics\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Summary",
        "fct-package": "monte-carlo",
        "fct-signature": "module",
        "fct-source": "src/Data-Summary.html",
        "fct-type": "module",
        "title": "Summary"
      },
      "index": {
        "description": "Summary Statistics",
        "hierarchy": "Data Summary",
        "module": "Data.Summary",
        "name": "Summary",
        "normalized": "",
        "package": "monte-carlo",
        "partial": "Summary",
        "signature": ""
      }
    }
  }
]