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
        "word": "hmatrix-nipals"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNonlinear Iterative Partial Least Squares\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.LinearAlgebra.NIPALS",
          "name": "NIPALS",
          "package": "hmatrix-nipals",
          "source": "src/Numeric-LinearAlgebra-NIPALS.html",
          "type": "module"
        },
        "index": {
          "description": "Nonlinear Iterative Partial Least Squares",
          "hierarchy": "Numeric LinearAlgebra NIPALS",
          "module": "Numeric.LinearAlgebra.NIPALS",
          "name": "NIPALS",
          "package": "hmatrix-nipals",
          "partial": "NIPALS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hmatrix-nipals/docs/Numeric-LinearAlgebra-NIPALS.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate the first principal component of a set of samples.\n\u003c/p\u003e\u003cp\u003eEach row in the matrix is one sample. Note that this is transposed\n compared to the implementation of principal components using \u003ccode\u003e\u003ca\u003esvd\u003c/a\u003e\u003c/code\u003e\n or \u003ccode\u003e\u003ca\u003eleftSV\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e let (pc,scores,residuals) = firstPC $ fromRows samples\n\u003c/pre\u003e\u003cp\u003eThis is calculated by providing a default estimate of the scores to\n \u003ccode\u003e\u003ca\u003efirstPCFromScores\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.NIPALS",
          "name": "firstPC",
          "package": "hmatrix-nipals",
          "signature": "Matrix Double -\u003e (Vector Double, Vector Double, Matrix Double)",
          "source": "src/Numeric-LinearAlgebra-NIPALS.html#firstPC",
          "type": "function"
        },
        "index": {
          "description": "Calculate the first principal component of set of samples Each row in the matrix is one sample Note that this is transposed compared to the implementation of principal components using svd or leftSV Example let pc scores residuals firstPC fromRows samples This is calculated by providing default estimate of the scores to firstPCFromScores",
          "hierarchy": "Numeric LinearAlgebra NIPALS",
          "module": "Numeric.LinearAlgebra.NIPALS",
          "name": "firstPC",
          "normalized": "Matrix Double-\u003e(Vector Double,Vector Double,Matrix Double)",
          "package": "hmatrix-nipals",
          "partial": "PC",
          "signature": "Matrix Double-\u003e(Vector Double,Vector Double,Matrix Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmatrix-nipals/docs/Numeric-LinearAlgebra-NIPALS.html#v:firstPC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate the first principal component of a set of samples given\n a starting estimate of the scores.\n\u003c/p\u003e\u003cp\u003eEach row in the matrix is one sample. Note that this is transposed\n compared to the implementation of principal components using \u003ccode\u003e\u003ca\u003esvd\u003c/a\u003e\u003c/code\u003e\n or \u003ccode\u003e\u003ca\u003eleftSV\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThe second argument is a starting guess for the score vector. If\n this is close to the actual score vector, then this will cause the\n algorthm to converge much faster.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e let (pc,scores,residuals) = firstPCFromScores (fromRows samples) scoresGuess\n\u003c/pre\u003e",
          "module": "Numeric.LinearAlgebra.NIPALS",
          "name": "firstPCFromScores",
          "package": "hmatrix-nipals",
          "signature": "Matrix Double -\u003e Vector Double -\u003e (Vector Double, Vector Double, Matrix Double)",
          "source": "src/Numeric-LinearAlgebra-NIPALS.html#firstPCFromScores",
          "type": "function"
        },
        "index": {
          "description": "Calculate the first principal component of set of samples given starting estimate of the scores Each row in the matrix is one sample Note that this is transposed compared to the implementation of principal components using svd or leftSV The second argument is starting guess for the score vector If this is close to the actual score vector then this will cause the algorthm to converge much faster Example let pc scores residuals firstPCFromScores fromRows samples scoresGuess",
          "hierarchy": "Numeric LinearAlgebra NIPALS",
          "module": "Numeric.LinearAlgebra.NIPALS",
          "name": "firstPCFromScores",
          "normalized": "Matrix Double-\u003eVector Double-\u003e(Vector Double,Vector Double,Matrix Double)",
          "package": "hmatrix-nipals",
          "partial": "PCFrom Scores",
          "signature": "Matrix Double-\u003eVector Double-\u003e(Vector Double,Vector Double,Matrix Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmatrix-nipals/docs/Numeric-LinearAlgebra-NIPALS.html#v:firstPCFromScores"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate the first principal component -- calculating the\n samples fresh on every pass.\n\u003c/p\u003e\u003cp\u003eThis function calculates the exact same results as\n \u003ccode\u003e\u003ca\u003efirstPCFromScores\u003c/a\u003e\u003c/code\u003e (minus the residual), but instead of an input\n \u003ccode\u003e\u003ca\u003eMatrix\u003c/a\u003e\u003c/code\u003e, it takes a monad action that yields the list of samples,\n and it guarantees that the list returned by the action will be\n consumed in a single pass. However the action may be demanded many\n times.\n\u003c/p\u003e\u003cp\u003eThe residual can't be calculated lazily, like it is in\n \u003ccode\u003e\u003ca\u003efirstPCFromScores\u003c/a\u003e\u003c/code\u003e, because the samples would need to be\n demanded. Instead, to calculate the residual use \u003ccode\u003e\u003ca\u003eresidual\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThere is no corresponding \u003ccode\u003efirstPCM\u003c/code\u003e that guesses the initial score\n vector for you because if you need to use this function instead of\n \u003ccode\u003e\u003ca\u003efirstPC\u003c/a\u003e\u003c/code\u003e, then you really should come up with a reasonable\n starting point or it will take forever.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.NIPALS",
          "name": "firstPCFromScoresM",
          "package": "hmatrix-nipals",
          "signature": "m [Vector Double] -\u003e Vector Double -\u003e m (Vector Double, Vector Double)",
          "source": "src/Numeric-LinearAlgebra-NIPALS.html#firstPCFromScoresM",
          "type": "function"
        },
        "index": {
          "description": "Calculate the first principal component calculating the samples fresh on every pass This function calculates the exact same results as firstPCFromScores minus the residual but instead of an input Matrix it takes monad action that yields the list of samples and it guarantees that the list returned by the action will be consumed in single pass However the action may be demanded many times The residual can be calculated lazily like it is in firstPCFromScores because the samples would need to be demanded Instead to calculate the residual use residual There is no corresponding firstPCM that guesses the initial score vector for you because if you need to use this function instead of firstPC then you really should come up with reasonable starting point or it will take forever",
          "hierarchy": "Numeric LinearAlgebra NIPALS",
          "module": "Numeric.LinearAlgebra.NIPALS",
          "name": "firstPCFromScoresM",
          "normalized": "a[Vector Double]-\u003eVector Double-\u003ea(Vector Double,Vector Double)",
          "package": "hmatrix-nipals",
          "partial": "PCFrom Scores",
          "signature": "m[Vector Double]-\u003eVector Double-\u003em(Vector Double,Vector Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmatrix-nipals/docs/Numeric-LinearAlgebra-NIPALS.html#v:firstPCFromScoresM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate the residuals of a series of samples given a component\n and score vector.\n\u003c/p\u003e\u003cpre\u003e (p,t) \u003c- firstPCFromScoresM samplesM (randomVector 0 Gaussian numSamples)\n samples \u003c- samplesM\n let r = residual samples p t\n\u003c/pre\u003e",
          "module": "Numeric.LinearAlgebra.NIPALS",
          "name": "residual",
          "package": "hmatrix-nipals",
          "signature": "[Vector Double]-\u003e Vector Double-\u003e Vector Double-\u003e [Vector Double]",
          "type": "function"
        },
        "index": {
          "description": "Calculate the residuals of series of samples given component and score vector firstPCFromScoresM samplesM randomVector Gaussian numSamples samples samplesM let residual samples",
          "hierarchy": "Numeric LinearAlgebra NIPALS",
          "module": "Numeric.LinearAlgebra.NIPALS",
          "name": "residual",
          "normalized": "[Vector Double]-\u003eVector Double-\u003eVector Double-\u003e[Vector Double]",
          "package": "hmatrix-nipals",
          "signature": "[Vector Double]-\u003eVector Double-\u003eVector Double-\u003e[Vector Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmatrix-nipals/docs/Numeric-LinearAlgebra-NIPALS.html#v:residual"
      }
    }
  ]
]