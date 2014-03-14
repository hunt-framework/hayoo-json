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
        "word": "nonlinear-optimization"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements the algorithms described by Hager and\n Zhang [1].  We use bindings to \u003ccode\u003eCG_DESCENT\u003c/code\u003e library by the same\n authors, version 3.0 from 18/05/2008 [2].  The library code is\n also licensed under the terms of the GPL.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e [1] Hager, W. W. and Zhang, H.  \u003cem\u003eA new conjugate gradient\u003c/em\u003e\n   \u003cem\u003emethod with guaranteed descent and an efficient line\u003c/em\u003e\n   \u003cem\u003esearch.\u003c/em\u003e Society of Industrial and Applied Mathematics\n   Journal on Optimization, 16 (2005), 170-192.\n\u003c/li\u003e\u003cli\u003e [2] \u003ca\u003ehttp://www.math.ufl.edu/~hager/papers/CG/CG_DESCENT-C-3.0.tar.gz\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "HagerZhang05",
          "package": "nonlinear-optimization",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements the algorithms described by Hager and Zhang We use bindings to CG DESCENT library by the same authors version from The library code is also licensed under the terms of the GPL Hager and Zhang new conjugate gradient method with guaranteed descent and an efficient line search Society of Industrial and Applied Mathematics Journal on Optimization http www.math.ufl.edu hager papers CG CG DESCENT-C-3.0.tar.gz",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "HagerZhang05",
          "package": "nonlinear-optimization",
          "partial": "Hager Zhang",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction calculating both the value of the objective\n function \u003ccode\u003ef\u003c/code\u003e and its gradient at a point \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "Combined",
          "package": "nonlinear-optimization",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#Combined",
          "type": "data"
        },
        "index": {
          "description": "Function calculating both the value of the objective function and its gradient at point",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "Combined",
          "package": "nonlinear-optimization",
          "partial": "Combined",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#t:Combined"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow to calculate the estimated error in the function value.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "EstimateError",
          "package": "nonlinear-optimization",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#EstimateError",
          "type": "data"
        },
        "index": {
          "description": "How to calculate the estimated error in the function value",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "EstimateError",
          "package": "nonlinear-optimization",
          "partial": "Estimate Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#t:EstimateError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction calculating the value of the objective function \u003ccode\u003ef\u003c/code\u003e\n at a point \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "Function",
          "package": "nonlinear-optimization",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#Function",
          "type": "data"
        },
        "index": {
          "description": "Function calculating the value of the objective function at point",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "Function",
          "package": "nonlinear-optimization",
          "partial": "Function",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#t:Function"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction calculating the value of the gradient of the\n objective function \u003ccode\u003ef\u003c/code\u003e at a point \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMGradient\u003c/a\u003e\u003c/code\u003e constructor uses a function receiving as\n parameters the point \u003ccode\u003ex\u003c/code\u003e being evaluated (should not be\n modified) and the vector where the gradient should be written.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "Gradient",
          "package": "nonlinear-optimization",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#Gradient",
          "type": "data"
        },
        "index": {
          "description": "Function calculating the value of the gradient of the objective function at point The MGradient constructor uses function receiving as parameters the point being evaluated should not be modified and the vector where the gradient should be written",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "Gradient",
          "package": "nonlinear-optimization",
          "partial": "Gradient",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#t:Gradient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMutable vector representing where the gradient should be\n \u003cem\u003ewritten\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "GradientMVector",
          "package": "nonlinear-optimization",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#GradientMVector",
          "type": "type"
        },
        "index": {
          "description": "Mutable vector representing where the gradient should be written",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "GradientMVector",
          "package": "nonlinear-optimization",
          "partial": "Gradient MVector",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#t:GradientMVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLine search methods that may be used.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "LineSearch",
          "package": "nonlinear-optimization",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#LineSearch",
          "type": "data"
        },
        "index": {
          "description": "Line search methods that may be used",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "LineSearch",
          "package": "nonlinear-optimization",
          "partial": "Line Search",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#t:LineSearch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePhantom type for functions using mutable data.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "Mutable",
          "package": "nonlinear-optimization",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#Mutable",
          "type": "data"
        },
        "index": {
          "description": "Phantom type for functions using mutable data",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "Mutable",
          "package": "nonlinear-optimization",
          "partial": "Mutable",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#t:Mutable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParameters given to the optimizer.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "Parameters",
          "package": "nonlinear-optimization",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#Parameters",
          "type": "data"
        },
        "index": {
          "description": "Parameters given to the optimizer",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "Parameters",
          "package": "nonlinear-optimization",
          "partial": "Parameters",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#t:Parameters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMutable vector representing the point where the\n function/gradient is begin evaluated.  This vector \u003cem\u003eshould\u003c/em\u003e\n \u003cem\u003enot\u003c/em\u003e be modified.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "PointMVector",
          "package": "nonlinear-optimization",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#PointMVector",
          "type": "type"
        },
        "index": {
          "description": "Mutable vector representing the point where the function gradient is begin evaluated This vector should not be modified",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "PointMVector",
          "package": "nonlinear-optimization",
          "partial": "Point MVector",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#t:PointMVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "Result",
          "package": "nonlinear-optimization",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#Result",
          "type": "data"
        },
        "index": {
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "Result",
          "package": "nonlinear-optimization",
          "partial": "Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePhantom type for simple pure functions.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "Simple",
          "package": "nonlinear-optimization",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#Simple",
          "type": "data"
        },
        "index": {
          "description": "Phantom type for simple pure functions",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "Simple",
          "package": "nonlinear-optimization",
          "partial": "Simple",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#t:Simple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStatistics given after the process finishes.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "Statistics",
          "package": "nonlinear-optimization",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#Statistics",
          "type": "data"
        },
        "index": {
          "description": "Statistics given after the process finishes",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "Statistics",
          "package": "nonlinear-optimization",
          "partial": "Statistics",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#t:Statistics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStop rules used to decided when to stop iterating.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "StopRules",
          "package": "nonlinear-optimization",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#StopRules",
          "type": "data"
        },
        "index": {
          "description": "Stop rules used to decided when to stop iterating",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "StopRules",
          "package": "nonlinear-optimization",
          "partial": "Stop Rules",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#t:StopRules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTechnical parameters which you probably should not touch.\n You should read the papers of \u003ccode\u003eCG_DESCENT\u003c/code\u003e to understand how\n you can tune these parameters.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "TechParameters",
          "package": "nonlinear-optimization",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#TechParameters",
          "type": "data"
        },
        "index": {
          "description": "Technical parameters which you probably should not touch You should read the papers of CG DESCENT to understand how you can tune these parameters",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "TechParameters",
          "package": "nonlinear-optimization",
          "partial": "Tech Parameters",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#t:TechParameters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow verbose we should be.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "Verbose",
          "package": "nonlinear-optimization",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#Verbose",
          "type": "data"
        },
        "index": {
          "description": "How verbose we should be",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "Verbose",
          "package": "nonlinear-optimization",
          "partial": "Verbose",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#t:Verbose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eAbsoluteEpsilon eps\u003c/code\u003e estimates the error as \u003ccode\u003eeps\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "AbsoluteEpsilon",
          "package": "nonlinear-optimization",
          "signature": "AbsoluteEpsilon Double",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#EstimateError",
          "type": "function"
        },
        "index": {
          "description": "AbsoluteEpsilon eps estimates the error as eps",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "AbsoluteEpsilon",
          "package": "nonlinear-optimization",
          "partial": "Absolute Epsilon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:AbsoluteEpsilon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eAlternativeStopRule\u003c/code\u003e stops when\n\u003c/p\u003e\u003cpre\u003e |g_k|_infty \u003c= grad_tol * (1 + |f_k|)\n\u003c/pre\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "AlternativeStopRule",
          "package": "nonlinear-optimization",
          "signature": "AlternativeStopRule",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#StopRules",
          "type": "function"
        },
        "index": {
          "description": "AlternativeStopRule stops when infty grad tol",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "AlternativeStopRule",
          "package": "nonlinear-optimization",
          "partial": "Alternative Stop Rule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:AlternativeStopRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse approximate Wolfe line search.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "ApproximateWolfe",
          "package": "nonlinear-optimization",
          "signature": "ApproximateWolfe",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#LineSearch",
          "type": "function"
        },
        "index": {
          "description": "Use approximate Wolfe line search",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "ApproximateWolfe",
          "package": "nonlinear-optimization",
          "partial": "Approximate Wolfe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:ApproximateWolfe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse ordinary Wolfe line search, switch to approximate\n Wolfe when\n\u003c/p\u003e\u003cpre\u003e |f_{k+1} - f_k| \u003c AWolfeFac * C_k\n\u003c/pre\u003e\u003cp\u003ewhere \u003ccode\u003eC_k\u003c/code\u003e is the average size of cost and\n \u003ccode\u003eAWolfeFac\u003c/code\u003e is the parameter to this constructor.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "AutoSwitch",
          "package": "nonlinear-optimization",
          "signature": "AutoSwitch Double",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#LineSearch",
          "type": "function"
        },
        "index": {
          "description": "Use ordinary Wolfe line search switch to approximate Wolfe when AWolfeFac where is the average size of cost and AWolfeFac is the parameter to this constructor",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "AutoSwitch",
          "package": "nonlinear-optimization",
          "partial": "Auto Switch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:AutoSwitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDebug tolerance was on and the test failed (see \u003ccode\u003e\u003ca\u003edebugTol\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "DebugTol",
          "package": "nonlinear-optimization",
          "signature": "DebugTol",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#Result",
          "type": "function"
        },
        "index": {
          "description": "Debug tolerance was on and the test failed see debugTol",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "DebugTol",
          "package": "nonlinear-optimization",
          "partial": "Debug Tol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:DebugTol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eDefaultStopRule stop_fac\u003c/code\u003e stops when\n\u003c/p\u003e\u003cpre\u003e |g_k|_infty \u003c= max(grad_tol, |g_0|_infty * stop_fac)\n\u003c/pre\u003e\u003cp\u003ewhere \u003ccode\u003e|g_i|_infty\u003c/code\u003e is the maximum absolute component of\n the gradient at the \u003ccode\u003ei\u003c/code\u003e-th step.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "DefaultStopRule",
          "package": "nonlinear-optimization",
          "signature": "DefaultStopRule Double",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#StopRules",
          "type": "function"
        },
        "index": {
          "description": "DefaultStopRule stop fac stops when infty max grad tol infty stop fac where infty is the maximum absolute component of the gradient at the th step",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "DefaultStopRule",
          "package": "nonlinear-optimization",
          "partial": "Default Stop Rule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:DefaultStopRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange in function value was less than \u003ccode\u003efuncEpsilon *\n |f|\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "FunctionChange",
          "package": "nonlinear-optimization",
          "signature": "FunctionChange",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#Result",
          "type": "function"
        },
        "index": {
          "description": "Change in function value was less than funcEpsilon",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "FunctionChange",
          "package": "nonlinear-optimization",
          "partial": "Function Change",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:FunctionChange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction value became \u003ccode\u003eNaN\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "FunctionValueNaN",
          "package": "nonlinear-optimization",
          "signature": "FunctionValueNaN",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#Result",
          "type": "function"
        },
        "index": {
          "description": "Function value became NaN",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "FunctionValueNaN",
          "package": "nonlinear-optimization",
          "partial": "Function Value Na",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:FunctionValueNaN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLine search fails during bisection.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "LineSearchFailsBisection",
          "package": "nonlinear-optimization",
          "signature": "LineSearchFailsBisection",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#Result",
          "type": "function"
        },
        "index": {
          "description": "Line search fails during bisection",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "LineSearchFailsBisection",
          "package": "nonlinear-optimization",
          "partial": "Line Search Fails Bisection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:LineSearchFailsBisection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLine search fails in initial interval.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "LineSearchFailsInitial",
          "package": "nonlinear-optimization",
          "signature": "LineSearchFailsInitial",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#Result",
          "type": "function"
        },
        "index": {
          "description": "Line search fails in initial interval",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "LineSearchFailsInitial",
          "package": "nonlinear-optimization",
          "partial": "Line Search Fails Initial",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:LineSearchFailsInitial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLine search fails during interval update.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "LineSearchFailsUpdate",
          "package": "nonlinear-optimization",
          "signature": "LineSearchFailsUpdate",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#Result",
          "type": "function"
        },
        "index": {
          "description": "Line search fails during interval update",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "LineSearchFailsUpdate",
          "package": "nonlinear-optimization",
          "partial": "Line Search Fails Update",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:LineSearchFailsUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "MCombined",
          "package": "nonlinear-optimization",
          "signature": "PointMVector m -\u003e GradientMVector m -\u003e m Double) -\u003e Combined Mutable",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#Combined",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "MCombined",
          "normalized": "PointMVector a-\u003eGradientMVector a-\u003ea Double)-\u003eCombined Mutable",
          "package": "nonlinear-optimization",
          "partial": "MCombined",
          "signature": "PointMVector m-\u003eGradientMVector m-\u003em Double)-\u003eCombined Mutable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:MCombined"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "MFunction",
          "package": "nonlinear-optimization",
          "signature": "PointMVector m -\u003e m Double) -\u003e Function Mutable",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#Function",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "MFunction",
          "normalized": "PointMVector a-\u003ea Double)-\u003eFunction Mutable",
          "package": "nonlinear-optimization",
          "partial": "MFunction",
          "signature": "PointMVector m-\u003em Double)-\u003eFunction Mutable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:MFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "MGradient",
          "package": "nonlinear-optimization",
          "signature": "PointMVector m -\u003e GradientMVector m -\u003e m ()) -\u003e Gradient Mutable",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#Gradient",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "MGradient",
          "normalized": "PointMVector a-\u003eGradientMVector a-\u003ea())-\u003eGradient Mutable",
          "package": "nonlinear-optimization",
          "partial": "MGradient",
          "signature": "PointMVector m-\u003eGradientMVector m-\u003em())-\u003eGradient Mutable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:MGradient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of secant iterations exceed nsecant.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "MaxSecantIter",
          "package": "nonlinear-optimization",
          "signature": "MaxSecantIter",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#Result",
          "type": "function"
        },
        "index": {
          "description": "Number of secant iterations exceed nsecant",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "MaxSecantIter",
          "package": "nonlinear-optimization",
          "partial": "Max Secant Iter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:MaxSecantIter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTotal iterations exceeded \u003ccode\u003emaxItersFac * n\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "MaxTotalIter",
          "package": "nonlinear-optimization",
          "signature": "MaxTotalIter",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#Result",
          "type": "function"
        },
        "index": {
          "description": "Total iterations exceeded maxItersFac",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "MaxTotalIter",
          "package": "nonlinear-optimization",
          "partial": "Max Total Iter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:MaxTotalIter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSlope was always negative in line search.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "NegativeSlope",
          "package": "nonlinear-optimization",
          "signature": "NegativeSlope",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#Result",
          "type": "function"
        },
        "index": {
          "description": "Slope was always negative in line search",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "NegativeSlope",
          "package": "nonlinear-optimization",
          "partial": "Negative Slope",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:NegativeSlope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearch direction not a descent direction.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "NotDescent",
          "package": "nonlinear-optimization",
          "signature": "NotDescent",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#Result",
          "type": "function"
        },
        "index": {
          "description": "Search direction not descent direction",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "NotDescent",
          "package": "nonlinear-optimization",
          "partial": "Not Descent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:NotDescent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "Parameters",
          "package": "nonlinear-optimization",
          "signature": "Parameters",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#Parameters",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "Parameters",
          "package": "nonlinear-optimization",
          "partial": "Parameters",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:Parameters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo not output anything to \u003ccode\u003estdout\u003c/code\u003e, which most of the\n time is good.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "Quiet",
          "package": "nonlinear-optimization",
          "signature": "Quiet",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#Verbose",
          "type": "function"
        },
        "index": {
          "description": "Do not output anything to stdout which most of the time is good",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "Quiet",
          "package": "nonlinear-optimization",
          "partial": "Quiet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:Quiet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eRelativeEpsilon eps\u003c/code\u003e estimates the error as \u003ccode\u003eeps * C_k\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "RelativeEpsilon",
          "package": "nonlinear-optimization",
          "signature": "RelativeEpsilon Double",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#EstimateError",
          "type": "function"
        },
        "index": {
          "description": "RelativeEpsilon eps estimates the error as eps",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "RelativeEpsilon",
          "package": "nonlinear-optimization",
          "partial": "Relative Epsilon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:RelativeEpsilon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitial function value was \u003ccode\u003eNaN\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "StartFunctionValueNaN",
          "package": "nonlinear-optimization",
          "signature": "StartFunctionValueNaN",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#Result",
          "type": "function"
        },
        "index": {
          "description": "Initial function value was NaN",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "StartFunctionValueNaN",
          "package": "nonlinear-optimization",
          "partial": "Start Function Value Na",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:StartFunctionValueNaN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "Statistics",
          "package": "nonlinear-optimization",
          "signature": "Statistics",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#Statistics",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "Statistics",
          "package": "nonlinear-optimization",
          "partial": "Statistics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:Statistics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "TechParameters",
          "package": "nonlinear-optimization",
          "signature": "TechParameters",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#TechParameters",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "TechParameters",
          "package": "nonlinear-optimization",
          "partial": "Tech Parameters",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:TechParameters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvergence tolerance was satisfied.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "ToleranceStatisfied",
          "package": "nonlinear-optimization",
          "signature": "ToleranceStatisfied",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#Result",
          "type": "function"
        },
        "index": {
          "description": "Convergence tolerance was satisfied",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "ToleranceStatisfied",
          "package": "nonlinear-optimization",
          "partial": "Tolerance Statisfied",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:ToleranceStatisfied"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "VCombined",
          "package": "nonlinear-optimization",
          "signature": "(v Double -\u003e (Double, v Double)) -\u003e Combined Simple",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#Combined",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "VCombined",
          "normalized": "(a Double-\u003e(Double,a Double))-\u003eCombined Simple",
          "package": "nonlinear-optimization",
          "partial": "VCombined",
          "signature": "(v Double-\u003e(Double,v Double))-\u003eCombined Simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:VCombined"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "VFunction",
          "package": "nonlinear-optimization",
          "signature": "(v Double -\u003e Double) -\u003e Function Simple",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#Function",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "VFunction",
          "normalized": "(a Double-\u003eDouble)-\u003eFunction Simple",
          "package": "nonlinear-optimization",
          "partial": "VFunction",
          "signature": "(v Double-\u003eDouble)-\u003eFunction Simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:VFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "VGradient",
          "package": "nonlinear-optimization",
          "signature": "(v Double -\u003e v Double) -\u003e Gradient Simple",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#Gradient",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "VGradient",
          "normalized": "(a Double-\u003ea Double)-\u003eGradient Simple",
          "package": "nonlinear-optimization",
          "partial": "VGradient",
          "signature": "(v Double-\u003ev Double)-\u003eGradient Simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:VGradient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint what work is being done on each iteraction.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "Verbose",
          "package": "nonlinear-optimization",
          "signature": "Verbose",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#Verbose",
          "type": "function"
        },
        "index": {
          "description": "Print what work is being done on each iteraction",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "Verbose",
          "package": "nonlinear-optimization",
          "partial": "Verbose",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:Verbose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint information about every step, may be useful for\n troubleshooting.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "VeryVerbose",
          "package": "nonlinear-optimization",
          "signature": "VeryVerbose",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#Verbose",
          "type": "function"
        },
        "index": {
          "description": "Print information about every step may be useful for troubleshooting",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "VeryVerbose",
          "package": "nonlinear-optimization",
          "partial": "Very Verbose",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:VeryVerbose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf \u003ccode\u003eJust tol\u003c/code\u003e, then always check that \u003ccode\u003ef_{k+1} - f_k \u003c=\n tol * C_k\u003c/code\u003e. Otherwise, if \u003ccode\u003eNothing\u003c/code\u003e then no checking of\n function values is done.  Defaults to \u003ccode\u003eNothing\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "debugTol",
          "package": "nonlinear-optimization",
          "signature": "Maybe Double",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#Parameters",
          "type": "function"
        },
        "index": {
          "description": "If Just tol then always check that tol Otherwise if Nothing then no checking of function values is done Defaults to Nothing",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "debugTol",
          "package": "nonlinear-optimization",
          "partial": "Tol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:debugTol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault parameters.  See the documentation for \u003ccode\u003e\u003ca\u003eParameters\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003eTechParameters\u003c/a\u003e\u003c/code\u003e to see what are the defaults.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "defaultParameters",
          "package": "nonlinear-optimization",
          "signature": "Parameters",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#defaultParameters",
          "type": "function"
        },
        "index": {
          "description": "Default parameters See the documentation for Parameters and TechParameters to see what are the defaults",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "defaultParameters",
          "package": "nonlinear-optimization",
          "partial": "Parameters",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:defaultParameters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow to calculate the estimated error in the function\n value.  Defaults to \u003ccode\u003eRelativeEpsilon 1e-6\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "estimateError",
          "package": "nonlinear-optimization",
          "signature": "EstimateError",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#Parameters",
          "type": "function"
        },
        "index": {
          "description": "How to calculate the estimated error in the function value Defaults to RelativeEpsilon e-6",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "estimateError",
          "package": "nonlinear-optimization",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:estimateError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValue of the function at the solution.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "finalValue",
          "package": "nonlinear-optimization",
          "signature": "Double",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#Statistics",
          "type": "function"
        },
        "index": {
          "description": "Value of the function at the solution",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "finalValue",
          "package": "nonlinear-optimization",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:finalValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStop when \u003ccode\u003e-alpha * dphi0\u003c/code\u003e, the estimated change in\n function value, is less than \u003ccode\u003efuncEpsilon * |f|\u003c/code\u003e.\n Defaults to \u003ccode\u003e0\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "funcEpsilon",
          "package": "nonlinear-optimization",
          "signature": "Double",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#Parameters",
          "type": "function"
        },
        "index": {
          "description": "Stop when alpha dphi0 the estimated change in function value is less than funcEpsilon Defaults to",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "funcEpsilon",
          "package": "nonlinear-optimization",
          "partial": "Epsilon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:funcEpsilon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTotal number of function evaluations.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "funcEvals",
          "package": "nonlinear-optimization",
          "signature": "CInt",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#Statistics",
          "type": "function"
        },
        "index": {
          "description": "Total number of function evaluations",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "funcEvals",
          "package": "nonlinear-optimization",
          "partial": "Evals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:funcEvals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTotal number of gradient evaluations.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "gradEvals",
          "package": "nonlinear-optimization",
          "signature": "CInt",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#Statistics",
          "type": "function"
        },
        "index": {
          "description": "Total number of gradient evaluations",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "gradEvals",
          "package": "nonlinear-optimization",
          "partial": "Evals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:gradEvals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximum absolute component of the gradient at the\n solution.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "gradNorm",
          "package": "nonlinear-optimization",
          "signature": "Double",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#Statistics",
          "type": "function"
        },
        "index": {
          "description": "Maximum absolute component of the gradient at the solution",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "gradNorm",
          "package": "nonlinear-optimization",
          "partial": "Norm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:gradNorm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf \u003ccode\u003eJust step\u003c/code\u003e, then use \u003ccode\u003estep\u003c/code\u003e as the initial step of\n the line search.  Otherwise, if \u003ccode\u003eNothing\u003c/code\u003e then the initial\n step is programatically calculated.  Defaults to\n \u003ccode\u003eNothing\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "initialStep",
          "package": "nonlinear-optimization",
          "signature": "Maybe Double",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#Parameters",
          "type": "function"
        },
        "index": {
          "description": "If Just step then use step as the initial step of the line search Otherwise if Nothing then the initial step is programatically calculated Defaults to Nothing",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "initialStep",
          "package": "nonlinear-optimization",
          "partial": "Step",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:initialStep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhat kind of line search should be used.  Defaults to\n \u003ccode\u003eAutoSwitch 1e-3\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "lineSearch",
          "package": "nonlinear-optimization",
          "signature": "LineSearch",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#Parameters",
          "type": "function"
        },
        "index": {
          "description": "What kind of line search should be used Defaults to AutoSwitch e-3",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "lineSearch",
          "package": "nonlinear-optimization",
          "partial": "Search",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:lineSearch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines the maximum number of iterations.  The process\n is aborted when \u003ccode\u003emaxItersFac * n\u003c/code\u003e iterations are done, where\n \u003ccode\u003en\u003c/code\u003e is the number of dimensions.  Defaults to infinity.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "maxItersFac",
          "package": "nonlinear-optimization",
          "signature": "Double",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#Parameters",
          "type": "function"
        },
        "index": {
          "description": "Defines the maximum number of iterations The process is aborted when maxItersFac iterations are done where is the number of dimensions Defaults to infinity",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "maxItersFac",
          "package": "nonlinear-optimization",
          "partial": "Iters Fac",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:maxItersFac"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAfter encountering \u003ccode\u003eNaN\u003c/code\u003e while calculating the step\n length, growth factor when searching for a bracketing\n interval.  Defaults to \u003ccode\u003e1.3\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "nanRho",
          "package": "nonlinear-optimization",
          "signature": "Double",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#Parameters",
          "type": "function"
        },
        "index": {
          "description": "After encountering NaN while calculating the step length growth factor when searching for bracketing interval Defaults to",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "nanRho",
          "package": "nonlinear-optimization",
          "partial": "Rho",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:nanRho"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximum number of times the bracketing interval grows or\n shrinks in the line search.  Defaults to \u003ccode\u003e50\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "nexpand",
          "package": "nonlinear-optimization",
          "signature": "CInt",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#Parameters",
          "type": "function"
        },
        "index": {
          "description": "Maximum number of times the bracketing interval grows or shrinks in the line search Defaults to",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "nexpand",
          "package": "nonlinear-optimization",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:nexpand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximum number of secant iterations in line search.\n Defaults to \u003ccode\u003e50\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "nsecant",
          "package": "nonlinear-optimization",
          "signature": "CInt",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#Parameters",
          "type": "function"
        },
        "index": {
          "description": "Maximum number of secant iterations in line search Defaults to",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "nsecant",
          "package": "nonlinear-optimization",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:nsecant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the \u003ccode\u003eCG_DESCENT\u003c/code\u003e optimizer and try to minimize the\n function.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "optimize",
          "package": "nonlinear-optimization",
          "signature": "Parameters-\u003e Double-\u003e v Double-\u003e Function t1-\u003e Gradient t2-\u003e Maybe (Combined t3)-\u003e IO (Vector Double, Result, Statistics)",
          "type": "function"
        },
        "index": {
          "description": "Run the CG DESCENT optimizer and try to minimize the function",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "optimize",
          "normalized": "Parameters-\u003eDouble-\u003ea Double-\u003eFunction b-\u003eGradient b-\u003eMaybe(Combined b)-\u003eIO(Vector Double,Result,Statistics)",
          "package": "nonlinear-optimization",
          "signature": "Parameters-\u003eDouble-\u003ev Double-\u003eFunction t-\u003eGradient t-\u003eMaybe(Combined t)-\u003eIO(Vector Double,Result,Statistics)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:optimize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint final statistics to \u003ccode\u003estdout\u003c/code\u003e.  Defaults to \u003ccode\u003eTrue\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "printFinal",
          "package": "nonlinear-optimization",
          "signature": "Bool",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#Parameters",
          "type": "function"
        },
        "index": {
          "description": "Print final statistics to stdout Defaults to True",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "printFinal",
          "package": "nonlinear-optimization",
          "partial": "Final",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:printFinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint parameters to \u003ccode\u003estdout\u003c/code\u003e before starting.  Defaults to \u003ccode\u003eFalse\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "printParams",
          "package": "nonlinear-optimization",
          "signature": "Bool",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#Parameters",
          "type": "function"
        },
        "index": {
          "description": "Print parameters to stdout before starting Defaults to False",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "printParams",
          "package": "nonlinear-optimization",
          "partial": "Params",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:printParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFactor in \u003ccode\u003e[0, 1]\u003c/code\u003e used to compute average cost\n magnitude \u003ccode\u003eC_k\u003c/code\u003e as follows:\n\u003c/p\u003e\u003cpre\u003e Q_k = 1 + (qdecay)Q_{k-1},   Q_0 = 0\n C_k = C_{k-1} + (|f_k| - C_{k-1})/Q_k\n\u003c/pre\u003e\u003cp\u003eDefaults to \u003ccode\u003e0.7\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "qdecay",
          "package": "nonlinear-optimization",
          "signature": "Double",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#Parameters",
          "type": "function"
        },
        "index": {
          "description": "Factor in used to compute average cost magnitude as follows qdecay k-1 k-1 k-1 Defaults to",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "qdecay",
          "package": "nonlinear-optimization",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:qdecay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen to attempt quadratic interpolation in line search.\n If \u003ccode\u003eNothing\u003c/code\u003e then never try a quadratic interpolation\n step.  If \u003ccode\u003eJust cutoff\u003c/code\u003e, then attemp quadratic\n interpolation in line search when \u003ccode\u003e|f_{k+1} - f_k| / f_k\n \u003c= cutoff\u003c/code\u003e.  Defaults to \u003ccode\u003eJust 1e-12\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "quadraticStep",
          "package": "nonlinear-optimization",
          "signature": "Maybe Double",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#Parameters",
          "type": "function"
        },
        "index": {
          "description": "When to attempt quadratic interpolation in line search If Nothing then never try quadratic interpolation step If Just cutoff then attemp quadratic interpolation in line search when cutoff Defaults to Just e-12",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "quadraticStep",
          "package": "nonlinear-optimization",
          "partial": "Step",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:quadraticStep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRestart the conjugate gradient method after \u003ccode\u003erestartFac\n * n\u003c/code\u003e iterations. Defaults to \u003ccode\u003e1\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "restartFac",
          "package": "nonlinear-optimization",
          "signature": "Double",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#Parameters",
          "type": "function"
        },
        "index": {
          "description": "Restart the conjugate gradient method after restartFac iterations Defaults to",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "restartFac",
          "package": "nonlinear-optimization",
          "partial": "Fac",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:restartFac"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStop rules that define when the iterations should end.\n Defaults to \u003ccode\u003eDefaultStopRule 0\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "stopRules",
          "package": "nonlinear-optimization",
          "signature": "StopRules",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#Parameters",
          "type": "function"
        },
        "index": {
          "description": "Stop rules that define when the iterations should end Defaults to DefaultStopRule",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "stopRules",
          "package": "nonlinear-optimization",
          "partial": "Rules",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:stopRules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWolfe line search parameter.  Defaults to \u003ccode\u003e0.1\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "techDelta",
          "package": "nonlinear-optimization",
          "signature": "Double",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#TechParameters",
          "type": "function"
        },
        "index": {
          "description": "Wolfe line search parameter Defaults to",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "techDelta",
          "package": "nonlinear-optimization",
          "partial": "Delta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:techDelta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLower bound for the conjugate gradient update parameter\n \u003ccode\u003ebeta_k\u003c/code\u003e is \u003ccode\u003etechEta * ||d||_2\u003c/code\u003e.  Defaults to \u003ccode\u003e0.01\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "techEta",
          "package": "nonlinear-optimization",
          "signature": "Double",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#TechParameters",
          "type": "function"
        },
        "index": {
          "description": "Lower bound for the conjugate gradient update parameter beta is techEta Defaults to",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "techEta",
          "package": "nonlinear-optimization",
          "partial": "Eta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:techEta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecay factor for bracket interval width.  Defaults to\n \u003ccode\u003e0.66\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "techGamma",
          "package": "nonlinear-optimization",
          "signature": "Double",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#TechParameters",
          "type": "function"
        },
        "index": {
          "description": "Decay factor for bracket interval width Defaults to",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "techGamma",
          "package": "nonlinear-optimization",
          "partial": "Gamma",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:techGamma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTechnical parameters which you probably should not\n touch.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "techParameters",
          "package": "nonlinear-optimization",
          "signature": "TechParameters",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#Parameters",
          "type": "function"
        },
        "index": {
          "description": "Technical parameters which you probably should not touch",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "techParameters",
          "package": "nonlinear-optimization",
          "partial": "Parameters",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:techParameters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFactor used in starting guess for iteration 1.  Defaults\n to \u003ccode\u003e0.01\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "techPsi0",
          "package": "nonlinear-optimization",
          "signature": "Double",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#TechParameters",
          "type": "function"
        },
        "index": {
          "description": "Factor used in starting guess for iteration Defaults to",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "techPsi0",
          "package": "nonlinear-optimization",
          "partial": "Psi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:techPsi0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn performing a QuadStep, we evaluate the function at\n \u003ccode\u003epsi1 * previous step\u003c/code\u003e.  Defaults to \u003ccode\u003e0.1\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "techPsi1",
          "package": "nonlinear-optimization",
          "signature": "Double",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#TechParameters",
          "type": "function"
        },
        "index": {
          "description": "In performing QuadStep we evaluate the function at psi1 previous step Defaults to",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "techPsi1",
          "package": "nonlinear-optimization",
          "partial": "Psi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:techPsi1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen starting a new CG iteration, our initial guess for\n the line search stepsize is \u003ccode\u003epsi2 * previous step\u003c/code\u003e.\n Defaults to \u003ccode\u003e2\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "techPsi2",
          "package": "nonlinear-optimization",
          "signature": "Double",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#TechParameters",
          "type": "function"
        },
        "index": {
          "description": "When starting new CG iteration our initial guess for the line search stepsize is psi2 previous step Defaults to",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "techPsi2",
          "package": "nonlinear-optimization",
          "partial": "Psi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:techPsi2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGrowth factor when searching for initial bracketing\n interval.  Defaults to \u003ccode\u003e5\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "techRho",
          "package": "nonlinear-optimization",
          "signature": "Double",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#TechParameters",
          "type": "function"
        },
        "index": {
          "description": "Growth factor when searching for initial bracketing interval Defaults to",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "techRho",
          "package": "nonlinear-optimization",
          "partial": "Rho",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:techRho"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWolfe line search parameter.  Defaults to \u003ccode\u003e0.9\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "techSigma",
          "package": "nonlinear-optimization",
          "signature": "Double",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#TechParameters",
          "type": "function"
        },
        "index": {
          "description": "Wolfe line search parameter Defaults to",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "techSigma",
          "package": "nonlinear-optimization",
          "partial": "Sigma",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:techSigma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTotal number of iterations.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "totalIters",
          "package": "nonlinear-optimization",
          "signature": "CInt",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#Statistics",
          "type": "function"
        },
        "index": {
          "description": "Total number of iterations",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "totalIters",
          "package": "nonlinear-optimization",
          "partial": "Iters",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:totalIters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow verbose we should be while computing.  Everything is\n printed to \u003ccode\u003estdout\u003c/code\u003e. Defaults to \u003ccode\u003e\u003ca\u003eQuiet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "verbose",
          "package": "nonlinear-optimization",
          "signature": "Verbose",
          "source": "src/Numeric-Optimization-Algorithms-HagerZhang05.html#Parameters",
          "type": "function"
        },
        "index": {
          "description": "How verbose we should be while computing Everything is printed to stdout Defaults to Quiet",
          "hierarchy": "Numeric Optimization Algorithms HagerZhang05",
          "module": "Numeric.Optimization.Algorithms.HagerZhang05",
          "name": "verbose",
          "package": "nonlinear-optimization",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nonlinear-optimization/docs/Numeric-Optimization-Algorithms-HagerZhang05.html#v:verbose"
      }
    }
  ]
]