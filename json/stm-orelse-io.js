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
        "word": "stm-orelse-io"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePerform an IO action, and place its result in an \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e.  See\n also \u003ca\u003eControl.Concurrent.STM.TMVarIO\u003c/a\u003e for a \u003ccode\u003eTMVar\u003c/code\u003e version.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.MVarIO",
          "name": "MVarIO",
          "package": "stm-orelse-io",
          "source": "src/Control-Concurrent-MVarIO.html",
          "type": "module"
        },
        "index": {
          "description": "Perform an IO action and place its result in an MVar See also Control.Concurrent.STM.TMVarIO for TMVar version",
          "hierarchy": "Control Concurrent MVarIO",
          "module": "Control.Concurrent.MVarIO",
          "name": "MVarIO",
          "package": "stm-orelse-io",
          "partial": "MVar IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stm-orelse-io/docs/Control-Concurrent-MVarIO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e action\u003c/code\u003e returns an \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e immediately. The result of\n \u003ccode\u003eaction\u003c/code\u003e will be placed in said \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e. If the \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e is full when\n \u003ccode\u003eaction\u003c/code\u003e completes, the return value is lost (the action does not\n wait for an empty \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Control.Concurrent.MVarIO",
          "name": "run",
          "package": "stm-orelse-io",
          "signature": "IO a -\u003e IO (MVar a)",
          "source": "src/Control-Concurrent-MVarIO.html#run",
          "type": "function"
        },
        "index": {
          "description": "run action returns an MVar immediately The result of action will be placed in said MVar If the MVar is full when action completes the return value is lost the action does not wait for an empty MVar",
          "hierarchy": "Control Concurrent MVarIO",
          "module": "Control.Concurrent.MVarIO",
          "name": "run",
          "normalized": "IO a-\u003eIO(MVar a)",
          "package": "stm-orelse-io",
          "signature": "IO a-\u003eIO(MVar a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-orelse-io/docs/Control-Concurrent-MVarIO.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eChoose between the return value of an IO action and an STM\n operation, depending on which is available first.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.STM.OrElseIO",
          "name": "OrElseIO",
          "package": "stm-orelse-io",
          "source": "src/Control-Concurrent-STM-OrElseIO.html",
          "type": "module"
        },
        "index": {
          "description": "Choose between the return value of an IO action and an STM operation depending on which is available first",
          "hierarchy": "Control Concurrent STM OrElseIO",
          "module": "Control.Concurrent.STM.OrElseIO",
          "name": "OrElseIO",
          "package": "stm-orelse-io",
          "partial": "Or Else IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stm-orelse-io/docs/Control-Concurrent-STM-OrElseIO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003erunOrElse\u003c/a\u003e\u003c/code\u003e io stm\u003c/code\u003e runs the IO action \u003ccode\u003eio\u003c/code\u003e. If its result is\n available when \u003ccode\u003e\u003ccode\u003e\u003ca\u003erunOrElse\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e itself returns, then that value is\n used as the function's return value. If not, the STM operation\n \u003ccode\u003estm\u003c/code\u003e is attempted. Then, whichever of \u003ccode\u003eio\u003c/code\u003e's and \u003ccode\u003estm\u003c/code\u003e's return\n value is then available first is returned from \u003ccode\u003e\u003ccode\u003e\u003ca\u003erunOrElse\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, with\n a preference to that of \u003ccode\u003eio\u003c/code\u003e if both are available. \u003ccode\u003e\u003ccode\u003e\u003ca\u003erunOrElse'\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n reverses this priority.\n\u003c/p\u003e\u003cp\u003eIt can happen that \u003ccode\u003estm\u003c/code\u003e is never attempted. If it is, however, its\n result is used as return value \u003cem\u003eonly\u003c/em\u003e if it is available before\n that of \u003ccode\u003eio\u003c/code\u003e. Note that in that case, a long-running \u003ccode\u003eio\u003c/code\u003e will keep\n running until completed, even if \u003ccode\u003e\u003ccode\u003e\u003ca\u003erunOrElse\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e has already returned\n with the result of \u003ccode\u003estm\u003c/code\u003e. A future version will probably kill off\n the \u003ccode\u003eio\u003c/code\u003e thread if its value is not needed (i.e. if that of \u003ccode\u003estm\u003c/code\u003e\n value is used), but that is \u003cem\u003enot\u003c/em\u003e currently the case.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.OrElseIO",
          "name": "runOrElse",
          "package": "stm-orelse-io",
          "signature": "IO a -\u003e STM b -\u003e IO (Either a b)",
          "source": "src/Control-Concurrent-STM-OrElseIO.html#runOrElse",
          "type": "function"
        },
        "index": {
          "description": "runOrElse io stm runs the IO action io If its result is available when runOrElse itself returns then that value is used as the function return value If not the STM operation stm is attempted Then whichever of io and stm return value is then available first is returned from runOrElse with preference to that of io if both are available runOrElse reverses this priority It can happen that stm is never attempted If it is however its result is used as return value only if it is available before that of io Note that in that case long-running io will keep running until completed even if runOrElse has already returned with the result of stm future version will probably kill off the io thread if its value is not needed i.e if that of stm value is used but that is not currently the case",
          "hierarchy": "Control Concurrent STM OrElseIO",
          "module": "Control.Concurrent.STM.OrElseIO",
          "name": "runOrElse",
          "normalized": "IO a-\u003eSTM b-\u003eIO(Either a b)",
          "package": "stm-orelse-io",
          "partial": "Or Else",
          "signature": "IO a-\u003eSTM b-\u003eIO(Either a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-orelse-io/docs/Control-Concurrent-STM-OrElseIO.html#v:runOrElse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003erunOrElse\u003c/a\u003e\u003c/code\u003e that prefers the STM operation to the IO\n action. In this case, the IO action is \u003cem\u003ealways\u003c/em\u003e run, but its value\n is only used if the return value of the STM operation is not\n available when the function returns.\n\u003c/p\u003e\u003cp\u003eThe same caveat regarding long-running IO operations as for\n \u003ccode\u003e\u003ca\u003erunOrElse\u003c/a\u003e\u003c/code\u003e also applies here.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.OrElseIO",
          "name": "runOrElse'",
          "package": "stm-orelse-io",
          "signature": "STM a -\u003e IO b -\u003e IO (Either a b)",
          "source": "src/Control-Concurrent-STM-OrElseIO.html#runOrElse%27",
          "type": "function"
        },
        "index": {
          "description": "version of runOrElse that prefers the STM operation to the IO action In this case the IO action is always run but its value is only used if the return value of the STM operation is not available when the function returns The same caveat regarding long-running IO operations as for runOrElse also applies here",
          "hierarchy": "Control Concurrent STM OrElseIO",
          "module": "Control.Concurrent.STM.OrElseIO",
          "name": "runOrElse'",
          "normalized": "STM a-\u003eIO b-\u003eIO(Either a b)",
          "package": "stm-orelse-io",
          "partial": "Or Else'",
          "signature": "STM a-\u003eIO b-\u003eIO(Either a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-orelse-io/docs/Control-Concurrent-STM-OrElseIO.html#v:runOrElse-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ccode\u003e\u003ca\u003erunOrElse\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e where the STM operation is to\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e another IO action and\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003etakeTMVar\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e the associated \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e holding\n its return value. The first is preferred to the second.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.OrElseIO",
          "name": "runOrRun",
          "package": "stm-orelse-io",
          "signature": "IO a -\u003e IO b -\u003e IO (Either a b)",
          "source": "src/Control-Concurrent-STM-OrElseIO.html#runOrRun",
          "type": "function"
        },
        "index": {
          "description": "version of runOrElse where the STM operation is to run another IO action and takeTMVar the associated TMVar holding its return value The first is preferred to the second",
          "hierarchy": "Control Concurrent STM OrElseIO",
          "module": "Control.Concurrent.STM.OrElseIO",
          "name": "runOrRun",
          "normalized": "IO a-\u003eIO b-\u003eIO(Either a b)",
          "package": "stm-orelse-io",
          "partial": "Or Run",
          "signature": "IO a-\u003eIO b-\u003eIO(Either a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-orelse-io/docs/Control-Concurrent-STM-OrElseIO.html#v:runOrRun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003erunOrTakeTMVar\u003c/a\u003e\u003c/code\u003e io tm = \u003ccode\u003e\u003ca\u003erunOrElse\u003c/a\u003e\u003c/code\u003e io (\u003ccode\u003e\u003ca\u003etakeTMVar\u003c/a\u003e\u003c/code\u003e tm)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.OrElseIO",
          "name": "runOrTakeTMVar",
          "package": "stm-orelse-io",
          "signature": "IO a -\u003e TMVar b -\u003e IO (Either a b)",
          "source": "src/Control-Concurrent-STM-OrElseIO.html#runOrTakeTMVar",
          "type": "function"
        },
        "index": {
          "description": "runOrTakeTMVar io tm runOrElse io takeTMVar tm",
          "hierarchy": "Control Concurrent STM OrElseIO",
          "module": "Control.Concurrent.STM.OrElseIO",
          "name": "runOrTakeTMVar",
          "normalized": "IO a-\u003eTMVar b-\u003eIO(Either a b)",
          "package": "stm-orelse-io",
          "partial": "Or Take TMVar",
          "signature": "IO a-\u003eTMVar b-\u003eIO(Either a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-orelse-io/docs/Control-Concurrent-STM-OrElseIO.html#v:runOrTakeTMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003erunOrTakeTMVar'\u003c/a\u003e\u003c/code\u003e tm io = \u003ccode\u003e\u003ca\u003erunOrElse'\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003etakeTMVar\u003c/a\u003e\u003c/code\u003e tm) io\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.OrElseIO",
          "name": "runOrTakeTMVar'",
          "package": "stm-orelse-io",
          "signature": "TMVar a -\u003e IO b -\u003e IO (Either a b)",
          "source": "src/Control-Concurrent-STM-OrElseIO.html#runOrTakeTMVar%27",
          "type": "function"
        },
        "index": {
          "description": "runOrTakeTMVar tm io runOrElse takeTMVar tm io",
          "hierarchy": "Control Concurrent STM OrElseIO",
          "module": "Control.Concurrent.STM.OrElseIO",
          "name": "runOrTakeTMVar'",
          "normalized": "TMVar a-\u003eIO b-\u003eIO(Either a b)",
          "package": "stm-orelse-io",
          "partial": "Or Take TMVar'",
          "signature": "TMVar a-\u003eIO b-\u003eIO(Either a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-orelse-io/docs/Control-Concurrent-STM-OrElseIO.html#v:runOrTakeTMVar-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePerform an IO action, and place its result in a \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e.  See\n also \u003ca\u003eControl.Concurrent.MVarIO\u003c/a\u003e for an \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e version.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.STM.TMVarIO",
          "name": "TMVarIO",
          "package": "stm-orelse-io",
          "source": "src/Control-Concurrent-STM-TMVarIO.html",
          "type": "module"
        },
        "index": {
          "description": "Perform an IO action and place its result in TMVar See also Control.Concurrent.MVarIO for an MVar version",
          "hierarchy": "Control Concurrent STM TMVarIO",
          "module": "Control.Concurrent.STM.TMVarIO",
          "name": "TMVarIO",
          "package": "stm-orelse-io",
          "partial": "TMVar IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stm-orelse-io/docs/Control-Concurrent-STM-TMVarIO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e action\u003c/code\u003e returns a \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e immediately. The result of\n \u003ccode\u003eaction\u003c/code\u003e will be placed in said \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e. If the \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e is full\n when \u003ccode\u003eaction\u003c/code\u003e completes, the return value is lost (i.e. we do not\n wait for an empty \u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.TMVarIO",
          "name": "run",
          "package": "stm-orelse-io",
          "signature": "IO a -\u003e IO (TMVar a)",
          "source": "src/Control-Concurrent-STM-TMVarIO.html#run",
          "type": "function"
        },
        "index": {
          "description": "run action returns TMVar immediately The result of action will be placed in said TMVar If the TMVar is full when action completes the return value is lost i.e we do not wait for an empty TMVar",
          "hierarchy": "Control Concurrent STM TMVarIO",
          "module": "Control.Concurrent.STM.TMVarIO",
          "name": "run",
          "normalized": "IO a-\u003eIO(TMVar a)",
          "package": "stm-orelse-io",
          "signature": "IO a-\u003eIO(TMVar a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-orelse-io/docs/Control-Concurrent-STM-TMVarIO.html#v:run"
      }
    }
  ]
]