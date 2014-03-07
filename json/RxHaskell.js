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
        "word": "RxHaskell"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Disposable",
          "name": "Disposable",
          "package": "RxHaskell",
          "source": "src/Disposable.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Disposable",
          "module": "Disposable",
          "name": "Disposable",
          "package": "RxHaskell",
          "partial": "Disposable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Disposable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllows disposal of a resource by running an action in the monad \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Disposable",
          "name": "Disposable",
          "package": "RxHaskell",
          "source": "src/Disposable.html#Disposable",
          "type": "data"
        },
        "index": {
          "description": "Allows disposal of resource by running an action in the monad",
          "hierarchy": "Disposable",
          "module": "Disposable",
          "name": "Disposable",
          "package": "RxHaskell",
          "partial": "Disposable",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Disposable.html#t:Disposable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA synchronized set of disposables.\n\u003c/p\u003e",
          "module": "Disposable",
          "name": "DisposableSet",
          "package": "RxHaskell",
          "source": "src/Disposable.html#DisposableSet",
          "type": "data"
        },
        "index": {
          "description": "synchronized set of disposables",
          "hierarchy": "Disposable",
          "module": "Disposable",
          "name": "DisposableSet",
          "package": "RxHaskell",
          "partial": "Disposable Set",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Disposable.html#t:DisposableSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Disposable",
          "name": "EmptyDisposable",
          "package": "RxHaskell",
          "signature": "Disposable",
          "source": "src/Disposable.html#Disposable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Disposable",
          "module": "Disposable",
          "name": "EmptyDisposable",
          "package": "RxHaskell",
          "partial": "Empty Disposable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Disposable.html#v:EmptyDisposable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a disposable to a set.\n\u003c/p\u003e",
          "module": "Disposable",
          "name": "addDisposable",
          "package": "RxHaskell",
          "signature": "DisposableSet -\u003e Disposable -\u003e IO ()",
          "source": "src/Disposable.html#addDisposable",
          "type": "function"
        },
        "index": {
          "description": "Adds disposable to set",
          "hierarchy": "Disposable",
          "module": "Disposable",
          "name": "addDisposable",
          "normalized": "DisposableSet-\u003eDisposable-\u003eIO()",
          "package": "RxHaskell",
          "partial": "Disposable",
          "signature": "DisposableSet-\u003eDisposable-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Disposable.html#v:addDisposable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisposes a disposable.\n\u003c/p\u003e",
          "module": "Disposable",
          "name": "dispose",
          "package": "RxHaskell",
          "signature": "Disposable -\u003e IO ()",
          "source": "src/Disposable.html#dispose",
          "type": "function"
        },
        "index": {
          "description": "Disposes disposable",
          "hierarchy": "Disposable",
          "module": "Disposable",
          "name": "dispose",
          "normalized": "Disposable-\u003eIO()",
          "package": "RxHaskell",
          "signature": "Disposable-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Disposable.html#v:dispose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a disposable which runs the given action upon disposal.\n\u003c/p\u003e",
          "module": "Disposable",
          "name": "newDisposable",
          "package": "RxHaskell",
          "signature": "IO () -\u003e IO Disposable",
          "source": "src/Disposable.html#newDisposable",
          "type": "function"
        },
        "index": {
          "description": "Creates disposable which runs the given action upon disposal",
          "hierarchy": "Disposable",
          "module": "Disposable",
          "name": "newDisposable",
          "normalized": "IO()-\u003eIO Disposable",
          "package": "RxHaskell",
          "partial": "Disposable",
          "signature": "IO()-\u003eIO Disposable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Disposable.html#v:newDisposable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a set of disposables.\n\u003c/p\u003e",
          "module": "Disposable",
          "name": "newDisposableSet",
          "package": "RxHaskell",
          "signature": "IO DisposableSet",
          "source": "src/Disposable.html#newDisposableSet",
          "type": "function"
        },
        "index": {
          "description": "Creates set of disposables",
          "hierarchy": "Disposable",
          "module": "Disposable",
          "name": "newDisposableSet",
          "package": "RxHaskell",
          "partial": "Disposable Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Disposable.html#v:newDisposableSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves a disposable from a set.\n\u003c/p\u003e",
          "module": "Disposable",
          "name": "removeDisposable",
          "package": "RxHaskell",
          "signature": "DisposableSet -\u003e Disposable -\u003e IO ()",
          "source": "src/Disposable.html#removeDisposable",
          "type": "function"
        },
        "index": {
          "description": "Removes disposable from set",
          "hierarchy": "Disposable",
          "module": "Disposable",
          "name": "removeDisposable",
          "normalized": "DisposableSet-\u003eDisposable-\u003eIO()",
          "package": "RxHaskell",
          "partial": "Disposable",
          "signature": "DisposableSet-\u003eDisposable-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Disposable.html#v:removeDisposable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a set of disposables into a disposable.\n   The constructed disposable will dispose of all disposables in the set.\n\u003c/p\u003e",
          "module": "Disposable",
          "name": "toDisposable",
          "package": "RxHaskell",
          "signature": "DisposableSet -\u003e IO Disposable",
          "source": "src/Disposable.html#toDisposable",
          "type": "function"
        },
        "index": {
          "description": "Converts set of disposables into disposable The constructed disposable will dispose of all disposables in the set",
          "hierarchy": "Disposable",
          "module": "Disposable",
          "name": "toDisposable",
          "normalized": "DisposableSet-\u003eIO Disposable",
          "package": "RxHaskell",
          "partial": "Disposable",
          "signature": "DisposableSet-\u003eIO Disposable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Disposable.html#v:toDisposable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scheduler.Internal",
          "name": "Internal",
          "package": "RxHaskell",
          "source": "src/Scheduler-Internal.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Scheduler Internal",
          "module": "Scheduler.Internal",
          "name": "Internal",
          "package": "RxHaskell",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Scheduler-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA scheduler which runs enqueued actions in a dedicated background thread.\n\u003c/p\u003e",
          "module": "Scheduler.Internal",
          "name": "BackgroundScheduler",
          "package": "RxHaskell",
          "source": "src/Scheduler-Internal.html#BackgroundScheduler",
          "type": "newtype"
        },
        "index": {
          "description": "scheduler which runs enqueued actions in dedicated background thread",
          "hierarchy": "Scheduler Internal",
          "module": "Scheduler.Internal",
          "name": "BackgroundScheduler",
          "package": "RxHaskell",
          "partial": "Background Scheduler",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Scheduler-Internal.html#t:BackgroundScheduler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents an action on a scheduler, along with a flag indicating whether it should be canceled.\n\u003c/p\u003e",
          "module": "Scheduler.Internal",
          "name": "ScheduledAction",
          "package": "RxHaskell",
          "source": "src/Scheduler-Internal.html#ScheduledAction",
          "type": "data"
        },
        "index": {
          "description": "Represents an action on scheduler along with flag indicating whether it should be canceled",
          "hierarchy": "Scheduler Internal",
          "module": "Scheduler.Internal",
          "name": "ScheduledAction",
          "package": "RxHaskell",
          "partial": "Scheduled Action",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Scheduler-Internal.html#t:ScheduledAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a queue of \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e actions which can be executed in FIFO order.\n\u003c/p\u003e",
          "module": "Scheduler.Internal",
          "name": "Scheduler",
          "package": "RxHaskell",
          "source": "src/Scheduler-Internal.html#Scheduler",
          "type": "class"
        },
        "index": {
          "description": "Represents queue of IO actions which can be executed in FIFO order",
          "hierarchy": "Scheduler Internal",
          "module": "Scheduler.Internal",
          "name": "Scheduler",
          "package": "RxHaskell",
          "partial": "Scheduler",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Scheduler-Internal.html#t:Scheduler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e computation that must be performed in a scheduler of type \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Scheduler.Internal",
          "name": "SchedulerIO",
          "package": "RxHaskell",
          "source": "src/Scheduler-Internal.html#SchedulerIO",
          "type": "data"
        },
        "index": {
          "description": "An IO computation that must be performed in scheduler of type",
          "hierarchy": "Scheduler Internal",
          "module": "Scheduler.Internal",
          "name": "SchedulerIO",
          "package": "RxHaskell",
          "partial": "Scheduler IO",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Scheduler-Internal.html#t:SchedulerIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scheduler.Internal",
          "name": "BackgroundScheduler",
          "package": "RxHaskell",
          "signature": "BackgroundScheduler (TQueue (ScheduledAction BackgroundScheduler))",
          "source": "src/Scheduler-Internal.html#BackgroundScheduler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scheduler Internal",
          "module": "Scheduler.Internal",
          "name": "BackgroundScheduler",
          "package": "RxHaskell",
          "partial": "Background Scheduler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Scheduler-Internal.html#v:BackgroundScheduler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scheduler.Internal",
          "name": "SchedulerIO",
          "package": "RxHaskell",
          "signature": "(s -\u003e IO a) -\u003e SchedulerIO s a",
          "source": "src/Scheduler-Internal.html#SchedulerIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scheduler Internal",
          "module": "Scheduler.Internal",
          "name": "SchedulerIO",
          "normalized": "(a-\u003eIO b)-\u003eSchedulerIO a b",
          "package": "RxHaskell",
          "partial": "Scheduler IO",
          "signature": "(s-\u003eIO a)-\u003eSchedulerIO s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Scheduler-Internal.html#v:SchedulerIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecutes the given action, then re-enters \u003ccode\u003e\u003ca\u003eschedulerMain\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Scheduler.Internal",
          "name": "executeScheduledAction",
          "package": "RxHaskell",
          "signature": "s -\u003e ScheduledAction s -\u003e IO ()",
          "source": "src/Scheduler-Internal.html#executeScheduledAction",
          "type": "function"
        },
        "index": {
          "description": "Executes the given action then re-enters schedulerMain",
          "hierarchy": "Scheduler Internal",
          "module": "Scheduler.Internal",
          "name": "executeScheduledAction",
          "normalized": "a-\u003eScheduledAction a-\u003eIO()",
          "package": "RxHaskell",
          "partial": "Scheduled Action",
          "signature": "s-\u003eScheduledAction s-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Scheduler-Internal.html#v:executeScheduledAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the scheduler that the calling code is executing on.\n\u003c/p\u003e",
          "module": "[\"Scheduler.Internal\",\"Scheduler\"]",
          "name": "getCurrentScheduler",
          "package": "RxHaskell",
          "signature": "SchedulerIO s s",
          "source": "src/Scheduler-Internal.html#getCurrentScheduler",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/RxHaskell/docs/Scheduler-Internal.html#v:getCurrentScheduler\",\"http://hackage.haskell.org/package/RxHaskell/docs/Scheduler.html#v:getCurrentScheduler\"]"
        },
        "index": {
          "description": "Returns the scheduler that the calling code is executing on",
          "hierarchy": "Scheduler Internal",
          "module": "Scheduler.Internal",
          "name": "getCurrentScheduler",
          "package": "RxHaskell",
          "partial": "Current Scheduler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Scheduler-Internal.html#v:getCurrentScheduler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new scheduled action, and returns a disposable which can be used to cancel it.\n\u003c/p\u003e",
          "module": "Scheduler.Internal",
          "name": "newScheduledAction",
          "package": "RxHaskell",
          "signature": "SchedulerIO s () -\u003e IO (ScheduledAction s, Disposable)",
          "source": "src/Scheduler-Internal.html#newScheduledAction",
          "type": "function"
        },
        "index": {
          "description": "Creates new scheduled action and returns disposable which can be used to cancel it",
          "hierarchy": "Scheduler Internal",
          "module": "Scheduler.Internal",
          "name": "newScheduledAction",
          "normalized": "SchedulerIO a()-\u003eIO(ScheduledAction a,Disposable)",
          "package": "RxHaskell",
          "partial": "Scheduled Action",
          "signature": "SchedulerIO s()-\u003eIO(ScheduledAction s,Disposable)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Scheduler-Internal.html#v:newScheduledAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSchedules an action on the scheduler. Returns a disposable which can be used to cancel it.\n\u003c/p\u003e",
          "module": "Scheduler.Internal",
          "name": "schedule",
          "package": "RxHaskell",
          "signature": "s -\u003e SchedulerIO s () -\u003e IO Disposable",
          "source": "src/Scheduler-Internal.html#schedule",
          "type": "method"
        },
        "index": {
          "description": "Schedules an action on the scheduler Returns disposable which can be used to cancel it",
          "hierarchy": "Scheduler Internal",
          "module": "Scheduler.Internal",
          "name": "schedule",
          "normalized": "a-\u003eSchedulerIO a()-\u003eIO Disposable",
          "package": "RxHaskell",
          "signature": "s-\u003eSchedulerIO s()-\u003eIO Disposable",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Scheduler-Internal.html#v:schedule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecutes all current and future actions enqueued on the given scheduler.\n\u003c/p\u003e",
          "module": "Scheduler.Internal",
          "name": "schedulerMain",
          "package": "RxHaskell",
          "signature": "s -\u003e IO ()",
          "source": "src/Scheduler-Internal.html#schedulerMain",
          "type": "method"
        },
        "index": {
          "description": "Executes all current and future actions enqueued on the given scheduler",
          "hierarchy": "Scheduler Internal",
          "module": "Scheduler.Internal",
          "name": "schedulerMain",
          "normalized": "a-\u003eIO()",
          "package": "RxHaskell",
          "partial": "Main",
          "signature": "s-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Scheduler-Internal.html#v:schedulerMain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scheduler.Main",
          "name": "Main",
          "package": "RxHaskell",
          "source": "src/Scheduler-Main.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Scheduler Main",
          "module": "Scheduler.Main",
          "name": "Main",
          "package": "RxHaskell",
          "partial": "Main",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Scheduler-Main.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA scheduler which runs enqueued actions on the main thread.\n\u003c/p\u003e",
          "module": "Scheduler.Main",
          "name": "MainScheduler",
          "package": "RxHaskell",
          "source": "src/Scheduler-Main.html#MainScheduler",
          "type": "data"
        },
        "index": {
          "description": "scheduler which runs enqueued actions on the main thread",
          "hierarchy": "Scheduler Main",
          "module": "Scheduler.Main",
          "name": "MainScheduler",
          "package": "RxHaskell",
          "partial": "Main Scheduler",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Scheduler-Main.html#t:MainScheduler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a scheduler representing the main thread.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003erunMainScheduler\u003c/a\u003e\u003c/code\u003e must be called for enqueued actions to actually execute.\n\u003c/p\u003e",
          "module": "Scheduler.Main",
          "name": "getMainScheduler",
          "package": "RxHaskell",
          "signature": "IO MainScheduler",
          "source": "src/Scheduler-Main.html#getMainScheduler",
          "type": "function"
        },
        "index": {
          "description": "Returns scheduler representing the main thread Note that runMainScheduler must be called for enqueued actions to actually execute",
          "hierarchy": "Scheduler Main",
          "module": "Scheduler.Main",
          "name": "getMainScheduler",
          "package": "RxHaskell",
          "partial": "Main Scheduler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Scheduler-Main.html#v:getMainScheduler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns the main scheduler indefinitely using the current thread.\n   The current thread will be bound if possible.\n\u003c/p\u003e",
          "module": "Scheduler.Main",
          "name": "runMainScheduler",
          "package": "RxHaskell",
          "signature": "IO ()",
          "source": "src/Scheduler-Main.html#runMainScheduler",
          "type": "function"
        },
        "index": {
          "description": "Runs the main scheduler indefinitely using the current thread The current thread will be bound if possible",
          "hierarchy": "Scheduler Main",
          "module": "Scheduler.Main",
          "name": "runMainScheduler",
          "normalized": "IO()",
          "package": "RxHaskell",
          "partial": "Main Scheduler",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Scheduler-Main.html#v:runMainScheduler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scheduler.Unsafe",
          "name": "Unsafe",
          "package": "RxHaskell",
          "source": "src/Scheduler-Unsafe.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Scheduler Unsafe",
          "module": "Scheduler.Unsafe",
          "name": "Unsafe",
          "package": "RxHaskell",
          "partial": "Unsafe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Scheduler-Unsafe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scheduler",
          "name": "Scheduler",
          "package": "RxHaskell",
          "source": "src/Scheduler.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Scheduler",
          "module": "Scheduler",
          "name": "Scheduler",
          "package": "RxHaskell",
          "partial": "Scheduler",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Scheduler.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA scheduler which runs enqueued actions in a dedicated background thread.\n\u003c/p\u003e",
          "module": "Scheduler",
          "name": "BackgroundScheduler",
          "package": "RxHaskell",
          "source": "src/Scheduler-Internal.html#BackgroundScheduler",
          "type": "data"
        },
        "index": {
          "description": "scheduler which runs enqueued actions in dedicated background thread",
          "hierarchy": "Scheduler",
          "module": "Scheduler",
          "name": "BackgroundScheduler",
          "package": "RxHaskell",
          "partial": "Background Scheduler",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Scheduler.html#t:BackgroundScheduler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a queue of \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e actions which can be executed in FIFO order.\n\u003c/p\u003e",
          "module": "Scheduler",
          "name": "Scheduler",
          "package": "RxHaskell",
          "source": "src/Scheduler-Internal.html#Scheduler",
          "type": "class"
        },
        "index": {
          "description": "Represents queue of IO actions which can be executed in FIFO order",
          "hierarchy": "Scheduler",
          "module": "Scheduler",
          "name": "Scheduler",
          "package": "RxHaskell",
          "partial": "Scheduler",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Scheduler.html#t:Scheduler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e computation that must be performed in a scheduler of type \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Scheduler",
          "name": "SchedulerIO",
          "package": "RxHaskell",
          "source": "src/Scheduler-Internal.html#SchedulerIO",
          "type": "data"
        },
        "index": {
          "description": "An IO computation that must be performed in scheduler of type",
          "hierarchy": "Scheduler",
          "module": "Scheduler",
          "name": "SchedulerIO",
          "package": "RxHaskell",
          "partial": "Scheduler IO",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Scheduler.html#t:SchedulerIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new background scheduler.\n\u003c/p\u003e",
          "module": "Scheduler",
          "name": "newScheduler",
          "package": "RxHaskell",
          "signature": "IO BackgroundScheduler",
          "source": "src/Scheduler.html#newScheduler",
          "type": "function"
        },
        "index": {
          "description": "Creates new background scheduler",
          "hierarchy": "Scheduler",
          "module": "Scheduler",
          "name": "newScheduler",
          "package": "RxHaskell",
          "partial": "Scheduler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Scheduler.html#v:newScheduler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSchedules an action on the scheduler. Returns a disposable which can be used to cancel it.\n\u003c/p\u003e",
          "module": "Scheduler",
          "name": "schedule",
          "package": "RxHaskell",
          "signature": "s -\u003e SchedulerIO s () -\u003e IO Disposable",
          "source": "src/Scheduler-Internal.html#schedule",
          "type": "method"
        },
        "index": {
          "description": "Schedules an action on the scheduler Returns disposable which can be used to cancel it",
          "hierarchy": "Scheduler",
          "module": "Scheduler",
          "name": "schedule",
          "normalized": "a-\u003eSchedulerIO a()-\u003eIO Disposable",
          "package": "RxHaskell",
          "signature": "s-\u003eSchedulerIO s()-\u003eIO Disposable",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Scheduler.html#v:schedule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Signal.Channel",
          "name": "Channel",
          "package": "RxHaskell",
          "source": "src/Signal-Channel.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Signal Channel",
          "module": "Signal.Channel",
          "name": "Channel",
          "package": "RxHaskell",
          "partial": "Channel",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Channel.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA controllable signal, represented by a \u003ccode\u003e\u003ca\u003eSubscriber\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eSignal\u003c/a\u003e\u003c/code\u003e pair.\n\u003c/p\u003e\u003cp\u003eValues sent to the subscriber will automatically be broadcast to all of the signal's subscribers.\n   In effect, the subscriber is the write end, while the signal is the read end.\n\u003c/p\u003e",
          "module": "Signal.Channel",
          "name": "Channel",
          "package": "RxHaskell",
          "source": "src/Signal-Channel.html#Channel",
          "type": "type"
        },
        "index": {
          "description": "controllable signal represented by Subscriber and Signal pair Values sent to the subscriber will automatically be broadcast to all of the signal subscribers In effect the subscriber is the write end while the signal is the read end",
          "hierarchy": "Signal Channel",
          "module": "Signal.Channel",
          "name": "Channel",
          "package": "RxHaskell",
          "partial": "Channel",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Channel.html#t:Channel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermines how many events a replay channel will save.\n\u003c/p\u003e",
          "module": "Signal.Channel",
          "name": "ChannelCapacity",
          "package": "RxHaskell",
          "source": "src/Signal-Channel.html#ChannelCapacity",
          "type": "data"
        },
        "index": {
          "description": "Determines how many events replay channel will save",
          "hierarchy": "Signal Channel",
          "module": "Signal.Channel",
          "name": "ChannelCapacity",
          "package": "RxHaskell",
          "partial": "Channel Capacity",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Channel.html#t:ChannelCapacity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a queue of \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e actions which can be executed in FIFO order.\n\u003c/p\u003e",
          "module": "Signal.Channel",
          "name": "Scheduler",
          "package": "RxHaskell",
          "source": "src/Scheduler-Internal.html#Scheduler",
          "type": "class"
        },
        "index": {
          "description": "Represents queue of IO actions which can be executed in FIFO order",
          "hierarchy": "Signal Channel",
          "module": "Signal.Channel",
          "name": "Scheduler",
          "package": "RxHaskell",
          "partial": "Scheduler",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Channel.html#t:Scheduler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA signal which will send values of type \u003ccode\u003ev\u003c/code\u003e on a scheduler of type \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Signal.Channel",
          "name": "Signal",
          "package": "RxHaskell",
          "source": "src/Signal.html#Signal",
          "type": "data"
        },
        "index": {
          "description": "signal which will send values of type on scheduler of type",
          "hierarchy": "Signal Channel",
          "module": "Signal.Channel",
          "name": "Signal",
          "package": "RxHaskell",
          "partial": "Signal",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Channel.html#t:Signal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReceives events from a signal with values of type \u003ccode\u003ev\u003c/code\u003e and running in a scheduler of type \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003es\u003c/code\u003e refers to the scheduler that events must be sent on. Events are always sent\n   synchronously, regardless of \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Signal.Channel",
          "name": "Subscriber",
          "package": "RxHaskell",
          "source": "src/Signal-Subscriber-Internal.html#Subscriber",
          "type": "data"
        },
        "index": {
          "description": "Receives events from signal with values of type and running in scheduler of type Note that refers to the scheduler that events must be sent on Events are always sent synchronously regardless of",
          "hierarchy": "Signal Channel",
          "module": "Signal.Channel",
          "name": "Subscriber",
          "package": "RxHaskell",
          "partial": "Subscriber",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Channel.html#t:Subscriber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe channel will only save the specified number of events.\n\u003c/p\u003e",
          "module": "Signal.Channel",
          "name": "LimitedCapacity",
          "package": "RxHaskell",
          "signature": "LimitedCapacity Int",
          "source": "src/Signal-Channel.html#ChannelCapacity",
          "type": "function"
        },
        "index": {
          "description": "The channel will only save the specified number of events",
          "hierarchy": "Signal Channel",
          "module": "Signal.Channel",
          "name": "LimitedCapacity",
          "package": "RxHaskell",
          "partial": "Limited Capacity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Channel.html#v:LimitedCapacity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe channel will save an unlimited number of events.\n\u003c/p\u003e",
          "module": "Signal.Channel",
          "name": "UnlimitedCapacity",
          "package": "RxHaskell",
          "signature": "UnlimitedCapacity",
          "source": "src/Signal-Channel.html#ChannelCapacity",
          "type": "function"
        },
        "index": {
          "description": "The channel will save an unlimited number of events",
          "hierarchy": "Signal Channel",
          "module": "Signal.Channel",
          "name": "UnlimitedCapacity",
          "package": "RxHaskell",
          "partial": "Unlimited Capacity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Channel.html#v:UnlimitedCapacity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a simple channel which broadcasts all values sent to it.\n\u003c/p\u003e\u003cp\u003eSending an \u003ccode\u003e\u003ca\u003eErrorEvent\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eCompletedEvent\u003c/a\u003e\u003c/code\u003e will terminate the channel.\n\u003c/p\u003e",
          "module": "Signal.Channel",
          "name": "newChannel",
          "package": "RxHaskell",
          "signature": "IO (Channel s v)",
          "source": "src/Signal-Channel.html#newChannel",
          "type": "function"
        },
        "index": {
          "description": "Creates simple channel which broadcasts all values sent to it Sending an ErrorEvent or CompletedEvent will terminate the channel",
          "hierarchy": "Signal Channel",
          "module": "Signal.Channel",
          "name": "newChannel",
          "package": "RxHaskell",
          "partial": "Channel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Channel.html#v:newChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003enewChannel\u003c/a\u003e\u003c/code\u003e, but new subscriptions to the returned signal will receive all values\n   (up to the specified capacity) which have been sent thus far.\n\u003c/p\u003e\u003cp\u003eSending an \u003ccode\u003e\u003ca\u003eErrorEvent\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eCompletedEvent\u003c/a\u003e\u003c/code\u003e will terminate the channel. Any terminating event\n   will be replayed to future subscribers, assuming sufficient capacity.\n\u003c/p\u003e",
          "module": "Signal.Channel",
          "name": "newReplayChannel",
          "package": "RxHaskell",
          "signature": "ChannelCapacity -\u003e IO (Channel s v)",
          "source": "src/Signal-Channel.html#newReplayChannel",
          "type": "function"
        },
        "index": {
          "description": "Like newChannel but new subscriptions to the returned signal will receive all values up to the specified capacity which have been sent thus far Sending an ErrorEvent or CompletedEvent will terminate the channel Any terminating event will be replayed to future subscribers assuming sufficient capacity",
          "hierarchy": "Signal Channel",
          "module": "Signal.Channel",
          "name": "newReplayChannel",
          "normalized": "ChannelCapacity-\u003eIO(Channel a b)",
          "package": "RxHaskell",
          "partial": "Replay Channel",
          "signature": "ChannelCapacity-\u003eIO(Channel s v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Channel.html#v:newReplayChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Signal.Command",
          "name": "Command",
          "package": "RxHaskell",
          "source": "src/Signal-Command.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Signal Command",
          "module": "Signal.Command",
          "name": "Command",
          "package": "RxHaskell",
          "partial": "Command",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Command.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA scheduler which runs enqueued actions in a dedicated background thread.\n\u003c/p\u003e",
          "module": "Signal.Command",
          "name": "BackgroundScheduler",
          "package": "RxHaskell",
          "source": "src/Scheduler-Internal.html#BackgroundScheduler",
          "type": "data"
        },
        "index": {
          "description": "scheduler which runs enqueued actions in dedicated background thread",
          "hierarchy": "Signal Command",
          "module": "Signal.Command",
          "name": "BackgroundScheduler",
          "package": "RxHaskell",
          "partial": "Background Scheduler",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Command.html#t:BackgroundScheduler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA controllable signal, represented by a \u003ccode\u003e\u003ca\u003eSubscriber\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eSignal\u003c/a\u003e\u003c/code\u003e pair.\n\u003c/p\u003e\u003cp\u003eValues sent to the subscriber will automatically be broadcast to all of the signal's subscribers.\n   In effect, the subscriber is the write end, while the signal is the read end.\n\u003c/p\u003e",
          "module": "Signal.Command",
          "name": "Channel",
          "package": "RxHaskell",
          "source": "src/Signal-Channel.html#Channel",
          "type": "type"
        },
        "index": {
          "description": "controllable signal represented by Subscriber and Signal pair Values sent to the subscriber will automatically be broadcast to all of the signal subscribers In effect the subscriber is the write end while the signal is the read end",
          "hierarchy": "Signal Command",
          "module": "Signal.Command",
          "name": "Channel",
          "package": "RxHaskell",
          "partial": "Channel",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Command.html#t:Channel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA signal triggered in response to some action, typically UI-related.\n\u003c/p\u003e",
          "module": "Signal.Command",
          "name": "Command",
          "package": "RxHaskell",
          "source": "src/Signal-Command.html#Command",
          "type": "data"
        },
        "index": {
          "description": "signal triggered in response to some action typically UI-related",
          "hierarchy": "Signal Command",
          "module": "Signal.Command",
          "name": "Command",
          "package": "RxHaskell",
          "partial": "Command",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Command.html#t:Command"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermines a command's behavior.\n\u003c/p\u003e",
          "module": "Signal.Command",
          "name": "CommandPolicy",
          "package": "RxHaskell",
          "source": "src/Signal-Command.html#CommandPolicy",
          "type": "data"
        },
        "index": {
          "description": "Determines command behavior",
          "hierarchy": "Signal Command",
          "module": "Signal.Command",
          "name": "CommandPolicy",
          "package": "RxHaskell",
          "partial": "Command Policy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Command.html#t:CommandPolicy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA scheduler which runs enqueued actions on the main thread.\n\u003c/p\u003e",
          "module": "Signal.Command",
          "name": "MainScheduler",
          "package": "RxHaskell",
          "source": "src/Scheduler-Main.html#MainScheduler",
          "type": "data"
        },
        "index": {
          "description": "scheduler which runs enqueued actions on the main thread",
          "hierarchy": "Signal Command",
          "module": "Signal.Command",
          "name": "MainScheduler",
          "package": "RxHaskell",
          "partial": "Main Scheduler",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Command.html#t:MainScheduler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a queue of \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e actions which can be executed in FIFO order.\n\u003c/p\u003e",
          "module": "Signal.Command",
          "name": "Scheduler",
          "package": "RxHaskell",
          "source": "src/Scheduler-Internal.html#Scheduler",
          "type": "class"
        },
        "index": {
          "description": "Represents queue of IO actions which can be executed in FIFO order",
          "hierarchy": "Signal Command",
          "module": "Signal.Command",
          "name": "Scheduler",
          "package": "RxHaskell",
          "partial": "Scheduler",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Command.html#t:Scheduler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e computation that must be performed in a scheduler of type \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Signal.Command",
          "name": "SchedulerIO",
          "package": "RxHaskell",
          "source": "src/Scheduler-Internal.html#SchedulerIO",
          "type": "data"
        },
        "index": {
          "description": "An IO computation that must be performed in scheduler of type",
          "hierarchy": "Signal Command",
          "module": "Signal.Command",
          "name": "SchedulerIO",
          "package": "RxHaskell",
          "partial": "Scheduler IO",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Command.html#t:SchedulerIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA signal which will send values of type \u003ccode\u003ev\u003c/code\u003e on a scheduler of type \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Signal.Command",
          "name": "Signal",
          "package": "RxHaskell",
          "source": "src/Signal.html#Signal",
          "type": "data"
        },
        "index": {
          "description": "signal which will send values of type on scheduler of type",
          "hierarchy": "Signal Command",
          "module": "Signal.Command",
          "name": "Signal",
          "package": "RxHaskell",
          "partial": "Signal",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Command.html#t:Signal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe command can be executed concurrently any number of times.\n\u003c/p\u003e",
          "module": "Signal.Command",
          "name": "ExecuteConcurrently",
          "package": "RxHaskell",
          "signature": "ExecuteConcurrently",
          "source": "src/Signal-Command.html#CommandPolicy",
          "type": "function"
        },
        "index": {
          "description": "The command can be executed concurrently any number of times",
          "hierarchy": "Signal Command",
          "module": "Signal.Command",
          "name": "ExecuteConcurrently",
          "package": "RxHaskell",
          "partial": "Execute Concurrently",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Command.html#v:ExecuteConcurrently"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe command can only be executed once at a time.\n   Attempts to \u003ccode\u003e\u003ca\u003eexecute\u003c/a\u003e\u003c/code\u003e while the command is already running will fail.\n\u003c/p\u003e",
          "module": "Signal.Command",
          "name": "ExecuteSerially",
          "package": "RxHaskell",
          "signature": "ExecuteSerially",
          "source": "src/Signal-Command.html#CommandPolicy",
          "type": "function"
        },
        "index": {
          "description": "The command can only be executed once at time Attempts to execute while the command is already running will fail",
          "hierarchy": "Signal Command",
          "module": "Signal.Command",
          "name": "ExecuteSerially",
          "package": "RxHaskell",
          "partial": "Execute Serially",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Command.html#v:ExecuteSerially"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends whether this command is able to execute.\n\u003c/p\u003e\u003cp\u003eThis signal will always send at least one value immediately upon subscription.\n\u003c/p\u003e",
          "module": "Signal.Command",
          "name": "canExecute",
          "package": "RxHaskell",
          "signature": "Command v -\u003e Signal MainScheduler Bool",
          "source": "src/Signal-Command.html#canExecute",
          "type": "function"
        },
        "index": {
          "description": "Sends whether this command is able to execute This signal will always send at least one value immediately upon subscription",
          "hierarchy": "Signal Command",
          "module": "Signal.Command",
          "name": "canExecute",
          "normalized": "Command a-\u003eSignal MainScheduler Bool",
          "package": "RxHaskell",
          "partial": "Execute",
          "signature": "Command v-\u003eSignal MainScheduler Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Command.html#v:canExecute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA signal of errors received from all signals created by \u003ccode\u003e\u003ca\u003eonExecute\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Signal.Command",
          "name": "errors",
          "package": "RxHaskell",
          "signature": "Command v -\u003e Signal MainScheduler IOException",
          "source": "src/Signal-Command.html#errors",
          "type": "function"
        },
        "index": {
          "description": "signal of errors received from all signals created by onExecute",
          "hierarchy": "Signal Command",
          "module": "Signal.Command",
          "name": "errors",
          "normalized": "Command a-\u003eSignal MainScheduler IOException",
          "package": "RxHaskell",
          "signature": "Command v-\u003eSignal MainScheduler IOException",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Command.html#v:errors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempts to execute a command.\n\u003c/p\u003e",
          "module": "Signal.Command",
          "name": "execute",
          "package": "RxHaskell",
          "signature": "Command v-\u003e v-\u003e SchedulerIO MainScheduler Bool",
          "type": "function"
        },
        "index": {
          "description": "Attempts to execute command",
          "hierarchy": "Signal Command",
          "module": "Signal.Command",
          "name": "execute",
          "normalized": "Command a-\u003ea-\u003eSchedulerIO MainScheduler Bool",
          "package": "RxHaskell",
          "signature": "Command v-\u003ev-\u003eSchedulerIO MainScheduler Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Command.html#v:execute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends whether this command is currently executing.\n\u003c/p\u003e\u003cp\u003eThis signal will always send at least one value immediately upon subscription.\n\u003c/p\u003e",
          "module": "Signal.Command",
          "name": "executing",
          "package": "RxHaskell",
          "signature": "Command v -\u003e Signal MainScheduler Bool",
          "source": "src/Signal-Command.html#executing",
          "type": "function"
        },
        "index": {
          "description": "Sends whether this command is currently executing This signal will always send at least one value immediately upon subscription",
          "hierarchy": "Signal Command",
          "module": "Signal.Command",
          "name": "executing",
          "normalized": "Command a-\u003eSignal MainScheduler Bool",
          "package": "RxHaskell",
          "signature": "Command v-\u003eSignal MainScheduler Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Command.html#v:executing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a command.\n\u003c/p\u003e",
          "module": "Signal.Command",
          "name": "newCommand",
          "package": "RxHaskell",
          "signature": "CommandPolicy-\u003e Signal MainScheduler Bool-\u003e SchedulerIO MainScheduler (Command v)",
          "type": "function"
        },
        "index": {
          "description": "Creates command",
          "hierarchy": "Signal Command",
          "module": "Signal.Command",
          "name": "newCommand",
          "normalized": "CommandPolicy-\u003eSignal MainScheduler Bool-\u003eSchedulerIO MainScheduler(Command a)",
          "package": "RxHaskell",
          "partial": "Command",
          "signature": "CommandPolicy-\u003eSignal MainScheduler Bool-\u003eSchedulerIO MainScheduler(Command v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Command.html#v:newCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a signal whenever the command executes, then subscribes to it.\n\u003c/p\u003e",
          "module": "Signal.Command",
          "name": "onExecute",
          "package": "RxHaskell",
          "signature": "Command v-\u003e (v -\u003e Signal BackgroundScheduler ())-\u003e SchedulerIO MainScheduler (Signal MainScheduler (Signal BackgroundScheduler ()))",
          "type": "function"
        },
        "index": {
          "description": "Creates signal whenever the command executes then subscribes to it",
          "hierarchy": "Signal Command",
          "module": "Signal.Command",
          "name": "onExecute",
          "normalized": "Command a-\u003e(a-\u003eSignal BackgroundScheduler())-\u003eSchedulerIO MainScheduler(Signal MainScheduler(Signal BackgroundScheduler()))",
          "package": "RxHaskell",
          "partial": "Execute",
          "signature": "Command v-\u003e(v-\u003eSignal BackgroundScheduler())-\u003eSchedulerIO MainScheduler(Signal MainScheduler(Signal BackgroundScheduler()))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Command.html#v:onExecute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA signal of the values passed to \u003ccode\u003e\u003ca\u003eexecute\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Signal.Command",
          "name": "values",
          "package": "RxHaskell",
          "signature": "Command v -\u003e Signal MainScheduler v",
          "source": "src/Signal-Command.html#values",
          "type": "function"
        },
        "index": {
          "description": "signal of the values passed to execute",
          "hierarchy": "Signal Command",
          "module": "Signal.Command",
          "name": "values",
          "normalized": "Command a-\u003eSignal MainScheduler a",
          "package": "RxHaskell",
          "signature": "Command v-\u003eSignal MainScheduler v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Command.html#v:values"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Signal.Connection",
          "name": "Connection",
          "package": "RxHaskell",
          "source": "src/Signal-Connection.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Signal Connection",
          "module": "Signal.Connection",
          "name": "Connection",
          "package": "RxHaskell",
          "partial": "Connection",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Connection.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA controllable signal, represented by a \u003ccode\u003e\u003ca\u003eSubscriber\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eSignal\u003c/a\u003e\u003c/code\u003e pair.\n\u003c/p\u003e\u003cp\u003eValues sent to the subscriber will automatically be broadcast to all of the signal's subscribers.\n   In effect, the subscriber is the write end, while the signal is the read end.\n\u003c/p\u003e",
          "module": "Signal.Connection",
          "name": "Channel",
          "package": "RxHaskell",
          "source": "src/Signal-Channel.html#Channel",
          "type": "type"
        },
        "index": {
          "description": "controllable signal represented by Subscriber and Signal pair Values sent to the subscriber will automatically be broadcast to all of the signal subscribers In effect the subscriber is the write end while the signal is the read end",
          "hierarchy": "Signal Connection",
          "module": "Signal.Connection",
          "name": "Channel",
          "package": "RxHaskell",
          "partial": "Channel",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Connection.html#t:Channel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMulticasts a signal to many subscribers, without triggering any side effects more than once.\n\u003c/p\u003e",
          "module": "Signal.Connection",
          "name": "Connection",
          "package": "RxHaskell",
          "source": "src/Signal-Connection.html#Connection",
          "type": "data"
        },
        "index": {
          "description": "Multicasts signal to many subscribers without triggering any side effects more than once",
          "hierarchy": "Signal Connection",
          "module": "Signal.Connection",
          "name": "Connection",
          "package": "RxHaskell",
          "partial": "Connection",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Connection.html#t:Connection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllows disposal of a resource by running an action in the monad \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Signal.Connection",
          "name": "Disposable",
          "package": "RxHaskell",
          "source": "src/Disposable.html#Disposable",
          "type": "data"
        },
        "index": {
          "description": "Allows disposal of resource by running an action in the monad",
          "hierarchy": "Signal Connection",
          "module": "Signal.Connection",
          "name": "Disposable",
          "package": "RxHaskell",
          "partial": "Disposable",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Connection.html#t:Disposable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a queue of \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e actions which can be executed in FIFO order.\n\u003c/p\u003e",
          "module": "Signal.Connection",
          "name": "Scheduler",
          "package": "RxHaskell",
          "source": "src/Scheduler-Internal.html#Scheduler",
          "type": "class"
        },
        "index": {
          "description": "Represents queue of IO actions which can be executed in FIFO order",
          "hierarchy": "Signal Connection",
          "module": "Signal.Connection",
          "name": "Scheduler",
          "package": "RxHaskell",
          "partial": "Scheduler",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Connection.html#t:Scheduler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e computation that must be performed in a scheduler of type \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Signal.Connection",
          "name": "SchedulerIO",
          "package": "RxHaskell",
          "source": "src/Scheduler-Internal.html#SchedulerIO",
          "type": "data"
        },
        "index": {
          "description": "An IO computation that must be performed in scheduler of type",
          "hierarchy": "Signal Connection",
          "module": "Signal.Connection",
          "name": "SchedulerIO",
          "package": "RxHaskell",
          "partial": "Scheduler IO",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Connection.html#t:SchedulerIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA signal which will send values of type \u003ccode\u003ev\u003c/code\u003e on a scheduler of type \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Signal.Connection",
          "name": "Signal",
          "package": "RxHaskell",
          "source": "src/Signal.html#Signal",
          "type": "data"
        },
        "index": {
          "description": "signal which will send values of type on scheduler of type",
          "hierarchy": "Signal Connection",
          "module": "Signal.Connection",
          "name": "Signal",
          "package": "RxHaskell",
          "partial": "Signal",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Connection.html#t:Signal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eActivates a connection by subscribing to its underlying signal.\n   Calling this function multiple times just returns the existing disposable.\n\u003c/p\u003e",
          "module": "Signal.Connection",
          "name": "connect",
          "package": "RxHaskell",
          "signature": "Connection s v -\u003e SchedulerIO s Disposable",
          "source": "src/Signal-Connection.html#connect",
          "type": "function"
        },
        "index": {
          "description": "Activates connection by subscribing to its underlying signal Calling this function multiple times just returns the existing disposable",
          "hierarchy": "Signal Connection",
          "module": "Signal.Connection",
          "name": "connect",
          "normalized": "Connection a b-\u003eSchedulerIO a Disposable",
          "package": "RxHaskell",
          "signature": "Connection s v-\u003eSchedulerIO s Disposable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Connection.html#v:connect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a connection that will subscribe to the given base signal,\n   and forward all events onto the given channel.\n\u003c/p\u003e",
          "module": "Signal.Connection",
          "name": "multicast",
          "package": "RxHaskell",
          "signature": "Signal s v -\u003e Channel s v -\u003e IO (Connection s v)",
          "source": "src/Signal-Connection.html#multicast",
          "type": "function"
        },
        "index": {
          "description": "Creates connection that will subscribe to the given base signal and forward all events onto the given channel",
          "hierarchy": "Signal Connection",
          "module": "Signal.Connection",
          "name": "multicast",
          "normalized": "Signal a b-\u003eChannel a b-\u003eIO(Connection a b)",
          "package": "RxHaskell",
          "signature": "Signal s v-\u003eChannel s v-\u003eIO(Connection s v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Connection.html#v:multicast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the multicasted signal of a connection.\n\u003c/p\u003e\u003cp\u003eNo events will be sent on the resulting signal until \u003ccode\u003e\u003ca\u003econnect\u003c/a\u003e\u003c/code\u003e is invoked.\n\u003c/p\u003e",
          "module": "Signal.Connection",
          "name": "multicastedSignal",
          "package": "RxHaskell",
          "signature": "Connection s v -\u003e Signal s v",
          "source": "src/Signal-Connection.html#multicastedSignal",
          "type": "function"
        },
        "index": {
          "description": "Returns the multicasted signal of connection No events will be sent on the resulting signal until connect is invoked",
          "hierarchy": "Signal Connection",
          "module": "Signal.Connection",
          "name": "multicastedSignal",
          "normalized": "Connection a b-\u003eSignal a b",
          "package": "RxHaskell",
          "partial": "Signal",
          "signature": "Connection s v-\u003eSignal s v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Connection.html#v:multicastedSignal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMulticasts to a simple channel.\n\u003c/p\u003e",
          "module": "Signal.Connection",
          "name": "publish",
          "package": "RxHaskell",
          "signature": "Signal s v -\u003e IO (Connection s v)",
          "source": "src/Signal-Connection.html#publish",
          "type": "function"
        },
        "index": {
          "description": "Multicasts to simple channel",
          "hierarchy": "Signal Connection",
          "module": "Signal.Connection",
          "name": "publish",
          "normalized": "Signal a b-\u003eIO(Connection a b)",
          "package": "RxHaskell",
          "signature": "Signal s v-\u003eIO(Connection s v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Connection.html#v:publish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMulticasts to a replay channel of unlimited capacity, then connects immediately.\n\u003c/p\u003e",
          "module": "Signal.Connection",
          "name": "replay",
          "package": "RxHaskell",
          "signature": "Signal s v -\u003e SchedulerIO s (Signal s v)",
          "source": "src/Signal-Connection.html#replay",
          "type": "function"
        },
        "index": {
          "description": "Multicasts to replay channel of unlimited capacity then connects immediately",
          "hierarchy": "Signal Connection",
          "module": "Signal.Connection",
          "name": "replay",
          "normalized": "Signal a b-\u003eSchedulerIO a(Signal a b)",
          "package": "RxHaskell",
          "signature": "Signal s v-\u003eSchedulerIO s(Signal s v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Connection.html#v:replay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMulticasts to a replay channel of capacity 1, then connects immediately.\n\u003c/p\u003e",
          "module": "Signal.Connection",
          "name": "replayLast",
          "package": "RxHaskell",
          "signature": "Signal s v -\u003e SchedulerIO s (Signal s v)",
          "source": "src/Signal-Connection.html#replayLast",
          "type": "function"
        },
        "index": {
          "description": "Multicasts to replay channel of capacity then connects immediately",
          "hierarchy": "Signal Connection",
          "module": "Signal.Connection",
          "name": "replayLast",
          "normalized": "Signal a b-\u003eSchedulerIO a(Signal a b)",
          "package": "RxHaskell",
          "partial": "Last",
          "signature": "Signal s v-\u003eSchedulerIO s(Signal s v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Connection.html#v:replayLast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Signal.Event",
          "name": "Event",
          "package": "RxHaskell",
          "source": "src/Signal-Event.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Signal Event",
          "module": "Signal.Event",
          "name": "Event",
          "package": "RxHaskell",
          "partial": "Event",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Event.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents an event that a signal might send.\n\u003c/p\u003e\u003cp\u003eSignals may send any number of \u003ccode\u003e\u003ca\u003eNextEvent\u003c/a\u003e\u003c/code\u003es, followed by one \u003ccode\u003e\u003ca\u003eErrorEvent\u003c/a\u003e\u003c/code\u003e \u003cem\u003eor\u003c/em\u003e \u003ccode\u003e\u003ca\u003eCompletedEvent\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Signal.Event",
          "name": "Event",
          "package": "RxHaskell",
          "source": "src/Signal-Event.html#Event",
          "type": "data"
        },
        "index": {
          "description": "Represents an event that signal might send Signals may send any number of NextEvent followed by one ErrorEvent or CompletedEvent",
          "hierarchy": "Signal Event",
          "module": "Signal.Event",
          "name": "Event",
          "package": "RxHaskell",
          "partial": "Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Event.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSent when the signal completes successfully. Outside of the monad.\n\u003c/p\u003e",
          "module": "[\"Signal.Event\",\"Signal.Subscriber\",\"Signal\"]",
          "name": "CompletedEvent",
          "package": "RxHaskell",
          "signature": "CompletedEvent",
          "source": "src/Signal-Event.html#Event",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/RxHaskell/docs/Signal-Event.html#v:CompletedEvent\",\"http://hackage.haskell.org/package/RxHaskell/docs/Signal-Subscriber.html#v:CompletedEvent\",\"http://hackage.haskell.org/package/RxHaskell/docs/Signal.html#v:CompletedEvent\"]"
        },
        "index": {
          "description": "Sent when the signal completes successfully Outside of the monad",
          "hierarchy": "Signal Event",
          "module": "Signal.Event",
          "name": "CompletedEvent",
          "package": "RxHaskell",
          "partial": "Completed Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Event.html#v:CompletedEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSent when an error or exception occurs in the signal. Outside of the monad.\n\u003c/p\u003e",
          "module": "[\"Signal.Event\",\"Signal.Subscriber\",\"Signal\"]",
          "name": "ErrorEvent",
          "package": "RxHaskell",
          "signature": "ErrorEvent IOException",
          "source": "src/Signal-Event.html#Event",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/RxHaskell/docs/Signal-Event.html#v:ErrorEvent\",\"http://hackage.haskell.org/package/RxHaskell/docs/Signal-Subscriber.html#v:ErrorEvent\",\"http://hackage.haskell.org/package/RxHaskell/docs/Signal.html#v:ErrorEvent\"]"
        },
        "index": {
          "description": "Sent when an error or exception occurs in the signal Outside of the monad",
          "hierarchy": "Signal Event",
          "module": "Signal.Event",
          "name": "ErrorEvent",
          "package": "RxHaskell",
          "partial": "Error Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Event.html#v:ErrorEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA value \u003ccode\u003ev\u003c/code\u003e in the monad.\n\u003c/p\u003e",
          "module": "[\"Signal.Event\",\"Signal.Subscriber\",\"Signal\"]",
          "name": "NextEvent",
          "package": "RxHaskell",
          "signature": "NextEvent v",
          "source": "src/Signal-Event.html#Event",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/RxHaskell/docs/Signal-Event.html#v:NextEvent\",\"http://hackage.haskell.org/package/RxHaskell/docs/Signal-Subscriber.html#v:NextEvent\",\"http://hackage.haskell.org/package/RxHaskell/docs/Signal.html#v:NextEvent\"]"
        },
        "index": {
          "description": "value in the monad",
          "hierarchy": "Signal Event",
          "module": "Signal.Event",
          "name": "NextEvent",
          "package": "RxHaskell",
          "partial": "Next Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Event.html#v:NextEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Signal.Operators",
          "name": "Operators",
          "package": "RxHaskell",
          "source": "src/Signal-Operators.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Signal Operators",
          "module": "Signal.Operators",
          "name": "Operators",
          "package": "RxHaskell",
          "partial": "Operators",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Operators.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA signal which will send values of type \u003ccode\u003ev\u003c/code\u003e on a scheduler of type \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Signal.Operators",
          "name": "Signal",
          "package": "RxHaskell",
          "source": "src/Signal.html#Signal",
          "type": "data"
        },
        "index": {
          "description": "signal which will send values of type on scheduler of type",
          "hierarchy": "Signal Operators",
          "module": "Signal.Operators",
          "name": "Signal",
          "package": "RxHaskell",
          "partial": "Signal",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Operators.html#t:Signal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombines the latest values sent by both signals.\n\u003c/p\u003e",
          "module": "Signal.Operators",
          "name": "combine",
          "package": "RxHaskell",
          "signature": "Signal s a -\u003e Signal s b -\u003e Signal s (a, b)",
          "source": "src/Signal-Operators.html#combine",
          "type": "function"
        },
        "index": {
          "description": "Combines the latest values sent by both signals",
          "hierarchy": "Signal Operators",
          "module": "Signal.Operators",
          "name": "combine",
          "normalized": "Signal a b-\u003eSignal a c-\u003eSignal a(b,c)",
          "package": "RxHaskell",
          "signature": "Signal s a-\u003eSignal s b-\u003eSignal s(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Operators.html#v:combine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe inverse of \u003ccode\u003e\u003ca\u003ematerialize\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Signal.Operators",
          "name": "dematerialize",
          "package": "RxHaskell",
          "signature": "Signal s (Event v) -\u003e Signal s v",
          "source": "src/Signal-Operators.html#dematerialize",
          "type": "function"
        },
        "index": {
          "description": "The inverse of materialize",
          "hierarchy": "Signal Operators",
          "module": "Signal.Operators",
          "name": "dematerialize",
          "normalized": "Signal a(Event b)-\u003eSignal a b",
          "package": "RxHaskell",
          "signature": "Signal s(Event v)-\u003eSignal s v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Operators.html#v:dematerialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a side-effecting action when the signal completes.\n\u003c/p\u003e",
          "module": "Signal.Operators",
          "name": "doCompleted",
          "package": "RxHaskell",
          "signature": "Signal s v -\u003e SchedulerIO s () -\u003e Signal s v",
          "source": "src/Signal-Operators.html#doCompleted",
          "type": "function"
        },
        "index": {
          "description": "Runs side-effecting action when the signal completes",
          "hierarchy": "Signal Operators",
          "module": "Signal.Operators",
          "name": "doCompleted",
          "normalized": "Signal a b-\u003eSchedulerIO a()-\u003eSignal a b",
          "package": "RxHaskell",
          "partial": "Completed",
          "signature": "Signal s v-\u003eSchedulerIO s()-\u003eSignal s v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Operators.html#v:doCompleted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a side-effecting action whenever the signal sends an error.\n\u003c/p\u003e",
          "module": "Signal.Operators",
          "name": "doError",
          "package": "RxHaskell",
          "signature": "Signal s v -\u003e (IOException -\u003e SchedulerIO s ()) -\u003e Signal s v",
          "source": "src/Signal-Operators.html#doError",
          "type": "function"
        },
        "index": {
          "description": "Runs side-effecting action whenever the signal sends an error",
          "hierarchy": "Signal Operators",
          "module": "Signal.Operators",
          "name": "doError",
          "normalized": "Signal a b-\u003e(IOException-\u003eSchedulerIO a())-\u003eSignal a b",
          "package": "RxHaskell",
          "partial": "Error",
          "signature": "Signal s v-\u003e(IOException-\u003eSchedulerIO s())-\u003eSignal s v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Operators.html#v:doError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a side-effecting action whenever the signal sends an event.\n\u003c/p\u003e",
          "module": "Signal.Operators",
          "name": "doEvent",
          "package": "RxHaskell",
          "signature": "Signal s v -\u003e (Event v -\u003e SchedulerIO s ()) -\u003e Signal s v",
          "source": "src/Signal-Operators.html#doEvent",
          "type": "function"
        },
        "index": {
          "description": "Runs side-effecting action whenever the signal sends an event",
          "hierarchy": "Signal Operators",
          "module": "Signal.Operators",
          "name": "doEvent",
          "normalized": "Signal a b-\u003e(Event b-\u003eSchedulerIO a())-\u003eSignal a b",
          "package": "RxHaskell",
          "partial": "Event",
          "signature": "Signal s v-\u003e(Event v-\u003eSchedulerIO s())-\u003eSignal s v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Operators.html#v:doEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a side-effecting action whenever the signal sends a value.\n\u003c/p\u003e",
          "module": "Signal.Operators",
          "name": "doNext",
          "package": "RxHaskell",
          "signature": "Signal s v -\u003e (v -\u003e SchedulerIO s ()) -\u003e Signal s v",
          "source": "src/Signal-Operators.html#doNext",
          "type": "function"
        },
        "index": {
          "description": "Runs side-effecting action whenever the signal sends value",
          "hierarchy": "Signal Operators",
          "module": "Signal.Operators",
          "name": "doNext",
          "normalized": "Signal a b-\u003e(b-\u003eSchedulerIO a())-\u003eSignal a b",
          "package": "RxHaskell",
          "partial": "Next",
          "signature": "Signal s v-\u003e(v-\u003eSchedulerIO s())-\u003eSignal s v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Operators.html#v:doNext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a signal without the first \u003ccode\u003en\u003c/code\u003e elements.\n\u003c/p\u003e",
          "module": "Signal.Operators",
          "name": "drop",
          "package": "RxHaskell",
          "signature": "Signal s v -\u003e n -\u003e Signal s v",
          "source": "src/Signal-Operators.html#drop",
          "type": "function"
        },
        "index": {
          "description": "Returns signal without the first elements",
          "hierarchy": "Signal Operators",
          "module": "Signal.Operators",
          "name": "drop",
          "normalized": "Signal a b-\u003ec-\u003eSignal a b",
          "package": "RxHaskell",
          "signature": "Signal s v-\u003en-\u003eSignal s v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Operators.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a signal which immediately completes.\n\u003c/p\u003e",
          "module": "[\"Signal.Operators\",\"Signal\"]",
          "name": "empty",
          "package": "RxHaskell",
          "signature": "Signal s v",
          "source": "src/Signal.html#empty",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/RxHaskell/docs/Signal-Operators.html#v:empty\",\"http://hackage.haskell.org/package/RxHaskell/docs/Signal.html#v:empty\"]"
        },
        "index": {
          "description": "Returns signal which immediately completes",
          "hierarchy": "Signal Operators",
          "module": "Signal.Operators",
          "name": "empty",
          "package": "RxHaskell",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Operators.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilters the values of a signal according to a predicate.\n\u003c/p\u003e",
          "module": "Signal.Operators",
          "name": "filter",
          "package": "RxHaskell",
          "signature": "Signal s v -\u003e (v -\u003e Bool) -\u003e Signal s v",
          "source": "src/Signal-Operators.html#filter",
          "type": "function"
        },
        "index": {
          "description": "Filters the values of signal according to predicate",
          "hierarchy": "Signal Operators",
          "module": "Signal.Operators",
          "name": "filter",
          "normalized": "Signal a b-\u003e(b-\u003eBool)-\u003eSignal a b",
          "package": "RxHaskell",
          "signature": "Signal s v-\u003e(v-\u003eBool)-\u003eSignal s v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Operators.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a side-effecting action when the signal completes or errors.\n\u003c/p\u003e",
          "module": "Signal.Operators",
          "name": "finally",
          "package": "RxHaskell",
          "signature": "Signal s v -\u003e SchedulerIO s () -\u003e Signal s v",
          "source": "src/Signal-Operators.html#finally",
          "type": "function"
        },
        "index": {
          "description": "Runs side-effecting action when the signal completes or errors",
          "hierarchy": "Signal Operators",
          "module": "Signal.Operators",
          "name": "finally",
          "normalized": "Signal a b-\u003eSchedulerIO a()-\u003eSignal a b",
          "package": "RxHaskell",
          "signature": "Signal s v-\u003eSchedulerIO s()-\u003eSignal s v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Operators.html#v:finally"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurns any \u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e into a signal.\n\u003c/p\u003e",
          "module": "Signal.Operators",
          "name": "fromFoldable",
          "package": "RxHaskell",
          "signature": "t v -\u003e Signal s v",
          "source": "src/Signal-Operators.html#fromFoldable",
          "type": "function"
        },
        "index": {
          "description": "Turns any Foldable into signal",
          "hierarchy": "Signal Operators",
          "module": "Signal.Operators",
          "name": "fromFoldable",
          "normalized": "a b-\u003eSignal c b",
          "package": "RxHaskell",
          "partial": "Foldable",
          "signature": "t v-\u003eSignal s v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Operators.html#v:fromFoldable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a signal of mapped values.\n\u003c/p\u003e",
          "module": "Signal.Operators",
          "name": "map",
          "package": "RxHaskell",
          "signature": "Signal s v -\u003e (v -\u003e w) -\u003e Signal s w",
          "source": "src/Signal-Operators.html#map",
          "type": "function"
        },
        "index": {
          "description": "Returns signal of mapped values",
          "hierarchy": "Signal Operators",
          "module": "Signal.Operators",
          "name": "map",
          "normalized": "Signal a b-\u003e(b-\u003ec)-\u003eSignal a c",
          "package": "RxHaskell",
          "signature": "Signal s v-\u003e(v-\u003ew)-\u003eSignal s w",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Operators.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBrings every signal event into the monad, as a \u003ccode\u003e\u003ca\u003eNextEvent\u003c/a\u003e\u003c/code\u003e containing the event itself.\n\u003c/p\u003e",
          "module": "Signal.Operators",
          "name": "materialize",
          "package": "RxHaskell",
          "signature": "Signal s v -\u003e Signal s (Event v)",
          "source": "src/Signal-Operators.html#materialize",
          "type": "function"
        },
        "index": {
          "description": "Brings every signal event into the monad as NextEvent containing the event itself",
          "hierarchy": "Signal Operators",
          "module": "Signal.Operators",
          "name": "materialize",
          "normalized": "Signal a b-\u003eSignal a(Event b)",
          "package": "RxHaskell",
          "signature": "Signal s v-\u003eSignal s(Event v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Operators.html#v:materialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a signal which never sends any events.\n\u003c/p\u003e",
          "module": "[\"Signal.Operators\",\"Signal\"]",
          "name": "never",
          "package": "RxHaskell",
          "signature": "Signal s v",
          "source": "src/Signal.html#never",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/RxHaskell/docs/Signal-Operators.html#v:never\",\"http://hackage.haskell.org/package/RxHaskell/docs/Signal.html#v:never\"]"
        },
        "index": {
          "description": "Returns signal which never sends any events",
          "hierarchy": "Signal Operators",
          "module": "Signal.Operators",
          "name": "never",
          "package": "RxHaskell",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Operators.html#v:never"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a signal that sends the values from the most recently sent signal.\n\u003c/p\u003e",
          "module": "Signal.Operators",
          "name": "switch",
          "package": "RxHaskell",
          "signature": "Signal s (Signal s v) -\u003e Signal s v",
          "source": "src/Signal-Operators.html#switch",
          "type": "function"
        },
        "index": {
          "description": "Returns signal that sends the values from the most recently sent signal",
          "hierarchy": "Signal Operators",
          "module": "Signal.Operators",
          "name": "switch",
          "normalized": "Signal a(Signal a b)-\u003eSignal a b",
          "package": "RxHaskell",
          "signature": "Signal s(Signal s v)-\u003eSignal s v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Operators.html#v:switch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a signal of the first \u003ccode\u003en\u003c/code\u003e elements.\n\u003c/p\u003e",
          "module": "Signal.Operators",
          "name": "take",
          "package": "RxHaskell",
          "signature": "Signal s v -\u003e n -\u003e Signal s v",
          "source": "src/Signal-Operators.html#take",
          "type": "function"
        },
        "index": {
          "description": "Returns signal of the first elements",
          "hierarchy": "Signal Operators",
          "module": "Signal.Operators",
          "name": "take",
          "normalized": "Signal a b-\u003ec-\u003eSignal a b",
          "package": "RxHaskell",
          "signature": "Signal s v-\u003en-\u003eSignal s v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Operators.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Signal.Scheduled",
          "name": "Scheduled",
          "package": "RxHaskell",
          "source": "src/Signal-Scheduled.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Signal Scheduled",
          "module": "Signal.Scheduled",
          "name": "Scheduled",
          "package": "RxHaskell",
          "partial": "Scheduled",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Scheduled.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a queue of \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e actions which can be executed in FIFO order.\n\u003c/p\u003e",
          "module": "Signal.Scheduled",
          "name": "Scheduler",
          "package": "RxHaskell",
          "source": "src/Scheduler-Internal.html#Scheduler",
          "type": "class"
        },
        "index": {
          "description": "Represents queue of IO actions which can be executed in FIFO order",
          "hierarchy": "Signal Scheduled",
          "module": "Signal.Scheduled",
          "name": "Scheduler",
          "package": "RxHaskell",
          "partial": "Scheduler",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Scheduled.html#t:Scheduler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e computation that must be performed in a scheduler of type \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Signal.Scheduled",
          "name": "SchedulerIO",
          "package": "RxHaskell",
          "source": "src/Scheduler-Internal.html#SchedulerIO",
          "type": "data"
        },
        "index": {
          "description": "An IO computation that must be performed in scheduler of type",
          "hierarchy": "Signal Scheduled",
          "module": "Signal.Scheduled",
          "name": "SchedulerIO",
          "package": "RxHaskell",
          "partial": "Scheduler IO",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Scheduled.html#t:SchedulerIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA signal which will send values of type \u003ccode\u003ev\u003c/code\u003e on a scheduler of type \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Signal.Scheduled",
          "name": "Signal",
          "package": "RxHaskell",
          "source": "src/Signal.html#Signal",
          "type": "data"
        },
        "index": {
          "description": "signal which will send values of type on scheduler of type",
          "hierarchy": "Signal Scheduled",
          "module": "Signal.Scheduled",
          "name": "Signal",
          "package": "RxHaskell",
          "partial": "Signal",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Scheduled.html#t:Signal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a signal which subscribes to \u003ccode\u003esig\u003c/code\u003e on scheduler \u003ccode\u003eschA\u003c/code\u003e and delivers its events onto scheduler \u003ccode\u003eschB\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Signal.Scheduled",
          "name": "deliverOn",
          "package": "RxHaskell",
          "signature": "Signal s v -\u003e s -\u003e t -\u003e Signal t v",
          "source": "src/Signal-Scheduled.html#deliverOn",
          "type": "function"
        },
        "index": {
          "description": "Returns signal which subscribes to sig on scheduler schA and delivers its events onto scheduler schB",
          "hierarchy": "Signal Scheduled",
          "module": "Signal.Scheduled",
          "name": "deliverOn",
          "normalized": "Signal a b-\u003ea-\u003ec-\u003eSignal c b",
          "package": "RxHaskell",
          "partial": "On",
          "signature": "Signal s v-\u003es-\u003et-\u003eSignal t v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Scheduled.html#v:deliverOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubscribes to \u003ccode\u003esig\u003c/code\u003e and synchronously waits for an event.\n\u003c/p\u003e",
          "module": "Signal.Scheduled",
          "name": "first",
          "package": "RxHaskell",
          "signature": "Signal s v -\u003e SchedulerIO s (Event v)",
          "source": "src/Signal-Scheduled.html#first",
          "type": "function"
        },
        "index": {
          "description": "Subscribes to sig and synchronously waits for an event",
          "hierarchy": "Signal Scheduled",
          "module": "Signal.Scheduled",
          "name": "first",
          "normalized": "Signal a b-\u003eSchedulerIO a(Event b)",
          "package": "RxHaskell",
          "signature": "Signal s v-\u003eSchedulerIO s(Event v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Scheduled.html#v:first"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStarts a signal which executes \u003ccode\u003eaction\u003c/code\u003e on \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Signal.Scheduled",
          "name": "start",
          "package": "RxHaskell",
          "signature": "s -\u003e (Subscriber s v -\u003e SchedulerIO s ()) -\u003e IO (Signal s v)",
          "source": "src/Signal-Scheduled.html#start",
          "type": "function"
        },
        "index": {
          "description": "Starts signal which executes action on",
          "hierarchy": "Signal Scheduled",
          "module": "Signal.Scheduled",
          "name": "start",
          "normalized": "a-\u003e(Subscriber a b-\u003eSchedulerIO a())-\u003eIO(Signal a b)",
          "package": "RxHaskell",
          "signature": "s-\u003e(Subscriber s v-\u003eSchedulerIO s())-\u003eIO(Signal s v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Scheduled.html#v:start"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a signal which subscribes to \u003ccode\u003esig\u003c/code\u003e on scheduler \u003ccode\u003esch\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Signal.Scheduled",
          "name": "subscribeOn",
          "package": "RxHaskell",
          "signature": "Signal s v -\u003e s -\u003e Signal s v",
          "source": "src/Signal-Scheduled.html#subscribeOn",
          "type": "function"
        },
        "index": {
          "description": "Returns signal which subscribes to sig on scheduler sch",
          "hierarchy": "Signal Scheduled",
          "module": "Signal.Scheduled",
          "name": "subscribeOn",
          "normalized": "Signal a b-\u003ea-\u003eSignal a b",
          "package": "RxHaskell",
          "partial": "On",
          "signature": "Signal s v-\u003es-\u003eSignal s v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Scheduled.html#v:subscribeOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Signal.Subscriber.Internal",
          "name": "Internal",
          "package": "RxHaskell",
          "source": "src/Signal-Subscriber-Internal.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Signal Subscriber Internal",
          "module": "Signal.Subscriber.Internal",
          "name": "Internal",
          "package": "RxHaskell",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Subscriber-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReceives events from a signal with values of type \u003ccode\u003ev\u003c/code\u003e and running in a scheduler of type \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003es\u003c/code\u003e refers to the scheduler that events must be sent on. Events are always sent\n   synchronously, regardless of \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Signal.Subscriber.Internal",
          "name": "Subscriber",
          "package": "RxHaskell",
          "source": "src/Signal-Subscriber-Internal.html#Subscriber",
          "type": "data"
        },
        "index": {
          "description": "Receives events from signal with values of type and running in scheduler of type Note that refers to the scheduler that events must be sent on Events are always sent synchronously regardless of",
          "hierarchy": "Signal Subscriber Internal",
          "module": "Signal.Subscriber.Internal",
          "name": "Subscriber",
          "package": "RxHaskell",
          "partial": "Subscriber",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Subscriber-Internal.html#t:Subscriber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Signal.Subscriber.Internal",
          "name": "Subscriber",
          "package": "RxHaskell",
          "signature": "Subscriber",
          "source": "src/Signal-Subscriber-Internal.html#Subscriber",
          "type": "function"
        },
        "index": {
          "hierarchy": "Signal Subscriber Internal",
          "module": "Signal.Subscriber.Internal",
          "name": "Subscriber",
          "package": "RxHaskell",
          "partial": "Subscriber",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Subscriber-Internal.html#v:Subscriber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a disposable representing a subscription to the subscriber.\n   If the subscriber is later sent completed or error, the disposable will be disposed.\n\u003c/p\u003e",
          "module": "Signal.Subscriber.Internal",
          "name": "addSubscriptionDisposable",
          "package": "RxHaskell",
          "signature": "Subscriber s v -\u003e Disposable -\u003e IO ()",
          "source": "src/Signal-Subscriber-Internal.html#addSubscriptionDisposable",
          "type": "function"
        },
        "index": {
          "description": "Adds disposable representing subscription to the subscriber If the subscriber is later sent completed or error the disposable will be disposed",
          "hierarchy": "Signal Subscriber Internal",
          "module": "Signal.Subscriber.Internal",
          "name": "addSubscriptionDisposable",
          "normalized": "Subscriber a b-\u003eDisposable-\u003eIO()",
          "package": "RxHaskell",
          "partial": "Subscription Disposable",
          "signature": "Subscriber s v-\u003eDisposable-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Subscriber-Internal.html#v:addSubscriptionDisposable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Signal.Subscriber.Internal",
          "name": "disposables",
          "package": "RxHaskell",
          "signature": "DisposableSet",
          "source": "src/Signal-Subscriber-Internal.html#Subscriber",
          "type": "function"
        },
        "index": {
          "hierarchy": "Signal Subscriber Internal",
          "module": "Signal.Subscriber.Internal",
          "name": "disposables",
          "package": "RxHaskell",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Subscriber-Internal.html#v:disposables"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisposes the subscriber, preventing it from receiving any new events.\n\u003c/p\u003e",
          "module": "Signal.Subscriber.Internal",
          "name": "disposeSubscriber",
          "package": "RxHaskell",
          "signature": "Subscriber s v -\u003e IO ()",
          "source": "src/Signal-Subscriber-Internal.html#disposeSubscriber",
          "type": "function"
        },
        "index": {
          "description": "Disposes the subscriber preventing it from receiving any new events",
          "hierarchy": "Signal Subscriber Internal",
          "module": "Signal.Subscriber.Internal",
          "name": "disposeSubscriber",
          "normalized": "Subscriber a b-\u003eIO()",
          "package": "RxHaskell",
          "partial": "Subscriber",
          "signature": "Subscriber s v-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Subscriber-Internal.html#v:disposeSubscriber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Signal.Subscriber.Internal",
          "name": "disposed",
          "package": "RxHaskell",
          "signature": "TVar Bool",
          "source": "src/Signal-Subscriber-Internal.html#Subscriber",
          "type": "function"
        },
        "index": {
          "hierarchy": "Signal Subscriber Internal",
          "module": "Signal.Subscriber.Internal",
          "name": "disposed",
          "package": "RxHaskell",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Subscriber-Internal.html#v:disposed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Signal.Subscriber.Internal",
          "name": "lockedThread",
          "package": "RxHaskell",
          "signature": "TVar ThreadId",
          "source": "src/Signal-Subscriber-Internal.html#Subscriber",
          "type": "function"
        },
        "index": {
          "hierarchy": "Signal Subscriber Internal",
          "module": "Signal.Subscriber.Internal",
          "name": "lockedThread",
          "package": "RxHaskell",
          "partial": "Thread",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Subscriber-Internal.html#v:lockedThread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Signal.Subscriber.Internal",
          "name": "onEvent",
          "package": "RxHaskell",
          "signature": "Event v -\u003e SchedulerIO s ()",
          "source": "src/Signal-Subscriber-Internal.html#Subscriber",
          "type": "function"
        },
        "index": {
          "hierarchy": "Signal Subscriber Internal",
          "module": "Signal.Subscriber.Internal",
          "name": "onEvent",
          "normalized": "Event a-\u003eSchedulerIO b()",
          "package": "RxHaskell",
          "partial": "Event",
          "signature": "Event v-\u003eSchedulerIO s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Subscriber-Internal.html#v:onEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Signal.Subscriber.Internal",
          "name": "threadLockCounter",
          "package": "RxHaskell",
          "signature": "TVar Word32",
          "source": "src/Signal-Subscriber-Internal.html#Subscriber",
          "type": "function"
        },
        "index": {
          "hierarchy": "Signal Subscriber Internal",
          "module": "Signal.Subscriber.Internal",
          "name": "threadLockCounter",
          "package": "RxHaskell",
          "partial": "Lock Counter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Subscriber-Internal.html#v:threadLockCounter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Signal.Subscriber",
          "name": "Subscriber",
          "package": "RxHaskell",
          "source": "src/Signal-Subscriber.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Signal Subscriber",
          "module": "Signal.Subscriber",
          "name": "Subscriber",
          "package": "RxHaskell",
          "partial": "Subscriber",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Subscriber.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents an event that a signal might send.\n\u003c/p\u003e\u003cp\u003eSignals may send any number of \u003ccode\u003e\u003ca\u003eNextEvent\u003c/a\u003e\u003c/code\u003es, followed by one \u003ccode\u003e\u003ca\u003eErrorEvent\u003c/a\u003e\u003c/code\u003e \u003cem\u003eor\u003c/em\u003e \u003ccode\u003e\u003ca\u003eCompletedEvent\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Signal.Subscriber",
          "name": "Event",
          "package": "RxHaskell",
          "source": "src/Signal-Event.html#Event",
          "type": "data"
        },
        "index": {
          "description": "Represents an event that signal might send Signals may send any number of NextEvent followed by one ErrorEvent or CompletedEvent",
          "hierarchy": "Signal Subscriber",
          "module": "Signal.Subscriber",
          "name": "Event",
          "package": "RxHaskell",
          "partial": "Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Subscriber.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReceives events from a signal with values of type \u003ccode\u003ev\u003c/code\u003e and running in a scheduler of type \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003es\u003c/code\u003e refers to the scheduler that events must be sent on. Events are always sent\n   synchronously, regardless of \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Signal.Subscriber",
          "name": "Subscriber",
          "package": "RxHaskell",
          "source": "src/Signal-Subscriber-Internal.html#Subscriber",
          "type": "data"
        },
        "index": {
          "description": "Receives events from signal with values of type and running in scheduler of type Note that refers to the scheduler that events must be sent on Events are always sent synchronously regardless of",
          "hierarchy": "Signal Subscriber",
          "module": "Signal.Subscriber",
          "name": "Subscriber",
          "package": "RxHaskell",
          "partial": "Subscriber",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Subscriber.html#t:Subscriber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSynchronously sends an event to a subscriber.\n\u003c/p\u003e",
          "module": "Signal.Subscriber",
          "name": "send",
          "package": "RxHaskell",
          "signature": "Subscriber s v -\u003e Event v -\u003e SchedulerIO s ()",
          "source": "src/Signal-Subscriber.html#send",
          "type": "function"
        },
        "index": {
          "description": "Synchronously sends an event to subscriber",
          "hierarchy": "Signal Subscriber",
          "module": "Signal.Subscriber",
          "name": "send",
          "normalized": "Subscriber a b-\u003eEvent b-\u003eSchedulerIO a()",
          "package": "RxHaskell",
          "signature": "Subscriber s v-\u003eEvent v-\u003eSchedulerIO s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Subscriber.html#v:send"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a subscriber.\n\u003c/p\u003e",
          "module": "Signal.Subscriber",
          "name": "subscriber",
          "package": "RxHaskell",
          "signature": "(Event v -\u003e SchedulerIO s ())-\u003e IO (Subscriber s v)",
          "type": "function"
        },
        "index": {
          "description": "Constructs subscriber",
          "hierarchy": "Signal Subscriber",
          "module": "Signal.Subscriber",
          "name": "subscriber",
          "normalized": "(Event a-\u003eSchedulerIO b())-\u003eIO(Subscriber b a)",
          "package": "RxHaskell",
          "signature": "(Event v-\u003eSchedulerIO s())-\u003eIO(Subscriber s v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal-Subscriber.html#v:subscriber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Signal",
          "name": "Signal",
          "package": "RxHaskell",
          "source": "src/Signal.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Signal",
          "module": "Signal",
          "name": "Signal",
          "package": "RxHaskell",
          "partial": "Signal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllows disposal of a resource by running an action in the monad \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Signal",
          "name": "Disposable",
          "package": "RxHaskell",
          "source": "src/Disposable.html#Disposable",
          "type": "data"
        },
        "index": {
          "description": "Allows disposal of resource by running an action in the monad",
          "hierarchy": "Signal",
          "module": "Signal",
          "name": "Disposable",
          "package": "RxHaskell",
          "partial": "Disposable",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal.html#t:Disposable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents an event that a signal might send.\n\u003c/p\u003e\u003cp\u003eSignals may send any number of \u003ccode\u003e\u003ca\u003eNextEvent\u003c/a\u003e\u003c/code\u003es, followed by one \u003ccode\u003e\u003ca\u003eErrorEvent\u003c/a\u003e\u003c/code\u003e \u003cem\u003eor\u003c/em\u003e \u003ccode\u003e\u003ca\u003eCompletedEvent\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Signal",
          "name": "Event",
          "package": "RxHaskell",
          "source": "src/Signal-Event.html#Event",
          "type": "data"
        },
        "index": {
          "description": "Represents an event that signal might send Signals may send any number of NextEvent followed by one ErrorEvent or CompletedEvent",
          "hierarchy": "Signal",
          "module": "Signal",
          "name": "Event",
          "package": "RxHaskell",
          "partial": "Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a queue of \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e actions which can be executed in FIFO order.\n\u003c/p\u003e",
          "module": "Signal",
          "name": "Scheduler",
          "package": "RxHaskell",
          "source": "src/Scheduler-Internal.html#Scheduler",
          "type": "class"
        },
        "index": {
          "description": "Represents queue of IO actions which can be executed in FIFO order",
          "hierarchy": "Signal",
          "module": "Signal",
          "name": "Scheduler",
          "package": "RxHaskell",
          "partial": "Scheduler",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal.html#t:Scheduler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e computation that must be performed in a scheduler of type \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Signal",
          "name": "SchedulerIO",
          "package": "RxHaskell",
          "source": "src/Scheduler-Internal.html#SchedulerIO",
          "type": "data"
        },
        "index": {
          "description": "An IO computation that must be performed in scheduler of type",
          "hierarchy": "Signal",
          "module": "Signal",
          "name": "SchedulerIO",
          "package": "RxHaskell",
          "partial": "Scheduler IO",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal.html#t:SchedulerIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA signal which will send values of type \u003ccode\u003ev\u003c/code\u003e on a scheduler of type \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Signal",
          "name": "Signal",
          "package": "RxHaskell",
          "source": "src/Signal.html#Signal",
          "type": "data"
        },
        "index": {
          "description": "signal which will send values of type on scheduler of type",
          "hierarchy": "Signal",
          "module": "Signal",
          "name": "Signal",
          "package": "RxHaskell",
          "partial": "Signal",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal.html#t:Signal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a subscriber and subscribes to the signal.\n\u003c/p\u003e",
          "module": "Signal",
          "name": "(\u003e\u003e:)",
          "package": "RxHaskell",
          "signature": "Signal s v-\u003e (Event v -\u003e SchedulerIO s ())-\u003e SchedulerIO s Disposable",
          "type": "function"
        },
        "index": {
          "description": "Creates subscriber and subscribes to the signal",
          "hierarchy": "Signal",
          "module": "Signal",
          "name": "(\u003e\u003e:) \u003e\u003e:",
          "normalized": "Signal a b-\u003e(Event b-\u003eSchedulerIO a())-\u003eSchedulerIO a Disposable",
          "package": "RxHaskell",
          "signature": "Signal s v-\u003e(Event v-\u003eSchedulerIO s())-\u003eSchedulerIO s Disposable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal.html#v:-62--62-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a signal which sends its values to new subscribers synchronously.\n\u003c/p\u003e",
          "module": "Signal",
          "name": "signal",
          "package": "RxHaskell",
          "signature": "(Subscriber s v -\u003e SchedulerIO s Disposable)-\u003e Signal s v",
          "type": "function"
        },
        "index": {
          "description": "Constructs signal which sends its values to new subscribers synchronously",
          "hierarchy": "Signal",
          "module": "Signal",
          "name": "signal",
          "normalized": "(Subscriber a b-\u003eSchedulerIO a Disposable)-\u003eSignal a b",
          "package": "RxHaskell",
          "signature": "(Subscriber s v-\u003eSchedulerIO s Disposable)-\u003eSignal s v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal.html#v:signal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubscribes to a signal.\n\u003c/p\u003e",
          "module": "Signal",
          "name": "subscribe",
          "package": "RxHaskell",
          "signature": "Signal s v-\u003e Subscriber s v-\u003e SchedulerIO s Disposable",
          "type": "function"
        },
        "index": {
          "description": "Subscribes to signal",
          "hierarchy": "Signal",
          "module": "Signal",
          "name": "subscribe",
          "normalized": "Signal a b-\u003eSubscriber a b-\u003eSchedulerIO a Disposable",
          "package": "RxHaskell",
          "signature": "Signal s v-\u003eSubscriber s v-\u003eSchedulerIO s Disposable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RxHaskell/docs/Signal.html#v:subscribe"
      }
    }
  ]
]