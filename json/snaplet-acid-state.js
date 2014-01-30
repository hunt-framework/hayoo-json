[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-acid-state/docs/Snap-Snaplet-AcidState.html#",
      "description": {
        "fct-module": "Snap.Snaplet.AcidState",
        "fct-package": "snaplet-acid-state",
        "fct-signature": "module",
        "fct-source": "src/Snap-Snaplet-AcidState.html",
        "fct-type": "module",
        "title": "AcidState"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet AcidState",
        "module": "Snap.Snaplet.AcidState",
        "name": "AcidState",
        "normalized": "",
        "package": "snaplet-acid-state",
        "partial": "Acid State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-acid-state/docs/Snap-Snaplet-AcidState.html#t:Acid",
      "description": {
        "fct-descr": "\u003cp\u003eData type holding acid-state snaplet data.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.AcidState",
        "fct-package": "snaplet-acid-state",
        "fct-signature": "newtype",
        "fct-source": "src/Snap-Snaplet-AcidState.html#Acid",
        "fct-type": "newtype",
        "title": "Acid"
      },
      "index": {
        "description": "Data type holding acid-state snaplet data",
        "hierarchy": "Snap Snaplet AcidState",
        "module": "Snap.Snaplet.AcidState",
        "name": "Acid",
        "normalized": "",
        "package": "snaplet-acid-state",
        "partial": "Acid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-acid-state/docs/Snap-Snaplet-AcidState.html#t:HasAcid",
      "description": {
        "fct-descr": "\u003cp\u003eType class standardizing a context that holds an AcidState.\n\u003c/p\u003e\u003cp\u003eYou can minimize boilerplate in your application by adding an instance like\n the following:\n\u003c/p\u003e\u003cpre\u003e data App = App { ... _acid :: Snaplet (Acid MyState) ... }\n instance HasAcid App MyState where\n     getAcidStore = getL (snapletValue . acid)\n\u003c/pre\u003e",
        "fct-module": "Snap.Snaplet.AcidState",
        "fct-package": "snaplet-acid-state",
        "fct-signature": "class",
        "fct-source": "src/Snap-Snaplet-AcidState.html#HasAcid",
        "fct-type": "class",
        "title": "HasAcid"
      },
      "index": {
        "description": "Type class standardizing context that holds an AcidState You can minimize boilerplate in your application by adding an instance like the following data App App acid Snaplet Acid MyState instance HasAcid App MyState where getAcidStore getL snapletValue acid",
        "hierarchy": "Snap Snaplet AcidState",
        "module": "Snap.Snaplet.AcidState",
        "name": "HasAcid",
        "normalized": "",
        "package": "snaplet-acid-state",
        "partial": "Has Acid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-acid-state/docs/Snap-Snaplet-AcidState.html#v:Acid",
      "description": {
        "fct-module": "Snap.Snaplet.AcidState",
        "fct-package": "snaplet-acid-state",
        "fct-signature": "Acid",
        "fct-source": "src/Snap-Snaplet-AcidState.html#Acid",
        "fct-type": "function",
        "title": "Acid"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet AcidState",
        "module": "Snap.Snaplet.AcidState",
        "name": "Acid",
        "normalized": "",
        "package": "snaplet-acid-state",
        "partial": "Acid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-acid-state/docs/Snap-Snaplet-AcidState.html#v:_acidStore",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Snaplet.AcidState",
        "fct-package": "snaplet-acid-state",
        "fct-signature": "AcidState st",
        "fct-source": "src/Snap-Snaplet-AcidState.html#Acid",
        "fct-type": "function",
        "title": "_acidStore"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet AcidState",
        "module": "Snap.Snaplet.AcidState",
        "name": "_acidStore",
        "normalized": "",
        "package": "snaplet-acid-state",
        "partial": "Store",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-acid-state/docs/Snap-Snaplet-AcidState.html#v:acidInit",
      "description": {
        "fct-descr": "\u003cp\u003eInitializer that stores the state in the \"state/[typeOf state]/\"\n directory.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.AcidState",
        "fct-package": "snaplet-acid-state",
        "fct-signature": "st-\u003e SnapletInit b (Acid st)",
        "fct-type": "function",
        "title": "acidInit"
      },
      "index": {
        "description": "Initializer that stores the state in the state typeOf state directory",
        "hierarchy": "Snap Snaplet AcidState",
        "module": "Snap.Snaplet.AcidState",
        "name": "acidInit",
        "normalized": "a-\u003eSnapletInit b(Acid a)",
        "package": "snaplet-acid-state",
        "partial": "Init",
        "signature": "st-\u003eSnapletInit b(Acid st)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-acid-state/docs/Snap-Snaplet-AcidState.html#v:acidInit-39-",
      "description": {
        "fct-descr": "\u003cp\u003eInitializer allowing you to specify the location of the acid-state store.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.AcidState",
        "fct-package": "snaplet-acid-state",
        "fct-signature": "FilePath-\u003e st-\u003e SnapletInit b (Acid st)",
        "fct-type": "function",
        "title": "acidInit'"
      },
      "index": {
        "description": "Initializer allowing you to specify the location of the acid-state store",
        "hierarchy": "Snap Snaplet AcidState",
        "module": "Snap.Snaplet.AcidState",
        "name": "acidInit'",
        "normalized": "FilePath-\u003ea-\u003eSnapletInit b(Acid a)",
        "package": "snaplet-acid-state",
        "partial": "Init'",
        "signature": "FilePath-\u003est-\u003eSnapletInit b(Acid st)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-acid-state/docs/Snap-Snaplet-AcidState.html#v:acidInitManual",
      "description": {
        "fct-descr": "\u003cp\u003eInitializer allowing you to specify the AcidState to use.  This AcidState\n must be initialized manually elsewhere.  It will not be automatically\n closed by the snaplet.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.AcidState",
        "fct-package": "snaplet-acid-state",
        "fct-signature": "AcidState st-\u003e SnapletInit b (Acid st)",
        "fct-type": "function",
        "title": "acidInitManual"
      },
      "index": {
        "description": "Initializer allowing you to specify the AcidState to use This AcidState must be initialized manually elsewhere It will not be automatically closed by the snaplet",
        "hierarchy": "Snap Snaplet AcidState",
        "module": "Snap.Snaplet.AcidState",
        "name": "acidInitManual",
        "normalized": "AcidState a-\u003eSnapletInit b(Acid a)",
        "package": "snaplet-acid-state",
        "partial": "Init Manual",
        "signature": "AcidState st-\u003eSnapletInit b(Acid st)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-acid-state/docs/Snap-Snaplet-AcidState.html#v:acidInitMemory",
      "description": {
        "fct-descr": "\u003cp\u003eInitializer allowing you to open an in-memory store (typically for testing)\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.AcidState",
        "fct-package": "snaplet-acid-state",
        "fct-signature": "st-\u003e SnapletInit b (Acid st)",
        "fct-type": "function",
        "title": "acidInitMemory"
      },
      "index": {
        "description": "Initializer allowing you to open an in-memory store typically for testing",
        "hierarchy": "Snap Snaplet AcidState",
        "module": "Snap.Snaplet.AcidState",
        "name": "acidInitMemory",
        "normalized": "a-\u003eSnapletInit b(Acid a)",
        "package": "snaplet-acid-state",
        "partial": "Init Memory",
        "signature": "st-\u003eSnapletInit b(Acid st)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-acid-state/docs/Snap-Snaplet-AcidState.html#v:closeAcidState",
      "description": {
        "fct-descr": "\u003cp\u003eWrapper for acid-state's closeAcidState function that works for\n arbitrary instances of HasAcid.  The state is automatically closed by the\n snaplet's unload action, but this is here in case the user needs more\n control.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.AcidState",
        "fct-package": "snaplet-acid-state",
        "fct-signature": "m b v ()",
        "fct-source": "src/Snap-Snaplet-AcidState.html#closeAcidState",
        "fct-type": "function",
        "title": "closeAcidState"
      },
      "index": {
        "description": "Wrapper for acid-state closeAcidState function that works for arbitrary instances of HasAcid The state is automatically closed by the snaplet unload action but this is here in case the user needs more control",
        "hierarchy": "Snap Snaplet AcidState",
        "module": "Snap.Snaplet.AcidState",
        "name": "closeAcidState",
        "normalized": "a b c()",
        "package": "snaplet-acid-state",
        "partial": "Acid State",
        "signature": "m b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-acid-state/docs/Snap-Snaplet-AcidState.html#v:createCheckpoint",
      "description": {
        "fct-descr": "\u003cp\u003eWrapper for acid-state's createCheckpoint function that works for\n arbitrary instances of HasAcid.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.AcidState",
        "fct-package": "snaplet-acid-state",
        "fct-signature": "m b v ()",
        "fct-source": "src/Snap-Snaplet-AcidState.html#createCheckpoint",
        "fct-type": "function",
        "title": "createCheckpoint"
      },
      "index": {
        "description": "Wrapper for acid-state createCheckpoint function that works for arbitrary instances of HasAcid",
        "hierarchy": "Snap Snaplet AcidState",
        "module": "Snap.Snaplet.AcidState",
        "name": "createCheckpoint",
        "normalized": "a b c()",
        "package": "snaplet-acid-state",
        "partial": "Checkpoint",
        "signature": "m b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-acid-state/docs/Snap-Snaplet-AcidState.html#v:getAcidState",
      "description": {
        "fct-descr": "\u003cp\u003eLower-level function providing direct access to the AcidState data type.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.AcidState",
        "fct-package": "snaplet-acid-state",
        "fct-signature": "m b v (AcidState st)",
        "fct-source": "src/Snap-Snaplet-AcidState.html#getAcidState",
        "fct-type": "function",
        "title": "getAcidState"
      },
      "index": {
        "description": "Lower-level function providing direct access to the AcidState data type",
        "hierarchy": "Snap Snaplet AcidState",
        "module": "Snap.Snaplet.AcidState",
        "name": "getAcidState",
        "normalized": "",
        "package": "snaplet-acid-state",
        "partial": "Acid State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-acid-state/docs/Snap-Snaplet-AcidState.html#v:getAcidStore",
      "description": {
        "fct-module": "Snap.Snaplet.AcidState",
        "fct-package": "snaplet-acid-state",
        "fct-signature": "myState -\u003e Acid acidState",
        "fct-source": "src/Snap-Snaplet-AcidState.html#getAcidStore",
        "fct-type": "method",
        "title": "getAcidStore"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Snaplet AcidState",
        "module": "Snap.Snaplet.AcidState",
        "name": "getAcidStore",
        "normalized": "a-\u003eAcid b",
        "package": "snaplet-acid-state",
        "partial": "Acid Store",
        "signature": "myState-\u003eAcid acidState"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-acid-state/docs/Snap-Snaplet-AcidState.html#v:initWorker",
      "description": {
        "fct-descr": "\u003cp\u003eCore init functionality common to both exported variants.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.AcidState",
        "fct-package": "snaplet-acid-state",
        "fct-signature": "IO (AcidState st) -\u003e Initializer b v (Acid st)",
        "fct-source": "src/Snap-Snaplet-AcidState.html#initWorker",
        "fct-type": "function",
        "title": "initWorker"
      },
      "index": {
        "description": "Core init functionality common to both exported variants",
        "hierarchy": "Snap Snaplet AcidState",
        "module": "Snap.Snaplet.AcidState",
        "name": "initWorker",
        "normalized": "IO(AcidState a)-\u003eInitializer b c(Acid a)",
        "package": "snaplet-acid-state",
        "partial": "Worker",
        "signature": "IO(AcidState st)-\u003eInitializer b v(Acid st)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-acid-state/docs/Snap-Snaplet-AcidState.html#v:query",
      "description": {
        "fct-descr": "\u003cp\u003eWrapper for acid-state's query function that works for arbitrary\n instances of HasAcid.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.AcidState",
        "fct-package": "snaplet-acid-state",
        "fct-signature": "event -\u003e m b v (EventResult event)",
        "fct-source": "src/Snap-Snaplet-AcidState.html#query",
        "fct-type": "function",
        "title": "query"
      },
      "index": {
        "description": "Wrapper for acid-state query function that works for arbitrary instances of HasAcid",
        "hierarchy": "Snap Snaplet AcidState",
        "module": "Snap.Snaplet.AcidState",
        "name": "query",
        "normalized": "a-\u003eb c d(EventResult a)",
        "package": "snaplet-acid-state",
        "partial": "",
        "signature": "event-\u003em b v(EventResult event)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-acid-state/docs/Snap-Snaplet-AcidState.html#v:update",
      "description": {
        "fct-descr": "\u003cp\u003eWrapper for acid-state's update function that works for arbitrary\n instances of HasAcid.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.AcidState",
        "fct-package": "snaplet-acid-state",
        "fct-signature": "event -\u003e m b v (EventResult event)",
        "fct-source": "src/Snap-Snaplet-AcidState.html#update",
        "fct-type": "function",
        "title": "update"
      },
      "index": {
        "description": "Wrapper for acid-state update function that works for arbitrary instances of HasAcid",
        "hierarchy": "Snap Snaplet AcidState",
        "module": "Snap.Snaplet.AcidState",
        "name": "update",
        "normalized": "a-\u003eb c d(EventResult a)",
        "package": "snaplet-acid-state",
        "partial": "",
        "signature": "event-\u003em b v(EventResult event)"
      }
    }
  }
]