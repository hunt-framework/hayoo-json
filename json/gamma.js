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
        "word": "gamma"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Factorial",
          "name": "Factorial",
          "package": "gamma",
          "source": "src/Math-Factorial.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Math Factorial",
          "module": "Math.Factorial",
          "name": "Factorial",
          "package": "gamma",
          "partial": "Factorial",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gamma/docs/Math-Factorial.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFactorial function\n\u003c/p\u003e",
          "module": "Math.Factorial",
          "name": "Factorial",
          "package": "gamma",
          "source": "src/Math-Factorial.html#Factorial",
          "type": "class"
        },
        "index": {
          "description": "Factorial function",
          "hierarchy": "Math Factorial",
          "module": "Math.Factorial",
          "name": "Factorial",
          "package": "gamma",
          "partial": "Factorial",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/gamma/docs/Math-Factorial.html#t:Factorial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Factorial",
          "name": "factorial",
          "package": "gamma",
          "signature": "b -\u003e a",
          "source": "src/Math-Factorial.html#factorial",
          "type": "method"
        },
        "index": {
          "hierarchy": "Math Factorial",
          "module": "Math.Factorial",
          "name": "factorial",
          "normalized": "a-\u003eb",
          "package": "gamma",
          "signature": "b-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/gamma/docs/Math-Factorial.html#v:factorial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Gamma.Incomplete",
          "name": "Incomplete",
          "package": "gamma",
          "source": "src/Math-Gamma-Incomplete.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Math Gamma Incomplete",
          "module": "Math.Gamma.Incomplete",
          "name": "Incomplete",
          "package": "gamma",
          "partial": "Incomplete",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gamma/docs/Math-Gamma-Incomplete.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNatural logarithm of lower gamma function, based on the same identity as\n \u003ccode\u003e\u003ca\u003elowerGammaHypGeom\u003c/a\u003e\u003c/code\u003e and evaluated carefully to avoid overflow and underflow.\n Recommended for use when x \u003c s+1\n\u003c/p\u003e",
          "module": "Math.Gamma.Incomplete",
          "name": "lnLowerGammaHypGeom",
          "package": "gamma",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Math-Gamma-Incomplete.html#lnLowerGammaHypGeom",
          "type": "function"
        },
        "index": {
          "description": "Natural logarithm of lower gamma function based on the same identity as lowerGammaHypGeom and evaluated carefully to avoid overflow and underflow Recommended for use when",
          "hierarchy": "Math Gamma Incomplete",
          "module": "Math.Gamma.Incomplete",
          "name": "lnLowerGammaHypGeom",
          "normalized": "a-\u003ea-\u003ea",
          "package": "gamma",
          "partial": "Lower Gamma Hyp Geom",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gamma/docs/Math-Gamma-Incomplete.html#v:lnLowerGammaHypGeom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNatural logarithms of the convergents of the upper gamma function, \n evaluated carefully to avoid overflow and underflow.\n Recommended for use when x \u003e= s+1\n\u003c/p\u003e",
          "module": "Math.Gamma.Incomplete",
          "name": "lnUpperGammaConvergents",
          "package": "gamma",
          "signature": "a -\u003e a -\u003e [a]",
          "source": "src/Math-Gamma-Incomplete.html#lnUpperGammaConvergents",
          "type": "function"
        },
        "index": {
          "description": "Natural logarithms of the convergents of the upper gamma function evaluated carefully to avoid overflow and underflow Recommended for use when",
          "hierarchy": "Math Gamma Incomplete",
          "module": "Math.Gamma.Incomplete",
          "name": "lnUpperGammaConvergents",
          "normalized": "a-\u003ea-\u003e[a]",
          "package": "gamma",
          "partial": "Upper Gamma Convergents",
          "signature": "a-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gamma/docs/Math-Gamma-Incomplete.html#v:lnUpperGammaConvergents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContinued fraction representation of the lower incomplete gamma function.\n\u003c/p\u003e",
          "module": "Math.Gamma.Incomplete",
          "name": "lowerGammaCF",
          "package": "gamma",
          "signature": "a -\u003e a -\u003e CF a",
          "source": "src/Math-Gamma-Incomplete.html#lowerGammaCF",
          "type": "function"
        },
        "index": {
          "description": "Continued fraction representation of the lower incomplete gamma function",
          "hierarchy": "Math Gamma Incomplete",
          "module": "Math.Gamma.Incomplete",
          "name": "lowerGammaCF",
          "normalized": "a-\u003ea-\u003eCF a",
          "package": "gamma",
          "partial": "Gamma CF",
          "signature": "a-\u003ea-\u003eCF a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gamma/docs/Math-Gamma-Incomplete.html#v:lowerGammaCF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLower incomplete gamma function, computed using Kummer's confluent\n hypergeometric function M(a;b;x).  Specifically, this uses the identity:\n\u003c/p\u003e\u003cp\u003egamma(s,x) = x**s * exp (-x) / s * M(1; 1+s; x)\n\u003c/p\u003e\u003cp\u003eFrom Abramowitz & Stegun (6.5.12).\n\u003c/p\u003e\u003cp\u003eRecommended for use when x \u003c s+1\n\u003c/p\u003e",
          "module": "Math.Gamma.Incomplete",
          "name": "lowerGammaHypGeom",
          "package": "gamma",
          "signature": "b -\u003e b -\u003e b",
          "source": "src/Math-Gamma-Incomplete.html#lowerGammaHypGeom",
          "type": "function"
        },
        "index": {
          "description": "Lower incomplete gamma function computed using Kummer confluent hypergeometric function Specifically this uses the identity gamma exp From Abramowitz Stegun Recommended for use when",
          "hierarchy": "Math Gamma Incomplete",
          "module": "Math.Gamma.Incomplete",
          "name": "lowerGammaHypGeom",
          "normalized": "a-\u003ea-\u003ea",
          "package": "gamma",
          "partial": "Gamma Hyp Geom",
          "signature": "b-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gamma/docs/Math-Gamma-Incomplete.html#v:lowerGammaHypGeom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContinued fraction representation of the regularized lower incomplete gamma function.\n\u003c/p\u003e",
          "module": "Math.Gamma.Incomplete",
          "name": "pCF",
          "package": "gamma",
          "signature": "a -\u003e a -\u003e CF a",
          "source": "src/Math-Gamma-Incomplete.html#pCF",
          "type": "function"
        },
        "index": {
          "description": "Continued fraction representation of the regularized lower incomplete gamma function",
          "hierarchy": "Math Gamma Incomplete",
          "module": "Math.Gamma.Incomplete",
          "name": "pCF",
          "normalized": "a-\u003ea-\u003eCF a",
          "package": "gamma",
          "partial": "CF",
          "signature": "a-\u003ea-\u003eCF a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gamma/docs/Math-Gamma-Incomplete.html#v:pCF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRegularized lower incomplete gamma function, computed using Kummer's\n confluent hypergeometric function.  Uses same identity as \u003ccode\u003e\u003ca\u003elowerGammaHypGeom\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eRecommended for use when x \u003c s+1\n\u003c/p\u003e",
          "module": "Math.Gamma.Incomplete",
          "name": "pHypGeom",
          "package": "gamma",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Math-Gamma-Incomplete.html#pHypGeom",
          "type": "function"
        },
        "index": {
          "description": "Regularized lower incomplete gamma function computed using Kummer confluent hypergeometric function Uses same identity as lowerGammaHypGeom Recommended for use when",
          "hierarchy": "Math Gamma Incomplete",
          "module": "Math.Gamma.Incomplete",
          "name": "pHypGeom",
          "normalized": "a-\u003ea-\u003ea",
          "package": "gamma",
          "partial": "Hyp Geom",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gamma/docs/Math-Gamma-Incomplete.html#v:pHypGeom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContinued fraction representation of the regularized upper incomplete gamma function.\n Recommended for use when x \u003e= s+1\n\u003c/p\u003e",
          "module": "Math.Gamma.Incomplete",
          "name": "qCF",
          "package": "gamma",
          "signature": "a -\u003e a -\u003e CF a",
          "source": "src/Math-Gamma-Incomplete.html#qCF",
          "type": "function"
        },
        "index": {
          "description": "Continued fraction representation of the regularized upper incomplete gamma function Recommended for use when",
          "hierarchy": "Math Gamma Incomplete",
          "module": "Math.Gamma.Incomplete",
          "name": "qCF",
          "normalized": "a-\u003ea-\u003eCF a",
          "package": "gamma",
          "partial": "CF",
          "signature": "a-\u003ea-\u003eCF a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gamma/docs/Math-Gamma-Incomplete.html#v:qCF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContinued fraction representation of the upper incomplete gamma function.\n Recommended for use when x \u003e= s+1\n\u003c/p\u003e",
          "module": "Math.Gamma.Incomplete",
          "name": "upperGammaCF",
          "package": "gamma",
          "signature": "a -\u003e a -\u003e CF a",
          "source": "src/Math-Gamma-Incomplete.html#upperGammaCF",
          "type": "function"
        },
        "index": {
          "description": "Continued fraction representation of the upper incomplete gamma function Recommended for use when",
          "hierarchy": "Math Gamma Incomplete",
          "module": "Math.Gamma.Incomplete",
          "name": "upperGammaCF",
          "normalized": "a-\u003ea-\u003eCF a",
          "package": "gamma",
          "partial": "Gamma CF",
          "signature": "a-\u003ea-\u003eCF a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gamma/docs/Math-Gamma-Incomplete.html#v:upperGammaCF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLanczos' approximation to the gamma function, as described at\n http://en.wikipedia.org/wiki/Lanczos_approximation\n (fetched 11 June 2010).\n\u003c/p\u003e\u003cp\u003eConstants to be supplied by user.  There is a file \"extras/LanczosConstants.hs\"\n in the source repository that implements a technique by Paul Godfrey for\n calculating the coefficients.  It is not included in the distribution yet \n because it makes use of a linear algebra library I have not yet released \n (though I eventually intend to).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Math.Gamma.Lanczos",
          "name": "Lanczos",
          "package": "gamma",
          "source": "src/Math-Gamma-Lanczos.html",
          "type": "module"
        },
        "index": {
          "description": "Lanczos approximation to the gamma function as described at http en.wikipedia.org wiki Lanczos approximation fetched June Constants to be supplied by user There is file extras LanczosConstants.hs in the source repository that implements technique by Paul Godfrey for calculating the coefficients It is not included in the distribution yet because it makes use of linear algebra library have not yet released though eventually intend to",
          "hierarchy": "Math Gamma Lanczos",
          "module": "Math.Gamma.Lanczos",
          "name": "Lanczos",
          "package": "gamma",
          "partial": "Lanczos",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gamma/docs/Math-Gamma-Lanczos.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute Lanczos' approximation to the gamma function, using the specified\n constants.  Valid for Re(x) \u003e 0.5.  Use \u003ccode\u003e\u003ca\u003ereflect\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ereflectC\u003c/a\u003e\u003c/code\u003e to extend\n to the whole real line or complex plane, respectively.\n\u003c/p\u003e",
          "module": "Math.Gamma.Lanczos",
          "name": "gammaLanczos",
          "package": "gamma",
          "signature": "a -\u003e [a] -\u003e a -\u003e a",
          "source": "src/Math-Gamma-Lanczos.html#gammaLanczos",
          "type": "function"
        },
        "index": {
          "description": "Compute Lanczos approximation to the gamma function using the specified constants Valid for Re Use reflect or reflectC to extend to the whole real line or complex plane respectively",
          "hierarchy": "Math Gamma Lanczos",
          "module": "Math.Gamma.Lanczos",
          "name": "gammaLanczos",
          "normalized": "a-\u003e[a]-\u003ea-\u003ea",
          "package": "gamma",
          "partial": "Lanczos",
          "signature": "a-\u003e[a]-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gamma/docs/Math-Gamma-Lanczos.html#v:gammaLanczos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute Lanczos' approximation to the natural logarithm of the gamma\n function, using the specified constants.  Valid for Re(x) \u003e 0.5.  Use\n \u003ccode\u003e\u003ca\u003ereflectLn\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ereflectLnC\u003c/a\u003e\u003c/code\u003e to extend to the whole real line or complex\n plane, respectively.\n\u003c/p\u003e",
          "module": "Math.Gamma.Lanczos",
          "name": "lnGammaLanczos",
          "package": "gamma",
          "signature": "a -\u003e [a] -\u003e a -\u003e a",
          "source": "src/Math-Gamma-Lanczos.html#lnGammaLanczos",
          "type": "function"
        },
        "index": {
          "description": "Compute Lanczos approximation to the natural logarithm of the gamma function using the specified constants Valid for Re Use reflectLn or reflectLnC to extend to the whole real line or complex plane respectively",
          "hierarchy": "Math Gamma Lanczos",
          "module": "Math.Gamma.Lanczos",
          "name": "lnGammaLanczos",
          "normalized": "a-\u003e[a]-\u003ea-\u003ea",
          "package": "gamma",
          "partial": "Gamma Lanczos",
          "signature": "a-\u003e[a]-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gamma/docs/Math-Gamma-Lanczos.html#v:lnGammaLanczos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtend an approximation of the gamma function from the domain x \u003e 0.5 to\n the whole real line.\n\u003c/p\u003e",
          "module": "Math.Gamma.Lanczos",
          "name": "reflect",
          "package": "gamma",
          "signature": "(a -\u003e a) -\u003e a -\u003e a",
          "source": "src/Math-Gamma-Lanczos.html#reflect",
          "type": "function"
        },
        "index": {
          "description": "Extend an approximation of the gamma function from the domain to the whole real line",
          "hierarchy": "Math Gamma Lanczos",
          "module": "Math.Gamma.Lanczos",
          "name": "reflect",
          "normalized": "(a-\u003ea)-\u003ea-\u003ea",
          "package": "gamma",
          "signature": "(a-\u003ea)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gamma/docs/Math-Gamma-Lanczos.html#v:reflect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtend an approximation of the gamma function from the domain Re(x) \u003e 0.5\n to the whole complex plane.\n\u003c/p\u003e",
          "module": "Math.Gamma.Lanczos",
          "name": "reflectC",
          "package": "gamma",
          "signature": "(Complex a -\u003e Complex a) -\u003e Complex a -\u003e Complex a",
          "source": "src/Math-Gamma-Lanczos.html#reflectC",
          "type": "function"
        },
        "index": {
          "description": "Extend an approximation of the gamma function from the domain Re to the whole complex plane",
          "hierarchy": "Math Gamma Lanczos",
          "module": "Math.Gamma.Lanczos",
          "name": "reflectC",
          "normalized": "(Complex a-\u003eComplex a)-\u003eComplex a-\u003eComplex a",
          "package": "gamma",
          "signature": "(Complex a-\u003eComplex a)-\u003eComplex a-\u003eComplex a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gamma/docs/Math-Gamma-Lanczos.html#v:reflectC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtend an approximation of the natural logarithm of the gamma function \n from the domain x \u003e 0.5 to the whole real line.\n\u003c/p\u003e",
          "module": "Math.Gamma.Lanczos",
          "name": "reflectLn",
          "package": "gamma",
          "signature": "(a -\u003e a) -\u003e a -\u003e a",
          "source": "src/Math-Gamma-Lanczos.html#reflectLn",
          "type": "function"
        },
        "index": {
          "description": "Extend an approximation of the natural logarithm of the gamma function from the domain to the whole real line",
          "hierarchy": "Math Gamma Lanczos",
          "module": "Math.Gamma.Lanczos",
          "name": "reflectLn",
          "normalized": "(a-\u003ea)-\u003ea-\u003ea",
          "package": "gamma",
          "partial": "Ln",
          "signature": "(a-\u003ea)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gamma/docs/Math-Gamma-Lanczos.html#v:reflectLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtend an approximation of the natural logarithm of the gamma function \n from the domain Re(x) \u003e 0.5 to the whole complex plane.\n\u003c/p\u003e",
          "module": "Math.Gamma.Lanczos",
          "name": "reflectLnC",
          "package": "gamma",
          "signature": "(Complex a -\u003e Complex a) -\u003e Complex a -\u003e Complex a",
          "source": "src/Math-Gamma-Lanczos.html#reflectLnC",
          "type": "function"
        },
        "index": {
          "description": "Extend an approximation of the natural logarithm of the gamma function from the domain Re to the whole complex plane",
          "hierarchy": "Math Gamma Lanczos",
          "module": "Math.Gamma.Lanczos",
          "name": "reflectLnC",
          "normalized": "(Complex a-\u003eComplex a)-\u003eComplex a-\u003eComplex a",
          "package": "gamma",
          "partial": "Ln",
          "signature": "(Complex a-\u003eComplex a)-\u003eComplex a-\u003eComplex a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gamma/docs/Math-Gamma-Lanczos.html#v:reflectLnC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStirling's approximation to the gamma function and utility functions for\n selecting coefficients.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Math.Gamma.Stirling",
          "name": "Stirling",
          "package": "gamma",
          "source": "src/Math-Gamma-Stirling.html",
          "type": "module"
        },
        "index": {
          "description": "Stirling approximation to the gamma function and utility functions for selecting coefficients",
          "hierarchy": "Math Gamma Stirling",
          "module": "Math.Gamma.Stirling",
          "name": "Stirling",
          "package": "gamma",
          "partial": "Stirling",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gamma/docs/Math-Gamma-Stirling.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe (unsigned) Stirling numbers of the first kind.\n\u003c/p\u003e",
          "module": "Math.Gamma.Stirling",
          "name": "abs_s",
          "package": "gamma",
          "signature": "Int -\u003e Int -\u003e Integer",
          "source": "src/Math-Gamma-Stirling.html#abs_s",
          "type": "function"
        },
        "index": {
          "description": "The unsigned Stirling numbers of the first kind",
          "hierarchy": "Math Gamma Stirling",
          "module": "Math.Gamma.Stirling",
          "name": "abs_s",
          "normalized": "Int-\u003eInt-\u003eInteger",
          "package": "gamma",
          "signature": "Int-\u003eInt-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gamma/docs/Math-Gamma-Stirling.html#v:abs_s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe c_n series in the convergent version of Stirling's approximation given\n on wikipedia at\n http://en.wikipedia.org/wiki/Stirling%27s_approximation#A_convergent_version_of_Stirling.27s_formula\n as fetched on 11 June 2010.\n\u003c/p\u003e",
          "module": "Math.Gamma.Stirling",
          "name": "cs",
          "package": "gamma",
          "signature": "[a]",
          "source": "src/Math-Gamma-Stirling.html#cs",
          "type": "function"
        },
        "index": {
          "description": "The series in the convergent version of Stirling approximation given on wikipedia at http en.wikipedia.org wiki Stirling approximation convergent version of Stirling.27s formula as fetched on June",
          "hierarchy": "Math Gamma Stirling",
          "module": "Math.Gamma.Stirling",
          "name": "cs",
          "normalized": "[a]",
          "package": "gamma",
          "signature": "[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gamma/docs/Math-Gamma-Stirling.html#v:cs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvergent when Re(z) \u003e 0.  The first argument is the c_n series to use \n (\u003ccode\u003e\u003ca\u003ecs\u003c/a\u003e\u003c/code\u003e is an ineffecient but generic definition of the full infinite series.\n Some precomputed finite prefix of \u003ccode\u003e\u003ca\u003ecs\u003c/a\u003e\u003c/code\u003e should be fed to this function, the \n length of which will determine the accuracy achieved.)\n\u003c/p\u003e",
          "module": "Math.Gamma.Stirling",
          "name": "lnGammaStirling",
          "package": "gamma",
          "signature": "[a] -\u003e a -\u003e a",
          "source": "src/Math-Gamma-Stirling.html#lnGammaStirling",
          "type": "function"
        },
        "index": {
          "description": "Convergent when Re The first argument is the series to use cs is an ineffecient but generic definition of the full infinite series Some precomputed finite prefix of cs should be fed to this function the length of which will determine the accuracy achieved",
          "hierarchy": "Math Gamma Stirling",
          "module": "Math.Gamma.Stirling",
          "name": "lnGammaStirling",
          "normalized": "[a]-\u003ea-\u003ea",
          "package": "gamma",
          "partial": "Gamma Stirling",
          "signature": "[a]-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gamma/docs/Math-Gamma-Stirling.html#v:lnGammaStirling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe (signed) Stirling numbers of the first kind.\n\u003c/p\u003e",
          "module": "Math.Gamma.Stirling",
          "name": "s",
          "package": "gamma",
          "signature": "Int -\u003e Int -\u003e Integer",
          "source": "src/Math-Gamma-Stirling.html#s",
          "type": "function"
        },
        "index": {
          "description": "The signed Stirling numbers of the first kind",
          "hierarchy": "Math Gamma Stirling",
          "module": "Math.Gamma.Stirling",
          "name": "s",
          "normalized": "Int-\u003eInt-\u003eInteger",
          "package": "gamma",
          "signature": "Int-\u003eInt-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gamma/docs/Math-Gamma-Stirling.html#v:s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the number of terms required to achieve a given precision for a\n given value of z.  The mamimum will typically (always?) be around 1, and \n seems to be more or less independent of the precision desired (though not \n of the machine epsilon - essentially, near zero I think this method is\n extremely numerically unstable).\n\u003c/p\u003e",
          "module": "Math.Gamma.Stirling",
          "name": "terms",
          "package": "gamma",
          "signature": "a -\u003e a -\u003e t",
          "source": "src/Math-Gamma-Stirling.html#terms",
          "type": "function"
        },
        "index": {
          "description": "Compute the number of terms required to achieve given precision for given value of The mamimum will typically always be around and seems to be more or less independent of the precision desired though not of the machine epsilon essentially near zero think this method is extremely numerically unstable",
          "hierarchy": "Math Gamma Stirling",
          "module": "Math.Gamma.Stirling",
          "name": "terms",
          "normalized": "a-\u003ea-\u003eb",
          "package": "gamma",
          "signature": "a-\u003ea-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gamma/docs/Math-Gamma-Stirling.html#v:terms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Gamma",
          "name": "Gamma",
          "package": "gamma",
          "source": "src/Math-Gamma.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Math Gamma",
          "module": "Math.Gamma",
          "name": "Gamma",
          "package": "gamma",
          "partial": "Gamma",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gamma/docs/Math-Gamma.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFactorial function\n\u003c/p\u003e",
          "module": "Math.Gamma",
          "name": "Factorial",
          "package": "gamma",
          "source": "src/Math-Factorial.html#Factorial",
          "type": "class"
        },
        "index": {
          "description": "Factorial function",
          "hierarchy": "Math Gamma",
          "module": "Math.Gamma",
          "name": "Factorial",
          "package": "gamma",
          "partial": "Factorial",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/gamma/docs/Math-Gamma.html#t:Factorial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGamma function.  Minimal definition is ether \u003ccode\u003e\u003ca\u003egamma\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003elnGamma\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Gamma",
          "name": "Gamma",
          "package": "gamma",
          "source": "src/Math-Gamma.html#Gamma",
          "type": "class"
        },
        "index": {
          "description": "Gamma function Minimal definition is ether gamma or lnGamma",
          "hierarchy": "Math Gamma",
          "module": "Math.Gamma",
          "name": "Gamma",
          "package": "gamma",
          "partial": "Gamma",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/gamma/docs/Math-Gamma.html#t:Gamma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncomplete gamma functions.\n\u003c/p\u003e",
          "module": "Math.Gamma",
          "name": "IncGamma",
          "package": "gamma",
          "source": "src/Math-Gamma.html#IncGamma",
          "type": "class"
        },
        "index": {
          "description": "Incomplete gamma functions",
          "hierarchy": "Math Gamma",
          "module": "Math.Gamma",
          "name": "IncGamma",
          "package": "gamma",
          "partial": "Inc Gamma",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/gamma/docs/Math-Gamma.html#t:IncGamma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Gamma",
          "name": "factorial",
          "package": "gamma",
          "signature": "b -\u003e a",
          "source": "src/Math-Factorial.html#factorial",
          "type": "method"
        },
        "index": {
          "hierarchy": "Math Gamma",
          "module": "Math.Gamma",
          "name": "factorial",
          "normalized": "a-\u003eb",
          "package": "gamma",
          "signature": "b-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/gamma/docs/Math-Gamma.html#v:factorial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe gamma function:  gamma z == integral from 0 to infinity of\n \u003ccode\u003et -\u003e t**(z-1) * exp (negate t)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Math.Gamma",
          "name": "gamma",
          "package": "gamma",
          "signature": "a -\u003e a",
          "source": "src/Math-Gamma.html#gamma",
          "type": "method"
        },
        "index": {
          "description": "The gamma function gamma integral from to infinity of z-1 exp negate",
          "hierarchy": "Math Gamma",
          "module": "Math.Gamma",
          "name": "gamma",
          "normalized": "a-\u003ea",
          "package": "gamma",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/gamma/docs/Math-Gamma.html#v:gamma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNatural log of the factorial function\n\u003c/p\u003e",
          "module": "Math.Gamma",
          "name": "lnFactorial",
          "package": "gamma",
          "signature": "b -\u003e a",
          "source": "src/Math-Gamma.html#lnFactorial",
          "type": "method"
        },
        "index": {
          "description": "Natural log of the factorial function",
          "hierarchy": "Math Gamma",
          "module": "Math.Gamma",
          "name": "lnFactorial",
          "normalized": "a-\u003eb",
          "package": "gamma",
          "partial": "Factorial",
          "signature": "b-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/gamma/docs/Math-Gamma.html#v:lnFactorial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNatural log of the gamma function\n\u003c/p\u003e",
          "module": "Math.Gamma",
          "name": "lnGamma",
          "package": "gamma",
          "signature": "a -\u003e a",
          "source": "src/Math-Gamma.html#lnGamma",
          "type": "method"
        },
        "index": {
          "description": "Natural log of the gamma function",
          "hierarchy": "Math Gamma",
          "module": "Math.Gamma",
          "name": "lnGamma",
          "normalized": "a-\u003ea",
          "package": "gamma",
          "partial": "Gamma",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/gamma/docs/Math-Gamma.html#v:lnGamma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNatural log of lower gamma function\n\u003c/p\u003e",
          "module": "Math.Gamma",
          "name": "lnLowerGamma",
          "package": "gamma",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Math-Gamma.html#lnLowerGamma",
          "type": "method"
        },
        "index": {
          "description": "Natural log of lower gamma function",
          "hierarchy": "Math Gamma",
          "module": "Math.Gamma",
          "name": "lnLowerGamma",
          "normalized": "a-\u003ea-\u003ea",
          "package": "gamma",
          "partial": "Lower Gamma",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/gamma/docs/Math-Gamma.html#v:lnLowerGamma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNatural log of upper gamma function\n\u003c/p\u003e",
          "module": "Math.Gamma",
          "name": "lnUpperGamma",
          "package": "gamma",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Math-Gamma.html#lnUpperGamma",
          "type": "method"
        },
        "index": {
          "description": "Natural log of upper gamma function",
          "hierarchy": "Math Gamma",
          "module": "Math.Gamma",
          "name": "lnUpperGamma",
          "normalized": "a-\u003ea-\u003ea",
          "package": "gamma",
          "partial": "Upper Gamma",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/gamma/docs/Math-Gamma.html#v:lnUpperGamma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLower gamma function: lowerGamma s x == integral from 0 to x of \n \u003ccode\u003et -\u003e t**(s-1) * exp (negate t)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Math.Gamma",
          "name": "lowerGamma",
          "package": "gamma",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Math-Gamma.html#lowerGamma",
          "type": "method"
        },
        "index": {
          "description": "Lower gamma function lowerGamma integral from to of s-1 exp negate",
          "hierarchy": "Math Gamma",
          "module": "Math.Gamma",
          "name": "lowerGamma",
          "normalized": "a-\u003ea-\u003ea",
          "package": "gamma",
          "partial": "Gamma",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/gamma/docs/Math-Gamma.html#v:lowerGamma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRegularized lower incomplete gamma function: lowerGamma s x / gamma s\n\u003c/p\u003e",
          "module": "Math.Gamma",
          "name": "p",
          "package": "gamma",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Math-Gamma.html#p",
          "type": "method"
        },
        "index": {
          "description": "Regularized lower incomplete gamma function lowerGamma gamma",
          "hierarchy": "Math Gamma",
          "module": "Math.Gamma",
          "name": "p",
          "normalized": "a-\u003ea-\u003ea",
          "package": "gamma",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/gamma/docs/Math-Gamma.html#v:p"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRegularized upper incomplete gamma function: upperGamma s x / gamma s\n\u003c/p\u003e",
          "module": "Math.Gamma",
          "name": "q",
          "package": "gamma",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Math-Gamma.html#q",
          "type": "method"
        },
        "index": {
          "description": "Regularized upper incomplete gamma function upperGamma gamma",
          "hierarchy": "Math Gamma",
          "module": "Math.Gamma",
          "name": "q",
          "normalized": "a-\u003ea-\u003ea",
          "package": "gamma",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/gamma/docs/Math-Gamma.html#v:q"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpper gamma function: lowerGamma s x == integral from x to infinity of \n \u003ccode\u003et -\u003e t**(s-1) * exp (negate t)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Math.Gamma",
          "name": "upperGamma",
          "package": "gamma",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Math-Gamma.html#upperGamma",
          "type": "method"
        },
        "index": {
          "description": "Upper gamma function lowerGamma integral from to infinity of s-1 exp negate",
          "hierarchy": "Math Gamma",
          "module": "Math.Gamma",
          "name": "upperGamma",
          "normalized": "a-\u003ea-\u003ea",
          "package": "gamma",
          "partial": "Gamma",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/gamma/docs/Math-Gamma.html#v:upperGamma"
      }
    }
  ]
]