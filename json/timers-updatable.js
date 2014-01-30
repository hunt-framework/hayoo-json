[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timers-updatable/docs/Control-Concurrent-Killable.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAd hoc overload of term kill\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.Killable",
        "fct-package": "timers-updatable",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-Killable.html",
        "fct-type": "module",
        "title": "Killable"
      },
      "index": {
        "description": "Ad hoc overload of term kill",
        "hierarchy": "Control Concurrent Killable",
        "module": "Control.Concurrent.Killable",
        "name": "Killable",
        "normalized": "",
        "package": "timers-updatable",
        "partial": "Killable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timers-updatable/docs/Control-Concurrent-Killable.html#t:Killable",
      "description": {
        "fct-descr": "\u003cp\u003eObjects that forked threads and can be killed\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Killable",
        "fct-package": "timers-updatable",
        "fct-signature": "class",
        "fct-source": "src/Control-Concurrent-Killable.html#Killable",
        "fct-type": "class",
        "title": "Killable"
      },
      "index": {
        "description": "Objects that forked threads and can be killed",
        "hierarchy": "Control Concurrent Killable",
        "module": "Control.Concurrent.Killable",
        "name": "Killable",
        "normalized": "",
        "package": "timers-updatable",
        "partial": "Killable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timers-updatable/docs/Control-Concurrent-Killable.html#v:kill",
      "description": {
        "fct-module": "Control.Concurrent.Killable",
        "fct-package": "timers-updatable",
        "fct-signature": "a -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-Killable.html#kill",
        "fct-type": "method",
        "title": "kill"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Killable",
        "module": "Control.Concurrent.Killable",
        "name": "kill",
        "normalized": "a-\u003eIO()",
        "package": "timers-updatable",
        "partial": "",
        "signature": "a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timers-updatable/docs/System-Timer-Updatable.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn updatable timer is a timer for which it is possible to update the remaining time. \n\u003c/p\u003e\u003cp\u003eMethods are exposed in STM to give composability. IO wrappers for those are exported also. \n\u003c/p\u003e\u003cp\u003eParallel and serial update politics are implemented.\n\u003c/p\u003e\u003cp\u003eIn the example we start a timer with a time to wait of 10 seconds, hang 2 threads which will wait for it to finish, and update \n it after 5 seconds to wait for other 6 seconds. \n It will complete and run its action and the hanged threads after 11 seconds because of its parallel nature. \n The serial timer would have ringed after 16 seconds.\n\u003c/p\u003e\u003cpre\u003e\n import Control.Concurrent\n import System.Timer.Updatable\n import Data.Maybe\n main = do\n  t \u003c- parallel (return 5) $ 10^7\n  forkIO $ waitIO t \u003e\u003e= print . (+1) . fromJust \n  forkIO $ waitIO t \u003e\u003e= print . (+2) . fromJust\n  threadDelay $ 5 * 10 ^ 6\n  renewIO t $ 6 * 10 ^ 6\n  waitIO t \u003e\u003e= print . fromJust \n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "System.Timer.Updatable",
        "fct-package": "timers-updatable",
        "fct-signature": "module",
        "fct-source": "src/System-Timer-Updatable.html",
        "fct-type": "module",
        "title": "Updatable"
      },
      "index": {
        "description": "An updatable timer is timer for which it is possible to update the remaining time Methods are exposed in STM to give composability IO wrappers for those are exported also Parallel and serial update politics are implemented In the example we start timer with time to wait of seconds hang threads which will wait for it to finish and update it after seconds to wait for other seconds It will complete and run its action and the hanged threads after seconds because of its parallel nature The serial timer would have ringed after seconds import Control.Concurrent import System.Timer.Updatable import Data.Maybe main do parallel return forkIO waitIO print fromJust forkIO waitIO print fromJust threadDelay renewIO waitIO print fromJust",
        "hierarchy": "System Timer Updatable",
        "module": "System.Timer.Updatable",
        "name": "Updatable",
        "normalized": "",
        "package": "timers-updatable",
        "partial": "Updatable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timers-updatable/docs/System-Timer-Updatable.html#t:Delay",
      "description": {
        "fct-descr": "\u003cp\u003eA delay in microseconds\n\u003c/p\u003e",
        "fct-module": "System.Timer.Updatable",
        "fct-package": "timers-updatable",
        "fct-signature": "type",
        "fct-source": "src/System-Timer-Updatable.html#Delay",
        "fct-type": "type",
        "title": "Delay"
      },
      "index": {
        "description": "delay in microseconds",
        "hierarchy": "System Timer Updatable",
        "module": "System.Timer.Updatable",
        "name": "Delay",
        "normalized": "",
        "package": "timers-updatable",
        "partial": "Delay",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timers-updatable/docs/System-Timer-Updatable.html#t:Updatable",
      "description": {
        "fct-descr": "\u003cp\u003eAbstract timers that can be updated. Hanging via wait function can be done by any number of threads, which is synchronization.\n\u003c/p\u003e",
        "fct-module": "System.Timer.Updatable",
        "fct-package": "timers-updatable",
        "fct-signature": "data",
        "fct-source": "src/System-Timer-Updatable.html#Updatable",
        "fct-type": "data",
        "title": "Updatable"
      },
      "index": {
        "description": "Abstract timers that can be updated Hanging via wait function can be done by any number of threads which is synchronization",
        "hierarchy": "System Timer Updatable",
        "module": "System.Timer.Updatable",
        "name": "Updatable",
        "normalized": "",
        "package": "timers-updatable",
        "partial": "Updatable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timers-updatable/docs/System-Timer-Updatable.html#v:longThreadDelay",
      "description": {
        "fct-descr": "\u003cp\u003ePause the thread for the given number of microseconds.  There is no guarantee that the thread will be restarted promptly\n after the delay, but it will not be started before then.\n\u003c/p\u003e\u003cp\u003eSimilar to \u003ca\u003ethreadDelay\u003c/a\u003e, but takes a 64-bit argument.  The Haskell 2010 specification says that (maxBound :: Int) is at least \n 2^29-1.  However 2^29 microseconds is only about 538 seconds.  GHC on a 32-bit machine has a 32 bit Int, but that is still less\n than 36 minutes.  64-bit signed integers give a maximum delay of over 292 million years, which should be sufficient.\n\u003c/p\u003e",
        "fct-module": "System.Timer.Updatable",
        "fct-package": "timers-updatable",
        "fct-signature": "Delay -\u003e IO ()",
        "fct-source": "src/System-Timer-Updatable.html#longThreadDelay",
        "fct-type": "function",
        "title": "longThreadDelay"
      },
      "index": {
        "description": "Pause the thread for the given number of microseconds There is no guarantee that the thread will be restarted promptly after the delay but it will not be started before then Similar to threadDelay but takes bit argument The Haskell specification says that maxBound Int is at least However microseconds is only about seconds GHC on bit machine has bit Int but that is still less than minutes bit signed integers give maximum delay of over million years which should be sufficient",
        "hierarchy": "System Timer Updatable",
        "module": "System.Timer.Updatable",
        "name": "longThreadDelay",
        "normalized": "Delay-\u003eIO()",
        "package": "timers-updatable",
        "partial": "Thread Delay",
        "signature": "Delay-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timers-updatable/docs/System-Timer-Updatable.html#v:parallel",
      "description": {
        "fct-descr": "\u003cp\u003eCreate and start a parallel updatable timer. The \u003ca\u003erenew\u003c/a\u003e action for this timer will start parallel timers. The last timer\n that is over will compute the given action.\n\u003c/p\u003e",
        "fct-module": "System.Timer.Updatable",
        "fct-package": "timers-updatable",
        "fct-signature": "IO a-\u003e Delay-\u003e IO (Updatable a)",
        "fct-type": "function",
        "title": "parallel"
      },
      "index": {
        "description": "Create and start parallel updatable timer The renew action for this timer will start parallel timers The last timer that is over will compute the given action",
        "hierarchy": "System Timer Updatable",
        "module": "System.Timer.Updatable",
        "name": "parallel",
        "normalized": "IO a-\u003eDelay-\u003eIO(Updatable a)",
        "package": "timers-updatable",
        "partial": "",
        "signature": "IO a-\u003eDelay-\u003eIO(Updatable a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timers-updatable/docs/System-Timer-Updatable.html#v:renew",
      "description": {
        "fct-descr": "\u003cp\u003eupdate the delay in the timer\n\u003c/p\u003e",
        "fct-module": "System.Timer.Updatable",
        "fct-package": "timers-updatable",
        "fct-signature": "Updatable a -\u003e Delay -\u003e STM ()",
        "fct-source": "src/System-Timer-Updatable.html#renew",
        "fct-type": "function",
        "title": "renew"
      },
      "index": {
        "description": "update the delay in the timer",
        "hierarchy": "System Timer Updatable",
        "module": "System.Timer.Updatable",
        "name": "renew",
        "normalized": "Updatable a-\u003eDelay-\u003eSTM()",
        "package": "timers-updatable",
        "partial": "",
        "signature": "Updatable a-\u003eDelay-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timers-updatable/docs/System-Timer-Updatable.html#v:renewIO",
      "description": {
        "fct-descr": "\u003cp\u003eRenew in IO \n\u003c/p\u003e",
        "fct-module": "System.Timer.Updatable",
        "fct-package": "timers-updatable",
        "fct-signature": "Updatable a -\u003e Delay -\u003e IO ()",
        "fct-source": "src/System-Timer-Updatable.html#renewIO",
        "fct-type": "function",
        "title": "renewIO"
      },
      "index": {
        "description": "Renew in IO",
        "hierarchy": "System Timer Updatable",
        "module": "System.Timer.Updatable",
        "name": "renewIO",
        "normalized": "Updatable a-\u003eDelay-\u003eIO()",
        "package": "timers-updatable",
        "partial": "IO",
        "signature": "Updatable a-\u003eDelay-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timers-updatable/docs/System-Timer-Updatable.html#v:replacer",
      "description": {
        "fct-descr": "\u003cp\u003eCreate  and start a replacer updatable timer.  The \u003ca\u003erenew\u003c/a\u003e action for this timer will insert a new timer replacing the running one.\n The timer will run the given action after this time\n\u003c/p\u003e",
        "fct-module": "System.Timer.Updatable",
        "fct-package": "timers-updatable",
        "fct-signature": "IO a-\u003e Delay-\u003e IO (Updatable a)",
        "fct-type": "function",
        "title": "replacer"
      },
      "index": {
        "description": "Create and start replacer updatable timer The renew action for this timer will insert new timer replacing the running one The timer will run the given action after this time",
        "hierarchy": "System Timer Updatable",
        "module": "System.Timer.Updatable",
        "name": "replacer",
        "normalized": "IO a-\u003eDelay-\u003eIO(Updatable a)",
        "package": "timers-updatable",
        "partial": "",
        "signature": "IO a-\u003eDelay-\u003eIO(Updatable a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timers-updatable/docs/System-Timer-Updatable.html#v:serial",
      "description": {
        "fct-descr": "\u003cp\u003eCreate and start a serial updatable timer. The \u003ca\u003erenew\u003c/a\u003e action for this timer will schedule new timer after the running one.\n The timer will run the given action after the sum of all scheduled times is over.\n\u003c/p\u003e",
        "fct-module": "System.Timer.Updatable",
        "fct-package": "timers-updatable",
        "fct-signature": "IO a-\u003e Delay-\u003e IO (Updatable a)",
        "fct-type": "function",
        "title": "serial"
      },
      "index": {
        "description": "Create and start serial updatable timer The renew action for this timer will schedule new timer after the running one The timer will run the given action after the sum of all scheduled times is over",
        "hierarchy": "System Timer Updatable",
        "module": "System.Timer.Updatable",
        "name": "serial",
        "normalized": "IO a-\u003eDelay-\u003eIO(Updatable a)",
        "package": "timers-updatable",
        "partial": "",
        "signature": "IO a-\u003eDelay-\u003eIO(Updatable a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timers-updatable/docs/System-Timer-Updatable.html#v:wait",
      "description": {
        "fct-descr": "\u003cp\u003ewait until the timer rings, or signal Nothing if timer is destroyed\n\u003c/p\u003e",
        "fct-module": "System.Timer.Updatable",
        "fct-package": "timers-updatable",
        "fct-signature": "Updatable a -\u003e STM (Maybe a)",
        "fct-source": "src/System-Timer-Updatable.html#wait",
        "fct-type": "function",
        "title": "wait"
      },
      "index": {
        "description": "wait until the timer rings or signal Nothing if timer is destroyed",
        "hierarchy": "System Timer Updatable",
        "module": "System.Timer.Updatable",
        "name": "wait",
        "normalized": "Updatable a-\u003eSTM(Maybe a)",
        "package": "timers-updatable",
        "partial": "",
        "signature": "Updatable a-\u003eSTM(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/timers-updatable/docs/System-Timer-Updatable.html#v:waitIO",
      "description": {
        "fct-descr": "\u003cp\u003eWait in IO \n\u003c/p\u003e",
        "fct-module": "System.Timer.Updatable",
        "fct-package": "timers-updatable",
        "fct-signature": "Updatable a -\u003e IO (Maybe a)",
        "fct-source": "src/System-Timer-Updatable.html#waitIO",
        "fct-type": "function",
        "title": "waitIO"
      },
      "index": {
        "description": "Wait in IO",
        "hierarchy": "System Timer Updatable",
        "module": "System.Timer.Updatable",
        "name": "waitIO",
        "normalized": "Updatable a-\u003eIO(Maybe a)",
        "package": "timers-updatable",
        "partial": "IO",
        "signature": "Updatable a-\u003eIO(Maybe a)"
      }
    }
  }
]