[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadbi/docs/Control-Monad-Bi.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonadBi represents the relationship between monads that can be transformed into each other (atleast partially).\n\u003c/p\u003e\u003cp\u003eMonadBi acts as a superset of MonadTrans, and provides \u003ccode\u003e\u003ca\u003eraise\u003c/a\u003e\u003c/code\u003e analogous to \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e, which lifts underlying monads\ninto the transformer. It also provides \u003ccode\u003e\u003ca\u003elower\u003c/a\u003e\u003c/code\u003e which is the opposite of \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e, and extracts underlying monads\nfrom monad transformers.\n\u003c/p\u003e\u003cp\u003eNatural instances are provided for many Monad Transformers.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Bi",
        "fct-package": "monadbi",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Bi.html",
        "fct-type": "module",
        "title": "Bi"
      },
      "index": {
        "description": "MonadBi represents the relationship between monads that can be transformed into each other atleast partially MonadBi acts as superset of MonadTrans and provides raise analogous to lift which lifts underlying monads into the transformer It also provides lower which is the opposite of lift and extracts underlying monads from monad transformers Natural instances are provided for many Monad Transformers",
        "hierarchy": "Control Monad Bi",
        "module": "Control.Monad.Bi",
        "name": "Bi",
        "normalized": "",
        "package": "monadbi",
        "partial": "Bi",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadbi/docs/Control-Monad-Bi.html#t:MonadBi",
      "description": {
        "fct-module": "Control.Monad.Bi",
        "fct-package": "monadbi",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Bi.html#MonadBi",
        "fct-type": "class",
        "title": "MonadBi"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Bi",
        "module": "Control.Monad.Bi",
        "name": "MonadBi",
        "normalized": "",
        "package": "monadbi",
        "partial": "Monad Bi",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadbi/docs/Control-Monad-Bi.html#v:collect",
      "description": {
        "fct-module": "Control.Monad.Bi",
        "fct-package": "monadbi",
        "fct-signature": "m a -\u003e (a -\u003e m b) -\u003e m [b]",
        "fct-source": "src/Control-Monad-Bi.html#collect",
        "fct-type": "function",
        "title": "collect"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Bi",
        "module": "Control.Monad.Bi",
        "name": "collect",
        "normalized": "a b-\u003e(b-\u003ea c)-\u003ea[c]",
        "package": "monadbi",
        "partial": "",
        "signature": "m a-\u003e(a-\u003em b)-\u003em[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadbi/docs/Control-Monad-Bi.html#v:collectN",
      "description": {
        "fct-module": "Control.Monad.Bi",
        "fct-package": "monadbi",
        "fct-signature": "Int -\u003e m a -\u003e (a -\u003e m b) -\u003e m [b]",
        "fct-source": "src/Control-Monad-Bi.html#collectN",
        "fct-type": "function",
        "title": "collectN"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Bi",
        "module": "Control.Monad.Bi",
        "name": "collectN",
        "normalized": "Int-\u003ea b-\u003e(b-\u003ea c)-\u003ea[c]",
        "package": "monadbi",
        "partial": "",
        "signature": "Int-\u003em a-\u003e(a-\u003em b)-\u003em[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadbi/docs/Control-Monad-Bi.html#v:lazyIO",
      "description": {
        "fct-module": "Control.Monad.Bi",
        "fct-package": "monadbi",
        "fct-signature": "m a -\u003e m a",
        "fct-source": "src/Control-Monad-Bi.html#lazyIO",
        "fct-type": "function",
        "title": "lazyIO"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Bi",
        "module": "Control.Monad.Bi",
        "name": "lazyIO",
        "normalized": "a b-\u003ea b",
        "package": "monadbi",
        "partial": "IO",
        "signature": "m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadbi/docs/Control-Monad-Bi.html#v:lower",
      "description": {
        "fct-module": "Control.Monad.Bi",
        "fct-package": "monadbi",
        "fct-signature": "m1 a -\u003e m1 (m2 a)",
        "fct-source": "src/Control-Monad-Bi.html#lower",
        "fct-type": "method",
        "title": "lower"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Bi",
        "module": "Control.Monad.Bi",
        "name": "lower",
        "normalized": "a b-\u003ea(a b)",
        "package": "monadbi",
        "partial": "",
        "signature": "m a-\u003em(m a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadbi/docs/Control-Monad-Bi.html#v:raise",
      "description": {
        "fct-module": "Control.Monad.Bi",
        "fct-package": "monadbi",
        "fct-signature": "m2 a -\u003e m1 a",
        "fct-source": "src/Control-Monad-Bi.html#raise",
        "fct-type": "method",
        "title": "raise"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Bi",
        "module": "Control.Monad.Bi",
        "name": "raise",
        "normalized": "a b-\u003ea b",
        "package": "monadbi",
        "partial": "",
        "signature": "m a-\u003em a"
      }
    }
  }
]