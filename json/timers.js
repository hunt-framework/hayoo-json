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
        "word": "timers"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Timer.Lifted",
          "name": "Lifted",
          "package": "timers",
          "source": "src/Control-Concurrent-Timer-Lifted.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Concurrent Timer Lifted",
          "module": "Control.Concurrent.Timer.Lifted",
          "name": "Lifted",
          "package": "timers",
          "partial": "Lifted",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/timers/docs/Control-Concurrent-Timer-Lifted.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe data type representing the timer.\n For now, the action and delay are fixed for the lifetime of the Timer.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Timer.Lifted",
          "name": "Timer",
          "package": "timers",
          "source": "src/Control-Concurrent-Timer-Types.html#Timer",
          "type": "data"
        },
        "index": {
          "description": "The data type representing the timer For now the action and delay are fixed for the lifetime of the Timer",
          "hierarchy": "Control Concurrent Timer Lifted",
          "module": "Control.Concurrent.Timer.Lifted",
          "name": "Timer",
          "package": "timers",
          "partial": "Timer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/timers/docs/Control-Concurrent-Timer-Lifted.html#t:Timer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUtility\n\u003c/p\u003e",
          "module": "Control.Concurrent.Timer.Lifted",
          "name": "TimerIO",
          "package": "timers",
          "source": "src/Control-Concurrent-Timer-Lifted.html#TimerIO",
          "type": "type"
        },
        "index": {
          "description": "Utility",
          "hierarchy": "Control Concurrent Timer Lifted",
          "module": "Control.Concurrent.Timer.Lifted",
          "name": "TimerIO",
          "package": "timers",
          "partial": "Timer IO",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/timers/docs/Control-Concurrent-Timer-Lifted.html#t:TimerIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new timer. This does not start the timer.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Timer.Lifted",
          "name": "newTimer",
          "package": "timers",
          "signature": "m (Timer m)",
          "source": "src/Control-Concurrent-Timer-Lifted.html#newTimer",
          "type": "function"
        },
        "index": {
          "description": "Creates new timer This does not start the timer",
          "hierarchy": "Control Concurrent Timer Lifted",
          "module": "Control.Concurrent.Timer.Lifted",
          "name": "newTimer",
          "package": "timers",
          "partial": "Timer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timers/docs/Control-Concurrent-Timer-Lifted.html#v:newTimer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempts to restart already initialized timer.\n The restarted timer will have the same delay and action associated and will be one-shot timer.\n\u003c/p\u003e\u003cp\u003eReturns True if the restrat was successful,\n otherwise (e.g. other thread is attempting to manipulate the timer or the timer was not initialized) returns False.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Timer.Lifted",
          "name": "oneShotRestart",
          "package": "timers",
          "signature": "Timer m -\u003e m Bool",
          "source": "src/Control-Concurrent-Timer-Lifted.html#oneShotRestart",
          "type": "function"
        },
        "index": {
          "description": "Attempts to restart already initialized timer The restarted timer will have the same delay and action associated and will be one-shot timer Returns True if the restrat was successful otherwise e.g other thread is attempting to manipulate the timer or the timer was not initialized returns False",
          "hierarchy": "Control Concurrent Timer Lifted",
          "module": "Control.Concurrent.Timer.Lifted",
          "name": "oneShotRestart",
          "normalized": "Timer a-\u003ea Bool",
          "package": "timers",
          "partial": "Shot Restart",
          "signature": "Timer m-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timers/docs/Control-Concurrent-Timer-Lifted.html#v:oneShotRestart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempts to start a timer.\n The started timer will have the given delay and action associated and will be one-shot timer.\n\u003c/p\u003e\u003cp\u003eIf the timer was already initialized, it the previous timer will be stoped (the thread killed) and the timer will be started anew.\n\u003c/p\u003e\u003cp\u003eReturns True if the strat was successful,\n otherwise (e.g. other thread is attempting to manipulate the timer) returns False.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Timer.Lifted",
          "name": "oneShotStart",
          "package": "timers",
          "signature": "Timer m-\u003e m ()-\u003e Delay-\u003e m Bool",
          "type": "function"
        },
        "index": {
          "description": "Attempts to start timer The started timer will have the given delay and action associated and will be one-shot timer If the timer was already initialized it the previous timer will be stoped the thread killed and the timer will be started anew Returns True if the strat was successful otherwise e.g other thread is attempting to manipulate the timer returns False",
          "hierarchy": "Control Concurrent Timer Lifted",
          "module": "Control.Concurrent.Timer.Lifted",
          "name": "oneShotStart",
          "normalized": "Timer a-\u003ea()-\u003eDelay-\u003ea Bool",
          "package": "timers",
          "partial": "Shot Start",
          "signature": "Timer m-\u003em()-\u003eDelay-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timers/docs/Control-Concurrent-Timer-Lifted.html#v:oneShotStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecutes the the given action once after the given delay elapsed, no sooner, maybe later.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Timer.Lifted",
          "name": "oneShotTimer",
          "package": "timers",
          "signature": "m ()-\u003e Delay-\u003e m (Timer m)",
          "type": "function"
        },
        "index": {
          "description": "Executes the the given action once after the given delay elapsed no sooner maybe later",
          "hierarchy": "Control Concurrent Timer Lifted",
          "module": "Control.Concurrent.Timer.Lifted",
          "name": "oneShotTimer",
          "normalized": "a()-\u003eDelay-\u003ea(Timer a)",
          "package": "timers",
          "partial": "Shot Timer",
          "signature": "m()-\u003eDelay-\u003em(Timer m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timers/docs/Control-Concurrent-Timer-Lifted.html#v:oneShotTimer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempts to restart already initialized timer.\n The restarted timer will have the same delay and action associated and will be one-shot timer.\n\u003c/p\u003e\u003cp\u003eReturns True if the restrat was successful,\n otherwise (e.g. other thread is attempting to manipulate the timer or the timer was not initialized) returns False.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Timer.Lifted",
          "name": "repeatedRestart",
          "package": "timers",
          "signature": "Timer m -\u003e m Bool",
          "source": "src/Control-Concurrent-Timer-Lifted.html#repeatedRestart",
          "type": "function"
        },
        "index": {
          "description": "Attempts to restart already initialized timer The restarted timer will have the same delay and action associated and will be one-shot timer Returns True if the restrat was successful otherwise e.g other thread is attempting to manipulate the timer or the timer was not initialized returns False",
          "hierarchy": "Control Concurrent Timer Lifted",
          "module": "Control.Concurrent.Timer.Lifted",
          "name": "repeatedRestart",
          "normalized": "Timer a-\u003ea Bool",
          "package": "timers",
          "partial": "Restart",
          "signature": "Timer m-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timers/docs/Control-Concurrent-Timer-Lifted.html#v:repeatedRestart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempts to start a timer.\n The started timer will have the given delay and action associated and will be repeated timer.\n\u003c/p\u003e\u003cp\u003eIf the timer was already initialized, it the previous timer will be stoped (the thread killed) and the timer will be started anew.\n\u003c/p\u003e\u003cp\u003eReturns True if the strat was successful,\n otherwise (e.g. other thread is attempting to manipulate the timer) returns False.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Timer.Lifted",
          "name": "repeatedStart",
          "package": "timers",
          "signature": "Timer m-\u003e m ()-\u003e Delay-\u003e m Bool",
          "type": "function"
        },
        "index": {
          "description": "Attempts to start timer The started timer will have the given delay and action associated and will be repeated timer If the timer was already initialized it the previous timer will be stoped the thread killed and the timer will be started anew Returns True if the strat was successful otherwise e.g other thread is attempting to manipulate the timer returns False",
          "hierarchy": "Control Concurrent Timer Lifted",
          "module": "Control.Concurrent.Timer.Lifted",
          "name": "repeatedStart",
          "normalized": "Timer a-\u003ea()-\u003eDelay-\u003ea Bool",
          "package": "timers",
          "partial": "Start",
          "signature": "Timer m-\u003em()-\u003eDelay-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timers/docs/Control-Concurrent-Timer-Lifted.html#v:repeatedStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecutes the the given action repeatedly with at least the given delay between executions.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Timer.Lifted",
          "name": "repeatedTimer",
          "package": "timers",
          "signature": "m ()-\u003e Delay-\u003e m (Timer m)",
          "type": "function"
        },
        "index": {
          "description": "Executes the the given action repeatedly with at least the given delay between executions",
          "hierarchy": "Control Concurrent Timer Lifted",
          "module": "Control.Concurrent.Timer.Lifted",
          "name": "repeatedTimer",
          "normalized": "a()-\u003eDelay-\u003ea(Timer a)",
          "package": "timers",
          "partial": "Timer",
          "signature": "m()-\u003eDelay-\u003em(Timer m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timers/docs/Control-Concurrent-Timer-Lifted.html#v:repeatedTimer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function is blocking. It waits until it can stop the timer\n (until there is a value in the MVar), then it kills the timer's thread.\n\u003c/p\u003e\u003cp\u003eAfter this action completes, the Timer is not innitialized anymore (the MVar contains Nothing).\n\u003c/p\u003e",
          "module": "Control.Concurrent.Timer.Lifted",
          "name": "stopTimer",
          "package": "timers",
          "signature": "Timer m -\u003e m ()",
          "source": "src/Control-Concurrent-Timer-Lifted.html#stopTimer",
          "type": "function"
        },
        "index": {
          "description": "This function is blocking It waits until it can stop the timer until there is value in the MVar then it kills the timer thread After this action completes the Timer is not innitialized anymore the MVar contains Nothing",
          "hierarchy": "Control Concurrent Timer Lifted",
          "module": "Control.Concurrent.Timer.Lifted",
          "name": "stopTimer",
          "normalized": "Timer a-\u003ea()",
          "package": "timers",
          "partial": "Timer",
          "signature": "Timer m-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timers/docs/Control-Concurrent-Timer-Lifted.html#v:stopTimer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Timer",
          "name": "Timer",
          "package": "timers",
          "source": "src/Control-Concurrent-Timer.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Concurrent Timer",
          "module": "Control.Concurrent.Timer",
          "name": "Timer",
          "package": "timers",
          "partial": "Timer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/timers/docs/Control-Concurrent-Timer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe data type representing the timer.\n For now, the action and delay are fixed for the lifetime of the Timer.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Timer",
          "name": "Timer",
          "package": "timers",
          "source": "src/Control-Concurrent-Timer-Types.html#Timer",
          "type": "data"
        },
        "index": {
          "description": "The data type representing the timer For now the action and delay are fixed for the lifetime of the Timer",
          "hierarchy": "Control Concurrent Timer",
          "module": "Control.Concurrent.Timer",
          "name": "Timer",
          "package": "timers",
          "partial": "Timer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/timers/docs/Control-Concurrent-Timer.html#t:Timer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUtility\n\u003c/p\u003e",
          "module": "Control.Concurrent.Timer",
          "name": "TimerIO",
          "package": "timers",
          "source": "src/Control-Concurrent-Timer.html#TimerIO",
          "type": "type"
        },
        "index": {
          "description": "Utility",
          "hierarchy": "Control Concurrent Timer",
          "module": "Control.Concurrent.Timer",
          "name": "TimerIO",
          "package": "timers",
          "partial": "Timer IO",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/timers/docs/Control-Concurrent-Timer.html#t:TimerIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new timer. This does not start the timer.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Timer",
          "name": "newTimer",
          "package": "timers",
          "signature": "IO TimerIO",
          "source": "src/Control-Concurrent-Timer.html#newTimer",
          "type": "function"
        },
        "index": {
          "description": "Creates new timer This does not start the timer",
          "hierarchy": "Control Concurrent Timer",
          "module": "Control.Concurrent.Timer",
          "name": "newTimer",
          "package": "timers",
          "partial": "Timer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timers/docs/Control-Concurrent-Timer.html#v:newTimer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempts to restart already initialized timer.\n The restarted timer will have the same delay and action associated and will be one-shot timer.\n\u003c/p\u003e\u003cp\u003eReturns True if the restrat was successful,\n otherwise (e.g. other thread is attempting to manipulate the timer or the timer was not initialized) returns False.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Timer",
          "name": "oneShotRestart",
          "package": "timers",
          "signature": "TimerIO -\u003e IO Bool",
          "source": "src/Control-Concurrent-Timer.html#oneShotRestart",
          "type": "function"
        },
        "index": {
          "description": "Attempts to restart already initialized timer The restarted timer will have the same delay and action associated and will be one-shot timer Returns True if the restrat was successful otherwise e.g other thread is attempting to manipulate the timer or the timer was not initialized returns False",
          "hierarchy": "Control Concurrent Timer",
          "module": "Control.Concurrent.Timer",
          "name": "oneShotRestart",
          "normalized": "TimerIO-\u003eIO Bool",
          "package": "timers",
          "partial": "Shot Restart",
          "signature": "TimerIO-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timers/docs/Control-Concurrent-Timer.html#v:oneShotRestart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempts to start a timer.\n The started timer will have the given delay and action associated and will be one-shot timer.\n\u003c/p\u003e\u003cp\u003eIf the timer was already initialized, it the previous timer will be stoped (the thread killed) and the timer will be started anew.\n\u003c/p\u003e\u003cp\u003eReturns True if the strat was successful,\n otherwise (e.g. other thread is attempting to manipulate the timer) returns False.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Timer",
          "name": "oneShotStart",
          "package": "timers",
          "signature": "TimerIO-\u003e IO ()-\u003e Delay-\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "description": "Attempts to start timer The started timer will have the given delay and action associated and will be one-shot timer If the timer was already initialized it the previous timer will be stoped the thread killed and the timer will be started anew Returns True if the strat was successful otherwise e.g other thread is attempting to manipulate the timer returns False",
          "hierarchy": "Control Concurrent Timer",
          "module": "Control.Concurrent.Timer",
          "name": "oneShotStart",
          "normalized": "TimerIO-\u003eIO()-\u003eDelay-\u003eIO Bool",
          "package": "timers",
          "partial": "Shot Start",
          "signature": "TimerIO-\u003eIO()-\u003eDelay-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timers/docs/Control-Concurrent-Timer.html#v:oneShotStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecutes the the given action once after the given delay elapsed, no sooner, maybe later.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Timer",
          "name": "oneShotTimer",
          "package": "timers",
          "signature": "IO ()-\u003e Delay-\u003e IO TimerIO",
          "type": "function"
        },
        "index": {
          "description": "Executes the the given action once after the given delay elapsed no sooner maybe later",
          "hierarchy": "Control Concurrent Timer",
          "module": "Control.Concurrent.Timer",
          "name": "oneShotTimer",
          "normalized": "IO()-\u003eDelay-\u003eIO TimerIO",
          "package": "timers",
          "partial": "Shot Timer",
          "signature": "IO()-\u003eDelay-\u003eIO TimerIO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timers/docs/Control-Concurrent-Timer.html#v:oneShotTimer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempts to restart already initialized timer.\n The restarted timer will have the same delay and action associated and will be one-shot timer.\n\u003c/p\u003e\u003cp\u003eReturns True if the restrat was successful,\n otherwise (e.g. other thread is attempting to manipulate the timer or the timer was not initialized) returns False.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Timer",
          "name": "repeatedRestart",
          "package": "timers",
          "signature": "TimerIO -\u003e IO Bool",
          "source": "src/Control-Concurrent-Timer.html#repeatedRestart",
          "type": "function"
        },
        "index": {
          "description": "Attempts to restart already initialized timer The restarted timer will have the same delay and action associated and will be one-shot timer Returns True if the restrat was successful otherwise e.g other thread is attempting to manipulate the timer or the timer was not initialized returns False",
          "hierarchy": "Control Concurrent Timer",
          "module": "Control.Concurrent.Timer",
          "name": "repeatedRestart",
          "normalized": "TimerIO-\u003eIO Bool",
          "package": "timers",
          "partial": "Restart",
          "signature": "TimerIO-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timers/docs/Control-Concurrent-Timer.html#v:repeatedRestart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempts to start a timer.\n The started timer will have the given delay and action associated and will be repeated timer.\n\u003c/p\u003e\u003cp\u003eIf the timer was already initialized, it the previous timer will be stoped (the thread killed) and the timer will be started anew.\n\u003c/p\u003e\u003cp\u003eReturns True if the strat was successful,\n otherwise (e.g. other thread is attempting to manipulate the timer) returns False.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Timer",
          "name": "repeatedStart",
          "package": "timers",
          "signature": "TimerIO-\u003e IO ()-\u003e Delay-\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "description": "Attempts to start timer The started timer will have the given delay and action associated and will be repeated timer If the timer was already initialized it the previous timer will be stoped the thread killed and the timer will be started anew Returns True if the strat was successful otherwise e.g other thread is attempting to manipulate the timer returns False",
          "hierarchy": "Control Concurrent Timer",
          "module": "Control.Concurrent.Timer",
          "name": "repeatedStart",
          "normalized": "TimerIO-\u003eIO()-\u003eDelay-\u003eIO Bool",
          "package": "timers",
          "partial": "Start",
          "signature": "TimerIO-\u003eIO()-\u003eDelay-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timers/docs/Control-Concurrent-Timer.html#v:repeatedStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecutes the the given action repeatedly with at least the given delay between executions.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Timer",
          "name": "repeatedTimer",
          "package": "timers",
          "signature": "IO ()-\u003e Delay-\u003e IO TimerIO",
          "type": "function"
        },
        "index": {
          "description": "Executes the the given action repeatedly with at least the given delay between executions",
          "hierarchy": "Control Concurrent Timer",
          "module": "Control.Concurrent.Timer",
          "name": "repeatedTimer",
          "normalized": "IO()-\u003eDelay-\u003eIO TimerIO",
          "package": "timers",
          "partial": "Timer",
          "signature": "IO()-\u003eDelay-\u003eIO TimerIO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timers/docs/Control-Concurrent-Timer.html#v:repeatedTimer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function is blocking. It waits until it can stop the timer\n (until there is a value in the MVar), then it kills the timer's thread.\n\u003c/p\u003e\u003cp\u003eAfter this action completes, the Timer is not innitialized anymore (the MVar contains Nothing).\n\u003c/p\u003e",
          "module": "Control.Concurrent.Timer",
          "name": "stopTimer",
          "package": "timers",
          "signature": "TimerIO -\u003e IO ()",
          "source": "src/Control-Concurrent-Timer.html#stopTimer",
          "type": "function"
        },
        "index": {
          "description": "This function is blocking It waits until it can stop the timer until there is value in the MVar then it kills the timer thread After this action completes the Timer is not innitialized anymore the MVar contains Nothing",
          "hierarchy": "Control Concurrent Timer",
          "module": "Control.Concurrent.Timer",
          "name": "stopTimer",
          "normalized": "TimerIO-\u003eIO()",
          "package": "timers",
          "partial": "Timer",
          "signature": "TimerIO-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timers/docs/Control-Concurrent-Timer.html#v:stopTimer"
      }
    }
  ]
]