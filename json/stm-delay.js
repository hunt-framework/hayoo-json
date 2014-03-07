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
        "word": "stm-delay"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOne-shot timer whose duration can be updated.  Think of it as an enhanced\n version of \u003ccode\u003e\u003ca\u003eregisterDelay\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis uses \u003ca\u003eGHC.Event\u003c/a\u003e when available (GHC 7.2+, \u003ccode\u003e-threaded\u003c/code\u003e, non-Windows OS).\n Otherwise, it falls back to forked threads and \u003ccode\u003e\u003ca\u003ethreadDelay\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.STM.Delay",
          "name": "Delay",
          "package": "stm-delay",
          "source": "src/Control-Concurrent-STM-Delay.html",
          "type": "module"
        },
        "index": {
          "description": "One-shot timer whose duration can be updated Think of it as an enhanced version of registerDelay This uses GHC.Event when available GHC threaded non-Windows OS Otherwise it falls back to forked threads and threadDelay",
          "hierarchy": "Control Concurrent STM Delay",
          "module": "Control.Concurrent.STM.Delay",
          "name": "Delay",
          "package": "stm-delay",
          "partial": "Delay",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stm-delay/docs/Control-Concurrent-STM-Delay.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eDelay\u003c/a\u003e\u003c/code\u003e is an updatable timer that rings only once.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Delay",
          "name": "Delay",
          "package": "stm-delay",
          "source": "src/Control-Concurrent-STM-Delay.html#Delay",
          "type": "data"
        },
        "index": {
          "description": "Delay is an updatable timer that rings only once",
          "hierarchy": "Control Concurrent STM Delay",
          "module": "Control.Concurrent.STM.Delay",
          "name": "Delay",
          "package": "stm-delay",
          "partial": "Delay",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stm-delay/docs/Control-Concurrent-STM-Delay.html#t:Delay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a \u003ccode\u003e\u003ca\u003eDelay\u003c/a\u003e\u003c/code\u003e so it will never ring, even if \u003ccode\u003e\u003ca\u003eupdateDelay\u003c/a\u003e\u003c/code\u003e is used later.\n If the \u003ccode\u003e\u003ca\u003eDelay\u003c/a\u003e\u003c/code\u003e has already rung, do nothing.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Delay",
          "name": "cancelDelay",
          "package": "stm-delay",
          "signature": "Delay -\u003e IO ()",
          "source": "src/Control-Concurrent-STM-Delay.html#cancelDelay",
          "type": "function"
        },
        "index": {
          "description": "Set Delay so it will never ring even if updateDelay is used later If the Delay has already rung do nothing",
          "hierarchy": "Control Concurrent STM Delay",
          "module": "Control.Concurrent.STM.Delay",
          "name": "cancelDelay",
          "normalized": "Delay-\u003eIO()",
          "package": "stm-delay",
          "partial": "Delay",
          "signature": "Delay-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-delay/docs/Control-Concurrent-STM-Delay.html#v:cancelDelay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eDelay\u003c/a\u003e\u003c/code\u003e that will ring in the given number of microseconds.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Delay",
          "name": "newDelay",
          "package": "stm-delay",
          "signature": "Int -\u003e IO Delay",
          "source": "src/Control-Concurrent-STM-Delay.html#newDelay",
          "type": "function"
        },
        "index": {
          "description": "Create new Delay that will ring in the given number of microseconds",
          "hierarchy": "Control Concurrent STM Delay",
          "module": "Control.Concurrent.STM.Delay",
          "name": "newDelay",
          "normalized": "Int-\u003eIO Delay",
          "package": "stm-delay",
          "partial": "Delay",
          "signature": "Int-\u003eIO Delay",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-delay/docs/Control-Concurrent-STM-Delay.html#v:newDelay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon-blocking version of \u003ccode\u003e\u003ca\u003ewaitDelay\u003c/a\u003e\u003c/code\u003e.\n Return \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the \u003ccode\u003e\u003ca\u003eDelay\u003c/a\u003e\u003c/code\u003e has rung.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Delay",
          "name": "tryWaitDelay",
          "package": "stm-delay",
          "signature": "Delay -\u003e STM Bool",
          "source": "src/Control-Concurrent-STM-Delay.html#tryWaitDelay",
          "type": "function"
        },
        "index": {
          "description": "Non-blocking version of waitDelay Return True if the Delay has rung",
          "hierarchy": "Control Concurrent STM Delay",
          "module": "Control.Concurrent.STM.Delay",
          "name": "tryWaitDelay",
          "normalized": "Delay-\u003eSTM Bool",
          "package": "stm-delay",
          "partial": "Wait Delay",
          "signature": "Delay-\u003eSTM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-delay/docs/Control-Concurrent-STM-Delay.html#v:tryWaitDelay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFaster version of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eatomically\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003etryWaitDelay\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.  See \u003ccode\u003e\u003ca\u003ereadTVarIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.1.1\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Delay",
          "name": "tryWaitDelayIO",
          "package": "stm-delay",
          "signature": "Delay -\u003e IO Bool",
          "source": "src/Control-Concurrent-STM-Delay.html#tryWaitDelayIO",
          "type": "function"
        },
        "index": {
          "description": "Faster version of atomically tryWaitDelay See readTVarIO Since",
          "hierarchy": "Control Concurrent STM Delay",
          "module": "Control.Concurrent.STM.Delay",
          "name": "tryWaitDelayIO",
          "normalized": "Delay-\u003eIO Bool",
          "package": "stm-delay",
          "partial": "Wait Delay IO",
          "signature": "Delay-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-delay/docs/Control-Concurrent-STM-Delay.html#v:tryWaitDelayIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet an existing \u003ccode\u003e\u003ca\u003eDelay\u003c/a\u003e\u003c/code\u003e to ring in the given number of microseconds\n (from the time \u003ccode\u003e\u003ca\u003eupdateDelay\u003c/a\u003e\u003c/code\u003e is called), rather than when it was going to\n ring.  If the \u003ccode\u003e\u003ca\u003eDelay\u003c/a\u003e\u003c/code\u003e has already rung, do nothing.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Delay",
          "name": "updateDelay",
          "package": "stm-delay",
          "signature": "Delay -\u003e Int -\u003e IO ()",
          "source": "src/Control-Concurrent-STM-Delay.html#updateDelay",
          "type": "function"
        },
        "index": {
          "description": "Set an existing Delay to ring in the given number of microseconds from the time updateDelay is called rather than when it was going to ring If the Delay has already rung do nothing",
          "hierarchy": "Control Concurrent STM Delay",
          "module": "Control.Concurrent.STM.Delay",
          "name": "updateDelay",
          "normalized": "Delay-\u003eInt-\u003eIO()",
          "package": "stm-delay",
          "partial": "Delay",
          "signature": "Delay-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-delay/docs/Control-Concurrent-STM-Delay.html#v:updateDelay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlock until the \u003ccode\u003e\u003ca\u003eDelay\u003c/a\u003e\u003c/code\u003e rings.  If the \u003ccode\u003e\u003ca\u003eDelay\u003c/a\u003e\u003c/code\u003e has already rung,\n return immediately.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Delay",
          "name": "waitDelay",
          "package": "stm-delay",
          "signature": "Delay -\u003e STM ()",
          "source": "src/Control-Concurrent-STM-Delay.html#waitDelay",
          "type": "function"
        },
        "index": {
          "description": "Block until the Delay rings If the Delay has already rung return immediately",
          "hierarchy": "Control Concurrent STM Delay",
          "module": "Control.Concurrent.STM.Delay",
          "name": "waitDelay",
          "normalized": "Delay-\u003eSTM()",
          "package": "stm-delay",
          "partial": "Delay",
          "signature": "Delay-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-delay/docs/Control-Concurrent-STM-Delay.html#v:waitDelay"
      }
    }
  ]
]