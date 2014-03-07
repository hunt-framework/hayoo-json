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
        "word": "hTensor"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCommon multidimensional array decompositions. See the paper by Kolda & Balder.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.LinearAlgebra.Array.Decomposition",
          "name": "Decomposition",
          "package": "hTensor",
          "source": "src/Numeric-LinearAlgebra-Array-Decomposition.html",
          "type": "module"
        },
        "index": {
          "description": "Common multidimensional array decompositions See the paper by Kolda Balder",
          "hierarchy": "Numeric LinearAlgebra Array Decomposition",
          "module": "Numeric.LinearAlgebra.Array.Decomposition",
          "name": "Decomposition",
          "package": "hTensor",
          "partial": "Decomposition",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Decomposition.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eoptimization parameters for alternating least squares\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Decomposition",
          "name": "ALSParam",
          "package": "hTensor",
          "source": "src/Numeric-LinearAlgebra-Array-Solve.html#ALSParam",
          "type": "data"
        },
        "index": {
          "description": "optimization parameters for alternating least squares",
          "hierarchy": "Numeric LinearAlgebra Array Decomposition",
          "module": "Numeric.LinearAlgebra.Array.Decomposition",
          "name": "ALSParam",
          "package": "hTensor",
          "partial": "ALSParam",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Decomposition.html#t:ALSParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Numeric.LinearAlgebra.Array.Decomposition\",\"Numeric.LinearAlgebra.Array.Solve\"]",
          "name": "ALSParam",
          "package": "hTensor",
          "signature": "ALSParam",
          "source": "src/Numeric-LinearAlgebra-Array-Solve.html#ALSParam",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Decomposition.html#v:ALSParam\",\"http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Solve.html#v:ALSParam\"]"
        },
        "index": {
          "hierarchy": "Numeric LinearAlgebra Array Decomposition",
          "module": "Numeric.LinearAlgebra.Array.Decomposition",
          "name": "ALSParam",
          "package": "hTensor",
          "partial": "ALSParam",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Decomposition.html#v:ALSParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExperimental implementation of the CP decomposition, based on alternating\n     least squares. We try approximations of increasing rank, until the relative reconstruction error is below a desired percent of Frobenius norm (epsilon).\n\u003c/p\u003e\u003cp\u003eThe approximation of rank k is abandoned if the error does not decrease at least delta% in an iteration.\n\u003c/p\u003e\u003cp\u003ePractical usage can be based on something like this:\n\u003c/p\u003e\u003cpre\u003e\ncp finit d e t = cpAuto (finit t) defaultParameters {delta = d, epsilon = e} t\n\ncpS = cp (InitSvd . fst . hosvd')\ncpR s = cp (cpInitRandom s)\n\u003c/pre\u003e\u003cp\u003eSo we can write\n\u003c/p\u003e\u003cpre\u003e\n -- initialization based on hosvd\ny = cpS 0.01 1E-6 t\n\n-- (pseudo)random initialization\nz = cpR seed 0.1 0.1 t\n\u003c/pre\u003e",
          "module": "Numeric.LinearAlgebra.Array.Decomposition",
          "name": "cpAuto",
          "package": "hTensor",
          "signature": "(Int -\u003e [Array Double])-\u003e ALSParam None Double-\u003e Array Double-\u003e [Array Double]",
          "type": "function"
        },
        "index": {
          "description": "Experimental implementation of the CP decomposition based on alternating least squares We try approximations of increasing rank until the relative reconstruction error is below desired percent of Frobenius norm epsilon The approximation of rank is abandoned if the error does not decrease at least delta in an iteration Practical usage can be based on something like this cp finit cpAuto finit defaultParameters delta epsilon cpS cp InitSvd fst hosvd cpR cp cpInitRandom So we can write initialization based on hosvd cpS E-6 pseudo random initialization cpR seed",
          "hierarchy": "Numeric LinearAlgebra Array Decomposition",
          "module": "Numeric.LinearAlgebra.Array.Decomposition",
          "name": "cpAuto",
          "normalized": "(Int-\u003e[Array Double])-\u003eALSParam None Double-\u003eArray Double-\u003e[Array Double]",
          "package": "hTensor",
          "partial": "Auto",
          "signature": "(Int-\u003e[Array Double])-\u003eALSParam None Double-\u003eArray Double-\u003e[Array Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Decomposition.html#v:cpAuto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epseudorandom cp initialization from a given seed\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Decomposition",
          "name": "cpInitRandom",
          "package": "hTensor",
          "signature": "Int-\u003e NArray i t-\u003e Int-\u003e [NArray None Double]",
          "type": "function"
        },
        "index": {
          "description": "pseudorandom cp initialization from given seed",
          "hierarchy": "Numeric LinearAlgebra Array Decomposition",
          "module": "Numeric.LinearAlgebra.Array.Decomposition",
          "name": "cpInitRandom",
          "normalized": "Int-\u003eNArray a b-\u003eInt-\u003e[NArray None Double]",
          "package": "hTensor",
          "partial": "Init Random",
          "signature": "Int-\u003eNArray i t-\u003eInt-\u003e[NArray None Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Decomposition.html#v:cpInitRandom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecp initialization based on the hosvd\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Decomposition",
          "name": "cpInitSvd",
          "package": "hTensor",
          "signature": "[NArray None Double]-\u003e Int-\u003e [NArray None Double]",
          "type": "function"
        },
        "index": {
          "description": "cp initialization based on the hosvd",
          "hierarchy": "Numeric LinearAlgebra Array Decomposition",
          "module": "Numeric.LinearAlgebra.Array.Decomposition",
          "name": "cpInitSvd",
          "normalized": "[NArray None Double]-\u003eInt-\u003e[NArray None Double]",
          "package": "hTensor",
          "partial": "Init Svd",
          "signature": "[NArray None Double]-\u003eInt-\u003e[NArray None Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Decomposition.html#v:cpInitSvd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBasic CP optimization for a given rank. The result includes the obtained sequence of errors.\n\u003c/p\u003e\u003cp\u003eFor example, a rank 3 approximation can be obtained as follows, where initialization\nis based on the hosvd:\n\u003c/p\u003e\u003cpre\u003e\n(y,errs) = cpRank 3 t\n     where cpRank r t = cpRun (cpInitSvd (fst $ hosvd' t) r) defaultParameters t\n\u003c/pre\u003e",
          "module": "Numeric.LinearAlgebra.Array.Decomposition",
          "name": "cpRun",
          "package": "hTensor",
          "signature": "[Array Double]-\u003e ALSParam None Double-\u003e Array Double-\u003e ([Array Double], [Double])",
          "type": "function"
        },
        "index": {
          "description": "Basic CP optimization for given rank The result includes the obtained sequence of errors For example rank approximation can be obtained as follows where initialization is based on the hosvd errs cpRank where cpRank cpRun cpInitSvd fst hosvd defaultParameters",
          "hierarchy": "Numeric LinearAlgebra Array Decomposition",
          "module": "Numeric.LinearAlgebra.Array.Decomposition",
          "name": "cpRun",
          "normalized": "[Array Double]-\u003eALSParam None Double-\u003eArray Double-\u003e([Array Double],[Double])",
          "package": "hTensor",
          "partial": "Run",
          "signature": "[Array Double]-\u003eALSParam None Double-\u003eArray Double-\u003e([Array Double],[Double])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Decomposition.html#v:cpRun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enMax = 20, epsilon = 1E-3, delta = 1, post = id, postk = const id, presys = id\n\u003c/p\u003e",
          "module": "[\"Numeric.LinearAlgebra.Array.Decomposition\",\"Numeric.LinearAlgebra.Array.Solve\"]",
          "name": "defaultParameters",
          "package": "hTensor",
          "signature": "ALSParam i t",
          "source": "src/Numeric-LinearAlgebra-Array-Solve.html#defaultParameters",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Decomposition.html#v:defaultParameters\",\"http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Solve.html#v:defaultParameters\"]"
        },
        "index": {
          "description": "nMax epsilon E-3 delta post id postk const id presys id",
          "hierarchy": "Numeric LinearAlgebra Array Decomposition",
          "module": "Numeric.LinearAlgebra.Array.Decomposition",
          "name": "defaultParameters",
          "package": "hTensor",
          "partial": "Parameters",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Decomposition.html#v:defaultParameters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eminimum relative improvement in the optimization (percent, e.g. 0.1)\n\u003c/p\u003e",
          "module": "[\"Numeric.LinearAlgebra.Array.Decomposition\",\"Numeric.LinearAlgebra.Array.Solve\"]",
          "name": "delta",
          "package": "hTensor",
          "signature": "Double",
          "source": "src/Numeric-LinearAlgebra-Array-Solve.html#ALSParam",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Decomposition.html#v:delta\",\"http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Solve.html#v:delta\"]"
        },
        "index": {
          "description": "minimum relative improvement in the optimization percent e.g",
          "hierarchy": "Numeric LinearAlgebra Array Decomposition",
          "module": "Numeric.LinearAlgebra.Array.Decomposition",
          "name": "delta",
          "package": "hTensor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Decomposition.html#v:delta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emaximum relative error. For nonhomogeneous problems it is\n   the reconstruction error in percent (e.g.\n   1E-3), and for homogeneous problems is the frobenius norm of the\n  expected zero structure in the right hand side.\n\u003c/p\u003e",
          "module": "[\"Numeric.LinearAlgebra.Array.Decomposition\",\"Numeric.LinearAlgebra.Array.Solve\"]",
          "name": "epsilon",
          "package": "hTensor",
          "signature": "Double",
          "source": "src/Numeric-LinearAlgebra-Array-Solve.html#ALSParam",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Decomposition.html#v:epsilon\",\"http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Solve.html#v:epsilon\"]"
        },
        "index": {
          "description": "maximum relative error For nonhomogeneous problems it is the reconstruction error in percent e.g E-3 and for homogeneous problems is the frobenius norm of the expected zero structure in the right hand side",
          "hierarchy": "Numeric LinearAlgebra Array Decomposition",
          "module": "Numeric.LinearAlgebra.Array.Decomposition",
          "name": "epsilon",
          "package": "hTensor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Decomposition.html#v:epsilon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultilinear Singular Value Decomposition (or Tucker's method, see Lathauwer et al.).\n\u003c/p\u003e\u003cp\u003eThe result is a list with the core (head) and rotations so that\n    t == product (hsvd t).\n\u003c/p\u003e\u003cp\u003eThe core and the rotations are truncated to the rank of each mode.\n\u003c/p\u003e\u003cp\u003eUse \u003ccode\u003e\u003ca\u003ehosvd'\u003c/a\u003e\u003c/code\u003e to get full transformations and rank information about each mode.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Decomposition",
          "name": "hosvd",
          "package": "hTensor",
          "signature": "Array Double -\u003e [Array Double]",
          "source": "src/Numeric-LinearAlgebra-Array-Decomposition.html#hosvd",
          "type": "function"
        },
        "index": {
          "description": "Multilinear Singular Value Decomposition or Tucker method see Lathauwer et al The result is list with the core head and rotations so that product hsvd The core and the rotations are truncated to the rank of each mode Use hosvd to get full transformations and rank information about each mode",
          "hierarchy": "Numeric LinearAlgebra Array Decomposition",
          "module": "Numeric.LinearAlgebra.Array.Decomposition",
          "name": "hosvd",
          "normalized": "Array Double-\u003e[Array Double]",
          "package": "hTensor",
          "signature": "Array Double-\u003e[Array Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Decomposition.html#v:hosvd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFull version of \u003ccode\u003e\u003ca\u003ehosvd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe first element in the result pair is a list with the core (head) and rotations so that\n    t == product (fst (hsvd' t)).\n\u003c/p\u003e\u003cp\u003eThe second element is a list of rank and singular values along each mode,\n    to give some idea about core structure.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Decomposition",
          "name": "hosvd'",
          "package": "hTensor",
          "signature": "Array Double -\u003e ([Array Double], [(Int, Vector Double)])",
          "source": "src/Numeric-LinearAlgebra-Array-Decomposition.html#hosvd%27",
          "type": "function"
        },
        "index": {
          "description": "Full version of hosvd The first element in the result pair is list with the core head and rotations so that product fst hsvd The second element is list of rank and singular values along each mode to give some idea about core structure",
          "hierarchy": "Numeric LinearAlgebra Array Decomposition",
          "module": "Numeric.LinearAlgebra.Array.Decomposition",
          "name": "hosvd'",
          "normalized": "Array Double-\u003e([Array Double],[(Int,Vector Double)])",
          "package": "hTensor",
          "signature": "Array Double-\u003e([Array Double],[(Int,Vector Double)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Decomposition.html#v:hosvd-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emaximum number of iterations\n\u003c/p\u003e",
          "module": "[\"Numeric.LinearAlgebra.Array.Decomposition\",\"Numeric.LinearAlgebra.Array.Solve\"]",
          "name": "nMax",
          "package": "hTensor",
          "signature": "Int",
          "source": "src/Numeric-LinearAlgebra-Array-Solve.html#ALSParam",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Decomposition.html#v:nMax\",\"http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Solve.html#v:nMax\"]"
        },
        "index": {
          "description": "maximum number of iterations",
          "hierarchy": "Numeric LinearAlgebra Array Decomposition",
          "module": "Numeric.LinearAlgebra.Array.Decomposition",
          "name": "nMax",
          "package": "hTensor",
          "partial": "Max",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Decomposition.html#v:nMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epost-processing function after each full iteration (e.g. \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "[\"Numeric.LinearAlgebra.Array.Decomposition\",\"Numeric.LinearAlgebra.Array.Solve\"]",
          "name": "post",
          "package": "hTensor",
          "signature": "[NArray i t] -\u003e [NArray i t]",
          "source": "src/Numeric-LinearAlgebra-Array-Solve.html#ALSParam",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Decomposition.html#v:post\",\"http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Solve.html#v:post\"]"
        },
        "index": {
          "description": "post-processing function after each full iteration e.g id",
          "hierarchy": "Numeric LinearAlgebra Array Decomposition",
          "module": "Numeric.LinearAlgebra.Array.Decomposition",
          "name": "post",
          "normalized": "[NArray a b]-\u003e[NArray a b]",
          "package": "hTensor",
          "signature": "[NArray i t]-\u003e[NArray i t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Decomposition.html#v:post"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epost-processing function for the k-th argument (e.g. \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "[\"Numeric.LinearAlgebra.Array.Decomposition\",\"Numeric.LinearAlgebra.Array.Solve\"]",
          "name": "postk",
          "package": "hTensor",
          "signature": "Int -\u003e NArray i t -\u003e NArray i t",
          "source": "src/Numeric-LinearAlgebra-Array-Solve.html#ALSParam",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Decomposition.html#v:postk\",\"http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Solve.html#v:postk\"]"
        },
        "index": {
          "description": "post-processing function for the k-th argument e.g const id",
          "hierarchy": "Numeric LinearAlgebra Array Decomposition",
          "module": "Numeric.LinearAlgebra.Array.Decomposition",
          "name": "postk",
          "normalized": "Int-\u003eNArray a b-\u003eNArray a b",
          "package": "hTensor",
          "signature": "Int-\u003eNArray i t-\u003eNArray i t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Decomposition.html#v:postk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epreprocessing function for the linear systems (eg. \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003einfoRank\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "[\"Numeric.LinearAlgebra.Array.Decomposition\",\"Numeric.LinearAlgebra.Array.Solve\"]",
          "name": "presys",
          "package": "hTensor",
          "signature": "Matrix t -\u003e Matrix t",
          "source": "src/Numeric-LinearAlgebra-Array-Solve.html#ALSParam",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Decomposition.html#v:presys\",\"http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Solve.html#v:presys\"]"
        },
        "index": {
          "description": "preprocessing function for the linear systems eg id or infoRank",
          "hierarchy": "Numeric LinearAlgebra Array Decomposition",
          "module": "Numeric.LinearAlgebra.Array.Decomposition",
          "name": "presys",
          "normalized": "Matrix a-\u003eMatrix a",
          "package": "hTensor",
          "signature": "Matrix t-\u003eMatrix t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Decomposition.html#v:presys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTruncate a \u003ccode\u003e\u003ca\u003ehosvd\u003c/a\u003e\u003c/code\u003e decomposition from the desired number of principal components in each dimension.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Decomposition",
          "name": "truncateFactors",
          "package": "hTensor",
          "signature": "[Int] -\u003e [Array Double] -\u003e [Array Double]",
          "source": "src/Numeric-LinearAlgebra-Array-Decomposition.html#truncateFactors",
          "type": "function"
        },
        "index": {
          "description": "Truncate hosvd decomposition from the desired number of principal components in each dimension",
          "hierarchy": "Numeric LinearAlgebra Array Decomposition",
          "module": "Numeric.LinearAlgebra.Array.Decomposition",
          "name": "truncateFactors",
          "normalized": "[Int]-\u003e[Array Double]-\u003e[Array Double]",
          "package": "hTensor",
          "partial": "Factors",
          "signature": "[Int]-\u003e[Array Double]-\u003e[Array Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Decomposition.html#v:truncateFactors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSolution of general multidimensional linear and multilinear systems.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.LinearAlgebra.Array.Solve",
          "name": "Solve",
          "package": "hTensor",
          "source": "src/Numeric-LinearAlgebra-Array-Solve.html",
          "type": "module"
        },
        "index": {
          "description": "Solution of general multidimensional linear and multilinear systems",
          "hierarchy": "Numeric LinearAlgebra Array Solve",
          "module": "Numeric.LinearAlgebra.Array.Solve",
          "name": "Solve",
          "package": "hTensor",
          "partial": "Solve",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Solve.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eoptimization parameters for alternating least squares\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Solve",
          "name": "ALSParam",
          "package": "hTensor",
          "source": "src/Numeric-LinearAlgebra-Array-Solve.html#ALSParam",
          "type": "data"
        },
        "index": {
          "description": "optimization parameters for alternating least squares",
          "hierarchy": "Numeric LinearAlgebra Array Solve",
          "module": "Numeric.LinearAlgebra.Array.Solve",
          "name": "ALSParam",
          "package": "hTensor",
          "partial": "ALSParam",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Solve.html#t:ALSParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe machine precision of a Double: \u003ccode\u003eeps = 2.22044604925031e-16\u003c/code\u003e (the value used by GNU-Octave).\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Solve",
          "name": "eps",
          "package": "hTensor",
          "signature": "Double",
          "type": "function"
        },
        "index": {
          "description": "The machine precision of Double eps e-16 the value used by GNU-Octave",
          "hierarchy": "Numeric LinearAlgebra Array Solve",
          "module": "Numeric.LinearAlgebra.Array.Solve",
          "name": "eps",
          "package": "hTensor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Solve.html#v:eps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epost processing function that modifies a list of tensors so that they\n have equal frobenius norm\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Solve",
          "name": "eqnorm",
          "package": "hTensor",
          "signature": "[NArray i Double] -\u003e [NArray i Double]",
          "source": "src/Numeric-LinearAlgebra-Array-Solve.html#eqnorm",
          "type": "function"
        },
        "index": {
          "description": "post processing function that modifies list of tensors so that they have equal frobenius norm",
          "hierarchy": "Numeric LinearAlgebra Array Solve",
          "module": "Numeric.LinearAlgebra.Array.Solve",
          "name": "eqnorm",
          "normalized": "[NArray a Double]-\u003e[NArray a Double]",
          "package": "hTensor",
          "signature": "[NArray i Double]-\u003e[NArray i Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Solve.html#v:eqnorm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edebugging function (e.g. for \u003ccode\u003e\u003ca\u003epresys\u003c/a\u003e\u003c/code\u003e), which shows rows, columns and rank of the\n coefficient matrix of a linear system.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Solve",
          "name": "infoRank",
          "package": "hTensor",
          "signature": "Matrix t -\u003e Matrix t",
          "source": "src/Numeric-LinearAlgebra-Array-Solve.html#infoRank",
          "type": "function"
        },
        "index": {
          "description": "debugging function e.g for presys which shows rows columns and rank of the coefficient matrix of linear system",
          "hierarchy": "Numeric LinearAlgebra Array Solve",
          "module": "Numeric.LinearAlgebra.Array.Solve",
          "name": "infoRank",
          "normalized": "Matrix a-\u003eMatrix a",
          "package": "hTensor",
          "partial": "Rank",
          "signature": "Matrix t-\u003eMatrix t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Solve.html#v:infoRank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSolution of a multilinear system a x y z ... = b based on alternating least squares.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Solve",
          "name": "mlSolve",
          "package": "hTensor",
          "signature": "ALSParam i t-\u003e [NArray i t]-\u003e [NArray i t]-\u003e NArray i t-\u003e ([NArray i t], [Double])",
          "type": "function"
        },
        "index": {
          "description": "Solution of multilinear system based on alternating least squares",
          "hierarchy": "Numeric LinearAlgebra Array Solve",
          "module": "Numeric.LinearAlgebra.Array.Solve",
          "name": "mlSolve",
          "normalized": "ALSParam a b-\u003e[NArray a b]-\u003e[NArray a b]-\u003eNArray a b-\u003e([NArray a b],[Double])",
          "package": "hTensor",
          "partial": "Solve",
          "signature": "ALSParam i t-\u003e[NArray i t]-\u003e[NArray i t]-\u003eNArray i t-\u003e([NArray i t],[Double])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Solve.html#v:mlSolve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSolution of the homogeneous multilinear system a x y z ... = 0 based on alternating least squares.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Solve",
          "name": "mlSolveH",
          "package": "hTensor",
          "signature": "ALSParam i t-\u003e [NArray i t]-\u003e [NArray i t]-\u003e ([NArray i t], [Double])",
          "type": "function"
        },
        "index": {
          "description": "Solution of the homogeneous multilinear system based on alternating least squares",
          "hierarchy": "Numeric LinearAlgebra Array Solve",
          "module": "Numeric.LinearAlgebra.Array.Solve",
          "name": "mlSolveH",
          "normalized": "ALSParam a b-\u003e[NArray a b]-\u003e[NArray a b]-\u003e([NArray a b],[Double])",
          "package": "hTensor",
          "partial": "Solve",
          "signature": "ALSParam i t-\u003e[NArray i t]-\u003e[NArray i t]-\u003e([NArray i t],[Double])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Solve.html#v:mlSolveH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSolution of a multilinear system a x y z ... = b, with a homogeneous index, based on alternating least squares.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Solve",
          "name": "mlSolveP",
          "package": "hTensor",
          "signature": "ALSParam Variant Double-\u003e [Tensor Double]-\u003e [Tensor Double]-\u003e Tensor Double-\u003e Name-\u003e ([Tensor Double], [Double])",
          "type": "function"
        },
        "index": {
          "description": "Solution of multilinear system with homogeneous index based on alternating least squares",
          "hierarchy": "Numeric LinearAlgebra Array Solve",
          "module": "Numeric.LinearAlgebra.Array.Solve",
          "name": "mlSolveP",
          "normalized": "ALSParam Variant Double-\u003e[Tensor Double]-\u003e[Tensor Double]-\u003eTensor Double-\u003eName-\u003e([Tensor Double],[Double])",
          "package": "hTensor",
          "partial": "Solve",
          "signature": "ALSParam Variant Double-\u003e[Tensor Double]-\u003e[Tensor Double]-\u003eTensor Double-\u003eName-\u003e([Tensor Double],[Double])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Solve.html#v:mlSolveP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSolution of the linear system a x = b, where a and b are\n general multidimensional arrays. The structure and dimension names\n of the result are inferred from the arguments.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Solve",
          "name": "solve",
          "package": "hTensor",
          "signature": "NArray i t-\u003e NArray i t-\u003e NArray i t",
          "type": "function"
        },
        "index": {
          "description": "Solution of the linear system where and are general multidimensional arrays The structure and dimension names of the result are inferred from the arguments",
          "hierarchy": "Numeric LinearAlgebra Array Solve",
          "module": "Numeric.LinearAlgebra.Array.Solve",
          "name": "solve",
          "normalized": "NArray a b-\u003eNArray a b-\u003eNArray a b",
          "package": "hTensor",
          "signature": "NArray i t-\u003eNArray i t-\u003eNArray i t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Solve.html#v:solve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.LinearAlgebra.Array.Solve",
          "name": "solve'",
          "package": "hTensor",
          "signature": "(Matrix t -\u003e Matrix a) -\u003e NArray i t -\u003e NArray i t -\u003e NArray i a",
          "source": "src/Numeric-LinearAlgebra-Array-Solve.html#solve%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric LinearAlgebra Array Solve",
          "module": "Numeric.LinearAlgebra.Array.Solve",
          "name": "solve'",
          "normalized": "(Matrix a-\u003eMatrix b)-\u003eNArray c a-\u003eNArray c a-\u003eNArray c b",
          "package": "hTensor",
          "signature": "(Matrix t-\u003eMatrix a)-\u003eNArray i t-\u003eNArray i t-\u003eNArray i a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Solve.html#v:solve-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven two arrays a (source) and  b (target), we try to compute linear transformations x,y,z,... for each dimension, such that product [a,x,y,z,...] == b.\n(We can use \u003ccode\u003e\u003ca\u003eeqnorm\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003epost\u003c/a\u003e\u003c/code\u003e processing, or \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Solve",
          "name": "solveFactors",
          "package": "hTensor",
          "signature": "Int-\u003e ALSParam i t-\u003e [NArray i t]-\u003e String-\u003e NArray i t-\u003e ([NArray i t], [Double])",
          "type": "function"
        },
        "index": {
          "description": "Given two arrays source and target we try to compute linear transformations for each dimension such that product We can use eqnorm for post processing or id",
          "hierarchy": "Numeric LinearAlgebra Array Solve",
          "module": "Numeric.LinearAlgebra.Array.Solve",
          "name": "solveFactors",
          "normalized": "Int-\u003eALSParam a b-\u003e[NArray a b]-\u003eString-\u003eNArray a b-\u003e([NArray a b],[Double])",
          "package": "hTensor",
          "partial": "Factors",
          "signature": "Int-\u003eALSParam i t-\u003e[NArray i t]-\u003eString-\u003eNArray i t-\u003e([NArray i t],[Double])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Solve.html#v:solveFactors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHomogeneous factorized system. Given an array a,\n given as a list of factors as, and a list of pairs of indices\n [\"pi\",\"qj\", \"rk\", etc.], we try to compute linear transformations\n x!\"pi\", y!\"pi\", z!\"rk\", etc. such that product [a,x,y,z,...] == 0.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Solve",
          "name": "solveFactorsH",
          "package": "hTensor",
          "signature": "Int-\u003e ALSParam i t-\u003e [NArray i t]-\u003e String-\u003e ([NArray i t], [Double])",
          "type": "function"
        },
        "index": {
          "description": "Homogeneous factorized system Given an array given as list of factors as and list of pairs of indices pi qj rk etc we try to compute linear transformations pi pi rk etc such that product",
          "hierarchy": "Numeric LinearAlgebra Array Solve",
          "module": "Numeric.LinearAlgebra.Array.Solve",
          "name": "solveFactorsH",
          "normalized": "Int-\u003eALSParam a b-\u003e[NArray a b]-\u003eString-\u003e([NArray a b],[Double])",
          "package": "hTensor",
          "partial": "Factors",
          "signature": "Int-\u003eALSParam i t-\u003e[NArray i t]-\u003eString-\u003e([NArray i t],[Double])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Solve.html#v:solveFactorsH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esolveHomog1\u003c/a\u003e\u003c/code\u003e for single letter index names.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Solve",
          "name": "solveH",
          "package": "hTensor",
          "signature": "NArray i t -\u003e [Char] -\u003e NArray i t",
          "source": "src/Numeric-LinearAlgebra-Array-Solve.html#solveH",
          "type": "function"
        },
        "index": {
          "description": "solveHomog1 for single letter index names",
          "hierarchy": "Numeric LinearAlgebra Array Solve",
          "module": "Numeric.LinearAlgebra.Array.Solve",
          "name": "solveH",
          "normalized": "NArray a b-\u003e[Char]-\u003eNArray a b",
          "package": "hTensor",
          "signature": "NArray i t-\u003e[Char]-\u003eNArray i t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Solve.html#v:solveH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSolution of the homogeneous linear system a x = 0, where a is a\n general multidimensional array.\n\u003c/p\u003e\u003cp\u003eIf the system is overconstrained we may provide the theoretical rank to get a MSE solution.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Solve",
          "name": "solveHomog",
          "package": "hTensor",
          "signature": "NArray i t-\u003e [Name]-\u003e Either Double Int-\u003e [NArray i t]",
          "type": "function"
        },
        "index": {
          "description": "Solution of the homogeneous linear system where is general multidimensional array If the system is overconstrained we may provide the theoretical rank to get MSE solution",
          "hierarchy": "Numeric LinearAlgebra Array Solve",
          "module": "Numeric.LinearAlgebra.Array.Solve",
          "name": "solveHomog",
          "normalized": "NArray a b-\u003e[Name]-\u003eEither Double Int-\u003e[NArray a b]",
          "package": "hTensor",
          "partial": "Homog",
          "signature": "NArray i t-\u003e[Name]-\u003eEither Double Int-\u003e[NArray i t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Solve.html#v:solveHomog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.LinearAlgebra.Array.Solve",
          "name": "solveHomog'",
          "package": "hTensor",
          "signature": "(Matrix t -\u003e Matrix a) -\u003e NArray i t -\u003e [Name] -\u003e Either Double Int -\u003e [NArray i a]",
          "source": "src/Numeric-LinearAlgebra-Array-Solve.html#solveHomog%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric LinearAlgebra Array Solve",
          "module": "Numeric.LinearAlgebra.Array.Solve",
          "name": "solveHomog'",
          "normalized": "(Matrix a-\u003eMatrix b)-\u003eNArray c a-\u003e[Name]-\u003eEither Double Int-\u003e[NArray c b]",
          "package": "hTensor",
          "partial": "Homog'",
          "signature": "(Matrix t-\u003eMatrix a)-\u003eNArray i t-\u003e[Name]-\u003eEither Double Int-\u003e[NArray i a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Solve.html#v:solveHomog-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simpler way to use \u003ccode\u003e\u003ca\u003esolveHomog\u003c/a\u003e\u003c/code\u003e, which returns just one solution.\n If the system is overconstrained it returns the MSE solution.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Solve",
          "name": "solveHomog1",
          "package": "hTensor",
          "signature": "NArray i t -\u003e [Name] -\u003e NArray i t",
          "source": "src/Numeric-LinearAlgebra-Array-Solve.html#solveHomog1",
          "type": "function"
        },
        "index": {
          "description": "simpler way to use solveHomog which returns just one solution If the system is overconstrained it returns the MSE solution",
          "hierarchy": "Numeric LinearAlgebra Array Solve",
          "module": "Numeric.LinearAlgebra.Array.Solve",
          "name": "solveHomog1",
          "normalized": "NArray a b-\u003e[Name]-\u003eNArray a b",
          "package": "hTensor",
          "partial": "Homog",
          "signature": "NArray i t-\u003e[Name]-\u003eNArray i t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Solve.html#v:solveHomog1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.LinearAlgebra.Array.Solve",
          "name": "solveHomog1'",
          "package": "hTensor",
          "signature": "(Matrix t -\u003e Matrix a) -\u003e NArray i t -\u003e [Name] -\u003e NArray i a",
          "source": "src/Numeric-LinearAlgebra-Array-Solve.html#solveHomog1%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric LinearAlgebra Array Solve",
          "module": "Numeric.LinearAlgebra.Array.Solve",
          "name": "solveHomog1'",
          "normalized": "(Matrix a-\u003eMatrix b)-\u003eNArray c a-\u003e[Name]-\u003eNArray c b",
          "package": "hTensor",
          "partial": "Homog",
          "signature": "(Matrix t-\u003eMatrix a)-\u003eNArray i t-\u003e[Name]-\u003eNArray i a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Solve.html#v:solveHomog1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSolution of the linear system a x = b, where a and b are\n general multidimensional arrays, with homogeneous equality along a given index.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Solve",
          "name": "solveP",
          "package": "hTensor",
          "signature": "Tensor Double-\u003e Tensor Double-\u003e Name-\u003e Tensor Double",
          "type": "function"
        },
        "index": {
          "description": "Solution of the linear system where and are general multidimensional arrays with homogeneous equality along given index",
          "hierarchy": "Numeric LinearAlgebra Array Solve",
          "module": "Numeric.LinearAlgebra.Array.Solve",
          "name": "solveP",
          "normalized": "Tensor Double-\u003eTensor Double-\u003eName-\u003eTensor Double",
          "package": "hTensor",
          "signature": "Tensor Double-\u003eTensor Double-\u003eName-\u003eTensor Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Solve.html#v:solveP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.LinearAlgebra.Array.Solve",
          "name": "solveP'",
          "package": "hTensor",
          "signature": "(Matrix Double -\u003e Matrix b) -\u003e NArray Variant Double -\u003e NArray Variant Double -\u003e Name -\u003e NArray Variant b",
          "source": "src/Numeric-LinearAlgebra-Array-Solve.html#solveP%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric LinearAlgebra Array Solve",
          "module": "Numeric.LinearAlgebra.Array.Solve",
          "name": "solveP'",
          "normalized": "(Matrix Double-\u003eMatrix a)-\u003eNArray Variant Double-\u003eNArray Variant Double-\u003eName-\u003eNArray Variant a",
          "package": "hTensor",
          "partial": "P'",
          "signature": "(Matrix Double-\u003eMatrix b)-\u003eNArray Variant Double-\u003eNArray Variant Double-\u003eName-\u003eNArray Variant b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Solve.html#v:solveP-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAdditional tools for manipulation of multidimensional arrays.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "Util",
          "package": "hTensor",
          "source": "src/Numeric-LinearAlgebra-Array-Util.html",
          "type": "module"
        },
        "index": {
          "description": "Additional tools for manipulation of multidimensional arrays",
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "Util",
          "package": "hTensor",
          "partial": "Util",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of compatible indices for contractions.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "Compat",
          "package": "hTensor",
          "source": "src/Numeric-LinearAlgebra-Array-Internal.html#Compat",
          "type": "class"
        },
        "index": {
          "description": "Class of compatible indices for contractions",
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "Compat",
          "package": "hTensor",
          "partial": "Compat",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#t:Compat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypes that can be elements of the multidimensional arrays.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "Coord",
          "package": "hTensor",
          "source": "src/Numeric-LinearAlgebra-Array-Internal.html#Coord",
          "type": "class"
        },
        "index": {
          "description": "Types that can be elements of the multidimensional arrays",
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "Coord",
          "package": "hTensor",
          "partial": "Coord",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#t:Coord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDimension descriptor.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "Idx",
          "package": "hTensor",
          "source": "src/Numeric-LinearAlgebra-Array-Internal.html#Idx",
          "type": "data"
        },
        "index": {
          "description": "Dimension descriptor",
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "Idx",
          "package": "hTensor",
          "partial": "Idx",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#t:Idx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA multidimensional array with index type i and elements t.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "NArray",
          "package": "hTensor",
          "source": "src/Numeric-LinearAlgebra-Array-Internal.html#NArray",
          "type": "data"
        },
        "index": {
          "description": "multidimensional array with index type and elements",
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "NArray",
          "package": "hTensor",
          "partial": "NArray",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#t:NArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eindices are denoted by strings, (frequently single-letter)\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "Name",
          "package": "hTensor",
          "source": "src/Numeric-LinearAlgebra-Array-Internal.html#Name",
          "type": "type"
        },
        "index": {
          "description": "indices are denoted by strings frequently single-letter",
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "Name",
          "package": "hTensor",
          "partial": "Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#t:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTensor product with automatic contraction of repeated indices, following Einstein summation convention.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "(|*|)",
          "package": "hTensor",
          "signature": "NArray i t -\u003e NArray i t -\u003e NArray i t",
          "source": "src/Numeric-LinearAlgebra-Array-Internal.html#%7C%2A%7C",
          "type": "function"
        },
        "index": {
          "description": "Tensor product with automatic contraction of repeated indices following Einstein summation convention",
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "(|*|) |*|",
          "normalized": "NArray a b-\u003eNArray a b-\u003eNArray a b",
          "package": "hTensor",
          "signature": "NArray i t-\u003eNArray i t-\u003eNArray i t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:-124--42--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ereorder\u003c/a\u003e\u003c/code\u003e (transpose) dimensions of the array (with single letter names).\n\u003c/p\u003e\u003cp\u003eOperations are defined by named indices, so the transposed array is operationally equivalent to the original one.\n\u003c/p\u003e",
          "module": "[\"Numeric.LinearAlgebra.Array.Util\",\"Numeric.LinearAlgebra.Array\"]",
          "name": "(~\u003e)",
          "package": "hTensor",
          "signature": "NArray i t -\u003e String -\u003e NArray i t",
          "source": "src/Numeric-LinearAlgebra-Array-Util.html#~%3E",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:-126--62-\",\"http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array.html#v:-126--62-\"]"
        },
        "index": {
          "description": "reorder transpose dimensions of the array with single letter names Operations are defined by named indices so the transposed array is operationally equivalent to the original one",
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "(~\u003e) ~\u003e",
          "normalized": "NArray a b-\u003eString-\u003eNArray a b",
          "package": "hTensor",
          "signature": "NArray i t-\u003eString-\u003eNArray i t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:-126--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRename indices in alphabetical order (\u003ccode\u003e\u003ca\u003erenameO\u003c/a\u003e\u003c/code\u003e) using single letter names.\n\u003c/p\u003e",
          "module": "[\"Numeric.LinearAlgebra.Array.Util\",\"Numeric.LinearAlgebra.Array\"]",
          "name": "(!)",
          "package": "hTensor",
          "signature": "NArray i t -\u003e [Char] -\u003e NArray i t",
          "source": "src/Numeric-LinearAlgebra-Array-Util.html#%21",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:-33-\",\"http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array.html#v:-33-\"]"
        },
        "index": {
          "description": "Rename indices in alphabetical order renameO using single letter names",
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "(!) !",
          "normalized": "NArray a b-\u003e[Char]-\u003eNArray a b",
          "package": "hTensor",
          "signature": "NArray i t-\u003e[Char]-\u003eNArray i t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplicit renaming of single letter index names.\n\u003c/p\u003e\u003cp\u003eFor instance, \u003ccode\u003et \u003e@\u003e \"pi qj\"\u003c/code\u003e changes index \"p\" to \"i\" and \"q\" to \"j\".\n\u003c/p\u003e",
          "module": "[\"Numeric.LinearAlgebra.Array.Util\",\"Numeric.LinearAlgebra.Array\"]",
          "name": "(!\u003e)",
          "package": "hTensor",
          "signature": "NArray i t -\u003e [Char] -\u003e NArray i t",
          "source": "src/Numeric-LinearAlgebra-Array-Util.html#%21%3E",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:-33--62-\",\"http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array.html#v:-33--62-\"]"
        },
        "index": {
          "description": "Explicit renaming of single letter index names For instance pi qj changes index to and to",
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "(!\u003e) !\u003e",
          "normalized": "NArray a b-\u003e[Char]-\u003eNArray a b",
          "package": "hTensor",
          "signature": "NArray i t-\u003e[Char]-\u003eNArray i t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:-33--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "Idx",
          "package": "hTensor",
          "signature": "Idx",
          "source": "src/Numeric-LinearAlgebra-Array-Internal.html#Idx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "Idx",
          "package": "hTensor",
          "partial": "Idx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:Idx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "analyzeProduct",
          "package": "hTensor",
          "signature": "NArray i t -\u003e NArray i t -\u003e Maybe (NArray i t, Int)",
          "source": "src/Numeric-LinearAlgebra-Array-Internal.html#analyzeProduct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "analyzeProduct",
          "normalized": "NArray a b-\u003eNArray a b-\u003eMaybe(NArray a b,Int)",
          "package": "hTensor",
          "partial": "Product",
          "signature": "NArray i t-\u003eNArray i t-\u003eMaybe(NArray i t,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:analyzeProduct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "applyAsMatrix",
          "package": "hTensor",
          "signature": "(Matrix t -\u003e Matrix t) -\u003e NArray i t -\u003e NArray i t",
          "source": "src/Numeric-LinearAlgebra-Array-Util.html#applyAsMatrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "applyAsMatrix",
          "normalized": "(Matrix a-\u003eMatrix a)-\u003eNArray b a-\u003eNArray b a",
          "package": "hTensor",
          "partial": "As Matrix",
          "signature": "(Matrix t-\u003eMatrix t)-\u003eNArray i t-\u003eNArray i t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:applyAsMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the \u003ccode\u003e\u003ca\u003eMatrix\u003c/a\u003e\u003c/code\u003e corresponding to a two-dimensional array,\n in the rows,cols order.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "asMatrix",
          "package": "hTensor",
          "signature": "NArray i t -\u003e Matrix t",
          "source": "src/Numeric-LinearAlgebra-Array-Internal.html#asMatrix",
          "type": "function"
        },
        "index": {
          "description": "Extract the Matrix corresponding to two-dimensional array in the rows cols order",
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "asMatrix",
          "normalized": "NArray a b-\u003eMatrix b",
          "package": "hTensor",
          "partial": "Matrix",
          "signature": "NArray i t-\u003eMatrix t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:asMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the scalar element corresponding to a 0-dimensional array.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "asScalar",
          "package": "hTensor",
          "signature": "NArray i t -\u003e t",
          "source": "src/Numeric-LinearAlgebra-Array-Internal.html#asScalar",
          "type": "function"
        },
        "index": {
          "description": "Extract the scalar element corresponding to dimensional array",
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "asScalar",
          "normalized": "NArray a b-\u003eb",
          "package": "hTensor",
          "partial": "Scalar",
          "signature": "NArray i t-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:asScalar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e corresponding to a one-dimensional array.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "asVector",
          "package": "hTensor",
          "signature": "NArray i t -\u003e Vector t",
          "source": "src/Numeric-LinearAlgebra-Array-Internal.html#asVector",
          "type": "function"
        },
        "index": {
          "description": "Extract the Vector corresponding to one-dimensional array",
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "asVector",
          "normalized": "NArray a b-\u003eVector b",
          "package": "hTensor",
          "partial": "Vector",
          "signature": "NArray i t-\u003eVector t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:asVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "atT",
          "package": "hTensor",
          "signature": "NArray i t -\u003e [Int] -\u003e NArray i t",
          "source": "src/Numeric-LinearAlgebra-Array-Internal.html#atT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "atT",
          "normalized": "NArray a b-\u003e[Int]-\u003eNArray a b",
          "package": "hTensor",
          "signature": "NArray i t-\u003e[Int]-\u003eNArray i t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:atT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtain a canonical base for the array.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "basisOf",
          "package": "hTensor",
          "signature": "NArray i t -\u003e [NArray i t]",
          "source": "src/Numeric-LinearAlgebra-Array-Internal.html#basisOf",
          "type": "function"
        },
        "index": {
          "description": "Obtain canonical base for the array",
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "basisOf",
          "normalized": "NArray a b-\u003e[NArray a b]",
          "package": "hTensor",
          "partial": "Of",
          "signature": "NArray i t-\u003e[NArray i t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:basisOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "compat",
          "package": "hTensor",
          "signature": "Idx a -\u003e Idx a -\u003e Bool",
          "source": "src/Numeric-LinearAlgebra-Array-Internal.html#compat",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "compat",
          "normalized": "Idx a-\u003eIdx a-\u003eBool",
          "package": "hTensor",
          "signature": "Idx a-\u003eIdx a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:compat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtains most general structure of a list of dimension specifications\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "conformable",
          "package": "hTensor",
          "signature": "[[Idx i]] -\u003e Maybe [Idx i]",
          "source": "src/Numeric-LinearAlgebra-Array-Internal.html#conformable",
          "type": "function"
        },
        "index": {
          "description": "Obtains most general structure of list of dimension specifications",
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "conformable",
          "normalized": "[[Idx a]]-\u003eMaybe[Idx a]",
          "package": "hTensor",
          "signature": "[[Idx i]]-\u003eMaybe[Idx i]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:conformable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the coordinates of an array as a\n flattened structure (in the order specified by \u003ccode\u003e\u003ca\u003edims\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "coords",
          "package": "hTensor",
          "signature": "NArray i t -\u003e Vector t",
          "source": "src/Numeric-LinearAlgebra-Array-Internal.html#coords",
          "type": "function"
        },
        "index": {
          "description": "Get the coordinates of an array as flattened structure in the order specified by dims",
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "coords",
          "normalized": "NArray a b-\u003eVector b",
          "package": "hTensor",
          "signature": "NArray i t-\u003eVector t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:coords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultidimensional diagonal of given order.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "diagT",
          "package": "hTensor",
          "signature": "[Double] -\u003e Int -\u003e Array Double",
          "source": "src/Numeric-LinearAlgebra-Array-Util.html#diagT",
          "type": "function"
        },
        "index": {
          "description": "Multidimensional diagonal of given order",
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "diagT",
          "normalized": "[Double]-\u003eInt-\u003eArray Double",
          "package": "hTensor",
          "signature": "[Double]-\u003eInt-\u003eArray Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:diagT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet detailed dimension information about the array.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "dims",
          "package": "hTensor",
          "signature": "NArray i t -\u003e [Idx i]",
          "source": "src/Numeric-LinearAlgebra-Array-Internal.html#dims",
          "type": "function"
        },
        "index": {
          "description": "Get detailed dimension information about the array",
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "dims",
          "normalized": "NArray a b-\u003e[Idx a]",
          "package": "hTensor",
          "signature": "NArray i t-\u003e[Idx i]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:dims"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a dummy index of dimension 1 at a given level (for formatting purposes).\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "dummyAt",
          "package": "hTensor",
          "signature": "Int -\u003e NArray i t -\u003e NArray i t",
          "source": "src/Numeric-LinearAlgebra-Array-Display.html#dummyAt",
          "type": "function"
        },
        "index": {
          "description": "Insert dummy index of dimension at given level for formatting purposes",
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "dummyAt",
          "normalized": "Int-\u003eNArray a b-\u003eNArray a b",
          "package": "hTensor",
          "partial": "At",
          "signature": "Int-\u003eNArray i t-\u003eNArray i t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:dummyAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect some parts of an array, taking into account position and value.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "extract",
          "package": "hTensor",
          "signature": "(Int -\u003e NArray i t -\u003e Bool) -\u003e Name -\u003e NArray i t -\u003e NArray i t",
          "source": "src/Numeric-LinearAlgebra-Array-Internal.html#extract",
          "type": "function"
        },
        "index": {
          "description": "Select some parts of an array taking into account position and value",
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "extract",
          "normalized": "(Int-\u003eNArray a b-\u003eBool)-\u003eName-\u003eNArray a b-\u003eNArray a b",
          "package": "hTensor",
          "signature": "(Int-\u003eNArray i t-\u003eBool)-\u003eName-\u003eNArray i t-\u003eNArray i t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:extract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtain a matrix whose columns are the fibers of the array in the given dimension. The column order depends on the selected index (see \u003ccode\u003e\u003ca\u003ematrixator\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "fibers",
          "package": "hTensor",
          "signature": "Name -\u003e NArray i t -\u003e Matrix t",
          "source": "src/Numeric-LinearAlgebra-Array-Internal.html#fibers",
          "type": "function"
        },
        "index": {
          "description": "Obtain matrix whose columns are the fibers of the array in the given dimension The column order depends on the selected index see matrixator",
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "fibers",
          "normalized": "Name-\u003eNArray a b-\u003eMatrix b",
          "package": "hTensor",
          "signature": "Name-\u003eNArray i t-\u003eMatrix t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:fibers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow a multidimensional array as a nested 2D table.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "formatArray",
          "package": "hTensor",
          "signature": "(t -\u003e String)-\u003e NArray i t-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Show multidimensional array as nested table",
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "formatArray",
          "normalized": "(a-\u003eString)-\u003eNArray b a-\u003eString",
          "package": "hTensor",
          "partial": "Array",
          "signature": "(t-\u003eString)-\u003eNArray i t-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:formatArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow the array as a nested table with a \"%.nf\" format. If all entries\n are approximate integers the array is shown without the .00.. digits.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "formatFixed",
          "package": "hTensor",
          "signature": "Int-\u003e NArray i Double-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Show the array as nested table with nf format If all entries are approximate integers the array is shown without the digits",
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "formatFixed",
          "normalized": "Int-\u003eNArray a Double-\u003eString",
          "package": "hTensor",
          "partial": "Fixed",
          "signature": "Int-\u003eNArray i Double-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:formatFixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow the array as a nested table with autoscaled entries.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "formatScaled",
          "package": "hTensor",
          "signature": "Int-\u003e NArray i Double-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Show the array as nested table with autoscaled entries",
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "formatScaled",
          "normalized": "Int-\u003eNArray a Double-\u003eString",
          "package": "hTensor",
          "partial": "Scaled",
          "signature": "Int-\u003eNArray i Double-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:formatScaled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a 2nd order array from a \u003ccode\u003e\u003ca\u003eMatrix\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "fromMatrix",
          "package": "hTensor",
          "signature": "i -\u003e i -\u003e Matrix t -\u003e NArray i t",
          "source": "src/Numeric-LinearAlgebra-Array-Internal.html#fromMatrix",
          "type": "function"
        },
        "index": {
          "description": "Create nd order array from Matrix",
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "fromMatrix",
          "normalized": "a-\u003ea-\u003eMatrix b-\u003eNArray a b",
          "package": "hTensor",
          "partial": "Matrix",
          "signature": "i-\u003ei-\u003eMatrix t-\u003eNArray i t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:fromMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a 1st order array from a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "fromVector",
          "package": "hTensor",
          "signature": "i -\u003e Vector t -\u003e NArray i t",
          "source": "src/Numeric-LinearAlgebra-Array-Internal.html#fromVector",
          "type": "function"
        },
        "index": {
          "description": "Create st order array from Vector",
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "fromVector",
          "normalized": "a-\u003eVector b-\u003eNArray a b",
          "package": "hTensor",
          "partial": "Vector",
          "signature": "i-\u003eVector t-\u003eNArray i t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:fromVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "iDim",
          "package": "hTensor",
          "signature": "Int",
          "source": "src/Numeric-LinearAlgebra-Array-Internal.html#Idx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "iDim",
          "package": "hTensor",
          "partial": "Dim",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:iDim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "iName",
          "package": "hTensor",
          "signature": "Name",
          "source": "src/Numeric-LinearAlgebra-Array-Internal.html#Idx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "iName",
          "package": "hTensor",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:iName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "iType",
          "package": "hTensor",
          "signature": "i",
          "source": "src/Numeric-LinearAlgebra-Array-Internal.html#Idx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "iType",
          "package": "hTensor",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:iType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a list of arrays to a common structure.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "makeConformant",
          "package": "hTensor",
          "signature": "[NArray i t] -\u003e [NArray i t]",
          "source": "src/Numeric-LinearAlgebra-Array-Internal.html#makeConformant",
          "type": "function"
        },
        "index": {
          "description": "Converts list of arrays to common structure",
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "makeConformant",
          "normalized": "[NArray a b]-\u003e[NArray a b]",
          "package": "hTensor",
          "partial": "Conformant",
          "signature": "[NArray i t]-\u003e[NArray i t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:makeConformant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function (defined on hmatrix \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003es) to all elements of a structure.\n Use \u003ccode\u003emapArray (mapVector f)\u003c/code\u003e for general functions.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "mapArray",
          "package": "hTensor",
          "signature": "(Vector a -\u003e Vector b) -\u003e NArray i a -\u003e NArray i b",
          "source": "src/Numeric-LinearAlgebra-Array-Internal.html#mapArray",
          "type": "function"
        },
        "index": {
          "description": "Apply function defined on hmatrix Vector to all elements of structure Use mapArray mapVector for general functions",
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "mapArray",
          "normalized": "(Vector a-\u003eVector b)-\u003eNArray c a-\u003eNArray c b",
          "package": "hTensor",
          "partial": "Array",
          "signature": "(Vector a-\u003eVector b)-\u003eNArray i a-\u003eNArray i b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:mapArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a function at the internal level selected by a set of indices\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "mapTat",
          "package": "hTensor",
          "signature": "(NArray i a -\u003e NArray i b) -\u003e [Name] -\u003e NArray i a -\u003e NArray i b",
          "source": "src/Numeric-LinearAlgebra-Array-Util.html#mapTat",
          "type": "function"
        },
        "index": {
          "description": "Map function at the internal level selected by set of indices",
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "mapTat",
          "normalized": "(NArray a b-\u003eNArray a c)-\u003e[Name]-\u003eNArray a b-\u003eNArray a c",
          "package": "hTensor",
          "partial": "Tat",
          "signature": "(NArray i a-\u003eNArray i b)-\u003e[Name]-\u003eNArray i a-\u003eNArray i b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:mapTat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReshapes an array as a matrix with the desired dimensions as flattened rows and flattened columns.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "matrixator",
          "package": "hTensor",
          "signature": "NArray i t-\u003e [Name]-\u003e [Name]-\u003e Matrix t",
          "type": "function"
        },
        "index": {
          "description": "Reshapes an array as matrix with the desired dimensions as flattened rows and flattened columns",
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "matrixator",
          "normalized": "NArray a b-\u003e[Name]-\u003e[Name]-\u003eMatrix b",
          "package": "hTensor",
          "signature": "NArray i t-\u003e[Name]-\u003e[Name]-\u003eMatrix t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:matrixator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReshapes an array as a matrix with the desired dimensions as flattened rows and flattened columns. We do not force the order of the columns.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "matrixatorFree",
          "package": "hTensor",
          "signature": "NArray i t-\u003e [Name]-\u003e (Matrix t, [Name])",
          "type": "function"
        },
        "index": {
          "description": "Reshapes an array as matrix with the desired dimensions as flattened rows and flattened columns We do not force the order of the columns",
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "matrixatorFree",
          "normalized": "NArray a b-\u003e[Name]-\u003e(Matrix b,[Name])",
          "package": "hTensor",
          "partial": "Free",
          "signature": "NArray i t-\u003e[Name]-\u003e(Matrix t,[Name])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:matrixatorFree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine an array using an association list.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "mkAssoc",
          "package": "hTensor",
          "signature": "[Int] -\u003e [([Int], Double)] -\u003e Array Double",
          "source": "src/Numeric-LinearAlgebra-Array-Util.html#mkAssoc",
          "type": "function"
        },
        "index": {
          "description": "Define an array using an association list",
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "mkAssoc",
          "normalized": "[Int]-\u003e[([Int],Double)]-\u003eArray Double",
          "package": "hTensor",
          "partial": "Assoc",
          "signature": "[Int]-\u003e[([Int],Double)]-\u003eArray Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:mkAssoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine an array using a function.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "mkFun",
          "package": "hTensor",
          "signature": "[Int] -\u003e ([Int] -\u003e Double) -\u003e Array Double",
          "source": "src/Numeric-LinearAlgebra-Array-Util.html#mkFun",
          "type": "function"
        },
        "index": {
          "description": "Define an array using function",
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "mkFun",
          "normalized": "[Int]-\u003e([Int]-\u003eDouble)-\u003eArray Double",
          "package": "hTensor",
          "partial": "Fun",
          "signature": "[Int]-\u003e([Int]-\u003eDouble)-\u003eArray Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:mkFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndex names.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "names",
          "package": "hTensor",
          "signature": "NArray i t -\u003e [Name]",
          "source": "src/Numeric-LinearAlgebra-Array-Internal.html#names",
          "type": "function"
        },
        "index": {
          "description": "Index names",
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "names",
          "normalized": "NArray a b-\u003e[Name]",
          "package": "hTensor",
          "signature": "NArray i t-\u003e[Name]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:names"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an array from a list of subarrays. (The inverse of \u003ccode\u003e\u003ca\u003eparts\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "newIndex",
          "package": "hTensor",
          "signature": "i-\u003e Name-\u003e [NArray i t]-\u003e NArray i t",
          "type": "function"
        },
        "index": {
          "description": "Create an array from list of subarrays The inverse of parts",
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "newIndex",
          "normalized": "a-\u003eName-\u003e[NArray a b]-\u003eNArray a b",
          "package": "hTensor",
          "partial": "Index",
          "signature": "i-\u003eName-\u003e[NArray i t]-\u003eNArray i t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:newIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRename indices so that they are not shown in formatted output.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "noIdx",
          "package": "hTensor",
          "signature": "NArray i t -\u003e NArray i t",
          "source": "src/Numeric-LinearAlgebra-Array-Display.html#noIdx",
          "type": "function"
        },
        "index": {
          "description": "Rename indices so that they are not shown in formatted output",
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "noIdx",
          "normalized": "NArray a b-\u003eNArray a b",
          "package": "hTensor",
          "partial": "Idx",
          "signature": "NArray i t-\u003eNArray i t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:noIdx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a list function to the parts of an array at a given index.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "onIndex",
          "package": "hTensor",
          "signature": "([NArray i a] -\u003e [NArray i b]) -\u003e Name -\u003e NArray i a -\u003e NArray i b",
          "source": "src/Numeric-LinearAlgebra-Array-Internal.html#onIndex",
          "type": "function"
        },
        "index": {
          "description": "Apply list function to the parts of an array at given index",
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "onIndex",
          "normalized": "([NArray a b]-\u003e[NArray a c])-\u003eName-\u003eNArray a b-\u003eNArray a c",
          "package": "hTensor",
          "partial": "Index",
          "signature": "([NArray i a]-\u003e[NArray i b])-\u003eName-\u003eNArray i a-\u003eNArray i b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:onIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "opos",
          "package": "hTensor",
          "signature": "Idx a -\u003e Idx a",
          "source": "src/Numeric-LinearAlgebra-Array-Internal.html#opos",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "opos",
          "normalized": "Idx a-\u003eIdx a",
          "package": "hTensor",
          "signature": "Idx a-\u003eIdx a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:opos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of dimensions of a multidimensional array.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "order",
          "package": "hTensor",
          "signature": "NArray i t -\u003e Int",
          "source": "src/Numeric-LinearAlgebra-Array-Internal.html#order",
          "type": "function"
        },
        "index": {
          "description": "The number of dimensions of multidimensional array",
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "order",
          "normalized": "NArray a b-\u003eInt",
          "package": "hTensor",
          "signature": "NArray i t-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:order"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOuter product of a list of arrays along the common indices.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "outers",
          "package": "hTensor",
          "signature": "[NArray i a] -\u003e NArray i a",
          "source": "src/Numeric-LinearAlgebra-Array-Util.html#outers",
          "type": "function"
        },
        "index": {
          "description": "Outer product of list of arrays along the common indices",
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "outers",
          "normalized": "[NArray a b]-\u003eNArray a b",
          "package": "hTensor",
          "signature": "[NArray i a]-\u003eNArray i a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:outers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a list of the substructures at the given level.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "parts",
          "package": "hTensor",
          "signature": "NArray i t-\u003e Name-\u003e [NArray i t]",
          "type": "function"
        },
        "index": {
          "description": "Create list of the substructures at the given level",
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "parts",
          "normalized": "NArray a b-\u003eName-\u003e[NArray a b]",
          "package": "hTensor",
          "signature": "NArray i t-\u003eName-\u003e[NArray i t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:parts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRename indices using an association list.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "renameExplicit",
          "package": "hTensor",
          "signature": "[(Name, Name)] -\u003e NArray i t -\u003e NArray i t",
          "source": "src/Numeric-LinearAlgebra-Array-Internal.html#renameExplicit",
          "type": "function"
        },
        "index": {
          "description": "Rename indices using an association list",
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "renameExplicit",
          "normalized": "[(Name,Name)]-\u003eNArray a b-\u003eNArray a b",
          "package": "hTensor",
          "partial": "Explicit",
          "signature": "[(Name,Name)]-\u003eNArray i t-\u003eNArray i t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:renameExplicit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRename indices in alphabetical order. Equal indices of compatible type are contracted out.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "renameO",
          "package": "hTensor",
          "signature": "NArray i t -\u003e [Name] -\u003e NArray i t",
          "source": "src/Numeric-LinearAlgebra-Array-Util.html#renameO",
          "type": "function"
        },
        "index": {
          "description": "Rename indices in alphabetical order Equal indices of compatible type are contracted out",
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "renameO",
          "normalized": "NArray a b-\u003e[Name]-\u003eNArray a b",
          "package": "hTensor",
          "signature": "NArray i t-\u003e[Name]-\u003eNArray i t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:renameO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the \u003ccode\u003e\u003ca\u003eparts\u003c/a\u003e\u003c/code\u003e of an array, and renameRaw one of the remaining indices\n with succesive integers.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "renameParts",
          "package": "hTensor",
          "signature": "Name-\u003e NArray i t-\u003e Name-\u003e String-\u003e [NArray i t]",
          "type": "function"
        },
        "index": {
          "description": "Extract the parts of an array and renameRaw one of the remaining indices with succesive integers",
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "renameParts",
          "normalized": "Name-\u003eNArray a b-\u003eName-\u003eString-\u003e[NArray a b]",
          "package": "hTensor",
          "partial": "Parts",
          "signature": "Name-\u003eNArray i t-\u003eName-\u003eString-\u003e[NArray i t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:renameParts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the internal layout of coordinates.\n The array, considered as an abstract object, does not change.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "reorder",
          "package": "hTensor",
          "signature": "[Name] -\u003e NArray i t -\u003e NArray i t",
          "source": "src/Numeric-LinearAlgebra-Array-Internal.html#reorder",
          "type": "function"
        },
        "index": {
          "description": "Change the internal layout of coordinates The array considered as an abstract object does not change",
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "reorder",
          "normalized": "[Name]-\u003eNArray a b-\u003eNArray a b",
          "package": "hTensor",
          "signature": "[Name]-\u003eNArray i t-\u003eNArray i t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:reorder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echange the whole set of coordinates.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "resetCoords",
          "package": "hTensor",
          "signature": "NArray i t -\u003e Vector t -\u003e NArray i t",
          "source": "src/Numeric-LinearAlgebra-Array-Internal.html#resetCoords",
          "type": "function"
        },
        "index": {
          "description": "change the whole set of coordinates",
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "resetCoords",
          "normalized": "NArray a b-\u003eVector b-\u003eNArray a b",
          "package": "hTensor",
          "partial": "Coords",
          "signature": "NArray i t-\u003eVector t-\u003eNArray i t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:resetCoords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if two arrays have the same structure.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "sameStructure",
          "package": "hTensor",
          "signature": "NArray i t1 -\u003e NArray i t2 -\u003e Bool",
          "source": "src/Numeric-LinearAlgebra-Array-Internal.html#sameStructure",
          "type": "function"
        },
        "index": {
          "description": "Check if two arrays have the same structure",
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "sameStructure",
          "normalized": "NArray a b-\u003eNArray a b-\u003eBool",
          "package": "hTensor",
          "partial": "Structure",
          "signature": "NArray i t-\u003eNArray i t-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:sameStructure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a 0-dimensional structure.\n\u003c/p\u003e",
          "module": "[\"Numeric.LinearAlgebra.Array.Util\",\"Numeric.LinearAlgebra.Array\"]",
          "name": "scalar",
          "package": "hTensor",
          "signature": "t -\u003e NArray i t",
          "source": "src/Numeric-LinearAlgebra-Array-Internal.html#scalar",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:scalar\",\"http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array.html#v:scalar\"]"
        },
        "index": {
          "description": "Create dimensional structure",
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "scalar",
          "normalized": "a-\u003eNArray b a",
          "package": "hTensor",
          "signature": "t-\u003eNArray i t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:scalar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange type of index.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "setType",
          "package": "hTensor",
          "signature": "Name -\u003e i -\u003e NArray i t -\u003e NArray i t",
          "source": "src/Numeric-LinearAlgebra-Array-Util.html#setType",
          "type": "function"
        },
        "index": {
          "description": "Change type of index",
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "setType",
          "normalized": "Name-\u003ea-\u003eNArray a b-\u003eNArray a b",
          "package": "hTensor",
          "partial": "Type",
          "signature": "Name-\u003ei-\u003eNArray i t-\u003eNArray i t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:setType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDimension of given index.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "size",
          "package": "hTensor",
          "signature": "Name -\u003e NArray i t -\u003e Int",
          "source": "src/Numeric-LinearAlgebra-Array-Internal.html#size",
          "type": "function"
        },
        "index": {
          "description": "Dimension of given index",
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "size",
          "normalized": "Name-\u003eNArray a b-\u003eInt",
          "package": "hTensor",
          "signature": "Name-\u003eNArray i t-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "sizes",
          "package": "hTensor",
          "signature": "NArray i t -\u003e [Int]",
          "source": "src/Numeric-LinearAlgebra-Array-Internal.html#sizes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "sizes",
          "normalized": "NArray a b-\u003e[Int]",
          "package": "hTensor",
          "signature": "NArray i t-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:sizes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is equivalent to the regular \u003ccode\u003e\u003ca\u003eproduct\u003c/a\u003e\u003c/code\u003e, but in the order that minimizes the size of the\n intermediate factors.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "smartProduct",
          "package": "hTensor",
          "signature": "[NArray i t] -\u003e NArray i t",
          "source": "src/Numeric-LinearAlgebra-Array-Internal.html#smartProduct",
          "type": "function"
        },
        "index": {
          "description": "This is equivalent to the regular product but in the order that minimizes the size of the intermediate factors",
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "smartProduct",
          "normalized": "[NArray a b]-\u003eNArray a b",
          "package": "hTensor",
          "partial": "Product",
          "signature": "[NArray i t]-\u003eNArray i t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:smartProduct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "takeDiagT",
          "package": "hTensor",
          "signature": "NArray i t -\u003e [t]",
          "source": "src/Numeric-LinearAlgebra-Array-Internal.html#takeDiagT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "takeDiagT",
          "normalized": "NArray a b-\u003e[b]",
          "package": "hTensor",
          "partial": "Diag",
          "signature": "NArray i t-\u003e[t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:takeDiagT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of given index.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "typeOf",
          "package": "hTensor",
          "signature": "Name -\u003e NArray i t -\u003e i",
          "source": "src/Numeric-LinearAlgebra-Array-Internal.html#typeOf",
          "type": "function"
        },
        "index": {
          "description": "Type of given index",
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "typeOf",
          "normalized": "Name-\u003eNArray a b-\u003ea",
          "package": "hTensor",
          "partial": "Of",
          "signature": "Name-\u003eNArray i t-\u003ei",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:typeOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply an element-by-element binary function to the coordinates of two arrays. The arguments are automatically made conformant.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "zipArray",
          "package": "hTensor",
          "signature": "(Vector a -\u003e Vector b -\u003e Vector c)-\u003e NArray i a-\u003e NArray i b-\u003e NArray i c",
          "type": "function"
        },
        "index": {
          "description": "Apply an element-by-element binary function to the coordinates of two arrays The arguments are automatically made conformant",
          "hierarchy": "Numeric LinearAlgebra Array Util",
          "module": "Numeric.LinearAlgebra.Array.Util",
          "name": "zipArray",
          "normalized": "(Vector a-\u003eVector b-\u003eVector c)-\u003eNArray d a-\u003eNArray d b-\u003eNArray d c",
          "package": "hTensor",
          "partial": "Array",
          "signature": "(Vector a-\u003eVector b-\u003eVector c)-\u003eNArray i a-\u003eNArray i b-\u003eNArray i c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array-Util.html#v:zipArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple multidimensional array with useful numeric instances.\n\u003c/p\u003e\u003cp\u003eContractions only require equal dimension.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.LinearAlgebra.Array",
          "name": "Array",
          "package": "hTensor",
          "source": "src/Numeric-LinearAlgebra-Array.html",
          "type": "module"
        },
        "index": {
          "description": "Simple multidimensional array with useful numeric instances Contractions only require equal dimension",
          "hierarchy": "Numeric LinearAlgebra Array",
          "module": "Numeric.LinearAlgebra.Array",
          "name": "Array",
          "package": "hTensor",
          "partial": "Array",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultidimensional array with unespecified coordinate type.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array",
          "name": "Array",
          "package": "hTensor",
          "source": "src/Numeric-LinearAlgebra-Array-Simple.html#Array",
          "type": "type"
        },
        "index": {
          "description": "Multidimensional array with unespecified coordinate type",
          "hierarchy": "Numeric LinearAlgebra Array",
          "module": "Numeric.LinearAlgebra.Array",
          "name": "Array",
          "package": "hTensor",
          "partial": "Array",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array.html#t:Array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnespecified coordinate type. Contractions only\n require equal dimension.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array",
          "name": "None",
          "package": "hTensor",
          "source": "src/Numeric-LinearAlgebra-Array-Simple.html#None",
          "type": "data"
        },
        "index": {
          "description": "Unespecified coordinate type Contractions only require equal dimension",
          "hierarchy": "Numeric LinearAlgebra Array",
          "module": "Numeric.LinearAlgebra.Array",
          "name": "None",
          "package": "hTensor",
          "partial": "None",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array.html#t:None"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eElement by element product.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array",
          "name": "(.*)",
          "package": "hTensor",
          "signature": "NArray i a -\u003e NArray i a -\u003e NArray i a",
          "source": "src/Numeric-LinearAlgebra-Array.html#.%2A",
          "type": "function"
        },
        "index": {
          "description": "Element by element product",
          "hierarchy": "Numeric LinearAlgebra Array",
          "module": "Numeric.LinearAlgebra.Array",
          "name": "(.*) .*",
          "normalized": "NArray a b-\u003eNArray a b-\u003eNArray a b",
          "package": "hTensor",
          "signature": "NArray i a-\u003eNArray i a-\u003eNArray i a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array.html#v:.-42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.LinearAlgebra.Array",
          "name": "None",
          "package": "hTensor",
          "signature": "None",
          "source": "src/Numeric-LinearAlgebra-Array-Simple.html#None",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric LinearAlgebra Array",
          "module": "Numeric.LinearAlgebra.Array",
          "name": "None",
          "package": "hTensor",
          "partial": "None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array.html#v:None"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e from a list of parts (\u003ccode\u003eindex = \u003ccode\u003e\u003ca\u003enewIndex\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eNone\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array",
          "name": "index",
          "package": "hTensor",
          "signature": "Name -\u003e [Array t] -\u003e Array t",
          "source": "src/Numeric-LinearAlgebra-Array.html#index",
          "type": "function"
        },
        "index": {
          "description": "Create an Array from list of parts index newIndex None",
          "hierarchy": "Numeric LinearAlgebra Array",
          "module": "Numeric.LinearAlgebra.Array",
          "name": "index",
          "normalized": "Name-\u003e[Array a]-\u003eArray a",
          "package": "hTensor",
          "signature": "Name-\u003e[Array t]-\u003eArray t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruction of an \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e from a list of dimensions and a list of elements in left to right order.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array",
          "name": "listArray",
          "package": "hTensor",
          "signature": "[Int]-\u003e [t]-\u003e Array t",
          "type": "function"
        },
        "index": {
          "description": "Construction of an Array from list of dimensions and list of elements in left to right order",
          "hierarchy": "Numeric LinearAlgebra Array",
          "module": "Numeric.LinearAlgebra.Array",
          "name": "listArray",
          "normalized": "[Int]-\u003e[a]-\u003eArray a",
          "package": "hTensor",
          "partial": "Array",
          "signature": "[Int]-\u003e[t]-\u003eArray t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array.html#v:listArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint the array as a nested table with the desired format (e.g. %7.2f) (see also \u003ccode\u003e\u003ca\u003eformatArray\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eformatScaled\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Array",
          "name": "printA",
          "package": "hTensor",
          "signature": "String -\u003e NArray i t -\u003e IO ()",
          "source": "src/Numeric-LinearAlgebra-Array-Display.html#printA",
          "type": "function"
        },
        "index": {
          "description": "Print the array as nested table with the desired format e.g see also formatArray and formatScaled",
          "hierarchy": "Numeric LinearAlgebra Array",
          "module": "Numeric.LinearAlgebra.Array",
          "name": "printA",
          "normalized": "String-\u003eNArray a b-\u003eIO()",
          "package": "hTensor",
          "signature": "String-\u003eNArray i t-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Array.html#v:printA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExterior Algebra.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.LinearAlgebra.Exterior",
          "name": "Exterior",
          "package": "hTensor",
          "source": "src/Numeric-LinearAlgebra-Exterior.html",
          "type": "module"
        },
        "index": {
          "description": "Exterior Algebra",
          "hierarchy": "Numeric LinearAlgebra Exterior",
          "module": "Numeric.LinearAlgebra.Exterior",
          "name": "Exterior",
          "package": "hTensor",
          "partial": "Exterior",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Exterior.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe exterior (wedge) product of two tensors. Obtains the union of subspaces.\n\u003c/p\u003e\u003cp\u003eImplemented as the antisymmetrization of the tensor product.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Exterior",
          "name": "(/\\)",
          "package": "hTensor",
          "signature": "Tensor t -\u003e Tensor t -\u003e Tensor t",
          "source": "src/Numeric-LinearAlgebra-Exterior.html#%2F%5C",
          "type": "function"
        },
        "index": {
          "description": "The exterior wedge product of two tensors Obtains the union of subspaces Implemented as the antisymmetrization of the tensor product",
          "hierarchy": "Numeric LinearAlgebra Exterior",
          "module": "Numeric.LinearAlgebra.Exterior",
          "name": "(/\\) /\\",
          "normalized": "Tensor a-\u003eTensor a-\u003eTensor a",
          "package": "hTensor",
          "signature": "Tensor t-\u003eTensor t-\u003eTensor t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Exterior.html#v:-47--92-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \"meet\" operator. Obtains the intersection of subspaces.\n\u003c/p\u003e\u003cpre\u003ea \\/ b = dual (dual a /\\ dual b)\u003c/pre\u003e",
          "module": "Numeric.LinearAlgebra.Exterior",
          "name": "(\\/)",
          "package": "hTensor",
          "signature": "Tensor Double -\u003e Tensor Double -\u003e Tensor Double",
          "source": "src/Numeric-LinearAlgebra-Exterior.html#%5C%2F",
          "type": "function"
        },
        "index": {
          "description": "The meet operator Obtains the intersection of subspaces dual dual dual",
          "hierarchy": "Numeric LinearAlgebra Exterior",
          "module": "Numeric.LinearAlgebra.Exterior",
          "name": "(\\/) \\/",
          "normalized": "Tensor Double-\u003eTensor Double-\u003eTensor Double",
          "package": "hTensor",
          "signature": "Tensor Double-\u003eTensor Double-\u003eTensor Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Exterior.html#v:-92--47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract a compact multivector representation from a full antisymmetric tensor.\n\u003c/p\u003e\u003cp\u003easMultivector = Multivector.\u003ccode\u003e\u003ca\u003efromTensor\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e(We do not check that the tensor is actually antisymmetric.)\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Exterior",
          "name": "asMultivector",
          "package": "hTensor",
          "signature": "Tensor Double -\u003e Multivector",
          "source": "src/Numeric-LinearAlgebra-Exterior.html#asMultivector",
          "type": "function"
        },
        "index": {
          "description": "Extract compact multivector representation from full antisymmetric tensor asMultivector Multivector fromTensor We do not check that the tensor is actually antisymmetric",
          "hierarchy": "Numeric LinearAlgebra Exterior",
          "module": "Numeric.LinearAlgebra.Exterior",
          "name": "asMultivector",
          "normalized": "Tensor Double-\u003eMultivector",
          "package": "hTensor",
          "partial": "Multivector",
          "signature": "Tensor Double-\u003eMultivector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Exterior.html#v:asMultivector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInner product of a r-vector with the whole space.\n\u003c/p\u003e\u003cpre\u003edual t = inner (leviCivita n) t\u003c/pre\u003e",
          "module": "Numeric.LinearAlgebra.Exterior",
          "name": "dual",
          "package": "hTensor",
          "signature": "Tensor Double -\u003e Tensor Double",
          "source": "src/Numeric-LinearAlgebra-Exterior.html#dual",
          "type": "function"
        },
        "index": {
          "description": "Inner product of r-vector with the whole space dual inner leviCivita",
          "hierarchy": "Numeric LinearAlgebra Exterior",
          "module": "Numeric.LinearAlgebra.Exterior",
          "name": "dual",
          "normalized": "Tensor Double-\u003eTensor Double",
          "package": "hTensor",
          "signature": "Tensor Double-\u003eTensor Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Exterior.html#v:dual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an explicit antisymmetric \u003ccode\u003e\u003ca\u003eTensor\u003c/a\u003e\u003c/code\u003e from the components of a Multivector of a given grade.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Exterior",
          "name": "fromMultivector",
          "package": "hTensor",
          "signature": "Int -\u003e Multivector -\u003e Tensor Double",
          "source": "src/Numeric-LinearAlgebra-Exterior.html#fromMultivector",
          "type": "function"
        },
        "index": {
          "description": "Create an explicit antisymmetric Tensor from the components of Multivector of given grade",
          "hierarchy": "Numeric LinearAlgebra Exterior",
          "module": "Numeric.LinearAlgebra.Exterior",
          "name": "fromMultivector",
          "normalized": "Int-\u003eMultivector-\u003eTensor Double",
          "package": "hTensor",
          "partial": "Multivector",
          "signature": "Int-\u003eMultivector-\u003eTensor Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Exterior.html#v:fromMultivector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEuclidean inner product of multivectors.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Exterior",
          "name": "inner",
          "package": "hTensor",
          "signature": "Tensor t -\u003e Tensor t -\u003e Tensor t",
          "source": "src/Numeric-LinearAlgebra-Exterior.html#inner",
          "type": "function"
        },
        "index": {
          "description": "Euclidean inner product of multivectors",
          "hierarchy": "Numeric LinearAlgebra Exterior",
          "module": "Numeric.LinearAlgebra.Exterior",
          "name": "inner",
          "normalized": "Tensor a-\u003eTensor a-\u003eTensor a",
          "package": "hTensor",
          "signature": "Tensor t-\u003eTensor t-\u003eTensor t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Exterior.html#v:inner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe full antisymmetric tensor of order n (contravariant version).\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Exterior",
          "name": "leviCivita",
          "package": "hTensor",
          "signature": "Int -\u003e Tensor Double",
          "source": "src/Numeric-LinearAlgebra-Exterior.html#leviCivita",
          "type": "function"
        },
        "index": {
          "description": "The full antisymmetric tensor of order contravariant version",
          "hierarchy": "Numeric LinearAlgebra Exterior",
          "module": "Numeric.LinearAlgebra.Exterior",
          "name": "leviCivita",
          "normalized": "Int-\u003eTensor Double",
          "package": "hTensor",
          "partial": "Civita",
          "signature": "Int-\u003eTensor Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Exterior.html#v:leviCivita"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple implementation of Geometric Algebra.\n\u003c/p\u003e\u003cp\u003eThe Num instance provides the geometric product, and the Fractional\n instance provides the inverse of multivectors.\n\u003c/p\u003e\u003cp\u003eThis module provides a simple Euclidean embedding.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.LinearAlgebra.Multivector",
          "name": "Multivector",
          "package": "hTensor",
          "source": "src/Numeric-LinearAlgebra-Multivector.html",
          "type": "module"
        },
        "index": {
          "description": "simple implementation of Geometric Algebra The Num instance provides the geometric product and the Fractional instance provides the inverse of multivectors This module provides simple Euclidean embedding",
          "hierarchy": "Numeric LinearAlgebra Multivector",
          "module": "Numeric.LinearAlgebra.Multivector",
          "name": "Multivector",
          "package": "hTensor",
          "partial": "Multivector",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Multivector.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.LinearAlgebra.Multivector",
          "name": "Multivector",
          "package": "hTensor",
          "source": "src/Numeric-LinearAlgebra-Multivector.html#Multivector",
          "type": "data"
        },
        "index": {
          "hierarchy": "Numeric LinearAlgebra Multivector",
          "module": "Numeric.LinearAlgebra.Multivector",
          "name": "Multivector",
          "package": "hTensor",
          "partial": "Multivector",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Multivector.html#t:Multivector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe contractive inner product.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Multivector",
          "name": "(-|)",
          "package": "hTensor",
          "signature": "Multivector -\u003e Multivector -\u003e Multivector",
          "source": "src/Numeric-LinearAlgebra-Multivector.html#-%7C",
          "type": "function"
        },
        "index": {
          "description": "The contractive inner product",
          "hierarchy": "Numeric LinearAlgebra Multivector",
          "module": "Numeric.LinearAlgebra.Multivector",
          "name": "(-|) -|",
          "normalized": "Multivector-\u003eMultivector-\u003eMultivector",
          "package": "hTensor",
          "signature": "Multivector-\u003eMultivector-\u003eMultivector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Multivector.html#v:-45--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe exterior (outer) product.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Multivector",
          "name": "(/\\)",
          "package": "hTensor",
          "signature": "Multivector -\u003e Multivector -\u003e Multivector",
          "source": "src/Numeric-LinearAlgebra-Multivector.html#%2F%5C",
          "type": "function"
        },
        "index": {
          "description": "The exterior outer product",
          "hierarchy": "Numeric LinearAlgebra Multivector",
          "module": "Numeric.LinearAlgebra.Multivector",
          "name": "(/\\) /\\",
          "normalized": "Multivector-\u003eMultivector-\u003eMultivector",
          "package": "hTensor",
          "signature": "Multivector-\u003eMultivector-\u003eMultivector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Multivector.html#v:-47--92-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntersection of subspaces.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Multivector",
          "name": "(\\/)",
          "package": "hTensor",
          "signature": "Multivector -\u003e Multivector -\u003e Multivector",
          "source": "src/Numeric-LinearAlgebra-Multivector.html#%5C%2F",
          "type": "function"
        },
        "index": {
          "description": "Intersection of subspaces",
          "hierarchy": "Numeric LinearAlgebra Multivector",
          "module": "Numeric.LinearAlgebra.Multivector",
          "name": "(\\/) \\/",
          "normalized": "Multivector-\u003eMultivector-\u003eMultivector",
          "package": "hTensor",
          "signature": "Multivector-\u003eMultivector-\u003eMultivector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Multivector.html#v:-92--47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a linear transformation, expressed as the image of the element i-th of the basis.\n\u003c/p\u003e\u003cp\u003e(This is a monadic bind!)\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Multivector",
          "name": "apply",
          "package": "hTensor",
          "signature": "(Int -\u003e Multivector) -\u003e Multivector -\u003e Multivector",
          "source": "src/Numeric-LinearAlgebra-Multivector.html#apply",
          "type": "function"
        },
        "index": {
          "description": "Apply linear transformation expressed as the image of the element i-th of the basis This is monadic bind",
          "hierarchy": "Numeric LinearAlgebra Multivector",
          "module": "Numeric.LinearAlgebra.Multivector",
          "name": "apply",
          "normalized": "(Int-\u003eMultivector)-\u003eMultivector-\u003eMultivector",
          "package": "hTensor",
          "signature": "(Int-\u003eMultivector)-\u003eMultivector-\u003eMultivector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Multivector.html#v:apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.LinearAlgebra.Multivector",
          "name": "coords",
          "package": "hTensor",
          "signature": "Multivector -\u003e [(Double, [Int])]",
          "source": "src/Numeric-LinearAlgebra-Multivector.html#coords",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric LinearAlgebra Multivector",
          "module": "Numeric.LinearAlgebra.Multivector",
          "name": "coords",
          "normalized": "Multivector-\u003e[(Double,[Int])]",
          "package": "hTensor",
          "signature": "Multivector-\u003e[(Double,[Int])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Multivector.html#v:coords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe k-th basis element.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Multivector",
          "name": "e",
          "package": "hTensor",
          "signature": "Int -\u003e Multivector",
          "source": "src/Numeric-LinearAlgebra-Multivector.html#e",
          "type": "function"
        },
        "index": {
          "description": "The k-th basis element",
          "hierarchy": "Numeric LinearAlgebra Multivector",
          "module": "Numeric.LinearAlgebra.Multivector",
          "name": "e",
          "normalized": "Int-\u003eMultivector",
          "package": "hTensor",
          "signature": "Int-\u003eMultivector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Multivector.html#v:e"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract a multivector representation from a full antisymmetric tensor.\n\u003c/p\u003e\u003cp\u003e(We do not check that the tensor is actually antisymmetric.)\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Multivector",
          "name": "fromTensor",
          "package": "hTensor",
          "signature": "Tensor Double -\u003e Multivector",
          "source": "src/Numeric-LinearAlgebra-Multivector.html#fromTensor",
          "type": "function"
        },
        "index": {
          "description": "Extract multivector representation from full antisymmetric tensor We do not check that the tensor is actually antisymmetric",
          "hierarchy": "Numeric LinearAlgebra Multivector",
          "module": "Numeric.LinearAlgebra.Multivector",
          "name": "fromTensor",
          "normalized": "Tensor Double-\u003eMultivector",
          "package": "hTensor",
          "partial": "Tensor",
          "signature": "Tensor Double-\u003eMultivector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Multivector.html#v:fromTensor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe full space of the given dimension. This is the leviCivita simbol, and the basis of the pseudoscalar.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Multivector",
          "name": "full",
          "package": "hTensor",
          "signature": "Int -\u003e Multivector",
          "source": "src/Numeric-LinearAlgebra-Multivector.html#full",
          "type": "function"
        },
        "index": {
          "description": "The full space of the given dimension This is the leviCivita simbol and the basis of the pseudoscalar",
          "hierarchy": "Numeric LinearAlgebra Multivector",
          "module": "Numeric.LinearAlgebra.Multivector",
          "name": "full",
          "normalized": "Int-\u003eMultivector",
          "package": "hTensor",
          "signature": "Int-\u003eMultivector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Multivector.html#v:full"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.LinearAlgebra.Multivector",
          "name": "grade",
          "package": "hTensor",
          "signature": "Int -\u003e Multivector -\u003e Multivector",
          "source": "src/Numeric-LinearAlgebra-Multivector.html#grade",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric LinearAlgebra Multivector",
          "module": "Numeric.LinearAlgebra.Multivector",
          "name": "grade",
          "normalized": "Int-\u003eMultivector-\u003eMultivector",
          "package": "hTensor",
          "signature": "Int-\u003eMultivector-\u003eMultivector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Multivector.html#v:grade"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.LinearAlgebra.Multivector",
          "name": "maxDim",
          "package": "hTensor",
          "signature": "Multivector -\u003e Int",
          "source": "src/Numeric-LinearAlgebra-Multivector.html#maxDim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric LinearAlgebra Multivector",
          "module": "Numeric.LinearAlgebra.Multivector",
          "name": "maxDim",
          "normalized": "Multivector-\u003eInt",
          "package": "hTensor",
          "partial": "Dim",
          "signature": "Multivector-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Multivector.html#v:maxDim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.LinearAlgebra.Multivector",
          "name": "maxGrade",
          "package": "hTensor",
          "signature": "Multivector -\u003e Int",
          "source": "src/Numeric-LinearAlgebra-Multivector.html#maxGrade",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric LinearAlgebra Multivector",
          "module": "Numeric.LinearAlgebra.Multivector",
          "name": "maxGrade",
          "normalized": "Multivector-\u003eInt",
          "package": "hTensor",
          "partial": "Grade",
          "signature": "Multivector-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Multivector.html#v:maxGrade"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe reversion operator.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Multivector",
          "name": "rever",
          "package": "hTensor",
          "signature": "Multivector -\u003e Multivector",
          "source": "src/Numeric-LinearAlgebra-Multivector.html#rever",
          "type": "function"
        },
        "index": {
          "description": "The reversion operator",
          "hierarchy": "Numeric LinearAlgebra Multivector",
          "module": "Numeric.LinearAlgebra.Multivector",
          "name": "rever",
          "normalized": "Multivector-\u003eMultivector",
          "package": "hTensor",
          "signature": "Multivector-\u003eMultivector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Multivector.html#v:rever"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe rotor operator, used in a sandwich product.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Multivector",
          "name": "rotor",
          "package": "hTensor",
          "signature": "Int-\u003e Double-\u003e Multivector-\u003e Multivector",
          "type": "function"
        },
        "index": {
          "description": "The rotor operator used in sandwich product",
          "hierarchy": "Numeric LinearAlgebra Multivector",
          "module": "Numeric.LinearAlgebra.Multivector",
          "name": "rotor",
          "normalized": "Int-\u003eDouble-\u003eMultivector-\u003eMultivector",
          "package": "hTensor",
          "signature": "Int-\u003eDouble-\u003eMultivector-\u003eMultivector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Multivector.html#v:rotor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a scalar multivector.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Multivector",
          "name": "scalar",
          "package": "hTensor",
          "signature": "Double -\u003e Multivector",
          "source": "src/Numeric-LinearAlgebra-Multivector.html#scalar",
          "type": "function"
        },
        "index": {
          "description": "Creates scalar multivector",
          "hierarchy": "Numeric LinearAlgebra Multivector",
          "module": "Numeric.LinearAlgebra.Multivector",
          "name": "scalar",
          "normalized": "Double-\u003eMultivector",
          "package": "hTensor",
          "signature": "Double-\u003eMultivector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Multivector.html#v:scalar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a grade 1 multivector of from a list of coordinates.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Multivector",
          "name": "vector",
          "package": "hTensor",
          "signature": "[Double] -\u003e Multivector",
          "source": "src/Numeric-LinearAlgebra-Multivector.html#vector",
          "type": "function"
        },
        "index": {
          "description": "Creates grade multivector of from list of coordinates",
          "hierarchy": "Numeric LinearAlgebra Multivector",
          "module": "Numeric.LinearAlgebra.Multivector",
          "name": "vector",
          "normalized": "[Double]-\u003eMultivector",
          "package": "hTensor",
          "signature": "[Double]-\u003eMultivector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Multivector.html#v:vector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTensor computations. Indices can only be contracted if they are of different \u003ccode\u003e\u003ca\u003eVariant\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.LinearAlgebra.Tensor",
          "name": "Tensor",
          "package": "hTensor",
          "source": "src/Numeric-LinearAlgebra-Tensor.html",
          "type": "module"
        },
        "index": {
          "description": "Tensor computations Indices can only be contracted if they are of different Variant type",
          "hierarchy": "Numeric LinearAlgebra Tensor",
          "module": "Numeric.LinearAlgebra.Tensor",
          "name": "Tensor",
          "package": "hTensor",
          "partial": "Tensor",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Tensor.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.LinearAlgebra.Tensor",
          "name": "Tensor",
          "package": "hTensor",
          "source": "src/Numeric-LinearAlgebra-Tensor.html#Tensor",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric LinearAlgebra Tensor",
          "module": "Numeric.LinearAlgebra.Tensor",
          "name": "Tensor",
          "package": "hTensor",
          "partial": "Tensor",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Tensor.html#t:Tensor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.LinearAlgebra.Tensor",
          "name": "Variant",
          "package": "hTensor",
          "source": "src/Numeric-LinearAlgebra-Tensor.html#Variant",
          "type": "data"
        },
        "index": {
          "hierarchy": "Numeric LinearAlgebra Tensor",
          "module": "Numeric.LinearAlgebra.Tensor",
          "name": "Variant",
          "package": "hTensor",
          "partial": "Variant",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Tensor.html#t:Variant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.LinearAlgebra.Tensor",
          "name": "Co",
          "package": "hTensor",
          "signature": "Co",
          "source": "src/Numeric-LinearAlgebra-Tensor.html#Variant",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric LinearAlgebra Tensor",
          "module": "Numeric.LinearAlgebra.Tensor",
          "name": "Co",
          "package": "hTensor",
          "partial": "Co",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Tensor.html#v:Co"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.LinearAlgebra.Tensor",
          "name": "Contra",
          "package": "hTensor",
          "signature": "Contra",
          "source": "src/Numeric-LinearAlgebra-Tensor.html#Variant",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric LinearAlgebra Tensor",
          "module": "Numeric.LinearAlgebra.Tensor",
          "name": "Contra",
          "package": "hTensor",
          "partial": "Contra",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Tensor.html#v:Contra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake all dimensions contravariant.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Tensor",
          "name": "contrav",
          "package": "hTensor",
          "signature": "NArray i t -\u003e Tensor t",
          "source": "src/Numeric-LinearAlgebra-Tensor.html#contrav",
          "type": "function"
        },
        "index": {
          "description": "Make all dimensions contravariant",
          "hierarchy": "Numeric LinearAlgebra Tensor",
          "module": "Numeric.LinearAlgebra.Tensor",
          "name": "contrav",
          "normalized": "NArray a b-\u003eTensor b",
          "package": "hTensor",
          "signature": "NArray i t-\u003eTensor t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Tensor.html#v:contrav"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake all dimensions covariant.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Tensor",
          "name": "cov",
          "package": "hTensor",
          "signature": "NArray i t -\u003e Tensor t",
          "source": "src/Numeric-LinearAlgebra-Tensor.html#cov",
          "type": "function"
        },
        "index": {
          "description": "Make all dimensions covariant",
          "hierarchy": "Numeric LinearAlgebra Tensor",
          "module": "Numeric.LinearAlgebra.Tensor",
          "name": "cov",
          "normalized": "NArray a b-\u003eTensor b",
          "package": "hTensor",
          "signature": "NArray i t-\u003eTensor t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Tensor.html#v:cov"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a covariant 1st order tensor from a list of coordinates.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Tensor",
          "name": "covector",
          "package": "hTensor",
          "signature": "[Double] -\u003e Tensor Double",
          "source": "src/Numeric-LinearAlgebra-Tensor.html#covector",
          "type": "function"
        },
        "index": {
          "description": "Create covariant st order tensor from list of coordinates",
          "hierarchy": "Numeric LinearAlgebra Tensor",
          "module": "Numeric.LinearAlgebra.Tensor",
          "name": "covector",
          "normalized": "[Double]-\u003eTensor Double",
          "package": "hTensor",
          "signature": "[Double]-\u003eTensor Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Tensor.html#v:covector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove the \u003ccode\u003e\u003ca\u003eVariant\u003c/a\u003e\u003c/code\u003e nature of coordinates.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Tensor",
          "name": "forget",
          "package": "hTensor",
          "signature": "NArray i t -\u003e Array t",
          "source": "src/Numeric-LinearAlgebra-Tensor.html#forget",
          "type": "function"
        },
        "index": {
          "description": "Remove the Variant nature of coordinates",
          "hierarchy": "Numeric LinearAlgebra Tensor",
          "module": "Numeric.LinearAlgebra.Tensor",
          "name": "forget",
          "normalized": "NArray a b-\u003eArray b",
          "package": "hTensor",
          "signature": "NArray i t-\u003eArray t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Tensor.html#v:forget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a tensor from a list of dimensions and a list of coordinates.\n A positive dimension means that the index is assumed to be contravariant (vector-like), and\n a negative dimension means that the index is assumed to be covariant (like a linear function, or covector). Contractions can only be performed between indices of different type.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Tensor",
          "name": "listTensor",
          "package": "hTensor",
          "signature": "[Int]-\u003e [t]-\u003e Tensor t",
          "type": "function"
        },
        "index": {
          "description": "Creates tensor from list of dimensions and list of coordinates positive dimension means that the index is assumed to be contravariant vector-like and negative dimension means that the index is assumed to be covariant like linear function or covector Contractions can only be performed between indices of different type",
          "hierarchy": "Numeric LinearAlgebra Tensor",
          "module": "Numeric.LinearAlgebra.Tensor",
          "name": "listTensor",
          "normalized": "[Int]-\u003e[a]-\u003eTensor a",
          "package": "hTensor",
          "partial": "Tensor",
          "signature": "[Int]-\u003e[t]-\u003eTensor t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Tensor.html#v:listTensor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an \u003ccode\u003e\u003ca\u003eTensor\u003c/a\u003e\u003c/code\u003e from a list of parts with a covariant index (\u003ccode\u003esubindex = \u003ccode\u003e\u003ca\u003enewIndex\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eCo\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Tensor",
          "name": "subindex",
          "package": "hTensor",
          "signature": "Name -\u003e [Tensor t] -\u003e Tensor t",
          "source": "src/Numeric-LinearAlgebra-Tensor.html#subindex",
          "type": "function"
        },
        "index": {
          "description": "Create an Tensor from list of parts with covariant index subindex newIndex Co",
          "hierarchy": "Numeric LinearAlgebra Tensor",
          "module": "Numeric.LinearAlgebra.Tensor",
          "name": "subindex",
          "normalized": "Name-\u003e[Tensor a]-\u003eTensor a",
          "package": "hTensor",
          "signature": "Name-\u003e[Tensor t]-\u003eTensor t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Tensor.html#v:subindex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an \u003ccode\u003e\u003ca\u003eTensor\u003c/a\u003e\u003c/code\u003e from a list of parts with a contravariant index (\u003ccode\u003esuperindex = \u003ccode\u003e\u003ca\u003enewIndex\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eContra\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Tensor",
          "name": "superindex",
          "package": "hTensor",
          "signature": "Name -\u003e [Tensor t] -\u003e Tensor t",
          "source": "src/Numeric-LinearAlgebra-Tensor.html#superindex",
          "type": "function"
        },
        "index": {
          "description": "Create an Tensor from list of parts with contravariant index superindex newIndex Contra",
          "hierarchy": "Numeric LinearAlgebra Tensor",
          "module": "Numeric.LinearAlgebra.Tensor",
          "name": "superindex",
          "normalized": "Name-\u003e[Tensor a]-\u003eTensor a",
          "package": "hTensor",
          "signature": "Name-\u003e[Tensor t]-\u003eTensor t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Tensor.html#v:superindex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the \u003ccode\u003e\u003ca\u003eVariant\u003c/a\u003e\u003c/code\u003e nature of all dimensions to the opposite ones.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Tensor",
          "name": "switch",
          "package": "hTensor",
          "signature": "Tensor t -\u003e Tensor t",
          "source": "src/Numeric-LinearAlgebra-Tensor.html#switch",
          "type": "function"
        },
        "index": {
          "description": "Change the Variant nature of all dimensions to the opposite ones",
          "hierarchy": "Numeric LinearAlgebra Tensor",
          "module": "Numeric.LinearAlgebra.Tensor",
          "name": "switch",
          "normalized": "Tensor a-\u003eTensor a",
          "package": "hTensor",
          "signature": "Tensor t-\u003eTensor t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Tensor.html#v:switch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a 1-contravariant, 1-covariant 2nd order from list of lists of coordinates.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Tensor",
          "name": "transf",
          "package": "hTensor",
          "signature": "[[Double]] -\u003e Tensor Double",
          "source": "src/Numeric-LinearAlgebra-Tensor.html#transf",
          "type": "function"
        },
        "index": {
          "description": "Create contravariant covariant nd order from list of lists of coordinates",
          "hierarchy": "Numeric LinearAlgebra Tensor",
          "module": "Numeric.LinearAlgebra.Tensor",
          "name": "transf",
          "normalized": "[[Double]]-\u003eTensor Double",
          "package": "hTensor",
          "signature": "[[Double]]-\u003eTensor Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Tensor.html#v:transf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a contravariant 1st order tensor from a list of coordinates.\n\u003c/p\u003e",
          "module": "Numeric.LinearAlgebra.Tensor",
          "name": "vector",
          "package": "hTensor",
          "signature": "[Double] -\u003e Tensor Double",
          "source": "src/Numeric-LinearAlgebra-Tensor.html#vector",
          "type": "function"
        },
        "index": {
          "description": "Create contravariant st order tensor from list of coordinates",
          "hierarchy": "Numeric LinearAlgebra Tensor",
          "module": "Numeric.LinearAlgebra.Tensor",
          "name": "vector",
          "normalized": "[Double]-\u003eTensor Double",
          "package": "hTensor",
          "signature": "[Double]-\u003eTensor Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hTensor/docs/Numeric-LinearAlgebra-Tensor.html#v:vector"
      }
    }
  ]
]