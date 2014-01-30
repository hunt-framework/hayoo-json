[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Algorithms.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplementations of various floating point algorithms.  Accuracy has not\nbeen extensively verified, and termination has not been proven.\n\u003c/p\u003e\u003cp\u003eEverything assumes that \u003ccode\u003e\u003ca\u003efloatRadix\u003c/a\u003e\u003c/code\u003e is 2.  This is *not* checked.\n\u003c/p\u003e\u003cp\u003eFunctions taking an \u003ccode\u003eaccuracy\u003c/code\u003e parameter may fail to terminate if\n\u003ccode\u003eaccuracy\u003c/code\u003e is too small.  Accuracy is measured in least significant\nbits, similarly to '(=~=)'.\n\u003c/p\u003e\u003cp\u003eIn this documentation, \u003cem\u003ebasic functionality\u003c/em\u003e denotes that methods used\nare from classes:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFurther, \u003cem\u003ebasic RealFloat functionality\u003c/em\u003e denotes \u003cem\u003ebasic functionality\u003c/em\u003e\nwith the addition of:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Anything in \u003ccode\u003e\u003ca\u003eRealFloat\u003c/a\u003e\u003c/code\u003e except for \u003ccode\u003e\u003ca\u003eatan2\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe intention behind the used functionality documentation is to help\nusers decide when it is appropriate to use these generic implementations\nto implement instances.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.VariablePrecision.Algorithms",
        "fct-package": "variable-precision",
        "fct-signature": "module",
        "fct-source": "src/Numeric-VariablePrecision-Algorithms.html",
        "fct-type": "module",
        "title": "Algorithms"
      },
      "index": {
        "description": "Implementations of various floating point algorithms Accuracy has not been extensively verified and termination has not been proven Everything assumes that floatRadix is This is not checked Functions taking an accuracy parameter may fail to terminate if accuracy is too small Accuracy is measured in least significant bits similarly to In this documentation basic functionality denotes that methods used are from classes Num Eq Ord Further basic RealFloat functionality denotes basic functionality with the addition of Anything in RealFloat except for atan2 The intention behind the used functionality documentation is to help users decide when it is appropriate to use these generic implementations to implement instances",
        "hierarchy": "Numeric VariablePrecision Algorithms",
        "module": "Numeric.VariablePrecision.Algorithms",
        "name": "Algorithms",
        "normalized": "",
        "package": "variable-precision",
        "partial": "Algorithms",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Algorithms.html#v:-61--126--61-",
      "description": {
        "fct-descr": "\u003cp\u003eApproximate equality.\n   \u003ccode\u003e(a =~= b) c\u003c/code\u003e when adding the difference to the larger in magnitude\n   changes at most \u003ccode\u003ec\u003c/code\u003e least significant mantissa bits.\n\u003c/p\u003e\u003cp\u003eUses only basic RealFloat functionality.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Algorithms",
        "fct-package": "variable-precision",
        "fct-signature": "a -\u003e a -\u003e Int -\u003e Bool",
        "fct-source": "src/Numeric-VariablePrecision-Algorithms.html#%3D~%3D",
        "fct-type": "function",
        "title": "(=~=)"
      },
      "index": {
        "description": "Approximate equality when adding the difference to the larger in magnitude changes at most least significant mantissa bits Uses only basic RealFloat functionality",
        "hierarchy": "Numeric VariablePrecision Algorithms",
        "module": "Numeric.VariablePrecision.Algorithms",
        "name": "(=~=) =~=",
        "normalized": "a-\u003ea-\u003eInt-\u003eBool",
        "package": "variable-precision",
        "partial": "",
        "signature": "a-\u003ea-\u003eInt-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Algorithms.html#v:genericExp",
      "description": {
        "fct-descr": "\u003cp\u003eCompute an exponential using power series.\n\u003c/p\u003e\u003cp\u003eUses basic RealFloat functionality, '(/)' and \u003ccode\u003e\u003ca\u003erecip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Algorithms",
        "fct-package": "variable-precision",
        "fct-signature": "Int-\u003e a-\u003e a",
        "fct-type": "function",
        "title": "genericExp"
      },
      "index": {
        "description": "Compute an exponential using power series Uses basic RealFloat functionality and recip",
        "hierarchy": "Numeric VariablePrecision Algorithms",
        "module": "Numeric.VariablePrecision.Algorithms",
        "name": "genericExp",
        "normalized": "Int-\u003ea-\u003ea",
        "package": "variable-precision",
        "partial": "Exp",
        "signature": "Int-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Algorithms.html#v:genericLog",
      "description": {
        "fct-descr": "\u003cp\u003eCompute a logarithm.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003egenericLog''\u003c/a\u003e\u003c/code\u003e for algorithmic references.\n\u003c/p\u003e\u003cp\u003eUses basic RealFloat functionality, \u003ccode\u003e\u003ca\u003esqrt\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erecip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Algorithms",
        "fct-package": "variable-precision",
        "fct-signature": "Int-\u003e a-\u003e a",
        "fct-type": "function",
        "title": "genericLog"
      },
      "index": {
        "description": "Compute logarithm See genericLog for algorithmic references Uses basic RealFloat functionality sqrt and recip",
        "hierarchy": "Numeric VariablePrecision Algorithms",
        "module": "Numeric.VariablePrecision.Algorithms",
        "name": "genericLog",
        "normalized": "Int-\u003ea-\u003ea",
        "package": "variable-precision",
        "partial": "Log",
        "signature": "Int-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Algorithms.html#v:genericLog-39-",
      "description": {
        "fct-descr": "\u003cp\u003eCompute a logarithm using decomposition and a value for \u003ccode\u003elog 2\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003egenericLog''\u003c/a\u003e\u003c/code\u003e for algorithmic references.\n\u003c/p\u003e\u003cp\u003eUses basic RealFloat functionality, \u003ccode\u003e\u003ca\u003esqrt\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003erecip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Algorithms",
        "fct-package": "variable-precision",
        "fct-signature": "Int-\u003e a-\u003e a-\u003e a",
        "fct-type": "function",
        "title": "genericLog'"
      },
      "index": {
        "description": "Compute logarithm using decomposition and value for log See genericLog for algorithmic references Uses basic RealFloat functionality sqrt and recip",
        "hierarchy": "Numeric VariablePrecision Algorithms",
        "module": "Numeric.VariablePrecision.Algorithms",
        "name": "genericLog'",
        "normalized": "Int-\u003ea-\u003ea-\u003ea",
        "package": "variable-precision",
        "partial": "Log'",
        "signature": "Int-\u003ea-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Algorithms.html#v:genericLog-39--39-",
      "description": {
        "fct-descr": "\u003cp\u003eCompute a logarithm for a value in [0.5,1) using the AGM method\n   as described in section 7 of\n   \u003cem\u003eThe Logarithmic Constant: log 2\u003c/em\u003e\n   Xavier Gourdon and Pascal Sebah, May 18, 2010,\n   \u003ca\u003ehttp://numbers.computation.free.fr/Constants/Log2/log2.ps\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThe precondition is not checked.\n\u003c/p\u003e\u003cp\u003eUses basic RealFloat functionality, \u003ccode\u003e\u003ca\u003esqrt\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003erecip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Algorithms",
        "fct-package": "variable-precision",
        "fct-signature": "Int-\u003e a-\u003e a",
        "fct-type": "function",
        "title": "genericLog''"
      },
      "index": {
        "description": "Compute logarithm for value in using the AGM method as described in section of The Logarithmic Constant log Xavier Gourdon and Pascal Sebah May http numbers.computation.free.fr Constants Log2 log2.ps The precondition is not checked Uses basic RealFloat functionality sqrt and recip",
        "hierarchy": "Numeric VariablePrecision Algorithms",
        "module": "Numeric.VariablePrecision.Algorithms",
        "name": "genericLog''",
        "normalized": "Int-\u003ea-\u003ea",
        "package": "variable-precision",
        "partial": "Log''",
        "signature": "Int-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Algorithms.html#v:genericLog2",
      "description": {
        "fct-descr": "\u003cp\u003eCompute log 2.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003egenericLog''\u003c/a\u003e\u003c/code\u003e for algorithmic references.\n\u003c/p\u003e\u003cp\u003eUses basic RealFloat functionality, \u003ccode\u003e\u003ca\u003esqrt\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erecip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Algorithms",
        "fct-package": "variable-precision",
        "fct-signature": "Int-\u003e a",
        "fct-type": "function",
        "title": "genericLog2"
      },
      "index": {
        "description": "Compute log See genericLog for algorithmic references Uses basic RealFloat functionality sqrt and recip",
        "hierarchy": "Numeric VariablePrecision Algorithms",
        "module": "Numeric.VariablePrecision.Algorithms",
        "name": "genericLog2",
        "normalized": "Int-\u003ea",
        "package": "variable-precision",
        "partial": "Log",
        "signature": "Int-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Algorithms.html#v:genericNegativeInfinity",
      "description": {
        "fct-descr": "\u003cp\u003eSpecial values implemented using basic RealFloat functionality.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Algorithms",
        "fct-package": "variable-precision",
        "fct-signature": "a",
        "fct-source": "src/Numeric-VariablePrecision-Algorithms.html#genericNegativeInfinity",
        "fct-type": "function",
        "title": "genericNegativeInfinity"
      },
      "index": {
        "description": "Special values implemented using basic RealFloat functionality",
        "hierarchy": "Numeric VariablePrecision Algorithms",
        "module": "Numeric.VariablePrecision.Algorithms",
        "name": "genericNegativeInfinity",
        "normalized": "",
        "package": "variable-precision",
        "partial": "Negative Infinity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Algorithms.html#v:genericNegativeZero",
      "description": {
        "fct-descr": "\u003cp\u003eSpecial values implemented using basic RealFloat functionality.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Algorithms",
        "fct-package": "variable-precision",
        "fct-signature": "a",
        "fct-source": "src/Numeric-VariablePrecision-Algorithms.html#genericNegativeZero",
        "fct-type": "function",
        "title": "genericNegativeZero"
      },
      "index": {
        "description": "Special values implemented using basic RealFloat functionality",
        "hierarchy": "Numeric VariablePrecision Algorithms",
        "module": "Numeric.VariablePrecision.Algorithms",
        "name": "genericNegativeZero",
        "normalized": "",
        "package": "variable-precision",
        "partial": "Negative Zero",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Algorithms.html#v:genericNotANumber",
      "description": {
        "fct-descr": "\u003cp\u003eSpecial values implemented using basic RealFloat functionality.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Algorithms",
        "fct-package": "variable-precision",
        "fct-signature": "a",
        "fct-source": "src/Numeric-VariablePrecision-Algorithms.html#genericNotANumber",
        "fct-type": "function",
        "title": "genericNotANumber"
      },
      "index": {
        "description": "Special values implemented using basic RealFloat functionality",
        "hierarchy": "Numeric VariablePrecision Algorithms",
        "module": "Numeric.VariablePrecision.Algorithms",
        "name": "genericNotANumber",
        "normalized": "",
        "package": "variable-precision",
        "partial": "Not ANumber",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Algorithms.html#v:genericPi",
      "description": {
        "fct-descr": "\u003cp\u003eCompute pi using the method described in section 8 of\n   \u003cem\u003eMultiple-precision zero-finding methods and the complexity of elementary function evaluation\u003c/em\u003e\n   Richard P Brent, 1975 (revised May 30, 2010),\n   \u003ca\u003ehttp://arxiv.org/abs/1004.3412\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eUses basic RealFloat functionality, '(/)', and \u003ccode\u003e\u003ca\u003esqrt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Algorithms",
        "fct-package": "variable-precision",
        "fct-signature": "Int-\u003e a",
        "fct-type": "function",
        "title": "genericPi"
      },
      "index": {
        "description": "Compute pi using the method described in section of Multiple-precision zero-finding methods and the complexity of elementary function evaluation Richard Brent revised May http arxiv.org abs Uses basic RealFloat functionality and sqrt",
        "hierarchy": "Numeric VariablePrecision Algorithms",
        "module": "Numeric.VariablePrecision.Algorithms",
        "name": "genericPi",
        "normalized": "Int-\u003ea",
        "package": "variable-precision",
        "partial": "Pi",
        "signature": "Int-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Algorithms.html#v:genericPositiveInfinity",
      "description": {
        "fct-descr": "\u003cp\u003eSpecial values implemented using basic RealFloat functionality.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Algorithms",
        "fct-package": "variable-precision",
        "fct-signature": "a",
        "fct-source": "src/Numeric-VariablePrecision-Algorithms.html#genericPositiveInfinity",
        "fct-type": "function",
        "title": "genericPositiveInfinity"
      },
      "index": {
        "description": "Special values implemented using basic RealFloat functionality",
        "hierarchy": "Numeric VariablePrecision Algorithms",
        "module": "Numeric.VariablePrecision.Algorithms",
        "name": "genericPositiveInfinity",
        "normalized": "",
        "package": "variable-precision",
        "partial": "Positive Infinity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Algorithms.html#v:genericPositiveZero",
      "description": {
        "fct-descr": "\u003cp\u003eSpecial values implemented using basic RealFloat functionality.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Algorithms",
        "fct-package": "variable-precision",
        "fct-signature": "a",
        "fct-source": "src/Numeric-VariablePrecision-Algorithms.html#genericPositiveZero",
        "fct-type": "function",
        "title": "genericPositiveZero"
      },
      "index": {
        "description": "Special values implemented using basic RealFloat functionality",
        "hierarchy": "Numeric VariablePrecision Algorithms",
        "module": "Numeric.VariablePrecision.Algorithms",
        "name": "genericPositiveZero",
        "normalized": "",
        "package": "variable-precision",
        "partial": "Positive Zero",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Algorithms.html#v:genericRecip",
      "description": {
        "fct-descr": "\u003cp\u003eCompute a reciprocal using the Newton-Raphson division algorithm,\n   as described in\n   \u003ca\u003ehttp://en.wikipedia.org/wiki/Division_%28digital%29#Newton.E2.80.93Raphson_division\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eUses only basic RealFloat functionality.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Algorithms",
        "fct-package": "variable-precision",
        "fct-signature": "Int-\u003e a-\u003e a",
        "fct-type": "function",
        "title": "genericRecip"
      },
      "index": {
        "description": "Compute reciprocal using the Newton-Raphson division algorithm as described in http en.wikipedia.org wiki Division digital Newton.E2.80.93Raphson division Uses only basic RealFloat functionality",
        "hierarchy": "Numeric VariablePrecision Algorithms",
        "module": "Numeric.VariablePrecision.Algorithms",
        "name": "genericRecip",
        "normalized": "Int-\u003ea-\u003ea",
        "package": "variable-precision",
        "partial": "Recip",
        "signature": "Int-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Algorithms.html#v:genericSin",
      "description": {
        "fct-descr": "\u003cp\u003eCompute \u003ccode\u003e\u003ca\u003esin\u003c/a\u003e\u003c/code\u003e using the method described in section 3 of\n   \u003cem\u003eEfficient multiple-precision evaluation of elementary functions\u003c/em\u003e\n   David M Smith, 1989,\n   \u003ca\u003ehttp://digitalcommons.lmu.edu/math_fac/1/\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eRequires a value for pi.\n\u003c/p\u003e\u003cp\u003eUses basic RealFloat functionality, '(/)', and sqrt.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Algorithms",
        "fct-package": "variable-precision",
        "fct-signature": "Int-\u003e a-\u003e a-\u003e a",
        "fct-type": "function",
        "title": "genericSin"
      },
      "index": {
        "description": "Compute sin using the method described in section of Efficient multiple-precision evaluation of elementary functions David Smith http digitalcommons.lmu.edu math fac Requires value for pi Uses basic RealFloat functionality and sqrt",
        "hierarchy": "Numeric VariablePrecision Algorithms",
        "module": "Numeric.VariablePrecision.Algorithms",
        "name": "genericSin",
        "normalized": "Int-\u003ea-\u003ea-\u003ea",
        "package": "variable-precision",
        "partial": "Sin",
        "signature": "Int-\u003ea-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Algorithms.html#v:genericSqrt",
      "description": {
        "fct-descr": "\u003cp\u003eCompute a square root using Newton's method.\n\u003c/p\u003e\u003cp\u003eUses basic RealFloat functionality and '(/)'.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Algorithms",
        "fct-package": "variable-precision",
        "fct-signature": "Int-\u003e a-\u003e a",
        "fct-type": "function",
        "title": "genericSqrt"
      },
      "index": {
        "description": "Compute square root using Newton method Uses basic RealFloat functionality and",
        "hierarchy": "Numeric VariablePrecision Algorithms",
        "module": "Numeric.VariablePrecision.Algorithms",
        "name": "genericSqrt",
        "normalized": "Int-\u003ea-\u003ea",
        "package": "variable-precision",
        "partial": "Sqrt",
        "signature": "Int-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Algorithms.html#v:recodeFloat",
      "description": {
        "fct-descr": "\u003cp\u003eConvert between generic \u003ccode\u003e\u003ca\u003eRealFloat\u003c/a\u003e\u003c/code\u003e types more efficiently than\n   \u003ccode\u003e\u003ca\u003erealToFrac\u003c/a\u003e\u003c/code\u003e.  Tries hard to preserve special values like\n   infinities and negative zero, but any NaN payload is lost.\n\u003c/p\u003e\u003cp\u003eUses only basic RealFloat functionality.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Algorithms",
        "fct-package": "variable-precision",
        "fct-signature": "a -\u003e b",
        "fct-source": "src/Numeric-VariablePrecision-Algorithms.html#recodeFloat",
        "fct-type": "function",
        "title": "recodeFloat"
      },
      "index": {
        "description": "Convert between generic RealFloat types more efficiently than realToFrac Tries hard to preserve special values like infinities and negative zero but any NaN payload is lost Uses only basic RealFloat functionality",
        "hierarchy": "Numeric VariablePrecision Algorithms",
        "module": "Numeric.VariablePrecision.Algorithms",
        "name": "recodeFloat",
        "normalized": "a-\u003eb",
        "package": "variable-precision",
        "partial": "Float",
        "signature": "a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Algorithms.html#v:sameSign",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if two numbers have the same sign.\n   May give a nonsense result if an argument is NaN.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Algorithms",
        "fct-package": "variable-precision",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-source": "src/Numeric-VariablePrecision-Algorithms.html#sameSign",
        "fct-type": "function",
        "title": "sameSign"
      },
      "index": {
        "description": "Check if two numbers have the same sign May give nonsense result if an argument is NaN",
        "hierarchy": "Numeric VariablePrecision Algorithms",
        "module": "Numeric.VariablePrecision.Algorithms",
        "name": "sameSign",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "variable-precision",
        "partial": "Sign",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Algorithms.html#v:viaDouble",
      "description": {
        "fct-descr": "\u003cp\u003eLift a function from Double to generic \u003ccode\u003e\u003ca\u003eRealFloat\u003c/a\u003e\u003c/code\u003e types.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Algorithms",
        "fct-package": "variable-precision",
        "fct-signature": "(Double -\u003e Double) -\u003e a -\u003e b",
        "fct-source": "src/Numeric-VariablePrecision-Algorithms.html#viaDouble",
        "fct-type": "function",
        "title": "viaDouble"
      },
      "index": {
        "description": "Lift function from Double to generic RealFloat types",
        "hierarchy": "Numeric VariablePrecision Algorithms",
        "module": "Numeric.VariablePrecision.Algorithms",
        "name": "viaDouble",
        "normalized": "(Double-\u003eDouble)-\u003ea-\u003eb",
        "package": "variable-precision",
        "partial": "Double",
        "signature": "(Double-\u003eDouble)-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAliases for \u003ccode\u003e\u003ca\u003erecodeFloat\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erecodeComplex\u003c/a\u003e\u003c/code\u003e with specialized types.\n\u003c/p\u003e\u003cp\u003eAliases for commonly desired types.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "module",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html",
        "fct-type": "module",
        "title": "Aliases"
      },
      "index": {
        "description": "Aliases for recodeFloat and recodeComplex with specialized types Aliases for commonly desired types",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "Aliases",
        "normalized": "",
        "package": "variable-precision",
        "partial": "Aliases",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:C",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#C",
        "fct-type": "type",
        "title": "C"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "C",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:CF",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#CF",
        "fct-type": "type",
        "title": "CF"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "CF",
        "normalized": "",
        "package": "variable-precision",
        "partial": "CF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:CF16",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#CF16",
        "fct-type": "type",
        "title": "CF16"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "CF16",
        "normalized": "",
        "package": "variable-precision",
        "partial": "CF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:CF24",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#CF24",
        "fct-type": "type",
        "title": "CF24"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "CF24",
        "normalized": "",
        "package": "variable-precision",
        "partial": "CF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:CF32",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#CF32",
        "fct-type": "type",
        "title": "CF32"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "CF32",
        "normalized": "",
        "package": "variable-precision",
        "partial": "CF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:CF40",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#CF40",
        "fct-type": "type",
        "title": "CF40"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "CF40",
        "normalized": "",
        "package": "variable-precision",
        "partial": "CF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:CF48",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#CF48",
        "fct-type": "type",
        "title": "CF48"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "CF48",
        "normalized": "",
        "package": "variable-precision",
        "partial": "CF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:CF53",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#CF53",
        "fct-type": "type",
        "title": "CF53"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "CF53",
        "normalized": "",
        "package": "variable-precision",
        "partial": "CF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:CF8",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#CF8",
        "fct-type": "type",
        "title": "CF8"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "CF8",
        "normalized": "",
        "package": "variable-precision",
        "partial": "CF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:CX",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#CX",
        "fct-type": "type",
        "title": "CX"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "CX",
        "normalized": "",
        "package": "variable-precision",
        "partial": "CX",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:CX16",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#CX16",
        "fct-type": "type",
        "title": "CX16"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "CX16",
        "normalized": "",
        "package": "variable-precision",
        "partial": "CX",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:CX24",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#CX24",
        "fct-type": "type",
        "title": "CX24"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "CX24",
        "normalized": "",
        "package": "variable-precision",
        "partial": "CX",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:CX32",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#CX32",
        "fct-type": "type",
        "title": "CX32"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "CX32",
        "normalized": "",
        "package": "variable-precision",
        "partial": "CX",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:CX40",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#CX40",
        "fct-type": "type",
        "title": "CX40"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "CX40",
        "normalized": "",
        "package": "variable-precision",
        "partial": "CX",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:CX48",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#CX48",
        "fct-type": "type",
        "title": "CX48"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "CX48",
        "normalized": "",
        "package": "variable-precision",
        "partial": "CX",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:CX53",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#CX53",
        "fct-type": "type",
        "title": "CX53"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "CX53",
        "normalized": "",
        "package": "variable-precision",
        "partial": "CX",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:CX8",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#CX8",
        "fct-type": "type",
        "title": "CX8"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "CX8",
        "normalized": "",
        "package": "variable-precision",
        "partial": "CX",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:F",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#F",
        "fct-type": "type",
        "title": "F"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "F",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:F16",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#F16",
        "fct-type": "type",
        "title": "F16"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "F16",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:F24",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#F24",
        "fct-type": "type",
        "title": "F24"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "F24",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:F32",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#F32",
        "fct-type": "type",
        "title": "F32"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "F32",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:F40",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#F40",
        "fct-type": "type",
        "title": "F40"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "F40",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:F48",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#F48",
        "fct-type": "type",
        "title": "F48"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "F48",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:F53",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#F53",
        "fct-type": "type",
        "title": "F53"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "F53",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:F8",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#F8",
        "fct-type": "type",
        "title": "F8"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "F8",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:X",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#X",
        "fct-type": "type",
        "title": "X"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "X",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:X16",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#X16",
        "fct-type": "type",
        "title": "X16"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "X16",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:X24",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#X24",
        "fct-type": "type",
        "title": "X24"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "X24",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:X32",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#X32",
        "fct-type": "type",
        "title": "X32"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "X32",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:X40",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#X40",
        "fct-type": "type",
        "title": "X40"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "X40",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:X48",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#X48",
        "fct-type": "type",
        "title": "X48"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "X48",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:X53",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#X53",
        "fct-type": "type",
        "title": "X53"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "X53",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:X8",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#X8",
        "fct-type": "type",
        "title": "X8"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "X8",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:cf16",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "CF16",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#cf16",
        "fct-type": "function",
        "title": "cf16"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "cf16",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:cf24",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "CF24",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#cf24",
        "fct-type": "function",
        "title": "cf24"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "cf24",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:cf32",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "CF32",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#cf32",
        "fct-type": "function",
        "title": "cf32"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "cf32",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:cf40",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "CF40",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#cf40",
        "fct-type": "function",
        "title": "cf40"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "cf40",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:cf48",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "CF48",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#cf48",
        "fct-type": "function",
        "title": "cf48"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "cf48",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:cf53",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "CF53",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#cf53",
        "fct-type": "function",
        "title": "cf53"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "cf53",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:cf8",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "CF8",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#cf8",
        "fct-type": "function",
        "title": "cf8"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "cf8",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:cx16",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "CX16",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#cx16",
        "fct-type": "function",
        "title": "cx16"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "cx16",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:cx24",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "CX24",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#cx24",
        "fct-type": "function",
        "title": "cx24"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "cx24",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:cx32",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "CX32",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#cx32",
        "fct-type": "function",
        "title": "cx32"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "cx32",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:cx40",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "CX40",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#cx40",
        "fct-type": "function",
        "title": "cx40"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "cx40",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:cx48",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "CX48",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#cx48",
        "fct-type": "function",
        "title": "cx48"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "cx48",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:cx53",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "CX53",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#cx53",
        "fct-type": "function",
        "title": "cx53"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "cx53",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:cx8",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "CX8",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#cx8",
        "fct-type": "function",
        "title": "cx8"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "cx8",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:f16",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "F16",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#f16",
        "fct-type": "function",
        "title": "f16"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "f16",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:f24",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "F24",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#f24",
        "fct-type": "function",
        "title": "f24"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "f24",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:f32",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "F32",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#f32",
        "fct-type": "function",
        "title": "f32"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "f32",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:f40",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "F40",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#f40",
        "fct-type": "function",
        "title": "f40"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "f40",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:f48",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "F48",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#f48",
        "fct-type": "function",
        "title": "f48"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "f48",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:f53",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "F53",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#f53",
        "fct-type": "function",
        "title": "f53"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "f53",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:f8",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "F8",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#f8",
        "fct-type": "function",
        "title": "f8"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "f8",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:fromComplexDouble",
      "description": {
        "fct-descr": "\u003cp\u003eConvert from a Double to the same precision.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "Complex Double -\u003e CF53",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#fromComplexDouble",
        "fct-type": "function",
        "title": "fromComplexDouble"
      },
      "index": {
        "description": "Convert from Double to the same precision",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "fromComplexDouble",
        "normalized": "Complex Double-\u003eCF",
        "package": "variable-precision",
        "partial": "Complex Double",
        "signature": "Complex Double-\u003eCF"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:fromComplexFloat",
      "description": {
        "fct-descr": "\u003cp\u003eConvert from a Float to the same precision.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "Complex Float -\u003e CF24",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#fromComplexFloat",
        "fct-type": "function",
        "title": "fromComplexFloat"
      },
      "index": {
        "description": "Convert from Float to the same precision",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "fromComplexFloat",
        "normalized": "Complex Float-\u003eCF",
        "package": "variable-precision",
        "partial": "Complex Float",
        "signature": "Complex Float-\u003eCF"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:fromDouble",
      "description": {
        "fct-descr": "\u003cp\u003eConvert from a Double to the same precision.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "Double -\u003e F53",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#fromDouble",
        "fct-type": "function",
        "title": "fromDouble"
      },
      "index": {
        "description": "Convert from Double to the same precision",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "fromDouble",
        "normalized": "Double-\u003eF",
        "package": "variable-precision",
        "partial": "Double",
        "signature": "Double-\u003eF"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:fromFloat",
      "description": {
        "fct-descr": "\u003cp\u003eConvert from a Float to the same precision.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "Float -\u003e F24",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#fromFloat",
        "fct-type": "function",
        "title": "fromFloat"
      },
      "index": {
        "description": "Convert from Float to the same precision",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "fromFloat",
        "normalized": "Float-\u003eF",
        "package": "variable-precision",
        "partial": "Float",
        "signature": "Float-\u003eF"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:toComplexDouble",
      "description": {
        "fct-descr": "\u003cp\u003eConvert to a Double from the same precision.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "CF53 -\u003e Complex Double",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#toComplexDouble",
        "fct-type": "function",
        "title": "toComplexDouble"
      },
      "index": {
        "description": "Convert to Double from the same precision",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "toComplexDouble",
        "normalized": "CF-\u003eComplex Double",
        "package": "variable-precision",
        "partial": "Complex Double",
        "signature": "CF-\u003eComplex Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:toComplexFloat",
      "description": {
        "fct-descr": "\u003cp\u003eConvert to a Float from the same precision.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "CF24 -\u003e Complex Float",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#toComplexFloat",
        "fct-type": "function",
        "title": "toComplexFloat"
      },
      "index": {
        "description": "Convert to Float from the same precision",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "toComplexFloat",
        "normalized": "CF-\u003eComplex Float",
        "package": "variable-precision",
        "partial": "Complex Float",
        "signature": "CF-\u003eComplex Float"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:toDouble",
      "description": {
        "fct-descr": "\u003cp\u003eConvert to a Double from the same precision.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "F53 -\u003e Double",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#toDouble",
        "fct-type": "function",
        "title": "toDouble"
      },
      "index": {
        "description": "Convert to Double from the same precision",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "toDouble",
        "normalized": "F-\u003eDouble",
        "package": "variable-precision",
        "partial": "Double",
        "signature": "F-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:toFloat",
      "description": {
        "fct-descr": "\u003cp\u003eConvert to a Float from the same precision.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "F24 -\u003e Float",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#toFloat",
        "fct-type": "function",
        "title": "toFloat"
      },
      "index": {
        "description": "Convert to Float from the same precision",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "toFloat",
        "normalized": "F-\u003eFloat",
        "package": "variable-precision",
        "partial": "Float",
        "signature": "F-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:x16",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "X16",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#x16",
        "fct-type": "function",
        "title": "x16"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "x16",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:x24",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "X24",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#x24",
        "fct-type": "function",
        "title": "x24"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "x24",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:x32",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "X32",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#x32",
        "fct-type": "function",
        "title": "x32"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "x32",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:x40",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "X40",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#x40",
        "fct-type": "function",
        "title": "x40"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "x40",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:x48",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "X48",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#x48",
        "fct-type": "function",
        "title": "x48"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "x48",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:x53",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "X53",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#x53",
        "fct-type": "function",
        "title": "x53"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "x53",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:x8",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Aliases",
        "fct-package": "variable-precision",
        "fct-signature": "X8",
        "fct-source": "src/Numeric-VariablePrecision-Aliases.html#x8",
        "fct-type": "function",
        "title": "x8"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Aliases",
        "module": "Numeric.VariablePrecision.Aliases",
        "name": "x8",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Complex.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eComplex numbers with variable precision.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.VariablePrecision.Complex",
        "fct-package": "variable-precision",
        "fct-signature": "module",
        "fct-source": "src/Numeric-VariablePrecision-Complex.html",
        "fct-type": "module",
        "title": "Complex"
      },
      "index": {
        "description": "Complex numbers with variable precision",
        "hierarchy": "Numeric VariablePrecision Complex",
        "module": "Numeric.VariablePrecision.Complex",
        "name": "Complex",
        "normalized": "",
        "package": "variable-precision",
        "partial": "Complex",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Complex.html#t:VComplex",
      "description": {
        "fct-descr": "\u003cp\u003eNewtype wrapper around \u003ccode\u003e\u003ca\u003eComplex\u003c/a\u003e\u003c/code\u003e so that instances can be written\n   for \u003ccode\u003e\u003ca\u003eHasPrecision\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eVariablePrecision\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Complex",
        "fct-package": "variable-precision",
        "fct-signature": "data",
        "fct-source": "src/Numeric-VariablePrecision-Complex.html#VComplex",
        "fct-type": "data",
        "title": "VComplex"
      },
      "index": {
        "description": "Newtype wrapper around Complex so that instances can be written for HasPrecision and VariablePrecision",
        "hierarchy": "Numeric VariablePrecision Complex",
        "module": "Numeric.VariablePrecision.Complex",
        "name": "VComplex",
        "normalized": "",
        "package": "variable-precision",
        "partial": "VComplex",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Complex.html#v:fromComplex",
      "description": {
        "fct-descr": "\u003cp\u003eConvert \u003ccode\u003e\u003ca\u003eComplex\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eVComplex\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Complex",
        "fct-package": "variable-precision",
        "fct-signature": "Complex (t p) -\u003e VComplex t p",
        "fct-source": "src/Numeric-VariablePrecision-Complex.html#fromComplex",
        "fct-type": "function",
        "title": "fromComplex"
      },
      "index": {
        "description": "Convert Complex to VComplex",
        "hierarchy": "Numeric VariablePrecision Complex",
        "module": "Numeric.VariablePrecision.Complex",
        "name": "fromComplex",
        "normalized": "Complex(a b)-\u003eVComplex a b",
        "package": "variable-precision",
        "partial": "Complex",
        "signature": "Complex(t p)-\u003eVComplex t p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Complex.html#v:fromComplexDFixed",
      "description": {
        "fct-descr": "\u003cp\u003eThaw a 'Complex DFixed'.  Results in \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e on precision mismatch.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Complex",
        "fct-package": "variable-precision",
        "fct-signature": "Complex DFixed -\u003e Maybe (VComplex VFixed p)",
        "fct-source": "src/Numeric-VariablePrecision-Complex.html#fromComplexDFixed",
        "fct-type": "function",
        "title": "fromComplexDFixed"
      },
      "index": {
        "description": "Thaw Complex DFixed Results in Nothing on precision mismatch",
        "hierarchy": "Numeric VariablePrecision Complex",
        "module": "Numeric.VariablePrecision.Complex",
        "name": "fromComplexDFixed",
        "normalized": "Complex DFixed-\u003eMaybe(VComplex VFixed a)",
        "package": "variable-precision",
        "partial": "Complex DFixed",
        "signature": "Complex DFixed-\u003eMaybe(VComplex VFixed p)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Complex.html#v:fromComplexDFloat",
      "description": {
        "fct-descr": "\u003cp\u003eThaw a 'Complex DFloat'.  Results in \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e on precision mismatch.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Complex",
        "fct-package": "variable-precision",
        "fct-signature": "Complex DFloat -\u003e Maybe (VComplex VFloat p)",
        "fct-source": "src/Numeric-VariablePrecision-Complex.html#fromComplexDFloat",
        "fct-type": "function",
        "title": "fromComplexDFloat"
      },
      "index": {
        "description": "Thaw Complex DFloat Results in Nothing on precision mismatch",
        "hierarchy": "Numeric VariablePrecision Complex",
        "module": "Numeric.VariablePrecision.Complex",
        "name": "fromComplexDFloat",
        "normalized": "Complex DFloat-\u003eMaybe(VComplex VFloat a)",
        "package": "variable-precision",
        "partial": "Complex DFloat",
        "signature": "Complex DFloat-\u003eMaybe(VComplex VFloat p)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Complex.html#v:recodeComplex",
      "description": {
        "fct-descr": "\u003cp\u003eMuch like \u003ccode\u003emapComplex\u003c/code\u003e \u003ccode\u003e\u003ca\u003erecodeFloat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Complex",
        "fct-package": "variable-precision",
        "fct-signature": "Complex a -\u003e Complex b",
        "fct-source": "src/Numeric-VariablePrecision-Complex.html#recodeComplex",
        "fct-type": "function",
        "title": "recodeComplex"
      },
      "index": {
        "description": "Much like mapComplex recodeFloat",
        "hierarchy": "Numeric VariablePrecision Complex",
        "module": "Numeric.VariablePrecision.Complex",
        "name": "recodeComplex",
        "normalized": "Complex a-\u003eComplex b",
        "package": "variable-precision",
        "partial": "Complex",
        "signature": "Complex a-\u003eComplex b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Complex.html#v:scaleComplex",
      "description": {
        "fct-descr": "\u003cp\u003eMuch like \u003ccode\u003emapComplex\u003c/code\u003e \u003ccode\u003e\u003ca\u003escaleFloat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Complex",
        "fct-package": "variable-precision",
        "fct-signature": "Int -\u003e Complex r -\u003e Complex r",
        "fct-source": "src/Numeric-VariablePrecision-Complex.html#scaleComplex",
        "fct-type": "function",
        "title": "scaleComplex"
      },
      "index": {
        "description": "Much like mapComplex scaleFloat",
        "hierarchy": "Numeric VariablePrecision Complex",
        "module": "Numeric.VariablePrecision.Complex",
        "name": "scaleComplex",
        "normalized": "Int-\u003eComplex a-\u003eComplex a",
        "package": "variable-precision",
        "partial": "Complex",
        "signature": "Int-\u003eComplex r-\u003eComplex r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Complex.html#v:scaleVComplex",
      "description": {
        "fct-descr": "\u003cp\u003eMuch like \u003ccode\u003e\u003ca\u003ewithComplex\u003c/a\u003e\u003c/code\u003e \u003ccode\u003escaleComplex'\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Complex",
        "fct-package": "variable-precision",
        "fct-signature": "Int -\u003e VComplex VFloat p -\u003e VComplex VFloat p",
        "fct-source": "src/Numeric-VariablePrecision-Complex.html#scaleVComplex",
        "fct-type": "function",
        "title": "scaleVComplex"
      },
      "index": {
        "description": "Much like withComplex scaleComplex",
        "hierarchy": "Numeric VariablePrecision Complex",
        "module": "Numeric.VariablePrecision.Complex",
        "name": "scaleVComplex",
        "normalized": "Int-\u003eVComplex VFloat a-\u003eVComplex VFloat a",
        "package": "variable-precision",
        "partial": "VComplex",
        "signature": "Int-\u003eVComplex VFloat p-\u003eVComplex VFloat p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Complex.html#v:toComplex",
      "description": {
        "fct-descr": "\u003cp\u003eConvert \u003ccode\u003e\u003ca\u003eVComplex\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eComplex\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Complex",
        "fct-package": "variable-precision",
        "fct-signature": "VComplex t p -\u003e Complex (t p)",
        "fct-source": "src/Numeric-VariablePrecision-Complex.html#toComplex",
        "fct-type": "function",
        "title": "toComplex"
      },
      "index": {
        "description": "Convert VComplex to Complex",
        "hierarchy": "Numeric VariablePrecision Complex",
        "module": "Numeric.VariablePrecision.Complex",
        "name": "toComplex",
        "normalized": "VComplex a b-\u003eComplex(a b)",
        "package": "variable-precision",
        "partial": "Complex",
        "signature": "VComplex t p-\u003eComplex(t p)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Complex.html#v:toComplexDFixed",
      "description": {
        "fct-descr": "\u003cp\u003eFreeze a 'VComplex VFixed'.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Complex",
        "fct-package": "variable-precision",
        "fct-signature": "VComplex VFixed p -\u003e Complex DFixed",
        "fct-source": "src/Numeric-VariablePrecision-Complex.html#toComplexDFixed",
        "fct-type": "function",
        "title": "toComplexDFixed"
      },
      "index": {
        "description": "Freeze VComplex VFixed",
        "hierarchy": "Numeric VariablePrecision Complex",
        "module": "Numeric.VariablePrecision.Complex",
        "name": "toComplexDFixed",
        "normalized": "VComplex VFixed a-\u003eComplex DFixed",
        "package": "variable-precision",
        "partial": "Complex DFixed",
        "signature": "VComplex VFixed p-\u003eComplex DFixed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Complex.html#v:toComplexDFloat",
      "description": {
        "fct-descr": "\u003cp\u003eFreeze a 'VComplex VFloat'.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Complex",
        "fct-package": "variable-precision",
        "fct-signature": "VComplex VFloat p -\u003e Complex DFloat",
        "fct-source": "src/Numeric-VariablePrecision-Complex.html#toComplexDFloat",
        "fct-type": "function",
        "title": "toComplexDFloat"
      },
      "index": {
        "description": "Freeze VComplex VFloat",
        "hierarchy": "Numeric VariablePrecision Complex",
        "module": "Numeric.VariablePrecision.Complex",
        "name": "toComplexDFloat",
        "normalized": "VComplex VFloat a-\u003eComplex DFloat",
        "package": "variable-precision",
        "partial": "Complex DFloat",
        "signature": "VComplex VFloat p-\u003eComplex DFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Complex.html#v:withComplex",
      "description": {
        "fct-descr": "\u003cp\u003eLift an operation on \u003ccode\u003e\u003ca\u003eComplex\u003c/a\u003e\u003c/code\u003e to one on \u003ccode\u003e\u003ca\u003eVComplex\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Complex",
        "fct-package": "variable-precision",
        "fct-signature": "(Complex (t p) -\u003e Complex (t q)) -\u003e VComplex t p -\u003e VComplex t q",
        "fct-source": "src/Numeric-VariablePrecision-Complex.html#withComplex",
        "fct-type": "function",
        "title": "withComplex"
      },
      "index": {
        "description": "Lift an operation on Complex to one on VComplex",
        "hierarchy": "Numeric VariablePrecision Complex",
        "module": "Numeric.VariablePrecision.Complex",
        "name": "withComplex",
        "normalized": "(Complex(a b)-\u003eComplex(a c))-\u003eVComplex a b-\u003eVComplex a c",
        "package": "variable-precision",
        "partial": "Complex",
        "signature": "(Complex(t p)-\u003eComplex(t q))-\u003eVComplex t p-\u003eVComplex t q"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Complex.html#v:withComplexDFixed",
      "description": {
        "fct-descr": "\u003cp\u003eThaw a 'Complex DFixed' to its natural precision.  \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is passed on\n   precision mismatch between real and imaginary parts.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Complex",
        "fct-package": "variable-precision",
        "fct-signature": "Maybe (VComplex VFixed p) -\u003e r) -\u003e r",
        "fct-source": "src/Numeric-VariablePrecision-Complex.html#withComplexDFixed",
        "fct-type": "function",
        "title": "withComplexDFixed"
      },
      "index": {
        "description": "Thaw Complex DFixed to its natural precision Nothing is passed on precision mismatch between real and imaginary parts",
        "hierarchy": "Numeric VariablePrecision Complex",
        "module": "Numeric.VariablePrecision.Complex",
        "name": "withComplexDFixed",
        "normalized": "Maybe(VComplex VFixed a)-\u003eb)-\u003eb",
        "package": "variable-precision",
        "partial": "Complex DFixed",
        "signature": "Maybe(VComplex VFixed p)-\u003er)-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Complex.html#v:withComplexDFloat",
      "description": {
        "fct-descr": "\u003cp\u003eThaw a 'Complex DFloat' to its natural precision.  \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is passed on\n   precision mismatch between real and imaginary parts.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Complex",
        "fct-package": "variable-precision",
        "fct-signature": "Maybe (VComplex VFloat p) -\u003e r) -\u003e r",
        "fct-source": "src/Numeric-VariablePrecision-Complex.html#withComplexDFloat",
        "fct-type": "function",
        "title": "withComplexDFloat"
      },
      "index": {
        "description": "Thaw Complex DFloat to its natural precision Nothing is passed on precision mismatch between real and imaginary parts",
        "hierarchy": "Numeric VariablePrecision Complex",
        "module": "Numeric.VariablePrecision.Complex",
        "name": "withComplexDFloat",
        "normalized": "Maybe(VComplex VFloat a)-\u003eb)-\u003eb",
        "package": "variable-precision",
        "partial": "Complex DFloat",
        "signature": "Maybe(VComplex VFloat p)-\u003er)-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Fixed.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVariable precision software fixed point based on \u003ccode\u003eInteger\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAccuracy has not been extensively verified.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e reifyPrecision 1000 $ \\prec -\u003e\n    show $ auto (355 :: VFixed N15) / 113 `atPrecision` prec\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Numeric.VariablePrecision.Fixed",
        "fct-package": "variable-precision",
        "fct-signature": "module",
        "fct-source": "src/Numeric-VariablePrecision-Fixed.html",
        "fct-type": "module",
        "title": "Fixed"
      },
      "index": {
        "description": "Variable precision software fixed point based on Integer Accuracy has not been extensively verified Example reifyPrecision prec show auto VFixed N15 atPrecision prec",
        "hierarchy": "Numeric VariablePrecision Fixed",
        "module": "Numeric.VariablePrecision.Fixed",
        "name": "Fixed",
        "normalized": "",
        "package": "variable-precision",
        "partial": "Fixed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Fixed.html#t:DFixed",
      "description": {
        "fct-descr": "\u003cp\u003eA concrete format suitable for storage or wire transmission.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Fixed",
        "fct-package": "variable-precision",
        "fct-signature": "data",
        "fct-source": "src/Numeric-VariablePrecision-Fixed.html#DFixed",
        "fct-type": "data",
        "title": "DFixed"
      },
      "index": {
        "description": "concrete format suitable for storage or wire transmission",
        "hierarchy": "Numeric VariablePrecision Fixed",
        "module": "Numeric.VariablePrecision.Fixed",
        "name": "DFixed",
        "normalized": "",
        "package": "variable-precision",
        "partial": "DFixed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Fixed.html#t:VFixed",
      "description": {
        "fct-descr": "\u003cp\u003eA software implementation of fixed point arithmetic, using an\n   \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e adjusted to \u003ccode\u003ep\u003c/code\u003e bits after the binary point.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Fixed",
        "fct-package": "variable-precision",
        "fct-signature": "data",
        "fct-source": "src/Numeric-VariablePrecision-Fixed.html#VFixed",
        "fct-type": "data",
        "title": "VFixed"
      },
      "index": {
        "description": "software implementation of fixed point arithmetic using an Integer adjusted to bits after the binary point",
        "hierarchy": "Numeric VariablePrecision Fixed",
        "module": "Numeric.VariablePrecision.Fixed",
        "name": "VFixed",
        "normalized": "",
        "package": "variable-precision",
        "partial": "VFixed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Fixed.html#v:DFixed",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Fixed",
        "fct-package": "variable-precision",
        "fct-signature": "DFixed",
        "fct-source": "src/Numeric-VariablePrecision-Fixed.html#DFixed",
        "fct-type": "function",
        "title": "DFixed"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Fixed",
        "module": "Numeric.VariablePrecision.Fixed",
        "name": "DFixed",
        "normalized": "",
        "package": "variable-precision",
        "partial": "DFixed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Fixed.html#v:dxMantissa",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Numeric.VariablePrecision.Fixed",
        "fct-package": "variable-precision",
        "fct-signature": "!Integer",
        "fct-source": "src/Numeric-VariablePrecision-Fixed.html#DFixed",
        "fct-type": "function",
        "title": "dxMantissa"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Fixed",
        "module": "Numeric.VariablePrecision.Fixed",
        "name": "dxMantissa",
        "normalized": "",
        "package": "variable-precision",
        "partial": "Mantissa",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Fixed.html#v:dxPrecision",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Numeric.VariablePrecision.Fixed",
        "fct-package": "variable-precision",
        "fct-signature": "!Word",
        "fct-source": "src/Numeric-VariablePrecision-Fixed.html#DFixed",
        "fct-type": "function",
        "title": "dxPrecision"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Fixed",
        "module": "Numeric.VariablePrecision.Fixed",
        "name": "dxPrecision",
        "normalized": "",
        "package": "variable-precision",
        "partial": "Precision",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Fixed.html#v:fromDFixed",
      "description": {
        "fct-descr": "\u003cp\u003eThaw a \u003ccode\u003e\u003ca\u003eDFixed\u003c/a\u003e\u003c/code\u003e.  Results in \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e on precision mismatch.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Fixed",
        "fct-package": "variable-precision",
        "fct-signature": "DFixed -\u003e Maybe (VFixed p)",
        "fct-source": "src/Numeric-VariablePrecision-Fixed.html#fromDFixed",
        "fct-type": "function",
        "title": "fromDFixed"
      },
      "index": {
        "description": "Thaw DFixed Results in Nothing on precision mismatch",
        "hierarchy": "Numeric VariablePrecision Fixed",
        "module": "Numeric.VariablePrecision.Fixed",
        "name": "fromDFixed",
        "normalized": "DFixed-\u003eMaybe(VFixed a)",
        "package": "variable-precision",
        "partial": "DFixed",
        "signature": "DFixed-\u003eMaybe(VFixed p)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Fixed.html#v:toDFixed",
      "description": {
        "fct-descr": "\u003cp\u003eFreeze a \u003ccode\u003e\u003ca\u003eVFixed\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Fixed",
        "fct-package": "variable-precision",
        "fct-signature": "VFixed p -\u003e DFixed",
        "fct-source": "src/Numeric-VariablePrecision-Fixed.html#toDFixed",
        "fct-type": "function",
        "title": "toDFixed"
      },
      "index": {
        "description": "Freeze VFixed",
        "hierarchy": "Numeric VariablePrecision Fixed",
        "module": "Numeric.VariablePrecision.Fixed",
        "name": "toDFixed",
        "normalized": "VFixed a-\u003eDFixed",
        "package": "variable-precision",
        "partial": "DFixed",
        "signature": "VFixed p-\u003eDFixed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Fixed.html#v:withDFixed",
      "description": {
        "fct-descr": "\u003cp\u003eThaw a \u003ccode\u003e\u003ca\u003eDFixed\u003c/a\u003e\u003c/code\u003e to its natural precision.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Fixed",
        "fct-package": "variable-precision",
        "fct-signature": "VFixed p -\u003e r) -\u003e r",
        "fct-source": "src/Numeric-VariablePrecision-Fixed.html#withDFixed",
        "fct-type": "function",
        "title": "withDFixed"
      },
      "index": {
        "description": "Thaw DFixed to its natural precision",
        "hierarchy": "Numeric VariablePrecision Fixed",
        "module": "Numeric.VariablePrecision.Fixed",
        "name": "withDFixed",
        "normalized": "VFixed a-\u003eb)-\u003eb",
        "package": "variable-precision",
        "partial": "DFixed",
        "signature": "VFixed p-\u003er)-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Float.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVariable precision software floating point based on \u003ccode\u003e(Integer, Int)\u003c/code\u003e as\nused by \u003ccode\u003e\u003ca\u003edecodeFloat\u003c/a\u003e\u003c/code\u003e.  Supports infinities and NaN, but not negative\nzero or denormalization.\n\u003c/p\u003e\u003cp\u003eAccuracy has not been extensively verified, and termination of numerical\nalgorithms has not been proven.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.VariablePrecision.Float",
        "fct-package": "variable-precision",
        "fct-signature": "module",
        "fct-source": "src/Numeric-VariablePrecision-Float.html",
        "fct-type": "module",
        "title": "Float"
      },
      "index": {
        "description": "Variable precision software floating point based on Integer Int as used by decodeFloat Supports infinities and NaN but not negative zero or denormalization Accuracy has not been extensively verified and termination of numerical algorithms has not been proven",
        "hierarchy": "Numeric VariablePrecision Float",
        "module": "Numeric.VariablePrecision.Float",
        "name": "Float",
        "normalized": "",
        "package": "variable-precision",
        "partial": "Float",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Float.html#t:DFloat",
      "description": {
        "fct-descr": "\u003cp\u003eA concrete format suitable for storage or wire transmission.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Float",
        "fct-package": "variable-precision",
        "fct-signature": "data",
        "fct-source": "src/Numeric-VariablePrecision-Float.html#DFloat",
        "fct-type": "data",
        "title": "DFloat"
      },
      "index": {
        "description": "concrete format suitable for storage or wire transmission",
        "hierarchy": "Numeric VariablePrecision Float",
        "module": "Numeric.VariablePrecision.Float",
        "name": "DFloat",
        "normalized": "",
        "package": "variable-precision",
        "partial": "DFloat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Float.html#t:Normed",
      "description": {
        "fct-descr": "\u003cp\u003eA selection of norms.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Float",
        "fct-package": "variable-precision",
        "fct-signature": "class",
        "fct-source": "src/Numeric-VariablePrecision-Float.html#Normed",
        "fct-type": "class",
        "title": "Normed"
      },
      "index": {
        "description": "selection of norms",
        "hierarchy": "Numeric VariablePrecision Float",
        "module": "Numeric.VariablePrecision.Float",
        "name": "Normed",
        "normalized": "",
        "package": "variable-precision",
        "partial": "Normed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Float.html#t:VFloat",
      "description": {
        "fct-descr": "\u003cp\u003eA software implementation of floating point arithmetic, using a strict\n   pair of \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e, scaled similarly to \u003ccode\u003e\u003ca\u003edecodeFloat\u003c/a\u003e\u003c/code\u003e, along\n   with additional values representing:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e positive infinity (\u003ccode\u003e1/0\u003c/code\u003e),\n\u003c/li\u003e\u003cli\u003e negative infinity (\u003ccode\u003e-1/0\u003c/code\u003e),\n\u003c/li\u003e\u003cli\u003e not a number (\u003ccode\u003e0/0\u003c/code\u003e).\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eFloating\u003c/a\u003e\u003c/code\u003e instance so far only implements algorithms for:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003epi\u003c/a\u003e\u003c/code\u003e,\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003esqrt\u003c/a\u003e\u003c/code\u003e,\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eexp\u003c/a\u003e\u003c/code\u003e,\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003elog\u003c/a\u003e\u003c/code\u003e,\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003esin\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ecos\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003etan\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThese \u003ccode\u003e\u003ca\u003eFloating\u003c/a\u003e\u003c/code\u003e methods transit via \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e and so have limited\n   precision:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003easin\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eacos\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eatan\u003c/a\u003e\u003c/code\u003e,\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003esinh\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ecosh\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003etanh\u003c/a\u003e\u003c/code\u003e,\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003easinh\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eacosh\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eatanh\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003efloatRange\u003c/a\u003e\u003c/code\u003e is arbitrarily limited to mitigate the problems that\n   occur when enormous integers might be needed during some number\n   type conversions (worst case consequence: program abort in gmp).\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Float",
        "fct-package": "variable-precision",
        "fct-signature": "data",
        "fct-source": "src/Numeric-VariablePrecision-Float.html#VFloat",
        "fct-type": "data",
        "title": "VFloat"
      },
      "index": {
        "description": "software implementation of floating point arithmetic using strict pair of Integer and Int scaled similarly to decodeFloat along with additional values representing positive infinity negative infinity not number The Floating instance so far only implements algorithms for pi sqrt exp log sin cos tan These Floating methods transit via Double and so have limited precision asin acos atan sinh cosh tanh asinh acosh atanh floatRange is arbitrarily limited to mitigate the problems that occur when enormous integers might be needed during some number type conversions worst case consequence program abort in gmp",
        "hierarchy": "Numeric VariablePrecision Float",
        "module": "Numeric.VariablePrecision.Float",
        "name": "VFloat",
        "normalized": "",
        "package": "variable-precision",
        "partial": "VFloat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Float.html#v:-45--64--63-",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003eeffectivePrecision\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Float",
        "fct-package": "variable-precision",
        "fct-signature": "t p -\u003e t p -\u003e Int",
        "fct-source": "src/Numeric-VariablePrecision-Float.html#-%40%3F",
        "fct-type": "function",
        "title": "(-@?)"
      },
      "index": {
        "description": "An alias for effectivePrecision",
        "hierarchy": "Numeric VariablePrecision Float",
        "module": "Numeric.VariablePrecision.Float",
        "name": "(-@?) -@?",
        "normalized": "a b-\u003ea b-\u003eInt",
        "package": "variable-precision",
        "partial": "",
        "signature": "t p-\u003et p-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Float.html#v:DFloat",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Float",
        "fct-package": "variable-precision",
        "fct-signature": "DFloat",
        "fct-source": "src/Numeric-VariablePrecision-Float.html#DFloat",
        "fct-type": "function",
        "title": "DFloat"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Float",
        "module": "Numeric.VariablePrecision.Float",
        "name": "DFloat",
        "normalized": "",
        "package": "variable-precision",
        "partial": "DFloat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Float.html#v:DNegativeInfinity",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Float",
        "fct-package": "variable-precision",
        "fct-signature": "DNegativeInfinity",
        "fct-source": "src/Numeric-VariablePrecision-Float.html#DFloat",
        "fct-type": "function",
        "title": "DNegativeInfinity"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Float",
        "module": "Numeric.VariablePrecision.Float",
        "name": "DNegativeInfinity",
        "normalized": "",
        "package": "variable-precision",
        "partial": "DNegative Infinity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Float.html#v:DNotANumber",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Float",
        "fct-package": "variable-precision",
        "fct-signature": "DNotANumber",
        "fct-source": "src/Numeric-VariablePrecision-Float.html#DFloat",
        "fct-type": "function",
        "title": "DNotANumber"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Float",
        "module": "Numeric.VariablePrecision.Float",
        "name": "DNotANumber",
        "normalized": "",
        "package": "variable-precision",
        "partial": "DNot ANumber",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Float.html#v:DPositiveInfinity",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Float",
        "fct-package": "variable-precision",
        "fct-signature": "DPositiveInfinity",
        "fct-source": "src/Numeric-VariablePrecision-Float.html#DFloat",
        "fct-type": "function",
        "title": "DPositiveInfinity"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Float",
        "module": "Numeric.VariablePrecision.Float",
        "name": "DPositiveInfinity",
        "normalized": "",
        "package": "variable-precision",
        "partial": "DPositive Infinity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Float.html#v:DZero",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Float",
        "fct-package": "variable-precision",
        "fct-signature": "DZero",
        "fct-source": "src/Numeric-VariablePrecision-Float.html#DFloat",
        "fct-type": "function",
        "title": "DZero"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Float",
        "module": "Numeric.VariablePrecision.Float",
        "name": "DZero",
        "normalized": "",
        "package": "variable-precision",
        "partial": "DZero",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Float.html#v:dExponent",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Numeric.VariablePrecision.Float",
        "fct-package": "variable-precision",
        "fct-signature": "!Int",
        "fct-source": "src/Numeric-VariablePrecision-Float.html#DFloat",
        "fct-type": "function",
        "title": "dExponent"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Float",
        "module": "Numeric.VariablePrecision.Float",
        "name": "dExponent",
        "normalized": "",
        "package": "variable-precision",
        "partial": "Exponent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Float.html#v:dMantissa",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Numeric.VariablePrecision.Float",
        "fct-package": "variable-precision",
        "fct-signature": "!Integer",
        "fct-source": "src/Numeric-VariablePrecision-Float.html#DFloat",
        "fct-type": "function",
        "title": "dMantissa"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Float",
        "module": "Numeric.VariablePrecision.Float",
        "name": "dMantissa",
        "normalized": "",
        "package": "variable-precision",
        "partial": "Mantissa",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Float.html#v:dPrecision",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Numeric.VariablePrecision.Float",
        "fct-package": "variable-precision",
        "fct-signature": "!Word",
        "fct-source": "src/Numeric-VariablePrecision-Float.html#DFloat",
        "fct-type": "function",
        "title": "dPrecision"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Float",
        "module": "Numeric.VariablePrecision.Float",
        "name": "dPrecision",
        "normalized": "",
        "package": "variable-precision",
        "partial": "Precision",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Float.html#v:effectivePrecision",
      "description": {
        "fct-descr": "\u003cp\u003eMuch like \u003ccode\u003e\u003ca\u003eeffectivePrecisionWith\u003c/a\u003e\u003c/code\u003e combined with \u003ccode\u003e\u003ca\u003enormInfinity\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Float",
        "fct-package": "variable-precision",
        "fct-signature": "t p -\u003e t p -\u003e Int",
        "fct-source": "src/Numeric-VariablePrecision-Float.html#effectivePrecision",
        "fct-type": "function",
        "title": "effectivePrecision"
      },
      "index": {
        "description": "Much like effectivePrecisionWith combined with normInfinity",
        "hierarchy": "Numeric VariablePrecision Float",
        "module": "Numeric.VariablePrecision.Float",
        "name": "effectivePrecision",
        "normalized": "a b-\u003ea b-\u003eInt",
        "package": "variable-precision",
        "partial": "Precision",
        "signature": "t p-\u003et p-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Float.html#v:effectivePrecisionWith",
      "description": {
        "fct-descr": "\u003cp\u003eA measure of meaningful precision in the difference of two\n   finite non-zero values.\n\u003c/p\u003e\u003cp\u003eValues of very different magnitude have little meaningful\n   difference, because \u003ccode\u003ea + b \u003ccode\u003eapproxEq\u003c/code\u003e a\u003c/code\u003e when \u003ccode\u003e|a| \u003e\u003e |b|\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eVery close values have little meaningful difference,\n   because \u003ccode\u003ea + (a - b) \u003ccode\u003eapproxEq\u003c/code\u003e a\u003c/code\u003e as \u003ccode\u003e|a| \u003e\u003e |a - b|\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eeffectivePrecisionWith\u003c/a\u003e\u003c/code\u003e attempts to quantify this.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Float",
        "fct-package": "variable-precision",
        "fct-signature": "(t -\u003e r)-\u003e t-\u003e t-\u003e Int",
        "fct-type": "function",
        "title": "effectivePrecisionWith"
      },
      "index": {
        "description": "measure of meaningful precision in the difference of two finite non-zero values Values of very different magnitude have little meaningful difference because approxEq when Very close values have little meaningful difference because approxEq as effectivePrecisionWith attempts to quantify this",
        "hierarchy": "Numeric VariablePrecision Float",
        "module": "Numeric.VariablePrecision.Float",
        "name": "effectivePrecisionWith",
        "normalized": "(a-\u003eb)-\u003ea-\u003ea-\u003eInt",
        "package": "variable-precision",
        "partial": "Precision With",
        "signature": "(t-\u003er)-\u003et-\u003et-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Float.html#v:fromDFloat",
      "description": {
        "fct-descr": "\u003cp\u003eThaw a \u003ccode\u003e\u003ca\u003eDFloat\u003c/a\u003e\u003c/code\u003e.  Results in \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e on precision mismatch.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Float",
        "fct-package": "variable-precision",
        "fct-signature": "DFloat -\u003e Maybe (VFloat p)",
        "fct-source": "src/Numeric-VariablePrecision-Float.html#fromDFloat",
        "fct-type": "function",
        "title": "fromDFloat"
      },
      "index": {
        "description": "Thaw DFloat Results in Nothing on precision mismatch",
        "hierarchy": "Numeric VariablePrecision Float",
        "module": "Numeric.VariablePrecision.Float",
        "name": "fromDFloat",
        "normalized": "DFloat-\u003eMaybe(VFloat a)",
        "package": "variable-precision",
        "partial": "DFloat",
        "signature": "DFloat-\u003eMaybe(VFloat p)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Float.html#v:norm1",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Float",
        "fct-package": "variable-precision",
        "fct-signature": "t p -\u003e VFloat p",
        "fct-source": "src/Numeric-VariablePrecision-Float.html#norm1",
        "fct-type": "method",
        "title": "norm1"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Float",
        "module": "Numeric.VariablePrecision.Float",
        "name": "norm1",
        "normalized": "a b-\u003eVFloat b",
        "package": "variable-precision",
        "partial": "",
        "signature": "t p-\u003eVFloat p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Float.html#v:norm2",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Float",
        "fct-package": "variable-precision",
        "fct-signature": "t p -\u003e VFloat p",
        "fct-source": "src/Numeric-VariablePrecision-Float.html#norm2",
        "fct-type": "method",
        "title": "norm2"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Float",
        "module": "Numeric.VariablePrecision.Float",
        "name": "norm2",
        "normalized": "a b-\u003eVFloat b",
        "package": "variable-precision",
        "partial": "",
        "signature": "t p-\u003eVFloat p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Float.html#v:norm2Squared",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Float",
        "fct-package": "variable-precision",
        "fct-signature": "t p -\u003e VFloat p",
        "fct-source": "src/Numeric-VariablePrecision-Float.html#norm2Squared",
        "fct-type": "method",
        "title": "norm2Squared"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Float",
        "module": "Numeric.VariablePrecision.Float",
        "name": "norm2Squared",
        "normalized": "a b-\u003eVFloat b",
        "package": "variable-precision",
        "partial": "Squared",
        "signature": "t p-\u003eVFloat p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Float.html#v:normInfinity",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Float",
        "fct-package": "variable-precision",
        "fct-signature": "t p -\u003e VFloat p",
        "fct-source": "src/Numeric-VariablePrecision-Float.html#normInfinity",
        "fct-type": "method",
        "title": "normInfinity"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Float",
        "module": "Numeric.VariablePrecision.Float",
        "name": "normInfinity",
        "normalized": "a b-\u003eVFloat b",
        "package": "variable-precision",
        "partial": "Infinity",
        "signature": "t p-\u003eVFloat p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Float.html#v:toDFloat",
      "description": {
        "fct-descr": "\u003cp\u003eFreeze a \u003ccode\u003e\u003ca\u003eVFloat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Float",
        "fct-package": "variable-precision",
        "fct-signature": "VFloat p -\u003e DFloat",
        "fct-source": "src/Numeric-VariablePrecision-Float.html#toDFloat",
        "fct-type": "function",
        "title": "toDFloat"
      },
      "index": {
        "description": "Freeze VFloat",
        "hierarchy": "Numeric VariablePrecision Float",
        "module": "Numeric.VariablePrecision.Float",
        "name": "toDFloat",
        "normalized": "VFloat a-\u003eDFloat",
        "package": "variable-precision",
        "partial": "DFloat",
        "signature": "VFloat p-\u003eDFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Float.html#v:withDFloat",
      "description": {
        "fct-descr": "\u003cp\u003eThaw a \u003ccode\u003e\u003ca\u003eDFloat\u003c/a\u003e\u003c/code\u003e to its natural precision.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Float",
        "fct-package": "variable-precision",
        "fct-signature": "VFloat p -\u003e r) -\u003e r",
        "fct-source": "src/Numeric-VariablePrecision-Float.html#withDFloat",
        "fct-type": "function",
        "title": "withDFloat"
      },
      "index": {
        "description": "Thaw DFloat to its natural precision",
        "hierarchy": "Numeric VariablePrecision Float",
        "module": "Numeric.VariablePrecision.Float",
        "name": "withDFloat",
        "normalized": "VFloat a-\u003eb)-\u003eb",
        "package": "variable-precision",
        "partial": "DFloat",
        "signature": "VFloat p-\u003er)-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Precision-Reify.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eReify from value-level to type-level using Rank2Types.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.VariablePrecision.Precision.Reify",
        "fct-package": "variable-precision",
        "fct-signature": "module",
        "fct-source": "src/Numeric-VariablePrecision-Precision-Reify.html",
        "fct-type": "module",
        "title": "Reify"
      },
      "index": {
        "description": "Reify from value-level to type-level using Rank2Types",
        "hierarchy": "Numeric VariablePrecision Precision Reify",
        "module": "Numeric.VariablePrecision.Precision.Reify",
        "name": "Reify",
        "normalized": "",
        "package": "variable-precision",
        "partial": "Reify",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Precision-Reify.html#v:.-64--36-",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003ewithReifiedPrecision\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Precision.Reify",
        "fct-package": "variable-precision",
        "fct-signature": "t q -\u003e a)-\u003e a",
        "fct-type": "function",
        "title": "(.@$)"
      },
      "index": {
        "description": "An alias for withReifiedPrecision",
        "hierarchy": "Numeric VariablePrecision Precision Reify",
        "module": "Numeric.VariablePrecision.Precision.Reify",
        "name": "(.@$) .@$",
        "normalized": "a b-\u003ec)-\u003ec",
        "package": "variable-precision",
        "partial": "",
        "signature": "t q-\u003ea)-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Precision-Reify.html#v:reifyPrecision",
      "description": {
        "fct-descr": "\u003cp\u003eReify a precision from value-level to type-level.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Precision.Reify",
        "fct-package": "variable-precision",
        "fct-signature": "p -\u003e a) -\u003e a",
        "fct-source": "src/Numeric-VariablePrecision-Precision-Reify.html#reifyPrecision",
        "fct-type": "function",
        "title": "reifyPrecision"
      },
      "index": {
        "description": "Reify precision from value-level to type-level",
        "hierarchy": "Numeric VariablePrecision Precision Reify",
        "module": "Numeric.VariablePrecision.Precision.Reify",
        "name": "reifyPrecision",
        "normalized": "a-\u003eb)-\u003eb",
        "package": "variable-precision",
        "partial": "Precision",
        "signature": "p-\u003ea)-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Precision-Reify.html#v:withReifiedPrecision",
      "description": {
        "fct-descr": "\u003cp\u003eMuch like \u003ccode\u003e\u003ca\u003ereifyPrecision\u003c/a\u003e\u003c/code\u003e combined with \u003ccode\u003e\u003ca\u003ewithPrecision\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Precision.Reify",
        "fct-package": "variable-precision",
        "fct-signature": "t q -\u003e a)-\u003e a",
        "fct-type": "function",
        "title": "withReifiedPrecision"
      },
      "index": {
        "description": "Much like reifyPrecision combined with withPrecision",
        "hierarchy": "Numeric VariablePrecision Precision Reify",
        "module": "Numeric.VariablePrecision.Precision.Reify",
        "name": "withReifiedPrecision",
        "normalized": "a b-\u003ec)-\u003ec",
        "package": "variable-precision",
        "partial": "Reified Precision",
        "signature": "t q-\u003ea)-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Precision.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eClasses for types with precision represented by a type-level natural\nnumber, and variable precision types.\n\u003c/p\u003e\u003cp\u003eNote that performance may be (even) slow(er) with some versions of the\ntype-level-natural-number package.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.VariablePrecision.Precision",
        "fct-package": "variable-precision",
        "fct-signature": "module",
        "fct-source": "src/Numeric-VariablePrecision-Precision.html",
        "fct-type": "module",
        "title": "Precision"
      },
      "index": {
        "description": "Classes for types with precision represented by type-level natural number and variable precision types Note that performance may be even slow er with some versions of the type-level-natural-number package",
        "hierarchy": "Numeric VariablePrecision Precision",
        "module": "Numeric.VariablePrecision.Precision",
        "name": "Precision",
        "normalized": "",
        "package": "variable-precision",
        "partial": "Precision",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Precision.html#t:HasPrecision",
      "description": {
        "fct-descr": "\u003cp\u003eA class for types with precision.\n   The methods must not evaluate their arguments, and their results\n   must not be evaluated.\n   Minimal complete definition: (none).\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Precision",
        "fct-package": "variable-precision",
        "fct-signature": "class",
        "fct-source": "src/Numeric-VariablePrecision-Precision.html#HasPrecision",
        "fct-type": "class",
        "title": "HasPrecision"
      },
      "index": {
        "description": "class for types with precision The methods must not evaluate their arguments and their results must not be evaluated Minimal complete definition none",
        "hierarchy": "Numeric VariablePrecision Precision",
        "module": "Numeric.VariablePrecision.Precision",
        "name": "HasPrecision",
        "normalized": "",
        "package": "variable-precision",
        "partial": "Has Precision",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Precision.html#t:VariablePrecision",
      "description": {
        "fct-descr": "\u003cp\u003eA class for types with adjustable precision.\n   Minimal complete definition: \u003ccode\u003e\u003ca\u003eadjustPrecision\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Precision",
        "fct-package": "variable-precision",
        "fct-signature": "class",
        "fct-source": "src/Numeric-VariablePrecision-Precision.html#VariablePrecision",
        "fct-type": "class",
        "title": "VariablePrecision"
      },
      "index": {
        "description": "class for types with adjustable precision Minimal complete definition adjustPrecision",
        "hierarchy": "Numeric VariablePrecision Precision",
        "module": "Numeric.VariablePrecision.Precision",
        "name": "VariablePrecision",
        "normalized": "",
        "package": "variable-precision",
        "partial": "Variable Precision",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Precision.html#v:.-64-",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003eatPrecisionOf\u003c/a\u003e\u003c/code\u003e.\n   Precedence between \u003ccode\u003e\u003ca\u003e\u003c\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e+\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Precision",
        "fct-package": "variable-precision",
        "fct-signature": "t p -\u003e s p -\u003e t p",
        "fct-source": "src/Numeric-VariablePrecision-Precision.html#.%40",
        "fct-type": "function",
        "title": "(.@)"
      },
      "index": {
        "description": "An alias for atPrecisionOf Precedence between and",
        "hierarchy": "Numeric VariablePrecision Precision",
        "module": "Numeric.VariablePrecision.Precision",
        "name": "(.@) .@",
        "normalized": "a b-\u003ec b-\u003ea b",
        "package": "variable-precision",
        "partial": "",
        "signature": "t p-\u003es p-\u003et p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Precision.html#v:.-64--126-",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003ewithPrecisionOf\u003c/a\u003e\u003c/code\u003e.\n   Precedence between \u003ccode\u003e\u003ca\u003e\u003c\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e+\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Precision",
        "fct-package": "variable-precision",
        "fct-signature": "t p -\u003e s q -\u003e t q",
        "fct-source": "src/Numeric-VariablePrecision-Precision.html#.%40~",
        "fct-type": "function",
        "title": "(.@~)"
      },
      "index": {
        "description": "An alias for withPrecisionOf Precedence between and",
        "hierarchy": "Numeric VariablePrecision Precision",
        "module": "Numeric.VariablePrecision.Precision",
        "name": "(.@~) .@~",
        "normalized": "a b-\u003ec d-\u003ea d",
        "package": "variable-precision",
        "partial": "",
        "signature": "t p-\u003es q-\u003et q"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Precision.html#v:adjustPrecision",
      "description": {
        "fct-descr": "\u003cp\u003eAdjust the precision of a value preserving as much accuracy as\n   possible.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Precision",
        "fct-package": "variable-precision",
        "fct-signature": "t p -\u003e t q",
        "fct-source": "src/Numeric-VariablePrecision-Precision.html#adjustPrecision",
        "fct-type": "method",
        "title": "adjustPrecision"
      },
      "index": {
        "description": "Adjust the precision of value preserving as much accuracy as possible",
        "hierarchy": "Numeric VariablePrecision Precision",
        "module": "Numeric.VariablePrecision.Precision",
        "name": "adjustPrecision",
        "normalized": "a b-\u003ea c",
        "package": "variable-precision",
        "partial": "Precision",
        "signature": "t p-\u003et q"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Precision.html#v:atPrecision",
      "description": {
        "fct-descr": "\u003cp\u003eMuch like \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e with a restricted type.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Precision",
        "fct-package": "variable-precision",
        "fct-signature": "t p -\u003e p -\u003e t p",
        "fct-source": "src/Numeric-VariablePrecision-Precision.html#atPrecision",
        "fct-type": "function",
        "title": "atPrecision"
      },
      "index": {
        "description": "Much like const with restricted type",
        "hierarchy": "Numeric VariablePrecision Precision",
        "module": "Numeric.VariablePrecision.Precision",
        "name": "atPrecision",
        "normalized": "a b-\u003eb-\u003ea b",
        "package": "variable-precision",
        "partial": "Precision",
        "signature": "t p-\u003ep-\u003et p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Precision.html#v:atPrecisionOf",
      "description": {
        "fct-descr": "\u003cp\u003eMuch like \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e with a restricted type.\n   Precedence between \u003ccode\u003e\u003ca\u003e\u003c\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e+\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Precision",
        "fct-package": "variable-precision",
        "fct-signature": "t p -\u003e s p -\u003e t p",
        "fct-source": "src/Numeric-VariablePrecision-Precision.html#atPrecisionOf",
        "fct-type": "function",
        "title": "atPrecisionOf"
      },
      "index": {
        "description": "Much like const with restricted type Precedence between and",
        "hierarchy": "Numeric VariablePrecision Precision",
        "module": "Numeric.VariablePrecision.Precision",
        "name": "atPrecisionOf",
        "normalized": "a b-\u003ec b-\u003ea b",
        "package": "variable-precision",
        "partial": "Precision Of",
        "signature": "t p-\u003es p-\u003et p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Precision.html#v:auto",
      "description": {
        "fct-descr": "\u003cp\u003eSynonym for \u003ccode\u003e\u003ca\u003eadjustPrecision\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Precision",
        "fct-package": "variable-precision",
        "fct-signature": "t p -\u003e t q",
        "fct-source": "src/Numeric-VariablePrecision-Precision.html#auto",
        "fct-type": "function",
        "title": "auto"
      },
      "index": {
        "description": "Synonym for adjustPrecision",
        "hierarchy": "Numeric VariablePrecision Precision",
        "module": "Numeric.VariablePrecision.Precision",
        "name": "auto",
        "normalized": "a b-\u003ea c",
        "package": "variable-precision",
        "partial": "",
        "signature": "t p-\u003et q"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Precision.html#v:precision",
      "description": {
        "fct-descr": "\u003cp\u003eMuch like \u003ccode\u003e\u003ca\u003enaturalNumberAsInt\u003c/a\u003e\u003c/code\u003e combined with \u003ccode\u003e\u003ca\u003eprecisionOf\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Precision",
        "fct-package": "variable-precision",
        "fct-signature": "t p -\u003e Word",
        "fct-source": "src/Numeric-VariablePrecision-Precision.html#precision",
        "fct-type": "function",
        "title": "precision"
      },
      "index": {
        "description": "Much like naturalNumberAsInt combined with precisionOf",
        "hierarchy": "Numeric VariablePrecision Precision",
        "module": "Numeric.VariablePrecision.Precision",
        "name": "precision",
        "normalized": "a b-\u003eWord",
        "package": "variable-precision",
        "partial": "",
        "signature": "t p-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Precision.html#v:precisionOf",
      "description": {
        "fct-module": "Numeric.VariablePrecision.Precision",
        "fct-package": "variable-precision",
        "fct-signature": "t p -\u003e p",
        "fct-source": "src/Numeric-VariablePrecision-Precision.html#precisionOf",
        "fct-type": "method",
        "title": "precisionOf"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric VariablePrecision Precision",
        "module": "Numeric.VariablePrecision.Precision",
        "name": "precisionOf",
        "normalized": "a b-\u003eb",
        "package": "variable-precision",
        "partial": "Of",
        "signature": "t p-\u003ep"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Precision.html#v:withPrecision",
      "description": {
        "fct-descr": "\u003cp\u003eMuch like \u003ccode\u003e\u003ca\u003eadjustPrecision\u003c/a\u003e\u003c/code\u003e combined with \u003ccode\u003e\u003ca\u003eatPrecision\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Precision",
        "fct-package": "variable-precision",
        "fct-signature": "t p -\u003e q -\u003e t q",
        "fct-source": "src/Numeric-VariablePrecision-Precision.html#withPrecision",
        "fct-type": "function",
        "title": "withPrecision"
      },
      "index": {
        "description": "Much like adjustPrecision combined with atPrecision",
        "hierarchy": "Numeric VariablePrecision Precision",
        "module": "Numeric.VariablePrecision.Precision",
        "name": "withPrecision",
        "normalized": "a b-\u003ec-\u003ea c",
        "package": "variable-precision",
        "partial": "Precision",
        "signature": "t p-\u003eq-\u003et q"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Precision.html#v:withPrecisionOf",
      "description": {
        "fct-descr": "\u003cp\u003eMuch like \u003ccode\u003e\u003ca\u003ewithPrecision\u003c/a\u003e\u003c/code\u003e combined with \u003ccode\u003e\u003ca\u003eprecisionOf\u003c/a\u003e\u003c/code\u003e.\n   Precedence between \u003ccode\u003e\u003ca\u003e\u003c\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e+\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.VariablePrecision.Precision",
        "fct-package": "variable-precision",
        "fct-signature": "t p -\u003e s q -\u003e t q",
        "fct-source": "src/Numeric-VariablePrecision-Precision.html#withPrecisionOf",
        "fct-type": "function",
        "title": "withPrecisionOf"
      },
      "index": {
        "description": "Much like withPrecision combined with precisionOf Precedence between and",
        "hierarchy": "Numeric VariablePrecision Precision",
        "module": "Numeric.VariablePrecision.Precision",
        "name": "withPrecisionOf",
        "normalized": "a b-\u003ec d-\u003ea d",
        "package": "variable-precision",
        "partial": "Precision Of",
        "signature": "t p-\u003es q-\u003et q"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvenience module.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.VariablePrecision",
        "fct-package": "variable-precision",
        "fct-signature": "module",
        "fct-source": "src/Numeric-VariablePrecision.html",
        "fct-type": "module",
        "title": "VariablePrecision"
      },
      "index": {
        "description": "Convenience module",
        "hierarchy": "Numeric VariablePrecision",
        "module": "Numeric.VariablePrecision",
        "name": "VariablePrecision",
        "normalized": "",
        "package": "variable-precision",
        "partial": "Variable Precision",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBoilerplate definitions generated by:\n\u003c/p\u003e\u003cpre\u003e flip mapM_ [16..53] $ \\p -\u003e let s = show p in\n   putStrLn $ \"type N\" ++ s ++ \" = SuccessorTo N\" ++ show (p - 1) ++\n     \" ; n\" ++ s ++ \" :: N\" ++ s ++ \" ; n\" ++ s ++ \" = undefined\"\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "module",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html",
        "fct-type": "module",
        "title": "ExtraNumbers"
      },
      "index": {
        "description": "Boilerplate definitions generated by flip mapM let show in putStrLn type SuccessorTo show undefined",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "ExtraNumbers",
        "normalized": "",
        "package": "variable-precision",
        "partial": "Extra Numbers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N16",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N16",
        "fct-type": "type",
        "title": "N16"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "N16",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N17",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N17",
        "fct-type": "type",
        "title": "N17"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "N17",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N18",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N18",
        "fct-type": "type",
        "title": "N18"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "N18",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N19",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N19",
        "fct-type": "type",
        "title": "N19"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "N19",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N20",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N20",
        "fct-type": "type",
        "title": "N20"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "N20",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N21",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N21",
        "fct-type": "type",
        "title": "N21"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "N21",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N22",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N22",
        "fct-type": "type",
        "title": "N22"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "N22",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N23",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N23",
        "fct-type": "type",
        "title": "N23"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "N23",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N24",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N24",
        "fct-type": "type",
        "title": "N24"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "N24",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N25",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N25",
        "fct-type": "type",
        "title": "N25"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "N25",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N26",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N26",
        "fct-type": "type",
        "title": "N26"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "N26",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N27",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N27",
        "fct-type": "type",
        "title": "N27"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "N27",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N28",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N28",
        "fct-type": "type",
        "title": "N28"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "N28",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N29",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N29",
        "fct-type": "type",
        "title": "N29"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "N29",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N30",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N30",
        "fct-type": "type",
        "title": "N30"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "N30",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N31",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N31",
        "fct-type": "type",
        "title": "N31"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "N31",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N32",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N32",
        "fct-type": "type",
        "title": "N32"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "N32",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N33",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N33",
        "fct-type": "type",
        "title": "N33"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "N33",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N34",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N34",
        "fct-type": "type",
        "title": "N34"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "N34",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N35",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N35",
        "fct-type": "type",
        "title": "N35"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "N35",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N36",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N36",
        "fct-type": "type",
        "title": "N36"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "N36",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N37",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N37",
        "fct-type": "type",
        "title": "N37"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "N37",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N38",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N38",
        "fct-type": "type",
        "title": "N38"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "N38",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N39",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N39",
        "fct-type": "type",
        "title": "N39"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "N39",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N40",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N40",
        "fct-type": "type",
        "title": "N40"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "N40",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N41",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N41",
        "fct-type": "type",
        "title": "N41"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "N41",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N42",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N42",
        "fct-type": "type",
        "title": "N42"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "N42",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N43",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N43",
        "fct-type": "type",
        "title": "N43"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "N43",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N44",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N44",
        "fct-type": "type",
        "title": "N44"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "N44",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N45",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N45",
        "fct-type": "type",
        "title": "N45"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "N45",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N46",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N46",
        "fct-type": "type",
        "title": "N46"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "N46",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N47",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N47",
        "fct-type": "type",
        "title": "N47"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "N47",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N48",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N48",
        "fct-type": "type",
        "title": "N48"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "N48",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N49",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N49",
        "fct-type": "type",
        "title": "N49"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "N49",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N50",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N50",
        "fct-type": "type",
        "title": "N50"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "N50",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N51",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N51",
        "fct-type": "type",
        "title": "N51"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "N51",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N52",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N52",
        "fct-type": "type",
        "title": "N52"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "N52",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N53",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "type",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N53",
        "fct-type": "type",
        "title": "N53"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "N53",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n16",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "N16",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n16",
        "fct-type": "function",
        "title": "n16"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "n16",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n17",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "N17",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n17",
        "fct-type": "function",
        "title": "n17"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "n17",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n18",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "N18",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n18",
        "fct-type": "function",
        "title": "n18"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "n18",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n19",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "N19",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n19",
        "fct-type": "function",
        "title": "n19"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "n19",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n20",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "N20",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n20",
        "fct-type": "function",
        "title": "n20"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "n20",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n21",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "N21",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n21",
        "fct-type": "function",
        "title": "n21"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "n21",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n22",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "N22",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n22",
        "fct-type": "function",
        "title": "n22"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "n22",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n23",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "N23",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n23",
        "fct-type": "function",
        "title": "n23"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "n23",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n24",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "N24",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n24",
        "fct-type": "function",
        "title": "n24"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "n24",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n25",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "N25",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n25",
        "fct-type": "function",
        "title": "n25"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "n25",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n26",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "N26",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n26",
        "fct-type": "function",
        "title": "n26"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "n26",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n27",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "N27",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n27",
        "fct-type": "function",
        "title": "n27"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "n27",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n28",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "N28",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n28",
        "fct-type": "function",
        "title": "n28"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "n28",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n29",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "N29",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n29",
        "fct-type": "function",
        "title": "n29"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "n29",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n30",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "N30",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n30",
        "fct-type": "function",
        "title": "n30"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "n30",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n31",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "N31",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n31",
        "fct-type": "function",
        "title": "n31"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "n31",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n32",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "N32",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n32",
        "fct-type": "function",
        "title": "n32"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "n32",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n33",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "N33",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n33",
        "fct-type": "function",
        "title": "n33"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "n33",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n34",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "N34",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n34",
        "fct-type": "function",
        "title": "n34"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "n34",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n35",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "N35",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n35",
        "fct-type": "function",
        "title": "n35"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "n35",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n36",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "N36",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n36",
        "fct-type": "function",
        "title": "n36"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "n36",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n37",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "N37",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n37",
        "fct-type": "function",
        "title": "n37"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "n37",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n38",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "N38",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n38",
        "fct-type": "function",
        "title": "n38"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "n38",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n39",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "N39",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n39",
        "fct-type": "function",
        "title": "n39"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "n39",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n40",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "N40",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n40",
        "fct-type": "function",
        "title": "n40"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "n40",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n41",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "N41",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n41",
        "fct-type": "function",
        "title": "n41"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "n41",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n42",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "N42",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n42",
        "fct-type": "function",
        "title": "n42"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "n42",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n43",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "N43",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n43",
        "fct-type": "function",
        "title": "n43"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "n43",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n44",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "N44",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n44",
        "fct-type": "function",
        "title": "n44"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "n44",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n45",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "N45",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n45",
        "fct-type": "function",
        "title": "n45"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "n45",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n46",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "N46",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n46",
        "fct-type": "function",
        "title": "n46"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "n46",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n47",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "N47",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n47",
        "fct-type": "function",
        "title": "n47"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "n47",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n48",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "N48",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n48",
        "fct-type": "function",
        "title": "n48"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "n48",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n49",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "N49",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n49",
        "fct-type": "function",
        "title": "n49"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "n49",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n50",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "N50",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n50",
        "fct-type": "function",
        "title": "n50"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "n50",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n51",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "N51",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n51",
        "fct-type": "function",
        "title": "n51"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "n51",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n52",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "N52",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n52",
        "fct-type": "function",
        "title": "n52"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "n52",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n53",
      "description": {
        "fct-module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "fct-package": "variable-precision",
        "fct-signature": "N53",
        "fct-source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n53",
        "fct-type": "function",
        "title": "n53"
      },
      "index": {
        "description": "",
        "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
        "module": "TypeLevel.NaturalNumber.ExtraNumbers",
        "name": "n53",
        "normalized": "",
        "package": "variable-precision",
        "partial": "",
        "signature": ""
      }
    }
  }
]