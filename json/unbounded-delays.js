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
        "word": "unbounded-delays"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eArbitrarily long thread delays.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.Thread.Delay",
          "name": "Delay",
          "package": "unbounded-delays",
          "source": "src/Control-Concurrent-Thread-Delay.html",
          "type": "module"
        },
        "index": {
          "description": "Arbitrarily long thread delays",
          "hierarchy": "Control Concurrent Thread Delay",
          "module": "Control.Concurrent.Thread.Delay",
          "name": "Delay",
          "package": "unbounded-delays",
          "partial": "Delay",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unbounded-delays/docs/Control-Concurrent-Thread-Delay.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003eControl.Concurrent.\u003ccode\u003e\u003ca\u003ethreadDelay\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, but not bounded by an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSuspends the current thread for a given number of microseconds (GHC only).\n\u003c/p\u003e\u003cp\u003eThere is no guarantee that the thread will be rescheduled promptly when the\ndelay has expired, but the thread will never continue to run earlier than\nspecified.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Thread.Delay",
          "name": "delay",
          "package": "unbounded-delays",
          "signature": "Integer -\u003e IO ()",
          "source": "src/Control-Concurrent-Thread-Delay.html#delay",
          "type": "function"
        },
        "index": {
          "description": "Like Control.Concurrent threadDelay but not bounded by an Int Suspends the current thread for given number of microseconds GHC only There is no guarantee that the thread will be rescheduled promptly when the delay has expired but the thread will never continue to run earlier than specified",
          "hierarchy": "Control Concurrent Thread Delay",
          "module": "Control.Concurrent.Thread.Delay",
          "name": "delay",
          "normalized": "Integer-\u003eIO()",
          "package": "unbounded-delays",
          "signature": "Integer-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unbounded-delays/docs/Control-Concurrent-Thread-Delay.html#v:delay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWait arbitrarily long for an IO computation to finish.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.Timeout",
          "name": "Timeout",
          "package": "unbounded-delays",
          "source": "src/Control-Concurrent-Timeout.html",
          "type": "module"
        },
        "index": {
          "description": "Wait arbitrarily long for an IO computation to finish",
          "hierarchy": "Control Concurrent Timeout",
          "module": "Control.Concurrent.Timeout",
          "name": "Timeout",
          "package": "unbounded-delays",
          "partial": "Timeout",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unbounded-delays/docs/Control-Concurrent-Timeout.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003eSystem.Timeout.\u003ccode\u003e\u003ca\u003etimeout\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, but not bounded by an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWrap an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e computation to time out and return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e in case no result is\navailable within \u003ccode\u003en\u003c/code\u003e microseconds (\u003ccode\u003e1/10^6\u003c/code\u003e seconds). In case a result is\navailable before the timeout expires, \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ea\u003c/code\u003e is returned. A negative timeout\ninterval means \"wait indefinitely\".\n\u003c/p\u003e\u003cp\u003eThe design of this combinator was guided by the objective that \u003ccode\u003etimeout n f\u003c/code\u003e\nshould behave exactly the same as \u003ccode\u003ef\u003c/code\u003e as long as \u003ccode\u003ef\u003c/code\u003e doesn't time out. This\nmeans that \u003ccode\u003ef\u003c/code\u003e has the same \u003ccode\u003e\u003ca\u003emyThreadId\u003c/a\u003e\u003c/code\u003e it would have without the timeout\nwrapper. Any exceptions \u003ccode\u003ef\u003c/code\u003e might throw cancel the timeout and propagate further\nup. It also possible for \u003ccode\u003ef\u003c/code\u003e to receive exceptions thrown to it by another\nthread.\n\u003c/p\u003e\u003cp\u003eA tricky implementation detail is the question of how to abort an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\ncomputation. This combinator relies on asynchronous exceptions internally.  The\ntechnique works very well for computations executing inside of the Haskell\nruntime system, but it doesn't work at all for non-Haskell code. Foreign\nfunction calls, for example, cannot be timed out with this combinator simply\nbecause an arbitrary C function cannot receive asynchronous exceptions. When\n\u003ccode\u003etimeout\u003c/code\u003e is used to wrap an FFI call that blocks, no timeout event can be\ndelivered until the FFI call returns, which pretty much negates the purpose of\nthe combinator. In practice, however, this limitation is less severe than it may\nsound. Standard I/O functions like \u003ccode\u003e\u003ca\u003ehGetBuf\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ehPutBuf\u003c/a\u003e\u003c/code\u003e,\nNetwork.Socket.accept, or \u003ccode\u003e\u003ca\u003ehWaitForInput\u003c/a\u003e\u003c/code\u003e appear to be blocking, but\nthey really don't because the runtime system uses scheduling mechanisms like\n\u003ccode\u003eselect(2)\u003c/code\u003e to perform asynchronous I/O, so it is possible to interrupt\nstandard socket I/O or file I/O using this combinator.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Timeout",
          "name": "timeout",
          "package": "unbounded-delays",
          "signature": "Integer -\u003e IO α -\u003e IO (Maybe α)",
          "source": "src/Control-Concurrent-Timeout.html#timeout",
          "type": "function"
        },
        "index": {
          "description": "Like System.Timeout timeout but not bounded by an Int Wrap an IO computation to time out and return Nothing in case no result is available within microseconds seconds In case result is available before the timeout expires Just is returned negative timeout interval means wait indefinitely The design of this combinator was guided by the objective that timeout should behave exactly the same as as long as doesn time out This means that has the same myThreadId it would have without the timeout wrapper Any exceptions might throw cancel the timeout and propagate further up It also possible for to receive exceptions thrown to it by another thread tricky implementation detail is the question of how to abort an IO computation This combinator relies on asynchronous exceptions internally The technique works very well for computations executing inside of the Haskell runtime system but it doesn work at all for non-Haskell code Foreign function calls for example cannot be timed out with this combinator simply because an arbitrary function cannot receive asynchronous exceptions When timeout is used to wrap an FFI call that blocks no timeout event can be delivered until the FFI call returns which pretty much negates the purpose of the combinator In practice however this limitation is less severe than it may sound Standard functions like hGetBuf hPutBuf Network.Socket.accept or hWaitForInput appear to be blocking but they really don because the runtime system uses scheduling mechanisms like select to perform asynchronous so it is possible to interrupt standard socket or file using this combinator",
          "hierarchy": "Control Concurrent Timeout",
          "module": "Control.Concurrent.Timeout",
          "name": "timeout",
          "normalized": "Integer-\u003eIO a-\u003eIO(Maybe a)",
          "package": "unbounded-delays",
          "signature": "Integer-\u003eIO α-\u003eIO(Maybe α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unbounded-delays/docs/Control-Concurrent-Timeout.html#v:timeout"
      }
    }
  ]
]