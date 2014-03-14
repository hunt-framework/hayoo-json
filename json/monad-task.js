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
        "word": "monad-task"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe MonadTask class that defines the set of combinators to work with Task monad.\n\u003c/p\u003e\u003cp\u003eThe operations for MonadTask are similar to those of co-routines, with the\n   addition of watching and signaling events. \n\u003c/p\u003e\u003cp\u003eWe also define a set of auto lifting for common transformers. Note that we \n   purposely leave a case undefined where a state transformer goes on top of \n   a task monad, because such an operation is either unsound or has to roll\n   back the state (see \u003ccode\u003e\u003ccode\u003e\u003ca\u003eliftCallCC\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e). So it's \n   recommended to keep TaskT on top of all StateT in a transformer stack.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Task.Class",
          "name": "Class",
          "package": "monad-task",
          "source": "src/Control-Monad-Task-Class.html",
          "type": "module"
        },
        "index": {
          "description": "The MonadTask class that defines the set of combinators to work with Task monad The operations for MonadTask are similar to those of co-routines with the addition of watching and signaling events We also define set of auto lifting for common transformers Note that we purposely leave case undefined where state transformer goes on top of task monad because such an operation is either unsound or has to roll back the state see liftCallCC So it recommended to keep TaskT on top of all StateT in transformer stack",
          "hierarchy": "Control Monad Task Class",
          "module": "Control.Monad.Task.Class",
          "name": "Class",
          "package": "monad-task",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-task/docs/Control-Monad-Task-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eMonadTask\u003c/code\u003e specifies a task monad \u003ccode\u003em\u003c/code\u003e over an event type \u003ccode\u003ee\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Task.Class",
          "name": "MonadTask",
          "package": "monad-task",
          "source": "src/Control-Monad-Task-Class.html#MonadTask",
          "type": "class"
        },
        "index": {
          "description": "MonadTask specifies task monad over an event type",
          "hierarchy": "Control Monad Task Class",
          "module": "Control.Monad.Task.Class",
          "name": "MonadTask",
          "package": "monad-task",
          "partial": "Monad Task",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-task/docs/Control-Monad-Task-Class.html#t:MonadTask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eexit\u003c/code\u003e ends all tasks and return immediately.\n\u003c/p\u003e",
          "module": "Control.Monad.Task.Class",
          "name": "exit",
          "package": "monad-task",
          "signature": "m ()",
          "source": "src/Control-Monad-Task-Class.html#exit",
          "type": "method"
        },
        "index": {
          "description": "exit ends all tasks and return immediately",
          "hierarchy": "Control Monad Task Class",
          "module": "Control.Monad.Task.Class",
          "name": "exit",
          "normalized": "a()",
          "package": "monad-task",
          "signature": "m()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-task/docs/Control-Monad-Task-Class.html#v:exit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003efork\u003c/code\u003e spawns a task and runs it immediate until it ends or \n   suspends before returning to current task.\n\u003c/p\u003e",
          "module": "Control.Monad.Task.Class",
          "name": "fork",
          "package": "monad-task",
          "signature": "m a -\u003e m ()",
          "source": "src/Control-Monad-Task-Class.html#fork",
          "type": "method"
        },
        "index": {
          "description": "fork spawns task and runs it immediate until it ends or suspends before returning to current task",
          "hierarchy": "Control Monad Task Class",
          "module": "Control.Monad.Task.Class",
          "name": "fork",
          "normalized": "a b-\u003ea()",
          "package": "monad-task",
          "signature": "m a-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-task/docs/Control-Monad-Task-Class.html#v:fork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eorElse\u003c/code\u003e is a helper function for combining two trigger functions \n   disjuctively, favoring the first one.\n\u003c/p\u003e",
          "module": "[\"Control.Monad.Task.Class\",\"Control.Monad.Task\"]",
          "name": "orElse",
          "package": "monad-task",
          "signature": "(e -\u003e Maybe a) -\u003e (e -\u003e Maybe b) -\u003e e -\u003e Maybe (Either a b)",
          "source": "src/Control-Monad-Task-Class.html#orElse",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/monad-task/docs/Control-Monad-Task-Class.html#v:orElse\",\"http://hackage.haskell.org/package/monad-task/docs/Control-Monad-Task.html#v:orElse\"]"
        },
        "index": {
          "description": "orElse is helper function for combining two trigger functions disjuctively favoring the first one",
          "hierarchy": "Control Monad Task Class",
          "module": "Control.Monad.Task.Class",
          "name": "orElse",
          "normalized": "(a-\u003eMaybe b)-\u003e(a-\u003eMaybe c)-\u003ea-\u003eMaybe(Either b c)",
          "package": "monad-task",
          "partial": "Else",
          "signature": "(e-\u003eMaybe a)-\u003e(e-\u003eMaybe b)-\u003ee-\u003eMaybe(Either a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-task/docs/Control-Monad-Task-Class.html#v:orElse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esignal\u003c/code\u003e broadcasts an event to all other tasks that are watching,\n   and give those who wake up the priority to run.\n\u003c/p\u003e",
          "module": "Control.Monad.Task.Class",
          "name": "signal",
          "package": "monad-task",
          "signature": "e -\u003e m ()",
          "source": "src/Control-Monad-Task-Class.html#signal",
          "type": "method"
        },
        "index": {
          "description": "signal broadcasts an event to all other tasks that are watching and give those who wake up the priority to run",
          "hierarchy": "Control Monad Task Class",
          "module": "Control.Monad.Task.Class",
          "name": "signal",
          "normalized": "a-\u003eb()",
          "package": "monad-task",
          "signature": "e-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-task/docs/Control-Monad-Task-Class.html#v:signal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ewatch\u003c/code\u003e suspends current task to wait for future events, and will\n   resume execution when an event triggers its watching function. \n\u003c/p\u003e",
          "module": "Control.Monad.Task.Class",
          "name": "watch",
          "package": "monad-task",
          "signature": "(e -\u003e Maybe a) -\u003e m a",
          "source": "src/Control-Monad-Task-Class.html#watch",
          "type": "method"
        },
        "index": {
          "description": "watch suspends current task to wait for future events and will resume execution when an event triggers its watching function",
          "hierarchy": "Control Monad Task Class",
          "module": "Control.Monad.Task.Class",
          "name": "watch",
          "normalized": "(a-\u003eMaybe b)-\u003ec b",
          "package": "monad-task",
          "signature": "(e-\u003eMaybe a)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-task/docs/Control-Monad-Task-Class.html#v:watch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eyield\u003c/code\u003e temporarily suspends current task to let others run. \n\u003c/p\u003e",
          "module": "Control.Monad.Task.Class",
          "name": "yield",
          "package": "monad-task",
          "signature": "m ()",
          "source": "src/Control-Monad-Task-Class.html#yield",
          "type": "method"
        },
        "index": {
          "description": "yield temporarily suspends current task to let others run",
          "hierarchy": "Control Monad Task Class",
          "module": "Control.Monad.Task.Class",
          "name": "yield",
          "normalized": "a()",
          "package": "monad-task",
          "signature": "m()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-task/docs/Control-Monad-Task-Class.html#v:yield"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTask monad transformer can help refactor event and callback heavy\nprograms into monads via co-routines. The idea is loosely\nbased on \u003cem\u003eCombining Events And Threads For Scalable Network Services\u003c/em\u003e,\nby Peng Li and Steve Zdancewic, in \u003cem\u003ePLDI\u003c/em\u003e, 2007.\n(\u003ca\u003ehttp://www.cis.upenn.edu/~stevez/papers/abstracts.html#LZ07\u003c/a\u003e), but \nwith deterministic and co-oprative lightweight threads, \nalso known as co-routines, so that the base monad can be anything ranging \nfrom IO to state monads, or your favorite monad transformer stack.\n\u003c/p\u003e\u003cp\u003eBesides, Task monad transformer also provides a simple mechanism to signal\nand watch for events, which allows complex event processing logic to be\nexpressed as streamlined monadic co-routines.\n\u003c/p\u003e\u003cp\u003eTask monad transformer is essentially a ContT, or continuation transformer,\ndefined to extract the control flow of monadic programs with co-operative\nmulti-threading. After the CPS transformation, the program trace is then\nexecuted with a simple round-robin scheduler.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Task",
          "name": "Task",
          "package": "monad-task",
          "source": "src/Control-Monad-Task.html",
          "type": "module"
        },
        "index": {
          "description": "Task monad transformer can help refactor event and callback heavy programs into monads via co-routines The idea is loosely based on Combining Events And Threads For Scalable Network Services by Peng Li and Steve Zdancewic in PLDI http www.cis.upenn.edu stevez papers abstracts.html LZ07 but with deterministic and co-oprative lightweight threads also known as co-routines so that the base monad can be anything ranging from IO to state monads or your favorite monad transformer stack Besides Task monad transformer also provides simple mechanism to signal and watch for events which allows complex event processing logic to be expressed as streamlined monadic co-routines Task monad transformer is essentially ContT or continuation transformer defined to extract the control flow of monadic programs with co-operative multi-threading After the CPS transformation the program trace is then executed with simple round-robin scheduler",
          "hierarchy": "Control Monad Task",
          "module": "Control.Monad.Task",
          "name": "Task",
          "package": "monad-task",
          "partial": "Task",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-task/docs/Control-Monad-Task.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eMonadTask\u003c/code\u003e specifies a task monad \u003ccode\u003em\u003c/code\u003e over an event type \u003ccode\u003ee\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Task",
          "name": "MonadTask",
          "package": "monad-task",
          "source": "src/Control-Monad-Task-Class.html#MonadTask",
          "type": "class"
        },
        "index": {
          "description": "MonadTask specifies task monad over an event type",
          "hierarchy": "Control Monad Task",
          "module": "Control.Monad.Task",
          "name": "MonadTask",
          "package": "monad-task",
          "partial": "Monad Task",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-task/docs/Control-Monad-Task.html#t:MonadTask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTask monad transformer.\n\u003c/p\u003e",
          "module": "Control.Monad.Task",
          "name": "TaskT",
          "package": "monad-task",
          "source": "src/Control-Monad-Trans-Task.html#TaskT",
          "type": "newtype"
        },
        "index": {
          "description": "Task monad transformer",
          "hierarchy": "Control Monad Task",
          "module": "Control.Monad.Task",
          "name": "TaskT",
          "package": "monad-task",
          "partial": "Task",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/monad-task/docs/Control-Monad-Task.html#t:TaskT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Monad.Task\",\"Control.Monad.Trans.Task\"]",
          "name": "TaskT",
          "package": "monad-task",
          "signature": "TaskT",
          "source": "src/Control-Monad-Trans-Task.html#TaskT",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/monad-task/docs/Control-Monad-Task.html#v:TaskT\",\"http://hackage.haskell.org/package/monad-task/docs/Control-Monad-Trans-Task.html#v:TaskT\"]"
        },
        "index": {
          "hierarchy": "Control Monad Task",
          "module": "Control.Monad.Task",
          "name": "TaskT",
          "package": "monad-task",
          "partial": "Task",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-task/docs/Control-Monad-Task.html#v:TaskT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eexit\u003c/code\u003e ends all tasks and return immediately.\n\u003c/p\u003e",
          "module": "Control.Monad.Task",
          "name": "exit",
          "package": "monad-task",
          "signature": "m ()",
          "source": "src/Control-Monad-Task-Class.html#exit",
          "type": "method"
        },
        "index": {
          "description": "exit ends all tasks and return immediately",
          "hierarchy": "Control Monad Task",
          "module": "Control.Monad.Task",
          "name": "exit",
          "normalized": "a()",
          "package": "monad-task",
          "signature": "m()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-task/docs/Control-Monad-Task.html#v:exit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003efork\u003c/code\u003e spawns a task and runs it immediate until it ends or \n   suspends before returning to current task.\n\u003c/p\u003e",
          "module": "Control.Monad.Task",
          "name": "fork",
          "package": "monad-task",
          "signature": "m a -\u003e m ()",
          "source": "src/Control-Monad-Task-Class.html#fork",
          "type": "method"
        },
        "index": {
          "description": "fork spawns task and runs it immediate until it ends or suspends before returning to current task",
          "hierarchy": "Control Monad Task",
          "module": "Control.Monad.Task",
          "name": "fork",
          "normalized": "a b-\u003ea()",
          "package": "monad-task",
          "signature": "m a-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-task/docs/Control-Monad-Task.html#v:fork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003erunTask\u003c/code\u003e runs a task monad until to its completion, i.e., no more active\n   tasks to run, or until it exits.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erunTask\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003erunTrace\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003etaskToTrace\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Control.Monad.Task\",\"Control.Monad.Trans.Task\"]",
          "name": "runTask",
          "package": "monad-task",
          "signature": "TaskT e m a -\u003e m ()",
          "source": "src/Control-Monad-Trans-Task.html#runTask",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/monad-task/docs/Control-Monad-Task.html#v:runTask\",\"http://hackage.haskell.org/package/monad-task/docs/Control-Monad-Trans-Task.html#v:runTask\"]"
        },
        "index": {
          "description": "runTask runs task monad until to its completion i.e no more active tasks to run or until it exits runTask runTrace taskToTrace",
          "hierarchy": "Control Monad Task",
          "module": "Control.Monad.Task",
          "name": "runTask",
          "normalized": "TaskT a b c-\u003eb()",
          "package": "monad-task",
          "partial": "Task",
          "signature": "TaskT e m a-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-task/docs/Control-Monad-Task.html#v:runTask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Monad.Task\",\"Control.Monad.Trans.Task\"]",
          "name": "runTaskT",
          "package": "monad-task",
          "signature": "ContT (Trace m e) m a",
          "source": "src/Control-Monad-Trans-Task.html#TaskT",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/monad-task/docs/Control-Monad-Task.html#v:runTaskT\",\"http://hackage.haskell.org/package/monad-task/docs/Control-Monad-Trans-Task.html#v:runTaskT\"]"
        },
        "index": {
          "hierarchy": "Control Monad Task",
          "module": "Control.Monad.Task",
          "name": "runTaskT",
          "package": "monad-task",
          "partial": "Task",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-task/docs/Control-Monad-Task.html#v:runTaskT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esignal\u003c/code\u003e broadcasts an event to all other tasks that are watching,\n   and give those who wake up the priority to run.\n\u003c/p\u003e",
          "module": "Control.Monad.Task",
          "name": "signal",
          "package": "monad-task",
          "signature": "e -\u003e m ()",
          "source": "src/Control-Monad-Task-Class.html#signal",
          "type": "method"
        },
        "index": {
          "description": "signal broadcasts an event to all other tasks that are watching and give those who wake up the priority to run",
          "hierarchy": "Control Monad Task",
          "module": "Control.Monad.Task",
          "name": "signal",
          "normalized": "a-\u003eb()",
          "package": "monad-task",
          "signature": "e-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-task/docs/Control-Monad-Task.html#v:signal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ewatch\u003c/code\u003e suspends current task to wait for future events, and will\n   resume execution when an event triggers its watching function. \n\u003c/p\u003e",
          "module": "Control.Monad.Task",
          "name": "watch",
          "package": "monad-task",
          "signature": "(e -\u003e Maybe a) -\u003e m a",
          "source": "src/Control-Monad-Task-Class.html#watch",
          "type": "method"
        },
        "index": {
          "description": "watch suspends current task to wait for future events and will resume execution when an event triggers its watching function",
          "hierarchy": "Control Monad Task",
          "module": "Control.Monad.Task",
          "name": "watch",
          "normalized": "(a-\u003eMaybe b)-\u003ec b",
          "package": "monad-task",
          "signature": "(e-\u003eMaybe a)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-task/docs/Control-Monad-Task.html#v:watch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eyield\u003c/code\u003e temporarily suspends current task to let others run. \n\u003c/p\u003e",
          "module": "Control.Monad.Task",
          "name": "yield",
          "package": "monad-task",
          "signature": "m ()",
          "source": "src/Control-Monad-Task-Class.html#yield",
          "type": "method"
        },
        "index": {
          "description": "yield temporarily suspends current task to let others run",
          "hierarchy": "Control Monad Task",
          "module": "Control.Monad.Task",
          "name": "yield",
          "normalized": "a()",
          "package": "monad-task",
          "signature": "m()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-task/docs/Control-Monad-Task.html#v:yield"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Task",
          "name": "Task",
          "package": "monad-task",
          "source": "src/Control-Monad-Trans-Task.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Trans Task",
          "module": "Control.Monad.Trans.Task",
          "name": "Task",
          "package": "monad-task",
          "partial": "Task",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-task/docs/Control-Monad-Trans-Task.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTask monad transformer.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Task",
          "name": "TaskT",
          "package": "monad-task",
          "source": "src/Control-Monad-Trans-Task.html#TaskT",
          "type": "newtype"
        },
        "index": {
          "description": "Task monad transformer",
          "hierarchy": "Control Monad Trans Task",
          "module": "Control.Monad.Trans.Task",
          "name": "TaskT",
          "package": "monad-task",
          "partial": "Task",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/monad-task/docs/Control-Monad-Trans-Task.html#t:TaskT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003eTrace m e\u003c/code\u003e represents the control flow of a mult-threaded task monad\n   defined over a base monad \u003ccode\u003em\u003c/code\u003e and event type \u003ccode\u003ee\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Task",
          "name": "Trace",
          "package": "monad-task",
          "source": "src/Control-Monad-Trans-Task.html#Trace",
          "type": "data"
        },
        "index": {
          "description": "Trace represents the control flow of mult-threaded task monad defined over base monad and event type",
          "hierarchy": "Control Monad Trans Task",
          "module": "Control.Monad.Trans.Task",
          "name": "Trace",
          "package": "monad-task",
          "partial": "Trace",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monad-task/docs/Control-Monad-Trans-Task.html#t:Trace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Task",
          "name": "EXIT",
          "package": "monad-task",
          "signature": "Trace m e",
          "source": "src/Control-Monad-Trans-Task.html#Trace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Task",
          "module": "Control.Monad.Trans.Task",
          "name": "EXIT",
          "package": "monad-task",
          "partial": "EXIT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-task/docs/Control-Monad-Trans-Task.html#v:EXIT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Task",
          "name": "FORK",
          "package": "monad-task",
          "signature": "m (Trace m e) -\u003e m (Trace m e) -\u003e Trace m e",
          "source": "src/Control-Monad-Trans-Task.html#Trace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Task",
          "module": "Control.Monad.Trans.Task",
          "name": "FORK",
          "normalized": "a(Trace a b)-\u003ea(Trace a b)-\u003eTrace a b",
          "package": "monad-task",
          "partial": "FORK",
          "signature": "m(Trace m e)-\u003em(Trace m e)-\u003eTrace m e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-task/docs/Control-Monad-Trans-Task.html#v:FORK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Task",
          "name": "RET",
          "package": "monad-task",
          "signature": "Trace m e",
          "source": "src/Control-Monad-Trans-Task.html#Trace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Task",
          "module": "Control.Monad.Trans.Task",
          "name": "RET",
          "package": "monad-task",
          "partial": "RET",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-task/docs/Control-Monad-Trans-Task.html#v:RET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Task",
          "name": "SIGNAL",
          "package": "monad-task",
          "signature": "e -\u003e m (Trace m e) -\u003e Trace m e",
          "source": "src/Control-Monad-Trans-Task.html#Trace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Task",
          "module": "Control.Monad.Trans.Task",
          "name": "SIGNAL",
          "normalized": "a-\u003eb(Trace b a)-\u003eTrace b a",
          "package": "monad-task",
          "partial": "SIGNAL",
          "signature": "e-\u003em(Trace m e)-\u003eTrace m e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-task/docs/Control-Monad-Trans-Task.html#v:SIGNAL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Task",
          "name": "WATCH",
          "package": "monad-task",
          "signature": "(e -\u003e Maybe v) -\u003e (v -\u003e m (Trace m e)) -\u003e Trace m e",
          "source": "src/Control-Monad-Trans-Task.html#Trace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Task",
          "module": "Control.Monad.Trans.Task",
          "name": "WATCH",
          "normalized": "(a-\u003eMaybe b)-\u003e(b-\u003ec(Trace c a))-\u003eTrace c a",
          "package": "monad-task",
          "partial": "WATCH",
          "signature": "(e-\u003eMaybe v)-\u003e(v-\u003em(Trace m e))-\u003eTrace m e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-task/docs/Control-Monad-Trans-Task.html#v:WATCH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Task",
          "name": "YIELD",
          "package": "monad-task",
          "signature": "m (Trace m e) -\u003e Trace m e",
          "source": "src/Control-Monad-Trans-Task.html#Trace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Task",
          "module": "Control.Monad.Trans.Task",
          "name": "YIELD",
          "normalized": "a(Trace a b)-\u003eTrace a b",
          "package": "monad-task",
          "partial": "YIELD",
          "signature": "m(Trace m e)-\u003eTrace m e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-task/docs/Control-Monad-Trans-Task.html#v:YIELD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003erunTrace\u003c/code\u003e runs a trace to its completion in the base monad with a simple \n   round-robin scheduler.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Task",
          "name": "runTrace",
          "package": "monad-task",
          "signature": "m (Trace m e) -\u003e m ()",
          "source": "src/Control-Monad-Trans-Task.html#runTrace",
          "type": "function"
        },
        "index": {
          "description": "runTrace runs trace to its completion in the base monad with simple round-robin scheduler",
          "hierarchy": "Control Monad Trans Task",
          "module": "Control.Monad.Trans.Task",
          "name": "runTrace",
          "normalized": "a(Trace a b)-\u003ea()",
          "package": "monad-task",
          "partial": "Trace",
          "signature": "m(Trace m e)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-task/docs/Control-Monad-Trans-Task.html#v:runTrace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etasktoTrace\u003c/code\u003e CPS-converts a task monad into a trace in its base monad. \n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Task",
          "name": "taskToTrace",
          "package": "monad-task",
          "signature": "TaskT e m a -\u003e m (Trace m e)",
          "source": "src/Control-Monad-Trans-Task.html#taskToTrace",
          "type": "function"
        },
        "index": {
          "description": "tasktoTrace CPS-converts task monad into trace in its base monad",
          "hierarchy": "Control Monad Trans Task",
          "module": "Control.Monad.Trans.Task",
          "name": "taskToTrace",
          "normalized": "TaskT a b c-\u003eb(Trace b a)",
          "package": "monad-task",
          "partial": "To Trace",
          "signature": "TaskT e m a-\u003em(Trace m e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-task/docs/Control-Monad-Trans-Task.html#v:taskToTrace"
      }
    }
  ]
]