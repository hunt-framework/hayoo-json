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
        "word": "lazy-io"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe module is intended to be imported qualified:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport qualified Control.Monad.LazyIO as LazyIO\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e\u003c/div\u003e",
          "module": "Control.Monad.LazyIO",
          "name": "LazyIO",
          "package": "lazy-io",
          "source": "src/Control-Monad-LazyIO.html",
          "type": "module"
        },
        "index": {
          "description": "The module is intended to be imported qualified import qualified Control.Monad.LazyIO as LazyIO",
          "hierarchy": "Control Monad LazyIO",
          "module": "Control.Monad.LazyIO",
          "name": "LazyIO",
          "package": "lazy-io",
          "partial": "Lazy IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lazy-io/docs/Control-Monad-LazyIO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eforM\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003emapM\u003c/a\u003e\u003c/code\u003e with its arguments flipped.\n\u003c/p\u003e",
          "module": "Control.Monad.LazyIO",
          "name": "forM",
          "package": "lazy-io",
          "signature": "[a] -\u003e (a -\u003e IO b) -\u003e IO [b]",
          "source": "src/Control-Monad-LazyIO.html#forM",
          "type": "function"
        },
        "index": {
          "description": "forM is mapM with its arguments flipped",
          "hierarchy": "Control Monad LazyIO",
          "module": "Control.Monad.LazyIO",
          "name": "forM",
          "normalized": "[a]-\u003e(a-\u003eIO b)-\u003eIO[b]",
          "package": "lazy-io",
          "signature": "[a]-\u003e(a-\u003eIO b)-\u003eIO[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-io/docs/Control-Monad-LazyIO.html#v:forM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emapM\u003c/a\u003e\u003c/code\u003e f is equivalent to \u003ccode\u003e\u003ca\u003esequence\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e f.\n\u003c/p\u003e",
          "module": "Control.Monad.LazyIO",
          "name": "mapM",
          "package": "lazy-io",
          "signature": "(a -\u003e IO b) -\u003e [a] -\u003e IO [b]",
          "source": "src/Control-Monad-LazyIO.html#mapM",
          "type": "function"
        },
        "index": {
          "description": "mapM is equivalent to sequence map",
          "hierarchy": "Control Monad LazyIO",
          "module": "Control.Monad.LazyIO",
          "name": "mapM",
          "normalized": "(a-\u003eIO b)-\u003e[a]-\u003eIO[b]",
          "package": "lazy-io",
          "signature": "(a-\u003eIO b)-\u003e[a]-\u003eIO[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-io/docs/Control-Monad-LazyIO.html#v:mapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLazily evaluate each action in the sequence from left to right,\n and collect the results.\n\u003c/p\u003e",
          "module": "Control.Monad.LazyIO",
          "name": "sequence",
          "package": "lazy-io",
          "signature": "[IO a] -\u003e IO [a]",
          "source": "src/Control-Monad-LazyIO.html#sequence",
          "type": "function"
        },
        "index": {
          "description": "Lazily evaluate each action in the sequence from left to right and collect the results",
          "hierarchy": "Control Monad LazyIO",
          "module": "Control.Monad.LazyIO",
          "name": "sequence",
          "normalized": "[IO a]-\u003eIO[a]",
          "package": "lazy-io",
          "signature": "[IO a]-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lazy-io/docs/Control-Monad-LazyIO.html#v:sequence"
      }
    }
  ]
]