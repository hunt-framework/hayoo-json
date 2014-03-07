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
        "word": "snaplet-acid-state"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.AcidState",
          "name": "AcidState",
          "package": "snaplet-acid-state",
          "source": "src/Snap-Snaplet-AcidState.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Snap Snaplet AcidState",
          "module": "Snap.Snaplet.AcidState",
          "name": "AcidState",
          "package": "snaplet-acid-state",
          "partial": "Acid State",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-acid-state/docs/Snap-Snaplet-AcidState.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type holding acid-state snaplet data.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.AcidState",
          "name": "Acid",
          "package": "snaplet-acid-state",
          "source": "src/Snap-Snaplet-AcidState.html#Acid",
          "type": "newtype"
        },
        "index": {
          "description": "Data type holding acid-state snaplet data",
          "hierarchy": "Snap Snaplet AcidState",
          "module": "Snap.Snaplet.AcidState",
          "name": "Acid",
          "package": "snaplet-acid-state",
          "partial": "Acid",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-acid-state/docs/Snap-Snaplet-AcidState.html#t:Acid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class standardizing a context that holds an AcidState.\n\u003c/p\u003e\u003cp\u003eYou can minimize boilerplate in your application by adding an instance like\n the following:\n\u003c/p\u003e\u003cpre\u003e data App = App { ... _acid :: Snaplet (Acid MyState) ... }\n instance HasAcid App MyState where\n     getAcidStore = getL (snapletValue . acid)\n\u003c/pre\u003e",
          "module": "Snap.Snaplet.AcidState",
          "name": "HasAcid",
          "package": "snaplet-acid-state",
          "source": "src/Snap-Snaplet-AcidState.html#HasAcid",
          "type": "class"
        },
        "index": {
          "description": "Type class standardizing context that holds an AcidState You can minimize boilerplate in your application by adding an instance like the following data App App acid Snaplet Acid MyState instance HasAcid App MyState where getAcidStore getL snapletValue acid",
          "hierarchy": "Snap Snaplet AcidState",
          "module": "Snap.Snaplet.AcidState",
          "name": "HasAcid",
          "package": "snaplet-acid-state",
          "partial": "Has Acid",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-acid-state/docs/Snap-Snaplet-AcidState.html#t:HasAcid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.AcidState",
          "name": "Acid",
          "package": "snaplet-acid-state",
          "signature": "Acid",
          "source": "src/Snap-Snaplet-AcidState.html#Acid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet AcidState",
          "module": "Snap.Snaplet.AcidState",
          "name": "Acid",
          "package": "snaplet-acid-state",
          "partial": "Acid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-acid-state/docs/Snap-Snaplet-AcidState.html#v:Acid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.AcidState",
          "name": "_acidStore",
          "package": "snaplet-acid-state",
          "signature": "AcidState st",
          "source": "src/Snap-Snaplet-AcidState.html#Acid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Snaplet AcidState",
          "module": "Snap.Snaplet.AcidState",
          "name": "_acidStore",
          "package": "snaplet-acid-state",
          "partial": "Store",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-acid-state/docs/Snap-Snaplet-AcidState.html#v:_acidStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitializer that stores the state in the \"state/[typeOf state]/\"\n directory.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.AcidState",
          "name": "acidInit",
          "package": "snaplet-acid-state",
          "signature": "st-\u003e SnapletInit b (Acid st)",
          "type": "function"
        },
        "index": {
          "description": "Initializer that stores the state in the state typeOf state directory",
          "hierarchy": "Snap Snaplet AcidState",
          "module": "Snap.Snaplet.AcidState",
          "name": "acidInit",
          "normalized": "a-\u003eSnapletInit b(Acid a)",
          "package": "snaplet-acid-state",
          "partial": "Init",
          "signature": "st-\u003eSnapletInit b(Acid st)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-acid-state/docs/Snap-Snaplet-AcidState.html#v:acidInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitializer allowing you to specify the location of the acid-state store.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.AcidState",
          "name": "acidInit'",
          "package": "snaplet-acid-state",
          "signature": "FilePath-\u003e st-\u003e SnapletInit b (Acid st)",
          "type": "function"
        },
        "index": {
          "description": "Initializer allowing you to specify the location of the acid-state store",
          "hierarchy": "Snap Snaplet AcidState",
          "module": "Snap.Snaplet.AcidState",
          "name": "acidInit'",
          "normalized": "FilePath-\u003ea-\u003eSnapletInit b(Acid a)",
          "package": "snaplet-acid-state",
          "partial": "Init'",
          "signature": "FilePath-\u003est-\u003eSnapletInit b(Acid st)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-acid-state/docs/Snap-Snaplet-AcidState.html#v:acidInit-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitializer allowing you to specify the AcidState to use.  This AcidState\n must be initialized manually elsewhere.  It will not be automatically\n closed by the snaplet.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.AcidState",
          "name": "acidInitManual",
          "package": "snaplet-acid-state",
          "signature": "AcidState st-\u003e SnapletInit b (Acid st)",
          "type": "function"
        },
        "index": {
          "description": "Initializer allowing you to specify the AcidState to use This AcidState must be initialized manually elsewhere It will not be automatically closed by the snaplet",
          "hierarchy": "Snap Snaplet AcidState",
          "module": "Snap.Snaplet.AcidState",
          "name": "acidInitManual",
          "normalized": "AcidState a-\u003eSnapletInit b(Acid a)",
          "package": "snaplet-acid-state",
          "partial": "Init Manual",
          "signature": "AcidState st-\u003eSnapletInit b(Acid st)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-acid-state/docs/Snap-Snaplet-AcidState.html#v:acidInitManual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitializer allowing you to open an in-memory store (typically for testing)\n\u003c/p\u003e",
          "module": "Snap.Snaplet.AcidState",
          "name": "acidInitMemory",
          "package": "snaplet-acid-state",
          "signature": "st-\u003e SnapletInit b (Acid st)",
          "type": "function"
        },
        "index": {
          "description": "Initializer allowing you to open an in-memory store typically for testing",
          "hierarchy": "Snap Snaplet AcidState",
          "module": "Snap.Snaplet.AcidState",
          "name": "acidInitMemory",
          "normalized": "a-\u003eSnapletInit b(Acid a)",
          "package": "snaplet-acid-state",
          "partial": "Init Memory",
          "signature": "st-\u003eSnapletInit b(Acid st)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-acid-state/docs/Snap-Snaplet-AcidState.html#v:acidInitMemory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper for acid-state's closeAcidState function that works for\n arbitrary instances of HasAcid.  The state is automatically closed by the\n snaplet's unload action, but this is here in case the user needs more\n control.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.AcidState",
          "name": "closeAcidState",
          "package": "snaplet-acid-state",
          "signature": "m b v ()",
          "source": "src/Snap-Snaplet-AcidState.html#closeAcidState",
          "type": "function"
        },
        "index": {
          "description": "Wrapper for acid-state closeAcidState function that works for arbitrary instances of HasAcid The state is automatically closed by the snaplet unload action but this is here in case the user needs more control",
          "hierarchy": "Snap Snaplet AcidState",
          "module": "Snap.Snaplet.AcidState",
          "name": "closeAcidState",
          "normalized": "a b c()",
          "package": "snaplet-acid-state",
          "partial": "Acid State",
          "signature": "m b v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-acid-state/docs/Snap-Snaplet-AcidState.html#v:closeAcidState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper for acid-state's createCheckpoint function that works for\n arbitrary instances of HasAcid.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.AcidState",
          "name": "createCheckpoint",
          "package": "snaplet-acid-state",
          "signature": "m b v ()",
          "source": "src/Snap-Snaplet-AcidState.html#createCheckpoint",
          "type": "function"
        },
        "index": {
          "description": "Wrapper for acid-state createCheckpoint function that works for arbitrary instances of HasAcid",
          "hierarchy": "Snap Snaplet AcidState",
          "module": "Snap.Snaplet.AcidState",
          "name": "createCheckpoint",
          "normalized": "a b c()",
          "package": "snaplet-acid-state",
          "partial": "Checkpoint",
          "signature": "m b v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-acid-state/docs/Snap-Snaplet-AcidState.html#v:createCheckpoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLower-level function providing direct access to the AcidState data type.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.AcidState",
          "name": "getAcidState",
          "package": "snaplet-acid-state",
          "signature": "m b v (AcidState st)",
          "source": "src/Snap-Snaplet-AcidState.html#getAcidState",
          "type": "function"
        },
        "index": {
          "description": "Lower-level function providing direct access to the AcidState data type",
          "hierarchy": "Snap Snaplet AcidState",
          "module": "Snap.Snaplet.AcidState",
          "name": "getAcidState",
          "package": "snaplet-acid-state",
          "partial": "Acid State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-acid-state/docs/Snap-Snaplet-AcidState.html#v:getAcidState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Snaplet.AcidState",
          "name": "getAcidStore",
          "package": "snaplet-acid-state",
          "signature": "myState -\u003e Acid acidState",
          "source": "src/Snap-Snaplet-AcidState.html#getAcidStore",
          "type": "method"
        },
        "index": {
          "hierarchy": "Snap Snaplet AcidState",
          "module": "Snap.Snaplet.AcidState",
          "name": "getAcidStore",
          "normalized": "a-\u003eAcid b",
          "package": "snaplet-acid-state",
          "partial": "Acid Store",
          "signature": "myState-\u003eAcid acidState",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-acid-state/docs/Snap-Snaplet-AcidState.html#v:getAcidStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCore init functionality common to both exported variants.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.AcidState",
          "name": "initWorker",
          "package": "snaplet-acid-state",
          "signature": "IO (AcidState st) -\u003e Initializer b v (Acid st)",
          "source": "src/Snap-Snaplet-AcidState.html#initWorker",
          "type": "function"
        },
        "index": {
          "description": "Core init functionality common to both exported variants",
          "hierarchy": "Snap Snaplet AcidState",
          "module": "Snap.Snaplet.AcidState",
          "name": "initWorker",
          "normalized": "IO(AcidState a)-\u003eInitializer b c(Acid a)",
          "package": "snaplet-acid-state",
          "partial": "Worker",
          "signature": "IO(AcidState st)-\u003eInitializer b v(Acid st)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-acid-state/docs/Snap-Snaplet-AcidState.html#v:initWorker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper for acid-state's query function that works for arbitrary\n instances of HasAcid.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.AcidState",
          "name": "query",
          "package": "snaplet-acid-state",
          "signature": "event -\u003e m b v (EventResult event)",
          "source": "src/Snap-Snaplet-AcidState.html#query",
          "type": "function"
        },
        "index": {
          "description": "Wrapper for acid-state query function that works for arbitrary instances of HasAcid",
          "hierarchy": "Snap Snaplet AcidState",
          "module": "Snap.Snaplet.AcidState",
          "name": "query",
          "normalized": "a-\u003eb c d(EventResult a)",
          "package": "snaplet-acid-state",
          "signature": "event-\u003em b v(EventResult event)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-acid-state/docs/Snap-Snaplet-AcidState.html#v:query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper for acid-state's update function that works for arbitrary\n instances of HasAcid.\n\u003c/p\u003e",
          "module": "Snap.Snaplet.AcidState",
          "name": "update",
          "package": "snaplet-acid-state",
          "signature": "event -\u003e m b v (EventResult event)",
          "source": "src/Snap-Snaplet-AcidState.html#update",
          "type": "function"
        },
        "index": {
          "description": "Wrapper for acid-state update function that works for arbitrary instances of HasAcid",
          "hierarchy": "Snap Snaplet AcidState",
          "module": "Snap.Snaplet.AcidState",
          "name": "update",
          "normalized": "a-\u003eb c d(EventResult a)",
          "package": "snaplet-acid-state",
          "signature": "event-\u003em b v(EventResult event)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snaplet-acid-state/docs/Snap-Snaplet-AcidState.html#v:update"
      }
    }
  ]
]