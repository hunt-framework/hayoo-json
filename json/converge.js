[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/converge/docs/Math-Sequence-Converge.html#",
      "description": {
        "fct-module": "Math.Sequence.Converge",
        "fct-package": "converge",
        "fct-signature": "module",
        "fct-source": "src/Math-Sequence-Converge.html",
        "fct-type": "module",
        "title": "Converge"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Sequence Converge",
        "module": "Math.Sequence.Converge",
        "name": "Converge",
        "normalized": "",
        "package": "converge",
        "partial": "Converge",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/converge/docs/Math-Sequence-Converge.html#v:converge",
      "description": {
        "fct-descr": "\u003cp\u003eTake items from the list until two successive items are equal and \n return the second of them (or an item is not equal to itself, to handle\n NaN without a \u003ccode\u003e\u003ca\u003eRealFloat\u003c/a\u003e\u003c/code\u003e context.  In this case, the first item of the \n pair is returned) .  If the list ends before a match is found, \n returns the last element of the list.\n\u003c/p\u003e",
        "fct-module": "Math.Sequence.Converge",
        "fct-package": "converge",
        "fct-signature": "[a] -\u003e a",
        "fct-source": "src/Math-Sequence-Converge.html#converge",
        "fct-type": "function",
        "title": "converge"
      },
      "index": {
        "description": "Take items from the list until two successive items are equal and return the second of them or an item is not equal to itself to handle NaN without RealFloat context In this case the first item of the pair is returned If the list ends before match is found returns the last element of the list",
        "hierarchy": "Math Sequence Converge",
        "module": "Math.Sequence.Converge",
        "name": "converge",
        "normalized": "[a]-\u003ea",
        "package": "converge",
        "partial": "",
        "signature": "[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/converge/docs/Math-Sequence-Converge.html#v:convergeBy",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003econvergeBy f end xs\u003c/code\u003e looks through \u003ccode\u003exs\u003c/code\u003e for the first segment for which\n \u003ccode\u003ef\u003c/code\u003e returns a value, and returns that value.  Typically \u003ccode\u003ef\u003c/code\u003e would be \n something like:\n\u003c/p\u003e\u003cpre\u003e f (a:b:_)\n    | abs(a-b) \u003c= eps\n    = Just (0.5 * (a + b))\n f _ = Nothing\n\u003c/pre\u003e\u003cp\u003eIf no such segment is found, applies \u003ccode\u003eend\u003c/code\u003e to the last item in the list\n and returns the result.  If the list was empty, returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Sequence.Converge",
        "fct-package": "converge",
        "fct-signature": "([a] -\u003e Maybe b) -\u003e (a -\u003e Maybe b) -\u003e [a] -\u003e Maybe b",
        "fct-source": "src/Math-Sequence-Converge.html#convergeBy",
        "fct-type": "function",
        "title": "convergeBy"
      },
      "index": {
        "description": "convergeBy end xs looks through xs for the first segment for which returns value and returns that value Typically would be something like abs a-b eps Just Nothing If no such segment is found applies end to the last item in the list and returns the result If the list was empty returns Nothing",
        "hierarchy": "Math Sequence Converge",
        "module": "Math.Sequence.Converge",
        "name": "convergeBy",
        "normalized": "([a]-\u003eMaybe b)-\u003e(a-\u003eMaybe b)-\u003e[a]-\u003eMaybe b",
        "package": "converge",
        "partial": "By",
        "signature": "([a]-\u003eMaybe b)-\u003e(a-\u003eMaybe b)-\u003e[a]-\u003eMaybe b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/converge/docs/Math-Sequence-Converge.html#v:convergeTo",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003econvergeTo absEps relEps xs\u003c/code\u003e takes items from \u003ccode\u003exs\u003c/code\u003e until two successive\n items \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e are within either \u003ccode\u003eabsEps\u003c/code\u003e or \u003ccode\u003erelEps * max (abs x) (abs\n y)\u003c/code\u003e of each other, in which case the second of the pair is returned, or \n until an item is found that does not equal itself (which would typically \n be a NaN), in which case the preceding item is returned.  If the list ends\n before a match is found, the last element of the list is returned.\n\u003c/p\u003e\u003cp\u003eFor example, approximating the golden mean by applying Newton's method to \n find a root of \u003ccode\u003ex^2 - x - 1\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e phi :: Rational\n phi = convergeTo 1e-100 0 (iterate (\\x -\u003e (x*x + 1) / (2*x-1)) 1)\n\u003c/pre\u003e",
        "fct-module": "Math.Sequence.Converge",
        "fct-package": "converge",
        "fct-signature": "a -\u003e a -\u003e [a] -\u003e a",
        "fct-source": "src/Math-Sequence-Converge.html#convergeTo",
        "fct-type": "function",
        "title": "convergeTo"
      },
      "index": {
        "description": "convergeTo absEps relEps xs takes items from xs until two successive items and are within either absEps or relEps max abs abs of each other in which case the second of the pair is returned or until an item is found that does not equal itself which would typically be NaN in which case the preceding item is returned If the list ends before match is found the last element of the list is returned For example approximating the golden mean by applying Newton method to find root of phi Rational phi convergeTo e-100 iterate x-1",
        "hierarchy": "Math Sequence Converge",
        "module": "Math.Sequence.Converge",
        "name": "convergeTo",
        "normalized": "a-\u003ea-\u003e[a]-\u003ea",
        "package": "converge",
        "partial": "To",
        "signature": "a-\u003ea-\u003e[a]-\u003ea"
      }
    }
  }
]