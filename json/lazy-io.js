[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-io/docs/Control-Monad-LazyIO.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe module is intended to be imported qualified:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport qualified Control.Monad.LazyIO as LazyIO\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.LazyIO",
        "fct-package": "lazy-io",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-LazyIO.html",
        "fct-type": "module",
        "title": "LazyIO"
      },
      "index": {
        "description": "The module is intended to be imported qualified import qualified Control.Monad.LazyIO as LazyIO",
        "hierarchy": "Control Monad LazyIO",
        "module": "Control.Monad.LazyIO",
        "name": "LazyIO",
        "normalized": "",
        "package": "lazy-io",
        "partial": "Lazy IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-io/docs/Control-Monad-LazyIO.html#v:forM",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eforM\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003emapM\u003c/a\u003e\u003c/code\u003e with its arguments flipped.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.LazyIO",
        "fct-package": "lazy-io",
        "fct-signature": "[a] -\u003e (a -\u003e IO b) -\u003e IO [b]",
        "fct-source": "src/Control-Monad-LazyIO.html#forM",
        "fct-type": "function",
        "title": "forM"
      },
      "index": {
        "description": "forM is mapM with its arguments flipped",
        "hierarchy": "Control Monad LazyIO",
        "module": "Control.Monad.LazyIO",
        "name": "forM",
        "normalized": "[a]-\u003e(a-\u003eIO b)-\u003eIO[b]",
        "package": "lazy-io",
        "partial": "",
        "signature": "[a]-\u003e(a-\u003eIO b)-\u003eIO[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-io/docs/Control-Monad-LazyIO.html#v:mapM",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emapM\u003c/a\u003e\u003c/code\u003e f is equivalent to \u003ccode\u003e\u003ca\u003esequence\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e f.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.LazyIO",
        "fct-package": "lazy-io",
        "fct-signature": "(a -\u003e IO b) -\u003e [a] -\u003e IO [b]",
        "fct-source": "src/Control-Monad-LazyIO.html#mapM",
        "fct-type": "function",
        "title": "mapM"
      },
      "index": {
        "description": "mapM is equivalent to sequence map",
        "hierarchy": "Control Monad LazyIO",
        "module": "Control.Monad.LazyIO",
        "name": "mapM",
        "normalized": "(a-\u003eIO b)-\u003e[a]-\u003eIO[b]",
        "package": "lazy-io",
        "partial": "",
        "signature": "(a-\u003eIO b)-\u003e[a]-\u003eIO[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lazy-io/docs/Control-Monad-LazyIO.html#v:sequence",
      "description": {
        "fct-descr": "\u003cp\u003eLazily evaluate each action in the sequence from left to right,\n and collect the results.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.LazyIO",
        "fct-package": "lazy-io",
        "fct-signature": "[IO a] -\u003e IO [a]",
        "fct-source": "src/Control-Monad-LazyIO.html#sequence",
        "fct-type": "function",
        "title": "sequence"
      },
      "index": {
        "description": "Lazily evaluate each action in the sequence from left to right and collect the results",
        "hierarchy": "Control Monad LazyIO",
        "module": "Control.Monad.LazyIO",
        "name": "sequence",
        "normalized": "[IO a]-\u003eIO[a]",
        "package": "lazy-io",
        "partial": "",
        "signature": "[IO a]-\u003eIO[a]"
      }
    }
  }
]