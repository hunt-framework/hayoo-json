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
        "word": "Control-Engine"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003e1.0 Introduction\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eTypically, a thread pool is a set of execution contexts that will execute\n  tasks from an input queue.  Thread pools are used to parallize\n  the processing of incoming work across all available CPUs without going\n  through the expense of starting a new thread for every new task.\n\u003c/p\u003e\u003cp\u003eIn \u003ccode\u003eControl.Engine\u003c/code\u003e you will find a somewhat unique implementation.  The\n  \u003ccode\u003e\u003ca\u003eEngine\u003c/a\u003e\u003c/code\u003e is not only a set of threads running a common mutator on the input\n  queue, placing results on an output queue, but also include hooks, task\n  injection, and state management.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003e1.1 System Figure\u003c/em\u003e\n\u003c/p\u003e\u003cpre\u003e\n   One input            Configurable number            One output\n   thread               of worker threads              thread\n  +--------+  chan1 +------------------------+ chan2  +---------+\n  | In Hks +  ---\u003e  | PreMH, Mutator, PostMH | -----\u003e | Out Hks |\n  +--------+        +------------------------+        +---------+\n       ^                 ^                               ^\n       |                 |                               |\n       |                 |    Comms via an IO Ref        |\n       +-----------------+-------------------------------+\n                         |\n                   +------------+\n                   | State TVar |\n                   +------------+\n                   One thread monitoring\n                   the TVar and updating\n                   the IORef\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003e2.0 Queues :: (BoundedChan a)\u003c/em\u003e - from \u003ca\u003eControl.Concurrent.BoundedChan\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThe system uses two primary queues.  One for transporting data from\n  Input hooks to the mutator (chan1), one for data from the mutator to the\n  output hooks (chan2).  These channels are size-bounded - which is needed\n  mostly due to the inflexibility of the GHC scheduler.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003e3.0 Hooks :: (a -\u003e IO Maybe a)\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eHooks can be added and removed during execution without creating a new\n  engine. They allow the developer to modify tasks:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Input hooks - prior to parallization (for sequential preprocessing)\n\u003c/li\u003e\u003cli\u003e Pre-Mutator hooks - in parallel, prior to main mutation funciton\n\u003c/li\u003e\u003cli\u003e Post-Mutator hooks - in parallel, after mutation function\n\u003c/li\u003e\u003cli\u003e Output hooks - post parallization (for sequential post processing)\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eA hook returning \u003ca\u003eNothing\u003c/a\u003e causes the job or result to be dropped\n  (it does not propogate any further).\n\u003c/p\u003e\u003cp\u003e\u003cem\u003e4.0 Injection\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eOne injection point allows injection of a result that had no preceding task -\n  thus the result is only seen by the output hooks; this uses chan2. Another \n  injector allows the input hooks to be bypassed; this uses chan1.  See the\n  above figure for channels wrt the hooks and mutator.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003e5.0 State Management\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eControl-Engine manages state for you.  Semantically, all workers and hooks\n  will see a correct state but it won't always be the most recent or consistent\n  between threads.\n\u003c/p\u003e\u003cp\u003eThe stateManager waits for any updates to the mutator state or hooks.  If any\n  modifications are made then the new set of hooks or state is provided\n  to the workers.  Correctness is handled by keeping the master copies as\n  \u003ccode\u003eTVars\u003c/code\u003e.  While the mutators and hooks read state from an \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e to avoid\n  contention.\n\u003c/p\u003e\u003cp\u003eThe thinking here is that changing the hooks and state is a rare / low\n  contention action while the need for this information will be constant\n  and performance critical.  How successful this stratagy is has yet to\n  be shown.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Engine",
          "name": "Engine",
          "package": "Control-Engine",
          "source": "src/Control-Engine.html",
          "type": "module"
        },
        "index": {
          "description": "Introduction Typically thread pool is set of execution contexts that will execute tasks from an input queue Thread pools are used to parallize the processing of incoming work across all available CPUs without going through the expense of starting new thread for every new task In Control.Engine you will find somewhat unique implementation The Engine is not only set of threads running common mutator on the input queue placing results on an output queue but also include hooks task injection and state management System Figure One input Configurable number One output thread of worker threads thread chan1 chan2 In Hks PreMH Mutator PostMH Out Hks Comms via an IO Ref State TVar One thread monitoring the TVar and updating the IORef Queues BoundedChan from Control.Concurrent.BoundedChan The system uses two primary queues One for transporting data from Input hooks to the mutator chan1 one for data from the mutator to the output hooks chan2 These channels are size-bounded which is needed mostly due to the inflexibility of the GHC scheduler Hooks IO Maybe Hooks can be added and removed during execution without creating new engine They allow the developer to modify tasks Input hooks prior to parallization for sequential preprocessing Pre-Mutator hooks in parallel prior to main mutation funciton Post-Mutator hooks in parallel after mutation function Output hooks post parallization for sequential post processing hook returning Nothing causes the job or result to be dropped it does not propogate any further Injection One injection point allows injection of result that had no preceding task thus the result is only seen by the output hooks this uses chan2 Another injector allows the input hooks to be bypassed this uses chan1 See the above figure for channels wrt the hooks and mutator State Management Control-Engine manages state for you Semantically all workers and hooks will see correct state but it won always be the most recent or consistent between threads The stateManager waits for any updates to the mutator state or hooks If any modifications are made then the new set of hooks or state is provided to the workers Correctness is handled by keeping the master copies as TVars While the mutators and hooks read state from an IORef to avoid contention The thinking here is that changing the hooks and state is rare low contention action while the need for this information will be constant and performance critical How successful this stratagy is has yet to be shown",
          "hierarchy": "Control Engine",
          "module": "Control.Engine",
          "name": "Engine",
          "package": "Control-Engine",
          "partial": "Engine",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Control-Engine/docs/Control-Engine.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eEngine\u003c/a\u003e\u003c/code\u003e represents a pool of threads ready to execute tasks.\n\u003c/p\u003e",
          "module": "Control.Engine",
          "name": "Engine",
          "package": "Control-Engine",
          "source": "src/Control-Engine.html#Engine",
          "type": "data"
        },
        "index": {
          "description": "An Engine represents pool of threads ready to execute tasks",
          "hierarchy": "Control Engine",
          "module": "Control.Engine",
          "name": "Engine",
          "package": "Control-Engine",
          "partial": "Engine",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Control-Engine/docs/Control-Engine.html#t:Engine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA hook is simply a mutation on the task.  The priority is used to order\n hook execution (lower value priorites happen first).  For accounting and to\n remove old hooks the description field is used.\n\u003c/p\u003e",
          "module": "Control.Engine",
          "name": "Hook",
          "package": "Control-Engine",
          "source": "src/Control-Engine.html#Hook",
          "type": "data"
        },
        "index": {
          "description": "hook is simply mutation on the task The priority is used to order hook execution lower value priorites happen first For accounting and to remove old hooks the description field is used",
          "hierarchy": "Control Engine",
          "module": "Control.Engine",
          "name": "Hook",
          "package": "Control-Engine",
          "partial": "Hook",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Control-Engine/docs/Control-Engine.html#t:Hook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Engine",
          "name": "Eng",
          "package": "Control-Engine",
          "signature": "Eng",
          "source": "src/Control-Engine.html#Engine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Engine",
          "module": "Control.Engine",
          "name": "Eng",
          "package": "Control-Engine",
          "partial": "Eng",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Control-Engine/docs/Control-Engine.html#v:Eng"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Engine",
          "name": "Hk",
          "package": "Control-Engine",
          "signature": "Hk",
          "source": "src/Control-Engine.html#Hook",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Engine",
          "module": "Control.Engine",
          "name": "Hk",
          "package": "Control-Engine",
          "partial": "Hk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Control-Engine/docs/Control-Engine.html#v:Hk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a hook that will be performed in serial on all jobs added to\n the input queue.\n\u003c/p\u003e",
          "module": "Control.Engine",
          "name": "addInputHook",
          "package": "Control-Engine",
          "signature": "Engine job result state -\u003e Hook state job -\u003e IO ()",
          "source": "src/Control-Engine.html#addInputHook",
          "type": "function"
        },
        "index": {
          "description": "Adds hook that will be performed in serial on all jobs added to the input queue",
          "hierarchy": "Control Engine",
          "module": "Control.Engine",
          "name": "addInputHook",
          "normalized": "Engine a b c-\u003eHook c a-\u003eIO()",
          "package": "Control-Engine",
          "partial": "Input Hook",
          "signature": "Engine job result state-\u003eHook state job-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Control-Engine/docs/Control-Engine.html#v:addInputHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a hook that will be performed in serial on all results\n before they are added to the output queue.\n\u003c/p\u003e",
          "module": "Control.Engine",
          "name": "addOutputHook",
          "package": "Control-Engine",
          "signature": "Engine job result state -\u003e Hook state result -\u003e IO ()",
          "source": "src/Control-Engine.html#addOutputHook",
          "type": "function"
        },
        "index": {
          "description": "Adds hook that will be performed in serial on all results before they are added to the output queue",
          "hierarchy": "Control Engine",
          "module": "Control.Engine",
          "name": "addOutputHook",
          "normalized": "Engine a b c-\u003eHook c b-\u003eIO()",
          "package": "Control-Engine",
          "partial": "Output Hook",
          "signature": "Engine job result state-\u003eHook state result-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Control-Engine/docs/Control-Engine.html#v:addOutputHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a hook that will be performed in parallel after the main mutator\n function.\n\u003c/p\u003e",
          "module": "Control.Engine",
          "name": "addPostMutateHook",
          "package": "Control-Engine",
          "signature": "Engine job result state -\u003e Hook state result -\u003e IO ()",
          "source": "src/Control-Engine.html#addPostMutateHook",
          "type": "function"
        },
        "index": {
          "description": "Adds hook that will be performed in parallel after the main mutator function",
          "hierarchy": "Control Engine",
          "module": "Control.Engine",
          "name": "addPostMutateHook",
          "normalized": "Engine a b c-\u003eHook c b-\u003eIO()",
          "package": "Control-Engine",
          "partial": "Post Mutate Hook",
          "signature": "Engine job result state-\u003eHook state result-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Control-Engine/docs/Control-Engine.html#v:addPostMutateHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a hook that will be performed in parallel before the main mutator\n function.\n\u003c/p\u003e",
          "module": "Control.Engine",
          "name": "addPreMutateHook",
          "package": "Control-Engine",
          "signature": "Engine job result state -\u003e Hook state job -\u003e IO ()",
          "source": "src/Control-Engine.html#addPreMutateHook",
          "type": "function"
        },
        "index": {
          "description": "Adds hook that will be performed in parallel before the main mutator function",
          "hierarchy": "Control Engine",
          "module": "Control.Engine",
          "name": "addPreMutateHook",
          "normalized": "Engine a b c-\u003eHook c a-\u003eIO()",
          "package": "Control-Engine",
          "partial": "Pre Mutate Hook",
          "signature": "Engine job result state-\u003eHook state job-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Control-Engine/docs/Control-Engine.html#v:addPreMutateHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Engine",
          "name": "chan1",
          "package": "Control-Engine",
          "signature": "BoundedChan job",
          "source": "src/Control-Engine.html#Engine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Engine",
          "module": "Control.Engine",
          "name": "chan1",
          "package": "Control-Engine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Control-Engine/docs/Control-Engine.html#v:chan1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Engine",
          "name": "chan2",
          "package": "Control-Engine",
          "signature": "BoundedChan result",
          "source": "src/Control-Engine.html#Engine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Engine",
          "module": "Control.Engine",
          "name": "chan2",
          "package": "Control-Engine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Control-Engine/docs/Control-Engine.html#v:chan2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeletes all input hooks matching the provided desciption\n\u003c/p\u003e",
          "module": "Control.Engine",
          "name": "delInputHook",
          "package": "Control-Engine",
          "signature": "Engine j r s -\u003e String -\u003e IO ()",
          "source": "src/Control-Engine.html#delInputHook",
          "type": "function"
        },
        "index": {
          "description": "Deletes all input hooks matching the provided desciption",
          "hierarchy": "Control Engine",
          "module": "Control.Engine",
          "name": "delInputHook",
          "normalized": "Engine a b c-\u003eString-\u003eIO()",
          "package": "Control-Engine",
          "partial": "Input Hook",
          "signature": "Engine j r s-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Control-Engine/docs/Control-Engine.html#v:delInputHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeletes all output hooks matching the provided desciption\n\u003c/p\u003e",
          "module": "Control.Engine",
          "name": "delOutputHook",
          "package": "Control-Engine",
          "signature": "Engine j r s -\u003e String -\u003e IO ()",
          "source": "src/Control-Engine.html#delOutputHook",
          "type": "function"
        },
        "index": {
          "description": "Deletes all output hooks matching the provided desciption",
          "hierarchy": "Control Engine",
          "module": "Control.Engine",
          "name": "delOutputHook",
          "normalized": "Engine a b c-\u003eString-\u003eIO()",
          "package": "Control-Engine",
          "partial": "Output Hook",
          "signature": "Engine j r s-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Control-Engine/docs/Control-Engine.html#v:delOutputHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeletes all post-mutate hooks matching the provided desciption\n\u003c/p\u003e",
          "module": "Control.Engine",
          "name": "delPostMutateHook",
          "package": "Control-Engine",
          "signature": "Engine j r s -\u003e String -\u003e IO ()",
          "source": "src/Control-Engine.html#delPostMutateHook",
          "type": "function"
        },
        "index": {
          "description": "Deletes all post-mutate hooks matching the provided desciption",
          "hierarchy": "Control Engine",
          "module": "Control.Engine",
          "name": "delPostMutateHook",
          "normalized": "Engine a b c-\u003eString-\u003eIO()",
          "package": "Control-Engine",
          "partial": "Post Mutate Hook",
          "signature": "Engine j r s-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Control-Engine/docs/Control-Engine.html#v:delPostMutateHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeletes all pre-mutate hooks matching the provided desciption\n\u003c/p\u003e",
          "module": "Control.Engine",
          "name": "delPreMutateHook",
          "package": "Control-Engine",
          "signature": "Engine j r s -\u003e String -\u003e IO ()",
          "source": "src/Control-Engine.html#delPreMutateHook",
          "type": "function"
        },
        "index": {
          "description": "Deletes all pre-mutate hooks matching the provided desciption",
          "hierarchy": "Control Engine",
          "module": "Control.Engine",
          "name": "delPreMutateHook",
          "normalized": "Engine a b c-\u003eString-\u003eIO()",
          "package": "Control-Engine",
          "partial": "Pre Mutate Hook",
          "signature": "Engine j r s-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Control-Engine/docs/Control-Engine.html#v:delPreMutateHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Engine",
          "name": "hkDescription",
          "package": "Control-Engine",
          "signature": "String",
          "source": "src/Control-Engine.html#Hook",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Engine",
          "module": "Control.Engine",
          "name": "hkDescription",
          "package": "Control-Engine",
          "partial": "Description",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Control-Engine/docs/Control-Engine.html#v:hkDescription"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Engine",
          "name": "hkFunc",
          "package": "Control-Engine",
          "signature": "st -\u003e msg -\u003e IO (Maybe msg)",
          "source": "src/Control-Engine.html#Hook",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Engine",
          "module": "Control.Engine",
          "name": "hkFunc",
          "normalized": "a-\u003eb-\u003eIO(Maybe b)",
          "package": "Control-Engine",
          "partial": "Func",
          "signature": "st-\u003emsg-\u003eIO(Maybe msg)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Control-Engine/docs/Control-Engine.html#v:hkFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Engine",
          "name": "hkPriority",
          "package": "Control-Engine",
          "signature": "Int",
          "source": "src/Control-Engine.html#Hook",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Engine",
          "module": "Control.Engine",
          "name": "hkPriority",
          "package": "Control-Engine",
          "partial": "Priority",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Control-Engine/docs/Control-Engine.html#v:hkPriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTo initilize an engine you must provide:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e the number of threads\n\u003c/li\u003e\u003cli\u003e the maxiumum channel size for intermediate channels\n\u003c/li\u003e\u003cli\u003e an action that will get the input\n\u003c/li\u003e\u003cli\u003e an action that will consume output\n\u003c/li\u003e\u003cli\u003e a mutator function to perform on all inputs\n\u003c/li\u003e\u003cli\u003e an initial state for the mutator function\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNo strictness is forced - be sure you force evaluation if wanted.\n All hooks start out empty.\n\u003c/p\u003e",
          "module": "Control.Engine",
          "name": "initEngine",
          "package": "Control-Engine",
          "signature": "Int -\u003e Int -\u003e IO job -\u003e (result -\u003e IO ()) -\u003e (st -\u003e job -\u003e IO (Maybe result)) -\u003e st -\u003e IO (Engine job result st)",
          "source": "src/Control-Engine.html#initEngine",
          "type": "function"
        },
        "index": {
          "description": "To initilize an engine you must provide the number of threads the maxiumum channel size for intermediate channels an action that will get the input an action that will consume output mutator function to perform on all inputs an initial state for the mutator function No strictness is forced be sure you force evaluation if wanted All hooks start out empty",
          "hierarchy": "Control Engine",
          "module": "Control.Engine",
          "name": "initEngine",
          "normalized": "Int-\u003eInt-\u003eIO a-\u003e(b-\u003eIO())-\u003e(c-\u003ea-\u003eIO(Maybe b))-\u003ec-\u003eIO(Engine a b c)",
          "package": "Control-Engine",
          "partial": "Engine",
          "signature": "Int-\u003eInt-\u003eIO job-\u003e(result-\u003eIO())-\u003e(st-\u003ejob-\u003eIO(Maybe result))-\u003est-\u003eIO(Engine job result st)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Control-Engine/docs/Control-Engine.html#v:initEngine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf all you want is a basic thread pool, this will work.\n You should consider using \u003ca\u003eControl.ThreadPool\u003c/a\u003e instead.\n\u003c/p\u003e\u003cp\u003eEvaluation of the result is forced using seq.\n Input, output, and intermediate channels are length bounded to a multiple\n of the number of workers.\n\u003c/p\u003e",
          "module": "Control.Engine",
          "name": "initSimpleEngine",
          "package": "Control-Engine",
          "signature": "Int -\u003e (job -\u003e result) -\u003e IO (BoundedChan job, BoundedChan result)",
          "source": "src/Control-Engine.html#initSimpleEngine",
          "type": "function"
        },
        "index": {
          "description": "If all you want is basic thread pool this will work You should consider using Control.ThreadPool instead Evaluation of the result is forced using seq Input output and intermediate channels are length bounded to multiple of the number of workers",
          "hierarchy": "Control Engine",
          "module": "Control.Engine",
          "name": "initSimpleEngine",
          "normalized": "Int-\u003e(a-\u003eb)-\u003eIO(BoundedChan a,BoundedChan b)",
          "package": "Control-Engine",
          "partial": "Simple Engine",
          "signature": "Int-\u003e(job-\u003eresult)-\u003eIO(BoundedChan job,BoundedChan result)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Control-Engine/docs/Control-Engine.html#v:initSimpleEngine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimpler than calling \u003ccode\u003e\u003ca\u003einitEngine\u003c/a\u003e\u003c/code\u003e, but it allows no state or interaction\n with the hooks and injectors. No strictness is forced.\n\u003c/p\u003e\u003cp\u003eInput, output, and intermediate channels are length bounded to a multiple\n of the number of workers.\n\u003c/p\u003e",
          "module": "Control.Engine",
          "name": "initSimpleEngineIO",
          "package": "Control-Engine",
          "signature": "Int -\u003e (job -\u003e IO result) -\u003e IO (BoundedChan job, BoundedChan result)",
          "source": "src/Control-Engine.html#initSimpleEngineIO",
          "type": "function"
        },
        "index": {
          "description": "Simpler than calling initEngine but it allows no state or interaction with the hooks and injectors No strictness is forced Input output and intermediate channels are length bounded to multiple of the number of workers",
          "hierarchy": "Control Engine",
          "module": "Control.Engine",
          "name": "initSimpleEngineIO",
          "normalized": "Int-\u003e(a-\u003eIO b)-\u003eIO(BoundedChan a,BoundedChan b)",
          "package": "Control-Engine",
          "partial": "Simple Engine IO",
          "signature": "Int-\u003e(job-\u003eIO result)-\u003eIO(BoundedChan job,BoundedChan result)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Control-Engine/docs/Control-Engine.html#v:initSimpleEngineIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllows bypassing the mutator, meaning a \u003ccode\u003eresult\u003c/code\u003e can be produced without a task.\n This still hits the output hooks.\n\u003c/p\u003e",
          "module": "Control.Engine",
          "name": "injectPostMutator",
          "package": "Control-Engine",
          "signature": "Engine j r s -\u003e r -\u003e IO ()",
          "source": "src/Control-Engine.html#injectPostMutator",
          "type": "function"
        },
        "index": {
          "description": "Allows bypassing the mutator meaning result can be produced without task This still hits the output hooks",
          "hierarchy": "Control Engine",
          "module": "Control.Engine",
          "name": "injectPostMutator",
          "normalized": "Engine a b c-\u003eb-\u003eIO()",
          "package": "Control-Engine",
          "partial": "Post Mutator",
          "signature": "Engine j r s-\u003er-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Control-Engine/docs/Control-Engine.html#v:injectPostMutator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllows adding tasks that bypass the input hooks.\n\u003c/p\u003e",
          "module": "Control.Engine",
          "name": "injectPreMutator",
          "package": "Control-Engine",
          "signature": "Engine j r s -\u003e j -\u003e IO ()",
          "source": "src/Control-Engine.html#injectPreMutator",
          "type": "function"
        },
        "index": {
          "description": "Allows adding tasks that bypass the input hooks",
          "hierarchy": "Control Engine",
          "module": "Control.Engine",
          "name": "injectPreMutator",
          "normalized": "Engine a b c-\u003ea-\u003eIO()",
          "package": "Control-Engine",
          "partial": "Pre Mutator",
          "signature": "Engine j r s-\u003ej-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Control-Engine/docs/Control-Engine.html#v:injectPreMutator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Engine",
          "name": "state",
          "package": "Control-Engine",
          "signature": "TVar state",
          "source": "src/Control-Engine.html#Engine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Engine",
          "module": "Control.Engine",
          "name": "state",
          "package": "Control-Engine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Control-Engine/docs/Control-Engine.html#v:state"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Engine",
          "name": "tvInHook",
          "package": "Control-Engine",
          "signature": "TVar [Hook state job]",
          "source": "src/Control-Engine.html#Engine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Engine",
          "module": "Control.Engine",
          "name": "tvInHook",
          "normalized": "TVar[Hook a b]",
          "package": "Control-Engine",
          "partial": "In Hook",
          "signature": "TVar[Hook state job]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Control-Engine/docs/Control-Engine.html#v:tvInHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Engine",
          "name": "tvOutHook",
          "package": "Control-Engine",
          "signature": "TVar [Hook state result]",
          "source": "src/Control-Engine.html#Engine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Engine",
          "module": "Control.Engine",
          "name": "tvOutHook",
          "normalized": "TVar[Hook a b]",
          "package": "Control-Engine",
          "partial": "Out Hook",
          "signature": "TVar[Hook state result]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Control-Engine/docs/Control-Engine.html#v:tvOutHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Engine",
          "name": "tvPostMutateHook",
          "package": "Control-Engine",
          "signature": "TVar [Hook state result]",
          "source": "src/Control-Engine.html#Engine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Engine",
          "module": "Control.Engine",
          "name": "tvPostMutateHook",
          "normalized": "TVar[Hook a b]",
          "package": "Control-Engine",
          "partial": "Post Mutate Hook",
          "signature": "TVar[Hook state result]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Control-Engine/docs/Control-Engine.html#v:tvPostMutateHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Engine",
          "name": "tvPreMutateHook",
          "package": "Control-Engine",
          "signature": "TVar [Hook state job]",
          "source": "src/Control-Engine.html#Engine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Engine",
          "module": "Control.Engine",
          "name": "tvPreMutateHook",
          "normalized": "TVar[Hook a b]",
          "package": "Control-Engine",
          "partial": "Pre Mutate Hook",
          "signature": "TVar[Hook state job]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Control-Engine/docs/Control-Engine.html#v:tvPreMutateHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ThreadPool",
          "name": "ThreadPool",
          "package": "Control-Engine",
          "source": "src/Control-ThreadPool.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control ThreadPool",
          "module": "Control.ThreadPool",
          "name": "ThreadPool",
          "package": "Control-Engine",
          "partial": "Thread Pool",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Control-Engine/docs/Control-ThreadPool.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA trival thread pool for pure functions (mappings).  Simply specify the number of threads desired and a mutator function.\n\u003c/p\u003e",
          "module": "Control.ThreadPool",
          "name": "threadPool",
          "package": "Control-Engine",
          "signature": "Int -\u003e (a -\u003e b) -\u003e IO (Chan a, Chan b)",
          "source": "src/Control-ThreadPool.html#threadPool",
          "type": "function"
        },
        "index": {
          "description": "trival thread pool for pure functions mappings Simply specify the number of threads desired and mutator function",
          "hierarchy": "Control ThreadPool",
          "module": "Control.ThreadPool",
          "name": "threadPool",
          "normalized": "Int-\u003e(a-\u003eb)-\u003eIO(Chan a,Chan b)",
          "package": "Control-Engine",
          "partial": "Pool",
          "signature": "Int-\u003e(a-\u003eb)-\u003eIO(Chan a,Chan b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Control-Engine/docs/Control-ThreadPool.html#v:threadPool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA trivial thread pool that allows IO mutator functions.  Evaluation of output is not strict\n - force evaluation if desired!\n\u003c/p\u003e",
          "module": "Control.ThreadPool",
          "name": "threadPoolIO",
          "package": "Control-Engine",
          "signature": "Int -\u003e (a -\u003e IO b) -\u003e IO (Chan a, Chan b)",
          "source": "src/Control-ThreadPool.html#threadPoolIO",
          "type": "function"
        },
        "index": {
          "description": "trivial thread pool that allows IO mutator functions Evaluation of output is not strict force evaluation if desired",
          "hierarchy": "Control ThreadPool",
          "module": "Control.ThreadPool",
          "name": "threadPoolIO",
          "normalized": "Int-\u003e(a-\u003eIO b)-\u003eIO(Chan a,Chan b)",
          "package": "Control-Engine",
          "partial": "Pool IO",
          "signature": "Int-\u003e(a-\u003eIO b)-\u003eIO(Chan a,Chan b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Control-Engine/docs/Control-ThreadPool.html#v:threadPoolIO"
      }
    }
  ]
]