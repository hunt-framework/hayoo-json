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
        "word": "HaskellLM"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Levenberg-Marquardt algorithm is a minimization\n algorithm for functions expressed as a sum of squared\n errors\n\u003c/p\u003e\u003cp\u003eThis can be used for curve-fitting, multidimensional\n function minimization, and neural networks training\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Math.LevenbergMarquardt",
          "name": "LevenbergMarquardt",
          "package": "HaskellLM",
          "source": "src/Math-LevenbergMarquardt.html",
          "type": "module"
        },
        "index": {
          "description": "The Levenberg-Marquardt algorithm is minimization algorithm for functions expressed as sum of squared errors This can be used for curve-fitting multidimensional function minimization and neural networks training",
          "hierarchy": "Math LevenbergMarquardt",
          "module": "Math.LevenbergMarquardt",
          "name": "LevenbergMarquardt",
          "package": "HaskellLM",
          "partial": "Levenberg Marquardt",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HaskellLM/docs/Math-LevenbergMarquardt.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType that represents the function that can calculate the residues\n\u003c/p\u003e",
          "module": "Math.LevenbergMarquardt",
          "name": "Function",
          "package": "HaskellLM",
          "source": "src/Math-LevenbergMarquardt.html#Function",
          "type": "type"
        },
        "index": {
          "description": "Type that represents the function that can calculate the residues",
          "hierarchy": "Math LevenbergMarquardt",
          "module": "Math.LevenbergMarquardt",
          "name": "Function",
          "package": "HaskellLM",
          "partial": "Function",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HaskellLM/docs/Math-LevenbergMarquardt.html#t:Function"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType that represents the function that can calculate the jacobian matrix\n   of the residue with respect to each parameter\n\u003c/p\u003e",
          "module": "Math.LevenbergMarquardt",
          "name": "Jacobian",
          "package": "HaskellLM",
          "source": "src/Math-LevenbergMarquardt.html#Jacobian",
          "type": "type"
        },
        "index": {
          "description": "Type that represents the function that can calculate the jacobian matrix of the residue with respect to each parameter",
          "hierarchy": "Math LevenbergMarquardt",
          "module": "Math.LevenbergMarquardt",
          "name": "Jacobian",
          "package": "HaskellLM",
          "partial": "Jacobian",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HaskellLM/docs/Math-LevenbergMarquardt.html#t:Jacobian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvolves the parameter x for f(x) = sum-square(e(x)) so that f(x)\n   will be minimized, where:\n\u003c/p\u003e\u003cp\u003ef     = real-valued error function,\n   e(x)  = {e1(x),e2(x),..,eN(x)}, where\n   e1(x) = the residue at the vector x\n\u003c/p\u003e\u003cp\u003eNOTE: eN(x) is usually represented as (sample - hypothesis(x))\n\u003c/p\u003e\u003cp\u003ee.g.: In training neural networks, hypothesis(x) would be the\n               network's output for a training set, and sample would be the\n               expected output for that training set\n\u003c/p\u003e\u003cp\u003eNOTE: The dampening constant(lambda) should be set to 0.01 and the dampening\n         update value (beta) should be set to be 10\n\u003c/p\u003e",
          "module": "Math.LevenbergMarquardt",
          "name": "lmMinimize",
          "package": "HaskellLM",
          "signature": "Function-\u003e Jacobian-\u003e Vector Double-\u003e Double-\u003e Double-\u003e Double-\u003e Int-\u003e (Vector Double, Matrix Double)",
          "type": "function"
        },
        "index": {
          "description": "Evolves the parameter for sum-square so that will be minimized where real-valued error function e1 e2 eN where e1 the residue at the vector NOTE eN is usually represented as sample hypothesis e.g In training neural networks hypothesis would be the network output for training set and sample would be the expected output for that training set NOTE The dampening constant lambda should be set to and the dampening update value beta should be set to be",
          "hierarchy": "Math LevenbergMarquardt",
          "module": "Math.LevenbergMarquardt",
          "name": "lmMinimize",
          "normalized": "Function-\u003eJacobian-\u003eVector Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003eInt-\u003e(Vector Double,Matrix Double)",
          "package": "HaskellLM",
          "partial": "Minimize",
          "signature": "Function-\u003eJacobian-\u003eVector Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003eInt-\u003e(Vector Double,Matrix Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaskellLM/docs/Math-LevenbergMarquardt.html#v:lmMinimize"
      }
    }
  ]
]