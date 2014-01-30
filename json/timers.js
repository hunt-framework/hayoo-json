[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timers/docs/Control-Concurrent-Timer-Lifted.html#",
      "description": {
        "fct-module": "Control.Concurrent.Timer.Lifted",
        "fct-package": "timers",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-Timer-Lifted.html",
        "fct-type": "module",
        "title": "Lifted"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Timer Lifted",
        "module": "Control.Concurrent.Timer.Lifted",
        "name": "Lifted",
        "normalized": "",
        "package": "timers",
        "partial": "Lifted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timers/docs/Control-Concurrent-Timer-Lifted.html#t:Timer",
      "description": {
        "fct-descr": "\u003cp\u003eThe data type representing the timer.\n For now, the action and delay are fixed for the lifetime of the Timer.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Timer.Lifted",
        "fct-package": "timers",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-Timer-Types.html#Timer",
        "fct-type": "data",
        "title": "Timer"
      },
      "index": {
        "description": "The data type representing the timer For now the action and delay are fixed for the lifetime of the Timer",
        "hierarchy": "Control Concurrent Timer Lifted",
        "module": "Control.Concurrent.Timer.Lifted",
        "name": "Timer",
        "normalized": "",
        "package": "timers",
        "partial": "Timer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timers/docs/Control-Concurrent-Timer-Lifted.html#t:TimerIO",
      "description": {
        "fct-descr": "\u003cp\u003eUtility\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Timer.Lifted",
        "fct-package": "timers",
        "fct-signature": "type",
        "fct-source": "src/Control-Concurrent-Timer-Lifted.html#TimerIO",
        "fct-type": "type",
        "title": "TimerIO"
      },
      "index": {
        "description": "Utility",
        "hierarchy": "Control Concurrent Timer Lifted",
        "module": "Control.Concurrent.Timer.Lifted",
        "name": "TimerIO",
        "normalized": "",
        "package": "timers",
        "partial": "Timer IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timers/docs/Control-Concurrent-Timer-Lifted.html#v:newTimer",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new timer. This does not start the timer.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Timer.Lifted",
        "fct-package": "timers",
        "fct-signature": "m (Timer m)",
        "fct-source": "src/Control-Concurrent-Timer-Lifted.html#newTimer",
        "fct-type": "function",
        "title": "newTimer"
      },
      "index": {
        "description": "Creates new timer This does not start the timer",
        "hierarchy": "Control Concurrent Timer Lifted",
        "module": "Control.Concurrent.Timer.Lifted",
        "name": "newTimer",
        "normalized": "",
        "package": "timers",
        "partial": "Timer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timers/docs/Control-Concurrent-Timer-Lifted.html#v:oneShotRestart",
      "description": {
        "fct-descr": "\u003cp\u003eAttempts to restart already initialized timer.\n The restarted timer will have the same delay and action associated and will be one-shot timer.\n\u003c/p\u003e\u003cp\u003eReturns True if the restrat was successful,\n otherwise (e.g. other thread is attempting to manipulate the timer or the timer was not initialized) returns False.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Timer.Lifted",
        "fct-package": "timers",
        "fct-signature": "Timer m -\u003e m Bool",
        "fct-source": "src/Control-Concurrent-Timer-Lifted.html#oneShotRestart",
        "fct-type": "function",
        "title": "oneShotRestart"
      },
      "index": {
        "description": "Attempts to restart already initialized timer The restarted timer will have the same delay and action associated and will be one-shot timer Returns True if the restrat was successful otherwise e.g other thread is attempting to manipulate the timer or the timer was not initialized returns False",
        "hierarchy": "Control Concurrent Timer Lifted",
        "module": "Control.Concurrent.Timer.Lifted",
        "name": "oneShotRestart",
        "normalized": "Timer a-\u003ea Bool",
        "package": "timers",
        "partial": "Shot Restart",
        "signature": "Timer m-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timers/docs/Control-Concurrent-Timer-Lifted.html#v:oneShotStart",
      "description": {
        "fct-descr": "\u003cp\u003eAttempts to start a timer.\n The started timer will have the given delay and action associated and will be one-shot timer.\n\u003c/p\u003e\u003cp\u003eIf the timer was already initialized, it the previous timer will be stoped (the thread killed) and the timer will be started anew.\n\u003c/p\u003e\u003cp\u003eReturns True if the strat was successful,\n otherwise (e.g. other thread is attempting to manipulate the timer) returns False.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Timer.Lifted",
        "fct-package": "timers",
        "fct-signature": "Timer m-\u003e m ()-\u003e Delay-\u003e m Bool",
        "fct-type": "function",
        "title": "oneShotStart"
      },
      "index": {
        "description": "Attempts to start timer The started timer will have the given delay and action associated and will be one-shot timer If the timer was already initialized it the previous timer will be stoped the thread killed and the timer will be started anew Returns True if the strat was successful otherwise e.g other thread is attempting to manipulate the timer returns False",
        "hierarchy": "Control Concurrent Timer Lifted",
        "module": "Control.Concurrent.Timer.Lifted",
        "name": "oneShotStart",
        "normalized": "Timer a-\u003ea()-\u003eDelay-\u003ea Bool",
        "package": "timers",
        "partial": "Shot Start",
        "signature": "Timer m-\u003em()-\u003eDelay-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timers/docs/Control-Concurrent-Timer-Lifted.html#v:oneShotTimer",
      "description": {
        "fct-descr": "\u003cp\u003eExecutes the the given action once after the given delay elapsed, no sooner, maybe later.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Timer.Lifted",
        "fct-package": "timers",
        "fct-signature": "m ()-\u003e Delay-\u003e m (Timer m)",
        "fct-type": "function",
        "title": "oneShotTimer"
      },
      "index": {
        "description": "Executes the the given action once after the given delay elapsed no sooner maybe later",
        "hierarchy": "Control Concurrent Timer Lifted",
        "module": "Control.Concurrent.Timer.Lifted",
        "name": "oneShotTimer",
        "normalized": "a()-\u003eDelay-\u003ea(Timer a)",
        "package": "timers",
        "partial": "Shot Timer",
        "signature": "m()-\u003eDelay-\u003em(Timer m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timers/docs/Control-Concurrent-Timer-Lifted.html#v:repeatedRestart",
      "description": {
        "fct-descr": "\u003cp\u003eAttempts to restart already initialized timer.\n The restarted timer will have the same delay and action associated and will be one-shot timer.\n\u003c/p\u003e\u003cp\u003eReturns True if the restrat was successful,\n otherwise (e.g. other thread is attempting to manipulate the timer or the timer was not initialized) returns False.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Timer.Lifted",
        "fct-package": "timers",
        "fct-signature": "Timer m -\u003e m Bool",
        "fct-source": "src/Control-Concurrent-Timer-Lifted.html#repeatedRestart",
        "fct-type": "function",
        "title": "repeatedRestart"
      },
      "index": {
        "description": "Attempts to restart already initialized timer The restarted timer will have the same delay and action associated and will be one-shot timer Returns True if the restrat was successful otherwise e.g other thread is attempting to manipulate the timer or the timer was not initialized returns False",
        "hierarchy": "Control Concurrent Timer Lifted",
        "module": "Control.Concurrent.Timer.Lifted",
        "name": "repeatedRestart",
        "normalized": "Timer a-\u003ea Bool",
        "package": "timers",
        "partial": "Restart",
        "signature": "Timer m-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timers/docs/Control-Concurrent-Timer-Lifted.html#v:repeatedStart",
      "description": {
        "fct-descr": "\u003cp\u003eAttempts to start a timer.\n The started timer will have the given delay and action associated and will be repeated timer.\n\u003c/p\u003e\u003cp\u003eIf the timer was already initialized, it the previous timer will be stoped (the thread killed) and the timer will be started anew.\n\u003c/p\u003e\u003cp\u003eReturns True if the strat was successful,\n otherwise (e.g. other thread is attempting to manipulate the timer) returns False.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Timer.Lifted",
        "fct-package": "timers",
        "fct-signature": "Timer m-\u003e m ()-\u003e Delay-\u003e m Bool",
        "fct-type": "function",
        "title": "repeatedStart"
      },
      "index": {
        "description": "Attempts to start timer The started timer will have the given delay and action associated and will be repeated timer If the timer was already initialized it the previous timer will be stoped the thread killed and the timer will be started anew Returns True if the strat was successful otherwise e.g other thread is attempting to manipulate the timer returns False",
        "hierarchy": "Control Concurrent Timer Lifted",
        "module": "Control.Concurrent.Timer.Lifted",
        "name": "repeatedStart",
        "normalized": "Timer a-\u003ea()-\u003eDelay-\u003ea Bool",
        "package": "timers",
        "partial": "Start",
        "signature": "Timer m-\u003em()-\u003eDelay-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timers/docs/Control-Concurrent-Timer-Lifted.html#v:repeatedTimer",
      "description": {
        "fct-descr": "\u003cp\u003eExecutes the the given action repeatedly with at least the given delay between executions.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Timer.Lifted",
        "fct-package": "timers",
        "fct-signature": "m ()-\u003e Delay-\u003e m (Timer m)",
        "fct-type": "function",
        "title": "repeatedTimer"
      },
      "index": {
        "description": "Executes the the given action repeatedly with at least the given delay between executions",
        "hierarchy": "Control Concurrent Timer Lifted",
        "module": "Control.Concurrent.Timer.Lifted",
        "name": "repeatedTimer",
        "normalized": "a()-\u003eDelay-\u003ea(Timer a)",
        "package": "timers",
        "partial": "Timer",
        "signature": "m()-\u003eDelay-\u003em(Timer m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timers/docs/Control-Concurrent-Timer-Lifted.html#v:stopTimer",
      "description": {
        "fct-descr": "\u003cp\u003eThis function is blocking. It waits until it can stop the timer\n (until there is a value in the MVar), then it kills the timer's thread.\n\u003c/p\u003e\u003cp\u003eAfter this action completes, the Timer is not innitialized anymore (the MVar contains Nothing).\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Timer.Lifted",
        "fct-package": "timers",
        "fct-signature": "Timer m -\u003e m ()",
        "fct-source": "src/Control-Concurrent-Timer-Lifted.html#stopTimer",
        "fct-type": "function",
        "title": "stopTimer"
      },
      "index": {
        "description": "This function is blocking It waits until it can stop the timer until there is value in the MVar then it kills the timer thread After this action completes the Timer is not innitialized anymore the MVar contains Nothing",
        "hierarchy": "Control Concurrent Timer Lifted",
        "module": "Control.Concurrent.Timer.Lifted",
        "name": "stopTimer",
        "normalized": "Timer a-\u003ea()",
        "package": "timers",
        "partial": "Timer",
        "signature": "Timer m-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timers/docs/Control-Concurrent-Timer.html#",
      "description": {
        "fct-module": "Control.Concurrent.Timer",
        "fct-package": "timers",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-Timer.html",
        "fct-type": "module",
        "title": "Timer"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Timer",
        "module": "Control.Concurrent.Timer",
        "name": "Timer",
        "normalized": "",
        "package": "timers",
        "partial": "Timer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timers/docs/Control-Concurrent-Timer.html#t:Timer",
      "description": {
        "fct-descr": "\u003cp\u003eThe data type representing the timer.\n For now, the action and delay are fixed for the lifetime of the Timer.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Timer",
        "fct-package": "timers",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-Timer-Types.html#Timer",
        "fct-type": "data",
        "title": "Timer"
      },
      "index": {
        "description": "The data type representing the timer For now the action and delay are fixed for the lifetime of the Timer",
        "hierarchy": "Control Concurrent Timer",
        "module": "Control.Concurrent.Timer",
        "name": "Timer",
        "normalized": "",
        "package": "timers",
        "partial": "Timer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timers/docs/Control-Concurrent-Timer.html#t:TimerIO",
      "description": {
        "fct-descr": "\u003cp\u003eUtility\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Timer",
        "fct-package": "timers",
        "fct-signature": "type",
        "fct-source": "src/Control-Concurrent-Timer.html#TimerIO",
        "fct-type": "type",
        "title": "TimerIO"
      },
      "index": {
        "description": "Utility",
        "hierarchy": "Control Concurrent Timer",
        "module": "Control.Concurrent.Timer",
        "name": "TimerIO",
        "normalized": "",
        "package": "timers",
        "partial": "Timer IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timers/docs/Control-Concurrent-Timer.html#v:newTimer",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new timer. This does not start the timer.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Timer",
        "fct-package": "timers",
        "fct-signature": "IO TimerIO",
        "fct-source": "src/Control-Concurrent-Timer.html#newTimer",
        "fct-type": "function",
        "title": "newTimer"
      },
      "index": {
        "description": "Creates new timer This does not start the timer",
        "hierarchy": "Control Concurrent Timer",
        "module": "Control.Concurrent.Timer",
        "name": "newTimer",
        "normalized": "",
        "package": "timers",
        "partial": "Timer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timers/docs/Control-Concurrent-Timer.html#v:oneShotRestart",
      "description": {
        "fct-descr": "\u003cp\u003eAttempts to restart already initialized timer.\n The restarted timer will have the same delay and action associated and will be one-shot timer.\n\u003c/p\u003e\u003cp\u003eReturns True if the restrat was successful,\n otherwise (e.g. other thread is attempting to manipulate the timer or the timer was not initialized) returns False.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Timer",
        "fct-package": "timers",
        "fct-signature": "TimerIO -\u003e IO Bool",
        "fct-source": "src/Control-Concurrent-Timer.html#oneShotRestart",
        "fct-type": "function",
        "title": "oneShotRestart"
      },
      "index": {
        "description": "Attempts to restart already initialized timer The restarted timer will have the same delay and action associated and will be one-shot timer Returns True if the restrat was successful otherwise e.g other thread is attempting to manipulate the timer or the timer was not initialized returns False",
        "hierarchy": "Control Concurrent Timer",
        "module": "Control.Concurrent.Timer",
        "name": "oneShotRestart",
        "normalized": "TimerIO-\u003eIO Bool",
        "package": "timers",
        "partial": "Shot Restart",
        "signature": "TimerIO-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timers/docs/Control-Concurrent-Timer.html#v:oneShotStart",
      "description": {
        "fct-descr": "\u003cp\u003eAttempts to start a timer.\n The started timer will have the given delay and action associated and will be one-shot timer.\n\u003c/p\u003e\u003cp\u003eIf the timer was already initialized, it the previous timer will be stoped (the thread killed) and the timer will be started anew.\n\u003c/p\u003e\u003cp\u003eReturns True if the strat was successful,\n otherwise (e.g. other thread is attempting to manipulate the timer) returns False.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Timer",
        "fct-package": "timers",
        "fct-signature": "TimerIO-\u003e IO ()-\u003e Delay-\u003e IO Bool",
        "fct-type": "function",
        "title": "oneShotStart"
      },
      "index": {
        "description": "Attempts to start timer The started timer will have the given delay and action associated and will be one-shot timer If the timer was already initialized it the previous timer will be stoped the thread killed and the timer will be started anew Returns True if the strat was successful otherwise e.g other thread is attempting to manipulate the timer returns False",
        "hierarchy": "Control Concurrent Timer",
        "module": "Control.Concurrent.Timer",
        "name": "oneShotStart",
        "normalized": "TimerIO-\u003eIO()-\u003eDelay-\u003eIO Bool",
        "package": "timers",
        "partial": "Shot Start",
        "signature": "TimerIO-\u003eIO()-\u003eDelay-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timers/docs/Control-Concurrent-Timer.html#v:oneShotTimer",
      "description": {
        "fct-descr": "\u003cp\u003eExecutes the the given action once after the given delay elapsed, no sooner, maybe later.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Timer",
        "fct-package": "timers",
        "fct-signature": "IO ()-\u003e Delay-\u003e IO TimerIO",
        "fct-type": "function",
        "title": "oneShotTimer"
      },
      "index": {
        "description": "Executes the the given action once after the given delay elapsed no sooner maybe later",
        "hierarchy": "Control Concurrent Timer",
        "module": "Control.Concurrent.Timer",
        "name": "oneShotTimer",
        "normalized": "IO()-\u003eDelay-\u003eIO TimerIO",
        "package": "timers",
        "partial": "Shot Timer",
        "signature": "IO()-\u003eDelay-\u003eIO TimerIO"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timers/docs/Control-Concurrent-Timer.html#v:repeatedRestart",
      "description": {
        "fct-descr": "\u003cp\u003eAttempts to restart already initialized timer.\n The restarted timer will have the same delay and action associated and will be one-shot timer.\n\u003c/p\u003e\u003cp\u003eReturns True if the restrat was successful,\n otherwise (e.g. other thread is attempting to manipulate the timer or the timer was not initialized) returns False.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Timer",
        "fct-package": "timers",
        "fct-signature": "TimerIO -\u003e IO Bool",
        "fct-source": "src/Control-Concurrent-Timer.html#repeatedRestart",
        "fct-type": "function",
        "title": "repeatedRestart"
      },
      "index": {
        "description": "Attempts to restart already initialized timer The restarted timer will have the same delay and action associated and will be one-shot timer Returns True if the restrat was successful otherwise e.g other thread is attempting to manipulate the timer or the timer was not initialized returns False",
        "hierarchy": "Control Concurrent Timer",
        "module": "Control.Concurrent.Timer",
        "name": "repeatedRestart",
        "normalized": "TimerIO-\u003eIO Bool",
        "package": "timers",
        "partial": "Restart",
        "signature": "TimerIO-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timers/docs/Control-Concurrent-Timer.html#v:repeatedStart",
      "description": {
        "fct-descr": "\u003cp\u003eAttempts to start a timer.\n The started timer will have the given delay and action associated and will be repeated timer.\n\u003c/p\u003e\u003cp\u003eIf the timer was already initialized, it the previous timer will be stoped (the thread killed) and the timer will be started anew.\n\u003c/p\u003e\u003cp\u003eReturns True if the strat was successful,\n otherwise (e.g. other thread is attempting to manipulate the timer) returns False.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Timer",
        "fct-package": "timers",
        "fct-signature": "TimerIO-\u003e IO ()-\u003e Delay-\u003e IO Bool",
        "fct-type": "function",
        "title": "repeatedStart"
      },
      "index": {
        "description": "Attempts to start timer The started timer will have the given delay and action associated and will be repeated timer If the timer was already initialized it the previous timer will be stoped the thread killed and the timer will be started anew Returns True if the strat was successful otherwise e.g other thread is attempting to manipulate the timer returns False",
        "hierarchy": "Control Concurrent Timer",
        "module": "Control.Concurrent.Timer",
        "name": "repeatedStart",
        "normalized": "TimerIO-\u003eIO()-\u003eDelay-\u003eIO Bool",
        "package": "timers",
        "partial": "Start",
        "signature": "TimerIO-\u003eIO()-\u003eDelay-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timers/docs/Control-Concurrent-Timer.html#v:repeatedTimer",
      "description": {
        "fct-descr": "\u003cp\u003eExecutes the the given action repeatedly with at least the given delay between executions.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Timer",
        "fct-package": "timers",
        "fct-signature": "IO ()-\u003e Delay-\u003e IO TimerIO",
        "fct-type": "function",
        "title": "repeatedTimer"
      },
      "index": {
        "description": "Executes the the given action repeatedly with at least the given delay between executions",
        "hierarchy": "Control Concurrent Timer",
        "module": "Control.Concurrent.Timer",
        "name": "repeatedTimer",
        "normalized": "IO()-\u003eDelay-\u003eIO TimerIO",
        "package": "timers",
        "partial": "Timer",
        "signature": "IO()-\u003eDelay-\u003eIO TimerIO"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timers/docs/Control-Concurrent-Timer.html#v:stopTimer",
      "description": {
        "fct-descr": "\u003cp\u003eThis function is blocking. It waits until it can stop the timer\n (until there is a value in the MVar), then it kills the timer's thread.\n\u003c/p\u003e\u003cp\u003eAfter this action completes, the Timer is not innitialized anymore (the MVar contains Nothing).\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Timer",
        "fct-package": "timers",
        "fct-signature": "TimerIO -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-Timer.html#stopTimer",
        "fct-type": "function",
        "title": "stopTimer"
      },
      "index": {
        "description": "This function is blocking It waits until it can stop the timer until there is value in the MVar then it kills the timer thread After this action completes the Timer is not innitialized anymore the MVar contains Nothing",
        "hierarchy": "Control Concurrent Timer",
        "module": "Control.Concurrent.Timer",
        "name": "stopTimer",
        "normalized": "TimerIO-\u003eIO()",
        "package": "timers",
        "partial": "Timer",
        "signature": "TimerIO-\u003eIO()"
      }
    }
  }
]