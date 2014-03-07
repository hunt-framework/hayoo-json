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
        "word": "supervisor"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Supervisor.Session",
          "name": "Session",
          "package": "supervisor",
          "source": "src/Control-Monad-Supervisor-Session.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Supervisor Session",
          "module": "Control.Monad.Supervisor.Session",
          "name": "Session",
          "package": "supervisor",
          "partial": "Session",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/supervisor/docs/Control-Monad-Supervisor-Session.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet user-defined data in the context of the session.\n\u003c/p\u003e\u003cp\u003eThe data is indexed by  type in a map. So the user can insert-retrieve different kinds of data\n in the session context to add different behaviours to the supervisor monad.\n\u003c/p\u003e",
          "module": "Control.Monad.Supervisor.Session",
          "name": "SessionData",
          "package": "supervisor",
          "source": "src/Control-Monad-Supervisor-Session.html#SessionData",
          "type": "type"
        },
        "index": {
          "description": "Set user-defined data in the context of the session The data is indexed by type in map So the user can insert-retrieve different kinds of data in the session context to add different behaviours to the supervisor monad",
          "hierarchy": "Control Monad Supervisor Session",
          "module": "Control.Monad.Supervisor.Session",
          "name": "SessionData",
          "package": "supervisor",
          "partial": "Session Data",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/supervisor/docs/Control-Monad-Supervisor-Session.html#t:SessionData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Supervisor.Session",
          "name": "delSessionData",
          "package": "supervisor",
          "signature": "a -\u003e m ()",
          "source": "src/Control-Monad-Supervisor-Session.html#delSessionData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Supervisor Session",
          "module": "Control.Monad.Supervisor.Session",
          "name": "delSessionData",
          "normalized": "a-\u003eb()",
          "package": "supervisor",
          "partial": "Session Data",
          "signature": "a-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/supervisor/docs/Control-Monad-Supervisor-Session.html#v:delSessionData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Supervisor.Session",
          "name": "emptySessionData",
          "package": "supervisor",
          "signature": "Map k a",
          "source": "src/Control-Monad-Supervisor-Session.html#emptySessionData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Supervisor Session",
          "module": "Control.Monad.Supervisor.Session",
          "name": "emptySessionData",
          "package": "supervisor",
          "partial": "Session Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/supervisor/docs/Control-Monad-Supervisor-Session.html#v:emptySessionData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the session data of the desired type if there is any.\n\u003c/p\u003e",
          "module": "Control.Monad.Supervisor.Session",
          "name": "getSessionData",
          "package": "supervisor",
          "signature": "m (Maybe a)",
          "source": "src/Control-Monad-Supervisor-Session.html#getSessionData",
          "type": "function"
        },
        "index": {
          "description": "Get the session data of the desired type if there is any",
          "hierarchy": "Control Monad Supervisor Session",
          "module": "Control.Monad.Supervisor.Session",
          "name": "getSessionData",
          "package": "supervisor",
          "partial": "Session Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/supervisor/docs/Control-Monad-Supervisor-Session.html#v:getSessionData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Supervisor.Session",
          "name": "main",
          "package": "supervisor",
          "signature": "IO ()",
          "source": "src/Control-Monad-Supervisor-Session.html#main",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Supervisor Session",
          "module": "Control.Monad.Supervisor.Session",
          "name": "main",
          "normalized": "IO()",
          "package": "supervisor",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/supervisor/docs/Control-Monad-Supervisor-Session.html#v:main"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Supervisor.Session",
          "name": "onNothing",
          "package": "supervisor",
          "signature": "m (Maybe b) -\u003e m b -\u003e m b",
          "source": "src/Control-Monad-Supervisor-Session.html#onNothing",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Supervisor Session",
          "module": "Control.Monad.Supervisor.Session",
          "name": "onNothing",
          "normalized": "a(Maybe b)-\u003ea b-\u003ea b",
          "package": "supervisor",
          "partial": "Nothing",
          "signature": "m(Maybe b)-\u003em b-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/supervisor/docs/Control-Monad-Supervisor-Session.html#v:onNothing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Supervisor.Session",
          "name": "runs",
          "package": "supervisor",
          "signature": "b -\u003e StateT b IO a -\u003e IO a",
          "source": "src/Control-Monad-Supervisor-Session.html#runs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Supervisor Session",
          "module": "Control.Monad.Supervisor.Session",
          "name": "runs",
          "normalized": "a-\u003eStateT a IO b-\u003eIO b",
          "package": "supervisor",
          "signature": "b-\u003eStateT b IO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/supervisor/docs/Control-Monad-Supervisor-Session.html#v:runs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Supervisor.Session",
          "name": "setSessionData",
          "package": "supervisor",
          "signature": "a -\u003e m ()",
          "source": "src/Control-Monad-Supervisor-Session.html#setSessionData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Supervisor Session",
          "module": "Control.Monad.Supervisor.Session",
          "name": "setSessionData",
          "normalized": "a-\u003eb()",
          "package": "supervisor",
          "partial": "Session Data",
          "signature": "a-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/supervisor/docs/Control-Monad-Supervisor-Session.html#v:setSessionData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module add a \u003ccode\u003e\u003ca\u003eMonadLoc\u003c/a\u003e\u003c/code\u003e instance to the \u003ccode\u003eSupervisor\u003c/code\u003e monad. This instance generates a trace when a\n uncaugh exception is raised.\n\u003c/p\u003e\u003cp\u003e. See the MonadLoc package: \u003ca\u003ehttp://hackage.haskell.org/package/monadloc\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eThe package control-monad-exception produces call stacks using \u003ccode\u003emonadloc\u003c/code\u003e, but the \u003ccode\u003eSupervisor\u003c/code\u003e monad\n produces execution traces thanks to the backtracking mechanism.\n\u003c/p\u003e\u003cp\u003eThe trace is produced after the exception is raised. So it does not generate\n overhead in normal execution.\n\u003c/p\u003e\u003cp\u003eFor more finer control of exceptions, ej. for retrowing exceptions managed outside the Supervisor monad\n , create your own instance\n\u003c/p\u003e\u003cp\u003eExecute the example at \u003ccode\u003eDemos/TraceExample.hs\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e {-# OPTIONS -F -pgmF MonadLoc #-}\n module Demos.TraceExample (\n\n ) where\n\n import Control.Monad.Loc\n import Control.Monad.Supervisor.Trace\n import Control.Monad.Trans\n\n main= runTrace $ do\n    liftIO $ print \"hello\"\n\n    example\n\n example=\n    if True\n       then  do\n               liftIO $ print \"world\"\n               liftIO $ undefined\n\n       else liftIO $ print \"not there\"\n\u003c/pre\u003e\u003cp\u003eProduce this trace:\n\u003c/p\u003e\u003cpre\u003e\n  \"hello\"\n  \"world\"\n  TraceExample.hs: TRACE (error in the last line):\n  .\n  main, Demos.TraceExample(DemosTraceExample.hs): (23, 18)\n  main, Demos.TraceExample(DemosTraceExample.hs): (26, 4)\n  example, Demos.TraceExample(DemosTraceExample.hs): (30, 13)\n  example, Demos.TraceExample(DemosTraceExample.hs): (32, 15)\n  exception: Prelude.undefined\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Control.Monad.Supervisor.Trace",
          "name": "Trace",
          "package": "supervisor",
          "source": "src/Control-Monad-Supervisor-Trace.html",
          "type": "module"
        },
        "index": {
          "description": "This module add MonadLoc instance to the Supervisor monad This instance generates trace when uncaugh exception is raised See the MonadLoc package http hackage.haskell.org package monadloc The package control-monad-exception produces call stacks using monadloc but the Supervisor monad produces execution traces thanks to the backtracking mechanism The trace is produced after the exception is raised So it does not generate overhead in normal execution For more finer control of exceptions ej for retrowing exceptions managed outside the Supervisor monad create your own instance Execute the example at Demos TraceExample.hs OPTIONS pgmF MonadLoc module Demos.TraceExample where import Control.Monad.Loc import Control.Monad.Supervisor.Trace import Control.Monad.Trans main runTrace do liftIO print hello example example if True then do liftIO print world liftIO undefined else liftIO print not there Produce this trace hello world TraceExample.hs TRACE error in the last line main Demos.TraceExample DemosTraceExample.hs main Demos.TraceExample DemosTraceExample.hs example Demos.TraceExample DemosTraceExample.hs example Demos.TraceExample DemosTraceExample.hs exception Prelude.undefined",
          "hierarchy": "Control Monad Supervisor Trace",
          "module": "Control.Monad.Supervisor.Trace",
          "name": "Trace",
          "package": "supervisor",
          "partial": "Trace",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/supervisor/docs/Control-Monad-Supervisor-Trace.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an Supervisor computation and raise an error with a trace when an uncaugh exception\n is raised. It is necessary to preprocess the file with the monadloc-pp preprocessor.\n\u003c/p\u003e\u003cp\u003eOtherwise, it produces the same error with no trace.\n\u003c/p\u003e",
          "module": "Control.Monad.Supervisor.Trace",
          "name": "runTrace",
          "package": "supervisor",
          "signature": "Sup [String] m a -\u003e m (Control a)",
          "source": "src/Control-Monad-Supervisor-Trace.html#runTrace",
          "type": "function"
        },
        "index": {
          "description": "Execute an Supervisor computation and raise an error with trace when an uncaugh exception is raised It is necessary to preprocess the file with the monadloc-pp preprocessor Otherwise it produces the same error with no trace",
          "hierarchy": "Control Monad Supervisor Trace",
          "module": "Control.Monad.Supervisor.Trace",
          "name": "runTrace",
          "normalized": "Sup[String]a b-\u003ea(Control b)",
          "package": "supervisor",
          "partial": "Trace",
          "signature": "Sup[String]m a-\u003em(Control a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/supervisor/docs/Control-Monad-Supervisor-Trace.html#v:runTrace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Supervisor.Transactions",
          "name": "Transactions",
          "package": "supervisor",
          "source": "src/Control-Monad-Supervisor-Transactions.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Supervisor Transactions",
          "module": "Control.Monad.Supervisor.Transactions",
          "name": "Transactions",
          "package": "supervisor",
          "partial": "Transactions",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/supervisor/docs/Control-Monad-Supervisor-Transactions.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA supervisor monad that explore the execution tree of an internal monad and define extra behaviours thanks to flexible instance definitions for each particular purpose.\n It can inject new behaviours for backtracking, trace generation, testing, transaction rollbacks etc\n The supervisor monad is used in the package MFlow to control the routing, tracing, state management, back button management and navigation in general\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Supervisor",
          "name": "Supervisor",
          "package": "supervisor",
          "source": "src/Control-Monad-Supervisor.html",
          "type": "module"
        },
        "index": {
          "description": "supervisor monad that explore the execution tree of an internal monad and define extra behaviours thanks to flexible instance definitions for each particular purpose It can inject new behaviours for backtracking trace generation testing transaction rollbacks etc The supervisor monad is used in the package MFlow to control the routing tracing state management back button management and navigation in general",
          "hierarchy": "Control Monad Supervisor",
          "module": "Control.Monad.Supervisor",
          "name": "Supervisor",
          "package": "supervisor",
          "partial": "Supervisor",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/supervisor/docs/Control-Monad-Supervisor.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe internal computation can be reexecuted, proceed forward or backward\n\u003c/p\u003e",
          "module": "Control.Monad.Supervisor",
          "name": "Control",
          "package": "supervisor",
          "source": "src/Control-Monad-Supervisor.html#Control",
          "type": "data"
        },
        "index": {
          "description": "The internal computation can be reexecuted proceed forward or backward",
          "hierarchy": "Control Monad Supervisor",
          "module": "Control.Monad.Supervisor",
          "name": "Control",
          "package": "supervisor",
          "partial": "Control",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/supervisor/docs/Control-Monad-Supervisor.html#t:Control"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe supervisor add a Control wrapper that is interpreted by the monad instance\n\u003c/p\u003e",
          "module": "Control.Monad.Supervisor",
          "name": "Sup",
          "package": "supervisor",
          "source": "src/Control-Monad-Supervisor.html#Sup",
          "type": "newtype"
        },
        "index": {
          "description": "The supervisor add Control wrapper that is interpreted by the monad instance",
          "hierarchy": "Control Monad Supervisor",
          "module": "Control.Monad.Supervisor",
          "name": "Sup",
          "package": "supervisor",
          "partial": "Sup",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/supervisor/docs/Control-Monad-Supervisor.html#t:Sup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe supervise class add two general modifiers that can be applied:\n\u003c/p\u003e",
          "module": "Control.Monad.Supervisor",
          "name": "Supervise",
          "package": "supervisor",
          "source": "src/Control-Monad-Supervisor.html#Supervise",
          "type": "class"
        },
        "index": {
          "description": "The supervise class add two general modifiers that can be applied",
          "hierarchy": "Control Monad Supervisor",
          "module": "Control.Monad.Supervisor",
          "name": "Supervise",
          "package": "supervisor",
          "partial": "Supervise",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/supervisor/docs/Control-Monad-Supervisor.html#t:Supervise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Supervisor",
          "name": "(!\u003e)",
          "package": "supervisor",
          "signature": "c -\u003e String -\u003e c",
          "source": "src/Control-Monad-Supervisor.html#%21%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Supervisor",
          "module": "Control.Monad.Supervisor",
          "name": "(!\u003e) !\u003e",
          "normalized": "a-\u003eString-\u003ea",
          "package": "supervisor",
          "signature": "c-\u003eString-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/supervisor/docs/Control-Monad-Supervisor.html#v:-33--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Supervisor",
          "name": "Backward",
          "package": "supervisor",
          "signature": "Backward",
          "source": "src/Control-Monad-Supervisor.html#Control",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Supervisor",
          "module": "Control.Monad.Supervisor",
          "name": "Backward",
          "package": "supervisor",
          "partial": "Backward",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/supervisor/docs/Control-Monad-Supervisor.html#v:Backward"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Supervisor",
          "name": "Control",
          "package": "supervisor",
          "signature": "Control a",
          "source": "src/Control-Monad-Supervisor.html#Control",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Supervisor",
          "module": "Control.Monad.Supervisor",
          "name": "Control",
          "package": "supervisor",
          "partial": "Control",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/supervisor/docs/Control-Monad-Supervisor.html#v:Control"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Supervisor",
          "name": "Forward",
          "package": "supervisor",
          "signature": "Forward a",
          "source": "src/Control-Monad-Supervisor.html#Control",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Supervisor",
          "module": "Control.Monad.Supervisor",
          "name": "Forward",
          "package": "supervisor",
          "partial": "Forward",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/supervisor/docs/Control-Monad-Supervisor.html#v:Forward"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Supervisor",
          "name": "Sup",
          "package": "supervisor",
          "signature": "Sup",
          "source": "src/Control-Monad-Supervisor.html#Sup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Supervisor",
          "module": "Control.Monad.Supervisor",
          "name": "Sup",
          "package": "supervisor",
          "partial": "Sup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/supervisor/docs/Control-Monad-Supervisor.html#v:Sup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlag the computation that executes \u003ccode\u003ebreturn\u003c/code\u003e as a control point.\n\u003c/p\u003e\u003cp\u003eWhen the computation is going back, it will be re-executed (see the monad definition)\n\u003c/p\u003e",
          "module": "Control.Monad.Supervisor",
          "name": "breturn",
          "package": "supervisor",
          "signature": "a -\u003e Sup s m a",
          "source": "src/Control-Monad-Supervisor.html#breturn",
          "type": "function"
        },
        "index": {
          "description": "Flag the computation that executes breturn as control point When the computation is going back it will be re-executed see the monad definition",
          "hierarchy": "Control Monad Supervisor",
          "module": "Control.Monad.Supervisor",
          "name": "breturn",
          "normalized": "a-\u003eSup b c a",
          "package": "supervisor",
          "signature": "a-\u003eSup s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/supervisor/docs/Control-Monad-Supervisor.html#v:breturn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Supervisor",
          "name": "runSup",
          "package": "supervisor",
          "signature": "m (Control a)",
          "source": "src/Control-Monad-Supervisor.html#Sup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Supervisor",
          "module": "Control.Monad.Supervisor",
          "name": "runSup",
          "package": "supervisor",
          "partial": "Sup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/supervisor/docs/Control-Monad-Supervisor.html#v:runSup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Supervisor",
          "name": "supBack",
          "package": "supervisor",
          "signature": "supBack",
          "source": "src/Control-Monad-Supervisor.html#supBack",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Supervisor",
          "module": "Control.Monad.Supervisor",
          "name": "supBack",
          "package": "supervisor",
          "partial": "Back",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/supervisor/docs/Control-Monad-Supervisor.html#v:supBack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Supervisor",
          "name": "supervise",
          "package": "supervisor",
          "signature": "supervise",
          "source": "src/Control-Monad-Supervisor.html#supervise",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Supervisor",
          "module": "Control.Monad.Supervisor",
          "name": "supervise",
          "package": "supervisor",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/supervisor/docs/Control-Monad-Supervisor.html#v:supervise"
      }
    }
  ]
]