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
        "word": "pointless-fun"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePointless fun :)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Function.Pointless",
          "name": "Pointless",
          "package": "pointless-fun",
          "source": "src/Data-Function-Pointless.html",
          "type": "module"
        },
        "index": {
          "description": "Pointless fun",
          "hierarchy": "Data Function Pointless",
          "module": "Data.Function.Pointless",
          "name": "Pointless",
          "package": "pointless-fun",
          "partial": "Pointless",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pointless-fun/docs/Data-Function-Pointless.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMulticompose a function on the appropriate argument. This is\n like the \u003ccode\u003e-\u003e\u003c/code\u003e arrows in a type signature.\n\u003c/p\u003e",
          "module": "Data.Function.Pointless",
          "name": "(~\u003e)",
          "package": "pointless-fun",
          "signature": "(a -\u003e b) -\u003e (c -\u003e d) -\u003e (b -\u003e c) -\u003e a -\u003e d",
          "source": "src/Data-Function-Pointless.html#~%3E",
          "type": "function"
        },
        "index": {
          "description": "Multicompose function on the appropriate argument This is like the arrows in type signature",
          "hierarchy": "Data Function Pointless",
          "module": "Data.Function.Pointless",
          "name": "(~\u003e) ~\u003e",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ed)-\u003e(b-\u003ec)-\u003ea-\u003ed",
          "package": "pointless-fun",
          "signature": "(a-\u003eb)-\u003e(c-\u003ed)-\u003e(b-\u003ec)-\u003ea-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-fun/docs/Data-Function-Pointless.html#v:-126--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMulticompose a function on the appropriate argument, calling\n the left function eagerly. That is, the resulting function will\n be strict in \u003ccode\u003ea\u003c/code\u003e if the left argument is strict in \u003ccode\u003ea\u003c/code\u003e (assuming\n the final function of the multicomposition, the one applied to\n the return value, is also strict).\n\u003c/p\u003e",
          "module": "Data.Function.Pointless",
          "name": "(!~\u003e)",
          "package": "pointless-fun",
          "signature": "(a -\u003e b) -\u003e (c -\u003e d) -\u003e (b -\u003e c) -\u003e a -\u003e d",
          "source": "src/Data-Function-Pointless.html#%21~%3E",
          "type": "function"
        },
        "index": {
          "description": "Multicompose function on the appropriate argument calling the left function eagerly That is the resulting function will be strict in if the left argument is strict in assuming the final function of the multicomposition the one applied to the return value is also strict",
          "hierarchy": "Data Function Pointless",
          "module": "Data.Function.Pointless",
          "name": "(!~\u003e) !~\u003e",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ed)-\u003e(b-\u003ec)-\u003ea-\u003ed",
          "package": "pointless-fun",
          "signature": "(a-\u003eb)-\u003e(c-\u003ed)-\u003e(b-\u003ec)-\u003ea-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-fun/docs/Data-Function-Pointless.html#v:-33--126--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a function for multicomposition. This is like the \u003ccode\u003e::\u003c/code\u003e\n of a type signature.\n\u003c/p\u003e",
          "module": "Data.Function.Pointless",
          "name": "($::)",
          "package": "pointless-fun",
          "signature": "(a -\u003e b) -\u003e ((a -\u003e b) -\u003e c -\u003e d) -\u003e c -\u003e d",
          "source": "src/Data-Function-Pointless.html#%24%3A%3A",
          "type": "function"
        },
        "index": {
          "description": "Lift function for multicomposition This is like the of type signature",
          "hierarchy": "Data Function Pointless",
          "module": "Data.Function.Pointless",
          "name": "($::) $::",
          "normalized": "(a-\u003eb)-\u003e((a-\u003eb)-\u003ec-\u003ed)-\u003ec-\u003ed",
          "package": "pointless-fun",
          "signature": "(a-\u003eb)-\u003e((a-\u003eb)-\u003ec-\u003ed)-\u003ec-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-fun/docs/Data-Function-Pointless.html#v:-36-::"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction composition which calls the right-hand function\n eagerly; i.e., making the left-hand function strict in its first\n argument.\n\u003c/p\u003e\u003cpre\u003e (f .! g) x = f $! g x\n\u003c/pre\u003e\u003cp\u003eThis defines the composition for the sub-category of strict\n Haskell functions. If the \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e class were parameterized by\n the domain and codomain categories (e.g., a regular \u003ccode\u003eFunctor f\u003c/code\u003e\n would be \u003ccode\u003eCFunctor (-\u003e) (-\u003e) f\u003c/code\u003e instead) then this would allow\n us to define functors \u003ccode\u003eCFunctor (-\u003e) (!-\u003e) f\u003c/code\u003e where\n \u003ccode\u003efmap f . fmap g = fmap (f .! g)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Function.Pointless",
          "name": "(.!)",
          "package": "pointless-fun",
          "signature": "(b -\u003e c) -\u003e (a -\u003e b) -\u003e a -\u003e c",
          "source": "src/Data-Function-Pointless.html#.%21",
          "type": "function"
        },
        "index": {
          "description": "Function composition which calls the right-hand function eagerly i.e making the left-hand function strict in its first argument This defines the composition for the sub-category of strict Haskell functions If the Functor class were parameterized by the domain and codomain categories e.g regular Functor would be CFunctor instead then this would allow us to define functors CFunctor where fmap fmap fmap",
          "hierarchy": "Data Function Pointless",
          "module": "Data.Function.Pointless",
          "name": "(.!) .!",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ea)-\u003ec-\u003eb",
          "package": "pointless-fun",
          "signature": "(b-\u003ec)-\u003e(a-\u003eb)-\u003ea-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-fun/docs/Data-Function-Pointless.html#v:.-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSecondary composition: compose the right argument on the second\n arg of the left argument.\n\u003c/p\u003e\u003cpre\u003e (f .^ g) x y = f x (g y)\n\u003c/pre\u003e",
          "module": "Data.Function.Pointless",
          "name": "(.^)",
          "package": "pointless-fun",
          "signature": "(a -\u003e c -\u003e d) -\u003e (b -\u003e c) -\u003e a -\u003e b -\u003e d",
          "source": "src/Data-Function-Pointless.html#.%5E",
          "type": "function"
        },
        "index": {
          "description": "Secondary composition compose the right argument on the second arg of the left argument",
          "hierarchy": "Data Function Pointless",
          "module": "Data.Function.Pointless",
          "name": "(.^) .^",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(d-\u003eb)-\u003ea-\u003ed-\u003ec",
          "package": "pointless-fun",
          "signature": "(a-\u003ec-\u003ed)-\u003e(b-\u003ec)-\u003ea-\u003eb-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-fun/docs/Data-Function-Pointless.html#v:.-94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBinary composition: pass two args to the right argument before\n composing.\n\u003c/p\u003e\u003cpre\u003e (f .: g) x y = f (g x y)\n\u003c/pre\u003e\u003cp\u003eor,\n\u003c/p\u003e\u003cpre\u003e f .: g = curry (f . uncurry g)\n\u003c/pre\u003e\u003cp\u003eThis is the same as the common idiom \u003ccode\u003e(f .) . g\u003c/code\u003e but more easily\n extended to multiple uses, due to the fixity declaration.\n\u003c/p\u003e",
          "module": "Data.Function.Pointless",
          "name": "(.:)",
          "package": "pointless-fun",
          "signature": "(c -\u003e d) -\u003e (a -\u003e b -\u003e c) -\u003e a -\u003e b -\u003e d",
          "source": "src/Data-Function-Pointless.html#.%3A",
          "type": "function"
        },
        "index": {
          "description": "Binary composition pass two args to the right argument before composing or curry uncurry This is the same as the common idiom but more easily extended to multiple uses due to the fixity declaration",
          "hierarchy": "Data Function Pointless",
          "module": "Data.Function.Pointless",
          "name": "(.:) .:",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ed-\u003ea)-\u003ec-\u003ed-\u003eb",
          "package": "pointless-fun",
          "signature": "(c-\u003ed)-\u003e(a-\u003eb-\u003ec)-\u003ea-\u003eb-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointless-fun/docs/Data-Function-Pointless.html#v:.:"
      }
    }
  ]
]