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
        "word": "variable-precision"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplementations of various floating point algorithms.  Accuracy has not\nbeen extensively verified, and termination has not been proven.\n\u003c/p\u003e\u003cp\u003eEverything assumes that \u003ccode\u003e\u003ca\u003efloatRadix\u003c/a\u003e\u003c/code\u003e is 2.  This is *not* checked.\n\u003c/p\u003e\u003cp\u003eFunctions taking an \u003ccode\u003eaccuracy\u003c/code\u003e parameter may fail to terminate if\n\u003ccode\u003eaccuracy\u003c/code\u003e is too small.  Accuracy is measured in least significant\nbits, similarly to '(=~=)'.\n\u003c/p\u003e\u003cp\u003eIn this documentation, \u003cem\u003ebasic functionality\u003c/em\u003e denotes that methods used\nare from classes:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFurther, \u003cem\u003ebasic RealFloat functionality\u003c/em\u003e denotes \u003cem\u003ebasic functionality\u003c/em\u003e\nwith the addition of:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Anything in \u003ccode\u003e\u003ca\u003eRealFloat\u003c/a\u003e\u003c/code\u003e except for \u003ccode\u003e\u003ca\u003eatan2\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe intention behind the used functionality documentation is to help\nusers decide when it is appropriate to use these generic implementations\nto implement instances.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.VariablePrecision.Algorithms",
          "name": "Algorithms",
          "package": "variable-precision",
          "source": "src/Numeric-VariablePrecision-Algorithms.html",
          "type": "module"
        },
        "index": {
          "description": "Implementations of various floating point algorithms Accuracy has not been extensively verified and termination has not been proven Everything assumes that floatRadix is This is not checked Functions taking an accuracy parameter may fail to terminate if accuracy is too small Accuracy is measured in least significant bits similarly to In this documentation basic functionality denotes that methods used are from classes Num Eq Ord Further basic RealFloat functionality denotes basic functionality with the addition of Anything in RealFloat except for atan2 The intention behind the used functionality documentation is to help users decide when it is appropriate to use these generic implementations to implement instances",
          "hierarchy": "Numeric VariablePrecision Algorithms",
          "module": "Numeric.VariablePrecision.Algorithms",
          "name": "Algorithms",
          "package": "variable-precision",
          "partial": "Algorithms",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Algorithms.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApproximate equality.\n   \u003ccode\u003e(a =~= b) c\u003c/code\u003e when adding the difference to the larger in magnitude\n   changes at most \u003ccode\u003ec\u003c/code\u003e least significant mantissa bits.\n\u003c/p\u003e\u003cp\u003eUses only basic RealFloat functionality.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Algorithms",
          "name": "(=~=)",
          "package": "variable-precision",
          "signature": "a -\u003e a -\u003e Int -\u003e Bool",
          "source": "src/Numeric-VariablePrecision-Algorithms.html#%3D~%3D",
          "type": "function"
        },
        "index": {
          "description": "Approximate equality when adding the difference to the larger in magnitude changes at most least significant mantissa bits Uses only basic RealFloat functionality",
          "hierarchy": "Numeric VariablePrecision Algorithms",
          "module": "Numeric.VariablePrecision.Algorithms",
          "name": "(=~=) =~=",
          "normalized": "a-\u003ea-\u003eInt-\u003eBool",
          "package": "variable-precision",
          "signature": "a-\u003ea-\u003eInt-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Algorithms.html#v:-61--126--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute an exponential using power series.\n\u003c/p\u003e\u003cp\u003eUses basic RealFloat functionality, '(/)' and \u003ccode\u003e\u003ca\u003erecip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Algorithms",
          "name": "genericExp",
          "package": "variable-precision",
          "signature": "Int-\u003e a-\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Compute an exponential using power series Uses basic RealFloat functionality and recip",
          "hierarchy": "Numeric VariablePrecision Algorithms",
          "module": "Numeric.VariablePrecision.Algorithms",
          "name": "genericExp",
          "normalized": "Int-\u003ea-\u003ea",
          "package": "variable-precision",
          "partial": "Exp",
          "signature": "Int-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Algorithms.html#v:genericExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute a logarithm.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003egenericLog''\u003c/a\u003e\u003c/code\u003e for algorithmic references.\n\u003c/p\u003e\u003cp\u003eUses basic RealFloat functionality, \u003ccode\u003e\u003ca\u003esqrt\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erecip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Algorithms",
          "name": "genericLog",
          "package": "variable-precision",
          "signature": "Int-\u003e a-\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Compute logarithm See genericLog for algorithmic references Uses basic RealFloat functionality sqrt and recip",
          "hierarchy": "Numeric VariablePrecision Algorithms",
          "module": "Numeric.VariablePrecision.Algorithms",
          "name": "genericLog",
          "normalized": "Int-\u003ea-\u003ea",
          "package": "variable-precision",
          "partial": "Log",
          "signature": "Int-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Algorithms.html#v:genericLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute a logarithm using decomposition and a value for \u003ccode\u003elog 2\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003egenericLog''\u003c/a\u003e\u003c/code\u003e for algorithmic references.\n\u003c/p\u003e\u003cp\u003eUses basic RealFloat functionality, \u003ccode\u003e\u003ca\u003esqrt\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003erecip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Algorithms",
          "name": "genericLog'",
          "package": "variable-precision",
          "signature": "Int-\u003e a-\u003e a-\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Compute logarithm using decomposition and value for log See genericLog for algorithmic references Uses basic RealFloat functionality sqrt and recip",
          "hierarchy": "Numeric VariablePrecision Algorithms",
          "module": "Numeric.VariablePrecision.Algorithms",
          "name": "genericLog'",
          "normalized": "Int-\u003ea-\u003ea-\u003ea",
          "package": "variable-precision",
          "partial": "Log'",
          "signature": "Int-\u003ea-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Algorithms.html#v:genericLog-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute a logarithm for a value in [0.5,1) using the AGM method\n   as described in section 7 of\n   \u003cem\u003eThe Logarithmic Constant: log 2\u003c/em\u003e\n   Xavier Gourdon and Pascal Sebah, May 18, 2010,\n   \u003ca\u003ehttp://numbers.computation.free.fr/Constants/Log2/log2.ps\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThe precondition is not checked.\n\u003c/p\u003e\u003cp\u003eUses basic RealFloat functionality, \u003ccode\u003e\u003ca\u003esqrt\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003erecip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Algorithms",
          "name": "genericLog''",
          "package": "variable-precision",
          "signature": "Int-\u003e a-\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Compute logarithm for value in using the AGM method as described in section of The Logarithmic Constant log Xavier Gourdon and Pascal Sebah May http numbers.computation.free.fr Constants Log2 log2.ps The precondition is not checked Uses basic RealFloat functionality sqrt and recip",
          "hierarchy": "Numeric VariablePrecision Algorithms",
          "module": "Numeric.VariablePrecision.Algorithms",
          "name": "genericLog''",
          "normalized": "Int-\u003ea-\u003ea",
          "package": "variable-precision",
          "partial": "Log''",
          "signature": "Int-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Algorithms.html#v:genericLog-39--39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute log 2.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003egenericLog''\u003c/a\u003e\u003c/code\u003e for algorithmic references.\n\u003c/p\u003e\u003cp\u003eUses basic RealFloat functionality, \u003ccode\u003e\u003ca\u003esqrt\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erecip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Algorithms",
          "name": "genericLog2",
          "package": "variable-precision",
          "signature": "Int-\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Compute log See genericLog for algorithmic references Uses basic RealFloat functionality sqrt and recip",
          "hierarchy": "Numeric VariablePrecision Algorithms",
          "module": "Numeric.VariablePrecision.Algorithms",
          "name": "genericLog2",
          "normalized": "Int-\u003ea",
          "package": "variable-precision",
          "partial": "Log",
          "signature": "Int-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Algorithms.html#v:genericLog2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecial values implemented using basic RealFloat functionality.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Algorithms",
          "name": "genericNegativeInfinity",
          "package": "variable-precision",
          "signature": "a",
          "source": "src/Numeric-VariablePrecision-Algorithms.html#genericNegativeInfinity",
          "type": "function"
        },
        "index": {
          "description": "Special values implemented using basic RealFloat functionality",
          "hierarchy": "Numeric VariablePrecision Algorithms",
          "module": "Numeric.VariablePrecision.Algorithms",
          "name": "genericNegativeInfinity",
          "package": "variable-precision",
          "partial": "Negative Infinity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Algorithms.html#v:genericNegativeInfinity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecial values implemented using basic RealFloat functionality.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Algorithms",
          "name": "genericNegativeZero",
          "package": "variable-precision",
          "signature": "a",
          "source": "src/Numeric-VariablePrecision-Algorithms.html#genericNegativeZero",
          "type": "function"
        },
        "index": {
          "description": "Special values implemented using basic RealFloat functionality",
          "hierarchy": "Numeric VariablePrecision Algorithms",
          "module": "Numeric.VariablePrecision.Algorithms",
          "name": "genericNegativeZero",
          "package": "variable-precision",
          "partial": "Negative Zero",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Algorithms.html#v:genericNegativeZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecial values implemented using basic RealFloat functionality.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Algorithms",
          "name": "genericNotANumber",
          "package": "variable-precision",
          "signature": "a",
          "source": "src/Numeric-VariablePrecision-Algorithms.html#genericNotANumber",
          "type": "function"
        },
        "index": {
          "description": "Special values implemented using basic RealFloat functionality",
          "hierarchy": "Numeric VariablePrecision Algorithms",
          "module": "Numeric.VariablePrecision.Algorithms",
          "name": "genericNotANumber",
          "package": "variable-precision",
          "partial": "Not ANumber",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Algorithms.html#v:genericNotANumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute pi using the method described in section 8 of\n   \u003cem\u003eMultiple-precision zero-finding methods and the complexity of elementary function evaluation\u003c/em\u003e\n   Richard P Brent, 1975 (revised May 30, 2010),\n   \u003ca\u003ehttp://arxiv.org/abs/1004.3412\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eUses basic RealFloat functionality, '(/)', and \u003ccode\u003e\u003ca\u003esqrt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Algorithms",
          "name": "genericPi",
          "package": "variable-precision",
          "signature": "Int-\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Compute pi using the method described in section of Multiple-precision zero-finding methods and the complexity of elementary function evaluation Richard Brent revised May http arxiv.org abs Uses basic RealFloat functionality and sqrt",
          "hierarchy": "Numeric VariablePrecision Algorithms",
          "module": "Numeric.VariablePrecision.Algorithms",
          "name": "genericPi",
          "normalized": "Int-\u003ea",
          "package": "variable-precision",
          "partial": "Pi",
          "signature": "Int-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Algorithms.html#v:genericPi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecial values implemented using basic RealFloat functionality.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Algorithms",
          "name": "genericPositiveInfinity",
          "package": "variable-precision",
          "signature": "a",
          "source": "src/Numeric-VariablePrecision-Algorithms.html#genericPositiveInfinity",
          "type": "function"
        },
        "index": {
          "description": "Special values implemented using basic RealFloat functionality",
          "hierarchy": "Numeric VariablePrecision Algorithms",
          "module": "Numeric.VariablePrecision.Algorithms",
          "name": "genericPositiveInfinity",
          "package": "variable-precision",
          "partial": "Positive Infinity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Algorithms.html#v:genericPositiveInfinity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecial values implemented using basic RealFloat functionality.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Algorithms",
          "name": "genericPositiveZero",
          "package": "variable-precision",
          "signature": "a",
          "source": "src/Numeric-VariablePrecision-Algorithms.html#genericPositiveZero",
          "type": "function"
        },
        "index": {
          "description": "Special values implemented using basic RealFloat functionality",
          "hierarchy": "Numeric VariablePrecision Algorithms",
          "module": "Numeric.VariablePrecision.Algorithms",
          "name": "genericPositiveZero",
          "package": "variable-precision",
          "partial": "Positive Zero",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Algorithms.html#v:genericPositiveZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute a reciprocal using the Newton-Raphson division algorithm,\n   as described in\n   \u003ca\u003ehttp://en.wikipedia.org/wiki/Division_%28digital%29#Newton.E2.80.93Raphson_division\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eUses only basic RealFloat functionality.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Algorithms",
          "name": "genericRecip",
          "package": "variable-precision",
          "signature": "Int-\u003e a-\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Compute reciprocal using the Newton-Raphson division algorithm as described in http en.wikipedia.org wiki Division digital Newton.E2.80.93Raphson division Uses only basic RealFloat functionality",
          "hierarchy": "Numeric VariablePrecision Algorithms",
          "module": "Numeric.VariablePrecision.Algorithms",
          "name": "genericRecip",
          "normalized": "Int-\u003ea-\u003ea",
          "package": "variable-precision",
          "partial": "Recip",
          "signature": "Int-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Algorithms.html#v:genericRecip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute \u003ccode\u003e\u003ca\u003esin\u003c/a\u003e\u003c/code\u003e using the method described in section 3 of\n   \u003cem\u003eEfficient multiple-precision evaluation of elementary functions\u003c/em\u003e\n   David M Smith, 1989,\n   \u003ca\u003ehttp://digitalcommons.lmu.edu/math_fac/1/\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eRequires a value for pi.\n\u003c/p\u003e\u003cp\u003eUses basic RealFloat functionality, '(/)', and sqrt.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Algorithms",
          "name": "genericSin",
          "package": "variable-precision",
          "signature": "Int-\u003e a-\u003e a-\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Compute sin using the method described in section of Efficient multiple-precision evaluation of elementary functions David Smith http digitalcommons.lmu.edu math fac Requires value for pi Uses basic RealFloat functionality and sqrt",
          "hierarchy": "Numeric VariablePrecision Algorithms",
          "module": "Numeric.VariablePrecision.Algorithms",
          "name": "genericSin",
          "normalized": "Int-\u003ea-\u003ea-\u003ea",
          "package": "variable-precision",
          "partial": "Sin",
          "signature": "Int-\u003ea-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Algorithms.html#v:genericSin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute a square root using Newton's method.\n\u003c/p\u003e\u003cp\u003eUses basic RealFloat functionality and '(/)'.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Algorithms",
          "name": "genericSqrt",
          "package": "variable-precision",
          "signature": "Int-\u003e a-\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Compute square root using Newton method Uses basic RealFloat functionality and",
          "hierarchy": "Numeric VariablePrecision Algorithms",
          "module": "Numeric.VariablePrecision.Algorithms",
          "name": "genericSqrt",
          "normalized": "Int-\u003ea-\u003ea",
          "package": "variable-precision",
          "partial": "Sqrt",
          "signature": "Int-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Algorithms.html#v:genericSqrt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert between generic \u003ccode\u003e\u003ca\u003eRealFloat\u003c/a\u003e\u003c/code\u003e types more efficiently than\n   \u003ccode\u003e\u003ca\u003erealToFrac\u003c/a\u003e\u003c/code\u003e.  Tries hard to preserve special values like\n   infinities and negative zero, but any NaN payload is lost.\n\u003c/p\u003e\u003cp\u003eUses only basic RealFloat functionality.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Algorithms",
          "name": "recodeFloat",
          "package": "variable-precision",
          "signature": "a -\u003e b",
          "source": "src/Numeric-VariablePrecision-Algorithms.html#recodeFloat",
          "type": "function"
        },
        "index": {
          "description": "Convert between generic RealFloat types more efficiently than realToFrac Tries hard to preserve special values like infinities and negative zero but any NaN payload is lost Uses only basic RealFloat functionality",
          "hierarchy": "Numeric VariablePrecision Algorithms",
          "module": "Numeric.VariablePrecision.Algorithms",
          "name": "recodeFloat",
          "normalized": "a-\u003eb",
          "package": "variable-precision",
          "partial": "Float",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Algorithms.html#v:recodeFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if two numbers have the same sign.\n   May give a nonsense result if an argument is NaN.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Algorithms",
          "name": "sameSign",
          "package": "variable-precision",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Numeric-VariablePrecision-Algorithms.html#sameSign",
          "type": "function"
        },
        "index": {
          "description": "Check if two numbers have the same sign May give nonsense result if an argument is NaN",
          "hierarchy": "Numeric VariablePrecision Algorithms",
          "module": "Numeric.VariablePrecision.Algorithms",
          "name": "sameSign",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "variable-precision",
          "partial": "Sign",
          "signature": "a-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Algorithms.html#v:sameSign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a function from Double to generic \u003ccode\u003e\u003ca\u003eRealFloat\u003c/a\u003e\u003c/code\u003e types.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Algorithms",
          "name": "viaDouble",
          "package": "variable-precision",
          "signature": "(Double -\u003e Double) -\u003e a -\u003e b",
          "source": "src/Numeric-VariablePrecision-Algorithms.html#viaDouble",
          "type": "function"
        },
        "index": {
          "description": "Lift function from Double to generic RealFloat types",
          "hierarchy": "Numeric VariablePrecision Algorithms",
          "module": "Numeric.VariablePrecision.Algorithms",
          "name": "viaDouble",
          "normalized": "(Double-\u003eDouble)-\u003ea-\u003eb",
          "package": "variable-precision",
          "partial": "Double",
          "signature": "(Double-\u003eDouble)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Algorithms.html#v:viaDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAliases for \u003ccode\u003e\u003ca\u003erecodeFloat\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erecodeComplex\u003c/a\u003e\u003c/code\u003e with specialized types.\n\u003c/p\u003e\u003cp\u003eAliases for commonly desired types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "Aliases",
          "package": "variable-precision",
          "source": "src/Numeric-VariablePrecision-Aliases.html",
          "type": "module"
        },
        "index": {
          "description": "Aliases for recodeFloat and recodeComplex with specialized types Aliases for commonly desired types",
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "Aliases",
          "package": "variable-precision",
          "partial": "Aliases",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "C",
          "package": "variable-precision",
          "source": "src/Numeric-VariablePrecision-Aliases.html#C",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "C",
          "package": "variable-precision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:C"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "CF",
          "package": "variable-precision",
          "source": "src/Numeric-VariablePrecision-Aliases.html#CF",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "CF",
          "package": "variable-precision",
          "partial": "CF",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:CF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "CF16",
          "package": "variable-precision",
          "source": "src/Numeric-VariablePrecision-Aliases.html#CF16",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "CF16",
          "package": "variable-precision",
          "partial": "CF",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:CF16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "CF24",
          "package": "variable-precision",
          "source": "src/Numeric-VariablePrecision-Aliases.html#CF24",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "CF24",
          "package": "variable-precision",
          "partial": "CF",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:CF24"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "CF32",
          "package": "variable-precision",
          "source": "src/Numeric-VariablePrecision-Aliases.html#CF32",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "CF32",
          "package": "variable-precision",
          "partial": "CF",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:CF32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "CF40",
          "package": "variable-precision",
          "source": "src/Numeric-VariablePrecision-Aliases.html#CF40",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "CF40",
          "package": "variable-precision",
          "partial": "CF",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:CF40"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "CF48",
          "package": "variable-precision",
          "source": "src/Numeric-VariablePrecision-Aliases.html#CF48",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "CF48",
          "package": "variable-precision",
          "partial": "CF",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:CF48"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "CF53",
          "package": "variable-precision",
          "source": "src/Numeric-VariablePrecision-Aliases.html#CF53",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "CF53",
          "package": "variable-precision",
          "partial": "CF",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:CF53"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "CF8",
          "package": "variable-precision",
          "source": "src/Numeric-VariablePrecision-Aliases.html#CF8",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "CF8",
          "package": "variable-precision",
          "partial": "CF",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:CF8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "CX",
          "package": "variable-precision",
          "source": "src/Numeric-VariablePrecision-Aliases.html#CX",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "CX",
          "package": "variable-precision",
          "partial": "CX",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:CX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "CX16",
          "package": "variable-precision",
          "source": "src/Numeric-VariablePrecision-Aliases.html#CX16",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "CX16",
          "package": "variable-precision",
          "partial": "CX",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:CX16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "CX24",
          "package": "variable-precision",
          "source": "src/Numeric-VariablePrecision-Aliases.html#CX24",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "CX24",
          "package": "variable-precision",
          "partial": "CX",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:CX24"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "CX32",
          "package": "variable-precision",
          "source": "src/Numeric-VariablePrecision-Aliases.html#CX32",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "CX32",
          "package": "variable-precision",
          "partial": "CX",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:CX32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "CX40",
          "package": "variable-precision",
          "source": "src/Numeric-VariablePrecision-Aliases.html#CX40",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "CX40",
          "package": "variable-precision",
          "partial": "CX",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:CX40"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "CX48",
          "package": "variable-precision",
          "source": "src/Numeric-VariablePrecision-Aliases.html#CX48",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "CX48",
          "package": "variable-precision",
          "partial": "CX",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:CX48"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "CX53",
          "package": "variable-precision",
          "source": "src/Numeric-VariablePrecision-Aliases.html#CX53",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "CX53",
          "package": "variable-precision",
          "partial": "CX",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:CX53"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "CX8",
          "package": "variable-precision",
          "source": "src/Numeric-VariablePrecision-Aliases.html#CX8",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "CX8",
          "package": "variable-precision",
          "partial": "CX",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:CX8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "F",
          "package": "variable-precision",
          "source": "src/Numeric-VariablePrecision-Aliases.html#F",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "F",
          "package": "variable-precision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:F"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "F16",
          "package": "variable-precision",
          "source": "src/Numeric-VariablePrecision-Aliases.html#F16",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "F16",
          "package": "variable-precision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:F16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "F24",
          "package": "variable-precision",
          "source": "src/Numeric-VariablePrecision-Aliases.html#F24",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "F24",
          "package": "variable-precision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:F24"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "F32",
          "package": "variable-precision",
          "source": "src/Numeric-VariablePrecision-Aliases.html#F32",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "F32",
          "package": "variable-precision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:F32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "F40",
          "package": "variable-precision",
          "source": "src/Numeric-VariablePrecision-Aliases.html#F40",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "F40",
          "package": "variable-precision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:F40"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "F48",
          "package": "variable-precision",
          "source": "src/Numeric-VariablePrecision-Aliases.html#F48",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "F48",
          "package": "variable-precision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:F48"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "F53",
          "package": "variable-precision",
          "source": "src/Numeric-VariablePrecision-Aliases.html#F53",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "F53",
          "package": "variable-precision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:F53"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "F8",
          "package": "variable-precision",
          "source": "src/Numeric-VariablePrecision-Aliases.html#F8",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "F8",
          "package": "variable-precision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:F8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "X",
          "package": "variable-precision",
          "source": "src/Numeric-VariablePrecision-Aliases.html#X",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "X",
          "package": "variable-precision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:X"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "X16",
          "package": "variable-precision",
          "source": "src/Numeric-VariablePrecision-Aliases.html#X16",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "X16",
          "package": "variable-precision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:X16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "X24",
          "package": "variable-precision",
          "source": "src/Numeric-VariablePrecision-Aliases.html#X24",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "X24",
          "package": "variable-precision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:X24"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "X32",
          "package": "variable-precision",
          "source": "src/Numeric-VariablePrecision-Aliases.html#X32",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "X32",
          "package": "variable-precision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:X32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "X40",
          "package": "variable-precision",
          "source": "src/Numeric-VariablePrecision-Aliases.html#X40",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "X40",
          "package": "variable-precision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:X40"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "X48",
          "package": "variable-precision",
          "source": "src/Numeric-VariablePrecision-Aliases.html#X48",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "X48",
          "package": "variable-precision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:X48"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "X53",
          "package": "variable-precision",
          "source": "src/Numeric-VariablePrecision-Aliases.html#X53",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "X53",
          "package": "variable-precision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:X53"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "X8",
          "package": "variable-precision",
          "source": "src/Numeric-VariablePrecision-Aliases.html#X8",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "X8",
          "package": "variable-precision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#t:X8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "cf16",
          "package": "variable-precision",
          "signature": "CF16",
          "source": "src/Numeric-VariablePrecision-Aliases.html#cf16",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "cf16",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:cf16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "cf24",
          "package": "variable-precision",
          "signature": "CF24",
          "source": "src/Numeric-VariablePrecision-Aliases.html#cf24",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "cf24",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:cf24"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "cf32",
          "package": "variable-precision",
          "signature": "CF32",
          "source": "src/Numeric-VariablePrecision-Aliases.html#cf32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "cf32",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:cf32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "cf40",
          "package": "variable-precision",
          "signature": "CF40",
          "source": "src/Numeric-VariablePrecision-Aliases.html#cf40",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "cf40",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:cf40"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "cf48",
          "package": "variable-precision",
          "signature": "CF48",
          "source": "src/Numeric-VariablePrecision-Aliases.html#cf48",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "cf48",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:cf48"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "cf53",
          "package": "variable-precision",
          "signature": "CF53",
          "source": "src/Numeric-VariablePrecision-Aliases.html#cf53",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "cf53",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:cf53"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "cf8",
          "package": "variable-precision",
          "signature": "CF8",
          "source": "src/Numeric-VariablePrecision-Aliases.html#cf8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "cf8",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:cf8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "cx16",
          "package": "variable-precision",
          "signature": "CX16",
          "source": "src/Numeric-VariablePrecision-Aliases.html#cx16",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "cx16",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:cx16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "cx24",
          "package": "variable-precision",
          "signature": "CX24",
          "source": "src/Numeric-VariablePrecision-Aliases.html#cx24",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "cx24",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:cx24"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "cx32",
          "package": "variable-precision",
          "signature": "CX32",
          "source": "src/Numeric-VariablePrecision-Aliases.html#cx32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "cx32",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:cx32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "cx40",
          "package": "variable-precision",
          "signature": "CX40",
          "source": "src/Numeric-VariablePrecision-Aliases.html#cx40",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "cx40",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:cx40"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "cx48",
          "package": "variable-precision",
          "signature": "CX48",
          "source": "src/Numeric-VariablePrecision-Aliases.html#cx48",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "cx48",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:cx48"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "cx53",
          "package": "variable-precision",
          "signature": "CX53",
          "source": "src/Numeric-VariablePrecision-Aliases.html#cx53",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "cx53",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:cx53"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "cx8",
          "package": "variable-precision",
          "signature": "CX8",
          "source": "src/Numeric-VariablePrecision-Aliases.html#cx8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "cx8",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:cx8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "f16",
          "package": "variable-precision",
          "signature": "F16",
          "source": "src/Numeric-VariablePrecision-Aliases.html#f16",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "f16",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:f16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "f24",
          "package": "variable-precision",
          "signature": "F24",
          "source": "src/Numeric-VariablePrecision-Aliases.html#f24",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "f24",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:f24"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "f32",
          "package": "variable-precision",
          "signature": "F32",
          "source": "src/Numeric-VariablePrecision-Aliases.html#f32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "f32",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:f32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "f40",
          "package": "variable-precision",
          "signature": "F40",
          "source": "src/Numeric-VariablePrecision-Aliases.html#f40",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "f40",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:f40"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "f48",
          "package": "variable-precision",
          "signature": "F48",
          "source": "src/Numeric-VariablePrecision-Aliases.html#f48",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "f48",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:f48"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "f53",
          "package": "variable-precision",
          "signature": "F53",
          "source": "src/Numeric-VariablePrecision-Aliases.html#f53",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "f53",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:f53"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "f8",
          "package": "variable-precision",
          "signature": "F8",
          "source": "src/Numeric-VariablePrecision-Aliases.html#f8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "f8",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:f8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert from a Double to the same precision.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "fromComplexDouble",
          "package": "variable-precision",
          "signature": "Complex Double -\u003e CF53",
          "source": "src/Numeric-VariablePrecision-Aliases.html#fromComplexDouble",
          "type": "function"
        },
        "index": {
          "description": "Convert from Double to the same precision",
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "fromComplexDouble",
          "normalized": "Complex Double-\u003eCF",
          "package": "variable-precision",
          "partial": "Complex Double",
          "signature": "Complex Double-\u003eCF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:fromComplexDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert from a Float to the same precision.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "fromComplexFloat",
          "package": "variable-precision",
          "signature": "Complex Float -\u003e CF24",
          "source": "src/Numeric-VariablePrecision-Aliases.html#fromComplexFloat",
          "type": "function"
        },
        "index": {
          "description": "Convert from Float to the same precision",
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "fromComplexFloat",
          "normalized": "Complex Float-\u003eCF",
          "package": "variable-precision",
          "partial": "Complex Float",
          "signature": "Complex Float-\u003eCF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:fromComplexFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert from a Double to the same precision.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "fromDouble",
          "package": "variable-precision",
          "signature": "Double -\u003e F53",
          "source": "src/Numeric-VariablePrecision-Aliases.html#fromDouble",
          "type": "function"
        },
        "index": {
          "description": "Convert from Double to the same precision",
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "fromDouble",
          "normalized": "Double-\u003eF",
          "package": "variable-precision",
          "partial": "Double",
          "signature": "Double-\u003eF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:fromDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert from a Float to the same precision.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "fromFloat",
          "package": "variable-precision",
          "signature": "Float -\u003e F24",
          "source": "src/Numeric-VariablePrecision-Aliases.html#fromFloat",
          "type": "function"
        },
        "index": {
          "description": "Convert from Float to the same precision",
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "fromFloat",
          "normalized": "Float-\u003eF",
          "package": "variable-precision",
          "partial": "Float",
          "signature": "Float-\u003eF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:fromFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert to a Double from the same precision.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "toComplexDouble",
          "package": "variable-precision",
          "signature": "CF53 -\u003e Complex Double",
          "source": "src/Numeric-VariablePrecision-Aliases.html#toComplexDouble",
          "type": "function"
        },
        "index": {
          "description": "Convert to Double from the same precision",
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "toComplexDouble",
          "normalized": "CF-\u003eComplex Double",
          "package": "variable-precision",
          "partial": "Complex Double",
          "signature": "CF-\u003eComplex Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:toComplexDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert to a Float from the same precision.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "toComplexFloat",
          "package": "variable-precision",
          "signature": "CF24 -\u003e Complex Float",
          "source": "src/Numeric-VariablePrecision-Aliases.html#toComplexFloat",
          "type": "function"
        },
        "index": {
          "description": "Convert to Float from the same precision",
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "toComplexFloat",
          "normalized": "CF-\u003eComplex Float",
          "package": "variable-precision",
          "partial": "Complex Float",
          "signature": "CF-\u003eComplex Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:toComplexFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert to a Double from the same precision.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "toDouble",
          "package": "variable-precision",
          "signature": "F53 -\u003e Double",
          "source": "src/Numeric-VariablePrecision-Aliases.html#toDouble",
          "type": "function"
        },
        "index": {
          "description": "Convert to Double from the same precision",
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "toDouble",
          "normalized": "F-\u003eDouble",
          "package": "variable-precision",
          "partial": "Double",
          "signature": "F-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:toDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert to a Float from the same precision.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "toFloat",
          "package": "variable-precision",
          "signature": "F24 -\u003e Float",
          "source": "src/Numeric-VariablePrecision-Aliases.html#toFloat",
          "type": "function"
        },
        "index": {
          "description": "Convert to Float from the same precision",
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "toFloat",
          "normalized": "F-\u003eFloat",
          "package": "variable-precision",
          "partial": "Float",
          "signature": "F-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:toFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "x16",
          "package": "variable-precision",
          "signature": "X16",
          "source": "src/Numeric-VariablePrecision-Aliases.html#x16",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "x16",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:x16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "x24",
          "package": "variable-precision",
          "signature": "X24",
          "source": "src/Numeric-VariablePrecision-Aliases.html#x24",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "x24",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:x24"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "x32",
          "package": "variable-precision",
          "signature": "X32",
          "source": "src/Numeric-VariablePrecision-Aliases.html#x32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "x32",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:x32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "x40",
          "package": "variable-precision",
          "signature": "X40",
          "source": "src/Numeric-VariablePrecision-Aliases.html#x40",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "x40",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:x40"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "x48",
          "package": "variable-precision",
          "signature": "X48",
          "source": "src/Numeric-VariablePrecision-Aliases.html#x48",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "x48",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:x48"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "x53",
          "package": "variable-precision",
          "signature": "X53",
          "source": "src/Numeric-VariablePrecision-Aliases.html#x53",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "x53",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:x53"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "x8",
          "package": "variable-precision",
          "signature": "X8",
          "source": "src/Numeric-VariablePrecision-Aliases.html#x8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Aliases",
          "module": "Numeric.VariablePrecision.Aliases",
          "name": "x8",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Aliases.html#v:x8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eComplex numbers with variable precision.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.VariablePrecision.Complex",
          "name": "Complex",
          "package": "variable-precision",
          "source": "src/Numeric-VariablePrecision-Complex.html",
          "type": "module"
        },
        "index": {
          "description": "Complex numbers with variable precision",
          "hierarchy": "Numeric VariablePrecision Complex",
          "module": "Numeric.VariablePrecision.Complex",
          "name": "Complex",
          "package": "variable-precision",
          "partial": "Complex",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Complex.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNewtype wrapper around \u003ccode\u003e\u003ca\u003eComplex\u003c/a\u003e\u003c/code\u003e so that instances can be written\n   for \u003ccode\u003e\u003ca\u003eHasPrecision\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eVariablePrecision\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Complex",
          "name": "VComplex",
          "package": "variable-precision",
          "source": "src/Numeric-VariablePrecision-Complex.html#VComplex",
          "type": "data"
        },
        "index": {
          "description": "Newtype wrapper around Complex so that instances can be written for HasPrecision and VariablePrecision",
          "hierarchy": "Numeric VariablePrecision Complex",
          "module": "Numeric.VariablePrecision.Complex",
          "name": "VComplex",
          "package": "variable-precision",
          "partial": "VComplex",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Complex.html#t:VComplex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert \u003ccode\u003e\u003ca\u003eComplex\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eVComplex\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Complex",
          "name": "fromComplex",
          "package": "variable-precision",
          "signature": "Complex (t p) -\u003e VComplex t p",
          "source": "src/Numeric-VariablePrecision-Complex.html#fromComplex",
          "type": "function"
        },
        "index": {
          "description": "Convert Complex to VComplex",
          "hierarchy": "Numeric VariablePrecision Complex",
          "module": "Numeric.VariablePrecision.Complex",
          "name": "fromComplex",
          "normalized": "Complex(a b)-\u003eVComplex a b",
          "package": "variable-precision",
          "partial": "Complex",
          "signature": "Complex(t p)-\u003eVComplex t p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Complex.html#v:fromComplex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThaw a 'Complex DFixed'.  Results in \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e on precision mismatch.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Complex",
          "name": "fromComplexDFixed",
          "package": "variable-precision",
          "signature": "Complex DFixed -\u003e Maybe (VComplex VFixed p)",
          "source": "src/Numeric-VariablePrecision-Complex.html#fromComplexDFixed",
          "type": "function"
        },
        "index": {
          "description": "Thaw Complex DFixed Results in Nothing on precision mismatch",
          "hierarchy": "Numeric VariablePrecision Complex",
          "module": "Numeric.VariablePrecision.Complex",
          "name": "fromComplexDFixed",
          "normalized": "Complex DFixed-\u003eMaybe(VComplex VFixed a)",
          "package": "variable-precision",
          "partial": "Complex DFixed",
          "signature": "Complex DFixed-\u003eMaybe(VComplex VFixed p)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Complex.html#v:fromComplexDFixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThaw a 'Complex DFloat'.  Results in \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e on precision mismatch.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Complex",
          "name": "fromComplexDFloat",
          "package": "variable-precision",
          "signature": "Complex DFloat -\u003e Maybe (VComplex VFloat p)",
          "source": "src/Numeric-VariablePrecision-Complex.html#fromComplexDFloat",
          "type": "function"
        },
        "index": {
          "description": "Thaw Complex DFloat Results in Nothing on precision mismatch",
          "hierarchy": "Numeric VariablePrecision Complex",
          "module": "Numeric.VariablePrecision.Complex",
          "name": "fromComplexDFloat",
          "normalized": "Complex DFloat-\u003eMaybe(VComplex VFloat a)",
          "package": "variable-precision",
          "partial": "Complex DFloat",
          "signature": "Complex DFloat-\u003eMaybe(VComplex VFloat p)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Complex.html#v:fromComplexDFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMuch like \u003ccode\u003emapComplex\u003c/code\u003e \u003ccode\u003e\u003ca\u003erecodeFloat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Complex",
          "name": "recodeComplex",
          "package": "variable-precision",
          "signature": "Complex a -\u003e Complex b",
          "source": "src/Numeric-VariablePrecision-Complex.html#recodeComplex",
          "type": "function"
        },
        "index": {
          "description": "Much like mapComplex recodeFloat",
          "hierarchy": "Numeric VariablePrecision Complex",
          "module": "Numeric.VariablePrecision.Complex",
          "name": "recodeComplex",
          "normalized": "Complex a-\u003eComplex b",
          "package": "variable-precision",
          "partial": "Complex",
          "signature": "Complex a-\u003eComplex b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Complex.html#v:recodeComplex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMuch like \u003ccode\u003emapComplex\u003c/code\u003e \u003ccode\u003e\u003ca\u003escaleFloat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Complex",
          "name": "scaleComplex",
          "package": "variable-precision",
          "signature": "Int -\u003e Complex r -\u003e Complex r",
          "source": "src/Numeric-VariablePrecision-Complex.html#scaleComplex",
          "type": "function"
        },
        "index": {
          "description": "Much like mapComplex scaleFloat",
          "hierarchy": "Numeric VariablePrecision Complex",
          "module": "Numeric.VariablePrecision.Complex",
          "name": "scaleComplex",
          "normalized": "Int-\u003eComplex a-\u003eComplex a",
          "package": "variable-precision",
          "partial": "Complex",
          "signature": "Int-\u003eComplex r-\u003eComplex r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Complex.html#v:scaleComplex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMuch like \u003ccode\u003e\u003ca\u003ewithComplex\u003c/a\u003e\u003c/code\u003e \u003ccode\u003escaleComplex'\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Complex",
          "name": "scaleVComplex",
          "package": "variable-precision",
          "signature": "Int -\u003e VComplex VFloat p -\u003e VComplex VFloat p",
          "source": "src/Numeric-VariablePrecision-Complex.html#scaleVComplex",
          "type": "function"
        },
        "index": {
          "description": "Much like withComplex scaleComplex",
          "hierarchy": "Numeric VariablePrecision Complex",
          "module": "Numeric.VariablePrecision.Complex",
          "name": "scaleVComplex",
          "normalized": "Int-\u003eVComplex VFloat a-\u003eVComplex VFloat a",
          "package": "variable-precision",
          "partial": "VComplex",
          "signature": "Int-\u003eVComplex VFloat p-\u003eVComplex VFloat p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Complex.html#v:scaleVComplex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert \u003ccode\u003e\u003ca\u003eVComplex\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eComplex\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Complex",
          "name": "toComplex",
          "package": "variable-precision",
          "signature": "VComplex t p -\u003e Complex (t p)",
          "source": "src/Numeric-VariablePrecision-Complex.html#toComplex",
          "type": "function"
        },
        "index": {
          "description": "Convert VComplex to Complex",
          "hierarchy": "Numeric VariablePrecision Complex",
          "module": "Numeric.VariablePrecision.Complex",
          "name": "toComplex",
          "normalized": "VComplex a b-\u003eComplex(a b)",
          "package": "variable-precision",
          "partial": "Complex",
          "signature": "VComplex t p-\u003eComplex(t p)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Complex.html#v:toComplex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFreeze a 'VComplex VFixed'.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Complex",
          "name": "toComplexDFixed",
          "package": "variable-precision",
          "signature": "VComplex VFixed p -\u003e Complex DFixed",
          "source": "src/Numeric-VariablePrecision-Complex.html#toComplexDFixed",
          "type": "function"
        },
        "index": {
          "description": "Freeze VComplex VFixed",
          "hierarchy": "Numeric VariablePrecision Complex",
          "module": "Numeric.VariablePrecision.Complex",
          "name": "toComplexDFixed",
          "normalized": "VComplex VFixed a-\u003eComplex DFixed",
          "package": "variable-precision",
          "partial": "Complex DFixed",
          "signature": "VComplex VFixed p-\u003eComplex DFixed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Complex.html#v:toComplexDFixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFreeze a 'VComplex VFloat'.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Complex",
          "name": "toComplexDFloat",
          "package": "variable-precision",
          "signature": "VComplex VFloat p -\u003e Complex DFloat",
          "source": "src/Numeric-VariablePrecision-Complex.html#toComplexDFloat",
          "type": "function"
        },
        "index": {
          "description": "Freeze VComplex VFloat",
          "hierarchy": "Numeric VariablePrecision Complex",
          "module": "Numeric.VariablePrecision.Complex",
          "name": "toComplexDFloat",
          "normalized": "VComplex VFloat a-\u003eComplex DFloat",
          "package": "variable-precision",
          "partial": "Complex DFloat",
          "signature": "VComplex VFloat p-\u003eComplex DFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Complex.html#v:toComplexDFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift an operation on \u003ccode\u003e\u003ca\u003eComplex\u003c/a\u003e\u003c/code\u003e to one on \u003ccode\u003e\u003ca\u003eVComplex\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Complex",
          "name": "withComplex",
          "package": "variable-precision",
          "signature": "(Complex (t p) -\u003e Complex (t q)) -\u003e VComplex t p -\u003e VComplex t q",
          "source": "src/Numeric-VariablePrecision-Complex.html#withComplex",
          "type": "function"
        },
        "index": {
          "description": "Lift an operation on Complex to one on VComplex",
          "hierarchy": "Numeric VariablePrecision Complex",
          "module": "Numeric.VariablePrecision.Complex",
          "name": "withComplex",
          "normalized": "(Complex(a b)-\u003eComplex(a c))-\u003eVComplex a b-\u003eVComplex a c",
          "package": "variable-precision",
          "partial": "Complex",
          "signature": "(Complex(t p)-\u003eComplex(t q))-\u003eVComplex t p-\u003eVComplex t q",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Complex.html#v:withComplex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThaw a 'Complex DFixed' to its natural precision.  \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is passed on\n   precision mismatch between real and imaginary parts.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Complex",
          "name": "withComplexDFixed",
          "package": "variable-precision",
          "signature": "Maybe (VComplex VFixed p) -\u003e r) -\u003e r",
          "source": "src/Numeric-VariablePrecision-Complex.html#withComplexDFixed",
          "type": "function"
        },
        "index": {
          "description": "Thaw Complex DFixed to its natural precision Nothing is passed on precision mismatch between real and imaginary parts",
          "hierarchy": "Numeric VariablePrecision Complex",
          "module": "Numeric.VariablePrecision.Complex",
          "name": "withComplexDFixed",
          "normalized": "Maybe(VComplex VFixed a)-\u003eb)-\u003eb",
          "package": "variable-precision",
          "partial": "Complex DFixed",
          "signature": "Maybe(VComplex VFixed p)-\u003er)-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Complex.html#v:withComplexDFixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThaw a 'Complex DFloat' to its natural precision.  \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is passed on\n   precision mismatch between real and imaginary parts.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Complex",
          "name": "withComplexDFloat",
          "package": "variable-precision",
          "signature": "Maybe (VComplex VFloat p) -\u003e r) -\u003e r",
          "source": "src/Numeric-VariablePrecision-Complex.html#withComplexDFloat",
          "type": "function"
        },
        "index": {
          "description": "Thaw Complex DFloat to its natural precision Nothing is passed on precision mismatch between real and imaginary parts",
          "hierarchy": "Numeric VariablePrecision Complex",
          "module": "Numeric.VariablePrecision.Complex",
          "name": "withComplexDFloat",
          "normalized": "Maybe(VComplex VFloat a)-\u003eb)-\u003eb",
          "package": "variable-precision",
          "partial": "Complex DFloat",
          "signature": "Maybe(VComplex VFloat p)-\u003er)-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Complex.html#v:withComplexDFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVariable precision software fixed point based on \u003ccode\u003eInteger\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAccuracy has not been extensively verified.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e reifyPrecision 1000 $ \\prec -\u003e\n    show $ auto (355 :: VFixed N15) / 113 `atPrecision` prec\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Numeric.VariablePrecision.Fixed",
          "name": "Fixed",
          "package": "variable-precision",
          "source": "src/Numeric-VariablePrecision-Fixed.html",
          "type": "module"
        },
        "index": {
          "description": "Variable precision software fixed point based on Integer Accuracy has not been extensively verified Example reifyPrecision prec show auto VFixed N15 atPrecision prec",
          "hierarchy": "Numeric VariablePrecision Fixed",
          "module": "Numeric.VariablePrecision.Fixed",
          "name": "Fixed",
          "package": "variable-precision",
          "partial": "Fixed",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Fixed.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA concrete format suitable for storage or wire transmission.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Fixed",
          "name": "DFixed",
          "package": "variable-precision",
          "source": "src/Numeric-VariablePrecision-Fixed.html#DFixed",
          "type": "data"
        },
        "index": {
          "description": "concrete format suitable for storage or wire transmission",
          "hierarchy": "Numeric VariablePrecision Fixed",
          "module": "Numeric.VariablePrecision.Fixed",
          "name": "DFixed",
          "package": "variable-precision",
          "partial": "DFixed",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Fixed.html#t:DFixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA software implementation of fixed point arithmetic, using an\n   \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e adjusted to \u003ccode\u003ep\u003c/code\u003e bits after the binary point.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Fixed",
          "name": "VFixed",
          "package": "variable-precision",
          "source": "src/Numeric-VariablePrecision-Fixed.html#VFixed",
          "type": "data"
        },
        "index": {
          "description": "software implementation of fixed point arithmetic using an Integer adjusted to bits after the binary point",
          "hierarchy": "Numeric VariablePrecision Fixed",
          "module": "Numeric.VariablePrecision.Fixed",
          "name": "VFixed",
          "package": "variable-precision",
          "partial": "VFixed",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Fixed.html#t:VFixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Fixed",
          "name": "DFixed",
          "package": "variable-precision",
          "signature": "DFixed",
          "source": "src/Numeric-VariablePrecision-Fixed.html#DFixed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Fixed",
          "module": "Numeric.VariablePrecision.Fixed",
          "name": "DFixed",
          "package": "variable-precision",
          "partial": "DFixed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Fixed.html#v:DFixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Fixed",
          "name": "dxMantissa",
          "package": "variable-precision",
          "signature": "Integer",
          "source": "src/Numeric-VariablePrecision-Fixed.html#DFixed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Fixed",
          "module": "Numeric.VariablePrecision.Fixed",
          "name": "dxMantissa",
          "package": "variable-precision",
          "partial": "Mantissa",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Fixed.html#v:dxMantissa"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Fixed",
          "name": "dxPrecision",
          "package": "variable-precision",
          "signature": "Word",
          "source": "src/Numeric-VariablePrecision-Fixed.html#DFixed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Fixed",
          "module": "Numeric.VariablePrecision.Fixed",
          "name": "dxPrecision",
          "package": "variable-precision",
          "partial": "Precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Fixed.html#v:dxPrecision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThaw a \u003ccode\u003e\u003ca\u003eDFixed\u003c/a\u003e\u003c/code\u003e.  Results in \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e on precision mismatch.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Fixed",
          "name": "fromDFixed",
          "package": "variable-precision",
          "signature": "DFixed -\u003e Maybe (VFixed p)",
          "source": "src/Numeric-VariablePrecision-Fixed.html#fromDFixed",
          "type": "function"
        },
        "index": {
          "description": "Thaw DFixed Results in Nothing on precision mismatch",
          "hierarchy": "Numeric VariablePrecision Fixed",
          "module": "Numeric.VariablePrecision.Fixed",
          "name": "fromDFixed",
          "normalized": "DFixed-\u003eMaybe(VFixed a)",
          "package": "variable-precision",
          "partial": "DFixed",
          "signature": "DFixed-\u003eMaybe(VFixed p)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Fixed.html#v:fromDFixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFreeze a \u003ccode\u003e\u003ca\u003eVFixed\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Fixed",
          "name": "toDFixed",
          "package": "variable-precision",
          "signature": "VFixed p -\u003e DFixed",
          "source": "src/Numeric-VariablePrecision-Fixed.html#toDFixed",
          "type": "function"
        },
        "index": {
          "description": "Freeze VFixed",
          "hierarchy": "Numeric VariablePrecision Fixed",
          "module": "Numeric.VariablePrecision.Fixed",
          "name": "toDFixed",
          "normalized": "VFixed a-\u003eDFixed",
          "package": "variable-precision",
          "partial": "DFixed",
          "signature": "VFixed p-\u003eDFixed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Fixed.html#v:toDFixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThaw a \u003ccode\u003e\u003ca\u003eDFixed\u003c/a\u003e\u003c/code\u003e to its natural precision.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Fixed",
          "name": "withDFixed",
          "package": "variable-precision",
          "signature": "VFixed p -\u003e r) -\u003e r",
          "source": "src/Numeric-VariablePrecision-Fixed.html#withDFixed",
          "type": "function"
        },
        "index": {
          "description": "Thaw DFixed to its natural precision",
          "hierarchy": "Numeric VariablePrecision Fixed",
          "module": "Numeric.VariablePrecision.Fixed",
          "name": "withDFixed",
          "normalized": "VFixed a-\u003eb)-\u003eb",
          "package": "variable-precision",
          "partial": "DFixed",
          "signature": "VFixed p-\u003er)-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Fixed.html#v:withDFixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVariable precision software floating point based on \u003ccode\u003e(Integer, Int)\u003c/code\u003e as\nused by \u003ccode\u003e\u003ca\u003edecodeFloat\u003c/a\u003e\u003c/code\u003e.  Supports infinities and NaN, but not negative\nzero or denormalization.\n\u003c/p\u003e\u003cp\u003eAccuracy has not been extensively verified, and termination of numerical\nalgorithms has not been proven.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.VariablePrecision.Float",
          "name": "Float",
          "package": "variable-precision",
          "source": "src/Numeric-VariablePrecision-Float.html",
          "type": "module"
        },
        "index": {
          "description": "Variable precision software floating point based on Integer Int as used by decodeFloat Supports infinities and NaN but not negative zero or denormalization Accuracy has not been extensively verified and termination of numerical algorithms has not been proven",
          "hierarchy": "Numeric VariablePrecision Float",
          "module": "Numeric.VariablePrecision.Float",
          "name": "Float",
          "package": "variable-precision",
          "partial": "Float",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Float.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA concrete format suitable for storage or wire transmission.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Float",
          "name": "DFloat",
          "package": "variable-precision",
          "source": "src/Numeric-VariablePrecision-Float.html#DFloat",
          "type": "data"
        },
        "index": {
          "description": "concrete format suitable for storage or wire transmission",
          "hierarchy": "Numeric VariablePrecision Float",
          "module": "Numeric.VariablePrecision.Float",
          "name": "DFloat",
          "package": "variable-precision",
          "partial": "DFloat",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Float.html#t:DFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA selection of norms.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Float",
          "name": "Normed",
          "package": "variable-precision",
          "source": "src/Numeric-VariablePrecision-Float.html#Normed",
          "type": "class"
        },
        "index": {
          "description": "selection of norms",
          "hierarchy": "Numeric VariablePrecision Float",
          "module": "Numeric.VariablePrecision.Float",
          "name": "Normed",
          "package": "variable-precision",
          "partial": "Normed",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Float.html#t:Normed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA software implementation of floating point arithmetic, using a strict\n   pair of \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e, scaled similarly to \u003ccode\u003e\u003ca\u003edecodeFloat\u003c/a\u003e\u003c/code\u003e, along\n   with additional values representing:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e positive infinity (\u003ccode\u003e1/0\u003c/code\u003e),\n\u003c/li\u003e\u003cli\u003e negative infinity (\u003ccode\u003e-1/0\u003c/code\u003e),\n\u003c/li\u003e\u003cli\u003e not a number (\u003ccode\u003e0/0\u003c/code\u003e).\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eFloating\u003c/a\u003e\u003c/code\u003e instance so far only implements algorithms for:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003epi\u003c/a\u003e\u003c/code\u003e,\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003esqrt\u003c/a\u003e\u003c/code\u003e,\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eexp\u003c/a\u003e\u003c/code\u003e,\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003elog\u003c/a\u003e\u003c/code\u003e,\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003esin\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ecos\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003etan\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThese \u003ccode\u003e\u003ca\u003eFloating\u003c/a\u003e\u003c/code\u003e methods transit via \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e and so have limited\n   precision:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003easin\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eacos\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eatan\u003c/a\u003e\u003c/code\u003e,\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003esinh\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ecosh\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003etanh\u003c/a\u003e\u003c/code\u003e,\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003easinh\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eacosh\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eatanh\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003efloatRange\u003c/a\u003e\u003c/code\u003e is arbitrarily limited to mitigate the problems that\n   occur when enormous integers might be needed during some number\n   type conversions (worst case consequence: program abort in gmp).\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Float",
          "name": "VFloat",
          "package": "variable-precision",
          "source": "src/Numeric-VariablePrecision-Float.html#VFloat",
          "type": "data"
        },
        "index": {
          "description": "software implementation of floating point arithmetic using strict pair of Integer and Int scaled similarly to decodeFloat along with additional values representing positive infinity negative infinity not number The Floating instance so far only implements algorithms for pi sqrt exp log sin cos tan These Floating methods transit via Double and so have limited precision asin acos atan sinh cosh tanh asinh acosh atanh floatRange is arbitrarily limited to mitigate the problems that occur when enormous integers might be needed during some number type conversions worst case consequence program abort in gmp",
          "hierarchy": "Numeric VariablePrecision Float",
          "module": "Numeric.VariablePrecision.Float",
          "name": "VFloat",
          "package": "variable-precision",
          "partial": "VFloat",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Float.html#t:VFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003eeffectivePrecision\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Float",
          "name": "(-@?)",
          "package": "variable-precision",
          "signature": "t p -\u003e t p -\u003e Int",
          "source": "src/Numeric-VariablePrecision-Float.html#-%40%3F",
          "type": "function"
        },
        "index": {
          "description": "An alias for effectivePrecision",
          "hierarchy": "Numeric VariablePrecision Float",
          "module": "Numeric.VariablePrecision.Float",
          "name": "(-@?) -@?",
          "normalized": "a b-\u003ea b-\u003eInt",
          "package": "variable-precision",
          "signature": "t p-\u003et p-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Float.html#v:-45--64--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Float",
          "name": "DFloat",
          "package": "variable-precision",
          "signature": "DFloat",
          "source": "src/Numeric-VariablePrecision-Float.html#DFloat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Float",
          "module": "Numeric.VariablePrecision.Float",
          "name": "DFloat",
          "package": "variable-precision",
          "partial": "DFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Float.html#v:DFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Float",
          "name": "DNegativeInfinity",
          "package": "variable-precision",
          "signature": "DNegativeInfinity",
          "source": "src/Numeric-VariablePrecision-Float.html#DFloat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Float",
          "module": "Numeric.VariablePrecision.Float",
          "name": "DNegativeInfinity",
          "package": "variable-precision",
          "partial": "DNegative Infinity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Float.html#v:DNegativeInfinity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Float",
          "name": "DNotANumber",
          "package": "variable-precision",
          "signature": "DNotANumber",
          "source": "src/Numeric-VariablePrecision-Float.html#DFloat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Float",
          "module": "Numeric.VariablePrecision.Float",
          "name": "DNotANumber",
          "package": "variable-precision",
          "partial": "DNot ANumber",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Float.html#v:DNotANumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Float",
          "name": "DPositiveInfinity",
          "package": "variable-precision",
          "signature": "DPositiveInfinity",
          "source": "src/Numeric-VariablePrecision-Float.html#DFloat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Float",
          "module": "Numeric.VariablePrecision.Float",
          "name": "DPositiveInfinity",
          "package": "variable-precision",
          "partial": "DPositive Infinity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Float.html#v:DPositiveInfinity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Float",
          "name": "DZero",
          "package": "variable-precision",
          "signature": "DZero",
          "source": "src/Numeric-VariablePrecision-Float.html#DFloat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Float",
          "module": "Numeric.VariablePrecision.Float",
          "name": "DZero",
          "package": "variable-precision",
          "partial": "DZero",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Float.html#v:DZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Float",
          "name": "dExponent",
          "package": "variable-precision",
          "signature": "Int",
          "source": "src/Numeric-VariablePrecision-Float.html#DFloat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Float",
          "module": "Numeric.VariablePrecision.Float",
          "name": "dExponent",
          "package": "variable-precision",
          "partial": "Exponent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Float.html#v:dExponent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Float",
          "name": "dMantissa",
          "package": "variable-precision",
          "signature": "Integer",
          "source": "src/Numeric-VariablePrecision-Float.html#DFloat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Float",
          "module": "Numeric.VariablePrecision.Float",
          "name": "dMantissa",
          "package": "variable-precision",
          "partial": "Mantissa",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Float.html#v:dMantissa"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Float",
          "name": "dPrecision",
          "package": "variable-precision",
          "signature": "Word",
          "source": "src/Numeric-VariablePrecision-Float.html#DFloat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Float",
          "module": "Numeric.VariablePrecision.Float",
          "name": "dPrecision",
          "package": "variable-precision",
          "partial": "Precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Float.html#v:dPrecision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMuch like \u003ccode\u003e\u003ca\u003eeffectivePrecisionWith\u003c/a\u003e\u003c/code\u003e combined with \u003ccode\u003e\u003ca\u003enormInfinity\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Float",
          "name": "effectivePrecision",
          "package": "variable-precision",
          "signature": "t p -\u003e t p -\u003e Int",
          "source": "src/Numeric-VariablePrecision-Float.html#effectivePrecision",
          "type": "function"
        },
        "index": {
          "description": "Much like effectivePrecisionWith combined with normInfinity",
          "hierarchy": "Numeric VariablePrecision Float",
          "module": "Numeric.VariablePrecision.Float",
          "name": "effectivePrecision",
          "normalized": "a b-\u003ea b-\u003eInt",
          "package": "variable-precision",
          "partial": "Precision",
          "signature": "t p-\u003et p-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Float.html#v:effectivePrecision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA measure of meaningful precision in the difference of two\n   finite non-zero values.\n\u003c/p\u003e\u003cp\u003eValues of very different magnitude have little meaningful\n   difference, because \u003ccode\u003ea + b \u003ccode\u003eapproxEq\u003c/code\u003e a\u003c/code\u003e when \u003ccode\u003e|a| \u003e\u003e |b|\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eVery close values have little meaningful difference,\n   because \u003ccode\u003ea + (a - b) \u003ccode\u003eapproxEq\u003c/code\u003e a\u003c/code\u003e as \u003ccode\u003e|a| \u003e\u003e |a - b|\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eeffectivePrecisionWith\u003c/a\u003e\u003c/code\u003e attempts to quantify this.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Float",
          "name": "effectivePrecisionWith",
          "package": "variable-precision",
          "signature": "(t -\u003e r)-\u003e t-\u003e t-\u003e Int",
          "type": "function"
        },
        "index": {
          "description": "measure of meaningful precision in the difference of two finite non-zero values Values of very different magnitude have little meaningful difference because approxEq when Very close values have little meaningful difference because approxEq as effectivePrecisionWith attempts to quantify this",
          "hierarchy": "Numeric VariablePrecision Float",
          "module": "Numeric.VariablePrecision.Float",
          "name": "effectivePrecisionWith",
          "normalized": "(a-\u003eb)-\u003ea-\u003ea-\u003eInt",
          "package": "variable-precision",
          "partial": "Precision With",
          "signature": "(t-\u003er)-\u003et-\u003et-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Float.html#v:effectivePrecisionWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThaw a \u003ccode\u003e\u003ca\u003eDFloat\u003c/a\u003e\u003c/code\u003e.  Results in \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e on precision mismatch.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Float",
          "name": "fromDFloat",
          "package": "variable-precision",
          "signature": "DFloat -\u003e Maybe (VFloat p)",
          "source": "src/Numeric-VariablePrecision-Float.html#fromDFloat",
          "type": "function"
        },
        "index": {
          "description": "Thaw DFloat Results in Nothing on precision mismatch",
          "hierarchy": "Numeric VariablePrecision Float",
          "module": "Numeric.VariablePrecision.Float",
          "name": "fromDFloat",
          "normalized": "DFloat-\u003eMaybe(VFloat a)",
          "package": "variable-precision",
          "partial": "DFloat",
          "signature": "DFloat-\u003eMaybe(VFloat p)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Float.html#v:fromDFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Float",
          "name": "norm1",
          "package": "variable-precision",
          "signature": "t p -\u003e VFloat p",
          "source": "src/Numeric-VariablePrecision-Float.html#norm1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Float",
          "module": "Numeric.VariablePrecision.Float",
          "name": "norm1",
          "normalized": "a b-\u003eVFloat b",
          "package": "variable-precision",
          "signature": "t p-\u003eVFloat p",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Float.html#v:norm1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Float",
          "name": "norm2",
          "package": "variable-precision",
          "signature": "t p -\u003e VFloat p",
          "source": "src/Numeric-VariablePrecision-Float.html#norm2",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Float",
          "module": "Numeric.VariablePrecision.Float",
          "name": "norm2",
          "normalized": "a b-\u003eVFloat b",
          "package": "variable-precision",
          "signature": "t p-\u003eVFloat p",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Float.html#v:norm2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Float",
          "name": "norm2Squared",
          "package": "variable-precision",
          "signature": "t p -\u003e VFloat p",
          "source": "src/Numeric-VariablePrecision-Float.html#norm2Squared",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Float",
          "module": "Numeric.VariablePrecision.Float",
          "name": "norm2Squared",
          "normalized": "a b-\u003eVFloat b",
          "package": "variable-precision",
          "partial": "Squared",
          "signature": "t p-\u003eVFloat p",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Float.html#v:norm2Squared"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Float",
          "name": "normInfinity",
          "package": "variable-precision",
          "signature": "t p -\u003e VFloat p",
          "source": "src/Numeric-VariablePrecision-Float.html#normInfinity",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Float",
          "module": "Numeric.VariablePrecision.Float",
          "name": "normInfinity",
          "normalized": "a b-\u003eVFloat b",
          "package": "variable-precision",
          "partial": "Infinity",
          "signature": "t p-\u003eVFloat p",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Float.html#v:normInfinity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFreeze a \u003ccode\u003e\u003ca\u003eVFloat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Float",
          "name": "toDFloat",
          "package": "variable-precision",
          "signature": "VFloat p -\u003e DFloat",
          "source": "src/Numeric-VariablePrecision-Float.html#toDFloat",
          "type": "function"
        },
        "index": {
          "description": "Freeze VFloat",
          "hierarchy": "Numeric VariablePrecision Float",
          "module": "Numeric.VariablePrecision.Float",
          "name": "toDFloat",
          "normalized": "VFloat a-\u003eDFloat",
          "package": "variable-precision",
          "partial": "DFloat",
          "signature": "VFloat p-\u003eDFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Float.html#v:toDFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThaw a \u003ccode\u003e\u003ca\u003eDFloat\u003c/a\u003e\u003c/code\u003e to its natural precision.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Float",
          "name": "withDFloat",
          "package": "variable-precision",
          "signature": "VFloat p -\u003e r) -\u003e r",
          "source": "src/Numeric-VariablePrecision-Float.html#withDFloat",
          "type": "function"
        },
        "index": {
          "description": "Thaw DFloat to its natural precision",
          "hierarchy": "Numeric VariablePrecision Float",
          "module": "Numeric.VariablePrecision.Float",
          "name": "withDFloat",
          "normalized": "VFloat a-\u003eb)-\u003eb",
          "package": "variable-precision",
          "partial": "DFloat",
          "signature": "VFloat p-\u003er)-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Float.html#v:withDFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eReify from value-level to type-level using Rank2Types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.VariablePrecision.Precision.Reify",
          "name": "Reify",
          "package": "variable-precision",
          "source": "src/Numeric-VariablePrecision-Precision-Reify.html",
          "type": "module"
        },
        "index": {
          "description": "Reify from value-level to type-level using Rank2Types",
          "hierarchy": "Numeric VariablePrecision Precision Reify",
          "module": "Numeric.VariablePrecision.Precision.Reify",
          "name": "Reify",
          "package": "variable-precision",
          "partial": "Reify",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Precision-Reify.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003ewithReifiedPrecision\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Precision.Reify",
          "name": "(.@$)",
          "package": "variable-precision",
          "signature": "t q -\u003e a)-\u003e a",
          "type": "function"
        },
        "index": {
          "description": "An alias for withReifiedPrecision",
          "hierarchy": "Numeric VariablePrecision Precision Reify",
          "module": "Numeric.VariablePrecision.Precision.Reify",
          "name": "(.@$) .@$",
          "normalized": "a b-\u003ec)-\u003ec",
          "package": "variable-precision",
          "signature": "t q-\u003ea)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Precision-Reify.html#v:.-64--36-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReify a precision from value-level to type-level.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Precision.Reify",
          "name": "reifyPrecision",
          "package": "variable-precision",
          "signature": "p -\u003e a) -\u003e a",
          "source": "src/Numeric-VariablePrecision-Precision-Reify.html#reifyPrecision",
          "type": "function"
        },
        "index": {
          "description": "Reify precision from value-level to type-level",
          "hierarchy": "Numeric VariablePrecision Precision Reify",
          "module": "Numeric.VariablePrecision.Precision.Reify",
          "name": "reifyPrecision",
          "normalized": "a-\u003eb)-\u003eb",
          "package": "variable-precision",
          "partial": "Precision",
          "signature": "p-\u003ea)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Precision-Reify.html#v:reifyPrecision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMuch like \u003ccode\u003e\u003ca\u003ereifyPrecision\u003c/a\u003e\u003c/code\u003e combined with \u003ccode\u003e\u003ca\u003ewithPrecision\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Precision.Reify",
          "name": "withReifiedPrecision",
          "package": "variable-precision",
          "signature": "t q -\u003e a)-\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Much like reifyPrecision combined with withPrecision",
          "hierarchy": "Numeric VariablePrecision Precision Reify",
          "module": "Numeric.VariablePrecision.Precision.Reify",
          "name": "withReifiedPrecision",
          "normalized": "a b-\u003ec)-\u003ec",
          "package": "variable-precision",
          "partial": "Reified Precision",
          "signature": "t q-\u003ea)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Precision-Reify.html#v:withReifiedPrecision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eClasses for types with precision represented by a type-level natural\nnumber, and variable precision types.\n\u003c/p\u003e\u003cp\u003eNote that performance may be (even) slow(er) with some versions of the\ntype-level-natural-number package.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.VariablePrecision.Precision",
          "name": "Precision",
          "package": "variable-precision",
          "source": "src/Numeric-VariablePrecision-Precision.html",
          "type": "module"
        },
        "index": {
          "description": "Classes for types with precision represented by type-level natural number and variable precision types Note that performance may be even slow er with some versions of the type-level-natural-number package",
          "hierarchy": "Numeric VariablePrecision Precision",
          "module": "Numeric.VariablePrecision.Precision",
          "name": "Precision",
          "package": "variable-precision",
          "partial": "Precision",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Precision.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class for types with precision.\n   The methods must not evaluate their arguments, and their results\n   must not be evaluated.\n   Minimal complete definition: (none).\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Precision",
          "name": "HasPrecision",
          "package": "variable-precision",
          "source": "src/Numeric-VariablePrecision-Precision.html#HasPrecision",
          "type": "class"
        },
        "index": {
          "description": "class for types with precision The methods must not evaluate their arguments and their results must not be evaluated Minimal complete definition none",
          "hierarchy": "Numeric VariablePrecision Precision",
          "module": "Numeric.VariablePrecision.Precision",
          "name": "HasPrecision",
          "package": "variable-precision",
          "partial": "Has Precision",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Precision.html#t:HasPrecision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class for types with adjustable precision.\n   Minimal complete definition: \u003ccode\u003e\u003ca\u003eadjustPrecision\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Precision",
          "name": "VariablePrecision",
          "package": "variable-precision",
          "source": "src/Numeric-VariablePrecision-Precision.html#VariablePrecision",
          "type": "class"
        },
        "index": {
          "description": "class for types with adjustable precision Minimal complete definition adjustPrecision",
          "hierarchy": "Numeric VariablePrecision Precision",
          "module": "Numeric.VariablePrecision.Precision",
          "name": "VariablePrecision",
          "package": "variable-precision",
          "partial": "Variable Precision",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Precision.html#t:VariablePrecision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003eatPrecisionOf\u003c/a\u003e\u003c/code\u003e.\n   Precedence between \u003ccode\u003e\u003ca\u003e\u003c\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e+\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Precision",
          "name": "(.@)",
          "package": "variable-precision",
          "signature": "t p -\u003e s p -\u003e t p",
          "source": "src/Numeric-VariablePrecision-Precision.html#.%40",
          "type": "function"
        },
        "index": {
          "description": "An alias for atPrecisionOf Precedence between and",
          "hierarchy": "Numeric VariablePrecision Precision",
          "module": "Numeric.VariablePrecision.Precision",
          "name": "(.@) .@",
          "normalized": "a b-\u003ec b-\u003ea b",
          "package": "variable-precision",
          "signature": "t p-\u003es p-\u003et p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Precision.html#v:.-64-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003ewithPrecisionOf\u003c/a\u003e\u003c/code\u003e.\n   Precedence between \u003ccode\u003e\u003ca\u003e\u003c\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e+\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Precision",
          "name": "(.@~)",
          "package": "variable-precision",
          "signature": "t p -\u003e s q -\u003e t q",
          "source": "src/Numeric-VariablePrecision-Precision.html#.%40~",
          "type": "function"
        },
        "index": {
          "description": "An alias for withPrecisionOf Precedence between and",
          "hierarchy": "Numeric VariablePrecision Precision",
          "module": "Numeric.VariablePrecision.Precision",
          "name": "(.@~) .@~",
          "normalized": "a b-\u003ec d-\u003ea d",
          "package": "variable-precision",
          "signature": "t p-\u003es q-\u003et q",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Precision.html#v:.-64--126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdjust the precision of a value preserving as much accuracy as\n   possible.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Precision",
          "name": "adjustPrecision",
          "package": "variable-precision",
          "signature": "t p -\u003e t q",
          "source": "src/Numeric-VariablePrecision-Precision.html#adjustPrecision",
          "type": "method"
        },
        "index": {
          "description": "Adjust the precision of value preserving as much accuracy as possible",
          "hierarchy": "Numeric VariablePrecision Precision",
          "module": "Numeric.VariablePrecision.Precision",
          "name": "adjustPrecision",
          "normalized": "a b-\u003ea c",
          "package": "variable-precision",
          "partial": "Precision",
          "signature": "t p-\u003et q",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Precision.html#v:adjustPrecision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMuch like \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e with a restricted type.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Precision",
          "name": "atPrecision",
          "package": "variable-precision",
          "signature": "t p -\u003e p -\u003e t p",
          "source": "src/Numeric-VariablePrecision-Precision.html#atPrecision",
          "type": "function"
        },
        "index": {
          "description": "Much like const with restricted type",
          "hierarchy": "Numeric VariablePrecision Precision",
          "module": "Numeric.VariablePrecision.Precision",
          "name": "atPrecision",
          "normalized": "a b-\u003eb-\u003ea b",
          "package": "variable-precision",
          "partial": "Precision",
          "signature": "t p-\u003ep-\u003et p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Precision.html#v:atPrecision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMuch like \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e with a restricted type.\n   Precedence between \u003ccode\u003e\u003ca\u003e\u003c\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e+\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Precision",
          "name": "atPrecisionOf",
          "package": "variable-precision",
          "signature": "t p -\u003e s p -\u003e t p",
          "source": "src/Numeric-VariablePrecision-Precision.html#atPrecisionOf",
          "type": "function"
        },
        "index": {
          "description": "Much like const with restricted type Precedence between and",
          "hierarchy": "Numeric VariablePrecision Precision",
          "module": "Numeric.VariablePrecision.Precision",
          "name": "atPrecisionOf",
          "normalized": "a b-\u003ec b-\u003ea b",
          "package": "variable-precision",
          "partial": "Precision Of",
          "signature": "t p-\u003es p-\u003et p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Precision.html#v:atPrecisionOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSynonym for \u003ccode\u003e\u003ca\u003eadjustPrecision\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Precision",
          "name": "auto",
          "package": "variable-precision",
          "signature": "t p -\u003e t q",
          "source": "src/Numeric-VariablePrecision-Precision.html#auto",
          "type": "function"
        },
        "index": {
          "description": "Synonym for adjustPrecision",
          "hierarchy": "Numeric VariablePrecision Precision",
          "module": "Numeric.VariablePrecision.Precision",
          "name": "auto",
          "normalized": "a b-\u003ea c",
          "package": "variable-precision",
          "signature": "t p-\u003et q",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Precision.html#v:auto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMuch like \u003ccode\u003e\u003ca\u003enaturalNumberAsInt\u003c/a\u003e\u003c/code\u003e combined with \u003ccode\u003e\u003ca\u003eprecisionOf\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Precision",
          "name": "precision",
          "package": "variable-precision",
          "signature": "t p -\u003e Word",
          "source": "src/Numeric-VariablePrecision-Precision.html#precision",
          "type": "function"
        },
        "index": {
          "description": "Much like naturalNumberAsInt combined with precisionOf",
          "hierarchy": "Numeric VariablePrecision Precision",
          "module": "Numeric.VariablePrecision.Precision",
          "name": "precision",
          "normalized": "a b-\u003eWord",
          "package": "variable-precision",
          "signature": "t p-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Precision.html#v:precision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.VariablePrecision.Precision",
          "name": "precisionOf",
          "package": "variable-precision",
          "signature": "t p -\u003e p",
          "source": "src/Numeric-VariablePrecision-Precision.html#precisionOf",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric VariablePrecision Precision",
          "module": "Numeric.VariablePrecision.Precision",
          "name": "precisionOf",
          "normalized": "a b-\u003eb",
          "package": "variable-precision",
          "partial": "Of",
          "signature": "t p-\u003ep",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Precision.html#v:precisionOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMuch like \u003ccode\u003e\u003ca\u003eadjustPrecision\u003c/a\u003e\u003c/code\u003e combined with \u003ccode\u003e\u003ca\u003eatPrecision\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Precision",
          "name": "withPrecision",
          "package": "variable-precision",
          "signature": "t p -\u003e q -\u003e t q",
          "source": "src/Numeric-VariablePrecision-Precision.html#withPrecision",
          "type": "function"
        },
        "index": {
          "description": "Much like adjustPrecision combined with atPrecision",
          "hierarchy": "Numeric VariablePrecision Precision",
          "module": "Numeric.VariablePrecision.Precision",
          "name": "withPrecision",
          "normalized": "a b-\u003ec-\u003ea c",
          "package": "variable-precision",
          "partial": "Precision",
          "signature": "t p-\u003eq-\u003et q",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Precision.html#v:withPrecision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMuch like \u003ccode\u003e\u003ca\u003ewithPrecision\u003c/a\u003e\u003c/code\u003e combined with \u003ccode\u003e\u003ca\u003eprecisionOf\u003c/a\u003e\u003c/code\u003e.\n   Precedence between \u003ccode\u003e\u003ca\u003e\u003c\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e+\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.VariablePrecision.Precision",
          "name": "withPrecisionOf",
          "package": "variable-precision",
          "signature": "t p -\u003e s q -\u003e t q",
          "source": "src/Numeric-VariablePrecision-Precision.html#withPrecisionOf",
          "type": "function"
        },
        "index": {
          "description": "Much like withPrecision combined with precisionOf Precedence between and",
          "hierarchy": "Numeric VariablePrecision Precision",
          "module": "Numeric.VariablePrecision.Precision",
          "name": "withPrecisionOf",
          "normalized": "a b-\u003ec d-\u003ea d",
          "package": "variable-precision",
          "partial": "Precision Of",
          "signature": "t p-\u003es q-\u003et q",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision-Precision.html#v:withPrecisionOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvenience module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.VariablePrecision",
          "name": "VariablePrecision",
          "package": "variable-precision",
          "source": "src/Numeric-VariablePrecision.html",
          "type": "module"
        },
        "index": {
          "description": "Convenience module",
          "hierarchy": "Numeric VariablePrecision",
          "module": "Numeric.VariablePrecision",
          "name": "VariablePrecision",
          "package": "variable-precision",
          "partial": "Variable Precision",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/Numeric-VariablePrecision.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBoilerplate definitions generated by:\n\u003c/p\u003e\u003cpre\u003e flip mapM_ [16..53] $ \\p -\u003e let s = show p in\n   putStrLn $ \"type N\" ++ s ++ \" = SuccessorTo N\" ++ show (p - 1) ++\n     \" ; n\" ++ s ++ \" :: N\" ++ s ++ \" ; n\" ++ s ++ \" = undefined\"\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "ExtraNumbers",
          "package": "variable-precision",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html",
          "type": "module"
        },
        "index": {
          "description": "Boilerplate definitions generated by flip mapM let show in putStrLn type SuccessorTo show undefined",
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "ExtraNumbers",
          "package": "variable-precision",
          "partial": "Extra Numbers",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N16",
          "package": "variable-precision",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N16",
          "type": "type"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N16",
          "package": "variable-precision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N17",
          "package": "variable-precision",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N17",
          "type": "type"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N17",
          "package": "variable-precision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N17"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N18",
          "package": "variable-precision",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N18",
          "type": "type"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N18",
          "package": "variable-precision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N18"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N19",
          "package": "variable-precision",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N19",
          "type": "type"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N19",
          "package": "variable-precision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N19"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N20",
          "package": "variable-precision",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N20",
          "type": "type"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N20",
          "package": "variable-precision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N20"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N21",
          "package": "variable-precision",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N21",
          "type": "type"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N21",
          "package": "variable-precision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N21"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N22",
          "package": "variable-precision",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N22",
          "type": "type"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N22",
          "package": "variable-precision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N22"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N23",
          "package": "variable-precision",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N23",
          "type": "type"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N23",
          "package": "variable-precision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N23"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N24",
          "package": "variable-precision",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N24",
          "type": "type"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N24",
          "package": "variable-precision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N24"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N25",
          "package": "variable-precision",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N25",
          "type": "type"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N25",
          "package": "variable-precision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N25"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N26",
          "package": "variable-precision",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N26",
          "type": "type"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N26",
          "package": "variable-precision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N26"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N27",
          "package": "variable-precision",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N27",
          "type": "type"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N27",
          "package": "variable-precision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N27"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N28",
          "package": "variable-precision",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N28",
          "type": "type"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N28",
          "package": "variable-precision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N28"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N29",
          "package": "variable-precision",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N29",
          "type": "type"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N29",
          "package": "variable-precision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N29"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N30",
          "package": "variable-precision",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N30",
          "type": "type"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N30",
          "package": "variable-precision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N30"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N31",
          "package": "variable-precision",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N31",
          "type": "type"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N31",
          "package": "variable-precision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N31"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N32",
          "package": "variable-precision",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N32",
          "type": "type"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N32",
          "package": "variable-precision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N33",
          "package": "variable-precision",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N33",
          "type": "type"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N33",
          "package": "variable-precision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N33"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N34",
          "package": "variable-precision",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N34",
          "type": "type"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N34",
          "package": "variable-precision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N34"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N35",
          "package": "variable-precision",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N35",
          "type": "type"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N35",
          "package": "variable-precision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N35"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N36",
          "package": "variable-precision",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N36",
          "type": "type"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N36",
          "package": "variable-precision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N36"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N37",
          "package": "variable-precision",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N37",
          "type": "type"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N37",
          "package": "variable-precision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N37"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N38",
          "package": "variable-precision",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N38",
          "type": "type"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N38",
          "package": "variable-precision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N38"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N39",
          "package": "variable-precision",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N39",
          "type": "type"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N39",
          "package": "variable-precision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N39"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N40",
          "package": "variable-precision",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N40",
          "type": "type"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N40",
          "package": "variable-precision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N40"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N41",
          "package": "variable-precision",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N41",
          "type": "type"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N41",
          "package": "variable-precision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N41"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N42",
          "package": "variable-precision",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N42",
          "type": "type"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N42",
          "package": "variable-precision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N42"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N43",
          "package": "variable-precision",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N43",
          "type": "type"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N43",
          "package": "variable-precision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N43"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N44",
          "package": "variable-precision",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N44",
          "type": "type"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N44",
          "package": "variable-precision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N44"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N45",
          "package": "variable-precision",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N45",
          "type": "type"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N45",
          "package": "variable-precision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N45"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N46",
          "package": "variable-precision",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N46",
          "type": "type"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N46",
          "package": "variable-precision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N46"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N47",
          "package": "variable-precision",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N47",
          "type": "type"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N47",
          "package": "variable-precision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N47"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N48",
          "package": "variable-precision",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N48",
          "type": "type"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N48",
          "package": "variable-precision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N48"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N49",
          "package": "variable-precision",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N49",
          "type": "type"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N49",
          "package": "variable-precision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N49"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N50",
          "package": "variable-precision",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N50",
          "type": "type"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N50",
          "package": "variable-precision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N50"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N51",
          "package": "variable-precision",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N51",
          "type": "type"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N51",
          "package": "variable-precision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N51"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N52",
          "package": "variable-precision",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N52",
          "type": "type"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N52",
          "package": "variable-precision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N52"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N53",
          "package": "variable-precision",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#N53",
          "type": "type"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "N53",
          "package": "variable-precision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#t:N53"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n16",
          "package": "variable-precision",
          "signature": "N16",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n16",
          "type": "function"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n16",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n17",
          "package": "variable-precision",
          "signature": "N17",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n17",
          "type": "function"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n17",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n17"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n18",
          "package": "variable-precision",
          "signature": "N18",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n18",
          "type": "function"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n18",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n18"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n19",
          "package": "variable-precision",
          "signature": "N19",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n19",
          "type": "function"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n19",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n19"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n20",
          "package": "variable-precision",
          "signature": "N20",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n20",
          "type": "function"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n20",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n20"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n21",
          "package": "variable-precision",
          "signature": "N21",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n21",
          "type": "function"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n21",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n21"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n22",
          "package": "variable-precision",
          "signature": "N22",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n22",
          "type": "function"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n22",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n22"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n23",
          "package": "variable-precision",
          "signature": "N23",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n23",
          "type": "function"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n23",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n23"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n24",
          "package": "variable-precision",
          "signature": "N24",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n24",
          "type": "function"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n24",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n24"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n25",
          "package": "variable-precision",
          "signature": "N25",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n25",
          "type": "function"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n25",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n25"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n26",
          "package": "variable-precision",
          "signature": "N26",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n26",
          "type": "function"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n26",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n26"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n27",
          "package": "variable-precision",
          "signature": "N27",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n27",
          "type": "function"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n27",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n27"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n28",
          "package": "variable-precision",
          "signature": "N28",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n28",
          "type": "function"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n28",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n28"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n29",
          "package": "variable-precision",
          "signature": "N29",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n29",
          "type": "function"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n29",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n29"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n30",
          "package": "variable-precision",
          "signature": "N30",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n30",
          "type": "function"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n30",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n30"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n31",
          "package": "variable-precision",
          "signature": "N31",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n31",
          "type": "function"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n31",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n31"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n32",
          "package": "variable-precision",
          "signature": "N32",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n32",
          "type": "function"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n32",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n33",
          "package": "variable-precision",
          "signature": "N33",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n33",
          "type": "function"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n33",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n33"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n34",
          "package": "variable-precision",
          "signature": "N34",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n34",
          "type": "function"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n34",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n34"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n35",
          "package": "variable-precision",
          "signature": "N35",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n35",
          "type": "function"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n35",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n35"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n36",
          "package": "variable-precision",
          "signature": "N36",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n36",
          "type": "function"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n36",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n36"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n37",
          "package": "variable-precision",
          "signature": "N37",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n37",
          "type": "function"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n37",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n37"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n38",
          "package": "variable-precision",
          "signature": "N38",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n38",
          "type": "function"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n38",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n38"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n39",
          "package": "variable-precision",
          "signature": "N39",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n39",
          "type": "function"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n39",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n39"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n40",
          "package": "variable-precision",
          "signature": "N40",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n40",
          "type": "function"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n40",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n40"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n41",
          "package": "variable-precision",
          "signature": "N41",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n41",
          "type": "function"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n41",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n41"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n42",
          "package": "variable-precision",
          "signature": "N42",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n42",
          "type": "function"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n42",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n42"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n43",
          "package": "variable-precision",
          "signature": "N43",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n43",
          "type": "function"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n43",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n43"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n44",
          "package": "variable-precision",
          "signature": "N44",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n44",
          "type": "function"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n44",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n44"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n45",
          "package": "variable-precision",
          "signature": "N45",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n45",
          "type": "function"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n45",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n45"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n46",
          "package": "variable-precision",
          "signature": "N46",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n46",
          "type": "function"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n46",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n46"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n47",
          "package": "variable-precision",
          "signature": "N47",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n47",
          "type": "function"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n47",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n47"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n48",
          "package": "variable-precision",
          "signature": "N48",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n48",
          "type": "function"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n48",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n48"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n49",
          "package": "variable-precision",
          "signature": "N49",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n49",
          "type": "function"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n49",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n49"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n50",
          "package": "variable-precision",
          "signature": "N50",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n50",
          "type": "function"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n50",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n50"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n51",
          "package": "variable-precision",
          "signature": "N51",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n51",
          "type": "function"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n51",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n51"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n52",
          "package": "variable-precision",
          "signature": "N52",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n52",
          "type": "function"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n52",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n52"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n53",
          "package": "variable-precision",
          "signature": "N53",
          "source": "src/TypeLevel-NaturalNumber-ExtraNumbers.html#n53",
          "type": "function"
        },
        "index": {
          "hierarchy": "TypeLevel NaturalNumber ExtraNumbers",
          "module": "TypeLevel.NaturalNumber.ExtraNumbers",
          "name": "n53",
          "package": "variable-precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/variable-precision/docs/TypeLevel-NaturalNumber-ExtraNumbers.html#v:n53"
      }
    }
  ]
]