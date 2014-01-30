[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/maxent/docs/Numeric-MaxEnt.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe maximum entropy method, or MAXENT, is variational approach for computing probability \n distributions given a list of moment, or expected value, constraints.\n\u003c/p\u003e\u003cp\u003eHere are some links for background info.\n A good overview of applications:\n \u003ca\u003ehttp://cmm.cit.nih.gov/maxent/letsgo.html\u003c/a\u003e\n On the idea of maximum entropy in general: \n \u003ca\u003ehttp://en.wikipedia.org/wiki/Principle_of_maximum_entropy\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eUse this package to compute discrete maximum entropy distributions over a list of values and\n list of constraints.\n\u003c/p\u003e\u003cp\u003eHere is a the example from Probability the Logic of Science\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emaxent 0.00001 [1,2,3] [average 1.5]\n\u003c/code\u003e\u003c/strong\u003eRight [0.61, 0.26, 0.11]\n\u003c/pre\u003e\u003cp\u003eThe classic dice example\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emaxent 0.00001 [1,2,3,4,5,6] [average 4.5]\n\u003c/code\u003e\u003c/strong\u003eRight [.05, .07, 0.11, 0.16, 0.23, 0.34]\n\u003c/pre\u003e\u003cp\u003eOne can use different constraints besides the average value there.  \n\u003c/p\u003e\u003cp\u003eAs for why you want to maximize the entropy to find the probability constraint, \n I will say this for now. In the case of the average constraint \n it is a kin to choosing a integer partition with the most interger compositions. \n I doubt that makes any sense, but I will try to explain more with a blog post soon.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.MaxEnt",
        "fct-package": "maxent",
        "fct-signature": "module",
        "fct-source": "src/Numeric-MaxEnt.html",
        "fct-type": "module",
        "title": "MaxEnt"
      },
      "index": {
        "description": "The maximum entropy method or MAXENT is variational approach for computing probability distributions given list of moment or expected value constraints Here are some links for background info good overview of applications http cmm.cit.nih.gov maxent letsgo.html On the idea of maximum entropy in general http en.wikipedia.org wiki Principle of maximum entropy Use this package to compute discrete maximum entropy distributions over list of values and list of constraints Here is the example from Probability the Logic of Science maxent average Right The classic dice example maxent average Right One can use different constraints besides the average value there As for why you want to maximize the entropy to find the probability constraint will say this for now In the case of the average constraint it is kin to choosing integer partition with the most interger compositions doubt that makes any sense but will try to explain more with blog post soon",
        "hierarchy": "Numeric MaxEnt",
        "module": "Numeric.MaxEnt",
        "name": "MaxEnt",
        "normalized": "",
        "package": "maxent",
        "partial": "Max Ent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/maxent/docs/Numeric-MaxEnt.html#t:Constraint",
      "description": {
        "fct-descr": "\u003cp\u003eA constraint of the form \u003ccode\u003eg(x, y, ...) = c\u003c/code\u003e. See \u003ccode\u003e\u003ca\u003e\u003c=\u003e\u003c/a\u003e\u003c/code\u003e for constructing a \u003ccode\u003e\u003ca\u003eConstraint\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.MaxEnt",
        "fct-package": "maxent",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "Constraint"
      },
      "index": {
        "description": "constraint of the form See for constructing Constraint",
        "hierarchy": "Numeric MaxEnt",
        "module": "Numeric.MaxEnt",
        "name": "Constraint",
        "normalized": "",
        "package": "maxent",
        "partial": "Constraint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/maxent/docs/Numeric-MaxEnt.html#t:ExpectationConstraint",
      "description": {
        "fct-descr": "\u003cp\u003eConstraint type. A function and the constant it equals.\n\u003c/p\u003e\u003cp\u003eThink of it as the pair \u003ccode\u003e(f, c)\u003c/code\u003e in the constraint \n\u003c/p\u003e\u003cpre\u003e\n     &#931; p&#8336; f(x&#8336;) = c\n\u003c/pre\u003e\u003cp\u003esuch that we are summing over all values .\n\u003c/p\u003e\u003cp\u003eFor example, for a variance constraint the \u003ccode\u003ef\u003c/code\u003e would be \u003ccode\u003e(\\x -\u003e x*x)\u003c/code\u003e and \u003ccode\u003ec\u003c/code\u003e would be the variance.\n\u003c/p\u003e",
        "fct-module": "Numeric.MaxEnt",
        "fct-package": "maxent",
        "fct-signature": "type",
        "fct-source": "src/Numeric-MaxEnt-Moment.html#ExpectationConstraint",
        "fct-type": "type",
        "title": "ExpectationConstraint"
      },
      "index": {
        "description": "Constraint type function and the constant it equals Think of it as the pair in the constraint such that we are summing over all values For example for variance constraint the would be and would be the variance",
        "hierarchy": "Numeric MaxEnt",
        "module": "Numeric.MaxEnt",
        "name": "ExpectationConstraint",
        "normalized": "",
        "package": "maxent",
        "partial": "Expectation Constraint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/maxent/docs/Numeric-MaxEnt.html#t:ExpectationFunction",
      "description": {
        "fct-descr": "\u003cp\u003eA function that takes an index and value and returns a value.\n   See \u003ccode\u003e\u003ca\u003eaverage\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003evariance\u003c/a\u003e\u003c/code\u003e for examples.\n\u003c/p\u003e",
        "fct-module": "Numeric.MaxEnt",
        "fct-package": "maxent",
        "fct-signature": "type",
        "fct-source": "src/Numeric-MaxEnt-Moment.html#ExpectationFunction",
        "fct-type": "type",
        "title": "ExpectationFunction"
      },
      "index": {
        "description": "function that takes an index and value and returns value See average and variance for examples",
        "hierarchy": "Numeric MaxEnt",
        "module": "Numeric.MaxEnt",
        "name": "ExpectationFunction",
        "normalized": "",
        "package": "maxent",
        "partial": "Expectation Function",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/maxent/docs/Numeric-MaxEnt.html#t:LinearConstraints",
      "description": {
        "fct-module": "Numeric.MaxEnt",
        "fct-package": "maxent",
        "fct-signature": "data",
        "fct-source": "src/Numeric-MaxEnt-Linear.html#LinearConstraints",
        "fct-type": "data",
        "title": "LinearConstraints"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric MaxEnt",
        "module": "Numeric.MaxEnt",
        "name": "LinearConstraints",
        "normalized": "",
        "package": "maxent",
        "partial": "Linear Constraints",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/maxent/docs/Numeric-MaxEnt.html#t:UU",
      "description": {
        "fct-module": "Numeric.MaxEnt",
        "fct-package": "maxent",
        "fct-signature": "newtype",
        "fct-source": "src/Numeric-MaxEnt-Moment.html#UU",
        "fct-type": "newtype",
        "title": "UU"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric MaxEnt",
        "module": "Numeric.MaxEnt",
        "name": "UU",
        "normalized": "",
        "package": "maxent",
        "partial": "UU",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/maxent/docs/Numeric-MaxEnt.html#v:.-61-.",
      "description": {
        "fct-module": "Numeric.MaxEnt",
        "fct-package": "maxent",
        "fct-signature": "AD s a -\u003e AD s a) -\u003e a -\u003e ExpectationConstraint a",
        "fct-source": "src/Numeric-MaxEnt-Moment.html#.%3D.",
        "fct-type": "function",
        "title": "(.=.)"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric MaxEnt",
        "module": "Numeric.MaxEnt",
        "name": "(.=.) .=.",
        "normalized": "AD a b-\u003eAD a b)-\u003eb-\u003eExpectationConstraint b",
        "package": "maxent",
        "partial": "",
        "signature": "AD s a-\u003eAD s a)-\u003ea-\u003eExpectationConstraint a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/maxent/docs/Numeric-MaxEnt.html#v:LC",
      "description": {
        "fct-module": "Numeric.MaxEnt",
        "fct-package": "maxent",
        "fct-signature": "LC",
        "fct-source": "src/Numeric-MaxEnt-Linear.html#LinearConstraints",
        "fct-type": "function",
        "title": "LC"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric MaxEnt",
        "module": "Numeric.MaxEnt",
        "name": "LC",
        "normalized": "",
        "package": "maxent",
        "partial": "LC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/maxent/docs/Numeric-MaxEnt.html#v:UU",
      "description": {
        "fct-module": "Numeric.MaxEnt",
        "fct-package": "maxent",
        "fct-signature": "UU",
        "fct-source": "src/Numeric-MaxEnt-Moment.html#UU",
        "fct-type": "function",
        "title": "UU"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric MaxEnt",
        "module": "Numeric.MaxEnt",
        "name": "UU",
        "normalized": "",
        "package": "maxent",
        "partial": "UU",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/maxent/docs/Numeric-MaxEnt.html#v:average",
      "description": {
        "fct-module": "Numeric.MaxEnt",
        "fct-package": "maxent",
        "fct-signature": "a -\u003e ExpectationConstraint a",
        "fct-source": "src/Numeric-MaxEnt-Moment.html#average",
        "fct-type": "function",
        "title": "average"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric MaxEnt",
        "module": "Numeric.MaxEnt",
        "name": "average",
        "normalized": "a-\u003eExpectationConstraint a",
        "package": "maxent",
        "partial": "",
        "signature": "a-\u003eExpectationConstraint a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/maxent/docs/Numeric-MaxEnt.html#v:general",
      "description": {
        "fct-descr": "\u003cp\u003eA more general solver. This directly solves the lagrangian of the constraints and the\n  the additional constraint that the probabilities must sum to one.\n\u003c/p\u003e",
        "fct-module": "Numeric.MaxEnt",
        "fct-package": "maxent",
        "fct-signature": "Double-\u003e Int-\u003e [Constraint Double]-\u003e Either (Result, Statistics) (Vector Double)",
        "fct-type": "function",
        "title": "general"
      },
      "index": {
        "description": "more general solver This directly solves the lagrangian of the constraints and the the additional constraint that the probabilities must sum to one",
        "hierarchy": "Numeric MaxEnt",
        "module": "Numeric.MaxEnt",
        "name": "general",
        "normalized": "Double-\u003eInt-\u003e[Constraint Double]-\u003eEither(Result,Statistics)(Vector Double)",
        "package": "maxent",
        "partial": "",
        "signature": "Double-\u003eInt-\u003e[Constraint Double]-\u003eEither(Result,Statistics)(Vector Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/maxent/docs/Numeric-MaxEnt.html#v:linear",
      "description": {
        "fct-descr": "\u003cp\u003eThis is for the linear case Ax = b \n   \u003ccode\u003ex\u003c/code\u003e in this situation is the vector of probablities.\n\u003c/p\u003e\u003cp\u003eConsider the 1 dimensional circular convolution using hmatrix.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport Numeric.LinearAlgebra\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efromLists [[0.68, 0.22, 0.1], [0.1, 0.68, 0.22], [0.22, 0.1, 0.68]] \u003c\u003e fromLists [[0.2], [0.5], [0.3]]\n\u003c/code\u003e\u003c/strong\u003e(3\u003e\u003c1) [0.276, 0.426, 0.298]   \n\u003c/pre\u003e\u003cp\u003eNow if we were given just the convolution and the output, we can use \u003ccode\u003e\u003ca\u003elinear\u003c/a\u003e\u003c/code\u003e to infer the input.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elinear 3.0e-17 $ LC [[0.68, 0.22, 0.1], [0.1, 0.68, 0.22], [0.22, 0.1, 0.68]] [0.276, 0.426, 0.298]\n\u003c/code\u003e\u003c/strong\u003eRight [0.20000000000000004,0.4999999999999999,0.3]\n\u003c/pre\u003e\u003cp\u003eI fell compelled to point out that we could also just invert the original convolution \n   matrix. Supposedly using maxent can reduce errors from noise if the convolution \n   matrix is not properly estimated.\n\u003c/p\u003e",
        "fct-module": "Numeric.MaxEnt",
        "fct-package": "maxent",
        "fct-signature": "Double-\u003e LinearConstraints Double-\u003e Either (Result, Statistics) (Vector Double)",
        "fct-type": "function",
        "title": "linear"
      },
      "index": {
        "description": "This is for the linear case Ax in this situation is the vector of probablities Consider the dimensional circular convolution using hmatrix import Numeric.LinearAlgebra fromLists fromLists Now if we were given just the convolution and the output we can use linear to infer the input linear e-17 LC Right fell compelled to point out that we could also just invert the original convolution matrix Supposedly using maxent can reduce errors from noise if the convolution matrix is not properly estimated",
        "hierarchy": "Numeric MaxEnt",
        "module": "Numeric.MaxEnt",
        "name": "linear",
        "normalized": "Double-\u003eLinearConstraints Double-\u003eEither(Result,Statistics)(Vector Double)",
        "package": "maxent",
        "partial": "",
        "signature": "Double-\u003eLinearConstraints Double-\u003eEither(Result,Statistics)(Vector Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/maxent/docs/Numeric-MaxEnt.html#v:matrix",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Numeric.MaxEnt",
        "fct-package": "maxent",
        "fct-signature": "[[a]]",
        "fct-source": "src/Numeric-MaxEnt-Linear.html#LinearConstraints",
        "fct-type": "function",
        "title": "matrix"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric MaxEnt",
        "module": "Numeric.MaxEnt",
        "name": "matrix",
        "normalized": "[[a]]",
        "package": "maxent",
        "partial": "",
        "signature": "[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/maxent/docs/Numeric-MaxEnt.html#v:maxent",
      "description": {
        "fct-descr": "\u003cp\u003eDiscrete maximum entropy solver where the constraints are all moment constraints. \n\u003c/p\u003e",
        "fct-module": "Numeric.MaxEnt",
        "fct-package": "maxent",
        "fct-signature": "Double-\u003e [Double]-\u003e [ExpectationConstraint Double]-\u003e Either (Result, Statistics) (Vector Double)",
        "fct-type": "function",
        "title": "maxent"
      },
      "index": {
        "description": "Discrete maximum entropy solver where the constraints are all moment constraints",
        "hierarchy": "Numeric MaxEnt",
        "module": "Numeric.MaxEnt",
        "name": "maxent",
        "normalized": "Double-\u003e[Double]-\u003e[ExpectationConstraint Double]-\u003eEither(Result,Statistics)(Vector Double)",
        "package": "maxent",
        "partial": "",
        "signature": "Double-\u003e[Double]-\u003e[ExpectationConstraint Double]-\u003eEither(Result,Statistics)(Vector Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/maxent/docs/Numeric-MaxEnt.html#v:output",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Numeric.MaxEnt",
        "fct-package": "maxent",
        "fct-signature": "[a]",
        "fct-source": "src/Numeric-MaxEnt-Linear.html#LinearConstraints",
        "fct-type": "function",
        "title": "output"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric MaxEnt",
        "module": "Numeric.MaxEnt",
        "name": "output",
        "normalized": "[a]",
        "package": "maxent",
        "partial": "",
        "signature": "[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/maxent/docs/Numeric-MaxEnt.html#v:unUU",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Numeric.MaxEnt",
        "fct-package": "maxent",
        "fct-signature": "ExpectationFunction (AD s a)",
        "fct-source": "src/Numeric-MaxEnt-Moment.html#UU",
        "fct-type": "function",
        "title": "unUU"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric MaxEnt",
        "module": "Numeric.MaxEnt",
        "name": "unUU",
        "normalized": "",
        "package": "maxent",
        "partial": "UU",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/maxent/docs/Numeric-MaxEnt.html#v:variance",
      "description": {
        "fct-module": "Numeric.MaxEnt",
        "fct-package": "maxent",
        "fct-signature": "a -\u003e ExpectationConstraint a",
        "fct-source": "src/Numeric-MaxEnt-Moment.html#variance",
        "fct-type": "function",
        "title": "variance"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric MaxEnt",
        "module": "Numeric.MaxEnt",
        "name": "variance",
        "normalized": "a-\u003eExpectationConstraint a",
        "package": "maxent",
        "partial": "",
        "signature": "a-\u003eExpectationConstraint a"
      }
    }
  }
]