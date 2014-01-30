[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Bracket.html#",
      "description": {
        "fct-module": "Math.Root.Bracket",
        "fct-package": "roots",
        "fct-signature": "module",
        "fct-source": "src/Math-Root-Bracket.html",
        "fct-type": "module",
        "title": "Bracket"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Root Bracket",
        "module": "Math.Root.Bracket",
        "name": "Bracket",
        "normalized": "",
        "package": "roots",
        "partial": "Bracket",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Bracket.html#v:bracket",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ebracket f x1 x2\u003c/code\u003e: Given a function and an initial guessed range x1 to x2,\n this function expands the range geometrically until a root is bracketed by \n the returned values, returning a list of the successively expanded ranges.  \n The list will be finite if and only if the sequence yields a bracketing pair.\n\u003c/p\u003e",
        "fct-module": "Math.Root.Bracket",
        "fct-package": "roots",
        "fct-signature": "(a -\u003e b) -\u003e a -\u003e a -\u003e [(a, a)]",
        "fct-source": "src/Math-Root-Bracket.html#bracket",
        "fct-type": "function",
        "title": "bracket"
      },
      "index": {
        "description": "bracket x1 x2 Given function and an initial guessed range x1 to x2 this function expands the range geometrically until root is bracketed by the returned values returning list of the successively expanded ranges The list will be finite if and only if the sequence yields bracketing pair",
        "hierarchy": "Math Root Bracket",
        "module": "Math.Root.Bracket",
        "name": "bracket",
        "normalized": "(a-\u003eb)-\u003ea-\u003ea-\u003e[(a,a)]",
        "package": "roots",
        "partial": "",
        "signature": "(a-\u003eb)-\u003ea-\u003ea-\u003e[(a,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Bracket.html#v:brackets",
      "description": {
        "fct-descr": "\u003cp\u003ePredicate that returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e whenever the given pair of points brackets\n a root of the given function.\n\u003c/p\u003e",
        "fct-module": "Math.Root.Bracket",
        "fct-package": "roots",
        "fct-signature": "(a -\u003e b) -\u003e (a, a) -\u003e Bool",
        "fct-source": "src/Math-Root-Bracket.html#brackets",
        "fct-type": "function",
        "title": "brackets"
      },
      "index": {
        "description": "Predicate that returns True whenever the given pair of points brackets root of the given function",
        "hierarchy": "Math Root Bracket",
        "module": "Math.Root.Bracket",
        "name": "brackets",
        "normalized": "(a-\u003eb)-\u003e(a,a)-\u003eBool",
        "package": "roots",
        "partial": "",
        "signature": "(a-\u003eb)-\u003e(a,a)-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Bracket.html#v:subdivideAndBracket",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esubdivideAndBracket f x1 x2 n\u003c/code\u003e: Given a function defined on the interval\n [x1,x2], subdivide the interval into n equally spaced segments and search \n for zero crossings of the function.  The returned list will contain all \n bracketing pairs found.\n\u003c/p\u003e",
        "fct-module": "Math.Root.Bracket",
        "fct-package": "roots",
        "fct-signature": "(a -\u003e b) -\u003e a -\u003e a -\u003e c -\u003e [(a, a)]",
        "fct-source": "src/Math-Root-Bracket.html#subdivideAndBracket",
        "fct-type": "function",
        "title": "subdivideAndBracket"
      },
      "index": {
        "description": "subdivideAndBracket x1 x2 Given function defined on the interval x1 x2 subdivide the interval into equally spaced segments and search for zero crossings of the function The returned list will contain all bracketing pairs found",
        "hierarchy": "Math Root Bracket",
        "module": "Math.Root.Bracket",
        "name": "subdivideAndBracket",
        "normalized": "(a-\u003eb)-\u003ea-\u003ea-\u003ec-\u003e[(a,a)]",
        "package": "roots",
        "partial": "And Bracket",
        "signature": "(a-\u003eb)-\u003ea-\u003ea-\u003ec-\u003e[(a,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder-Bisection.html#",
      "description": {
        "fct-module": "Math.Root.Finder.Bisection",
        "fct-package": "roots",
        "fct-signature": "module",
        "fct-source": "src/Math-Root-Finder-Bisection.html",
        "fct-type": "module",
        "title": "Bisection"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Root Finder Bisection",
        "module": "Math.Root.Finder.Bisection",
        "name": "Bisection",
        "normalized": "",
        "package": "roots",
        "partial": "Bisection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder-Bisection.html#t:Bisect",
      "description": {
        "fct-descr": "\u003cp\u003eBisect an interval in search of a root.  At all times, \u003ccode\u003ef (estimateRoot _)\u003c/code\u003e\n is less than or equal to 0 and \u003ccode\u003ef (estimateRoot _ + estimateError _)\u003c/code\u003e is \n greater than or equal to 0.\n\u003c/p\u003e",
        "fct-module": "Math.Root.Finder.Bisection",
        "fct-package": "roots",
        "fct-signature": "data",
        "fct-source": "src/Math-Root-Finder-Bisection.html#Bisect",
        "fct-type": "data",
        "title": "Bisect"
      },
      "index": {
        "description": "Bisect an interval in search of root At all times estimateRoot is less than or equal to and estimateRoot estimateError is greater than or equal to",
        "hierarchy": "Math Root Finder Bisection",
        "module": "Math.Root.Finder.Bisection",
        "name": "Bisect",
        "normalized": "",
        "package": "roots",
        "partial": "Bisect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder-Bisection.html#v:bisection",
      "description": {
        "fct-descr": "\u003cp\u003eUsing bisection, return a root of a function known to lie between x1 and x2.\n The root will be refined till its accuracy is +-xacc.  If convergence fails,\n returns the final state of the search.\n\u003c/p\u003e",
        "fct-module": "Math.Root.Finder.Bisection",
        "fct-package": "roots",
        "fct-signature": "(a -\u003e b) -\u003e a -\u003e a -\u003e a -\u003e Either (Bisect a b) a",
        "fct-source": "src/Math-Root-Finder-Bisection.html#bisection",
        "fct-type": "function",
        "title": "bisection"
      },
      "index": {
        "description": "Using bisection return root of function known to lie between x1 and x2 The root will be refined till its accuracy is xacc If convergence fails returns the final state of the search",
        "hierarchy": "Math Root Finder Bisection",
        "module": "Math.Root.Finder.Bisection",
        "name": "bisection",
        "normalized": "(a-\u003eb)-\u003ea-\u003ea-\u003ea-\u003eEither(Bisect a b)a",
        "package": "roots",
        "partial": "",
        "signature": "(a-\u003eb)-\u003ea-\u003ea-\u003ea-\u003eEither(Bisect a b)a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder-Brent.html#",
      "description": {
        "fct-module": "Math.Root.Finder.Brent",
        "fct-package": "roots",
        "fct-signature": "module",
        "fct-source": "src/Math-Root-Finder-Brent.html",
        "fct-type": "module",
        "title": "Brent"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Root Finder Brent",
        "module": "Math.Root.Finder.Brent",
        "name": "Brent",
        "normalized": "",
        "package": "roots",
        "partial": "Brent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder-Brent.html#t:Brent",
      "description": {
        "fct-descr": "\u003cp\u003eWorking state for Brent's root-finding method.\n\u003c/p\u003e",
        "fct-module": "Math.Root.Finder.Brent",
        "fct-package": "roots",
        "fct-signature": "data",
        "fct-source": "src/Math-Root-Finder-Brent.html#Brent",
        "fct-type": "data",
        "title": "Brent"
      },
      "index": {
        "description": "Working state for Brent root-finding method",
        "hierarchy": "Math Root Finder Brent",
        "module": "Math.Root.Finder.Brent",
        "name": "Brent",
        "normalized": "",
        "package": "roots",
        "partial": "Brent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder-Brent.html#v:brent",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ebrent f x1 x2 xacc\u003c/code\u003e:  attempt to find a root of a function known to \n lie between x1 and x2, using Brent's method.  The root will be refined\n till its accuracy is +-xacc.  If convergence fails, returns the final\n state of the search.\n\u003c/p\u003e",
        "fct-module": "Math.Root.Finder.Brent",
        "fct-package": "roots",
        "fct-signature": "(a -\u003e a) -\u003e a -\u003e a -\u003e a -\u003e Either (Brent a a) a",
        "fct-source": "src/Math-Root-Finder-Brent.html#brent",
        "fct-type": "function",
        "title": "brent"
      },
      "index": {
        "description": "brent x1 x2 xacc attempt to find root of function known to lie between x1 and x2 using Brent method The root will be refined till its accuracy is xacc If convergence fails returns the final state of the search",
        "hierarchy": "Math Root Finder Brent",
        "module": "Math.Root.Finder.Brent",
        "name": "brent",
        "normalized": "(a-\u003ea)-\u003ea-\u003ea-\u003ea-\u003eEither(Brent a a)a",
        "package": "roots",
        "partial": "",
        "signature": "(a-\u003ea)-\u003ea-\u003ea-\u003ea-\u003eEither(Brent a a)a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder-Dekker.html#",
      "description": {
        "fct-module": "Math.Root.Finder.Dekker",
        "fct-package": "roots",
        "fct-signature": "module",
        "fct-source": "src/Math-Root-Finder-Dekker.html",
        "fct-type": "module",
        "title": "Dekker"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Root Finder Dekker",
        "module": "Math.Root.Finder.Dekker",
        "name": "Dekker",
        "normalized": "",
        "package": "roots",
        "partial": "Dekker",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder-Dekker.html#t:Dekker",
      "description": {
        "fct-module": "Math.Root.Finder.Dekker",
        "fct-package": "roots",
        "fct-signature": "data",
        "fct-source": "src/Math-Root-Finder-Dekker.html#Dekker",
        "fct-type": "data",
        "title": "Dekker"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Root Finder Dekker",
        "module": "Math.Root.Finder.Dekker",
        "name": "Dekker",
        "normalized": "",
        "package": "roots",
        "partial": "Dekker",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder-Dekker.html#v:dekker",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003edekker f x1 x2 xacc\u003c/code\u003e:  attempt to find a root of a function known to \n lie between x1 and x2, using Dekker's method.  The root will be refined\n till its accuracy is +-xacc.  If convergence fails, returns the final\n state of the search.\n\u003c/p\u003e",
        "fct-module": "Math.Root.Finder.Dekker",
        "fct-package": "roots",
        "fct-signature": "(a -\u003e a) -\u003e a -\u003e a -\u003e a -\u003e Either (Dekker a a) a",
        "fct-source": "src/Math-Root-Finder-Dekker.html#dekker",
        "fct-type": "function",
        "title": "dekker"
      },
      "index": {
        "description": "dekker x1 x2 xacc attempt to find root of function known to lie between x1 and x2 using Dekker method The root will be refined till its accuracy is xacc If convergence fails returns the final state of the search",
        "hierarchy": "Math Root Finder Dekker",
        "module": "Math.Root.Finder.Dekker",
        "name": "dekker",
        "normalized": "(a-\u003ea)-\u003ea-\u003ea-\u003ea-\u003eEither(Dekker a a)a",
        "package": "roots",
        "partial": "",
        "signature": "(a-\u003ea)-\u003ea-\u003ea-\u003ea-\u003eEither(Dekker a a)a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder-FalsePosition.html#",
      "description": {
        "fct-module": "Math.Root.Finder.FalsePosition",
        "fct-package": "roots",
        "fct-signature": "module",
        "fct-source": "src/Math-Root-Finder-FalsePosition.html",
        "fct-type": "module",
        "title": "FalsePosition"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Root Finder FalsePosition",
        "module": "Math.Root.Finder.FalsePosition",
        "name": "FalsePosition",
        "normalized": "",
        "package": "roots",
        "partial": "False Position",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder-FalsePosition.html#t:FalsePosition",
      "description": {
        "fct-descr": "\u003cp\u003eIteratively refine a bracketing interval [x1, x2] of a root of f\n until total convergence (which may or may not ever be achieved) using \n the false-position method.\n\u003c/p\u003e",
        "fct-module": "Math.Root.Finder.FalsePosition",
        "fct-package": "roots",
        "fct-signature": "data",
        "fct-source": "src/Math-Root-Finder-FalsePosition.html#FalsePosition",
        "fct-type": "data",
        "title": "FalsePosition"
      },
      "index": {
        "description": "Iteratively refine bracketing interval x1 x2 of root of until total convergence which may or may not ever be achieved using the false-position method",
        "hierarchy": "Math Root Finder FalsePosition",
        "module": "Math.Root.Finder.FalsePosition",
        "name": "FalsePosition",
        "normalized": "",
        "package": "roots",
        "partial": "False Position",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder-FalsePosition.html#v:falsePosition",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003efalsePosition f x1 x2 xacc\u003c/code\u003e:  Using the false-position method, return a\n root of a function known to lie between x1 and x2.  The root is refined \n until its accuracy is += xacc.\n\u003c/p\u003e",
        "fct-module": "Math.Root.Finder.FalsePosition",
        "fct-package": "roots",
        "fct-signature": "(a -\u003e a) -\u003e a -\u003e a -\u003e a -\u003e Either (FalsePosition a a) a",
        "fct-source": "src/Math-Root-Finder-FalsePosition.html#falsePosition",
        "fct-type": "function",
        "title": "falsePosition"
      },
      "index": {
        "description": "falsePosition x1 x2 xacc Using the false-position method return root of function known to lie between x1 and x2 The root is refined until its accuracy is xacc",
        "hierarchy": "Math Root Finder FalsePosition",
        "module": "Math.Root.Finder.FalsePosition",
        "name": "falsePosition",
        "normalized": "(a-\u003ea)-\u003ea-\u003ea-\u003ea-\u003eEither(FalsePosition a a)a",
        "package": "roots",
        "partial": "Position",
        "signature": "(a-\u003ea)-\u003ea-\u003ea-\u003ea-\u003eEither(FalsePosition a a)a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder-InverseQuadratic.html#",
      "description": {
        "fct-module": "Math.Root.Finder.InverseQuadratic",
        "fct-package": "roots",
        "fct-signature": "module",
        "fct-source": "src/Math-Root-Finder-InverseQuadratic.html",
        "fct-type": "module",
        "title": "InverseQuadratic"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Root Finder InverseQuadratic",
        "module": "Math.Root.Finder.InverseQuadratic",
        "name": "InverseQuadratic",
        "normalized": "",
        "package": "roots",
        "partial": "Inverse Quadratic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder-InverseQuadratic.html#t:InverseQuadratic",
      "description": {
        "fct-module": "Math.Root.Finder.InverseQuadratic",
        "fct-package": "roots",
        "fct-signature": "data",
        "fct-source": "src/Math-Root-Finder-InverseQuadratic.html#InverseQuadratic",
        "fct-type": "data",
        "title": "InverseQuadratic"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Root Finder InverseQuadratic",
        "module": "Math.Root.Finder.InverseQuadratic",
        "name": "InverseQuadratic",
        "normalized": "",
        "package": "roots",
        "partial": "Inverse Quadratic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder-InverseQuadratic.html#v:inverseQuadratic",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003einverseQuadratic f x1 x2 xacc\u003c/code\u003e:  attempt to find a root of a function \n known to lie between x1 and x2, using the inverse quadratic interpolation \n method.  The root will be refined till its accuracy is +-xacc.  If\n convergence fails, returns the final state of the search.\n\u003c/p\u003e",
        "fct-module": "Math.Root.Finder.InverseQuadratic",
        "fct-package": "roots",
        "fct-signature": "(a -\u003e a) -\u003e a -\u003e a -\u003e a -\u003e Either (InverseQuadratic a a) a",
        "fct-source": "src/Math-Root-Finder-InverseQuadratic.html#inverseQuadratic",
        "fct-type": "function",
        "title": "inverseQuadratic"
      },
      "index": {
        "description": "inverseQuadratic x1 x2 xacc attempt to find root of function known to lie between x1 and x2 using the inverse quadratic interpolation method The root will be refined till its accuracy is xacc If convergence fails returns the final state of the search",
        "hierarchy": "Math Root Finder InverseQuadratic",
        "module": "Math.Root.Finder.InverseQuadratic",
        "name": "inverseQuadratic",
        "normalized": "(a-\u003ea)-\u003ea-\u003ea-\u003ea-\u003eEither(InverseQuadratic a a)a",
        "package": "roots",
        "partial": "Quadratic",
        "signature": "(a-\u003ea)-\u003ea-\u003ea-\u003ea-\u003eEither(InverseQuadratic a a)a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder-Newton.html#",
      "description": {
        "fct-module": "Math.Root.Finder.Newton",
        "fct-package": "roots",
        "fct-signature": "module",
        "fct-source": "src/Math-Root-Finder-Newton.html",
        "fct-type": "module",
        "title": "Newton"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Root Finder Newton",
        "module": "Math.Root.Finder.Newton",
        "name": "Newton",
        "normalized": "",
        "package": "roots",
        "partial": "Newton",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder-Newton.html#t:Newton",
      "description": {
        "fct-module": "Math.Root.Finder.Newton",
        "fct-package": "roots",
        "fct-signature": "data",
        "fct-source": "src/Math-Root-Finder-Newton.html#Newton",
        "fct-type": "data",
        "title": "Newton"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Root Finder Newton",
        "module": "Math.Root.Finder.Newton",
        "name": "Newton",
        "normalized": "",
        "package": "roots",
        "partial": "Newton",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder-Newton.html#v:newton",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003enewton f x1 x2 xacc\u003c/code\u003e:  using Newton's method, return a root of a\n function known to lie between x1 and x2.  The root is refined until its\n accuracy is += xacc.\n\u003c/p\u003e\u003cp\u003eThe function passed should return a pair containing the value of the\n function and its derivative, respectively.\n\u003c/p\u003e",
        "fct-module": "Math.Root.Finder.Newton",
        "fct-package": "roots",
        "fct-signature": "(a -\u003e (a, a)) -\u003e a -\u003e a -\u003e a -\u003e Either (Newton a (a, a)) a",
        "fct-source": "src/Math-Root-Finder-Newton.html#newton",
        "fct-type": "function",
        "title": "newton"
      },
      "index": {
        "description": "newton x1 x2 xacc using Newton method return root of function known to lie between x1 and x2 The root is refined until its accuracy is xacc The function passed should return pair containing the value of the function and its derivative respectively",
        "hierarchy": "Math Root Finder Newton",
        "module": "Math.Root.Finder.Newton",
        "name": "newton",
        "normalized": "(a-\u003e(a,a))-\u003ea-\u003ea-\u003ea-\u003eEither(Newton a(a,a))a",
        "package": "roots",
        "partial": "",
        "signature": "(a-\u003e(a,a))-\u003ea-\u003ea-\u003ea-\u003eEither(Newton a(a,a))a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder-Ridders.html#",
      "description": {
        "fct-module": "Math.Root.Finder.Ridders",
        "fct-package": "roots",
        "fct-signature": "module",
        "fct-source": "src/Math-Root-Finder-Ridders.html",
        "fct-type": "module",
        "title": "Ridders"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Root Finder Ridders",
        "module": "Math.Root.Finder.Ridders",
        "name": "Ridders",
        "normalized": "",
        "package": "roots",
        "partial": "Ridders",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder-Ridders.html#t:RiddersMethod",
      "description": {
        "fct-module": "Math.Root.Finder.Ridders",
        "fct-package": "roots",
        "fct-signature": "data",
        "fct-source": "src/Math-Root-Finder-Ridders.html#RiddersMethod",
        "fct-type": "data",
        "title": "RiddersMethod"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Root Finder Ridders",
        "module": "Math.Root.Finder.Ridders",
        "name": "RiddersMethod",
        "normalized": "",
        "package": "roots",
        "partial": "Ridders Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder-Ridders.html#v:ridders",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eridders f x1 x2 xacc\u003c/code\u003e:  attempt to find a root of a function known to \n lie between x1 and x2, using Ridders' method.  The root will be refined\n till its accuracy is +-xacc.  If convergence fails, returns the final\n state of the search.\n\u003c/p\u003e",
        "fct-module": "Math.Root.Finder.Ridders",
        "fct-package": "roots",
        "fct-signature": "(a -\u003e a) -\u003e a -\u003e a -\u003e a -\u003e Either (RiddersMethod a a) a",
        "fct-source": "src/Math-Root-Finder-Ridders.html#ridders",
        "fct-type": "function",
        "title": "ridders"
      },
      "index": {
        "description": "ridders x1 x2 xacc attempt to find root of function known to lie between x1 and x2 using Ridders method The root will be refined till its accuracy is xacc If convergence fails returns the final state of the search",
        "hierarchy": "Math Root Finder Ridders",
        "module": "Math.Root.Finder.Ridders",
        "name": "ridders",
        "normalized": "(a-\u003ea)-\u003ea-\u003ea-\u003ea-\u003eEither(RiddersMethod a a)a",
        "package": "roots",
        "partial": "",
        "signature": "(a-\u003ea)-\u003ea-\u003ea-\u003ea-\u003eEither(RiddersMethod a a)a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder-Secant.html#",
      "description": {
        "fct-module": "Math.Root.Finder.Secant",
        "fct-package": "roots",
        "fct-signature": "module",
        "fct-source": "src/Math-Root-Finder-Secant.html",
        "fct-type": "module",
        "title": "Secant"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Root Finder Secant",
        "module": "Math.Root.Finder.Secant",
        "name": "Secant",
        "normalized": "",
        "package": "roots",
        "partial": "Secant",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder-Secant.html#t:SecantMethod",
      "description": {
        "fct-descr": "\u003cp\u003eIteratively refine 2 estimates x1, x2 of a root of f until total \n convergence (which may or may not ever be achieved) using the\n secant method.\n\u003c/p\u003e",
        "fct-module": "Math.Root.Finder.Secant",
        "fct-package": "roots",
        "fct-signature": "data",
        "fct-source": "src/Math-Root-Finder-Secant.html#SecantMethod",
        "fct-type": "data",
        "title": "SecantMethod"
      },
      "index": {
        "description": "Iteratively refine estimates x1 x2 of root of until total convergence which may or may not ever be achieved using the secant method",
        "hierarchy": "Math Root Finder Secant",
        "module": "Math.Root.Finder.Secant",
        "name": "SecantMethod",
        "normalized": "",
        "package": "roots",
        "partial": "Secant Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder-Secant.html#v:secant",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esecant f x1 x2 xacc\u003c/code\u003e: Using the secant method, return the root of a\n function thought to lie between x1 and x2.  The root is refined until its\n accuracy is +-xacc.\n\u003c/p\u003e",
        "fct-module": "Math.Root.Finder.Secant",
        "fct-package": "roots",
        "fct-signature": "(a -\u003e a) -\u003e a -\u003e a -\u003e a -\u003e Either (SecantMethod a a) a",
        "fct-source": "src/Math-Root-Finder-Secant.html#secant",
        "fct-type": "function",
        "title": "secant"
      },
      "index": {
        "description": "secant x1 x2 xacc Using the secant method return the root of function thought to lie between x1 and x2 The root is refined until its accuracy is xacc",
        "hierarchy": "Math Root Finder Secant",
        "module": "Math.Root.Finder.Secant",
        "name": "secant",
        "normalized": "(a-\u003ea)-\u003ea-\u003ea-\u003ea-\u003eEither(SecantMethod a a)a",
        "package": "roots",
        "partial": "",
        "signature": "(a-\u003ea)-\u003ea-\u003ea-\u003ea-\u003eEither(SecantMethod a a)a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder.html#",
      "description": {
        "fct-module": "Math.Root.Finder",
        "fct-package": "roots",
        "fct-signature": "module",
        "fct-source": "src/Math-Root-Finder.html",
        "fct-type": "module",
        "title": "Finder"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Root Finder",
        "module": "Math.Root.Finder",
        "name": "Finder",
        "normalized": "",
        "package": "roots",
        "partial": "Finder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder.html#t:RootFinder",
      "description": {
        "fct-descr": "\u003cp\u003eGeneral interface for numerical root finders.\n\u003c/p\u003e",
        "fct-module": "Math.Root.Finder",
        "fct-package": "roots",
        "fct-signature": "class",
        "fct-source": "src/Math-Root-Finder.html#RootFinder",
        "fct-type": "class",
        "title": "RootFinder"
      },
      "index": {
        "description": "General interface for numerical root finders",
        "hierarchy": "Math Root Finder",
        "module": "Math.Root.Finder",
        "name": "RootFinder",
        "normalized": "",
        "package": "roots",
        "partial": "Root Finder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder.html#v:converged",
      "description": {
        "fct-descr": "\u003cp\u003eTest whether a root finding algorithm has converged to a given \n relative accuracy.\n\u003c/p\u003e",
        "fct-module": "Math.Root.Finder",
        "fct-package": "roots",
        "fct-signature": "a -\u003e r a b -\u003e Bool",
        "fct-source": "src/Math-Root-Finder.html#converged",
        "fct-type": "method",
        "title": "converged"
      },
      "index": {
        "description": "Test whether root finding algorithm has converged to given relative accuracy",
        "hierarchy": "Math Root Finder",
        "module": "Math.Root.Finder",
        "name": "converged",
        "normalized": "a-\u003eb a c-\u003eBool",
        "package": "roots",
        "partial": "",
        "signature": "a-\u003er a b-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder.html#v:defaultNSteps",
      "description": {
        "fct-descr": "\u003cp\u003eDefault number of steps after which root finding will be deemed \n to have failed.  Purely a convenience used to control the behavior\n of built-in functions such as \u003ccode\u003e\u003ca\u003efindRoot\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etraceRoot\u003c/a\u003e\u003c/code\u003e.  The\n default value is 250.\n\u003c/p\u003e",
        "fct-module": "Math.Root.Finder",
        "fct-package": "roots",
        "fct-signature": "Tagged (r a b) Int",
        "fct-source": "src/Math-Root-Finder.html#defaultNSteps",
        "fct-type": "method",
        "title": "defaultNSteps"
      },
      "index": {
        "description": "Default number of steps after which root finding will be deemed to have failed Purely convenience used to control the behavior of built-in functions such as findRoot and traceRoot The default value is",
        "hierarchy": "Math Root Finder",
        "module": "Math.Root.Finder",
        "name": "defaultNSteps",
        "normalized": "",
        "package": "roots",
        "partial": "NSteps",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder.html#v:eps",
      "description": {
        "fct-descr": "\u003cp\u003eA useful constant: \u003ccode\u003e\u003ca\u003eeps\u003c/a\u003e\u003c/code\u003e is (for most \u003ccode\u003e\u003ca\u003eRealFloat\u003c/a\u003e\u003c/code\u003e types) the smallest\n positive number such that \u003ccode\u003e1 + eps /= 1\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Root.Finder",
        "fct-package": "roots",
        "fct-signature": "a",
        "fct-source": "src/Math-Root-Finder.html#eps",
        "fct-type": "function",
        "title": "eps"
      },
      "index": {
        "description": "useful constant eps is for most RealFloat types the smallest positive number such that eps",
        "hierarchy": "Math Root Finder",
        "module": "Math.Root.Finder",
        "name": "eps",
        "normalized": "",
        "package": "roots",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder.html#v:estimateError",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the finder's current estimate of the upper bound of the \n distance from \u003ccode\u003eestimateRoot\u003c/code\u003e to an actual root in the function.\n\u003c/p\u003e\u003cp\u003eGenerally, \u003ccode\u003eestimateRoot r\u003c/code\u003e +- \u003ccode\u003eestimateError r\u003c/code\u003e should bracket\n a root of the function.\n\u003c/p\u003e",
        "fct-module": "Math.Root.Finder",
        "fct-package": "roots",
        "fct-signature": "r a b -\u003e a",
        "fct-source": "src/Math-Root-Finder.html#estimateError",
        "fct-type": "method",
        "title": "estimateError"
      },
      "index": {
        "description": "Extract the finder current estimate of the upper bound of the distance from estimateRoot to an actual root in the function Generally estimateRoot estimateError should bracket root of the function",
        "hierarchy": "Math Root Finder",
        "module": "Math.Root.Finder",
        "name": "estimateError",
        "normalized": "a b c-\u003eb",
        "package": "roots",
        "partial": "Error",
        "signature": "r a b-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder.html#v:estimateRoot",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the finder's current estimate of the position of a root.\n\u003c/p\u003e",
        "fct-module": "Math.Root.Finder",
        "fct-package": "roots",
        "fct-signature": "r a b -\u003e a",
        "fct-source": "src/Math-Root-Finder.html#estimateRoot",
        "fct-type": "method",
        "title": "estimateRoot"
      },
      "index": {
        "description": "Extract the finder current estimate of the position of root",
        "hierarchy": "Math Root Finder",
        "module": "Math.Root.Finder",
        "name": "estimateRoot",
        "normalized": "a b c-\u003eb",
        "package": "roots",
        "partial": "Root",
        "signature": "r a b-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder.html#v:findRoot",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003efindRoot f x0 x1 eps\u003c/code\u003e initializes a root finder and repeatedly\n steps it.  When the algorithm converges to \u003ccode\u003eeps\u003c/code\u003e or the \u003ccode\u003e\u003ca\u003edefaultNSteps\u003c/a\u003e\u003c/code\u003e\n limit is exceeded, the current best guess is returned, with the \u003ccode\u003eRight\u003c/code\u003e \n constructor indicating successful convergence or the \u003ccode\u003eLeft\u003c/code\u003e constructor \n indicating failure to converge.\n\u003c/p\u003e",
        "fct-module": "Math.Root.Finder",
        "fct-package": "roots",
        "fct-signature": "(a -\u003e b) -\u003e a -\u003e a -\u003e a -\u003e Either (r a b) (r a b)",
        "fct-source": "src/Math-Root-Finder.html#findRoot",
        "fct-type": "function",
        "title": "findRoot"
      },
      "index": {
        "description": "findRoot x0 x1 eps initializes root finder and repeatedly steps it When the algorithm converges to eps or the defaultNSteps limit is exceeded the current best guess is returned with the Right constructor indicating successful convergence or the Left constructor indicating failure to converge",
        "hierarchy": "Math Root Finder",
        "module": "Math.Root.Finder",
        "name": "findRoot",
        "normalized": "(a-\u003eb)-\u003ea-\u003ea-\u003ea-\u003eEither(c a b)(c a b)",
        "package": "roots",
        "partial": "Root",
        "signature": "(a-\u003eb)-\u003ea-\u003ea-\u003ea-\u003eEither(r a b)(r a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder.html#v:findRootN",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efindRoot\u003c/a\u003e\u003c/code\u003e but with a specified limit on the number of steps (rather\n than using \u003ccode\u003e\u003ca\u003edefaultNSteps\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Math.Root.Finder",
        "fct-package": "roots",
        "fct-signature": "Int -\u003e (a -\u003e b) -\u003e a -\u003e a -\u003e a -\u003e Either (r a b) (r a b)",
        "fct-source": "src/Math-Root-Finder.html#findRootN",
        "fct-type": "function",
        "title": "findRootN"
      },
      "index": {
        "description": "Like findRoot but with specified limit on the number of steps rather than using defaultNSteps",
        "hierarchy": "Math Root Finder",
        "module": "Math.Root.Finder",
        "name": "findRootN",
        "normalized": "Int-\u003e(a-\u003eb)-\u003ea-\u003ea-\u003ea-\u003eEither(c a b)(c a b)",
        "package": "roots",
        "partial": "Root",
        "signature": "Int-\u003e(a-\u003eb)-\u003ea-\u003ea-\u003ea-\u003eEither(r a b)(r a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder.html#v:getDefaultNSteps",
      "description": {
        "fct-descr": "\u003cp\u003eConvenience function to access \u003ccode\u003e\u003ca\u003edefaultNSteps\u003c/a\u003e\u003c/code\u003e for a root finder, \n which requires a little bit of type-gymnastics.\n\u003c/p\u003e\u003cp\u003eThis function does not evaluate its argument.\n\u003c/p\u003e",
        "fct-module": "Math.Root.Finder",
        "fct-package": "roots",
        "fct-signature": "r a b -\u003e Int",
        "fct-source": "src/Math-Root-Finder.html#getDefaultNSteps",
        "fct-type": "function",
        "title": "getDefaultNSteps"
      },
      "index": {
        "description": "Convenience function to access defaultNSteps for root finder which requires little bit of type-gymnastics This function does not evaluate its argument",
        "hierarchy": "Math Root Finder",
        "module": "Math.Root.Finder",
        "name": "getDefaultNSteps",
        "normalized": "a b c-\u003eInt",
        "package": "roots",
        "partial": "Default NSteps",
        "signature": "r a b-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder.html#v:initRootFinder",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003einitRootFinder f x0 x1\u003c/code\u003e: Initialize a root finder for the given\n function with the initial bracketing interval (x0,x1).\n\u003c/p\u003e",
        "fct-module": "Math.Root.Finder",
        "fct-package": "roots",
        "fct-signature": "(a -\u003e b) -\u003e a -\u003e a -\u003e r a b",
        "fct-source": "src/Math-Root-Finder.html#initRootFinder",
        "fct-type": "method",
        "title": "initRootFinder"
      },
      "index": {
        "description": "initRootFinder x0 x1 Initialize root finder for the given function with the initial bracketing interval x0 x1",
        "hierarchy": "Math Root Finder",
        "module": "Math.Root.Finder",
        "name": "initRootFinder",
        "normalized": "(a-\u003eb)-\u003ea-\u003ea-\u003ec a b",
        "package": "roots",
        "partial": "Root Finder",
        "signature": "(a-\u003eb)-\u003ea-\u003ea-\u003er a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder.html#v:realFloatDefaultNSteps",
      "description": {
        "fct-descr": "\u003cp\u003eFor \u003ccode\u003e\u003ca\u003eRealFloat\u003c/a\u003e\u003c/code\u003e types, computes a suitable default step limit based\n on the precision of the type and a margin of error.\n\u003c/p\u003e",
        "fct-module": "Math.Root.Finder",
        "fct-package": "roots",
        "fct-signature": "Float -\u003e Tagged (r a b) Int",
        "fct-source": "src/Math-Root-Finder.html#realFloatDefaultNSteps",
        "fct-type": "function",
        "title": "realFloatDefaultNSteps"
      },
      "index": {
        "description": "For RealFloat types computes suitable default step limit based on the precision of the type and margin of error",
        "hierarchy": "Math Root Finder",
        "module": "Math.Root.Finder",
        "name": "realFloatDefaultNSteps",
        "normalized": "Float-\u003eTagged(a b c)Int",
        "package": "roots",
        "partial": "Float Default NSteps",
        "signature": "Float-\u003eTagged(r a b)Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder.html#v:runRootFinder",
      "description": {
        "fct-descr": "\u003cp\u003eGeneral-purpose driver for stepping a root finder.  Given a \"control\"\n function, the function being searched, and an initial \u003ccode\u003e\u003ca\u003eRootFinder\u003c/a\u003e\u003c/code\u003e state,\n \u003ccode\u003erunRootFinder step f state\u003c/code\u003e repeatedly steps the root-finder and passes\n each intermediate state, along with a count of steps taken, to \u003ccode\u003estep\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003estep\u003c/code\u003e funtion will be called with the following arguments:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003e n :: \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e \u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e \n  The number of steps taken thus far\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e currentState :: r a b \u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n  The current state of the root finder\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e continue :: c \u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n  The result of the \"rest\" of the iteration\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eFor example, the following function simply iterates a root finder\n and returns every intermediate state (similar to \u003ccode\u003e\u003ca\u003etraceRoot\u003c/a\u003e\u003c/code\u003e):\n\u003c/p\u003e\u003cpre\u003e iterateRoot :: RootFinder r a b =\u003e (a -\u003e b) -\u003e a -\u003e a -\u003e [r a b]\n iterateRoot f a b = runRootFinder (const (:)) f (initRootFinder f a b)\n\u003c/pre\u003e\u003cp\u003eAnd the following function simply iterates the root finder to \n convergence or throws an error after a given number of steps:\n\u003c/p\u003e\u003cpre\u003e solve :: (RootFinder r a b, RealFloat a)\n       =\u003e Int -\u003e (a -\u003e b) -\u003e a -\u003e a -\u003e r a b\n solve maxN f a b = runRootFinder step f (initRootFinder f a b)\n    where\n        step n x continue\n            | converged eps x   = x\n            | n \u003e maxN          = error \"solve: step limit exceeded\"\n            | otherwise         = continue\n\u003c/pre\u003e",
        "fct-module": "Math.Root.Finder",
        "fct-package": "roots",
        "fct-signature": "(Int -\u003e r a b -\u003e c -\u003e c) -\u003e (a -\u003e b) -\u003e r a b -\u003e c",
        "fct-source": "src/Math-Root-Finder.html#runRootFinder",
        "fct-type": "function",
        "title": "runRootFinder"
      },
      "index": {
        "description": "General-purpose driver for stepping root finder Given control function the function being searched and an initial RootFinder state runRootFinder step state repeatedly steps the root-finder and passes each intermediate state along with count of steps taken to step The step funtion will be called with the following arguments Int The number of steps taken thus far currentState The current state of the root finder continue The result of the rest of the iteration For example the following function simply iterates root finder and returns every intermediate state similar to traceRoot iterateRoot RootFinder iterateRoot runRootFinder const initRootFinder And the following function simply iterates the root finder to convergence or throws an error after given number of steps solve RootFinder RealFloat Int solve maxN runRootFinder step initRootFinder where step continue converged eps maxN error solve step limit exceeded otherwise continue",
        "hierarchy": "Math Root Finder",
        "module": "Math.Root.Finder",
        "name": "runRootFinder",
        "normalized": "(Int-\u003ea b c-\u003ed-\u003ed)-\u003e(b-\u003ec)-\u003ea b c-\u003ed",
        "package": "roots",
        "partial": "Root Finder",
        "signature": "(Int-\u003er a b-\u003ec-\u003ec)-\u003e(a-\u003eb)-\u003er a b-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder.html#v:stepRootFinder",
      "description": {
        "fct-descr": "\u003cp\u003eStep a root finder for the given function (which should generally \n be the same one passed to \u003ccode\u003einitRootFinder\u003c/code\u003e), refining the finder's\n estimate of the location of a root.\n\u003c/p\u003e",
        "fct-module": "Math.Root.Finder",
        "fct-package": "roots",
        "fct-signature": "(a -\u003e b) -\u003e r a b -\u003e r a b",
        "fct-source": "src/Math-Root-Finder.html#stepRootFinder",
        "fct-type": "method",
        "title": "stepRootFinder"
      },
      "index": {
        "description": "Step root finder for the given function which should generally be the same one passed to initRootFinder refining the finder estimate of the location of root",
        "hierarchy": "Math Root Finder",
        "module": "Math.Root.Finder",
        "name": "stepRootFinder",
        "normalized": "(a-\u003eb)-\u003ec a b-\u003ec a b",
        "package": "roots",
        "partial": "Root Finder",
        "signature": "(a-\u003eb)-\u003er a b-\u003er a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder.html#v:traceRoot",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003etraceRoot f x0 x1 mbEps\u003c/code\u003e initializes a root finder and repeatedly\n steps it, returning each step of the process in a list.  No step limit\n is imposed.\n\u003c/p\u003e\u003cp\u003eTermination criteria depends on \u003ccode\u003embEps\u003c/code\u003e; if it is of the form \u003ccode\u003eJust eps\u003c/code\u003e \n then convergence to \u003ccode\u003eeps\u003c/code\u003e is used (using the \u003ccode\u003econverged\u003c/code\u003e method of the\n root finder).  Otherwise, the trace is not terminated until subsequent\n states are equal (according to \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e).  This is a stricter condition than\n convergence to 0; subsequent states may have converged to zero but as long\n as any internal state changes the trace will continue.\n\u003c/p\u003e",
        "fct-module": "Math.Root.Finder",
        "fct-package": "roots",
        "fct-signature": "(a -\u003e b) -\u003e a -\u003e a -\u003e Maybe a -\u003e [r a b]",
        "fct-source": "src/Math-Root-Finder.html#traceRoot",
        "fct-type": "function",
        "title": "traceRoot"
      },
      "index": {
        "description": "traceRoot x0 x1 mbEps initializes root finder and repeatedly steps it returning each step of the process in list No step limit is imposed Termination criteria depends on mbEps if it is of the form Just eps then convergence to eps is used using the converged method of the root finder Otherwise the trace is not terminated until subsequent states are equal according to This is stricter condition than convergence to subsequent states may have converged to zero but as long as any internal state changes the trace will continue",
        "hierarchy": "Math Root Finder",
        "module": "Math.Root.Finder",
        "name": "traceRoot",
        "normalized": "(a-\u003eb)-\u003ea-\u003ea-\u003eMaybe a-\u003e[c a b]",
        "package": "roots",
        "partial": "Root",
        "signature": "(a-\u003eb)-\u003ea-\u003ea-\u003eMaybe a-\u003e[r a b]"
      }
    }
  }
]