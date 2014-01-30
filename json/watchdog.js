[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/watchdog/docs/Control-Watchdog.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHow to use:\n\u003c/p\u003e\u003cpre\u003e import Control.Watchdog\n import Data.Time\n\n errorProneTask :: IO (Either String ())\n errorProneTask = do\n     getCurrentTime \u003e\u003e= print\n     return $ Left \"some error\"\n\n main = watchdog $ watch errorProneTask\n\u003c/pre\u003e\u003cp\u003eResult:\n\u003c/p\u003e\u003cpre\u003e\n 2012-07-09 21:48:19.592252 UTC\n Watchdog: Error executing task (some error) - waiting 1s before trying again.\n 2012-07-09 21:48:20.594381 UTC\n Watchdog: Error executing task (some error) - waiting 2s before trying again.\n 2012-07-09 21:48:22.597069 UTC\n Watchdog: Error executing task (some error) - waiting 4s before trying again.\n ...\n\u003c/pre\u003e\u003cp\u003eAlternatively the watchdog can stop after a certain number of attempts:\n\u003c/p\u003e\u003cpre\u003e import Control.Watchdog\n import Data.Time\n\n errorProneTask :: IO (Either String ())\n errorProneTask = do\n     getCurrentTime \u003e\u003e= print\n     return $ Left \"some error\"\n\n main = do\n     result \u003c- watchdog $ do\n         setMaximumRetries 2\n         watchImpatiently errorProneTask\n     print result\n\u003c/pre\u003e\u003cp\u003eResult:\n\u003c/p\u003e\u003cpre\u003e\n 2012-07-09 21:55:41.046432 UTC\n Watchdog: Error executing task (some error) - waiting 1s before trying again.\n 2012-07-09 21:55:42.047246 UTC\n Watchdog: Error executing task (some error) - waiting 2s before trying again.\n 2012-07-09 21:55:44.049993 UTC\n Left \"some error\"\n\u003c/pre\u003e\u003cp\u003eThe watchdog will execute the task and check the return value, which should\n be an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e value where \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e signals an error and \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e signals success.\n\u003c/p\u003e\u003cp\u003eThe watchdog will backoff exponentially (up to a maximum delay) in case of\n persisting errors, but will reset after the task has been running for a while\n without problems (see \u003ccode\u003e\u003ca\u003esetResetDuration\u003c/a\u003e\u003c/code\u003e) and start a new cycle of\n exponential backoff should new errors arise.\n\u003c/p\u003e\u003cp\u003eThe module is intended to be used in different watchdog settings. For example\n to keep an eye on a server process (use \u003ccode\u003e\u003ca\u003ewatch\u003c/a\u003e\u003c/code\u003e and only return a succesful\n result when the server is doing a clean shutdown) or to retry an action\n multiple times, if necessary, before giving up (use \u003ccode\u003e\u003ca\u003ewatchImpatiently\u003c/a\u003e\u003c/code\u003e).  A\n monadic approach is used to modify the various settings. Below is a code\n sample with all possible configuration options and their default values:\n\u003c/p\u003e\u003cpre\u003e import Control.Watchdog\n import Data.Time\n\n errorProneTask :: IO (Either String ())\n errorProneTask = do\n     getCurrentTime \u003e\u003e= print\n     return $ Left \"some error\"\n\n main = watchdog $ do\n         setInitialDelay $ 1 * 10^6      -- 1 second\n         setMaximumDelay $ 300 * 10^6    -- 300 seconds\n         setMaximumRetries 10            -- has no effect when using 'watch'\n         setResetDuration $ 30 * 10^6    -- 30 seconds\n         setLoggingAction defaultLogger\n         watch errorProneTask\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Control.Watchdog",
        "fct-package": "watchdog",
        "fct-signature": "module",
        "fct-source": "src/Control-Watchdog.html",
        "fct-type": "module",
        "title": "Watchdog"
      },
      "index": {
        "description": "How to use import Control.Watchdog import Data.Time errorProneTask IO Either String errorProneTask do getCurrentTime print return Left some error main watchdog watch errorProneTask Result UTC Watchdog Error executing task some error waiting before trying again UTC Watchdog Error executing task some error waiting before trying again UTC Watchdog Error executing task some error waiting before trying again Alternatively the watchdog can stop after certain number of attempts import Control.Watchdog import Data.Time errorProneTask IO Either String errorProneTask do getCurrentTime print return Left some error main do result watchdog do setMaximumRetries watchImpatiently errorProneTask print result Result UTC Watchdog Error executing task some error waiting before trying again UTC Watchdog Error executing task some error waiting before trying again UTC Left some error The watchdog will execute the task and check the return value which should be an Either value where Left signals an error and Right signals success The watchdog will backoff exponentially up to maximum delay in case of persisting errors but will reset after the task has been running for while without problems see setResetDuration and start new cycle of exponential backoff should new errors arise The module is intended to be used in different watchdog settings For example to keep an eye on server process use watch and only return succesful result when the server is doing clean shutdown or to retry an action multiple times if necessary before giving up use watchImpatiently monadic approach is used to modify the various settings Below is code sample with all possible configuration options and their default values import Control.Watchdog import Data.Time errorProneTask IO Either String errorProneTask do getCurrentTime print return Left some error main watchdog do setInitialDelay second setMaximumDelay seconds setMaximumRetries has no effect when using watch setResetDuration seconds setLoggingAction defaultLogger watch errorProneTask",
        "hierarchy": "Control Watchdog",
        "module": "Control.Watchdog",
        "name": "Watchdog",
        "normalized": "",
        "package": "watchdog",
        "partial": "Watchdog",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/watchdog/docs/Control-Watchdog.html#t:WatchdogAction",
      "description": {
        "fct-module": "Control.Watchdog",
        "fct-package": "watchdog",
        "fct-signature": "data",
        "fct-source": "src/Control-Watchdog.html#WatchdogAction",
        "fct-type": "data",
        "title": "WatchdogAction"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Watchdog",
        "module": "Control.Watchdog",
        "name": "WatchdogAction",
        "normalized": "",
        "package": "watchdog",
        "partial": "Watchdog Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/watchdog/docs/Control-Watchdog.html#t:WatchdogLogger",
      "description": {
        "fct-descr": "\u003cp\u003eType synonym for a watchdog logger.\n\u003c/p\u003e",
        "fct-module": "Control.Watchdog",
        "fct-package": "watchdog",
        "fct-signature": "type",
        "fct-source": "src/Control-Watchdog.html#WatchdogLogger",
        "fct-type": "type",
        "title": "WatchdogLogger"
      },
      "index": {
        "description": "Type synonym for watchdog logger",
        "hierarchy": "Control Watchdog",
        "module": "Control.Watchdog",
        "name": "WatchdogLogger",
        "normalized": "",
        "package": "watchdog",
        "partial": "Watchdog Logger",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/watchdog/docs/Control-Watchdog.html#v:defaultLogger",
      "description": {
        "fct-descr": "\u003cp\u003eThe default logging action. It will call \u003ccode\u003e\u003ca\u003eformatWatchdogError\u003c/a\u003e\u003c/code\u003e and display\n the result on STDOUT.\n\u003c/p\u003e",
        "fct-module": "Control.Watchdog",
        "fct-package": "watchdog",
        "fct-signature": "WatchdogLogger",
        "fct-source": "src/Control-Watchdog.html#defaultLogger",
        "fct-type": "function",
        "title": "defaultLogger"
      },
      "index": {
        "description": "The default logging action It will call formatWatchdogError and display the result on STDOUT",
        "hierarchy": "Control Watchdog",
        "module": "Control.Watchdog",
        "name": "defaultLogger",
        "normalized": "",
        "package": "watchdog",
        "partial": "Logger",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/watchdog/docs/Control-Watchdog.html#v:formatWatchdogError",
      "description": {
        "fct-descr": "\u003cp\u003eFormat the watchdog status report. Will produce output like this:\n\u003c/p\u003e\u003cpre\u003e\n Watchdog: Error executing task (some error) - trying again immediately.\n Watchdog: Error executing task (some error) - waiting 1s before trying again.\n\u003c/pre\u003e",
        "fct-module": "Control.Watchdog",
        "fct-package": "watchdog",
        "fct-signature": "String-\u003e Maybe Int-\u003e String",
        "fct-type": "function",
        "title": "formatWatchdogError"
      },
      "index": {
        "description": "Format the watchdog status report Will produce output like this Watchdog Error executing task some error trying again immediately Watchdog Error executing task some error waiting before trying again",
        "hierarchy": "Control Watchdog",
        "module": "Control.Watchdog",
        "name": "formatWatchdogError",
        "normalized": "String-\u003eMaybe Int-\u003eString",
        "package": "watchdog",
        "partial": "Watchdog Error",
        "signature": "String-\u003eMaybe Int-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/watchdog/docs/Control-Watchdog.html#v:setInitialDelay",
      "description": {
        "fct-descr": "\u003cp\u003eSet the initial delay in microseconds. The first time the watchdog pauses\n will be for this amount of time. The default is 1 second.\n\u003c/p\u003e",
        "fct-module": "Control.Watchdog",
        "fct-package": "watchdog",
        "fct-signature": "Int -\u003e WatchdogAction ()",
        "fct-source": "src/Control-Watchdog.html#setInitialDelay",
        "fct-type": "function",
        "title": "setInitialDelay"
      },
      "index": {
        "description": "Set the initial delay in microseconds The first time the watchdog pauses will be for this amount of time The default is second",
        "hierarchy": "Control Watchdog",
        "module": "Control.Watchdog",
        "name": "setInitialDelay",
        "normalized": "Int-\u003eWatchdogAction()",
        "package": "watchdog",
        "partial": "Initial Delay",
        "signature": "Int-\u003eWatchdogAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/watchdog/docs/Control-Watchdog.html#v:setLoggingAction",
      "description": {
        "fct-descr": "\u003cp\u003eSet the logging action that will be called by the watchdog. The supplied\n function of type \u003ccode\u003e\u003ca\u003eWatchdogLogger\u003c/a\u003e\u003c/code\u003e will be provided with the error message of\n the task and either \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the watchdog will retry immediately or 'Just\n delay' if the watchdog will now pause for the specified amount of time before\n trying again.  The default is \u003ccode\u003e\u003ca\u003edefaultLogger\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Watchdog",
        "fct-package": "watchdog",
        "fct-signature": "WatchdogLogger -\u003e WatchdogAction ()",
        "fct-source": "src/Control-Watchdog.html#setLoggingAction",
        "fct-type": "function",
        "title": "setLoggingAction"
      },
      "index": {
        "description": "Set the logging action that will be called by the watchdog The supplied function of type WatchdogLogger will be provided with the error message of the task and either Nothing if the watchdog will retry immediately or Just delay if the watchdog will now pause for the specified amount of time before trying again The default is defaultLogger",
        "hierarchy": "Control Watchdog",
        "module": "Control.Watchdog",
        "name": "setLoggingAction",
        "normalized": "WatchdogLogger-\u003eWatchdogAction()",
        "package": "watchdog",
        "partial": "Logging Action",
        "signature": "WatchdogLogger-\u003eWatchdogAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/watchdog/docs/Control-Watchdog.html#v:setMaximumDelay",
      "description": {
        "fct-descr": "\u003cp\u003eSet the maximum delay in microseconds. When a task fails to execute\n properly multiple times in quick succession, the delay is doubled each time\n until it stays constant at the maximum delay. The default is 300 seconds.\n\u003c/p\u003e",
        "fct-module": "Control.Watchdog",
        "fct-package": "watchdog",
        "fct-signature": "Int -\u003e WatchdogAction ()",
        "fct-source": "src/Control-Watchdog.html#setMaximumDelay",
        "fct-type": "function",
        "title": "setMaximumDelay"
      },
      "index": {
        "description": "Set the maximum delay in microseconds When task fails to execute properly multiple times in quick succession the delay is doubled each time until it stays constant at the maximum delay The default is seconds",
        "hierarchy": "Control Watchdog",
        "module": "Control.Watchdog",
        "name": "setMaximumDelay",
        "normalized": "Int-\u003eWatchdogAction()",
        "package": "watchdog",
        "partial": "Maximum Delay",
        "signature": "Int-\u003eWatchdogAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/watchdog/docs/Control-Watchdog.html#v:setMaximumRetries",
      "description": {
        "fct-descr": "\u003cp\u003eSet the number of retries after which the watchdog will give up and\n return with a permanent error. This setting is only used in combination with\n \u003ccode\u003e\u003ca\u003ewatchImpatiently\u003c/a\u003e\u003c/code\u003e. The default is 10.\n\u003c/p\u003e",
        "fct-module": "Control.Watchdog",
        "fct-package": "watchdog",
        "fct-signature": "Integer -\u003e WatchdogAction ()",
        "fct-source": "src/Control-Watchdog.html#setMaximumRetries",
        "fct-type": "function",
        "title": "setMaximumRetries"
      },
      "index": {
        "description": "Set the number of retries after which the watchdog will give up and return with permanent error This setting is only used in combination with watchImpatiently The default is",
        "hierarchy": "Control Watchdog",
        "module": "Control.Watchdog",
        "name": "setMaximumRetries",
        "normalized": "Integer-\u003eWatchdogAction()",
        "package": "watchdog",
        "partial": "Maximum Retries",
        "signature": "Integer-\u003eWatchdogAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/watchdog/docs/Control-Watchdog.html#v:setResetDuration",
      "description": {
        "fct-descr": "\u003cp\u003eIf a task has been running for some time, the watchdog will consider\n the next failure to be something unrelated and reset the waiting time\n back to the initial delay. This function sets the amount of time in\n microseconds that needs to pass before the watchdog will consider a task to\n be successfully running. The default is 30 seconds.\n\u003c/p\u003e",
        "fct-module": "Control.Watchdog",
        "fct-package": "watchdog",
        "fct-signature": "Int -\u003e WatchdogAction ()",
        "fct-source": "src/Control-Watchdog.html#setResetDuration",
        "fct-type": "function",
        "title": "setResetDuration"
      },
      "index": {
        "description": "If task has been running for some time the watchdog will consider the next failure to be something unrelated and reset the waiting time back to the initial delay This function sets the amount of time in microseconds that needs to pass before the watchdog will consider task to be successfully running The default is seconds",
        "hierarchy": "Control Watchdog",
        "module": "Control.Watchdog",
        "name": "setResetDuration",
        "normalized": "Int-\u003eWatchdogAction()",
        "package": "watchdog",
        "partial": "Reset Duration",
        "signature": "Int-\u003eWatchdogAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/watchdog/docs/Control-Watchdog.html#v:silentLogger",
      "description": {
        "fct-descr": "\u003cp\u003eDisable logging by passing this function to \u003ccode\u003e\u003ca\u003esetLoggingAction\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Watchdog",
        "fct-package": "watchdog",
        "fct-signature": "WatchdogLogger",
        "fct-source": "src/Control-Watchdog.html#silentLogger",
        "fct-type": "function",
        "title": "silentLogger"
      },
      "index": {
        "description": "Disable logging by passing this function to setLoggingAction",
        "hierarchy": "Control Watchdog",
        "module": "Control.Watchdog",
        "name": "silentLogger",
        "normalized": "",
        "package": "watchdog",
        "partial": "Logger",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/watchdog/docs/Control-Watchdog.html#v:watch",
      "description": {
        "fct-descr": "\u003cp\u003eWatch a task, restarting it potentially forever or until it returns with a\n result. The task should return an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e, where \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e in combination with\n an error message signals an error and \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e with an arbitrary result\n signals success.\n\u003c/p\u003e",
        "fct-module": "Control.Watchdog",
        "fct-package": "watchdog",
        "fct-signature": "IO (Either String a) -\u003e WatchdogAction a",
        "fct-source": "src/Control-Watchdog.html#watch",
        "fct-type": "function",
        "title": "watch"
      },
      "index": {
        "description": "Watch task restarting it potentially forever or until it returns with result The task should return an Either where Left in combination with an error message signals an error and Right with an arbitrary result signals success",
        "hierarchy": "Control Watchdog",
        "module": "Control.Watchdog",
        "name": "watch",
        "normalized": "IO(Either String a)-\u003eWatchdogAction a",
        "package": "watchdog",
        "partial": "",
        "signature": "IO(Either String a)-\u003eWatchdogAction a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/watchdog/docs/Control-Watchdog.html#v:watchImpatiently",
      "description": {
        "fct-descr": "\u003cp\u003eWatch a task, but only restart it a limited number of times (see\n \u003ccode\u003e\u003ca\u003esetMaximumRetries\u003c/a\u003e\u003c/code\u003e). If the failure persists, it will be returned as a \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e,\n otherwise it will be \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e with the result of the task.\n\u003c/p\u003e",
        "fct-module": "Control.Watchdog",
        "fct-package": "watchdog",
        "fct-signature": "IO (Either String b) -\u003e WatchdogAction (Either String b)",
        "fct-source": "src/Control-Watchdog.html#watchImpatiently",
        "fct-type": "function",
        "title": "watchImpatiently"
      },
      "index": {
        "description": "Watch task but only restart it limited number of times see setMaximumRetries If the failure persists it will be returned as Left otherwise it will be Right with the result of the task",
        "hierarchy": "Control Watchdog",
        "module": "Control.Watchdog",
        "name": "watchImpatiently",
        "normalized": "IO(Either String a)-\u003eWatchdogAction(Either String a)",
        "package": "watchdog",
        "partial": "Impatiently",
        "signature": "IO(Either String b)-\u003eWatchdogAction(Either String b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/watchdog/docs/Control-Watchdog.html#v:watchdog",
      "description": {
        "fct-descr": "\u003cp\u003eThe Watchdog monad. Used to configure and eventually run a watchdog.\n\u003c/p\u003e",
        "fct-module": "Control.Watchdog",
        "fct-package": "watchdog",
        "fct-signature": "WatchdogAction a -\u003e IO a",
        "fct-source": "src/Control-Watchdog.html#watchdog",
        "fct-type": "function",
        "title": "watchdog"
      },
      "index": {
        "description": "The Watchdog monad Used to configure and eventually run watchdog",
        "hierarchy": "Control Watchdog",
        "module": "Control.Watchdog",
        "name": "watchdog",
        "normalized": "WatchdogAction a-\u003eIO a",
        "package": "watchdog",
        "partial": "",
        "signature": "WatchdogAction a-\u003eIO a"
      }
    }
  }
]