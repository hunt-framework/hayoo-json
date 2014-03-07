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
        "word": "mstate"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMState: A consistent state monad for concurrent applications.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.MState",
          "name": "MState",
          "package": "mstate",
          "source": "src/Control-Concurrent-MState.html",
          "type": "module"
        },
        "index": {
          "description": "MState consistent state monad for concurrent applications",
          "hierarchy": "Control Concurrent MState",
          "module": "Control.Concurrent.MState",
          "name": "MState",
          "package": "mstate",
          "partial": "MState",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mstate/docs/Control-Concurrent-MState.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe MState monad is a state monad for concurrent applications. To create a\n new thread sharing the same (modifiable) state use the \u003ccode\u003e\u003ca\u003eforkM\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Control.Concurrent.MState",
          "name": "MState",
          "package": "mstate",
          "source": "src/Control-Concurrent-MState.html#MState",
          "type": "data"
        },
        "index": {
          "description": "The MState monad is state monad for concurrent applications To create new thread sharing the same modifiable state use the forkM function",
          "hierarchy": "Control Concurrent MState",
          "module": "Control.Concurrent.MState",
          "name": "MState",
          "package": "mstate",
          "partial": "MState",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mstate/docs/Control-Concurrent-MState.html#t:MState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eMState\u003c/a\u003e\u003c/code\u003e application, ignoring the final state. If the first\n argument is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e this function will wait for all threads to finish before\n returning the final result, otherwise it will return the function value as\n soon as its acquired.\n\u003c/p\u003e",
          "module": "Control.Concurrent.MState",
          "name": "evalMState",
          "package": "mstate",
          "signature": "Bool-\u003e MState t m a-\u003e t-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Run MState application ignoring the final state If the first argument is True this function will wait for all threads to finish before returning the final result otherwise it will return the function value as soon as its acquired",
          "hierarchy": "Control Concurrent MState",
          "module": "Control.Concurrent.MState",
          "name": "evalMState",
          "normalized": "Bool-\u003eMState a b c-\u003ea-\u003eb c",
          "package": "mstate",
          "partial": "MState",
          "signature": "Bool-\u003eMState t m a-\u003et-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mstate/docs/Control-Concurrent-MState.html#v:evalMState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eMState\u003c/a\u003e\u003c/code\u003e application, ignoring the function value. This function\n will wait for all threads to finish before returning the final state.\n\u003c/p\u003e",
          "module": "Control.Concurrent.MState",
          "name": "execMState",
          "package": "mstate",
          "signature": "MState t m a-\u003e t-\u003e m t",
          "type": "function"
        },
        "index": {
          "description": "Run MState application ignoring the function value This function will wait for all threads to finish before returning the final state",
          "hierarchy": "Control Concurrent MState",
          "module": "Control.Concurrent.MState",
          "name": "execMState",
          "normalized": "MState a b c-\u003ea-\u003eb a",
          "package": "mstate",
          "partial": "MState",
          "signature": "MState t m a-\u003et-\u003em t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mstate/docs/Control-Concurrent-MState.html#v:execMState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart a new stateful thread.\n\u003c/p\u003e",
          "module": "Control.Concurrent.MState",
          "name": "forkM",
          "package": "mstate",
          "signature": "MState t m () -\u003e MState t m ThreadId",
          "source": "src/Control-Concurrent-MState.html#forkM",
          "type": "function"
        },
        "index": {
          "description": "Start new stateful thread",
          "hierarchy": "Control Concurrent MState",
          "module": "Control.Concurrent.MState",
          "name": "forkM",
          "normalized": "MState a b()-\u003eMState a b ThreadId",
          "package": "mstate",
          "signature": "MState t m()-\u003eMState t m ThreadId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mstate/docs/Control-Concurrent-MState.html#v:forkM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.MState",
          "name": "forkM_",
          "package": "mstate",
          "signature": "MState t m () -\u003e MState t m ()",
          "source": "src/Control-Concurrent-MState.html#forkM_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent MState",
          "module": "Control.Concurrent.MState",
          "name": "forkM_",
          "normalized": "MState a b()-\u003eMState a b()",
          "package": "mstate",
          "signature": "MState t m()-\u003eMState t m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mstate/docs/Control-Concurrent-MState.html#v:forkM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKill all threads in the current \u003ccode\u003e\u003ca\u003eMState\u003c/a\u003e\u003c/code\u003e application.\n\u003c/p\u003e",
          "module": "Control.Concurrent.MState",
          "name": "killMState",
          "package": "mstate",
          "signature": "MState t m ()",
          "source": "src/Control-Concurrent-MState.html#killMState",
          "type": "function"
        },
        "index": {
          "description": "Kill all threads in the current MState application",
          "hierarchy": "Control Concurrent MState",
          "module": "Control.Concurrent.MState",
          "name": "killMState",
          "normalized": "MState a b()",
          "package": "mstate",
          "partial": "MState",
          "signature": "MState t m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mstate/docs/Control-Concurrent-MState.html#v:killMState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a stateful computation from one \u003ccode\u003e(return value, state)\u003c/code\u003e pair to\n another. See \u003ca\u003eControl.Monad.State.Lazy\u003c/a\u003e for more information. Be aware that\n both MStates still share the same state.\n\u003c/p\u003e",
          "module": "Control.Concurrent.MState",
          "name": "mapMState",
          "package": "mstate",
          "signature": "(m (a, t) -\u003e n (b, t)) -\u003e MState t m a -\u003e MState t n b",
          "source": "src/Control-Concurrent-MState.html#mapMState",
          "type": "function"
        },
        "index": {
          "description": "Map stateful computation from one return value state pair to another See Control.Monad.State.Lazy for more information Be aware that both MStates still share the same state",
          "hierarchy": "Control Concurrent MState",
          "module": "Control.Concurrent.MState",
          "name": "mapMState",
          "normalized": "(a(b,c)-\u003ed(e,c))-\u003eMState c a b-\u003eMState c d e",
          "package": "mstate",
          "partial": "MState",
          "signature": "(m(a,t)-\u003en(b,t))-\u003eMState t m a-\u003eMState t n b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mstate/docs/Control-Concurrent-MState.html#v:mapMState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify the \u003ccode\u003e\u003ca\u003eMState\u003c/a\u003e\u003c/code\u003e, block all other threads from accessing the state in\n the meantime (using \u003ccode\u003e\u003ca\u003eatomically\u003c/a\u003e\u003c/code\u003e from the \u003ca\u003eControl.Concurrent.STM\u003c/a\u003e library).\n\u003c/p\u003e",
          "module": "Control.Concurrent.MState",
          "name": "modifyM",
          "package": "mstate",
          "signature": "(t -\u003e (a, t)) -\u003e MState t m a",
          "source": "src/Control-Concurrent-MState.html#modifyM",
          "type": "function"
        },
        "index": {
          "description": "Modify the MState block all other threads from accessing the state in the meantime using atomically from the Control.Concurrent.STM library",
          "hierarchy": "Control Concurrent MState",
          "module": "Control.Concurrent.MState",
          "name": "modifyM",
          "normalized": "(a-\u003e(b,a))-\u003eMState a c b",
          "package": "mstate",
          "signature": "(t-\u003e(a,t))-\u003eMState t m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mstate/docs/Control-Concurrent-MState.html#v:modifyM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.MState",
          "name": "modifyM_",
          "package": "mstate",
          "signature": "(t -\u003e t) -\u003e MState t m ()",
          "source": "src/Control-Concurrent-MState.html#modifyM_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent MState",
          "module": "Control.Concurrent.MState",
          "name": "modifyM_",
          "normalized": "(a-\u003ea)-\u003eMState a b()",
          "package": "mstate",
          "signature": "(t-\u003et)-\u003eMState t m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mstate/docs/Control-Concurrent-MState.html#v:modifyM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eMState\u003c/a\u003e\u003c/code\u003e application, returning both, the function value and the\n final state. Note that this function has to wait for all threads to finish\n before it can return the final state.\n\u003c/p\u003e",
          "module": "Control.Concurrent.MState",
          "name": "runMState",
          "package": "mstate",
          "signature": "MState t m a-\u003e t-\u003e m (a, t)",
          "type": "function"
        },
        "index": {
          "description": "Run MState application returning both the function value and the final state Note that this function has to wait for all threads to finish before it can return the final state",
          "hierarchy": "Control Concurrent MState",
          "module": "Control.Concurrent.MState",
          "name": "runMState",
          "normalized": "MState a b c-\u003ea-\u003eb(c,a)",
          "package": "mstate",
          "partial": "MState",
          "signature": "MState t m a-\u003et-\u003em(a,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mstate/docs/Control-Concurrent-MState.html#v:runMState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWait for a thread to finish\n\u003c/p\u003e",
          "module": "Control.Concurrent.MState",
          "name": "waitM",
          "package": "mstate",
          "signature": "ThreadId -\u003e MState t m ()",
          "source": "src/Control-Concurrent-MState.html#waitM",
          "type": "function"
        },
        "index": {
          "description": "Wait for thread to finish",
          "hierarchy": "Control Concurrent MState",
          "module": "Control.Concurrent.MState",
          "name": "waitM",
          "normalized": "ThreadId-\u003eMState a b()",
          "package": "mstate",
          "signature": "ThreadId-\u003eMState t m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mstate/docs/Control-Concurrent-MState.html#v:waitM"
      }
    }
  ]
]