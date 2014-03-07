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
        "word": "Consumer"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA monad for consuming streams - I believe this is basically just a specialized version of the State monad. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Consumer",
          "name": "Consumer",
          "package": "Consumer",
          "source": "src/Control-Monad-Consumer.html",
          "type": "module"
        },
        "index": {
          "description": "monad for consuming streams believe this is basically just specialized version of the State monad",
          "hierarchy": "Control Monad Consumer",
          "module": "Control.Monad.Consumer",
          "name": "Consumer",
          "package": "Consumer",
          "partial": "Consumer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Consumer/docs/Control-Monad-Consumer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Consumer",
          "name": "Consumer",
          "package": "Consumer",
          "source": "src/Control-Monad-Consumer.html#Consumer",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Monad Consumer",
          "module": "Control.Monad.Consumer",
          "name": "Consumer",
          "package": "Consumer",
          "partial": "Consumer",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/Consumer/docs/Control-Monad-Consumer.html#t:Consumer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Consumer",
          "name": "ConsumerT",
          "package": "Consumer",
          "source": "src/Control-Monad-Consumer.html#ConsumerT",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Monad Consumer",
          "module": "Control.Monad.Consumer",
          "name": "ConsumerT",
          "package": "Consumer",
          "partial": "Consumer",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/Consumer/docs/Control-Monad-Consumer.html#t:ConsumerT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Consumer",
          "name": "MonadConsumer",
          "package": "Consumer",
          "source": "src/Control-Monad-Consumer.html#MonadConsumer",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad Consumer",
          "module": "Control.Monad.Consumer",
          "name": "MonadConsumer",
          "package": "Consumer",
          "partial": "Monad Consumer",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Consumer/docs/Control-Monad-Consumer.html#t:MonadConsumer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Consumer",
          "name": "Consumer",
          "package": "Consumer",
          "signature": "Consumer ([c] -\u003e (a, [c]))",
          "source": "src/Control-Monad-Consumer.html#Consumer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Consumer",
          "module": "Control.Monad.Consumer",
          "name": "Consumer",
          "normalized": "Consumer([a]-\u003e(b,[a]))",
          "package": "Consumer",
          "partial": "Consumer",
          "signature": "Consumer([c]-\u003e(a,[c]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Consumer/docs/Control-Monad-Consumer.html#v:Consumer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Consumer",
          "name": "ConsumerT",
          "package": "Consumer",
          "signature": "ConsumerT",
          "source": "src/Control-Monad-Consumer.html#ConsumerT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Consumer",
          "module": "Control.Monad.Consumer",
          "name": "ConsumerT",
          "package": "Consumer",
          "partial": "Consumer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Consumer/docs/Control-Monad-Consumer.html#v:ConsumerT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a stateful computation, ignoring the final state.\n\u003c/p\u003e",
          "module": "Control.Monad.Consumer",
          "name": "evalConsumer",
          "package": "Consumer",
          "signature": "[c] -\u003e Consumer c a -\u003e a",
          "source": "src/Control-Monad-Consumer.html#evalConsumer",
          "type": "function"
        },
        "index": {
          "description": "Execute stateful computation ignoring the final state",
          "hierarchy": "Control Monad Consumer",
          "module": "Control.Monad.Consumer",
          "name": "evalConsumer",
          "normalized": "[a]-\u003eConsumer a b-\u003eb",
          "package": "Consumer",
          "partial": "Consumer",
          "signature": "[c]-\u003eConsumer c a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Consumer/docs/Control-Monad-Consumer.html#v:evalConsumer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a stateful computation, just for the side effect.\n\u003c/p\u003e",
          "module": "Control.Monad.Consumer",
          "name": "execConsumer",
          "package": "Consumer",
          "signature": "[c] -\u003e Consumer c a -\u003e [c]",
          "source": "src/Control-Monad-Consumer.html#execConsumer",
          "type": "function"
        },
        "index": {
          "description": "Execute stateful computation just for the side effect",
          "hierarchy": "Control Monad Consumer",
          "module": "Control.Monad.Consumer",
          "name": "execConsumer",
          "normalized": "[a]-\u003eConsumer a b-\u003e[a]",
          "package": "Consumer",
          "partial": "Consumer",
          "signature": "[c]-\u003eConsumer c a-\u003e[c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Consumer/docs/Control-Monad-Consumer.html#v:execConsumer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Consumer",
          "name": "next",
          "package": "Consumer",
          "signature": "next",
          "source": "src/Control-Monad-Consumer.html#next",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Consumer",
          "module": "Control.Monad.Consumer",
          "name": "next",
          "package": "Consumer",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Consumer/docs/Control-Monad-Consumer.html#v:next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Consumer",
          "name": "peek",
          "package": "Consumer",
          "signature": "peek",
          "source": "src/Control-Monad-Consumer.html#peek",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Consumer",
          "module": "Control.Monad.Consumer",
          "name": "peek",
          "package": "Consumer",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Consumer/docs/Control-Monad-Consumer.html#v:peek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Consumer",
          "name": "poke",
          "package": "Consumer",
          "signature": "poke",
          "source": "src/Control-Monad-Consumer.html#poke",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Consumer",
          "module": "Control.Monad.Consumer",
          "name": "poke",
          "package": "Consumer",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Consumer/docs/Control-Monad-Consumer.html#v:poke"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a stateful computation, as a result we get\n the result of the computation, and the final state.\n\u003c/p\u003e",
          "module": "Control.Monad.Consumer",
          "name": "runConsumer",
          "package": "Consumer",
          "signature": "[c] -\u003e Consumer c a -\u003e (a, [c])",
          "source": "src/Control-Monad-Consumer.html#runConsumer",
          "type": "function"
        },
        "index": {
          "description": "Execute stateful computation as result we get the result of the computation and the final state",
          "hierarchy": "Control Monad Consumer",
          "module": "Control.Monad.Consumer",
          "name": "runConsumer",
          "normalized": "[a]-\u003eConsumer a b-\u003e(b,[a])",
          "package": "Consumer",
          "partial": "Consumer",
          "signature": "[c]-\u003eConsumer c a-\u003e(a,[c])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Consumer/docs/Control-Monad-Consumer.html#v:runConsumer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Consumer",
          "name": "runConsumerT",
          "package": "Consumer",
          "signature": "[c] -\u003e m (a, [c])",
          "source": "src/Control-Monad-Consumer.html#ConsumerT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Consumer",
          "module": "Control.Monad.Consumer",
          "name": "runConsumerT",
          "normalized": "[a]-\u003eb(c,[a])",
          "package": "Consumer",
          "partial": "Consumer",
          "signature": "[c]-\u003em(a,[c])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Consumer/docs/Control-Monad-Consumer.html#v:runConsumerT"
      }
    }
  ]
]