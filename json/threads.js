[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threads/docs/Control-Concurrent-Thread-Group.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module extends \u003ccode\u003eControl.Concurrent.Thread\u003c/code\u003e with the ability to wait for\n a group of threads to terminate.\n\u003c/p\u003e\u003cp\u003eThis module exports equivalently named functions from \u003ccode\u003eControl.Concurrent\u003c/code\u003e,\n (\u003ccode\u003eGHC.Conc\u003c/code\u003e), and \u003ccode\u003eControl.Concurrent.Thread\u003c/code\u003e. Avoid ambiguities by importing\n this module qualified. May we suggest:\n\u003c/p\u003e\u003cpre\u003e\n import Control.Concurrent.Thread.Group ( ThreadGroup )\n import qualified Control.Concurrent.Thread.Group as ThreadGroup ( ... )\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.Thread.Group",
        "fct-package": "threads",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-Thread-Group.html",
        "fct-type": "module",
        "title": "Group"
      },
      "index": {
        "description": "This module extends Control.Concurrent.Thread with the ability to wait for group of threads to terminate This module exports equivalently named functions from Control.Concurrent GHC.Conc and Control.Concurrent.Thread Avoid ambiguities by importing this module qualified May we suggest import Control.Concurrent.Thread.Group ThreadGroup import qualified Control.Concurrent.Thread.Group as ThreadGroup",
        "hierarchy": "Control Concurrent Thread Group",
        "module": "Control.Concurrent.Thread.Group",
        "name": "Group",
        "normalized": "",
        "package": "threads",
        "partial": "Group",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threads/docs/Control-Concurrent-Thread-Group.html#t:ThreadGroup",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eThreadGroup\u003c/code\u003e can be understood as a counter which counts the number of\nthreads that were added to the group minus the ones that have terminated.\n\u003c/p\u003e\u003cp\u003eMore formally a \u003ccode\u003eThreadGroup\u003c/code\u003e has the following semantics:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003enew\u003c/a\u003e\u003c/code\u003e initializes the counter to 0.\n\u003c/li\u003e\u003cli\u003e Forking a thread increments the counter.\n\u003c/li\u003e\u003cli\u003e When a forked thread terminates, whether normally or by raising an exception,\n  the counter is decremented.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003enrOfRunning\u003c/a\u003e\u003c/code\u003e yields a transaction that returns the counter.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ewait\u003c/a\u003e\u003c/code\u003e blocks as long as the counter is greater than 0.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ewaitN\u003c/a\u003e\u003c/code\u003e blocks as long as the counter is greater or equal to the\n   specified number.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Concurrent.Thread.Group",
        "fct-package": "threads",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-Thread-Group.html#ThreadGroup",
        "fct-type": "data",
        "title": "ThreadGroup"
      },
      "index": {
        "description": "ThreadGroup can be understood as counter which counts the number of threads that were added to the group minus the ones that have terminated More formally ThreadGroup has the following semantics new initializes the counter to Forking thread increments the counter When forked thread terminates whether normally or by raising an exception the counter is decremented nrOfRunning yields transaction that returns the counter wait blocks as long as the counter is greater than waitN blocks as long as the counter is greater or equal to the specified number",
        "hierarchy": "Control Concurrent Thread Group",
        "module": "Control.Concurrent.Thread.Group",
        "name": "ThreadGroup",
        "normalized": "",
        "package": "threads",
        "partial": "Thread Group",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threads/docs/Control-Concurrent-Thread-Group.html#v:forkIO",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003eControl.Concurrent.Thread.\u003ccode\u003e\u003ca\u003eforkIO\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e but additionaly adds\n the thread to the group.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Thread.Group",
        "fct-package": "threads",
        "fct-signature": "ThreadGroup -\u003e IO α -\u003e IO (ThreadId, IO (Result α))",
        "fct-source": "src/Control-Concurrent-Thread-Group.html#forkIO",
        "fct-type": "function",
        "title": "forkIO"
      },
      "index": {
        "description": "Same as Control.Concurrent.Thread forkIO but additionaly adds the thread to the group",
        "hierarchy": "Control Concurrent Thread Group",
        "module": "Control.Concurrent.Thread.Group",
        "name": "forkIO",
        "normalized": "ThreadGroup-\u003eIO a-\u003eIO(ThreadId,IO(Result a))",
        "package": "threads",
        "partial": "IO",
        "signature": "ThreadGroup-\u003eIO α-\u003eIO(ThreadId,IO(Result α))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threads/docs/Control-Concurrent-Thread-Group.html#v:forkIOWithUnmask",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003eControl.Concurrent.Thread.\u003ccode\u003e\u003ca\u003eforkIOWithUnmask\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e but\n additionaly adds the thread to the group.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Thread.Group",
        "fct-package": "threads",
        "fct-signature": "ThreadGroup -\u003e ((forall β.  IO β -\u003e IO β) -\u003e IO α) -\u003e IO (ThreadId, IO (Result α))",
        "fct-source": "src/Control-Concurrent-Thread-Group.html#forkIOWithUnmask",
        "fct-type": "function",
        "title": "forkIOWithUnmask"
      },
      "index": {
        "description": "Same as Control.Concurrent.Thread forkIOWithUnmask but additionaly adds the thread to the group",
        "hierarchy": "Control Concurrent Thread Group",
        "module": "Control.Concurrent.Thread.Group",
        "name": "forkIOWithUnmask",
        "normalized": "ThreadGroup-\u003e((a b IO c-\u003eIO c)-\u003eIO d)-\u003eIO(ThreadId,IO(Result d))",
        "package": "threads",
        "partial": "IOWith Unmask",
        "signature": "ThreadGroup-\u003e((forall β. IO β-\u003eIO β)-\u003eIO α)-\u003eIO(ThreadId,IO(Result α))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threads/docs/Control-Concurrent-Thread-Group.html#v:forkOS",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003eControl.Concurrent.Thread.\u003ccode\u003e\u003ca\u003eforkOS\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e but additionaly adds\n the thread to the group.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Thread.Group",
        "fct-package": "threads",
        "fct-signature": "ThreadGroup -\u003e IO α -\u003e IO (ThreadId, IO (Result α))",
        "fct-source": "src/Control-Concurrent-Thread-Group.html#forkOS",
        "fct-type": "function",
        "title": "forkOS"
      },
      "index": {
        "description": "Same as Control.Concurrent.Thread forkOS but additionaly adds the thread to the group",
        "hierarchy": "Control Concurrent Thread Group",
        "module": "Control.Concurrent.Thread.Group",
        "name": "forkOS",
        "normalized": "ThreadGroup-\u003eIO a-\u003eIO(ThreadId,IO(Result a))",
        "package": "threads",
        "partial": "OS",
        "signature": "ThreadGroup-\u003eIO α-\u003eIO(ThreadId,IO(Result α))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threads/docs/Control-Concurrent-Thread-Group.html#v:forkOn",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003eControl.Concurrent.Thread.\u003ccode\u003e\u003ca\u003eforkOn\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e but\n additionaly adds the thread to the group.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Thread.Group",
        "fct-package": "threads",
        "fct-signature": "Int -\u003e ThreadGroup -\u003e IO α -\u003e IO (ThreadId, IO (Result α))",
        "fct-source": "src/Control-Concurrent-Thread-Group.html#forkOn",
        "fct-type": "function",
        "title": "forkOn"
      },
      "index": {
        "description": "Same as Control.Concurrent.Thread forkOn but additionaly adds the thread to the group",
        "hierarchy": "Control Concurrent Thread Group",
        "module": "Control.Concurrent.Thread.Group",
        "name": "forkOn",
        "normalized": "Int-\u003eThreadGroup-\u003eIO a-\u003eIO(ThreadId,IO(Result a))",
        "package": "threads",
        "partial": "On",
        "signature": "Int-\u003eThreadGroup-\u003eIO α-\u003eIO(ThreadId,IO(Result α))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threads/docs/Control-Concurrent-Thread-Group.html#v:forkOnWithUnmask",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003eControl.Concurrent.Thread.\u003ccode\u003e\u003ca\u003eforkOnWithUnmask\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e but\n additionaly adds the thread to the group.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Thread.Group",
        "fct-package": "threads",
        "fct-signature": "Int -\u003e ThreadGroup -\u003e ((forall β.  IO β -\u003e IO β) -\u003e IO α) -\u003e IO (ThreadId, IO (Result α))",
        "fct-source": "src/Control-Concurrent-Thread-Group.html#forkOnWithUnmask",
        "fct-type": "function",
        "title": "forkOnWithUnmask"
      },
      "index": {
        "description": "Like Control.Concurrent.Thread forkOnWithUnmask but additionaly adds the thread to the group",
        "hierarchy": "Control Concurrent Thread Group",
        "module": "Control.Concurrent.Thread.Group",
        "name": "forkOnWithUnmask",
        "normalized": "Int-\u003eThreadGroup-\u003e((a b IO c-\u003eIO c)-\u003eIO d)-\u003eIO(ThreadId,IO(Result d))",
        "package": "threads",
        "partial": "On With Unmask",
        "signature": "Int-\u003eThreadGroup-\u003e((forall β. IO β-\u003eIO β)-\u003eIO α)-\u003eIO(ThreadId,IO(Result α))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threads/docs/Control-Concurrent-Thread-Group.html#v:new",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an empty group of threads.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Thread.Group",
        "fct-package": "threads",
        "fct-signature": "IO ThreadGroup",
        "fct-source": "src/Control-Concurrent-Thread-Group.html#new",
        "fct-type": "function",
        "title": "new"
      },
      "index": {
        "description": "Create an empty group of threads",
        "hierarchy": "Control Concurrent Thread Group",
        "module": "Control.Concurrent.Thread.Group",
        "name": "new",
        "normalized": "",
        "package": "threads",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threads/docs/Control-Concurrent-Thread-Group.html#v:nrOfRunning",
      "description": {
        "fct-descr": "\u003cp\u003eYield a transaction that returns the number of running threads in the\ngroup.\n\u003c/p\u003e\u003cp\u003eNote that because this function yields a \u003ccode\u003e\u003ca\u003eSTM\u003c/a\u003e\u003c/code\u003e computation, the returned number\nis guaranteed to be consistent inside the transaction.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Thread.Group",
        "fct-package": "threads",
        "fct-signature": "ThreadGroup -\u003e STM Int",
        "fct-source": "src/Control-Concurrent-Thread-Group.html#nrOfRunning",
        "fct-type": "function",
        "title": "nrOfRunning"
      },
      "index": {
        "description": "Yield transaction that returns the number of running threads in the group Note that because this function yields STM computation the returned number is guaranteed to be consistent inside the transaction",
        "hierarchy": "Control Concurrent Thread Group",
        "module": "Control.Concurrent.Thread.Group",
        "name": "nrOfRunning",
        "normalized": "ThreadGroup-\u003eSTM Int",
        "package": "threads",
        "partial": "Of Running",
        "signature": "ThreadGroup-\u003eSTM Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threads/docs/Control-Concurrent-Thread-Group.html#v:wait",
      "description": {
        "fct-descr": "\u003cp\u003eConvenience function which blocks until all threads, that were added to the\n group have terminated.\n\u003c/p\u003e\u003cp\u003eNote that: \u003ccode\u003ewait = \u003ccode\u003e\u003ca\u003ewaitN\u003c/a\u003e\u003c/code\u003e 1\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Thread.Group",
        "fct-package": "threads",
        "fct-signature": "ThreadGroup -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-Thread-Group.html#wait",
        "fct-type": "function",
        "title": "wait"
      },
      "index": {
        "description": "Convenience function which blocks until all threads that were added to the group have terminated Note that wait waitN",
        "hierarchy": "Control Concurrent Thread Group",
        "module": "Control.Concurrent.Thread.Group",
        "name": "wait",
        "normalized": "ThreadGroup-\u003eIO()",
        "package": "threads",
        "partial": "",
        "signature": "ThreadGroup-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threads/docs/Control-Concurrent-Thread-Group.html#v:waitN",
      "description": {
        "fct-descr": "\u003cp\u003eConvenience function to help place an upper bound on the number\n of threads in the group.\n\u003c/p\u003e\u003cp\u003eBlocks until there are fewer threads occupied than the specified number.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Thread.Group",
        "fct-package": "threads",
        "fct-signature": "Int -\u003e ThreadGroup -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-Thread-Group.html#waitN",
        "fct-type": "function",
        "title": "waitN"
      },
      "index": {
        "description": "Convenience function to help place an upper bound on the number of threads in the group Blocks until there are fewer threads occupied than the specified number",
        "hierarchy": "Control Concurrent Thread Group",
        "module": "Control.Concurrent.Thread.Group",
        "name": "waitN",
        "normalized": "Int-\u003eThreadGroup-\u003eIO()",
        "package": "threads",
        "partial": "",
        "signature": "Int-\u003eThreadGroup-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threads/docs/Control-Concurrent-Thread.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStandard threads extended with the ability to \u003cem\u003ewait\u003c/em\u003e for their return value.\n\u003c/p\u003e\u003cp\u003eThis module exports equivalently named functions from \u003ccode\u003eControl.Concurrent\u003c/code\u003e\n (and \u003ccode\u003eGHC.Conc\u003c/code\u003e). Avoid ambiguities by importing this module qualified. May\n we suggest:\n\u003c/p\u003e\u003cpre\u003e\n import qualified Control.Concurrent.Thread as Thread ( ... )\n\u003c/pre\u003e\u003cp\u003eThe following is an example how to use this module:\n\u003c/p\u003e\u003cpre\u003e\n\nimport qualified Control.Concurrent.Thread as Thread ( \u003ccode\u003e\u003ca\u003eforkIO\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eresult\u003c/a\u003e\u003c/code\u003e )\n\nmain = do (tid, wait) \u003c- Thread.\u003ccode\u003e\u003ca\u003eforkIO\u003c/a\u003e\u003c/code\u003e $ do x \u003c- someExpensiveComputation\n                                            return x\n          doSomethingElse\n          x \u003c- Thread.\u003ccode\u003e\u003ca\u003eresult\u003c/a\u003e\u003c/code\u003e =\u003c\u003c \u003ccode\u003ewait\u003c/code\u003e\n          doSomethingWithResult x\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.Thread",
        "fct-package": "threads",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-Thread.html",
        "fct-type": "module",
        "title": "Thread"
      },
      "index": {
        "description": "Standard threads extended with the ability to wait for their return value This module exports equivalently named functions from Control.Concurrent and GHC.Conc Avoid ambiguities by importing this module qualified May we suggest import qualified Control.Concurrent.Thread as Thread The following is an example how to use this module import qualified Control.Concurrent.Thread as Thread forkIO result main do tid wait Thread forkIO do someExpensiveComputation return doSomethingElse Thread result wait doSomethingWithResult",
        "hierarchy": "Control Concurrent Thread",
        "module": "Control.Concurrent.Thread",
        "name": "Thread",
        "normalized": "",
        "package": "threads",
        "partial": "Thread",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threads/docs/Control-Concurrent-Thread.html#t:Result",
      "description": {
        "fct-descr": "\u003cp\u003eA result of a thread is either some exception that was thrown in the thread\n and wasn't catched or the actual value that was returned by the thread.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Thread",
        "fct-package": "threads",
        "fct-signature": "type",
        "fct-source": "src/Control-Concurrent-Thread.html#Result",
        "fct-type": "type",
        "title": "Result"
      },
      "index": {
        "description": "result of thread is either some exception that was thrown in the thread and wasn catched or the actual value that was returned by the thread",
        "hierarchy": "Control Concurrent Thread",
        "module": "Control.Concurrent.Thread",
        "name": "Result",
        "normalized": "",
        "package": "threads",
        "partial": "Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threads/docs/Control-Concurrent-Thread.html#v:forkIO",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003eControl.Concurrent.\u003ccode\u003e\u003ca\u003eforkIO\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e but returns\n a computation that when executed blocks until the thread terminates\n then returns the final value of the thread.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Thread",
        "fct-package": "threads",
        "fct-signature": "IO α -\u003e IO (ThreadId, IO (Result α))",
        "fct-source": "src/Control-Concurrent-Thread.html#forkIO",
        "fct-type": "function",
        "title": "forkIO"
      },
      "index": {
        "description": "Like Control.Concurrent forkIO but returns computation that when executed blocks until the thread terminates then returns the final value of the thread",
        "hierarchy": "Control Concurrent Thread",
        "module": "Control.Concurrent.Thread",
        "name": "forkIO",
        "normalized": "IO a-\u003eIO(ThreadId,IO(Result a))",
        "package": "threads",
        "partial": "IO",
        "signature": "IO α-\u003eIO(ThreadId,IO(Result α))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threads/docs/Control-Concurrent-Thread.html#v:forkIOWithUnmask",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003eControl.Concurrent.\u003ccode\u003e\u003ca\u003eforkIOWithUnmask\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e but returns\n a computation that when executed blocks until the thread terminates\n then returns the final value of the thread.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Thread",
        "fct-package": "threads",
        "fct-signature": "((forall β.  IO β -\u003e IO β) -\u003e IO α) -\u003e IO (ThreadId, IO (Result α))",
        "fct-source": "src/Control-Concurrent-Thread.html#forkIOWithUnmask",
        "fct-type": "function",
        "title": "forkIOWithUnmask"
      },
      "index": {
        "description": "Like Control.Concurrent forkIOWithUnmask but returns computation that when executed blocks until the thread terminates then returns the final value of the thread",
        "hierarchy": "Control Concurrent Thread",
        "module": "Control.Concurrent.Thread",
        "name": "forkIOWithUnmask",
        "normalized": "((a b IO c-\u003eIO c)-\u003eIO d)-\u003eIO(ThreadId,IO(Result d))",
        "package": "threads",
        "partial": "IOWith Unmask",
        "signature": "((forall β. IO β-\u003eIO β)-\u003eIO α)-\u003eIO(ThreadId,IO(Result α))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threads/docs/Control-Concurrent-Thread.html#v:forkOS",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003eControl.Concurrent.\u003ccode\u003e\u003ca\u003eforkOS\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e but returns\n a computation that when executed blocks until the thread terminates\n then returns the final value of the thread.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Thread",
        "fct-package": "threads",
        "fct-signature": "IO α -\u003e IO (ThreadId, IO (Result α))",
        "fct-source": "src/Control-Concurrent-Thread.html#forkOS",
        "fct-type": "function",
        "title": "forkOS"
      },
      "index": {
        "description": "Like Control.Concurrent forkOS but returns computation that when executed blocks until the thread terminates then returns the final value of the thread",
        "hierarchy": "Control Concurrent Thread",
        "module": "Control.Concurrent.Thread",
        "name": "forkOS",
        "normalized": "IO a-\u003eIO(ThreadId,IO(Result a))",
        "package": "threads",
        "partial": "OS",
        "signature": "IO α-\u003eIO(ThreadId,IO(Result α))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threads/docs/Control-Concurrent-Thread.html#v:forkOn",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003eControl.Concurrent.\u003ccode\u003e\u003ca\u003eforkOn\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e but returns\n a computation that when executed blocks until the thread terminates\n then returns the final value of the thread.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Thread",
        "fct-package": "threads",
        "fct-signature": "Int -\u003e IO α -\u003e IO (ThreadId, IO (Result α))",
        "fct-source": "src/Control-Concurrent-Thread.html#forkOn",
        "fct-type": "function",
        "title": "forkOn"
      },
      "index": {
        "description": "Like Control.Concurrent forkOn but returns computation that when executed blocks until the thread terminates then returns the final value of the thread",
        "hierarchy": "Control Concurrent Thread",
        "module": "Control.Concurrent.Thread",
        "name": "forkOn",
        "normalized": "Int-\u003eIO a-\u003eIO(ThreadId,IO(Result a))",
        "package": "threads",
        "partial": "On",
        "signature": "Int-\u003eIO α-\u003eIO(ThreadId,IO(Result α))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threads/docs/Control-Concurrent-Thread.html#v:forkOnWithUnmask",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003eControl.Concurrent.\u003ccode\u003e\u003ca\u003eforkOnWithUnmask\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e but returns\n a computation that when executed blocks until the thread terminates\n then returns the final value of the thread.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Thread",
        "fct-package": "threads",
        "fct-signature": "Int -\u003e ((forall β.  IO β -\u003e IO β) -\u003e IO α) -\u003e IO (ThreadId, IO (Result α))",
        "fct-source": "src/Control-Concurrent-Thread.html#forkOnWithUnmask",
        "fct-type": "function",
        "title": "forkOnWithUnmask"
      },
      "index": {
        "description": "Like Control.Concurrent forkOnWithUnmask but returns computation that when executed blocks until the thread terminates then returns the final value of the thread",
        "hierarchy": "Control Concurrent Thread",
        "module": "Control.Concurrent.Thread",
        "name": "forkOnWithUnmask",
        "normalized": "Int-\u003e((a b IO c-\u003eIO c)-\u003eIO d)-\u003eIO(ThreadId,IO(Result d))",
        "package": "threads",
        "partial": "On With Unmask",
        "signature": "Int-\u003e((forall β. IO β-\u003eIO β)-\u003eIO α)-\u003eIO(ThreadId,IO(Result α))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/threads/docs/Control-Concurrent-Thread.html#v:result",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the actual value from the result.\n\u003c/p\u003e\u003cp\u003eWhen the result is \u003ccode\u003e\u003ca\u003eSomeException\u003c/a\u003e\u003c/code\u003e the exception is thrown.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Thread",
        "fct-package": "threads",
        "fct-signature": "Result α -\u003e IO α",
        "fct-source": "src/Control-Concurrent-Thread.html#result",
        "fct-type": "function",
        "title": "result"
      },
      "index": {
        "description": "Retrieve the actual value from the result When the result is SomeException the exception is thrown",
        "hierarchy": "Control Concurrent Thread",
        "module": "Control.Concurrent.Thread",
        "name": "result",
        "normalized": "Result a-\u003eIO a",
        "package": "threads",
        "partial": "",
        "signature": "Result α-\u003eIO α"
      }
    }
  }
]