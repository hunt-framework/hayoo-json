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
        "word": "Kleislify"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePrecomposition and postcomposition of functors and monads.\n\u003c/p\u003e\u003cp\u003eVariants of Control.Arrow functions, specialised to kleislis.\n Avoids boxing into Kleisli values.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Kleislify",
          "name": "Kleislify",
          "package": "Kleislify",
          "source": "src/Control-Kleislify.html",
          "type": "module"
        },
        "index": {
          "description": "Precomposition and postcomposition of functors and monads Variants of Control.Arrow functions specialised to kleislis Avoids boxing into Kleisli values",
          "hierarchy": "Control Kleislify",
          "module": "Control.Kleislify",
          "name": "Kleislify",
          "package": "Kleislify",
          "partial": "Kleislify",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Kleislify/docs/Control-Kleislify.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epostcomposition of a functor with a pure function.\n   Equivalent to \u003ccode\u003e\u003ca\u003e\u003e\u003e^\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Kleislify",
          "name": "(-\u003e^)",
          "package": "Kleislify",
          "signature": "(b -\u003e f c) -\u003e (c -\u003e d) -\u003e b -\u003e f d",
          "source": "src/Control-Kleislify.html#-%3E%5E",
          "type": "function"
        },
        "index": {
          "description": "postcomposition of functor with pure function Equivalent to",
          "hierarchy": "Control Kleislify",
          "module": "Control.Kleislify",
          "name": "(-\u003e^) -\u003e^",
          "normalized": "(a-\u003eb c)-\u003e(c-\u003ed)-\u003ea-\u003eb d",
          "package": "Kleislify",
          "signature": "(b-\u003ef c)-\u003e(c-\u003ed)-\u003eb-\u003ef d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Kleislify/docs/Control-Kleislify.html#v:-45--62--94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eprecomposition of a functor with a pure function (right-to-left variant).\n   Equivalent to \u003ccode\u003e\u003ca\u003e\u003c\u003c^\u003c/a\u003e\u003c/code\u003e\n   Equivalent to \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Kleislify",
          "name": "(\u003c-^)",
          "package": "Kleislify",
          "signature": "(c -\u003e f d) -\u003e (b -\u003e c) -\u003e b -\u003e f d",
          "source": "src/Control-Kleislify.html#%3C-%5E",
          "type": "function"
        },
        "index": {
          "description": "precomposition of functor with pure function right-to-left variant Equivalent to Equivalent to",
          "hierarchy": "Control Kleislify",
          "module": "Control.Kleislify",
          "name": "(\u003c-^) \u003c-^",
          "normalized": "(a-\u003eb c)-\u003e(d-\u003ea)-\u003ed-\u003eb c",
          "package": "Kleislify",
          "signature": "(c-\u003ef d)-\u003e(b-\u003ec)-\u003eb-\u003ef d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Kleislify/docs/Control-Kleislify.html#v:-60--45--94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eprecomposition of a monad with a pure function (right-to-left variant).\n   Equivalent to \u003ccode\u003e\u003ca\u003e\u003c\u003c^\u003c/a\u003e\u003c/code\u003e\n   Equivalent to \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Kleislify",
          "name": "(\u003c=^)",
          "package": "Kleislify",
          "signature": "(c -\u003e m d) -\u003e (b -\u003e c) -\u003e b -\u003e m d",
          "source": "src/Control-Kleislify.html#%3C%3D%5E",
          "type": "function"
        },
        "index": {
          "description": "precomposition of monad with pure function right-to-left variant Equivalent to Equivalent to",
          "hierarchy": "Control Kleislify",
          "module": "Control.Kleislify",
          "name": "(\u003c=^) \u003c=^",
          "normalized": "(a-\u003eb c)-\u003e(d-\u003ea)-\u003ed-\u003eb c",
          "package": "Kleislify",
          "signature": "(c-\u003em d)-\u003e(b-\u003ec)-\u003eb-\u003em d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Kleislify/docs/Control-Kleislify.html#v:-60--61--94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epostcomposition of a monad with a pure function.\n   Equivalent to \u003ccode\u003e\u003ca\u003e\u003e\u003e^\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Kleislify",
          "name": "(=\u003e^)",
          "package": "Kleislify",
          "signature": "(b -\u003e m c) -\u003e (c -\u003e d) -\u003e b -\u003e m d",
          "source": "src/Control-Kleislify.html#%3D%3E%5E",
          "type": "function"
        },
        "index": {
          "description": "postcomposition of monad with pure function Equivalent to",
          "hierarchy": "Control Kleislify",
          "module": "Control.Kleislify",
          "name": "(=\u003e^) =\u003e^",
          "normalized": "(a-\u003eb c)-\u003e(c-\u003ed)-\u003ea-\u003eb d",
          "package": "Kleislify",
          "signature": "(b-\u003em c)-\u003e(c-\u003ed)-\u003eb-\u003em d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Kleislify/docs/Control-Kleislify.html#v:-61--62--94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eprecomposition of a functor with a pure function.\n   Equivalent to 'flip (.)'\n\u003c/p\u003e",
          "module": "Control.Kleislify",
          "name": "(^-\u003e)",
          "package": "Kleislify",
          "signature": "(b -\u003e c) -\u003e (c -\u003e f d) -\u003e b -\u003e f d",
          "source": "src/Control-Kleislify.html#%5E-%3E",
          "type": "function"
        },
        "index": {
          "description": "precomposition of functor with pure function Equivalent to flip",
          "hierarchy": "Control Kleislify",
          "module": "Control.Kleislify",
          "name": "(^-\u003e) ^-\u003e",
          "normalized": "(a-\u003eb)-\u003e(b-\u003ec d)-\u003ea-\u003ec d",
          "package": "Kleislify",
          "signature": "(b-\u003ec)-\u003e(c-\u003ef d)-\u003eb-\u003ef d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Kleislify/docs/Control-Kleislify.html#v:-94--45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epostcomposition of a functor with a pure function (right-to-left variant).\n   Equivalent to \u003ccode\u003e\u003ca\u003e^\u003c\u003c\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Kleislify",
          "name": "(^\u003c-)",
          "package": "Kleislify",
          "signature": "(c -\u003e d) -\u003e (b -\u003e f c) -\u003e b -\u003e f d",
          "source": "src/Control-Kleislify.html#%5E%3C-",
          "type": "function"
        },
        "index": {
          "description": "postcomposition of functor with pure function right-to-left variant Equivalent to",
          "hierarchy": "Control Kleislify",
          "module": "Control.Kleislify",
          "name": "(^\u003c-) ^\u003c-",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ed a)-\u003ec-\u003ed b",
          "package": "Kleislify",
          "signature": "(c-\u003ed)-\u003e(b-\u003ef c)-\u003eb-\u003ef d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Kleislify/docs/Control-Kleislify.html#v:-94--60--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epostcomposition of a monad with a pure function (right-to-left variant).\n   Equivalent to \u003ccode\u003e\u003ca\u003e^\u003c\u003c\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Kleislify",
          "name": "(^\u003c=)",
          "package": "Kleislify",
          "signature": "(c -\u003e d) -\u003e (b -\u003e m c) -\u003e b -\u003e m d",
          "source": "src/Control-Kleislify.html#%5E%3C%3D",
          "type": "function"
        },
        "index": {
          "description": "postcomposition of monad with pure function right-to-left variant Equivalent to",
          "hierarchy": "Control Kleislify",
          "module": "Control.Kleislify",
          "name": "(^\u003c=) ^\u003c=",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ed a)-\u003ec-\u003ed b",
          "package": "Kleislify",
          "signature": "(c-\u003ed)-\u003e(b-\u003em c)-\u003eb-\u003em d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Kleislify/docs/Control-Kleislify.html#v:-94--60--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eprecomposition of a monad with a pure function.\n   Equivalent to \u003ccode\u003e\u003ca\u003e^\u003e\u003e\u003c/a\u003e\u003c/code\u003e\n   Equivalent to 'flip (.)'\n\u003c/p\u003e",
          "module": "Control.Kleislify",
          "name": "(^=\u003e)",
          "package": "Kleislify",
          "signature": "(b -\u003e c) -\u003e (c -\u003e m d) -\u003e b -\u003e m d",
          "source": "src/Control-Kleislify.html#%5E%3D%3E",
          "type": "function"
        },
        "index": {
          "description": "precomposition of monad with pure function Equivalent to Equivalent to flip",
          "hierarchy": "Control Kleislify",
          "module": "Control.Kleislify",
          "name": "(^=\u003e) ^=\u003e",
          "normalized": "(a-\u003eb)-\u003e(b-\u003ec d)-\u003ea-\u003ec d",
          "package": "Kleislify",
          "signature": "(b-\u003ec)-\u003e(c-\u003em d)-\u003eb-\u003em d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Kleislify/docs/Control-Kleislify.html#v:-94--61--62-"
      }
    }
  ]
]