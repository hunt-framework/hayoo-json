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
        "word": "timers-updatable"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAd hoc overload of term kill\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.Killable",
          "name": "Killable",
          "package": "timers-updatable",
          "source": "src/Control-Concurrent-Killable.html",
          "type": "module"
        },
        "index": {
          "description": "Ad hoc overload of term kill",
          "hierarchy": "Control Concurrent Killable",
          "module": "Control.Concurrent.Killable",
          "name": "Killable",
          "package": "timers-updatable",
          "partial": "Killable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/timers-updatable/docs/Control-Concurrent-Killable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObjects that forked threads and can be killed\n\u003c/p\u003e",
          "module": "Control.Concurrent.Killable",
          "name": "Killable",
          "package": "timers-updatable",
          "source": "src/Control-Concurrent-Killable.html#Killable",
          "type": "class"
        },
        "index": {
          "description": "Objects that forked threads and can be killed",
          "hierarchy": "Control Concurrent Killable",
          "module": "Control.Concurrent.Killable",
          "name": "Killable",
          "package": "timers-updatable",
          "partial": "Killable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/timers-updatable/docs/Control-Concurrent-Killable.html#t:Killable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Killable",
          "name": "kill",
          "package": "timers-updatable",
          "signature": "a -\u003e IO ()",
          "source": "src/Control-Concurrent-Killable.html#kill",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Concurrent Killable",
          "module": "Control.Concurrent.Killable",
          "name": "kill",
          "normalized": "a-\u003eIO()",
          "package": "timers-updatable",
          "signature": "a-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/timers-updatable/docs/Control-Concurrent-Killable.html#v:kill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn updatable timer is a timer for which it is possible to update the remaining time. \n\u003c/p\u003e\u003cp\u003eMethods are exposed in STM to give composability. IO wrappers for those are exported also. \n\u003c/p\u003e\u003cp\u003eParallel and serial update politics are implemented.\n\u003c/p\u003e\u003cp\u003eIn the example we start a timer with a time to wait of 10 seconds, hang 2 threads which will wait for it to finish, and update \n it after 5 seconds to wait for other 6 seconds. \n It will complete and run its action and the hanged threads after 11 seconds because of its parallel nature. \n The serial timer would have ringed after 16 seconds.\n\u003c/p\u003e\u003cpre\u003e\n import Control.Concurrent\n import System.Timer.Updatable\n import Data.Maybe\n main = do\n  t \u003c- parallel (return 5) $ 10^7\n  forkIO $ waitIO t \u003e\u003e= print . (+1) . fromJust \n  forkIO $ waitIO t \u003e\u003e= print . (+2) . fromJust\n  threadDelay $ 5 * 10 ^ 6\n  renewIO t $ 6 * 10 ^ 6\n  waitIO t \u003e\u003e= print . fromJust \n\u003c/pre\u003e\u003c/div\u003e",
          "module": "System.Timer.Updatable",
          "name": "Updatable",
          "package": "timers-updatable",
          "source": "src/System-Timer-Updatable.html",
          "type": "module"
        },
        "index": {
          "description": "An updatable timer is timer for which it is possible to update the remaining time Methods are exposed in STM to give composability IO wrappers for those are exported also Parallel and serial update politics are implemented In the example we start timer with time to wait of seconds hang threads which will wait for it to finish and update it after seconds to wait for other seconds It will complete and run its action and the hanged threads after seconds because of its parallel nature The serial timer would have ringed after seconds import Control.Concurrent import System.Timer.Updatable import Data.Maybe main do parallel return forkIO waitIO print fromJust forkIO waitIO print fromJust threadDelay renewIO waitIO print fromJust",
          "hierarchy": "System Timer Updatable",
          "module": "System.Timer.Updatable",
          "name": "Updatable",
          "package": "timers-updatable",
          "partial": "Updatable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/timers-updatable/docs/System-Timer-Updatable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA delay in microseconds\n\u003c/p\u003e",
          "module": "System.Timer.Updatable",
          "name": "Delay",
          "package": "timers-updatable",
          "source": "src/System-Timer-Updatable.html#Delay",
          "type": "type"
        },
        "index": {
          "description": "delay in microseconds",
          "hierarchy": "System Timer Updatable",
          "module": "System.Timer.Updatable",
          "name": "Delay",
          "package": "timers-updatable",
          "partial": "Delay",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/timers-updatable/docs/System-Timer-Updatable.html#t:Delay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstract timers that can be updated. Hanging via wait function can be done by any number of threads, which is synchronization.\n\u003c/p\u003e",
          "module": "System.Timer.Updatable",
          "name": "Updatable",
          "package": "timers-updatable",
          "source": "src/System-Timer-Updatable.html#Updatable",
          "type": "data"
        },
        "index": {
          "description": "Abstract timers that can be updated Hanging via wait function can be done by any number of threads which is synchronization",
          "hierarchy": "System Timer Updatable",
          "module": "System.Timer.Updatable",
          "name": "Updatable",
          "package": "timers-updatable",
          "partial": "Updatable",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/timers-updatable/docs/System-Timer-Updatable.html#t:Updatable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePause the thread for the given number of microseconds.  There is no guarantee that the thread will be restarted promptly\n after the delay, but it will not be started before then.\n\u003c/p\u003e\u003cp\u003eSimilar to \u003ca\u003ethreadDelay\u003c/a\u003e, but takes a 64-bit argument.  The Haskell 2010 specification says that (maxBound :: Int) is at least \n 2^29-1.  However 2^29 microseconds is only about 538 seconds.  GHC on a 32-bit machine has a 32 bit Int, but that is still less\n than 36 minutes.  64-bit signed integers give a maximum delay of over 292 million years, which should be sufficient.\n\u003c/p\u003e",
          "module": "System.Timer.Updatable",
          "name": "longThreadDelay",
          "package": "timers-updatable",
          "signature": "Delay -\u003e IO ()",
          "source": "src/System-Timer-Updatable.html#longThreadDelay",
          "type": "function"
        },
        "index": {
          "description": "Pause the thread for the given number of microseconds There is no guarantee that the thread will be restarted promptly after the delay but it will not be started before then Similar to threadDelay but takes bit argument The Haskell specification says that maxBound Int is at least However microseconds is only about seconds GHC on bit machine has bit Int but that is still less than minutes bit signed integers give maximum delay of over million years which should be sufficient",
          "hierarchy": "System Timer Updatable",
          "module": "System.Timer.Updatable",
          "name": "longThreadDelay",
          "normalized": "Delay-\u003eIO()",
          "package": "timers-updatable",
          "partial": "Thread Delay",
          "signature": "Delay-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timers-updatable/docs/System-Timer-Updatable.html#v:longThreadDelay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate and start a parallel updatable timer. The \u003ca\u003erenew\u003c/a\u003e action for this timer will start parallel timers. The last timer\n that is over will compute the given action.\n\u003c/p\u003e",
          "module": "System.Timer.Updatable",
          "name": "parallel",
          "package": "timers-updatable",
          "signature": "IO a-\u003e Delay-\u003e IO (Updatable a)",
          "type": "function"
        },
        "index": {
          "description": "Create and start parallel updatable timer The renew action for this timer will start parallel timers The last timer that is over will compute the given action",
          "hierarchy": "System Timer Updatable",
          "module": "System.Timer.Updatable",
          "name": "parallel",
          "normalized": "IO a-\u003eDelay-\u003eIO(Updatable a)",
          "package": "timers-updatable",
          "signature": "IO a-\u003eDelay-\u003eIO(Updatable a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timers-updatable/docs/System-Timer-Updatable.html#v:parallel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eupdate the delay in the timer\n\u003c/p\u003e",
          "module": "System.Timer.Updatable",
          "name": "renew",
          "package": "timers-updatable",
          "signature": "Updatable a -\u003e Delay -\u003e STM ()",
          "source": "src/System-Timer-Updatable.html#renew",
          "type": "function"
        },
        "index": {
          "description": "update the delay in the timer",
          "hierarchy": "System Timer Updatable",
          "module": "System.Timer.Updatable",
          "name": "renew",
          "normalized": "Updatable a-\u003eDelay-\u003eSTM()",
          "package": "timers-updatable",
          "signature": "Updatable a-\u003eDelay-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timers-updatable/docs/System-Timer-Updatable.html#v:renew"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenew in IO \n\u003c/p\u003e",
          "module": "System.Timer.Updatable",
          "name": "renewIO",
          "package": "timers-updatable",
          "signature": "Updatable a -\u003e Delay -\u003e IO ()",
          "source": "src/System-Timer-Updatable.html#renewIO",
          "type": "function"
        },
        "index": {
          "description": "Renew in IO",
          "hierarchy": "System Timer Updatable",
          "module": "System.Timer.Updatable",
          "name": "renewIO",
          "normalized": "Updatable a-\u003eDelay-\u003eIO()",
          "package": "timers-updatable",
          "partial": "IO",
          "signature": "Updatable a-\u003eDelay-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timers-updatable/docs/System-Timer-Updatable.html#v:renewIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate  and start a replacer updatable timer.  The \u003ca\u003erenew\u003c/a\u003e action for this timer will insert a new timer replacing the running one.\n The timer will run the given action after this time\n\u003c/p\u003e",
          "module": "System.Timer.Updatable",
          "name": "replacer",
          "package": "timers-updatable",
          "signature": "IO a-\u003e Delay-\u003e IO (Updatable a)",
          "type": "function"
        },
        "index": {
          "description": "Create and start replacer updatable timer The renew action for this timer will insert new timer replacing the running one The timer will run the given action after this time",
          "hierarchy": "System Timer Updatable",
          "module": "System.Timer.Updatable",
          "name": "replacer",
          "normalized": "IO a-\u003eDelay-\u003eIO(Updatable a)",
          "package": "timers-updatable",
          "signature": "IO a-\u003eDelay-\u003eIO(Updatable a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timers-updatable/docs/System-Timer-Updatable.html#v:replacer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate and start a serial updatable timer. The \u003ca\u003erenew\u003c/a\u003e action for this timer will schedule new timer after the running one.\n The timer will run the given action after the sum of all scheduled times is over.\n\u003c/p\u003e",
          "module": "System.Timer.Updatable",
          "name": "serial",
          "package": "timers-updatable",
          "signature": "IO a-\u003e Delay-\u003e IO (Updatable a)",
          "type": "function"
        },
        "index": {
          "description": "Create and start serial updatable timer The renew action for this timer will schedule new timer after the running one The timer will run the given action after the sum of all scheduled times is over",
          "hierarchy": "System Timer Updatable",
          "module": "System.Timer.Updatable",
          "name": "serial",
          "normalized": "IO a-\u003eDelay-\u003eIO(Updatable a)",
          "package": "timers-updatable",
          "signature": "IO a-\u003eDelay-\u003eIO(Updatable a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timers-updatable/docs/System-Timer-Updatable.html#v:serial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewait until the timer rings, or signal Nothing if timer is destroyed\n\u003c/p\u003e",
          "module": "System.Timer.Updatable",
          "name": "wait",
          "package": "timers-updatable",
          "signature": "Updatable a -\u003e STM (Maybe a)",
          "source": "src/System-Timer-Updatable.html#wait",
          "type": "function"
        },
        "index": {
          "description": "wait until the timer rings or signal Nothing if timer is destroyed",
          "hierarchy": "System Timer Updatable",
          "module": "System.Timer.Updatable",
          "name": "wait",
          "normalized": "Updatable a-\u003eSTM(Maybe a)",
          "package": "timers-updatable",
          "signature": "Updatable a-\u003eSTM(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timers-updatable/docs/System-Timer-Updatable.html#v:wait"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWait in IO \n\u003c/p\u003e",
          "module": "System.Timer.Updatable",
          "name": "waitIO",
          "package": "timers-updatable",
          "signature": "Updatable a -\u003e IO (Maybe a)",
          "source": "src/System-Timer-Updatable.html#waitIO",
          "type": "function"
        },
        "index": {
          "description": "Wait in IO",
          "hierarchy": "System Timer Updatable",
          "module": "System.Timer.Updatable",
          "name": "waitIO",
          "normalized": "Updatable a-\u003eIO(Maybe a)",
          "package": "timers-updatable",
          "partial": "IO",
          "signature": "Updatable a-\u003eIO(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/timers-updatable/docs/System-Timer-Updatable.html#v:waitIO"
      }
    }
  ]
]