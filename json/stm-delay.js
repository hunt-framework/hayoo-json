[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-delay/docs/Control-Concurrent-STM-Delay.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOne-shot timer whose duration can be updated.  Think of it as an enhanced\n version of \u003ccode\u003e\u003ca\u003eregisterDelay\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis uses \u003ca\u003eGHC.Event\u003c/a\u003e when available (GHC 7.2+, \u003ccode\u003e-threaded\u003c/code\u003e, non-Windows OS).\n Otherwise, it falls back to forked threads and \u003ccode\u003e\u003ca\u003ethreadDelay\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.STM.Delay",
        "fct-package": "stm-delay",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-STM-Delay.html",
        "fct-type": "module",
        "title": "Delay"
      },
      "index": {
        "description": "One-shot timer whose duration can be updated Think of it as an enhanced version of registerDelay This uses GHC.Event when available GHC threaded non-Windows OS Otherwise it falls back to forked threads and threadDelay",
        "hierarchy": "Control Concurrent STM Delay",
        "module": "Control.Concurrent.STM.Delay",
        "name": "Delay",
        "normalized": "",
        "package": "stm-delay",
        "partial": "Delay",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-delay/docs/Control-Concurrent-STM-Delay.html#t:Delay",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eDelay\u003c/a\u003e\u003c/code\u003e is an updatable timer that rings only once.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Delay",
        "fct-package": "stm-delay",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-STM-Delay.html#Delay",
        "fct-type": "data",
        "title": "Delay"
      },
      "index": {
        "description": "Delay is an updatable timer that rings only once",
        "hierarchy": "Control Concurrent STM Delay",
        "module": "Control.Concurrent.STM.Delay",
        "name": "Delay",
        "normalized": "",
        "package": "stm-delay",
        "partial": "Delay",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-delay/docs/Control-Concurrent-STM-Delay.html#v:cancelDelay",
      "description": {
        "fct-descr": "\u003cp\u003eSet a \u003ccode\u003e\u003ca\u003eDelay\u003c/a\u003e\u003c/code\u003e so it will never ring, even if \u003ccode\u003e\u003ca\u003eupdateDelay\u003c/a\u003e\u003c/code\u003e is used later.\n If the \u003ccode\u003e\u003ca\u003eDelay\u003c/a\u003e\u003c/code\u003e has already rung, do nothing.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Delay",
        "fct-package": "stm-delay",
        "fct-signature": "Delay -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-STM-Delay.html#cancelDelay",
        "fct-type": "function",
        "title": "cancelDelay"
      },
      "index": {
        "description": "Set Delay so it will never ring even if updateDelay is used later If the Delay has already rung do nothing",
        "hierarchy": "Control Concurrent STM Delay",
        "module": "Control.Concurrent.STM.Delay",
        "name": "cancelDelay",
        "normalized": "Delay-\u003eIO()",
        "package": "stm-delay",
        "partial": "Delay",
        "signature": "Delay-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-delay/docs/Control-Concurrent-STM-Delay.html#v:newDelay",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eDelay\u003c/a\u003e\u003c/code\u003e that will ring in the given number of microseconds.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Delay",
        "fct-package": "stm-delay",
        "fct-signature": "Int -\u003e IO Delay",
        "fct-source": "src/Control-Concurrent-STM-Delay.html#newDelay",
        "fct-type": "function",
        "title": "newDelay"
      },
      "index": {
        "description": "Create new Delay that will ring in the given number of microseconds",
        "hierarchy": "Control Concurrent STM Delay",
        "module": "Control.Concurrent.STM.Delay",
        "name": "newDelay",
        "normalized": "Int-\u003eIO Delay",
        "package": "stm-delay",
        "partial": "Delay",
        "signature": "Int-\u003eIO Delay"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-delay/docs/Control-Concurrent-STM-Delay.html#v:tryWaitDelay",
      "description": {
        "fct-descr": "\u003cp\u003eNon-blocking version of \u003ccode\u003e\u003ca\u003ewaitDelay\u003c/a\u003e\u003c/code\u003e.\n Return \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the \u003ccode\u003e\u003ca\u003eDelay\u003c/a\u003e\u003c/code\u003e has rung.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Delay",
        "fct-package": "stm-delay",
        "fct-signature": "Delay -\u003e STM Bool",
        "fct-source": "src/Control-Concurrent-STM-Delay.html#tryWaitDelay",
        "fct-type": "function",
        "title": "tryWaitDelay"
      },
      "index": {
        "description": "Non-blocking version of waitDelay Return True if the Delay has rung",
        "hierarchy": "Control Concurrent STM Delay",
        "module": "Control.Concurrent.STM.Delay",
        "name": "tryWaitDelay",
        "normalized": "Delay-\u003eSTM Bool",
        "package": "stm-delay",
        "partial": "Wait Delay",
        "signature": "Delay-\u003eSTM Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-delay/docs/Control-Concurrent-STM-Delay.html#v:tryWaitDelayIO",
      "description": {
        "fct-descr": "\u003cp\u003eFaster version of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eatomically\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003etryWaitDelay\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.  See \u003ccode\u003e\u003ca\u003ereadTVarIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.1.1\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Delay",
        "fct-package": "stm-delay",
        "fct-signature": "Delay -\u003e IO Bool",
        "fct-source": "src/Control-Concurrent-STM-Delay.html#tryWaitDelayIO",
        "fct-type": "function",
        "title": "tryWaitDelayIO"
      },
      "index": {
        "description": "Faster version of atomically tryWaitDelay See readTVarIO Since",
        "hierarchy": "Control Concurrent STM Delay",
        "module": "Control.Concurrent.STM.Delay",
        "name": "tryWaitDelayIO",
        "normalized": "Delay-\u003eIO Bool",
        "package": "stm-delay",
        "partial": "Wait Delay IO",
        "signature": "Delay-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-delay/docs/Control-Concurrent-STM-Delay.html#v:updateDelay",
      "description": {
        "fct-descr": "\u003cp\u003eSet an existing \u003ccode\u003e\u003ca\u003eDelay\u003c/a\u003e\u003c/code\u003e to ring in the given number of microseconds\n (from the time \u003ccode\u003e\u003ca\u003eupdateDelay\u003c/a\u003e\u003c/code\u003e is called), rather than when it was going to\n ring.  If the \u003ccode\u003e\u003ca\u003eDelay\u003c/a\u003e\u003c/code\u003e has already rung, do nothing.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Delay",
        "fct-package": "stm-delay",
        "fct-signature": "Delay -\u003e Int -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-STM-Delay.html#updateDelay",
        "fct-type": "function",
        "title": "updateDelay"
      },
      "index": {
        "description": "Set an existing Delay to ring in the given number of microseconds from the time updateDelay is called rather than when it was going to ring If the Delay has already rung do nothing",
        "hierarchy": "Control Concurrent STM Delay",
        "module": "Control.Concurrent.STM.Delay",
        "name": "updateDelay",
        "normalized": "Delay-\u003eInt-\u003eIO()",
        "package": "stm-delay",
        "partial": "Delay",
        "signature": "Delay-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-delay/docs/Control-Concurrent-STM-Delay.html#v:waitDelay",
      "description": {
        "fct-descr": "\u003cp\u003eBlock until the \u003ccode\u003e\u003ca\u003eDelay\u003c/a\u003e\u003c/code\u003e rings.  If the \u003ccode\u003e\u003ca\u003eDelay\u003c/a\u003e\u003c/code\u003e has already rung,\n return immediately.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Delay",
        "fct-package": "stm-delay",
        "fct-signature": "Delay -\u003e STM ()",
        "fct-source": "src/Control-Concurrent-STM-Delay.html#waitDelay",
        "fct-type": "function",
        "title": "waitDelay"
      },
      "index": {
        "description": "Block until the Delay rings If the Delay has already rung return immediately",
        "hierarchy": "Control Concurrent STM Delay",
        "module": "Control.Concurrent.STM.Delay",
        "name": "waitDelay",
        "normalized": "Delay-\u003eSTM()",
        "package": "stm-delay",
        "partial": "Delay",
        "signature": "Delay-\u003eSTM()"
      }
    }
  }
]