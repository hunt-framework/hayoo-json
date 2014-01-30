[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Consumer/docs/Control-Monad-Consumer.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA monad for consuming streams - I believe this is basically just a specialized version of the State monad. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Consumer",
        "fct-package": "Consumer",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Consumer.html",
        "fct-type": "module",
        "title": "Consumer"
      },
      "index": {
        "description": "monad for consuming streams believe this is basically just specialized version of the State monad",
        "hierarchy": "Control Monad Consumer",
        "module": "Control.Monad.Consumer",
        "name": "Consumer",
        "normalized": "",
        "package": "Consumer",
        "partial": "Consumer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Consumer/docs/Control-Monad-Consumer.html#t:Consumer",
      "description": {
        "fct-module": "Control.Monad.Consumer",
        "fct-package": "Consumer",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Consumer.html#Consumer",
        "fct-type": "newtype",
        "title": "Consumer"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Consumer",
        "module": "Control.Monad.Consumer",
        "name": "Consumer",
        "normalized": "",
        "package": "Consumer",
        "partial": "Consumer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Consumer/docs/Control-Monad-Consumer.html#t:ConsumerT",
      "description": {
        "fct-module": "Control.Monad.Consumer",
        "fct-package": "Consumer",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Consumer.html#ConsumerT",
        "fct-type": "newtype",
        "title": "ConsumerT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Consumer",
        "module": "Control.Monad.Consumer",
        "name": "ConsumerT",
        "normalized": "",
        "package": "Consumer",
        "partial": "Consumer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Consumer/docs/Control-Monad-Consumer.html#t:MonadConsumer",
      "description": {
        "fct-module": "Control.Monad.Consumer",
        "fct-package": "Consumer",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Consumer.html#MonadConsumer",
        "fct-type": "class",
        "title": "MonadConsumer"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Consumer",
        "module": "Control.Monad.Consumer",
        "name": "MonadConsumer",
        "normalized": "",
        "package": "Consumer",
        "partial": "Monad Consumer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Consumer/docs/Control-Monad-Consumer.html#v:Consumer",
      "description": {
        "fct-module": "Control.Monad.Consumer",
        "fct-package": "Consumer",
        "fct-signature": "Consumer ([c] -\u003e (a, [c]))",
        "fct-source": "src/Control-Monad-Consumer.html#Consumer",
        "fct-type": "function",
        "title": "Consumer"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Consumer",
        "module": "Control.Monad.Consumer",
        "name": "Consumer",
        "normalized": "Consumer([a]-\u003e(b,[a]))",
        "package": "Consumer",
        "partial": "Consumer",
        "signature": "Consumer([c]-\u003e(a,[c]))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Consumer/docs/Control-Monad-Consumer.html#v:ConsumerT",
      "description": {
        "fct-module": "Control.Monad.Consumer",
        "fct-package": "Consumer",
        "fct-signature": "ConsumerT",
        "fct-source": "src/Control-Monad-Consumer.html#ConsumerT",
        "fct-type": "function",
        "title": "ConsumerT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Consumer",
        "module": "Control.Monad.Consumer",
        "name": "ConsumerT",
        "normalized": "",
        "package": "Consumer",
        "partial": "Consumer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Consumer/docs/Control-Monad-Consumer.html#v:evalConsumer",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a stateful computation, ignoring the final state.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Consumer",
        "fct-package": "Consumer",
        "fct-signature": "[c] -\u003e Consumer c a -\u003e a",
        "fct-source": "src/Control-Monad-Consumer.html#evalConsumer",
        "fct-type": "function",
        "title": "evalConsumer"
      },
      "index": {
        "description": "Execute stateful computation ignoring the final state",
        "hierarchy": "Control Monad Consumer",
        "module": "Control.Monad.Consumer",
        "name": "evalConsumer",
        "normalized": "[a]-\u003eConsumer a b-\u003eb",
        "package": "Consumer",
        "partial": "Consumer",
        "signature": "[c]-\u003eConsumer c a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Consumer/docs/Control-Monad-Consumer.html#v:execConsumer",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a stateful computation, just for the side effect.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Consumer",
        "fct-package": "Consumer",
        "fct-signature": "[c] -\u003e Consumer c a -\u003e [c]",
        "fct-source": "src/Control-Monad-Consumer.html#execConsumer",
        "fct-type": "function",
        "title": "execConsumer"
      },
      "index": {
        "description": "Execute stateful computation just for the side effect",
        "hierarchy": "Control Monad Consumer",
        "module": "Control.Monad.Consumer",
        "name": "execConsumer",
        "normalized": "[a]-\u003eConsumer a b-\u003e[a]",
        "package": "Consumer",
        "partial": "Consumer",
        "signature": "[c]-\u003eConsumer c a-\u003e[c]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Consumer/docs/Control-Monad-Consumer.html#v:next",
      "description": {
        "fct-module": "Control.Monad.Consumer",
        "fct-package": "Consumer",
        "fct-signature": "next",
        "fct-source": "src/Control-Monad-Consumer.html#next",
        "fct-type": "method",
        "title": "next"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Consumer",
        "module": "Control.Monad.Consumer",
        "name": "next",
        "normalized": "",
        "package": "Consumer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Consumer/docs/Control-Monad-Consumer.html#v:peek",
      "description": {
        "fct-module": "Control.Monad.Consumer",
        "fct-package": "Consumer",
        "fct-signature": "peek",
        "fct-source": "src/Control-Monad-Consumer.html#peek",
        "fct-type": "method",
        "title": "peek"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Consumer",
        "module": "Control.Monad.Consumer",
        "name": "peek",
        "normalized": "",
        "package": "Consumer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Consumer/docs/Control-Monad-Consumer.html#v:poke",
      "description": {
        "fct-module": "Control.Monad.Consumer",
        "fct-package": "Consumer",
        "fct-signature": "poke",
        "fct-source": "src/Control-Monad-Consumer.html#poke",
        "fct-type": "method",
        "title": "poke"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Consumer",
        "module": "Control.Monad.Consumer",
        "name": "poke",
        "normalized": "",
        "package": "Consumer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Consumer/docs/Control-Monad-Consumer.html#v:runConsumer",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a stateful computation, as a result we get\n the result of the computation, and the final state.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Consumer",
        "fct-package": "Consumer",
        "fct-signature": "[c] -\u003e Consumer c a -\u003e (a, [c])",
        "fct-source": "src/Control-Monad-Consumer.html#runConsumer",
        "fct-type": "function",
        "title": "runConsumer"
      },
      "index": {
        "description": "Execute stateful computation as result we get the result of the computation and the final state",
        "hierarchy": "Control Monad Consumer",
        "module": "Control.Monad.Consumer",
        "name": "runConsumer",
        "normalized": "[a]-\u003eConsumer a b-\u003e(b,[a])",
        "package": "Consumer",
        "partial": "Consumer",
        "signature": "[c]-\u003eConsumer c a-\u003e(a,[c])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Consumer/docs/Control-Monad-Consumer.html#v:runConsumerT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Consumer",
        "fct-package": "Consumer",
        "fct-signature": "[c] -\u003e m (a, [c])",
        "fct-source": "src/Control-Monad-Consumer.html#ConsumerT",
        "fct-type": "function",
        "title": "runConsumerT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Consumer",
        "module": "Control.Monad.Consumer",
        "name": "runConsumerT",
        "normalized": "[a]-\u003eb(c,[a])",
        "package": "Consumer",
        "partial": "Consumer",
        "signature": "[c]-\u003em(a,[c])"
      }
    }
  }
]