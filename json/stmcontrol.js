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
        "word": "stmcontrol"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "STMControl.STMC",
          "name": "STMC",
          "package": "stmcontrol",
          "source": "src/STMControl-STMC.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "STMControl STMC",
          "module": "STMControl.STMC",
          "name": "STMC",
          "package": "stmcontrol",
          "partial": "STMC",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stmcontrol/docs/STMControl-STMC.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "STMControl.STMC",
          "name": "STMC",
          "package": "stmcontrol",
          "source": "src/STMControl-STMC.html#STMC",
          "type": "type"
        },
        "index": {
          "hierarchy": "STMControl STMC",
          "module": "STMControl.STMC",
          "name": "STMC",
          "package": "stmcontrol",
          "partial": "STMC",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/stmcontrol/docs/STMControl-STMC.html#t:STMC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "STMControl.STMC",
          "name": "atomicallyC",
          "package": "stmcontrol",
          "signature": "STMC a b -\u003e IO b",
          "source": "src/STMControl-STMC.html#atomicallyC",
          "type": "function"
        },
        "index": {
          "hierarchy": "STMControl STMC",
          "module": "STMControl.STMC",
          "name": "atomicallyC",
          "normalized": "STMC a b-\u003eIO b",
          "package": "stmcontrol",
          "signature": "STMC a b-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stmcontrol/docs/STMControl-STMC.html#v:atomicallyC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "STMControl.STMC",
          "name": "newTVarC",
          "package": "stmcontrol",
          "signature": "b -\u003e STMC a (TVar b)",
          "source": "src/STMControl-STMC.html#newTVarC",
          "type": "function"
        },
        "index": {
          "hierarchy": "STMControl STMC",
          "module": "STMControl.STMC",
          "name": "newTVarC",
          "normalized": "a-\u003eSTMC b(TVar a)",
          "package": "stmcontrol",
          "partial": "TVar",
          "signature": "b-\u003eSTMC a(TVar b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stmcontrol/docs/STMControl-STMC.html#v:newTVarC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "STMControl.STMC",
          "name": "orElseC",
          "package": "stmcontrol",
          "signature": "STMC a b -\u003e (a -\u003e STMC a b) -\u003e STMC a b",
          "source": "src/STMControl-STMC.html#orElseC",
          "type": "function"
        },
        "index": {
          "hierarchy": "STMControl STMC",
          "module": "STMControl.STMC",
          "name": "orElseC",
          "normalized": "STMC a b-\u003e(a-\u003eSTMC a b)-\u003eSTMC a b",
          "package": "stmcontrol",
          "partial": "Else",
          "signature": "STMC a b-\u003e(a-\u003eSTMC a b)-\u003eSTMC a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stmcontrol/docs/STMControl-STMC.html#v:orElseC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "STMControl.STMC",
          "name": "readTVarC",
          "package": "stmcontrol",
          "signature": "TVar b -\u003e STMC a b",
          "source": "src/STMControl-STMC.html#readTVarC",
          "type": "function"
        },
        "index": {
          "hierarchy": "STMControl STMC",
          "module": "STMControl.STMC",
          "name": "readTVarC",
          "normalized": "TVar a-\u003eSTMC b a",
          "package": "stmcontrol",
          "partial": "TVar",
          "signature": "TVar b-\u003eSTMC a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stmcontrol/docs/STMControl-STMC.html#v:readTVarC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "STMControl.STMC",
          "name": "retryC",
          "package": "stmcontrol",
          "signature": "a -\u003e STMC a b",
          "source": "src/STMControl-STMC.html#retryC",
          "type": "function"
        },
        "index": {
          "hierarchy": "STMControl STMC",
          "module": "STMControl.STMC",
          "name": "retryC",
          "normalized": "a-\u003eSTMC a b",
          "package": "stmcontrol",
          "signature": "a-\u003eSTMC a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stmcontrol/docs/STMControl-STMC.html#v:retryC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "STMControl.STMC",
          "name": "writeTVarC",
          "package": "stmcontrol",
          "signature": "TVar b -\u003e b -\u003e STMC a ()",
          "source": "src/STMControl-STMC.html#writeTVarC",
          "type": "function"
        },
        "index": {
          "hierarchy": "STMControl STMC",
          "module": "STMControl.STMC",
          "name": "writeTVarC",
          "normalized": "TVar a-\u003ea-\u003eSTMC b()",
          "package": "stmcontrol",
          "partial": "TVar",
          "signature": "TVar b-\u003eb-\u003eSTMC a()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stmcontrol/docs/STMControl-STMC.html#v:writeTVarC"
      }
    }
  ]
]