[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Bernstein.html#",
      "description": {
        "fct-module": "Math.Polynomial.Bernstein",
        "fct-package": "polynomial",
        "fct-signature": "module",
        "fct-source": "src/Math-Polynomial-Bernstein.html",
        "fct-type": "module",
        "title": "Bernstein"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Polynomial Bernstein",
        "module": "Math.Polynomial.Bernstein",
        "name": "Bernstein",
        "normalized": "",
        "package": "polynomial",
        "partial": "Bernstein",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Bernstein.html#v:bernstein",
      "description": {
        "fct-descr": "\u003cp\u003eThe Bernstein basis polynomials.  The \u003ccode\u003en\u003c/code\u003eth inner list is a basis for \n the polynomials of order \u003ccode\u003en\u003c/code\u003e or lower.  The \u003ccode\u003en\u003c/code\u003eth basis consists of \u003ccode\u003en\u003c/code\u003e\n polynomials of order \u003ccode\u003en\u003c/code\u003e which sum to \u003ccode\u003e1\u003c/code\u003e, and have roots of varying \n multiplicities at \u003ccode\u003e0\u003c/code\u003e and \u003ccode\u003e1\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial.Bernstein",
        "fct-package": "polynomial",
        "fct-signature": "[[Poly Integer]]",
        "fct-source": "src/Math-Polynomial-Bernstein.html#bernstein",
        "fct-type": "function",
        "title": "bernstein"
      },
      "index": {
        "description": "The Bernstein basis polynomials The th inner list is basis for the polynomials of order or lower The th basis consists of polynomials of order which sum to and have roots of varying multiplicities at and",
        "hierarchy": "Math Polynomial Bernstein",
        "module": "Math.Polynomial.Bernstein",
        "name": "bernstein",
        "normalized": "[[Poly Integer]]",
        "package": "polynomial",
        "partial": "",
        "signature": "[[Poly Integer]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Bernstein.html#v:bernsteinFit",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ebernsteinFit n f\u003c/code\u003e: Approximate a function \u003ccode\u003ef\u003c/code\u003e as a linear combination of\n Bernstein polynomials of order \u003ccode\u003en\u003c/code\u003e.  This approximation converges slowly\n but uniformly to \u003ccode\u003ef\u003c/code\u003e on the interval [0,1].\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial.Bernstein",
        "fct-package": "polynomial",
        "fct-signature": "a -\u003e (b -\u003e b) -\u003e [b]",
        "fct-source": "src/Math-Polynomial-Bernstein.html#bernsteinFit",
        "fct-type": "function",
        "title": "bernsteinFit"
      },
      "index": {
        "description": "bernsteinFit Approximate function as linear combination of Bernstein polynomials of order This approximation converges slowly but uniformly to on the interval",
        "hierarchy": "Math Polynomial Bernstein",
        "module": "Math.Polynomial.Bernstein",
        "name": "bernsteinFit",
        "normalized": "a-\u003e(b-\u003eb)-\u003e[b]",
        "package": "polynomial",
        "partial": "Fit",
        "signature": "a-\u003e(b-\u003eb)-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Bernstein.html#v:deCasteljau",
      "description": {
        "fct-descr": "\u003cp\u003ede Casteljau's algorithm, returning the whole tableau.  Used both for\n evaluating and splitting polynomials in Bernstein form.\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial.Bernstein",
        "fct-package": "polynomial",
        "fct-signature": "[a] -\u003e a -\u003e [[a]]",
        "fct-source": "src/Math-Polynomial-Bernstein.html#deCasteljau",
        "fct-type": "function",
        "title": "deCasteljau"
      },
      "index": {
        "description": "de Casteljau algorithm returning the whole tableau Used both for evaluating and splitting polynomials in Bernstein form",
        "hierarchy": "Math Polynomial Bernstein",
        "module": "Math.Polynomial.Bernstein",
        "name": "deCasteljau",
        "normalized": "[a]-\u003ea-\u003e[[a]]",
        "package": "polynomial",
        "partial": "Casteljau",
        "signature": "[a]-\u003ea-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Bernstein.html#v:evalBernstein",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eevalBernstein n v x\u003c/code\u003e evaluates the \u003ccode\u003ev\u003c/code\u003e'th Bernstein polynomial of order \u003ccode\u003en\u003c/code\u003e\n at the point \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial.Bernstein",
        "fct-package": "polynomial",
        "fct-signature": "a -\u003e a -\u003e b -\u003e b",
        "fct-source": "src/Math-Polynomial-Bernstein.html#evalBernstein",
        "fct-type": "function",
        "title": "evalBernstein"
      },
      "index": {
        "description": "evalBernstein evaluates the th Bernstein polynomial of order at the point",
        "hierarchy": "Math Polynomial Bernstein",
        "module": "Math.Polynomial.Bernstein",
        "name": "evalBernstein",
        "normalized": "a-\u003ea-\u003eb-\u003eb",
        "package": "polynomial",
        "partial": "Bernstein",
        "signature": "a-\u003ea-\u003eb-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Bernstein.html#v:evalBernsteinSeries",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a polynomial given as a list of \u003ccode\u003en\u003c/code\u003e coefficients for the \u003ccode\u003en\u003c/code\u003eth\n Bernstein basis.  Roughly:\n\u003c/p\u003e\u003cpre\u003e evalBernsteinSeries cs = sum (zipWith scalePoly cs (bernstein !! (length cs - 1)))\n\u003c/pre\u003e",
        "fct-module": "Math.Polynomial.Bernstein",
        "fct-package": "polynomial",
        "fct-signature": "[a] -\u003e a -\u003e a",
        "fct-source": "src/Math-Polynomial-Bernstein.html#evalBernsteinSeries",
        "fct-type": "function",
        "title": "evalBernsteinSeries"
      },
      "index": {
        "description": "Evaluate polynomial given as list of coefficients for the th Bernstein basis Roughly evalBernsteinSeries cs sum zipWith scalePoly cs bernstein length cs",
        "hierarchy": "Math Polynomial Bernstein",
        "module": "Math.Polynomial.Bernstein",
        "name": "evalBernsteinSeries",
        "normalized": "[a]-\u003ea-\u003ea",
        "package": "polynomial",
        "partial": "Bernstein Series",
        "signature": "[a]-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Bernstein.html#v:splitBernsteinSeries",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a polynomial in Bernstein form (that is, a list of coefficients\n for a basis set from \u003ccode\u003e\u003ca\u003ebernstein\u003c/a\u003e\u003c/code\u003e, such as is returned by \u003ccode\u003e\u003ca\u003ebernsteinFit\u003c/a\u003e\u003c/code\u003e)\n and a parameter value \u003ccode\u003ex\u003c/code\u003e, split the polynomial into two halves, mapping\n \u003ccode\u003e[0,x]\u003c/code\u003e and \u003ccode\u003e[x,1]\u003c/code\u003e respectively onto \u003ccode\u003e[0,1]\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eA typical use for this operation would be to split a Bezier curve \n (inserting a new knot at \u003ccode\u003ex\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial.Bernstein",
        "fct-package": "polynomial",
        "fct-signature": "[a] -\u003e a -\u003e ([a], [a])",
        "fct-source": "src/Math-Polynomial-Bernstein.html#splitBernsteinSeries",
        "fct-type": "function",
        "title": "splitBernsteinSeries"
      },
      "index": {
        "description": "Given polynomial in Bernstein form that is list of coefficients for basis set from bernstein such as is returned by bernsteinFit and parameter value split the polynomial into two halves mapping and respectively onto typical use for this operation would be to split Bezier curve inserting new knot at",
        "hierarchy": "Math Polynomial Bernstein",
        "module": "Math.Polynomial.Bernstein",
        "name": "splitBernsteinSeries",
        "normalized": "[a]-\u003ea-\u003e([a],[a])",
        "package": "polynomial",
        "partial": "Bernstein Series",
        "signature": "[a]-\u003ea-\u003e([a],[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Chebyshev.html#",
      "description": {
        "fct-module": "Math.Polynomial.Chebyshev",
        "fct-package": "polynomial",
        "fct-signature": "module",
        "fct-source": "src/Math-Polynomial-Chebyshev.html",
        "fct-type": "module",
        "title": "Chebyshev"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Polynomial Chebyshev",
        "module": "Math.Polynomial.Chebyshev",
        "name": "Chebyshev",
        "normalized": "",
        "package": "polynomial",
        "partial": "Chebyshev",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Chebyshev.html#v:chebyshevFit",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003echebyshevFit n f\u003c/code\u003e returns a list of N coefficients \u003ccode\u003ecs\u003c/code\u003e such that \n \u003ccode\u003ef x\u003c/code\u003e ~= \u003ccode\u003esum (zipWith (*) cs (evalTs x))\u003c/code\u003e on the interval -1 \u003c x \u003c 1.\n\u003c/p\u003e\u003cp\u003eThe N roots of the N'th Chebyshev polynomial are the fitting points at \n which the function will be evaluated and at which the approximation will be\n exact.  These points always lie within the interval -1 \u003c x \u003c 1.  Outside\n this interval, the approximation will diverge quickly.\n\u003c/p\u003e\u003cp\u003eThis function deviates from most chebyshev-fit implementations in that it\n returns the first coefficient pre-scaled so that the series evaluation \n operation is a simple inner product, since in most other algorithms\n operating on chebyshev series, that factor is almost always a nuissance.\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial.Chebyshev",
        "fct-package": "polynomial",
        "fct-signature": "Int -\u003e (a -\u003e a) -\u003e [a]",
        "fct-source": "src/Math-Polynomial-Chebyshev.html#chebyshevFit",
        "fct-type": "function",
        "title": "chebyshevFit"
      },
      "index": {
        "description": "chebyshevFit returns list of coefficients cs such that sum zipWith cs evalTs on the interval The roots of the th Chebyshev polynomial are the fitting points at which the function will be evaluated and at which the approximation will be exact These points always lie within the interval Outside this interval the approximation will diverge quickly This function deviates from most chebyshev-fit implementations in that it returns the first coefficient pre-scaled so that the series evaluation operation is simple inner product since in most other algorithms operating on chebyshev series that factor is almost always nuissance",
        "hierarchy": "Math Polynomial Chebyshev",
        "module": "Math.Polynomial.Chebyshev",
        "name": "chebyshevFit",
        "normalized": "Int-\u003e(a-\u003ea)-\u003e[a]",
        "package": "polynomial",
        "partial": "Fit",
        "signature": "Int-\u003e(a-\u003ea)-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Chebyshev.html#v:evalChebyshevSeries",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a Chebyshev series expansion with a finite number of terms.\n\u003c/p\u003e\u003cp\u003eNote that this function expects the first coefficient to be pre-scaled\n by 1/2, which is what is produced by \u003ccode\u003e\u003ca\u003echebyshevFit\u003c/a\u003e\u003c/code\u003e.  Thus, this computes\n a simple inner product of the given list with a matching-length sequence of\n chebyshev polynomials.\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial.Chebyshev",
        "fct-package": "polynomial",
        "fct-signature": "[a] -\u003e a -\u003e a",
        "fct-source": "src/Math-Polynomial-Chebyshev.html#evalChebyshevSeries",
        "fct-type": "function",
        "title": "evalChebyshevSeries"
      },
      "index": {
        "description": "Evaluate Chebyshev series expansion with finite number of terms Note that this function expects the first coefficient to be pre-scaled by which is what is produced by chebyshevFit Thus this computes simple inner product of the given list with matching-length sequence of chebyshev polynomials",
        "hierarchy": "Math Polynomial Chebyshev",
        "module": "Math.Polynomial.Chebyshev",
        "name": "evalChebyshevSeries",
        "normalized": "[a]-\u003ea-\u003ea",
        "package": "polynomial",
        "partial": "Chebyshev Series",
        "signature": "[a]-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Chebyshev.html#v:evalT",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate the n'th Chebyshev polynomial of the first kind at a point X.  \n Both more efficient and more numerically stable than computing the \n coefficients and evaluating the polynomial.\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial.Chebyshev",
        "fct-package": "polynomial",
        "fct-signature": "Int -\u003e a -\u003e a",
        "fct-source": "src/Math-Polynomial-Chebyshev.html#evalT",
        "fct-type": "function",
        "title": "evalT"
      },
      "index": {
        "description": "Evaluate the th Chebyshev polynomial of the first kind at point Both more efficient and more numerically stable than computing the coefficients and evaluating the polynomial",
        "hierarchy": "Math Polynomial Chebyshev",
        "module": "Math.Polynomial.Chebyshev",
        "name": "evalT",
        "normalized": "Int-\u003ea-\u003ea",
        "package": "polynomial",
        "partial": "",
        "signature": "Int-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Chebyshev.html#v:evalTU",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate the n'th Chebyshev polynomials of both kinds at a point X.\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial.Chebyshev",
        "fct-package": "polynomial",
        "fct-signature": "Int -\u003e a -\u003e (a, a)",
        "fct-source": "src/Math-Polynomial-Chebyshev.html#evalTU",
        "fct-type": "function",
        "title": "evalTU"
      },
      "index": {
        "description": "Evaluate the th Chebyshev polynomials of both kinds at point",
        "hierarchy": "Math Polynomial Chebyshev",
        "module": "Math.Polynomial.Chebyshev",
        "name": "evalTU",
        "normalized": "Int-\u003ea-\u003e(a,a)",
        "package": "polynomial",
        "partial": "TU",
        "signature": "Int-\u003ea-\u003e(a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Chebyshev.html#v:evalTs",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate all the Chebyshev polynomials of the first kind at a point X.\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial.Chebyshev",
        "fct-package": "polynomial",
        "fct-signature": "a -\u003e [a]",
        "fct-source": "src/Math-Polynomial-Chebyshev.html#evalTs",
        "fct-type": "function",
        "title": "evalTs"
      },
      "index": {
        "description": "Evaluate all the Chebyshev polynomials of the first kind at point",
        "hierarchy": "Math Polynomial Chebyshev",
        "module": "Math.Polynomial.Chebyshev",
        "name": "evalTs",
        "normalized": "a-\u003e[a]",
        "package": "polynomial",
        "partial": "Ts",
        "signature": "a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Chebyshev.html#v:evalTsUs",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate all the Chebyshev polynomials of both kinds at a point X.\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial.Chebyshev",
        "fct-package": "polynomial",
        "fct-signature": "a -\u003e ([a], [a])",
        "fct-source": "src/Math-Polynomial-Chebyshev.html#evalTsUs",
        "fct-type": "function",
        "title": "evalTsUs"
      },
      "index": {
        "description": "Evaluate all the Chebyshev polynomials of both kinds at point",
        "hierarchy": "Math Polynomial Chebyshev",
        "module": "Math.Polynomial.Chebyshev",
        "name": "evalTsUs",
        "normalized": "a-\u003e([a],[a])",
        "package": "polynomial",
        "partial": "Ts Us",
        "signature": "a-\u003e([a],[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Chebyshev.html#v:evalU",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate the n'th Chebyshev polynomial of the second kind at a point X.  \n Both more efficient and more numerically stable than computing the \n coefficients and evaluating the polynomial.\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial.Chebyshev",
        "fct-package": "polynomial",
        "fct-signature": "Int -\u003e a -\u003e a",
        "fct-source": "src/Math-Polynomial-Chebyshev.html#evalU",
        "fct-type": "function",
        "title": "evalU"
      },
      "index": {
        "description": "Evaluate the th Chebyshev polynomial of the second kind at point Both more efficient and more numerically stable than computing the coefficients and evaluating the polynomial",
        "hierarchy": "Math Polynomial Chebyshev",
        "module": "Math.Polynomial.Chebyshev",
        "name": "evalU",
        "normalized": "Int-\u003ea-\u003ea",
        "package": "polynomial",
        "partial": "",
        "signature": "Int-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Chebyshev.html#v:evalUs",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate all the Chebyshev polynomials of the second kind at a point X.\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial.Chebyshev",
        "fct-package": "polynomial",
        "fct-signature": "a -\u003e [a]",
        "fct-source": "src/Math-Polynomial-Chebyshev.html#evalUs",
        "fct-type": "function",
        "title": "evalUs"
      },
      "index": {
        "description": "Evaluate all the Chebyshev polynomials of the second kind at point",
        "hierarchy": "Math Polynomial Chebyshev",
        "module": "Math.Polynomial.Chebyshev",
        "name": "evalUs",
        "normalized": "a-\u003e[a]",
        "package": "polynomial",
        "partial": "Us",
        "signature": "a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Chebyshev.html#v:t",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the coefficients of the n'th Chebyshev polynomial of the first kind.\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial.Chebyshev",
        "fct-package": "polynomial",
        "fct-signature": "Int -\u003e Poly a",
        "fct-source": "src/Math-Polynomial-Chebyshev.html#t",
        "fct-type": "function",
        "title": "t"
      },
      "index": {
        "description": "Compute the coefficients of the th Chebyshev polynomial of the first kind",
        "hierarchy": "Math Polynomial Chebyshev",
        "module": "Math.Polynomial.Chebyshev",
        "name": "t",
        "normalized": "Int-\u003ePoly a",
        "package": "polynomial",
        "partial": "",
        "signature": "Int-\u003ePoly a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Chebyshev.html#v:tExtrema",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the extreme points of the n'th Chebyshev polynomial of the first kind.\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial.Chebyshev",
        "fct-package": "polynomial",
        "fct-signature": "Int -\u003e [a]",
        "fct-source": "src/Math-Polynomial-Chebyshev.html#tExtrema",
        "fct-type": "function",
        "title": "tExtrema"
      },
      "index": {
        "description": "Compute the extreme points of the th Chebyshev polynomial of the first kind",
        "hierarchy": "Math Polynomial Chebyshev",
        "module": "Math.Polynomial.Chebyshev",
        "name": "tExtrema",
        "normalized": "Int-\u003e[a]",
        "package": "polynomial",
        "partial": "Extrema",
        "signature": "Int-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Chebyshev.html#v:tRoots",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the roots of the n'th Chebyshev polynomial of the first kind.\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial.Chebyshev",
        "fct-package": "polynomial",
        "fct-signature": "Int -\u003e [a]",
        "fct-source": "src/Math-Polynomial-Chebyshev.html#tRoots",
        "fct-type": "function",
        "title": "tRoots"
      },
      "index": {
        "description": "Compute the roots of the th Chebyshev polynomial of the first kind",
        "hierarchy": "Math Polynomial Chebyshev",
        "module": "Math.Polynomial.Chebyshev",
        "name": "tRoots",
        "normalized": "Int-\u003e[a]",
        "package": "polynomial",
        "partial": "Roots",
        "signature": "Int-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Chebyshev.html#v:ts",
      "description": {
        "fct-descr": "\u003cp\u003eThe Chebyshev polynomials of the first kind with \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e coefficients.\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial.Chebyshev",
        "fct-package": "polynomial",
        "fct-signature": "[Poly Integer]",
        "fct-source": "src/Math-Polynomial-Chebyshev.html#ts",
        "fct-type": "function",
        "title": "ts"
      },
      "index": {
        "description": "The Chebyshev polynomials of the first kind with Integer coefficients",
        "hierarchy": "Math Polynomial Chebyshev",
        "module": "Math.Polynomial.Chebyshev",
        "name": "ts",
        "normalized": "[Poly Integer]",
        "package": "polynomial",
        "partial": "",
        "signature": "[Poly Integer]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Chebyshev.html#v:u",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the coefficients of the n'th Chebyshev polynomial of the second kind.\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial.Chebyshev",
        "fct-package": "polynomial",
        "fct-signature": "Int -\u003e Poly a",
        "fct-source": "src/Math-Polynomial-Chebyshev.html#u",
        "fct-type": "function",
        "title": "u"
      },
      "index": {
        "description": "Compute the coefficients of the th Chebyshev polynomial of the second kind",
        "hierarchy": "Math Polynomial Chebyshev",
        "module": "Math.Polynomial.Chebyshev",
        "name": "u",
        "normalized": "Int-\u003ePoly a",
        "package": "polynomial",
        "partial": "",
        "signature": "Int-\u003ePoly a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Chebyshev.html#v:us",
      "description": {
        "fct-module": "Math.Polynomial.Chebyshev",
        "fct-package": "polynomial",
        "fct-signature": "[Poly Integer]",
        "fct-source": "src/Math-Polynomial-Chebyshev.html#us",
        "fct-type": "function",
        "title": "us"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Polynomial Chebyshev",
        "module": "Math.Polynomial.Chebyshev",
        "name": "us",
        "normalized": "[Poly Integer]",
        "package": "polynomial",
        "partial": "",
        "signature": "[Poly Integer]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Hermite.html#",
      "description": {
        "fct-module": "Math.Polynomial.Hermite",
        "fct-package": "polynomial",
        "fct-signature": "module",
        "fct-source": "src/Math-Polynomial-Hermite.html",
        "fct-type": "module",
        "title": "Hermite"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Polynomial Hermite",
        "module": "Math.Polynomial.Hermite",
        "name": "Hermite",
        "normalized": "",
        "package": "polynomial",
        "partial": "Hermite",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Hermite.html#v:evalPhysHermite",
      "description": {
        "fct-module": "Math.Polynomial.Hermite",
        "fct-package": "polynomial",
        "fct-signature": "a -\u003e b -\u003e b",
        "fct-source": "src/Math-Polynomial-Hermite.html#evalPhysHermite",
        "fct-type": "function",
        "title": "evalPhysHermite"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Polynomial Hermite",
        "module": "Math.Polynomial.Hermite",
        "name": "evalPhysHermite",
        "normalized": "a-\u003eb-\u003eb",
        "package": "polynomial",
        "partial": "Phys Hermite",
        "signature": "a-\u003eb-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Hermite.html#v:evalPhysHermiteDeriv",
      "description": {
        "fct-module": "Math.Polynomial.Hermite",
        "fct-package": "polynomial",
        "fct-signature": "a -\u003e b -\u003e (b, b)",
        "fct-source": "src/Math-Polynomial-Hermite.html#evalPhysHermiteDeriv",
        "fct-type": "function",
        "title": "evalPhysHermiteDeriv"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Polynomial Hermite",
        "module": "Math.Polynomial.Hermite",
        "name": "evalPhysHermiteDeriv",
        "normalized": "a-\u003eb-\u003e(b,b)",
        "package": "polynomial",
        "partial": "Phys Hermite Deriv",
        "signature": "a-\u003eb-\u003e(b,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Hermite.html#v:evalProbHermite",
      "description": {
        "fct-module": "Math.Polynomial.Hermite",
        "fct-package": "polynomial",
        "fct-signature": "a -\u003e b -\u003e b",
        "fct-source": "src/Math-Polynomial-Hermite.html#evalProbHermite",
        "fct-type": "function",
        "title": "evalProbHermite"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Polynomial Hermite",
        "module": "Math.Polynomial.Hermite",
        "name": "evalProbHermite",
        "normalized": "a-\u003eb-\u003eb",
        "package": "polynomial",
        "partial": "Prob Hermite",
        "signature": "a-\u003eb-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Hermite.html#v:evalProbHermiteDeriv",
      "description": {
        "fct-module": "Math.Polynomial.Hermite",
        "fct-package": "polynomial",
        "fct-signature": "a -\u003e b -\u003e (b, b)",
        "fct-source": "src/Math-Polynomial-Hermite.html#evalProbHermiteDeriv",
        "fct-type": "function",
        "title": "evalProbHermiteDeriv"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Polynomial Hermite",
        "module": "Math.Polynomial.Hermite",
        "name": "evalProbHermiteDeriv",
        "normalized": "a-\u003eb-\u003e(b,b)",
        "package": "polynomial",
        "partial": "Prob Hermite Deriv",
        "signature": "a-\u003eb-\u003e(b,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Hermite.html#v:physHermite",
      "description": {
        "fct-module": "Math.Polynomial.Hermite",
        "fct-package": "polynomial",
        "fct-signature": "[Poly Integer]",
        "fct-source": "src/Math-Polynomial-Hermite.html#physHermite",
        "fct-type": "function",
        "title": "physHermite"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Polynomial Hermite",
        "module": "Math.Polynomial.Hermite",
        "name": "physHermite",
        "normalized": "[Poly Integer]",
        "package": "polynomial",
        "partial": "Hermite",
        "signature": "[Poly Integer]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Hermite.html#v:probHermite",
      "description": {
        "fct-module": "Math.Polynomial.Hermite",
        "fct-package": "polynomial",
        "fct-signature": "[Poly Integer]",
        "fct-source": "src/Math-Polynomial-Hermite.html#probHermite",
        "fct-type": "function",
        "title": "probHermite"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Polynomial Hermite",
        "module": "Math.Polynomial.Hermite",
        "name": "probHermite",
        "normalized": "[Poly Integer]",
        "package": "polynomial",
        "partial": "Hermite",
        "signature": "[Poly Integer]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Interpolation.html#",
      "description": {
        "fct-module": "Math.Polynomial.Interpolation",
        "fct-package": "polynomial",
        "fct-signature": "module",
        "fct-source": "src/Math-Polynomial-Interpolation.html",
        "fct-type": "module",
        "title": "Interpolation"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Polynomial Interpolation",
        "module": "Math.Polynomial.Interpolation",
        "name": "Interpolation",
        "normalized": "",
        "package": "polynomial",
        "partial": "Interpolation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Interpolation.html#v:iterativePolyFit",
      "description": {
        "fct-descr": "\u003cp\u003eFit a polynomial to a set of points by iteratively evaluating the \n interpolated polynomial (using \u003ccode\u003e\u003ca\u003epolyInterp\u003c/a\u003e\u003c/code\u003e) at 0 to establish the\n constant coefficient and reducing the polynomial by subtracting that\n coefficient from all y's and dividing by their corresponding x's.\n\u003c/p\u003e\u003cp\u003eSlower than \u003ccode\u003e\u003ca\u003elagrangePolyFit\u003c/a\u003e\u003c/code\u003e but stable under different sets of \n conditions.\n\u003c/p\u003e\u003cp\u003eNote that computing the coefficients of a fitting polynomial is an \n inherently ill-conditioned problem.  In most cases it is both faster and \n more accurate to use \u003ccode\u003e\u003ca\u003epolyInterp\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003enevilleDiffs\u003c/a\u003e\u003c/code\u003e instead of evaluating\n a fitted polynomial.\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial.Interpolation",
        "fct-package": "polynomial",
        "fct-signature": "[(a, a)] -\u003e Poly a",
        "fct-source": "src/Math-Polynomial-Interpolation.html#iterativePolyFit",
        "fct-type": "function",
        "title": "iterativePolyFit"
      },
      "index": {
        "description": "Fit polynomial to set of points by iteratively evaluating the interpolated polynomial using polyInterp at to establish the constant coefficient and reducing the polynomial by subtracting that coefficient from all and dividing by their corresponding Slower than lagrangePolyFit but stable under different sets of conditions Note that computing the coefficients of fitting polynomial is an inherently ill-conditioned problem In most cases it is both faster and more accurate to use polyInterp or nevilleDiffs instead of evaluating fitted polynomial",
        "hierarchy": "Math Polynomial Interpolation",
        "module": "Math.Polynomial.Interpolation",
        "name": "iterativePolyFit",
        "normalized": "[(a,a)]-\u003ePoly a",
        "package": "polynomial",
        "partial": "Poly Fit",
        "signature": "[(a,a)]-\u003ePoly a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Interpolation.html#v:lagrangePolyFit",
      "description": {
        "fct-descr": "\u003cp\u003eFit a polynomial to a set of points using barycentric Lagrange polynomials.\n\u003c/p\u003e\u003cp\u003eNote that computing the coefficients of a fitting polynomial is an \n inherently ill-conditioned problem.  In most cases it is both faster and \n more accurate to use \u003ccode\u003e\u003ca\u003epolyInterp\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003enevilleDiffs\u003c/a\u003e\u003c/code\u003e instead of evaluating\n a fitted polynomial.\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial.Interpolation",
        "fct-package": "polynomial",
        "fct-signature": "[(a, a)] -\u003e Poly a",
        "fct-source": "src/Math-Polynomial-Interpolation.html#lagrangePolyFit",
        "fct-type": "function",
        "title": "lagrangePolyFit"
      },
      "index": {
        "description": "Fit polynomial to set of points using barycentric Lagrange polynomials Note that computing the coefficients of fitting polynomial is an inherently ill-conditioned problem In most cases it is both faster and more accurate to use polyInterp or nevilleDiffs instead of evaluating fitted polynomial",
        "hierarchy": "Math Polynomial Interpolation",
        "module": "Math.Polynomial.Interpolation",
        "name": "lagrangePolyFit",
        "normalized": "[(a,a)]-\u003ePoly a",
        "package": "polynomial",
        "partial": "Poly Fit",
        "signature": "[(a,a)]-\u003ePoly a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Interpolation.html#v:neville",
      "description": {
        "fct-descr": "\u003cp\u003eComputes the tableau generated by Neville's algorithm.  Each successive\n row of the table is a list of interpolants one order higher than the previous,\n using a range of input points starting at the same position in the input\n list as the interpolant's position in the output list.\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial.Interpolation",
        "fct-package": "polynomial",
        "fct-signature": "[(a, a)] -\u003e a -\u003e [[a]]",
        "fct-source": "src/Math-Polynomial-Interpolation.html#neville",
        "fct-type": "function",
        "title": "neville"
      },
      "index": {
        "description": "Computes the tableau generated by Neville algorithm Each successive row of the table is list of interpolants one order higher than the previous using range of input points starting at the same position in the input list as the interpolant position in the output list",
        "hierarchy": "Math Polynomial Interpolation",
        "module": "Math.Polynomial.Interpolation",
        "name": "neville",
        "normalized": "[(a,a)]-\u003ea-\u003e[[a]]",
        "package": "polynomial",
        "partial": "",
        "signature": "[(a,a)]-\u003ea-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Interpolation.html#v:nevilleDiffs",
      "description": {
        "fct-descr": "\u003cp\u003eComputes the tableau generated by a modified form of Neville's algorithm\n described in Numerical Recipes, Ch. 3, Sec. 2, which records the differences\n between interpolants at each level.  Each pair (c,d) is the amount to add\n to the previous level's interpolant at either the same or the subsequent\n position (respectively) in order to obtain the new level's interpolant.\n Mathematically, either sum yields the same value, but due to numerical\n errors they may differ slightly, and some \"paths\" through the table\n may yield more accurate final results than others.\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial.Interpolation",
        "fct-package": "polynomial",
        "fct-signature": "[(a, a)] -\u003e a -\u003e [[(a, a)]]",
        "fct-source": "src/Math-Polynomial-Interpolation.html#nevilleDiffs",
        "fct-type": "function",
        "title": "nevilleDiffs"
      },
      "index": {
        "description": "Computes the tableau generated by modified form of Neville algorithm described in Numerical Recipes Ch Sec which records the differences between interpolants at each level Each pair is the amount to add to the previous level interpolant at either the same or the subsequent position respectively in order to obtain the new level interpolant Mathematically either sum yields the same value but due to numerical errors they may differ slightly and some paths through the table may yield more accurate final results than others",
        "hierarchy": "Math Polynomial Interpolation",
        "module": "Math.Polynomial.Interpolation",
        "name": "nevilleDiffs",
        "normalized": "[(a,a)]-\u003ea-\u003e[[(a,a)]]",
        "package": "polynomial",
        "partial": "Diffs",
        "signature": "[(a,a)]-\u003ea-\u003e[[(a,a)]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Interpolation.html#v:polyInterp",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a polynomial passing through the specified set of points.  The\n order of the interpolating polynomial will (at most) be one less than \n the number of points given.\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial.Interpolation",
        "fct-package": "polynomial",
        "fct-signature": "[(a, a)] -\u003e a -\u003e a",
        "fct-source": "src/Math-Polynomial-Interpolation.html#polyInterp",
        "fct-type": "function",
        "title": "polyInterp"
      },
      "index": {
        "description": "Evaluate polynomial passing through the specified set of points The order of the interpolating polynomial will at most be one less than the number of points given",
        "hierarchy": "Math Polynomial Interpolation",
        "module": "Math.Polynomial.Interpolation",
        "name": "polyInterp",
        "normalized": "[(a,a)]-\u003ea-\u003ea",
        "package": "polynomial",
        "partial": "Interp",
        "signature": "[(a,a)]-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Lagrange.html#",
      "description": {
        "fct-module": "Math.Polynomial.Lagrange",
        "fct-package": "polynomial",
        "fct-signature": "module",
        "fct-source": "src/Math-Polynomial-Lagrange.html",
        "fct-type": "module",
        "title": "Lagrange"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Polynomial Lagrange",
        "module": "Math.Polynomial.Lagrange",
        "name": "Lagrange",
        "normalized": "",
        "package": "polynomial",
        "partial": "Lagrange",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Lagrange.html#v:lagrange",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct the Lagrange \u003ca\u003emaster polynomial\u003c/a\u003e for the Lagrange barycentric form:\n That is, the monic polynomial with a root at each point in the input list.\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial.Lagrange",
        "fct-package": "polynomial",
        "fct-signature": "[a] -\u003e Poly a",
        "fct-source": "src/Math-Polynomial-Lagrange.html#lagrange",
        "fct-type": "function",
        "title": "lagrange"
      },
      "index": {
        "description": "Construct the Lagrange master polynomial for the Lagrange barycentric form That is the monic polynomial with root at each point in the input list",
        "hierarchy": "Math Polynomial Lagrange",
        "module": "Math.Polynomial.Lagrange",
        "name": "lagrange",
        "normalized": "[a]-\u003ePoly a",
        "package": "polynomial",
        "partial": "",
        "signature": "[a]-\u003ePoly a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Lagrange.html#v:lagrangeBasis",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the Lagrange basis set of polynomials associated with a set of \n points. This is the set of polynomials each of which is \u003ccode\u003e1\u003c/code\u003e at its \n corresponding point in the input list and \u003ccode\u003e0\u003c/code\u003e at all others.\n\u003c/p\u003e\u003cp\u003eThese polynomials are especially convenient, mathematically, for \n interpolation.  The interpolating polynomial for a set of points  \u003ccode\u003e(x,y)\u003c/code\u003e \n is given by using the \u003ccode\u003ey\u003c/code\u003es as coefficients for the basis given by \n \u003ccode\u003elagrangeBasis xs\u003c/code\u003e.  Computationally, this is not an especially stable \n procedure though.  \u003ccode\u003eMath.Polynomial.Interpolation.lagrangePolyFit\u003c/code\u003e\n implements a slightly better algorithm based on the same idea.  \n\u003c/p\u003e\u003cp\u003eGenerally it is better to not compute the coefficients at all.  \n \u003ccode\u003eMath.Polynomial.Interpolation.polyInterp\u003c/code\u003e evaluates the interpolating\n polynomial directly, and is both quicker and more stable than any method\n I know of that computes the coefficients.\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial.Lagrange",
        "fct-package": "polynomial",
        "fct-signature": "[a] -\u003e [Poly a]",
        "fct-source": "src/Math-Polynomial-Lagrange.html#lagrangeBasis",
        "fct-type": "function",
        "title": "lagrangeBasis"
      },
      "index": {
        "description": "Returns the Lagrange basis set of polynomials associated with set of points This is the set of polynomials each of which is at its corresponding point in the input list and at all others These polynomials are especially convenient mathematically for interpolation The interpolating polynomial for set of points is given by using the as coefficients for the basis given by lagrangeBasis xs Computationally this is not an especially stable procedure though Math.Polynomial.Interpolation.lagrangePolyFit implements slightly better algorithm based on the same idea Generally it is better to not compute the coefficients at all Math.Polynomial.Interpolation.polyInterp evaluates the interpolating polynomial directly and is both quicker and more stable than any method know of that computes the coefficients",
        "hierarchy": "Math Polynomial Lagrange",
        "module": "Math.Polynomial.Lagrange",
        "name": "lagrangeBasis",
        "normalized": "[a]-\u003e[Poly a]",
        "package": "polynomial",
        "partial": "Basis",
        "signature": "[a]-\u003e[Poly a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Lagrange.html#v:lagrangeWeights",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the weights associated with each abscissa in the Lagrange\n barycentric form.\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial.Lagrange",
        "fct-package": "polynomial",
        "fct-signature": "[a] -\u003e [a]",
        "fct-source": "src/Math-Polynomial-Lagrange.html#lagrangeWeights",
        "fct-type": "function",
        "title": "lagrangeWeights"
      },
      "index": {
        "description": "Compute the weights associated with each abscissa in the Lagrange barycentric form",
        "hierarchy": "Math Polynomial Lagrange",
        "module": "Math.Polynomial.Lagrange",
        "name": "lagrangeWeights",
        "normalized": "[a]-\u003e[a]",
        "package": "polynomial",
        "partial": "Weights",
        "signature": "[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Legendre.html#",
      "description": {
        "fct-module": "Math.Polynomial.Legendre",
        "fct-package": "polynomial",
        "fct-signature": "module",
        "fct-source": "src/Math-Polynomial-Legendre.html",
        "fct-type": "module",
        "title": "Legendre"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Polynomial Legendre",
        "module": "Math.Polynomial.Legendre",
        "name": "Legendre",
        "normalized": "",
        "package": "polynomial",
        "partial": "Legendre",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Legendre.html#v:evalLegendre",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate the n'th Legendre polynomial at a point X.  Both more efficient\n and more numerically stable than computing the coefficients and evaluating\n the polynomial.\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial.Legendre",
        "fct-package": "polynomial",
        "fct-signature": "Int -\u003e a -\u003e a",
        "fct-source": "src/Math-Polynomial-Legendre.html#evalLegendre",
        "fct-type": "function",
        "title": "evalLegendre"
      },
      "index": {
        "description": "Evaluate the th Legendre polynomial at point Both more efficient and more numerically stable than computing the coefficients and evaluating the polynomial",
        "hierarchy": "Math Polynomial Legendre",
        "module": "Math.Polynomial.Legendre",
        "name": "evalLegendre",
        "normalized": "Int-\u003ea-\u003ea",
        "package": "polynomial",
        "partial": "Legendre",
        "signature": "Int-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Legendre.html#v:evalLegendreDeriv",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate the n'th Legendre polynomial and its derivative at a point X.  \n Both more efficient and more numerically stable than computing the\n coefficients and evaluating the polynomial.\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial.Legendre",
        "fct-package": "polynomial",
        "fct-signature": "Int -\u003e a -\u003e (a, a)",
        "fct-source": "src/Math-Polynomial-Legendre.html#evalLegendreDeriv",
        "fct-type": "function",
        "title": "evalLegendreDeriv"
      },
      "index": {
        "description": "Evaluate the th Legendre polynomial and its derivative at point Both more efficient and more numerically stable than computing the coefficients and evaluating the polynomial",
        "hierarchy": "Math Polynomial Legendre",
        "module": "Math.Polynomial.Legendre",
        "name": "evalLegendreDeriv",
        "normalized": "Int-\u003ea-\u003e(a,a)",
        "package": "polynomial",
        "partial": "Legendre Deriv",
        "signature": "Int-\u003ea-\u003e(a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Legendre.html#v:evalLegendres",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate all the Legendre polynomials at a point X.\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial.Legendre",
        "fct-package": "polynomial",
        "fct-signature": "a -\u003e [a]",
        "fct-source": "src/Math-Polynomial-Legendre.html#evalLegendres",
        "fct-type": "function",
        "title": "evalLegendres"
      },
      "index": {
        "description": "Evaluate all the Legendre polynomials at point",
        "hierarchy": "Math Polynomial Legendre",
        "module": "Math.Polynomial.Legendre",
        "name": "evalLegendres",
        "normalized": "a-\u003e[a]",
        "package": "polynomial",
        "partial": "Legendres",
        "signature": "a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Legendre.html#v:legendre",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the coefficients of the n'th Legendre polynomial.\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial.Legendre",
        "fct-package": "polynomial",
        "fct-signature": "Int -\u003e Poly a",
        "fct-source": "src/Math-Polynomial-Legendre.html#legendre",
        "fct-type": "function",
        "title": "legendre"
      },
      "index": {
        "description": "Compute the coefficients of the th Legendre polynomial",
        "hierarchy": "Math Polynomial Legendre",
        "module": "Math.Polynomial.Legendre",
        "name": "legendre",
        "normalized": "Int-\u003ePoly a",
        "package": "polynomial",
        "partial": "",
        "signature": "Int-\u003ePoly a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Legendre.html#v:legendreRoots",
      "description": {
        "fct-descr": "\u003cp\u003eZeroes of the n'th Legendre polynomial.\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial.Legendre",
        "fct-package": "polynomial",
        "fct-signature": "Int -\u003e b -\u003e [b]",
        "fct-source": "src/Math-Polynomial-Legendre.html#legendreRoots",
        "fct-type": "function",
        "title": "legendreRoots"
      },
      "index": {
        "description": "Zeroes of the th Legendre polynomial",
        "hierarchy": "Math Polynomial Legendre",
        "module": "Math.Polynomial.Legendre",
        "name": "legendreRoots",
        "normalized": "Int-\u003ea-\u003e[a]",
        "package": "polynomial",
        "partial": "Roots",
        "signature": "Int-\u003eb-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Legendre.html#v:legendres",
      "description": {
        "fct-descr": "\u003cp\u003eThe Legendre polynomials with \u003ccode\u003e\u003ca\u003eRational\u003c/a\u003e\u003c/code\u003e coefficients.  These polynomials \n form an orthogonal basis of the space of all polynomials, relative to the \n L2 inner product on [-1,1] (which is given by integrating the product of\n 2 polynomials over that range).\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial.Legendre",
        "fct-package": "polynomial",
        "fct-signature": "[Poly Rational]",
        "fct-source": "src/Math-Polynomial-Legendre.html#legendres",
        "fct-type": "function",
        "title": "legendres"
      },
      "index": {
        "description": "The Legendre polynomials with Rational coefficients These polynomials form an orthogonal basis of the space of all polynomials relative to the L2 inner product on which is given by integrating the product of polynomials over that range",
        "hierarchy": "Math Polynomial Legendre",
        "module": "Math.Polynomial.Legendre",
        "name": "legendres",
        "normalized": "[Poly Rational]",
        "package": "polynomial",
        "partial": "",
        "signature": "[Poly Rational]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Newton.html#",
      "description": {
        "fct-module": "Math.Polynomial.Newton",
        "fct-package": "polynomial",
        "fct-signature": "module",
        "fct-source": "src/Math-Polynomial-Newton.html",
        "fct-type": "module",
        "title": "Newton"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Polynomial Newton",
        "module": "Math.Polynomial.Newton",
        "name": "Newton",
        "normalized": "",
        "package": "polynomial",
        "partial": "Newton",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Newton.html#v:newtonBasis",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the Newton basis set of polynomials associated with a set of \n abscissas.  This is the set of monic polynomials each of which is \u003ccode\u003e0\u003c/code\u003e \n at all previous points in the input list.\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial.Newton",
        "fct-package": "polynomial",
        "fct-signature": "[a] -\u003e [Poly a]",
        "fct-source": "src/Math-Polynomial-Newton.html#newtonBasis",
        "fct-type": "function",
        "title": "newtonBasis"
      },
      "index": {
        "description": "Returns the Newton basis set of polynomials associated with set of abscissas This is the set of monic polynomials each of which is at all previous points in the input list",
        "hierarchy": "Math Polynomial Newton",
        "module": "Math.Polynomial.Newton",
        "name": "newtonBasis",
        "normalized": "[a]-\u003e[Poly a]",
        "package": "polynomial",
        "partial": "Basis",
        "signature": "[a]-\u003e[Poly a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-NumInstance.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports a \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e instance for the \u003ccode\u003e\u003ca\u003ePoly\u003c/a\u003e\u003c/code\u003e type.\n This instance does not implement all operations, because \u003ccode\u003e\u003ca\u003eabs\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esignum\u003c/a\u003e\u003c/code\u003e\n are simply not definable, so I have placed it into a separate module so\n that I can make people read this caveat ;).\n\u003c/p\u003e\u003cp\u003eUse at your own risk.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Math.Polynomial.NumInstance",
        "fct-package": "polynomial",
        "fct-signature": "module",
        "fct-source": "src/Math-Polynomial-NumInstance.html",
        "fct-type": "module",
        "title": "NumInstance"
      },
      "index": {
        "description": "This module exports Num instance for the Poly type This instance does not implement all operations because abs and signum are simply not definable so have placed it into separate module so that can make people read this caveat Use at your own risk",
        "hierarchy": "Math Polynomial NumInstance",
        "module": "Math.Polynomial.NumInstance",
        "name": "NumInstance",
        "normalized": "",
        "package": "polynomial",
        "partial": "Num Instance",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Type.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLow-level interface for the \u003ccode\u003e\u003ca\u003ePoly\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Math.Polynomial.Type",
        "fct-package": "polynomial",
        "fct-signature": "module",
        "fct-source": "src/Math-Polynomial-Type.html",
        "fct-type": "module",
        "title": "Type"
      },
      "index": {
        "description": "Low-level interface for the Poly type",
        "hierarchy": "Math Polynomial Type",
        "module": "Math.Polynomial.Type",
        "name": "Type",
        "normalized": "",
        "package": "polynomial",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Type.html#t:Endianness",
      "description": {
        "fct-module": "Math.Polynomial.Type",
        "fct-package": "polynomial",
        "fct-signature": "data",
        "fct-source": "src/Math-Polynomial-Type.html#Endianness",
        "fct-type": "data",
        "title": "Endianness"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Polynomial Type",
        "module": "Math.Polynomial.Type",
        "name": "Endianness",
        "normalized": "",
        "package": "polynomial",
        "partial": "Endianness",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Type.html#t:Poly",
      "description": {
        "fct-module": "Math.Polynomial.Type",
        "fct-package": "polynomial",
        "fct-signature": "data",
        "fct-source": "src/Math-Polynomial-Type.html#Poly",
        "fct-type": "data",
        "title": "Poly"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Polynomial Type",
        "module": "Math.Polynomial.Type",
        "name": "Poly",
        "normalized": "",
        "package": "polynomial",
        "partial": "Poly",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Type.html#v:BE",
      "description": {
        "fct-descr": "\u003cp\u003eBig-Endian (head is highest-order term)\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial.Type",
        "fct-package": "polynomial",
        "fct-signature": "BE",
        "fct-source": "src/Math-Polynomial-Type.html#Endianness",
        "fct-type": "function",
        "title": "BE"
      },
      "index": {
        "description": "Big-Endian head is highest-order term",
        "hierarchy": "Math Polynomial Type",
        "module": "Math.Polynomial.Type",
        "name": "BE",
        "normalized": "",
        "package": "polynomial",
        "partial": "BE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Type.html#v:LE",
      "description": {
        "fct-descr": "\u003cp\u003eLittle-Endian (head is const term)\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial.Type",
        "fct-package": "polynomial",
        "fct-signature": "LE",
        "fct-source": "src/Math-Polynomial-Type.html#Endianness",
        "fct-type": "function",
        "title": "LE"
      },
      "index": {
        "description": "Little-Endian head is const term",
        "hierarchy": "Math Polynomial Type",
        "module": "Math.Polynomial.Type",
        "name": "LE",
        "normalized": "",
        "package": "polynomial",
        "partial": "LE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Type.html#v:mapPoly",
      "description": {
        "fct-descr": "\u003cp\u003eLike fmap, but able to preserve unboxedness\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial.Type",
        "fct-package": "polynomial",
        "fct-signature": "(a -\u003e a) -\u003e Poly a -\u003e Poly a",
        "fct-source": "src/Math-Polynomial-Type.html#mapPoly",
        "fct-type": "function",
        "title": "mapPoly"
      },
      "index": {
        "description": "Like fmap but able to preserve unboxedness",
        "hierarchy": "Math Polynomial Type",
        "module": "Math.Polynomial.Type",
        "name": "mapPoly",
        "normalized": "(a-\u003ea)-\u003ePoly a-\u003ePoly a",
        "package": "polynomial",
        "partial": "Poly",
        "signature": "(a-\u003ea)-\u003ePoly a-\u003ePoly a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Type.html#v:poly",
      "description": {
        "fct-descr": "\u003cp\u003eMake a \u003ccode\u003e\u003ca\u003ePoly\u003c/a\u003e\u003c/code\u003e from a list of coefficients using the specified coefficient order.\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial.Type",
        "fct-package": "polynomial",
        "fct-signature": "Endianness -\u003e [a] -\u003e Poly a",
        "fct-source": "src/Math-Polynomial-Type.html#poly",
        "fct-type": "function",
        "title": "poly"
      },
      "index": {
        "description": "Make Poly from list of coefficients using the specified coefficient order",
        "hierarchy": "Math Polynomial Type",
        "module": "Math.Polynomial.Type",
        "name": "poly",
        "normalized": "Endianness-\u003e[a]-\u003ePoly a",
        "package": "polynomial",
        "partial": "",
        "signature": "Endianness-\u003e[a]-\u003ePoly a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Type.html#v:polyCoeffs",
      "description": {
        "fct-descr": "\u003cp\u003eGet the coefficients of a a \u003ccode\u003e\u003ca\u003ePoly\u003c/a\u003e\u003c/code\u003e in the specified order.\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial.Type",
        "fct-package": "polynomial",
        "fct-signature": "Endianness -\u003e Poly a -\u003e [a]",
        "fct-source": "src/Math-Polynomial-Type.html#polyCoeffs",
        "fct-type": "function",
        "title": "polyCoeffs"
      },
      "index": {
        "description": "Get the coefficients of Poly in the specified order",
        "hierarchy": "Math Polynomial Type",
        "module": "Math.Polynomial.Type",
        "name": "polyCoeffs",
        "normalized": "Endianness-\u003ePoly a-\u003e[a]",
        "package": "polynomial",
        "partial": "Coeffs",
        "signature": "Endianness-\u003ePoly a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Type.html#v:polyDegree",
      "description": {
        "fct-descr": "\u003cp\u003eGet the degree of a a \u003ccode\u003e\u003ca\u003ePoly\u003c/a\u003e\u003c/code\u003e (the highest exponent with nonzero coefficient)\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial.Type",
        "fct-package": "polynomial",
        "fct-signature": "Poly a -\u003e Int",
        "fct-source": "src/Math-Polynomial-Type.html#polyDegree",
        "fct-type": "function",
        "title": "polyDegree"
      },
      "index": {
        "description": "Get the degree of Poly the highest exponent with nonzero coefficient",
        "hierarchy": "Math Polynomial Type",
        "module": "Math.Polynomial.Type",
        "name": "polyDegree",
        "normalized": "Poly a-\u003eInt",
        "package": "polynomial",
        "partial": "Degree",
        "signature": "Poly a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Type.html#v:polyIsOne",
      "description": {
        "fct-module": "Math.Polynomial.Type",
        "fct-package": "polynomial",
        "fct-signature": "Poly a -\u003e Bool",
        "fct-source": "src/Math-Polynomial-Type.html#polyIsOne",
        "fct-type": "function",
        "title": "polyIsOne"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Polynomial Type",
        "module": "Math.Polynomial.Type",
        "name": "polyIsOne",
        "normalized": "Poly a-\u003eBool",
        "package": "polynomial",
        "partial": "Is One",
        "signature": "Poly a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Type.html#v:polyIsZero",
      "description": {
        "fct-module": "Math.Polynomial.Type",
        "fct-package": "polynomial",
        "fct-signature": "Poly a -\u003e Bool",
        "fct-source": "src/Math-Polynomial-Type.html#polyIsZero",
        "fct-type": "function",
        "title": "polyIsZero"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Polynomial Type",
        "module": "Math.Polynomial.Type",
        "name": "polyIsZero",
        "normalized": "Poly a-\u003eBool",
        "package": "polynomial",
        "partial": "Is Zero",
        "signature": "Poly a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Type.html#v:polyN",
      "description": {
        "fct-descr": "\u003cp\u003eMake a \u003ccode\u003e\u003ca\u003ePoly\u003c/a\u003e\u003c/code\u003e from a list of coefficients, at most \u003ccode\u003en\u003c/code\u003e of which are significant.\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial.Type",
        "fct-package": "polynomial",
        "fct-signature": "Int -\u003e Endianness -\u003e [a] -\u003e Poly a",
        "fct-source": "src/Math-Polynomial-Type.html#polyN",
        "fct-type": "function",
        "title": "polyN"
      },
      "index": {
        "description": "Make Poly from list of coefficients at most of which are significant",
        "hierarchy": "Math Polynomial Type",
        "module": "Math.Polynomial.Type",
        "name": "polyN",
        "normalized": "Int-\u003eEndianness-\u003e[a]-\u003ePoly a",
        "package": "polynomial",
        "partial": "",
        "signature": "Int-\u003eEndianness-\u003e[a]-\u003ePoly a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Type.html#v:rawCoeffsOrder",
      "description": {
        "fct-module": "Math.Polynomial.Type",
        "fct-package": "polynomial",
        "fct-signature": "Poly a -\u003e Endianness",
        "fct-source": "src/Math-Polynomial-Type.html#rawCoeffsOrder",
        "fct-type": "function",
        "title": "rawCoeffsOrder"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Polynomial Type",
        "module": "Math.Polynomial.Type",
        "name": "rawCoeffsOrder",
        "normalized": "Poly a-\u003eEndianness",
        "package": "polynomial",
        "partial": "Coeffs Order",
        "signature": "Poly a-\u003eEndianness"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Type.html#v:rawListPoly",
      "description": {
        "fct-descr": "\u003cp\u003eMake a \u003ccode\u003e\u003ca\u003ePoly\u003c/a\u003e\u003c/code\u003e from a list of coefficients using the specified coefficient order,\n without the \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e context (and therefore without trimming zeroes from the \n coefficient list)\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial.Type",
        "fct-package": "polynomial",
        "fct-signature": "Endianness -\u003e [a] -\u003e Poly a",
        "fct-source": "src/Math-Polynomial-Type.html#rawListPoly",
        "fct-type": "function",
        "title": "rawListPoly"
      },
      "index": {
        "description": "Make Poly from list of coefficients using the specified coefficient order without the Num context and therefore without trimming zeroes from the coefficient list",
        "hierarchy": "Math Polynomial Type",
        "module": "Math.Polynomial.Type",
        "name": "rawListPoly",
        "normalized": "Endianness-\u003e[a]-\u003ePoly a",
        "package": "polynomial",
        "partial": "List Poly",
        "signature": "Endianness-\u003e[a]-\u003ePoly a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Type.html#v:rawListPolyN",
      "description": {
        "fct-module": "Math.Polynomial.Type",
        "fct-package": "polynomial",
        "fct-signature": "Int -\u003e Endianness -\u003e [a] -\u003e Poly a",
        "fct-source": "src/Math-Polynomial-Type.html#rawListPolyN",
        "fct-type": "function",
        "title": "rawListPolyN"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Polynomial Type",
        "module": "Math.Polynomial.Type",
        "name": "rawListPolyN",
        "normalized": "Int-\u003eEndianness-\u003e[a]-\u003ePoly a",
        "package": "polynomial",
        "partial": "List Poly",
        "signature": "Int-\u003eEndianness-\u003e[a]-\u003ePoly a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Type.html#v:rawPolyCoeffs",
      "description": {
        "fct-module": "Math.Polynomial.Type",
        "fct-package": "polynomial",
        "fct-signature": "Poly a -\u003e [a]",
        "fct-source": "src/Math-Polynomial-Type.html#rawPolyCoeffs",
        "fct-type": "function",
        "title": "rawPolyCoeffs"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Polynomial Type",
        "module": "Math.Polynomial.Type",
        "name": "rawPolyCoeffs",
        "normalized": "Poly a-\u003e[a]",
        "package": "polynomial",
        "partial": "Poly Coeffs",
        "signature": "Poly a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Type.html#v:rawPolyDegree",
      "description": {
        "fct-module": "Math.Polynomial.Type",
        "fct-package": "polynomial",
        "fct-signature": "Poly a -\u003e Int",
        "fct-source": "src/Math-Polynomial-Type.html#rawPolyDegree",
        "fct-type": "function",
        "title": "rawPolyDegree"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Polynomial Type",
        "module": "Math.Polynomial.Type",
        "name": "rawPolyDegree",
        "normalized": "Poly a-\u003eInt",
        "package": "polynomial",
        "partial": "Poly Degree",
        "signature": "Poly a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Type.html#v:rawPolyLength",
      "description": {
        "fct-module": "Math.Polynomial.Type",
        "fct-package": "polynomial",
        "fct-signature": "Poly a -\u003e Int",
        "fct-source": "src/Math-Polynomial-Type.html#rawPolyLength",
        "fct-type": "function",
        "title": "rawPolyLength"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Polynomial Type",
        "module": "Math.Polynomial.Type",
        "name": "rawPolyLength",
        "normalized": "Poly a-\u003eInt",
        "package": "polynomial",
        "partial": "Poly Length",
        "signature": "Poly a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Type.html#v:rawUVectorPoly",
      "description": {
        "fct-module": "Math.Polynomial.Type",
        "fct-package": "polynomial",
        "fct-signature": "Endianness -\u003e Vector a -\u003e Poly a",
        "fct-source": "src/Math-Polynomial-Type.html#rawUVectorPoly",
        "fct-type": "function",
        "title": "rawUVectorPoly"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Polynomial Type",
        "module": "Math.Polynomial.Type",
        "name": "rawUVectorPoly",
        "normalized": "Endianness-\u003eVector a-\u003ePoly a",
        "package": "polynomial",
        "partial": "UVector Poly",
        "signature": "Endianness-\u003eVector a-\u003ePoly a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Type.html#v:rawVectorPoly",
      "description": {
        "fct-module": "Math.Polynomial.Type",
        "fct-package": "polynomial",
        "fct-signature": "Endianness -\u003e Vector a -\u003e Poly a",
        "fct-source": "src/Math-Polynomial-Type.html#rawVectorPoly",
        "fct-type": "function",
        "title": "rawVectorPoly"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Polynomial Type",
        "module": "Math.Polynomial.Type",
        "name": "rawVectorPoly",
        "normalized": "Endianness-\u003eVector a-\u003ePoly a",
        "package": "polynomial",
        "partial": "Vector Poly",
        "signature": "Endianness-\u003eVector a-\u003ePoly a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Type.html#v:trim",
      "description": {
        "fct-descr": "\u003cp\u003eTrim zeroes from a polynomial (given a predicate for identifying zero).\n In particular, drops zeroes from the highest-order coefficients, so that\n \u003ccode\u003e0x^n + 0x^(n-1) + 0x^(n-2) + ... + ax^k + ...\u003c/code\u003e, \u003ccode\u003ea /= 0\u003c/code\u003e\n is normalized to \u003ccode\u003eax^k + ...\u003c/code\u003e.  \n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e instance for \u003ccode\u003e\u003ca\u003ePoly\u003c/a\u003e\u003c/code\u003e and all the standard constructors / destructors\n are defined using \u003ccode\u003etrim (0==)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial.Type",
        "fct-package": "polynomial",
        "fct-signature": "(a -\u003e Bool) -\u003e Poly a -\u003e Poly a",
        "fct-source": "src/Math-Polynomial-Type.html#trim",
        "fct-type": "function",
        "title": "trim"
      },
      "index": {
        "description": "Trim zeroes from polynomial given predicate for identifying zero In particular drops zeroes from the highest-order coefficients so that n-1 n-2 ax is normalized to ax The Eq instance for Poly and all the standard constructors destructors are defined using trim",
        "hierarchy": "Math Polynomial Type",
        "module": "Math.Polynomial.Type",
        "name": "trim",
        "normalized": "(a-\u003eBool)-\u003ePoly a-\u003ePoly a",
        "package": "polynomial",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003ePoly a-\u003ePoly a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Type.html#v:unboxPoly",
      "description": {
        "fct-module": "Math.Polynomial.Type",
        "fct-package": "polynomial",
        "fct-signature": "Poly a -\u003e Poly a",
        "fct-source": "src/Math-Polynomial-Type.html#unboxPoly",
        "fct-type": "function",
        "title": "unboxPoly"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Polynomial Type",
        "module": "Math.Polynomial.Type",
        "name": "unboxPoly",
        "normalized": "Poly a-\u003ePoly a",
        "package": "polynomial",
        "partial": "Poly",
        "signature": "Poly a-\u003ePoly a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Type.html#v:unboxedPoly",
      "description": {
        "fct-module": "Math.Polynomial.Type",
        "fct-package": "polynomial",
        "fct-signature": "Endianness -\u003e [a] -\u003e Poly a",
        "fct-source": "src/Math-Polynomial-Type.html#unboxedPoly",
        "fct-type": "function",
        "title": "unboxedPoly"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Polynomial Type",
        "module": "Math.Polynomial.Type",
        "name": "unboxedPoly",
        "normalized": "Endianness-\u003e[a]-\u003ePoly a",
        "package": "polynomial",
        "partial": "Poly",
        "signature": "Endianness-\u003e[a]-\u003ePoly a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Type.html#v:unboxedPolyN",
      "description": {
        "fct-module": "Math.Polynomial.Type",
        "fct-package": "polynomial",
        "fct-signature": "Int -\u003e Endianness -\u003e [a] -\u003e Poly a",
        "fct-source": "src/Math-Polynomial-Type.html#unboxedPolyN",
        "fct-type": "function",
        "title": "unboxedPolyN"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Polynomial Type",
        "module": "Math.Polynomial.Type",
        "name": "unboxedPolyN",
        "normalized": "Int-\u003eEndianness-\u003e[a]-\u003ePoly a",
        "package": "polynomial",
        "partial": "Poly",
        "signature": "Int-\u003eEndianness-\u003e[a]-\u003ePoly a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Type.html#v:untrimmedPolyCoeffs",
      "description": {
        "fct-module": "Math.Polynomial.Type",
        "fct-package": "polynomial",
        "fct-signature": "Endianness -\u003e Poly a -\u003e [a]",
        "fct-source": "src/Math-Polynomial-Type.html#untrimmedPolyCoeffs",
        "fct-type": "function",
        "title": "untrimmedPolyCoeffs"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Polynomial Type",
        "module": "Math.Polynomial.Type",
        "name": "untrimmedPolyCoeffs",
        "normalized": "Endianness-\u003ePoly a-\u003e[a]",
        "package": "polynomial",
        "partial": "Poly Coeffs",
        "signature": "Endianness-\u003ePoly a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial-Type.html#v:zero",
      "description": {
        "fct-descr": "\u003cp\u003eThe polynomial \"0\"\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial.Type",
        "fct-package": "polynomial",
        "fct-signature": "Poly a",
        "fct-source": "src/Math-Polynomial-Type.html#zero",
        "fct-type": "function",
        "title": "zero"
      },
      "index": {
        "description": "The polynomial",
        "hierarchy": "Math Polynomial Type",
        "module": "Math.Polynomial.Type",
        "name": "zero",
        "normalized": "",
        "package": "polynomial",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial.html#",
      "description": {
        "fct-module": "Math.Polynomial",
        "fct-package": "polynomial",
        "fct-signature": "module",
        "fct-source": "src/Math-Polynomial.html",
        "fct-type": "module",
        "title": "Polynomial"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Polynomial",
        "module": "Math.Polynomial",
        "name": "Polynomial",
        "normalized": "",
        "package": "polynomial",
        "partial": "Polynomial",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial.html#t:Endianness",
      "description": {
        "fct-module": "Math.Polynomial",
        "fct-package": "polynomial",
        "fct-signature": "data",
        "fct-source": "src/Math-Polynomial-Type.html#Endianness",
        "fct-type": "data",
        "title": "Endianness"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Polynomial",
        "module": "Math.Polynomial",
        "name": "Endianness",
        "normalized": "",
        "package": "polynomial",
        "partial": "Endianness",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial.html#t:Poly",
      "description": {
        "fct-module": "Math.Polynomial",
        "fct-package": "polynomial",
        "fct-signature": "data",
        "fct-source": "src/Math-Polynomial-Type.html#Poly",
        "fct-type": "data",
        "title": "Poly"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Polynomial",
        "module": "Math.Polynomial",
        "name": "Poly",
        "normalized": "",
        "package": "polynomial",
        "partial": "Poly",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial.html#v:BE",
      "description": {
        "fct-descr": "\u003cp\u003eBig-Endian (head is highest-order term)\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial",
        "fct-package": "polynomial",
        "fct-signature": "BE",
        "fct-source": "src/Math-Polynomial-Type.html#Endianness",
        "fct-type": "function",
        "title": "BE"
      },
      "index": {
        "description": "Big-Endian head is highest-order term",
        "hierarchy": "Math Polynomial",
        "module": "Math.Polynomial",
        "name": "BE",
        "normalized": "",
        "package": "polynomial",
        "partial": "BE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial.html#v:LE",
      "description": {
        "fct-descr": "\u003cp\u003eLittle-Endian (head is const term)\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial",
        "fct-package": "polynomial",
        "fct-signature": "LE",
        "fct-source": "src/Math-Polynomial-Type.html#Endianness",
        "fct-type": "function",
        "title": "LE"
      },
      "index": {
        "description": "Little-Endian head is const term",
        "hierarchy": "Math Polynomial",
        "module": "Math.Polynomial",
        "name": "LE",
        "normalized": "",
        "package": "polynomial",
        "partial": "LE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial.html#v:addPoly",
      "description": {
        "fct-descr": "\u003cp\u003eGiven polynomials \u003ccode\u003ef\u003c/code\u003e and \u003ccode\u003eg\u003c/code\u003e, computes the polynomial \u003ccode\u003eh\u003c/code\u003e such that:\n\u003c/p\u003e\u003cpre\u003e evalPoly h x = evalPoly f x + evalPoly g x\n\u003c/pre\u003e",
        "fct-module": "Math.Polynomial",
        "fct-package": "polynomial",
        "fct-signature": "Poly a -\u003e Poly a -\u003e Poly a",
        "fct-source": "src/Math-Polynomial.html#addPoly",
        "fct-type": "function",
        "title": "addPoly"
      },
      "index": {
        "description": "Given polynomials and computes the polynomial such that evalPoly evalPoly evalPoly",
        "hierarchy": "Math Polynomial",
        "module": "Math.Polynomial",
        "name": "addPoly",
        "normalized": "Poly a-\u003ePoly a-\u003ePoly a",
        "package": "polynomial",
        "partial": "Poly",
        "signature": "Poly a-\u003ePoly a-\u003ePoly a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial.html#v:composePoly",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ecomposePoly f g\u003c/code\u003e constructs the polynomial \u003ccode\u003eh\u003c/code\u003e such that:\n\u003c/p\u003e\u003cpre\u003e evalPoly h = evalPoly f . evalPoly g\n\u003c/pre\u003e\u003cp\u003eThis is a very expensive operation and, in general, returns a polynomial \n that is quite a bit more expensive to evaluate than \u003ccode\u003ef\u003c/code\u003e and \u003ccode\u003eg\u003c/code\u003e together\n (because it is of a much higher order than either).  Unless your \n polynomials are quite small or you are quite certain you need the\n coefficients of the composed polynomial, it is recommended that you \n simply evaluate \u003ccode\u003ef\u003c/code\u003e and \u003ccode\u003eg\u003c/code\u003e and explicitly compose the resulting \n functions.  This will usually be much more efficient.\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial",
        "fct-package": "polynomial",
        "fct-signature": "Poly a -\u003e Poly a -\u003e Poly a",
        "fct-source": "src/Math-Polynomial.html#composePoly",
        "fct-type": "function",
        "title": "composePoly"
      },
      "index": {
        "description": "composePoly constructs the polynomial such that evalPoly evalPoly evalPoly This is very expensive operation and in general returns polynomial that is quite bit more expensive to evaluate than and together because it is of much higher order than either Unless your polynomials are quite small or you are quite certain you need the coefficients of the composed polynomial it is recommended that you simply evaluate and and explicitly compose the resulting functions This will usually be much more efficient",
        "hierarchy": "Math Polynomial",
        "module": "Math.Polynomial",
        "name": "composePoly",
        "normalized": "Poly a-\u003ePoly a-\u003ePoly a",
        "package": "polynomial",
        "partial": "Poly",
        "signature": "Poly a-\u003ePoly a-\u003ePoly a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial.html#v:constPoly",
      "description": {
        "fct-descr": "\u003cp\u003eGiven some constant \u003ccode\u003ek\u003c/code\u003e, construct the polynomial whose value is \n constantly \u003ccode\u003ek\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial",
        "fct-package": "polynomial",
        "fct-signature": "a -\u003e Poly a",
        "fct-source": "src/Math-Polynomial.html#constPoly",
        "fct-type": "function",
        "title": "constPoly"
      },
      "index": {
        "description": "Given some constant construct the polynomial whose value is constantly",
        "hierarchy": "Math Polynomial",
        "module": "Math.Polynomial",
        "name": "constPoly",
        "normalized": "a-\u003ePoly a",
        "package": "polynomial",
        "partial": "Poly",
        "signature": "a-\u003ePoly a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial.html#v:contractPoly",
      "description": {
        "fct-descr": "\u003cp\u003e\"Contract\" a polynomial by attempting to divide out a root.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003econtractPoly p a\u003c/code\u003e returns \u003ccode\u003e(q,r)\u003c/code\u003e such that \u003ccode\u003eq*(x-a) + r == p\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial",
        "fct-package": "polynomial",
        "fct-signature": "Poly a -\u003e a -\u003e (Poly a, a)",
        "fct-source": "src/Math-Polynomial.html#contractPoly",
        "fct-type": "function",
        "title": "contractPoly"
      },
      "index": {
        "description": "Contract polynomial by attempting to divide out root contractPoly returns such that x-a",
        "hierarchy": "Math Polynomial",
        "module": "Math.Polynomial",
        "name": "contractPoly",
        "normalized": "Poly a-\u003ea-\u003e(Poly a,a)",
        "package": "polynomial",
        "partial": "Poly",
        "signature": "Poly a-\u003ea-\u003e(Poly a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial.html#v:evalPoly",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a polynomial at a point or, equivalently, convert a polynomial\n to the function it represents.  For example, \u003ccode\u003eevalPoly \u003ccode\u003e\u003ca\u003ex\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e and \n \u003ccode\u003eevalPoly (\u003ccode\u003e\u003ca\u003econstPoly\u003c/a\u003e\u003c/code\u003e k) = \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e k.\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial",
        "fct-package": "polynomial",
        "fct-signature": "Poly a -\u003e a -\u003e a",
        "fct-source": "src/Math-Polynomial.html#evalPoly",
        "fct-type": "function",
        "title": "evalPoly"
      },
      "index": {
        "description": "Evaluate polynomial at point or equivalently convert polynomial to the function it represents For example evalPoly id and evalPoly constPoly const",
        "hierarchy": "Math Polynomial",
        "module": "Math.Polynomial",
        "name": "evalPoly",
        "normalized": "Poly a-\u003ea-\u003ea",
        "package": "polynomial",
        "partial": "Poly",
        "signature": "Poly a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial.html#v:evalPolyDeriv",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a polynomial and its derivative (respectively) at a point.\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial",
        "fct-package": "polynomial",
        "fct-signature": "Poly a -\u003e a -\u003e (a, a)",
        "fct-source": "src/Math-Polynomial.html#evalPolyDeriv",
        "fct-type": "function",
        "title": "evalPolyDeriv"
      },
      "index": {
        "description": "Evaluate polynomial and its derivative respectively at point",
        "hierarchy": "Math Polynomial",
        "module": "Math.Polynomial",
        "name": "evalPolyDeriv",
        "normalized": "Poly a-\u003ea-\u003e(a,a)",
        "package": "polynomial",
        "partial": "Poly Deriv",
        "signature": "Poly a-\u003ea-\u003e(a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial.html#v:evalPolyDerivs",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a polynomial and all of its nonzero derivatives at a point.  \n This is roughly equivalent to:\n\u003c/p\u003e\u003cpre\u003e evalPolyDerivs p x = map (`evalPoly` x) (takeWhile (not . polyIsZero) (iterate polyDeriv p))\n\u003c/pre\u003e",
        "fct-module": "Math.Polynomial",
        "fct-package": "polynomial",
        "fct-signature": "Poly a -\u003e a -\u003e [a]",
        "fct-source": "src/Math-Polynomial.html#evalPolyDerivs",
        "fct-type": "function",
        "title": "evalPolyDerivs"
      },
      "index": {
        "description": "Evaluate polynomial and all of its nonzero derivatives at point This is roughly equivalent to evalPolyDerivs map evalPoly takeWhile not polyIsZero iterate polyDeriv",
        "hierarchy": "Math Polynomial",
        "module": "Math.Polynomial",
        "name": "evalPolyDerivs",
        "normalized": "Poly a-\u003ea-\u003e[a]",
        "package": "polynomial",
        "partial": "Poly Derivs",
        "signature": "Poly a-\u003ea-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial.html#v:gcdPoly",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003egcdPoly a b\u003c/code\u003e computes the highest order monic polynomial that is a \n divisor of both \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e.  If both \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e are \u003ccode\u003e\u003ca\u003ezero\u003c/a\u003e\u003c/code\u003e, the \n result is undefined.\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial",
        "fct-package": "polynomial",
        "fct-signature": "Poly a -\u003e Poly a -\u003e Poly a",
        "fct-source": "src/Math-Polynomial.html#gcdPoly",
        "fct-type": "function",
        "title": "gcdPoly"
      },
      "index": {
        "description": "gcdPoly computes the highest order monic polynomial that is divisor of both and If both and are zero the result is undefined",
        "hierarchy": "Math Polynomial",
        "module": "Math.Polynomial",
        "name": "gcdPoly",
        "normalized": "Poly a-\u003ePoly a-\u003ePoly a",
        "package": "polynomial",
        "partial": "Poly",
        "signature": "Poly a-\u003ePoly a-\u003ePoly a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial.html#v:monicPoly",
      "description": {
        "fct-descr": "\u003cp\u003eNormalize a polynomial so that its highest-order coefficient is 1\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial",
        "fct-package": "polynomial",
        "fct-signature": "Poly a -\u003e Poly a",
        "fct-source": "src/Math-Polynomial.html#monicPoly",
        "fct-type": "function",
        "title": "monicPoly"
      },
      "index": {
        "description": "Normalize polynomial so that its highest-order coefficient is",
        "hierarchy": "Math Polynomial",
        "module": "Math.Polynomial",
        "name": "monicPoly",
        "normalized": "Poly a-\u003ePoly a",
        "package": "polynomial",
        "partial": "Poly",
        "signature": "Poly a-\u003ePoly a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial.html#v:multPoly",
      "description": {
        "fct-descr": "\u003cp\u003eGiven polynomials \u003ccode\u003ef\u003c/code\u003e and \u003ccode\u003eg\u003c/code\u003e, computes the polynomial \u003ccode\u003eh\u003c/code\u003e such that:\n\u003c/p\u003e\u003cpre\u003e evalPoly h x = evalPoly f x * evalPoly g x\n\u003c/pre\u003e",
        "fct-module": "Math.Polynomial",
        "fct-package": "polynomial",
        "fct-signature": "Poly a -\u003e Poly a -\u003e Poly a",
        "fct-source": "src/Math-Polynomial.html#multPoly",
        "fct-type": "function",
        "title": "multPoly"
      },
      "index": {
        "description": "Given polynomials and computes the polynomial such that evalPoly evalPoly evalPoly",
        "hierarchy": "Math Polynomial",
        "module": "Math.Polynomial",
        "name": "multPoly",
        "normalized": "Poly a-\u003ePoly a-\u003ePoly a",
        "package": "polynomial",
        "partial": "Poly",
        "signature": "Poly a-\u003ePoly a-\u003ePoly a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial.html#v:negatePoly",
      "description": {
        "fct-descr": "\u003cp\u003eGiven some polynomial \u003ccode\u003ef\u003c/code\u003e, computes the polynomial \u003ccode\u003eg\u003c/code\u003e such that:\n\u003c/p\u003e\u003cpre\u003e evalPoly g x = negate (evalPoly f x)\n\u003c/pre\u003e",
        "fct-module": "Math.Polynomial",
        "fct-package": "polynomial",
        "fct-signature": "Poly a -\u003e Poly a",
        "fct-source": "src/Math-Polynomial.html#negatePoly",
        "fct-type": "function",
        "title": "negatePoly"
      },
      "index": {
        "description": "Given some polynomial computes the polynomial such that evalPoly negate evalPoly",
        "hierarchy": "Math Polynomial",
        "module": "Math.Polynomial",
        "name": "negatePoly",
        "normalized": "Poly a-\u003ePoly a",
        "package": "polynomial",
        "partial": "Poly",
        "signature": "Poly a-\u003ePoly a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial.html#v:one",
      "description": {
        "fct-descr": "\u003cp\u003eThe polynomial \"1\"\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial",
        "fct-package": "polynomial",
        "fct-signature": "Poly a",
        "fct-source": "src/Math-Polynomial.html#one",
        "fct-type": "function",
        "title": "one"
      },
      "index": {
        "description": "The polynomial",
        "hierarchy": "Math Polynomial",
        "module": "Math.Polynomial",
        "name": "one",
        "normalized": "",
        "package": "polynomial",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial.html#v:poly",
      "description": {
        "fct-descr": "\u003cp\u003eMake a \u003ccode\u003e\u003ca\u003ePoly\u003c/a\u003e\u003c/code\u003e from a list of coefficients using the specified coefficient order.\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial",
        "fct-package": "polynomial",
        "fct-signature": "Endianness -\u003e [a] -\u003e Poly a",
        "fct-source": "src/Math-Polynomial-Type.html#poly",
        "fct-type": "function",
        "title": "poly"
      },
      "index": {
        "description": "Make Poly from list of coefficients using the specified coefficient order",
        "hierarchy": "Math Polynomial",
        "module": "Math.Polynomial",
        "name": "poly",
        "normalized": "Endianness-\u003e[a]-\u003ePoly a",
        "package": "polynomial",
        "partial": "",
        "signature": "Endianness-\u003e[a]-\u003ePoly a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial.html#v:polyCoeffs",
      "description": {
        "fct-descr": "\u003cp\u003eGet the coefficients of a a \u003ccode\u003e\u003ca\u003ePoly\u003c/a\u003e\u003c/code\u003e in the specified order.\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial",
        "fct-package": "polynomial",
        "fct-signature": "Endianness -\u003e Poly a -\u003e [a]",
        "fct-source": "src/Math-Polynomial-Type.html#polyCoeffs",
        "fct-type": "function",
        "title": "polyCoeffs"
      },
      "index": {
        "description": "Get the coefficients of Poly in the specified order",
        "hierarchy": "Math Polynomial",
        "module": "Math.Polynomial",
        "name": "polyCoeffs",
        "normalized": "Endianness-\u003ePoly a-\u003e[a]",
        "package": "polynomial",
        "partial": "Coeffs",
        "signature": "Endianness-\u003ePoly a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial.html#v:polyDegree",
      "description": {
        "fct-descr": "\u003cp\u003eGet the degree of a a \u003ccode\u003e\u003ca\u003ePoly\u003c/a\u003e\u003c/code\u003e (the highest exponent with nonzero coefficient)\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial",
        "fct-package": "polynomial",
        "fct-signature": "Poly a -\u003e Int",
        "fct-source": "src/Math-Polynomial-Type.html#polyDegree",
        "fct-type": "function",
        "title": "polyDegree"
      },
      "index": {
        "description": "Get the degree of Poly the highest exponent with nonzero coefficient",
        "hierarchy": "Math Polynomial",
        "module": "Math.Polynomial",
        "name": "polyDegree",
        "normalized": "Poly a-\u003eInt",
        "package": "polynomial",
        "partial": "Degree",
        "signature": "Poly a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial.html#v:polyDeriv",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the derivative of a polynomial.\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial",
        "fct-package": "polynomial",
        "fct-signature": "Poly a -\u003e Poly a",
        "fct-source": "src/Math-Polynomial.html#polyDeriv",
        "fct-type": "function",
        "title": "polyDeriv"
      },
      "index": {
        "description": "Compute the derivative of polynomial",
        "hierarchy": "Math Polynomial",
        "module": "Math.Polynomial",
        "name": "polyDeriv",
        "normalized": "Poly a-\u003ePoly a",
        "package": "polynomial",
        "partial": "Deriv",
        "signature": "Poly a-\u003ePoly a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial.html#v:polyDerivs",
      "description": {
        "fct-descr": "\u003cp\u003eCompute all nonzero derivatives of a polynomial, starting with its \n \"zero'th derivative\", the original polynomial itself.\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial",
        "fct-package": "polynomial",
        "fct-signature": "Poly a -\u003e [Poly a]",
        "fct-source": "src/Math-Polynomial.html#polyDerivs",
        "fct-type": "function",
        "title": "polyDerivs"
      },
      "index": {
        "description": "Compute all nonzero derivatives of polynomial starting with its zero th derivative the original polynomial itself",
        "hierarchy": "Math Polynomial",
        "module": "Math.Polynomial",
        "name": "polyDerivs",
        "normalized": "Poly a-\u003e[Poly a]",
        "package": "polynomial",
        "partial": "Derivs",
        "signature": "Poly a-\u003e[Poly a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial.html#v:polyIntegral",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the definite integral (from 0 to x) of a polynomial.\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial",
        "fct-package": "polynomial",
        "fct-signature": "Poly a -\u003e Poly a",
        "fct-source": "src/Math-Polynomial.html#polyIntegral",
        "fct-type": "function",
        "title": "polyIntegral"
      },
      "index": {
        "description": "Compute the definite integral from to of polynomial",
        "hierarchy": "Math Polynomial",
        "module": "Math.Polynomial",
        "name": "polyIntegral",
        "normalized": "Poly a-\u003ePoly a",
        "package": "polynomial",
        "partial": "Integral",
        "signature": "Poly a-\u003ePoly a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial.html#v:polyIsOne",
      "description": {
        "fct-module": "Math.Polynomial",
        "fct-package": "polynomial",
        "fct-signature": "Poly a -\u003e Bool",
        "fct-source": "src/Math-Polynomial-Type.html#polyIsOne",
        "fct-type": "function",
        "title": "polyIsOne"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Polynomial",
        "module": "Math.Polynomial",
        "name": "polyIsOne",
        "normalized": "Poly a-\u003eBool",
        "package": "polynomial",
        "partial": "Is One",
        "signature": "Poly a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial.html#v:polyIsZero",
      "description": {
        "fct-module": "Math.Polynomial",
        "fct-package": "polynomial",
        "fct-signature": "Poly a -\u003e Bool",
        "fct-source": "src/Math-Polynomial-Type.html#polyIsZero",
        "fct-type": "function",
        "title": "polyIsZero"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Polynomial",
        "module": "Math.Polynomial",
        "name": "polyIsZero",
        "normalized": "Poly a-\u003eBool",
        "package": "polynomial",
        "partial": "Is Zero",
        "signature": "Poly a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial.html#v:powPoly",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a polynomial \u003ccode\u003ef\u003c/code\u003e and exponent \u003ccode\u003en\u003c/code\u003e, computes the polynomial \u003ccode\u003eg\u003c/code\u003e\n such that:\n\u003c/p\u003e\u003cpre\u003e evalPoly g x = evalPoly f x ^ n\n\u003c/pre\u003e",
        "fct-module": "Math.Polynomial",
        "fct-package": "polynomial",
        "fct-signature": "Poly a -\u003e b -\u003e Poly a",
        "fct-source": "src/Math-Polynomial.html#powPoly",
        "fct-type": "function",
        "title": "powPoly"
      },
      "index": {
        "description": "Given polynomial and exponent computes the polynomial such that evalPoly evalPoly",
        "hierarchy": "Math Polynomial",
        "module": "Math.Polynomial",
        "name": "powPoly",
        "normalized": "Poly a-\u003eb-\u003ePoly a",
        "package": "polynomial",
        "partial": "Poly",
        "signature": "Poly a-\u003eb-\u003ePoly a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial.html#v:quotPoly",
      "description": {
        "fct-module": "Math.Polynomial",
        "fct-package": "polynomial",
        "fct-signature": "Poly a -\u003e Poly a -\u003e Poly a",
        "fct-source": "src/Math-Polynomial.html#quotPoly",
        "fct-type": "function",
        "title": "quotPoly"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Polynomial",
        "module": "Math.Polynomial",
        "name": "quotPoly",
        "normalized": "Poly a-\u003ePoly a-\u003ePoly a",
        "package": "polynomial",
        "partial": "Poly",
        "signature": "Poly a-\u003ePoly a-\u003ePoly a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial.html#v:quotRemPoly",
      "description": {
        "fct-descr": "\u003cp\u003eGiven polynomials \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e, with \u003ccode\u003eb\u003c/code\u003e not \u003ccode\u003e\u003ca\u003ezero\u003c/a\u003e\u003c/code\u003e, computes polynomials\n \u003ccode\u003eq\u003c/code\u003e and \u003ccode\u003er\u003c/code\u003e such that:\n\u003c/p\u003e\u003cpre\u003e addPoly (multPoly q b) r == a\n\u003c/pre\u003e",
        "fct-module": "Math.Polynomial",
        "fct-package": "polynomial",
        "fct-signature": "Poly a -\u003e Poly a -\u003e (Poly a, Poly a)",
        "fct-source": "src/Math-Polynomial.html#quotRemPoly",
        "fct-type": "function",
        "title": "quotRemPoly"
      },
      "index": {
        "description": "Given polynomials and with not zero computes polynomials and such that addPoly multPoly",
        "hierarchy": "Math Polynomial",
        "module": "Math.Polynomial",
        "name": "quotRemPoly",
        "normalized": "Poly a-\u003ePoly a-\u003e(Poly a,Poly a)",
        "package": "polynomial",
        "partial": "Rem Poly",
        "signature": "Poly a-\u003ePoly a-\u003e(Poly a,Poly a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial.html#v:remPoly",
      "description": {
        "fct-module": "Math.Polynomial",
        "fct-package": "polynomial",
        "fct-signature": "Poly a -\u003e Poly a -\u003e Poly a",
        "fct-source": "src/Math-Polynomial.html#remPoly",
        "fct-type": "function",
        "title": "remPoly"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Polynomial",
        "module": "Math.Polynomial",
        "name": "remPoly",
        "normalized": "Poly a-\u003ePoly a-\u003ePoly a",
        "package": "polynomial",
        "partial": "Poly",
        "signature": "Poly a-\u003ePoly a-\u003ePoly a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial.html#v:scalePoly",
      "description": {
        "fct-descr": "\u003cp\u003eGiven some scalar \u003ccode\u003es\u003c/code\u003e and a polynomial \u003ccode\u003ef\u003c/code\u003e, computes the polynomial \u003ccode\u003eg\u003c/code\u003e\n such that:\n\u003c/p\u003e\u003cpre\u003e evalPoly g x = s * evalPoly f x\n\u003c/pre\u003e",
        "fct-module": "Math.Polynomial",
        "fct-package": "polynomial",
        "fct-signature": "a -\u003e Poly a -\u003e Poly a",
        "fct-source": "src/Math-Polynomial.html#scalePoly",
        "fct-type": "function",
        "title": "scalePoly"
      },
      "index": {
        "description": "Given some scalar and polynomial computes the polynomial such that evalPoly evalPoly",
        "hierarchy": "Math Polynomial",
        "module": "Math.Polynomial",
        "name": "scalePoly",
        "normalized": "a-\u003ePoly a-\u003ePoly a",
        "package": "polynomial",
        "partial": "Poly",
        "signature": "a-\u003ePoly a-\u003ePoly a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial.html#v:separateRoots",
      "description": {
        "fct-descr": "\u003cp\u003eSeparate a nonzero polynomial into a set of factors none of which have\n multiple roots, and the product of which is the original polynomial.\n Note that if division is not exact, it may fail to separate roots.  \n Rational coefficients is a good idea.\n\u003c/p\u003e\u003cp\u003eUseful when applicable as a way to simplify root-finding problems.\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial",
        "fct-package": "polynomial",
        "fct-signature": "Poly a -\u003e [Poly a]",
        "fct-source": "src/Math-Polynomial.html#separateRoots",
        "fct-type": "function",
        "title": "separateRoots"
      },
      "index": {
        "description": "Separate nonzero polynomial into set of factors none of which have multiple roots and the product of which is the original polynomial Note that if division is not exact it may fail to separate roots Rational coefficients is good idea Useful when applicable as way to simplify root-finding problems",
        "hierarchy": "Math Polynomial",
        "module": "Math.Polynomial",
        "name": "separateRoots",
        "normalized": "Poly a-\u003e[Poly a]",
        "package": "polynomial",
        "partial": "Roots",
        "signature": "Poly a-\u003e[Poly a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial.html#v:sumPolys",
      "description": {
        "fct-module": "Math.Polynomial",
        "fct-package": "polynomial",
        "fct-signature": "[Poly a] -\u003e Poly a",
        "fct-source": "src/Math-Polynomial.html#sumPolys",
        "fct-type": "function",
        "title": "sumPolys"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Polynomial",
        "module": "Math.Polynomial",
        "name": "sumPolys",
        "normalized": "[Poly a]-\u003ePoly a",
        "package": "polynomial",
        "partial": "Polys",
        "signature": "[Poly a]-\u003ePoly a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial.html#v:x",
      "description": {
        "fct-descr": "\u003cp\u003eThe polynomial (in x) \"x\"\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial",
        "fct-package": "polynomial",
        "fct-signature": "Poly a",
        "fct-source": "src/Math-Polynomial.html#x",
        "fct-type": "function",
        "title": "x"
      },
      "index": {
        "description": "The polynomial in",
        "hierarchy": "Math Polynomial",
        "module": "Math.Polynomial",
        "name": "x",
        "normalized": "",
        "package": "polynomial",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/polynomial/docs/Math-Polynomial.html#v:zero",
      "description": {
        "fct-descr": "\u003cp\u003eThe polynomial \"0\"\n\u003c/p\u003e",
        "fct-module": "Math.Polynomial",
        "fct-package": "polynomial",
        "fct-signature": "Poly a",
        "fct-source": "src/Math-Polynomial-Type.html#zero",
        "fct-type": "function",
        "title": "zero"
      },
      "index": {
        "description": "The polynomial",
        "hierarchy": "Math Polynomial",
        "module": "Math.Polynomial",
        "name": "zero",
        "normalized": "",
        "package": "polynomial",
        "partial": "",
        "signature": ""
      }
    }
  }
]