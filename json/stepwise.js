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
        "word": "stepwise"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule for use in combination\n   with UUAG's \u003ca\u003e--breadtfirst\u003c/a\u003e option.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Stepwise.AG",
          "name": "AG",
          "package": "stepwise",
          "source": "src/Control-Monad-Stepwise-AG.html",
          "type": "module"
        },
        "index": {
          "description": "Module for use in combination with UUAG breadtfirst option",
          "hierarchy": "Control Monad Stepwise AG",
          "module": "Control.Monad.Stepwise.AG",
          "name": "AG",
          "package": "stepwise",
          "partial": "AG",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-AG.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSemantics of a child of type \u003ccode\u003en\u003c/code\u003e as a function from inherited\n attributes (\u003ccode\u003eInh n\u003c/code\u003e) to a computation \u003ccode\u003eComp i n\u003c/code\u003e of synthesized attributes (\u003ccode\u003eSyn n\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Control.Monad.Stepwise.AG",
          "name": "Child",
          "package": "stepwise",
          "source": "src/Control-Monad-Stepwise-AG.html#Child",
          "type": "newtype"
        },
        "index": {
          "description": "Semantics of child of type as function from inherited attributes Inh to computation Comp of synthesized attributes Syn",
          "hierarchy": "Control Monad Stepwise AG",
          "module": "Control.Monad.Stepwise.AG",
          "name": "Child",
          "package": "stepwise",
          "partial": "Child",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-AG.html#t:Child"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe use slightly simpler stepwise computations for AGs.\n\u003c/p\u003e",
          "module": "Control.Monad.Stepwise.AG",
          "name": "Comp",
          "package": "stepwise",
          "source": "src/Control-Monad-Stepwise-AG.html#Comp",
          "type": "type"
        },
        "index": {
          "description": "We use slightly simpler stepwise computations for AGs",
          "hierarchy": "Control Monad Stepwise AG",
          "module": "Control.Monad.Stepwise.AG",
          "name": "Comp",
          "package": "stepwise",
          "partial": "Comp",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-AG.html#t:Comp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.AG",
          "name": "Inh",
          "package": "stepwise",
          "signature": "Inh",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise AG",
          "module": "Control.Monad.Stepwise.AG",
          "name": "Inh",
          "package": "stepwise",
          "partial": "Inh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-AG.html#t:Inh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.AG",
          "name": "Syn",
          "package": "stepwise",
          "signature": "Syn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise AG",
          "module": "Control.Monad.Stepwise.AG",
          "name": "Syn",
          "package": "stepwise",
          "partial": "Syn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-AG.html#t:Syn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.AG",
          "name": "Child",
          "package": "stepwise",
          "signature": "Child (Inh n -\u003e Comp i n)",
          "source": "src/Control-Monad-Stepwise-AG.html#Child",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise AG",
          "module": "Control.Monad.Stepwise.AG",
          "name": "Child",
          "normalized": "Child(Inh a-\u003eComp b a)",
          "package": "stepwise",
          "partial": "Child",
          "signature": "Child(Inh n-\u003eComp i n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-AG.html#v:Child"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwraps a \u003ccode\u003eClosure\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Stepwise.AG",
          "name": "invoke",
          "package": "stepwise",
          "signature": "Child i n -\u003e Inh n -\u003e Comp i n",
          "source": "src/Control-Monad-Stepwise-AG.html#invoke",
          "type": "function"
        },
        "index": {
          "description": "Unwraps Closure",
          "hierarchy": "Control Monad Stepwise AG",
          "module": "Control.Monad.Stepwise.AG",
          "name": "invoke",
          "normalized": "Child a b-\u003eInh b-\u003eComp a b",
          "package": "stepwise",
          "signature": "Child i n-\u003eInh n-\u003eComp i n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-AG.html#v:invoke"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Core",
          "name": "Core",
          "package": "stepwise",
          "source": "src/Control-Monad-Stepwise-Core.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "Core",
          "package": "stepwise",
          "partial": "Core",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType index representing arbitrary failure. No information is provided about the\n   failure - only that it happened. We provide instances to treat \u003ccode\u003e\u003ca\u003eAnyFailure\u003c/a\u003e\u003c/code\u003e as\n   error messages, which makes them convenient to use.\n\u003c/p\u003e",
          "module": "Control.Monad.Stepwise.Core",
          "name": "AnyFailure",
          "package": "stepwise",
          "source": "src/Control-Monad-Stepwise-Core.html#AnyFailure",
          "type": "data"
        },
        "index": {
          "description": "Type index representing arbitrary failure No information is provided about the failure only that it happened We provide instances to treat AnyFailure as error messages which makes them convenient to use",
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "AnyFailure",
          "package": "stepwise",
          "partial": "Any Failure",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#t:AnyFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType index representing an arbitrary watcher.\n   Note: in such situations, you can choose an arbitrary type. This type, however,\n   explicitly states that there is no interest in the watcher type, which provides\n   a bit additional documentation.\n\u003c/p\u003e",
          "module": "Control.Monad.Stepwise.Core",
          "name": "AnyWatcher",
          "package": "stepwise",
          "source": "src/Control-Monad-Stepwise-Core.html#AnyWatcher",
          "type": "data"
        },
        "index": {
          "description": "Type index representing an arbitrary watcher Note in such situations you can choose an arbitrary type This type however explicitly states that there is no interest in the watcher type which provides bit additional documentation",
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "AnyWatcher",
          "package": "stepwise",
          "partial": "Any Watcher",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#t:AnyWatcher"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInput to a transcoder.\n   \u003ccode\u003e\u003ca\u003eTcReport\u003c/a\u003e\u003c/code\u003e represents a single report to be transcoded.\n   \u003ccode\u003e\u003ca\u003eTcDone\u003c/a\u003e\u003c/code\u003e indicates that the computation to where this transcoder\n   is applied, has succeeded. \u003ccode\u003e\u003ca\u003eTcFail\u003c/a\u003e\u003c/code\u003e is its counter-part.\n   \u003ccode\u003e\u003ca\u003eTcLazy\u003c/a\u003e\u003c/code\u003e indicates that a lazy evaluation has taken over the\n   computation.\n\u003c/p\u003e",
          "module": "Control.Monad.Stepwise.Core",
          "name": "CodeIn",
          "package": "stepwise",
          "source": "src/Control-Monad-Stepwise-Core.html#CodeIn",
          "type": "data"
        },
        "index": {
          "description": "Input to transcoder TcReport represents single report to be transcoded TcDone indicates that the computation to where this transcoder is applied has succeeded TcFail is its counter-part TcLazy indicates that lazy evaluation has taken over the computation",
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "CodeIn",
          "package": "stepwise",
          "partial": "Code In",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#t:CodeIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput of a transcoder.\n   Either it succeeds with zero or more transcoded progress reports,\n   or it aborts the computation.\n\u003c/p\u003e",
          "module": "Control.Monad.Stepwise.Core",
          "name": "CodeOut",
          "package": "stepwise",
          "source": "src/Control-Monad-Stepwise-Core.html#CodeOut",
          "type": "data"
        },
        "index": {
          "description": "Output of transcoder Either it succeeds with zero or more transcoded progress reports or it aborts the computation",
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "CodeOut",
          "package": "stepwise",
          "partial": "Code Out",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#t:CodeOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType level version of \u003ccode\u003eAllowLazy\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Stepwise.Core",
          "name": "Lazy",
          "package": "stepwise",
          "source": "src/Control-Monad-Stepwise-Core.html#Lazy",
          "type": "data"
        },
        "index": {
          "description": "Type level version of AllowLazy",
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "Lazy",
          "package": "stepwise",
          "partial": "Lazy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#t:Lazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse a different \u003ccode\u003eMemoEnv\u003c/code\u003e for different watcher types.\n\u003c/p\u003e",
          "module": "Control.Monad.Stepwise.Core",
          "name": "MemoEnvRef",
          "package": "stepwise",
          "source": "src/Control-Monad-Stepwise-Core.html#MemoEnvRef",
          "type": "type"
        },
        "index": {
          "description": "Use different MemoEnv for different watcher types",
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "MemoEnvRef",
          "package": "stepwise",
          "partial": "Memo Env Ref",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#t:MemoEnvRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA progress report. Either the progress report denotes a single\n   step, or a finished/failed computation, or a suspended computation\n   in the form of a lookahead that waits for its future continuation\n   before it can proceed.\n\u003c/p\u003e",
          "module": "Control.Monad.Stepwise.Core",
          "name": "Progress",
          "package": "stepwise",
          "source": "src/Control-Monad-Stepwise-Core.html#Progress",
          "type": "data"
        },
        "index": {
          "description": "progress report Either the progress report denotes single step or finished failed computation or suspended computation in the form of lookahead that waits for its future continuation before it can proceed",
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "Progress",
          "package": "stepwise",
          "partial": "Progress",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#t:Progress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eReport\u003c/a\u003e\u003c/code\u003e version of a \u003ccode\u003e\u003ca\u003eProgress\u003c/a\u003e\u003c/code\u003e report.\n   The main difference is that this variation is handle-based, which provides\n   a monadic way of accessing the progress reports.\n\u003c/p\u003e",
          "module": "Control.Monad.Stepwise.Core",
          "name": "Report",
          "package": "stepwise",
          "source": "src/Control-Monad-Stepwise-Core.html#Report",
          "type": "data"
        },
        "index": {
          "description": "The Report version of Progress report The main difference is that this variation is handle-based which provides monadic way of accessing the progress reports",
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "Report",
          "package": "stepwise",
          "partial": "Report",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#t:Report"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType level version of \u003ccode\u003eForceSequential\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Monad.Stepwise.Core",
          "name": "Sequential",
          "package": "stepwise",
          "source": "src/Control-Monad-Stepwise-Core.html#Sequential",
          "type": "data"
        },
        "index": {
          "description": "Type level version of ForceSequential",
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "Sequential",
          "package": "stepwise",
          "partial": "Sequential",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#t:Sequential"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Core",
          "name": "StepHandle",
          "package": "stepwise",
          "source": "src/Control-Monad-Stepwise-Core.html#StepHandle",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "StepHandle",
          "package": "stepwise",
          "partial": "Step Handle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#t:StepHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA step-wise computation with errors \u003ccode\u003ee\u003c/code\u003e, progress reports \u003ccode\u003ei\u003c/code\u003e,\n   parametrized by watcher \u003ccode\u003ew\u003c/code\u003e, and evaluating to a value of type\n   \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eProgress reports \u003ccode\u003ei\u003c/code\u003e are indexed by the watcher type \u003ccode\u003ew\u003c/code\u003e. To\n   compose step-wise computations, they must agree on the same\n   type \u003ccode\u003ei\u003c/code\u003e. However, specific caller/callee combinations can\n   agree on a type \u003ccode\u003ew\u003c/code\u003e to report progress reports that contain\n   e.g. values computing during the evaluation process.\n\u003c/p\u003e\u003cp\u003eA stepwise computation may fail with an error of type \u003ccode\u003ee\u003c/code\u003e.\n   Failure is conceptually just another form of progress reports:\n   however, after a failure, there will not be any subsequent\n   progress reports. This distinction allows us to capture the\n   behavior of the \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e function in the \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e class.\n   For non-critical failures, use conventional progress reports.\n   If the information about the failure is not an issue, use\n   either \u003ccode\u003eAnyFailure\u003c/code\u003e or \u003ccode\u003eString\u003c/code\u003e as the type for \u003ccode\u003ee\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eA stepwise computation specifies its operational context via\n   the type index \u003ccode\u003eo\u003c/code\u003e. There are two operational modes: either\n   the computation requires to be executed sequentially, then\n   it has \u003ccode\u003e\u003ca\u003eSequential\u003c/a\u003e\u003c/code\u003e as type index, or it may be executed lazily,\n   then it has \u003ccode\u003e\u003ca\u003eLazy\u003c/a\u003e\u003c/code\u003e as type index. Some operations on stepwise\n   computations may require evaluation to be sequential. There is\n   no way (neither need) to enforce lazy evaluation.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eStepwise\u003c/a\u003e\u003c/code\u003e-value represents a partially evaluated step-wise\n   computation.\n   It is essentially a sequence of \u003ccode\u003eInfo\u003c/code\u003e progress reports, closed\n   by either failure, success, or the remaining computation.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003ePending\u003c/code\u003e constructor\n   specifies the computation that is 'left-most'. Strict\n   evaluation starts with this computation first. It also specifies\n   the stack of binds that immediately follow the left-most computation.\n   Since the computation to evaluate first is always on top of this\n   structure, we do not have to inspect the stack for each reduction\n   step.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eAhead\u003c/code\u003e constructor represents a\n   suspended computation that needs a continuation, such that it\n   can give the reports for the final result.\n   Note that the function of \u003ccode\u003eAhead\u003c/code\u003e takes a continuation that cannot\n   make any assumption about how it is executed (hence the universal \u003ccode\u003eo'\u003c/code\u003e).\n   If it needs to make an assumption, it should do so via e.g. \u003ccode\u003e\u003ca\u003elazily\u003c/a\u003e\u003c/code\u003e.\n   Furthermore, the function itself makes the assumption that it is\n   executed in a lazy context. This is a design choice: we could also\n   have demanded that it cannot make any assumptions on how it is called.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eInfo\u003c/code\u003e represents a progress report.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eInd\u003c/code\u003e constructor represents an indirection.\n   Sharing an indirection has the effect that the effort of producing\n   the progress reports is only performed once. In\n   practice are \u003ccode\u003e\u003ca\u003eStepwise\u003c/a\u003e\u003c/code\u003e values produced by functions, hence\n   sharing is not provided by default. To have a sharing guarantee,\n   however, apply \u003ccode\u003e\u003ca\u003eshare\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eStepwise\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e\u003cp\u003eThe additional indirection allows us to have explicit sharing,\n   such that we can update thunks, which opens up ways for parallelism.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eMode\u003c/code\u003e constructor serves three purposes. With it we can represent\n   entering a certain evaluation mode, leaving a certain evaluation mode,\n   and remembering the stack of evaluation modes we are currently in.\n\u003c/p\u003e",
          "module": "Control.Monad.Stepwise.Core",
          "name": "Stepwise",
          "package": "stepwise",
          "source": "src/Control-Monad-Stepwise-Core.html#Stepwise",
          "type": "data"
        },
        "index": {
          "description": "step-wise computation with errors progress reports parametrized by watcher and evaluating to value of type Progress reports are indexed by the watcher type To compose step-wise computations they must agree on the same type However specific caller callee combinations can agree on type to report progress reports that contain e.g values computing during the evaluation process stepwise computation may fail with an error of type Failure is conceptually just another form of progress reports however after failure there will not be any subsequent progress reports This distinction allows us to capture the behavior of the fail function in the Monad class For non-critical failures use conventional progress reports If the information about the failure is not an issue use either AnyFailure or String as the type for stepwise computation specifies its operational context via the type index There are two operational modes either the computation requires to be executed sequentially then it has Sequential as type index or it may be executed lazily then it has Lazy as type index Some operations on stepwise computations may require evaluation to be sequential There is no way neither need to enforce lazy evaluation Stepwise value represents partially evaluated step-wise computation It is essentially sequence of Info progress reports closed by either failure success or the remaining computation The Pending constructor specifies the computation that is left-most Strict evaluation starts with this computation first It also specifies the stack of binds that immediately follow the left-most computation Since the computation to evaluate first is always on top of this structure we do not have to inspect the stack for each reduction step The Ahead constructor represents suspended computation that needs continuation such that it can give the reports for the final result Note that the function of Ahead takes continuation that cannot make any assumption about how it is executed hence the universal If it needs to make an assumption it should do so via e.g lazily Furthermore the function itself makes the assumption that it is executed in lazy context This is design choice we could also have demanded that it cannot make any assumptions on how it is called Info represents progress report The Ind constructor represents an indirection Sharing an indirection has the effect that the effort of producing the progress reports is only performed once In practice are Stepwise values produced by functions hence sharing is not provided by default To have sharing guarantee however apply share to Stepwise value The additional indirection allows us to have explicit sharing such that we can update thunks which opens up ways for parallelism The Mode constructor serves three purposes With it we can represent entering certain evaluation mode leaving certain evaluation mode and remembering the stack of evaluation modes we are currently in",
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "Stepwise",
          "package": "stepwise",
          "partial": "Stepwise",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#t:Stepwise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA transcoder is a function that transcodes a progress report of the\n   type \u003ccode\u003ei v\u003c/code\u003e to reports of the type \u003ccode\u003ei w\u003c/code\u003e. It gets a \u003ccode\u003e\u003ca\u003eCodeIn\u003c/a\u003e\u003c/code\u003e as input\n   and produces a \u003ccode\u003e\u003ca\u003eCodeOut\u003c/a\u003e\u003c/code\u003e as output. The intention is that transcoders\n   are pure functions: side effect is allowed, but it is up to the\n   programmer to ensure that the progress report are not affected.\n   If the input is \u003ccode\u003e\u003ca\u003eTcLazy\u003c/a\u003e\u003c/code\u003e, the transcoder is notified that lazy\n   evaluation starts running the computation. The outcome of the\n   transcoder is ignored. When this takes place is unspecified.\n\u003c/p\u003e",
          "module": "Control.Monad.Stepwise.Core",
          "name": "Transcoder",
          "package": "stepwise",
          "source": "src/Control-Monad-Stepwise-Core.html#Transcoder",
          "type": "newtype"
        },
        "index": {
          "description": "transcoder is function that transcodes progress report of the type to reports of the type It gets CodeIn as input and produces CodeOut as output The intention is that transcoders are pure functions side effect is allowed but it is up to the programmer to ensure that the progress report are not affected If the input is TcLazy the transcoder is notified that lazy evaluation starts running the computation The outcome of the transcoder is ignored When this takes place is unspecified",
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "Transcoder",
          "package": "stepwise",
          "partial": "Transcoder",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#t:Transcoder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Core",
          "name": "AnyFailure",
          "package": "stepwise",
          "signature": "AnyFailure",
          "source": "src/Control-Monad-Stepwise-Core.html#AnyFailure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "AnyFailure",
          "package": "stepwise",
          "partial": "Any Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#v:AnyFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Core",
          "name": "Failed",
          "package": "stepwise",
          "signature": "(Maybe e) -\u003e Progress e i o w a",
          "source": "src/Control-Monad-Stepwise-Core.html#Progress",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "Failed",
          "normalized": "(Maybe a)-\u003eProgress a b c d e",
          "package": "stepwise",
          "partial": "Failed",
          "signature": "(Maybe e)-\u003eProgress e i o w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#v:Failed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Core",
          "name": "Failure",
          "package": "stepwise",
          "signature": "(Maybe e) -\u003e Report e i o w a",
          "source": "src/Control-Monad-Stepwise-Core.html#Report",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "Failure",
          "normalized": "(Maybe a)-\u003eReport a b c d e",
          "package": "stepwise",
          "partial": "Failure",
          "signature": "(Maybe e)-\u003eReport e i o w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#v:Failure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Core",
          "name": "Fin",
          "package": "stepwise",
          "signature": "a -\u003e Progress e i o w a",
          "source": "src/Control-Monad-Stepwise-Core.html#Progress",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "Fin",
          "normalized": "a-\u003eProgress b c d e a",
          "package": "stepwise",
          "partial": "Fin",
          "signature": "a-\u003eProgress e i o w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#v:Fin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Core",
          "name": "Finished",
          "package": "stepwise",
          "signature": "a -\u003e Report e i o w a",
          "source": "src/Control-Monad-Stepwise-Core.html#Report",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "Finished",
          "normalized": "a-\u003eReport b c d e a",
          "package": "stepwise",
          "partial": "Finished",
          "signature": "a-\u003eReport e i o w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#v:Finished"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Core",
          "name": "Future",
          "package": "stepwise",
          "signature": "(forall b v.  (forall o'.  a -\u003e Stepwise e i o' v b) -\u003e Stepwise e i Lazy v b) -\u003e Report e i o w a",
          "source": "src/Control-Monad-Stepwise-Core.html#Report",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "Future",
          "normalized": "(a b c(a d e-\u003eStepwise f g h i b)-\u003eStepwise f g Lazy i b)-\u003eReport f g j k e",
          "package": "stepwise",
          "partial": "Future",
          "signature": "(forall b v.(forall o'. a-\u003eStepwise e i o' v b)-\u003eStepwise e i Lazy v b)-\u003eReport e i o w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#v:Future"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Core",
          "name": "Lookahead",
          "package": "stepwise",
          "signature": "(forall b v.  (forall o'.  a -\u003e Stepwise e i o' v b) -\u003e Stepwise e i Lazy v b) -\u003e Progress e i o w a",
          "source": "src/Control-Monad-Stepwise-Core.html#Progress",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "Lookahead",
          "normalized": "(a b c(a d e-\u003eStepwise f g h i b)-\u003eStepwise f g Lazy i b)-\u003eProgress f g j k e",
          "package": "stepwise",
          "partial": "Lookahead",
          "signature": "(forall b v.(forall o'. a-\u003eStepwise e i o' v b)-\u003eStepwise e i Lazy v b)-\u003eProgress e i o w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#v:Lookahead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Core",
          "name": "Progress",
          "package": "stepwise",
          "signature": "(i w) -\u003e Report e i o w a",
          "source": "src/Control-Monad-Stepwise-Core.html#Report",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "Progress",
          "normalized": "(a b)-\u003eReport c a d b e",
          "package": "stepwise",
          "partial": "Progress",
          "signature": "(i w)-\u003eReport e i o w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#v:Progress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Core",
          "name": "Step",
          "package": "stepwise",
          "signature": "(i w) -\u003e Stepwise e i o w a -\u003e Progress e i o w a",
          "source": "src/Control-Monad-Stepwise-Core.html#Progress",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "Step",
          "normalized": "(a b)-\u003eStepwise c a d b e-\u003eProgress c a d b e",
          "package": "stepwise",
          "partial": "Step",
          "signature": "(i w)-\u003eStepwise e i o w a-\u003eProgress e i o w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#v:Step"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Core",
          "name": "TcDone",
          "package": "stepwise",
          "signature": "CodeIn e i w",
          "source": "src/Control-Monad-Stepwise-Core.html#CodeIn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "TcDone",
          "package": "stepwise",
          "partial": "Tc Done",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#v:TcDone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Core",
          "name": "TcFail",
          "package": "stepwise",
          "signature": "(Maybe e) -\u003e CodeIn e i w",
          "source": "src/Control-Monad-Stepwise-Core.html#CodeIn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "TcFail",
          "normalized": "(Maybe a)-\u003eCodeIn a b c",
          "package": "stepwise",
          "partial": "Tc Fail",
          "signature": "(Maybe e)-\u003eCodeIn e i w",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#v:TcFail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Core",
          "name": "TcFailed",
          "package": "stepwise",
          "signature": "(Maybe e) -\u003e CodeOut e i w",
          "source": "src/Control-Monad-Stepwise-Core.html#CodeOut",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "TcFailed",
          "normalized": "(Maybe a)-\u003eCodeOut a b c",
          "package": "stepwise",
          "partial": "Tc Failed",
          "signature": "(Maybe e)-\u003eCodeOut e i w",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#v:TcFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Core",
          "name": "TcLazy",
          "package": "stepwise",
          "signature": "CodeIn e i w",
          "source": "src/Control-Monad-Stepwise-Core.html#CodeIn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "TcLazy",
          "package": "stepwise",
          "partial": "Tc Lazy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#v:TcLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Core",
          "name": "TcReport",
          "package": "stepwise",
          "signature": "(i w) -\u003e CodeIn e i w",
          "source": "src/Control-Monad-Stepwise-Core.html#CodeIn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "TcReport",
          "normalized": "(a b)-\u003eCodeIn c a b",
          "package": "stepwise",
          "partial": "Tc Report",
          "signature": "(i w)-\u003eCodeIn e i w",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#v:TcReport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Core",
          "name": "TcReports",
          "package": "stepwise",
          "signature": "[i w] -\u003e CodeOut e i w",
          "source": "src/Control-Monad-Stepwise-Core.html#CodeOut",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "TcReports",
          "normalized": "[a b]-\u003eCodeOut c a b",
          "package": "stepwise",
          "partial": "Tc Reports",
          "signature": "[i w]-\u003eCodeOut e i w",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#v:TcReports"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Core",
          "name": "Trans",
          "package": "stepwise",
          "signature": "Trans (CodeIn e i v -\u003e IO (CodeOut e i w))",
          "source": "src/Control-Monad-Stepwise-Core.html#Transcoder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "Trans",
          "normalized": "Trans(CodeIn a b c-\u003eIO(CodeOut a b d))",
          "package": "stepwise",
          "partial": "Trans",
          "signature": "Trans(CodeIn e i v-\u003eIO(CodeOut e i w))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#v:Trans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Core",
          "name": "Unavail",
          "package": "stepwise",
          "signature": "Report e i o w a",
          "source": "src/Control-Monad-Stepwise-Core.html#Report",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "Unavail",
          "package": "stepwise",
          "partial": "Unavail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#v:Unavail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbort a computation. Note that in lazy evaluation mode,\n   abort is semantically equivalent to bottom, whereas in\n   stepwise evaluation, it provides backtracking.\n   This means that if there is no backtracking-alternative\n   left, aborts are replaced by a bottom value.\n\u003c/p\u003e",
          "module": "Control.Monad.Stepwise.Core",
          "name": "abort",
          "package": "stepwise",
          "signature": "e -\u003e Stepwise e i o w a",
          "source": "src/Control-Monad-Stepwise-Core.html#abort",
          "type": "function"
        },
        "index": {
          "description": "Abort computation Note that in lazy evaluation mode abort is semantically equivalent to bottom whereas in stepwise evaluation it provides backtracking This means that if there is no backtracking-alternative left aborts are replaced by bottom value",
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "abort",
          "normalized": "a-\u003eStepwise a b c d e",
          "package": "stepwise",
          "signature": "e-\u003eStepwise e i o w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#v:abort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCloses the handle and returns the remaining computation. The remaining computation\n   emits the last progress report first (if any), because this report may not be\n   acted upon yet. If you don't want this behavior, apply a transcoder that filters\n   out the first report.\n\u003c/p\u003e",
          "module": "Control.Monad.Stepwise.Core",
          "name": "close",
          "package": "stepwise",
          "signature": "StepHandle e i Lazy v a -\u003e Stepwise e i Sequential w (Stepwise e i Lazy v a)",
          "source": "src/Control-Monad-Stepwise-Core.html#close",
          "type": "function"
        },
        "index": {
          "description": "Closes the handle and returns the remaining computation The remaining computation emits the last progress report first if any because this report may not be acted upon yet If you don want this behavior apply transcoder that filters out the first report",
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "close",
          "normalized": "StepHandle a b Lazy c d-\u003eStepwise a b Sequential e(Stepwise a b Lazy c d)",
          "package": "stepwise",
          "signature": "StepHandle e i Lazy v a-\u003eStepwise e i Sequential w(Stepwise e i Lazy v a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#v:close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Core",
          "name": "emit",
          "package": "stepwise",
          "signature": "i w -\u003e Stepwise e i o w ()",
          "source": "src/Control-Monad-Stepwise-Core.html#emit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "emit",
          "normalized": "a b-\u003eStepwise c a d b()",
          "package": "stepwise",
          "signature": "i w-\u003eStepwise e i o w()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#v:emit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an always failing stepwise computation.\n\u003c/p\u003e",
          "module": "Control.Monad.Stepwise.Core",
          "name": "failure",
          "package": "stepwise",
          "signature": "Maybe e -\u003e Stepwise e i o w a",
          "source": "src/Control-Monad-Stepwise-Core.html#failure",
          "type": "function"
        },
        "index": {
          "description": "Creates an always failing stepwise computation",
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "failure",
          "normalized": "Maybe a-\u003eStepwise a b c d e",
          "package": "stepwise",
          "signature": "Maybe e-\u003eStepwise e i o w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#v:failure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn a result into a (trivial) stepwise compuation.\n\u003c/p\u003e",
          "module": "Control.Monad.Stepwise.Core",
          "name": "final",
          "package": "stepwise",
          "signature": "a -\u003e Stepwise e i o w a",
          "source": "src/Control-Monad-Stepwise-Core.html#final",
          "type": "function"
        },
        "index": {
          "description": "Turn result into trivial stepwise compuation",
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "final",
          "normalized": "a-\u003eStepwise b c d e a",
          "package": "stepwise",
          "signature": "a-\u003eStepwise e i o w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#v:final"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function that demands that the type of the stepwise computation\n   is sequential.\n\u003c/p\u003e",
          "module": "Control.Monad.Stepwise.Core",
          "name": "forceSequential",
          "package": "stepwise",
          "signature": "Stepwise e i Sequential w a -\u003e Stepwise e i Sequential w a",
          "source": "src/Control-Monad-Stepwise-Core.html#forceSequential",
          "type": "function"
        },
        "index": {
          "description": "Helper function that demands that the type of the stepwise computation is sequential",
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "forceSequential",
          "normalized": "Stepwise a b Sequential c d-\u003eStepwise a b Sequential c d",
          "package": "stepwise",
          "partial": "Sequential",
          "signature": "Stepwise e i Sequential w a-\u003eStepwise e i Sequential w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#v:forceSequential"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a handle to a stepwise computation.\n\u003c/p\u003e",
          "module": "Control.Monad.Stepwise.Core",
          "name": "handle",
          "package": "stepwise",
          "signature": "Stepwise e i o v a -\u003e Stepwise e i Sequential w (StepHandle e i o v a)",
          "source": "src/Control-Monad-Stepwise-Core.html#handle",
          "type": "function"
        },
        "index": {
          "description": "Creates handle to stepwise computation",
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "handle",
          "normalized": "Stepwise a b c d e-\u003eStepwise a b Sequential f(StepHandle a b c d e)",
          "package": "stepwise",
          "signature": "Stepwise e i o v a-\u003eStepwise e i Sequential w(StepHandle e i o v a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#v:handle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper for an effect.\n\u003c/p\u003e",
          "module": "Control.Monad.Stepwise.Core",
          "name": "info",
          "package": "stepwise",
          "signature": "i w -\u003e Stepwise e i o w a -\u003e Stepwise e i o w a",
          "source": "src/Control-Monad-Stepwise-Core.html#info",
          "type": "function"
        },
        "index": {
          "description": "Wrapper for an effect",
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "info",
          "normalized": "a b-\u003eStepwise c a d b e-\u003eStepwise c a d b e",
          "package": "stepwise",
          "signature": "i w-\u003eStepwise e i o w a-\u003eStepwise e i o w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#v:info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllows the stepwise computation to run in lazy mode.\n\u003c/p\u003e",
          "module": "Control.Monad.Stepwise.Core",
          "name": "lazily",
          "package": "stepwise",
          "signature": "Stepwise e i Lazy w a -\u003e Stepwise e i o w a",
          "source": "src/Control-Monad-Stepwise-Core.html#lazily",
          "type": "function"
        },
        "index": {
          "description": "Allows the stepwise computation to run in lazy mode",
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "lazily",
          "normalized": "Stepwise a b Lazy c d-\u003eStepwise a b e c d",
          "package": "stepwise",
          "signature": "Stepwise e i Lazy w a-\u003eStepwise e i o w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#v:lazily"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLazy evaluation of a step-wise computation.\n\u003c/p\u003e",
          "module": "Control.Monad.Stepwise.Core",
          "name": "lazyEval",
          "package": "stepwise",
          "signature": "Stepwise e i Lazy w a -\u003e a",
          "source": "src/Control-Monad-Stepwise-Core.html#lazyEval",
          "type": "function"
        },
        "index": {
          "description": "Lazy evaluation of step-wise computation",
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "lazyEval",
          "normalized": "Stepwise a b Lazy c d-\u003ed",
          "package": "stepwise",
          "partial": "Eval",
          "signature": "Stepwise e i Lazy w a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#v:lazyEval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Core",
          "name": "localStep",
          "package": "stepwise",
          "signature": "Stepwise e i o w a -\u003e Progress e i o w a",
          "source": "src/Control-Monad-Stepwise-Core.html#localStep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "localStep",
          "normalized": "Stepwise a b c d e-\u003eProgress a b c d e",
          "package": "stepwise",
          "partial": "Step",
          "signature": "Stepwise e i o w a-\u003eProgress e i o w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#v:localStep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntroduces a computation for merging child-progress reports while\n   taking also into account the effects that the merge has in the\n   evaluation of the parents. The remaining evaluation for the parents\n   is passed as continuation.\n\u003c/p\u003e",
          "module": "Control.Monad.Stepwise.Core",
          "name": "lookahead",
          "package": "stepwise",
          "signature": "(forall b v.  (forall o'.  a -\u003e Stepwise e i o' v b) -\u003e Stepwise e i Lazy v b) -\u003e Stepwise e i o w a",
          "source": "src/Control-Monad-Stepwise-Core.html#lookahead",
          "type": "function"
        },
        "index": {
          "description": "Introduces computation for merging child-progress reports while taking also into account the effects that the merge has in the evaluation of the parents The remaining evaluation for the parents is passed as continuation",
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "lookahead",
          "normalized": "(a b c(a d e-\u003eStepwise f g h i b)-\u003eStepwise f g Lazy i b)-\u003eStepwise f g j k e",
          "package": "stepwise",
          "signature": "(forall b v.(forall o'. a-\u003eStepwise e i o' v b)-\u003eStepwise e i Lazy v b)-\u003eStepwise e i o w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#v:lookahead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemoizes a stepwise computation.\n\u003c/p\u003e",
          "module": "Control.Monad.Stepwise.Core",
          "name": "memoSteps",
          "package": "stepwise",
          "signature": "MemoEnvRef e i o w -\u003e Int -\u003e Stepwise e i o w a -\u003e Stepwise e i o w a",
          "source": "src/Control-Monad-Stepwise-Core.html#memoSteps",
          "type": "function"
        },
        "index": {
          "description": "Memoizes stepwise computation",
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "memoSteps",
          "normalized": "MemoEnvRef a b c d-\u003eInt-\u003eStepwise a b c d e-\u003eStepwise a b c d e",
          "package": "stepwise",
          "partial": "Steps",
          "signature": "MemoEnvRef e i o w-\u003eInt-\u003eStepwise e i o w a-\u003eStepwise e i o w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#v:memoSteps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an empty memo-env.\n\u003c/p\u003e",
          "module": "Control.Monad.Stepwise.Core",
          "name": "newMemoEnv",
          "package": "stepwise",
          "signature": "IO (MemoEnvRef e i o w)",
          "source": "src/Control-Monad-Stepwise-Core.html#newMemoEnv",
          "type": "function"
        },
        "index": {
          "description": "Creates an empty memo-env",
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "newMemoEnv",
          "package": "stepwise",
          "partial": "Memo Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#v:newMemoEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOne step strict evaluation. Reduction proceeds until one\n progress report entry is produced, or the computation is\n suspended waiting for the continuation.\n\u003c/p\u003e",
          "module": "Control.Monad.Stepwise.Core",
          "name": "next",
          "package": "stepwise",
          "signature": "Stepwise e i o w a -\u003e IO (Progress e i o w a)",
          "source": "src/Control-Monad-Stepwise-Core.html#next",
          "type": "function"
        },
        "index": {
          "description": "One step strict evaluation Reduction proceeds until one progress report entry is produced or the computation is suspended waiting for the continuation",
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "next",
          "normalized": "Stepwise a b c d e-\u003eIO(Progress a b c d e)",
          "package": "stepwise",
          "signature": "Stepwise e i o w a-\u003eIO(Progress e i o w a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#v:next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003etask\u003c/a\u003e\u003c/code\u003e, except that it takes the next task of a step instead.\n\u003c/p\u003e",
          "module": "Control.Monad.Stepwise.Core",
          "name": "nextTask",
          "package": "stepwise",
          "signature": "Progress e i o w a -\u003e Stepwise e i o w a",
          "source": "src/Control-Monad-Stepwise-Core.html#nextTask",
          "type": "function"
        },
        "index": {
          "description": "Similar to task except that it takes the next task of step instead",
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "nextTask",
          "normalized": "Progress a b c d e-\u003eStepwise a b c d e",
          "package": "stepwise",
          "partial": "Task",
          "signature": "Progress e i o w a-\u003eStepwise e i o w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#v:nextTask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProgress the handle one step. Note that the handle maintains a reference to\n   the outcome of the previous computation. Hence, if this previous computation\n   was a \u003ccode\u003eInfo\u003c/code\u003e, we need to continue with the computation as its rhs.\n\u003c/p\u003e",
          "module": "Control.Monad.Stepwise.Core",
          "name": "perform",
          "package": "stepwise",
          "signature": "StepHandle e i o v a -\u003e Stepwise e i Sequential w ()",
          "source": "src/Control-Monad-Stepwise-Core.html#perform",
          "type": "function"
        },
        "index": {
          "description": "Progress the handle one step Note that the handle maintains reference to the outcome of the previous computation Hence if this previous computation was Info we need to continue with the computation as its rhs",
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "perform",
          "normalized": "StepHandle a b c d e-\u003eStepwise a b Sequential f()",
          "package": "stepwise",
          "signature": "StepHandle e i o v a-\u003eStepwise e i Sequential w()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#v:perform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCloses the handle and embeds the remaining computation.\n\u003c/p\u003e",
          "module": "Control.Monad.Stepwise.Core",
          "name": "proceed",
          "package": "stepwise",
          "signature": "StepHandle e i Lazy w a -\u003e Stepwise e i Sequential w a",
          "source": "src/Control-Monad-Stepwise-Core.html#proceed",
          "type": "function"
        },
        "index": {
          "description": "Closes the handle and embeds the remaining computation",
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "proceed",
          "normalized": "StepHandle a b Lazy c d-\u003eStepwise a b Sequential c d",
          "package": "stepwise",
          "signature": "StepHandle e i Lazy w a-\u003eStepwise e i Sequential w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#v:proceed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess the latest progress report on the handle.\n\u003c/p\u003e",
          "module": "Control.Monad.Stepwise.Core",
          "name": "report",
          "package": "stepwise",
          "signature": "StepHandle e i o v a -\u003e Stepwise e i Sequential w (Report e i o v a)",
          "source": "src/Control-Monad-Stepwise-Core.html#report",
          "type": "function"
        },
        "index": {
          "description": "Access the latest progress report on the handle",
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "report",
          "normalized": "StepHandle a b c d e-\u003eStepwise a b Sequential f(Report a b c d e)",
          "package": "stepwise",
          "signature": "StepHandle e i o v a-\u003eStepwise e i Sequential w(Report e i o v a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#v:report"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a pending computation for \u003ccode\u003em\u003c/code\u003e with \u003ccode\u003ef\u003c/code\u003e on the stack of parents.\n\u003c/p\u003e",
          "module": "Control.Monad.Stepwise.Core",
          "name": "resume",
          "package": "stepwise",
          "signature": "Stepwise e i o w b -\u003e (b -\u003e Stepwise e i o w a) -\u003e Stepwise e i o w a",
          "source": "src/Control-Monad-Stepwise-Core.html#resume",
          "type": "function"
        },
        "index": {
          "description": "Creates pending computation for with on the stack of parents",
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "resume",
          "normalized": "Stepwise a b c d e-\u003e(e-\u003eStepwise a b c d f)-\u003eStepwise a b c d f",
          "package": "stepwise",
          "signature": "Stepwise e i o w b-\u003e(b-\u003eStepwise e i o w a)-\u003eStepwise e i o w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#v:resume"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequential evaluation of a step-wise computation.\n\u003c/p\u003e",
          "module": "Control.Monad.Stepwise.Core",
          "name": "seqEval",
          "package": "stepwise",
          "signature": "Stepwise e i Sequential w a -\u003e a",
          "source": "src/Control-Monad-Stepwise-Core.html#seqEval",
          "type": "function"
        },
        "index": {
          "description": "Sequential evaluation of step-wise computation",
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "seqEval",
          "normalized": "Stepwise a b Sequential c d-\u003ed",
          "package": "stepwise",
          "partial": "Eval",
          "signature": "Stepwise e i Sequential w a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#v:seqEval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForces the stepwise computation to run in sequential mode.\n\u003c/p\u003e",
          "module": "Control.Monad.Stepwise.Core",
          "name": "sequentially",
          "package": "stepwise",
          "signature": "Stepwise e i Sequential w a -\u003e Stepwise e i o w a",
          "source": "src/Control-Monad-Stepwise-Core.html#sequentially",
          "type": "function"
        },
        "index": {
          "description": "Forces the stepwise computation to run in sequential mode",
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "sequentially",
          "normalized": "Stepwise a b Sequential c d-\u003eStepwise a b e c d",
          "package": "stepwise",
          "signature": "Stepwise e i Sequential w a-\u003eStepwise e i o w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#v:sequentially"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShares a stepwise computation. Work for such a shared computation is only\n   performed once.\n\u003c/p\u003e",
          "module": "Control.Monad.Stepwise.Core",
          "name": "share",
          "package": "stepwise",
          "signature": "Stepwise e i o v a -\u003e Stepwise e i Sequential w (Stepwise e i o v a)",
          "source": "src/Control-Monad-Stepwise-Core.html#share",
          "type": "function"
        },
        "index": {
          "description": "Shares stepwise computation Work for such shared computation is only performed once",
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "share",
          "normalized": "Stepwise a b c d e-\u003eStepwise a b Sequential f(Stepwise a b c d e)",
          "package": "stepwise",
          "signature": "Stepwise e i o v a-\u003eStepwise e i Sequential w(Stepwise e i o v a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#v:share"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Core",
          "name": "smallStep",
          "package": "stepwise",
          "signature": "Stepwise e i o w a -\u003e Progress e i o w a",
          "source": "src/Control-Monad-Stepwise-Core.html#smallStep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "smallStep",
          "normalized": "Stepwise a b c d e-\u003eProgress a b c d e",
          "package": "stepwise",
          "partial": "Step",
          "signature": "Stepwise e i o w a-\u003eProgress e i o w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#v:smallStep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluates step-wise (also ties the look-ahead knot)\n\u003c/p\u003e",
          "module": "Control.Monad.Stepwise.Core",
          "name": "stepwiseEval",
          "package": "stepwise",
          "signature": "Stepwise e i o w a -\u003e a",
          "source": "src/Control-Monad-Stepwise-Core.html#stepwiseEval",
          "type": "function"
        },
        "index": {
          "description": "Evaluates step-wise also ties the look-ahead knot",
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "stepwiseEval",
          "normalized": "Stepwise a b c d e-\u003ee",
          "package": "stepwise",
          "partial": "Eval",
          "signature": "Stepwise e i o w a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#v:stepwiseEval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a progress report back into a thunk that upon\n   \u003ccode\u003e\u003ca\u003enext\u003c/a\u003e\u003c/code\u003e-reduction immediately yields the progress report again.\n\u003c/p\u003e",
          "module": "Control.Monad.Stepwise.Core",
          "name": "task",
          "package": "stepwise",
          "signature": "Progress e i o w a -\u003e Stepwise e i o w a",
          "source": "src/Control-Monad-Stepwise-Core.html#task",
          "type": "function"
        },
        "index": {
          "description": "Converts progress report back into thunk that upon next reduction immediately yields the progress report again",
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "task",
          "normalized": "Progress a b c d e-\u003eStepwise a b c d e",
          "package": "stepwise",
          "signature": "Progress e i o w a-\u003eStepwise e i o w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#v:task"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a transcoder to a computation.\n\u003c/p\u003e",
          "module": "Control.Monad.Stepwise.Core",
          "name": "transcode",
          "package": "stepwise",
          "signature": "Transcoder e i v w -\u003e Stepwise e i o v a -\u003e Stepwise e i o w a",
          "source": "src/Control-Monad-Stepwise-Core.html#transcode",
          "type": "function"
        },
        "index": {
          "description": "Applies transcoder to computation",
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "transcode",
          "normalized": "Transcoder a b c d-\u003eStepwise a b e c f-\u003eStepwise a b e d f",
          "package": "stepwise",
          "signature": "Transcoder e i v w-\u003eStepwise e i o v a-\u003eStepwise e i o w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#v:transcode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslates progress reports from one domain directly into another.\n\u003c/p\u003e",
          "module": "Control.Monad.Stepwise.Core",
          "name": "translate",
          "package": "stepwise",
          "signature": "(i v -\u003e i w) -\u003e Stepwise e i o v a -\u003e Stepwise e i o w a",
          "source": "src/Control-Monad-Stepwise-Core.html#translate",
          "type": "function"
        },
        "index": {
          "description": "Translates progress reports from one domain directly into another",
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "translate",
          "normalized": "(a b-\u003ea c)-\u003eStepwise d a e b f-\u003eStepwise d a e c f",
          "package": "stepwise",
          "signature": "(i v-\u003ei w)-\u003eStepwise e i o v a-\u003eStepwise e i o w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#v:translate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslates to zero or more reports, or failure.\n\u003c/p\u003e",
          "module": "Control.Monad.Stepwise.Core",
          "name": "translate'",
          "package": "stepwise",
          "signature": "(i v -\u003e IO (Either (Maybe e) [i w])) -\u003e Stepwise e i o v a -\u003e Stepwise e i o w a",
          "source": "src/Control-Monad-Stepwise-Core.html#translate%27",
          "type": "function"
        },
        "index": {
          "description": "Translates to zero or more reports or failure",
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "translate'",
          "normalized": "(a b-\u003eIO(Either(Maybe c)[a d]))-\u003eStepwise c a e b f-\u003eStepwise c a e d f",
          "package": "stepwise",
          "signature": "(i v-\u003eIO(Either(Maybe e)[i w]))-\u003eStepwise e i o v a-\u003eStepwise e i o w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#v:translate-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssumes that 'i v' is structurally equal to 'i w'.\n\u003c/p\u003e",
          "module": "Control.Monad.Stepwise.Core",
          "name": "unsafeTranslate",
          "package": "stepwise",
          "signature": "Stepwise e i o v a -\u003e Stepwise e i o w a",
          "source": "src/Control-Monad-Stepwise-Core.html#unsafeTranslate",
          "type": "function"
        },
        "index": {
          "description": "Assumes that is structurally equal to",
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "unsafeTranslate",
          "normalized": "Stepwise a b c d e-\u003eStepwise a b c f e",
          "package": "stepwise",
          "partial": "Translate",
          "signature": "Stepwise e i o v a-\u003eStepwise e i o w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#v:unsafeTranslate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an always failing stepwise computation (without an error message).\n\u003c/p\u003e",
          "module": "Control.Monad.Stepwise.Core",
          "name": "unspecifiedFailure",
          "package": "stepwise",
          "signature": "Stepwise e i o w a",
          "source": "src/Control-Monad-Stepwise-Core.html#unspecifiedFailure",
          "type": "function"
        },
        "index": {
          "description": "Creates an always failing stepwise computation without an error message",
          "hierarchy": "Control Monad Stepwise Core",
          "module": "Control.Monad.Stepwise.Core",
          "name": "unspecifiedFailure",
          "package": "stepwise",
          "partial": "Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Core.html#v:unspecifiedFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains some utility functions that build on the\n   core interface of \u003ccode\u003e\u003ca\u003eStepwise\u003c/a\u003e\u003c/code\u003e computations.\n\u003c/p\u003e\u003cp\u003eTodo: nicer abstractions for specific merge-patterns.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Stepwise.Derived",
          "name": "Derived",
          "package": "stepwise",
          "source": "src/Control-Monad-Stepwise-Derived.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains some utility functions that build on the core interface of Stepwise computations Todo nicer abstractions for specific merge-patterns",
          "hierarchy": "Control Monad Stepwise Derived",
          "module": "Control.Monad.Stepwise.Derived",
          "name": "Derived",
          "package": "stepwise",
          "partial": "Derived",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Derived.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGlobal choice.\n   Takes the computation with the shortest sequence of reports that succeeds, or the longest that fails.\n   First parameter is a transcoder that translates reports to the final domain.\n\u003c/p\u003e",
          "module": "Control.Monad.Stepwise.Derived",
          "name": "globalChoice",
          "package": "stepwise",
          "signature": "(forall v.  Stepwise e i Lazy v a) -\u003e (forall v.  Stepwise e i Lazy v a) -\u003e Stepwise e i o w a",
          "source": "src/Control-Monad-Stepwise-Derived.html#globalChoice",
          "type": "function"
        },
        "index": {
          "description": "Global choice Takes the computation with the shortest sequence of reports that succeeds or the longest that fails First parameter is transcoder that translates reports to the final domain",
          "hierarchy": "Control Monad Stepwise Derived",
          "module": "Control.Monad.Stepwise.Derived",
          "name": "globalChoice",
          "normalized": "(a b Stepwise c d Lazy e f)-\u003e(a b Stepwise c d Lazy e f)-\u003eStepwise c d g h f",
          "package": "stepwise",
          "partial": "Choice",
          "signature": "(forall v. Stepwise e i Lazy v a)-\u003e(forall v. Stepwise e i Lazy v a)-\u003eStepwise e i o w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Derived.html#v:globalChoice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChooses locally: i.e. does not allow a lookahead beyond the current computation. A subcomputation does not\n see beyond the current choice.\n\u003c/p\u003e",
          "module": "Control.Monad.Stepwise.Derived",
          "name": "localChoice",
          "package": "stepwise",
          "signature": "(i w -\u003e Stepwise e i o w a -\u003e i w -\u003e Stepwise e i o w a -\u003e Stepwise e i o w a) -\u003e (e -\u003e e -\u003e Stepwise e i o w a) -\u003e Stepwise e i o w a -\u003e Stepwise e i o w a -\u003e Stepwise e i o w a",
          "source": "src/Control-Monad-Stepwise-Derived.html#localChoice",
          "type": "function"
        },
        "index": {
          "description": "Chooses locally i.e does not allow lookahead beyond the current computation subcomputation does not see beyond the current choice",
          "hierarchy": "Control Monad Stepwise Derived",
          "module": "Control.Monad.Stepwise.Derived",
          "name": "localChoice",
          "normalized": "(a b-\u003eStepwise c a d b e-\u003ea b-\u003eStepwise c a d b e-\u003eStepwise c a d b e)-\u003e(c-\u003ec-\u003eStepwise c a d b e)-\u003eStepwise c a d b e-\u003eStepwise c a d b e-\u003eStepwise c a d b e",
          "package": "stepwise",
          "partial": "Choice",
          "signature": "(i w-\u003eStepwise e i o w a-\u003ei w-\u003eStepwise e i o w a-\u003eStepwise e i o w a)-\u003e(e-\u003ee-\u003eStepwise e i o w a)-\u003eStepwise e i o w a-\u003eStepwise e i o w a-\u003eStepwise e i o w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Derived.html#v:localChoice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerges two steps into a single step, thereby making use of the monoid instance.\n\u003c/p\u003e",
          "module": "Control.Monad.Stepwise.Derived",
          "name": "mergeSteps",
          "package": "stepwise",
          "signature": "i w -\u003e Stepwise e i o w a -\u003e i w -\u003e Stepwise e i o w a -\u003e Stepwise e i o w a",
          "source": "src/Control-Monad-Stepwise-Derived.html#mergeSteps",
          "type": "function"
        },
        "index": {
          "description": "Merges two steps into single step thereby making use of the monoid instance",
          "hierarchy": "Control Monad Stepwise Derived",
          "module": "Control.Monad.Stepwise.Derived",
          "name": "mergeSteps",
          "normalized": "a b-\u003eStepwise c a d b e-\u003ea b-\u003eStepwise c a d b e-\u003eStepwise c a d b e",
          "package": "stepwise",
          "partial": "Steps",
          "signature": "i w-\u003eStepwise e i o w a-\u003ei w-\u003eStepwise e i o w a-\u003eStepwise e i o w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Derived.html#v:mergeSteps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module shows some example stepwise-computations, and\n   focus on individual features provided by the library. We\n   start with testing out some basic functionality, then\n   switch to more interesting examples.\n   In practice, you'll combine several of the features presented\n   here.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "Examples",
          "package": "stepwise",
          "source": "src/Control-Monad-Stepwise-Examples.html",
          "type": "module"
        },
        "index": {
          "description": "This module shows some example stepwise-computations and focus on individual features provided by the library We start with testing out some basic functionality then switch to more interesting examples In practice you ll combine several of the features presented here",
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "Examples",
          "package": "stepwise",
          "partial": "Examples",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepmin with alternatives!\n   The tree may contain alternatives. The tree is returned such that it\n   (1) consists of the shortest (left-biassed) alternatives\n   (2) all leaves replaced with the minimal value occurring in the\n       tree (for the selected alternatives)\n   This tests the \u003ccode\u003e\u003ca\u003eMonadFix\u003c/a\u003e\u003c/code\u003e feature.\n\u003c/p\u003e\u003cp\u003eNote: To show that online results are in general necessairy for\n   cyclic computations, we should actually make the selection process\n   dependent on the outcome of a previously but already resolved selection.\n   For example, by keeping a local minimum (from the left), and taking the\n   first alternative that goes under it. Perhaps a min/max game tree would\n   be a good example for that.\n\u003c/p\u003e\u003cp\u003eAlso, a lazy value depending on the outcome of two or more alternatives\n   can only be produced if there is one alternative left. If all the\n   alternatives would yield the same outermost constructor, still no\n   value can be produced. This is in general no problem; the reason that\n   you had alternatives there is likely because it returns different\n   results.\n\u003c/p\u003e",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "BinTree",
          "package": "stepwise",
          "source": "src/Control-Monad-Stepwise-Examples.html#BinTree",
          "type": "data"
        },
        "index": {
          "description": "Repmin with alternatives The tree may contain alternatives The tree is returned such that it consists of the shortest left-biassed alternatives all leaves replaced with the minimal value occurring in the tree for the selected alternatives This tests the MonadFix feature Note To show that online results are in general necessairy for cyclic computations we should actually make the selection process dependent on the outcome of previously but already resolved selection For example by keeping local minimum from the left and taking the first alternative that goes under it Perhaps min max game tree would be good example for that Also lazy value depending on the outcome of two or more alternatives can only be produced if there is one alternative left If all the alternatives would yield the same outermost constructor still no value can be produced This is in general no problem the reason that you had alternatives there is likely because it returns different results",
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "BinTree",
          "package": "stepwise",
          "partial": "Bin Tree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#t:BinTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContainer to keep the contained value lazy\n\u003c/p\u003e",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "Branch",
          "package": "stepwise",
          "source": "src/Control-Monad-Stepwise-Examples.html#Branch",
          "type": "data"
        },
        "index": {
          "description": "Container to keep the contained value lazy",
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "Branch",
          "package": "stepwise",
          "partial": "Branch",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#t:Branch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Examples",
          "name": "Dir",
          "package": "stepwise",
          "source": "src/Control-Monad-Stepwise-Examples.html#Dir",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "Dir",
          "package": "stepwise",
          "partial": "Dir",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#t:Dir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type for the simplest form of progress report: just a message \u003ccode\u003e\u003ca\u003eI\u003c/a\u003e\u003c/code\u003e that\n   indicates that a bit of work has been done. It is indexed by the watcher\n   type \u003ccode\u003et\u003c/code\u003e, which in this case doesn't matter. Later examples show a more\n   involving type of progress report that uses the watcher type.\n\u003c/p\u003e",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "I",
          "package": "stepwise",
          "source": "src/Control-Monad-Stepwise-Examples.html#I",
          "type": "data"
        },
        "index": {
          "description": "type for the simplest form of progress report just message that indicates that bit of work has been done It is indexed by the watcher type which in this case doesn matter Later examples show more involving type of progress report that uses the watcher type",
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "I",
          "package": "stepwise",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#t:I"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Examples",
          "name": "Instrs",
          "package": "stepwise",
          "source": "src/Control-Monad-Stepwise-Examples.html#Instrs",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "Instrs",
          "package": "stepwise",
          "partial": "Instrs",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#t:Instrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest 7: collecting multiple results.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003etest7b\u003c/a\u003e\u003c/code\u003e generates paths: the left subpath is of length n-1 the right subpath is a lot shorter (n \u003ccode\u003e\u003ca\u003ediv\u003c/a\u003e\u003c/code\u003e 2)\n  (just for fun).\n \u003ccode\u003e\u003ca\u003etest7a\u003c/a\u003e\u003c/code\u003e succeeds only for those paths that satisfy a funny criteria via xor. Those it returns.\n When it succeeds, \u003ccode\u003e\u003ca\u003etest7b\u003c/a\u003e\u003c/code\u003e emits a progress report collecting that value.\n \u003ccode\u003e\u003ca\u003emerge\u003c/a\u003e\u003c/code\u003e tries out options in a breadth-first way, and concatenates the lists in the progress reports.\n \u003ccode\u003e\u003ca\u003etest7c\u003c/a\u003e\u003c/code\u003e takes out the list of all succeeding paths.\n\u003c/p\u003e\u003cp\u003eWe collect these multiple results in a more informative form of progress report \u003ccode\u003e\u003ca\u003eJ\u003c/a\u003e\u003c/code\u003e. The type of\n the watcher is important here. The \u003ccode\u003e\u003ca\u003etest7a\u003c/a\u003e\u003c/code\u003e function does not make any assumptions about the\n watcher, however \u003ccode\u003e\u003ca\u003etest7b\u003c/a\u003e\u003c/code\u003e does. When \u003ccode\u003e\u003ca\u003etest7a\u003c/a\u003e\u003c/code\u003e succeeds, it collects that results in a \u003ccode\u003e\u003ca\u003eCollect\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "J",
          "package": "stepwise",
          "source": "src/Control-Monad-Stepwise-Examples.html#J",
          "type": "data"
        },
        "index": {
          "description": "Test collecting multiple results test7b generates paths the left subpath is of length n-1 the right subpath is lot shorter div just for fun test7a succeeds only for those paths that satisfy funny criteria via xor Those it returns When it succeeds test7b emits progress report collecting that value merge tries out options in breadth-first way and concatenates the lists in the progress reports test7c takes out the list of all succeeding paths We collect these multiple results in more informative form of progress report The type of the watcher is important here The test7a function does not make any assumptions about the watcher however test7b does When test7a succeeds it collects that results in Collect",
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "J",
          "package": "stepwise",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#t:J"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest 8: lookahead.\n Decisions taken in this example may depend on what happens in the continuation.\n We takes as example path-finding in a labyrinth. Taking a step that brings us\n back to a position where we've been before is an immediate failure. However,\n the possibilities that remain may hit a dead-end later.\n\u003c/p\u003e",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "Lab",
          "package": "stepwise",
          "source": "src/Control-Monad-Stepwise-Examples.html#Lab",
          "type": "type"
        },
        "index": {
          "description": "Test lookahead Decisions taken in this example may depend on what happens in the continuation We takes as example path-finding in labyrinth Taking step that brings us back to position where we ve been before is an immediate failure However the possibilities that remain may hit dead-end later",
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "Lab",
          "package": "stepwise",
          "partial": "Lab",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#t:Lab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Examples",
          "name": "Lab'",
          "package": "stepwise",
          "source": "src/Control-Monad-Stepwise-Examples.html#Lab%27",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "Lab'",
          "package": "stepwise",
          "partial": "Lab'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#t:Lab-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Examples",
          "name": "LabChn",
          "package": "stepwise",
          "source": "src/Control-Monad-Stepwise-Examples.html#LabChn",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "LabChn",
          "package": "stepwise",
          "partial": "Lab Chn",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#t:LabChn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Examples",
          "name": "LabIn",
          "package": "stepwise",
          "source": "src/Control-Monad-Stepwise-Examples.html#LabIn",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "LabIn",
          "package": "stepwise",
          "partial": "Lab In",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#t:LabIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Examples",
          "name": "LabSteps",
          "package": "stepwise",
          "source": "src/Control-Monad-Stepwise-Examples.html#LabSteps",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "LabSteps",
          "package": "stepwise",
          "partial": "Lab Steps",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#t:LabSteps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Examples",
          "name": "Path",
          "package": "stepwise",
          "source": "src/Control-Monad-Stepwise-Examples.html#Path",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "Path",
          "package": "stepwise",
          "partial": "Path",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#t:Path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Examples",
          "name": "Pos",
          "package": "stepwise",
          "source": "src/Control-Monad-Stepwise-Examples.html#Pos",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "Pos",
          "package": "stepwise",
          "partial": "Pos",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#t:Pos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Examples",
          "name": "RepMin",
          "package": "stepwise",
          "source": "src/Control-Monad-Stepwise-Examples.html#RepMin",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "RepMin",
          "package": "stepwise",
          "partial": "Rep Min",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#t:RepMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Examples",
          "name": "(\u003c\u003c|\u003e)",
          "package": "stepwise",
          "signature": "Lab a -\u003e Lab a -\u003e Lab a",
          "source": "src/Control-Monad-Stepwise-Examples.html#%3C%3C%7C%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "(\u003c\u003c|\u003e) \u003c\u003c|\u003e",
          "normalized": "Lab a-\u003eLab a-\u003eLab a",
          "package": "stepwise",
          "signature": "Lab a-\u003eLab a-\u003eLab a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#v:-60--60--124--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Examples",
          "name": "Alt",
          "package": "stepwise",
          "signature": "Alt BinTree BinTree",
          "source": "src/Control-Monad-Stepwise-Examples.html#BinTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "Alt",
          "package": "stepwise",
          "partial": "Alt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#v:Alt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Examples",
          "name": "Bin",
          "package": "stepwise",
          "signature": "Bin BinTree BinTree",
          "source": "src/Control-Monad-Stepwise-Examples.html#BinTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "Bin",
          "package": "stepwise",
          "partial": "Bin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#v:Bin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Examples",
          "name": "Branch",
          "package": "stepwise",
          "signature": "Branch",
          "source": "src/Control-Monad-Stepwise-Examples.html#Branch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "Branch",
          "package": "stepwise",
          "partial": "Branch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#v:Branch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Examples",
          "name": "Collect",
          "package": "stepwise",
          "signature": "Collect [t]",
          "source": "src/Control-Monad-Stepwise-Examples.html#J",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "Collect",
          "normalized": "Collect[a]",
          "package": "stepwise",
          "partial": "Collect",
          "signature": "Collect[t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#v:Collect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Examples",
          "name": "East",
          "package": "stepwise",
          "signature": "East",
          "source": "src/Control-Monad-Stepwise-Examples.html#Dir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "East",
          "package": "stepwise",
          "partial": "East",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#v:East"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Examples",
          "name": "I",
          "package": "stepwise",
          "signature": "I",
          "source": "src/Control-Monad-Stepwise-Examples.html#I",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "I",
          "package": "stepwise",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#v:I"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Examples",
          "name": "Instrs",
          "package": "stepwise",
          "signature": "Instrs (Path -\u003e Path)",
          "source": "src/Control-Monad-Stepwise-Examples.html#Instrs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "Instrs",
          "normalized": "Instrs(Path-\u003ePath)",
          "package": "stepwise",
          "partial": "Instrs",
          "signature": "Instrs(Path-\u003ePath)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#v:Instrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Examples",
          "name": "J",
          "package": "stepwise",
          "signature": "J",
          "source": "src/Control-Monad-Stepwise-Examples.html#J",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "J",
          "package": "stepwise",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#v:J"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Examples",
          "name": "LC",
          "package": "stepwise",
          "signature": "LC",
          "source": "src/Control-Monad-Stepwise-Examples.html#LabChn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "LC",
          "package": "stepwise",
          "partial": "LC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#v:LC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Examples",
          "name": "LI",
          "package": "stepwise",
          "signature": "LI",
          "source": "src/Control-Monad-Stepwise-Examples.html#LabIn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "LI",
          "package": "stepwise",
          "partial": "LI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#v:LI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Examples",
          "name": "Leaf",
          "package": "stepwise",
          "signature": "Leaf Int",
          "source": "src/Control-Monad-Stepwise-Examples.html#BinTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "Leaf",
          "package": "stepwise",
          "partial": "Leaf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#v:Leaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Examples",
          "name": "North",
          "package": "stepwise",
          "signature": "North",
          "source": "src/Control-Monad-Stepwise-Examples.html#Dir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "North",
          "package": "stepwise",
          "partial": "North",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#v:North"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Examples",
          "name": "South",
          "package": "stepwise",
          "signature": "South",
          "source": "src/Control-Monad-Stepwise-Examples.html#Dir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "South",
          "package": "stepwise",
          "partial": "South",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#v:South"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Examples",
          "name": "Walked",
          "package": "stepwise",
          "signature": "Walked !(Set Pos)",
          "source": "src/Control-Monad-Stepwise-Examples.html#LabSteps",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "Walked",
          "package": "stepwise",
          "partial": "Walked",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#v:Walked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Examples",
          "name": "West",
          "package": "stepwise",
          "signature": "West",
          "source": "src/Control-Monad-Stepwise-Examples.html#Dir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "West",
          "package": "stepwise",
          "partial": "West",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#v:West"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Examples",
          "name": "best",
          "package": "stepwise",
          "signature": "Lab' a -\u003e Lab' a -\u003e Lab' a",
          "source": "src/Control-Monad-Stepwise-Examples.html#best",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "best",
          "normalized": "Lab' a-\u003eLab' a-\u003eLab' a",
          "package": "stepwise",
          "signature": "Lab' a-\u003eLab' a-\u003eLab' a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#v:best"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Examples",
          "name": "branch",
          "package": "stepwise",
          "signature": "Lab a -\u003e Lab (Branch a)",
          "source": "src/Control-Monad-Stepwise-Examples.html#branch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "branch",
          "normalized": "Lab a-\u003eLab(Branch a)",
          "package": "stepwise",
          "signature": "Lab a-\u003eLab(Branch a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#v:branch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Examples",
          "name": "chnPos",
          "package": "stepwise",
          "signature": "Pos",
          "source": "src/Control-Monad-Stepwise-Examples.html#LabChn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "chnPos",
          "package": "stepwise",
          "partial": "Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#v:chnPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Examples",
          "name": "chnTrail",
          "package": "stepwise",
          "signature": "(Set Pos)",
          "source": "src/Control-Monad-Stepwise-Examples.html#LabChn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "chnTrail",
          "package": "stepwise",
          "partial": "Trail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#v:chnTrail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest 8c: Ambiguity and online-ness improvement. If two parallel branches\n   converge on a single path, kill one of the branches.\n   A much more effective approach is to keep a shared trail via an IORef and kill\n   any branch that makes a move to a square already visited. However, the current\n   approach is more interesting: it takes a bit longer until common paths are\n   found.\n\u003c/p\u003e",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "convergeKill",
          "package": "stepwise",
          "signature": "Lab' a -\u003e Lab' a -\u003e Lab (Lab' a, Lab' a)",
          "source": "src/Control-Monad-Stepwise-Examples.html#convergeKill",
          "type": "function"
        },
        "index": {
          "description": "Test Ambiguity and online-ness improvement If two parallel branches converge on single path kill one of the branches much more effective approach is to keep shared trail via an IORef and kill any branch that makes move to square already visited However the current approach is more interesting it takes bit longer until common paths are found",
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "convergeKill",
          "normalized": "Lab' a-\u003eLab' a-\u003eLab(Lab' a,Lab' a)",
          "package": "stepwise",
          "partial": "Kill",
          "signature": "Lab' a-\u003eLab' a-\u003eLab(Lab' a,Lab' a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#v:convergeKill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Examples",
          "name": "embed'",
          "package": "stepwise",
          "signature": "Lab' a -\u003e Lab a",
          "source": "src/Control-Monad-Stepwise-Examples.html#embed%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "embed'",
          "normalized": "Lab' a-\u003eLab a",
          "package": "stepwise",
          "signature": "Lab' a-\u003eLab a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#v:embed-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Examples",
          "name": "exp8Succs",
          "package": "stepwise",
          "signature": "Path",
          "source": "src/Control-Monad-Stepwise-Examples.html#exp8Succs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "exp8Succs",
          "package": "stepwise",
          "partial": "Succs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#v:exp8Succs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Examples",
          "name": "exp9Succs",
          "package": "stepwise",
          "signature": "BinTree",
          "source": "src/Control-Monad-Stepwise-Examples.html#exp9Succs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "exp9Succs",
          "package": "stepwise",
          "partial": "Succs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#v:exp9Succs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Examples",
          "name": "finished",
          "package": "stepwise",
          "signature": "Lab ()",
          "source": "src/Control-Monad-Stepwise-Examples.html#finished",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "finished",
          "normalized": "Lab()",
          "package": "stepwise",
          "signature": "Lab()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#v:finished"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Examples",
          "name": "forward",
          "package": "stepwise",
          "signature": "Dir -\u003e Pos -\u003e Pos",
          "source": "src/Control-Monad-Stepwise-Examples.html#forward",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "forward",
          "normalized": "Dir-\u003ePos-\u003ePos",
          "package": "stepwise",
          "signature": "Dir-\u003ePos-\u003ePos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#v:forward"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Examples",
          "name": "inEnd",
          "package": "stepwise",
          "signature": "Pos",
          "source": "src/Control-Monad-Stepwise-Examples.html#LabIn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "inEnd",
          "package": "stepwise",
          "partial": "End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#v:inEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Examples",
          "name": "inLab",
          "package": "stepwise",
          "signature": "(Set Pos)",
          "source": "src/Control-Monad-Stepwise-Examples.html#LabIn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "inLab",
          "package": "stepwise",
          "partial": "Lab",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#v:inLab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Examples",
          "name": "inMemo",
          "package": "stepwise",
          "signature": "(MemoEnvRef AnyFailure LabSteps Lazy AnyWatcher)",
          "source": "src/Control-Monad-Stepwise-Examples.html#LabIn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "inMemo",
          "package": "stepwise",
          "partial": "Memo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#v:inMemo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExample labyrinth\n\u003c/p\u003e",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "lab1",
          "package": "stepwise",
          "signature": "[Pos]",
          "source": "src/Control-Monad-Stepwise-Examples.html#lab1",
          "type": "function"
        },
        "index": {
          "description": "Example labyrinth",
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "lab1",
          "normalized": "[Pos]",
          "package": "stepwise",
          "signature": "[Pos]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#v:lab1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest 8b: Explicit sharing.\n This example builds on the previous one. Since we immediately fail when a step\n would take us back at a position that we've been before, the paths we traverse\n form a DAG. However, certain paths on this DAG we may traverse more than once.\n In this example, we ensure that we only traverse each path once.\n\u003c/p\u003e\u003cp\u003eNote, however, that it memoizes the outcome (i.e. the Lab' value), produced in\n a context potentially different from ours. The key \u003ca\u003eloc\u003c/a\u003e in this case, however,\n identifies a unique context.\n\u003c/p\u003e",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "memoize",
          "package": "stepwise",
          "signature": "MemoEnvRef AnyFailure LabSteps Lazy AnyWatcher -\u003e Int -\u003e Lab () -\u003e Lab ()",
          "source": "src/Control-Monad-Stepwise-Examples.html#memoize",
          "type": "function"
        },
        "index": {
          "description": "Test Explicit sharing This example builds on the previous one Since we immediately fail when step would take us back at position that we ve been before the paths we traverse form DAG However certain paths on this DAG we may traverse more than once In this example we ensure that we only traverse each path once Note however that it memoizes the outcome i.e the Lab value produced in context potentially different from ours The key loc in this case however identifies unique context",
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "memoize",
          "normalized": "MemoEnvRef AnyFailure LabSteps Lazy AnyWatcher-\u003eInt-\u003eLab()-\u003eLab()",
          "package": "stepwise",
          "signature": "MemoEnvRef AnyFailure LabSteps Lazy AnyWatcher-\u003eInt-\u003eLab()-\u003eLab()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#v:memoize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Examples",
          "name": "merge",
          "package": "stepwise",
          "signature": "Stepwise AnyFailure J Lazy [Bool] () -\u003e Stepwise AnyFailure J Lazy [Bool] () -\u003e Stepwise AnyFailure J Lazy [Bool] ()",
          "source": "src/Control-Monad-Stepwise-Examples.html#merge",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "merge",
          "normalized": "Stepwise AnyFailure J Lazy[Bool]()-\u003eStepwise AnyFailure J Lazy[Bool]()-\u003eStepwise AnyFailure J Lazy[Bool]()",
          "package": "stepwise",
          "signature": "Stepwise AnyFailure J Lazy[Bool]()-\u003eStepwise AnyFailure J Lazy[Bool]()-\u003eStepwise AnyFailure J Lazy[Bool]()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#v:merge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Examples",
          "name": "move",
          "package": "stepwise",
          "signature": "Dir -\u003e Lab ()",
          "source": "src/Control-Monad-Stepwise-Examples.html#move",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "move",
          "normalized": "Dir-\u003eLab()",
          "package": "stepwise",
          "signature": "Dir-\u003eLab()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#v:move"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Examples",
          "name": "pathClose",
          "package": "stepwise",
          "signature": "Instrs -\u003e Path",
          "source": "src/Control-Monad-Stepwise-Examples.html#pathClose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "pathClose",
          "normalized": "Instrs-\u003ePath",
          "package": "stepwise",
          "partial": "Close",
          "signature": "Instrs-\u003ePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#v:pathClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Examples",
          "name": "pathOne",
          "package": "stepwise",
          "signature": "Dir -\u003e Instrs",
          "source": "src/Control-Monad-Stepwise-Examples.html#pathOne",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "pathOne",
          "normalized": "Dir-\u003eInstrs",
          "package": "stepwise",
          "partial": "One",
          "signature": "Dir-\u003eInstrs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#v:pathOne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Examples",
          "name": "pickBranch",
          "package": "stepwise",
          "signature": "Lab' a",
          "source": "src/Control-Monad-Stepwise-Examples.html#Branch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "pickBranch",
          "package": "stepwise",
          "partial": "Branch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#v:pickBranch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Examples",
          "name": "pos2key",
          "package": "stepwise",
          "signature": "Pos -\u003e Int",
          "source": "src/Control-Monad-Stepwise-Examples.html#pos2key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "pos2key",
          "normalized": "Pos-\u003eInt",
          "package": "stepwise",
          "signature": "Pos-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#v:pos2key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Examples",
          "name": "repmin",
          "package": "stepwise",
          "signature": "BinTree -\u003e RepMin BinTree",
          "source": "src/Control-Monad-Stepwise-Examples.html#repmin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "repmin",
          "normalized": "BinTree-\u003eRepMin BinTree",
          "package": "stepwise",
          "signature": "BinTree-\u003eRepMin BinTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#v:repmin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Examples",
          "name": "runAhead",
          "package": "stepwise",
          "signature": "Int -\u003e Lab' a -\u003e Lab (Lab' a)",
          "source": "src/Control-Monad-Stepwise-Examples.html#runAhead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "runAhead",
          "normalized": "Int-\u003eLab' a-\u003eLab(Lab' a)",
          "package": "stepwise",
          "partial": "Ahead",
          "signature": "Int-\u003eLab' a-\u003eLab(Lab' a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#v:runAhead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Examples",
          "name": "search",
          "package": "stepwise",
          "signature": "Lab ()",
          "source": "src/Control-Monad-Stepwise-Examples.html#search",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "search",
          "normalized": "Lab()",
          "package": "stepwise",
          "signature": "Lab()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#v:search"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Examples",
          "name": "semTree",
          "package": "stepwise",
          "signature": "BinTree -\u003e Int -\u003e RepMin (Int, BinTree)",
          "source": "src/Control-Monad-Stepwise-Examples.html#semTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "semTree",
          "normalized": "BinTree-\u003eInt-\u003eRepMin(Int,BinTree)",
          "package": "stepwise",
          "partial": "Tree",
          "signature": "BinTree-\u003eInt-\u003eRepMin(Int,BinTree)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#v:semTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest 1: verify that results are provided when available (online behavior).\n With \u003ccode\u003e\u003ca\u003elazyEval\u003c/a\u003e\u003c/code\u003e this means that the result should be delivered, independent\n of the failure. Failure is just considered to be a bottom-value: if it's never\n needed in the continuation, it is not triggered. This is different in comparison\n to strict evaluation.\n\u003c/p\u003e\u003cp\u003eA short remark about the type signature: the \u003ccode\u003e\u003ca\u003eAnyFailure\u003c/a\u003e\u003c/code\u003e is the type of failures such\n a computation may emit during stepwise evaluation (during lazy evaluation, this is\n simply a bottom value). Both \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eAnyFailure\u003c/a\u003e\u003c/code\u003e are typical examples.\n The \u003ccode\u003e\u003ca\u003eI\u003c/a\u003e\u003c/code\u003e type is the type of the progress reports. The watcher type is given seperately.\n A computation may state how it is evaluated: either \u003ca\u003emay use lazy evaluation\u003c/a\u003e (via the\n type \u003ccode\u003e\u003ca\u003eLazy\u003c/a\u003e\u003c/code\u003e) or \u003ca\u003euse sequential evaluation\u003c/a\u003e (via the type \u003ccode\u003e\u003ca\u003eSequential\u003c/a\u003e\u003c/code\u003e). For most\n computations this is not an issue: either keep it polymorphic (like in this example\n via a universally quantified type variable), or use \u003ccode\u003e\u003ca\u003eLazy\u003c/a\u003e\u003c/code\u003e (the preferred default\n evaluation mode).\n We also do not care about the watcher type for progress reports of type \u003ccode\u003e\u003ca\u003eI\u003c/a\u003e\u003c/code\u003e. Either\n keep the type polymorphic, or simply choose a type like \u003ccode\u003e\u003ca\u003eAnyWatcher\u003c/a\u003e\u003c/code\u003e (or '()').\n Finally, the last type of the value that evaluation of the computation results into.\n The first three parameters to \u003ccode\u003e\u003ca\u003eStepwise\u003c/a\u003e\u003c/code\u003e typically stay the same, the latter three\n may vary from one computation to another.\n\u003c/p\u003e",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "test1",
          "package": "stepwise",
          "signature": "Stepwise AnyFailure I any AnyWatcher Int",
          "source": "src/Control-Monad-Stepwise-Examples.html#test1",
          "type": "function"
        },
        "index": {
          "description": "Test verify that results are provided when available online behavior With lazyEval this means that the result should be delivered independent of the failure Failure is just considered to be bottom-value if it never needed in the continuation it is not triggered This is different in comparison to strict evaluation short remark about the type signature the AnyFailure is the type of failures such computation may emit during stepwise evaluation during lazy evaluation this is simply bottom value Both String and AnyFailure are typical examples The type is the type of the progress reports The watcher type is given seperately computation may state how it is evaluated either may use lazy evaluation via the type Lazy or use sequential evaluation via the type Sequential For most computations this is not an issue either keep it polymorphic like in this example via universally quantified type variable or use Lazy the preferred default evaluation mode We also do not care about the watcher type for progress reports of type Either keep the type polymorphic or simply choose type like AnyWatcher or Finally the last type of the value that evaluation of the computation results into The first three parameters to Stepwise typically stay the same the latter three may vary from one computation to another",
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "test1",
          "package": "stepwise",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#v:test1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest 2: verify that the selection process causes strict evaluation.\n Despite running \u003ccode\u003e\u003ca\u003elazyEval\u003c/a\u003e\u003c/code\u003e on \u003ccode\u003e\u003ca\u003etest2\u003c/a\u003e\u003c/code\u003e, strict evaluation will be done on the\n alternatives until a choice is made. In this case, both alternatives fail, so\n the entire result fails.\n Note that the \u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e-implementation takes the first child that succeeds, or the\n last child that fails (left-biased).\n\u003c/p\u003e",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "test2",
          "package": "stepwise",
          "signature": "Stepwise AnyFailure I any AnyWatcher Int",
          "source": "src/Control-Monad-Stepwise-Examples.html#test2",
          "type": "function"
        },
        "index": {
          "description": "Test verify that the selection process causes strict evaluation Despite running lazyEval on test2 strict evaluation will be done on the alternatives until choice is made In this case both alternatives fail so the entire result fails Note that the implementation takes the first child that succeeds or the last child that fails left-biased",
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "test2",
          "package": "stepwise",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#v:test2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest 3: verify selection of alternatives.\n The non-failure alternative is selected in this case.\n The \u003ccode\u003e\u003ca\u003eLazy\u003c/a\u003e\u003c/code\u003e annotation here we can use \u003ca\u003ebecause we can\u003c/a\u003e. A \u003ccode\u003e\u003ca\u003eLazy\u003c/a\u003e\u003c/code\u003e-annotation is\n in principle never required (you can in such cases keep it polymorphic), but if\n possible, it's a good idea to do so, to make clear which computations should\n preferably be evaluated lazily.\n\u003c/p\u003e",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "test3",
          "package": "stepwise",
          "signature": "Stepwise AnyFailure I Lazy AnyWatcher Int",
          "source": "src/Control-Monad-Stepwise-Examples.html#test3",
          "type": "function"
        },
        "index": {
          "description": "Test verify selection of alternatives The non-failure alternative is selected in this case The Lazy annotation here we can use because we can Lazy annotation is in principle never required you can in such cases keep it polymorphic but if possible it good idea to do so to make clear which computations should preferably be evaluated lazily",
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "test3",
          "package": "stepwise",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#v:test3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Examples",
          "name": "test4",
          "package": "stepwise",
          "signature": "Stepwise AnyFailure I any AnyWatcher Int",
          "source": "src/Control-Monad-Stepwise-Examples.html#test4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "test4",
          "package": "stepwise",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#v:test4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Examples",
          "name": "test5",
          "package": "stepwise",
          "signature": "Stepwise AnyFailure I any AnyWatcher [Int]",
          "source": "src/Control-Monad-Stepwise-Examples.html#test5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "test5",
          "normalized": "Stepwise AnyFailure I a AnyWatcher[Int]",
          "package": "stepwise",
          "signature": "Stepwise AnyFailure I any AnyWatcher[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#v:test5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Examples",
          "name": "test6",
          "package": "stepwise",
          "signature": "Stepwise AnyFailure I Lazy AnyWatcher Int",
          "source": "src/Control-Monad-Stepwise-Examples.html#test6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "test6",
          "package": "stepwise",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#v:test6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe may not make an assumption about the watcher here, hence we keep the watcher type polymorphic.\n\u003c/p\u003e",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "test7a",
          "package": "stepwise",
          "signature": "[Bool] -\u003e Stepwise AnyFailure J Lazy somewatcher [Bool]",
          "source": "src/Control-Monad-Stepwise-Examples.html#test7a",
          "type": "function"
        },
        "index": {
          "description": "We may not make an assumption about the watcher here hence we keep the watcher type polymorphic",
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "test7a",
          "normalized": "[Bool]-\u003eStepwise AnyFailure J Lazy a[Bool]",
          "package": "stepwise",
          "signature": "[Bool]-\u003eStepwise AnyFailure J Lazy somewatcher[Bool]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#v:test7a"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Examples",
          "name": "test7b",
          "package": "stepwise",
          "signature": "Int -\u003e [Bool] -\u003e Stepwise AnyFailure J Lazy [Bool] ()",
          "source": "src/Control-Monad-Stepwise-Examples.html#test7b",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "test7b",
          "normalized": "Int-\u003e[Bool]-\u003eStepwise AnyFailure J Lazy[Bool]()",
          "package": "stepwise",
          "signature": "Int-\u003e[Bool]-\u003eStepwise AnyFailure J Lazy[Bool]()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#v:test7b"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrips steps (thus evaluates sequentially), until it hits a \u003ccode\u003e\u003ca\u003eCollect\u003c/a\u003e\u003c/code\u003e message, which is subsequently\n delivers.\n\u003c/p\u003e",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "test7c",
          "package": "stepwise",
          "signature": "Stepwise AnyFailure J Lazy a [[Bool]]",
          "source": "src/Control-Monad-Stepwise-Examples.html#test7c",
          "type": "function"
        },
        "index": {
          "description": "Strips steps thus evaluates sequentially until it hits Collect message which is subsequently delivers",
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "test7c",
          "normalized": "Stepwise AnyFailure J Lazy a[[Bool]]",
          "package": "stepwise",
          "signature": "Stepwise AnyFailure J Lazy a[[Bool]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#v:test7c"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Examples",
          "name": "test9",
          "package": "stepwise",
          "signature": "RepMin BinTree",
          "source": "src/Control-Monad-Stepwise-Examples.html#test9",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Examples",
          "module": "Control.Monad.Stepwise.Examples",
          "name": "test9",
          "package": "stepwise",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Examples.html#v:test9"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Proofs",
          "name": "Proofs",
          "package": "stepwise",
          "source": "src/Control-Monad-Stepwise-Proofs.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Proofs",
          "module": "Control.Monad.Stepwise.Proofs",
          "name": "Proofs",
          "package": "stepwise",
          "partial": "Proofs",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Proofs.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Unsafe",
          "name": "Unsafe",
          "package": "stepwise",
          "source": "src/Control-Monad-Stepwise-Unsafe.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Unsafe",
          "module": "Control.Monad.Stepwise.Unsafe",
          "name": "Unsafe",
          "package": "stepwise",
          "partial": "Unsafe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Unsafe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Unsafe",
          "name": "ghc7compat",
          "package": "stepwise",
          "signature": "a -\u003e b",
          "source": "src/Control-Monad-Stepwise-Unsafe.html#ghc7compat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Unsafe",
          "module": "Control.Monad.Stepwise.Unsafe",
          "name": "ghc7compat",
          "normalized": "a-\u003eb",
          "package": "stepwise",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Unsafe.html#v:ghc7compat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns the I/O computation when the value is needed.\n   The effects may be duplicated when the value itself is duplicated\n\u003c/p\u003e",
          "module": "Control.Monad.Stepwise.Unsafe",
          "name": "inlinePerformIO",
          "package": "stepwise",
          "signature": "IO a -\u003e a",
          "source": "src/Control-Monad-Stepwise-Unsafe.html#inlinePerformIO",
          "type": "function"
        },
        "index": {
          "description": "Runs the computation when the value is needed The effects may be duplicated when the value itself is duplicated",
          "hierarchy": "Control Monad Stepwise Unsafe",
          "module": "Control.Monad.Stepwise.Unsafe",
          "name": "inlinePerformIO",
          "normalized": "IO a-\u003ea",
          "package": "stepwise",
          "partial": "Perform IO",
          "signature": "IO a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Unsafe.html#v:inlinePerformIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Stepwise.Unsafe",
          "name": "unsafeCoerce",
          "package": "stepwise",
          "signature": "a -\u003e b",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Stepwise Unsafe",
          "module": "Control.Monad.Stepwise.Unsafe",
          "name": "unsafeCoerce",
          "normalized": "a-\u003eb",
          "package": "stepwise",
          "partial": "Coerce",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise-Unsafe.html#v:unsafeCoerce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNote: Some documentation may not be visible in the Haddock documentation;\n         also check the comments directly in the source code.\n\u003c/p\u003e\u003cp\u003eA module for the step-wise evaluation of pure computations, in particular\n   suitable to resolve non-deterministic choices in computations.\n\u003c/p\u003e\u003cp\u003eThis module provides a monadic interface for a special form of pure\n   \u003cem\u003ecoroutines\u003c/em\u003e that, upon disgression of the caller, yield lazily the result\n   of the coroutine, or evaluates strictly until it can yield next\n   callee-determined progress report.\n   Due to the monadic interface, such a coroutine is an ordinary composable\n   monadic haskell function, with the exception that it may be decorated with\n   statements that yield progress reports.\n   Both the result and progress reports are purely functional: given an\n   expression written with this interface, the evaluated value as well as all the\n   progress reports are uniquely determined by the values for the free variables\n   of the expression.\n\u003c/p\u003e\u003cp\u003eGiven such a coroutine \u003ccode\u003em\u003c/code\u003e, we can both refer to its progress reports and its\n   value from another coroutine. Given a coroutine \u003ccode\u003em\u003c/code\u003e, the conventional way to\n   access its value is via a coroutine \u003ccode\u003em \u003e\u003e= f\u003c/code\u003e, where \u003ccode\u003ef\u003c/code\u003e is itself a coroutine\n   that takes \u003ccode\u003em\u003c/code\u003e's value as parameter.\n   The progress reports of \u003ccode\u003em\u003c/code\u003e are incorporated as part of the progress reports of\n   \u003ccode\u003em \u003e\u003e= f\u003c/code\u003e, ordered such that the progress reports of \u003ccode\u003em\u003c/code\u003e are emitted before\n   those of \u003ccode\u003ef\u003c/code\u003e. \n   Alternatively, we can ask \u003ccode\u003em\u003c/code\u003e to yield the next progress report via\n   \u003ccode\u003esmallStep m\u003c/code\u003e. This returns a progress report, and an updated coroutine to be\n   used as continuation. In this case, \u003ccode\u003em\u003c/code\u003e evaluated one step, hence 'step-wise'.\n\u003c/p\u003e\u003cp\u003eStepwise evaluation provides a means to encode non-deterministic choices in\n   a deterministic way via advanced search strategies. For example, with this\n   module, we can define a coroutine that determines its result by making a\n   choice between the results of two other coroutines. For that, we step through\n   the evaluation of both coroutines until we saw sufficient progress reports\n   to make a choice. Meanwhile, we already yield progress reports. Finally, we\n   make a choice by integrating the coroutine in the conventional way.\n   Consequently, the choice is optimized away, and the coroutine that is not\n   selected becomes garbage.\n\u003c/p\u003e\u003cp\u003eWith this approach, we encode a breadth-first evaluation by letting each\n   couroutine emitting steps regularly, and alternate the coroutine to take\n   steps from. We get depth-first behavior by fully\n   stepping through one of the choices first before considering the other\n   choice. Custom strategies are possible by emitting progress reports. For\n   example, a coroutine can emit statistics about the work done so far and\n   predictions of the work still to do to produce the result, which can\n   subsequently be used to direct the evaluation process.\n\u003c/p\u003e\u003cp\u003eA coroutine has the type \u003ccode\u003eBF e i w a\u003c/code\u003e, where \u003ccode\u003ea\u003c/code\u003e is the final result\n   computed by the coroutine. Such a computation may fail, with reasons\n   indicated by the type \u003ccode\u003ee\u003c/code\u003e. Progress reports are of the type \u003ccode\u003ei w\u003c/code\u003e,\n   i.e. parameterized in the type of a \u003cem\u003ewatcher\u003c/em\u003e \u003ccode\u003ew\u003c/code\u003e. A watcher is a\n   type index that allows the progress reports to be different depending\n   on the caller of a coroutine: both the callee and its caller (and the\n   caller's caller, etc.) coroutines must share the same type \u003ccode\u003ei\u003c/code\u003e for\n   progress reports. Specific callee/caller combinations may decide on\n   a common type \u003ccode\u003ew\u003c/code\u003e to communicate special-typed progress information.\n   To emit such a progress report to a caller with a different watcher-type,\n   it has to be \u003cem\u003etranscoded\u003c/em\u003e first via e.g. \u003ccode\u003e\u003ca\u003etranscode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIn some situations, the choice between a coroutine \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e may\n   depend on what happends when we pick i.e. \u003ccode\u003ea\u003c/code\u003e and our caller continues\n   its evaluation. For example, suppose that the continued evaluation is\n   represented by some unknown coroutine \u003ccode\u003er\u003c/code\u003e, and we we define a coroutine\n   \u003ccode\u003ec = choice a b\u003c/code\u003e. This means that the actual evaluation is \u003ccode\u003echoice a b \u003e\u003e= r\u003c/code\u003e.\n   We may want to lift this choice over \u003ccode\u003er\u003c/code\u003e, to \u003ccode\u003echoice' (a \u003e\u003e= r) (b \u003e\u003e= r)\u003c/code\u003e.\n   Since \u003ccode\u003er\u003c/code\u003e is unknown, \u003ccode\u003echoice'\u003c/code\u003e cannot base its choice on the value\n   computed by \u003ccode\u003ea \u003e\u003e= r\u003c/code\u003e or \u003ccode\u003eb \u003e\u003e= r\u003c/code\u003e. Both the type of the result and the\n   watcher type are existential. However, we can inspect if one of\n   the alternatives fails, and inspect progress reports that are independent of\n   the watcher type.\n   We provide this choice-lifting via a special operation call \u003ccode\u003e\u003ca\u003elookahead\u003c/a\u003e\u003c/code\u003e.\n   It provides us with our continuation \u003ccode\u003er\u003c/code\u003e, and we must define the coroutine\n   denoting \u003ccode\u003ec' \u003e\u003e= r\u003c/code\u003e, where \u003ccode\u003ec'\u003c/code\u003e denotes our choice.\n   This lifting comes with a price: requesting a step from a coroutine may\n   require us to provide it a continuation that represents what we are\n   going to do afterwards with it. For example, if we pass \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e, there\n   is no lookahead beyond the evaluation of the coroutine. However, if we\n   pass the continuation obtained through \u003ccode\u003elookahead\u003c/code\u003e, we potentially look\n   ahead through a possible future.\n   The difference between progress report type and watcher type is important\n   here. We cannot make assumptions about the wachter of the continuation:\n   but we do know that we get progress reports of type \u003ccode\u003ei\u003c/code\u003e with unspecified\n   watcher type.\n\u003c/p\u003e\u003cp\u003eWhen we request a step from \u003ccode\u003ee = m \u003e\u003e= f\u003c/code\u003e, we gradually reduce it until\n   it emits the next progress report. It first gradually reduces \u003ccode\u003em\u003c/code\u003e. When\n   it is entirely finished with \u003ccode\u003em\u003c/code\u003e, it continues with \u003ccode\u003ef\u003c/code\u003e, after parametrizing\n   it with the value computed for \u003ccode\u003em\u003c/code\u003e. However, given such a partially reduced\n   \u003ccode\u003ee' = m' \u003e\u003e= f'\u003c/code\u003e, when we ask for the \u003ccode\u003elazyEval e\u003c/code\u003e, we immediately get the\n   result \u003ccode\u003elazyEval (f' (lazyEval m'))\u003c/code\u003e. \u003ccode\u003e\u003ca\u003elazyEval\u003c/a\u003e\u003c/code\u003e discards any progress\n   reports and immediately produces a lazy result. When \u003ccode\u003ef\u003c/code\u003e is not strict in\n   its first argument, this means that a value can already be produced, possibly\n   without even evaluating the remainder of \u003ccode\u003em'\u003c/code\u003e. For example, \u003ccode\u003elazyEval (choice a b)\u003c/code\u003e\n   strictly evaluates \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e as long as it is asking for steps. Once \u003ccode\u003echoice\u003c/code\u003e\n   selects one alternative, lazy evaluation takes over. This allows us to produce\n   \u003cem\u003eonline\u003c/em\u003e results when choices have been resolved.\n\u003c/p\u003e\u003cp\u003eBenchmark results show that a \u003ccode\u003e\u003ca\u003eStepwise\u003c/a\u003e\u003c/code\u003e bind is approximately 10 times\n   slower compared to a bind of the identity monad (independent of the\n   amount of binds). Stepwise evaluation of a bind via \u003ccode\u003e\u003ca\u003estepwiseEval\u003c/a\u003e\u003c/code\u003e is only\n   marginally (e.g. approx 10%) slower compared to \u003ccode\u003e\u003ca\u003elazyEval\u003c/a\u003e\u003c/code\u003e of a bind.\n\u003c/p\u003e\u003cp\u003eA downside of the monadic interface is that it requires code to be written in a\n   sequential way (it enforces monadic style upon the program).\n   For tree traversals, we eliminate this downside with Attribute Grammars.\n   For the class of Ordered Attribute Grammars (non-cyclic tree-traversals fall in this class),\n   the UUAG system has an option to automatically derive code for this library.\n\u003c/p\u003e\u003cp\u003eThis library is a generalization of the Steps-technique presented in\n   `Polish parsers, Step by Step` by R. J. M. Hughes and\n   S. D. Swierstra, and the later work in `Combinator Parsing: A Short Tutorial' by\n   S. D. Swierstra. The key difference is that we do not construct a\n   single function \u003ccode\u003ef :: a -\u003e b\u003c/code\u003e in \u003ccode\u003eApply f\u003c/code\u003e (as mentioned in the latter paper) that represents a continuation of\n   what still needs to be computed. Instead, we explicitly build a stack of\n   all pending right-hand sides \u003ccode\u003eg1..gn\u003c/code\u003e that follow the currently active computation\n   \u003ccode\u003em\u003c/code\u003e in \u003ccode\u003em \u003e\u003e= g1 \u003e\u003e= ... gn\u003c/code\u003e. The functions \u003ccode\u003eg\u003c/code\u003e on the stack thus have the monadic type\n   \u003ccode\u003eg :: a -\u003e BF e i w b\u003c/code\u003e. When we request a new progress report and \u003ccode\u003em\u003c/code\u003e\n   is fully reduced, we reduce the pending-stack: pop off \u003ccode\u003eg1\u003c/code\u003e, parametrize it with\n   the result of \u003ccode\u003em\u003c/code\u003e, then start reducing that value. Consequently, we have no\n   difficulties dealing with the monadic bind in this approach.\n   This representation, however, does not impair laziness. We still manage to map this representation\n   back to a function \u003ccode\u003ef :: a -\u003e b\u003c/code\u003e. This transformation is performed by \u003ccode\u003e\u003ca\u003elazyEval\u003c/a\u003e\u003c/code\u003e.\n   A smaller difference is that our interface to deal with progress reports does not\n   expose the above mentioned stack, which reduces complexity for the programmer.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Stepwise",
          "name": "Stepwise",
          "package": "stepwise",
          "source": "src/Control-Monad-Stepwise.html",
          "type": "module"
        },
        "index": {
          "description": "Note Some documentation may not be visible in the Haddock documentation also check the comments directly in the source code module for the step-wise evaluation of pure computations in particular suitable to resolve non-deterministic choices in computations This module provides monadic interface for special form of pure coroutines that upon disgression of the caller yield lazily the result of the coroutine or evaluates strictly until it can yield next callee-determined progress report Due to the monadic interface such coroutine is an ordinary composable monadic haskell function with the exception that it may be decorated with statements that yield progress reports Both the result and progress reports are purely functional given an expression written with this interface the evaluated value as well as all the progress reports are uniquely determined by the values for the free variables of the expression Given such coroutine we can both refer to its progress reports and its value from another coroutine Given coroutine the conventional way to access its value is via coroutine where is itself coroutine that takes value as parameter The progress reports of are incorporated as part of the progress reports of ordered such that the progress reports of are emitted before those of Alternatively we can ask to yield the next progress report via smallStep This returns progress report and an updated coroutine to be used as continuation In this case evaluated one step hence step-wise Stepwise evaluation provides means to encode non-deterministic choices in deterministic way via advanced search strategies For example with this module we can define coroutine that determines its result by making choice between the results of two other coroutines For that we step through the evaluation of both coroutines until we saw sufficient progress reports to make choice Meanwhile we already yield progress reports Finally we make choice by integrating the coroutine in the conventional way Consequently the choice is optimized away and the coroutine that is not selected becomes garbage With this approach we encode breadth-first evaluation by letting each couroutine emitting steps regularly and alternate the coroutine to take steps from We get depth-first behavior by fully stepping through one of the choices first before considering the other choice Custom strategies are possible by emitting progress reports For example coroutine can emit statistics about the work done so far and predictions of the work still to do to produce the result which can subsequently be used to direct the evaluation process coroutine has the type BF where is the final result computed by the coroutine Such computation may fail with reasons indicated by the type Progress reports are of the type i.e parameterized in the type of watcher watcher is type index that allows the progress reports to be different depending on the caller of coroutine both the callee and its caller and the caller caller etc coroutines must share the same type for progress reports Specific callee caller combinations may decide on common type to communicate special-typed progress information To emit such progress report to caller with different watcher-type it has to be transcoded first via e.g transcode In some situations the choice between coroutine and may depend on what happends when we pick i.e and our caller continues its evaluation For example suppose that the continued evaluation is represented by some unknown coroutine and we we define coroutine choice This means that the actual evaluation is choice We may want to lift this choice over to choice Since is unknown choice cannot base its choice on the value computed by or Both the type of the result and the watcher type are existential However we can inspect if one of the alternatives fails and inspect progress reports that are independent of the watcher type We provide this choice-lifting via special operation call lookahead It provides us with our continuation and we must define the coroutine denoting where denotes our choice This lifting comes with price requesting step from coroutine may require us to provide it continuation that represents what we are going to do afterwards with it For example if we pass return there is no lookahead beyond the evaluation of the coroutine However if we pass the continuation obtained through lookahead we potentially look ahead through possible future The difference between progress report type and watcher type is important here We cannot make assumptions about the wachter of the continuation but we do know that we get progress reports of type with unspecified watcher type When we request step from we gradually reduce it until it emits the next progress report It first gradually reduces When it is entirely finished with it continues with after parametrizing it with the value computed for However given such partially reduced when we ask for the lazyEval we immediately get the result lazyEval lazyEval lazyEval discards any progress reports and immediately produces lazy result When is not strict in its first argument this means that value can already be produced possibly without even evaluating the remainder of For example lazyEval choice strictly evaluates and as long as it is asking for steps Once choice selects one alternative lazy evaluation takes over This allows us to produce online results when choices have been resolved Benchmark results show that Stepwise bind is approximately times slower compared to bind of the identity monad independent of the amount of binds Stepwise evaluation of bind via stepwiseEval is only marginally e.g approx slower compared to lazyEval of bind downside of the monadic interface is that it requires code to be written in sequential way it enforces monadic style upon the program For tree traversals we eliminate this downside with Attribute Grammars For the class of Ordered Attribute Grammars non-cyclic tree-traversals fall in this class the UUAG system has an option to automatically derive code for this library This library is generalization of the Steps-technique presented in Polish parsers Step by Step by Hughes and Swierstra and the later work in Combinator Parsing Short Tutorial by Swierstra The key difference is that we do not construct single function in Apply as mentioned in the latter paper that represents continuation of what still needs to be computed Instead we explicitly build stack of all pending right-hand sides g1..gn that follow the currently active computation in g1 gn The functions on the stack thus have the monadic type BF When we request new progress report and is fully reduced we reduce the pending-stack pop off g1 parametrize it with the result of then start reducing that value Consequently we have no difficulties dealing with the monadic bind in this approach This representation however does not impair laziness We still manage to map this representation back to function This transformation is performed by lazyEval smaller difference is that our interface to deal with progress reports does not expose the above mentioned stack which reduces complexity for the programmer",
          "hierarchy": "Control Monad Stepwise",
          "module": "Control.Monad.Stepwise",
          "name": "Stepwise",
          "package": "stepwise",
          "partial": "Stepwise",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stepwise/docs/Control-Monad-Stepwise.html#"
      }
    }
  ]
]