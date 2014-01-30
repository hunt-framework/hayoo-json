[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForkableT/docs/Control-Concurrent-ForkableT-Instances.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines non-Prelude 'Forkable'/'ForkableT' instances. It is separated from \u003ca\u003eControl.Concurrent.Forkable\u003c/a\u003e because imported modules might not be -XSafe\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.ForkableT.Instances",
        "fct-package": "ForkableT",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-ForkableT-Instances.html",
        "fct-type": "module",
        "title": "Instances"
      },
      "index": {
        "description": "This module defines non-Prelude Forkable ForkableT instances It is separated from Control.Concurrent.Forkable because imported modules might not be XSafe",
        "hierarchy": "Control Concurrent ForkableT Instances",
        "module": "Control.Concurrent.ForkableT.Instances",
        "name": "Instances",
        "normalized": "",
        "package": "ForkableT",
        "partial": "Instances",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForkableT/docs/Control-Concurrent-ForkableT.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines two classes. \u003ccode\u003e\u003ccode\u003e\u003ca\u003eForkable\u003c/a\u003e\u003c/code\u003e m n\u003c/code\u003e means a monad \u003ccode\u003en\u003c/code\u003e may be forked in \u003ccode\u003em\u003c/code\u003e.\n  \u003ccode\u003e\u003ccode\u003e\u003ca\u003eForkableT\u003c/a\u003e\u003c/code\u003e t\u003c/code\u003e means that applying the transformer to \u003ccode\u003en\u003c/code\u003e and \u003ccode\u003em\u003c/code\u003e will mean you can still fork \u003ccode\u003et n\u003c/code\u003e in \u003ccode\u003et m\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe reason we need a separate class for monad transformers is because often times the \"forkability\" of a transformed monad does not depend on the underlying monad, only it's forkability. This is the case for example for most standard monad transformers.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.ForkableT",
        "fct-package": "ForkableT",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-ForkableT.html",
        "fct-type": "module",
        "title": "ForkableT"
      },
      "index": {
        "description": "This module defines two classes Forkable means monad may be forked in ForkableT means that applying the transformer to and will mean you can still fork in The reason we need separate class for monad transformers is because often times the forkability of transformed monad does not depend on the underlying monad only it forkability This is the case for example for most standard monad transformers",
        "hierarchy": "Control Concurrent ForkableT",
        "module": "Control.Concurrent.ForkableT",
        "name": "ForkableT",
        "normalized": "",
        "package": "ForkableT",
        "partial": "Forkable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForkableT/docs/Control-Concurrent-ForkableT.html#t:Forkable",
      "description": {
        "fct-descr": "\u003cp\u003eForkable. The default instance uses \u003ccode\u003e\u003ca\u003eForkableT\u003c/a\u003e\u003c/code\u003e and simply calls \u003ccode\u003e\u003ca\u003eforkT\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.ForkableT",
        "fct-package": "ForkableT",
        "fct-signature": "class",
        "fct-source": "src/Control-Concurrent-ForkableT.html#Forkable",
        "fct-type": "class",
        "title": "Forkable"
      },
      "index": {
        "description": "Forkable The default instance uses ForkableT and simply calls forkT",
        "hierarchy": "Control Concurrent ForkableT",
        "module": "Control.Concurrent.ForkableT",
        "name": "Forkable",
        "normalized": "",
        "package": "ForkableT",
        "partial": "Forkable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForkableT/docs/Control-Concurrent-ForkableT.html#t:ForkableT",
      "description": {
        "fct-descr": "\u003cp\u003eForkableT. The default instance uses \u003ccode\u003e\u003ca\u003eMonadTransControl\u003c/a\u003e\u003c/code\u003e to lift the underlying \u003ccode\u003e\u003ca\u003efork\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.ForkableT",
        "fct-package": "ForkableT",
        "fct-signature": "class",
        "fct-source": "src/Control-Concurrent-ForkableT.html#ForkableT",
        "fct-type": "class",
        "title": "ForkableT"
      },
      "index": {
        "description": "ForkableT The default instance uses MonadTransControl to lift the underlying fork",
        "hierarchy": "Control Concurrent ForkableT",
        "module": "Control.Concurrent.ForkableT",
        "name": "ForkableT",
        "normalized": "",
        "package": "ForkableT",
        "partial": "Forkable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForkableT/docs/Control-Concurrent-ForkableT.html#v:fork",
      "description": {
        "fct-module": "Control.Concurrent.ForkableT",
        "fct-package": "ForkableT",
        "fct-signature": "n () -\u003e m ThreadId",
        "fct-source": "src/Control-Concurrent-ForkableT.html#fork",
        "fct-type": "method",
        "title": "fork"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent ForkableT",
        "module": "Control.Concurrent.ForkableT",
        "name": "fork",
        "normalized": "a()-\u003eb ThreadId",
        "package": "ForkableT",
        "partial": "",
        "signature": "n()-\u003em ThreadId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ForkableT/docs/Control-Concurrent-ForkableT.html#v:forkT",
      "description": {
        "fct-module": "Control.Concurrent.ForkableT",
        "fct-package": "ForkableT",
        "fct-signature": "t n () -\u003e t m ThreadId",
        "fct-source": "src/Control-Concurrent-ForkableT.html#forkT",
        "fct-type": "method",
        "title": "forkT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent ForkableT",
        "module": "Control.Concurrent.ForkableT",
        "name": "forkT",
        "normalized": "a b()-\u003ea c ThreadId",
        "package": "ForkableT",
        "partial": "",
        "signature": "t n()-\u003et m ThreadId"
      }
    }
  }
]