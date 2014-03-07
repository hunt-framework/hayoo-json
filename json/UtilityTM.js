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
        "word": "UtilityTM"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonadic combinators missing from the standard library\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.TM",
          "name": "TM",
          "package": "UtilityTM",
          "source": "src/Control-Monad-TM.html",
          "type": "module"
        },
        "index": {
          "description": "Monadic combinators missing from the standard library",
          "hierarchy": "Control Monad TM",
          "module": "Control.Monad.TM",
          "name": "TM",
          "package": "UtilityTM",
          "partial": "TM",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/UtilityTM/docs/Control-Monad-TM.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifting bind into a monad. Often denoted \u003cem\u003econcatMapM\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.TM",
          "name": "(.=\u003c\u003c.)",
          "package": "UtilityTM",
          "signature": "(a -\u003e q (m b)) -\u003e m a -\u003e q (m b)",
          "source": "src/Control-Monad-TM.html#.%3D%3C%3C.",
          "type": "function"
        },
        "index": {
          "description": "Lifting bind into monad Often denoted concatMapM",
          "hierarchy": "Control Monad TM",
          "module": "Control.Monad.TM",
          "name": "(.=\u003c\u003c.) .=\u003c\u003c.",
          "normalized": "(a-\u003eb(c d))-\u003ec a-\u003eb(c d)",
          "package": "UtilityTM",
          "signature": "(a-\u003eq(m b))-\u003em a-\u003eq(m b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/UtilityTM/docs/Control-Monad-TM.html#v:.-61--60--60-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifting bind into a monad. Often denoted \u003cem\u003econcatMapM\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.TM",
          "name": "(.\u003e\u003e=.)",
          "package": "UtilityTM",
          "signature": "m a -\u003e (a -\u003e q (m b)) -\u003e q (m b)",
          "source": "src/Control-Monad-TM.html#.%3E%3E%3D.",
          "type": "function"
        },
        "index": {
          "description": "Lifting bind into monad Often denoted concatMapM",
          "hierarchy": "Control Monad TM",
          "module": "Control.Monad.TM",
          "name": "(.\u003e\u003e=.) .\u003e\u003e=.",
          "normalized": "a b-\u003e(b-\u003ec(a d))-\u003ec(a d)",
          "package": "UtilityTM",
          "signature": "m a-\u003e(a-\u003eq(m b))-\u003eq(m b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/UtilityTM/docs/Control-Monad-TM.html#v:.-62--62--61-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUniversal quantification.\n\u003c/p\u003e",
          "module": "Control.Monad.TM",
          "name": "allM",
          "package": "UtilityTM",
          "signature": "(a -\u003e m Bool) -\u003e [a] -\u003e m Bool",
          "source": "src/Control-Monad-TM.html#allM",
          "type": "function"
        },
        "index": {
          "description": "Universal quantification",
          "hierarchy": "Control Monad TM",
          "module": "Control.Monad.TM",
          "name": "allM",
          "normalized": "(a-\u003eb Bool)-\u003e[a]-\u003eb Bool",
          "package": "UtilityTM",
          "signature": "(a-\u003em Bool)-\u003e[a]-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/UtilityTM/docs/Control-Monad-TM.html#v:allM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExistential quantification.\n\u003c/p\u003e",
          "module": "Control.Monad.TM",
          "name": "anyM",
          "package": "UtilityTM",
          "signature": "(a -\u003e m Bool) -\u003e [a] -\u003e m Bool",
          "source": "src/Control-Monad-TM.html#anyM",
          "type": "function"
        },
        "index": {
          "description": "Existential quantification",
          "hierarchy": "Control Monad TM",
          "module": "Control.Monad.TM",
          "name": "anyM",
          "normalized": "(a-\u003eb Bool)-\u003e[a]-\u003eb Bool",
          "package": "UtilityTM",
          "signature": "(a-\u003em Bool)-\u003e[a]-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/UtilityTM/docs/Control-Monad-TM.html#v:anyM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind an element satisfying a predicate\n\u003c/p\u003e",
          "module": "Control.Monad.TM",
          "name": "findM",
          "package": "UtilityTM",
          "signature": "(a -\u003e m Bool) -\u003e [a] -\u003e m (Maybe a)",
          "source": "src/Control-Monad-TM.html#findM",
          "type": "function"
        },
        "index": {
          "description": "Find an element satisfying predicate",
          "hierarchy": "Control Monad TM",
          "module": "Control.Monad.TM",
          "name": "findM",
          "normalized": "(a-\u003eb Bool)-\u003e[a]-\u003eb(Maybe a)",
          "package": "UtilityTM",
          "signature": "(a-\u003em Bool)-\u003e[a]-\u003em(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/UtilityTM/docs/Control-Monad-TM.html#v:findM"
      }
    }
  ]
]