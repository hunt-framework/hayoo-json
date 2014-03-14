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
        "word": "monadbi"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonadBi represents the relationship between monads that can be transformed into each other (atleast partially).\n\u003c/p\u003e\u003cp\u003eMonadBi acts as a superset of MonadTrans, and provides \u003ccode\u003e\u003ca\u003eraise\u003c/a\u003e\u003c/code\u003e analogous to \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e, which lifts underlying monads\ninto the transformer. It also provides \u003ccode\u003e\u003ca\u003elower\u003c/a\u003e\u003c/code\u003e which is the opposite of \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e, and extracts underlying monads\nfrom monad transformers.\n\u003c/p\u003e\u003cp\u003eNatural instances are provided for many Monad Transformers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Bi",
          "name": "Bi",
          "package": "monadbi",
          "source": "src/Control-Monad-Bi.html",
          "type": "module"
        },
        "index": {
          "description": "MonadBi represents the relationship between monads that can be transformed into each other atleast partially MonadBi acts as superset of MonadTrans and provides raise analogous to lift which lifts underlying monads into the transformer It also provides lower which is the opposite of lift and extracts underlying monads from monad transformers Natural instances are provided for many Monad Transformers",
          "hierarchy": "Control Monad Bi",
          "module": "Control.Monad.Bi",
          "name": "Bi",
          "package": "monadbi",
          "partial": "Bi",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monadbi/docs/Control-Monad-Bi.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Bi",
          "name": "MonadBi",
          "package": "monadbi",
          "source": "src/Control-Monad-Bi.html#MonadBi",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad Bi",
          "module": "Control.Monad.Bi",
          "name": "MonadBi",
          "package": "monadbi",
          "partial": "Monad Bi",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monadbi/docs/Control-Monad-Bi.html#t:MonadBi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Bi",
          "name": "collect",
          "package": "monadbi",
          "signature": "m a -\u003e (a -\u003e m b) -\u003e m [b]",
          "source": "src/Control-Monad-Bi.html#collect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Bi",
          "module": "Control.Monad.Bi",
          "name": "collect",
          "normalized": "a b-\u003e(b-\u003ea c)-\u003ea[c]",
          "package": "monadbi",
          "signature": "m a-\u003e(a-\u003em b)-\u003em[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadbi/docs/Control-Monad-Bi.html#v:collect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Bi",
          "name": "collectN",
          "package": "monadbi",
          "signature": "Int -\u003e m a -\u003e (a -\u003e m b) -\u003e m [b]",
          "source": "src/Control-Monad-Bi.html#collectN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Bi",
          "module": "Control.Monad.Bi",
          "name": "collectN",
          "normalized": "Int-\u003ea b-\u003e(b-\u003ea c)-\u003ea[c]",
          "package": "monadbi",
          "signature": "Int-\u003em a-\u003e(a-\u003em b)-\u003em[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadbi/docs/Control-Monad-Bi.html#v:collectN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Bi",
          "name": "lazyIO",
          "package": "monadbi",
          "signature": "m a -\u003e m a",
          "source": "src/Control-Monad-Bi.html#lazyIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Bi",
          "module": "Control.Monad.Bi",
          "name": "lazyIO",
          "normalized": "a b-\u003ea b",
          "package": "monadbi",
          "partial": "IO",
          "signature": "m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadbi/docs/Control-Monad-Bi.html#v:lazyIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Bi",
          "name": "lower",
          "package": "monadbi",
          "signature": "m1 a -\u003e m1 (m2 a)",
          "source": "src/Control-Monad-Bi.html#lower",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Bi",
          "module": "Control.Monad.Bi",
          "name": "lower",
          "normalized": "a b-\u003ea(a b)",
          "package": "monadbi",
          "signature": "m a-\u003em(m a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monadbi/docs/Control-Monad-Bi.html#v:lower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Bi",
          "name": "raise",
          "package": "monadbi",
          "signature": "m2 a -\u003e m1 a",
          "source": "src/Control-Monad-Bi.html#raise",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Bi",
          "module": "Control.Monad.Bi",
          "name": "raise",
          "normalized": "a b-\u003ea b",
          "package": "monadbi",
          "signature": "m a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monadbi/docs/Control-Monad-Bi.html#v:raise"
      }
    }
  ]
]