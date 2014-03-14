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
        "word": "pipes-concurrency"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a tutorial for the \u003ccode\u003epipes-concurrency\u003c/code\u003e library.\n\u003c/p\u003e\u003cp\u003eThis tutorial assumes that you have read the \u003ccode\u003epipes\u003c/code\u003e tutorial in\n    \u003ccode\u003ePipes.Tutorial\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eI've condensed all the code examples into self-contained code listings in\n    the Appendix section that you can use to follow along.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Pipes.Concurrent.Tutorial",
          "name": "Tutorial",
          "package": "pipes-concurrency",
          "source": "src/Pipes-Concurrent-Tutorial.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides tutorial for the pipes-concurrency library This tutorial assumes that you have read the pipes tutorial in Pipes.Tutorial ve condensed all the code examples into self-contained code listings in the Appendix section that you can use to follow along",
          "hierarchy": "Pipes Concurrent Tutorial",
          "module": "Pipes.Concurrent.Tutorial",
          "name": "Tutorial",
          "package": "pipes-concurrency",
          "partial": "Tutorial",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pipes-concurrency/docs/Pipes-Concurrent-Tutorial.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAsynchronous communication between pipes\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Pipes.Concurrent",
          "name": "Concurrent",
          "package": "pipes-concurrency",
          "source": "src/Pipes-Concurrent.html",
          "type": "module"
        },
        "index": {
          "description": "Asynchronous communication between pipes",
          "hierarchy": "Pipes Concurrent",
          "module": "Pipes.Concurrent",
          "name": "Concurrent",
          "package": "pipes-concurrency",
          "partial": "Concurrent",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pipes-concurrency/docs/Pipes-Concurrent.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eBuffer\u003c/a\u003e\u003c/code\u003e specifies how to buffer messages stored within the mailbox\n\u003c/p\u003e",
          "module": "Pipes.Concurrent",
          "name": "Buffer",
          "package": "pipes-concurrency",
          "source": "src/Pipes-Concurrent.html#Buffer",
          "type": "data"
        },
        "index": {
          "description": "Buffer specifies how to buffer messages stored within the mailbox",
          "hierarchy": "Pipes Concurrent",
          "module": "Pipes.Concurrent",
          "name": "Buffer",
          "package": "pipes-concurrency",
          "partial": "Buffer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pipes-concurrency/docs/Pipes-Concurrent.html#t:Buffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn exhaustible source of values\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003erecv\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the source is exhausted\n\u003c/p\u003e",
          "module": "Pipes.Concurrent",
          "name": "Input",
          "package": "pipes-concurrency",
          "source": "src/Pipes-Concurrent.html#Input",
          "type": "newtype"
        },
        "index": {
          "description": "An exhaustible source of values recv returns Nothing if the source is exhausted",
          "hierarchy": "Pipes Concurrent",
          "module": "Pipes.Concurrent",
          "name": "Input",
          "package": "pipes-concurrency",
          "partial": "Input",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/pipes-concurrency/docs/Pipes-Concurrent.html#t:Input"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn exhaustible sink of values\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003esend\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e if the sink is exhausted\n\u003c/p\u003e",
          "module": "Pipes.Concurrent",
          "name": "Output",
          "package": "pipes-concurrency",
          "source": "src/Pipes-Concurrent.html#Output",
          "type": "newtype"
        },
        "index": {
          "description": "An exhaustible sink of values send returns False if the sink is exhausted",
          "hierarchy": "Pipes Concurrent",
          "module": "Pipes.Concurrent",
          "name": "Output",
          "package": "pipes-concurrency",
          "partial": "Output",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/pipes-concurrency/docs/Pipes-Concurrent.html#t:Output"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore a \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e number of messages, specified by the \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e argument\n\u003c/p\u003e",
          "module": "Pipes.Concurrent",
          "name": "Bounded",
          "package": "pipes-concurrency",
          "signature": "Bounded Int",
          "source": "src/Pipes-Concurrent.html#Buffer",
          "type": "function"
        },
        "index": {
          "description": "Store Bounded number of messages specified by the Int argument",
          "hierarchy": "Pipes Concurrent",
          "module": "Pipes.Concurrent",
          "name": "Bounded",
          "package": "pipes-concurrency",
          "partial": "Bounded",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-concurrency/docs/Pipes-Concurrent.html#v:Bounded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pipes.Concurrent",
          "name": "Input",
          "package": "pipes-concurrency",
          "signature": "Input",
          "source": "src/Pipes-Concurrent.html#Input",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pipes Concurrent",
          "module": "Pipes.Concurrent",
          "name": "Input",
          "package": "pipes-concurrency",
          "partial": "Input",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-concurrency/docs/Pipes-Concurrent.html#v:Input"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOnly store the \u003ccode\u003e\u003ca\u003eLatest\u003c/a\u003e\u003c/code\u003e message, beginning with an initial value\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eLatest\u003c/a\u003e\u003c/code\u003e is never empty nor full.\n\u003c/p\u003e",
          "module": "Pipes.Concurrent",
          "name": "Latest",
          "package": "pipes-concurrency",
          "signature": "Latest a",
          "source": "src/Pipes-Concurrent.html#Buffer",
          "type": "function"
        },
        "index": {
          "description": "Only store the Latest message beginning with an initial value Latest is never empty nor full",
          "hierarchy": "Pipes Concurrent",
          "module": "Pipes.Concurrent",
          "name": "Latest",
          "package": "pipes-concurrency",
          "partial": "Latest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-concurrency/docs/Pipes-Concurrent.html#v:Latest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003eNewest 1\u003c/code\u003e, but more efficient\n\u003c/p\u003e",
          "module": "Pipes.Concurrent",
          "name": "New",
          "package": "pipes-concurrency",
          "signature": "New",
          "source": "src/Pipes-Concurrent.html#Buffer",
          "type": "function"
        },
        "index": {
          "description": "Like Newest but more efficient",
          "hierarchy": "Pipes Concurrent",
          "module": "Pipes.Concurrent",
          "name": "New",
          "package": "pipes-concurrency",
          "partial": "New",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-concurrency/docs/Pipes-Concurrent.html#v:New"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003eBounded\u003c/code\u003e, but \u003ccode\u003e\u003ca\u003esend\u003c/a\u003e\u003c/code\u003e never fails (the buffer is never full).\n        Instead, old elements are discard to make room for new elements\n\u003c/p\u003e",
          "module": "Pipes.Concurrent",
          "name": "Newest",
          "package": "pipes-concurrency",
          "signature": "Newest Int",
          "source": "src/Pipes-Concurrent.html#Buffer",
          "type": "function"
        },
        "index": {
          "description": "Like Bounded but send never fails the buffer is never full Instead old elements are discard to make room for new elements",
          "hierarchy": "Pipes Concurrent",
          "module": "Pipes.Concurrent",
          "name": "Newest",
          "package": "pipes-concurrency",
          "partial": "Newest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-concurrency/docs/Pipes-Concurrent.html#v:Newest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pipes.Concurrent",
          "name": "Output",
          "package": "pipes-concurrency",
          "signature": "Output",
          "source": "src/Pipes-Concurrent.html#Output",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pipes Concurrent",
          "module": "Pipes.Concurrent",
          "name": "Output",
          "package": "pipes-concurrency",
          "partial": "Output",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-concurrency/docs/Pipes-Concurrent.html#v:Output"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore a \u003ccode\u003e\u003ca\u003eSingle\u003c/a\u003e\u003c/code\u003e message (like \u003ccode\u003eBounded 1\u003c/code\u003e, but more efficient)\n\u003c/p\u003e",
          "module": "Pipes.Concurrent",
          "name": "Single",
          "package": "pipes-concurrency",
          "signature": "Single",
          "source": "src/Pipes-Concurrent.html#Buffer",
          "type": "function"
        },
        "index": {
          "description": "Store Single message like Bounded but more efficient",
          "hierarchy": "Pipes Concurrent",
          "module": "Pipes.Concurrent",
          "name": "Single",
          "package": "pipes-concurrency",
          "partial": "Single",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-concurrency/docs/Pipes-Concurrent.html#v:Single"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore an \u003ccode\u003e\u003ca\u003eUnbounded\u003c/a\u003e\u003c/code\u003e number of messages in a FIFO queue\n\u003c/p\u003e",
          "module": "Pipes.Concurrent",
          "name": "Unbounded",
          "package": "pipes-concurrency",
          "signature": "Unbounded",
          "source": "src/Pipes-Concurrent.html#Buffer",
          "type": "function"
        },
        "index": {
          "description": "Store an Unbounded number of messages in FIFO queue",
          "hierarchy": "Pipes Concurrent",
          "module": "Pipes.Concurrent",
          "name": "Unbounded",
          "package": "pipes-concurrency",
          "partial": "Unbounded",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-concurrency/docs/Pipes-Concurrent.html#v:Unbounded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an \u003ccode\u003e\u003ca\u003eInput\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003efromInput\u003c/a\u003e\u003c/code\u003e terminates when the \u003ccode\u003e\u003ca\u003eInput\u003c/a\u003e\u003c/code\u003e is exhausted.\n\u003c/p\u003e",
          "module": "Pipes.Concurrent",
          "name": "fromInput",
          "package": "pipes-concurrency",
          "signature": "Input a -\u003e Producer' a m ()",
          "source": "src/Pipes-Concurrent.html#fromInput",
          "type": "function"
        },
        "index": {
          "description": "Convert an Input to Producer fromInput terminates when the Input is exhausted",
          "hierarchy": "Pipes Concurrent",
          "module": "Pipes.Concurrent",
          "name": "fromInput",
          "normalized": "Input a-\u003eProducer' a b()",
          "package": "pipes-concurrency",
          "partial": "Input",
          "signature": "Input a-\u003eProducer' a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-concurrency/docs/Pipes-Concurrent.html#v:fromInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pipes.Concurrent",
          "name": "recv",
          "package": "pipes-concurrency",
          "signature": "STM (Maybe a)",
          "source": "src/Pipes-Concurrent.html#Input",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pipes Concurrent",
          "module": "Pipes.Concurrent",
          "name": "recv",
          "package": "pipes-concurrency",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-concurrency/docs/Pipes-Concurrent.html#v:recv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pipes.Concurrent",
          "name": "send",
          "package": "pipes-concurrency",
          "signature": "a -\u003e STM Bool",
          "source": "src/Pipes-Concurrent.html#Output",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pipes Concurrent",
          "module": "Pipes.Concurrent",
          "name": "send",
          "normalized": "a-\u003eSTM Bool",
          "package": "pipes-concurrency",
          "signature": "a-\u003eSTM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-concurrency/docs/Pipes-Concurrent.html#v:send"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpawn a mailbox using the specified \u003ccode\u003e\u003ca\u003eBuffer\u003c/a\u003e\u003c/code\u003e to store messages\n\u003c/p\u003e\u003cp\u003eUsing \u003ccode\u003e\u003ca\u003esend\u003c/a\u003e\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003eOutput\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e fails and returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e if the mailbox is sealed, otherwise it:\n\u003c/li\u003e\u003cli\u003e retries if the mailbox is full, or:\n\u003c/li\u003e\u003cli\u003e adds a message to the mailbox and returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eUsing \u003ccode\u003e\u003ca\u003erecv\u003c/a\u003e\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003eInput\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e retrieves a message from the mailbox wrapped in \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e if the mailbox\n          is not empty, otherwise it:\n\u003c/li\u003e\u003cli\u003e retries if the mailbox is not sealed, or:\n\u003c/li\u003e\u003cli\u003e fails and returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIf either the \u003ccode\u003e\u003ca\u003eInput\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eOutput\u003c/a\u003e\u003c/code\u003e is garbage collected the mailbox will\n    become sealed.\n\u003c/p\u003e",
          "module": "Pipes.Concurrent",
          "name": "spawn",
          "package": "pipes-concurrency",
          "signature": "Buffer a -\u003e IO (Output a, Input a)",
          "source": "src/Pipes-Concurrent.html#spawn",
          "type": "function"
        },
        "index": {
          "description": "Spawn mailbox using the specified Buffer to store messages Using send on the Output fails and returns False if the mailbox is sealed otherwise it retries if the mailbox is full or adds message to the mailbox and returns True Using recv on the Input retrieves message from the mailbox wrapped in Just if the mailbox is not empty otherwise it retries if the mailbox is not sealed or fails and returns Nothing If either the Input or Output is garbage collected the mailbox will become sealed",
          "hierarchy": "Pipes Concurrent",
          "module": "Pipes.Concurrent",
          "name": "spawn",
          "normalized": "Buffer a-\u003eIO(Output a,Input a)",
          "package": "pipes-concurrency",
          "signature": "Buffer a-\u003eIO(Output a,Input a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-concurrency/docs/Pipes-Concurrent.html#v:spawn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003espawn\u003c/a\u003e\u003c/code\u003e, but also returns an action to manually \u003ccode\u003eseal\u003c/code\u003e the mailbox\n    early:\n\u003c/p\u003e\u003cpre\u003e (output, input, seal) \u003c- spawn' buffer\n ...\n\u003c/pre\u003e\u003cp\u003eUse the \u003ccode\u003eseal\u003c/code\u003e action to allow early cleanup of readers and writers to the\n    mailbox without waiting for the next garbage collection cycle.\n\u003c/p\u003e",
          "module": "Pipes.Concurrent",
          "name": "spawn'",
          "package": "pipes-concurrency",
          "signature": "Buffer a -\u003e IO (Output a, Input a, STM ())",
          "source": "src/Pipes-Concurrent.html#spawn%27",
          "type": "function"
        },
        "index": {
          "description": "Like spawn but also returns an action to manually seal the mailbox early output input seal spawn buffer Use the seal action to allow early cleanup of readers and writers to the mailbox without waiting for the next garbage collection cycle",
          "hierarchy": "Pipes Concurrent",
          "module": "Pipes.Concurrent",
          "name": "spawn'",
          "normalized": "Buffer a-\u003eIO(Output a,Input a,STM())",
          "package": "pipes-concurrency",
          "signature": "Buffer a-\u003eIO(Output a,Input a,STM())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-concurrency/docs/Pipes-Concurrent.html#v:spawn-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an \u003ccode\u003e\u003ca\u003eOutput\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eConsumer\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003etoOutput\u003c/a\u003e\u003c/code\u003e terminates when the \u003ccode\u003e\u003ca\u003eOutput\u003c/a\u003e\u003c/code\u003e is exhausted.\n\u003c/p\u003e",
          "module": "Pipes.Concurrent",
          "name": "toOutput",
          "package": "pipes-concurrency",
          "signature": "Output a -\u003e Consumer' a m ()",
          "source": "src/Pipes-Concurrent.html#toOutput",
          "type": "function"
        },
        "index": {
          "description": "Convert an Output to Consumer toOutput terminates when the Output is exhausted",
          "hierarchy": "Pipes Concurrent",
          "module": "Pipes.Concurrent",
          "name": "toOutput",
          "normalized": "Output a-\u003eConsumer' a b()",
          "package": "pipes-concurrency",
          "partial": "Output",
          "signature": "Output a-\u003eConsumer' a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-concurrency/docs/Pipes-Concurrent.html#v:toOutput"
      }
    }
  ]
]