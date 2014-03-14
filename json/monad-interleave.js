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
        "word": "monad-interleave"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonads with an unsaveInterleaveIO-like operation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Interleave",
          "name": "Interleave",
          "package": "monad-interleave",
          "source": "src/Control-Monad-Interleave.html",
          "type": "module"
        },
        "index": {
          "description": "Monads with an unsaveInterleaveIO-like operation",
          "hierarchy": "Control Monad Interleave",
          "module": "Control.Monad.Interleave",
          "name": "Interleave",
          "package": "monad-interleave",
          "partial": "Interleave",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-interleave/docs/Control-Monad-Interleave.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonads that have an operation like \u003ccode\u003e\u003ca\u003eunsafeInterleaveIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Interleave",
          "name": "MonadInterleave",
          "package": "monad-interleave",
          "source": "src/Control-Monad-Interleave.html#MonadInterleave",
          "type": "class"
        },
        "index": {
          "description": "Monads that have an operation like unsafeInterleaveIO",
          "hierarchy": "Control Monad Interleave",
          "module": "Control.Monad.Interleave",
          "name": "MonadInterleave",
          "package": "monad-interleave",
          "partial": "Monad Interleave",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-interleave/docs/Control-Monad-Interleave.html#t:MonadInterleave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the baton from the monad without doing any computation.\n\u003c/p\u003e",
          "module": "Control.Monad.Interleave",
          "name": "unsafeInterleave",
          "package": "monad-interleave",
          "signature": "m a -\u003e m a",
          "source": "src/Control-Monad-Interleave.html#unsafeInterleave",
          "type": "method"
        },
        "index": {
          "description": "Get the baton from the monad without doing any computation",
          "hierarchy": "Control Monad Interleave",
          "module": "Control.Monad.Interleave",
          "name": "unsafeInterleave",
          "normalized": "a b-\u003ea b",
          "package": "monad-interleave",
          "partial": "Interleave",
          "signature": "m a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-interleave/docs/Control-Monad-Interleave.html#v:unsafeInterleave"
      }
    }
  ]
]