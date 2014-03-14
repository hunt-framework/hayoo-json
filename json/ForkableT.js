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
        "word": "ForkableT"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines non-Prelude 'Forkable'/'ForkableT' instances. It is separated from \u003ca\u003eControl.Concurrent.Forkable\u003c/a\u003e because imported modules might not be -XSafe\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.ForkableT.Instances",
          "name": "Instances",
          "package": "ForkableT",
          "source": "src/Control-Concurrent-ForkableT-Instances.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines non-Prelude Forkable ForkableT instances It is separated from Control.Concurrent.Forkable because imported modules might not be XSafe",
          "hierarchy": "Control Concurrent ForkableT Instances",
          "module": "Control.Concurrent.ForkableT.Instances",
          "name": "Instances",
          "package": "ForkableT",
          "partial": "Instances",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ForkableT/docs/Control-Concurrent-ForkableT-Instances.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines two classes. \u003ccode\u003e\u003ccode\u003e\u003ca\u003eForkable\u003c/a\u003e\u003c/code\u003e m n\u003c/code\u003e means a monad \u003ccode\u003en\u003c/code\u003e may be forked in \u003ccode\u003em\u003c/code\u003e.\n  \u003ccode\u003e\u003ccode\u003e\u003ca\u003eForkableT\u003c/a\u003e\u003c/code\u003e t\u003c/code\u003e means that applying the transformer to \u003ccode\u003en\u003c/code\u003e and \u003ccode\u003em\u003c/code\u003e will mean you can still fork \u003ccode\u003et n\u003c/code\u003e in \u003ccode\u003et m\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe reason we need a separate class for monad transformers is because often times the \"forkability\" of a transformed monad does not depend on the underlying monad, only it's forkability. This is the case for example for most standard monad transformers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.ForkableT",
          "name": "ForkableT",
          "package": "ForkableT",
          "source": "src/Control-Concurrent-ForkableT.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines two classes Forkable means monad may be forked in ForkableT means that applying the transformer to and will mean you can still fork in The reason we need separate class for monad transformers is because often times the forkability of transformed monad does not depend on the underlying monad only it forkability This is the case for example for most standard monad transformers",
          "hierarchy": "Control Concurrent ForkableT",
          "module": "Control.Concurrent.ForkableT",
          "name": "ForkableT",
          "package": "ForkableT",
          "partial": "Forkable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ForkableT/docs/Control-Concurrent-ForkableT.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForkable. The default instance uses \u003ccode\u003e\u003ca\u003eForkableT\u003c/a\u003e\u003c/code\u003e and simply calls \u003ccode\u003e\u003ca\u003eforkT\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concurrent.ForkableT",
          "name": "Forkable",
          "package": "ForkableT",
          "source": "src/Control-Concurrent-ForkableT.html#Forkable",
          "type": "class"
        },
        "index": {
          "description": "Forkable The default instance uses ForkableT and simply calls forkT",
          "hierarchy": "Control Concurrent ForkableT",
          "module": "Control.Concurrent.ForkableT",
          "name": "Forkable",
          "package": "ForkableT",
          "partial": "Forkable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ForkableT/docs/Control-Concurrent-ForkableT.html#t:Forkable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForkableT. The default instance uses \u003ccode\u003e\u003ca\u003eMonadTransControl\u003c/a\u003e\u003c/code\u003e to lift the underlying \u003ccode\u003e\u003ca\u003efork\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Concurrent.ForkableT",
          "name": "ForkableT",
          "package": "ForkableT",
          "source": "src/Control-Concurrent-ForkableT.html#ForkableT",
          "type": "class"
        },
        "index": {
          "description": "ForkableT The default instance uses MonadTransControl to lift the underlying fork",
          "hierarchy": "Control Concurrent ForkableT",
          "module": "Control.Concurrent.ForkableT",
          "name": "ForkableT",
          "package": "ForkableT",
          "partial": "Forkable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ForkableT/docs/Control-Concurrent-ForkableT.html#t:ForkableT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.ForkableT",
          "name": "fork",
          "package": "ForkableT",
          "signature": "n () -\u003e m ThreadId",
          "source": "src/Control-Concurrent-ForkableT.html#fork",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Concurrent ForkableT",
          "module": "Control.Concurrent.ForkableT",
          "name": "fork",
          "normalized": "a()-\u003eb ThreadId",
          "package": "ForkableT",
          "signature": "n()-\u003em ThreadId",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ForkableT/docs/Control-Concurrent-ForkableT.html#v:fork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.ForkableT",
          "name": "forkT",
          "package": "ForkableT",
          "signature": "t n () -\u003e t m ThreadId",
          "source": "src/Control-Concurrent-ForkableT.html#forkT",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Concurrent ForkableT",
          "module": "Control.Concurrent.ForkableT",
          "name": "forkT",
          "normalized": "a b()-\u003ea c ThreadId",
          "package": "ForkableT",
          "signature": "t n()-\u003et m ThreadId",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ForkableT/docs/Control-Concurrent-ForkableT.html#v:forkT"
      }
    }
  ]
]