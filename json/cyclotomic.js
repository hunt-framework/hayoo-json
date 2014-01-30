[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cyclotomic/docs/Data-Complex-Cyclotomic.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe cyclotomic numbers are a subset of the complex numbers with\nthe following properties:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e  The cyclotomic numbers are represented exactly, enabling exact\n     computations and equality comparisons.\n\u003c/li\u003e\u003cli\u003e  The cyclotomic numbers contain the Gaussian rationals\n     (complex numbers of the form \u003ccode\u003ep\u003c/code\u003e + \u003ccode\u003eq\u003c/code\u003e \u003ccode\u003e\u003ca\u003ei\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003ep\u003c/code\u003e and \u003ccode\u003eq\u003c/code\u003e rational).\n     As a consequence, the cyclotomic numbers are a dense subset of the\n     complex numbers.\n\u003c/li\u003e\u003cli\u003e  The cyclotomic numbers contain the square roots of all rational numbers.\n\u003c/li\u003e\u003cli\u003e  The cyclotomic numbers form a field:  they are closed under addition, subtraction,\n     multiplication, and division.\n\u003c/li\u003e\u003cli\u003e  The cyclotomic numbers contain the sine and cosine of all rational\n     multiples of pi.\n\u003c/li\u003e\u003cli\u003e  The cyclotomic numbers can be thought of as the rational field extended\n     with \u003ccode\u003en\u003c/code\u003eth roots of unity for arbitrarily large integers \u003ccode\u003en\u003c/code\u003e.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eFloating point numbers do not do well with equality comparison:\n\u003c/p\u003e\u003cpre\u003e(sqrt 2 + sqrt 3)^2 == 5 + 2 * sqrt 6\n -\u003e False\n\u003c/pre\u003e\u003cp\u003e\u003ca\u003eData.Complex.Cyclotomic\u003c/a\u003e represents these numbers exactly, allowing equality comparison:\n\u003c/p\u003e\u003cpre\u003e(sqrtRat 2 + sqrtRat 3)^2 == 5 + 2 * sqrtRat 6\n -\u003e True\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eCyclotomic\u003c/a\u003e\u003c/code\u003es can be exported as inexact complex numbers using the \u003ccode\u003e\u003ca\u003etoComplex\u003c/a\u003e\u003c/code\u003e function:\n\u003c/p\u003e\u003cpre\u003ee 6\n -\u003e -e(3)^2\nreal $ e 6\n -\u003e 1/2\nimag $ e 6\n -\u003e -1/2*e(12)^7 + 1/2*e(12)^11\nimag (e 6) == sqrtRat 3 / 2\n -\u003e True\ntoComplex $ e 6\n -\u003e 0.5000000000000003 :+ 0.8660254037844384\n\u003c/pre\u003e\u003cp\u003eThe algorithms for cyclotomic numbers are adapted from code by\n     Martin Schoenert and Thomas Breuer in the GAP project \u003ca\u003ehttp://www.gap-system.org/\u003c/a\u003e\n     (in particular source files gap4r4/src/cyclotom.c and\n     gap4r4/lib/cyclotom.gi).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Complex.Cyclotomic",
        "fct-package": "cyclotomic",
        "fct-signature": "module",
        "fct-source": "src/Data-Complex-Cyclotomic.html",
        "fct-type": "module",
        "title": "Cyclotomic"
      },
      "index": {
        "description": "The cyclotomic numbers are subset of the complex numbers with the following properties The cyclotomic numbers are represented exactly enabling exact computations and equality comparisons The cyclotomic numbers contain the Gaussian rationals complex numbers of the form with and rational As consequence the cyclotomic numbers are dense subset of the complex numbers The cyclotomic numbers contain the square roots of all rational numbers The cyclotomic numbers form field they are closed under addition subtraction multiplication and division The cyclotomic numbers contain the sine and cosine of all rational multiples of pi The cyclotomic numbers can be thought of as the rational field extended with th roots of unity for arbitrarily large integers Floating point numbers do not do well with equality comparison sqrt sqrt sqrt False Data.Complex.Cyclotomic represents these numbers exactly allowing equality comparison sqrtRat sqrtRat sqrtRat True Cyclotomic can be exported as inexact complex numbers using the toComplex function real imag imag sqrtRat True toComplex The algorithms for cyclotomic numbers are adapted from code by Martin Schoenert and Thomas Breuer in the GAP project http www.gap-system.org in particular source files gap4r4 src cyclotom.c and gap4r4 lib cyclotom.gi",
        "hierarchy": "Data Complex Cyclotomic",
        "module": "Data.Complex.Cyclotomic",
        "name": "Cyclotomic",
        "normalized": "",
        "package": "cyclotomic",
        "partial": "Cyclotomic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cyclotomic/docs/Data-Complex-Cyclotomic.html#t:Cyclotomic",
      "description": {
        "fct-descr": "\u003cp\u003eA cyclotomic number.\n\u003c/p\u003e",
        "fct-module": "Data.Complex.Cyclotomic",
        "fct-package": "cyclotomic",
        "fct-signature": "data",
        "fct-source": "src/Data-Complex-Cyclotomic.html#Cyclotomic",
        "fct-type": "data",
        "title": "Cyclotomic"
      },
      "index": {
        "description": "cyclotomic number",
        "hierarchy": "Data Complex Cyclotomic",
        "module": "Data.Complex.Cyclotomic",
        "name": "Cyclotomic",
        "normalized": "",
        "package": "cyclotomic",
        "partial": "Cyclotomic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cyclotomic/docs/Data-Complex-Cyclotomic.html#v:conj",
      "description": {
        "fct-descr": "\u003cp\u003eComplex conjugate.\n\u003c/p\u003e",
        "fct-module": "Data.Complex.Cyclotomic",
        "fct-package": "cyclotomic",
        "fct-signature": "Cyclotomic -\u003e Cyclotomic",
        "fct-source": "src/Data-Complex-Cyclotomic.html#conj",
        "fct-type": "function",
        "title": "conj"
      },
      "index": {
        "description": "Complex conjugate",
        "hierarchy": "Data Complex Cyclotomic",
        "module": "Data.Complex.Cyclotomic",
        "name": "conj",
        "normalized": "Cyclotomic-\u003eCyclotomic",
        "package": "cyclotomic",
        "partial": "",
        "signature": "Cyclotomic-\u003eCyclotomic"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cyclotomic/docs/Data-Complex-Cyclotomic.html#v:cosDeg",
      "description": {
        "fct-descr": "\u003cp\u003eCosine function with argument in degrees.\n\u003c/p\u003e",
        "fct-module": "Data.Complex.Cyclotomic",
        "fct-package": "cyclotomic",
        "fct-signature": "Rational -\u003e Cyclotomic",
        "fct-source": "src/Data-Complex-Cyclotomic.html#cosDeg",
        "fct-type": "function",
        "title": "cosDeg"
      },
      "index": {
        "description": "Cosine function with argument in degrees",
        "hierarchy": "Data Complex Cyclotomic",
        "module": "Data.Complex.Cyclotomic",
        "name": "cosDeg",
        "normalized": "Rational-\u003eCyclotomic",
        "package": "cyclotomic",
        "partial": "Deg",
        "signature": "Rational-\u003eCyclotomic"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cyclotomic/docs/Data-Complex-Cyclotomic.html#v:cosRev",
      "description": {
        "fct-descr": "\u003cp\u003eCosine function with argument in revolutions.\n\u003c/p\u003e",
        "fct-module": "Data.Complex.Cyclotomic",
        "fct-package": "cyclotomic",
        "fct-signature": "Rational -\u003e Cyclotomic",
        "fct-source": "src/Data-Complex-Cyclotomic.html#cosRev",
        "fct-type": "function",
        "title": "cosRev"
      },
      "index": {
        "description": "Cosine function with argument in revolutions",
        "hierarchy": "Data Complex Cyclotomic",
        "module": "Data.Complex.Cyclotomic",
        "name": "cosRev",
        "normalized": "Rational-\u003eCyclotomic",
        "package": "cyclotomic",
        "partial": "Rev",
        "signature": "Rational-\u003eCyclotomic"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cyclotomic/docs/Data-Complex-Cyclotomic.html#v:dft",
      "description": {
        "fct-descr": "\u003cp\u003eDiscrete Fourier transform,\n   \u003ccode\u003eX_k = sum_{n=0}^{N-1} x_n cdot e^{-i 2 pi frac{k}{N} n}\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Complex.Cyclotomic",
        "fct-package": "cyclotomic",
        "fct-signature": "[Cyclotomic] -\u003e [Cyclotomic]",
        "fct-source": "src/Data-Complex-Cyclotomic.html#dft",
        "fct-type": "function",
        "title": "dft"
      },
      "index": {
        "description": "Discrete Fourier transform sum N-1 cdot pi frac",
        "hierarchy": "Data Complex Cyclotomic",
        "module": "Data.Complex.Cyclotomic",
        "name": "dft",
        "normalized": "[Cyclotomic]-\u003e[Cyclotomic]",
        "package": "cyclotomic",
        "partial": "",
        "signature": "[Cyclotomic]-\u003e[Cyclotomic]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cyclotomic/docs/Data-Complex-Cyclotomic.html#v:dftInv",
      "description": {
        "fct-descr": "\u003cp\u003eInverse discrete Fourier transform,\n   \u003ccode\u003ex_n = frac{1}{N} sum_{k=0}^{N-1} X_k cdot e^{i 2 pi frac{k}{N} n}\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Complex.Cyclotomic",
        "fct-package": "cyclotomic",
        "fct-signature": "[Cyclotomic] -\u003e [Cyclotomic]",
        "fct-source": "src/Data-Complex-Cyclotomic.html#dftInv",
        "fct-type": "function",
        "title": "dftInv"
      },
      "index": {
        "description": "Inverse discrete Fourier transform frac sum N-1 cdot pi frac",
        "hierarchy": "Data Complex Cyclotomic",
        "module": "Data.Complex.Cyclotomic",
        "name": "dftInv",
        "normalized": "[Cyclotomic]-\u003e[Cyclotomic]",
        "package": "cyclotomic",
        "partial": "Inv",
        "signature": "[Cyclotomic]-\u003e[Cyclotomic]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cyclotomic/docs/Data-Complex-Cyclotomic.html#v:e",
      "description": {
        "fct-descr": "\u003cp\u003eThe primitive \u003ccode\u003en\u003c/code\u003eth root of unity.\n   For example, \u003ccode\u003e\u003ccode\u003e\u003ca\u003ee\u003c/a\u003e\u003c/code\u003e(4) = \u003ccode\u003e\u003ca\u003ei\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e is the primitive 4th root of unity,\n   and \u003ccode\u003e\u003ca\u003ee\u003c/a\u003e\u003c/code\u003e(5) = exp(2*pi*i/5) is the primitive 5th root of unity.\n   In general, \u003ccode\u003e\u003ca\u003ee\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en\u003c/code\u003e = exp(2*pi*i/\u003ccode\u003en\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Data.Complex.Cyclotomic",
        "fct-package": "cyclotomic",
        "fct-signature": "Integer -\u003e Cyclotomic",
        "fct-source": "src/Data-Complex-Cyclotomic.html#e",
        "fct-type": "function",
        "title": "e"
      },
      "index": {
        "description": "The primitive th root of unity For example is the primitive th root of unity and exp pi is the primitive th root of unity In general exp pi",
        "hierarchy": "Data Complex Cyclotomic",
        "module": "Data.Complex.Cyclotomic",
        "name": "e",
        "normalized": "Integer-\u003eCyclotomic",
        "package": "cyclotomic",
        "partial": "",
        "signature": "Integer-\u003eCyclotomic"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cyclotomic/docs/Data-Complex-Cyclotomic.html#v:gaussianRat",
      "description": {
        "fct-descr": "\u003cp\u003eMake a Gaussian rational; \u003ccode\u003egaussianRat p q\u003c/code\u003e is the same as \u003ccode\u003ep + q * i\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Complex.Cyclotomic",
        "fct-package": "cyclotomic",
        "fct-signature": "Rational -\u003e Rational -\u003e Cyclotomic",
        "fct-source": "src/Data-Complex-Cyclotomic.html#gaussianRat",
        "fct-type": "function",
        "title": "gaussianRat"
      },
      "index": {
        "description": "Make Gaussian rational gaussianRat is the same as",
        "hierarchy": "Data Complex Cyclotomic",
        "module": "Data.Complex.Cyclotomic",
        "name": "gaussianRat",
        "normalized": "Rational-\u003eRational-\u003eCyclotomic",
        "package": "cyclotomic",
        "partial": "Rat",
        "signature": "Rational-\u003eRational-\u003eCyclotomic"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cyclotomic/docs/Data-Complex-Cyclotomic.html#v:goldenRatio",
      "description": {
        "fct-descr": "\u003cp\u003eThe golden ratio, \u003ccode\u003e(1 + &#8730;5)/2\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Complex.Cyclotomic",
        "fct-package": "cyclotomic",
        "fct-signature": "Cyclotomic",
        "fct-source": "src/Data-Complex-Cyclotomic.html#goldenRatio",
        "fct-type": "function",
        "title": "goldenRatio"
      },
      "index": {
        "description": "The golden ratio",
        "hierarchy": "Data Complex Cyclotomic",
        "module": "Data.Complex.Cyclotomic",
        "name": "goldenRatio",
        "normalized": "",
        "package": "cyclotomic",
        "partial": "Ratio",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cyclotomic/docs/Data-Complex-Cyclotomic.html#v:i",
      "description": {
        "fct-descr": "\u003cp\u003eThe square root of -1.\n\u003c/p\u003e",
        "fct-module": "Data.Complex.Cyclotomic",
        "fct-package": "cyclotomic",
        "fct-signature": "Cyclotomic",
        "fct-source": "src/Data-Complex-Cyclotomic.html#i",
        "fct-type": "function",
        "title": "i"
      },
      "index": {
        "description": "The square root of",
        "hierarchy": "Data Complex Cyclotomic",
        "module": "Data.Complex.Cyclotomic",
        "name": "i",
        "normalized": "",
        "package": "cyclotomic",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cyclotomic/docs/Data-Complex-Cyclotomic.html#v:imag",
      "description": {
        "fct-descr": "\u003cp\u003eImaginary part of the cyclotomic number.\n\u003c/p\u003e",
        "fct-module": "Data.Complex.Cyclotomic",
        "fct-package": "cyclotomic",
        "fct-signature": "Cyclotomic -\u003e Cyclotomic",
        "fct-source": "src/Data-Complex-Cyclotomic.html#imag",
        "fct-type": "function",
        "title": "imag"
      },
      "index": {
        "description": "Imaginary part of the cyclotomic number",
        "hierarchy": "Data Complex Cyclotomic",
        "module": "Data.Complex.Cyclotomic",
        "name": "imag",
        "normalized": "Cyclotomic-\u003eCyclotomic",
        "package": "cyclotomic",
        "partial": "",
        "signature": "Cyclotomic-\u003eCyclotomic"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cyclotomic/docs/Data-Complex-Cyclotomic.html#v:isGaussianRat",
      "description": {
        "fct-descr": "\u003cp\u003eIs the cyclotomic a Gaussian rational?\n\u003c/p\u003e",
        "fct-module": "Data.Complex.Cyclotomic",
        "fct-package": "cyclotomic",
        "fct-signature": "Cyclotomic -\u003e Bool",
        "fct-source": "src/Data-Complex-Cyclotomic.html#isGaussianRat",
        "fct-type": "function",
        "title": "isGaussianRat"
      },
      "index": {
        "description": "Is the cyclotomic Gaussian rational",
        "hierarchy": "Data Complex Cyclotomic",
        "module": "Data.Complex.Cyclotomic",
        "name": "isGaussianRat",
        "normalized": "Cyclotomic-\u003eBool",
        "package": "cyclotomic",
        "partial": "Gaussian Rat",
        "signature": "Cyclotomic-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cyclotomic/docs/Data-Complex-Cyclotomic.html#v:isRat",
      "description": {
        "fct-descr": "\u003cp\u003eIs the cyclotomic a rational?\n\u003c/p\u003e",
        "fct-module": "Data.Complex.Cyclotomic",
        "fct-package": "cyclotomic",
        "fct-signature": "Cyclotomic -\u003e Bool",
        "fct-source": "src/Data-Complex-Cyclotomic.html#isRat",
        "fct-type": "function",
        "title": "isRat"
      },
      "index": {
        "description": "Is the cyclotomic rational",
        "hierarchy": "Data Complex Cyclotomic",
        "module": "Data.Complex.Cyclotomic",
        "name": "isRat",
        "normalized": "Cyclotomic-\u003eBool",
        "package": "cyclotomic",
        "partial": "Rat",
        "signature": "Cyclotomic-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cyclotomic/docs/Data-Complex-Cyclotomic.html#v:isReal",
      "description": {
        "fct-descr": "\u003cp\u003eIs the cyclotomic a real number?\n\u003c/p\u003e",
        "fct-module": "Data.Complex.Cyclotomic",
        "fct-package": "cyclotomic",
        "fct-signature": "Cyclotomic -\u003e Bool",
        "fct-source": "src/Data-Complex-Cyclotomic.html#isReal",
        "fct-type": "function",
        "title": "isReal"
      },
      "index": {
        "description": "Is the cyclotomic real number",
        "hierarchy": "Data Complex Cyclotomic",
        "module": "Data.Complex.Cyclotomic",
        "name": "isReal",
        "normalized": "Cyclotomic-\u003eBool",
        "package": "cyclotomic",
        "partial": "Real",
        "signature": "Cyclotomic-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cyclotomic/docs/Data-Complex-Cyclotomic.html#v:polarRat",
      "description": {
        "fct-descr": "\u003cp\u003eA complex number in polar form, with rational magnitude \u003ccode\u003er\u003c/code\u003e and rational angle \u003ccode\u003es\u003c/code\u003e\n   of the form \u003ccode\u003er * exp(2*pi*i*s)\u003c/code\u003e; \u003ccode\u003epolarRat r s\u003c/code\u003e is the same as \u003ccode\u003er * e q ^ p\u003c/code\u003e,\n   where \u003ccode\u003es = p/q\u003c/code\u003e.  This function is the same as \u003ccode\u003e\u003ca\u003epolarRatRev\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Complex.Cyclotomic",
        "fct-package": "cyclotomic",
        "fct-signature": "Rational-\u003e Rational-\u003e Cyclotomic",
        "fct-type": "function",
        "title": "polarRat"
      },
      "index": {
        "description": "complex number in polar form with rational magnitude and rational angle of the form exp pi polarRat is the same as where This function is the same as polarRatRev",
        "hierarchy": "Data Complex Cyclotomic",
        "module": "Data.Complex.Cyclotomic",
        "name": "polarRat",
        "normalized": "Rational-\u003eRational-\u003eCyclotomic",
        "package": "cyclotomic",
        "partial": "Rat",
        "signature": "Rational-\u003eRational-\u003eCyclotomic"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cyclotomic/docs/Data-Complex-Cyclotomic.html#v:polarRatDeg",
      "description": {
        "fct-descr": "\u003cp\u003eA complex number in polar form, with rational magnitude and rational angle\n   in degrees.\n\u003c/p\u003e",
        "fct-module": "Data.Complex.Cyclotomic",
        "fct-package": "cyclotomic",
        "fct-signature": "Rational-\u003e Rational-\u003e Cyclotomic",
        "fct-type": "function",
        "title": "polarRatDeg"
      },
      "index": {
        "description": "complex number in polar form with rational magnitude and rational angle in degrees",
        "hierarchy": "Data Complex Cyclotomic",
        "module": "Data.Complex.Cyclotomic",
        "name": "polarRatDeg",
        "normalized": "Rational-\u003eRational-\u003eCyclotomic",
        "package": "cyclotomic",
        "partial": "Rat Deg",
        "signature": "Rational-\u003eRational-\u003eCyclotomic"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cyclotomic/docs/Data-Complex-Cyclotomic.html#v:polarRatRev",
      "description": {
        "fct-descr": "\u003cp\u003eA complex number in polar form, with rational magnitude and rational angle\n   in revolutions.\n\u003c/p\u003e",
        "fct-module": "Data.Complex.Cyclotomic",
        "fct-package": "cyclotomic",
        "fct-signature": "Rational-\u003e Rational-\u003e Cyclotomic",
        "fct-type": "function",
        "title": "polarRatRev"
      },
      "index": {
        "description": "complex number in polar form with rational magnitude and rational angle in revolutions",
        "hierarchy": "Data Complex Cyclotomic",
        "module": "Data.Complex.Cyclotomic",
        "name": "polarRatRev",
        "normalized": "Rational-\u003eRational-\u003eCyclotomic",
        "package": "cyclotomic",
        "partial": "Rat Rev",
        "signature": "Rational-\u003eRational-\u003eCyclotomic"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cyclotomic/docs/Data-Complex-Cyclotomic.html#v:real",
      "description": {
        "fct-descr": "\u003cp\u003eReal part of the cyclotomic number.\n\u003c/p\u003e",
        "fct-module": "Data.Complex.Cyclotomic",
        "fct-package": "cyclotomic",
        "fct-signature": "Cyclotomic -\u003e Cyclotomic",
        "fct-source": "src/Data-Complex-Cyclotomic.html#real",
        "fct-type": "function",
        "title": "real"
      },
      "index": {
        "description": "Real part of the cyclotomic number",
        "hierarchy": "Data Complex Cyclotomic",
        "module": "Data.Complex.Cyclotomic",
        "name": "real",
        "normalized": "Cyclotomic-\u003eCyclotomic",
        "package": "cyclotomic",
        "partial": "",
        "signature": "Cyclotomic-\u003eCyclotomic"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cyclotomic/docs/Data-Complex-Cyclotomic.html#v:sinDeg",
      "description": {
        "fct-descr": "\u003cp\u003eSine function with argument in degrees.\n\u003c/p\u003e",
        "fct-module": "Data.Complex.Cyclotomic",
        "fct-package": "cyclotomic",
        "fct-signature": "Rational -\u003e Cyclotomic",
        "fct-source": "src/Data-Complex-Cyclotomic.html#sinDeg",
        "fct-type": "function",
        "title": "sinDeg"
      },
      "index": {
        "description": "Sine function with argument in degrees",
        "hierarchy": "Data Complex Cyclotomic",
        "module": "Data.Complex.Cyclotomic",
        "name": "sinDeg",
        "normalized": "Rational-\u003eCyclotomic",
        "package": "cyclotomic",
        "partial": "Deg",
        "signature": "Rational-\u003eCyclotomic"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cyclotomic/docs/Data-Complex-Cyclotomic.html#v:sinRev",
      "description": {
        "fct-descr": "\u003cp\u003eSine function with argument in revolutions.\n\u003c/p\u003e",
        "fct-module": "Data.Complex.Cyclotomic",
        "fct-package": "cyclotomic",
        "fct-signature": "Rational -\u003e Cyclotomic",
        "fct-source": "src/Data-Complex-Cyclotomic.html#sinRev",
        "fct-type": "function",
        "title": "sinRev"
      },
      "index": {
        "description": "Sine function with argument in revolutions",
        "hierarchy": "Data Complex Cyclotomic",
        "module": "Data.Complex.Cyclotomic",
        "name": "sinRev",
        "normalized": "Rational-\u003eCyclotomic",
        "package": "cyclotomic",
        "partial": "Rev",
        "signature": "Rational-\u003eCyclotomic"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cyclotomic/docs/Data-Complex-Cyclotomic.html#v:sqrtInteger",
      "description": {
        "fct-descr": "\u003cp\u003eThe square root of an \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Complex.Cyclotomic",
        "fct-package": "cyclotomic",
        "fct-signature": "Integer -\u003e Cyclotomic",
        "fct-source": "src/Data-Complex-Cyclotomic.html#sqrtInteger",
        "fct-type": "function",
        "title": "sqrtInteger"
      },
      "index": {
        "description": "The square root of an Integer",
        "hierarchy": "Data Complex Cyclotomic",
        "module": "Data.Complex.Cyclotomic",
        "name": "sqrtInteger",
        "normalized": "Integer-\u003eCyclotomic",
        "package": "cyclotomic",
        "partial": "Integer",
        "signature": "Integer-\u003eCyclotomic"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cyclotomic/docs/Data-Complex-Cyclotomic.html#v:sqrtRat",
      "description": {
        "fct-descr": "\u003cp\u003eThe square root of a \u003ccode\u003e\u003ca\u003eRational\u003c/a\u003e\u003c/code\u003e number.\n\u003c/p\u003e",
        "fct-module": "Data.Complex.Cyclotomic",
        "fct-package": "cyclotomic",
        "fct-signature": "Rational -\u003e Cyclotomic",
        "fct-source": "src/Data-Complex-Cyclotomic.html#sqrtRat",
        "fct-type": "function",
        "title": "sqrtRat"
      },
      "index": {
        "description": "The square root of Rational number",
        "hierarchy": "Data Complex Cyclotomic",
        "module": "Data.Complex.Cyclotomic",
        "name": "sqrtRat",
        "normalized": "Rational-\u003eCyclotomic",
        "package": "cyclotomic",
        "partial": "Rat",
        "signature": "Rational-\u003eCyclotomic"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cyclotomic/docs/Data-Complex-Cyclotomic.html#v:toComplex",
      "description": {
        "fct-descr": "\u003cp\u003eExport as an inexact complex number.\n\u003c/p\u003e",
        "fct-module": "Data.Complex.Cyclotomic",
        "fct-package": "cyclotomic",
        "fct-signature": "Cyclotomic -\u003e Complex Double",
        "fct-source": "src/Data-Complex-Cyclotomic.html#toComplex",
        "fct-type": "function",
        "title": "toComplex"
      },
      "index": {
        "description": "Export as an inexact complex number",
        "hierarchy": "Data Complex Cyclotomic",
        "module": "Data.Complex.Cyclotomic",
        "name": "toComplex",
        "normalized": "Cyclotomic-\u003eComplex Double",
        "package": "cyclotomic",
        "partial": "Complex",
        "signature": "Cyclotomic-\u003eComplex Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cyclotomic/docs/Data-Complex-Cyclotomic.html#v:toRat",
      "description": {
        "fct-descr": "\u003cp\u003eReturn an exact rational number if possible.\n\u003c/p\u003e",
        "fct-module": "Data.Complex.Cyclotomic",
        "fct-package": "cyclotomic",
        "fct-signature": "Cyclotomic -\u003e Maybe Rational",
        "fct-source": "src/Data-Complex-Cyclotomic.html#toRat",
        "fct-type": "function",
        "title": "toRat"
      },
      "index": {
        "description": "Return an exact rational number if possible",
        "hierarchy": "Data Complex Cyclotomic",
        "module": "Data.Complex.Cyclotomic",
        "name": "toRat",
        "normalized": "Cyclotomic-\u003eMaybe Rational",
        "package": "cyclotomic",
        "partial": "Rat",
        "signature": "Cyclotomic-\u003eMaybe Rational"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cyclotomic/docs/Data-Complex-Cyclotomic.html#v:toReal",
      "description": {
        "fct-descr": "\u003cp\u003eExport as an inexact real number if possible.\n\u003c/p\u003e",
        "fct-module": "Data.Complex.Cyclotomic",
        "fct-package": "cyclotomic",
        "fct-signature": "Cyclotomic -\u003e Maybe Double",
        "fct-source": "src/Data-Complex-Cyclotomic.html#toReal",
        "fct-type": "function",
        "title": "toReal"
      },
      "index": {
        "description": "Export as an inexact real number if possible",
        "hierarchy": "Data Complex Cyclotomic",
        "module": "Data.Complex.Cyclotomic",
        "name": "toReal",
        "normalized": "Cyclotomic-\u003eMaybe Double",
        "package": "cyclotomic",
        "partial": "Real",
        "signature": "Cyclotomic-\u003eMaybe Double"
      }
    }
  }
]