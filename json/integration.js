[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/integration/docs/Numeric-Integration-TanhSinh.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn implementation of Takahashi and Mori's\n \u003ca\u003eTanh-Sinh quadrature\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eTanh-Sinh provides good results across a wide-range\n of functions and is pretty much as close to a\n universal quadrature scheme as is possible. It is also\n robust against error in the presence of singularities at\n the endpoints of the integral.\n\u003c/p\u003e\u003cp\u003eThe change of basis is precomputed, and information is\n gained quadratically in the number of digits.\n\u003c/p\u003e\u003cpre\u003e ghci\u003e absolute 1e-6 $ parTrap sin (pi/2) pi\n Result {result = 0.9999999999999312, errorEstimate = 2.721789573237518e-10, evaluations = 25}\n\u003c/pre\u003e\u003cpre\u003e ghci\u003e confidence $ absolute 1e-6 $ trap sin (pi/2) pi\n (0.9999999997277522,1.0000000002721101)\n\u003c/pre\u003e\u003cp\u003eUnlike most quadrature schemes, this method is also fairly robust against\n singularities at the end points.\n\u003c/p\u003e\u003cpre\u003e ghci\u003e absolute 1e-6 $ trap (recip . sqrt . sin) 0 1\n Result {result = 2.03480500404275, errorEstimate = 6.349514558579017e-8, evaluations = 49}\n\u003c/pre\u003e\u003cp\u003eSee John D. Cook's \u003ca\u003e\"Care and Treatment of Singularities\"\u003c/a\u003e\n for a sense of how more na&#239;ve quadrature schemes fare.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.Integration.TanhSinh",
        "fct-package": "integration",
        "fct-signature": "module",
        "fct-source": "src/Numeric-Integration-TanhSinh.html",
        "fct-type": "module",
        "title": "TanhSinh"
      },
      "index": {
        "description": "An implementation of Takahashi and Mori Tanh-Sinh quadrature Tanh-Sinh provides good results across wide-range of functions and is pretty much as close to universal quadrature scheme as is possible It is also robust against error in the presence of singularities at the endpoints of the integral The change of basis is precomputed and information is gained quadratically in the number of digits ghci absolute e-6 parTrap sin pi pi Result result errorEstimate e-10 evaluations ghci confidence absolute e-6 trap sin pi pi Unlike most quadrature schemes this method is also fairly robust against singularities at the end points ghci absolute e-6 trap recip sqrt sin Result result errorEstimate e-8 evaluations See John Cook Care and Treatment of Singularities for sense of how more na ve quadrature schemes fare",
        "hierarchy": "Numeric Integration TanhSinh",
        "module": "Numeric.Integration.TanhSinh",
        "name": "TanhSinh",
        "normalized": "",
        "package": "integration",
        "partial": "Tanh Sinh",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/integration/docs/Numeric-Integration-TanhSinh.html#t:Result",
      "description": {
        "fct-descr": "\u003cp\u003eIntegral with an result and an estimate of the error such that\n \u003ccode\u003e(result - errorEstimate, result + errorEstimate)\u003c/code\u003e \u003cem\u003eprobably\u003c/em\u003e bounds \n the actual answer.\n\u003c/p\u003e",
        "fct-module": "Numeric.Integration.TanhSinh",
        "fct-package": "integration",
        "fct-signature": "data",
        "fct-source": "src/Numeric-Integration-TanhSinh.html#Result",
        "fct-type": "data",
        "title": "Result"
      },
      "index": {
        "description": "Integral with an result and an estimate of the error such that result errorEstimate result errorEstimate probably bounds the actual answer",
        "hierarchy": "Numeric Integration TanhSinh",
        "module": "Numeric.Integration.TanhSinh",
        "name": "Result",
        "normalized": "",
        "package": "integration",
        "partial": "Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/integration/docs/Numeric-Integration-TanhSinh.html#v:Result",
      "description": {
        "fct-module": "Numeric.Integration.TanhSinh",
        "fct-package": "integration",
        "fct-signature": "Result",
        "fct-source": "src/Numeric-Integration-TanhSinh.html#Result",
        "fct-type": "function",
        "title": "Result"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Integration TanhSinh",
        "module": "Numeric.Integration.TanhSinh",
        "name": "Result",
        "normalized": "",
        "package": "integration",
        "partial": "Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/integration/docs/Numeric-Integration-TanhSinh.html#v:absolute",
      "description": {
        "fct-descr": "\u003cp\u003eFilter a list of results using a specified absolute error bound\n\u003c/p\u003e",
        "fct-module": "Numeric.Integration.TanhSinh",
        "fct-package": "integration",
        "fct-signature": "Double -\u003e [Result] -\u003e Result",
        "fct-source": "src/Numeric-Integration-TanhSinh.html#absolute",
        "fct-type": "function",
        "title": "absolute"
      },
      "index": {
        "description": "Filter list of results using specified absolute error bound",
        "hierarchy": "Numeric Integration TanhSinh",
        "module": "Numeric.Integration.TanhSinh",
        "name": "absolute",
        "normalized": "Double-\u003e[Result]-\u003eResult",
        "package": "integration",
        "partial": "",
        "signature": "Double-\u003e[Result]-\u003eResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/integration/docs/Numeric-Integration-TanhSinh.html#v:confidence",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a Result to a confidence interval\n\u003c/p\u003e",
        "fct-module": "Numeric.Integration.TanhSinh",
        "fct-package": "integration",
        "fct-signature": "Result -\u003e (Double, Double)",
        "fct-source": "src/Numeric-Integration-TanhSinh.html#confidence",
        "fct-type": "function",
        "title": "confidence"
      },
      "index": {
        "description": "Convert Result to confidence interval",
        "hierarchy": "Numeric Integration TanhSinh",
        "module": "Numeric.Integration.TanhSinh",
        "name": "confidence",
        "normalized": "Result-\u003e(Double,Double)",
        "package": "integration",
        "partial": "",
        "signature": "Result-\u003e(Double,Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/integration/docs/Numeric-Integration-TanhSinh.html#v:errorEstimate",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Numeric.Integration.TanhSinh",
        "fct-package": "integration",
        "fct-signature": "!Double",
        "fct-source": "src/Numeric-Integration-TanhSinh.html#Result",
        "fct-type": "function",
        "title": "errorEstimate"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Integration TanhSinh",
        "module": "Numeric.Integration.TanhSinh",
        "name": "errorEstimate",
        "normalized": "",
        "package": "integration",
        "partial": "Estimate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/integration/docs/Numeric-Integration-TanhSinh.html#v:evaluations",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Numeric.Integration.TanhSinh",
        "fct-package": "integration",
        "fct-signature": "!Int",
        "fct-source": "src/Numeric-Integration-TanhSinh.html#Result",
        "fct-type": "function",
        "title": "evaluations"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Integration TanhSinh",
        "module": "Numeric.Integration.TanhSinh",
        "name": "evaluations",
        "normalized": "",
        "package": "integration",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/integration/docs/Numeric-Integration-TanhSinh.html#v:everywhere",
      "description": {
        "fct-descr": "\u003cp\u003eIntegrate from -inf to inf using tanh-sinh quadrature after using the change of variables \u003ccode\u003ex = tan t\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e everywhere trap (\\x -\u003e exp(-x*x))\n\u003c/pre\u003e\u003cp\u003eThis works \u003cem\u003emuch\u003c/em\u003e better than just clipping the interval at arbitrary large and small numbers.\n\u003c/p\u003e",
        "fct-module": "Numeric.Integration.TanhSinh",
        "fct-package": "integration",
        "fct-signature": "((Double -\u003e Double) -\u003e Double -\u003e Double -\u003e r) -\u003e (Double -\u003e Double) -\u003e r",
        "fct-source": "src/Numeric-Integration-TanhSinh.html#everywhere",
        "fct-type": "function",
        "title": "everywhere"
      },
      "index": {
        "description": "Integrate from inf to inf using tanh-sinh quadrature after using the change of variables tan everywhere trap exp This works much better than just clipping the interval at arbitrary large and small numbers",
        "hierarchy": "Numeric Integration TanhSinh",
        "module": "Numeric.Integration.TanhSinh",
        "name": "everywhere",
        "normalized": "((Double-\u003eDouble)-\u003eDouble-\u003eDouble-\u003ea)-\u003e(Double-\u003eDouble)-\u003ea",
        "package": "integration",
        "partial": "",
        "signature": "((Double-\u003eDouble)-\u003eDouble-\u003eDouble-\u003er)-\u003e(Double-\u003eDouble)-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/integration/docs/Numeric-Integration-TanhSinh.html#v:nonNegative",
      "description": {
        "fct-descr": "\u003cp\u003eIntegrate a function from 0 to infinity by using the change of variables \u003ccode\u003ex = t/(1-t)\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThis works \u003cem\u003emuch\u003c/em\u003e better than just clipping the interval at some arbitrary large number.\n\u003c/p\u003e",
        "fct-module": "Numeric.Integration.TanhSinh",
        "fct-package": "integration",
        "fct-signature": "((Double -\u003e Double) -\u003e Double -\u003e Double -\u003e r) -\u003e (Double -\u003e Double) -\u003e r",
        "fct-source": "src/Numeric-Integration-TanhSinh.html#nonNegative",
        "fct-type": "function",
        "title": "nonNegative"
      },
      "index": {
        "description": "Integrate function from to infinity by using the change of variables This works much better than just clipping the interval at some arbitrary large number",
        "hierarchy": "Numeric Integration TanhSinh",
        "module": "Numeric.Integration.TanhSinh",
        "name": "nonNegative",
        "normalized": "((Double-\u003eDouble)-\u003eDouble-\u003eDouble-\u003ea)-\u003e(Double-\u003eDouble)-\u003ea",
        "package": "integration",
        "partial": "Negative",
        "signature": "((Double-\u003eDouble)-\u003eDouble-\u003eDouble-\u003er)-\u003e(Double-\u003eDouble)-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/integration/docs/Numeric-Integration-TanhSinh.html#v:parSimpson",
      "description": {
        "fct-descr": "\u003cp\u003eIntegration using a truncated Simpson's rule under tanh-sinh quadrature with buffered parallel evaluation\n\u003c/p\u003e",
        "fct-module": "Numeric.Integration.TanhSinh",
        "fct-package": "integration",
        "fct-signature": "(Double -\u003e Double) -\u003e Double -\u003e Double -\u003e [Result]",
        "fct-source": "src/Numeric-Integration-TanhSinh.html#parSimpson",
        "fct-type": "function",
        "title": "parSimpson"
      },
      "index": {
        "description": "Integration using truncated Simpson rule under tanh-sinh quadrature with buffered parallel evaluation",
        "hierarchy": "Numeric Integration TanhSinh",
        "module": "Numeric.Integration.TanhSinh",
        "name": "parSimpson",
        "normalized": "(Double-\u003eDouble)-\u003eDouble-\u003eDouble-\u003e[Result]",
        "package": "integration",
        "partial": "Simpson",
        "signature": "(Double-\u003eDouble)-\u003eDouble-\u003eDouble-\u003e[Result]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/integration/docs/Numeric-Integration-TanhSinh.html#v:parTrap",
      "description": {
        "fct-descr": "\u003cp\u003eIntegration using a truncated trapezoid rule under tanh-sinh quadrature with buffered parallel evaluation\n\u003c/p\u003e",
        "fct-module": "Numeric.Integration.TanhSinh",
        "fct-package": "integration",
        "fct-signature": "(Double -\u003e Double) -\u003e Double -\u003e Double -\u003e [Result]",
        "fct-source": "src/Numeric-Integration-TanhSinh.html#parTrap",
        "fct-type": "function",
        "title": "parTrap"
      },
      "index": {
        "description": "Integration using truncated trapezoid rule under tanh-sinh quadrature with buffered parallel evaluation",
        "hierarchy": "Numeric Integration TanhSinh",
        "module": "Numeric.Integration.TanhSinh",
        "name": "parTrap",
        "normalized": "(Double-\u003eDouble)-\u003eDouble-\u003eDouble-\u003e[Result]",
        "package": "integration",
        "partial": "Trap",
        "signature": "(Double-\u003eDouble)-\u003eDouble-\u003eDouble-\u003e[Result]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/integration/docs/Numeric-Integration-TanhSinh.html#v:relative",
      "description": {
        "fct-descr": "\u003cp\u003eFilter a list of results using a specified relative error bound\n\u003c/p\u003e",
        "fct-module": "Numeric.Integration.TanhSinh",
        "fct-package": "integration",
        "fct-signature": "Double -\u003e [Result] -\u003e Result",
        "fct-source": "src/Numeric-Integration-TanhSinh.html#relative",
        "fct-type": "function",
        "title": "relative"
      },
      "index": {
        "description": "Filter list of results using specified relative error bound",
        "hierarchy": "Numeric Integration TanhSinh",
        "module": "Numeric.Integration.TanhSinh",
        "name": "relative",
        "normalized": "Double-\u003e[Result]-\u003eResult",
        "package": "integration",
        "partial": "",
        "signature": "Double-\u003e[Result]-\u003eResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/integration/docs/Numeric-Integration-TanhSinh.html#v:result",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Numeric.Integration.TanhSinh",
        "fct-package": "integration",
        "fct-signature": "!Double",
        "fct-source": "src/Numeric-Integration-TanhSinh.html#Result",
        "fct-type": "function",
        "title": "result"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric Integration TanhSinh",
        "module": "Numeric.Integration.TanhSinh",
        "name": "result",
        "normalized": "",
        "package": "integration",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/integration/docs/Numeric-Integration-TanhSinh.html#v:simpson",
      "description": {
        "fct-descr": "\u003cp\u003eIntegration using a truncated Simpson's rule under tanh-sinh quadrature\n\u003c/p\u003e",
        "fct-module": "Numeric.Integration.TanhSinh",
        "fct-package": "integration",
        "fct-signature": "(Double -\u003e Double) -\u003e Double -\u003e Double -\u003e [Result]",
        "fct-source": "src/Numeric-Integration-TanhSinh.html#simpson",
        "fct-type": "function",
        "title": "simpson"
      },
      "index": {
        "description": "Integration using truncated Simpson rule under tanh-sinh quadrature",
        "hierarchy": "Numeric Integration TanhSinh",
        "module": "Numeric.Integration.TanhSinh",
        "name": "simpson",
        "normalized": "(Double-\u003eDouble)-\u003eDouble-\u003eDouble-\u003e[Result]",
        "package": "integration",
        "partial": "",
        "signature": "(Double-\u003eDouble)-\u003eDouble-\u003eDouble-\u003e[Result]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/integration/docs/Numeric-Integration-TanhSinh.html#v:simpson-39-",
      "description": {
        "fct-descr": "\u003cp\u003eIntegration using a truncated Simpson's rule under tanh-sinh quadrature with a specified evaluation strategy\n\u003c/p\u003e",
        "fct-module": "Numeric.Integration.TanhSinh",
        "fct-package": "integration",
        "fct-signature": "Strategy [Double] -\u003e (Double -\u003e Double) -\u003e Double -\u003e Double -\u003e [Result]",
        "fct-source": "src/Numeric-Integration-TanhSinh.html#simpson%27",
        "fct-type": "function",
        "title": "simpson'"
      },
      "index": {
        "description": "Integration using truncated Simpson rule under tanh-sinh quadrature with specified evaluation strategy",
        "hierarchy": "Numeric Integration TanhSinh",
        "module": "Numeric.Integration.TanhSinh",
        "name": "simpson'",
        "normalized": "Strategy[Double]-\u003e(Double-\u003eDouble)-\u003eDouble-\u003eDouble-\u003e[Result]",
        "package": "integration",
        "partial": "",
        "signature": "Strategy[Double]-\u003e(Double-\u003eDouble)-\u003eDouble-\u003eDouble-\u003e[Result]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/integration/docs/Numeric-Integration-TanhSinh.html#v:trap",
      "description": {
        "fct-descr": "\u003cp\u003eIntegration using a truncated trapezoid rule under tanh-sinh quadrature\n\u003c/p\u003e",
        "fct-module": "Numeric.Integration.TanhSinh",
        "fct-package": "integration",
        "fct-signature": "(Double -\u003e Double) -\u003e Double -\u003e Double -\u003e [Result]",
        "fct-source": "src/Numeric-Integration-TanhSinh.html#trap",
        "fct-type": "function",
        "title": "trap"
      },
      "index": {
        "description": "Integration using truncated trapezoid rule under tanh-sinh quadrature",
        "hierarchy": "Numeric Integration TanhSinh",
        "module": "Numeric.Integration.TanhSinh",
        "name": "trap",
        "normalized": "(Double-\u003eDouble)-\u003eDouble-\u003eDouble-\u003e[Result]",
        "package": "integration",
        "partial": "",
        "signature": "(Double-\u003eDouble)-\u003eDouble-\u003eDouble-\u003e[Result]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/integration/docs/Numeric-Integration-TanhSinh.html#v:trap-39-",
      "description": {
        "fct-descr": "\u003cp\u003eIntegration using a truncated trapezoid rule and tanh-sinh quadrature with a specified evaluation strategy\n\u003c/p\u003e",
        "fct-module": "Numeric.Integration.TanhSinh",
        "fct-package": "integration",
        "fct-signature": "Strategy [Double] -\u003e (Double -\u003e Double) -\u003e Double -\u003e Double -\u003e [Result]",
        "fct-source": "src/Numeric-Integration-TanhSinh.html#trap%27",
        "fct-type": "function",
        "title": "trap'"
      },
      "index": {
        "description": "Integration using truncated trapezoid rule and tanh-sinh quadrature with specified evaluation strategy",
        "hierarchy": "Numeric Integration TanhSinh",
        "module": "Numeric.Integration.TanhSinh",
        "name": "trap'",
        "normalized": "Strategy[Double]-\u003e(Double-\u003eDouble)-\u003eDouble-\u003eDouble-\u003e[Result]",
        "package": "integration",
        "partial": "",
        "signature": "Strategy[Double]-\u003e(Double-\u003eDouble)-\u003eDouble-\u003eDouble-\u003e[Result]"
      }
    }
  }
]