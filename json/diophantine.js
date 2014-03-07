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
        "word": "diophantine"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWARNING: The internal workings of solve. These functions use error, and\n should only be called directly if you know the type of the equation ahead of\n time. For example, solveLinear will try to resolve a GeneralEquation into a\n linear one if possible, but if you pass a GeneralEquation of a parabolic\n form, then it will error.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Math.Diophantine.Internal",
          "name": "Internal",
          "package": "diophantine",
          "source": "src/Math-Diophantine-Internal.html",
          "type": "module"
        },
        "index": {
          "description": "WARNING The internal workings of solve These functions use error and should only be called directly if you know the type of the equation ahead of time For example solveLinear will try to resolve GeneralEquation into linear one if possible but if you pass GeneralEquation of parabolic form then it will error",
          "hierarchy": "Math Diophantine Internal",
          "module": "Math.Diophantine.Internal",
          "name": "Internal",
          "package": "diophantine",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/diophantine/docs/Math-Diophantine-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA way to setup an equation in the form of:\n\u003c/p\u003e\u003cpre\u003e ax^2 + bxy + cy^2 + dx + ey + f = 0\n\u003c/pre\u003e",
          "module": "Math.Diophantine.Internal",
          "name": "Equation",
          "package": "diophantine",
          "source": "src/Math-Diophantine-Internal.html#Equation",
          "type": "data"
        },
        "index": {
          "description": "way to setup an equation in the form of ax bxy cy dx ey",
          "hierarchy": "Math Diophantine Internal",
          "module": "Math.Diophantine.Internal",
          "name": "Equation",
          "package": "diophantine",
          "partial": "Equation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diophantine/docs/Math-Diophantine-Internal.html#t:Equation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe results of attempting to solve an \u003ccode\u003e\u003ca\u003eEquation\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Diophantine.Internal",
          "name": "Solution",
          "package": "diophantine",
          "source": "src/Math-Diophantine-Internal.html#Solution",
          "type": "data"
        },
        "index": {
          "description": "The results of attempting to solve an Equation",
          "hierarchy": "Math Diophantine Internal",
          "module": "Math.Diophantine.Internal",
          "name": "Solution",
          "package": "diophantine",
          "partial": "Solution",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diophantine/docs/Math-Diophantine-Internal.html#t:Solution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e, used to shorten type signatures.\n\u003c/p\u003e",
          "module": "Math.Diophantine.Internal",
          "name": "Z",
          "package": "diophantine",
          "source": "src/Math-Diophantine-Internal.html#Z",
          "type": "type"
        },
        "index": {
          "description": "An alias for Integer used to shorten type signatures",
          "hierarchy": "Math Diophantine Internal",
          "module": "Math.Diophantine.Internal",
          "name": "Z",
          "package": "diophantine",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/diophantine/docs/Math-Diophantine-Internal.html#t:Z"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEliptical equations.\n\u003c/p\u003e",
          "module": "Math.Diophantine.Internal",
          "name": "ElipticalEquation",
          "package": "diophantine",
          "signature": "ElipticalEquation Z Z Z Z Z Z",
          "source": "src/Math-Diophantine-Internal.html#Equation",
          "type": "function"
        },
        "index": {
          "description": "Eliptical equations",
          "hierarchy": "Math Diophantine Internal",
          "module": "Math.Diophantine.Internal",
          "name": "ElipticalEquation",
          "package": "diophantine",
          "partial": "Eliptical Equation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diophantine/docs/Math-Diophantine-Internal.html#v:ElipticalEquation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA general quadratic\n diophantine equation.\n\u003c/p\u003e",
          "module": "[\"Math.Diophantine.Internal\",\"Math.Diophantine\"]",
          "name": "GeneralEquation",
          "package": "diophantine",
          "signature": "GeneralEquation Z Z Z Z Z Z",
          "source": "src/Math-Diophantine-Internal.html#Equation",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diophantine/docs/Math-Diophantine-Internal.html#v:GeneralEquation\",\"http://hackage.haskell.org/package/diophantine/docs/Math-Diophantine.html#v:GeneralEquation\"]"
        },
        "index": {
          "description": "general quadratic diophantine equation",
          "hierarchy": "Math Diophantine Internal",
          "module": "Math.Diophantine.Internal",
          "name": "GeneralEquation",
          "package": "diophantine",
          "partial": "General Equation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diophantine/docs/Math-Diophantine-Internal.html#v:GeneralEquation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyperbolic equations.\n\u003c/p\u003e",
          "module": "Math.Diophantine.Internal",
          "name": "HyperbolicEquation",
          "package": "diophantine",
          "signature": "HyperbolicEquation Z Z Z Z Z Z",
          "source": "src/Math-Diophantine-Internal.html#Equation",
          "type": "function"
        },
        "index": {
          "description": "Hyperbolic equations",
          "hierarchy": "Math Diophantine Internal",
          "module": "Math.Diophantine.Internal",
          "name": "HyperbolicEquation",
          "package": "diophantine",
          "partial": "Hyperbolic Equation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diophantine/docs/Math-Diophantine-Internal.html#v:HyperbolicEquation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edx + ey + f = 0\n\u003c/p\u003e",
          "module": "Math.Diophantine.Internal",
          "name": "LinearEquation",
          "package": "diophantine",
          "signature": "LinearEquation Z Z Z",
          "source": "src/Math-Diophantine-Internal.html#Equation",
          "type": "function"
        },
        "index": {
          "description": "dx ey",
          "hierarchy": "Math Diophantine Internal",
          "module": "Math.Diophantine.Internal",
          "name": "LinearEquation",
          "package": "diophantine",
          "partial": "Linear Equation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diophantine/docs/Math-Diophantine-Internal.html#v:LinearEquation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor all (x,y) in ZxZ\n\u003c/p\u003e",
          "module": "[\"Math.Diophantine.Internal\",\"Math.Diophantine\"]",
          "name": "NoSolutions",
          "package": "diophantine",
          "signature": "NoSolutions",
          "source": "src/Math-Diophantine-Internal.html#Solution",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diophantine/docs/Math-Diophantine-Internal.html#v:NoSolutions\",\"http://hackage.haskell.org/package/diophantine/docs/Math-Diophantine.html#v:NoSolutions\"]"
        },
        "index": {
          "description": "For all in ZxZ",
          "hierarchy": "Math Diophantine Internal",
          "module": "Math.Diophantine.Internal",
          "name": "NoSolutions",
          "package": "diophantine",
          "partial": "No Solutions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diophantine/docs/Math-Diophantine-Internal.html#v:NoSolutions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParabolic equations.\n\u003c/p\u003e",
          "module": "Math.Diophantine.Internal",
          "name": "ParabolicEquation",
          "package": "diophantine",
          "signature": "ParabolicEquation Z Z Z Z Z Z",
          "source": "src/Math-Diophantine-Internal.html#Equation",
          "type": "function"
        },
        "index": {
          "description": "Parabolic equations",
          "hierarchy": "Math Diophantine Internal",
          "module": "Math.Diophantine.Internal",
          "name": "ParabolicEquation",
          "package": "diophantine",
          "partial": "Parabolic Equation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diophantine/docs/Math-Diophantine-Internal.html#v:ParabolicEquation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebxy + dx +ey + f = 0\n\u003c/p\u003e",
          "module": "Math.Diophantine.Internal",
          "name": "SimpleHyperbolicEquation",
          "package": "diophantine",
          "signature": "SimpleHyperbolicEquation Z Z Z Z",
          "source": "src/Math-Diophantine-Internal.html#Equation",
          "type": "function"
        },
        "index": {
          "description": "bxy dx ey",
          "hierarchy": "Math Diophantine Internal",
          "module": "Math.Diophantine.Internal",
          "name": "SimpleHyperbolicEquation",
          "package": "diophantine",
          "partial": "Simple Hyperbolic Equation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diophantine/docs/Math-Diophantine-Internal.html#v:SimpleHyperbolicEquation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe set of pairs (x,y) that satisfy the\n equation. These are not in any particular\n order, and may contain duplicates.\n\u003c/p\u003e",
          "module": "[\"Math.Diophantine.Internal\",\"Math.Diophantine\"]",
          "name": "SolutionSet",
          "package": "diophantine",
          "signature": "SolutionSet [(Z, Z)]",
          "source": "src/Math-Diophantine-Internal.html#Solution",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diophantine/docs/Math-Diophantine-Internal.html#v:SolutionSet\",\"http://hackage.haskell.org/package/diophantine/docs/Math-Diophantine.html#v:SolutionSet\"]"
        },
        "index": {
          "description": "The set of pairs that satisfy the equation These are not in any particular order and may contain duplicates",
          "hierarchy": "Math Diophantine Internal",
          "module": "Math.Diophantine.Internal",
          "name": "SolutionSet",
          "normalized": "SolutionSet[(Z,Z)]",
          "package": "diophantine",
          "partial": "Solution Set",
          "signature": "SolutionSet[(Z,Z)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diophantine/docs/Math-Diophantine-Internal.html#v:SolutionSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll Integer pairs satisfy the equation.\n\u003c/p\u003e",
          "module": "[\"Math.Diophantine.Internal\",\"Math.Diophantine\"]",
          "name": "ZxZ",
          "package": "diophantine",
          "signature": "ZxZ",
          "source": "src/Math-Diophantine-Internal.html#Solution",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diophantine/docs/Math-Diophantine-Internal.html#v:ZxZ\",\"http://hackage.haskell.org/package/diophantine/docs/Math-Diophantine.html#v:ZxZ\"]"
        },
        "index": {
          "description": "All Integer pairs satisfy the equation",
          "hierarchy": "Math Diophantine Internal",
          "module": "Math.Diophantine.Internal",
          "name": "ZxZ",
          "package": "diophantine",
          "partial": "Zx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diophantine/docs/Math-Diophantine-Internal.html#v:ZxZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerges two \u003ccode\u003e\u003ca\u003eSolution\u003c/a\u003e\u003c/code\u003es into one.\n\u003c/p\u003e",
          "module": "[\"Math.Diophantine.Internal\",\"Math.Diophantine\"]",
          "name": "mergeSolutions",
          "package": "diophantine",
          "signature": "Solution -\u003e Solution -\u003e Solution",
          "source": "src/Math-Diophantine-Internal.html#mergeSolutions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diophantine/docs/Math-Diophantine-Internal.html#v:mergeSolutions\",\"http://hackage.haskell.org/package/diophantine/docs/Math-Diophantine.html#v:mergeSolutions\"]"
        },
        "index": {
          "description": "Merges two Solution into one",
          "hierarchy": "Math Diophantine Internal",
          "module": "Math.Diophantine.Internal",
          "name": "mergeSolutions",
          "normalized": "Solution-\u003eSolution-\u003eSolution",
          "package": "diophantine",
          "partial": "Solutions",
          "signature": "Solution-\u003eSolution-\u003eSolution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diophantine/docs/Math-Diophantine-Internal.html#v:mergeSolutions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSolves for \u003ccode\u003e\u003ca\u003eEquation\u003c/a\u003e\u003c/code\u003es in the form of ax^2 + bxy + cy^2 + dx + ey + f = 0\n when b^2 - 4ac \u003c 0\n\u003c/p\u003e",
          "module": "Math.Diophantine.Internal",
          "name": "solveEliptical",
          "package": "diophantine",
          "signature": "Equation -\u003e Solution",
          "source": "src/Math-Diophantine-Internal.html#solveEliptical",
          "type": "function"
        },
        "index": {
          "description": "Solves for Equation in the form of ax bxy cy dx ey when ac",
          "hierarchy": "Math Diophantine Internal",
          "module": "Math.Diophantine.Internal",
          "name": "solveEliptical",
          "normalized": "Equation-\u003eSolution",
          "package": "diophantine",
          "partial": "Eliptical",
          "signature": "Equation-\u003eSolution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diophantine/docs/Math-Diophantine-Internal.html#v:solveEliptical"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSolves for \u003ccode\u003e\u003ca\u003eEquation\u003c/a\u003e\u003c/code\u003es in the form of dx + ey + f = 0\n\u003c/p\u003e",
          "module": "Math.Diophantine.Internal",
          "name": "solveLinear",
          "package": "diophantine",
          "signature": "Equation -\u003e Solution",
          "source": "src/Math-Diophantine-Internal.html#solveLinear",
          "type": "function"
        },
        "index": {
          "description": "Solves for Equation in the form of dx ey",
          "hierarchy": "Math Diophantine Internal",
          "module": "Math.Diophantine.Internal",
          "name": "solveLinear",
          "normalized": "Equation-\u003eSolution",
          "package": "diophantine",
          "partial": "Linear",
          "signature": "Equation-\u003eSolution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diophantine/docs/Math-Diophantine-Internal.html#v:solveLinear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSolves for \u003ccode\u003e\u003ca\u003eEquation\u003c/a\u003e\u003c/code\u003es in the form of ax^2 + bxy + cy^2  + dx + ey + f = 0\n when b^2 - 4ac = 0\n\u003c/p\u003e",
          "module": "Math.Diophantine.Internal",
          "name": "solveParabolic",
          "package": "diophantine",
          "signature": "Equation -\u003e Solution",
          "source": "src/Math-Diophantine-Internal.html#solveParabolic",
          "type": "function"
        },
        "index": {
          "description": "Solves for Equation in the form of ax bxy cy dx ey when ac",
          "hierarchy": "Math Diophantine Internal",
          "module": "Math.Diophantine.Internal",
          "name": "solveParabolic",
          "normalized": "Equation-\u003eSolution",
          "package": "diophantine",
          "partial": "Parabolic",
          "signature": "Equation-\u003eSolution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diophantine/docs/Math-Diophantine-Internal.html#v:solveParabolic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSolves for \u003ccode\u003e\u003ca\u003eEquation\u003c/a\u003e\u003c/code\u003es in the form of bxy + dx + ey + f = 0\n\u003c/p\u003e",
          "module": "Math.Diophantine.Internal",
          "name": "solveSimpleHyperbolic",
          "package": "diophantine",
          "signature": "Equation -\u003e Solution",
          "source": "src/Math-Diophantine-Internal.html#solveSimpleHyperbolic",
          "type": "function"
        },
        "index": {
          "description": "Solves for Equation in the form of bxy dx ey",
          "hierarchy": "Math Diophantine Internal",
          "module": "Math.Diophantine.Internal",
          "name": "solveSimpleHyperbolic",
          "normalized": "Equation-\u003eSolution",
          "package": "diophantine",
          "partial": "Simple Hyperbolic",
          "signature": "Equation-\u003eSolution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diophantine/docs/Math-Diophantine-Internal.html#v:solveSimpleHyperbolic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetirmines what kind of equation form a \u003ccode\u003e\u003ca\u003eGeneralEquation\u003c/a\u003e\u003c/code\u003e fits.\n If you pass a non \u003ccode\u003e\u003ca\u003eGeneralEquation\u003c/a\u003e\u003c/code\u003e to this function, it is the same as id.\n\u003c/p\u003e",
          "module": "[\"Math.Diophantine.Internal\",\"Math.Diophantine\"]",
          "name": "specializeEquation",
          "package": "diophantine",
          "signature": "Equation -\u003e Equation",
          "source": "src/Math-Diophantine-Internal.html#specializeEquation",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/diophantine/docs/Math-Diophantine-Internal.html#v:specializeEquation\",\"http://hackage.haskell.org/package/diophantine/docs/Math-Diophantine.html#v:specializeEquation\"]"
        },
        "index": {
          "description": "Detirmines what kind of equation form GeneralEquation fits If you pass non GeneralEquation to this function it is the same as id",
          "hierarchy": "Math Diophantine Internal",
          "module": "Math.Diophantine.Internal",
          "name": "specializeEquation",
          "normalized": "Equation-\u003eEquation",
          "package": "diophantine",
          "partial": "Equation",
          "signature": "Equation-\u003eEquation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diophantine/docs/Math-Diophantine-Internal.html#v:specializeEquation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module for solving quadratic diophantine equations.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Math.Diophantine",
          "name": "Diophantine",
          "package": "diophantine",
          "source": "src/Math-Diophantine.html",
          "type": "module"
        },
        "index": {
          "description": "module for solving quadratic diophantine equations",
          "hierarchy": "Math Diophantine",
          "module": "Math.Diophantine",
          "name": "Diophantine",
          "package": "diophantine",
          "partial": "Diophantine",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/diophantine/docs/Math-Diophantine.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA way to setup an equation in the form of:\n\u003c/p\u003e\u003cpre\u003e ax^2 + bxy + cy^2 + dx + ey + f = 0\n\u003c/pre\u003e",
          "module": "Math.Diophantine",
          "name": "Equation",
          "package": "diophantine",
          "source": "src/Math-Diophantine-Internal.html#Equation",
          "type": "data"
        },
        "index": {
          "description": "way to setup an equation in the form of ax bxy cy dx ey",
          "hierarchy": "Math Diophantine",
          "module": "Math.Diophantine",
          "name": "Equation",
          "package": "diophantine",
          "partial": "Equation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diophantine/docs/Math-Diophantine.html#t:Equation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe results of attempting to solve an \u003ccode\u003e\u003ca\u003eEquation\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Diophantine",
          "name": "Solution",
          "package": "diophantine",
          "source": "src/Math-Diophantine-Internal.html#Solution",
          "type": "data"
        },
        "index": {
          "description": "The results of attempting to solve an Equation",
          "hierarchy": "Math Diophantine",
          "module": "Math.Diophantine",
          "name": "Solution",
          "package": "diophantine",
          "partial": "Solution",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diophantine/docs/Math-Diophantine.html#t:Solution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA way to report an error in solving.\n\u003c/p\u003e",
          "module": "Math.Diophantine",
          "name": "SolveError",
          "package": "diophantine",
          "source": "src/Math-Diophantine.html#SolveError",
          "type": "data"
        },
        "index": {
          "description": "way to report an error in solving",
          "hierarchy": "Math Diophantine",
          "module": "Math.Diophantine",
          "name": "SolveError",
          "package": "diophantine",
          "partial": "Solve Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diophantine/docs/Math-Diophantine.html#t:SolveError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e, used to shorten type signatures.\n\u003c/p\u003e",
          "module": "Math.Diophantine",
          "name": "Z",
          "package": "diophantine",
          "source": "src/Math-Diophantine-Internal.html#Z",
          "type": "type"
        },
        "index": {
          "description": "An alias for Integer used to shorten type signatures",
          "hierarchy": "Math Diophantine",
          "module": "Math.Diophantine",
          "name": "Z",
          "package": "diophantine",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/diophantine/docs/Math-Diophantine.html#t:Z"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe error when you try to solve a\n hyperbolic equation.\n\u003c/p\u003e",
          "module": "Math.Diophantine",
          "name": "HyperbolicError",
          "package": "diophantine",
          "signature": "HyperbolicError",
          "source": "src/Math-Diophantine.html#SolveError",
          "type": "function"
        },
        "index": {
          "description": "The error when you try to solve hyperbolic equation",
          "hierarchy": "Math Diophantine",
          "module": "Math.Diophantine",
          "name": "HyperbolicError",
          "package": "diophantine",
          "partial": "Hyperbolic Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diophantine/docs/Math-Diophantine.html#v:HyperbolicError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a read error when reading\n the equation from a string.\n\u003c/p\u003e",
          "module": "Math.Diophantine",
          "name": "SolveError",
          "package": "diophantine",
          "signature": "SolveError ReadError",
          "source": "src/Math-Diophantine.html#SolveError",
          "type": "function"
        },
        "index": {
          "description": "Represents read error when reading the equation from string",
          "hierarchy": "Math Diophantine",
          "module": "Math.Diophantine",
          "name": "SolveError",
          "package": "diophantine",
          "partial": "Solve Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diophantine/docs/Math-Diophantine.html#v:SolveError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads an \u003ccode\u003e\u003ca\u003eEquation\u003c/a\u003e\u003c/code\u003e as a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e. Equations must be set equal to 0.\n Order of the terms does not matter expect for constant term, and \u003ca\u003e = 0\u003c/a\u003e,\n which should come last if given. Returns 'Either ReadError Equation'\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ereadEquation \"-5y + 2x - 3xy + 2\"\n\u003c/code\u003e\u003c/strong\u003e-3xy + 2x + -5y + 2 = 0\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ereadEquation  \"2xy + x + 1 = 0\"\n\u003c/code\u003e\u003c/strong\u003e2xy + x + 1 = 0\n\u003c/pre\u003e",
          "module": "Math.Diophantine",
          "name": "readEquation",
          "package": "diophantine",
          "signature": "String -\u003e Either ReadError Equation",
          "source": "src/Math-Diophantine-Parser.html#readEquation",
          "type": "function"
        },
        "index": {
          "description": "Reads an Equation as String Equations must be set equal to Order of the terms does not matter expect for constant term and which should come last if given Returns Either ReadError Equation readEquation xy xy readEquation xy xy",
          "hierarchy": "Math Diophantine",
          "module": "Math.Diophantine",
          "name": "readEquation",
          "normalized": "String-\u003eEither ReadError Equation",
          "package": "diophantine",
          "partial": "Equation",
          "signature": "String-\u003eEither ReadError Equation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diophantine/docs/Math-Diophantine.html#v:readEquation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermines what type of equation to solve for, and then calls the\n appropriate solve function. Example:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esolve (GeneralEquation 1 2 3 3 5 0)\n\u003c/code\u003e\u003c/strong\u003e[(-3,0),(-2,-1),(0,0),(1,-1)]\n\u003c/pre\u003e",
          "module": "Math.Diophantine",
          "name": "solve",
          "package": "diophantine",
          "signature": "Equation -\u003e Either SolveError Solution",
          "source": "src/Math-Diophantine.html#solve",
          "type": "function"
        },
        "index": {
          "description": "Determines what type of equation to solve for and then calls the appropriate solve function Example solve GeneralEquation",
          "hierarchy": "Math Diophantine",
          "module": "Math.Diophantine",
          "name": "solve",
          "normalized": "Equation-\u003eEither SolveError Solution",
          "package": "diophantine",
          "signature": "Equation-\u003eEither SolveError Solution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diophantine/docs/Math-Diophantine.html#v:solve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the list of solution pairs from a \u003ccode\u003e\u003ca\u003eSolution\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Diophantine",
          "name": "toMaybeList",
          "package": "diophantine",
          "signature": "Solution -\u003e Maybe [(Z, Z)]",
          "source": "src/Math-Diophantine.html#toMaybeList",
          "type": "function"
        },
        "index": {
          "description": "Extracts the list of solution pairs from Solution",
          "hierarchy": "Math Diophantine",
          "module": "Math.Diophantine",
          "name": "toMaybeList",
          "normalized": "Solution-\u003eMaybe[(Z,Z)]",
          "package": "diophantine",
          "partial": "Maybe List",
          "signature": "Solution-\u003eMaybe[(Z,Z)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diophantine/docs/Math-Diophantine.html#v:toMaybeList"
      }
    }
  ]
]