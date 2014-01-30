[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-concurrency/docs/Pipes-Concurrent-Tutorial.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a tutorial for the \u003ccode\u003epipes-concurrency\u003c/code\u003e library.\n\u003c/p\u003e\u003cp\u003eThis tutorial assumes that you have read the \u003ccode\u003epipes\u003c/code\u003e tutorial in\n    \u003ccode\u003ePipes.Tutorial\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eI've condensed all the code examples into self-contained code listings in\n    the Appendix section that you can use to follow along.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Pipes.Concurrent.Tutorial",
        "fct-package": "pipes-concurrency",
        "fct-signature": "module",
        "fct-source": "src/Pipes-Concurrent-Tutorial.html",
        "fct-type": "module",
        "title": "Tutorial"
      },
      "index": {
        "description": "This module provides tutorial for the pipes-concurrency library This tutorial assumes that you have read the pipes tutorial in Pipes.Tutorial ve condensed all the code examples into self-contained code listings in the Appendix section that you can use to follow along",
        "hierarchy": "Pipes Concurrent Tutorial",
        "module": "Pipes.Concurrent.Tutorial",
        "name": "Tutorial",
        "normalized": "",
        "package": "pipes-concurrency",
        "partial": "Tutorial",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-concurrency/docs/Pipes-Concurrent.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAsynchronous communication between pipes\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Pipes.Concurrent",
        "fct-package": "pipes-concurrency",
        "fct-signature": "module",
        "fct-source": "src/Pipes-Concurrent.html",
        "fct-type": "module",
        "title": "Concurrent"
      },
      "index": {
        "description": "Asynchronous communication between pipes",
        "hierarchy": "Pipes Concurrent",
        "module": "Pipes.Concurrent",
        "name": "Concurrent",
        "normalized": "",
        "package": "pipes-concurrency",
        "partial": "Concurrent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-concurrency/docs/Pipes-Concurrent.html#t:Buffer",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eBuffer\u003c/a\u003e\u003c/code\u003e specifies how to buffer messages stored within the mailbox\n\u003c/p\u003e",
        "fct-module": "Pipes.Concurrent",
        "fct-package": "pipes-concurrency",
        "fct-signature": "data",
        "fct-source": "src/Pipes-Concurrent.html#Buffer",
        "fct-type": "data",
        "title": "Buffer"
      },
      "index": {
        "description": "Buffer specifies how to buffer messages stored within the mailbox",
        "hierarchy": "Pipes Concurrent",
        "module": "Pipes.Concurrent",
        "name": "Buffer",
        "normalized": "",
        "package": "pipes-concurrency",
        "partial": "Buffer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-concurrency/docs/Pipes-Concurrent.html#t:Input",
      "description": {
        "fct-descr": "\u003cp\u003eAn exhaustible source of values\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003erecv\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the source is exhausted\n\u003c/p\u003e",
        "fct-module": "Pipes.Concurrent",
        "fct-package": "pipes-concurrency",
        "fct-signature": "newtype",
        "fct-source": "src/Pipes-Concurrent.html#Input",
        "fct-type": "newtype",
        "title": "Input"
      },
      "index": {
        "description": "An exhaustible source of values recv returns Nothing if the source is exhausted",
        "hierarchy": "Pipes Concurrent",
        "module": "Pipes.Concurrent",
        "name": "Input",
        "normalized": "",
        "package": "pipes-concurrency",
        "partial": "Input",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-concurrency/docs/Pipes-Concurrent.html#t:Output",
      "description": {
        "fct-descr": "\u003cp\u003eAn exhaustible sink of values\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003esend\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e if the sink is exhausted\n\u003c/p\u003e",
        "fct-module": "Pipes.Concurrent",
        "fct-package": "pipes-concurrency",
        "fct-signature": "newtype",
        "fct-source": "src/Pipes-Concurrent.html#Output",
        "fct-type": "newtype",
        "title": "Output"
      },
      "index": {
        "description": "An exhaustible sink of values send returns False if the sink is exhausted",
        "hierarchy": "Pipes Concurrent",
        "module": "Pipes.Concurrent",
        "name": "Output",
        "normalized": "",
        "package": "pipes-concurrency",
        "partial": "Output",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-concurrency/docs/Pipes-Concurrent.html#v:Bounded",
      "description": {
        "fct-descr": "\u003cp\u003eStore a \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e number of messages, specified by the \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e argument\n\u003c/p\u003e",
        "fct-module": "Pipes.Concurrent",
        "fct-package": "pipes-concurrency",
        "fct-signature": "Bounded Int",
        "fct-source": "src/Pipes-Concurrent.html#Buffer",
        "fct-type": "function",
        "title": "Bounded"
      },
      "index": {
        "description": "Store Bounded number of messages specified by the Int argument",
        "hierarchy": "Pipes Concurrent",
        "module": "Pipes.Concurrent",
        "name": "Bounded",
        "normalized": "",
        "package": "pipes-concurrency",
        "partial": "Bounded",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-concurrency/docs/Pipes-Concurrent.html#v:Input",
      "description": {
        "fct-module": "Pipes.Concurrent",
        "fct-package": "pipes-concurrency",
        "fct-signature": "Input",
        "fct-source": "src/Pipes-Concurrent.html#Input",
        "fct-type": "function",
        "title": "Input"
      },
      "index": {
        "description": "",
        "hierarchy": "Pipes Concurrent",
        "module": "Pipes.Concurrent",
        "name": "Input",
        "normalized": "",
        "package": "pipes-concurrency",
        "partial": "Input",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-concurrency/docs/Pipes-Concurrent.html#v:Latest",
      "description": {
        "fct-descr": "\u003cp\u003eOnly store the \u003ccode\u003e\u003ca\u003eLatest\u003c/a\u003e\u003c/code\u003e message, beginning with an initial value\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eLatest\u003c/a\u003e\u003c/code\u003e is never empty nor full.\n\u003c/p\u003e",
        "fct-module": "Pipes.Concurrent",
        "fct-package": "pipes-concurrency",
        "fct-signature": "Latest a",
        "fct-source": "src/Pipes-Concurrent.html#Buffer",
        "fct-type": "function",
        "title": "Latest"
      },
      "index": {
        "description": "Only store the Latest message beginning with an initial value Latest is never empty nor full",
        "hierarchy": "Pipes Concurrent",
        "module": "Pipes.Concurrent",
        "name": "Latest",
        "normalized": "",
        "package": "pipes-concurrency",
        "partial": "Latest",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-concurrency/docs/Pipes-Concurrent.html#v:Output",
      "description": {
        "fct-module": "Pipes.Concurrent",
        "fct-package": "pipes-concurrency",
        "fct-signature": "Output",
        "fct-source": "src/Pipes-Concurrent.html#Output",
        "fct-type": "function",
        "title": "Output"
      },
      "index": {
        "description": "",
        "hierarchy": "Pipes Concurrent",
        "module": "Pipes.Concurrent",
        "name": "Output",
        "normalized": "",
        "package": "pipes-concurrency",
        "partial": "Output",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-concurrency/docs/Pipes-Concurrent.html#v:Single",
      "description": {
        "fct-descr": "\u003cp\u003eStore a \u003ccode\u003e\u003ca\u003eSingle\u003c/a\u003e\u003c/code\u003e message (like \u003ccode\u003eBounded 1\u003c/code\u003e, but more efficient)\n\u003c/p\u003e",
        "fct-module": "Pipes.Concurrent",
        "fct-package": "pipes-concurrency",
        "fct-signature": "Single",
        "fct-source": "src/Pipes-Concurrent.html#Buffer",
        "fct-type": "function",
        "title": "Single"
      },
      "index": {
        "description": "Store Single message like Bounded but more efficient",
        "hierarchy": "Pipes Concurrent",
        "module": "Pipes.Concurrent",
        "name": "Single",
        "normalized": "",
        "package": "pipes-concurrency",
        "partial": "Single",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-concurrency/docs/Pipes-Concurrent.html#v:Unbounded",
      "description": {
        "fct-descr": "\u003cp\u003eStore an \u003ccode\u003e\u003ca\u003eUnbounded\u003c/a\u003e\u003c/code\u003e number of messages in a FIFO queue\n\u003c/p\u003e",
        "fct-module": "Pipes.Concurrent",
        "fct-package": "pipes-concurrency",
        "fct-signature": "Unbounded",
        "fct-source": "src/Pipes-Concurrent.html#Buffer",
        "fct-type": "function",
        "title": "Unbounded"
      },
      "index": {
        "description": "Store an Unbounded number of messages in FIFO queue",
        "hierarchy": "Pipes Concurrent",
        "module": "Pipes.Concurrent",
        "name": "Unbounded",
        "normalized": "",
        "package": "pipes-concurrency",
        "partial": "Unbounded",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-concurrency/docs/Pipes-Concurrent.html#v:fromInput",
      "description": {
        "fct-descr": "\u003cp\u003eConvert an \u003ccode\u003e\u003ca\u003eInput\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003efromInput\u003c/a\u003e\u003c/code\u003e terminates when the \u003ccode\u003e\u003ca\u003eInput\u003c/a\u003e\u003c/code\u003e is exhausted.\n\u003c/p\u003e",
        "fct-module": "Pipes.Concurrent",
        "fct-package": "pipes-concurrency",
        "fct-signature": "Input a -\u003e Producer' a m ()",
        "fct-source": "src/Pipes-Concurrent.html#fromInput",
        "fct-type": "function",
        "title": "fromInput"
      },
      "index": {
        "description": "Convert an Input to Producer fromInput terminates when the Input is exhausted",
        "hierarchy": "Pipes Concurrent",
        "module": "Pipes.Concurrent",
        "name": "fromInput",
        "normalized": "Input a-\u003eProducer' a b()",
        "package": "pipes-concurrency",
        "partial": "Input",
        "signature": "Input a-\u003eProducer' a m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-concurrency/docs/Pipes-Concurrent.html#v:recv",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Pipes.Concurrent",
        "fct-package": "pipes-concurrency",
        "fct-signature": "STM (Maybe a)",
        "fct-source": "src/Pipes-Concurrent.html#Input",
        "fct-type": "function",
        "title": "recv"
      },
      "index": {
        "description": "",
        "hierarchy": "Pipes Concurrent",
        "module": "Pipes.Concurrent",
        "name": "recv",
        "normalized": "",
        "package": "pipes-concurrency",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-concurrency/docs/Pipes-Concurrent.html#v:send",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Pipes.Concurrent",
        "fct-package": "pipes-concurrency",
        "fct-signature": "a -\u003e STM Bool",
        "fct-source": "src/Pipes-Concurrent.html#Output",
        "fct-type": "function",
        "title": "send"
      },
      "index": {
        "description": "",
        "hierarchy": "Pipes Concurrent",
        "module": "Pipes.Concurrent",
        "name": "send",
        "normalized": "a-\u003eSTM Bool",
        "package": "pipes-concurrency",
        "partial": "",
        "signature": "a-\u003eSTM Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-concurrency/docs/Pipes-Concurrent.html#v:spawn",
      "description": {
        "fct-descr": "\u003cp\u003eSpawn a mailbox using the specified \u003ccode\u003e\u003ca\u003eBuffer\u003c/a\u003e\u003c/code\u003e to store messages\n\u003c/p\u003e\u003cp\u003eUsing \u003ccode\u003e\u003ca\u003esend\u003c/a\u003e\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003eOutput\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e fails and returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e if the mailbox is sealed, otherwise it:\n\u003c/li\u003e\u003cli\u003e retries if the mailbox is full, or:\n\u003c/li\u003e\u003cli\u003e adds a message to the mailbox and returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eUsing \u003ccode\u003e\u003ca\u003erecv\u003c/a\u003e\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003eInput\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e retrieves a message from the mailbox wrapped in \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e if the mailbox\n          is not empty, otherwise it:\n\u003c/li\u003e\u003cli\u003e retries if the mailbox is not sealed, or:\n\u003c/li\u003e\u003cli\u003e fails and returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIf either the \u003ccode\u003e\u003ca\u003eInput\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eOutput\u003c/a\u003e\u003c/code\u003e is garbage collected the mailbox will\n    become sealed.\n\u003c/p\u003e",
        "fct-module": "Pipes.Concurrent",
        "fct-package": "pipes-concurrency",
        "fct-signature": "Buffer a -\u003e IO (Output a, Input a)",
        "fct-source": "src/Pipes-Concurrent.html#spawn",
        "fct-type": "function",
        "title": "spawn"
      },
      "index": {
        "description": "Spawn mailbox using the specified Buffer to store messages Using send on the Output fails and returns False if the mailbox is sealed otherwise it retries if the mailbox is full or adds message to the mailbox and returns True Using recv on the Input retrieves message from the mailbox wrapped in Just if the mailbox is not empty otherwise it retries if the mailbox is not sealed or fails and returns Nothing If either the Input or Output is garbage collected the mailbox will become sealed",
        "hierarchy": "Pipes Concurrent",
        "module": "Pipes.Concurrent",
        "name": "spawn",
        "normalized": "Buffer a-\u003eIO(Output a,Input a)",
        "package": "pipes-concurrency",
        "partial": "",
        "signature": "Buffer a-\u003eIO(Output a,Input a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-concurrency/docs/Pipes-Concurrent.html#v:spawn-39-",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003espawn\u003c/a\u003e\u003c/code\u003e, but also returns an action to manually \u003ccode\u003eseal\u003c/code\u003e the mailbox\n    early:\n\u003c/p\u003e\u003cpre\u003e (output, input, seal) \u003c- spawn' buffer\n ...\n\u003c/pre\u003e\u003cp\u003eUse the \u003ccode\u003eseal\u003c/code\u003e action to allow early cleanup of readers and writers to the\n    mailbox without waiting for the next garbage collection cycle.\n\u003c/p\u003e",
        "fct-module": "Pipes.Concurrent",
        "fct-package": "pipes-concurrency",
        "fct-signature": "Buffer a -\u003e IO (Output a, Input a, STM ())",
        "fct-source": "src/Pipes-Concurrent.html#spawn%27",
        "fct-type": "function",
        "title": "spawn'"
      },
      "index": {
        "description": "Like spawn but also returns an action to manually seal the mailbox early output input seal spawn buffer Use the seal action to allow early cleanup of readers and writers to the mailbox without waiting for the next garbage collection cycle",
        "hierarchy": "Pipes Concurrent",
        "module": "Pipes.Concurrent",
        "name": "spawn'",
        "normalized": "Buffer a-\u003eIO(Output a,Input a,STM())",
        "package": "pipes-concurrency",
        "partial": "",
        "signature": "Buffer a-\u003eIO(Output a,Input a,STM())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-concurrency/docs/Pipes-Concurrent.html#v:toOutput",
      "description": {
        "fct-descr": "\u003cp\u003eConvert an \u003ccode\u003e\u003ca\u003eOutput\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eConsumer\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003etoOutput\u003c/a\u003e\u003c/code\u003e terminates when the \u003ccode\u003e\u003ca\u003eOutput\u003c/a\u003e\u003c/code\u003e is exhausted.\n\u003c/p\u003e",
        "fct-module": "Pipes.Concurrent",
        "fct-package": "pipes-concurrency",
        "fct-signature": "Output a -\u003e Consumer' a m ()",
        "fct-source": "src/Pipes-Concurrent.html#toOutput",
        "fct-type": "function",
        "title": "toOutput"
      },
      "index": {
        "description": "Convert an Output to Consumer toOutput terminates when the Output is exhausted",
        "hierarchy": "Pipes Concurrent",
        "module": "Pipes.Concurrent",
        "name": "toOutput",
        "normalized": "Output a-\u003eConsumer' a b()",
        "package": "pipes-concurrency",
        "partial": "Output",
        "signature": "Output a-\u003eConsumer' a m()"
      }
    }
  }
]