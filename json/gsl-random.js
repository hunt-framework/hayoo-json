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
        "word": "gsl-random"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRandom number distributions. Functions for generating random variates and\n computing their probability distributions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "GSL.Random.Dist",
          "name": "Dist",
          "package": "gsl-random",
          "source": "src/GSL-Random-Dist.html",
          "type": "module"
        },
        "index": {
          "description": "Random number distributions Functions for generating random variates and computing their probability distributions",
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "Dist",
          "package": "gsl-random",
          "partial": "Dist",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GSL.Random.Dist",
          "name": "betaP",
          "package": "gsl-random",
          "signature": "Double -\u003e Double -\u003e Double -\u003e Double",
          "source": "src/GSL-Random-Dist.html#betaP",
          "type": "function"
        },
        "index": {
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "betaP",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "package": "gsl-random",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:betaP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GSL.Random.Dist",
          "name": "betaPInv",
          "package": "gsl-random",
          "signature": "Double -\u003e Double -\u003e Double -\u003e Double",
          "source": "src/GSL-Random-Dist.html#betaPInv",
          "type": "function"
        },
        "index": {
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "betaPInv",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "package": "gsl-random",
          "partial": "PInv",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:betaPInv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ebetaPdf x a b\u003c/code\u003e evaluates the probability density \u003ccode\u003ep(x)\u003c/code\u003e at \u003ccode\u003ex\u003c/code\u003e\n for a Beta distribution with parameters \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e.  The density\n is given by \u003ccode\u003ep(x) dx = {Gamma(a+b) over Gamma(a) Gamma(b)} x^{a-1} (1-x)^{b-1} dx\u003c/code\u003e\n for \u003ccode\u003e0 \u003c= x \u003c= 1\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GSL.Random.Dist",
          "name": "betaPdf",
          "package": "gsl-random",
          "signature": "Double -\u003e Double -\u003e Double -\u003e Double",
          "source": "src/GSL-Random-Dist.html#betaPdf",
          "type": "function"
        },
        "index": {
          "description": "betaPdf evaluates the probability density at for Beta distribution with parameters and The density is given by dx Gamma over Gamma Gamma a-1 b-1 dx for",
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "betaPdf",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "package": "gsl-random",
          "partial": "Pdf",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:betaPdf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GSL.Random.Dist",
          "name": "betaQ",
          "package": "gsl-random",
          "signature": "Double -\u003e Double -\u003e Double -\u003e Double",
          "source": "src/GSL-Random-Dist.html#betaQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "betaQ",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "package": "gsl-random",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:betaQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GSL.Random.Dist",
          "name": "betaQInv",
          "package": "gsl-random",
          "signature": "Double -\u003e Double -\u003e Double -\u003e Double",
          "source": "src/GSL-Random-Dist.html#betaQInv",
          "type": "function"
        },
        "index": {
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "betaQInv",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "package": "gsl-random",
          "partial": "QInv",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:betaQInv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GSL.Random.Dist",
          "name": "cauchyP",
          "package": "gsl-random",
          "signature": "Double -\u003e Double -\u003e Double",
          "source": "src/GSL-Random-Dist.html#cauchyP",
          "type": "function"
        },
        "index": {
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "cauchyP",
          "normalized": "Double-\u003eDouble-\u003eDouble",
          "package": "gsl-random",
          "signature": "Double-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:cauchyP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GSL.Random.Dist",
          "name": "cauchyPInv",
          "package": "gsl-random",
          "signature": "Double -\u003e Double -\u003e Double",
          "source": "src/GSL-Random-Dist.html#cauchyPInv",
          "type": "function"
        },
        "index": {
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "cauchyPInv",
          "normalized": "Double-\u003eDouble-\u003eDouble",
          "package": "gsl-random",
          "partial": "PInv",
          "signature": "Double-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:cauchyPInv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecauchyPdf x a\u003c/code\u003e evaluates the probability density \u003ccode\u003ep(x)\u003c/code\u003e at \u003ccode\u003ex\u003c/code\u003e\n for a Cauchy distribution with scale parameter \u003ccode\u003ea\u003c/code\u003e.  The density\n is given by \u003ccode\u003ep(x) dx = { 1 over api (1 + (x/a^2)) } dx\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GSL.Random.Dist",
          "name": "cauchyPdf",
          "package": "gsl-random",
          "signature": "Double -\u003e Double -\u003e Double",
          "source": "src/GSL-Random-Dist.html#cauchyPdf",
          "type": "function"
        },
        "index": {
          "description": "cauchyPdf evaluates the probability density at for Cauchy distribution with scale parameter The density is given by dx over api dx",
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "cauchyPdf",
          "normalized": "Double-\u003eDouble-\u003eDouble",
          "package": "gsl-random",
          "partial": "Pdf",
          "signature": "Double-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:cauchyPdf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GSL.Random.Dist",
          "name": "cauchyQ",
          "package": "gsl-random",
          "signature": "Double -\u003e Double -\u003e Double",
          "source": "src/GSL-Random-Dist.html#cauchyQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "cauchyQ",
          "normalized": "Double-\u003eDouble-\u003eDouble",
          "package": "gsl-random",
          "signature": "Double-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:cauchyQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GSL.Random.Dist",
          "name": "cauchyQInv",
          "package": "gsl-random",
          "signature": "Double -\u003e Double -\u003e Double",
          "source": "src/GSL-Random-Dist.html#cauchyQInv",
          "type": "function"
        },
        "index": {
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "cauchyQInv",
          "normalized": "Double-\u003eDouble-\u003eDouble",
          "package": "gsl-random",
          "partial": "QInv",
          "signature": "Double-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:cauchyQInv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003edirichletLnPdf xs alphas == log (dirichletPdf xs alphas)\u003c/code\u003e,\n   but more efficient.\n\u003c/p\u003e",
          "module": "GSL.Random.Dist",
          "name": "dirichletLnPdf",
          "package": "gsl-random",
          "signature": "Vector Double-\u003e Vector Double-\u003e Double",
          "type": "function"
        },
        "index": {
          "description": "dirichletLnPdf xs alphas log dirichletPdf xs alphas but more efficient",
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "dirichletLnPdf",
          "normalized": "Vector Double-\u003eVector Double-\u003eDouble",
          "package": "gsl-random",
          "partial": "Ln Pdf",
          "signature": "Vector Double-\u003eVector Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:dirichletLnPdf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003edirichletPdf xs alphas\u003c/code\u003e evaluates the probability density\n \u003ccode\u003ep(xs)\u003c/code\u003e at \u003ccode\u003exs\u003c/code\u003e for a Dirichlet distribution with parameters\n \u003ccode\u003ealphas\u003c/code\u003e, where all \u003ccode\u003ealphas\u003c/code\u003e are positive (strictly greater\n than zero).  Note that \u003ccode\u003exs\u003c/code\u003e and \u003ccode\u003ealphas\u003c/code\u003e should have the same\n length.\n\u003c/p\u003e",
          "module": "GSL.Random.Dist",
          "name": "dirichletPdf",
          "package": "gsl-random",
          "signature": "Vector Double-\u003e Vector Double-\u003e Double",
          "type": "function"
        },
        "index": {
          "description": "dirichletPdf xs alphas evaluates the probability density xs at xs for Dirichlet distribution with parameters alphas where all alphas are positive strictly greater than zero Note that xs and alphas should have the same length",
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "dirichletPdf",
          "normalized": "Vector Double-\u003eVector Double-\u003eDouble",
          "package": "gsl-random",
          "partial": "Pdf",
          "signature": "Vector Double-\u003eVector Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:dirichletPdf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GSL.Random.Dist",
          "name": "exponentialP",
          "package": "gsl-random",
          "signature": "Double -\u003e Double -\u003e Double",
          "source": "src/GSL-Random-Dist.html#exponentialP",
          "type": "function"
        },
        "index": {
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "exponentialP",
          "normalized": "Double-\u003eDouble-\u003eDouble",
          "package": "gsl-random",
          "signature": "Double-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:exponentialP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GSL.Random.Dist",
          "name": "exponentialPInv",
          "package": "gsl-random",
          "signature": "Double -\u003e Double -\u003e Double",
          "source": "src/GSL-Random-Dist.html#exponentialPInv",
          "type": "function"
        },
        "index": {
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "exponentialPInv",
          "normalized": "Double-\u003eDouble-\u003eDouble",
          "package": "gsl-random",
          "partial": "PInv",
          "signature": "Double-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:exponentialPInv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eexponentialPdf x mu\u003c/code\u003e computes the density at \u003ccode\u003ex\u003c/code\u003e of an exponential\n with mean \u003ccode\u003emu\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GSL.Random.Dist",
          "name": "exponentialPdf",
          "package": "gsl-random",
          "signature": "Double -\u003e Double -\u003e Double",
          "source": "src/GSL-Random-Dist.html#exponentialPdf",
          "type": "function"
        },
        "index": {
          "description": "exponentialPdf mu computes the density at of an exponential with mean mu",
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "exponentialPdf",
          "normalized": "Double-\u003eDouble-\u003eDouble",
          "package": "gsl-random",
          "partial": "Pdf",
          "signature": "Double-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:exponentialPdf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GSL.Random.Dist",
          "name": "exponentialQ",
          "package": "gsl-random",
          "signature": "Double -\u003e Double -\u003e Double",
          "source": "src/GSL-Random-Dist.html#exponentialQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "exponentialQ",
          "normalized": "Double-\u003eDouble-\u003eDouble",
          "package": "gsl-random",
          "signature": "Double-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:exponentialQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GSL.Random.Dist",
          "name": "exponentialQInv",
          "package": "gsl-random",
          "signature": "Double -\u003e Double -\u003e Double",
          "source": "src/GSL-Random-Dist.html#exponentialQInv",
          "type": "function"
        },
        "index": {
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "exponentialQInv",
          "normalized": "Double-\u003eDouble-\u003eDouble",
          "package": "gsl-random",
          "partial": "QInv",
          "signature": "Double-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:exponentialQInv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eflatP x a b\u003c/code\u003e computes the cumulative distribution function \u003ccode\u003eP(x)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GSL.Random.Dist",
          "name": "flatP",
          "package": "gsl-random",
          "signature": "Double -\u003e Double -\u003e Double -\u003e Double",
          "source": "src/GSL-Random-Dist.html#flatP",
          "type": "function"
        },
        "index": {
          "description": "flatP computes the cumulative distribution function",
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "flatP",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "package": "gsl-random",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:flatP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eflatPInv p a b\u003c/code\u003e computes the inverse of the cumulative distribution\n and returns \u003ccode\u003ex\u003c/code\u003e so that function \u003ccode\u003eP(x) = p\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GSL.Random.Dist",
          "name": "flatPInv",
          "package": "gsl-random",
          "signature": "Double -\u003e Double -\u003e Double -\u003e Double",
          "source": "src/GSL-Random-Dist.html#flatPInv",
          "type": "function"
        },
        "index": {
          "description": "flatPInv computes the inverse of the cumulative distribution and returns so that function",
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "flatPInv",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "package": "gsl-random",
          "partial": "PInv",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:flatPInv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eflatPdf x a b\u003c/code\u003e computes the probability density \u003ccode\u003ep(x)\u003c/code\u003e at \u003ccode\u003ex\u003c/code\u003e for\n a uniform distribution from \u003ccode\u003ea\u003c/code\u003e to \u003ccode\u003eb\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GSL.Random.Dist",
          "name": "flatPdf",
          "package": "gsl-random",
          "signature": "Double -\u003e Double -\u003e Double -\u003e Double",
          "source": "src/GSL-Random-Dist.html#flatPdf",
          "type": "function"
        },
        "index": {
          "description": "flatPdf computes the probability density at for uniform distribution from to",
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "flatPdf",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "package": "gsl-random",
          "partial": "Pdf",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:flatPdf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eflatQ x a b\u003c/code\u003e computes the cumulative distribution function \u003ccode\u003eQ(x)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GSL.Random.Dist",
          "name": "flatQ",
          "package": "gsl-random",
          "signature": "Double -\u003e Double -\u003e Double -\u003e Double",
          "source": "src/GSL-Random-Dist.html#flatQ",
          "type": "function"
        },
        "index": {
          "description": "flatQ computes the cumulative distribution function",
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "flatQ",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "package": "gsl-random",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:flatQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eflatQInv q a b\u003c/code\u003e computes the inverse of the cumulative distribution\n and returns \u003ccode\u003ex\u003c/code\u003e so that function \u003ccode\u003eQ(x) = q\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GSL.Random.Dist",
          "name": "flatQInv",
          "package": "gsl-random",
          "signature": "Double -\u003e Double -\u003e Double -\u003e Double",
          "source": "src/GSL-Random-Dist.html#flatQInv",
          "type": "function"
        },
        "index": {
          "description": "flatQInv computes the inverse of the cumulative distribution and returns so that function",
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "flatQInv",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "package": "gsl-random",
          "partial": "QInv",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:flatQInv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GSL.Random.Dist",
          "name": "gammaP",
          "package": "gsl-random",
          "signature": "Double -\u003e Double -\u003e Double -\u003e Double",
          "source": "src/GSL-Random-Dist.html#gammaP",
          "type": "function"
        },
        "index": {
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "gammaP",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "package": "gsl-random",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:gammaP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GSL.Random.Dist",
          "name": "gammaPInv",
          "package": "gsl-random",
          "signature": "Double -\u003e Double -\u003e Double -\u003e Double",
          "source": "src/GSL-Random-Dist.html#gammaPInv",
          "type": "function"
        },
        "index": {
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "gammaPInv",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "package": "gsl-random",
          "partial": "PInv",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:gammaPInv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egammaPdf x a b\u003c/code\u003e evaluates the probability density \u003ccode\u003ep(x)\u003c/code\u003e at \u003ccode\u003ex\u003c/code\u003e\n for a gamma distribution with parameters \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e.  The density\n is given by \u003ccode\u003ep(x) dx = p(x) dx = {1 over Gamma(a) b^a} x^{a-1} e^{-x/b} dx\u003c/code\u003e\n for \u003ccode\u003ex \u003e 0\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GSL.Random.Dist",
          "name": "gammaPdf",
          "package": "gsl-random",
          "signature": "Double -\u003e Double -\u003e Double -\u003e Double",
          "source": "src/GSL-Random-Dist.html#gammaPdf",
          "type": "function"
        },
        "index": {
          "description": "gammaPdf evaluates the probability density at for gamma distribution with parameters and The density is given by dx dx over Gamma a-1 dx for",
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "gammaPdf",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "package": "gsl-random",
          "partial": "Pdf",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:gammaPdf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GSL.Random.Dist",
          "name": "gammaQ",
          "package": "gsl-random",
          "signature": "Double -\u003e Double -\u003e Double -\u003e Double",
          "source": "src/GSL-Random-Dist.html#gammaQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "gammaQ",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "package": "gsl-random",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:gammaQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GSL.Random.Dist",
          "name": "gammaQInv",
          "package": "gsl-random",
          "signature": "Double -\u003e Double -\u003e Double -\u003e Double",
          "source": "src/GSL-Random-Dist.html#gammaQInv",
          "type": "function"
        },
        "index": {
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "gammaQInv",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "package": "gsl-random",
          "partial": "QInv",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:gammaQInv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egaussianP x sigma\u003c/code\u003e computes the cumulative distribution function P(x) for\n a Gaussian distribution with mean \u003ccode\u003e0\u003c/code\u003e and standard deviation \u003ccode\u003esigma\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GSL.Random.Dist",
          "name": "gaussianP",
          "package": "gsl-random",
          "signature": "Double -\u003e Double -\u003e Double",
          "source": "src/GSL-Random-Dist.html#gaussianP",
          "type": "function"
        },
        "index": {
          "description": "gaussianP sigma computes the cumulative distribution function for Gaussian distribution with mean and standard deviation sigma",
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "gaussianP",
          "normalized": "Double-\u003eDouble-\u003eDouble",
          "package": "gsl-random",
          "signature": "Double-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:gaussianP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egaussianPInv p sigma\u003c/code\u003e computes the inverse of the cumulative distribution\n function of a Gaussian distribution with mean \u003ccode\u003e0\u003c/code\u003e and standard deviation\n \u003ccode\u003esigma\u003c/code\u003e. It returns \u003ccode\u003ex\u003c/code\u003e such that \u003ccode\u003eP(x) = p\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GSL.Random.Dist",
          "name": "gaussianPInv",
          "package": "gsl-random",
          "signature": "Double -\u003e Double -\u003e Double",
          "source": "src/GSL-Random-Dist.html#gaussianPInv",
          "type": "function"
        },
        "index": {
          "description": "gaussianPInv sigma computes the inverse of the cumulative distribution function of Gaussian distribution with mean and standard deviation sigma It returns such that",
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "gaussianPInv",
          "normalized": "Double-\u003eDouble-\u003eDouble",
          "package": "gsl-random",
          "partial": "PInv",
          "signature": "Double-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:gaussianPInv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egaussianPdf x sigma\u003c/code\u003e computes the probabililty density p(x) for\n a Gaussian distribution with mean \u003ccode\u003e0\u003c/code\u003e and standard deviation \u003ccode\u003esigma\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GSL.Random.Dist",
          "name": "gaussianPdf",
          "package": "gsl-random",
          "signature": "Double -\u003e Double -\u003e Double",
          "source": "src/GSL-Random-Dist.html#gaussianPdf",
          "type": "function"
        },
        "index": {
          "description": "gaussianPdf sigma computes the probabililty density for Gaussian distribution with mean and standard deviation sigma",
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "gaussianPdf",
          "normalized": "Double-\u003eDouble-\u003eDouble",
          "package": "gsl-random",
          "partial": "Pdf",
          "signature": "Double-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:gaussianPdf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egaussianQ x sigma\u003c/code\u003e computes the cumulative distribution function Q(x) for\n a Gaussian distribution with mean \u003ccode\u003e0\u003c/code\u003e and standard deviation \u003ccode\u003esigma\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GSL.Random.Dist",
          "name": "gaussianQ",
          "package": "gsl-random",
          "signature": "Double -\u003e Double -\u003e Double",
          "source": "src/GSL-Random-Dist.html#gaussianQ",
          "type": "function"
        },
        "index": {
          "description": "gaussianQ sigma computes the cumulative distribution function for Gaussian distribution with mean and standard deviation sigma",
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "gaussianQ",
          "normalized": "Double-\u003eDouble-\u003eDouble",
          "package": "gsl-random",
          "signature": "Double-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:gaussianQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egaussianPInv q sigma\u003c/code\u003e computes the inverse of the cumulative distribution\n function of a Gaussian distribution with mean \u003ccode\u003e0\u003c/code\u003e and standard deviation\n \u003ccode\u003esigma\u003c/code\u003e. It returns \u003ccode\u003ex\u003c/code\u003e such that \u003ccode\u003eQ(x) = q\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GSL.Random.Dist",
          "name": "gaussianQInv",
          "package": "gsl-random",
          "signature": "Double -\u003e Double -\u003e Double",
          "source": "src/GSL-Random-Dist.html#gaussianQInv",
          "type": "function"
        },
        "index": {
          "description": "gaussianPInv sigma computes the inverse of the cumulative distribution function of Gaussian distribution with mean and standard deviation sigma It returns such that",
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "gaussianQInv",
          "normalized": "Double-\u003eDouble-\u003eDouble",
          "package": "gsl-random",
          "partial": "QInv",
          "signature": "Double-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:gaussianQInv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetBeta r a b\u003c/code\u003e gets a random beta with parameters \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GSL.Random.Dist",
          "name": "getBeta",
          "package": "gsl-random",
          "signature": "RNG -\u003e Double -\u003e Double -\u003e IO Double",
          "source": "src/GSL-Random-Dist.html#getBeta",
          "type": "function"
        },
        "index": {
          "description": "getBeta gets random beta with parameters and",
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "getBeta",
          "normalized": "RNG-\u003eDouble-\u003eDouble-\u003eIO Double",
          "package": "gsl-random",
          "partial": "Beta",
          "signature": "RNG-\u003eDouble-\u003eDouble-\u003eIO Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:getBeta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetCauchy r a\u003c/code\u003e gets a random cauchy with scale \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GSL.Random.Dist",
          "name": "getCauchy",
          "package": "gsl-random",
          "signature": "RNG -\u003e Double -\u003e IO Double",
          "source": "src/GSL-Random-Dist.html#getCauchy",
          "type": "function"
        },
        "index": {
          "description": "getCauchy gets random cauchy with scale",
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "getCauchy",
          "normalized": "RNG-\u003eDouble-\u003eIO Double",
          "package": "gsl-random",
          "partial": "Cauchy",
          "signature": "RNG-\u003eDouble-\u003eIO Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:getCauchy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetDirichlet r alphas\u003c/code\u003e gets a random sample from a\n Dirichlet distribution with parameters \u003ccode\u003ealphas\u003c/code\u003e, where all\n \u003ccode\u003ealphas\u003c/code\u003e are positive.\n\u003c/p\u003e",
          "module": "GSL.Random.Dist",
          "name": "getDirichlet",
          "package": "gsl-random",
          "signature": "RNG -\u003e Vector Double -\u003e IO (Vector Double)",
          "source": "src/GSL-Random-Dist.html#getDirichlet",
          "type": "function"
        },
        "index": {
          "description": "getDirichlet alphas gets random sample from Dirichlet distribution with parameters alphas where all alphas are positive",
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "getDirichlet",
          "normalized": "RNG-\u003eVector Double-\u003eIO(Vector Double)",
          "package": "gsl-random",
          "partial": "Dirichlet",
          "signature": "RNG-\u003eVector Double-\u003eIO(Vector Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:getDirichlet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetExponential r mu\u003c/code\u003e gets a random exponential with mean \u003ccode\u003emu\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GSL.Random.Dist",
          "name": "getExponential",
          "package": "gsl-random",
          "signature": "RNG -\u003e Double -\u003e IO Double",
          "source": "src/GSL-Random-Dist.html#getExponential",
          "type": "function"
        },
        "index": {
          "description": "getExponential mu gets random exponential with mean mu",
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "getExponential",
          "normalized": "RNG-\u003eDouble-\u003eIO Double",
          "package": "gsl-random",
          "partial": "Exponential",
          "signature": "RNG-\u003eDouble-\u003eIO Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:getExponential"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetFlat r a b\u003c/code\u003e gets a value uniformly chosen in \u003ccode\u003e[a,b)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GSL.Random.Dist",
          "name": "getFlat",
          "package": "gsl-random",
          "signature": "RNG -\u003e Double -\u003e Double -\u003e IO Double",
          "source": "src/GSL-Random-Dist.html#getFlat",
          "type": "function"
        },
        "index": {
          "description": "getFlat gets value uniformly chosen in",
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "getFlat",
          "normalized": "RNG-\u003eDouble-\u003eDouble-\u003eIO Double",
          "package": "gsl-random",
          "partial": "Flat",
          "signature": "RNG-\u003eDouble-\u003eDouble-\u003eIO Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:getFlat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetGamma r a b\u003c/code\u003e gets a random gamma with parameters \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e.\n   Uses the Marsagli-Tsang fast gamma method.\n\u003c/p\u003e",
          "module": "GSL.Random.Dist",
          "name": "getGamma",
          "package": "gsl-random",
          "signature": "RNG -\u003e Double -\u003e Double -\u003e IO Double",
          "source": "src/GSL-Random-Dist.html#getGamma",
          "type": "function"
        },
        "index": {
          "description": "getGamma gets random gamma with parameters and Uses the Marsagli-Tsang fast gamma method",
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "getGamma",
          "normalized": "RNG-\u003eDouble-\u003eDouble-\u003eIO Double",
          "package": "gsl-random",
          "partial": "Gamma",
          "signature": "RNG-\u003eDouble-\u003eDouble-\u003eIO Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:getGamma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetGammaKnuth r a b\u003c/code\u003e gets a random gamma with parameters \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e.\n   Uses the algorithms from Knuth (vol 2).\n\u003c/p\u003e",
          "module": "GSL.Random.Dist",
          "name": "getGammaKnuth",
          "package": "gsl-random",
          "signature": "RNG -\u003e Double -\u003e Double -\u003e IO Double",
          "source": "src/GSL-Random-Dist.html#getGammaKnuth",
          "type": "function"
        },
        "index": {
          "description": "getGammaKnuth gets random gamma with parameters and Uses the algorithms from Knuth vol",
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "getGammaKnuth",
          "normalized": "RNG-\u003eDouble-\u003eDouble-\u003eIO Double",
          "package": "gsl-random",
          "partial": "Gamma Knuth",
          "signature": "RNG-\u003eDouble-\u003eDouble-\u003eIO Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:getGammaKnuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetGaussian r sigma\u003c/code\u003e gets a normal random variable with mean\n \u003ccode\u003e0\u003c/code\u003e and standard deviation \u003ccode\u003esigma\u003c/code\u003e.\n This uses the Box-Mueller algorithm.\n\u003c/p\u003e",
          "module": "GSL.Random.Dist",
          "name": "getGaussian",
          "package": "gsl-random",
          "signature": "RNG -\u003e Double -\u003e IO Double",
          "source": "src/GSL-Random-Dist.html#getGaussian",
          "type": "function"
        },
        "index": {
          "description": "getGaussian sigma gets normal random variable with mean and standard deviation sigma This uses the Box-Mueller algorithm",
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "getGaussian",
          "normalized": "RNG-\u003eDouble-\u003eIO Double",
          "package": "gsl-random",
          "partial": "Gaussian",
          "signature": "RNG-\u003eDouble-\u003eIO Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:getGaussian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetGaussianRatioMethod r sigma\u003c/code\u003e gets a normal random variable with mean\n \u003ccode\u003e0\u003c/code\u003e and standard deviation \u003ccode\u003esigma\u003c/code\u003e.\n This uses the Kinderman-Monahan-Leva ratio method.\n\u003c/p\u003e",
          "module": "GSL.Random.Dist",
          "name": "getGaussianRatioMethod",
          "package": "gsl-random",
          "signature": "RNG -\u003e Double -\u003e IO Double",
          "source": "src/GSL-Random-Dist.html#getGaussianRatioMethod",
          "type": "function"
        },
        "index": {
          "description": "getGaussianRatioMethod sigma gets normal random variable with mean and standard deviation sigma This uses the Kinderman-Monahan-Leva ratio method",
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "getGaussianRatioMethod",
          "normalized": "RNG-\u003eDouble-\u003eIO Double",
          "package": "gsl-random",
          "partial": "Gaussian Ratio Method",
          "signature": "RNG-\u003eDouble-\u003eIO Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:getGaussianRatioMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetGaussianZiggurat r sigma\u003c/code\u003e gets a normal random variable with mean\n \u003ccode\u003e0\u003c/code\u003e and standard deviation \u003ccode\u003esigma\u003c/code\u003e.\n This uses the Marsaglia-Tsang ziggurat algorithm.\n\u003c/p\u003e",
          "module": "GSL.Random.Dist",
          "name": "getGaussianZiggurat",
          "package": "gsl-random",
          "signature": "RNG -\u003e Double -\u003e IO Double",
          "source": "src/GSL-Random-Dist.html#getGaussianZiggurat",
          "type": "function"
        },
        "index": {
          "description": "getGaussianZiggurat sigma gets normal random variable with mean and standard deviation sigma This uses the Marsaglia-Tsang ziggurat algorithm",
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "getGaussianZiggurat",
          "normalized": "RNG-\u003eDouble-\u003eIO Double",
          "package": "gsl-random",
          "partial": "Gaussian Ziggurat",
          "signature": "RNG-\u003eDouble-\u003eIO Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:getGaussianZiggurat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetLevy r c alpha\u003c/code\u003e gets a variate from the Levy symmetric stable\n distribution with scale \u003ccode\u003ec\u003c/code\u003e and exponent \u003ccode\u003ealpha\u003c/code\u003e.  The algorithm only\n works for \u003ccode\u003e0 \u003c= alpha \u003c= 2\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GSL.Random.Dist",
          "name": "getLevy",
          "package": "gsl-random",
          "signature": "RNG -\u003e Double -\u003e Double -\u003e IO Double",
          "source": "src/GSL-Random-Dist.html#getLevy",
          "type": "function"
        },
        "index": {
          "description": "getLevy alpha gets variate from the Levy symmetric stable distribution with scale and exponent alpha The algorithm only works for alpha",
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "getLevy",
          "normalized": "RNG-\u003eDouble-\u003eDouble-\u003eIO Double",
          "package": "gsl-random",
          "partial": "Levy",
          "signature": "RNG-\u003eDouble-\u003eDouble-\u003eIO Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:getLevy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetLevySkew r c alpha beta\u003c/code\u003e gets a variate from the Levy skew stable\n distribution with scale \u003ccode\u003ec\u003c/code\u003e, exponent \u003ccode\u003ealpha\u003c/code\u003e, and skewness parameter\n \u003ccode\u003ebeta\u003c/code\u003e.  The skewness parameter must lie in the range \u003ccode\u003e[-1,1]\u003c/code\u003e.  The\n algorithm only works for \u003ccode\u003e0 \u003c= alpha \u003c= 2\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GSL.Random.Dist",
          "name": "getLevySkew",
          "package": "gsl-random",
          "signature": "RNG -\u003e Double -\u003e Double -\u003e Double -\u003e IO Double",
          "source": "src/GSL-Random-Dist.html#getLevySkew",
          "type": "function"
        },
        "index": {
          "description": "getLevySkew alpha beta gets variate from the Levy skew stable distribution with scale exponent alpha and skewness parameter beta The skewness parameter must lie in the range The algorithm only works for alpha",
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "getLevySkew",
          "normalized": "RNG-\u003eDouble-\u003eDouble-\u003eDouble-\u003eIO Double",
          "package": "gsl-random",
          "partial": "Levy Skew",
          "signature": "RNG-\u003eDouble-\u003eDouble-\u003eDouble-\u003eIO Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:getLevySkew"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetLogistic r a\u003c/code\u003e gets a random logistic with scale \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GSL.Random.Dist",
          "name": "getLogistic",
          "package": "gsl-random",
          "signature": "RNG -\u003e Double -\u003e IO Double",
          "source": "src/GSL-Random-Dist.html#getLogistic",
          "type": "function"
        },
        "index": {
          "description": "getLogistic gets random logistic with scale",
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "getLogistic",
          "normalized": "RNG-\u003eDouble-\u003eIO Double",
          "package": "gsl-random",
          "partial": "Logistic",
          "signature": "RNG-\u003eDouble-\u003eIO Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:getLogistic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetLognormal zeta sigma\u003c/code\u003e gets a random lognormal with parameters \u003ccode\u003ezeta\u003c/code\u003e and \u003ccode\u003esigma\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GSL.Random.Dist",
          "name": "getLognormal",
          "package": "gsl-random",
          "signature": "RNG -\u003e Double -\u003e Double -\u003e IO Double",
          "source": "src/GSL-Random-Dist.html#getLognormal",
          "type": "function"
        },
        "index": {
          "description": "getLognormal zeta sigma gets random lognormal with parameters zeta and sigma",
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "getLognormal",
          "normalized": "RNG-\u003eDouble-\u003eDouble-\u003eIO Double",
          "package": "gsl-random",
          "partial": "Lognormal",
          "signature": "RNG-\u003eDouble-\u003eDouble-\u003eIO Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:getLognormal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetMultinomial r n ps\u003c/code\u003e gets a random sample from a\n multinomial distribution with parameters \u003ccode\u003eps\u003c/code\u003e formed by \u003ccode\u003en\u003c/code\u003e\n trials.\n\u003c/p\u003e",
          "module": "GSL.Random.Dist",
          "name": "getMultinomial",
          "package": "gsl-random",
          "signature": "RNG -\u003e Int -\u003e Vector Double -\u003e IO (Vector Int)",
          "source": "src/GSL-Random-Dist.html#getMultinomial",
          "type": "function"
        },
        "index": {
          "description": "getMultinomial ps gets random sample from multinomial distribution with parameters ps formed by trials",
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "getMultinomial",
          "normalized": "RNG-\u003eInt-\u003eVector Double-\u003eIO(Vector Int)",
          "package": "gsl-random",
          "partial": "Multinomial",
          "signature": "RNG-\u003eInt-\u003eVector Double-\u003eIO(Vector Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:getMultinomial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetPareto r a b\u003c/code\u003e gets a random Pareto with exponent \u003ccode\u003ea\u003c/code\u003e and scale \u003ccode\u003eb\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GSL.Random.Dist",
          "name": "getPareto",
          "package": "gsl-random",
          "signature": "RNG -\u003e Double -\u003e Double -\u003e IO Double",
          "source": "src/GSL-Random-Dist.html#getPareto",
          "type": "function"
        },
        "index": {
          "description": "getPareto gets random Pareto with exponent and scale",
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "getPareto",
          "normalized": "RNG-\u003eDouble-\u003eDouble-\u003eIO Double",
          "package": "gsl-random",
          "partial": "Pareto",
          "signature": "RNG-\u003eDouble-\u003eDouble-\u003eIO Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:getPareto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetPoisson r mu\u003c/code\u003e gets a poisson random variable with mean \u003ccode\u003emu\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GSL.Random.Dist",
          "name": "getPoisson",
          "package": "gsl-random",
          "signature": "RNG -\u003e Double -\u003e IO Int",
          "source": "src/GSL-Random-Dist.html#getPoisson",
          "type": "function"
        },
        "index": {
          "description": "getPoisson mu gets poisson random variable with mean mu",
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "getPoisson",
          "normalized": "RNG-\u003eDouble-\u003eIO Int",
          "package": "gsl-random",
          "partial": "Poisson",
          "signature": "RNG-\u003eDouble-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:getPoisson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetUGaussian r\u003c/code\u003e gets a normal random variable with mean\n \u003ccode\u003e0\u003c/code\u003e and standard deviation \u003ccode\u003e1\u003c/code\u003e.\n This uses the Box-Mueller algorithm.\n\u003c/p\u003e",
          "module": "GSL.Random.Dist",
          "name": "getUGaussian",
          "package": "gsl-random",
          "signature": "RNG -\u003e IO Double",
          "source": "src/GSL-Random-Dist.html#getUGaussian",
          "type": "function"
        },
        "index": {
          "description": "getUGaussian gets normal random variable with mean and standard deviation This uses the Box-Mueller algorithm",
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "getUGaussian",
          "normalized": "RNG-\u003eIO Double",
          "package": "gsl-random",
          "partial": "UGaussian",
          "signature": "RNG-\u003eIO Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:getUGaussian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetUGaussianRatioMethod r\u003c/code\u003e gets a normal random variable with mean\n \u003ccode\u003e0\u003c/code\u003e and standard deviation \u003ccode\u003e1\u003c/code\u003e.\n This uses the Kinderman-Monahan-Leva ratio method.\n\u003c/p\u003e",
          "module": "GSL.Random.Dist",
          "name": "getUGaussianRatioMethod",
          "package": "gsl-random",
          "signature": "RNG -\u003e IO Double",
          "source": "src/GSL-Random-Dist.html#getUGaussianRatioMethod",
          "type": "function"
        },
        "index": {
          "description": "getUGaussianRatioMethod gets normal random variable with mean and standard deviation This uses the Kinderman-Monahan-Leva ratio method",
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "getUGaussianRatioMethod",
          "normalized": "RNG-\u003eIO Double",
          "package": "gsl-random",
          "partial": "UGaussian Ratio Method",
          "signature": "RNG-\u003eIO Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:getUGaussianRatioMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetWeibull r a b\u003c/code\u003e gets a random Weibull with scale \u003ccode\u003ea\u003c/code\u003e and exponent \u003ccode\u003eb\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GSL.Random.Dist",
          "name": "getWeibull",
          "package": "gsl-random",
          "signature": "RNG -\u003e Double -\u003e Double -\u003e IO Double",
          "source": "src/GSL-Random-Dist.html#getWeibull",
          "type": "function"
        },
        "index": {
          "description": "getWeibull gets random Weibull with scale and exponent",
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "getWeibull",
          "normalized": "RNG-\u003eDouble-\u003eDouble-\u003eIO Double",
          "package": "gsl-random",
          "partial": "Weibull",
          "signature": "RNG-\u003eDouble-\u003eDouble-\u003eIO Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:getWeibull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GSL.Random.Dist",
          "name": "logisticP",
          "package": "gsl-random",
          "signature": "Double -\u003e Double -\u003e Double",
          "source": "src/GSL-Random-Dist.html#logisticP",
          "type": "function"
        },
        "index": {
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "logisticP",
          "normalized": "Double-\u003eDouble-\u003eDouble",
          "package": "gsl-random",
          "signature": "Double-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:logisticP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GSL.Random.Dist",
          "name": "logisticPInv",
          "package": "gsl-random",
          "signature": "Double -\u003e Double -\u003e Double",
          "source": "src/GSL-Random-Dist.html#logisticPInv",
          "type": "function"
        },
        "index": {
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "logisticPInv",
          "normalized": "Double-\u003eDouble-\u003eDouble",
          "package": "gsl-random",
          "partial": "PInv",
          "signature": "Double-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:logisticPInv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003elogisticPdf x a\u003c/code\u003e evaluates the probability density \u003ccode\u003ep(x)\u003c/code\u003e at \u003ccode\u003ex\u003c/code\u003e\n for a logistic distribution with scale parameter \u003ccode\u003ea\u003c/code\u003e.  The density\n is given by \u003ccode\u003ep(x) dx = { exp(-x\u003cem\u003ea) \\over a (1 + \\exp(-x\u003c/em\u003ea))^2 } dx\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GSL.Random.Dist",
          "name": "logisticPdf",
          "package": "gsl-random",
          "signature": "Double -\u003e Double -\u003e Double",
          "source": "src/GSL-Random-Dist.html#logisticPdf",
          "type": "function"
        },
        "index": {
          "description": "logisticPdf evaluates the probability density at for logistic distribution with scale parameter The density is given by dx exp over exp dx",
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "logisticPdf",
          "normalized": "Double-\u003eDouble-\u003eDouble",
          "package": "gsl-random",
          "partial": "Pdf",
          "signature": "Double-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:logisticPdf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GSL.Random.Dist",
          "name": "logisticQ",
          "package": "gsl-random",
          "signature": "Double -\u003e Double -\u003e Double",
          "source": "src/GSL-Random-Dist.html#logisticQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "logisticQ",
          "normalized": "Double-\u003eDouble-\u003eDouble",
          "package": "gsl-random",
          "signature": "Double-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:logisticQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GSL.Random.Dist",
          "name": "logisticQInv",
          "package": "gsl-random",
          "signature": "Double -\u003e Double -\u003e Double",
          "source": "src/GSL-Random-Dist.html#logisticQInv",
          "type": "function"
        },
        "index": {
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "logisticQInv",
          "normalized": "Double-\u003eDouble-\u003eDouble",
          "package": "gsl-random",
          "partial": "QInv",
          "signature": "Double-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:logisticQInv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GSL.Random.Dist",
          "name": "lognormalP",
          "package": "gsl-random",
          "signature": "Double -\u003e Double -\u003e Double -\u003e Double",
          "source": "src/GSL-Random-Dist.html#lognormalP",
          "type": "function"
        },
        "index": {
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "lognormalP",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "package": "gsl-random",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:lognormalP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GSL.Random.Dist",
          "name": "lognormalPInv",
          "package": "gsl-random",
          "signature": "Double -\u003e Double -\u003e Double -\u003e Double",
          "source": "src/GSL-Random-Dist.html#lognormalPInv",
          "type": "function"
        },
        "index": {
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "lognormalPInv",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "package": "gsl-random",
          "partial": "PInv",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:lognormalPInv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003elognormalPdf x zeta sigma\u003c/code\u003e evaluates the probability density\n   \u003ccode\u003ep(x)\u003c/code\u003e at \u003ccode\u003ex\u003c/code\u003e for a log-normal distribution with parameters \u003ccode\u003ezeta\u003c/code\u003e\n   and \u003ccode\u003esigma\u003c/code\u003e, given.  The density is given by\n   \u003ccode\u003ep(x) dx = p(x) {1 over x sqrt{2 pi sigma^2} } exp(-(ln(x) - zeta)^2/2 sigma^2) dx\u003c/code\u003e\n\u003c/p\u003e",
          "module": "GSL.Random.Dist",
          "name": "lognormalPdf",
          "package": "gsl-random",
          "signature": "Double -\u003e Double -\u003e Double -\u003e Double",
          "source": "src/GSL-Random-Dist.html#lognormalPdf",
          "type": "function"
        },
        "index": {
          "description": "lognormalPdf zeta sigma evaluates the probability density at for log-normal distribution with parameters zeta and sigma given The density is given by dx over sqrt pi sigma exp ln zeta sigma dx",
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "lognormalPdf",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "package": "gsl-random",
          "partial": "Pdf",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:lognormalPdf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GSL.Random.Dist",
          "name": "lognormalQ",
          "package": "gsl-random",
          "signature": "Double -\u003e Double -\u003e Double -\u003e Double",
          "source": "src/GSL-Random-Dist.html#lognormalQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "lognormalQ",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "package": "gsl-random",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:lognormalQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GSL.Random.Dist",
          "name": "lognormalQInv",
          "package": "gsl-random",
          "signature": "Double -\u003e Double -\u003e Double -\u003e Double",
          "source": "src/GSL-Random-Dist.html#lognormalQInv",
          "type": "function"
        },
        "index": {
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "lognormalQInv",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "package": "gsl-random",
          "partial": "QInv",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:lognormalQInv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003emultinomialLnPdf xs alphas == log (multinomialPdf xs alphas)\u003c/code\u003e,\n   but more efficient.\n\u003c/p\u003e",
          "module": "GSL.Random.Dist",
          "name": "multinomialLnPdf",
          "package": "gsl-random",
          "signature": "Vector Int-\u003e Vector Double-\u003e Double",
          "type": "function"
        },
        "index": {
          "description": "multinomialLnPdf xs alphas log multinomialPdf xs alphas but more efficient",
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "multinomialLnPdf",
          "normalized": "Vector Int-\u003eVector Double-\u003eDouble",
          "package": "gsl-random",
          "partial": "Ln Pdf",
          "signature": "Vector Int-\u003eVector Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:multinomialLnPdf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003emultinomialPdf ns ps\u003c/code\u003e evaluates the probability density\n \u003ccode\u003ep(ns)\u003c/code\u003e at \u003ccode\u003ens\u003c/code\u003e for a multinomial distribution with parameters\n \u003ccode\u003eps\u003c/code\u003e, where all \u003ccode\u003eps\u003c/code\u003e are non-negative and sum to \u003ccode\u003e1\u003c/code\u003e.  Note\n that \u003ccode\u003exs\u003c/code\u003e and \u003ccode\u003ealphas\u003c/code\u003e should have the same length.\n\u003c/p\u003e",
          "module": "GSL.Random.Dist",
          "name": "multinomialPdf",
          "package": "gsl-random",
          "signature": "Vector Int-\u003e Vector Double-\u003e Double",
          "type": "function"
        },
        "index": {
          "description": "multinomialPdf ns ps evaluates the probability density ns at ns for multinomial distribution with parameters ps where all ps are non-negative and sum to Note that xs and alphas should have the same length",
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "multinomialPdf",
          "normalized": "Vector Int-\u003eVector Double-\u003eDouble",
          "package": "gsl-random",
          "partial": "Pdf",
          "signature": "Vector Int-\u003eVector Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:multinomialPdf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GSL.Random.Dist",
          "name": "paretoP",
          "package": "gsl-random",
          "signature": "Double -\u003e Double -\u003e Double -\u003e Double",
          "source": "src/GSL-Random-Dist.html#paretoP",
          "type": "function"
        },
        "index": {
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "paretoP",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "package": "gsl-random",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:paretoP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GSL.Random.Dist",
          "name": "paretoPInv",
          "package": "gsl-random",
          "signature": "Double -\u003e Double -\u003e Double -\u003e Double",
          "source": "src/GSL-Random-Dist.html#paretoPInv",
          "type": "function"
        },
        "index": {
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "paretoPInv",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "package": "gsl-random",
          "partial": "PInv",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:paretoPInv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eparetoPdf x a b\u003c/code\u003e evaluates the probability density \u003ccode\u003ep(x)\u003c/code\u003e at \u003ccode\u003ex\u003c/code\u003e\n for a Pareto distribution with exponent \u003ccode\u003ea\u003c/code\u003e and scale \u003ccode\u003eb\u003c/code\u003e.  The density\n is given by \u003ccode\u003ep(x) dx = (a\u003cem\u003eb) \u003c/em\u003e (x/b)^{a+1} dx\u003c/code\u003e for \u003ccode\u003ex \u003e= b\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GSL.Random.Dist",
          "name": "paretoPdf",
          "package": "gsl-random",
          "signature": "Double -\u003e Double -\u003e Double -\u003e Double",
          "source": "src/GSL-Random-Dist.html#paretoPdf",
          "type": "function"
        },
        "index": {
          "description": "paretoPdf evaluates the probability density at for Pareto distribution with exponent and scale The density is given by dx dx for",
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "paretoPdf",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "package": "gsl-random",
          "partial": "Pdf",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:paretoPdf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GSL.Random.Dist",
          "name": "paretoQ",
          "package": "gsl-random",
          "signature": "Double -\u003e Double -\u003e Double -\u003e Double",
          "source": "src/GSL-Random-Dist.html#paretoQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "paretoQ",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "package": "gsl-random",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:paretoQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GSL.Random.Dist",
          "name": "paretoQInv",
          "package": "gsl-random",
          "signature": "Double -\u003e Double -\u003e Double -\u003e Double",
          "source": "src/GSL-Random-Dist.html#paretoQInv",
          "type": "function"
        },
        "index": {
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "paretoQInv",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "package": "gsl-random",
          "partial": "QInv",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:paretoQInv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003epoissonP k mu\u003c/code\u003e evaluates the cumulative distribution function \u003ccode\u003eP(k)\u003c/code\u003e\n at \u003ccode\u003ek\u003c/code\u003e for a Poisson distribution with mean \u003ccode\u003emu\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GSL.Random.Dist",
          "name": "poissonP",
          "package": "gsl-random",
          "signature": "Int -\u003e Double -\u003e Double",
          "source": "src/GSL-Random-Dist.html#poissonP",
          "type": "function"
        },
        "index": {
          "description": "poissonP mu evaluates the cumulative distribution function at for Poisson distribution with mean mu",
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "poissonP",
          "normalized": "Int-\u003eDouble-\u003eDouble",
          "package": "gsl-random",
          "signature": "Int-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:poissonP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003epoissonPdf k mu\u003c/code\u003e evaluates the probability density \u003ccode\u003ep(k)\u003c/code\u003e at \u003ccode\u003ek\u003c/code\u003e for\n a Poisson distribution with mean \u003ccode\u003emu\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GSL.Random.Dist",
          "name": "poissonPdf",
          "package": "gsl-random",
          "signature": "Int -\u003e Double -\u003e Double",
          "source": "src/GSL-Random-Dist.html#poissonPdf",
          "type": "function"
        },
        "index": {
          "description": "poissonPdf mu evaluates the probability density at for Poisson distribution with mean mu",
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "poissonPdf",
          "normalized": "Int-\u003eDouble-\u003eDouble",
          "package": "gsl-random",
          "partial": "Pdf",
          "signature": "Int-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:poissonPdf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003epoissonQ k mu\u003c/code\u003e evaluates the cumulative distribution function \u003ccode\u003eQ(k)\u003c/code\u003e\n at \u003ccode\u003ek\u003c/code\u003e for a Poisson distribution with mean \u003ccode\u003emu\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GSL.Random.Dist",
          "name": "poissonQ",
          "package": "gsl-random",
          "signature": "Int -\u003e Double -\u003e Double",
          "source": "src/GSL-Random-Dist.html#poissonQ",
          "type": "function"
        },
        "index": {
          "description": "poissonQ mu evaluates the cumulative distribution function at for Poisson distribution with mean mu",
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "poissonQ",
          "normalized": "Int-\u003eDouble-\u003eDouble",
          "package": "gsl-random",
          "signature": "Int-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:poissonQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eugaussianP x\u003c/code\u003e computes the cumulative distribution function P(x) for\n a Gaussian distribution with mean \u003ccode\u003e0\u003c/code\u003e and standard deviation \u003ccode\u003e1\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GSL.Random.Dist",
          "name": "ugaussianP",
          "package": "gsl-random",
          "signature": "Double -\u003e Double",
          "source": "src/GSL-Random-Dist.html#ugaussianP",
          "type": "function"
        },
        "index": {
          "description": "ugaussianP computes the cumulative distribution function for Gaussian distribution with mean and standard deviation",
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "ugaussianP",
          "normalized": "Double-\u003eDouble",
          "package": "gsl-random",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:ugaussianP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eugaussianPInv p\u003c/code\u003e computes the inverse of the cumulative distribution\n function of a Gaussian distribution with mean \u003ccode\u003e0\u003c/code\u003e and standard deviation\n \u003ccode\u003e1\u003c/code\u003e. It returns \u003ccode\u003ex\u003c/code\u003e such that \u003ccode\u003eP(x) = p\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GSL.Random.Dist",
          "name": "ugaussianPInv",
          "package": "gsl-random",
          "signature": "Double -\u003e Double",
          "source": "src/GSL-Random-Dist.html#ugaussianPInv",
          "type": "function"
        },
        "index": {
          "description": "ugaussianPInv computes the inverse of the cumulative distribution function of Gaussian distribution with mean and standard deviation It returns such that",
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "ugaussianPInv",
          "normalized": "Double-\u003eDouble",
          "package": "gsl-random",
          "partial": "PInv",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:ugaussianPInv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eugaussianPdf x\u003c/code\u003e computes the probabililty density p(x) for\n a Gaussian distribution with mean \u003ccode\u003e0\u003c/code\u003e and standard deviation \u003ccode\u003e1\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GSL.Random.Dist",
          "name": "ugaussianPdf",
          "package": "gsl-random",
          "signature": "Double -\u003e Double",
          "source": "src/GSL-Random-Dist.html#ugaussianPdf",
          "type": "function"
        },
        "index": {
          "description": "ugaussianPdf computes the probabililty density for Gaussian distribution with mean and standard deviation",
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "ugaussianPdf",
          "normalized": "Double-\u003eDouble",
          "package": "gsl-random",
          "partial": "Pdf",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:ugaussianPdf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eugaussianQ x\u003c/code\u003e computes the cumulative distribution function Q(x) for\n a Gaussian distribution with mean \u003ccode\u003e0\u003c/code\u003e and standard deviation \u003ccode\u003e1\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GSL.Random.Dist",
          "name": "ugaussianQ",
          "package": "gsl-random",
          "signature": "Double -\u003e Double",
          "source": "src/GSL-Random-Dist.html#ugaussianQ",
          "type": "function"
        },
        "index": {
          "description": "ugaussianQ computes the cumulative distribution function for Gaussian distribution with mean and standard deviation",
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "ugaussianQ",
          "normalized": "Double-\u003eDouble",
          "package": "gsl-random",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:ugaussianQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eugaussianPInv q\u003c/code\u003e computes the inverse of the cumulative distribution\n function of a Gaussian distribution with mean \u003ccode\u003e0\u003c/code\u003e and standard deviation\n \u003ccode\u003e1\u003c/code\u003e. It returns \u003ccode\u003ex\u003c/code\u003e such that \u003ccode\u003eQ(x) = q\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GSL.Random.Dist",
          "name": "ugaussianQInv",
          "package": "gsl-random",
          "signature": "Double -\u003e Double",
          "source": "src/GSL-Random-Dist.html#ugaussianQInv",
          "type": "function"
        },
        "index": {
          "description": "ugaussianPInv computes the inverse of the cumulative distribution function of Gaussian distribution with mean and standard deviation It returns such that",
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "ugaussianQInv",
          "normalized": "Double-\u003eDouble",
          "package": "gsl-random",
          "partial": "QInv",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:ugaussianQInv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GSL.Random.Dist",
          "name": "weibullP",
          "package": "gsl-random",
          "signature": "Double -\u003e Double -\u003e Double -\u003e Double",
          "source": "src/GSL-Random-Dist.html#weibullP",
          "type": "function"
        },
        "index": {
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "weibullP",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "package": "gsl-random",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:weibullP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GSL.Random.Dist",
          "name": "weibullPInv",
          "package": "gsl-random",
          "signature": "Double -\u003e Double -\u003e Double -\u003e Double",
          "source": "src/GSL-Random-Dist.html#weibullPInv",
          "type": "function"
        },
        "index": {
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "weibullPInv",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "package": "gsl-random",
          "partial": "PInv",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:weibullPInv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eweibullPdf x a b\u003c/code\u003e evaluates the probability density \u003ccode\u003ep(x)\u003c/code\u003e at \u003ccode\u003ex\u003c/code\u003e\n for a Weibull distribution with scale \u003ccode\u003ea\u003c/code\u003e and exponent \u003ccode\u003eb\u003c/code\u003e.  The density\n is given by \u003ccode\u003ep(x) dx = {b over a^b} x^{b-1}  exp(-(x/a)^b) dx\u003c/code\u003e for \u003ccode\u003ex \u003e= 0\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GSL.Random.Dist",
          "name": "weibullPdf",
          "package": "gsl-random",
          "signature": "Double -\u003e Double -\u003e Double -\u003e Double",
          "source": "src/GSL-Random-Dist.html#weibullPdf",
          "type": "function"
        },
        "index": {
          "description": "weibullPdf evaluates the probability density at for Weibull distribution with scale and exponent The density is given by dx over b-1 exp dx for",
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "weibullPdf",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "package": "gsl-random",
          "partial": "Pdf",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:weibullPdf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GSL.Random.Dist",
          "name": "weibullQ",
          "package": "gsl-random",
          "signature": "Double -\u003e Double -\u003e Double -\u003e Double",
          "source": "src/GSL-Random-Dist.html#weibullQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "weibullQ",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "package": "gsl-random",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:weibullQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GSL.Random.Dist",
          "name": "weibullQInv",
          "package": "gsl-random",
          "signature": "Double -\u003e Double -\u003e Double -\u003e Double",
          "source": "src/GSL-Random-Dist.html#weibullQInv",
          "type": "function"
        },
        "index": {
          "hierarchy": "GSL Random Dist",
          "module": "GSL.Random.Dist",
          "name": "weibullQInv",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "package": "gsl-random",
          "partial": "QInv",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Dist.html#v:weibullQInv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRandom number generators.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "GSL.Random.Gen",
          "name": "Gen",
          "package": "gsl-random",
          "source": "src/GSL-Random-Gen.html",
          "type": "module"
        },
        "index": {
          "description": "Random number generators",
          "hierarchy": "GSL Random Gen",
          "module": "GSL.Random.Gen",
          "name": "Gen",
          "package": "gsl-random",
          "partial": "Gen",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Gen.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GSL.Random.Gen",
          "name": "RNG",
          "package": "gsl-random",
          "source": "src/GSL-Random-Gen-Internal.html#RNG",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "GSL Random Gen",
          "module": "GSL.Random.Gen",
          "name": "RNG",
          "package": "gsl-random",
          "partial": "RNG",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Gen.html#t:RNG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GSL.Random.Gen",
          "name": "RNGType",
          "package": "gsl-random",
          "source": "src/GSL-Random-Gen-Internal.html#RNGType",
          "type": "data"
        },
        "index": {
          "hierarchy": "GSL Random Gen",
          "module": "GSL.Random.Gen",
          "name": "RNGType",
          "package": "gsl-random",
          "partial": "RNGType",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Gen.html#t:RNGType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GSL.Random.Gen",
          "name": "MkRNG",
          "package": "gsl-random",
          "signature": "MkRNG (ForeignPtr ())",
          "source": "src/GSL-Random-Gen-Internal.html#RNG",
          "type": "function"
        },
        "index": {
          "hierarchy": "GSL Random Gen",
          "module": "GSL.Random.Gen",
          "name": "MkRNG",
          "normalized": "MkRNG(ForeignPtr())",
          "package": "gsl-random",
          "partial": "Mk RNG",
          "signature": "MkRNG(ForeignPtr())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Gen.html#v:MkRNG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllocate a new random number generator that is an exact copy of another\n generator\n\u003c/p\u003e",
          "module": "GSL.Random.Gen",
          "name": "cloneRNG",
          "package": "gsl-random",
          "signature": "RNG -\u003e IO RNG",
          "source": "src/GSL-Random-Gen-Internal.html#cloneRNG",
          "type": "function"
        },
        "index": {
          "description": "Allocate new random number generator that is an exact copy of another generator",
          "hierarchy": "GSL Random Gen",
          "module": "GSL.Random.Gen",
          "name": "cloneRNG",
          "normalized": "RNG-\u003eIO RNG",
          "package": "gsl-random",
          "partial": "RNG",
          "signature": "RNG-\u003eIO RNG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Gen.html#v:cloneRNG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecopyRNG dst src\u003c/code\u003e copies the state from one generator to another.  The\n   two generators must have the same type.\n\u003c/p\u003e",
          "module": "GSL.Random.Gen",
          "name": "copyRNG",
          "package": "gsl-random",
          "signature": "RNG -\u003e RNG -\u003e IO ()",
          "source": "src/GSL-Random-Gen-Internal.html#copyRNG",
          "type": "function"
        },
        "index": {
          "description": "copyRNG dst src copies the state from one generator to another The two generators must have the same type",
          "hierarchy": "GSL Random Gen",
          "module": "GSL.Random.Gen",
          "name": "copyRNG",
          "normalized": "RNG-\u003eRNG-\u003eIO()",
          "package": "gsl-random",
          "partial": "RNG",
          "signature": "RNG-\u003eRNG-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Gen.html#v:copyRNG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the largest value that the generator can return.\n\u003c/p\u003e",
          "module": "GSL.Random.Gen",
          "name": "getMax",
          "package": "gsl-random",
          "signature": "RNG -\u003e IO Word64",
          "source": "src/GSL-Random-Gen-Internal.html#getMax",
          "type": "function"
        },
        "index": {
          "description": "Get the largest value that the generator can return",
          "hierarchy": "GSL Random Gen",
          "module": "GSL.Random.Gen",
          "name": "getMax",
          "normalized": "RNG-\u003eIO Word",
          "package": "gsl-random",
          "partial": "Max",
          "signature": "RNG-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Gen.html#v:getMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the smallest value that the generator can return.\n\u003c/p\u003e",
          "module": "GSL.Random.Gen",
          "name": "getMin",
          "package": "gsl-random",
          "signature": "RNG -\u003e IO Word64",
          "source": "src/GSL-Random-Gen-Internal.html#getMin",
          "type": "function"
        },
        "index": {
          "description": "Get the smallest value that the generator can return",
          "hierarchy": "GSL Random Gen",
          "module": "GSL.Random.Gen",
          "name": "getMin",
          "normalized": "RNG-\u003eIO Word",
          "package": "gsl-random",
          "partial": "Min",
          "signature": "RNG-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Gen.html#v:getMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the name of the generator.\n\u003c/p\u003e",
          "module": "GSL.Random.Gen",
          "name": "getName",
          "package": "gsl-random",
          "signature": "RNG -\u003e IO String",
          "source": "src/GSL-Random-Gen-Internal.html#getName",
          "type": "function"
        },
        "index": {
          "description": "Get the name of the generator",
          "hierarchy": "GSL Random Gen",
          "module": "GSL.Random.Gen",
          "name": "getName",
          "normalized": "RNG-\u003eIO String",
          "package": "gsl-random",
          "partial": "Name",
          "signature": "RNG-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Gen.html#v:getName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a value uniform in [rngMin, rngMax]\n\u003c/p\u003e",
          "module": "GSL.Random.Gen",
          "name": "getSample",
          "package": "gsl-random",
          "signature": "RNG -\u003e IO Word64",
          "source": "src/GSL-Random-Gen-Internal.html#getSample",
          "type": "function"
        },
        "index": {
          "description": "Returns value uniform in rngMin rngMax",
          "hierarchy": "GSL Random Gen",
          "module": "GSL.Random.Gen",
          "name": "getSample",
          "normalized": "RNG-\u003eIO Word",
          "package": "gsl-random",
          "partial": "Sample",
          "signature": "RNG-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Gen.html#v:getSample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the size of the generator state, in bytes.\n\u003c/p\u003e",
          "module": "GSL.Random.Gen",
          "name": "getSize",
          "package": "gsl-random",
          "signature": "RNG -\u003e IO Word64",
          "source": "src/GSL-Random-Gen-Internal.html#getSize",
          "type": "function"
        },
        "index": {
          "description": "Get the size of the generator state in bytes",
          "hierarchy": "GSL Random Gen",
          "module": "GSL.Random.Gen",
          "name": "getSize",
          "normalized": "RNG-\u003eIO Word",
          "package": "gsl-random",
          "partial": "Size",
          "signature": "RNG-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Gen.html#v:getSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the generator state.\n\u003c/p\u003e",
          "module": "GSL.Random.Gen",
          "name": "getState",
          "package": "gsl-random",
          "signature": "RNG -\u003e IO [Word8]",
          "source": "src/GSL-Random-Gen-Internal.html#getState",
          "type": "function"
        },
        "index": {
          "description": "Get the generator state",
          "hierarchy": "GSL Random Gen",
          "module": "GSL.Random.Gen",
          "name": "getState",
          "normalized": "RNG-\u003eIO[Word]",
          "package": "gsl-random",
          "partial": "State",
          "signature": "RNG-\u003eIO[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Gen.html#v:getState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a value uniform on [0,1)\n\u003c/p\u003e",
          "module": "GSL.Random.Gen",
          "name": "getUniform",
          "package": "gsl-random",
          "signature": "RNG -\u003e IO Double",
          "source": "src/GSL-Random-Gen-Internal.html#getUniform",
          "type": "function"
        },
        "index": {
          "description": "Returns value uniform on",
          "hierarchy": "GSL Random Gen",
          "module": "GSL.Random.Gen",
          "name": "getUniform",
          "normalized": "RNG-\u003eIO Double",
          "package": "gsl-random",
          "partial": "Uniform",
          "signature": "RNG-\u003eIO Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Gen.html#v:getUniform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns an integer uniform on [0,n-1].  \u003ccode\u003en\u003c/code\u003e must be greater than \u003ccode\u003e0\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GSL.Random.Gen",
          "name": "getUniformInt",
          "package": "gsl-random",
          "signature": "RNG -\u003e Int -\u003e IO Int",
          "source": "src/GSL-Random-Gen-Internal.html#getUniformInt",
          "type": "function"
        },
        "index": {
          "description": "Returns an integer uniform on n-1 must be greater than",
          "hierarchy": "GSL Random Gen",
          "module": "GSL.Random.Gen",
          "name": "getUniformInt",
          "normalized": "RNG-\u003eInt-\u003eIO Int",
          "package": "gsl-random",
          "partial": "Uniform Int",
          "signature": "RNG-\u003eInt-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Gen.html#v:getUniformInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a value uniform on (0,1)\n\u003c/p\u003e",
          "module": "GSL.Random.Gen",
          "name": "getUniformPos",
          "package": "gsl-random",
          "signature": "RNG -\u003e IO Double",
          "source": "src/GSL-Random-Gen-Internal.html#getUniformPos",
          "type": "function"
        },
        "index": {
          "description": "Returns value uniform on",
          "hierarchy": "GSL Random Gen",
          "module": "GSL.Random.Gen",
          "name": "getUniformPos",
          "normalized": "RNG-\u003eIO Double",
          "package": "gsl-random",
          "partial": "Uniform Pos",
          "signature": "RNG-\u003eIO Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Gen.html#v:getUniformPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GSL.Random.Gen",
          "name": "mt19937",
          "package": "gsl-random",
          "signature": "RNGType",
          "source": "src/GSL-Random-Gen-Internal.html#mt19937",
          "type": "function"
        },
        "index": {
          "hierarchy": "GSL Random Gen",
          "module": "GSL.Random.Gen",
          "name": "mt19937",
          "package": "gsl-random",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Gen.html#v:mt19937"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllocate a new random number generator of the given type and initialize\n it with the default seed.\n\u003c/p\u003e",
          "module": "GSL.Random.Gen",
          "name": "newRNG",
          "package": "gsl-random",
          "signature": "RNGType -\u003e IO RNG",
          "source": "src/GSL-Random-Gen-Internal.html#newRNG",
          "type": "function"
        },
        "index": {
          "description": "Allocate new random number generator of the given type and initialize it with the default seed",
          "hierarchy": "GSL Random Gen",
          "module": "GSL.Random.Gen",
          "name": "newRNG",
          "normalized": "RNGType-\u003eIO RNG",
          "package": "gsl-random",
          "partial": "RNG",
          "signature": "RNGType-\u003eIO RNG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Gen.html#v:newRNG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GSL.Random.Gen",
          "name": "rngType",
          "package": "gsl-random",
          "signature": "String -\u003e Maybe RNGType",
          "source": "src/GSL-Random-Gen-Internal.html#rngType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GSL Random Gen",
          "module": "GSL.Random.Gen",
          "name": "rngType",
          "normalized": "String-\u003eMaybe RNGType",
          "package": "gsl-random",
          "partial": "Type",
          "signature": "String-\u003eMaybe RNGType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Gen.html#v:rngType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSeed the generator with the given value.\n\u003c/p\u003e",
          "module": "GSL.Random.Gen",
          "name": "setSeed",
          "package": "gsl-random",
          "signature": "RNG -\u003e Word64 -\u003e IO ()",
          "source": "src/GSL-Random-Gen-Internal.html#setSeed",
          "type": "function"
        },
        "index": {
          "description": "Seed the generator with the given value",
          "hierarchy": "GSL Random Gen",
          "module": "GSL.Random.Gen",
          "name": "setSeed",
          "normalized": "RNG-\u003eWord-\u003eIO()",
          "package": "gsl-random",
          "partial": "Seed",
          "signature": "RNG-\u003eWord-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Gen.html#v:setSeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the generator state.  The input array should have size equal\n to \u003ccode\u003egetSize\u003c/code\u003e of the generator; otherwise, strange things will happen.\n\u003c/p\u003e",
          "module": "GSL.Random.Gen",
          "name": "setState",
          "package": "gsl-random",
          "signature": "RNG -\u003e [Word8] -\u003e IO ()",
          "source": "src/GSL-Random-Gen-Internal.html#setState",
          "type": "function"
        },
        "index": {
          "description": "Set the generator state The input array should have size equal to getSize of the generator otherwise strange things will happen",
          "hierarchy": "GSL Random Gen",
          "module": "GSL.Random.Gen",
          "name": "setState",
          "normalized": "RNG-\u003e[Word]-\u003eIO()",
          "package": "gsl-random",
          "partial": "State",
          "signature": "RNG-\u003e[Word]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Gen.html#v:setState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eQuasi-random number generators.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "GSL.Random.Quasi",
          "name": "Quasi",
          "package": "gsl-random",
          "source": "src/GSL-Random-Quasi.html",
          "type": "module"
        },
        "index": {
          "description": "Quasi-random number generators",
          "hierarchy": "GSL Random Quasi",
          "module": "GSL.Random.Quasi",
          "name": "Quasi",
          "package": "gsl-random",
          "partial": "Quasi",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Quasi.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GSL.Random.Quasi",
          "name": "QRNG",
          "package": "gsl-random",
          "source": "src/GSL-Random-Quasi-Internal.html#QRNG",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "GSL Random Quasi",
          "module": "GSL.Random.Quasi",
          "name": "QRNG",
          "package": "gsl-random",
          "partial": "QRNG",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Quasi.html#t:QRNG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GSL.Random.Quasi",
          "name": "QRNGType",
          "package": "gsl-random",
          "source": "src/GSL-Random-Quasi-Internal.html#QRNGType",
          "type": "data"
        },
        "index": {
          "hierarchy": "GSL Random Quasi",
          "module": "GSL.Random.Quasi",
          "name": "QRNGType",
          "package": "gsl-random",
          "partial": "QRNGType",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Quasi.html#t:QRNGType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GSL.Random.Quasi",
          "name": "MkQRNG",
          "package": "gsl-random",
          "signature": "MkQRNG (ForeignPtr QRNG)",
          "source": "src/GSL-Random-Quasi-Internal.html#QRNG",
          "type": "function"
        },
        "index": {
          "hierarchy": "GSL Random Quasi",
          "module": "GSL.Random.Quasi",
          "name": "MkQRNG",
          "package": "gsl-random",
          "partial": "Mk QRNG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Quasi.html#v:MkQRNG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllocate a new quasi-random number generator that is exact copy of\n another generator.\n\u003c/p\u003e",
          "module": "GSL.Random.Quasi",
          "name": "cloneQRNG",
          "package": "gsl-random",
          "signature": "QRNG -\u003e IO QRNG",
          "source": "src/GSL-Random-Quasi-Internal.html#cloneQRNG",
          "type": "function"
        },
        "index": {
          "description": "Allocate new quasi-random number generator that is exact copy of another generator",
          "hierarchy": "GSL Random Quasi",
          "module": "GSL.Random.Quasi",
          "name": "cloneQRNG",
          "normalized": "QRNG-\u003eIO QRNG",
          "package": "gsl-random",
          "partial": "QRNG",
          "signature": "QRNG-\u003eIO QRNG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Quasi.html#v:cloneQRNG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecopyQRNG dst src\u003c/code\u003e copies the state from one generator to another. The\n   two generators must have the same type.\n\u003c/p\u003e",
          "module": "GSL.Random.Quasi",
          "name": "copyQRNG",
          "package": "gsl-random",
          "signature": "QRNG -\u003e QRNG -\u003e IO ()",
          "source": "src/GSL-Random-Quasi-Internal.html#copyQRNG",
          "type": "function"
        },
        "index": {
          "description": "copyQRNG dst src copies the state from one generator to another The two generators must have the same type",
          "hierarchy": "GSL Random Quasi",
          "module": "GSL.Random.Quasi",
          "name": "copyQRNG",
          "normalized": "QRNG-\u003eQRNG-\u003eIO()",
          "package": "gsl-random",
          "partial": "QRNG",
          "signature": "QRNG-\u003eQRNG-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Quasi.html#v:copyQRNG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe dimension of the sequence.\n\u003c/p\u003e",
          "module": "GSL.Random.Quasi",
          "name": "getDimension",
          "package": "gsl-random",
          "signature": "QRNG -\u003e IO Int",
          "source": "src/GSL-Random-Quasi-Internal.html#getDimension",
          "type": "function"
        },
        "index": {
          "description": "The dimension of the sequence",
          "hierarchy": "GSL Random Quasi",
          "module": "GSL.Random.Quasi",
          "name": "getDimension",
          "normalized": "QRNG-\u003eIO Int",
          "package": "gsl-random",
          "partial": "Dimension",
          "signature": "QRNG-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Quasi.html#v:getDimension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the next sample point as a list.\n\u003c/p\u003e",
          "module": "GSL.Random.Quasi",
          "name": "getListSample",
          "package": "gsl-random",
          "signature": "QRNG -\u003e IO [Double]",
          "source": "src/GSL-Random-Quasi-Internal.html#getListSample",
          "type": "function"
        },
        "index": {
          "description": "Gets the next sample point as list",
          "hierarchy": "GSL Random Quasi",
          "module": "GSL.Random.Quasi",
          "name": "getListSample",
          "normalized": "QRNG-\u003eIO[Double]",
          "package": "gsl-random",
          "partial": "List Sample",
          "signature": "QRNG-\u003eIO[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Quasi.html#v:getListSample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the name of the generator.\n\u003c/p\u003e",
          "module": "GSL.Random.Quasi",
          "name": "getName",
          "package": "gsl-random",
          "signature": "QRNG -\u003e IO String",
          "source": "src/GSL-Random-Quasi-Internal.html#getName",
          "type": "function"
        },
        "index": {
          "description": "Get the name of the generator",
          "hierarchy": "GSL Random Quasi",
          "module": "GSL.Random.Quasi",
          "name": "getName",
          "normalized": "QRNG-\u003eIO String",
          "package": "gsl-random",
          "partial": "Name",
          "signature": "QRNG-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Quasi.html#v:getName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStores the next point from the generator in the given buffer. The\n space available in the buffer must match the dimension of the generator.\n The components of the sample will each lie in the range (0,1).\n\u003c/p\u003e",
          "module": "GSL.Random.Quasi",
          "name": "getSample",
          "package": "gsl-random",
          "signature": "QRNG -\u003e Ptr Double -\u003e IO ()",
          "source": "src/GSL-Random-Quasi-Internal.html#getSample",
          "type": "function"
        },
        "index": {
          "description": "Stores the next point from the generator in the given buffer The space available in the buffer must match the dimension of the generator The components of the sample will each lie in the range",
          "hierarchy": "GSL Random Quasi",
          "module": "GSL.Random.Quasi",
          "name": "getSample",
          "normalized": "QRNG-\u003ePtr Double-\u003eIO()",
          "package": "gsl-random",
          "partial": "Sample",
          "signature": "QRNG-\u003ePtr Double-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Quasi.html#v:getSample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the size of the generator state, in bytes.\n\u003c/p\u003e",
          "module": "GSL.Random.Quasi",
          "name": "getSize",
          "package": "gsl-random",
          "signature": "QRNG -\u003e IO Word64",
          "source": "src/GSL-Random-Quasi-Internal.html#getSize",
          "type": "function"
        },
        "index": {
          "description": "Get the size of the generator state in bytes",
          "hierarchy": "GSL Random Quasi",
          "module": "GSL.Random.Quasi",
          "name": "getSize",
          "normalized": "QRNG-\u003eIO Word",
          "package": "gsl-random",
          "partial": "Size",
          "signature": "QRNG-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Quasi.html#v:getSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the generator state.\n\u003c/p\u003e",
          "module": "GSL.Random.Quasi",
          "name": "getState",
          "package": "gsl-random",
          "signature": "QRNG -\u003e IO [Word8]",
          "source": "src/GSL-Random-Quasi-Internal.html#getState",
          "type": "function"
        },
        "index": {
          "description": "Get the generator state",
          "hierarchy": "GSL Random Quasi",
          "module": "GSL.Random.Quasi",
          "name": "getState",
          "normalized": "QRNG-\u003eIO[Word]",
          "package": "gsl-random",
          "partial": "State",
          "signature": "QRNG-\u003eIO[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Quasi.html#v:getState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GSL.Random.Quasi",
          "name": "halton",
          "package": "gsl-random",
          "signature": "QRNGType",
          "source": "src/GSL-Random-Quasi-Internal.html#halton",
          "type": "function"
        },
        "index": {
          "hierarchy": "GSL Random Quasi",
          "module": "GSL.Random.Quasi",
          "name": "halton",
          "package": "gsl-random",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Quasi.html#v:halton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe maximum dimension of samples that the given generator supports.\n\u003c/p\u003e",
          "module": "GSL.Random.Quasi",
          "name": "maxDimension",
          "package": "gsl-random",
          "signature": "QRNGType -\u003e Int",
          "source": "src/GSL-Random-Quasi-Internal.html#maxDimension",
          "type": "function"
        },
        "index": {
          "description": "The maximum dimension of samples that the given generator supports",
          "hierarchy": "GSL Random Quasi",
          "module": "GSL.Random.Quasi",
          "name": "maxDimension",
          "normalized": "QRNGType-\u003eInt",
          "package": "gsl-random",
          "partial": "Dimension",
          "signature": "QRNGType-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Quasi.html#v:maxDimension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllocate a new quasi-random number generator of the given type,\n generating points with the given number of dimensions.\n\u003c/p\u003e",
          "module": "GSL.Random.Quasi",
          "name": "newQRNG",
          "package": "gsl-random",
          "signature": "QRNGType -\u003e Int -\u003e IO QRNG",
          "source": "src/GSL-Random-Quasi-Internal.html#newQRNG",
          "type": "function"
        },
        "index": {
          "description": "Allocate new quasi-random number generator of the given type generating points with the given number of dimensions",
          "hierarchy": "GSL Random Quasi",
          "module": "GSL.Random.Quasi",
          "name": "newQRNG",
          "normalized": "QRNGType-\u003eInt-\u003eIO QRNG",
          "package": "gsl-random",
          "partial": "QRNG",
          "signature": "QRNGType-\u003eInt-\u003eIO QRNG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Quasi.html#v:newQRNG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GSL.Random.Quasi",
          "name": "niederreiter",
          "package": "gsl-random",
          "signature": "QRNGType",
          "source": "src/GSL-Random-Quasi-Internal.html#niederreiter",
          "type": "function"
        },
        "index": {
          "hierarchy": "GSL Random Quasi",
          "module": "GSL.Random.Quasi",
          "name": "niederreiter",
          "package": "gsl-random",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Quasi.html#v:niederreiter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReset the generator to the beginning of its sequence.\n\u003c/p\u003e",
          "module": "GSL.Random.Quasi",
          "name": "resetQRNG",
          "package": "gsl-random",
          "signature": "QRNG -\u003e IO ()",
          "source": "src/GSL-Random-Quasi-Internal.html#resetQRNG",
          "type": "function"
        },
        "index": {
          "description": "Reset the generator to the beginning of its sequence",
          "hierarchy": "GSL Random Quasi",
          "module": "GSL.Random.Quasi",
          "name": "resetQRNG",
          "normalized": "QRNG-\u003eIO()",
          "package": "gsl-random",
          "partial": "QRNG",
          "signature": "QRNG-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Quasi.html#v:resetQRNG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GSL.Random.Quasi",
          "name": "reverseHalton",
          "package": "gsl-random",
          "signature": "QRNGType",
          "source": "src/GSL-Random-Quasi-Internal.html#reverseHalton",
          "type": "function"
        },
        "index": {
          "hierarchy": "GSL Random Quasi",
          "module": "GSL.Random.Quasi",
          "name": "reverseHalton",
          "package": "gsl-random",
          "partial": "Halton",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Quasi.html#v:reverseHalton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the generator state.  The input array should have size equal to\n \u003ccode\u003egetSize\u003c/code\u003e of the generator; otherwise, strange things will happen.\n\u003c/p\u003e",
          "module": "GSL.Random.Quasi",
          "name": "setState",
          "package": "gsl-random",
          "signature": "QRNG -\u003e [Word8] -\u003e IO ()",
          "source": "src/GSL-Random-Quasi-Internal.html#setState",
          "type": "function"
        },
        "index": {
          "description": "Set the generator state The input array should have size equal to getSize of the generator otherwise strange things will happen",
          "hierarchy": "GSL Random Quasi",
          "module": "GSL.Random.Quasi",
          "name": "setState",
          "normalized": "QRNG-\u003e[Word]-\u003eIO()",
          "package": "gsl-random",
          "partial": "State",
          "signature": "QRNG-\u003e[Word]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Quasi.html#v:setState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GSL.Random.Quasi",
          "name": "sobol",
          "package": "gsl-random",
          "signature": "QRNGType",
          "source": "src/GSL-Random-Quasi-Internal.html#sobol",
          "type": "function"
        },
        "index": {
          "hierarchy": "GSL Random Quasi",
          "module": "GSL.Random.Quasi",
          "name": "sobol",
          "package": "gsl-random",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gsl-random/docs/GSL-Random-Quasi.html#v:sobol"
      }
    }
  ]
]