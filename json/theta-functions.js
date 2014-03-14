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
        "word": "theta-functions"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTheta-functions implemented on top of trigonometric series.\n\u003c/p\u003e\u003cp\u003eTheta-functions are special functions of several complex variables\n   Their importance is that we can construct an elliptic functions from\n   combination of theta-functions, see details at\n   \u003ca\u003ehttp://en.wikipedia.org/wiki/Theta_function\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eDepend on parameter Tau, which should be positive.\n   Call every function in the following form:\n\u003c/p\u003e\u003cpre\u003etheta1 N (qpar Tau) U\u003c/pre\u003e\u003cp\u003ewhere \u003ccode\u003eN\u003c/code\u003e is a number of addends in series representing the function, \n   \u003ccode\u003eTau\u003c/code\u003e is a tau parameter defining the theta-function and\n   \u003ccode\u003eU\u003c/code\u003e is an argument, which is a complex number.\n\u003c/p\u003e\u003cp\u003eWARNING: theta-functions are raising their values very quickly when arg is raising. \n   This depends on behaviour of cos and sin of complex functions, \n   which are very rapidly increasing their values.\n   Call theta-functions with n \u003c 20, q \u003c 1, |u| \u003c pi.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Functions.Theta",
          "name": "Theta",
          "package": "theta-functions",
          "source": "src/Numeric-Functions-Theta.html",
          "type": "module"
        },
        "index": {
          "description": "Theta-functions implemented on top of trigonometric series Theta-functions are special functions of several complex variables Their importance is that we can construct an elliptic functions from combination of theta-functions see details at http en.wikipedia.org wiki Theta function Depend on parameter Tau which should be positive Call every function in the following form theta1 qpar Tau where is number of addends in series representing the function Tau is tau parameter defining the theta-function and is an argument which is complex number WARNING theta-functions are raising their values very quickly when arg is raising This depends on behaviour of cos and sin of complex functions which are very rapidly increasing their values Call theta-functions with pi",
          "hierarchy": "Numeric Functions Theta",
          "module": "Numeric.Functions.Theta",
          "name": "Theta",
          "package": "theta-functions",
          "partial": "Theta",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/theta-functions/docs/Numeric-Functions-Theta.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTheta-function depends on parameter q, which abs should be lower than 1\n   Parameter q, however, depends on the main parameter tau, \n   so we will make q dependent variable\n\u003c/p\u003e",
          "module": "Numeric.Functions.Theta",
          "name": "qpar",
          "package": "theta-functions",
          "signature": "a -\u003e Complex a",
          "source": "src/Numeric-Functions-Theta.html#qpar",
          "type": "function"
        },
        "index": {
          "description": "Theta-function depends on parameter which abs should be lower than Parameter however depends on the main parameter tau so we will make dependent variable",
          "hierarchy": "Numeric Functions Theta",
          "module": "Numeric.Functions.Theta",
          "name": "qpar",
          "normalized": "a-\u003eComplex a",
          "package": "theta-functions",
          "signature": "a-\u003eComplex a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/theta-functions/docs/Numeric-Functions-Theta.html#v:qpar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTheta_1\n\u003c/p\u003e",
          "module": "Numeric.Functions.Theta",
          "name": "theta1",
          "package": "theta-functions",
          "signature": "Integer -\u003e Complex a -\u003e Complex a -\u003e Complex a",
          "source": "src/Numeric-Functions-Theta.html#theta1",
          "type": "function"
        },
        "index": {
          "description": "Theta",
          "hierarchy": "Numeric Functions Theta",
          "module": "Numeric.Functions.Theta",
          "name": "theta1",
          "normalized": "Integer-\u003eComplex a-\u003eComplex a-\u003eComplex a",
          "package": "theta-functions",
          "signature": "Integer-\u003eComplex a-\u003eComplex a-\u003eComplex a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/theta-functions/docs/Numeric-Functions-Theta.html#v:theta1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTheta_2\n\u003c/p\u003e",
          "module": "Numeric.Functions.Theta",
          "name": "theta2",
          "package": "theta-functions",
          "signature": "Integer -\u003e Complex a -\u003e Complex a -\u003e Complex a",
          "source": "src/Numeric-Functions-Theta.html#theta2",
          "type": "function"
        },
        "index": {
          "description": "Theta",
          "hierarchy": "Numeric Functions Theta",
          "module": "Numeric.Functions.Theta",
          "name": "theta2",
          "normalized": "Integer-\u003eComplex a-\u003eComplex a-\u003eComplex a",
          "package": "theta-functions",
          "signature": "Integer-\u003eComplex a-\u003eComplex a-\u003eComplex a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/theta-functions/docs/Numeric-Functions-Theta.html#v:theta2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTheta_3\n\u003c/p\u003e",
          "module": "Numeric.Functions.Theta",
          "name": "theta3",
          "package": "theta-functions",
          "signature": "Integer -\u003e Complex a -\u003e Complex a -\u003e Complex a",
          "source": "src/Numeric-Functions-Theta.html#theta3",
          "type": "function"
        },
        "index": {
          "description": "Theta",
          "hierarchy": "Numeric Functions Theta",
          "module": "Numeric.Functions.Theta",
          "name": "theta3",
          "normalized": "Integer-\u003eComplex a-\u003eComplex a-\u003eComplex a",
          "package": "theta-functions",
          "signature": "Integer-\u003eComplex a-\u003eComplex a-\u003eComplex a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/theta-functions/docs/Numeric-Functions-Theta.html#v:theta3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTheta_4\n\u003c/p\u003e",
          "module": "Numeric.Functions.Theta",
          "name": "theta4",
          "package": "theta-functions",
          "signature": "Integer -\u003e Complex a -\u003e Complex a -\u003e Complex a",
          "source": "src/Numeric-Functions-Theta.html#theta4",
          "type": "function"
        },
        "index": {
          "description": "Theta",
          "hierarchy": "Numeric Functions Theta",
          "module": "Numeric.Functions.Theta",
          "name": "theta4",
          "normalized": "Integer-\u003eComplex a-\u003eComplex a-\u003eComplex a",
          "package": "theta-functions",
          "signature": "Integer-\u003eComplex a-\u003eComplex a-\u003eComplex a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/theta-functions/docs/Numeric-Functions-Theta.html#v:theta4"
      }
    }
  ]
]