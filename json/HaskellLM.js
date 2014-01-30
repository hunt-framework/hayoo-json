[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaskellLM/docs/Math-LevenbergMarquardt.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Levenberg-Marquardt algorithm is a minimization\n algorithm for functions expressed as a sum of squared\n errors\n\u003c/p\u003e\u003cp\u003eThis can be used for curve-fitting, multidimensional\n function minimization, and neural networks training\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Math.LevenbergMarquardt",
        "fct-package": "HaskellLM",
        "fct-signature": "module",
        "fct-source": "src/Math-LevenbergMarquardt.html",
        "fct-type": "module",
        "title": "LevenbergMarquardt"
      },
      "index": {
        "description": "The Levenberg-Marquardt algorithm is minimization algorithm for functions expressed as sum of squared errors This can be used for curve-fitting multidimensional function minimization and neural networks training",
        "hierarchy": "Math LevenbergMarquardt",
        "module": "Math.LevenbergMarquardt",
        "name": "LevenbergMarquardt",
        "normalized": "",
        "package": "HaskellLM",
        "partial": "Levenberg Marquardt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaskellLM/docs/Math-LevenbergMarquardt.html#t:Function",
      "description": {
        "fct-descr": "\u003cp\u003eType that represents the function that can calculate the residues\n\u003c/p\u003e",
        "fct-module": "Math.LevenbergMarquardt",
        "fct-package": "HaskellLM",
        "fct-signature": "type",
        "fct-source": "src/Math-LevenbergMarquardt.html#Function",
        "fct-type": "type",
        "title": "Function"
      },
      "index": {
        "description": "Type that represents the function that can calculate the residues",
        "hierarchy": "Math LevenbergMarquardt",
        "module": "Math.LevenbergMarquardt",
        "name": "Function",
        "normalized": "",
        "package": "HaskellLM",
        "partial": "Function",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaskellLM/docs/Math-LevenbergMarquardt.html#t:Jacobian",
      "description": {
        "fct-descr": "\u003cp\u003eType that represents the function that can calculate the jacobian matrix\n   of the residue with respect to each parameter\n\u003c/p\u003e",
        "fct-module": "Math.LevenbergMarquardt",
        "fct-package": "HaskellLM",
        "fct-signature": "type",
        "fct-source": "src/Math-LevenbergMarquardt.html#Jacobian",
        "fct-type": "type",
        "title": "Jacobian"
      },
      "index": {
        "description": "Type that represents the function that can calculate the jacobian matrix of the residue with respect to each parameter",
        "hierarchy": "Math LevenbergMarquardt",
        "module": "Math.LevenbergMarquardt",
        "name": "Jacobian",
        "normalized": "",
        "package": "HaskellLM",
        "partial": "Jacobian",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HaskellLM/docs/Math-LevenbergMarquardt.html#v:lmMinimize",
      "description": {
        "fct-descr": "\u003cp\u003eEvolves the parameter x for f(x) = sum-square(e(x)) so that f(x)\n   will be minimized, where:\n\u003c/p\u003e\u003cp\u003ef     = real-valued error function,\n   e(x)  = {e1(x),e2(x),..,eN(x)}, where\n   e1(x) = the residue at the vector x\n\u003c/p\u003e\u003cp\u003eNOTE: eN(x) is usually represented as (sample - hypothesis(x))\n\u003c/p\u003e\u003cp\u003ee.g.: In training neural networks, hypothesis(x) would be the\n               network's output for a training set, and sample would be the\n               expected output for that training set\n\u003c/p\u003e\u003cp\u003eNOTE: The dampening constant(lambda) should be set to 0.01 and the dampening\n         update value (beta) should be set to be 10\n\u003c/p\u003e",
        "fct-module": "Math.LevenbergMarquardt",
        "fct-package": "HaskellLM",
        "fct-signature": "Function-\u003e Jacobian-\u003e Vector Double-\u003e Double-\u003e Double-\u003e Double-\u003e Int-\u003e (Vector Double, Matrix Double)",
        "fct-type": "function",
        "title": "lmMinimize"
      },
      "index": {
        "description": "Evolves the parameter for sum-square so that will be minimized where real-valued error function e1 e2 eN where e1 the residue at the vector NOTE eN is usually represented as sample hypothesis e.g In training neural networks hypothesis would be the network output for training set and sample would be the expected output for that training set NOTE The dampening constant lambda should be set to and the dampening update value beta should be set to be",
        "hierarchy": "Math LevenbergMarquardt",
        "module": "Math.LevenbergMarquardt",
        "name": "lmMinimize",
        "normalized": "Function-\u003eJacobian-\u003eVector Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003eInt-\u003e(Vector Double,Matrix Double)",
        "package": "HaskellLM",
        "partial": "Minimize",
        "signature": "Function-\u003eJacobian-\u003eVector Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003eInt-\u003e(Vector Double,Matrix Double)"
      }
    }
  }
]