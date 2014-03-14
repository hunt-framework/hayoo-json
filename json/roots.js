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
        "word": "roots"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Root.Bracket",
          "name": "Bracket",
          "package": "roots",
          "source": "src/Math-Root-Bracket.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Math Root Bracket",
          "module": "Math.Root.Bracket",
          "name": "Bracket",
          "package": "roots",
          "partial": "Bracket",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Bracket.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ebracket f x1 x2\u003c/code\u003e: Given a function and an initial guessed range x1 to x2,\n this function expands the range geometrically until a root is bracketed by \n the returned values, returning a list of the successively expanded ranges.  \n The list will be finite if and only if the sequence yields a bracketing pair.\n\u003c/p\u003e",
          "module": "Math.Root.Bracket",
          "name": "bracket",
          "package": "roots",
          "signature": "(a -\u003e b) -\u003e a -\u003e a -\u003e [(a, a)]",
          "source": "src/Math-Root-Bracket.html#bracket",
          "type": "function"
        },
        "index": {
          "description": "bracket x1 x2 Given function and an initial guessed range x1 to x2 this function expands the range geometrically until root is bracketed by the returned values returning list of the successively expanded ranges The list will be finite if and only if the sequence yields bracketing pair",
          "hierarchy": "Math Root Bracket",
          "module": "Math.Root.Bracket",
          "name": "bracket",
          "normalized": "(a-\u003eb)-\u003ea-\u003ea-\u003e[(a,a)]",
          "package": "roots",
          "signature": "(a-\u003eb)-\u003ea-\u003ea-\u003e[(a,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Bracket.html#v:bracket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate that returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e whenever the given pair of points brackets\n a root of the given function.\n\u003c/p\u003e",
          "module": "Math.Root.Bracket",
          "name": "brackets",
          "package": "roots",
          "signature": "(a -\u003e b) -\u003e (a, a) -\u003e Bool",
          "source": "src/Math-Root-Bracket.html#brackets",
          "type": "function"
        },
        "index": {
          "description": "Predicate that returns True whenever the given pair of points brackets root of the given function",
          "hierarchy": "Math Root Bracket",
          "module": "Math.Root.Bracket",
          "name": "brackets",
          "normalized": "(a-\u003eb)-\u003e(a,a)-\u003eBool",
          "package": "roots",
          "signature": "(a-\u003eb)-\u003e(a,a)-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Bracket.html#v:brackets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esubdivideAndBracket f x1 x2 n\u003c/code\u003e: Given a function defined on the interval\n [x1,x2], subdivide the interval into n equally spaced segments and search \n for zero crossings of the function.  The returned list will contain all \n bracketing pairs found.\n\u003c/p\u003e",
          "module": "Math.Root.Bracket",
          "name": "subdivideAndBracket",
          "package": "roots",
          "signature": "(a -\u003e b) -\u003e a -\u003e a -\u003e c -\u003e [(a, a)]",
          "source": "src/Math-Root-Bracket.html#subdivideAndBracket",
          "type": "function"
        },
        "index": {
          "description": "subdivideAndBracket x1 x2 Given function defined on the interval x1 x2 subdivide the interval into equally spaced segments and search for zero crossings of the function The returned list will contain all bracketing pairs found",
          "hierarchy": "Math Root Bracket",
          "module": "Math.Root.Bracket",
          "name": "subdivideAndBracket",
          "normalized": "(a-\u003eb)-\u003ea-\u003ea-\u003ec-\u003e[(a,a)]",
          "package": "roots",
          "partial": "And Bracket",
          "signature": "(a-\u003eb)-\u003ea-\u003ea-\u003ec-\u003e[(a,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Bracket.html#v:subdivideAndBracket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Root.Finder.Bisection",
          "name": "Bisection",
          "package": "roots",
          "source": "src/Math-Root-Finder-Bisection.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Math Root Finder Bisection",
          "module": "Math.Root.Finder.Bisection",
          "name": "Bisection",
          "package": "roots",
          "partial": "Bisection",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder-Bisection.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBisect an interval in search of a root.  At all times, \u003ccode\u003ef (estimateRoot _)\u003c/code\u003e\n is less than or equal to 0 and \u003ccode\u003ef (estimateRoot _ + estimateError _)\u003c/code\u003e is \n greater than or equal to 0.\n\u003c/p\u003e",
          "module": "Math.Root.Finder.Bisection",
          "name": "Bisect",
          "package": "roots",
          "source": "src/Math-Root-Finder-Bisection.html#Bisect",
          "type": "data"
        },
        "index": {
          "description": "Bisect an interval in search of root At all times estimateRoot is less than or equal to and estimateRoot estimateError is greater than or equal to",
          "hierarchy": "Math Root Finder Bisection",
          "module": "Math.Root.Finder.Bisection",
          "name": "Bisect",
          "package": "roots",
          "partial": "Bisect",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder-Bisection.html#t:Bisect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsing bisection, return a root of a function known to lie between x1 and x2.\n The root will be refined till its accuracy is +-xacc.  If convergence fails,\n returns the final state of the search.\n\u003c/p\u003e",
          "module": "Math.Root.Finder.Bisection",
          "name": "bisection",
          "package": "roots",
          "signature": "(a -\u003e b) -\u003e a -\u003e a -\u003e a -\u003e Either (Bisect a b) a",
          "source": "src/Math-Root-Finder-Bisection.html#bisection",
          "type": "function"
        },
        "index": {
          "description": "Using bisection return root of function known to lie between x1 and x2 The root will be refined till its accuracy is xacc If convergence fails returns the final state of the search",
          "hierarchy": "Math Root Finder Bisection",
          "module": "Math.Root.Finder.Bisection",
          "name": "bisection",
          "normalized": "(a-\u003eb)-\u003ea-\u003ea-\u003ea-\u003eEither(Bisect a b)a",
          "package": "roots",
          "signature": "(a-\u003eb)-\u003ea-\u003ea-\u003ea-\u003eEither(Bisect a b)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder-Bisection.html#v:bisection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Root.Finder.Brent",
          "name": "Brent",
          "package": "roots",
          "source": "src/Math-Root-Finder-Brent.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Math Root Finder Brent",
          "module": "Math.Root.Finder.Brent",
          "name": "Brent",
          "package": "roots",
          "partial": "Brent",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder-Brent.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWorking state for Brent's root-finding method.\n\u003c/p\u003e",
          "module": "Math.Root.Finder.Brent",
          "name": "Brent",
          "package": "roots",
          "source": "src/Math-Root-Finder-Brent.html#Brent",
          "type": "data"
        },
        "index": {
          "description": "Working state for Brent root-finding method",
          "hierarchy": "Math Root Finder Brent",
          "module": "Math.Root.Finder.Brent",
          "name": "Brent",
          "package": "roots",
          "partial": "Brent",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder-Brent.html#t:Brent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ebrent f x1 x2 xacc\u003c/code\u003e:  attempt to find a root of a function known to \n lie between x1 and x2, using Brent's method.  The root will be refined\n till its accuracy is +-xacc.  If convergence fails, returns the final\n state of the search.\n\u003c/p\u003e",
          "module": "Math.Root.Finder.Brent",
          "name": "brent",
          "package": "roots",
          "signature": "(a -\u003e a) -\u003e a -\u003e a -\u003e a -\u003e Either (Brent a a) a",
          "source": "src/Math-Root-Finder-Brent.html#brent",
          "type": "function"
        },
        "index": {
          "description": "brent x1 x2 xacc attempt to find root of function known to lie between x1 and x2 using Brent method The root will be refined till its accuracy is xacc If convergence fails returns the final state of the search",
          "hierarchy": "Math Root Finder Brent",
          "module": "Math.Root.Finder.Brent",
          "name": "brent",
          "normalized": "(a-\u003ea)-\u003ea-\u003ea-\u003ea-\u003eEither(Brent a a)a",
          "package": "roots",
          "signature": "(a-\u003ea)-\u003ea-\u003ea-\u003ea-\u003eEither(Brent a a)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder-Brent.html#v:brent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Root.Finder.Dekker",
          "name": "Dekker",
          "package": "roots",
          "source": "src/Math-Root-Finder-Dekker.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Math Root Finder Dekker",
          "module": "Math.Root.Finder.Dekker",
          "name": "Dekker",
          "package": "roots",
          "partial": "Dekker",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder-Dekker.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Root.Finder.Dekker",
          "name": "Dekker",
          "package": "roots",
          "source": "src/Math-Root-Finder-Dekker.html#Dekker",
          "type": "data"
        },
        "index": {
          "hierarchy": "Math Root Finder Dekker",
          "module": "Math.Root.Finder.Dekker",
          "name": "Dekker",
          "package": "roots",
          "partial": "Dekker",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder-Dekker.html#t:Dekker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003edekker f x1 x2 xacc\u003c/code\u003e:  attempt to find a root of a function known to \n lie between x1 and x2, using Dekker's method.  The root will be refined\n till its accuracy is +-xacc.  If convergence fails, returns the final\n state of the search.\n\u003c/p\u003e",
          "module": "Math.Root.Finder.Dekker",
          "name": "dekker",
          "package": "roots",
          "signature": "(a -\u003e a) -\u003e a -\u003e a -\u003e a -\u003e Either (Dekker a a) a",
          "source": "src/Math-Root-Finder-Dekker.html#dekker",
          "type": "function"
        },
        "index": {
          "description": "dekker x1 x2 xacc attempt to find root of function known to lie between x1 and x2 using Dekker method The root will be refined till its accuracy is xacc If convergence fails returns the final state of the search",
          "hierarchy": "Math Root Finder Dekker",
          "module": "Math.Root.Finder.Dekker",
          "name": "dekker",
          "normalized": "(a-\u003ea)-\u003ea-\u003ea-\u003ea-\u003eEither(Dekker a a)a",
          "package": "roots",
          "signature": "(a-\u003ea)-\u003ea-\u003ea-\u003ea-\u003eEither(Dekker a a)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder-Dekker.html#v:dekker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Root.Finder.FalsePosition",
          "name": "FalsePosition",
          "package": "roots",
          "source": "src/Math-Root-Finder-FalsePosition.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Math Root Finder FalsePosition",
          "module": "Math.Root.Finder.FalsePosition",
          "name": "FalsePosition",
          "package": "roots",
          "partial": "False Position",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder-FalsePosition.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIteratively refine a bracketing interval [x1, x2] of a root of f\n until total convergence (which may or may not ever be achieved) using \n the false-position method.\n\u003c/p\u003e",
          "module": "Math.Root.Finder.FalsePosition",
          "name": "FalsePosition",
          "package": "roots",
          "source": "src/Math-Root-Finder-FalsePosition.html#FalsePosition",
          "type": "data"
        },
        "index": {
          "description": "Iteratively refine bracketing interval x1 x2 of root of until total convergence which may or may not ever be achieved using the false-position method",
          "hierarchy": "Math Root Finder FalsePosition",
          "module": "Math.Root.Finder.FalsePosition",
          "name": "FalsePosition",
          "package": "roots",
          "partial": "False Position",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder-FalsePosition.html#t:FalsePosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003efalsePosition f x1 x2 xacc\u003c/code\u003e:  Using the false-position method, return a\n root of a function known to lie between x1 and x2.  The root is refined \n until its accuracy is += xacc.\n\u003c/p\u003e",
          "module": "Math.Root.Finder.FalsePosition",
          "name": "falsePosition",
          "package": "roots",
          "signature": "(a -\u003e a) -\u003e a -\u003e a -\u003e a -\u003e Either (FalsePosition a a) a",
          "source": "src/Math-Root-Finder-FalsePosition.html#falsePosition",
          "type": "function"
        },
        "index": {
          "description": "falsePosition x1 x2 xacc Using the false-position method return root of function known to lie between x1 and x2 The root is refined until its accuracy is xacc",
          "hierarchy": "Math Root Finder FalsePosition",
          "module": "Math.Root.Finder.FalsePosition",
          "name": "falsePosition",
          "normalized": "(a-\u003ea)-\u003ea-\u003ea-\u003ea-\u003eEither(FalsePosition a a)a",
          "package": "roots",
          "partial": "Position",
          "signature": "(a-\u003ea)-\u003ea-\u003ea-\u003ea-\u003eEither(FalsePosition a a)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder-FalsePosition.html#v:falsePosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Root.Finder.InverseQuadratic",
          "name": "InverseQuadratic",
          "package": "roots",
          "source": "src/Math-Root-Finder-InverseQuadratic.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Math Root Finder InverseQuadratic",
          "module": "Math.Root.Finder.InverseQuadratic",
          "name": "InverseQuadratic",
          "package": "roots",
          "partial": "Inverse Quadratic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder-InverseQuadratic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Root.Finder.InverseQuadratic",
          "name": "InverseQuadratic",
          "package": "roots",
          "source": "src/Math-Root-Finder-InverseQuadratic.html#InverseQuadratic",
          "type": "data"
        },
        "index": {
          "hierarchy": "Math Root Finder InverseQuadratic",
          "module": "Math.Root.Finder.InverseQuadratic",
          "name": "InverseQuadratic",
          "package": "roots",
          "partial": "Inverse Quadratic",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder-InverseQuadratic.html#t:InverseQuadratic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003einverseQuadratic f x1 x2 xacc\u003c/code\u003e:  attempt to find a root of a function \n known to lie between x1 and x2, using the inverse quadratic interpolation \n method.  The root will be refined till its accuracy is +-xacc.  If\n convergence fails, returns the final state of the search.\n\u003c/p\u003e",
          "module": "Math.Root.Finder.InverseQuadratic",
          "name": "inverseQuadratic",
          "package": "roots",
          "signature": "(a -\u003e a) -\u003e a -\u003e a -\u003e a -\u003e Either (InverseQuadratic a a) a",
          "source": "src/Math-Root-Finder-InverseQuadratic.html#inverseQuadratic",
          "type": "function"
        },
        "index": {
          "description": "inverseQuadratic x1 x2 xacc attempt to find root of function known to lie between x1 and x2 using the inverse quadratic interpolation method The root will be refined till its accuracy is xacc If convergence fails returns the final state of the search",
          "hierarchy": "Math Root Finder InverseQuadratic",
          "module": "Math.Root.Finder.InverseQuadratic",
          "name": "inverseQuadratic",
          "normalized": "(a-\u003ea)-\u003ea-\u003ea-\u003ea-\u003eEither(InverseQuadratic a a)a",
          "package": "roots",
          "partial": "Quadratic",
          "signature": "(a-\u003ea)-\u003ea-\u003ea-\u003ea-\u003eEither(InverseQuadratic a a)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder-InverseQuadratic.html#v:inverseQuadratic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Root.Finder.Newton",
          "name": "Newton",
          "package": "roots",
          "source": "src/Math-Root-Finder-Newton.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Math Root Finder Newton",
          "module": "Math.Root.Finder.Newton",
          "name": "Newton",
          "package": "roots",
          "partial": "Newton",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder-Newton.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Root.Finder.Newton",
          "name": "Newton",
          "package": "roots",
          "source": "src/Math-Root-Finder-Newton.html#Newton",
          "type": "data"
        },
        "index": {
          "hierarchy": "Math Root Finder Newton",
          "module": "Math.Root.Finder.Newton",
          "name": "Newton",
          "package": "roots",
          "partial": "Newton",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder-Newton.html#t:Newton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003enewton f x1 x2 xacc\u003c/code\u003e:  using Newton's method, return a root of a\n function known to lie between x1 and x2.  The root is refined until its\n accuracy is += xacc.\n\u003c/p\u003e\u003cp\u003eThe function passed should return a pair containing the value of the\n function and its derivative, respectively.\n\u003c/p\u003e",
          "module": "Math.Root.Finder.Newton",
          "name": "newton",
          "package": "roots",
          "signature": "(a -\u003e (a, a)) -\u003e a -\u003e a -\u003e a -\u003e Either (Newton a (a, a)) a",
          "source": "src/Math-Root-Finder-Newton.html#newton",
          "type": "function"
        },
        "index": {
          "description": "newton x1 x2 xacc using Newton method return root of function known to lie between x1 and x2 The root is refined until its accuracy is xacc The function passed should return pair containing the value of the function and its derivative respectively",
          "hierarchy": "Math Root Finder Newton",
          "module": "Math.Root.Finder.Newton",
          "name": "newton",
          "normalized": "(a-\u003e(a,a))-\u003ea-\u003ea-\u003ea-\u003eEither(Newton a(a,a))a",
          "package": "roots",
          "signature": "(a-\u003e(a,a))-\u003ea-\u003ea-\u003ea-\u003eEither(Newton a(a,a))a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder-Newton.html#v:newton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Root.Finder.Ridders",
          "name": "Ridders",
          "package": "roots",
          "source": "src/Math-Root-Finder-Ridders.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Math Root Finder Ridders",
          "module": "Math.Root.Finder.Ridders",
          "name": "Ridders",
          "package": "roots",
          "partial": "Ridders",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder-Ridders.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Root.Finder.Ridders",
          "name": "RiddersMethod",
          "package": "roots",
          "source": "src/Math-Root-Finder-Ridders.html#RiddersMethod",
          "type": "data"
        },
        "index": {
          "hierarchy": "Math Root Finder Ridders",
          "module": "Math.Root.Finder.Ridders",
          "name": "RiddersMethod",
          "package": "roots",
          "partial": "Ridders Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder-Ridders.html#t:RiddersMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eridders f x1 x2 xacc\u003c/code\u003e:  attempt to find a root of a function known to \n lie between x1 and x2, using Ridders' method.  The root will be refined\n till its accuracy is +-xacc.  If convergence fails, returns the final\n state of the search.\n\u003c/p\u003e",
          "module": "Math.Root.Finder.Ridders",
          "name": "ridders",
          "package": "roots",
          "signature": "(a -\u003e a) -\u003e a -\u003e a -\u003e a -\u003e Either (RiddersMethod a a) a",
          "source": "src/Math-Root-Finder-Ridders.html#ridders",
          "type": "function"
        },
        "index": {
          "description": "ridders x1 x2 xacc attempt to find root of function known to lie between x1 and x2 using Ridders method The root will be refined till its accuracy is xacc If convergence fails returns the final state of the search",
          "hierarchy": "Math Root Finder Ridders",
          "module": "Math.Root.Finder.Ridders",
          "name": "ridders",
          "normalized": "(a-\u003ea)-\u003ea-\u003ea-\u003ea-\u003eEither(RiddersMethod a a)a",
          "package": "roots",
          "signature": "(a-\u003ea)-\u003ea-\u003ea-\u003ea-\u003eEither(RiddersMethod a a)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder-Ridders.html#v:ridders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Root.Finder.Secant",
          "name": "Secant",
          "package": "roots",
          "source": "src/Math-Root-Finder-Secant.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Math Root Finder Secant",
          "module": "Math.Root.Finder.Secant",
          "name": "Secant",
          "package": "roots",
          "partial": "Secant",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder-Secant.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIteratively refine 2 estimates x1, x2 of a root of f until total \n convergence (which may or may not ever be achieved) using the\n secant method.\n\u003c/p\u003e",
          "module": "Math.Root.Finder.Secant",
          "name": "SecantMethod",
          "package": "roots",
          "source": "src/Math-Root-Finder-Secant.html#SecantMethod",
          "type": "data"
        },
        "index": {
          "description": "Iteratively refine estimates x1 x2 of root of until total convergence which may or may not ever be achieved using the secant method",
          "hierarchy": "Math Root Finder Secant",
          "module": "Math.Root.Finder.Secant",
          "name": "SecantMethod",
          "package": "roots",
          "partial": "Secant Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder-Secant.html#t:SecantMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esecant f x1 x2 xacc\u003c/code\u003e: Using the secant method, return the root of a\n function thought to lie between x1 and x2.  The root is refined until its\n accuracy is +-xacc.\n\u003c/p\u003e",
          "module": "Math.Root.Finder.Secant",
          "name": "secant",
          "package": "roots",
          "signature": "(a -\u003e a) -\u003e a -\u003e a -\u003e a -\u003e Either (SecantMethod a a) a",
          "source": "src/Math-Root-Finder-Secant.html#secant",
          "type": "function"
        },
        "index": {
          "description": "secant x1 x2 xacc Using the secant method return the root of function thought to lie between x1 and x2 The root is refined until its accuracy is xacc",
          "hierarchy": "Math Root Finder Secant",
          "module": "Math.Root.Finder.Secant",
          "name": "secant",
          "normalized": "(a-\u003ea)-\u003ea-\u003ea-\u003ea-\u003eEither(SecantMethod a a)a",
          "package": "roots",
          "signature": "(a-\u003ea)-\u003ea-\u003ea-\u003ea-\u003eEither(SecantMethod a a)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder-Secant.html#v:secant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Root.Finder",
          "name": "Finder",
          "package": "roots",
          "source": "src/Math-Root-Finder.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Math Root Finder",
          "module": "Math.Root.Finder",
          "name": "Finder",
          "package": "roots",
          "partial": "Finder",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneral interface for numerical root finders.\n\u003c/p\u003e",
          "module": "Math.Root.Finder",
          "name": "RootFinder",
          "package": "roots",
          "source": "src/Math-Root-Finder.html#RootFinder",
          "type": "class"
        },
        "index": {
          "description": "General interface for numerical root finders",
          "hierarchy": "Math Root Finder",
          "module": "Math.Root.Finder",
          "name": "RootFinder",
          "package": "roots",
          "partial": "Root Finder",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder.html#t:RootFinder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether a root finding algorithm has converged to a given \n relative accuracy.\n\u003c/p\u003e",
          "module": "Math.Root.Finder",
          "name": "converged",
          "package": "roots",
          "signature": "a -\u003e r a b -\u003e Bool",
          "source": "src/Math-Root-Finder.html#converged",
          "type": "method"
        },
        "index": {
          "description": "Test whether root finding algorithm has converged to given relative accuracy",
          "hierarchy": "Math Root Finder",
          "module": "Math.Root.Finder",
          "name": "converged",
          "normalized": "a-\u003eb a c-\u003eBool",
          "package": "roots",
          "signature": "a-\u003er a b-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder.html#v:converged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault number of steps after which root finding will be deemed \n to have failed.  Purely a convenience used to control the behavior\n of built-in functions such as \u003ccode\u003e\u003ca\u003efindRoot\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etraceRoot\u003c/a\u003e\u003c/code\u003e.  The\n default value is 250.\n\u003c/p\u003e",
          "module": "Math.Root.Finder",
          "name": "defaultNSteps",
          "package": "roots",
          "signature": "Tagged (r a b) Int",
          "source": "src/Math-Root-Finder.html#defaultNSteps",
          "type": "method"
        },
        "index": {
          "description": "Default number of steps after which root finding will be deemed to have failed Purely convenience used to control the behavior of built-in functions such as findRoot and traceRoot The default value is",
          "hierarchy": "Math Root Finder",
          "module": "Math.Root.Finder",
          "name": "defaultNSteps",
          "package": "roots",
          "partial": "NSteps",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder.html#v:defaultNSteps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA useful constant: \u003ccode\u003e\u003ca\u003eeps\u003c/a\u003e\u003c/code\u003e is (for most \u003ccode\u003e\u003ca\u003eRealFloat\u003c/a\u003e\u003c/code\u003e types) the smallest\n positive number such that \u003ccode\u003e1 + eps /= 1\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Root.Finder",
          "name": "eps",
          "package": "roots",
          "signature": "a",
          "source": "src/Math-Root-Finder.html#eps",
          "type": "function"
        },
        "index": {
          "description": "useful constant eps is for most RealFloat types the smallest positive number such that eps",
          "hierarchy": "Math Root Finder",
          "module": "Math.Root.Finder",
          "name": "eps",
          "package": "roots",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder.html#v:eps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the finder's current estimate of the upper bound of the \n distance from \u003ccode\u003eestimateRoot\u003c/code\u003e to an actual root in the function.\n\u003c/p\u003e\u003cp\u003eGenerally, \u003ccode\u003eestimateRoot r\u003c/code\u003e +- \u003ccode\u003eestimateError r\u003c/code\u003e should bracket\n a root of the function.\n\u003c/p\u003e",
          "module": "Math.Root.Finder",
          "name": "estimateError",
          "package": "roots",
          "signature": "r a b -\u003e a",
          "source": "src/Math-Root-Finder.html#estimateError",
          "type": "method"
        },
        "index": {
          "description": "Extract the finder current estimate of the upper bound of the distance from estimateRoot to an actual root in the function Generally estimateRoot estimateError should bracket root of the function",
          "hierarchy": "Math Root Finder",
          "module": "Math.Root.Finder",
          "name": "estimateError",
          "normalized": "a b c-\u003eb",
          "package": "roots",
          "partial": "Error",
          "signature": "r a b-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder.html#v:estimateError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the finder's current estimate of the position of a root.\n\u003c/p\u003e",
          "module": "Math.Root.Finder",
          "name": "estimateRoot",
          "package": "roots",
          "signature": "r a b -\u003e a",
          "source": "src/Math-Root-Finder.html#estimateRoot",
          "type": "method"
        },
        "index": {
          "description": "Extract the finder current estimate of the position of root",
          "hierarchy": "Math Root Finder",
          "module": "Math.Root.Finder",
          "name": "estimateRoot",
          "normalized": "a b c-\u003eb",
          "package": "roots",
          "partial": "Root",
          "signature": "r a b-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder.html#v:estimateRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003efindRoot f x0 x1 eps\u003c/code\u003e initializes a root finder and repeatedly\n steps it.  When the algorithm converges to \u003ccode\u003eeps\u003c/code\u003e or the \u003ccode\u003e\u003ca\u003edefaultNSteps\u003c/a\u003e\u003c/code\u003e\n limit is exceeded, the current best guess is returned, with the \u003ccode\u003eRight\u003c/code\u003e \n constructor indicating successful convergence or the \u003ccode\u003eLeft\u003c/code\u003e constructor \n indicating failure to converge.\n\u003c/p\u003e",
          "module": "Math.Root.Finder",
          "name": "findRoot",
          "package": "roots",
          "signature": "(a -\u003e b) -\u003e a -\u003e a -\u003e a -\u003e Either (r a b) (r a b)",
          "source": "src/Math-Root-Finder.html#findRoot",
          "type": "function"
        },
        "index": {
          "description": "findRoot x0 x1 eps initializes root finder and repeatedly steps it When the algorithm converges to eps or the defaultNSteps limit is exceeded the current best guess is returned with the Right constructor indicating successful convergence or the Left constructor indicating failure to converge",
          "hierarchy": "Math Root Finder",
          "module": "Math.Root.Finder",
          "name": "findRoot",
          "normalized": "(a-\u003eb)-\u003ea-\u003ea-\u003ea-\u003eEither(c a b)(c a b)",
          "package": "roots",
          "partial": "Root",
          "signature": "(a-\u003eb)-\u003ea-\u003ea-\u003ea-\u003eEither(r a b)(r a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder.html#v:findRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efindRoot\u003c/a\u003e\u003c/code\u003e but with a specified limit on the number of steps (rather\n than using \u003ccode\u003e\u003ca\u003edefaultNSteps\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Math.Root.Finder",
          "name": "findRootN",
          "package": "roots",
          "signature": "Int -\u003e (a -\u003e b) -\u003e a -\u003e a -\u003e a -\u003e Either (r a b) (r a b)",
          "source": "src/Math-Root-Finder.html#findRootN",
          "type": "function"
        },
        "index": {
          "description": "Like findRoot but with specified limit on the number of steps rather than using defaultNSteps",
          "hierarchy": "Math Root Finder",
          "module": "Math.Root.Finder",
          "name": "findRootN",
          "normalized": "Int-\u003e(a-\u003eb)-\u003ea-\u003ea-\u003ea-\u003eEither(c a b)(c a b)",
          "package": "roots",
          "partial": "Root",
          "signature": "Int-\u003e(a-\u003eb)-\u003ea-\u003ea-\u003ea-\u003eEither(r a b)(r a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder.html#v:findRootN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function to access \u003ccode\u003e\u003ca\u003edefaultNSteps\u003c/a\u003e\u003c/code\u003e for a root finder, \n which requires a little bit of type-gymnastics.\n\u003c/p\u003e\u003cp\u003eThis function does not evaluate its argument.\n\u003c/p\u003e",
          "module": "Math.Root.Finder",
          "name": "getDefaultNSteps",
          "package": "roots",
          "signature": "r a b -\u003e Int",
          "source": "src/Math-Root-Finder.html#getDefaultNSteps",
          "type": "function"
        },
        "index": {
          "description": "Convenience function to access defaultNSteps for root finder which requires little bit of type-gymnastics This function does not evaluate its argument",
          "hierarchy": "Math Root Finder",
          "module": "Math.Root.Finder",
          "name": "getDefaultNSteps",
          "normalized": "a b c-\u003eInt",
          "package": "roots",
          "partial": "Default NSteps",
          "signature": "r a b-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder.html#v:getDefaultNSteps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003einitRootFinder f x0 x1\u003c/code\u003e: Initialize a root finder for the given\n function with the initial bracketing interval (x0,x1).\n\u003c/p\u003e",
          "module": "Math.Root.Finder",
          "name": "initRootFinder",
          "package": "roots",
          "signature": "(a -\u003e b) -\u003e a -\u003e a -\u003e r a b",
          "source": "src/Math-Root-Finder.html#initRootFinder",
          "type": "method"
        },
        "index": {
          "description": "initRootFinder x0 x1 Initialize root finder for the given function with the initial bracketing interval x0 x1",
          "hierarchy": "Math Root Finder",
          "module": "Math.Root.Finder",
          "name": "initRootFinder",
          "normalized": "(a-\u003eb)-\u003ea-\u003ea-\u003ec a b",
          "package": "roots",
          "partial": "Root Finder",
          "signature": "(a-\u003eb)-\u003ea-\u003ea-\u003er a b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder.html#v:initRootFinder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor \u003ccode\u003e\u003ca\u003eRealFloat\u003c/a\u003e\u003c/code\u003e types, computes a suitable default step limit based\n on the precision of the type and a margin of error.\n\u003c/p\u003e",
          "module": "Math.Root.Finder",
          "name": "realFloatDefaultNSteps",
          "package": "roots",
          "signature": "Float -\u003e Tagged (r a b) Int",
          "source": "src/Math-Root-Finder.html#realFloatDefaultNSteps",
          "type": "function"
        },
        "index": {
          "description": "For RealFloat types computes suitable default step limit based on the precision of the type and margin of error",
          "hierarchy": "Math Root Finder",
          "module": "Math.Root.Finder",
          "name": "realFloatDefaultNSteps",
          "normalized": "Float-\u003eTagged(a b c)Int",
          "package": "roots",
          "partial": "Float Default NSteps",
          "signature": "Float-\u003eTagged(r a b)Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder.html#v:realFloatDefaultNSteps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneral-purpose driver for stepping a root finder.  Given a \"control\"\n function, the function being searched, and an initial \u003ccode\u003e\u003ca\u003eRootFinder\u003c/a\u003e\u003c/code\u003e state,\n \u003ccode\u003erunRootFinder step f state\u003c/code\u003e repeatedly steps the root-finder and passes\n each intermediate state, along with a count of steps taken, to \u003ccode\u003estep\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003estep\u003c/code\u003e funtion will be called with the following arguments:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003e n :: \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e \u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e \n  The number of steps taken thus far\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e currentState :: r a b \u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n  The current state of the root finder\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e continue :: c \u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n  The result of the \"rest\" of the iteration\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eFor example, the following function simply iterates a root finder\n and returns every intermediate state (similar to \u003ccode\u003e\u003ca\u003etraceRoot\u003c/a\u003e\u003c/code\u003e):\n\u003c/p\u003e\u003cpre\u003e iterateRoot :: RootFinder r a b =\u003e (a -\u003e b) -\u003e a -\u003e a -\u003e [r a b]\n iterateRoot f a b = runRootFinder (const (:)) f (initRootFinder f a b)\n\u003c/pre\u003e\u003cp\u003eAnd the following function simply iterates the root finder to \n convergence or throws an error after a given number of steps:\n\u003c/p\u003e\u003cpre\u003e solve :: (RootFinder r a b, RealFloat a)\n       =\u003e Int -\u003e (a -\u003e b) -\u003e a -\u003e a -\u003e r a b\n solve maxN f a b = runRootFinder step f (initRootFinder f a b)\n    where\n        step n x continue\n            | converged eps x   = x\n            | n \u003e maxN          = error \"solve: step limit exceeded\"\n            | otherwise         = continue\n\u003c/pre\u003e",
          "module": "Math.Root.Finder",
          "name": "runRootFinder",
          "package": "roots",
          "signature": "(Int -\u003e r a b -\u003e c -\u003e c) -\u003e (a -\u003e b) -\u003e r a b -\u003e c",
          "source": "src/Math-Root-Finder.html#runRootFinder",
          "type": "function"
        },
        "index": {
          "description": "General-purpose driver for stepping root finder Given control function the function being searched and an initial RootFinder state runRootFinder step state repeatedly steps the root-finder and passes each intermediate state along with count of steps taken to step The step funtion will be called with the following arguments Int The number of steps taken thus far currentState The current state of the root finder continue The result of the rest of the iteration For example the following function simply iterates root finder and returns every intermediate state similar to traceRoot iterateRoot RootFinder iterateRoot runRootFinder const initRootFinder And the following function simply iterates the root finder to convergence or throws an error after given number of steps solve RootFinder RealFloat Int solve maxN runRootFinder step initRootFinder where step continue converged eps maxN error solve step limit exceeded otherwise continue",
          "hierarchy": "Math Root Finder",
          "module": "Math.Root.Finder",
          "name": "runRootFinder",
          "normalized": "(Int-\u003ea b c-\u003ed-\u003ed)-\u003e(b-\u003ec)-\u003ea b c-\u003ed",
          "package": "roots",
          "partial": "Root Finder",
          "signature": "(Int-\u003er a b-\u003ec-\u003ec)-\u003e(a-\u003eb)-\u003er a b-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder.html#v:runRootFinder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStep a root finder for the given function (which should generally \n be the same one passed to \u003ccode\u003einitRootFinder\u003c/code\u003e), refining the finder's\n estimate of the location of a root.\n\u003c/p\u003e",
          "module": "Math.Root.Finder",
          "name": "stepRootFinder",
          "package": "roots",
          "signature": "(a -\u003e b) -\u003e r a b -\u003e r a b",
          "source": "src/Math-Root-Finder.html#stepRootFinder",
          "type": "method"
        },
        "index": {
          "description": "Step root finder for the given function which should generally be the same one passed to initRootFinder refining the finder estimate of the location of root",
          "hierarchy": "Math Root Finder",
          "module": "Math.Root.Finder",
          "name": "stepRootFinder",
          "normalized": "(a-\u003eb)-\u003ec a b-\u003ec a b",
          "package": "roots",
          "partial": "Root Finder",
          "signature": "(a-\u003eb)-\u003er a b-\u003er a b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder.html#v:stepRootFinder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etraceRoot f x0 x1 mbEps\u003c/code\u003e initializes a root finder and repeatedly\n steps it, returning each step of the process in a list.  No step limit\n is imposed.\n\u003c/p\u003e\u003cp\u003eTermination criteria depends on \u003ccode\u003embEps\u003c/code\u003e; if it is of the form \u003ccode\u003eJust eps\u003c/code\u003e \n then convergence to \u003ccode\u003eeps\u003c/code\u003e is used (using the \u003ccode\u003econverged\u003c/code\u003e method of the\n root finder).  Otherwise, the trace is not terminated until subsequent\n states are equal (according to \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e).  This is a stricter condition than\n convergence to 0; subsequent states may have converged to zero but as long\n as any internal state changes the trace will continue.\n\u003c/p\u003e",
          "module": "Math.Root.Finder",
          "name": "traceRoot",
          "package": "roots",
          "signature": "(a -\u003e b) -\u003e a -\u003e a -\u003e Maybe a -\u003e [r a b]",
          "source": "src/Math-Root-Finder.html#traceRoot",
          "type": "function"
        },
        "index": {
          "description": "traceRoot x0 x1 mbEps initializes root finder and repeatedly steps it returning each step of the process in list No step limit is imposed Termination criteria depends on mbEps if it is of the form Just eps then convergence to eps is used using the converged method of the root finder Otherwise the trace is not terminated until subsequent states are equal according to This is stricter condition than convergence to subsequent states may have converged to zero but as long as any internal state changes the trace will continue",
          "hierarchy": "Math Root Finder",
          "module": "Math.Root.Finder",
          "name": "traceRoot",
          "normalized": "(a-\u003eb)-\u003ea-\u003ea-\u003eMaybe a-\u003e[c a b]",
          "package": "roots",
          "partial": "Root",
          "signature": "(a-\u003eb)-\u003ea-\u003ea-\u003eMaybe a-\u003e[r a b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/roots/docs/Math-Root-Finder.html#v:traceRoot"
      }
    }
  ]
]